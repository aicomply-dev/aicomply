/**
 * Risk Classification Utilities
 * Extracted calculation logic for risk classification
 */

import type { AssessmentQuestion } from "@/lib/data/assessment-questions/types"
import { getAllQuestions, getQuestionById } from "@/lib/data/assessment-questions"

export interface RiskClassificationResult {
  classification: "prohibited" | "high-risk" | "limited-risk" | "minimal"
  score: number
  prohibitedTriggers: string[]
  highRiskTriggers: string[]
  limitedRiskTriggers: string[]
  recommendations: string[]
}

/**
 * Calculate risk classification based on assessment answers
 */
export function calculateRiskClassification(answers: Record<string, string>): RiskClassificationResult {
  const prohibitedTriggers: string[] = []
  const highRiskTriggers: string[] = []
  const limitedRiskTriggers: string[] = []

  const allQuestions = getAllQuestions()

  for (const [questionId, answer] of Object.entries(answers)) {
    if (answer === "yes") {
      const question = getQuestionById(questionId)
      if (question) {
        if (question.riskTrigger === "prohibited") {
          prohibitedTriggers.push(question.question)
        } else if (question.riskTrigger === "high-risk") {
          highRiskTriggers.push(question.question)
        } else if (question.riskTrigger === "limited-risk") {
          limitedRiskTriggers.push(question.question)
        }
      }
    }
  }

  let classification: "prohibited" | "high-risk" | "limited-risk" | "minimal"
  let score: number
  let recommendations: string[]

  if (prohibitedTriggers.length > 0) {
    classification = "prohibited"
    score = 0
    recommendations = [
      "CRITICAL: This AI system may fall under prohibited practices defined in Article 5.",
      "Immediately consult legal counsel specialized in EU AI Act compliance.",
      "Consider discontinuing or fundamentally modifying the AI system.",
      "Review Article 5 exceptions to determine if any apply to your use case.",
      "Document all findings and prepare for potential regulatory inquiry.",
    ]
  } else if (highRiskTriggers.length > 0) {
    classification = "high-risk"
    score = 50
    recommendations = [
      "Your AI system is classified as high-risk under the EU AI Act.",
      "Implement a comprehensive risk management system (Article 9).",
      "Establish data governance framework meeting Article 10 requirements.",
      "Create detailed technical documentation per Annex IV.",
      "Design and implement human oversight mechanisms (Article 14).",
      "Ensure accuracy, robustness, and cybersecurity (Article 15).",
      "Complete conformity assessment before market placement.",
      "Register the system in the EU database (Article 71).",
    ]
  } else if (limitedRiskTriggers.length > 0) {
    classification = "limited-risk"
    score = 75
    recommendations = [
      "Your AI system has transparency obligations under Article 50.",
      "Ensure users are informed they are interacting with an AI system.",
      "If generating content, clearly label it as AI-generated.",
      "Implement appropriate disclosure mechanisms.",
      "Consider following voluntary codes of conduct.",
      "Document your transparency measures.",
    ]
  } else {
    classification = "minimal"
    score = 100
    recommendations = [
      "Your AI system is classified as minimal risk.",
      "No mandatory requirements under the EU AI Act apply.",
      "Consider following voluntary codes of conduct.",
      "Implement AI ethics best practices.",
      "Monitor regulatory developments for potential changes.",
      "Maintain basic documentation as good practice.",
    ]
  }

  return {
    classification,
    score,
    prohibitedTriggers,
    highRiskTriggers,
    limitedRiskTriggers,
    recommendations,
  }
}
