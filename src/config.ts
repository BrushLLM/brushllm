/**
 * BrushLLM site-wide configuration.
 *
 * This is the single place to change where your sub2api deployment lives.
 * Every "Log In" / "Get Started" button and every code example on the site
 * derives from the values below.
 */
export const SITE = {
  name: 'BrushLLM',
  url: 'https://brushllm.com',
  title: 'BrushLLM — Your AI, Without the Complexity',
  description:
    'Access powerful AI models through one API, and create with AI in one studio. BrushLLM is an AI platform for developers and creators.',
  contactEmail: 'hello@brushllm.com',
} as const;

/**
 * sub2api deployment (login UI + dashboard + OpenAI-compatible API).
 * Adjust the paths if your sub2api instance serves them differently.
 */
export const LINKS = {
  /** Console root */
  console: 'https://api.brushllm.com',
  /** Login page — header “Log In” link */
  signIn: 'https://api.brushllm.com/login',
  /** Registration page — “Get Started” buttons and the hero “Get API Key” CTA */
  signUp: 'https://api.brushllm.com/register',
  /** OpenAI-compatible base URL shown in docs and code samples */
  apiBase: 'https://api.brushllm.com/v1',
} as const;

/** Main navigation (header + footer). `badge` renders a small pill (e.g. Soon). */
export const NAV = [
  { label: 'AI Models', href: '/models' },
  { label: 'Apps', href: '/#apps' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '/about' },
] as const;
