# Website development & deployment

Technical documentation for the BrushLLM marketing site (this repository).
For the brand overview, see the [repository README](../README.md).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site locally
```

## Where things live

| Path | What it controls |
| --- | --- |
| `src/config.ts` | **Single source of truth for all external links** — console URL, login/register paths, and the `https://api.brushllm.com/v1` base URL shown in docs & code samples. |
| `src/data/models.ts` | The model catalog (id, provider, context, capabilities, indicative prices; `imagePrice`/`resolution` for text-to-image models). Counts on the homepage update automatically. |
| `src/assets/logo.png` | The brand logo (1024px palette PNG). Favicon PNGs are generated from it at build; the og card composites it. |
| `src/data/apps.ts` | The three desktop apps — taglines, platforms, GitHub repo & Releases links, card highlights. |
| `src/data/compare.ts` | Price-check table: BrushLLM final rates vs OpenRouter all-in cost (list + 5.5% credit-purchase fee). |
| `src/data/providers.ts` | Providers shown on the homepage marquee and as filter chips on `/models`. |
| `src/i18n/` | 9-locale dictionaries (`ui/*.ts`) + helpers. English is the source of truth; its shape types every other file. See `docs/multilingual.md`. |
| `src/pages/` + `src/pages/[locale]/` | `/`, `/models`, `/docs`, `/pricing`, `/apps`, `/studio` + `/video-studio` + `/player`, `/about`, `404`. |
| `og-source.svg` | Source for the social sharing card. `public/og.png` is generated from it at build time (`prebuild` → `scripts/gen-og.mjs`) and is not committed. |
| `scripts/` | `gen-brand-assets.mjs` (favicon PNGs from logo.png), `gen-og.mjs` (og card render + logo composite). |

## Updating the catalog

1. Edit `src/data/models.ts` (and `src/data/providers.ts` when a lab is added
   or removed). Chat models use `price` in USD per 1M tokens; text-to-image
   models use `capabilities: ['image']` with `imagePrice` and `resolution`.
2. Commit and push:
   ```sh
   git add . && git commit -m "catalog: <change>" && git push
   ```
3. Cloudflare Pages rebuilds and deploys automatically (~1 min).

## Deploy to Cloudflare Pages

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git →
   pick this repository.
2. Build settings:
   - **Framework preset**: Astro (or build command `npm run build`)
   - **Build output directory**: `dist`
   - **Environment variable**: `NODE_VERSION = 22` (Astro 7 requires Node ≥ 22.12)
3. Add the custom domain: in the Pages project → **Custom domains** →
   `brushllm.com` and `www.brushllm.com`.
4. The API console lives at `api.brushllm.com` on its own server — that
   subdomain is *not* handled by Pages; keep its DNS record pointing at the
   server.

## Brand

White canvas; color lives in the flat brush swipes (violet `#893CED`,
lemon `#F4EA2A`, mint `#2AEFC8`) and solid-color controls. Radius/shadow
follow the semantic tokens in `src/styles/global.css`
(`rounded-chip/control/card/panel`, `shadow-soft/card/lift/brand`).
