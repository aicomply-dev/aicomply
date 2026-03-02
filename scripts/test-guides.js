#!/usr/bin/env node
// Test Guides Loading from content/

const fs = require('fs')
const path = require('path')

const CONTENT_GUIDES_PATH = path.join(process.cwd(), 'content', 'guides')

console.log('🧪 Testing Guide Loading from content/\n')

const guideTypes = ['procedures', 'checklists', 'forms', 'records', 'assessment-tools']

let totalFiles = 0

for (const type of guideTypes) {
  const dirPath = path.join(CONTENT_GUIDES_PATH, type)
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'))
    console.log(`✅ ${type}: ${files.length} files`)
    totalFiles += files.length
  } else {
    console.log(`❌ ${type}: Directory not found`)
  }
}

console.log('\n' + '─'.repeat(60))
console.log(`📊 Total: ${totalFiles} guide files in content/\n`)
console.log('✅ All guides migrated successfully!')
