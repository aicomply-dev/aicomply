import { describe, it, expect } from "vitest"
import { calculateRiskClassification } from "@/lib/utils/risk-classification"

describe("Risk Classification", () => {
  it("should classify as prohibited when prohibited practices detected", () => {
    const answers = {
      prohibited_1: "yes",
      prohibited_2: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("prohibited")
    expect(result.score).toBe(0)
  })

  it("should classify as high-risk when 2+ high-risk indicators", () => {
    const answers = {
      hrc_1: "yes",
      hrc_2: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("high")
  })

  it("should classify as limited-risk when 1 high-risk or limited-risk indicators", () => {
    const answers = {
      hrc_1: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("limited")
  })

  it("should classify as minimal when no risk indicators", () => {
    const answers = {}

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("minimal")
    expect(result.score).toBeGreaterThan(0)
  })

  it("should prioritize prohibited over high-risk", () => {
    const answers = {
      prohibited_1: "yes",
      hrc_1: "yes",
      hrc_2: "yes",
    }

    const result = calculateRiskClassification(answers)
    expect(result.classification).toBe("prohibited")
  })
})
