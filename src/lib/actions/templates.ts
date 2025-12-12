"use server"

export type TemplateCategory =
  | "Risk Management"
  | "Classification"
  | "Data Management"
  | "Documentation"
  | "Operations"
  | "Transparency"
  | "Governance"
  | "Technical"
  | "Quality"
  | "Certification"
  | "Registration"
  | "Training"

export interface Template {
  id: string
  title: string
  description: string
  category: TemplateCategory
  format: "XLSX"
  filename: string
  fileSize: string
  version: string
  lastUpdated: string
  articles: string[]
  annexes: string[]
  sheets: string[]
  relatedProcedure: string
  relatedStandard: string
  featured: boolean
  downloads: number
  rating: number
}

// Template metadata for the 14 Excel templates
const TEMPLATES: Template[] = [
  {
    id: "tmp-ai-rm",
    title: "Risk Management Templates",
    description: "Comprehensive risk management workbook including Risk Register, Assessment Matrix, Misuse Risk Assessment, Third-Party AI Risk, and 15 pre-populated KRIs for Article 9 compliance.",
    category: "Risk Management",
    format: "XLSX",
    filename: "TMP-AI-RM-Risk_Management_Templates.xlsx",
    fileSize: "19.6 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 9"],
    annexes: [],
    sheets: ["Instructions", "Risk Register", "Assessment Matrix", "Misuse Risk Assessment", "Third-Party AI Risk", "KRI Dashboard", "GPAI Risk Assessment", "Risk Appetite"],
    relatedProcedure: "proc-ai-rm-001",
    relatedStandard: "STD-AI-002",
    featured: true,
    downloads: 1247,
    rating: 4.8,
  },
  {
    id: "tmp-ai-cls",
    title: "Classification Templates",
    description: "Complete classification workbook with Article 5 Prohibited Practices checklist, Annex III High-Risk Assessment, GPAI Classification (Articles 51-56), and systemic risk evaluation forms.",
    category: "Classification",
    format: "XLSX",
    filename: "TMP-AI-CLS-Classification_Templates.xlsx",
    fileSize: "15.1 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 5", "Article 6", "Article 51", "Article 52", "Article 53", "Article 54", "Article 55", "Article 56"],
    annexes: ["Annex III"],
    sheets: ["Instructions", "Article 5 Checklist", "Annex III Assessment", "GPAI Classification", "Risk Level Summary", "KPI Tracking"],
    relatedProcedure: "proc-ai-cls-001",
    relatedStandard: "STD-AI-001",
    featured: true,
    downloads: 982,
    rating: 4.9,
  },
  {
    id: "tmp-ai-data",
    title: "Data Governance Templates",
    description: "Data governance workbook for Article 10 compliance including Data Quality Assessment, Bias Detection Checklist, Data Lineage Documentation, and Statistical Appropriateness evaluation.",
    category: "Data Management",
    format: "XLSX",
    filename: "TMP-AI-DATA-Data_Governance_Templates.xlsx",
    fileSize: "13.0 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 10"],
    annexes: [],
    sheets: ["Instructions", "Data Quality Assessment", "Bias Detection Checklist", "Data Lineage", "Article 10 Compliance"],
    relatedProcedure: "proc-ai-data-001",
    relatedStandard: "STD-AI-003",
    featured: true,
    downloads: 756,
    rating: 4.7,
  },
  {
    id: "tmp-ai-doc",
    title: "Technical Documentation Templates",
    description: "Technical documentation workbook with Annex IV compliance checklist, GPAI Documentation requirements (Annex XI/XII), and version control tracking for high-risk AI systems.",
    category: "Documentation",
    format: "XLSX",
    filename: "TMP-AI-DOC-Technical_Documentation_Templates.xlsx",
    fileSize: "10.6 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 11"],
    annexes: ["Annex IV", "Annex XI", "Annex XII"],
    sheets: ["Instructions", "Annex IV Checklist", "GPAI Documentation", "Version Control"],
    relatedProcedure: "proc-ai-doc-001",
    relatedStandard: "STD-AI-004",
    featured: false,
    downloads: 634,
    rating: 4.6,
  },
  {
    id: "tmp-ai-log",
    title: "Logging Templates",
    description: "Logging and traceability workbook for Article 12 compliance with 10-year retention tracking, log integrity verification, and automatic logging capability assessment.",
    category: "Operations",
    format: "XLSX",
    filename: "TMP-AI-LOG-Logging_Templates.xlsx",
    fileSize: "10.4 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 12", "Article 19"],
    annexes: [],
    sheets: ["Instructions", "10-Year Retention Compliance", "Log Integrity Checklist", "Automatic Logging Assessment"],
    relatedProcedure: "proc-ai-log-001",
    relatedStandard: "STD-AI-005",
    featured: false,
    downloads: 421,
    rating: 4.5,
  },
  {
    id: "tmp-ai-trans",
    title: "Transparency Templates",
    description: "Transparency workbook covering Article 13 instructions for use requirements, Article 50 AI disclosure obligations, and synthetic content labeling compliance.",
    category: "Transparency",
    format: "XLSX",
    filename: "TMP-AI-TRANS-Transparency_Templates.xlsx",
    fileSize: "10.3 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 13", "Article 50"],
    annexes: [],
    sheets: ["Instructions", "Article 13 & 50 Compliance", "Instructions for Use Checklist", "AI Disclosure Requirements"],
    relatedProcedure: "proc-ai-trans-001",
    relatedStandard: "STD-AI-006",
    featured: false,
    downloads: 389,
    rating: 4.4,
  },
  {
    id: "tmp-ai-ho",
    title: "Human Oversight Templates",
    description: "Human oversight workbook for Article 14 compliance including oversight mechanism design, competency requirements, Human Oversight Decision Log, and intervention protocols.",
    category: "Governance",
    format: "XLSX",
    filename: "TMP-AI-HO-Human_Oversight_Templates.xlsx",
    fileSize: "10.2 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 14"],
    annexes: [],
    sheets: ["Instructions", "Article 14 Compliance", "Human Oversight Decision Log", "Competency Requirements"],
    relatedProcedure: "proc-ai-ho-001",
    relatedStandard: "STD-AI-007",
    featured: true,
    downloads: 512,
    rating: 4.7,
  },
  {
    id: "tmp-ai-ars",
    title: "Accuracy, Robustness & Security Templates",
    description: "Technical assessment workbook for Article 15 compliance covering accuracy metrics, robustness testing results, cybersecurity assessment, and adversarial testing documentation.",
    category: "Technical",
    format: "XLSX",
    filename: "TMP-AI-ARS-Accuracy_Robustness_Security_Templates.xlsx",
    fileSize: "9.2 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 15"],
    annexes: [],
    sheets: ["Instructions", "Article 15 Compliance", "Accuracy Metrics", "Robustness Testing", "Cybersecurity Assessment"],
    relatedProcedure: "proc-ai-ars-001",
    relatedStandard: "STD-AI-008",
    featured: false,
    downloads: 478,
    rating: 4.6,
  },
  {
    id: "tmp-ai-qms",
    title: "Quality Management Templates",
    description: "QMS workbook for Article 17 compliance including QMS element tracking, resource management, design control documentation, and continuous improvement tracking.",
    category: "Quality",
    format: "XLSX",
    filename: "TMP-AI-QMS-Quality_Management_Templates.xlsx",
    fileSize: "10.2 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 17"],
    annexes: [],
    sheets: ["Instructions", "Article 17 QMS Checklist", "QMS Element Tracking", "Resource Management"],
    relatedProcedure: "proc-ai-qms-001",
    relatedStandard: "STD-AI-009",
    featured: false,
    downloads: 367,
    rating: 4.5,
  },
  {
    id: "tmp-ai-conf",
    title: "Conformity Assessment Templates",
    description: "Conformity assessment workbook covering Articles 43, 47, 48 with Annex V Declaration of Conformity template, CE marking guidance, and self-assessment checklists.",
    category: "Certification",
    format: "XLSX",
    filename: "TMP-AI-CONF-Conformity_Assessment_Templates.xlsx",
    fileSize: "9.4 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 43", "Article 47", "Article 48"],
    annexes: ["Annex V", "Annex VI", "Annex VII"],
    sheets: ["Instructions", "Annex V Declaration", "CE Marking Checklist", "Self-Assessment"],
    relatedProcedure: "proc-ai-ca-001",
    relatedStandard: "STD-AI-010",
    featured: false,
    downloads: 523,
    rating: 4.8,
  },
  {
    id: "tmp-ai-reg",
    title: "Registration Templates",
    description: "EU database registration workbook for Articles 49 and 71 including Annex VIII data requirements checklist and GPAI model registration tracking.",
    category: "Registration",
    format: "XLSX",
    filename: "TMP-AI-REG-Registration_Templates.xlsx",
    fileSize: "8.0 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 49", "Article 71"],
    annexes: ["Annex VIII"],
    sheets: ["Instructions", "Annex VIII Data Checklist", "Registration Tracking"],
    relatedProcedure: "proc-ai-reg-001",
    relatedStandard: "STD-AI-011",
    featured: false,
    downloads: 289,
    rating: 4.3,
  },
  {
    id: "tmp-ai-pmm",
    title: "Post-Market Monitoring Templates",
    description: "Post-market monitoring workbook for Article 72 compliance including PMMP elements tracker, data collection log, incident trend analysis, and corrective action tracking.",
    category: "Operations",
    format: "XLSX",
    filename: "TMP-AI-PMM-Post_Market_Monitoring_Templates.xlsx",
    fileSize: "7.9 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 72"],
    annexes: [],
    sheets: ["Instructions", "Article 72 PMMP Elements", "Data Collection Log", "Trend Analysis"],
    relatedProcedure: "proc-ai-pmm-001",
    relatedStandard: "STD-AI-012",
    featured: false,
    downloads: 312,
    rating: 4.4,
  },
  {
    id: "tmp-ai-inc",
    title: "Incident Management Templates",
    description: "Incident management workbook for Article 73 serious incident reporting including 72-hour notification tracker, root cause analysis forms, and corrective action documentation.",
    category: "Operations",
    format: "XLSX",
    filename: "TMP-AI-INC-Incident_Management_Templates.xlsx",
    fileSize: "8.3 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 73"],
    annexes: [],
    sheets: ["Instructions", "Article 73 Incident Report", "72-Hour Notification Tracker", "Root Cause Analysis"],
    relatedProcedure: "proc-ai-inc-001",
    relatedStandard: "STD-AI-013",
    featured: false,
    downloads: 445,
    rating: 4.6,
  },
  {
    id: "tmp-ai-train",
    title: "Training & AI Literacy Templates",
    description: "AI literacy training workbook for Article 4 compliance including competency matrix, training needs assessment, certification tracking, and ongoing education planning.",
    category: "Training",
    format: "XLSX",
    filename: "TMP-AI-TRAIN-Training_Templates.xlsx",
    fileSize: "8.9 KB",
    version: "2.0",
    lastUpdated: "Dec 2024",
    articles: ["Article 4"],
    annexes: [],
    sheets: ["Instructions", "Article 4 Competency Matrix", "Training Needs Assessment", "Certification Tracking"],
    relatedProcedure: "proc-ai-lit-001",
    relatedStandard: "STD-AI-014",
    featured: false,
    downloads: 398,
    rating: 4.5,
  },
]

/**
 * Get all templates
 */
export async function getTemplates(category?: TemplateCategory): Promise<Template[]> {
  if (category) {
    return TEMPLATES.filter(t => t.category === category)
  }
  return TEMPLATES
}

/**
 * Get a template by ID
 */
export async function getTemplateById(id: string): Promise<Template | null> {
  return TEMPLATES.find(t => t.id === id) || null
}

/**
 * Get featured templates
 */
export async function getFeaturedTemplates(): Promise<Template[]> {
  return TEMPLATES.filter(t => t.featured)
}

/**
 * Get template statistics
 */
export async function getTemplateStats() {
  const featured = TEMPLATES.filter(t => t.featured)
  const totalDownloads = TEMPLATES.reduce((sum, t) => sum + t.downloads, 0)
  const avgRating = TEMPLATES.reduce((sum, t) => sum + t.rating, 0) / TEMPLATES.length

  const byCategory: Record<string, number> = {}
  for (const template of TEMPLATES) {
    byCategory[template.category] = (byCategory[template.category] || 0) + 1
  }

  return {
    total: TEMPLATES.length,
    featured: featured.length,
    totalDownloads,
    avgRating: Math.round(avgRating * 10) / 10,
    byCategory,
  }
}

/**
 * Get unique categories
 */
export async function getTemplateCategories(): Promise<TemplateCategory[]> {
  const categories = new Set(TEMPLATES.map(t => t.category))
  return Array.from(categories).sort() as TemplateCategory[]
}

/**
 * Get templates by related procedure
 */
export async function getTemplatesByProcedure(procedureId: string): Promise<Template[]> {
  return TEMPLATES.filter(t => t.relatedProcedure === procedureId)
}

/**
 * Get templates by article
 */
export async function getTemplatesByArticle(article: string): Promise<Template[]> {
  return TEMPLATES.filter(t => t.articles.includes(article))
}
