"use server"

import { revalidatePath } from "next/cache"
import { existsSync, readFileSync } from "fs"
import path from "path"
import { db } from "@/lib/db"
import { learningModule, moduleResource, userModuleProgress, quizAttempt, user, organizationContent } from "@/lib/db/schema"
import { eq, asc, and } from "drizzle-orm"
import { nanoid } from "nanoid"
import { DEFAULT_MODULES, type Chapter, type QuizQuestion } from "@/lib/data/modules-data"
import { getSession } from "@/lib/auth/session"

// Re-export types for consumers of this module
export type { Chapter, QuizQuestion }

// Path to module content (extracted content directory)
const CONTENT_MODULES_DIR = path.join(process.cwd(), "content", "modules")

// Helper to get current user's organization ID
async function getOrganizationId(): Promise<string | undefined> {
  const session = await getSession()
  return session?.user?.organizationId
}

// Load modules from content directory
function loadModulesFromContent(): typeof DEFAULT_MODULES {
  const indexPath = path.join(CONTENT_MODULES_DIR, "index.json")
  if (!existsSync(indexPath)) {
    return []
  }

  try {
    const index = JSON.parse(readFileSync(indexPath, "utf-8"))
    const modules: typeof DEFAULT_MODULES = []

    for (const meta of index) {
      const modulePath = path.join(CONTENT_MODULES_DIR, meta.slug, "module.json")
      const chaptersDir = path.join(CONTENT_MODULES_DIR, meta.slug, "chapters")

      if (!existsSync(modulePath)) continue

      const moduleData = JSON.parse(readFileSync(modulePath, "utf-8"))

      // Load chapters
      const chapters: Chapter[] = []
      if (existsSync(chaptersDir)) {
        const fs = require("fs")
        // Read all .json files in chapters directory
        const files = fs.readdirSync(chaptersDir).filter((f: string) => f.endsWith(".json")).sort()
        for (const file of files) {
          const chapterPath = path.join(chaptersDir, file)
          const chapter = JSON.parse(readFileSync(chapterPath, "utf-8"))

          // If it's a lesson, load the markdown content
          if (chapter.type !== "quiz") {
            const mdFile = file.replace(".json", ".md")
            const mdPath = path.join(chaptersDir, mdFile)
            if (existsSync(mdPath)) {
              chapter.content = readFileSync(mdPath, "utf-8")
            }
          }

          chapters.push(chapter)
        }
      }

      modules.push({
        slug: meta.slug,
        title: moduleData.title || meta.title,
        description: moduleData.description || meta.description,
        category: moduleData.category || meta.category,
        difficulty: moduleData.difficulty || meta.difficulty,
        duration: moduleData.duration || meta.duration || 0,
        order: moduleData.order || meta.order,
        chapters: JSON.stringify(chapters),
      })
    }

    return modules
  } catch (error) {
    console.error("Failed to load modules from content:", error)
    return []
  }
}

// Helper to ensure user exists in database (for OAuth users with JWT sessions)
async function ensureUserExists(userId: string, email: string, name?: string) {
  const existingUser = await db.query.user.findFirst({
    where: eq(user.id, userId),
  })

  if (!existingUser) {
    const now = new Date()
    await db.insert(user).values({
      id: userId,
      email: email,
      name: name || null,
      createdAt: now,
      updatedAt: now,
    }).onConflictDoNothing()
  }
}

// Seed default modules if they don't exist
// Now loads from /content/modules/ directory with fallback to static
async function seedModulesIfNeeded() {
  const existingModules = await db.query.learningModule.findMany()

  if (existingModules.length === 0) {
    const now = new Date()

    // Try loading from content directory first
    let modulesToSeed = loadModulesFromContent()

    // Fall back to static DEFAULT_MODULES if content directory is empty
    if (modulesToSeed.length === 0) {
      modulesToSeed = DEFAULT_MODULES
    }

    for (const mod of modulesToSeed) {
      await db.insert(learningModule).values({
        id: nanoid(),
        ...mod,
        isPublished: true,
        createdAt: now,
        updatedAt: now,
      })
    }
  }
}

export async function getModules() {
  await seedModulesIfNeeded()

  const modules = await db.query.learningModule.findMany({
    where: eq(learningModule.isPublished, true),
    orderBy: [asc(learningModule.order)],
  })

  return modules.map(mod => ({
    ...mod,
    chapters: JSON.parse(mod.chapters) as Chapter[],
  }))
}

export async function getModuleBySlug(slug: string) {
  await seedModulesIfNeeded()

  const mod = await db.query.learningModule.findFirst({
    where: eq(learningModule.slug, slug),
  })

  if (!mod) return null

  return {
    ...mod,
    chapters: JSON.parse(mod.chapters) as Chapter[],
  }
}

export async function getUserModuleProgress(moduleId?: string) {
  const session = await getSession()
  if (!session?.user?.id) {
    return []
  }

  const query = moduleId
    ? and(eq(userModuleProgress.userId, session.user.id), eq(userModuleProgress.moduleId, moduleId))
    : eq(userModuleProgress.userId, session.user.id)

  const progress = await db.query.userModuleProgress.findMany({
    where: query,
  })

  return progress.map(p => ({
    ...p,
    completedChapters: p.completedChapters ? JSON.parse(p.completedChapters) as number[] : [],
  }))
}

export async function startModule(moduleId: string) {
  const session = await getSession()
  if (!session?.user?.id) {
    return { success: true, progressId: "guest" }
  }

  // Ensure user exists in database (for OAuth users with JWT sessions)
  await ensureUserExists(session.user.id, session.user.email, session.user.name)

  // Check if progress already exists
  const existing = await db.query.userModuleProgress.findFirst({
    where: and(
      eq(userModuleProgress.userId, session.user.id),
      eq(userModuleProgress.moduleId, moduleId)
    ),
  })

  if (existing) {
    return { success: true, progressId: existing.id }
  }

  // Create new progress entry
  const progressId = nanoid()
  const now = new Date()

  await db.insert(userModuleProgress).values({
    id: progressId,
    userId: session.user.id,
    moduleId,
    status: "in_progress",
    progress: 0,
    currentChapter: 0,
    completedChapters: "[]",
    startedAt: now,
    lastAccessedAt: now,
    createdAt: now,
    updatedAt: now,
  })

  revalidatePath("/understand")
  return { success: true, progressId }
}

export async function completeChapter(moduleId: string, chapterIndex: number) {
  const session = await getSession()
  if (!session?.user?.id) {
    return { success: true, progress: 0, isCompleted: false }
  }

  // Ensure user exists in database (for OAuth users with JWT sessions)
  await ensureUserExists(session.user.id, session.user.email, session.user.name)

  // Get the module to calculate progress
  const mod = await db.query.learningModule.findFirst({
    where: eq(learningModule.id, moduleId),
  })

  if (!mod) {
    return { success: false, error: "Module not found" }
  }

  const chapters = JSON.parse(mod.chapters) as Chapter[]
  const totalChapters = chapters.length

  // Get or create progress
  let progressRecord = await db.query.userModuleProgress.findFirst({
    where: and(
      eq(userModuleProgress.userId, session.user.id),
      eq(userModuleProgress.moduleId, moduleId)
    ),
  })

  const now = new Date()

  if (!progressRecord) {
    // Create new progress
    const progressId = nanoid()
    await db.insert(userModuleProgress).values({
      id: progressId,
      userId: session.user.id,
      moduleId,
      status: "in_progress",
      progress: 0,
      currentChapter: 0,
      completedChapters: "[]",
      startedAt: now,
      lastAccessedAt: now,
      createdAt: now,
      updatedAt: now,
    })
    progressRecord = await db.query.userModuleProgress.findFirst({
      where: eq(userModuleProgress.id, progressId),
    })
  }

  if (!progressRecord) {
    return { success: false, error: "Could not create progress" }
  }

  // Update completed chapters
  const completedChapters: number[] = progressRecord.completedChapters
    ? JSON.parse(progressRecord.completedChapters)
    : []

  if (!completedChapters.includes(chapterIndex)) {
    completedChapters.push(chapterIndex)
  }

  // Calculate progress percentage
  const progressPercent = Math.round((completedChapters.length / totalChapters) * 100)
  const isCompleted = completedChapters.length >= totalChapters

  // Update progress
  await db.update(userModuleProgress)
    .set({
      completedChapters: JSON.stringify(completedChapters),
      progress: progressPercent,
      currentChapter: Math.max(...completedChapters, 0),
      status: isCompleted ? "completed" : "in_progress",
      completedAt: isCompleted ? now : null,
      lastAccessedAt: now,
      updatedAt: now,
    })
    .where(eq(userModuleProgress.id, progressRecord.id))

  revalidatePath("/understand")
  revalidatePath(`/understand/modules/${mod.slug}`)

  return { success: true, progress: progressPercent, isCompleted }
}

export async function getOverallProgress() {
  await seedModulesIfNeeded()

  const modules = await db.query.learningModule.findMany({
    where: eq(learningModule.isPublished, true),
  })

  const session = await getSession()
  if (!session?.user?.id) {
    return { completedModules: 0, totalModules: modules.length, overallProgress: 0 }
  }

  const userProgress = await db.query.userModuleProgress.findMany({
    where: eq(userModuleProgress.userId, session.user.id),
  })

  const completedModules = userProgress.filter(p => p.status === "completed").length
  const totalProgress = userProgress.reduce((sum, p) => sum + (p.progress || 0), 0)
  const overallProgress = modules.length > 0
    ? Math.round(totalProgress / modules.length)
    : 0

  return { completedModules, totalModules: modules.length, overallProgress }
}

// Quiz submission - now works without auth (no saving to DB)
export async function submitQuiz(
  moduleId: string,
  chapterIndex: number,
  answers: number[]
) {
  const mod = await db.query.learningModule.findFirst({
    where: eq(learningModule.id, moduleId),
  })

  if (!mod) return { error: "Module not found" }

  const chapters = JSON.parse(mod.chapters) as Chapter[]
  const chapter = chapters[chapterIndex]

  if (!chapter || chapter.type !== "quiz" || !chapter.questions) {
    return { error: "Quiz not found" }
  }

  // Calculate score
  let correctCount = 0
  const results = chapter.questions.map((q, i) => {
    const isCorrect = q.correctAnswer === answers[i]
    if (isCorrect) correctCount++
    return {
      questionId: q.id,
      userAnswer: answers[i],
      correctAnswer: q.correctAnswer,
      isCorrect,
      explanation: q.explanation,
    }
  })

  const totalQuestions = chapter.questions.length
  const score = Math.round((correctCount / totalQuestions) * 100)
  const passed = score >= 70 // 70% passing threshold

  // Auth removed - don't save quiz attempts to DB, just return results
  return {
    success: true,
    score,
    passed,
    correctAnswers: correctCount,
    totalQuestions,
    results,
  }
}

export async function getQuizAttempts(_moduleId: string, _chapterIndex?: number) {
  // Auth removed - return empty (no tracking)
  return []
}

// Module resources
export async function getModuleResources(moduleId: string) {
  const resources = await db.query.moduleResource.findMany({
    where: eq(moduleResource.moduleId, moduleId),
    orderBy: [asc(moduleResource.order)],
  })

  return resources
}

// Mark chapter complete by chapter ID (actually uses index)
export async function markChapterComplete(moduleId: string, chapterIndex: number) {
  return completeChapter(moduleId, chapterIndex)
}
