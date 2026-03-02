import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BookOpen, Clock, GraduationCap } from 'lucide-react'

import { getModule, getModuleIndex, getChapterList } from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { SidebarNav, type SidebarNavItem } from '@/components/layout/sidebar-nav'
import { Badge } from '@/components/ui/badge'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const modules = await getModuleIndex()
  return modules.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const mod = await getModule(slug)
  if (!mod) return { title: 'Module Not Found' }
  return {
    title: mod.title,
    description: mod.description,
  }
}

const difficultyColors: Record<string, string> = {
  beginner: 'bg-green-100 text-green-800 border-green-200',
  intermediate: 'bg-amber-100 text-amber-800 border-amber-200',
  advanced: 'bg-red-100 text-red-800 border-red-200',
}

const typeIcons: Record<string, string> = {
  lesson: 'Lesson',
  quiz: 'Quiz',
}

export default async function ModuleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const mod = await getModule(slug)
  if (!mod) notFound()

  const chapters = await getChapterList(slug)

  const sidebarItems: SidebarNavItem[] = chapters.map((ch) => ({
    label: ch.title,
    href: `/understand/modules/${slug}/${ch.sortIndex}`,
  }))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Understand', href: '/understand' },
          { label: 'Modules', href: '/understand' },
          { label: mod.title },
        ]}
      />

      <div className="mt-8 flex gap-10">
        {/* Sidebar */}
        <SidebarNav items={sidebarItems} title="Chapters" />

        {/* Main content */}
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {mod.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {mod.description}
          </p>

          {/* Metadata badges */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Badge
              variant="outline"
              className={difficultyColors[mod.difficulty]}
            >
              {mod.difficulty}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              {mod.duration} min
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <BookOpen className="h-3 w-3" />
              {chapters.length} chapters
            </Badge>
          </div>

          {/* Chapter list */}
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Chapters
            </h2>
            <ol className="space-y-3">
              {chapters.map((ch, index) => (
                <li key={ch.slug}>
                  <Link
                    href={`/understand/modules/${slug}/${ch.sortIndex}`}
                    className="group flex items-center gap-4 rounded-lg border bg-white p-4 transition-colors hover:bg-slate-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {ch.title}
                      </p>
                      {ch.description && (
                        <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
                          {ch.description}
                        </p>
                      )}
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {ch.type === 'quiz' ? (
                          <GraduationCap className="mr-1 h-3 w-3" />
                        ) : null}
                        {typeIcons[ch.type] ?? ch.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {ch.duration} min
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}
