import { db } from "@/lib/db"
import { organization } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

// Default organization for demo/open source version
export const DEFAULT_ORG_ID = "demo-org"

let demoOrgCreated = false

/**
 * Ensure the demo organization exists in the database.
 * This is called before any seeding operations that reference the organization.
 */
export async function ensureDemoOrganization() {
  // Skip if already created this session
  if (demoOrgCreated) return

  try {
    const existing = await db.query.organization.findFirst({
      where: eq(organization.id, DEFAULT_ORG_ID),
    })

    if (!existing) {
      const now = new Date()
      await db.insert(organization).values({
        id: DEFAULT_ORG_ID,
        name: "Demo Organization",
        slug: "demo-org",
        description: "Default organization for demo and open source usage",
        industry: "Technology",
        size: "medium",
        country: "EU",
        createdAt: now,
        updatedAt: now,
      })
    }

    demoOrgCreated = true
  } catch (error) {
    // Ignore duplicate key errors (race condition)
    if ((error as Error).message?.includes("UNIQUE constraint")) {
      demoOrgCreated = true
      return
    }
    console.error("Failed to ensure demo organization:", error)
  }
}
