"use server"

import { promises as fs } from "fs"
import path from "path"
import { REGULATION_SECTIONS, getSectionBySlug, type RegulationSection } from "@/lib/data/regulation-data"

const REGULATION_DIR = path.join(process.cwd(), "src/lib/data/regulation")

export async function getRegulationSections() {
  return REGULATION_SECTIONS
}

export async function getRegulationSectionContent(slug: string): Promise<{
  section: RegulationSection | null
  content: string | null
  error?: string
}> {
  const section = getSectionBySlug(slug)

  if (!section) {
    return { section: null, content: null, error: "Section not found" }
  }

  try {
    const filePath = path.join(REGULATION_DIR, section.fileName)
    const content = await fs.readFile(filePath, "utf-8")
    return { section, content }
  } catch (error) {
    console.error(`Error reading regulation file ${section.fileName}:`, error)
    return { section, content: null, error: "Failed to load content" }
  }
}

export async function searchRegulation(query: string): Promise<{
  results: Array<{
    section: RegulationSection
    matches: Array<{
      line: number
      text: string
      context: string
    }>
  }>
}> {
  const results: Array<{
    section: RegulationSection
    matches: Array<{ line: number; text: string; context: string }>
  }> = []

  const lowerQuery = query.toLowerCase()

  for (const section of REGULATION_SECTIONS) {
    try {
      const filePath = path.join(REGULATION_DIR, section.fileName)
      const content = await fs.readFile(filePath, "utf-8")
      const lines = content.split("\n")

      const matches: Array<{ line: number; text: string; context: string }> = []

      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(lowerQuery)) {
          // Get context (surrounding lines)
          const start = Math.max(0, index - 1)
          const end = Math.min(lines.length, index + 2)
          const context = lines.slice(start, end).join("\n")

          matches.push({
            line: index + 1,
            text: line.trim(),
            context: context.trim(),
          })
        }
      })

      if (matches.length > 0) {
        results.push({ section, matches: matches.slice(0, 5) }) // Limit to 5 matches per section
      }
    } catch {
      // Skip files that can't be read
    }
  }

  return { results }
}

export async function getTableOfContents(): Promise<{
  chapters: RegulationSection[]
  annexes: RegulationSection[]
  other: RegulationSection[]
}> {
  const chapters = REGULATION_SECTIONS.filter((s) => s.type === "chapter")
  const annexes = REGULATION_SECTIONS.filter((s) => s.type === "annex")
  const other = REGULATION_SECTIONS.filter((s) => s.type === "preamble" || s.type === "other")

  return { chapters, annexes, other }
}
