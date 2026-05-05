import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ohdoyoel.github.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
