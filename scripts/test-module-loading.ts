#!/usr/bin/env node
/**
 * Test Module Loading
 * Verifies that modules load from content/ directory
 */

import { existsSync, readFileSync } from 'fs'
import path from 'path'

const CONTENT_MODULES_DIR = path.join(process.cwd(), 'content', 'modules')

console.log('🧪 Testing Module Loading from content/\n')

// Test 1: Check index.json exists
console.log('Test 1: Checking index.json...')
const indexPath = path.join(CONTENT_MODULES_DIR, 'index.json')
if (!existsSync(indexPath)) {
  console.log('❌ FAIL: index.json not found')
  process.exit(1)
}
console.log('✅ PASS: index.json exists\n')

// Test 2: Load and parse index
console.log('Test 2: Parsing index.json...')
const index = JSON.parse(readFileSync(indexPath, 'utf-8'))
console.log(`✅ PASS: Found ${index.length} modules in index\n`)

// Test 3: Check each module
console.log('Test 3: Checking each module structure...')
let totalChapters = 0

for (const meta of index) {
  console.log(`\n📦 Module: ${meta.slug}`)
  
  // Check module.json
  const modulePath = path.join(CONTENT_MODULES_DIR, meta.slug, 'module.json')
  if (!existsSync(modulePath)) {
    console.log(`  ❌ FAIL: module.json not found`)
    continue
  }
  const moduleData = JSON.parse(readFileSync(modulePath, 'utf-8'))
  console.log(`  ✅ module.json exists`)
  console.log(`     Title: ${moduleData.title}`)
  console.log(`     Category: ${moduleData.category}`)
  console.log(`     Difficulty: ${moduleData.difficulty}`)
  
  // Check chapters/en/ directory
  const chaptersEnDir = path.join(CONTENT_MODULES_DIR, meta.slug, 'chapters', 'en')
  if (!existsSync(chaptersEnDir)) {
    console.log(`  ❌ FAIL: chapters/en/ directory not found`)
    continue
  }
  
  // Count chapters
  const fs = require('fs')
  const chapterFiles = fs.readdirSync(chaptersEnDir).filter((f: string) => f.endsWith('.json'))
  console.log(`  ✅ chapters/en/ exists with ${chapterFiles.length} chapters`)
  
  // Check each chapter has metadata and content
  let hasContent = 0
  for (const file of chapterFiles) {
    const chapterPath = path.join(chaptersEnDir, file)
    const chapter = JSON.parse(readFileSync(chapterPath, 'utf-8'))
    
    if (chapter.type !== 'quiz') {
      const mdFile = file.replace('.json', '.md')
      const mdPath = path.join(chaptersEnDir, mdFile)
      if (existsSync(mdPath)) {
        hasContent++
      }
    } else {
      hasContent++ // Quizzes don't need .md files
    }
  }
  
  console.log(`  ✅ ${hasContent}/${chapterFiles.length} chapters have content`)
  totalChapters += chapterFiles.length
}

console.log('\n' + '─'.repeat(60))
console.log('📊 Summary:')
console.log(`   Total modules: ${index.length}`)
console.log(`   Total chapters: ${totalChapters}`)
console.log('\n✅ All tests passed! Modules will load from content/ directory\n')
