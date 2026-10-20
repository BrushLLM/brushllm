# Multilingual guide

How the BrushLLM site handles its nine languages: where translations live, how to add a new language, and how to update copy without breaking the build.

## Languages and display order

The language switcher must always show, in this exact order:

1. **System / Auto** (follow the browser language — the default/preferred entry)
2. English (`en` — the default locale, unprefixed URLs)
3. Deutsch (`de`)
4. Español (`es`)
5. Français (`fr`)
6. Português (Brasil) (`pt-BR`)
7. 日本語 (`ja`)
8. 简体中文 (`zh-CN`)
9. 繁體中文 (`zh-TW`)
10. 한국어 (`ko`)

The order and the labels are defined once in `src/config.ts` (`LOCALES`). **Never sort this list alphabetically** — the display order is a product decision, not a code concern. Each entry carries its endonym (the language's own name for itself), which is never translated.

## Where things live

| Path | Purpose |
|---|---|
| `astro.config.mjs` | Astro `i18n` block (locales, default, routing) + sitemap hreflang config |
| `src/config.ts` | `LOCALES` (order + labels), `PREFIXED_LOCALES`, `LocaleCode` type |
| `src/i18n/index.ts` | `getDictionary`, `localePath`, `stripLocale`, `localeFromUrl` helpers |
| `src/i18n/ui/en.ts` | **English source dictionary — the shape every locale must match** |
| `src/i18n/ui/<locale>.ts` | One file per language: `de`, `es`, `fr`, `it`, `nl`, `pl`, `pt-BR`, `tr`, `id`, `vi`, `ja`, `zh-CN`, `zh-TW`, `ko` |
| `src/components/pages/*Content.astro` | Locale-aware page bodies shared by English and localized routes |
| `src/pages/[locale]/*.astro` | Dynamic routes generating `/{locale}/…` pages via `getStaticPaths` |
| `src/components/LanguageSwitcher.astro` | The switcher UI (plain links, no-JS friendly) |
| `public/scripts/locale-redirect.js` | First-visit browser-language redirect (English pages only) |

## How routing works

- **English (default) has no prefix**: `/`, `/models`, `/pricing` … — existing links never break.
- **Every other locale is prefixed**: `/de/`, `/zh-CN/models`, `/ja/pricing` …
- Each localized page is generated statically by `src/pages/[locale]/<page>.astro` calling the shared `*Content.astro` component with the locale. **There is exactly one copy of each page's markup** — fix a layout bug in the component and all nine languages get it.
- The 404 page stays single-language (English); hosting serves it for unknown URLs in any locale.

## Dictionary rules

1. **`en.ts` is the source of truth.** Its TypeScript shape (`typeof en` via the `Dictionary` type) types every other locale file. A missing key, an extra key, or a wrong array length in any translation **fails the build** instead of silently rendering a blank.
2. **Placeholders stay as-is.** `{count}`, `{providers}`, `{year}`, `{pct}`, `{apiBase}`, `{link}`, `{license}` … are replaced at render time. Copy them verbatim into your translation.
3. **Never translate:**
   - model ids (`gpt-5.2`, `deepseek-chat` …)
   - URLs and hrefs
   - code samples (cURL/Python/Node/Go blocks)
   - prices and numbers
   - license identifiers (`GPL-3.0`)
   - provider brand names (OpenAI, DeepSeek, Zhipu GLM …)
   - app names (Image Studio, Video Studio, Player — they are product names)
4. **Interpolated links**: strings like `platformIntro` contain `{modelsLink}` / `{appsLink}` markers; the component replaces them with the localized `<a>` tags using the matching link-text keys (`platformModelsLink`, …). Keep the marker and the link-text key in sync.
5. **Client-script strings** (models filter count, CodeTabs copy button) are passed from the dictionary via `data-*` attributes or `define:vars` — never hardcode English in `<script>`.

## Updating existing copy

1. Edit the string in `src/i18n/ui/en.ts` (and the other locale files you can translate).
2. If you add or remove a key, update **every** locale file — the build will list exactly which files/keys are missing.
3. `npm run build` — the TypeScript check plus the 10 × 9 page generation is the safety net.
4. Spot-check the page in the browser (`/`, `/de/`, `/zh-CN/…`) before pushing.

## Adding a new language

1. Add the locale to `astro.config.mjs` → `i18n.locales` **and** to the sitemap `i18n.locales` map.
2. Add an entry to `LOCALES` in `src/config.ts` — its position in the array is its display order in the switcher. Use the BCP-47 code and the endonym label.
3. Copy `src/i18n/ui/en.ts` to `src/i18n/ui/<locale>.ts`, rename the export, and translate the values (not the keys).
4. Register it in the `dictionaries` map in `src/i18n/index.ts`.
5. Add the code to the `codes` arrays in `LanguageSwitcher.astro` and `public/scripts/locale-redirect.js` (both scripts match browser languages against the supported list).
6. `npm run build` — the `[locale]` routes pick the new language up automatically (they iterate `PREFIXED_LOCALES`); hreflang alternates and the sitemap follow `LOCALES`.

## The "System" entry and first-visit redirect

- The switcher's first entry is **System** (label translated per locale, e.g. 跟随系统). Its link points at the unprefixed URL of the current page; a small inline script rewrites the `href` to the visitor's best-matching locale so it always means "this page, in my language". Without JS it degrades to the English URL.
- On first visit (no `localStorage['brushllm-locale']`), English pages run `public/scripts/locale-redirect.js`: it matches `navigator.languages` against the supported locales and redirects to the localized URL. Unsupported languages and no-JS visitors stay on English — static hosting cannot do HTTP-level `Accept-Language` negotiation.
- Clicking any language in the switcher stores the choice in `localStorage['brushllm-locale']`, which permanently disables the automatic redirect. Clearing the key re-enables it.

## SEO behavior

- `<html lang>` is set per page from the locale.
- Every page emits `<link rel="alternate" hreflang>` for all nine locales plus `x-default` (pointing at the English URL).
- Canonical URLs are derived from the actual path, so localized pages canonicalize to themselves.
- `@astrojs/sitemap` receives the same locale map and emits hreflang entries in `sitemap-0.xml`.
- JSON-LD descriptions and OG titles/descriptions use the translated strings; the OG image stays the single brand card (no text dependency).

## Verify before pushing

```sh
npm run build          # 136 pages: 10 English + 14 locales × 9
npm run astro -- dev   # then check /, /de/, /zh-CN/models, /ja/pricing, /it/apps …
```

Checklist: page renders in the target language, `<html lang>` correct, switcher shows the fixed order with the current language highlighted (`aria-current="true"`), nav highlights the right section on prefixed paths, and the sitemap contains the new URLs.
