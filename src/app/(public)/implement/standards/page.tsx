import type { Metadata } from 'next'

import { getStandardIndex } from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { StandardCard } from '@/components/content/standard-card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Compliance Standards - EU AI Act',
  description:
    'Browse 14 internal compliance standards covering every EU AI Act obligation, with mapped controls, evidence requirements, and audit verification steps.',
}

export default async function StandardsPage() {
  const standards = await getStandardIndex()

  const totalControls = standards.reduce((sum, s) => sum + s.controlCount, 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Standards' },
        ]}
      />

      {/* Header */}
      <section className="mt-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Compliance Standards
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          {standards.length} internal standards mapping EU AI Act obligations to
          actionable controls and evidence requirements.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {standards.length} standards
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {totalControls} total controls
          </Badge>
        </div>
      </section>

      {/* Standards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {standards.map((std) => (
          <StandardCard
            key={std.id}
            id={std.id}
            title={std.title}
            version={std.version}
            status={std.status}
            category={std.category}
            euAiActRef={std.euAiActRef}
            controlCount={std.controlCount}
          />
        ))}
      </div>
    </div>
  )
}
