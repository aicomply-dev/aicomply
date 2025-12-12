#!/usr/bin/env node
/**
 * Standards JSON Generator
 *
 * Parses guidance.md files and generates accurate JSON files:
 * - standard.json: Metadata, KPIs, EU AI Act mapping
 * - controls.json: All controls with requirements, evidence, etc.
 *
 * Usage: node scripts/generate-standards-json.js
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'standards');
const STANDARDS = [
  'std-ai-001', 'std-ai-002', 'std-ai-003', 'std-ai-004', 'std-ai-005',
  'std-ai-006', 'std-ai-007', 'std-ai-008', 'std-ai-009', 'std-ai-010',
  'std-ai-011', 'std-ai-012', 'std-ai-013', 'std-ai-014'
];

/**
 * Extract metadata from the header section
 */
function extractMetadata(content) {
  const metadata = {};

  // Extract header fields (format: **Field:** Value)
  const headerPatterns = {
    standardId: /\*\*Standard ID:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    title: /\*\*Standard Title:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    version: /\*\*Version:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    effectiveDate: /\*\*Effective Date:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    nextReviewDate: /\*\*Next Review Date:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    reviewFrequency: /\*\*Review Frequency:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    parentPolicy: /\*\*Parent Policy:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    owner: /\*\*Owner:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    approvedBy: /\*\*Approved By:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    status: /\*\*Status:\*\*\s*(.+?)(?:\s{2,}|$)/m,
    classification: /\*\*Classification:\*\*\s*(.+?)(?:\s{2,}|$)/m,
  };

  for (const [key, pattern] of Object.entries(headerPatterns)) {
    const match = content.match(pattern);
    if (match) {
      metadata[key] = match[1].trim();
    }
  }

  // Extract title from H1
  const h1Match = content.match(/^#\s+(.+?)$/m);
  if (h1Match) {
    metadata.title = h1Match[1].trim();
  }

  // Extract objective section
  const objectiveMatch = content.match(/## OBJECTIVE\s+([\s\S]*?)(?=\n---|\n##)/);
  if (objectiveMatch) {
    // Get first paragraph as description
    const paragraphs = objectiveMatch[1].trim().split(/\n\n/);
    metadata.description = paragraphs[0].replace(/\n/g, ' ').trim();
  }

  return metadata;
}

/**
 * Extract control prefix from standard ID (e.g., std-ai-001 -> CLS)
 */
function getControlPrefix(standardId) {
  const prefixMap = {
    'std-ai-001': 'CLS',
    'std-ai-002': 'RM',
    'std-ai-003': 'DATA',
    'std-ai-004': 'DOC',
    'std-ai-005': 'LOG',
    'std-ai-006': 'TRANS',
    'std-ai-007': 'HO',
    'std-ai-008': 'ARS',
    'std-ai-009': 'QMS',
    'std-ai-010': 'CA',
    'std-ai-011': 'REG',
    'std-ai-012': 'PMM',
    'std-ai-013': 'INC',
    'std-ai-014': 'LIT',
  };
  return prefixMap[standardId] || 'CTRL';
}

/**
 * Extract all controls from the CONTROL STANDARD section
 */
function extractControls(content, standardId) {
  const controls = [];
  const prefix = getControlPrefix(standardId);

  // Find all control sections (### Control XXX-NNN: Name)
  const controlRegex = new RegExp(
    `### Control (${prefix}-\\d+):\\s*(.+?)\\n([\\s\\S]*?)(?=\\n### Control ${prefix}-|\\n---\\n|\\n## [A-Z])`,
    'g'
  );

  let match;
  while ((match = controlRegex.exec(content)) !== null) {
    const controlId = match[1];
    const controlTitle = match[2].trim();
    const controlContent = match[3];

    const control = {
      id: controlId,
      name: controlTitle,
      type: extractControlField(controlContent, 'Control Type'),
      frequency: extractControlField(controlContent, 'Control Frequency'),
      riskLevel: extractControlField(controlContent, 'Risk Level'),
      objective: extractControlObjective(controlContent),
      requirements: extractRequirements(controlContent),
      evidence: extractEvidence(controlContent),
      auditVerification: extractAuditVerification(controlContent),
      status: 'not_started',
      progress: 0,
    };

    // Normalize risk level
    if (control.riskLevel) {
      control.riskLevel = control.riskLevel.toLowerCase();
    }

    // Normalize control type
    if (control.type) {
      control.type = control.type.toLowerCase();
    }

    controls.push(control);
  }

  return controls;
}

/**
 * Extract a simple field from control content
 */
function extractControlField(content, fieldName) {
  const pattern = new RegExp(`\\*\\*${fieldName}:\\*\\*\\s*(.+?)(?:\\s{2,}|$)`, 'm');
  const match = content.match(pattern);
  return match ? match[1].trim() : null;
}

/**
 * Extract control objective
 */
function extractControlObjective(content) {
  const match = content.match(/#### Control Objective\s+([\s\S]*?)(?=\n####|\n---|\n### )/);
  if (match) {
    return match[1].trim().split('\n\n')[0].replace(/\n/g, ' ').trim();
  }
  return null;
}

/**
 * Extract requirements (mandatory actions)
 */
function extractRequirements(content) {
  const requirements = [];

  // Look for Mandatory Actions section
  const mandatoryMatch = content.match(/\*\*Mandatory Actions:\*\*\s*([\s\S]*?)(?=\n\*\*[A-Z]|\n####|\n---|\n### )/);
  if (mandatoryMatch) {
    const lines = mandatoryMatch[1].split('\n');
    for (const line of lines) {
      const itemMatch = line.match(/^-\s+(.+)$/);
      if (itemMatch) {
        requirements.push(itemMatch[1].trim());
      }
    }
  }

  return requirements;
}

/**
 * Extract evidence required
 */
function extractEvidence(content) {
  const evidence = [];

  const evidenceMatch = content.match(/\*\*Evidence Required:\*\*\s*([\s\S]*?)(?=\n\*\*[A-Z]|\n####|\n---|\n### )/);
  if (evidenceMatch) {
    const lines = evidenceMatch[1].split('\n');
    for (const line of lines) {
      const itemMatch = line.match(/^-\s+(.+)$/);
      if (itemMatch) {
        evidence.push(itemMatch[1].trim());
      }
    }
  }

  return evidence;
}

/**
 * Extract audit verification points
 */
function extractAuditVerification(content) {
  const verification = [];

  const verifyMatch = content.match(/\*\*Audit Verification:\*\*\s*([\s\S]*?)(?=\n\*\*[A-Z]|\n####|\n---|\n### )/);
  if (verifyMatch) {
    const lines = verifyMatch[1].split('\n');
    for (const line of lines) {
      const itemMatch = line.match(/^-\s+(.+)$/);
      if (itemMatch) {
        verification.push(itemMatch[1].trim());
      }
    }
  }

  return verification;
}

/**
 * Extract KPIs from the KPI section
 */
function extractKPIs(content) {
  const kpis = [];

  // Find KPI table
  const kpiSection = content.match(/### \d+\.\d+ Classification KPIs\s+([\s\S]*?)(?=\n---|\n### )/);
  if (!kpiSection) {
    // Try alternate format
    const altSection = content.match(/## KEY PERFORMANCE INDICATORS[\s\S]*?\| KPI ID \|[\s\S]*?(?=\n---|\n## )/);
    if (!altSection) return kpis;
  }

  // Parse KPI table rows
  const tableMatch = content.match(/\| \*\*KPI-[A-Z]+-\d+\*\* \|[\s\S]*?(?=\n---|\n### \d+\.\d+ KPI)/);
  if (tableMatch) {
    const rows = tableMatch[0].split('\n').filter(row => row.includes('| **KPI-'));

    for (const row of rows) {
      const cells = row.split('|').map(c => c.trim()).filter(c => c);
      if (cells.length >= 6) {
        const kpi = {
          id: cells[0].replace(/\*\*/g, ''),
          name: cells[1].replace(/\*\*/g, ''),
          definition: cells[2],
          target: cells[3],
          measurementMethod: cells[4],
          frequency: cells[5],
        };
        if (cells[6]) kpi.owner = cells[6];
        kpis.push(kpi);
      }
    }
  }

  return kpis;
}

/**
 * Extract EU AI Act article references
 */
function extractEuAiActArticles(content) {
  const articles = new Set();

  // Look for Article references
  const articleMatches = content.matchAll(/Article\s+(\d+(?:\([0-9a-z]+\))?)/gi);
  for (const match of articleMatches) {
    articles.add(`Article ${match[1]}`);
  }

  // Look for Annex references
  const annexMatches = content.matchAll(/Annex\s+(I{1,3}|IV|V|VI|VII|VIII|IX|X|XI|XII)/gi);
  for (const match of annexMatches) {
    articles.add(`Annex ${match[1]}`);
  }

  return Array.from(articles).slice(0, 10); // Limit to most relevant
}

/**
 * Generate short title from full title
 */
function generateShortTitle(title) {
  // Remove "AI" prefix and "Standard" suffix
  let short = title
    .replace(/^AI\s+/i, '')
    .replace(/\s+Standard$/i, '')
    .replace(/AI System\s*/i, '')
    .trim();

  // Take first significant word(s)
  const words = short.split(/[\s-]+/);
  if (words.length > 2) {
    short = words.slice(0, 2).join(' ');
  }

  return short;
}

/**
 * Determine category from standard ID or title
 */
function determineCategory(standardId, title) {
  const categoryMap = {
    'std-ai-001': 'classification',
    'std-ai-002': 'risk-management',
    'std-ai-003': 'data-governance',
    'std-ai-004': 'documentation',
    'std-ai-005': 'record-keeping',
    'std-ai-006': 'transparency',
    'std-ai-007': 'human-oversight',
    'std-ai-008': 'technical-requirements',
    'std-ai-009': 'quality-management',
    'std-ai-010': 'conformity-assessment',
    'std-ai-011': 'registration',
    'std-ai-012': 'post-market-monitoring',
    'std-ai-013': 'incident-management',
    'std-ai-014': 'training',
  };
  return categoryMap[standardId] || 'general';
}

/**
 * Process a single standard
 */
function processStandard(standardId) {
  const guidancePath = path.join(CONTENT_DIR, standardId, 'guidance.md');

  if (!fs.existsSync(guidancePath)) {
    console.error(`  [SKIP] No guidance.md found for ${standardId}`);
    return null;
  }

  console.log(`  Processing ${standardId}...`);

  const content = fs.readFileSync(guidancePath, 'utf-8');

  // Extract all data
  const metadata = extractMetadata(content);
  const controls = extractControls(content, standardId);
  const kpis = extractKPIs(content);
  const euAiActArticles = extractEuAiActArticles(content);

  // Build standard.json
  const standard = {
    id: standardId,
    standardId: metadata.standardId || standardId.toUpperCase(),
    title: metadata.title || `Standard ${standardId.toUpperCase()}`,
    shortTitle: generateShortTitle(metadata.title || ''),
    description: metadata.description || '',
    version: metadata.version || '1.0',
    effectiveDate: metadata.effectiveDate || null,
    nextReviewDate: metadata.nextReviewDate || null,
    reviewFrequency: metadata.reviewFrequency || 'Annually',
    owner: metadata.owner || 'AI Act Program Manager',
    parentPolicy: metadata.parentPolicy || 'POL-AI-001',
    euAiActArticles: euAiActArticles,
    iso42001Clauses: [], // Could be extracted if needed
    category: determineCategory(standardId, metadata.title),
    applicability: 'All AI systems',
    status: (metadata.status || 'draft').toLowerCase(),
    progress: 0,
    controlCount: controls.length,
    kpis: kpis,
  };

  // Write files
  const standardPath = path.join(CONTENT_DIR, standardId, 'standard.json');
  const controlsPath = path.join(CONTENT_DIR, standardId, 'controls.json');

  fs.writeFileSync(standardPath, JSON.stringify(standard, null, 2));
  fs.writeFileSync(controlsPath, JSON.stringify(controls, null, 2));

  console.log(`    ✓ standard.json: ${Object.keys(standard).length} fields`);
  console.log(`    ✓ controls.json: ${controls.length} controls`);

  return { standard, controls };
}

/**
 * Update index.json with accurate data
 */
function updateIndex(results) {
  const index = results
    .filter(r => r !== null)
    .map(({ standard }) => ({
      id: standard.id,
      title: standard.title,
      version: standard.version,
      status: standard.status,
      category: standard.category,
      euAiActRef: standard.euAiActArticles.slice(0, 3).join(', '),
      controlCount: standard.controlCount,
    }));

  const indexPath = path.join(CONTENT_DIR, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log(`\n✓ Updated index.json with ${index.length} standards`);
}

/**
 * Main function
 */
function main() {
  console.log('=== Standards JSON Generator ===\n');
  console.log(`Content directory: ${CONTENT_DIR}\n`);

  const results = [];

  for (const standardId of STANDARDS) {
    const result = processStandard(standardId);
    results.push(result);
  }

  updateIndex(results);

  // Summary
  const successful = results.filter(r => r !== null);
  const totalControls = successful.reduce((sum, r) => sum + r.controls.length, 0);

  console.log('\n=== Summary ===');
  console.log(`Standards processed: ${successful.length}/${STANDARDS.length}`);
  console.log(`Total controls extracted: ${totalControls}`);
  console.log('\nDone!');
}

main();
