/**
 * Shared types for assessment questions
 */

export interface AssessmentQuestion {
  id: string
  question: string
  description?: string
  category: string
  subcategory?: string
  article: string
  weight: number
  riskTrigger?: "prohibited" | "high-risk" | "limited-risk" | "minimal"
  answerType: "yes_no" | "yes_no_partial" | "yes_no_na" | "scale" | "multiple_choice"
  options?: { value: string; label: string; score?: number }[]
  guidance?: string
  evidenceRequired?: string[]
  followUp?: string[]
}

export interface AssessmentSection {
  id: string
  title: string
  description: string
  article: string
  questions: AssessmentQuestion[]
}
