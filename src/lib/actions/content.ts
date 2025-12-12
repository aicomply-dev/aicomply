"use server"

import {
  getModuleIndex,
  getModule,
  getChapter,
  getAllChapters,
  getAssessmentIndex,
  getAssessmentQuestions,
  getStandardsIndex,
  getStandard,
  getGlossaryIndex,
  getGlossaryTerms,
  getGlossaryByCategory,
  getFAQIndex,
  getFAQs,
  type ModuleMetadata,
  type ChapterMetadata,
  type AssessmentSectionMetadata,
  type AssessmentQuestion,
  type StandardMetadata,
  type StandardControl,
  type GlossaryCategory,
  type GlossaryTerm,
  type FAQCategory,
  type FAQ,
} from "@/lib/content/loader"
import { getSession } from "@/lib/auth/session"

// Re-export types for consumers
export type {
  ModuleMetadata,
  ChapterMetadata,
  AssessmentSectionMetadata,
  AssessmentQuestion,
  StandardMetadata,
  StandardControl,
  GlossaryCategory,
  GlossaryTerm,
  FAQCategory,
  FAQ,
}

// Helper to get current user's organization ID
async function getOrganizationId(): Promise<string | undefined> {
  const session = await getSession()
  // TODO: Get organization from user profile when multi-org is implemented
  return session?.user?.organizationId
}

// ============================================
// Module Content Actions
// ============================================

export async function loadModuleIndex(): Promise<ModuleMetadata[]> {
  const orgId = await getOrganizationId()
  return getModuleIndex(orgId)
}

export async function loadModule(slug: string): Promise<ModuleMetadata | null> {
  const orgId = await getOrganizationId()
  return getModule(slug, orgId)
}

export async function loadChapter(
  moduleSlug: string,
  chapterIndex: number
): Promise<{ metadata: ChapterMetadata; content?: string } | null> {
  const orgId = await getOrganizationId()
  return getChapter(moduleSlug, chapterIndex, orgId)
}

export async function loadAllChapters(
  moduleSlug: string
): Promise<ChapterMetadata[]> {
  const orgId = await getOrganizationId()
  return getAllChapters(moduleSlug, orgId)
}

// ============================================
// Assessment Content Actions
// ============================================

export async function loadAssessmentIndex(): Promise<AssessmentSectionMetadata[]> {
  const orgId = await getOrganizationId()
  return getAssessmentIndex(orgId)
}

export async function loadAssessmentQuestions(
  sectionId: string
): Promise<AssessmentQuestion[]> {
  const orgId = await getOrganizationId()
  return getAssessmentQuestions(sectionId, orgId)
}

export async function loadAllAssessmentQuestions(): Promise<AssessmentQuestion[]> {
  const orgId = await getOrganizationId()
  const sections = await getAssessmentIndex(orgId)

  const allQuestions: AssessmentQuestion[] = []
  for (const section of sections) {
    const questions = await getAssessmentQuestions(section.id, orgId)
    allQuestions.push(...questions)
  }

  return allQuestions
}

// ============================================
// Standards Content Actions
// ============================================

export async function loadStandardsIndex(): Promise<StandardMetadata[]> {
  const orgId = await getOrganizationId()
  return getStandardsIndex(orgId)
}

export async function loadStandard(standardId: string): Promise<{
  metadata: StandardMetadata
  controls: StandardControl[]
  guidance?: string
} | null> {
  const orgId = await getOrganizationId()
  return getStandard(standardId, orgId)
}

// ============================================
// Glossary Content Actions
// ============================================

export async function loadGlossaryIndex(): Promise<GlossaryCategory[]> {
  const orgId = await getOrganizationId()
  return getGlossaryIndex(orgId)
}

export async function loadGlossaryTerms(): Promise<GlossaryTerm[]> {
  const orgId = await getOrganizationId()
  return getGlossaryTerms(orgId)
}

export async function loadGlossaryCategories(): Promise<string[]> {
  const index = await loadGlossaryIndex()
  return index.map((cat) => cat.title)
}

export async function loadGlossaryByCategory(
  categoryId: string
): Promise<GlossaryTerm[]> {
  const orgId = await getOrganizationId()
  return getGlossaryByCategory(categoryId, orgId)
}

// ============================================
// FAQ Content Actions
// ============================================

export async function loadFAQIndex(): Promise<{
  categories: FAQCategory[]
  faqCount: number
}> {
  const orgId = await getOrganizationId()
  return getFAQIndex(orgId)
}

export async function loadFAQs(): Promise<FAQ[]> {
  const orgId = await getOrganizationId()
  return getFAQs(orgId)
}
