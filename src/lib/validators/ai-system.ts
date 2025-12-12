/**
 * AI System Validation Schemas
 */

import { z } from "zod"
import { RISK_LEVELS, OPERATOR_ROLES } from "@/lib/constants"

/**
 * Create AI system validation schema
 */
export const createAiSystemSchema = z.object({
  name: z.string().min(1, "Name is required").max(200, "Name too long"),
  description: z.string().max(2000, "Description too long").optional(),
  vendor: z.string().max(200, "Vendor name too long").optional(),
  category: z.string().max(100, "Category too long").optional(),
  department: z.string().max(100, "Department too long").optional(),
})

/**
 * Update AI system validation schema
 */
export const updateAiSystemSchema = z.object({
  name: z.string().min(1, "Name is required").max(200, "Name too long").optional(),
  description: z.string().max(2000, "Description too long").optional(),
  vendor: z.string().max(200, "Vendor name too long").optional(),
  category: z.string().max(100, "Category too long").optional(),
  department: z.string().max(100, "Department too long").optional(),
  riskLevel: z.enum([...RISK_LEVELS] as [string, ...string[]]).optional(),
  status: z.enum(["active", "inactive", "decommissioned"]).optional(),
  dataTypes: z.string().optional(),
})

/**
 * Save AI system roles validation schema
 */
export const saveAiSystemRolesSchema = z.object({
  operatorRole: z.enum([...OPERATOR_ROLES] as [string, ...string[]]),
  additionalRoles: z.array(z.enum([...OPERATOR_ROLES] as [string, ...string[]])).optional(),
})

export type CreateAiSystemInput = z.infer<typeof createAiSystemSchema>
export type UpdateAiSystemInput = z.infer<typeof updateAiSystemSchema>
export type SaveAiSystemRolesInput = z.infer<typeof saveAiSystemRolesSchema>
