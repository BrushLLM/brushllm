import type { Provider } from './providers';

export type Capability =
  | 'chat'
  | 'reasoning'
  | 'tools'
  | 'vision'
  | 'long-context'
  | 'embeddings'
  | 'image';

export const capabilityLabels: Record<Capability, string> = {
  chat: 'Chat',
  reasoning: 'Reasoning',
  tools: 'Tool Calling',
  vision: 'Vision',
  'long-context': 'Long Context',
  embeddings: 'Embeddings',
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
   * Indicative price in USD per 1M tokens (input / output).
   * Placeholder values — align them with the rates configured in your
   * sub2api console. `null` = not applicable (e.g. embeddings have no output price).
   */
  price: { input: number | null; output: number | null };
  /** for image models: indicative price in USD per generated image */
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
    price: { input: 1.25, output: 10.0 },
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
    price: { input: 0.25, output: 2.0 },
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
    price: { input: 0.28, output: 0.42 },
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
    price: { input: 0.55, output: 2.19 },
    bestFor: ["reasoning","coding"],
    featured: true,
  },
  // ── Zhipu GLM ───────────────────────────────────────────────
  {
    id: 'glm-4.6',
    name: 'GLM-4.6',
    provider: 'glm',
    description: 'Z.ai flagship. Strong coding, writing, and agentic planning; 200K context.',
    context: 204800,
    capabilities: ['chat', 'reasoning', 'tools', 'long-context'],
    price: { input: 0.6, output: 2.2 },
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
    price: { input: 0.2, output: 1.1 },
    bestFor: ["everyday-chat","budget"],
  },
  {
    id: 'glm-4.5-flash',
    name: 'GLM-4.5 Flash',
    provider: 'glm',
    description: 'Free tier of the GLM family — great for prototypes and hobby projects.',
    context: 131072,
    capabilities: ['chat', 'tools'],
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
    price: { input: 1.2, output: 6.0 },
    bestFor: ["agents","writing","everyday-chat"],
    featured: true,
  },
  {
    id: 'qwen3-235b-a22b',
    name: 'Qwen3 235B A22B',
    provider: 'qwen',
    description: 'Open-weights MoE flagship with hybrid thinking mode.',
    context: 262144,
    capabilities: ['chat', 'reasoning', 'tools', 'long-context'],
    price: { input: 0.2, output: 0.8 },
    bestFor: ["reasoning"],
  },
  {
    id: 'qwen3-32b',
    name: 'Qwen3 32B',
    provider: 'qwen',
    description: 'Dense open-weights all-rounder with thinking and non-thinking modes.',
    context: 131072,
    capabilities: ['chat', 'reasoning', 'tools'],
    price: { input: 0.06, output: 0.24 },
    bestFor: ["everyday-chat","budget"],
  },
  {
    id: 'qwen3-coder-plus',
    name: 'Qwen3 Coder Plus',
    provider: 'qwen',
    description: 'Code-specialized model built for agentic coding tools and repository-scale edits.',
    context: 262144,
    capabilities: ['chat', 'tools', 'long-context'],
    price: { input: 0.35, output: 1.4 },
    bestFor: ["coding","agents"],
  },
  {
    id: 'qwen-vl-max',
    name: 'Qwen VL Max',
    provider: 'qwen',
    description: 'Vision-language model for image understanding, OCR, and chart reasoning.',
    context: 131072,
    capabilities: ['chat', 'vision'],
    price: { input: 0.28, output: 0.83 },
  },
  {
    id: 'text-embedding-v4',
    name: 'Text Embedding v4',
    provider: 'qwen',
    description: 'Multilingual embedding model for search and RAG pipelines.',
    context: 8192,
    capabilities: ['embeddings'],
    price: { input: 0.05, output: null },
    bestFor: ["rag"],
  },
  // ── Moonshot Kimi ───────────────────────────────────────────
  {
    id: 'kimi-k2-0905',
    name: 'Kimi K2 (0905)',
    provider: 'kimi',
    description: 'Trillion-parameter MoE tuned for agentic tool use and long documents.',
    context: 262144,
    capabilities: ['chat', 'tools', 'long-context'],
    price: { input: 0.6, output: 2.5 },
    bestFor: ["agents","coding"],
    featured: true,
  },
  {
    id: 'kimi-k2-thinking',
    name: 'Kimi K2 Thinking',
    provider: 'kimi',
    description: 'Reasoning variant of K2 with interleaved thinking for multi-step tasks.',
    context: 262144,
    capabilities: ['reasoning', 'tools', 'long-context'],
    price: { input: 0.6, output: 2.5 },
    bestFor: ["reasoning","agents"],
  },
  // ── ByteDance Doubao ────────────────────────────────────────
  {
    id: 'doubao-seed-1-6',
    name: 'Doubao Seed 1.6',
    provider: 'doubao',
    description: 'Volcano Engine’s value flagship with controllable thinking depth.',
    context: 262144,
    capabilities: ['chat', 'reasoning', 'tools', 'long-context'],
    price: { input: 0.04, output: 0.16 },
    bestFor: ["everyday-chat","reasoning","budget"],
  },
  {
    id: 'doubao-seed-1-6-flash',
    name: 'Doubao Seed 1.6 Flash',
    provider: 'doubao',
    description: 'Ultra-cheap fast tier — near-free for high-volume workloads.',
    context: 262144,
    capabilities: ['chat', 'tools'],
    price: { input: 0, output: 0 },
    bestFor: ["budget","everyday-chat"],
  },
  {
    id: 'doubao-seed-1-6-vision',
    name: 'Doubao Seed 1.6 Vision',
    provider: 'doubao',
    description: 'Multimodal Seed model for image understanding at Flash prices.',
    context: 131072,
    capabilities: ['chat', 'vision'],
    price: { input: 0.05, output: 0.15 },
  },
  // ── MiniMax ─────────────────────────────────────────────────
  {
    id: 'MiniMax-M2',
    name: 'MiniMax-M2',
    provider: 'minimax',
    description: 'Efficient agentic MoE — a favorite for coding agents on a budget.',
    context: 204800,
    capabilities: ['chat', 'tools', 'long-context'],
    price: { input: 0.3, output: 1.2 },
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
    imagePrice: 0.11,
    resolution: 'Up to 2K',
    featured: true,
  },
  {
    id: 'jimeng-2.1',
    name: 'Jimeng 2.1',
    provider: 'doubao',
    description: 'ByteDance’s Jimeng text-to-image engine, tuned for posters and design assets.',
    context: null,
    capabilities: ['image'],
    price: { input: null, output: null },
    bestFor: ["images"],
    imagePrice: 0.04,
    resolution: 'Up to 2K',
  },
  {
    id: 'doubao-seedream-4.0',
    name: 'Doubao Seedream 4.0',
    provider: 'doubao',
    description: 'Seedream image generation with bilingual text rendering and photoreal output.',
    context: null,
    capabilities: ['image'],
    price: { input: null, output: null },
    bestFor: ["images"],
    imagePrice: 0.05,
    resolution: 'Up to 4K',
  },
];

export function formatContext(tokens: number | null): string {
  if (tokens === null) return '—';
  if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(tokens % 1_000_000 === 0 ? 0 : 1)}M`;
  return `${Math.round(tokens / 1024)}K`;
}

export function formatPrice(value: number | null | undefined): string {
  if (value === null || value === undefined) return '—';
  if (value === 0) return 'Free';
  return `$${value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)}`;
}
