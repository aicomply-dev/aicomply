import type { Metadata } from 'next'
import Link from 'next/link'
import { Activity, ClipboardList, Lock, Package, Shield } from 'lucide-react'

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
  title: 'Assess Your AI Systems',
  description:
    'Classify your AI systems by risk level, manage your AI inventory, run compliance assessments, and track requirements under the EU AI Act.',
}

const tools = [
  {
    title: 'Risk Classification Wizard',
    description:
      'Determine your AI system\'s risk level under the EU AI Act. Answer a short set of questions to get an instant classification with relevant articles and next steps.',
    href: '/assess/classification',
    icon: Shield,
    badge: 'Free, no account needed',
    badgeVariant: 'default' as const,
    authRequired: false,
  },
  {
    title: 'AI System Inventory',
    description:
      'Register, track, and manage all your AI systems in one place. Maintain the records required for EU AI Act compliance.',
    href: '/assess/inventory',
    icon: Package,
    badge: 'Requires free account',
    badgeVariant: 'secondary' as const,
    authRequired: true,
  },
  {
    title: 'Compliance Assessments',
    description:
      'Run detailed compliance assessments against EU AI Act requirements. Get scored results with actionable recommendations.',
    href: '/assess/assessments',
    icon: ClipboardList,
    badge: 'Requires free account',
    badgeVariant: 'secondary' as const,
    authRequired: true,
  },
  {
    title: 'Requirements Tracking',
    description:
      'Track compliance requirements for each of your AI systems. Monitor progress across all applicable EU AI Act obligations.',
    href: '/assess/requirements',
    icon: Activity,
    badge: 'Requires free account',
    badgeVariant: 'secondary' as const,
    authRequired: true,
  },
]

export default function AssessPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Assess' }]} />

      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Assess Your AI Systems
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Classify AI systems by risk level, manage your inventory, run
          compliance assessments, and track requirements under the EU AI Act.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <Link key={tool.href} href={tool.href} className="group block">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant={tool.badgeVariant} className="text-xs">
                      {tool.authRequired && (
                        <Lock className="mr-1 h-3 w-3" />
                      )}
                      {tool.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm font-medium text-blue-600 group-hover:underline">
                    {tool.authRequired ? 'Sign in to access' : 'Start now'}{' '}
                    &rarr;
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
