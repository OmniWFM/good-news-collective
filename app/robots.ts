import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/partner',
      },
    ],
    sitemap: 'https://thegoodnewscollective.org/sitemap.xml',
  };
}