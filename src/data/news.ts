/**
 * ── AI News ────────────────────────────────────────────────────
 * DAILY UPDATE: add new items at the TOP of this array, save, then
 * `git add . && git commit -m "news: <title>" && git push`
 * (or ask ZCode to push for you via the GitHub MCP).
 * Cloudflare Pages rebuilds the site automatically on push.
 *
 * Each item gets its own page at /news/<slug> — the homepage shows the
 * latest 6, /news lists them all, and both link into the detail pages.
 */
export interface NewsItem {
  /** ISO date, e.g. 2026-09-20 */
  date: string;
  /** url-safe unique id, used for /news/<slug> */
  slug: string;
  title: string;
  /** one or two sentences, shown on cards */
  summary: string;
  /** full story paragraphs, shown on the detail page */
  body: string[];
}

export const news: NewsItem[] = [
  {
    date: '2026-09-20',
    slug: 'brushllm-is-live',
    title: 'brushllm.com is live',
    summary:
      'Welcome to BrushLLM — one OpenAI-compatible endpoint for frontier models from ten Chinese AI labs. Grab an API key and start building in under a minute.',
    body: [
      'Today we’re opening the doors. BrushLLM is a single OpenAI-compatible endpoint that carries frontier models from ten Chinese AI labs — DeepSeek, Alibaba Qwen, Zhipu GLM, Moonshot Kimi, ByteDance Doubao, MiniMax, Baidu ERNIE, Tencent Hunyuan, iFlytek Spark and StepFun — to developers anywhere in the world.',
      'The idea is simple: China’s best models deserve a front door that everyone can walk through. No mainland accounts, no local cards, no per-lab billing — one key, one base URL, published per-token prices in USD.',
      'Head to the docs for a thirty-second quickstart, or browse the catalog to see all 24 launch models, including three free tiers. This news page is where every release and platform update will land — check back daily.',
    ],
  },
  {
    date: '2026-09-19',
    slug: 'catalog-refresh-26-models',
    title: 'Catalog refresh: 26 models across 10 labs',
    summary:
      'DeepSeek-V3.2, Qwen3-Max, GLM-4.6, Kimi K2 and more are all available today, including three free tiers for prototyping.',
    body: [
      'Ahead of launch we swept the catalog and finalized the launch lineup: 26 models across all ten labs, from trillion-parameter flagships to free flash tiers.',
      'Highlights include DeepSeek-V3.2 for general chat and tools at $0.28 per 1M input tokens, GLM-4.6 for coding and agentic workflows, Qwen3-Max for maximum quality, and Kimi K2 for long-document agents.',
      'If you’re prototyping on a zero budget, GLM-4.5 Flash, Doubao Seed 1.6 Flash and Spark Lite are completely free. Full context windows, capabilities and indicative prices are on the Models page.',
    ],
  },
  {
    date: '2026-09-18',
    slug: 'embeddings-supported',
    title: 'Embeddings are now supported',
    summary:
      'Build search and RAG pipelines with text-embedding-v4 through the same base URL and API key as chat models.',
    body: [
      'BrushLLM now serves embeddings alongside chat models. Text Embedding v4 is a multilingual embedding model that fits search and RAG pipelines, callable through the same base URL and API key as every other model.',
      'The request shape follows the OpenAI embeddings API exactly: POST /v1/embeddings with your model id and input. Check the Models page for the current price per 1M tokens.',
      'This unlocks the other half of the AI stack — retrieval — without leaving the gateway. More embedding sizes and languages are on the roadmap.',
    ],
  },
  {
    date: '2026-09-17',
    slug: 'console-key-quotas',
    title: 'Console tip: set quotas per API key',
    summary:
      'You can now cap monthly spend per key from the console — handy when you hand keys out to side projects or teammates.',
    body: [
      'A quick console feature worth knowing about: every API key can carry its own monthly spend quota. When a key hits its cap, requests fail fast with a clear 429 instead of quietly burning your balance.',
      'This is the safest way to hand keys to side projects, coding agents, or teammates — set a small quota first, raise it when trust is earned.',
      'Quotas, usage history and key rotation all live in the console. Log in and check the Keys section to try it.',
    ],
  },
  {
    date: '2026-09-16',
    slug: 'pricing-page-published',
    title: 'Pricing page published',
    summary:
      'Indicative per-token prices for every model in the catalog are now listed in one table. Log in to the console for your actual rates.',
    body: [
      'Every model in the catalog now has a published indicative price — USD per 1M input and output tokens — collected in one table on the Pricing page.',
      'The table also flags the free tiers, so you can prototype at zero cost before committing to a top-up. Your exact rates and live balance are always visible in the console.',
      'Prices track the upstream labs’ list prices; when a lab cuts prices, the catalog follows. Significant changes will be announced here.',
    ],
  },
  {
    date: '2026-09-15',
    slug: 'getting-started-expanded',
    title: 'Getting started guide expanded',
    summary:
      'The docs now cover authentication, SDK examples in four languages, and a troubleshooting table for common errors.',
    body: [
      'The Quickstart is now a complete on-ramp: how to create your first key, where to point your SDK’s base URL, and copy-paste examples for cURL, Python, Node.js and Go — including streaming.',
      'A model id reference table lists every catalog id with its context window, so you can wire up model switchers without guesswork.',
      'For the moments when things don’t work, a new errors table maps every status code to a cause and a fix. More guides — tool calling, structured output, agents — are coming.',
    ],
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
