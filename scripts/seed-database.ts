/**
 * Complete Database Seed Script
 * 
 * This script creates a fully populated demo database with:
 * - Demo organization
 * - 25+ comprehensive demo AI systems covering all EU AI Act scenarios:
 *   - All risk levels: prohibited, high, limited, minimal, unclassified
 *   - All operator roles: provider, deployer, importer, distributor, gpai_provider
 *   - Various statuses: active, inactive, decommissioned
 *   - Different categories and use cases
 * - Risk classifications
 * - Requirements status
 * - Gap analysis results
 * 
 * Run with: bun run db:seed
 * Or: bun scripts/seed-database.ts
 */

import { Database } from "bun:sqlite"
import { nanoid } from "nanoid"
import {
  PROVIDER_REQUIREMENTS,
  DEPLOYER_REQUIREMENTS,
  LIMITED_RISK_REQUIREMENTS,
  MINIMAL_RISK_REQUIREMENTS,
  IMPORTER_REQUIREMENTS,
  DISTRIBUTOR_REQUIREMENTS,
  type Requirement
} from "../src/lib/data/role-requirements"
import { CONTROL_IDS } from "../src/lib/data/standard-controls"
import { DEFAULT_ORG_ID } from "../src/lib/constants"

const DB_PATH = "./sqlite.db"

// Helper functions for assessment creation (defined before DEMO_AI_SYSTEMS to use in type definitions)
function getRiskClassificationRationale(system: { riskLevel: string; description: string }): string {
  const rationales: Record<string, string> = {
    prohibited: `This system falls under Article 5 prohibited practices. ${system.description}`,
    high: `This system is classified as high-risk based on Annex III criteria. ${system.description}`,
    limited: `This system has limited risk and requires transparency obligations under Article 50. ${system.description}`,
    minimal: `This system poses minimal risk and is not subject to specific obligations. ${system.description}`,
  }
  return rationales[system.riskLevel] || system.description
}

function getRoleDeterminationRationale(system: AiSystemData): string {
  const roleRationales: Record<string, string> = {
    provider: `Organization developed and placed this AI system on the market. ${system.vendor === "Internal" ? "System is internally developed." : `System provided by ${system.vendor}.`}`,
    deployer: `Organization uses this AI system in its operations. System is deployed for ${system.department} department.`,
    importer: `Organization imports this AI system from a third country (${system.vendor}) and places it on the EU market.`,
    distributor: `Organization distributes this AI system to other organizations. System is provided by ${system.vendor}.`,
    gpai_provider: `Organization provides a general-purpose AI model with broad capabilities used as foundation for multiple applications.`,
  }
  return roleRationales[system.operatorRole || ""] || `Role determined based on system usage and ownership.`
}

function getRiskClassificationQuestions(system: AiSystemData): Array<{ id: string; answer: string; notes?: string }> {
  const questions: Array<{ id: string; answer: string; notes?: string }> = []

  // Prohibited practices questions
  if (system.riskLevel === "prohibited") {
    if (system.category === "social-scoring") {
      questions.push(
        { id: "prohibited_1", answer: "yes", notes: "System evaluates persons based on social behavior" },
        { id: "prohibited_2", answer: "yes", notes: "Could lead to detrimental treatment" }
      )
    } else if (system.category === "biometric-identification") {
      questions.push(
        { id: "prohibited_5", answer: "yes", notes: "Real-time remote biometric identification in public spaces" }
      )
    }
  }

  // High-risk classification questions
  if (system.riskLevel === "high") {
    if (system.category === "healthcare" || system.category === "medical") {
      questions.push(
        { id: "highrisk_annex1_1", answer: "yes", notes: "AI system is a safety component of a medical device" },
        { id: "highrisk_annex1_3", answer: "yes", notes: "Requires third-party conformity assessment" }
      )
    } else if (system.category === "finance" || system.category === "credit") {
      questions.push(
        { id: "highrisk_services_1", answer: "yes", notes: "Used to evaluate creditworthiness of natural persons" }
      )
    } else if (system.category === "recruitment") {
      questions.push(
        { id: "highrisk_emp_1", answer: "yes", notes: "Used to evaluate and rank job applications" }
      )
    } else if (system.category === "biometric") {
      questions.push(
        { id: "highrisk_bio_1", answer: "yes", notes: "Used for biometric identification" },
        { id: "highrisk_bio_2", answer: "yes", notes: "Categorizes natural persons based on biometric data" }
      )
    } else if (system.category === "workplace-monitoring") {
      questions.push(
        { id: "highrisk_emp_3", answer: "yes", notes: "Used to monitor and evaluate employee performance" }
      )
    } else if (system.category === "education") {
      questions.push(
        { id: "highrisk_edu_2", answer: "yes", notes: "Used to evaluate students and determine access to education" }
      )
    } else if (system.category === "insurance") {
      questions.push(
        { id: "highrisk_services_2", answer: "yes", notes: "Used by insurance companies to assess risks and determine premiums" }
      )
    } else if (system.category === "general-purpose-ai") {
      questions.push(
        { id: "highrisk_annex1_1", answer: "yes", notes: "General-purpose AI model with systemic risk" }
      )
    }
  }

  // Limited risk questions
  if (system.riskLevel === "limited") {
    questions.push(
      { id: "limited_1", answer: "yes", notes: "AI system generates or manipulates content" },
      { id: "limited_2", answer: "yes", notes: "Users should be aware they are interacting with AI" }
    )
  }

  // Minimal risk - no specific questions needed
  if (system.riskLevel === "minimal") {
    questions.push(
      { id: "minimal_1", answer: "no", notes: "System does not fall into high-risk or limited-risk categories" }
    )
  }

  return questions
}

function getRoleDeterminationQuestions(system: AiSystemData): Array<{ id: string; answer: string; notes?: string }> {
  const questions: Array<{ id: string; answer: string; notes?: string }> = []

  if (system.operatorRole === "provider") {
    questions.push(
      { id: "role_1", answer: "yes", notes: "Organization developed the AI system" },
      { id: "role_2", answer: "yes", notes: "Organization places the system on the market" },
      { id: "role_3", answer: "no", notes: "Not importing from third country" }
    )
  } else if (system.operatorRole === "deployer") {
    questions.push(
      { id: "role_1", answer: "no", notes: "Organization did not develop the system" },
      { id: "role_4", answer: "yes", notes: "Organization uses the AI system in its operations" },
      { id: "role_5", answer: "yes", notes: "System is deployed under organization's authority" }
    )
  } else if (system.operatorRole === "importer") {
    questions.push(
      { id: "role_1", answer: "no", notes: "Organization did not develop the system" },
      { id: "role_3", answer: "yes", notes: `Imports AI system from third country (${system.vendor})` },
      { id: "role_6", answer: "yes", notes: "Places imported system on EU market" }
    )
  } else if (system.operatorRole === "distributor") {
    questions.push(
      { id: "role_1", answer: "no", notes: "Organization did not develop the system" },
      { id: "role_7", answer: "yes", notes: "Organization distributes the AI system" },
      { id: "role_8", answer: "yes", notes: "Makes system available on EU market" }
    )
  } else if (system.operatorRole === "gpai_provider") {
    questions.push(
      { id: "role_9", answer: "yes", notes: "Organization provides general-purpose AI model" },
      { id: "role_10", answer: "yes", notes: "Model has broad capabilities for multiple applications" }
    )
  }

  return questions
}

// Comprehensive demo AI systems covering all EU AI Act scenarios
// This covers all risk levels, operator roles, and various use cases
const DEMO_AI_SYSTEMS: Array<{
  name: string
  description: string
  category: string
  vendor: string
  department: string
  riskLevel: "prohibited" | "high" | "limited" | "minimal" | "unclassified"
  operatorRole: "provider" | "deployer" | "importer" | "distributor" | "gpai_provider" | "authorized_representative" | null
  status: "active" | "inactive" | "decommissioned"
  dataTypes?: string[]
  complianceProgress: number
  deploymentDate?: number
}> = [
  // PROHIBITED PRACTICES (Article 5)
  {
    name: "Social Scoring System",
    description: "AI system that evaluates or classifies the trustworthiness of natural persons based on their social behavior or known or predicted personal or personality characteristics",
    category: "social-scoring",
    vendor: "Internal",
    department: "Operations",
    riskLevel: "prohibited",
    operatorRole: null,
    status: "inactive",
    dataTypes: ["behavioral-data", "personal-data", "social-media-data"],
    complianceProgress: 0,
  },
  {
    name: "Real-Time Remote Biometric Identification",
    description: "AI system used for real-time remote biometric identification of natural persons in publicly accessible spaces for law enforcement purposes",
    category: "biometric-identification",
    vendor: "Third-Party",
    department: "Security",
    riskLevel: "prohibited",
    operatorRole: null,
    status: "inactive",
    dataTypes: ["biometric-data", "facial-recognition"],
    complianceProgress: 0,
  },
  
  // HIGH RISK - PROVIDER
  {
    name: "Medical Device AI - Diagnostic Assistant",
    description: "AI system used as a safety component of a medical device for diagnostic purposes",
    category: "healthcare",
    vendor: "Internal",
    department: "Medical",
    riskLevel: "high",
    operatorRole: "provider",
    status: "active",
    dataTypes: ["medical-images", "patient-data", "diagnostic-data"],
    complianceProgress: 72,
    deploymentDate: Date.now() - 180 * 24 * 60 * 60 * 1000, // 6 months ago
  },
  {
    name: "Creditworthiness Assessment System",
    description: "AI system used to evaluate the creditworthiness of natural persons or establish their credit score",
    category: "finance",
    vendor: "Internal",
    department: "Finance",
    riskLevel: "high",
    operatorRole: "provider",
    status: "active",
    dataTypes: ["financial-data", "credit-history", "personal-data"],
    complianceProgress: 58,
    deploymentDate: Date.now() - 365 * 24 * 60 * 60 * 1000, // 1 year ago
  },
  {
    name: "Recruitment AI - CV Screening",
    description: "AI system used to evaluate and rank job applications or candidates in recruitment processes",
    category: "recruitment",
    vendor: "Internal",
    department: "HR",
    riskLevel: "high",
    operatorRole: "provider",
    status: "active",
    dataTypes: ["cv-data", "personal-data", "employment-history"],
    complianceProgress: 45,
    deploymentDate: Date.now() - 90 * 24 * 60 * 60 * 1000, // 3 months ago
  },
  {
    name: "Access Control Biometric System",
    description: "AI system used for biometric identification and categorization of natural persons",
    category: "biometric",
    vendor: "Third-Party",
    department: "Security",
    riskLevel: "high",
    operatorRole: "provider",
    status: "active",
    dataTypes: ["biometric-data", "facial-recognition", "fingerprint"],
    complianceProgress: 65,
    deploymentDate: Date.now() - 120 * 24 * 60 * 60 * 1000, // 4 months ago
  },
  
  // HIGH RISK - DEPLOYER
  {
    name: "Employee Performance Monitoring AI",
    description: "AI system used to monitor and evaluate the performance of employees in the workplace",
    category: "workplace-monitoring",
    vendor: "Third-Party",
    department: "HR",
    riskLevel: "high",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["performance-data", "workplace-data", "productivity-metrics"],
    complianceProgress: 82,
    deploymentDate: Date.now() - 200 * 24 * 60 * 60 * 1000, // ~7 months ago
  },
  {
    name: "Educational Assessment AI",
    description: "AI system used to evaluate students' learning outcomes and determine access to education",
    category: "education",
    vendor: "Internal",
    department: "Education",
    riskLevel: "high",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["student-data", "assessment-results", "learning-analytics"],
    complianceProgress: 55,
    deploymentDate: Date.now() - 60 * 24 * 60 * 60 * 1000, // 2 months ago
  },
  {
    name: "Insurance Risk Assessment AI",
    description: "AI system used by insurance companies to assess risks and determine premiums",
    category: "insurance",
    vendor: "Third-Party",
    department: "Risk Management",
    riskLevel: "high",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["insurance-data", "risk-factors", "personal-data"],
    complianceProgress: 68,
    deploymentDate: Date.now() - 150 * 24 * 60 * 60 * 1000, // 5 months ago
  },
  
  // HIGH RISK - IMPORTER
  {
    name: "Imported Medical AI Device",
    description: "High-risk AI system imported from third country for use in medical diagnostics",
    category: "healthcare",
    vendor: "MedTech Global Inc.",
    department: "Medical",
    riskLevel: "high",
    operatorRole: "importer",
    status: "active",
    dataTypes: ["medical-data", "diagnostic-images"],
    complianceProgress: 70,
    deploymentDate: Date.now() - 100 * 24 * 60 * 60 * 1000, // ~3.5 months ago
  },
  
  // HIGH RISK - DISTRIBUTOR
  {
    name: "Distributed Recruitment Platform",
    description: "High-risk AI recruitment system distributed to multiple organizations",
    category: "recruitment",
    vendor: "HR Solutions Ltd.",
    department: "Sales",
    riskLevel: "high",
    operatorRole: "distributor",
    status: "active",
    dataTypes: ["cv-data", "candidate-data"],
    complianceProgress: 60,
    deploymentDate: Date.now() - 80 * 24 * 60 * 60 * 1000, // ~2.5 months ago
  },
  
  // HIGH RISK - GPAI PROVIDER
  {
    name: "General Purpose AI Model - GPT Variant",
    description: "General-purpose AI model with broad capabilities, used as foundation for multiple applications",
    category: "general-purpose-ai",
    vendor: "Internal",
    department: "AI Research",
    riskLevel: "high",
    operatorRole: "gpai_provider",
    status: "active",
    dataTypes: ["text-data", "code", "multimodal-data"],
    complianceProgress: 75,
    deploymentDate: Date.now() - 250 * 24 * 60 * 60 * 1000, // ~8 months ago
  },
  
  // LIMITED RISK - DEPLOYER
  {
    name: "Customer Support Chatbot",
    description: "AI chatbot for customer service interactions with transparency obligations",
    category: "chatbot",
    vendor: "Internal",
    department: "Customer Service",
    riskLevel: "limited",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["conversation-data", "customer-data"],
    complianceProgress: 92,
    deploymentDate: Date.now() - 300 * 24 * 60 * 60 * 1000, // 10 months ago
  },
  {
    name: "Content Recommendation Engine",
    description: "AI system that generates or manipulates content with transparency requirements",
    category: "recommendation",
    vendor: "Internal",
    department: "Product",
    riskLevel: "limited",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["user-behavior", "content-data", "preferences"],
    complianceProgress: 88,
    deploymentDate: Date.now() - 400 * 24 * 60 * 60 * 1000, // ~13 months ago
  },
  {
    name: "Deepfake Detection Tool",
    description: "AI system designed to detect deepfakes and manipulated media",
    category: "media-analysis",
    vendor: "Third-Party",
    department: "Security",
    riskLevel: "limited",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["image-data", "video-data", "audio-data"],
    complianceProgress: 85,
    deploymentDate: Date.now() - 180 * 24 * 60 * 60 * 1000, // 6 months ago
  },
  {
    name: "Emotion Recognition System",
    description: "AI system that infers emotions from facial expressions or voice patterns",
    category: "emotion-analysis",
    vendor: "Third-Party",
    department: "Marketing",
    riskLevel: "limited",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["facial-data", "voice-data", "behavioral-data"],
    complianceProgress: 78,
    deploymentDate: Date.now() - 220 * 24 * 60 * 60 * 1000, // ~7 months ago
  },
  
  // LIMITED RISK - PROVIDER
  {
    name: "AI Content Generator API",
    description: "API service providing AI-generated text and content creation capabilities",
    category: "content-generation",
    vendor: "Internal",
    department: "Product",
    riskLevel: "limited",
    operatorRole: "provider",
    status: "active",
    dataTypes: ["text-data", "user-input"],
    complianceProgress: 90,
    deploymentDate: Date.now() - 160 * 24 * 60 * 60 * 1000, // ~5 months ago
  },
  
  // MINIMAL RISK - DEPLOYER
  {
    name: "Email Spam Filter",
    description: "AI-powered email filtering system with minimal risk",
    category: "security",
    vendor: "Internal",
    department: "IT",
    riskLevel: "minimal",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["email-content", "metadata"],
    complianceProgress: 100,
    deploymentDate: Date.now() - 730 * 24 * 60 * 60 * 1000, // 2 years ago
  },
  {
    name: "Language Translation Service",
    description: "AI translation service for multilingual content",
    category: "nlp",
    vendor: "Third-Party",
    department: "Product",
    riskLevel: "minimal",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["text-data", "language-data"],
    complianceProgress: 98,
    deploymentDate: Date.now() - 500 * 24 * 60 * 60 * 1000, // ~16 months ago
  },
  {
    name: "Predictive Maintenance System",
    description: "AI system for predicting equipment maintenance needs",
    category: "iot",
    vendor: "Internal",
    department: "Operations",
    riskLevel: "minimal",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["sensor-data", "equipment-metrics"],
    complianceProgress: 95,
    deploymentDate: Date.now() - 600 * 24 * 60 * 60 * 1000, // ~20 months ago
  },
  {
    name: "Image Classification API",
    description: "Simple image classification service for non-critical use cases",
    category: "computer-vision",
    vendor: "Third-Party",
    department: "Engineering",
    riskLevel: "minimal",
    operatorRole: "deployer",
    status: "active",
    dataTypes: ["image-data"],
    complianceProgress: 100,
    deploymentDate: Date.now() - 450 * 24 * 60 * 60 * 1000, // ~15 months ago
  },
  
  // MINIMAL RISK - PROVIDER
  {
    name: "Weather Prediction API",
    description: "AI-powered weather forecasting service",
    category: "forecasting",
    vendor: "Internal",
    department: "Data Science",
    riskLevel: "minimal",
    operatorRole: "provider",
    status: "active",
    dataTypes: ["weather-data", "sensor-data"],
    complianceProgress: 100,
    deploymentDate: Date.now() - 365 * 24 * 60 * 60 * 1000, // 1 year ago
  },
  
  // UNCLASSIFIED (Not yet assessed)
  {
    name: "Experimental AI Research System",
    description: "New AI system under development, not yet classified",
    category: "research",
    vendor: "Internal",
    department: "R&D",
    riskLevel: "unclassified",
    operatorRole: null,
    status: "active",
    dataTypes: ["experimental-data"],
    complianceProgress: 0,
  },
  {
    name: "Legacy AI System - Pending Review",
    description: "Older AI system that needs risk classification assessment",
    category: "legacy",
    vendor: "Internal",
    department: "IT",
    riskLevel: "unclassified",
    operatorRole: null,
    status: "active",
    dataTypes: ["historical-data"],
    complianceProgress: 0,
    deploymentDate: Date.now() - 1000 * 24 * 60 * 60 * 1000, // ~2.7 years ago
  },
  
  // INACTIVE/DECOMMISSIONED
  {
    name: "Retired Fraud Detection System",
    description: "Previous fraud detection system that has been decommissioned",
    category: "fraud-detection",
    vendor: "Internal",
    department: "Security",
    riskLevel: "high",
    operatorRole: "deployer",
    status: "decommissioned",
    dataTypes: ["transaction-data", "fraud-indicators"],
    complianceProgress: 0,
    deploymentDate: Date.now() - 2000 * 24 * 60 * 60 * 1000, // ~5.5 years ago
  },
  {
    name: "Paused Marketing Personalization AI",
    description: "Marketing AI system temporarily inactive pending compliance review",
    category: "marketing",
    vendor: "Third-Party",
    department: "Marketing",
    riskLevel: "limited",
    operatorRole: "deployer",
    status: "inactive",
    dataTypes: ["customer-data", "behavioral-data"],
    complianceProgress: 40,
    deploymentDate: Date.now() - 300 * 24 * 60 * 60 * 1000, // 10 months ago
  },
]

// Helper functions for assessment creation (defined after DEMO_AI_SYSTEMS)
function getRiskClassificationRationale(system: AiSystemData): string {
  const rationales: Record<string, string> = {
    prohibited: `This system falls under Article 5 prohibited practices. ${system.description}`,
    high: `This system is classified as high-risk based on Annex III criteria. ${system.description}`,
    limited: `This system has limited risk and requires transparency obligations under Article 50. ${system.description}`,
    minimal: `This system poses minimal risk and is not subject to specific obligations. ${system.description}`,
  }
  return rationales[system.riskLevel] || system.description
}

function getRoleDeterminationRationale(system: AiSystemData): string {
  const roleRationales: Record<string, string> = {
    provider: `Organization developed and placed this AI system on the market. ${system.vendor === "Internal" ? "System is internally developed." : `System provided by ${system.vendor}.`}`,
    deployer: `Organization uses this AI system in its operations. System is deployed for ${system.department} department.`,
    importer: `Organization imports this AI system from a third country (${system.vendor}) and places it on the EU market.`,
    distributor: `Organization distributes this AI system to other organizations. System is provided by ${system.vendor}.`,
    gpai_provider: `Organization provides a general-purpose AI model with broad capabilities used as foundation for multiple applications.`,
  }
  return roleRationales[system.operatorRole || ""] || `Role determined based on system usage and ownership.`
}

function getRiskClassificationQuestions(system: AiSystemData): Array<{ id: string; answer: string; notes?: string }> {
  const questions: Array<{ id: string; answer: string; notes?: string }> = []

  // Prohibited practices questions
  if (system.riskLevel === "prohibited") {
    if (system.category === "social-scoring") {
      questions.push(
        { id: "prohibited_1", answer: "yes", notes: "System evaluates persons based on social behavior" },
        { id: "prohibited_2", answer: "yes", notes: "Could lead to detrimental treatment" }
      )
    } else if (system.category === "biometric-identification") {
      questions.push(
        { id: "prohibited_5", answer: "yes", notes: "Real-time remote biometric identification in public spaces" }
      )
    }
  }

  // High-risk classification questions
  if (system.riskLevel === "high") {
    if (system.category === "healthcare" || system.category === "medical") {
      questions.push(
        { id: "highrisk_annex1_1", answer: "yes", notes: "AI system is a safety component of a medical device" },
        { id: "highrisk_annex1_3", answer: "yes", notes: "Requires third-party conformity assessment" }
      )
    } else if (system.category === "finance" || system.category === "credit") {
      questions.push(
        { id: "highrisk_services_1", answer: "yes", notes: "Used to evaluate creditworthiness of natural persons" }
      )
    } else if (system.category === "recruitment") {
      questions.push(
        { id: "highrisk_emp_1", answer: "yes", notes: "Used to evaluate and rank job applications" }
      )
    } else if (system.category === "biometric") {
      questions.push(
        { id: "highrisk_bio_1", answer: "yes", notes: "Used for biometric identification" },
        { id: "highrisk_bio_2", answer: "yes", notes: "Categorizes natural persons based on biometric data" }
      )
    } else if (system.category === "workplace-monitoring") {
      questions.push(
        { id: "highrisk_emp_3", answer: "yes", notes: "Used to monitor and evaluate employee performance" }
      )
    } else if (system.category === "education") {
      questions.push(
        { id: "highrisk_edu_2", answer: "yes", notes: "Used to evaluate students and determine access to education" }
      )
    } else if (system.category === "insurance") {
      questions.push(
        { id: "highrisk_services_2", answer: "yes", notes: "Used by insurance companies to assess risks and determine premiums" }
      )
    } else if (system.category === "general-purpose-ai") {
      questions.push(
        { id: "highrisk_annex1_1", answer: "yes", notes: "General-purpose AI model with systemic risk" }
      )
    }
  }

  // Limited risk questions
  if (system.riskLevel === "limited") {
    questions.push(
      { id: "limited_1", answer: "yes", notes: "AI system generates or manipulates content" },
      { id: "limited_2", answer: "yes", notes: "Users should be aware they are interacting with AI" }
    )
  }

  // Minimal risk
  if (system.riskLevel === "minimal") {
    questions.push(
      { id: "minimal_1", answer: "no", notes: "System does not fall into high-risk or limited-risk categories" }
    )
  }

  return questions
}

function getRoleDeterminationQuestions(system: AiSystemData): Array<{ id: string; answer: string; notes?: string }> {
  const questions: Array<{ id: string; answer: string; notes?: string }> = []

  if (system.operatorRole === "provider") {
    questions.push(
      { id: "role_1", answer: "yes", notes: "Organization developed the AI system" },
      { id: "role_2", answer: "yes", notes: "Organization places the system on the market" },
      { id: "role_3", answer: "no", notes: "Not importing from third country" }
    )
  } else if (system.operatorRole === "deployer") {
    questions.push(
      { id: "role_1", answer: "no", notes: "Organization did not develop the system" },
      { id: "role_4", answer: "yes", notes: "Organization uses the AI system in its operations" },
      { id: "role_5", answer: "yes", notes: "System is deployed under organization's authority" }
    )
  } else if (system.operatorRole === "importer") {
    questions.push(
      { id: "role_1", answer: "no", notes: "Organization did not develop the system" },
      { id: "role_3", answer: "yes", notes: `Imports AI system from third country (${system.vendor})` },
      { id: "role_6", answer: "yes", notes: "Places imported system on EU market" }
    )
  } else if (system.operatorRole === "distributor") {
    questions.push(
      { id: "role_1", answer: "no", notes: "Organization did not develop the system" },
      { id: "role_7", answer: "yes", notes: "Organization distributes the AI system" },
      { id: "role_8", answer: "yes", notes: "Makes system available on EU market" }
    )
  } else if (system.operatorRole === "gpai_provider") {
    questions.push(
      { id: "role_9", answer: "yes", notes: "Organization provides general-purpose AI model" },
      { id: "role_10", answer: "yes", notes: "Model has broad capabilities for multiple applications" }
    )
  }

  return questions
}

console.log("🌱 Starting database seed...")
console.log("=" .repeat(60))

// Open database
const db = new Database(DB_PATH)

try {
  // Check if organization exists, create if not
  const orgExists = db.prepare("SELECT id FROM organization WHERE id = ?").get(DEFAULT_ORG_ID)
  
  if (!orgExists) {
    console.log("\n📦 Creating demo organization...")
    db.prepare(`
      INSERT INTO organization (id, name, slug, description, industry, size, country, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      DEFAULT_ORG_ID,
      "Demo Organization",
      "demo-org",
      "Demo organization for AI Act compliance platform",
      "Technology",
      "large",
      "EU",
      Date.now(),
      Date.now()
    )
    console.log("✅ Demo organization created")
  } else {
    console.log("ℹ️  Demo organization already exists")
  }

  // Clear existing demo data (optional - comment out to preserve existing data)
  console.log("\n🧹 Clearing existing demo data...")
  db.prepare("DELETE FROM gap_analysis_result WHERE organization_id = ?").run(DEFAULT_ORG_ID)
  db.prepare("DELETE FROM requirements_status WHERE organization_id = ?").run(DEFAULT_ORG_ID)
  db.prepare("DELETE FROM assessment_answer WHERE assessment_id IN (SELECT id FROM assessment WHERE organization_id = ?)").run(DEFAULT_ORG_ID)
  db.prepare("DELETE FROM assessment WHERE organization_id = ?").run(DEFAULT_ORG_ID)
  db.prepare("DELETE FROM ai_system WHERE organization_id = ?").run(DEFAULT_ORG_ID)
  console.log("✅ Existing demo data cleared")

  // Create AI systems
  console.log("\n🤖 Creating demo AI systems...")
  const insertSystem = db.prepare(`
    INSERT INTO ai_system (
      id, organization_id, name, description, vendor, category, department,
      risk_level, operator_role, status, data_types, deployment_date,
      roles_determined_at, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const systemIds: string[] = []
  const now = Date.now()

  DEMO_AI_SYSTEMS.forEach((system) => {
    const systemId = nanoid()
    systemIds.push(systemId)

    const dataTypesJson = system.dataTypes ? JSON.stringify(system.dataTypes) : null

    insertSystem.run(
      systemId,
      DEFAULT_ORG_ID,
      system.name,
      system.description,
      system.vendor,
      system.category,
      system.department,
      system.riskLevel,
      system.operatorRole,
      system.status,
      dataTypesJson,
      system.deploymentDate || null,
      system.operatorRole ? now : null,
      now,
      now
    )

    const roleDisplay = system.operatorRole || "unclassified"
    console.log(`  ✓ ${system.name} (${system.riskLevel}, ${roleDisplay}, ${system.status})`)
  })

  console.log(`✅ Created ${systemIds.length} AI systems`)

  // Create assessment records for each system
  console.log("\n📝 Creating assessment records...")
  const insertAssessment = db.prepare(`
    INSERT INTO assessment (
      id, organization_id, ai_system_id, type, status, title, description,
      result, score, completed_at, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const insertAssessmentAnswer = db.prepare(`
    INSERT INTO assessment_answer (
      id, assessment_id, question_id, answer, notes, created_at
    ) VALUES (?, ?, ?, ?, ?, ?)
  `)

  // Create assessments for each system
  systemIds.forEach((systemId, index) => {
    const system = DEMO_AI_SYSTEMS[index]
    
    // Create risk classification assessment for all systems (except unclassified)
    if (system.riskLevel !== "unclassified") {
      const riskAssessmentId = nanoid()
      const riskAssessmentResult = {
        riskLevel: system.riskLevel,
        classification: system.riskLevel,
        rationale: getRiskClassificationRationale(system),
        assessmentDate: new Date(now).toISOString(),
      }

      insertAssessment.run(
        riskAssessmentId,
        DEFAULT_ORG_ID,
        systemId,
        "risk-classification",
        "completed",
        `Risk Classification: ${system.name}`,
        `Risk classification assessment for ${system.name}`,
        JSON.stringify(riskAssessmentResult),
        system.riskLevel === "prohibited" ? 0 : system.riskLevel === "high" ? 30 : system.riskLevel === "limited" ? 70 : 100,
        now - 7 * 24 * 60 * 60 * 1000, // Completed 7 days ago
        now - 14 * 24 * 60 * 60 * 1000, // Created 14 days ago
        now - 7 * 24 * 60 * 60 * 1000
      )

      // Add sample assessment answers for risk classification
      const riskQuestions = getRiskClassificationQuestions(system)
      riskQuestions.forEach((q, qIndex) => {
        insertAssessmentAnswer.run(
          nanoid(),
          riskAssessmentId,
          q.id,
          q.answer,
          q.notes || null,
          now - 14 * 24 * 60 * 60 * 1000 + qIndex * 3600000 // Staggered by hour
        )
      })
    }

    // Create role determination assessment for systems with roles
    if (system.operatorRole) {
      const roleAssessmentId = nanoid()
      const roleAssessmentResult = {
        operatorRole: system.operatorRole,
        roleDetermination: system.operatorRole,
        rationale: getRoleDeterminationRationale(system),
        assessmentDate: new Date(now).toISOString(),
      }

      insertAssessment.run(
        roleAssessmentId,
        DEFAULT_ORG_ID,
        systemId,
        "provider-deployer",
        "completed",
        `Role Determination: ${system.name}`,
        `Operator role determination for ${system.name}`,
        JSON.stringify(roleAssessmentResult),
        85, // Role determination score
        now - 5 * 24 * 60 * 60 * 1000, // Completed 5 days ago
        now - 10 * 24 * 60 * 60 * 1000, // Created 10 days ago
        now - 5 * 24 * 60 * 60 * 1000
      )

      // Add sample assessment answers for role determination
      const roleQuestions = getRoleDeterminationQuestions(system)
      roleQuestions.forEach((q, qIndex) => {
        insertAssessmentAnswer.run(
          nanoid(),
          roleAssessmentId,
          q.id,
          q.answer,
          q.notes || null,
          now - 10 * 24 * 60 * 60 * 1000 + qIndex * 3600000
        )
      })
    }
  })

  console.log(`✅ Created assessment records`)

  // Seed requirements and gap analysis (reuse logic from original seed script)
  console.log("\n📋 Seeding requirements and gap analysis...")
  
  const insertRequirementsStatus = db.prepare(`
    INSERT INTO requirements_status
    (id, organization_id, ai_system_id, requirement_id, article, category, control_id, status, evidence, owner, notes, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const insertGapAnalysis = db.prepare(`
    INSERT INTO gap_analysis_result
    (id, organization_id, ai_system_id, category, requirement, article, status, current_state, target_state, gap, priority, remediation, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const updateAiSystem = db.prepare(`
    UPDATE ai_system
    SET risk_level = ?, operator_role = ?, roles_determined_at = ?, updated_at = ?
    WHERE id = ?
  `)

  // Helper functions (from original seed script)
  function getRequirementStatus(progress: number, index: number, total: number): string {
    const threshold = (index / total) * 100
    if (threshold < progress - 20) return "verified"
    if (threshold < progress - 5) return "implemented"
    if (threshold < progress + 10) return "in_progress"
    return "not_started"
  }

  function getGapStatus(status: string): "compliant" | "partial" | "gap" {
    if (status === "verified" || status === "implemented") return "compliant"
    if (status === "in_progress") return "partial"
    return "gap"
  }

  function getPriority(category: string): string {
    const highPriority = ["Risk Management System", "Data and Data Governance", "Human Oversight", "Cybersecurity"]
    const criticalPriority = ["Prohibited Practices", "Serious Incident Reporting"]
    if (criticalPriority.some(c => category.includes(c))) return "critical"
    if (highPriority.some(c => category.includes(c))) return "high"
    return "medium"
  }

  function getRequirementsForSystem(role: string, riskLevel: string): Requirement[] {
    if (riskLevel === "high") {
      switch (role) {
        case "provider": return PROVIDER_REQUIREMENTS.requirements
        case "deployer": return DEPLOYER_REQUIREMENTS.requirements
        case "importer": return IMPORTER_REQUIREMENTS.requirements
        case "distributor": return DISTRIBUTOR_REQUIREMENTS.requirements
        default: return DEPLOYER_REQUIREMENTS.requirements
      }
    } else if (riskLevel === "limited") {
      return LIMITED_RISK_REQUIREMENTS.requirements
    } else {
      return MINIMAL_RISK_REQUIREMENTS.requirements
    }
  }

  const categoryToControlPrefix: Record<string, keyof typeof CONTROL_IDS> = {
    "Risk Management System": "RM",
    "Data and Data Governance": "DATA",
    "Technical Documentation": "DOC",
    "Record-Keeping (Logging)": "LOG",
    "Transparency & Information to Deployers": "TRANS",
    "Human Oversight": "HO",
    "Accuracy, Robustness, Cybersecurity": "ARS",
    "Quality Management System": "QMS",
    "Conformity Assessment": "CA",
    "Post-Market Monitoring System": "PMM",
    "Serious Incident Reporting": "INC",
  }

  function getControlsForCategory(category: string, count: number = 2): string[] {
    const prefix = categoryToControlPrefix[category]
    if (!prefix) return []
    const controls = CONTROL_IDS[prefix] || []
    const startIndex = Math.floor(Math.random() * Math.max(1, controls.length - count))
    return controls.slice(startIndex, startIndex + count)
  }

  const categoryOwners: Record<string, string> = {
    "Risk Management System": "Chief Risk Officer",
    "Data and Data Governance": "Data Governance Team",
    "Technical Documentation": "Compliance Team",
    "Record-Keeping (Logging)": "IT Operations",
    "Transparency & Information to Deployers": "Product Team",
    "Human Oversight": "Development Team",
    "Accuracy, Robustness, Cybersecurity": "Security Team",
    "Quality Management System": "Quality Assurance",
    "Conformity Assessment": "Compliance Team",
    "Post-Market Monitoring System": "Risk Management Team",
    "Serious Incident Reporting": "Compliance Team",
  }

  const gapCategories: Array<{ id: string; controlPrefix: keyof typeof CONTROL_IDS }> = [
    { id: "risk-management", controlPrefix: "RM" },
    { id: "data-governance", controlPrefix: "DATA" },
    { id: "technical", controlPrefix: "ARS" },
    { id: "human-oversight", controlPrefix: "HO" },
    { id: "transparency", controlPrefix: "TRANS" },
    { id: "documentation", controlPrefix: "DOC" },
  ]

  const remediationSuggestions: Record<string, string[]> = {
    "risk-management": [
      "Establish formal risk assessment methodology",
      "Create risk register and review process",
      "Implement continuous risk monitoring",
    ],
    "data-governance": [
      "Implement data quality validation procedures",
      "Establish bias detection and mitigation process",
      "Document data lineage and provenance",
    ],
    "technical": [
      "Implement accuracy measurement framework",
      "Establish robustness testing procedures",
      "Deploy technical redundancy measures",
    ],
    "human-oversight": [
      "Design human-machine interface controls",
      "Implement system override capabilities",
      "Create human oversight training program",
    ],
    "transparency": [
      "Create instructions for use document",
      "Implement user notification mechanisms",
      "Document system capabilities and limitations",
    ],
    "documentation": [
      "Complete technical documentation package",
      "Establish document retention policy",
      "Create conformity assessment documentation",
    ],
  }

  // Process each system for requirements and gap analysis
  systemIds.forEach((systemId, index) => {
    const system = DEMO_AI_SYSTEMS[index]
    
    // Skip prohibited and unclassified systems (no requirements)
    if (system.riskLevel === "prohibited" || system.riskLevel === "unclassified" || !system.operatorRole) {
      return
    }
    
    // Update system classification (if not already set)
    if (system.operatorRole) {
      updateAiSystem.run(system.riskLevel, system.operatorRole, now, now, systemId)
    }

    // Get requirements
    const requirements = getRequirementsForSystem(system.operatorRole, system.riskLevel)

    // Create requirements status
    requirements.forEach((req, reqIndex) => {
      const status = getRequirementStatus(system.complianceProgress, reqIndex, requirements.length)
      const owner = categoryOwners[req.category] || "Compliance Team"
      const categoryControls = getControlsForCategory(req.category)
      const controlId = categoryControls[0] || null

      let evidence: string | null = null
      if (status === "verified" || status === "implemented") {
        evidence = JSON.stringify(req.evidence?.slice(0, 2) || ["Policy Document", "Assessment Report"])
      }

      insertRequirementsStatus.run(
        nanoid(),
        DEFAULT_ORG_ID,
        systemId,
        req.id,
        req.article,
        req.category,
        controlId,
        status,
        evidence,
        owner,
        req.mandatory ? "Mandatory requirement" : "Optional but recommended",
        now,
        now
      )
    })

    // Create gap analysis
    gapCategories.forEach(({ id: categoryId, controlPrefix }) => {
      const hasGaps = Math.random() * 100 > system.complianceProgress
      const categoryControlIds = CONTROL_IDS[controlPrefix] || []
      const selectedControlId = categoryControlIds[Math.floor(Math.random() * categoryControlIds.length)] || null

      if (hasGaps || system.complianceProgress < 70) {
        const gapStatus = system.complianceProgress > 80 ? "partial" :
                         system.complianceProgress > 50 ? (Math.random() > 0.5 ? "partial" : "gap") :
                         "gap"

        const priority = getPriority(categoryId)
        const remediations = remediationSuggestions[categoryId] || []
        const remediation = remediations[Math.floor(Math.random() * remediations.length)]

        const articleMap: Record<string, string> = {
          "risk-management": "Article 9",
          "data-governance": "Article 10",
          "technical": "Article 15",
          "human-oversight": "Article 14",
          "transparency": "Article 13",
          "documentation": "Article 11"
        }

        const requirementDescriptions: Record<string, string> = {
          "risk-management": "Establish and maintain continuous risk management system",
          "data-governance": "Ensure training data quality and bias mitigation",
          "technical": "Achieve appropriate accuracy, robustness, and cybersecurity",
          "human-oversight": "Enable effective human oversight during operation",
          "transparency": "Provide transparent information to deployers",
          "documentation": "Maintain comprehensive technical documentation"
        }

        const currentStateOptions: Record<string, string[]> = {
          "compliant": ["Fully implemented and verified", "All controls in place"],
          "partial": ["Partially implemented", "Some controls in place"],
          "gap": ["Not implemented", "No formal process"]
        }

        insertGapAnalysis.run(
          nanoid(),
          DEFAULT_ORG_ID,
          systemId,
          categoryId,
          requirementDescriptions[categoryId] || `${categoryId} requirement`,
          articleMap[categoryId] || "Article 9",
          gapStatus,
          currentStateOptions[gapStatus][Math.floor(Math.random() * currentStateOptions[gapStatus].length)],
          "Full compliance with EU AI Act requirements",
          gapStatus === "gap" ? `Missing ${selectedControlId || 'control'} implementation` :
            gapStatus === "partial" ? `Partial implementation of ${selectedControlId || 'control'}` : null,
          priority,
          remediation ? `${remediation} (Control: ${selectedControlId})` : null,
          now,
          now
        )
      }
    })
  })

  // Summary
  console.log("\n" + "=" .repeat(60))
  console.log("✅ SEEDING COMPLETE")
  console.log("=" .repeat(60))

  const reqCount = db.prepare("SELECT COUNT(*) as count FROM requirements_status WHERE organization_id = ?").get(DEFAULT_ORG_ID) as { count: number }
  const gapCount = db.prepare("SELECT COUNT(*) as count FROM gap_analysis_result WHERE organization_id = ?").get(DEFAULT_ORG_ID) as { count: number }
  const systemCount = db.prepare("SELECT COUNT(*) as count FROM ai_system WHERE organization_id = ?").get(DEFAULT_ORG_ID) as { count: number }
  const assessmentCount = db.prepare("SELECT COUNT(*) as count FROM assessment WHERE organization_id = ?").get(DEFAULT_ORG_ID) as { count: number }
  const answerCount = db.prepare("SELECT COUNT(*) as count FROM assessment_answer WHERE assessment_id IN (SELECT id FROM assessment WHERE organization_id = ?)").get(DEFAULT_ORG_ID) as { count: number }

  // Get statistics by risk level
  const riskStats = db.prepare(`
    SELECT risk_level, COUNT(*) as count 
    FROM ai_system 
    WHERE organization_id = ?
    GROUP BY risk_level
  `).all(DEFAULT_ORG_ID) as Array<{ risk_level: string; count: number }>

  // Get statistics by role
  const roleStats = db.prepare(`
    SELECT operator_role, COUNT(*) as count 
    FROM ai_system 
    WHERE organization_id = ? AND operator_role IS NOT NULL
    GROUP BY operator_role
  `).all(DEFAULT_ORG_ID) as Array<{ operator_role: string; count: number }>

  // Get statistics by status
  const statusStats = db.prepare(`
    SELECT status, COUNT(*) as count 
    FROM ai_system 
    WHERE organization_id = ?
    GROUP BY status
  `).all(DEFAULT_ORG_ID) as Array<{ status: string; count: number }>

  console.log(`\n📊 Database Summary:`)
  console.log(`  - AI Systems: ${systemCount.count}`)
  console.log(`  - Assessments: ${assessmentCount.count}`)
  console.log(`  - Assessment Answers: ${answerCount.count}`)
  console.log(`  - Requirements Status: ${reqCount.count}`)
  console.log(`  - Gap Analysis Results: ${gapCount.count}`)

  console.log(`\n📈 Risk Level Distribution:`)
  riskStats.forEach(stat => {
    console.log(`  - ${stat.risk_level || 'unclassified'}: ${stat.count}`)
  })

  console.log(`\n👥 Operator Role Distribution:`)
  roleStats.forEach(stat => {
    console.log(`  - ${stat.operator_role}: ${stat.count}`)
  })

  console.log(`\n📋 Status Distribution:`)
  statusStats.forEach(stat => {
    console.log(`  - ${stat.status}: ${stat.count}`)
  })

  console.log(`\n🎉 Database seeded successfully!`)
  console.log(`\nYou can now run the app with: bun run dev`)

} catch (error) {
  console.error("❌ Error seeding database:", error)
  process.exit(1)
} finally {
  db.close()
}
