import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  return ['', '/ryan-coogler'].map((route) => ({
    url: `https://web-januar.znagy.hu${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
};

export default sitemap;
