import "server-only"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

const connectionString = process.env.DATABASE_URL

// Use SSL in production, disable for local development
const isProduction = process.env.NODE_ENV === 'production'

// Lazy-init: allow build to succeed without DATABASE_URL
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null

export const db = new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
  get(_target, prop) {
    if (!_db) {
      if (!connectionString) {
        throw new Error("DATABASE_URL environment variable is required")
      }
      const client = postgres(connectionString, {
        ssl: isProduction ? 'require' : false,
      })
      _db = drizzle(client, { schema })
    }
    return (_db as Record<string | symbol, unknown>)[prop]
  },
})

// Re-export schema for convenience in server components only
export * from "./schema"
