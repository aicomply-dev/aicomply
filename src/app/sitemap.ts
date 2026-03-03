import type { MetadataRoute } from 'next'

import {
  getModuleIndex,
  getChapterList,
  getStandardIndex,
  getGuideCategories,
  getGuidesByCategory,
  getRegulationIndex,
} from '@/lib/content/loader'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aicomply.dev'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []

  // -------------------------------------------------------------------------
  // Landing page
  // -------------------------------------------------------------------------
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  // -------------------------------------------------------------------------
  // Hub pages
  // -------------------------------------------------------------------------
  const hubs = [
    '/understand',
    '/assess',
    '/implement',
    '/resources',
  ]
  for (const hub of hubs) {
    entries.push({
      url: `${BASE_URL}${hub}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  }

  // -------------------------------------------------------------------------
  // Modules + chapters
  // -------------------------------------------------------------------------
  const modules = await getModuleIndex()
  for (const mod of modules) {
    entries.push({
      url: `${BASE_URL}/understand/modules/${mod.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })

    const chapters = await getChapterList(mod.slug)
    for (const ch of chapters) {
      entries.push({
        url: `${BASE_URL}/understand/modules/${mod.slug}/${ch.sortIndex}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  // -------------------------------------------------------------------------
  // Regulation sections
  // -------------------------------------------------------------------------
  entries.push({
    url: `${BASE_URL}/understand/regulation`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  const regulationSections = await getRegulationIndex()
  for (const section of regulationSections) {
    entries.push({
      url: `${BASE_URL}/understand/regulation/${section.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  // -------------------------------------------------------------------------
  // Glossary & FAQ
  // -------------------------------------------------------------------------
  entries.push({
    url: `${BASE_URL}/understand/glossary`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  entries.push({
    url: `${BASE_URL}/understand/faq`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  // -------------------------------------------------------------------------
  // Standards
  // -------------------------------------------------------------------------
  entries.push({
    url: `${BASE_URL}/implement/standards`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  const standards = await getStandardIndex()
  for (const std of standards) {
    entries.push({
      url: `${BASE_URL}/implement/standards/${std.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  // -------------------------------------------------------------------------
  // Guides — categories + individual guides
  // -------------------------------------------------------------------------
  entries.push({
    url: `${BASE_URL}/implement/guides`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  const guideCategories = await getGuideCategories()
  for (const cat of guideCategories) {
    entries.push({
      url: `${BASE_URL}/implement/guides/${cat.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })

    const guides = await getGuidesByCategory(cat.id)
    for (const guide of guides) {
      entries.push({
        url: `${BASE_URL}/implement/guides/${cat.id}/${guide.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    }
  }

  // -------------------------------------------------------------------------
  // Assess section
  // -------------------------------------------------------------------------
  entries.push({
    url: `${BASE_URL}/assess/classification`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  // -------------------------------------------------------------------------
  // Resources
  // -------------------------------------------------------------------------
  entries.push({
    url: `${BASE_URL}/resources/global-regulations`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  })

  // -------------------------------------------------------------------------
  // Static pages
  // -------------------------------------------------------------------------
  const staticPages = [
    '/privacy',
    '/terms',
    '/changelog',
    '/contributing',
    '/code-of-conduct',
    '/self-hosting',
  ]
  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    })
  }

  // -------------------------------------------------------------------------
  // Auth pages
  // -------------------------------------------------------------------------
  entries.push({
    url: `${BASE_URL}/auth/login`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  })
  entries.push({
    url: `${BASE_URL}/auth/register`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  })

  return entries
}
