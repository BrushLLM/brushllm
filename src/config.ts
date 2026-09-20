/**
 * BrushLLM site-wide configuration.
 *
 * This is the single place to change where your sub2api deployment lives.
 * Every "Sign in" / "Get API Key" button and every code example on the site
 * derives from the values below.
 */
export const SITE = {
  name: 'BrushLLM',
  url: 'https://brushllm.com',
  title: 'BrushLLM — Chinese AI, ChatGPT & image models, one API',
  description:
    'China’s frontier models — DeepSeek, Qwen, GLM, Kimi — plus ChatGPT and text-to-image, through one OpenAI-compatible endpoint. A browser-based AI image editor is on the way.',
  contactEmail: 'hello@brushllm.com',
} as const;

/**
 * sub2api deployment (login UI + dashboard + OpenAI-compatible API).
 * Adjust the paths if your sub2api instance serves them differently.
 */
export const LINKS = {
  /** Console root */
  console: 'https://api.brushllm.com',
  /** Login page — header “Sign in” button */
  signIn: 'https://api.brushllm.com/login',
  /** Registration page — “Get API Key” buttons */
  signUp: 'https://api.brushllm.com/register',
  /** OpenAI-compatible base URL shown in docs and code samples */
  apiBase: 'https://api.brushllm.com/v1',
} as const;

/** Main navigation (header + footer). `badge` renders a small pill (e.g. Soon). */
export const NAV = [
  { label: 'Models', href: '/models' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Image Studio', href: '/studio', badge: 'Soon' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '/about' },
] as const;
