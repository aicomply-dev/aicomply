/**
 * Compliance Scoring Utilities
 * Extracted calculation logic for compliance scores
 */

import type { AssessmentSection, AssessmentQuestion } from "@/lib/data/assessment-questions/types"
import { getSectionById } from "@/lib/data/assessment-questions"

export interface ComplianceScoreResult {
  score: number
  totalQuestions: number
  answered: number
  compliant: number
  partial: number
  nonCompliant: number
  notApplicable: number
  gaps: { questionId: string; question: string; article: string }[]
}

/**
 * Calculate compliance score for a specific assessment section
 */
export function calculateComplianceScore(
  sectionId: string,
  answers: Record<string, { answer: string; notes?: string }>
): ComplianceScoreResult {
  const section = getSectionById(sectionId)
  if (!section) {
    throw new Error(`Section ${sectionId} not found`)
  }

  let answered = 0
  let compliant = 0
  let partial = 0
  let nonCompliant = 0
  let notApplicable = 0
  let totalWeight = 0
  let achievedWeight = 0

  const gaps: { questionId: string; question: string; article: string }[] = []

  for (const question of section.questions) {
    const answerData = answers[question.id]
    if (!answerData) continue

    answered++
    const answer = answerData.answer

    if (answer === "na" || answer === "not_applicable") {
      notApplicable++
      continue
    }

    totalWeight += question.weight

    if (answer === "yes") {
      compliant++
      achievedWeight += question.weight
    } else if (answer === "partial") {
      partial++
      achievedWeight += question.weight * 0.5
      gaps.push({
        questionId: question.id,
        question: question.question,
        article: question.article,
      })
    } else if (answer === "no") {
      nonCompliant++
      gaps.push({
        questionId: question.id,
        question: question.question,
        article: question.article,
      })
    }
  }

  const score = totalWeight > 0 ? Math.round((achievedWeight / totalWeight) * 100) : 0

  return {
    score,
    totalQuestions: section.questions.length,
    answered,
    compliant,
    partial,
    nonCompliant,
    notApplicable,
    gaps,
  }
}
