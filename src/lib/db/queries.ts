/**
 * Database Query Utilities
 * Reusable query patterns to reduce duplication
 */

import { db } from "./index"
import { assessmentAnswer } from "./schema"
import { eq, inArray } from "drizzle-orm"

/**
 * Get all answers for multiple assessments in a single query
 * Fixes N+1 query problem
 */
export async function getAnswersForAssessments(assessmentIds: string[]) {
  if (assessmentIds.length === 0) {
    return []
  }

  return db.query.assessmentAnswer.findMany({
    where: inArray(assessmentAnswer.assessmentId, assessmentIds),
  })
}

/**
 * Group answers by assessment ID
 */
export function groupAnswersByAssessment(
  answers: Array<{ assessmentId: string; [key: string]: unknown }>
): Map<string, number> {
  const answersMap = new Map<string, number>()
  for (const answer of answers) {
    const count = answersMap.get(answer.assessmentId) || 0
    answersMap.set(answer.assessmentId, count + 1)
  }
  return answersMap
}

/**
 * Get answer count for assessments
 * Returns a map of assessmentId -> answer count
 */
export async function getAnswerCountsForAssessments(
  assessmentIds: string[]
): Promise<Map<string, number>> {
  const answers = await getAnswersForAssessments(assessmentIds)
  return groupAnswersByAssessment(answers)
}
