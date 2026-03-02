import * as fs from 'fs'
import * as path from 'path'

// ---------------------------------------------------------------------------
// Base path
// ---------------------------------------------------------------------------
const CONTENT_DIR = path.join(process.cwd(), 'content')

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

// Modules
export interface ModuleMetadata {
  id: string
  slug: string
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  order: number
  isPublished: boolean
  chapterCount: number
}

export interface ChapterMetadata {
  id: number
  title: string
  description: string
  type: string
  duration: number
  videoUrl: string | null
  sortIndex: number
  slug: string // e.g. "00-1"
}

// Standards
export interface StandardMetadata {
  id: string
  title: string
  version: string
  status: string
  category: string
  euAiActRef?: string
  controlCount: number
}

export interface Control {
  id: string
  name: string
  type: string
  frequency: string
  riskLevel: string
  objective: string
  requirements: string[]
  evidence: string[]
  auditVerification: string[]
  status: string
  progress: number
}

// Guides
export interface GuideCategory {
  id: string
  label: string
  count: number
}

export interface GuideMetadata {
  id: string
  title: string
  category: string
  filename: string
}

// Regulation
export interface RegulationSection {
  slug: string
  title: string
  filename: string
  order: number
}

// Glossary
export interface GlossaryCategory {
  id: string
  title: string
  termCount: number
}

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  article: string
  category: string
  related: string[]
  keyPoints: string[]
}

// FAQ
export interface FaqCategory {
  id: string
  label: string
  count: number
}

export interface Faq {
  id: string
  question: string
  answer: string
  category: string
}

// Assessments
export interface AssessmentSection {
  id: string
  title: string
  article: string
  category: string
  questionCount: number
}

export interface AssessmentQuestion {
  id: string
  question: string
  description: string
  category: string
  subcategory: string
  article: string
  weight: number
  riskTrigger: string
  answerType: string
  guidance: string
  evidenceRequired?: string[]
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readJsonFile<T>(filePath: string): T | null {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function readTextFile(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return null
  }
}

function dirExists(dirPath: string): boolean {
  try {
    return fs.statSync(dirPath).isDirectory()
  } catch {
    return false
  }
}

function listFiles(dirPath: string): string[] {
  try {
    return fs.readdirSync(dirPath)
  } catch {
    return []
  }
}

// ---------------------------------------------------------------------------
// Modules
// ---------------------------------------------------------------------------

export async function getModuleIndex(): Promise<ModuleMetadata[]> {
  const data = readJsonFile<ModuleMetadata[]>(
    path.join(CONTENT_DIR, 'modules', 'index.json'),
  )
  return data ?? []
}

export async function getModule(slug: string): Promise<ModuleMetadata | null> {
  // Try module-specific module.json first
  const moduleJson = readJsonFile<Omit<ModuleMetadata, 'chapterCount'>>(
    path.join(CONTENT_DIR, 'modules', slug, 'module.json'),
  )
  if (moduleJson) {
    // Get chapter count by listing chapter files
    const chapters = await getChapterList(slug)
    return { ...moduleJson, chapterCount: chapters.length } as ModuleMetadata
  }
  // Fallback to index
  const modules = await getModuleIndex()
  return modules.find((m) => m.slug === slug) ?? null
}

export async function getChapterList(
  moduleSlug: string,
): Promise<ChapterMetadata[]> {
  const chaptersDir = path.join(
    CONTENT_DIR,
    'modules',
    moduleSlug,
    'chapters',
    'en',
  )
  if (!dirExists(chaptersDir)) return []

  const files = listFiles(chaptersDir)
  const jsonFiles = files.filter((f) => f.endsWith('.json'))

  const chapters: ChapterMetadata[] = []

  for (const file of jsonFiles) {
    const slug = file.replace('.json', '')
    const parts = slug.split('-')
    const sortIndex = parseInt(parts[0], 10)

    const meta = readJsonFile<Omit<ChapterMetadata, 'sortIndex' | 'slug'>>(
      path.join(chaptersDir, file),
    )
    if (meta) {
      chapters.push({ ...meta, sortIndex, slug })
    }
  }

  chapters.sort((a, b) => a.sortIndex - b.sortIndex)
  return chapters
}

export async function getChapter(
  moduleSlug: string,
  chapterIndex: number,
): Promise<{ metadata: ChapterMetadata; content: string } | null> {
  const chapters = await getChapterList(moduleSlug)
  const chapter = chapters.find((c) => c.sortIndex === chapterIndex)
  if (!chapter) return null

  const mdPath = path.join(
    CONTENT_DIR,
    'modules',
    moduleSlug,
    'chapters',
    'en',
    `${chapter.slug}.md`,
  )
  const content = readTextFile(mdPath)
  if (!content) return null

  return { metadata: chapter, content }
}

// ---------------------------------------------------------------------------
// Standards
// ---------------------------------------------------------------------------

export async function getStandardIndex(): Promise<StandardMetadata[]> {
  const data = readJsonFile<StandardMetadata[]>(
    path.join(CONTENT_DIR, 'standards', 'index.json'),
  )
  return data ?? []
}

export async function getStandard(
  id: string,
): Promise<{
  metadata: StandardMetadata
  controls: Control[]
  guidance: string
} | null> {
  const stdDir = path.join(CONTENT_DIR, 'standards', id)
  if (!dirExists(stdDir)) return null

  const metadata = readJsonFile<StandardMetadata>(
    path.join(stdDir, 'metadata.json'),
  )
  if (!metadata) return null

  const controls = readJsonFile<Control[]>(path.join(stdDir, 'controls.json')) ?? []
  const guidance = readTextFile(path.join(stdDir, 'guidance.md')) ?? ''

  return { metadata, controls, guidance }
}

// ---------------------------------------------------------------------------
// Guides
// ---------------------------------------------------------------------------

const GUIDE_CATEGORY_LABELS: Record<string, string> = {
  'assessment-tools': 'Assessment Tools',
  checklists: 'Checklists',
  forms: 'Forms',
  procedures: 'Procedures',
  records: 'Records',
}

function extractTitleFromMarkdown(content: string): string {
  const match = content.match(/^#\s+(.+)$/m)
  if (match) return match[1].trim()
  return 'Untitled'
}

export async function getGuideCategories(): Promise<GuideCategory[]> {
  const guidesDir = path.join(CONTENT_DIR, 'guides')
  if (!dirExists(guidesDir)) return []

  const dirs = listFiles(guidesDir).filter((f) =>
    dirExists(path.join(guidesDir, f)),
  )

  return dirs.map((dir) => {
    const files = listFiles(path.join(guidesDir, dir)).filter((f) =>
      f.endsWith('.md'),
    )
    return {
      id: dir,
      label: GUIDE_CATEGORY_LABELS[dir] ?? dir,
      count: files.length,
    }
  })
}

export async function getGuidesByCategory(
  category: string,
): Promise<GuideMetadata[]> {
  const catDir = path.join(CONTENT_DIR, 'guides', category)
  if (!dirExists(catDir)) return []

  const files = listFiles(catDir).filter((f) => f.endsWith('.md'))

  return files.map((filename) => {
    const id = filename.replace('.md', '')
    const content = readTextFile(path.join(catDir, filename)) ?? ''
    const title = extractTitleFromMarkdown(content)
    return { id, title, category, filename }
  })
}

export async function getGuide(
  category: string,
  id: string,
): Promise<{ metadata: GuideMetadata; content: string } | null> {
  const filePath = path.join(CONTENT_DIR, 'guides', category, `${id}.md`)
  const content = readTextFile(filePath)
  if (!content) return null

  const title = extractTitleFromMarkdown(content)
  const metadata: GuideMetadata = {
    id,
    title,
    category,
    filename: `${id}.md`,
  }

  return { metadata, content }
}

// ---------------------------------------------------------------------------
// Regulation
// ---------------------------------------------------------------------------

export async function getRegulationIndex(): Promise<RegulationSection[]> {
  const regDir = path.join(CONTENT_DIR, 'regulation', 'en')
  if (!dirExists(regDir)) return []

  const files = listFiles(regDir)
    .filter((f) => f.endsWith('.md'))
    .filter((f) => f !== 'EXTRACTION_SUMMARY.md' && f !== 'README.md')
    .sort()

  return files.map((filename, index) => {
    const slug = filename.replace('.md', '')
    const content = readTextFile(path.join(regDir, filename)) ?? ''
    const title = extractTitleFromMarkdown(content)
    return { slug, title, filename, order: index }
  })
}

export async function getRegulationSection(
  slug: string,
): Promise<{ metadata: RegulationSection; content: string } | null> {
  const regDir = path.join(CONTENT_DIR, 'regulation', 'en')
  const filePath = path.join(regDir, `${slug}.md`)
  const content = readTextFile(filePath)
  if (!content) return null

  const title = extractTitleFromMarkdown(content)
  const metadata: RegulationSection = {
    slug,
    title,
    filename: `${slug}.md`,
    order: 0,
  }

  return { metadata, content }
}

// ---------------------------------------------------------------------------
// Glossary
// ---------------------------------------------------------------------------

export async function getGlossaryIndex(): Promise<GlossaryCategory[]> {
  const data = readJsonFile<GlossaryCategory[]>(
    path.join(CONTENT_DIR, 'glossary', 'index.json'),
  )
  return data ?? []
}

export async function getGlossaryTerms(
  categoryId: string,
): Promise<GlossaryTerm[]> {
  const data = readJsonFile<GlossaryTerm[]>(
    path.join(CONTENT_DIR, 'glossary', `${categoryId}.json`),
  )
  return data ?? []
}

export async function getAllGlossaryTerms(): Promise<GlossaryTerm[]> {
  const categories = await getGlossaryIndex()
  const allTerms: GlossaryTerm[] = []

  for (const cat of categories) {
    const terms = await getGlossaryTerms(cat.id)
    allTerms.push(...terms)
  }

  return allTerms
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export async function getFaqCategories(): Promise<FaqCategory[]> {
  const data = readJsonFile<FaqCategory[]>(
    path.join(CONTENT_DIR, 'faq', 'categories.json'),
  )
  return data ?? []
}

export async function getFaqs(): Promise<Faq[]> {
  const data = readJsonFile<Faq[]>(path.join(CONTENT_DIR, 'faq', 'faqs.json'))
  return data ?? []
}

// ---------------------------------------------------------------------------
// Assessments
// ---------------------------------------------------------------------------

export async function getAssessmentIndex(): Promise<AssessmentSection[]> {
  const data = readJsonFile<AssessmentSection[]>(
    path.join(CONTENT_DIR, 'assessments', 'index.json'),
  )
  return data ?? []
}

export async function getAssessmentQuestions(
  sectionId: string,
): Promise<AssessmentQuestion[]> {
  const data = readJsonFile<AssessmentQuestion[]>(
    path.join(CONTENT_DIR, 'assessments', sectionId, 'questions.json'),
  )
  return data ?? []
}
