/**
 * AI providers available through BrushLLM — leading labs plus OpenAI.
 * Edit this list to match what your sub2api actually serves.
 */
export interface Provider {
  /** slug used in models.ts and as data-provider filter key */
  id: string;
  /** English name */
  name: string;
  /** original-market name, kept for reference (never rendered on the site) */
  nameZh: string;
  /** one-line blurb */
  blurb: string;
  /** hidden providers are excluded from the marquee and filter chips */
  hidden?: boolean;
}

export const providers: Provider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    nameZh: 'OpenAI',
    blurb: 'ChatGPT and GPT-Image models, alongside the leading open labs.',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    nameZh: '深度求索',
    blurb: 'Open-weight reasoning pioneers behind the V3 and R1 series.',
  },
  {
    id: 'glm',
    name: 'Zhipu GLM',
    nameZh: '智谱',
    blurb: 'Z.ai’s GLM series, strong at coding and agentic workflows.',
  },
  {
    id: 'qwen',
    name: 'Alibaba Qwen',
    nameZh: '通义千问',
    blurb: 'Alibaba’s Qwen family — max-tier flagships to tiny open models.',
  },
  {
    id: 'kimi',
    name: 'Moonshot Kimi',
    nameZh: '月之暗面',
    blurb: 'Kimi K2 — long-context and agentic MoE models.',
  },
  {
    id: 'minimax',
    name: 'MiniMax',
    nameZh: '稀宇科技',
    blurb: 'Efficient agentic models like MiniMax-M2.',
  },
];

/** providers shown in the marquee and as filter chips */
export const visibleProviders = providers.filter((p) => !p.hidden);
