import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  getRegulationIndex,
  getRegulationSection,
} from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { SidebarNav, type SidebarNavItem } from '@/components/layout/sidebar-nav'
import { MarkdownRenderer } from '@/components/content/markdown-renderer'
import { TableOfContents } from '@/components/content/table-of-contents'
import { extractTocItems } from '@/lib/content/toc'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const sections = await getRegulationIndex()
  return sections.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = await getRegulationSection(slug)
  if (!data) return { title: 'Section Not Found' }
  return {
    title: `${data.metadata.title} — EU AI Act`,
    description: `Read ${data.metadata.title} of the EU AI Act regulation.`,
  }
}

export default async function RegulationSectionPage({ params }: PageProps) {
  const { slug } = await params
  const [data, allSections] = await Promise.all([
    getRegulationSection(slug),
    getRegulationIndex(),
  ])

  if (!data) notFound()

  const sidebarItems: SidebarNavItem[] = allSections.map((s) => ({
    label: s.title,
    href: `/understand/regulation/${s.slug}`,
  }))

  const tocItems = extractTocItems(data.content)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Understand', href: '/understand' },
          { label: 'EU AI Act', href: '/understand/regulation' },
          { label: data.metadata.title },
        ]}
      />

      <div className="mt-8 flex gap-10">
        {/* Sidebar */}
        <SidebarNav items={sidebarItems} title="Regulation" />

        {/* Main content */}
        <article className="min-w-0 max-w-3xl flex-1">
          <MarkdownRenderer content={data.content} />
        </article>

        {/* Table of contents */}
        <TableOfContents items={tocItems} />
      </div>
    </div>
  )
}
