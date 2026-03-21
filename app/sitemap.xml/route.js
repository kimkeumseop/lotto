export async function GET() {
  const urls = [
    { loc: 'https://lotto-self.vercel.app/lotto', changefreq: 'daily', priority: '1' },
    { loc: 'https://lotto-self.vercel.app/privacy', changefreq: 'monthly', priority: '0.8' },
    { loc: 'https://lotto-self.vercel.app/terms', changefreq: 'monthly', priority: '0.8' },
    { loc: 'https://lotto-self.vercel.app/about', changefreq: 'monthly', priority: '0.8' },
  ]

  const lastmod = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
