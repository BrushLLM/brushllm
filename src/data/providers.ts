/**
 * AI providers available through BrushLLM — China's leading labs plus OpenAI
 * (ChatGPT / GPT-Image). Edit this list to match what your sub2api actually serves.
 */
export interface Provider {
  /** slug used in models.ts and as data-provider filter key */
  id: string;
  /** English name */
  name: string;
  /** Chinese name, kept for reference (never rendered on the site) */
  nameZh: string;
  /** one-line blurb */
  blurb: string;
  /** hidden providers are excluded from the marquee and filter chips */
  hidden?: boolean;
}

export const providers: Provider[] = [
  {
    id: 'deepseek',
    name: 'DeepSeek',
    nameZh: '深度求索',
    blurb: 'Open-weight reasoning pioneers behind the V3 and R1 series.',
  },
  {
    id: 'qwen',
    name: 'Alibaba Qwen',
    nameZh: '通义千问',
    blurb: 'Alibaba’s Qwen family — max-tier flagships to tiny open models.',
  },
  {
    id: 'glm',
    name: 'Zhipu GLM',
    nameZh: '智谱',
    blurb: 'Z.ai’s GLM series, strong at coding and agentic workflows.',
  },
  {
    id: 'kimi',
    name: 'Moonshot Kimi',
    nameZh: '月之暗面',
    blurb: 'Kimi K2 — long-context and agentic MoE models.',
  },
  {
    id: 'doubao',
    name: 'ByteDance Doubao',
    nameZh: '字节豆包',
    blurb: 'Volcano Engine’s Seed models, blazing price-performance.',
  },
  {
    id: 'minimax',
    name: 'MiniMax',
    nameZh: '稀宇科技',
    blurb: 'Efficient agentic models like MiniMax-M2.',
  },
  {
    id: 'openai',
    name: 'OpenAI',
    nameZh: 'OpenAI',
    blurb: 'ChatGPT and GPT-Image models, carried alongside the Chinese labs.',
  },
];

/** providers shown in the marquee and as filter chips */
export const visibleProviders = providers.filter((p) => !p.hidden);
