import type { Provider } from './providers';

export type Capability =
  | 'chat'
  | 'reasoning'
  | 'tools'
  | 'vision'
  | 'long-context'
  | 'image';

export const capabilityLabels: Record<Capability, string> = {
  chat: 'Chat',
  reasoning: 'Reasoning',
  tools: 'Tool Calling',
  vision: 'Vision',
  'long-context': 'Long Context',
  image: 'Text-to-Image',
};

export type BestFor =
  | 'everyday-chat'
  | 'agents'
  | 'coding'
  | 'reasoning'
  | 'writing'
  | 'rag'
  | 'images'
  | 'budget';

export const bestForLabels: Record<BestFor, string> = {
  'everyday-chat': 'Everyday chat',
  agents: 'Agents & tools',
  coding: 'Coding',
  reasoning: 'Deep reasoning',
  writing: 'Writing & content',
  rag: 'Search & RAG',
  images: 'Image creation',
  budget: 'Budget & free',
};

export interface Model {
  /** the exact string you pass as `model` in API requests */
  id: string;
  /** display name */
  name: string;
  /** provider slug, see providers.ts */
  provider: Provider['id'];
  description: string;
  /** context window in tokens; null for image models */
  context: number | null;
  capabilities: Capability[];
  /** use-case tags driving the "Best for" filter */
  bestFor?: BestFor[];
  /**
   * Official list price in USD per 1M tokens (input / output) — the
   * vendor's published rate. Every BrushLLM price below is 50% of this.
   */
  listPrice: { input: number | null; output: number | null };
  /**
   * BrushLLM price in USD per 1M tokens (input / output) — always 50% of
   * listPrice. `null` = not applicable (image models are priced per image).
   */
  price: { input: number | null; output: number | null };
  /** for image models: official list price in USD per generated image */
  listImagePrice?: number;
  /** for image models: BrushLLM price in USD per generated image (50% of list) */
  imagePrice?: number;
  /** for image models: max output resolution, e.g. "Up to 4K" */
  resolution?: string;
  /** featured models get a badge on cards */
  featured?: boolean;
}

export const models: Model[] = [
  // ── OpenAI (ChatGPT) ────────────────────────────────
  // ids and prices are placeholders — align them with your sub2api catalog.
  {
    id: 'gpt-5.2',
    name: 'GPT-5.2',
    provider: 'openai',
    description: 'ChatGPT’s flagship — strong general reasoning, vision and tool use.',
    context: 400000,
    capabilities: ['chat', 'reasoning', 'tools', 'vision'],
    listPrice: { input: 1.75, output: 14.0 },
    price: { input: 0.88, output: 7.0 },
    bestFor: ["agents","reasoning","writing"],
    featured: true,
  },
  {
    id: 'gpt-5.2-mini',
    name: 'GPT-5.2 mini',
    provider: 'openai',
    description: 'Fast, cheap ChatGPT tier for high-volume chat, classification and extraction.',
    context: 400000,
    capabilities: ['chat', 'tools'],
    listPrice: { input: 0.25, output: 2.0 },
    price: { input: 0.13, output: 1.0 },
    bestFor: ["everyday-chat","budget"],
  },
  // ── DeepSeek ────────────────────────────────────────────────
  {
    id: 'deepseek-chat',
    name: 'DeepSeek-V3.2',
    provider: 'deepseek',
    description: 'Flagship non-thinking model. Fast, cheap, and excellent at general chat and tool use.',
    context: 131072,
    capabilities: ['chat', 'tools', 'long-context'],
    listPrice: { input: 0.27, output: 0.4 },
    price: { input: 0.13, output: 0.2 },
    bestFor: ["everyday-chat","agents"],
    featured: true,
  },
  {
    id: 'deepseek-reasoner',
    name: 'DeepSeek-R1',
    provider: 'deepseek',
    description: 'Reasoning model with visible chain-of-thought for math, code, and hard problems.',
    context: 131072,
    capabilities: ['reasoning', 'tools', 'long-context'],
    listPrice: { input: 0.7, output: 2.5 },
    price: { input: 0.35, output: 1.25 },
    bestFor: ["reasoning","coding"],
  },
  // ── Zhipu GLM ───────────────────────────────────────────────
  {
    id: 'glm-4.6',
    name: 'GLM-4.6',
    provider: 'glm',
    description: 'Z.ai flagship. Strong coding, writing, and agentic planning; 200K context.',
    context: 204800,
    capabilities: ['chat', 'reasoning', 'tools', 'long-context'],
    listPrice: { input: 0.6, output: 2.2 },
    price: { input: 0.3, output: 1.1 },
    bestFor: ["coding","writing","agents"],
    featured: true,
  },
  {
    id: 'glm-4.5-air',
    name: 'GLM-4.5 Air',
    provider: 'glm',
    description: 'Lighter GLM tuned for cost-sensitive production traffic.',
    context: 131072,
    capabilities: ['chat', 'tools'],
    listPrice: { input: 0.2, output: 1.1 },
    price: { input: 0.1, output: 0.55 },
    bestFor: ["everyday-chat","budget"],
  },
  {
    id: 'glm-4.5-flash',
    name: 'GLM-4.5 Flash',
    provider: 'glm',
    description: 'Free tier of the GLM family — great for prototypes and hobby projects.',
    context: 131072,
    capabilities: ['chat', 'tools'],
    listPrice: { input: 0, output: 0 },
    price: { input: 0, output: 0 },
    bestFor: ["budget","everyday-chat"],
  },
  // ── Qwen ────────────────────────────────────────────────────
  {
    id: 'qwen3-max',
    name: 'Qwen3-Max',
    provider: 'qwen',
    description: 'Alibaba’s largest flagship. Top-tier quality for demanding agentic and chat workloads.',
    context: 262144,
    capabilities: ['chat', 'tools', 'long-context'],
    listPrice: { input: 1.2, output: 6.0 },
    price: { input: 0.6, output: 3.0 },
    bestFor: ["agents","writing","everyday-chat"],
  },
  {
    id: 'qwen3-235b-a22b',
    name: 'Qwen3 235B A22B',
    provider: 'qwen',
    description: 'Open-weights MoE flagship with hybrid thinking mode.',
    context: 262144,
    capabilities: ['chat', 'reasoning', 'tools', 'long-context'],
    listPrice: { input: 0.2, output: 0.8 },
    price: { input: 0.1, output: 0.4 },
    bestFor: ["reasoning"],
  },
  {
    id: 'qwen3-32b',
    name: 'Qwen3 32B',
    provider: 'qwen',
    description: 'Dense open-weights all-rounder with thinking and non-thinking modes.',
    context: 131072,
    capabilities: ['chat', 'reasoning', 'tools'],
    listPrice: { input: 0.08, output: 0.28 },
    price: { input: 0.04, output: 0.14 },
    bestFor: ["everyday-chat","budget"],
  },
  {
    id: 'qwen3-coder-plus',
    name: 'Qwen3 Coder Plus',
    provider: 'qwen',
    description: 'Code-specialized model built for agentic coding tools and repository-scale edits.',
    context: 262144,
    capabilities: ['chat', 'tools', 'long-context'],
    listPrice: { input: 0.65, output: 3.25 },
    price: { input: 0.33, output: 1.63 },
    bestFor: ["coding","agents"],
  },
  {
    id: 'qwen-vl-max',
    name: 'Qwen VL Max',
    provider: 'qwen',
    description: 'Vision-language model for image understanding, OCR, and chart reasoning.',
    context: 131072,
    capabilities: ['chat', 'vision'],
    listPrice: { input: 0.28, output: 0.83 },
    price: { input: 0.14, output: 0.42 },
  },
  // ── Moonshot Kimi ───────────────────────────────────────────
  {
    id: 'kimi-k2-0905',
    name: 'Kimi K2 (0905)',
    provider: 'kimi',
    description: 'Trillion-parameter MoE tuned for agentic tool use and long documents.',
    context: 262144,
    capabilities: ['chat', 'tools', 'long-context'],
    listPrice: { input: 0.6, output: 2.5 },
    price: { input: 0.3, output: 1.25 },
    bestFor: ["agents","coding"],
  },
  {
    id: 'kimi-k2-thinking',
    name: 'Kimi K2 Thinking',
    provider: 'kimi',
    description: 'Reasoning variant of K2 with interleaved thinking for multi-step tasks.',
    context: 262144,
    capabilities: ['reasoning', 'tools', 'long-context'],
    listPrice: { input: 0.6, output: 2.5 },
    price: { input: 0.3, output: 1.25 },
    bestFor: ["reasoning","agents"],
  },
  // ── MiniMax ─────────────────────────────────────────────────
  {
    id: 'MiniMax-M2',
    name: 'MiniMax-M2',
    provider: 'minimax',
    description: 'Efficient agentic MoE — a favorite for coding agents on a budget.',
    context: 204800,
    capabilities: ['chat', 'tools', 'long-context'],
    listPrice: { input: 0.3, output: 1.2 },
    price: { input: 0.15, output: 0.6 },
    bestFor: ["coding","agents","budget"],
  },
  // ── Image generation ────────────────────────────────────────
  // ids and prices are placeholders — align them with your sub2api catalog.
  {
    id: 'gpt-image-2',
    name: 'GPT-Image-2',
    provider: 'openai',
    description: 'OpenAI’s image generation model — prompt-to-image with strong instruction following.',
    context: null,
    capabilities: ['image'],
    price: { input: null, output: null },
    bestFor: ["images"],
    listImagePrice: 0.11,
    imagePrice: 0.06,
    resolution: 'Up to 2K',
    featured: true,
  },
];

export function formatContext(tokens: number | null): string {
  if (tokens === null) return '—';
  if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(tokens % 1_000_000 === 0 ? 0 : 1)}M`;
  return `${Math.round(tokens / 1024)}K`;
}

export function formatPrice(value: number | null | undefined, freeLabel = 'Free'): string {
  if (value === null || value === undefined) return '—';
  if (value === 0) return freeLabel;
  return `$${value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)}`;
}
