import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://web-januar.znagy.hu',
  sitemap: 'https://web-januar.znagy.hu/sitemap.xml',
});

export default robots;
