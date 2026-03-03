import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

import { getAISystem } from '@/lib/actions/ai-systems'
import { getComplianceRequirements, getGapAnalysisResults } from '@/lib/actions/compliance'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  try {
    const system = await getAISystem(id)
    return { title: system.name }
  } catch {
    return { title: 'AI System' }
  }
}

const riskBadgeColor: Record<string, string> = {
  prohibited: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  limited: 'bg-yellow-100 text-yellow-800',
  minimal: 'bg-green-100 text-green-800',
  unclassified: 'bg-slate-100 text-slate-800',
}

export default async function SystemDetailPage({ params }: Props) {
  const { id } = await params

  let system: Awaited<ReturnType<typeof getAISystem>>
  try {
    system = await getAISystem(id)
  } catch {
    notFound()
  }

  let requirements: Awaited<ReturnType<typeof getComplianceRequirements>> = []
  let gaps: Awaited<ReturnType<typeof getGapAnalysisResults>> = []

  try {
    ;[requirements, gaps] = await Promise.all([
      getComplianceRequirements(id),
      getGapAnalysisResults(id),
    ])
  } catch {
    // DB may not be fully set up
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Assess', href: '/assess' },
          { label: 'Inventory', href: '/assess/inventory' },
          { label: system.name },
        ]}
      />

      <section className="mt-8 mb-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {system.name}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              {system.riskLevel && (
                <Badge
                  variant="outline"
                  className={riskBadgeColor[system.riskLevel] ?? riskBadgeColor.unclassified}
                >
                  <span className="capitalize">{system.riskLevel} risk</span>
                </Badge>
              )}
              <span className="text-sm capitalize text-muted-foreground">
                {system.status}
              </span>
              {system.category && (
                <span className="text-sm text-muted-foreground">
                  {system.category}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="assessments">
            Assessments ({system.assessments.length})
          </TabsTrigger>
          <TabsTrigger value="compliance">
            Compliance ({requirements.length})
          </TabsTrigger>
          <TabsTrigger value="gaps">
            Gap Analysis ({gaps.length})
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">System Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Description
                  </span>
                  <p className="mt-1 text-sm">
                    {system.description || 'No description provided.'}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Operator Role
                    </span>
                    <p className="mt-1 text-sm capitalize">
                      {system.operatorRole?.replace(/_/g, ' ') || '--'}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Category
                    </span>
                    <p className="mt-1 text-sm">{system.category || '--'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Created
                    </span>
                    <p className="mt-1 text-sm">
                      {new Date(system.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Last Updated
                    </span>
                    <p className="mt-1 text-sm">
                      {new Date(system.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Assessments</span>
                  <span className="text-sm font-medium">{system.assessments.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Compliance Requirements</span>
                  <span className="text-sm font-medium">{requirements.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Identified Gaps</span>
                  <span className="text-sm font-medium">{gaps.length}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Assessments Tab */}
        <TabsContent value="assessments" className="mt-6">
          {system.assessments.length === 0 ? (
            <Card className="border-dashed">
              <CardHeader className="text-center">
                <CardTitle className="text-base">No Assessments</CardTitle>
                <CardDescription>
                  Run a compliance assessment for this AI system.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/assess/assessments">Start Assessment</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {system.assessments.map((a) => (
                <Link
                  key={a.id}
                  href={`/assess/assessments/${a.id}`}
                  className="block"
                >
                  <Card className="transition-shadow hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base capitalize">
                          {a.type.replace(/-/g, ' ')}
                        </CardTitle>
                        <Badge
                          variant={
                            a.status === 'completed' ? 'default' : 'secondary'
                          }
                        >
                          {a.status === 'completed'
                            ? 'Completed'
                            : 'In Progress'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {a.score != null && <span>Score: {a.score}%</span>}
                        <span>
                          {new Date(a.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Compliance Tab */}
        <TabsContent value="compliance" className="mt-6">
          {requirements.length === 0 ? (
            <Card className="border-dashed">
              <CardHeader className="text-center">
                <CardTitle className="text-base">
                  No Compliance Requirements
                </CardTitle>
                <CardDescription>
                  Compliance requirements will appear here once assessments are
                  completed.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="space-y-3">
              {requirements.map((req) => (
                <Card key={req.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">
                        {req.standardId} / {req.controlId}
                      </CardTitle>
                      <Badge
                        variant={
                          req.status === 'verified'
                            ? 'default'
                            : req.status === 'implemented'
                              ? 'secondary'
                              : 'outline'
                        }
                      >
                        <span className="capitalize">
                          {req.status.replace(/_/g, ' ')}
                        </span>
                      </Badge>
                    </div>
                  </CardHeader>
                  {req.evidence && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {req.evidence}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Gap Analysis Tab */}
        <TabsContent value="gaps" className="mt-6">
          {gaps.length === 0 ? (
            <Card className="border-dashed">
              <CardHeader className="text-center">
                <CardTitle className="text-base">No Gaps Identified</CardTitle>
                <CardDescription>
                  Gap analysis results will appear here after running
                  assessments.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="space-y-3">
              {gaps.map((gap) => (
                <Card key={gap.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">
                        {gap.requirementId || 'General'}
                      </CardTitle>
                      {gap.severity && (
                        <Badge variant="outline">
                          <span className="capitalize">{gap.severity}</span>
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {gap.gapDescription && (
                      <p className="text-sm">{gap.gapDescription}</p>
                    )}
                    {gap.remediationPlan && (
                      <div>
                        <span className="text-xs font-medium text-muted-foreground">
                          Remediation Plan
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {gap.remediationPlan}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
