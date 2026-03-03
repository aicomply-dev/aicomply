import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardList,
  FileCheck,
  FileInput,
  FolderArchive,
  Wrench,
} from 'lucide-react'

import { getGuideCategories } from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Implementation Guides - EU AI Act',
  description:
    'Browse procedures, checklists, forms, record templates, and assessment tools for EU AI Act compliance implementation.',
}

const categoryMeta: Record<
  string,
  { description: string; icon: typeof ClipboardList }
> = {
  procedures: {
    description:
      'Step-by-step operational procedures for AI governance, risk management, data governance, and compliance activities.',
    icon: ClipboardList,
  },
  checklists: {
    description:
      'Ready-to-use checklists for conformity assessments, documentation reviews, and audit preparation.',
    icon: FileCheck,
  },
  forms: {
    description:
      'Structured forms for AI system classification, risk assessment, incident reporting, and registration.',
    icon: FileInput,
  },
  records: {
    description:
      'Templates for maintaining compliance records, audit trails, and governance documentation.',
    icon: FolderArchive,
  },
  'assessment-tools': {
    description:
      'Comprehensive tools for risk classification, controls cataloguing, and role determination.',
    icon: Wrench,
  },
}

export default async function GuidesPage() {
  const categories = await getGuideCategories()

  const totalGuides = categories.reduce((sum, c) => sum + c.count, 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Guides' },
        ]}
      />

      {/* Header */}
      <section className="mt-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Implementation Guides
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Practical documents for day-to-day EU AI Act compliance operations,
          organised by type.
        </p>
        <div className="mt-4">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {totalGuides} documents across {categories.length} categories
          </Badge>
        </div>
      </section>

      {/* Category grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const meta = categoryMeta[cat.id]
          const Icon = meta?.icon ?? ClipboardList
          return (
            <Link
              key={cat.id}
              href={`/implement/guides/${cat.id}`}
              className="group block"
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg">{cat.label}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {cat.count}
                    </Badge>
                  </div>
                  <CardDescription>
                    {meta?.description ?? ''}
                  </CardDescription>
                </CardHeader>
                <CardContent />
                <CardFooter>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                    Browse {cat.label.toLowerCase()}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
