import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { getAISystem } from '@/lib/actions/ai-systems'
import { getComplianceRequirements } from '@/lib/actions/compliance'

interface Props {
  params: Promise<{ systemId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { systemId } = await params
  try {
    const system = await getAISystem(systemId)
    return { title: `Requirements: ${system.name}` }
  } catch {
    return { title: 'Requirements' }
  }
}

const statusColors: Record<string, string> = {
  not_started: 'bg-slate-100 text-slate-800',
  in_progress: 'bg-blue-100 text-blue-800',
  implemented: 'bg-emerald-100 text-emerald-800',
  verified: 'bg-green-100 text-green-800',
  not_applicable: 'bg-gray-100 text-gray-500',
}

export default async function SystemRequirementsPage({ params }: Props) {
  const { systemId } = await params

  let system: Awaited<ReturnType<typeof getAISystem>>
  try {
    system = await getAISystem(systemId)
  } catch {
    notFound()
  }

  let requirements: Awaited<ReturnType<typeof getComplianceRequirements>> = []
  try {
    requirements = await getComplianceRequirements(systemId)
  } catch {
    // DB may not be set up
  }

  // Group requirements by standardId
  const grouped: Record<string, typeof requirements> = {}
  for (const req of requirements) {
    if (!grouped[req.standardId]) grouped[req.standardId] = []
    grouped[req.standardId].push(req)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Assess', href: '/assess' },
          { label: 'Requirements', href: '/assess/requirements' },
          { label: system.name },
        ]}
      />

      <section className="mt-8 mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Requirements: {system.name}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Compliance requirements grouped by standard.
        </p>
      </section>

      {requirements.length === 0 ? (
        <Card className="border-dashed">
          <CardHeader className="text-center">
            <CardTitle className="text-base">No Requirements</CardTitle>
            <CardDescription>
              No compliance requirements have been generated for this system
              yet. Run an assessment to generate requirements.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([standardId, reqs]) => (
            <section key={standardId}>
              <h2 className="text-lg font-semibold text-slate-900 mb-3 capitalize">
                {standardId.replace(/-/g, ' ')}
              </h2>
              <div className="space-y-2">
                {reqs.map((req) => (
                  <Card key={req.id}>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                          {req.controlId}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className={statusColors[req.status] ?? ''}
                        >
                          <span className="capitalize">
                            {req.status.replace(/_/g, ' ')}
                          </span>
                        </Badge>
                      </div>
                    </CardHeader>
                    {req.evidence && (
                      <CardContent className="pt-0 pb-3">
                        <p className="text-sm text-muted-foreground">
                          {req.evidence}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
