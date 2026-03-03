import type { Metadata } from 'next'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Release history and changelog for AI Comply.',
}

const releases = [
  {
    version: 'v0.1.0',
    date: 'January 2025',
    tag: 'Initial Release',
    changes: [
      'Learning modules covering AI Act fundamentals, high-risk compliance, GPAI, governance, and innovation',
      'Full EU AI Act regulation browser with all chapters and annexes',
      'Glossary with 100+ defined terms from the regulation',
      'FAQ covering common questions about the EU AI Act',
      'Risk classification wizard for AI systems',
      'Implementation guides, standards, and policy templates',
      'Global AI regulations comparison across jurisdictions',
      'Self-hosting documentation with multiple deployment options',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Changelog' }]} />

      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Changelog
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Release history for AI Comply.
        </p>
      </section>

      <div className="space-y-10">
        {releases.map((release) => (
          <article key={release.version} className="border-l-2 border-blue-200 pl-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {release.version}
              </h2>
              <Badge>{release.tag}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{release.date}</p>
            <ul className="mt-4 space-y-2">
              {release.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {change}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
