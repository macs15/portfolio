import type { MetadataRoute } from 'next'
import { url } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
