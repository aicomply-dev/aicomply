import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GLOBAL_REGULATIONS } from '@/lib/data/global-regulations'

export const metadata: Metadata = {
  title: 'Global AI Regulations Comparison',
  description:
    'Compare AI regulation approaches across jurisdictions including the EU AI Act, US executive orders, China\'s AI rules, the UK approach, and international standards.',
}

const STATUS_BADGE: Record<string, { label: string; variant: 'default' | 'secondary' | 'outline' | 'destructive' }> = {
  enacted: { label: 'Enacted', variant: 'default' },
  proposed: { label: 'Proposed', variant: 'secondary' },
  voluntary: { label: 'Voluntary', variant: 'outline' },
  rescinded: { label: 'Rescinded', variant: 'destructive' },
}

export default function GlobalRegulationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'Global AI Regulations' },
        ]}
      />

      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Global AI Regulations
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          A comparison of international approaches to AI regulation. From
          comprehensive binding legislation to voluntary frameworks and
          international standards.
        </p>
      </section>

      <div className="space-y-12">
        {GLOBAL_REGULATIONS.map((category) => (
          <section key={category.id}>
            <h2 className="text-xl font-semibold text-slate-900">
              {category.title.en}
            </h2>
            <p className="mt-1 mb-6 text-sm text-muted-foreground">
              {category.description.en}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {category.regulations.map((reg) => {
                const statusBadge = STATUS_BADGE[reg.status] ?? {
                  label: reg.status,
                  variant: 'outline' as const,
                }
                return (
                  <Card key={reg.id} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            {reg.jurisdiction.en}
                          </p>
                          <CardTitle className="mt-1 text-lg">
                            {reg.name.en}
                          </CardTitle>
                        </div>
                        <Badge variant={statusBadge.variant}>
                          {statusBadge.label}
                        </Badge>
                      </div>
                      {reg.effectiveDate && (
                        <p className="text-xs text-muted-foreground">
                          Effective: {reg.effectiveDate.en}
                        </p>
                      )}
                      <CardDescription className="mt-2">
                        {reg.description.en}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                          Approach
                        </p>
                        <Badge variant="outline">{reg.philosophy.en}</Badge>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                          Key Features
                        </p>
                        <ul className="space-y-1">
                          {reg.keyFeatures.en.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {reg.penalties && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                            Penalties
                          </p>
                          <p className="text-sm">{reg.penalties.en}</p>
                        </div>
                      )}

                      {reg.links && reg.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {reg.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target={link.url.startsWith('http') ? '_blank' : undefined}
                              rel={
                                link.url.startsWith('http')
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                              className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
                            >
                              {link.label.en}
                              {link.url.startsWith('http') && (
                                <ExternalLink className="h-3 w-3" />
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
