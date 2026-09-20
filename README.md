# BrushLLM — brushllm.com

Marketing & showcase site for **BrushLLM**, an API gateway to frontier LLMs from
China's leading AI labs. Built with [Astro](https://astro.build) (static output,
light theme only). The login screen, console, and the API itself are served by a
separate sub2api deployment at `api.brushllm.com` — this site only links to it.

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
| `src/config.ts` | **Single source of truth for all external links** — sub2api console URL, login/register paths, and the `https://api.brushllm.com/v1` base URL shown in docs & code samples. Change your sub2api address here only. |
| `src/data/models.ts` | The model catalog (id, provider, context, capabilities, indicative prices). Edit to match what your sub2api actually serves — counts on the homepage update automatically. |
| `src/data/providers.ts` | The ten Chinese AI labs shown on the homepage and used as filter chips on `/models`. |
| `src/data/news.ts` | AI News items — each gets its own page at `/news/<slug>` (see below). |
| `src/pages/` | `/`, `/models`, `/docs`, `/pricing`, `/about`, `/news`, `404`. |
| `og-source.svg` | Source for the social sharing card. `public/og.png` is **generated from it at build time** (`prebuild` → `scripts/gen-og.mjs`) and is not committed. |
| `scripts/gen-og.mjs` | Renders og-source.svg → public/og.png with sharp. |

## Daily AI News update

1. Open `src/data/news.ts` and add the new item **at the top** of the array:
   ```ts
   {
     date: '2026-09-21',
     slug: 'ernie-x2-live',              // url-safe unique id → /news/ernie-x2-live
     title: 'New model: ERNIE X2 is live',
     summary: 'One or two sentences (shown on cards).',
     body: [
       'First paragraph of the story…',
       'Second paragraph…',
     ],
   },
   ```
2. Commit and push:
   ```sh
   git add . && git commit -m "news: ERNIE X2" && git push
   ```
   (Or just ask ZCode to add the item and push via the GitHub MCP.)
3. Cloudflare Pages rebuilds and deploys automatically (~1 min).

The homepage shows the latest 6 cards, `/news` lists them all, and every item
has its own detail page at `/news/<slug>` with prev/next navigation.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (or GitLab).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git →
   pick the repo.
3. Build settings:
   - **Framework preset**: Astro (or build command `npm run build`)
   - **Build output directory**: `dist`
   - **Environment variable**: `NODE_VERSION = 22` (Astro 7 requires Node ≥ 22.12)
4. Add the custom domain: in the Pages project → **Custom domains** →
   `brushllm.com` and `www.brushllm.com`. If the domain's DNS is already on
   Cloudflare, the CNAME records are created for you; otherwise point both
   names CNAME to `<project>.pages.dev`.
5. sub2api lives at `api.brushllm.com` on your own server — that subdomain is
   *not* handled by Pages; keep its DNS record pointing at your server.

## Brand

Pure white canvas — all color lives in wide, flat brush swipes (the signature
mark) and solid-color controls: violet `#7C3AED`, fuchsia `#D946EF`,
orange `#F97316`, cyan `#06B6D4`, rose `#F43F5E`, amber `#F59E0B`.
Swipes wipe in like a fresh pass of paint; no dark mode, no gradient washes.
