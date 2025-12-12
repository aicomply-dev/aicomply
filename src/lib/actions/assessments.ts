"use server"

import { revalidatePath } from "next/cache"
import { existsSync, readFileSync } from "fs"
import path from "path"
import { db } from "@/lib/db"
import { assessment, assessmentAnswer, aiSystem, gapAnalysisResult, organizationContent, user } from "@/lib/db/schema"
import { eq, and, desc, inArray } from "drizzle-orm"
import { nanoid } from "nanoid"
import { requireAuth } from "@/lib/auth/require-auth"
import { getAnswerCountsForAssessments } from "@/lib/db/queries"
import {
  PROHIBITED_PRACTICES_QUESTIONS,
  HIGH_RISK_CLASSIFICATION_QUESTIONS,
  LIMITED_RISK_QUESTIONS,
  RISK_MANAGEMENT_QUESTIONS,
  DATA_GOVERNANCE_QUESTIONS,
  TECHNICAL_DOCUMENTATION_QUESTIONS,
  RECORD_KEEPING_QUESTIONS,
  TRANSPARENCY_REQUIREMENTS_QUESTIONS,
  HUMAN_OVERSIGHT_QUESTIONS,
  ACCURACY_ROBUSTNESS_QUESTIONS,
  CONFORMITY_ASSESSMENT_QUESTIONS,
  ASSESSMENT_SECTIONS,
  getAllQuestions as getAllQuestionsStatic,
  getSectionById as getSectionByIdStatic,
  type AssessmentQuestion,
  type AssessmentSection,
} from "@/lib/data/assessment-questions"
import { calculateRiskClassification } from "@/lib/utils/risk-classification"
import { calculateComplianceScore } from "@/lib/utils/compliance-scoring"
import { getSession } from "@/lib/auth/session"

// Path to assessment content (extracted content directory)
const CONTENT_ASSESSMENTS_DIR = path.join(process.cwd(), "content", "assessments")

// Helper to get organization ID from session (throws if not authenticated)
async function getOrganizationId(): Promise<string> {
  const session = await getSession()
  if (!session?.user?.organizationId) {
    throw new Error("Authentication required")
  }
  return session.user.organizationId
}

// Map section IDs to static imports for fallback
const SECTION_TO_QUESTIONS: Record<string, AssessmentQuestion[]> = {
  "prohibited-practices": PROHIBITED_PRACTICES_QUESTIONS,
  "high-risk-classification": HIGH_RISK_CLASSIFICATION_QUESTIONS,
  "limited-risk": LIMITED_RISK_QUESTIONS,
  "risk-management": RISK_MANAGEMENT_QUESTIONS,
  "data-governance": DATA_GOVERNANCE_QUESTIONS,
  "technical-documentation": TECHNICAL_DOCUMENTATION_QUESTIONS,
  "record-keeping": RECORD_KEEPING_QUESTIONS,
  "transparency": TRANSPARENCY_REQUIREMENTS_QUESTIONS,
  "human-oversight": HUMAN_OVERSIGHT_QUESTIONS,
  "accuracy-robustness": ACCURACY_ROBUSTNESS_QUESTIONS,
  "conformity-assessment": CONFORMITY_ASSESSMENT_QUESTIONS,
}

// Load questions from content directory for a specific section
function loadQuestionsFromContent(sectionId: string): AssessmentQuestion[] {
  const questionsPath = path.join(CONTENT_ASSESSMENTS_DIR, sectionId, "questions.json")
  if (existsSync(questionsPath)) {
    try {
      return JSON.parse(readFileSync(questionsPath, "utf-8"))
    } catch (error) {
      console.error(`Failed to load questions for ${sectionId}:`, error)
    }
  }
  return []
}

// Load all questions from content directory
function loadAllQuestionsFromContent(): AssessmentQuestion[] {
  const indexPath = path.join(CONTENT_ASSESSMENTS_DIR, "index.json")
  if (!existsSync(indexPath)) {
    return []
  }

  try {
    const index = JSON.parse(readFileSync(indexPath, "utf-8"))
    const allQuestions: AssessmentQuestion[] = []

    for (const section of index) {
      const questions = loadQuestionsFromContent(section.id)
      allQuestions.push(...questions)
    }

    return allQuestions
  } catch (error) {
    console.error("Failed to load all questions from content:", error)
    return []
  }
}

// Get questions for a section - prefer content directory, fall back to static
function getQuestionsForSection(sectionId: string): AssessmentQuestion[] {
  const contentQuestions = loadQuestionsFromContent(sectionId)
  if (contentQuestions.length > 0) {
    return contentQuestions
  }
  return SECTION_TO_QUESTIONS[sectionId] || []
}

// Get all questions - prefer content directory, fall back to static
export async function getAllQuestions(): Promise<AssessmentQuestion[]> {
  // Check for org-specific override first
  const orgId = await getOrganizationId()
  if (orgId) {
    try {
      const orgContent = await db
        .select()
        .from(organizationContent)
        .where(
          and(
            eq(organizationContent.organizationId, orgId),
            eq(organizationContent.contentType, "assessment"),
            eq(organizationContent.contentId, "all-questions")
          )
        )
        .limit(1)

      if (orgContent.length > 0) {
        return JSON.parse(orgContent[0].content) as AssessmentQuestion[]
      }
    } catch (error) {
      // Fall through to default
    }
  }

  const contentQuestions = loadAllQuestionsFromContent()
  if (contentQuestions.length > 0) {
    return contentQuestions
  }
  return getAllQuestionsStatic()
}

// Get section by ID - with org override support
export async function getSectionById(sectionId: string): Promise<AssessmentSection | undefined> {
  // Check for org-specific override first
  const orgId = await getOrganizationId()
  if (orgId) {
    try {
      const orgContent = await db
        .select()
        .from(organizationContent)
        .where(
          and(
            eq(organizationContent.organizationId, orgId),
            eq(organizationContent.contentType, "assessment"),
            eq(organizationContent.contentId, sectionId)
          )
        )
        .limit(1)

      if (orgContent.length > 0) {
        const questions = JSON.parse(orgContent[0].content) as AssessmentQuestion[]
        const metadataPath = path.join(CONTENT_ASSESSMENTS_DIR, sectionId, "metadata.json")
        let metadata: any = {}
        if (existsSync(metadataPath)) {
          metadata = JSON.parse(readFileSync(metadataPath, "utf-8"))
        }
        return {
          id: sectionId,
          title: metadata.title || sectionId,
          description: metadata.description || "",
          article: metadata.article || "",
          questions,
        }
      }
    } catch (error) {
      // Fall through to default
    }
  }

  // Try content directory
  const metadataPath = path.join(CONTENT_ASSESSMENTS_DIR, sectionId, "metadata.json")
  const questionsPath = path.join(CONTENT_ASSESSMENTS_DIR, sectionId, "questions.json")
  if (existsSync(metadataPath) && existsSync(questionsPath)) {
    try {
      const metadata = JSON.parse(readFileSync(metadataPath, "utf-8"))
      const questions = JSON.parse(readFileSync(questionsPath, "utf-8"))
      return {
        id: sectionId,
        title: metadata.title,
        description: metadata.description || "",
        article: metadata.article,
        questions,
      }
    } catch (error) {
      // Fall through to static
    }
  }

  return getSectionByIdStatic(sectionId)
}

// Get assessment sections index
export async function getAssessmentSections(): Promise<Array<{
  id: string
  title: string
  article: string
  category: string
  questionCount: number
}>> {
  // Check for org-specific override first
  const orgId = await getOrganizationId()
  if (orgId) {
    try {
      const orgContent = await db
        .select()
        .from(organizationContent)
        .where(
          and(
            eq(organizationContent.organizationId, orgId),
            eq(organizationContent.contentType, "assessment"),
            eq(organizationContent.contentId, "index")
          )
        )
        .limit(1)

      if (orgContent.length > 0) {
        return JSON.parse(orgContent[0].content)
      }
    } catch (error) {
      // Fall through to default
    }
  }

  // Try content directory
  const indexPath = path.join(CONTENT_ASSESSMENTS_DIR, "index.json")
  if (existsSync(indexPath)) {
    try {
      return JSON.parse(readFileSync(indexPath, "utf-8"))
    } catch (error) {
      // Fall through to static
    }
  }

  // Fall back to static
  return ASSESSMENT_SECTIONS.map(s => ({
    id: s.id,
    title: s.title,
    article: s.article,
    category: s.questions[0]?.category || s.id,
    questionCount: s.questions.length,
  }))
}

// Legacy Risk Classification Questions (for backward compatibility)
const RISK_CLASSIFICATION_QUESTIONS = [
  ...PROHIBITED_PRACTICES_QUESTIONS.slice(0, 3).map(q => ({
    id: q.id,
    question: q.question,
    category: "prohibited",
    weight: q.weight,
  })),
  ...HIGH_RISK_CLASSIFICATION_QUESTIONS.slice(0, 6).map(q => ({
    id: q.id,
    question: q.question,
    category: "high-risk",
    weight: q.weight,
  })),
  ...LIMITED_RISK_QUESTIONS.slice(0, 3).map(q => ({
    id: q.id,
    question: q.question,
    category: "limited-risk",
    weight: q.weight,
  })),
]

export async function getAssessments(type?: string) {
  try {
    const orgId = await getOrganizationId()
    
    const whereClause = type
      ? and(eq(assessment.organizationId, orgId), eq(assessment.type, type))
      : eq(assessment.organizationId, orgId)

    const assessments = await db.query.assessment.findMany({
      where: whereClause,
      orderBy: [desc(assessment.createdAt)],
    })

    // Batch query all answers at once (fixes N+1 query problem)
    const assessmentIds = assessments.map(a => a.id)
    const answersMap = await getAnswerCountsForAssessments(assessmentIds)

    return assessments.map(a => {
      const result = a.result ? JSON.parse(a.result) : null
      return {
        ...a,
        result,
        questionsAnswered: answersMap.get(a.id) || 0,
        progress: a.score || 0,
        riskLevel: result?.riskLevel || result?.classification || null,
      }
    })
  } catch (error) {
    console.error("Failed to get assessments:", error)
    return []
  }
}

export async function getAssessmentById(id: string) {
  try {
    const orgId = await getOrganizationId()
    
    const assess = await db.query.assessment.findFirst({
      where: and(eq(assessment.id, id), eq(assessment.organizationId, orgId)),
    })

    if (!assess) return null

    const answers = await db.query.assessmentAnswer.findMany({
      where: eq(assessmentAnswer.assessmentId, id),
    })

    return {
      ...assess,
      result: assess.result ? JSON.parse(assess.result) : null,
      answers,
    }
  } catch (error) {
    console.error("Failed to get assessment:", error)
    return null
  }
}

export async function createAssessment(data: {
  type: string
  title: string
  description?: string
  aiSystemId?: string
}) {
  try {
    const orgId = await getOrganizationId()
    const session = await getSession()
    const now = new Date()
    const id = nanoid()

    // Check if user exists in database before setting createdById
    let createdById: string | null = null
    if (session?.user?.id) {
      const userExists = await db.query.user.findFirst({
        where: eq(user.id, session.user.id),
      })
      if (userExists) {
        createdById = session.user.id
      }
    }

    await db.insert(assessment).values({
      id,
      organizationId: orgId,
      aiSystemId: data.aiSystemId || null,
      type: data.type,
      title: data.title,
      description: data.description || null,
      status: "not_started",
      createdAt: now,
      updatedAt: now,
      createdById,
    })

    revalidatePath("/assess/assessments")
    return { success: true, id }
  } catch (error) {
    console.error("Failed to create assessment:", error)
    return { error: "Failed to create assessment" }
  }
}

export async function saveAssessmentAnswer(assessmentId: string, questionId: string, answer: string, notes?: string) {
  try {
    // Check if answer exists
    const existing = await db.query.assessmentAnswer.findFirst({
      where: and(
        eq(assessmentAnswer.assessmentId, assessmentId),
        eq(assessmentAnswer.questionId, questionId)
      ),
    })

    const now = new Date()

    if (existing) {
      await db
        .update(assessmentAnswer)
        .set({ answer, notes: notes || null })
        .where(eq(assessmentAnswer.id, existing.id))
    } else {
      await db.insert(assessmentAnswer).values({
        id: nanoid(),
        assessmentId,
        questionId,
        answer,
        notes: notes || null,
        createdAt: now,
      })
    }

    // Update assessment status
    await db
      .update(assessment)
      .set({ status: "in_progress", updatedAt: now })
      .where(eq(assessment.id, assessmentId))

    return { success: true }
  } catch (error) {
    console.error("Failed to save assessment answer:", error)
    return { error: "Failed to save answer" }
  }
}

export async function completeAssessment(assessmentId: string, calculatedRiskLevel?: string) {
  try {
    const assess = await db.query.assessment.findFirst({
      where: eq(assessment.id, assessmentId),
    })

    if (!assess) return { error: "Assessment not found" }

    const answers = await db.query.assessmentAnswer.findMany({
      where: eq(assessmentAnswer.assessmentId, assessmentId),
    })

    // Calculate result based on assessment type
    let result: Record<string, unknown> = {}
    let score = 0
    let riskLevel = calculatedRiskLevel || "minimal"

    if (assess.type === "risk-classification" || assess.type.includes("risk")) {
      // Use provided risk level or calculate from answers
      if (!calculatedRiskLevel) {
        const answerMap = new Map(answers.map(a => [a.questionId, a.answer]))
        let prohibitedCount = 0
        let highRiskCount = 0
        let limitedRiskCount = 0

        for (const q of RISK_CLASSIFICATION_QUESTIONS) {
          const answer = answerMap.get(q.id)
          if (answer === "yes") {
            if (q.category === "prohibited") prohibitedCount++
            else if (q.category === "high-risk") highRiskCount++
            else if (q.category === "limited-risk") limitedRiskCount++
          }
        }

        if (prohibitedCount > 0) riskLevel = "prohibited"
        else if (highRiskCount >= 2) riskLevel = "high"
        else if (highRiskCount === 1 || limitedRiskCount > 0) riskLevel = "limited"

        result = {
          riskLevel,
          prohibitedCount,
          highRiskCount,
          limitedRiskCount,
          recommendations: getRiskRecommendations(riskLevel),
        }
      } else {
        result = {
          riskLevel,
          recommendations: getRiskRecommendations(riskLevel),
        }
      }

      score = riskLevel === "minimal" ? 100 : riskLevel === "limited" ? 75 : riskLevel === "high" ? 50 : 0

      // Update AI system risk level if linked
      if (assess.aiSystemId) {
        await db
          .update(aiSystem)
          .set({ 
            riskLevel: riskLevel as "unclassified" | "minimal" | "limited" | "high" | "prohibited", 
            lastAssessmentDate: new Date(), 
            updatedAt: new Date() 
          })
          .where(eq(aiSystem.id, assess.aiSystemId))
        
        // Also revalidate the system page
        revalidatePath(`/assess/inventory/${assess.aiSystemId}`)
      }
    }

    const now = new Date()
    await db
      .update(assessment)
      .set({
        status: "completed",
        result: JSON.stringify(result),
        score,
        completedAt: now,
        updatedAt: now,
      })
      .where(eq(assessment.id, assessmentId))

    revalidatePath("/assess/assessments")
    revalidatePath("/assess/classification")
    revalidatePath("/assess/inventory")
    revalidatePath("/dashboard")

    return { success: true, result, score, riskLevel }
  } catch (error) {
    console.error("Failed to complete assessment:", error)
    return { error: "Failed to complete assessment" }
  }
}

function getRiskRecommendations(riskLevel: string): string[] {
  switch (riskLevel) {
    case "prohibited":
      return [
        "This AI system may fall under prohibited practices",
        "Consult legal counsel immediately",
        "Consider discontinuing or modifying the system",
        "Review Article 5 of the EU AI Act",
      ]
    case "high":
      return [
        "Implement comprehensive risk management system",
        "Establish data governance framework",
        "Create detailed technical documentation",
        "Ensure human oversight mechanisms",
        "Prepare for conformity assessment",
      ]
    case "limited":
      return [
        "Implement transparency requirements",
        "Ensure users know they are interacting with AI",
        "Label AI-generated content appropriately",
        "Maintain basic documentation",
      ]
    default:
      return [
        "Maintain voluntary code of conduct",
        "Consider following best practices",
        "Monitor regulatory developments",
      ]
  }
}

export async function getRiskClassificationQuestions() {
  return RISK_CLASSIFICATION_QUESTIONS
}

// ============================================
// COMPREHENSIVE ASSESSMENT FUNCTIONS
// ============================================

export async function getComprehensiveRiskClassificationQuestions() {
  return {
    prohibited: PROHIBITED_PRACTICES_QUESTIONS,
    highRisk: HIGH_RISK_CLASSIFICATION_QUESTIONS,
    limitedRisk: LIMITED_RISK_QUESTIONS,
  }
}

export async function getHighRiskComplianceQuestions(section?: string) {
  if (section) {
    const sectionData = await getSectionById(section)
    return sectionData ? sectionData.questions : []
  }

  return {
    riskManagement: RISK_MANAGEMENT_QUESTIONS,
    dataGovernance: DATA_GOVERNANCE_QUESTIONS,
    technicalDocumentation: TECHNICAL_DOCUMENTATION_QUESTIONS,
    recordKeeping: RECORD_KEEPING_QUESTIONS,
    transparency: TRANSPARENCY_REQUIREMENTS_QUESTIONS,
    humanOversight: HUMAN_OVERSIGHT_QUESTIONS,
    accuracyRobustness: ACCURACY_ROBUSTNESS_QUESTIONS,
    conformityAssessment: CONFORMITY_ASSESSMENT_QUESTIONS,
  }
}

export async function getAssessmentSectionById(sectionId: string) {
  return getSectionById(sectionId)
}

export async function calculateAssessmentResult(
  assessmentId: string,
  assessmentType: string
) {
  try {
    const answers = await db.query.assessmentAnswer.findMany({
      where: eq(assessmentAnswer.assessmentId, assessmentId),
    })

    const answerMap: Record<string, string> = {}
    for (const a of answers) {
      answerMap[a.questionId] = a.answer
    }

    if (assessmentType === "comprehensive-risk-classification") {
      return calculateRiskClassification(answerMap)
    }

    // For section-based compliance assessments
    if (assessmentType.startsWith("compliance-")) {
      const sectionId = assessmentType.replace("compliance-", "")
      const answerData: Record<string, { answer: string; notes?: string }> = {}
      for (const a of answers) {
        answerData[a.questionId] = { answer: a.answer, notes: a.notes || undefined }
      }
      return calculateComplianceScore(sectionId, answerData)
    }

    return null
  } catch (error) {
    console.error("Failed to calculate assessment result:", error)
    return null
  }
}

export async function completeComprehensiveAssessment(assessmentId: string, assessmentType: string) {
  try {
    const result = await calculateAssessmentResult(assessmentId, assessmentType)
    if (!result) {
      return { error: "Failed to calculate assessment result" }
    }

    const assess = await db.query.assessment.findFirst({
      where: eq(assessment.id, assessmentId),
    })

    if (!assess) {
      return { error: "Assessment not found" }
    }

    const now = new Date()
    let riskLevel: string | undefined
    let score: number

    if ("classification" in result) {
      // Risk classification result
      riskLevel = result.classification
      score = result.score

      // Update AI system risk level if linked
      if (assess.aiSystemId) {
        await db
          .update(aiSystem)
          .set({ riskLevel, lastAssessmentDate: now, updatedAt: now })
          .where(eq(aiSystem.id, assess.aiSystemId))
      }
    } else {
      // Compliance assessment result
      score = result.score
    }

    await db
      .update(assessment)
      .set({
        status: "completed",
        result: JSON.stringify(result),
        score,
        completedAt: now,
        updatedAt: now,
      })
      .where(eq(assessment.id, assessmentId))

    revalidatePath("/assess/assessments")
    revalidatePath("/assess/classification")
    revalidatePath("/dashboard")

    return { success: true, result, score }
  } catch (error) {
    console.error("Failed to complete comprehensive assessment:", error)
    return { error: "Failed to complete assessment" }
  }
}

export async function getAssessmentStats() {
  try {
    const orgId = await getOrganizationId()
    
    const assessments = await db.query.assessment.findMany({
      where: eq(assessment.organizationId, orgId),
    })

    const total = assessments.length
    const completed = assessments.filter(a => a.status === "completed").length
    const inProgress = assessments.filter(a => a.status === "in_progress").length
    const completedWithScores = assessments.filter(a => a.status === "completed" && a.score !== null)
    const avgScore = completedWithScores.length > 0
      ? Math.round(completedWithScores.reduce((sum, a) => sum + (a.score || 0), 0) / completedWithScores.length)
      : 0

    return { total, completed, inProgress, avgScore }
  } catch (error) {
    console.error("Failed to get assessment stats:", error)
    return { total: 0, completed: 0, inProgress: 0, avgScore: 0 }
  }
}

// Gap Analysis Functions
export async function getGapAnalysisResults(aiSystemId?: string) {
  try {
    const orgId = await getOrganizationId()
    
    const whereClause = aiSystemId
      ? and(eq(gapAnalysisResult.organizationId, orgId), eq(gapAnalysisResult.aiSystemId, aiSystemId))
      : eq(gapAnalysisResult.organizationId, orgId)

    return db.query.gapAnalysisResult.findMany({
      where: whereClause,
      orderBy: [desc(gapAnalysisResult.createdAt)],
    })
  } catch (error) {
    console.error("Failed to get gap analysis results:", error)
    return []
  }
}

export async function createGapAnalysisResult(data: {
  aiSystemId?: string
  category: string
  requirement: string
  article?: string
  status: string
  currentState?: string
  targetState?: string
  gap?: string
  priority: string
  remediation?: string
  dueDate?: Date
}) {
  try {
    const orgId = await getOrganizationId()
    const now = new Date()
    const id = nanoid()

    await db.insert(gapAnalysisResult).values({
      id,
      organizationId: orgId,
      aiSystemId: data.aiSystemId || null,
      category: data.category,
      requirement: data.requirement,
      article: data.article || null,
      status: data.status,
      currentState: data.currentState || null,
      targetState: data.targetState || null,
      gap: data.gap || null,
      priority: data.priority,
      remediation: data.remediation || null,
      dueDate: data.dueDate || null,
      createdAt: now,
      updatedAt: now,
    })

    revalidatePath("/assess/comply")
    return { success: true, id }
  } catch (error) {
    console.error("Failed to create gap analysis result:", error)
    return { error: "Failed to create gap analysis result" }
  }
}

export async function updateGapStatus(id: string, status: string) {
  try {
    const now = new Date()
    await db
      .update(gapAnalysisResult)
      .set({
        status,
        completedAt: status === "compliant" ? now : null,
        updatedAt: now,
      })
      .where(eq(gapAnalysisResult.id, id))

    revalidatePath("/assess/comply")
    return { success: true }
  } catch (error) {
    console.error("Failed to update gap status:", error)
    return { error: "Failed to update gap status" }
  }
}

export async function getGapAnalysisStats() {
  try {
    const orgId = await getOrganizationId()
    
    const results = await db.query.gapAnalysisResult.findMany({
      where: eq(gapAnalysisResult.organizationId, orgId),
    })

    const total = results.length
    const compliant = results.filter(r => r.status === "compliant").length
    const partial = results.filter(r => r.status === "partial").length
    const gaps = results.filter(r => r.status === "gap").length
    const score = total > 0 ? Math.round(((compliant + partial * 0.5) / total) * 100) : 0

    return { total, compliant, partial, gaps, score }
  } catch (error) {
    console.error("Failed to get gap analysis stats:", error)
    return { total: 0, compliant: 0, partial: 0, gaps: 0, score: 0 }
  }
}

// Assessment Types - Comprehensive EU AI Act Assessments
const ASSESSMENT_TYPES = [
  // === RISK CLASSIFICATION ===
  {
    type: "comprehensive-risk-classification",
    title: "Comprehensive Risk Classification",
    description: "Full EU AI Act risk classification covering prohibited practices (Article 5), high-risk classification (Article 6, Annex III), and transparency obligations (Article 50).",
    duration: "45-60 min",
    questions: PROHIBITED_PRACTICES_QUESTIONS.length + HIGH_RISK_CLASSIFICATION_QUESTIONS.length + LIMITED_RISK_QUESTIONS.length,
    category: "classification",
    icon: "Scale",
    color: "primary",
  },
  {
    type: "quick-risk-classification",
    title: "Quick Risk Screening",
    description: "Rapid initial screening to identify potential risk category. For preliminary assessment only.",
    duration: "10-15 min",
    questions: 12,
    category: "classification",
    icon: "Zap",
    color: "accent",
  },
  {
    type: "prohibited-check",
    title: "Prohibited Practices Check",
    description: "Detailed assessment against all prohibited AI practices defined in Article 5, including social scoring, manipulation, biometric identification, and emotion recognition.",
    duration: "15-20 min",
    questions: PROHIBITED_PRACTICES_QUESTIONS.length,
    category: "classification",
    icon: "Ban",
    color: "destructive",
  },

  // === HIGH-RISK COMPLIANCE ===
  {
    type: "compliance-risk-management",
    title: "Risk Management System (Article 9)",
    description: "Comprehensive evaluation of your risk management system including risk identification, analysis, mitigation measures, and testing procedures.",
    duration: "30-45 min",
    questions: RISK_MANAGEMENT_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 9",
    icon: "ShieldAlert",
    color: "amber",
  },
  {
    type: "compliance-data-governance",
    title: "Data Governance (Article 10)",
    description: "Assessment of data governance practices for training, validation, and testing data sets including bias examination and data quality.",
    duration: "25-35 min",
    questions: DATA_GOVERNANCE_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 10",
    icon: "Database",
    color: "teal",
  },
  {
    type: "compliance-technical-documentation",
    title: "Technical Documentation (Article 11)",
    description: "Review of technical documentation requirements under Article 11 and Annex IV including system description, development process, and lifecycle documentation.",
    duration: "20-30 min",
    questions: TECHNICAL_DOCUMENTATION_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 11",
    icon: "FileText",
    color: "indigo",
  },
  {
    type: "compliance-record-keeping",
    title: "Record-Keeping & Logging (Article 12)",
    description: "Evaluation of automatic logging capabilities, traceability, and audit trail requirements for high-risk AI systems.",
    duration: "15-20 min",
    questions: RECORD_KEEPING_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 12",
    icon: "ScrollText",
    color: "violet",
  },
  {
    type: "compliance-transparency",
    title: "Transparency to Deployers (Article 13)",
    description: "Assessment of transparency requirements including instructions for use, performance characteristics, and information disclosure.",
    duration: "20-25 min",
    questions: TRANSPARENCY_REQUIREMENTS_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 13",
    icon: "Eye",
    color: "cyan",
  },
  {
    type: "compliance-human-oversight",
    title: "Human Oversight (Article 14)",
    description: "Comprehensive evaluation of human oversight mechanisms including interface tools, override capabilities, and operator training.",
    duration: "25-35 min",
    questions: HUMAN_OVERSIGHT_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 14",
    icon: "Users",
    color: "emerald",
  },
  {
    type: "compliance-accuracy-robustness",
    title: "Accuracy, Robustness & Cybersecurity (Article 15)",
    description: "Assessment of accuracy, resilience, and cybersecurity measures including adversarial robustness and AI-specific security.",
    duration: "25-35 min",
    questions: ACCURACY_ROBUSTNESS_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 15",
    icon: "Shield",
    color: "blue",
  },
  {
    type: "compliance-conformity-assessment",
    title: "Conformity Assessment (Article 43)",
    description: "Full conformity assessment and quality management system evaluation per Article 43 and Article 17 requirements.",
    duration: "35-45 min",
    questions: CONFORMITY_ASSESSMENT_QUESTIONS.length,
    category: "high-risk-compliance",
    article: "Article 43",
    icon: "CheckCircle",
    color: "green",
  },

  // === FULL COMPLIANCE PACKAGE ===
  {
    type: "full-high-risk-compliance",
    title: "Complete High-Risk Compliance Assessment",
    description: "Comprehensive assessment covering all Article 9-15 requirements for high-risk AI systems. Includes risk management, data governance, documentation, logging, transparency, human oversight, and accuracy/security.",
    duration: "3-4 hours",
    questions: RISK_MANAGEMENT_QUESTIONS.length +
      DATA_GOVERNANCE_QUESTIONS.length +
      TECHNICAL_DOCUMENTATION_QUESTIONS.length +
      RECORD_KEEPING_QUESTIONS.length +
      TRANSPARENCY_REQUIREMENTS_QUESTIONS.length +
      HUMAN_OVERSIGHT_QUESTIONS.length +
      ACCURACY_ROBUSTNESS_QUESTIONS.length,
    category: "full-compliance",
    icon: "ClipboardCheck",
    color: "primary",
  },
]

export async function getAssessmentTypes() {
  return ASSESSMENT_TYPES
}

export async function getAssessmentTypesByCategory(category?: string) {
  if (category) {
    return ASSESSMENT_TYPES.filter(t => t.category === category)
  }
  return ASSESSMENT_TYPES
}

/**
 * Generate gap analysis records from a completed assessment
 * This auto-creates gap_analysis_result entries for non-compliant answers
 */
export async function generateGapAnalysisFromAssessment(assessmentId: string) {
  try {
    const orgId = await getOrganizationId()
    
    const assess = await db.query.assessment.findFirst({
      where: eq(assessment.id, assessmentId),
    })

    if (!assess) {
      return { error: "Assessment not found" }
    }

    if (assess.status !== "completed") {
      return { error: "Assessment must be completed before generating gap analysis" }
    }

    const answers = await db.query.assessmentAnswer.findMany({
      where: eq(assessmentAnswer.assessmentId, assessmentId),
    })

    // Find non-compliant answers
    const gaps = answers.filter(a =>
      a.answer === "no" ||
      a.answer === "non-compliant" ||
      a.answer === "none" ||
      a.answer === "partial"
    )

    if (gaps.length === 0) {
      return { success: true, count: 0, message: "No gaps found" }
    }

    // Map question prefixes to categories and articles
    const categoryMap: Record<string, { category: string; article: string }> = {
      "pp": { category: "Prohibited Practices", article: "Article 5" },
      "hrc": { category: "High-Risk Classification", article: "Article 6" },
      "lr": { category: "Limited Risk", article: "Article 50" },
      "rm": { category: "Risk Management", article: "Article 9" },
      "dg": { category: "Data Governance", article: "Article 10" },
      "td": { category: "Technical Documentation", article: "Article 11" },
      "rk": { category: "Record Keeping", article: "Article 12" },
      "tr": { category: "Transparency", article: "Article 13" },
      "ho": { category: "Human Oversight", article: "Article 14" },
      "ar": { category: "Accuracy & Robustness", article: "Article 15" },
      "ca": { category: "Conformity Assessment", article: "Article 43" },
    }

    const now = new Date()
    let createdCount = 0

    for (const gap of gaps) {
      const prefix = gap.questionId.split("-")[0]
      const catInfo = categoryMap[prefix] || { category: "General", article: "Unknown" }

      // Determine priority based on answer type and category
      let priority = "medium"
      if (prefix === "pp") {
        priority = "critical" // Prohibited practices are critical
      } else if (gap.answer === "no" || gap.answer === "non-compliant" || gap.answer === "none") {
        priority = "high"
      }

      // Create gap analysis record
      await db.insert(gapAnalysisResult).values({
        id: nanoid(),
        organizationId: orgId,
        aiSystemId: assess.aiSystemId,
        assessmentId: assessmentId,
        category: catInfo.category,
        requirement: `Compliance gap identified for ${gap.questionId}`,
        article: catInfo.article,
        status: gap.answer === "partial" ? "partial" : "gap",
        currentState: gap.notes || "Gap identified during assessment",
        targetState: "Full compliance required",
        gap: `Non-compliant answer: ${gap.answer}`,
        priority,
        remediation: getRemediationSuggestion(prefix, gap.answer),
        dueDate: null,
        createdAt: now,
        updatedAt: now,
      })

      createdCount++
    }

    revalidatePath("/assess/comply")
    return { success: true, count: createdCount }
  } catch (error) {
    console.error("Failed to generate gap analysis from assessment:", error)
    return { error: "Failed to generate gap analysis" }
  }
}

function getRemediationSuggestion(prefix: string, answer: string): string {
  const suggestions: Record<string, string> = {
    "pp": "Immediately review AI system against Article 5 prohibited practices. Consider system modification or discontinuation if confirmed prohibited.",
    "hrc": "Review high-risk classification criteria. If confirmed high-risk, implement all Article 9-15 requirements.",
    "lr": "Implement transparency requirements per Article 50. Ensure users are informed of AI interaction.",
    "rm": "Establish or enhance risk management system. Document risk identification, mitigation, and testing procedures.",
    "dg": "Review data governance practices. Implement bias examination, data quality measures, and documentation.",
    "td": "Complete technical documentation per Annex IV. Include system description, design specs, and test results.",
    "rk": "Implement automatic logging capabilities. Establish retention policies and access controls.",
    "tr": "Provide comprehensive instructions for use. Document accuracy levels, limitations, and oversight measures.",
    "ho": "Implement human oversight mechanisms. Ensure override capabilities and operator training.",
    "ar": "Conduct accuracy and robustness testing. Implement cybersecurity measures and adversarial testing.",
    "ca": "Complete conformity assessment procedures. Establish quality management system per Article 17.",
  }

  return suggestions[prefix] || "Review requirement and implement necessary controls to achieve compliance."
}

/**
 * Get gap analysis results for a specific assessment
 */
export async function getGapAnalysisForAssessment(assessmentId: string) {
  try {
    const results = await db.query.gapAnalysisResult.findMany({
      where: eq(gapAnalysisResult.assessmentId, assessmentId),
      orderBy: [desc(gapAnalysisResult.createdAt)],
    })
    return results
  } catch (error) {
    console.error("Failed to get gap analysis for assessment:", error)
    return []
  }
}
