/**
 * Assessment Validation Schemas
 * Zod schemas for form validation
 */

import { z } from "zod"

/**
 * Create assessment validation schema
 */
export const createAssessmentSchema = z.object({
  type: z.string().min(1, "Assessment type is required"),
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  description: z.string().max(1000, "Description too long").optional(),
  aiSystemId: z.string().optional(),
})

/**
 * Save assessment answer validation schema
 */
export const saveAnswerSchema = z.object({
  assessmentId: z.string().min(1, "Assessment ID is required"),
  questionId: z.string().min(1, "Question ID is required"),
  answer: z.string().min(1, "Answer is required"),
  notes: z.string().max(2000, "Notes too long").optional(),
})

/**
 * Complete assessment validation schema
 */
export const completeAssessmentSchema = z.object({
  assessmentId: z.string().min(1, "Assessment ID is required"),
})

export type CreateAssessmentInput = z.infer<typeof createAssessmentSchema>
export type SaveAnswerInput = z.infer<typeof saveAnswerSchema>
export type CompleteAssessmentInput = z.infer<typeof completeAssessmentSchema>
