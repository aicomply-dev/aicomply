// ---------------------------------------------------------------------------
// JSON-LD structured data helpers
// ---------------------------------------------------------------------------
// Each function returns a plain object suitable for rendering as:
//   <script type="application/ld+json">{JSON.stringify(obj)}</script>
// ---------------------------------------------------------------------------

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://aicomply.dev'

// ---------------------------------------------------------------------------
// Course – for module detail pages
// ---------------------------------------------------------------------------

export function courseJsonLd(module: {
  title: string
  description: string
  slug: string
  difficulty: string
  duration: number
  chapterCount: number
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: module.title,
    description: module.description,
    url: `${SITE_URL}/understand/modules/${module.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'AI Comply',
      url: SITE_URL,
    },
    educationalLevel: module.difficulty,
    timeRequired: `PT${module.duration}M`,
    numberOfCredits: module.chapterCount,
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
}

// ---------------------------------------------------------------------------
// LearningResource – for chapter pages
// ---------------------------------------------------------------------------

export function learningResourceJsonLd(chapter: {
  title: string
  description: string
  moduleSlug: string
  moduleTitle: string
  chapterIndex: number
  duration: number
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: chapter.title,
    description: chapter.description,
    url: `${SITE_URL}/understand/modules/${chapter.moduleSlug}/${chapter.chapterIndex}`,
    isPartOf: {
      '@type': 'Course',
      name: chapter.moduleTitle,
      url: `${SITE_URL}/understand/modules/${chapter.moduleSlug}`,
    },
    timeRequired: `PT${chapter.duration}M`,
    inLanguage: 'en',
    isAccessibleForFree: true,
    provider: {
      '@type': 'Organization',
      name: 'AI Comply',
      url: SITE_URL,
    },
  }
}

// ---------------------------------------------------------------------------
// TechArticle – for standard detail pages
// ---------------------------------------------------------------------------

export function techArticleJsonLd(standard: {
  id: string
  title: string
  category: string
  euAiActRef?: string
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    name: `${standard.id.toUpperCase()} - ${standard.title}`,
    headline: standard.title,
    url: `${SITE_URL}/implement/standards/${standard.id}`,
    articleSection: standard.category,
    about: {
      '@type': 'Legislation',
      name: 'EU AI Act',
      legislationIdentifier: 'Regulation (EU) 2024/1689',
    },
    ...(standard.euAiActRef && {
      citation: standard.euAiActRef,
    }),
    isAccessibleForFree: true,
    publisher: {
      '@type': 'Organization',
      name: 'AI Comply',
      url: SITE_URL,
    },
  }
}

// ---------------------------------------------------------------------------
// HowTo – for guide/procedure detail pages
// ---------------------------------------------------------------------------

export function howToJsonLd(guide: {
  title: string
  category: string
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: `EU AI Act compliance guide: ${guide.title}`,
    category: guide.category,
    isAccessibleForFree: true,
    publisher: {
      '@type': 'Organization',
      name: 'AI Comply',
      url: SITE_URL,
    },
  }
}

// ---------------------------------------------------------------------------
// Legislation – for regulation section pages
// ---------------------------------------------------------------------------

export function legislationJsonLd(section: {
  title: string
  slug: string
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Legislation',
    name: section.title,
    legislationIdentifier: 'Regulation (EU) 2024/1689',
    legislationDate: '2024-07-12',
    url: `${SITE_URL}/understand/regulation/${section.slug}`,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'Legislation',
      name: 'EU AI Act',
      legislationIdentifier: 'Regulation (EU) 2024/1689',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Comply',
      url: SITE_URL,
    },
  }
}

// ---------------------------------------------------------------------------
// DefinedTermSet – for the glossary page
// ---------------------------------------------------------------------------

export function glossaryJsonLd(
  terms: { term: string; definition: string }[],
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'EU AI Act Glossary',
    description:
      'Key terms and definitions from the EU AI Act regulation.',
    url: `${SITE_URL}/understand/glossary`,
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
    })),
  }
}

// ---------------------------------------------------------------------------
// FAQPage – reusable helper (already inline in FAQ page)
// ---------------------------------------------------------------------------

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[],
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ---------------------------------------------------------------------------
// WebApplication – for the risk classification wizard / landing page
// ---------------------------------------------------------------------------

export function webApplicationJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Comply',
    description:
      'Open-source platform for EU AI Act compliance. Learn the regulation, classify your AI systems, and implement compliance frameworks.',
    url: SITE_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    creator: {
      '@type': 'Organization',
      name: 'AI Comply',
      url: SITE_URL,
    },
  }
}
