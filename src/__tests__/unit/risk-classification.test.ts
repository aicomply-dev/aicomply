import { describe, it, expect, vi, beforeEach } from "vitest"

// Mock the assessment questions module
vi.mock("@/lib/data/assessment-questions", () => ({
  getAllQuestions: vi.fn(() => []),
  getQuestionById: vi.fn((id: string) => {
    // Return mock questions based on ID prefix
    if (id.startsWith("prohibited_")) {
      return {
        id,
        question: "Prohibited practice question",
        riskTrigger: "prohibited",
      }
    }
    if (id.startsWith("hrc_")) {
      return {
        id,
        question: "High risk question",
        riskTrigger: "high-risk",
      }
    }
    if (id.startsWith("lrc_")) {
      return {
        id,
        question: "Limited risk question",
        riskTrigger: "limited-risk",
      }
    }
    return null
  }),
}))

// Import after mocks
import { calculateRiskClassification } from "@/lib/utils/risk-classification"

describe("Risk Classification", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should classify as prohibited when prohibited practices detected", () => {
    const answers = {
      prohibited_1: "yes",
      prohibited_2: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("prohibited")
    expect(result.score).toBe(0)
  })

  it("should classify as high-risk when high-risk indicators present", () => {
    const answers = {
      hrc_1: "yes",
      hrc_2: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("high-risk")
    expect(result.score).toBe(50)
  })

  it("should classify as limited-risk when limited-risk indicators present", () => {
    const answers = {
      lrc_1: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("limited-risk")
    expect(result.score).toBe(75)
  })

  it("should classify as minimal when no risk indicators", () => {
    const answers = {}

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("minimal")
    expect(result.score).toBe(100)
  })

  it("should prioritize prohibited over high-risk", () => {
    const answers = {
      prohibited_1: "yes",
      hrc_1: "yes",
      hrc_2: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("prohibited")
    expect(result.score).toBe(0)
  })

  it("should prioritize high-risk over limited-risk", () => {
    const answers = {
      hrc_1: "yes",
      lrc_1: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("high-risk")
    expect(result.score).toBe(50)
  })

  it("should include proper recommendations for prohibited classification", () => {
    const answers = {
      prohibited_1: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.recommendations).toContain(
      "CRITICAL: This AI system may fall under prohibited practices defined in Article 5."
    )
  })

  it("should include proper recommendations for high-risk classification", () => {
    const answers = {
      hrc_1: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.recommendations).toContain(
      "Your AI system is classified as high-risk under the EU AI Act."
    )
  })

  it("should track triggers correctly", () => {
    const answers = {
      prohibited_1: "yes",
      hrc_1: "yes",
      lrc_1: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.prohibitedTriggers.length).toBe(1)
    expect(result.highRiskTriggers.length).toBe(1)
    expect(result.limitedRiskTriggers.length).toBe(1)
  })

  it("should only count 'yes' answers as triggers", () => {
    const answers = {
      prohibited_1: "no",
      hrc_1: "partial",
      lrc_1: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("limited-risk")
  })
})
