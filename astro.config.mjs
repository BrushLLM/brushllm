// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://brushllm.com',
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'de',
      'es',
      'fr',
      'it',
      'nl',
      'pl',
      'pt-BR',
      'tr',
      'id',
      'vi',
      'ja',
      'zh-CN',
      'zh-TW',
      'ko',
    ],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
          es: 'es',
          fr: 'fr',
          it: 'it',
          nl: 'nl',
          pl: 'pl',
          'pt-BR': 'pt-BR',
          tr: 'tr',
          id: 'id',
          vi: 'vi',
          ja: 'ja',
          'zh-CN': 'zh-CN',
          'zh-TW': 'zh-TW',
          ko: 'ko',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
