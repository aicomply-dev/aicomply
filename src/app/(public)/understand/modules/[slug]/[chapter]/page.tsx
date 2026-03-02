import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  getModule,
  getModuleIndex,
  getChapterList,
  getChapter,
} from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { SidebarNav, type SidebarNavItem } from '@/components/layout/sidebar-nav'
import { MarkdownRenderer } from '@/components/content/markdown-renderer'
import { TableOfContents } from '@/components/content/table-of-contents'
import { extractTocItems } from '@/lib/content/toc'
import { ChapterNav } from '@/components/content/chapter-nav'

interface PageProps {
  params: Promise<{ slug: string; chapter: string }>
}

export async function generateStaticParams() {
  const modules = await getModuleIndex()
  const allParams: { slug: string; chapter: string }[] = []

  for (const mod of modules) {
    const chapters = await getChapterList(mod.slug)
    for (const ch of chapters) {
      allParams.push({ slug: mod.slug, chapter: String(ch.sortIndex) })
    }
  }

  return allParams
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, chapter } = await params
  const chapterIndex = parseInt(chapter, 10)
  const data = await getChapter(slug, chapterIndex)
  const mod = await getModule(slug)

  if (!data || !mod) return { title: 'Chapter Not Found' }

  return {
    title: `${data.metadata.title} — ${mod.title}`,
    description: data.metadata.description,
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug, chapter } = await params
  const chapterIndex = parseInt(chapter, 10)

  const [mod, chapters, data] = await Promise.all([
    getModule(slug),
    getChapterList(slug),
    getChapter(slug, chapterIndex),
  ])

  if (!mod || !data) notFound()

  const currentIdx = chapters.findIndex(
    (c) => c.sortIndex === chapterIndex,
  )

  const prevChapter =
    currentIdx > 0
      ? {
          title: chapters[currentIdx - 1].title,
          href: `/understand/modules/${slug}/${chapters[currentIdx - 1].sortIndex}`,
        }
      : null

  const nextChapter =
    currentIdx < chapters.length - 1
      ? {
          title: chapters[currentIdx + 1].title,
          href: `/understand/modules/${slug}/${chapters[currentIdx + 1].sortIndex}`,
        }
      : null

  const sidebarItems: SidebarNavItem[] = chapters.map((ch) => ({
    label: ch.title,
    href: `/understand/modules/${slug}/${ch.sortIndex}`,
  }))

  const tocItems = extractTocItems(data.content)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Understand', href: '/understand' },
          { label: mod.title, href: `/understand/modules/${slug}` },
          { label: data.metadata.title },
        ]}
      />

      <div className="mt-8 flex gap-10">
        {/* Sidebar */}
        <SidebarNav items={sidebarItems} title="Chapters" />

        {/* Main content */}
        <article className="min-w-0 max-w-3xl flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {data.metadata.title}
          </h1>
          {data.metadata.description && (
            <p className="mt-2 text-lg text-muted-foreground">
              {data.metadata.description}
            </p>
          )}

          <div className="mt-8">
            <MarkdownRenderer content={data.content} />
          </div>

          <ChapterNav prevChapter={prevChapter} nextChapter={nextChapter} />
        </article>

        {/* Table of contents */}
        <TableOfContents items={tocItems} />
      </div>
    </div>
  )
}
