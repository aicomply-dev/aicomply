/**
 * Export Database to SQL
 * 
 * Exports the current database to a SQL file that can be imported elsewhere.
 * This allows sharing a pre-populated database with demo data.
 * 
 * Run with: bun scripts/export-database.ts
 */

import { Database } from "bun:sqlite"
import { writeFile } from "fs/promises"
import { join } from "path"

const DB_PATH = "./sqlite.db"
const OUTPUT_PATH = "./drizzle/seed-data.sql"

console.log("📤 Exporting database to SQL...")

const db = new Database(DB_PATH)

try {
  // Get all table names
  const tables = db.prepare(`
    SELECT name FROM sqlite_master 
    WHERE type='table' AND name NOT LIKE 'sqlite_%'
    ORDER BY name
  `).all() as Array<{ name: string }>

  console.log(`Found ${tables.length} tables to export`)

  let sqlOutput = `-- Database Export
-- Generated: ${new Date().toISOString()}
-- This file contains demo data for the AI Act Compliance Platform

BEGIN TRANSACTION;

`

  // Export each table
  for (const { name } of tables) {
    console.log(`  Exporting table: ${name}`)
    
    const rows = db.prepare(`SELECT * FROM ${name}`).all() as Array<Record<string, any>>
    
    if (rows.length === 0) {
      sqlOutput += `-- Table: ${name} (empty)\n\n`
      continue
    }

    // Get column names
    const columns = Object.keys(rows[0])
    
    sqlOutput += `-- Table: ${name}\n`
    sqlOutput += `DELETE FROM ${name};\n\n`

    // Generate INSERT statements
    for (const row of rows) {
      const values = columns.map(col => {
        const value = row[col]
        if (value === null) return "NULL"
        if (typeof value === "string") return `'${value.replace(/'/g, "''")}'`
        if (typeof value === "number") return value.toString()
        if (typeof value === "boolean") return value ? "1" : "0"
        return `'${JSON.stringify(value).replace(/'/g, "''")}'`
      })

      sqlOutput += `INSERT INTO ${name} (${columns.join(", ")}) VALUES (${values.join(", ")});\n`
    }
    
    sqlOutput += `\n`
  }

  sqlOutput += `COMMIT;\n`

  // Write to file
  await writeFile(OUTPUT_PATH, sqlOutput, "utf-8")

  console.log(`\n✅ Database exported to: ${OUTPUT_PATH}`)
  console.log(`   You can import this file to populate a fresh database`)

} catch (error) {
  console.error("❌ Error exporting database:", error)
  process.exit(1)
} finally {
  db.close()
}
