import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/', '/settings/'],
      },
    ],
    sitemap: 'https://www.antigravityskills.org/sitemap.xml',
  };
}
