/**
 * Application-wide constants
 * Centralized location for all hardcoded values
 */

export const DEFAULT_ORG_ID = "demo-org"

export const RISK_LEVELS = ["prohibited", "high", "limited", "minimal", "unclassified"] as const
export type RiskLevel = typeof RISK_LEVELS[number]

export const ASSESSMENT_STATUSES = ["not_started", "in_progress", "completed"] as const
export type AssessmentStatus = typeof ASSESSMENT_STATUSES[number]

export const OPERATOR_ROLES = [
  "provider",
  "deployer",
  "importer",
  "distributor",
  "gpai_provider",
] as const
export type OperatorRole = typeof OPERATOR_ROLES[number]

export const COMPLIANCE_PRIORITIES = ["critical", "high", "medium", "low"] as const
export type CompliancePriority = typeof COMPLIANCE_PRIORITIES[number]

export const POLICY_STATUSES = ["draft", "in_review", "approved", "archived"] as const
export type PolicyStatus = typeof POLICY_STATUSES[number]

export const DOCUMENT_STATUSES = ["draft", "generated", "approved"] as const
export type DocumentStatus = typeof DOCUMENT_STATUSES[number]

export const CERTIFICATE_STATUSES = ["draft", "pending", "issued", "expired", "revoked"] as const
export type CertificateStatus = typeof CERTIFICATE_STATUSES[number]

export const REQUIREMENT_STATUSES = [
  "not_started",
  "in_progress",
  "implemented",
  "verified",
  "not_applicable",
] as const
export type RequirementStatus = typeof REQUIREMENT_STATUSES[number]

export const GAP_STATUSES = ["compliant", "partial", "gap"] as const
export type GapStatus = typeof GAP_STATUSES[number]
