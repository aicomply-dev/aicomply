/**
 * Import Database from SQL
 * 
 * Imports a SQL file to populate the database with demo data.
 * 
 * Usage: bun scripts/import-database.ts [path-to-sql-file]
 * Default: drizzle/seed-data.sql
 */

import { Database } from "bun:sqlite"
import { readFile } from "fs/promises"
import { existsSync } from "fs"

const DB_PATH = "./sqlite.db"
const DEFAULT_SQL_PATH = "./drizzle/seed-data.sql"
const sqlPath = process.argv[2] || DEFAULT_SQL_PATH

console.log("📥 Importing database from SQL...")
console.log(`   Source: ${sqlPath}`)

if (!existsSync(sqlPath)) {
  console.error(`❌ SQL file not found: ${sqlPath}`)
  console.log(`\n💡 To create a seed file, run: bun scripts/export-database.ts`)
  process.exit(1)
}

const db = new Database(DB_PATH)

try {
  const sql = await readFile(sqlPath, "utf-8")
  
  console.log("   Executing SQL...")
  
  // Execute the SQL
  db.exec(sql)
  
  console.log("\n✅ Database imported successfully!")
  console.log(`   Database: ${DB_PATH}`)
  
  // Show summary
  const systemCount = db.prepare("SELECT COUNT(*) as count FROM ai_system").get() as { count: number }
  const reqCount = db.prepare("SELECT COUNT(*) as count FROM requirements_status").get() as { count: number }
  const gapCount = db.prepare("SELECT COUNT(*) as count FROM gap_analysis_result").get() as { count: number }
  
  console.log(`\n📊 Imported Data:`)
  console.log(`   - AI Systems: ${systemCount.count}`)
  console.log(`   - Requirements: ${reqCount.count}`)
  console.log(`   - Gap Analysis: ${gapCount.count}`)

} catch (error) {
  console.error("❌ Error importing database:", error)
  process.exit(1)
} finally {
  db.close()
}
