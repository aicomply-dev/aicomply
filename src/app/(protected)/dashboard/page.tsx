import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus, ClipboardList, BookOpen } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { OverviewStats } from '@/components/dashboard/overview-stats'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { getAISystems } from '@/lib/actions/ai-systems'
import { getAssessments } from '@/lib/actions/assessments'
import { getPolicies } from '@/lib/actions/policies'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Overview of your AI compliance status.',
}

export default async function DashboardPage() {
  let systems: Awaited<ReturnType<typeof getAISystems>> = []
  let assessments: Awaited<ReturnType<typeof getAssessments>> = []
  let policies: Awaited<ReturnType<typeof getPolicies>> = []
  let dbError = false

  try {
    ;[systems, assessments, policies] = await Promise.all([
      getAISystems(),
      getAssessments(),
      getPolicies(),
    ])
  } catch {
    dbError = true
  }

  // Calculate average compliance score from completed assessments
  const completedAssessments = assessments.filter(
    (a) => a.status === 'completed' && a.score != null,
  )
  const complianceScore =
    completedAssessments.length > 0
      ? Math.round(
          completedAssessments.reduce((sum, a) => sum + (a.score ?? 0), 0) /
            completedAssessments.length,
        )
      : null

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Dashboard' }]} />

      <section className="mt-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="mt-2 text-muted-foreground">
          Overview of your AI compliance status and quick actions.
        </p>
      </section>

      {dbError ? (
        <Card>
          <CardHeader>
            <CardTitle>Database Not Connected</CardTitle>
            <CardDescription>
              The database is not yet configured. Please set up your Supabase
              connection to start tracking your AI systems and compliance
              status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Set the <code className="rounded bg-muted px-1 py-0.5 text-xs">DATABASE_URL</code>{' '}
              and Supabase environment variables, then run the database
              migration.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <OverviewStats
            systemsCount={systems.length}
            assessmentsCount={assessments.length}
            complianceScore={complianceScore}
            policiesCount={policies.length}
          />

          {/* Quick Actions */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Quick Actions
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/assess/inventory">
                  <Plus className="mr-2 h-4 w-4" />
                  Add AI System
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/assess/assessments">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  Start Assessment
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/implement/standards">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Standards
                </Link>
              </Button>
            </div>
          </section>

          {/* Empty state */}
          {systems.length === 0 && (
            <section className="mt-10">
              <Card className="border-dashed">
                <CardHeader className="text-center">
                  <CardTitle>No AI Systems Yet</CardTitle>
                  <CardDescription>
                    Get started by adding your first AI system to track its
                    compliance status under the EU AI Act.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button asChild>
                    <Link href="/assess/inventory">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Your First AI System
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Recent Systems */}
          {systems.length > 0 && (
            <section className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">
                  Recent AI Systems
                </h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/inventory">View all</Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {systems.slice(0, 6).map((system) => (
                  <Link
                    key={system.id}
                    href={`/assess/inventory/${system.id}`}
                    className="block"
                  >
                    <Card className="h-full transition-shadow hover:shadow-md">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          {system.name}
                        </CardTitle>
                        {system.riskLevel && (
                          <span className="inline-block text-xs font-medium capitalize text-muted-foreground">
                            {system.riskLevel} risk
                          </span>
                        )}
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {system.description || 'No description'}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  )
}
