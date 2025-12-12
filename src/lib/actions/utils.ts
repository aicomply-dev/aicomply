/**
 * Common Action Patterns
 * Reusable patterns for server actions to reduce duplication
 */

import { revalidatePath } from "next/cache"
import type { SQLiteTable } from "drizzle-orm/sqlite-core"
import type { SQL } from "drizzle-orm"
import { db } from "@/lib/db"
import { eq } from "drizzle-orm"
import { nanoid } from "nanoid"
import type { Result } from "@/lib/errors"
import { success, failure, DatabaseError } from "@/lib/errors"

/**
 * Generic create entity pattern
 */
export async function createEntity<T extends Record<string, unknown>>(
  table: SQLiteTable,
  data: T & { id?: string; createdAt?: Date; updatedAt?: Date },
  revalidatePaths: string[] = []
): Promise<Result<string>> {
  try {
    const now = new Date()
    const id = data.id || nanoid()

    await db.insert(table).values({
      ...data,
      id,
      createdAt: data.createdAt || now,
      updatedAt: data.updatedAt || now,
    })

    // Revalidate paths
    for (const path of revalidatePaths) {
      revalidatePath(path)
    }

    return success(id)
  } catch (error) {
    console.error(`Failed to create entity in ${table._.name}:`, error)
    return failure(
      new DatabaseError(`Failed to create ${table._.name}`, error)
    )
  }
}

/**
 * Generic update entity pattern
 */
export async function updateEntity<T extends Record<string, unknown>>(
  table: SQLiteTable,
  id: string,
  data: Partial<T> & { updatedAt?: Date },
  revalidatePaths: string[] = []
): Promise<Result<boolean>> {
  try {
    await db
      .update(table)
      .set({
        ...data,
        updatedAt: data.updatedAt || new Date(),
      })
      .where(eq((table as any).id, id))

    // Revalidate paths
    for (const path of revalidatePaths) {
      revalidatePath(path)
    }

    return success(true)
  } catch (error) {
    console.error(`Failed to update entity in ${table._.name}:`, error)
    return failure(
      new DatabaseError(`Failed to update ${table._.name}`, error)
    )
  }
}

/**
 * Generic delete entity pattern
 */
export async function deleteEntity(
  table: SQLiteTable,
  id: string,
  revalidatePaths: string[] = []
): Promise<Result<boolean>> {
  try {
    await db.delete(table).where(eq((table as any).id, id))

    // Revalidate paths
    for (const path of revalidatePaths) {
      revalidatePath(path)
    }

    return success(true)
  } catch (error) {
    console.error(`Failed to delete entity from ${table._.name}:`, error)
    return failure(
      new DatabaseError(`Failed to delete ${table._.name}`, error)
    )
  }
}

/**
 * Execute database operation with error handling
 */
export async function executeDbOperation<T>(
  operation: () => Promise<T>,
  errorMessage: string
): Promise<Result<T>> {
  try {
    const result = await operation()
    return success(result)
  } catch (error) {
    console.error(errorMessage, error)
    return failure(new DatabaseError(errorMessage, error))
  }
}
