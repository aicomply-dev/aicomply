import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Scale, MessageCircleQuestion } from 'lucide-react'

import { getModuleIndex } from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { ModuleCard } from '@/components/content/module-card'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Understand the EU AI Act',
  description:
    'Learn the EU AI Act through structured learning modules, browse the full regulation text, explore the glossary, and find answers to frequently asked questions.',
}

const resourceLinks = [
  {
    title: 'Regulation Browser',
    description:
      'Read the full EU AI Act text organised by chapter and annex.',
    href: '/understand/regulation',
    icon: Scale,
  },
  {
    title: 'Glossary',
    description:
      'Look up key terms and definitions used in the EU AI Act.',
    href: '/understand/glossary',
    icon: BookOpen,
  },
  {
    title: 'FAQ',
    description:
      'Find answers to frequently asked questions about the EU AI Act.',
    href: '/understand/faq',
    icon: MessageCircleQuestion,
  },
]

export default async function UnderstandPage() {
  const modules = await getModuleIndex()
  const publishedModules = modules.filter((m) => m.isPublished)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Understand' }]} />

      {/* Hero */}
      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Understand the EU AI Act
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Explore structured learning modules covering every aspect of the EU AI
          Act — from fundamentals to advanced compliance topics.
        </p>
      </section>

      {/* Module grid */}
      <section>
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Learning Modules
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedModules.map((mod) => (
            <ModuleCard
              key={mod.slug}
              title={mod.title}
              description={mod.description}
              difficulty={mod.difficulty}
              duration={mod.duration}
              slug={mod.slug}
              chapterCount={mod.chapterCount}
            />
          ))}
        </div>
      </section>

      {/* Resource links */}
      <section className="mt-16">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Reference Resources
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map((resource) => {
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
                    <CardTitle className="text-lg">
                      {resource.title}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-blue-600 group-hover:underline">
                      Browse &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
