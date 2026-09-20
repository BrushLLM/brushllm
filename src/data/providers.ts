/**
 * Chinese AI labs available through BrushLLM.
 * Edit this list to match the providers your sub2api deployment actually serves.
 */
export interface Provider {
  /** slug used in models.ts and as data-provider filter key */
  id: string;
  /** English name */
  name: string;
  /** Chinese name, shown alongside for authenticity */
  nameZh: string;
  /** one-line blurb */
  blurb: string;
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
    id: 'ernie',
    name: 'Baidu ERNIE',
    nameZh: '百度文心',
    blurb: 'Baidu’s ERNIE 4.5 series with hybrid reasoning.',
  },
  {
    id: 'hunyuan',
    name: 'Tencent Hunyuan',
    nameZh: '腾讯混元',
    blurb: 'Tencent’s Hunyuan TurboS and T1 reasoning models.',
  },
  {
    id: 'spark',
    name: 'iFlytek Spark',
    nameZh: '讯飞星火',
    blurb: 'iFlytek’s Spark models with a free tier.',
  },
  {
    id: 'stepfun',
    name: 'StepFun',
    nameZh: '阶跃星辰',
    blurb: 'Multimodal Step series from Shanghai.',
  },
];
