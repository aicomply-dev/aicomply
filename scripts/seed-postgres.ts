/**
 * PostgreSQL Database Seed Script
 * 
 * This script creates a fully populated demo database with:
 * - Demo organization
 * - 26 comprehensive demo AI systems covering all EU AI Act scenarios
 * - Risk classifications
 * - Requirements status
 * - Gap analysis results
 * 
 * Run with: bun run scripts/seed-postgres.ts
 */

import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { eq } from "drizzle-orm"
import { nanoid } from "nanoid"
import * as schema from "../src/lib/db/schema"

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required")
}

const client = postgres(connectionString, {
  ssl: process.env.NODE_ENV === 'production' ? 'require' : false,
})
const db = drizzle(client, { schema })

const DEFAULT_ORG_ID = "demo-org"

// Comprehensive demo AI systems covering all EU AI Act scenarios
const DEMO_AI_SYSTEMS = [
  // PROHIBITED PRACTICES (Article 5)
  {
    name: "Social Scoring System",
    description: "AI system that evaluates or classifies the trustworthiness of natural persons based on their social behavior or known or predicted personal or personality characteristics",
    category: "social-scoring",
    vendor: "Internal",
    department: "Operations",
    riskLevel: "prohibited" as const,
    operatorRole: null,
    status: "inactive" as const,
    dataTypes: ["behavioral-data", "personal-data", "social-media-data"],
  },
  {
    name: "Real-Time Remote Biometric Identification",
    description: "AI system used for real-time remote biometric identification of natural persons in publicly accessible spaces for law enforcement purposes",
    category: "biometric-identification",
    vendor: "Third-Party",
    department: "Security",
    riskLevel: "prohibited" as const,
    operatorRole: null,
    status: "inactive" as const,
    dataTypes: ["biometric-data", "facial-recognition"],
  },
  
  // HIGH RISK - PROVIDER
  {
    name: "Medical Device AI - Diagnostic Assistant",
    description: "AI system used as a safety component of a medical device for diagnostic purposes",
    category: "healthcare",
    vendor: "Internal",
    department: "Medical",
    riskLevel: "high" as const,
    operatorRole: "provider",
    status: "active" as const,
    dataTypes: ["medical-images", "patient-data", "diagnostic-data"],
  },
  {
    name: "Creditworthiness Assessment System",
    description: "AI system used to evaluate the creditworthiness of natural persons or establish their credit score",
    category: "finance",
    vendor: "Internal",
    department: "Finance",
    riskLevel: "high" as const,
    operatorRole: "provider",
    status: "active" as const,
    dataTypes: ["financial-data", "credit-history", "personal-data"],
  },
  {
    name: "Recruitment AI - CV Screening",
    description: "AI system used to evaluate and rank job applications or candidates in recruitment processes",
    category: "recruitment",
    vendor: "Internal",
    department: "HR",
    riskLevel: "high" as const,
    operatorRole: "provider",
    status: "active" as const,
    dataTypes: ["cv-data", "personal-data", "employment-history"],
  },
  {
    name: "Access Control Biometric System",
    description: "AI system used for biometric identification and categorization of natural persons",
    category: "biometric",
    vendor: "Third-Party",
    department: "Security",
    riskLevel: "high" as const,
    operatorRole: "provider",
    status: "active" as const,
    dataTypes: ["biometric-data", "facial-recognition", "fingerprint"],
  },
  
  // HIGH RISK - DEPLOYER
  {
    name: "Employee Performance Monitoring AI",
    description: "AI system used to monitor and evaluate the performance of employees in the workplace",
    category: "workplace-monitoring",
    vendor: "Third-Party",
    department: "HR",
    riskLevel: "high" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["performance-data", "workplace-data", "productivity-metrics"],
  },
  {
    name: "Educational Assessment AI",
    description: "AI system used to evaluate students' learning outcomes and determine access to education",
    category: "education",
    vendor: "Internal",
    department: "Education",
    riskLevel: "high" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["student-data", "assessment-results", "learning-analytics"],
  },
  {
    name: "Insurance Risk Assessment AI",
    description: "AI system used by insurance companies to assess risks and determine premiums",
    category: "insurance",
    vendor: "Third-Party",
    department: "Risk Management",
    riskLevel: "high" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["insurance-data", "risk-factors", "personal-data"],
  },
  
  // HIGH RISK - IMPORTER
  {
    name: "Imported Medical AI Device",
    description: "High-risk AI system imported from third country for use in medical diagnostics",
    category: "healthcare",
    vendor: "MedTech Global Inc.",
    department: "Medical",
    riskLevel: "high" as const,
    operatorRole: "importer",
    status: "active" as const,
    dataTypes: ["medical-data", "diagnostic-images"],
  },
  
  // HIGH RISK - DISTRIBUTOR
  {
    name: "Distributed Recruitment Platform",
    description: "High-risk AI recruitment system distributed to multiple organizations",
    category: "recruitment",
    vendor: "HR Solutions Ltd.",
    department: "Sales",
    riskLevel: "high" as const,
    operatorRole: "distributor",
    status: "active" as const,
    dataTypes: ["cv-data", "candidate-data"],
  },
  
  // HIGH RISK - GPAI PROVIDER
  {
    name: "General Purpose AI Model - GPT Variant",
    description: "General-purpose AI model with broad capabilities, used as foundation for multiple applications",
    category: "general-purpose-ai",
    vendor: "Internal",
    department: "AI Research",
    riskLevel: "high" as const,
    operatorRole: "gpai_provider",
    status: "active" as const,
    dataTypes: ["text-data", "code", "multimodal-data"],
  },
  
  // LIMITED RISK - DEPLOYER
  {
    name: "Customer Support Chatbot",
    description: "AI chatbot for customer service interactions with transparency obligations",
    category: "chatbot",
    vendor: "Internal",
    department: "Customer Service",
    riskLevel: "limited" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["conversation-data", "customer-data"],
  },
  {
    name: "Content Recommendation Engine",
    description: "AI system that generates or manipulates content with transparency requirements",
    category: "recommendation",
    vendor: "Internal",
    department: "Product",
    riskLevel: "limited" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["user-behavior", "content-data", "preferences"],
  },
  {
    name: "Deepfake Detection Tool",
    description: "AI system designed to detect deepfakes and manipulated media",
    category: "media-analysis",
    vendor: "Third-Party",
    department: "Security",
    riskLevel: "limited" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["image-data", "video-data", "audio-data"],
  },
  {
    name: "Emotion Recognition System",
    description: "AI system that infers emotions from facial expressions or voice patterns",
    category: "emotion-analysis",
    vendor: "Third-Party",
    department: "Marketing",
    riskLevel: "limited" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["facial-data", "voice-data", "behavioral-data"],
  },
  
  // LIMITED RISK - PROVIDER
  {
    name: "AI Content Generator API",
    description: "API service providing AI-generated text and content creation capabilities",
    category: "content-generation",
    vendor: "Internal",
    department: "Product",
    riskLevel: "limited" as const,
    operatorRole: "provider",
    status: "active" as const,
    dataTypes: ["text-data", "user-input"],
  },
  
  // MINIMAL RISK - DEPLOYER
  {
    name: "Email Spam Filter",
    description: "AI-powered email filtering system with minimal risk",
    category: "security",
    vendor: "Internal",
    department: "IT",
    riskLevel: "minimal" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["email-content", "metadata"],
  },
  {
    name: "Language Translation Service",
    description: "AI translation service for multilingual content",
    category: "nlp",
    vendor: "Third-Party",
    department: "Product",
    riskLevel: "minimal" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["text-data", "language-data"],
  },
  {
    name: "Predictive Maintenance System",
    description: "AI system for predicting equipment maintenance needs",
    category: "iot",
    vendor: "Internal",
    department: "Operations",
    riskLevel: "minimal" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["sensor-data", "equipment-metrics"],
  },
  {
    name: "Image Classification API",
    description: "Simple image classification service for non-critical use cases",
    category: "computer-vision",
    vendor: "Third-Party",
    department: "Engineering",
    riskLevel: "minimal" as const,
    operatorRole: "deployer",
    status: "active" as const,
    dataTypes: ["image-data"],
  },
  
  // MINIMAL RISK - PROVIDER
  {
    name: "Weather Prediction API",
    description: "AI-powered weather forecasting service",
    category: "forecasting",
    vendor: "Internal",
    department: "Data Science",
    riskLevel: "minimal" as const,
    operatorRole: "provider",
    status: "active" as const,
    dataTypes: ["weather-data", "sensor-data"],
  },
  
  // UNCLASSIFIED (Not yet assessed)
  {
    name: "Experimental AI Research System",
    description: "New AI system under development, not yet classified",
    category: "research",
    vendor: "Internal",
    department: "R&D",
    riskLevel: "unclassified" as const,
    operatorRole: null,
    status: "active" as const,
    dataTypes: ["experimental-data"],
  },
  {
    name: "Legacy AI System - Pending Review",
    description: "Older AI system that needs risk classification assessment",
    category: "legacy",
    vendor: "Internal",
    department: "IT",
    riskLevel: "unclassified" as const,
    operatorRole: null,
    status: "active" as const,
    dataTypes: ["historical-data"],
  },
  
  // INACTIVE/DECOMMISSIONED
  {
    name: "Retired Fraud Detection System",
    description: "Previous fraud detection system that has been decommissioned",
    category: "fraud-detection",
    vendor: "Internal",
    department: "Security",
    riskLevel: "high" as const,
    operatorRole: "deployer",
    status: "decommissioned" as const,
    dataTypes: ["transaction-data", "fraud-indicators"],
  },
  {
    name: "Paused Marketing Personalization AI",
    description: "Marketing AI system temporarily inactive pending compliance review",
    category: "marketing",
    vendor: "Third-Party",
    department: "Marketing",
    riskLevel: "limited" as const,
    operatorRole: "deployer",
    status: "inactive" as const,
    dataTypes: ["customer-data", "behavioral-data"],
  },
]

async function seed() {
  console.log("🌱 Starting PostgreSQL database seed...")
  console.log("=".repeat(60))

  try {
    // Check if organization exists, create if not
    const existingOrg = await db.query.organization.findFirst({
      where: eq(schema.organization.id, DEFAULT_ORG_ID)
    })

    if (!existingOrg) {
      console.log("\n📦 Creating demo organization...")
      await db.insert(schema.organization).values({
        id: DEFAULT_ORG_ID,
        name: "Demo Organization",
        slug: "demo-org",
        description: "Demo organization for AI Act compliance platform",
        industry: "Technology",
        size: "large",
        country: "EU",
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      console.log("✅ Demo organization created")
    } else {
      console.log("ℹ️  Demo organization already exists")
    }

    // Clear existing demo AI systems
    console.log("\n🧹 Clearing existing demo AI systems...")
    await db.delete(schema.aiSystem).where(eq(schema.aiSystem.organizationId, DEFAULT_ORG_ID))
    console.log("✅ Existing demo data cleared")

    // Create AI systems
    console.log("\n🤖 Creating demo AI systems...")
    const now = new Date()

    for (const system of DEMO_AI_SYSTEMS) {
      const systemId = nanoid()

      await db.insert(schema.aiSystem).values({
        id: systemId,
        organizationId: DEFAULT_ORG_ID,
        name: system.name,
        description: system.description,
        vendor: system.vendor,
        category: system.category,
        department: system.department,
        riskLevel: system.riskLevel,
        operatorRole: system.operatorRole,
        status: system.status,
        dataTypes: JSON.stringify(system.dataTypes),
        rolesDeterminedAt: system.operatorRole ? now : null,
        createdAt: now,
        updatedAt: now,
      })

      const roleDisplay = system.operatorRole || "unclassified"
      console.log(`  ✓ ${system.name} (${system.riskLevel}, ${roleDisplay}, ${system.status})`)
    }

    console.log(`\n✅ Created ${DEMO_AI_SYSTEMS.length} AI systems`)

    // Get all created systems for assessments
    const createdSystems = await db.query.aiSystem.findMany({
      where: eq(schema.aiSystem.organizationId, DEFAULT_ORG_ID)
    })

    // Create assessments for systems with determined risk levels
    console.log("\n📝 Creating assessments...")
    let assessmentCount = 0
    for (const system of createdSystems) {
      if (system.riskLevel && system.riskLevel !== "unclassified") {
        // Risk classification assessment
        const riskAssessmentId = nanoid()
        await db.insert(schema.assessment).values({
          id: riskAssessmentId,
          organizationId: DEFAULT_ORG_ID,
          aiSystemId: system.id,
          type: "risk-classification",
          status: "completed",
          title: `Risk Classification: ${system.name}`,
          description: `Risk classification assessment for ${system.name}`,
          result: JSON.stringify({
            riskLevel: system.riskLevel,
            classification: system.riskLevel,
            rationale: `System classified as ${system.riskLevel} risk based on EU AI Act criteria.`,
          }),
          score: system.riskLevel === "prohibited" ? 0 : system.riskLevel === "high" ? 30 : system.riskLevel === "limited" ? 70 : 100,
          completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        })
        assessmentCount++
      }

      if (system.operatorRole) {
        // Role determination assessment
        const roleAssessmentId = nanoid()
        await db.insert(schema.assessment).values({
          id: roleAssessmentId,
          organizationId: DEFAULT_ORG_ID,
          aiSystemId: system.id,
          type: "role-determination",
          status: "completed",
          title: `Role Determination: ${system.name}`,
          description: `Operator role determination for ${system.name}`,
          result: JSON.stringify({
            primaryRole: system.operatorRole,
            rationale: `Organization acts as ${system.operatorRole} for this AI system.`,
          }),
          score: 100,
          completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        })
        assessmentCount++
      }
    }
    console.log(`✅ Created ${assessmentCount} assessments`)

    // Create gap analysis results for high-risk systems
    console.log("\n🔍 Creating gap analysis results...")
    const gapCategories = [
      { id: "risk-management", article: "Article 9", items: ["Risk identification", "Risk evaluation", "Risk mitigation"] },
      { id: "data-governance", article: "Article 10", items: ["Data quality", "Bias detection", "Data documentation"] },
      { id: "technical-documentation", article: "Article 11", items: ["System description", "Design specs", "Test results"] },
      { id: "record-keeping", article: "Article 12", items: ["Event logging", "Log retention", "Traceability"] },
      { id: "transparency", article: "Article 13", items: ["User disclosure", "Accuracy info", "Limitations"] },
      { id: "human-oversight", article: "Article 14", items: ["Override capability", "Monitoring", "Training"] },
    ]

    let gapCount = 0
    const highRiskSystems = createdSystems.filter(s => s.riskLevel === "high")
    for (const system of highRiskSystems.slice(0, 5)) {
      for (const cat of gapCategories) {
        for (const item of cat.items) {
          const status = Math.random() > 0.6 ? "compliant" : Math.random() > 0.5 ? "partial" : "gap"
          await db.insert(schema.gapAnalysisResult).values({
            id: nanoid(),
            organizationId: DEFAULT_ORG_ID,
            aiSystemId: system.id,
            category: cat.id,
            requirement: item,
            article: cat.article,
            status,
            priority: status === "gap" ? "high" : status === "partial" ? "medium" : "low",
            currentState: status === "compliant" ? "Implemented" : status === "partial" ? "Partially implemented" : "Not implemented",
            targetState: "Fully compliant with EU AI Act requirements",
            remediation: status !== "compliant" ? `Implement ${item.toLowerCase()} controls` : null,
            createdAt: now,
            updatedAt: now,
          })
          gapCount++
        }
      }
    }
    console.log(`✅ Created ${gapCount} gap analysis results`)

    // Summary
    console.log("\n" + "=".repeat(60))
    console.log("✅ SEEDING COMPLETE")
    console.log("=".repeat(60))

    const riskCounts = {
      prohibited: DEMO_AI_SYSTEMS.filter(s => s.riskLevel === "prohibited").length,
      high: DEMO_AI_SYSTEMS.filter(s => s.riskLevel === "high").length,
      limited: DEMO_AI_SYSTEMS.filter(s => s.riskLevel === "limited").length,
      minimal: DEMO_AI_SYSTEMS.filter(s => s.riskLevel === "minimal").length,
      unclassified: DEMO_AI_SYSTEMS.filter(s => s.riskLevel === "unclassified").length,
    }

    const roleCounts = {
      provider: DEMO_AI_SYSTEMS.filter(s => s.operatorRole === "provider").length,
      deployer: DEMO_AI_SYSTEMS.filter(s => s.operatorRole === "deployer").length,
      importer: DEMO_AI_SYSTEMS.filter(s => s.operatorRole === "importer").length,
      distributor: DEMO_AI_SYSTEMS.filter(s => s.operatorRole === "distributor").length,
      gpai_provider: DEMO_AI_SYSTEMS.filter(s => s.operatorRole === "gpai_provider").length,
      none: DEMO_AI_SYSTEMS.filter(s => s.operatorRole === null).length,
    }

    console.log("\n📈 Risk Level Distribution:")
    Object.entries(riskCounts).forEach(([level, count]) => {
      console.log(`  - ${level}: ${count}`)
    })

    console.log("\n👥 Operator Role Distribution:")
    Object.entries(roleCounts).forEach(([role, count]) => {
      console.log(`  - ${role}: ${count}`)
    })

    console.log("\n🎉 Database seeded successfully!")

  } catch (error) {
    console.error("❌ Seed failed:", error)
    throw error
  } finally {
    await client.end()
  }
}

seed()
