import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getStandard, getStandardIndex } from '@/lib/content/loader'
import { techArticleJsonLd } from '@/lib/structured-data'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { SidebarNav } from '@/components/layout/sidebar-nav'
import { MarkdownRenderer } from '@/components/content/markdown-renderer'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const standards = await getStandardIndex()
  return standards.map((s) => ({ id: s.id }))
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const data = await getStandard(id)
  if (!data) return { title: 'Standard Not Found' }

  return {
    title: `${data.metadata.id.toUpperCase()} - ${data.metadata.title}`,
    description: `EU AI Act compliance standard: ${data.metadata.title}. ${data.metadata.controlCount} controls mapped to ${data.metadata.euAiActRef ?? 'EU AI Act requirements'}.`,
  }
}

// ---------------------------------------------------------------------------
// Risk level colours
// ---------------------------------------------------------------------------

const riskColors: Record<string, string> = {
  critical: 'bg-red-100 text-red-800 border-red-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  medium: 'bg-amber-100 text-amber-800 border-amber-200',
  low: 'bg-green-100 text-green-800 border-green-200',
}

const typeColors: Record<string, string> = {
  preventive: 'bg-blue-100 text-blue-800 border-blue-200',
  detective: 'bg-purple-100 text-purple-800 border-purple-200',
  corrective: 'bg-teal-100 text-teal-800 border-teal-200',
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function StandardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = await getStandard(id)
  if (!data) notFound()

  const { metadata: std, controls, guidance } = data

  // Sidebar: all standards
  const allStandards = await getStandardIndex()
  const sidebarItems = allStandards.map((s) => ({
    label: `${s.id.toUpperCase()} ${s.title}`,
    href: `/implement/standards/${s.id}`,
  }))

  const jsonLd = techArticleJsonLd({
    id: std.id,
    title: std.title,
    category: std.category,
    euAiActRef: std.euAiActRef,
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Standards', href: '/implement/standards' },
          { label: std.title },
        ]}
      />

      <div className="mt-8 flex gap-10">
        {/* Sidebar */}
        <SidebarNav items={sidebarItems} title="Standards" />

        {/* Main content */}
        <div className="min-w-0 flex-1">
          {/* Header */}
          <section className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="outline" className="text-sm font-mono">
                {std.id.toUpperCase()}
              </Badge>
              <Badge variant="secondary">v{std.version}</Badge>
              <Badge variant="outline" className="capitalize">
                {std.status}
              </Badge>
              <Badge
                variant="outline"
                className="capitalize"
              >
                {std.category.replace(/-/g, ' ')}
              </Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {std.title}
            </h1>
            {std.euAiActRef && (
              <p className="mt-2 text-muted-foreground">
                EU AI Act Reference: {std.euAiActRef}
              </p>
            )}
          </section>

          {/* Controls */}
          {controls.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Controls ({controls.length})
              </h2>
              <div className="space-y-4">
                {controls.map((control) => (
                  <Card key={control.id}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className="text-xs font-mono"
                        >
                          {control.id}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            typeColors[control.type] ??
                            'bg-gray-100 text-gray-800'
                          }
                        >
                          {control.type}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            riskColors[control.riskLevel] ??
                            'bg-gray-100 text-gray-800'
                          }
                        >
                          {control.riskLevel} risk
                        </Badge>
                      </div>
                      <CardTitle className="text-base">
                        {control.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {control.objective}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Frequency:</span>{' '}
                        {control.frequency}
                      </div>
                      {control.requirements.length > 0 && (
                        <details className="mt-3">
                          <summary className="text-xs font-medium text-muted-foreground cursor-pointer hover:text-foreground">
                            Requirements ({control.requirements.length})
                          </summary>
                          <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-disc pl-4">
                            {control.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </details>
                      )}
                      {control.evidence.length > 0 && (
                        <details className="mt-2">
                          <summary className="text-xs font-medium text-muted-foreground cursor-pointer hover:text-foreground">
                            Evidence ({control.evidence.length})
                          </summary>
                          <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-disc pl-4">
                            {control.evidence.map((ev, i) => (
                              <li key={i}>{ev}</li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Guidance */}
          {guidance && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Guidance
              </h2>
              <div className="prose prose-slate max-w-none">
                <MarkdownRenderer content={guidance} />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
