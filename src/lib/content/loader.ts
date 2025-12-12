import "server-only"
import * as fs from "fs"
import * as path from "path"
import { db } from "@/lib/db"
import { organizationContent } from "@/lib/db/schema"
import { eq, and } from "drizzle-orm"

// Content types supported by the loader
export type ContentType =
  | "module"
  | "assessment"
  | "standard"
  | "glossary"
  | "faq"
  | "policy-template"

// Base path for content files
const CONTENT_BASE_PATH = path.join(process.cwd(), "content")

/**
 * Content Loader - 3-tier content resolution
 *
 * Priority order:
 * 1. Organization custom content (database)
 * 2. Default content (file system /content/)
 * 3. System content (read-only, fallback)
 */

// ============================================
// Module Content
// ============================================

export interface ModuleMetadata {
  id: string
  slug: string
  title: string
  description: string
  category: string
  difficulty: string
  duration: string
  order: number
  isPublished: boolean
  chapterCount: number
}

export interface ChapterMetadata {
  id: string
  title: string
  description?: string
  type: "lesson" | "quiz"
  duration?: string
  videoUrl?: string
  questions?: any[]
}

export async function getModuleIndex(
  organizationId?: string
): Promise<ModuleMetadata[]> {
  // Try org-specific content first
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "module"),
          eq(organizationContent.contentId, "index")
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  // Fall back to file system
  const indexPath = path.join(CONTENT_BASE_PATH, "modules", "index.json")
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, "utf-8")
    return JSON.parse(content)
  }

  return []
}

export async function getModule(
  slug: string,
  organizationId?: string
): Promise<ModuleMetadata | null> {
  // Try org-specific content first
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "module"),
          eq(organizationContent.contentId, slug)
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  // Fall back to file system
  const modulePath = path.join(
    CONTENT_BASE_PATH,
    "modules",
    slug,
    "module.json"
  )
  if (fs.existsSync(modulePath)) {
    const content = fs.readFileSync(modulePath, "utf-8")
    return JSON.parse(content)
  }

  return null
}

export async function getChapter(
  moduleSlug: string,
  chapterIndex: number,
  organizationId?: string
): Promise<{ metadata: ChapterMetadata; content?: string } | null> {
  // List chapter files
  const chaptersPath = path.join(
    CONTENT_BASE_PATH,
    "modules",
    moduleSlug,
    "chapters"
  )
  if (!fs.existsSync(chaptersPath)) {
    return null
  }

  // Find file with matching index
  const files = fs.readdirSync(chaptersPath).filter((f) => f.endsWith(".json"))
  const jsonFile = files.find((f) => f.startsWith(`${chapterIndex.toString().padStart(2, "0")}-`))

  if (!jsonFile) {
    return null
  }

  const metadataPath = path.join(chaptersPath, jsonFile)
  const metadata: ChapterMetadata = JSON.parse(
    fs.readFileSync(metadataPath, "utf-8")
  )

  // If quiz, return as-is (questions embedded in metadata)
  if (metadata.type === "quiz") {
    return { metadata }
  }

  // For lessons, try to load markdown content
  const mdFile = jsonFile.replace(".json", ".md")
  const mdPath = path.join(chaptersPath, mdFile)
  let content: string | undefined

  if (fs.existsSync(mdPath)) {
    content = fs.readFileSync(mdPath, "utf-8")
  }

  return { metadata, content }
}

export async function getAllChapters(
  moduleSlug: string,
  organizationId?: string
): Promise<ChapterMetadata[]> {
  const chaptersPath = path.join(
    CONTENT_BASE_PATH,
    "modules",
    moduleSlug,
    "chapters"
  )
  if (!fs.existsSync(chaptersPath)) {
    return []
  }

  const files = fs
    .readdirSync(chaptersPath)
    .filter((f) => f.endsWith(".json"))
    .sort()

  return files.map((file) => {
    const filePath = path.join(chaptersPath, file)
    return JSON.parse(fs.readFileSync(filePath, "utf-8"))
  })
}

// ============================================
// Assessment Content
// ============================================

export interface AssessmentSectionMetadata {
  id: string
  title: string
  article: string
  category: string
  questionCount: number
}

export interface AssessmentQuestion {
  id: string
  question: string
  description?: string
  category: string
  subcategory?: string
  article: string
  weight: number
  riskTrigger?: "prohibited" | "high-risk" | "limited-risk" | "minimal"
  answerType:
    | "yes_no"
    | "yes_no_partial"
    | "yes_no_na"
    | "scale"
    | "multiple_choice"
  options?: { value: string; label: string; score?: number }[]
  guidance?: string
  evidenceRequired?: string[]
  followUp?: string[]
}

export async function getAssessmentIndex(
  organizationId?: string
): Promise<AssessmentSectionMetadata[]> {
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "assessment"),
          eq(organizationContent.contentId, "index")
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  const indexPath = path.join(CONTENT_BASE_PATH, "assessments", "index.json")
  if (fs.existsSync(indexPath)) {
    return JSON.parse(fs.readFileSync(indexPath, "utf-8"))
  }

  return []
}

export async function getAssessmentQuestions(
  sectionId: string,
  organizationId?: string
): Promise<AssessmentQuestion[]> {
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "assessment"),
          eq(organizationContent.contentId, sectionId)
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  const questionsPath = path.join(
    CONTENT_BASE_PATH,
    "assessments",
    sectionId,
    "questions.json"
  )
  if (fs.existsSync(questionsPath)) {
    return JSON.parse(fs.readFileSync(questionsPath, "utf-8"))
  }

  return []
}

// ============================================
// Standards Content
// ============================================

export interface StandardMetadata {
  id: string
  title: string
  version: string
  status: string
  category: string
  euAiActRef: string
  controlCount: number
}

export interface StandardControl {
  id: string
  title: string
  description: string
  requirements?: string[]
  evidence?: string[]
  status?: string
  progress?: number
}

export async function getStandardsIndex(
  organizationId?: string
): Promise<StandardMetadata[]> {
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "standard"),
          eq(organizationContent.contentId, "index")
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  const indexPath = path.join(CONTENT_BASE_PATH, "standards", "index.json")
  if (fs.existsSync(indexPath)) {
    return JSON.parse(fs.readFileSync(indexPath, "utf-8"))
  }

  return []
}

export async function getStandard(
  standardId: string,
  organizationId?: string
): Promise<{
  metadata: StandardMetadata
  controls: StandardControl[]
  guidance?: string
} | null> {
  const standardPath = path.join(
    CONTENT_BASE_PATH,
    "standards",
    standardId.toLowerCase()
  )
  if (!fs.existsSync(standardPath)) {
    return null
  }

  const metadataPath = path.join(standardPath, "metadata.json")
  const controlsPath = path.join(standardPath, "controls.json")
  const guidancePath = path.join(standardPath, "guidance.md")

  if (!fs.existsSync(metadataPath)) {
    return null
  }

  const metadata: StandardMetadata = JSON.parse(
    fs.readFileSync(metadataPath, "utf-8")
  )

  let controls: StandardControl[] = []
  if (fs.existsSync(controlsPath)) {
    controls = JSON.parse(fs.readFileSync(controlsPath, "utf-8"))
  }

  let guidance: string | undefined
  if (fs.existsSync(guidancePath)) {
    guidance = fs.readFileSync(guidancePath, "utf-8")
  }

  return { metadata, controls, guidance }
}

// ============================================
// Glossary Content
// ============================================

export interface GlossaryCategory {
  id: string
  title: string
  termCount: number
}

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  category: string
  article: string
  related: string[]
  examples?: string[]
  keyPoints?: string[]
}

export async function getGlossaryIndex(
  organizationId?: string
): Promise<GlossaryCategory[]> {
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "glossary"),
          eq(organizationContent.contentId, "index")
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  const indexPath = path.join(CONTENT_BASE_PATH, "glossary", "index.json")
  if (fs.existsSync(indexPath)) {
    return JSON.parse(fs.readFileSync(indexPath, "utf-8"))
  }

  return []
}

export async function getGlossaryTerms(
  organizationId?: string
): Promise<GlossaryTerm[]> {
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "glossary"),
          eq(organizationContent.contentId, "terms")
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  const termsPath = path.join(CONTENT_BASE_PATH, "glossary", "terms.json")
  if (fs.existsSync(termsPath)) {
    return JSON.parse(fs.readFileSync(termsPath, "utf-8"))
  }

  return []
}

export async function getGlossaryByCategory(
  categoryId: string,
  organizationId?: string
): Promise<GlossaryTerm[]> {
  const categoryPath = path.join(
    CONTENT_BASE_PATH,
    "glossary",
    `${categoryId}.json`
  )
  if (fs.existsSync(categoryPath)) {
    return JSON.parse(fs.readFileSync(categoryPath, "utf-8"))
  }

  // Fall back to filtering from all terms
  const allTerms = await getGlossaryTerms(organizationId)
  return allTerms.filter(
    (t) => t.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === categoryId
  )
}

// ============================================
// FAQ Content
// ============================================

export interface FAQCategory {
  id: string
  label: string
  count?: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export async function getFAQIndex(organizationId?: string): Promise<{
  categories: FAQCategory[]
  faqCount: number
}> {
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "faq"),
          eq(organizationContent.contentId, "index")
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  const indexPath = path.join(CONTENT_BASE_PATH, "faq", "index.json")
  if (fs.existsSync(indexPath)) {
    return JSON.parse(fs.readFileSync(indexPath, "utf-8"))
  }

  return { categories: [], faqCount: 0 }
}

export async function getFAQs(organizationId?: string): Promise<FAQ[]> {
  if (organizationId) {
    const orgContent = await db
      .select()
      .from(organizationContent)
      .where(
        and(
          eq(organizationContent.organizationId, organizationId),
          eq(organizationContent.contentType, "faq"),
          eq(organizationContent.contentId, "faqs")
        )
      )
      .limit(1)

    if (orgContent.length > 0) {
      return JSON.parse(orgContent[0].content)
    }
  }

  const faqsPath = path.join(CONTENT_BASE_PATH, "faq", "faqs.json")
  if (fs.existsSync(faqsPath)) {
    return JSON.parse(fs.readFileSync(faqsPath, "utf-8"))
  }

  return []
}

// ============================================
// Organization Content Management
// ============================================

export async function setOrganizationContent(
  organizationId: string,
  contentType: ContentType,
  contentId: string,
  content: unknown
): Promise<void> {
  const now = new Date()
  const id = `${organizationId}-${contentType}-${contentId}`

  await db
    .insert(organizationContent)
    .values({
      id,
      organizationId,
      contentType,
      contentId,
      content: JSON.stringify(content),
      isCustomized: true,
      version: "1.0",
      createdAt: now,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: [
        organizationContent.organizationId,
        organizationContent.contentType,
        organizationContent.contentId,
      ],
      set: {
        content: JSON.stringify(content),
        updatedAt: now,
      },
    })
}

export async function deleteOrganizationContent(
  organizationId: string,
  contentType: ContentType,
  contentId: string
): Promise<void> {
  await db
    .delete(organizationContent)
    .where(
      and(
        eq(organizationContent.organizationId, organizationId),
        eq(organizationContent.contentType, contentType),
        eq(organizationContent.contentId, contentId)
      )
    )
}

export async function getOrganizationContentList(
  organizationId: string,
  contentType?: ContentType
): Promise<
  Array<{
    contentType: string
    contentId: string
    isCustomized: boolean
    version: string
    updatedAt: Date
  }>
> {
  const conditions = [eq(organizationContent.organizationId, organizationId)]

  if (contentType) {
    conditions.push(eq(organizationContent.contentType, contentType))
  }

  const results = await db
    .select({
      contentType: organizationContent.contentType,
      contentId: organizationContent.contentId,
      isCustomized: organizationContent.isCustomized,
      version: organizationContent.version,
      updatedAt: organizationContent.updatedAt,
    })
    .from(organizationContent)
    .where(and(...conditions))

  return results.map((r) => ({
    contentType: r.contentType,
    contentId: r.contentId,
    isCustomized: r.isCustomized ?? true,
    version: r.version ?? "1.0",
    updatedAt: r.updatedAt,
  }))
}
