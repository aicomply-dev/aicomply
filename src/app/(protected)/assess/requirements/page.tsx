import type { Metadata } from 'next'
import Link from 'next/link'
import { Activity } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { getAISystems } from '@/lib/actions/ai-systems'

export const metadata: Metadata = {
  title: 'Requirements Tracking',
  description: 'Track compliance requirements for your AI systems.',
}

export default async function RequirementsPage() {
  let systems: Awaited<ReturnType<typeof getAISystems>> = []
  let dbError = false

  try {
    systems = await getAISystems()
  } catch {
    dbError = true
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Assess', href: '/assess' },
          { label: 'Requirements' },
        ]}
      />

      <section className="mt-8 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Requirements Tracking
        </h1>
        <p className="mt-2 text-muted-foreground">
          Track compliance requirements for each of your AI systems against the
          EU AI Act.
        </p>
      </section>

      {dbError ? (
        <Card>
          <CardHeader>
            <CardTitle>Database Not Connected</CardTitle>
            <CardDescription>
              Please configure your database to track requirements.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : systems.length === 0 ? (
        <Card className="border-dashed">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Activity className="h-6 w-6" />
            </div>
            <CardTitle>No AI Systems</CardTitle>
            <CardDescription>
              Add an AI system first to track its compliance requirements.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link
              href="/assess/inventory"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Go to AI System Inventory
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <Link
              key={system.id}
              href={`/assess/requirements/${system.id}`}
              className="block"
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-base">{system.name}</CardTitle>
                  <CardDescription>
                    {system.description || 'No description'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    {system.riskLevel && (
                      <Badge variant="outline" className="capitalize">
                        {system.riskLevel}
                      </Badge>
                    )}
                    <span className="text-sm text-muted-foreground">
                      View requirements
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
