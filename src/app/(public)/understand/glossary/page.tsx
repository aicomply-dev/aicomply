import type { Metadata } from 'next'

import {
  getGlossaryIndex,
  getGlossaryTerms,
} from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { GlossarySearch } from '@/components/content/glossary-search'
import { glossaryJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'EU AI Act Glossary',
  description:
    'Look up key terms and definitions used throughout the EU AI Act, organised by category.',
}

export default async function GlossaryPage() {
  const categories = await getGlossaryIndex()

  // Load terms for each category
  const termsByCategory: Record<string, Awaited<ReturnType<typeof getGlossaryTerms>>> = {}
  for (const cat of categories) {
    termsByCategory[cat.id] = await getGlossaryTerms(cat.id)
  }

  // Flatten all terms for JSON-LD
  const allTerms = Object.values(termsByCategory).flat()
  const jsonLd = glossaryJsonLd(
    allTerms.map((t) => ({ term: t.term, definition: t.definition })),
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Understand', href: '/understand' },
          { label: 'Glossary' },
        ]}
      />

      <section className="mt-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          EU AI Act Glossary
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Key terms and definitions from the EU AI Act, organised by category.
          Use the search to quickly find specific terms.
        </p>
      </section>

      <GlossarySearch
        categories={categories}
        termsByCategory={termsByCategory}
      />
    </div>
  )
}
