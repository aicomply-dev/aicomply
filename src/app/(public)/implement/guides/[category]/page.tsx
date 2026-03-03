import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  getGuideCategories,
  getGuidesByCategory,
} from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { GuideCard } from '@/components/content/guide-card'
import { Badge } from '@/components/ui/badge'

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const categories = await getGuideCategories()
  return categories.map((c) => ({ category: c.id }))
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const categories = await getGuideCategories()
  const cat = categories.find((c) => c.id === category)
  if (!cat) return { title: 'Category Not Found' }

  return {
    title: `${cat.label} - Implementation Guides`,
    description: `Browse ${cat.count} ${cat.label.toLowerCase()} for EU AI Act compliance implementation.`,
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function GuideCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const categories = await getGuideCategories()
  const cat = categories.find((c) => c.id === category)
  if (!cat) notFound()

  const guides = await getGuidesByCategory(category)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Guides', href: '/implement/guides' },
          { label: cat.label },
        ]}
      />

      {/* Header */}
      <section className="mt-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {cat.label}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {guides.length} documents in this category.
        </p>
        <div className="mt-4">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {guides.length} guides
          </Badge>
        </div>
      </section>

      {/* Guide grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard
            key={guide.id}
            id={guide.id}
            title={guide.title}
            category={guide.category}
          />
        ))}
      </div>
    </div>
  )
}
