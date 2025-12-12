"use server"

import { db } from "@/lib/db"
import { glossaryTerm, glossaryBookmark } from "@/lib/db/schema"
import { eq, like, or, sql } from "drizzle-orm"
import { nanoid } from "nanoid"
import { GLOSSARY_TERMS, type GlossaryTerm, type GlossaryCategory } from "@/lib/data/glossary-data"

// ============================================
// Glossary Term Actions
// ============================================

export async function getGlossaryTerms() {
  try {
    const terms = await db.select().from(glossaryTerm).orderBy(glossaryTerm.term)
    return terms.map((term) => ({
      ...term,
      related: term.related ? JSON.parse(term.related) : [],
      examples: term.examples ? JSON.parse(term.examples) : [],
      keyPoints: term.keyPoints ? JSON.parse(term.keyPoints) : [],
    }))
  } catch {
    // If database is empty, return from static data
    return GLOSSARY_TERMS
  }
}

export async function getGlossaryTermById(id: string) {
  try {
    const [term] = await db.select().from(glossaryTerm).where(eq(glossaryTerm.id, id))
    if (!term) return null
    return {
      ...term,
      related: term.related ? JSON.parse(term.related) : [],
      examples: term.examples ? JSON.parse(term.examples) : [],
      keyPoints: term.keyPoints ? JSON.parse(term.keyPoints) : [],
    }
  } catch {
    return GLOSSARY_TERMS.find((t) => t.id === id) || null
  }
}

export async function searchGlossaryTerms(query: string) {
  try {
    const searchPattern = `%${query}%`
    const terms = await db
      .select()
      .from(glossaryTerm)
      .where(
        or(
          like(glossaryTerm.term, searchPattern),
          like(glossaryTerm.definition, searchPattern),
          like(glossaryTerm.article, searchPattern)
        )
      )
      .orderBy(glossaryTerm.term)

    return terms.map((term) => ({
      ...term,
      related: term.related ? JSON.parse(term.related) : [],
      examples: term.examples ? JSON.parse(term.examples) : [],
      keyPoints: term.keyPoints ? JSON.parse(term.keyPoints) : [],
    }))
  } catch {
    const lowerQuery = query.toLowerCase()
    return GLOSSARY_TERMS.filter(
      (term) =>
        term.term.toLowerCase().includes(lowerQuery) ||
        term.definition.toLowerCase().includes(lowerQuery) ||
        term.article.toLowerCase().includes(lowerQuery)
    )
  }
}

export async function getGlossaryTermsByCategory(category: GlossaryCategory) {
  try {
    const terms = await db
      .select()
      .from(glossaryTerm)
      .where(eq(glossaryTerm.category, category))
      .orderBy(glossaryTerm.term)

    return terms.map((term) => ({
      ...term,
      related: term.related ? JSON.parse(term.related) : [],
      examples: term.examples ? JSON.parse(term.examples) : [],
      keyPoints: term.keyPoints ? JSON.parse(term.keyPoints) : [],
    }))
  } catch {
    return GLOSSARY_TERMS.filter((term) => term.category === category)
  }
}

export async function getGlossaryStats() {
  try {
    const totalTerms = await db.select({ count: sql<number>`count(*)` }).from(glossaryTerm)
    const categories = await db
      .select({
        category: glossaryTerm.category,
        count: sql<number>`count(*)`,
      })
      .from(glossaryTerm)
      .groupBy(glossaryTerm.category)

    return {
      totalTerms: totalTerms[0]?.count || 0,
      byCategory: categories.reduce(
        (acc, cat) => {
          acc[cat.category] = cat.count
          return acc
        },
        {} as Record<string, number>
      ),
    }
  } catch {
    const byCategory = GLOSSARY_TERMS.reduce(
      (acc, term) => {
        acc[term.category] = (acc[term.category] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    return {
      totalTerms: GLOSSARY_TERMS.length,
      byCategory,
    }
  }
}

// ============================================
// Seed Glossary Data
// ============================================

export async function seedGlossaryTerms() {
  try {
    // Check if already seeded
    const existing = await db.select({ count: sql<number>`count(*)` }).from(glossaryTerm)
    if (existing[0]?.count > 0) {
      return { success: true, message: "Glossary already seeded", count: existing[0].count }
    }

    // Insert all terms from static data
    const now = new Date()
    const termsToInsert = GLOSSARY_TERMS.map((term) => ({
      id: term.id,
      term: term.term,
      definition: term.definition,
      article: term.article,
      category: term.category,
      related: JSON.stringify(term.related),
      examples: term.examples ? JSON.stringify(term.examples) : null,
      keyPoints: term.keyPoints ? JSON.stringify(term.keyPoints) : null,
      isOfficial: true,
      createdAt: now,
      updatedAt: now,
    }))

    await db.insert(glossaryTerm).values(termsToInsert)

    return { success: true, message: "Glossary seeded successfully", count: termsToInsert.length }
  } catch (error) {
    console.error("Error seeding glossary:", error)
    return { success: false, message: "Failed to seed glossary", error }
  }
}

// ============================================
// Bookmark Actions
// ============================================

export async function getUserBookmarks(userId: string) {
  try {
    const bookmarks = await db
      .select({
        bookmark: glossaryBookmark,
        term: glossaryTerm,
      })
      .from(glossaryBookmark)
      .innerJoin(glossaryTerm, eq(glossaryBookmark.termId, glossaryTerm.id))
      .where(eq(glossaryBookmark.userId, userId))

    return bookmarks.map((b) => ({
      ...b.bookmark,
      term: {
        ...b.term,
        related: b.term.related ? JSON.parse(b.term.related) : [],
        examples: b.term.examples ? JSON.parse(b.term.examples) : [],
        keyPoints: b.term.keyPoints ? JSON.parse(b.term.keyPoints) : [],
      },
    }))
  } catch {
    return []
  }
}

export async function toggleBookmark(userId: string, termId: string) {
  try {
    // Check if bookmark exists
    const [existing] = await db
      .select()
      .from(glossaryBookmark)
      .where(
        sql`${glossaryBookmark.userId} = ${userId} AND ${glossaryBookmark.termId} = ${termId}`
      )

    if (existing) {
      // Remove bookmark
      await db.delete(glossaryBookmark).where(eq(glossaryBookmark.id, existing.id))
      return { success: true, bookmarked: false }
    } else {
      // Add bookmark
      await db.insert(glossaryBookmark).values({
        id: nanoid(),
        userId,
        termId,
        createdAt: new Date(),
      })
      return { success: true, bookmarked: true }
    }
  } catch (error) {
    console.error("Error toggling bookmark:", error)
    return { success: false, error }
  }
}

export async function isTermBookmarked(userId: string, termId: string) {
  try {
    const [bookmark] = await db
      .select()
      .from(glossaryBookmark)
      .where(
        sql`${glossaryBookmark.userId} = ${userId} AND ${glossaryBookmark.termId} = ${termId}`
      )
    return !!bookmark
  } catch {
    return false
  }
}

// ============================================
// Get Related Terms (Cross-reference)
// ============================================

export async function getRelatedTerms(termId: string) {
  try {
    const [term] = await db.select().from(glossaryTerm).where(eq(glossaryTerm.id, termId))
    if (!term || !term.related) return []

    const relatedNames: string[] = JSON.parse(term.related)
    const relatedTerms = await db
      .select()
      .from(glossaryTerm)
      .where(
        sql`${glossaryTerm.term} IN (${sql.join(
          relatedNames.map((name) => sql`${name}`),
          sql`, `
        )})`
      )

    return relatedTerms.map((t) => ({
      ...t,
      related: t.related ? JSON.parse(t.related) : [],
      examples: t.examples ? JSON.parse(t.examples) : [],
      keyPoints: t.keyPoints ? JSON.parse(t.keyPoints) : [],
    }))
  } catch {
    const term = GLOSSARY_TERMS.find((t) => t.id === termId)
    if (!term) return []
    return GLOSSARY_TERMS.filter((t) =>
      term.related.some((r) => t.term.toLowerCase().includes(r.toLowerCase()))
    )
  }
}
