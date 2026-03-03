import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Explore resources for AI regulation compliance, including a global comparison of AI regulations across jurisdictions.',
}

const resources = [
  {
    title: 'Global AI Regulations',
    description:
      'Compare AI regulation approaches across jurisdictions — EU, US, China, UK, and more.',
    href: '/resources/global-regulations',
    icon: Globe,
  },
]

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Resources' }]} />

      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Resources
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Tools and references to support your AI compliance journey.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
          const Icon = resource.icon
          return (
            <Link
              key={resource.href}
              href={resource.href}
              className="group block"
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm font-medium text-blue-600 group-hover:underline">
                    Explore &rarr;
                  </span>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
