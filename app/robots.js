// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/.next/'],
      },
    ],
    sitemap: 'https://faizanpervez.dev/sitemap.xml',
  };
}
