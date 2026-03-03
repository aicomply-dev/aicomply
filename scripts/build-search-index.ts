/**
 * Build a search index for client-side content search.
 *
 * Reads all content files (modules, standards, guides, regulation, glossary,
 * FAQ) and emits public/search-index.json so the front-end can load it lazily
 * and search with Fuse.js.
 *
 * Run: npx tsx scripts/build-search-index.ts
 */

import * as fs from 'fs'
import * as path from 'path'

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.join(process.cwd(), 'content')
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'search-index.json')

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SearchEntry {
  title: string
  description: string
  url: string
  category: string
  snippet: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readJson<T>(filePath: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T
  } catch {
    return null
  }
}

function readText(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return ''
  }
}

function dirExists(p: string): boolean {
  try {
    return fs.statSync(p).isDirectory()
  } catch {
    return false
  }
}

function listFiles(p: string): string[] {
  try {
    return fs.readdirSync(p)
  } catch {
    return []
  }
}

/** Strip markdown syntax and return first ~200 words */
function snippetFromMarkdown(md: string, wordLimit = 200): string {
  const text = md
    .replace(/^#{1,6}\s+.*$/gm, '') // headings
    .replace(/!\[.*?\]\(.*?\)/g, '') // images
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // links → text
    .replace(/[*_`~>|]/g, '') // formatting chars
    .replace(/\n{2,}/g, '\n')
    .trim()

  const words = text.split(/\s+/)
  return words.slice(0, wordLimit).join(' ')
}

function extractTitleFromMd(content: string): string {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : 'Untitled'
}

// ---------------------------------------------------------------------------
// Indexers
// ---------------------------------------------------------------------------

function indexModules(entries: SearchEntry[]) {
  interface ModuleMeta {
    slug: string
    title: string
    description: string
  }
  interface ChapterMeta {
    title: string
    description: string
  }

  const modules = readJson<ModuleMeta[]>(
    path.join(CONTENT_DIR, 'modules', 'index.json'),
  )
  if (!modules) return

  for (const mod of modules) {
    entries.push({
      title: mod.title,
      description: mod.description,
      url: `/understand/modules/${mod.slug}`,
      category: 'Module',
      snippet: mod.description,
    })

    // Chapters
    const chaptersDir = path.join(
      CONTENT_DIR,
      'modules',
      mod.slug,
      'chapters',
      'en',
    )
    if (!dirExists(chaptersDir)) continue

    const jsonFiles = listFiles(chaptersDir).filter((f) => f.endsWith('.json'))
    for (const file of jsonFiles) {
      const slug = file.replace('.json', '')
      const parts = slug.split('-')
      const sortIndex = parseInt(parts[0], 10)

      const meta = readJson<ChapterMeta>(path.join(chaptersDir, file))
      if (!meta) continue

      const mdPath = path.join(chaptersDir, `${slug}.md`)
      const mdContent = readText(mdPath)

      entries.push({
        title: meta.title,
        description: meta.description || '',
        url: `/understand/modules/${mod.slug}/${sortIndex}`,
        category: 'Chapter',
        snippet: snippetFromMarkdown(mdContent),
      })
    }
  }
}

function indexStandards(entries: SearchEntry[]) {
  interface StandardMeta {
    id: string
    title: string
    category: string
    euAiActRef?: string
  }

  const standards = readJson<StandardMeta[]>(
    path.join(CONTENT_DIR, 'standards', 'index.json'),
  )
  if (!standards) return

  for (const std of standards) {
    const guidancePath = path.join(
      CONTENT_DIR,
      'standards',
      std.id,
      'guidance.md',
    )
    const guidance = readText(guidancePath)

    entries.push({
      title: `${std.id.toUpperCase()} - ${std.title}`,
      description: `EU AI Act compliance standard: ${std.title}`,
      url: `/implement/standards/${std.id}`,
      category: 'Standard',
      snippet: snippetFromMarkdown(guidance),
    })
  }
}

function indexGuides(entries: SearchEntry[]) {
  const LABELS: Record<string, string> = {
    'assessment-tools': 'Assessment Tools',
    checklists: 'Checklists',
    forms: 'Forms',
    procedures: 'Procedures',
    records: 'Records',
  }

  const guidesDir = path.join(CONTENT_DIR, 'guides')
  if (!dirExists(guidesDir)) return

  const cats = listFiles(guidesDir).filter((f) =>
    dirExists(path.join(guidesDir, f)),
  )

  for (const cat of cats) {
    const catDir = path.join(guidesDir, cat)
    const files = listFiles(catDir).filter((f) => f.endsWith('.md'))

    for (const file of files) {
      const id = file.replace('.md', '')
      const content = readText(path.join(catDir, file))
      const title = extractTitleFromMd(content)

      entries.push({
        title,
        description: `${LABELS[cat] ?? cat} guide for EU AI Act compliance`,
        url: `/implement/guides/${cat}/${id}`,
        category: LABELS[cat] ?? 'Guide',
        snippet: snippetFromMarkdown(content),
      })
    }
  }
}

function indexRegulation(entries: SearchEntry[]) {
  const regDir = path.join(CONTENT_DIR, 'regulation', 'en')
  if (!dirExists(regDir)) return

  const files = listFiles(regDir)
    .filter(
      (f) =>
        f.endsWith('.md') &&
        f !== 'EXTRACTION_SUMMARY.md' &&
        f !== 'README.md',
    )
    .sort()

  for (const file of files) {
    const slug = file.replace('.md', '')
    const content = readText(path.join(regDir, file))
    const title = extractTitleFromMd(content)

    entries.push({
      title,
      description: `EU AI Act: ${title}`,
      url: `/understand/regulation/${slug}`,
      category: 'Regulation',
      snippet: snippetFromMarkdown(content),
    })
  }
}

function indexGlossary(entries: SearchEntry[]) {
  interface GlossCat {
    id: string
    title: string
  }
  interface GlossTerm {
    term: string
    definition: string
  }

  const categories = readJson<GlossCat[]>(
    path.join(CONTENT_DIR, 'glossary', 'index.json'),
  )
  if (!categories) return

  for (const cat of categories) {
    const terms = readJson<GlossTerm[]>(
      path.join(CONTENT_DIR, 'glossary', `${cat.id}.json`),
    )
    if (!terms) continue

    for (const term of terms) {
      entries.push({
        title: term.term,
        description: term.definition,
        url: `/understand/glossary`,
        category: 'Glossary',
        snippet: term.definition,
      })
    }
  }
}

function indexFaq(entries: SearchEntry[]) {
  interface FaqItem {
    question: string
    answer: string
  }

  const faqs = readJson<FaqItem[]>(
    path.join(CONTENT_DIR, 'faq', 'faqs.json'),
  )
  if (!faqs) return

  for (const faq of faqs) {
    entries.push({
      title: faq.question,
      description: faq.answer,
      url: `/understand/faq`,
      category: 'FAQ',
      snippet: faq.answer.slice(0, 300),
    })
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('[search-index] Building search index...')
  const entries: SearchEntry[] = []

  try {
    indexModules(entries)
    indexStandards(entries)
    indexGuides(entries)
    indexRegulation(entries)
    indexGlossary(entries)
    indexFaq(entries)

    // Ensure public dir exists
    const publicDir = path.dirname(OUTPUT_PATH)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(entries, null, 0))
    console.log(
      `[search-index] Done. ${entries.length} entries written to ${OUTPUT_PATH}`,
    )
  } catch (err) {
    console.warn('[search-index] Warning: failed to build search index:', err)
    // Write empty array so the app doesn't break
    fs.writeFileSync(OUTPUT_PATH, '[]')
    // Don't exit with error code — prebuild should not break the build
  }
}

main()
