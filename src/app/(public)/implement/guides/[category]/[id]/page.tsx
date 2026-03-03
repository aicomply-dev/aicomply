import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  getGuide,
  getGuideCategories,
  getGuidesByCategory,
} from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { MarkdownRenderer } from '@/components/content/markdown-renderer'
import { TableOfContents } from '@/components/content/table-of-contents'
import { extractTocItems } from '@/lib/content/toc'
import { Badge } from '@/components/ui/badge'

// ---------------------------------------------------------------------------
// Category label lookup
// ---------------------------------------------------------------------------

const CATEGORY_LABELS: Record<string, string> = {
  'assessment-tools': 'Assessment Tools',
  checklists: 'Checklists',
  forms: 'Forms',
  procedures: 'Procedures',
  records: 'Records',
}

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const categories = await getGuideCategories()
  const params: { category: string; id: string }[] = []

  for (const cat of categories) {
    const guides = await getGuidesByCategory(cat.id)
    for (const guide of guides) {
      params.push({ category: cat.id, id: guide.id })
    }
  }

  return params
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; id: string }>
}): Promise<Metadata> {
  const { category, id } = await params
  const data = await getGuide(category, id)
  if (!data) return { title: 'Guide Not Found' }

  return {
    title: `${data.metadata.title} - Implementation Guides`,
    description: `EU AI Act compliance guide: ${data.metadata.title}.`,
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>
}) {
  const { category, id } = await params
  const data = await getGuide(category, id)
  if (!data) notFound()

  const { metadata: guide, content } = data
  const categoryLabel = CATEGORY_LABELS[category] ?? category
  const tocItems = extractTocItems(content)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Guides', href: '/implement/guides' },
          { label: categoryLabel, href: `/implement/guides/${category}` },
          { label: guide.title },
        ]}
      />

      {/* Header */}
      <section className="mt-8 mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs font-mono">
            {guide.id}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {categoryLabel}
          </Badge>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {guide.title}
        </h1>
      </section>

      {/* Content + TOC */}
      <div className="flex gap-10">
        {/* Main content */}
        <div className="min-w-0 flex-1">
          <div className="prose prose-slate max-w-none">
            <MarkdownRenderer content={content} />
          </div>
        </div>

        {/* Table of contents */}
        {tocItems.length > 0 && <TableOfContents items={tocItems} />}
      </div>
    </div>
  )
}
