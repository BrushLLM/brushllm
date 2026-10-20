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
    'Access powerful AI models through one API, and create with free local-first desktop apps. BrushLLM is an AI platform for developers and creators.',
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
  { label: 'Apps', href: '/apps' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '/about' },
] as const;

/**
 * Supported site languages, in the exact order they must appear in the
 * language switcher. `label` is the language's own name for itself
 * (endonym) and is never translated. `en` is the default locale and keeps
 * unprefixed URLs; every other locale lives under `/{code}/`.
 */
export const LOCALES = [
  { code: 'en', label: 'English', htmlLang: 'en' },
  { code: 'de', label: 'Deutsch', htmlLang: 'de' },
  { code: 'es', label: 'Español', htmlLang: 'es' },
  { code: 'fr', label: 'Français', htmlLang: 'fr' },
  { code: 'pt-BR', label: 'Português (Brasil)', htmlLang: 'pt-BR' },
  { code: 'ja', label: '日本語', htmlLang: 'ja' },
  { code: 'zh-CN', label: '简体中文', htmlLang: 'zh-CN' },
  { code: 'zh-TW', label: '繁體中文', htmlLang: 'zh-TW' },
  { code: 'ko', label: '한국어', htmlLang: 'ko' },
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];

/** Locales that get a URL prefix (everything except the default `en`). */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l.code !== 'en').map((l) => l.code);
