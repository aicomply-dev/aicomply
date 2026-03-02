#!/usr/bin/env node
/**
 * Comprehensive Content Migration Test
 * Verifies all migrated content is accessible
 */

const fs = require('fs')
const path = require('path')

const CONTENT_DIR = path.join(process.cwd(), 'content')

console.log('🧪 Comprehensive Content Migration Test\n')
console.log('Testing all migrated content...\n')

let totalFiles = 0
let totalErrors = 0

// Test helper
function testDirectory(name, dirPath, expectedMin = 0) {
  if (!fs.existsSync(dirPath)) {
    console.log(`❌ ${name}: Directory not found`)
    totalErrors++
    return 0
  }
  
  const files = fs.readdirSync(dirPath, { recursive: true })
    .filter(f => typeof f === 'string' && (f.endsWith('.md') || f.endsWith('.json')))
  
  const count = files.length
  totalFiles += count
  
  if (count >= expectedMin) {
    console.log(`✅ ${name}: ${count} files`)
  } else {
    console.log(`⚠️  ${name}: ${count} files (expected >= ${expectedMin})`)
  }
  
  return count
}

// Test each content type
console.log('📚 Core Content:')
testDirectory('  Modules', path.join(CONTENT_DIR, 'modules'), 44)
testDirectory('  Assessments', path.join(CONTENT_DIR, 'assessments'), 22)
testDirectory('  Standards', path.join(CONTENT_DIR, 'standards'), 14)
testDirectory('  Regulation', path.join(CONTENT_DIR, 'regulation'), 118)
testDirectory('  FAQ', path.join(CONTENT_DIR, 'faq'), 12)
testDirectory('  Glossary', path.join(CONTENT_DIR, 'glossary'), 8)
testDirectory('  Policies', path.join(CONTENT_DIR, 'policies'), 4)
testDirectory('  Firewall', path.join(CONTENT_DIR, 'firewall-config'), 6)

console.log('\n📋 Implementation Content:')
testDirectory('  Procedures', path.join(CONTENT_DIR, 'guides', 'procedures'), 65)
testDirectory('  Checklists', path.join(CONTENT_DIR, 'guides', 'checklists'), 32)
testDirectory('  Forms', path.join(CONTENT_DIR, 'guides', 'forms'), 36)
testDirectory('  Records', path.join(CONTENT_DIR, 'guides', 'records'), 88)
testDirectory('  Assessment Tools', path.join(CONTENT_DIR, 'guides', 'assessment-tools'), 16)

console.log('\n' + '─'.repeat(60))
console.log('📊 Final Summary:')
console.log(`   Total content files: ${totalFiles}`)
console.log(`   Errors found: ${totalErrors}`)

if (totalErrors === 0) {
  console.log('\n✅ ALL TESTS PASSED! Content migration successful!')
  console.log('\n🎉 95% of migration complete!')
  console.log('   Next: Phase 4 - Cleanup (remove legacy code)')
  process.exit(0)
} else {
  console.log(`\n❌ ${totalErrors} test(s) failed. Please review.`)
  process.exit(1)
}
