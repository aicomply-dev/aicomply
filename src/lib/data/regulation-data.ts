// EU AI Act Regulation Structure
// Maps file names to navigation structure

export interface RegulationSection {
  id: string
  slug: string
  title: string
  shortTitle: string
  type: "preamble" | "chapter" | "annex" | "other"
  chapterNumber?: number
  annexNumber?: number
  articles?: string // e.g., "Articles 1-4"
  fileName: string
  description: string
  size?: string
  trainingFocus?: string
  icon?: string
}

export const REGULATION_SECTIONS: RegulationSection[] = [
  // Foundation Documents
  {
    id: "title-intro",
    slug: "title-and-introduction",
    title: "Regulation (EU) 2024/1689 - Title and Legal Basis",
    shortTitle: "Title & Introduction",
    type: "other",
    fileName: "00_title_and_introduction.md",
    description: "Official designation, legal authority, and institutional approvals",
    trainingFocus: "Legal framework and jurisdiction",
  },
  {
    id: "preamble",
    slug: "preamble",
    title: "Preamble - Whereas Clauses (1-180)",
    shortTitle: "Preamble",
    type: "preamble",
    fileName: "01_preamble.md",
    description: "Legislative intent, policy objectives, risk-based approach rationale",
    size: "223 KB",
    trainingFocus: "Understanding regulatory intent - essential for interpretation",
  },

  // Core Regulatory Framework - Chapters
  {
    id: "chapter-1",
    slug: "chapter-1-general-provisions",
    title: "Chapter I - General Provisions",
    shortTitle: "General Provisions",
    type: "chapter",
    chapterNumber: 1,
    articles: "Articles 1-4",
    fileName: "02_chapter_01_general_provisions.md",
    description: "Scope, applicability, key definitions (AI system, provider, deployer)",
    trainingFocus: "Foundation for entire regulation - definitions critical",
  },
  {
    id: "chapter-2",
    slug: "chapter-2-prohibited-practices",
    title: "Chapter II - Prohibited AI Practices",
    shortTitle: "Prohibited Practices",
    type: "chapter",
    chapterNumber: 2,
    articles: "Article 5",
    fileName: "03_chapter_02_prohibited_ai_practices.md",
    description: "Unacceptable risk AI systems, social scoring, manipulation, biometric restrictions",
    trainingFocus: "RED LINES - absolute prohibitions with severe penalties",
    icon: "ban",
  },
  {
    id: "chapter-3",
    slug: "chapter-3-high-risk-systems",
    title: "Chapter III - High-Risk AI Systems",
    shortTitle: "High-Risk AI",
    type: "chapter",
    chapterNumber: 3,
    articles: "Articles 6-51",
    fileName: "04_chapter_03_high_risk_ai_systems.md",
    description: "Classification rules, requirements, obligations for providers and deployers",
    size: "107 KB",
    trainingFocus: "CRITICAL - Most organizations will interact here",
    icon: "alert-triangle",
  },
  {
    id: "chapter-4",
    slug: "chapter-4-transparency",
    title: "Chapter IV - Transparency Obligations",
    shortTitle: "Transparency",
    type: "chapter",
    chapterNumber: 4,
    articles: "Articles 50-52",
    fileName: "05_chapter_04_transparency_obligations.md",
    description: "Disclosure requirements, deepfake labeling, emotion recognition disclosures",
    trainingFocus: "User rights and disclosure mandates",
  },
  {
    id: "chapter-5",
    slug: "chapter-5-gpai",
    title: "Chapter V - General-Purpose AI Models",
    shortTitle: "GPAI Models",
    type: "chapter",
    chapterNumber: 5,
    articles: "Articles 51-56",
    fileName: "06_chapter_05_general_purpose_ai_models.md",
    description: "Classification, requirements, obligations for GPAI, systemic risk models",
    trainingFocus: "Foundation models (GPT, Claude, etc.) - emerging area",
    icon: "sparkles",
  },
  {
    id: "chapter-6",
    slug: "chapter-6-innovation",
    title: "Chapter VI - Measures in Support of Innovation",
    shortTitle: "Innovation Support",
    type: "chapter",
    chapterNumber: 6,
    articles: "Articles 57-62",
    fileName: "07_chapter_06_innovation_support.md",
    description: "AI regulatory sandboxes, real-world testing, SME support measures",
    trainingFocus: "Opportunities for compliant innovation",
  },
  {
    id: "chapter-7",
    slug: "chapter-7-governance",
    title: "Chapter VII - Governance",
    shortTitle: "Governance",
    type: "chapter",
    chapterNumber: 7,
    articles: "Articles 64-70",
    fileName: "08_chapter_07_governance.md",
    description: "European AI Board, national competent authorities, coordination",
    trainingFocus: "Who enforces what - enforcement architecture",
    icon: "building-2",
  },
  {
    id: "chapter-8",
    slug: "chapter-8-eu-database",
    title: "Chapter VIII - EU Database for High-Risk AI Systems",
    shortTitle: "EU Database",
    type: "chapter",
    chapterNumber: 8,
    articles: "Article 71",
    fileName: "09_chapter_08_eu_database.md",
    description: "Centralized registration system, public transparency requirements",
    trainingFocus: "Registration obligations and public disclosure",
  },
  {
    id: "chapter-9",
    slug: "chapter-9-post-market",
    title: "Chapter IX - Post-Market Monitoring and Market Surveillance",
    shortTitle: "Post-Market Monitoring",
    type: "chapter",
    chapterNumber: 9,
    articles: "Articles 72-94",
    fileName: "10_chapter_09_post_market_monitoring.md",
    description: "Post-market monitoring, information sharing, market surveillance, remedies",
    trainingFocus: "Ongoing compliance obligations - doesn't end at launch",
  },
  {
    id: "chapter-10",
    slug: "chapter-10-codes-of-conduct",
    title: "Chapter X - Codes of Conduct and Guidelines",
    shortTitle: "Codes of Conduct",
    type: "chapter",
    chapterNumber: 10,
    articles: "Articles 95-96",
    fileName: "11_chapter_10_codes_of_conduct.md",
    description: "Voluntary commitments for non-high-risk systems, best practices",
    trainingFocus: "Voluntary compliance opportunities - reputation and trust",
  },
  {
    id: "chapter-11",
    slug: "chapter-11-delegation",
    title: "Chapter XI - Delegation of Power and Committee Procedure",
    shortTitle: "Delegation of Power",
    type: "chapter",
    chapterNumber: 11,
    articles: "Articles 97-98",
    fileName: "12_chapter_11_delegation_of_power.md",
    description: "Commission's delegated powers, committee procedures",
    trainingFocus: "How regulations evolve - delegated acts mechanism",
  },
  {
    id: "chapter-12",
    slug: "chapter-12-penalties",
    title: "Chapter XII - Penalties",
    shortTitle: "Penalties",
    type: "chapter",
    chapterNumber: 12,
    articles: "Article 99",
    fileName: "13_chapter_12_penalties.md",
    description: "Fines up to €35M or 7% of global turnover, penalty tiers",
    trainingFocus: "FINANCIAL RISKS - C-suite attention required",
    icon: "gavel",
  },
  {
    id: "chapter-13",
    slug: "chapter-13-final-provisions",
    title: "Chapter XIII - Final Provisions",
    shortTitle: "Final Provisions",
    type: "chapter",
    chapterNumber: 13,
    articles: "Articles 100-113",
    fileName: "14_chapter_13_final_provisions.md",
    description: "Implementation timelines, transitional periods, amendments, entry into force",
    trainingFocus: "When compliance is required - critical dates",
  },

  // Annexes
  {
    id: "annex-1",
    slug: "annex-1-harmonisation",
    title: "Annex I - List of Union Harmonisation Legislation",
    shortTitle: "Union Harmonisation",
    type: "annex",
    annexNumber: 1,
    fileName: "15_annex_01_union_harmonisation.md",
    description: "Related EU product safety legislation, cross-regulatory integration",
    trainingFocus: "Cross-regulatory compliance mapping",
  },
  {
    id: "annex-2",
    slug: "annex-2-criminal-offences",
    title: "Annex II - List of Criminal Offences",
    shortTitle: "Criminal Offences",
    type: "annex",
    annexNumber: 2,
    fileName: "16_annex_02_criminal_offences.md",
    description: "Criminal offences relevant to Article 5(1)(h)(iii)",
    trainingFocus: "Law enforcement AI restrictions",
  },
  {
    id: "annex-3",
    slug: "annex-3-high-risk-list",
    title: "Annex III - High-Risk AI Systems per Article 6(2)",
    shortTitle: "High-Risk List",
    type: "annex",
    annexNumber: 3,
    fileName: "17_annex_03_high_risk_systems.md",
    description: "Definitive list of high-risk use cases across 8 categories",
    trainingFocus: "Risk classification - practical checklist",
    icon: "list-checks",
  },
  {
    id: "annex-4",
    slug: "annex-4-technical-docs",
    title: "Annex IV - Technical Documentation Requirements",
    shortTitle: "Technical Documentation",
    type: "annex",
    annexNumber: 4,
    fileName: "18_annex_04_technical_documentation.md",
    description: "Mandatory documentation elements for providers",
    trainingFocus: "Compliance documentation template",
  },
  {
    id: "annex-5",
    slug: "annex-5-eu-declaration",
    title: "Annex V - EU Declaration of Conformity",
    shortTitle: "EU Declaration",
    type: "annex",
    annexNumber: 5,
    fileName: "19_annex_05_eu_declaration.md",
    description: "Required conformity declaration format",
    trainingFocus: "Certification process",
  },
  {
    id: "annex-6",
    slug: "annex-6-internal-control",
    title: "Annex VI - Conformity Assessment - Internal Control",
    shortTitle: "Internal Control",
    type: "annex",
    annexNumber: 6,
    fileName: "20_annex_06_conformity_internal_control.md",
    description: "Self-assessment procedures",
    trainingFocus: "For lower-risk high-risk systems",
  },
  {
    id: "annex-7",
    slug: "annex-7-quality-management",
    title: "Annex VII - Conformity Assessment - Quality Management System",
    shortTitle: "Quality Management",
    type: "annex",
    annexNumber: 7,
    fileName: "21_annex_07_conformity_quality_management.md",
    description: "Third-party assessment procedures, QMS requirements",
    trainingFocus: "For higher-risk systems requiring external audit",
  },
  {
    id: "annex-8",
    slug: "annex-8-registration",
    title: "Annex VIII - Information for Registration",
    shortTitle: "Registration Info",
    type: "annex",
    annexNumber: 8,
    fileName: "22_annex_08_registration_information.md",
    description: "Data required for EU database registration",
    trainingFocus: "Registration preparation checklist",
  },
  {
    id: "annex-9",
    slug: "annex-9-real-world-testing",
    title: "Annex IX - Real-World Testing Registration",
    shortTitle: "Real-World Testing",
    type: "annex",
    annexNumber: 9,
    fileName: "23_annex_09_real_world_testing.md",
    description: "Information for testing in real-world conditions",
    trainingFocus: "Sandbox and testing applications",
  },
  {
    id: "annex-10",
    slug: "annex-10-large-scale-it",
    title: "Annex X - Large-Scale IT Systems",
    shortTitle: "Large-Scale IT",
    type: "annex",
    annexNumber: 10,
    fileName: "24_annex_10_large_scale_it_systems.md",
    description: "Specific systems in freedom, security, justice area",
    trainingFocus: "Specialized applications",
  },
  {
    id: "annex-11",
    slug: "annex-11-gpai-docs",
    title: "Annex XI - GPAI Technical Documentation",
    shortTitle: "GPAI Documentation",
    type: "annex",
    annexNumber: 11,
    fileName: "25_annex_11_gpai_technical_documentation.md",
    description: "Documentation requirements for GPAI model providers",
    trainingFocus: "Foundation model compliance",
  },
  {
    id: "annex-12",
    slug: "annex-12-gpai-transparency",
    title: "Annex XII - GPAI Transparency Information",
    shortTitle: "GPAI Transparency",
    type: "annex",
    annexNumber: 12,
    fileName: "26_annex_12_gpai_transparency.md",
    description: "Transparency obligations for downstream providers",
    trainingFocus: "Supply chain transparency",
  },
  {
    id: "annex-13",
    slug: "annex-13-systemic-risk",
    title: "Annex XIII - Systemic Risk Designation Criteria",
    shortTitle: "Systemic Risk Criteria",
    type: "annex",
    annexNumber: 13,
    fileName: "27_annex_13_systemic_risk_criteria.md",
    description: "Criteria for GPAI models with systemic risk, 10^25 FLOPs threshold",
    size: "59 KB",
    trainingFocus: "Large-scale foundation model obligations",
  },
]

// Article to section mapping for linking
export const ARTICLE_MAPPING: Record<string, string> = {
  // Chapter 1
  "Article 1": "chapter-1-general-provisions",
  "Article 2": "chapter-1-general-provisions",
  "Article 3": "chapter-1-general-provisions",
  "Article 4": "chapter-1-general-provisions",
  // Chapter 2
  "Article 5": "chapter-2-prohibited-practices",
  // Chapter 3
  "Article 6": "chapter-3-high-risk-systems",
  "Article 7": "chapter-3-high-risk-systems",
  "Article 8": "chapter-3-high-risk-systems",
  "Article 9": "chapter-3-high-risk-systems",
  "Article 10": "chapter-3-high-risk-systems",
  "Article 11": "chapter-3-high-risk-systems",
  "Article 12": "chapter-3-high-risk-systems",
  "Article 13": "chapter-3-high-risk-systems",
  "Article 14": "chapter-3-high-risk-systems",
  "Article 15": "chapter-3-high-risk-systems",
  "Article 16": "chapter-3-high-risk-systems",
  "Article 17": "chapter-3-high-risk-systems",
  "Article 18": "chapter-3-high-risk-systems",
  "Article 19": "chapter-3-high-risk-systems",
  "Article 20": "chapter-3-high-risk-systems",
  "Article 21": "chapter-3-high-risk-systems",
  "Article 22": "chapter-3-high-risk-systems",
  "Article 23": "chapter-3-high-risk-systems",
  "Article 24": "chapter-3-high-risk-systems",
  "Article 25": "chapter-3-high-risk-systems",
  "Article 26": "chapter-3-high-risk-systems",
  "Article 27": "chapter-3-high-risk-systems",
  "Article 28": "chapter-3-high-risk-systems",
  "Article 29": "chapter-3-high-risk-systems",
  "Article 30": "chapter-3-high-risk-systems",
  "Article 31": "chapter-3-high-risk-systems",
  "Article 32": "chapter-3-high-risk-systems",
  "Article 33": "chapter-3-high-risk-systems",
  "Article 34": "chapter-3-high-risk-systems",
  "Article 35": "chapter-3-high-risk-systems",
  "Article 36": "chapter-3-high-risk-systems",
  "Article 37": "chapter-3-high-risk-systems",
  "Article 38": "chapter-3-high-risk-systems",
  "Article 39": "chapter-3-high-risk-systems",
  "Article 40": "chapter-3-high-risk-systems",
  "Article 41": "chapter-3-high-risk-systems",
  "Article 42": "chapter-3-high-risk-systems",
  "Article 43": "chapter-3-high-risk-systems",
  "Article 44": "chapter-3-high-risk-systems",
  "Article 45": "chapter-3-high-risk-systems",
  "Article 46": "chapter-3-high-risk-systems",
  "Article 47": "chapter-3-high-risk-systems",
  "Article 48": "chapter-3-high-risk-systems",
  "Article 49": "chapter-3-high-risk-systems",
  // Chapter 4
  "Article 50": "chapter-4-transparency",
  "Article 51": "chapter-5-gpai",
  "Article 52": "chapter-4-transparency",
  // Chapter 5
  "Article 53": "chapter-5-gpai",
  "Article 54": "chapter-5-gpai",
  "Article 55": "chapter-5-gpai",
  "Article 56": "chapter-5-gpai",
  // Chapter 6
  "Article 57": "chapter-6-innovation",
  "Article 58": "chapter-6-innovation",
  "Article 59": "chapter-6-innovation",
  "Article 60": "chapter-6-innovation",
  "Article 61": "chapter-6-innovation",
  "Article 62": "chapter-6-innovation",
  "Article 63": "chapter-6-innovation",
  // Chapter 7
  "Article 64": "chapter-7-governance",
  "Article 65": "chapter-7-governance",
  "Article 66": "chapter-7-governance",
  "Article 67": "chapter-7-governance",
  "Article 68": "chapter-7-governance",
  "Article 69": "chapter-7-governance",
  "Article 70": "chapter-7-governance",
  // Chapter 8
  "Article 71": "chapter-8-eu-database",
  // Chapter 9
  "Article 72": "chapter-9-post-market",
  "Article 73": "chapter-9-post-market",
  "Article 74": "chapter-9-post-market",
  "Article 75": "chapter-9-post-market",
  "Article 76": "chapter-9-post-market",
  "Article 77": "chapter-9-post-market",
  "Article 78": "chapter-9-post-market",
  "Article 79": "chapter-9-post-market",
  "Article 80": "chapter-9-post-market",
  "Article 81": "chapter-9-post-market",
  "Article 82": "chapter-9-post-market",
  "Article 83": "chapter-9-post-market",
  "Article 84": "chapter-9-post-market",
  "Article 85": "chapter-9-post-market",
  "Article 86": "chapter-9-post-market",
  "Article 87": "chapter-9-post-market",
  "Article 88": "chapter-9-post-market",
  "Article 89": "chapter-9-post-market",
  "Article 90": "chapter-9-post-market",
  "Article 91": "chapter-9-post-market",
  "Article 92": "chapter-9-post-market",
  "Article 93": "chapter-9-post-market",
  "Article 94": "chapter-9-post-market",
  // Chapter 10
  "Article 95": "chapter-10-codes-of-conduct",
  "Article 96": "chapter-10-codes-of-conduct",
  // Chapter 11
  "Article 97": "chapter-11-delegation",
  "Article 98": "chapter-11-delegation",
  // Chapter 12
  "Article 99": "chapter-12-penalties",
  // Chapter 13
  "Article 100": "chapter-13-final-provisions",
  "Article 101": "chapter-13-final-provisions",
  "Article 102": "chapter-13-final-provisions",
  "Article 103": "chapter-13-final-provisions",
  "Article 104": "chapter-13-final-provisions",
  "Article 105": "chapter-13-final-provisions",
  "Article 106": "chapter-13-final-provisions",
  "Article 107": "chapter-13-final-provisions",
  "Article 108": "chapter-13-final-provisions",
  "Article 109": "chapter-13-final-provisions",
  "Article 110": "chapter-13-final-provisions",
  "Article 111": "chapter-13-final-provisions",
  "Article 112": "chapter-13-final-provisions",
  "Article 113": "chapter-13-final-provisions",
}

// Key dates from the regulation
export const KEY_DATES = [
  {
    provision: "AI Act enters into force",
    date: "1 August 2024",
    reference: "Article 113",
  },
  {
    provision: "Prohibited AI practices (Article 5)",
    date: "2 February 2025",
    reference: "Article 113",
  },
  {
    provision: "GPAI obligations (Chapter V)",
    date: "2 August 2025",
    reference: "Article 113",
  },
  {
    provision: "High-risk obligations (Annex III systems)",
    date: "2 August 2026",
    reference: "Article 113",
  },
  {
    provision: "Full application",
    date: "2 August 2027",
    reference: "Article 113",
  },
]

// Helper functions
export function getSectionBySlug(slug: string): RegulationSection | undefined {
  return REGULATION_SECTIONS.find((s) => s.slug === slug)
}

export function getChapters(): RegulationSection[] {
  return REGULATION_SECTIONS.filter((s) => s.type === "chapter")
}

export function getAnnexes(): RegulationSection[] {
  return REGULATION_SECTIONS.filter((s) => s.type === "annex")
}

export function getArticleSlug(article: string): string | undefined {
  // Normalize article reference (e.g., "Article 3(1)" -> "Article 3")
  const baseArticle = article.replace(/\(\d+\).*$/, "").trim()
  return ARTICLE_MAPPING[baseArticle]
}

export function buildArticleUrl(article: string): string {
  const slug = getArticleSlug(article)
  if (!slug) return "#"

  // Extract article number for anchor
  const match = article.match(/Article\s+(\d+)/)
  const articleNum = match ? match[1] : ""

  return `/resources/regulation/${slug}#article-${articleNum}`
}
