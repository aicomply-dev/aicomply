import {
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  integer,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// ── Organizations ──────────────────────────────────────────────────────
export const organization = pgTable('organization', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const organizationRelations = relations(organization, ({ many }) => ({
  profiles: many(profile),
  aiSystems: many(aiSystem),
  assessments: many(assessment),
  complianceRequirements: many(complianceRequirement),
  gapAnalysisResults: many(gapAnalysisResult),
  policies: many(policy),
}))

// ── Profiles ───────────────────────────────────────────────────────────
export const profile = pgTable('profile', {
  id: uuid('id').primaryKey(), // FK to auth.users (set by trigger, no defaultRandom)
  fullName: text('full_name'),
  role: text('role'),
  organizationId: uuid('organization_id').references(() => organization.id),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const profileRelations = relations(profile, ({ one }) => ({
  organization: one(organization, {
    fields: [profile.organizationId],
    references: [organization.id],
  }),
}))

// ── AI Systems ─────────────────────────────────────────────────────────
export const aiSystem = pgTable('ai_system', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id').notNull().references(() => organization.id),
  name: text('name').notNull(),
  description: text('description'),
  riskLevel: text('risk_level'),
  operatorRole: text('operator_role'),
  category: text('category'),
  status: text('status').default('active').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export const aiSystemRelations = relations(aiSystem, ({ one, many }) => ({
  organization: one(organization, {
    fields: [aiSystem.organizationId],
    references: [organization.id],
  }),
  assessments: many(assessment),
  complianceRequirements: many(complianceRequirement),
  gapAnalysisResults: many(gapAnalysisResult),
}))

// ── Assessments ────────────────────────────────────────────────────────
export const assessment = pgTable('assessment', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id').notNull().references(() => organization.id),
  aiSystemId: uuid('ai_system_id').references(() => aiSystem.id),
  type: text('type').notNull(),
  status: text('status').default('in_progress').notNull(),
  score: integer('score'),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const assessmentRelations = relations(assessment, ({ one, many }) => ({
  organization: one(organization, {
    fields: [assessment.organizationId],
    references: [organization.id],
  }),
  aiSystem: one(aiSystem, {
    fields: [assessment.aiSystemId],
    references: [aiSystem.id],
  }),
  answers: many(assessmentAnswer),
}))

// ── Assessment Answers ─────────────────────────────────────────────────
export const assessmentAnswer = pgTable('assessment_answer', {
  id: uuid('id').primaryKey().defaultRandom(),
  assessmentId: uuid('assessment_id').notNull().references(() => assessment.id),
  questionId: text('question_id').notNull(),
  answer: jsonb('answer'),
  score: integer('score'),
})

export const assessmentAnswerRelations = relations(assessmentAnswer, ({ one }) => ({
  assessment: one(assessment, {
    fields: [assessmentAnswer.assessmentId],
    references: [assessment.id],
  }),
}))

// ── Compliance Requirements ────────────────────────────────────────────
export const complianceRequirement = pgTable('compliance_requirement', {
  id: uuid('id').primaryKey().defaultRandom(),
  aiSystemId: uuid('ai_system_id').notNull().references(() => aiSystem.id),
  organizationId: uuid('organization_id').notNull().references(() => organization.id),
  standardId: text('standard_id').notNull(),
  controlId: text('control_id').notNull(),
  status: text('status').default('not_started').notNull(),
  evidence: text('evidence'),
  verifiedAt: timestamp('verified_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const complianceRequirementRelations = relations(complianceRequirement, ({ one }) => ({
  aiSystem: one(aiSystem, {
    fields: [complianceRequirement.aiSystemId],
    references: [aiSystem.id],
  }),
  organization: one(organization, {
    fields: [complianceRequirement.organizationId],
    references: [organization.id],
  }),
}))

// ── Gap Analysis Results ───────────────────────────────────────────────
export const gapAnalysisResult = pgTable('gap_analysis_result', {
  id: uuid('id').primaryKey().defaultRandom(),
  aiSystemId: uuid('ai_system_id').notNull().references(() => aiSystem.id),
  organizationId: uuid('organization_id').notNull().references(() => organization.id),
  requirementId: text('requirement_id').notNull(),
  gapDescription: text('gap_description'),
  severity: text('severity'),
  remediationPlan: text('remediation_plan'),
  status: text('status').default('identified').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const gapAnalysisResultRelations = relations(gapAnalysisResult, ({ one }) => ({
  aiSystem: one(aiSystem, {
    fields: [gapAnalysisResult.aiSystemId],
    references: [aiSystem.id],
  }),
  organization: one(organization, {
    fields: [gapAnalysisResult.organizationId],
    references: [organization.id],
  }),
}))

// ── Policies ───────────────────────────────────────────────────────────
export const policy = pgTable('policy', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id').notNull().references(() => organization.id),
  title: text('title').notNull(),
  content: text('content'),
  status: text('status').default('draft').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export const policyRelations = relations(policy, ({ one }) => ({
  organization: one(organization, {
    fields: [policy.organizationId],
    references: [organization.id],
  }),
}))
