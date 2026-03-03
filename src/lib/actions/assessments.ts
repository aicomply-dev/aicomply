'use server'

import { eq, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

import { db } from '@/lib/db'
import { assessment, assessmentAnswer } from '@/lib/db/schema'
import { getUserProfile } from './utils'

/**
 * List all assessments for the current user's organization
 */
export async function getAssessments() {
  const { organizationId } = await getUserProfile()

  return db
    .select()
    .from(assessment)
    .where(eq(assessment.organizationId, organizationId))
    .orderBy(assessment.createdAt)
}

/**
 * Get a single assessment by ID (org-scoped) with its answers
 */
export async function getAssessment(id: string) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .select()
    .from(assessment)
    .where(and(eq(assessment.id, id), eq(assessment.organizationId, organizationId)))
    .limit(1)

  const row = rows[0]
  if (!row) {
    throw new Error('Assessment not found')
  }

  const answers = await db
    .select()
    .from(assessmentAnswer)
    .where(eq(assessmentAnswer.assessmentId, id))

  return { ...row, answers }
}

/**
 * Create a new assessment
 */
export async function createAssessment(data: {
  aiSystemId?: string
  type: string
}) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .insert(assessment)
    .values({
      organizationId,
      aiSystemId: data.aiSystemId ?? null,
      type: data.type,
      status: 'in_progress',
    })
    .returning()

  revalidatePath('/dashboard')
  revalidatePath('/assess/assessments')

  return rows[0]
}

/**
 * Submit (upsert) an assessment answer
 */
export async function submitAssessmentAnswer(
  assessmentId: string,
  questionId: string,
  answer: unknown,
  score?: number,
) {
  // Verify the assessment belongs to user's org
  const { organizationId } = await getUserProfile()
  const assessmentRows = await db
    .select()
    .from(assessment)
    .where(and(eq(assessment.id, assessmentId), eq(assessment.organizationId, organizationId)))
    .limit(1)

  if (!assessmentRows[0]) {
    throw new Error('Assessment not found')
  }

  // Check for existing answer
  const existing = await db
    .select()
    .from(assessmentAnswer)
    .where(
      and(
        eq(assessmentAnswer.assessmentId, assessmentId),
        eq(assessmentAnswer.questionId, questionId),
      ),
    )
    .limit(1)

  if (existing[0]) {
    // Update existing
    await db
      .update(assessmentAnswer)
      .set({ answer, score: score ?? null })
      .where(eq(assessmentAnswer.id, existing[0].id))
  } else {
    // Insert new
    await db.insert(assessmentAnswer).values({
      assessmentId,
      questionId,
      answer,
      score: score ?? null,
    })
  }

  revalidatePath(`/assess/assessments/${assessmentId}`)
}

/**
 * Complete an assessment -- set status to completed and calculate score
 */
export async function completeAssessment(id: string) {
  const { organizationId } = await getUserProfile()

  // Verify ownership
  const rows = await db
    .select()
    .from(assessment)
    .where(and(eq(assessment.id, id), eq(assessment.organizationId, organizationId)))
    .limit(1)

  if (!rows[0]) {
    throw new Error('Assessment not found')
  }

  // Get all answers and calculate average score
  const answers = await db
    .select()
    .from(assessmentAnswer)
    .where(eq(assessmentAnswer.assessmentId, id))

  let totalScore = 0
  let scoredCount = 0
  for (const a of answers) {
    if (a.score != null) {
      totalScore += a.score
      scoredCount++
    }
  }

  const finalScore = scoredCount > 0 ? Math.round(totalScore / scoredCount) : 0

  const updated = await db
    .update(assessment)
    .set({
      status: 'completed',
      score: finalScore,
      completedAt: new Date(),
    })
    .where(eq(assessment.id, id))
    .returning()

  revalidatePath('/dashboard')
  revalidatePath('/assess/assessments')
  revalidatePath(`/assess/assessments/${id}`)

  return updated[0]
}
