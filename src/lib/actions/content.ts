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

// ============================================
// Module Content Actions
// ============================================

export async function loadModuleIndex(): Promise<ModuleMetadata[]> {
  return getModuleIndex()
}

export async function loadModule(slug: string): Promise<ModuleMetadata | null> {
  return getModule(slug)
}

export async function loadChapter(
  moduleSlug: string,
  chapterIndex: number
): Promise<{ metadata: ChapterMetadata; content?: string } | null> {
  return getChapter(moduleSlug, chapterIndex)
}

export async function loadAllChapters(
  moduleSlug: string
): Promise<ChapterMetadata[]> {
  return getAllChapters(moduleSlug)
}

// ============================================
// Assessment Content Actions
// ============================================

export async function loadAssessmentIndex(): Promise<AssessmentSectionMetadata[]> {
  return getAssessmentIndex()
}

export async function loadAssessmentQuestions(
  sectionId: string
): Promise<AssessmentQuestion[]> {
  return getAssessmentQuestions(sectionId)
}

export async function loadAllAssessmentQuestions(): Promise<AssessmentQuestion[]> {
  const sections = await getAssessmentIndex()

  const allQuestions: AssessmentQuestion[] = []
  for (const section of sections) {
    const questions = await getAssessmentQuestions(section.id)
    allQuestions.push(...questions)
  }

  return allQuestions
}

// ============================================
// Standards Content Actions
// ============================================

export async function loadStandardsIndex(): Promise<StandardMetadata[]> {
  return getStandardsIndex()
}

export async function loadStandard(standardId: string): Promise<{
  metadata: StandardMetadata
  controls: StandardControl[]
  guidance?: string
} | null> {
  return getStandard(standardId)
}

// ============================================
// Glossary Content Actions
// ============================================

export async function loadGlossaryIndex(): Promise<GlossaryCategory[]> {
  return getGlossaryIndex()
}

export async function loadGlossaryTerms(): Promise<GlossaryTerm[]> {
  return getGlossaryTerms()
}

export async function loadGlossaryCategories(): Promise<string[]> {
  const index = await loadGlossaryIndex()
  return index.map((cat) => cat.title)
}

export async function loadGlossaryByCategory(
  categoryId: string
): Promise<GlossaryTerm[]> {
  return getGlossaryByCategory(categoryId)
}

// ============================================
// FAQ Content Actions
// ============================================

export async function loadFAQIndex(): Promise<{
  categories: FAQCategory[]
  faqCount: number
}> {
  return getFAQIndex()
}

export async function loadFAQs(): Promise<FAQ[]> {
  return getFAQs()
}
