import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText } from 'lucide-react'

import { getRegulationIndex } from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'

export const metadata: Metadata = {
  title: 'EU AI Act — Full Regulation Text',
  description:
    'Browse the complete EU AI Act regulation text organised by chapters and annexes.',
}

export default async function RegulationIndexPage() {
  const sections = await getRegulationIndex()

  // Group into chapters and annexes
  const chapters = sections.filter((s) => !s.slug.includes('annex'))
  const annexes = sections.filter((s) => s.slug.includes('annex'))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Understand', href: '/understand' },
          { label: 'EU AI Act' },
        ]}
      />

      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          EU AI Act — Full Regulation Text
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Browse the complete text of Regulation (EU) 2024/1689, the European
          Union Artificial Intelligence Act.
        </p>
      </section>

      {/* Chapters */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          Chapters
        </h2>
        <ol className="space-y-2">
          {chapters.map((section) => (
            <li key={section.slug}>
              <Link
                href={`/understand/regulation/${section.slug}`}
                className="group flex items-center gap-3 rounded-lg border bg-white p-4 transition-colors hover:bg-slate-50"
              >
                <FileText className="h-5 w-5 shrink-0 text-blue-600" />
                <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Annexes */}
      {annexes.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Annexes
          </h2>
          <ol className="space-y-2">
            {annexes.map((section) => (
              <li key={section.slug}>
                <Link
                  href={`/understand/regulation/${section.slug}`}
                  className="group flex items-center gap-3 rounded-lg border bg-white p-4 transition-colors hover:bg-slate-50"
                >
                  <FileText className="h-5 w-5 shrink-0 text-blue-600" />
                  <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  )
}
