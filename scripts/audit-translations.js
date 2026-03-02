#!/usr/bin/env node
/**
 * Translation Audit Script
 * Finds missing translations across all language files
 */

const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.join(__dirname, '..', 'messages');
const files = ['en.json', 'fr.json', 'es.json', 'ro.json', 'de.json'];

console.log('🔍 Translation Audit Report\n');
console.log('═'.repeat(70));

// Read all files
const data = {};
files.forEach(f => {
  const filePath = path.join(MESSAGES_DIR, f);
  data[f] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
});

// Function to get all keys from nested object
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

// Get value at nested key path
function getValueAtPath(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Get all keys from English (reference)
const enKeys = getAllKeys(data['en.json']);
const enKeysSet = new Set(enKeys);

console.log(`\n📊 Overall Statistics:`);
console.log(`   Total translatable strings: ${enKeys.size}\n`);

// Analyze each language
const results = {};

files.forEach(file => {
  if (file === 'en.json') return;
  
  const lang = file.replace('.json', '').toUpperCase();
  const langKeys = new Set(getAllKeys(data[file]));
  const missing = enKeys.filter(k => !langKeys.has(k));
  const coverage = ((enKeys.size - missing.length) / enKeys.size * 100).toFixed(1);
  
  results[lang] = { coverage, missing, total: enKeys.size };
  
  console.log(`${lang}:`);
  console.log(`   Coverage: ${coverage}% (${enKeys.size - missing.length}/${enKeys.size})`);
  console.log(`   Missing: ${missing.length} strings`);
  console.log('');
});

console.log('═'.repeat(70));

// Group missing translations by top-level section
files.forEach(file => {
  if (file === 'en.json') return;
  
  const lang = file.replace('.json', '').toUpperCase();
  const langKeys = new Set(getAllKeys(data[file]));
  const missing = enKeys.filter(k => !langKeys.has(k));
  
  if (missing.length === 0) {
    console.log(`\n✅ ${lang}: All translations complete!`);
    return;
  }
  
  console.log(`\n🔴 ${lang}: Missing Translations by Section\n`);
  
  // Group by top-level key
  const grouped = {};
  missing.forEach(key => {
    const topLevel = key.split('.')[0];
    if (!grouped[topLevel]) grouped[topLevel] = [];
    grouped[topLevel].push(key);
  });
  
  // Sort by count
  const sorted = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);
  
  sorted.forEach(([section, keys]) => {
    console.log(`   ${section}: ${keys.length} missing`);
    if (keys.length <= 10) {
      keys.forEach(k => console.log(`      - ${k}`));
    } else {
      keys.slice(0, 5).forEach(k => console.log(`      - ${k}`));
      console.log(`      ... and ${keys.length - 5} more`);
    }
  });
});

console.log('\n' + '═'.repeat(70));
console.log('\n📝 Recommendations:\n');

files.forEach(file => {
  if (file === 'en.json') return;
  
  const lang = file.replace('.json', '').toUpperCase();
  const r = results[lang];
  
  if (r.missing.length === 0) {
    console.log(`   ${lang}: ✅ Complete - No action needed`);
  } else if (r.coverage >= 95) {
    console.log(`   ${lang}: 🟡 Nearly complete - ${r.missing.length} strings to translate`);
  } else if (r.coverage >= 85) {
    console.log(`   ${lang}: 🟠 Good progress - ${r.missing.length} strings remaining`);
  } else {
    console.log(`   ${lang}: 🔴 Needs work - ${r.missing.length} strings to translate`);
  }
});

console.log('\n' + '═'.repeat(70));
console.log('\n✅ Audit complete!\n');
