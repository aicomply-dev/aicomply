import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  FileText,
  ClipboardCheck,
  ArrowRight,
  Lock,
} from 'lucide-react'

import { getStandardIndex, getGuideCategories } from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Implement - Build Your Compliance Framework',
  description:
    'Access standards, procedures, checklists, forms, and assessment tools to build and maintain your EU AI Act compliance framework.',
}

const guideCategoryDescriptions: Record<string, string> = {
  procedures:
    'Step-by-step operational procedures for AI governance, risk management, and compliance activities.',
  checklists:
    'Ready-to-use checklists for conformity assessments, documentation reviews, and audit preparation.',
  forms:
    'Structured forms for AI system classification, risk assessment, incident reporting, and registration.',
  records:
    'Templates for maintaining compliance records, audit trails, and governance documentation.',
  'assessment-tools':
    'Comprehensive tools for risk classification, controls cataloguing, and role determination.',
}

export default async function ImplementPage() {
  const standards = await getStandardIndex()
  const guideCategories = await getGuideCategories()

  const totalControls = standards.reduce((sum, s) => sum + s.controlCount, 0)
  const totalGuides = guideCategories.reduce((sum, c) => sum + c.count, 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Implement' }]} />

      {/* Hero */}
      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Build Your Compliance Framework
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Access the standards, procedures, checklists, and tools you need to
          implement and maintain EU AI Act compliance across your organisation.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {standards.length} Standards
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {totalControls} Controls
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {totalGuides} Guides &amp; Templates
          </Badge>
        </div>
      </section>

      {/* Standards section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Compliance Standards
            </h2>
            <p className="text-sm text-muted-foreground">
              {standards.length} standards covering all EU AI Act requirements
            </p>
          </div>
        </div>
        <p className="mb-6 text-muted-foreground max-w-3xl">
          A comprehensive set of internal standards mapping every EU AI Act
          obligation to specific controls, evidence requirements, and audit
          verification steps. Each standard targets a specific compliance domain
          -- from risk management and data governance to transparency and
          post-market monitoring.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {standards.slice(0, 6).map((std) => (
            <Link
              key={std.id}
              href={`/implement/standards/${std.id}`}
              className="group block"
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs font-mono">
                      {std.id.toUpperCase()}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {std.controlCount} controls
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{std.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {std.euAiActRef && (
                    <p className="text-xs text-muted-foreground">
                      {std.euAiActRef}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <Link
          href="/implement/standards"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Browse all {standards.length} standards
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Guides section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Implementation Guides
            </h2>
            <p className="text-sm text-muted-foreground">
              {totalGuides} documents across {guideCategories.length} categories
            </p>
          </div>
        </div>
        <p className="mb-6 text-muted-foreground max-w-3xl">
          Practical documents for day-to-day compliance operations, including
          procedures, checklists, forms, record templates, and assessment tools
          aligned with the EU AI Act.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {guideCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/implement/guides/${cat.id}`}
              className="group block"
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {cat.count} documents
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{cat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    {guideCategoryDescriptions[cat.id] ?? ''}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <Link
          href="/implement/guides"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Browse all guides
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Policies & Controls (auth required) */}
      <section className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <ClipboardCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Policies &amp; Controls Dashboard
            </h2>
          </div>
        </div>
        <p className="mb-4 text-muted-foreground max-w-2xl">
          Track your compliance posture, manage policies, and monitor control
          implementation progress with our interactive dashboard. Create an
          account to get started.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Lock className="h-4 w-4" />
          <span>Sign in required</span>
          <span className="mx-2 text-slate-300">|</span>
          <Link
            href="/auth/login"
            className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Sign in
          </Link>
          <span className="mx-1 text-slate-300">or</span>
          <Link
            href="/auth/register"
            className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Create an account
          </Link>
        </div>
      </section>
    </div>
  )
}
