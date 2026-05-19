import type { APIRoute } from 'astro';
import { getNews, getNewsCategories } from '../data/news';

const SITE_URL = 'https://www.fabletech.cc.cd';

export const GET: APIRoute = () => {
  const staticPages = [
    '/',
    '/about',
    '/products',
    '/news',
    '/factory',
    '/service',
    '/faq',
    '/contact',
    '/sitemap',
    '/support',
    '/downloads',
    '/agent',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies',
    '/returns',
    '/shipping',
  ];

  const news = getNews();
  const newsPages = news.map(n => `/news/${n.slug}`);

  const categories = getNewsCategories();
  const categoryPages = categories.map(c => `/news/${c.toLowerCase().replace(/\s+/g, '-')}`);

  const allPages = [...staticPages, ...categoryPages, ...newsPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page}</loc>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    <changefreq>weekly</changefreq>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
