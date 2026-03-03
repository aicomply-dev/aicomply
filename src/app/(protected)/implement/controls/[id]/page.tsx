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

import { getStandard } from '@/lib/content/loader'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const standard = await getStandard(id)
  if (!standard) return { title: 'Control Details' }
  return { title: standard.metadata.title }
}

const riskColors: Record<string, string> = {
  critical: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800',
}

const typeColors: Record<string, string> = {
  preventive: 'bg-blue-100 text-blue-800',
  detective: 'bg-purple-100 text-purple-800',
  corrective: 'bg-amber-100 text-amber-800',
}

export default async function ControlDetailPage({ params }: Props) {
  const { id } = await params
  const standard = await getStandard(id)

  if (!standard) {
    notFound()
  }

  const { metadata, controls } = standard

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Controls', href: '/implement/controls' },
          { label: metadata.title },
        ]}
      />

      <section className="mt-8 mb-8">
        <div className="flex items-start gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {metadata.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {metadata.euAiActRef && (
                <span>{metadata.euAiActRef} - </span>
              )}
              Version {metadata.version}
            </p>
          </div>
          <Badge variant="outline" className="shrink-0 uppercase">
            {metadata.id}
          </Badge>
        </div>
      </section>

      <div className="space-y-4">
        {controls.length === 0 ? (
          <Card className="border-dashed">
            <CardHeader className="text-center">
              <CardTitle className="text-base">No Controls</CardTitle>
              <CardDescription>
                No controls defined for this standard yet.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          controls.map((control) => (
            <Card key={control.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-base">
                    {control.id}: {control.name}
                  </CardTitle>
                  <div className="flex gap-1.5 ml-auto">
                    <Badge
                      variant="outline"
                      className={typeColors[control.type] ?? ''}
                    >
                      <span className="capitalize">{control.type}</span>
                    </Badge>
                    <Badge
                      variant="outline"
                      className={riskColors[control.riskLevel] ?? ''}
                    >
                      <span className="capitalize">{control.riskLevel}</span>
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {control.frequency}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-1">
                    Objective
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {control.objective}
                  </p>
                </div>

                {control.requirements && control.requirements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-1">
                      Requirements
                    </h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      {control.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {control.evidence && control.evidence.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-1">
                      Evidence Required
                    </h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      {control.evidence.map((ev, i) => (
                        <li key={i}>{ev}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
