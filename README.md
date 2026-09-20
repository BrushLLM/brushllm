# BrushLLM — brushllm.com

Marketing & showcase site for **BrushLLM** — an AI platform with two core
products: **AI Model Services** (one API for the world's leading models) and
**Image Studio**, a browser-based AI image editor (coming soon). Built with
[Astro](https://astro.build) (static output, light theme only). The login
screen, console, and the API itself are served by a separate sub2api
deployment at `api.brushllm.com` — this site only links to it.

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
| `src/data/models.ts` | The model catalog (id, provider, context, capabilities, indicative prices; `imagePrice`/`resolution` for text-to-image models). Edit to match what your sub2api actually serves — counts on the homepage update automatically. |
| `src/data/providers.ts` | The providers shown on the homepage marquee and used as filter chips on `/models` — the world's leading labs plus OpenAI. |
| `src/pages/` | `/`, `/models`, `/docs`, `/pricing`, `/studio` (Image Studio, coming soon), `/about`, `404`. |
| `og-source.svg` | Source for the social sharing card. `public/og.png` is **generated from it at build time** (`prebuild` → `scripts/gen-og.mjs`) and is not committed. |
| `scripts/gen-og.mjs` | Renders og-source.svg → public/og.png with sharp. |
| `scripts/gen-brand-assets.mjs` | Rasterizes `src/assets/brush-mark.svg` into PNG favicon fallbacks at `predev`/`prebuild` (Safari can't use SVG favicons). The GLM mark is an inline svg (`src/assets/brands/glm.svg`), committed as text. |

## Updating the catalog

1. Edit `src/data/models.ts` (and `src/data/providers.ts` when a lab is added
   or removed). Chat models use `price` in USD per 1M tokens; text-to-image
   models use `capabilities: ['image']` with `imagePrice` (USD per generated
   image) and `resolution`.
2. Commit and push (or ask ZCode to push via the GitHub MCP):
   ```sh
   git add . && git commit -m "catalog: <change>" && git push
   ```
3. Cloudflare Pages rebuilds and deploys automatically (~1 min).

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
Provider logos are official marks: vector SVGs from simple-icons plus the GLM
raster mark above.
