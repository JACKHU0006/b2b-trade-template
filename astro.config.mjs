import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.fabletech.cc.cd',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.fabletech.cc.cd/',
        'https://www.fabletech.cc.cd/products/',
        'https://www.fabletech.cc.cd/about/',
        'https://www.fabletech.cc.cd/contact/',
        'https://www.fabletech.cc.cd/faq/',
        'https://www.fabletech.cc.cd/news/',
        'https://www.fabletech.cc.cd/factory/',
        'https://www.fabletech.cc.cd/service/',
        'https://www.fabletech.cc.cd/sitemap/',
        'https://www.fabletech.cc.cd/privacy/',
        'https://www.fabletech.cc.cd/terms/',
        'https://www.fabletech.cc.cd/shipping/',
        'https://www.fabletech.cc.cd/returns/',
        'https://www.fabletech.cc.cd/cookies/',
      ],
      filter: (page) => !page.includes('/auth/') && !page.includes('/dashboard/'),
      serialize: (item) => {
        if (item.url.includes('/products')) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'weekly',
          };
        }
        if (item.url === 'https://www.fabletech.cc.cd/') {
          return {
            ...item,
            priority: 1.0,
            changefreq: 'daily',
          };
        }
        if (item.url.includes('/news')) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'daily',
          };
        }
        return {
          ...item,
          priority: 0.6,
          changefreq: 'monthly',
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
