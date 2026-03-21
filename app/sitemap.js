import { siteUrl } from './lib/structuredData'

const routes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.5 },
]

export default function sitemap() {
  const lastModified = new Date()

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
