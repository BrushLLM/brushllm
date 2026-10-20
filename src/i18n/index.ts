/**
 * i18n helpers.
 *
 * The English dictionary in `./ui/en.ts` is the source of truth: its shape
 * (via `typeof`) types every other locale file, so a missing or extra key in
 * a translation fails the build instead of silently rendering a blank.
 */
import { LOCALES, PREFIXED_LOCALES, type LocaleCode } from '../config';
import en from './ui/en';

export type Dictionary = typeof en;

const dictionaries: Record<LocaleCode, () => Promise<{ default: Dictionary }>> = {
  en: () => import('./ui/en'),
  de: () => import('./ui/de'),
  es: () => import('./ui/es'),
  fr: () => import('./ui/fr'),
  'pt-BR': () => import('./ui/pt-BR'),
  ja: () => import('./ui/ja'),
  'zh-CN': () => import('./ui/zh-CN'),
  'zh-TW': () => import('./ui/zh-TW'),
  ko: () => import('./ui/ko'),
};

/** Synchronous dictionary lookup — all locale files are bundled statically. */
const loaded = new Map<LocaleCode, Dictionary>();

export async function getDictionary(locale: LocaleCode): Promise<Dictionary> {
  const cached = loaded.get(locale);
  if (cached) return cached;
  const mod = await dictionaries[locale]();
  loaded.set(locale, mod.default);
  return mod.default;
}

export function isLocale(value: string): value is LocaleCode {
  return LOCALES.some((l) => l.code === value);
}

/**
 * Prefix a site path with a locale, following the routing rules:
 * `en` (default) keeps unprefixed paths; every other locale gets `/{code}/`.
 * `normalizePath` strips an existing locale prefix first so the function is
 * idempotent when called from an already-localized page.
 */
export function localePath(locale: LocaleCode, path: string): string {
  const stripped = stripLocale(path);
  if (locale === 'en') return stripped;
  return `/${locale}${stripped === '/' ? '/' : stripped}`;
}

/** Remove any locale prefix from a path, returning the canonical English path. */
export function stripLocale(path: string): string {
  if (path === '/') return '/';
  for (const code of PREFIXED_LOCALES) {
    if (path === `/${code}` || path === `/${code}/`) return '/';
    if (path.startsWith(`/${code}/`)) return path.slice(code.length + 1);
  }
  return path;
}

/** The locale of the current page, derived from the URL. */
export function localeFromUrl(pathname: string): LocaleCode {
  const match = /^\/([a-z]{2}(?:-[A-Za-z]{2})?)(?:\/|$)/.exec(pathname);
  if (match && isLocale(match[1])) return match[1];
  return 'en';
}

export { LOCALES };
