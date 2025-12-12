import "server-only"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required")
}

// Use SSL in production, disable for local development
const isProduction = process.env.NODE_ENV === 'production'
const client = postgres(connectionString, {
  ssl: isProduction ? 'require' : false,
})

export const db = drizzle(client, { schema })

// Re-export schema for convenience in server components only
export * from "./schema"
