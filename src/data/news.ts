/**
 * ── AI News ────────────────────────────────────────────────────
 * DAILY UPDATE: add new items at the TOP of this array, save, then
 * `git add . && git commit -m "news: <title>" && git push`.
 * Cloudflare Pages rebuilds the site automatically on push.
 *
 * The homepage shows the latest 6 items; /news shows them all.
 */
export interface NewsItem {
  /** ISO date, e.g. 2026-09-20 */
  date: string;
  title: string;
  /** one or two sentences */
  summary: string;
  /** optional external link */
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: '2026-09-20',
    title: 'brushllm.com is live',
    summary:
      'Welcome to BrushLLM — one OpenAI-compatible endpoint for frontier models from ten Chinese AI labs. Grab an API key and start building in under a minute.',
    link: '/docs',
  },
  {
    date: '2026-09-19',
    title: 'Catalog refresh: 26 models across 10 labs',
    summary:
      'DeepSeek-V3.2, Qwen3-Max, GLM-4.6, Kimi K2 and more are all available today, including three free tiers for prototyping.',
    link: '/models',
  },
  {
    date: '2026-09-18',
    title: 'Embeddings are now supported',
    summary:
      'Build search and RAG pipelines with text-embedding-v4 through the same base URL and API key as chat models.',
    link: '/models',
  },
  {
    date: '2026-09-17',
    title: 'Console tip: set quotas per API key',
    summary:
      'You can now cap monthly spend per key from the console — handy when you hand keys out to side projects or teammates.',
    link: '/docs',
  },
  {
    date: '2026-09-16',
    title: 'Pricing page published',
    summary:
      'Indicative per-token prices for every model in the catalog are now listed in one table. Log in to the console for your actual rates.',
    link: '/pricing',
  },
  {
    date: '2026-09-15',
    title: 'Getting started guide expanded',
    summary:
      'The docs now cover authentication, SDK examples in four languages, and a troubleshooting table for common errors.',
    link: '/docs',
  },
];

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
