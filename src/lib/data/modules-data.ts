/**
 * EU AI Act Training Modules Data
 * 
 * ⚠️  MIGRATION NOTICE:
 * This file has been migrated to external content files in content/modules/
 * The hardcoded content has been removed. Module loading now happens via:
 * - src/lib/content/loader.ts (content/ directory)
 * - src/lib/actions/modules.ts (server actions)
 * 
 * This file now serves as:
 * 1. Type definitions for the module system
 * 2. Fallback stub for backward compatibility
 * 
 * Legacy backup: .archive/legacy-data/modules-data.ts.backup (11,526 lines)
 */

import type { LocalizedString } from './modules-translations'

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Chapter {
  id: number | string
  title: string | LocalizedString
  description: string | LocalizedString
  type: "video" | "lesson" | "quiz"
  duration: number
  content?: string
  videoUrl?: string
  questions?: QuizQuestion[]
}

export interface QuizQuestion {
  id: number
  question: string
  type: "mcq" | "true_false"
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface ModuleData {
  slug: string
  title: string | LocalizedString
  description: string | LocalizedString
  category: string
  difficulty: string
  duration: number
  order: number
  chapters: string // JSON stringified chapters
}

// ============================================
// MODULE STUBS (For Backward Compatibility)
// ============================================

/**
 * @deprecated Content now loaded from content/modules/ directory
 * This array serves as a fallback only. Do not add content here.
 * To edit modules, see: content/modules/
 */
export const DEFAULT_MODULES: ModuleData[] = [
  {
    slug: "ai-act-fundamentals",
    title: "AI Act Fundamentals",
    description: "Master the foundations of the EU AI Act",
    category: "fundamentals",
    difficulty: "beginner",
    duration: 120,
    order: 1,
    chapters: "[]" // Content loaded from content/modules/ai-act-fundamentals/
  },
  {
    slug: "high-risk-ai-compliance",
    title: "High-Risk AI Compliance",
    description: "Deep dive into high-risk AI system requirements",
    category: "compliance",
    difficulty: "intermediate",
    duration: 180,
    order: 2,
    chapters: "[]" // Content loaded from content/modules/high-risk-ai-compliance/
  },
  {
    slug: "gpai-compliance",
    title: "GPAI Compliance",
    description: "General Purpose AI compliance requirements",
    category: "specialized",
    difficulty: "advanced",
    duration: 150,
    order: 3,
    chapters: "[]" // Content loaded from content/modules/gpai-compliance/
  },
  {
    slug: "governance-penalties",
    title: "Governance & Penalties",
    description: "AI governance frameworks and enforcement",
    category: "compliance",
    difficulty: "intermediate",
    duration: 140,
    order: 4,
    chapters: "[]" // Content loaded from content/modules/governance-penalties/
  },
  {
    slug: "innovation-pathways",
    title: "Innovation Pathways",
    description: "Regulatory sandboxes and innovation support",
    category: "specialized",
    difficulty: "intermediate",
    duration: 130,
    order: 5,
    chapters: "[]" // Content loaded from content/modules/innovation-pathways/
  }
]

/**
 * Get module by slug
 * @deprecated Use src/lib/actions/modules.ts instead
 */
export function getModuleBySlug(slug: string): ModuleData | undefined {
  if (process.env.NODE_ENV === "development") {
    console.warn('⚠️  getModuleBySlug is deprecated. Use getModule() from src/lib/actions/modules.ts')
  }
  return DEFAULT_MODULES.find(m => m.slug === slug)
}

/**
 * Get all modules
 * @deprecated Use src/lib/actions/modules.ts instead
 */
export function getAllModules(): ModuleData[] {
  if (process.env.NODE_ENV === "development") {
    console.warn('⚠️  getAllModules is deprecated. Use getModules() from src/lib/actions/modules.ts')
  }
  return DEFAULT_MODULES
}
