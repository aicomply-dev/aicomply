import type { Metadata } from 'next'
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

import { getStandardIndex } from '@/lib/content/loader'

export const metadata: Metadata = {
  title: 'Controls Overview',
  description:
    'Overview of all 14 EU AI Act standards and their control implementation status.',
}

export default async function ControlsPage() {
  const standards = await getStandardIndex()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Controls' },
        ]}
      />

      <section className="mt-8 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Controls Overview
        </h1>
        <p className="mt-2 text-muted-foreground">
          Overview of all {standards.length} EU AI Act standards and their
          controls. Select a standard to view implementation details.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {standards.map((std) => (
          <Link
            key={std.id}
            href={`/implement/controls/${std.id}`}
            className="block"
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{std.title}</CardTitle>
                  <Badge variant="outline" className="shrink-0 text-xs">
                    {std.id.toUpperCase()}
                  </Badge>
                </div>
                <CardDescription>
                  {std.euAiActRef && (
                    <span className="text-xs">{std.euAiActRef}</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {std.controlCount} controls
                  </span>
                  <Badge variant="secondary" className="capitalize text-xs">
                    {std.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
