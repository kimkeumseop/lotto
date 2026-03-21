const siteUrl = 'https://lotto-self.vercel.app'

const routes = [
  { path: '/lotto', changeFrequency: 'daily', priority: 1.0 },
  { path: '/privacy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/terms', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
]

export default function sitemap() {
  const lastModified = new Date()

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
