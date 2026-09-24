/**
 * Head-to-head pricing vs OpenRouter — all-in cost.
 *
 * OpenRouter passes through upstream model prices with no markup, but
 * purchasing credits adds a payment fee: 5.5% via Stripe ($0.80 minimum) or
 * 5% via Coinbase. The all-in rate is therefore list × 1.055 (Stripe shown
 * here). BYOK usage beyond the free allowance adds another 5%.
 * BrushLLM's published rates are the final rates — no purchase fees.
 *
 * OpenRouter list prices retrieved from the public models API
 * (openrouter.ai/api/v1/models) on 2026-09-25. Indicative only — verify
 * current rates on both platforms before committing to volume.
 */
export const OR_CREDIT_FEE = 0.055;

export interface CompareRow {
  /** our model id (see models.ts) */
  id: string;
  /** display name */
  name: string;
  /** BrushLLM USD per 1M tokens (input / output) */
  ours: { input: number; output: number };
  /** OpenRouter list price USD per 1M tokens (input / output) */
  openrouter: { input: number; output: number };
}

export const compareRows: CompareRow[] = [
  {
    id: 'deepseek-reasoner',
    name: 'DeepSeek-R1',
    ours: { input: 0.55, output: 2.19 },
    openrouter: { input: 0.7, output: 2.5 },
  },
  {
    id: 'qwen3-32b',
    name: 'Qwen3 32B',
    ours: { input: 0.06, output: 0.24 },
    openrouter: { input: 0.08, output: 0.28 },
  },
  {
    id: 'qwen3-coder-plus',
    name: 'Qwen3 Coder Plus',
    ours: { input: 0.35, output: 1.4 },
    openrouter: { input: 0.65, output: 3.25 },
  },
  {
    id: 'kimi-k2-0905',
    name: 'Kimi K2',
    ours: { input: 0.6, output: 2.5 },
    openrouter: { input: 0.6, output: 2.5 },
  },
  {
    id: 'kimi-k2-thinking',
    name: 'Kimi K2 Thinking',
    ours: { input: 0.6, output: 2.5 },
    openrouter: { input: 0.6, output: 2.5 },
  },
  {
    id: 'MiniMax-M2',
    name: 'MiniMax-M2',
    ours: { input: 0.3, output: 1.2 },
    openrouter: { input: 0.3, output: 1.2 },
  },
  {
    id: 'gpt-5.2',
    name: 'GPT-5.2',
    ours: { input: 1.25, output: 10.0 },
    openrouter: { input: 1.75, output: 14.0 },
  },
];

/** OpenRouter all-in price: list price plus the credit-purchase fee */
export const orAllIn = (listPrice: number) => listPrice * (1 + OR_CREDIT_FEE);

/** whole-percent saving of our rate vs OpenRouter's all-in rate */
export const savePct = (ours: number, orList: number) =>
  Math.round((1 - ours / orAllIn(orList)) * 100);

export const fmt = (v: number) => `$${v % 1 === 0 ? v.toFixed(0) : v.toFixed(2)}`;
