// EU AI Act Compliance Framework Data Model
// Based on POL-AI-001 and supporting standards STD-AI-001 through STD-AI-014

// ============================================
// Type Definitions
// ============================================

export interface Control {
  id: string
  name: string
  type: "preventive" | "detective" | "corrective"
  frequency: string
  riskLevel: "critical" | "high" | "medium" | "low"
  objective: string
  requirements: string[]
  evidence: string[]
  status: "not_started" | "in_progress" | "compliant" | "non_compliant"
  progress: number
}

export interface Standard {
  id: string
  standardId: string
  title: string
  shortTitle: string
  description: string
  version: string
  effectiveDate: string
  nextReviewDate: string
  owner: string
  parentPolicy: string
  euAiActArticles: string[]
  iso42001Clauses: string[]
  category: "classification" | "risk" | "data" | "documentation" | "transparency" | "oversight" | "security" | "quality" | "conformity" | "registration" | "monitoring" | "incident" | "training"
  applicability: string
  controls: Control[]
  kpis: KPI[]
  status: "draft" | "in_review" | "approved" | "archived"
  progress: number
}

export interface KPI {
  id: string
  name: string
  definition: string
  target: string
  measurement: string
  frequency: string
  owner: string
  status: "on_track" | "at_risk" | "off_track"
  currentValue?: string
}

export interface PolicyRequirement {
  id: string
  title: string
  description: string
  supportingStandard: string
  keyActivities: string[]
  applicability: string
  euAiActArticle: string
}

export interface Policy {
  id: string
  policyNumber: string
  title: string
  version: string
  effectiveDate: string
  nextReviewDate: string
  owner: string
  sponsor: string
  approvedBy: string
  status: "draft" | "in_review" | "approved" | "archived"
  purpose: string
  scope: string[]
  policyStatement: string[]
  requirements: PolicyRequirement[]
  prohibitedPractices: string[]
  governanceStructure: {
    committee: {
      name: string
      composition: string[]
      responsibilities: string[]
      meetingCadence: string
    }
    programManager: {
      title: string
      responsibilities: string[]
    }
  }
  kpis: KPI[]
}

// ============================================
// Standards Data (STD-AI-001 through STD-AI-014)
// ============================================

export const standards: Standard[] = [
  {
    id: "std-ai-001",
    standardId: "STD-AI-001",
    title: "AI System Classification Standard",
    shortTitle: "Classification",
    description: "Defines requirements and process for classifying AI systems according to EU AI Act risk categories (prohibited, high-risk, limited-risk, minimal-risk).",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "AI Act Program Manager",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 5", "Article 6", "Annex I", "Annex III"],
    iso42001Clauses: ["Clause 4.1", "Clause 6.1.2"],
    category: "classification",
    applicability: "All AI systems",
    status: "draft",
    progress: 45,
    controls: [
      {
        id: "CLS-001",
        name: "Prohibited Practice Assessment and Prevention",
        type: "preventive",
        frequency: "Before development, before deployment, annually",
        riskLevel: "critical",
        objective: "Ensure no AI systems constitute prohibited practices under EU AI Act Article 5",
        requirements: [
          "Complete Prohibited Practice Assessment Form for each AI system",
          "Screen against all 8 prohibited practices defined in Article 5",
          "Document assessment results with clear justification",
          "Halt all development/deployment if any prohibited practice is identified",
          "Obtain legal review for borderline or unclear cases"
        ],
        evidence: [
          "Completed FORM-AI-CLS-001 (Prohibited Practice Assessment Form)",
          "Legal review records for borderline cases",
          "Assessment approval by AI Act Program Manager"
        ],
        status: "in_progress",
        progress: 60
      },
      {
        id: "CLS-002",
        name: "Annex I Product Safety AI Assessment",
        type: "preventive",
        frequency: "Initial classification, after substantial modifications",
        riskLevel: "high",
        objective: "Identify AI systems that are safety components of products covered by Union harmonization legislation",
        requirements: [
          "Review AI system against all 12 Annex I product categories",
          "Determine if AI system is a safety component of the product",
          "Assess if product requires third-party conformity assessment",
          "Complete Annex I Assessment Form"
        ],
        evidence: [
          "Completed FORM-AI-CLS-002 (Annex I Assessment Form)",
          "Product documentation and specifications",
          "Safety component determination with justification"
        ],
        status: "not_started",
        progress: 0
      },
      {
        id: "CLS-003",
        name: "Annex III Standalone High-Risk AI Assessment",
        type: "preventive",
        frequency: "Initial classification, after substantial modifications",
        riskLevel: "high",
        objective: "Identify AI systems that fall under Annex III high-risk use cases",
        requirements: [
          "Review AI system against all 8 Annex III categories",
          "Assess each specific use case within applicable categories",
          "Complete Annex III Assessment Form with detailed justification",
          "Obtain legal review for borderline cases"
        ],
        evidence: [
          "Completed FORM-AI-CLS-003 (Annex III Assessment Form)",
          "Use case description and intended purpose documentation",
          "Legal review records for borderline cases"
        ],
        status: "in_progress",
        progress: 40
      },
      {
        id: "CLS-004",
        name: "Final Classification Determination and Documentation",
        type: "preventive",
        frequency: "Per AI system, after substantial modifications",
        riskLevel: "high",
        objective: "Make definitive classification decisions and maintain complete documentation",
        requirements: [
          "Execute decision tree systematically for each AI system",
          "Document decision at each step with justification",
          "Complete Classification Decision Record",
          "Obtain AI Governance Committee approval for HIGH-RISK classifications"
        ],
        evidence: [
          "Classification Decision Record (REC-AI-CLS-001)",
          "All assessment forms",
          "AI Governance Committee approval for high-risk systems"
        ],
        status: "in_progress",
        progress: 35
      },
      {
        id: "CLS-005",
        name: "AI System Classification Register Management",
        type: "detective",
        frequency: "Continuous updates, monthly reviews",
        riskLevel: "medium",
        objective: "Maintain comprehensive, current, and accurate register of all AI system classifications",
        requirements: [
          "Create register entry within 5 business days of classification decision",
          "Update register within 2 business days of any status change",
          "Conduct monthly register review for completeness and accuracy",
          "Generate quarterly register reports for AI Governance Committee"
        ],
        evidence: [
          "AI System Classification Register (REC-AI-CLS-002)",
          "Monthly register review records",
          "Quarterly reports to AI Governance Committee"
        ],
        status: "in_progress",
        progress: 70
      }
    ],
    kpis: [
      {
        id: "KPI-CLS-001",
        name: "Classification Completeness",
        definition: "% of AI systems with current, valid classification",
        target: "100%",
        measurement: "(# AI systems classified / # total AI systems) × 100",
        frequency: "Monthly",
        owner: "AI Act Program Manager",
        status: "at_risk",
        currentValue: "85%"
      },
      {
        id: "KPI-CLS-002",
        name: "Classification Timeliness",
        definition: "Average business days from classification request to decision",
        target: "< 10 days",
        measurement: "Σ (classification date - request date) / # classifications",
        frequency: "Monthly",
        owner: "AI Act Program Manager",
        status: "on_track",
        currentValue: "8 days"
      },
      {
        id: "KPI-CLS-006",
        name: "Prohibited Practice Prevention",
        definition: "Number of prohibited practices in development or operation",
        target: "0 (Zero tolerance)",
        measurement: "Count of prohibited AI systems",
        frequency: "Continuous",
        owner: "AI Governance Committee",
        status: "on_track",
        currentValue: "0"
      }
    ]
  },
  {
    id: "std-ai-002",
    standardId: "STD-AI-002",
    title: "AI Risk Management Standard",
    shortTitle: "Risk Management",
    description: "Establishes comprehensive AI risk management system throughout the AI system lifecycle.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "AI Risk Manager",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 9"],
    iso42001Clauses: ["Clause 6.1", "Clause 8.2"],
    category: "risk",
    applicability: "All AI systems, mandatory for high-risk",
    status: "draft",
    progress: 35,
    controls: [
      {
        id: "RMS-001",
        name: "Risk Identification and Analysis",
        type: "preventive",
        frequency: "Initial assessment, ongoing monitoring",
        riskLevel: "high",
        objective: "Identify and analyze known and foreseeable AI-related risks",
        requirements: [
          "Identify risks to health, safety, and fundamental rights",
          "Analyze reasonably foreseeable misuse scenarios",
          "Document risk likelihood and impact assessments",
          "Maintain comprehensive AI risk register"
        ],
        evidence: [
          "Risk identification worksheets",
          "Risk analysis documentation",
          "AI Risk Register"
        ],
        status: "in_progress",
        progress: 50
      },
      {
        id: "RMS-002",
        name: "Risk Mitigation and Control",
        type: "preventive",
        frequency: "Per identified risk",
        riskLevel: "high",
        objective: "Implement appropriate risk mitigation measures",
        requirements: [
          "Design and implement risk controls for each identified risk",
          "Test effectiveness of risk controls",
          "Document residual risks after mitigation",
          "Communicate residual risks to deployers and users"
        ],
        evidence: [
          "Risk control implementation records",
          "Control testing results",
          "Residual risk documentation"
        ],
        status: "in_progress",
        progress: 30
      },
      {
        id: "RMS-003",
        name: "Continuous Risk Monitoring",
        type: "detective",
        frequency: "Continuous",
        riskLevel: "medium",
        objective: "Monitor risks throughout AI system lifecycle",
        requirements: [
          "Implement risk monitoring dashboards",
          "Define risk indicators and thresholds",
          "Conduct periodic risk reviews",
          "Update risk assessments based on monitoring data"
        ],
        evidence: [
          "Risk monitoring dashboard reports",
          "Risk review meeting minutes",
          "Updated risk assessments"
        ],
        status: "not_started",
        progress: 0
      }
    ],
    kpis: [
      {
        id: "KPI-RMS-001",
        name: "Risk Assessment Coverage",
        definition: "% of AI systems with current risk assessment",
        target: "100%",
        measurement: "(# AI systems assessed / # total AI systems) × 100",
        frequency: "Monthly",
        owner: "AI Risk Manager",
        status: "at_risk",
        currentValue: "72%"
      },
      {
        id: "KPI-RMS-002",
        name: "Risk Control Implementation",
        definition: "% of identified risks with implemented controls",
        target: "≥ 95%",
        measurement: "(# risks with controls / # identified risks) × 100",
        frequency: "Monthly",
        owner: "AI Risk Manager",
        status: "at_risk",
        currentValue: "68%"
      }
    ]
  },
  {
    id: "std-ai-003",
    standardId: "STD-AI-003",
    title: "AI Data Governance Standard",
    shortTitle: "Data Governance",
    description: "Ensures AI training, validation, and testing datasets meet quality, relevance, and representativeness standards.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "Chief Data Officer",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 10"],
    iso42001Clauses: ["Clause 7.5"],
    category: "data",
    applicability: "All AI systems, mandatory for high-risk",
    status: "draft",
    progress: 55,
    controls: [
      {
        id: "DGV-001",
        name: "Data Quality Management",
        type: "preventive",
        frequency: "Per dataset, ongoing",
        riskLevel: "high",
        objective: "Ensure training data meets quality standards",
        requirements: [
          "Define data quality requirements (accuracy, completeness, consistency)",
          "Implement data quality validation checks",
          "Document data quality metrics",
          "Remediate data quality issues before training"
        ],
        evidence: [
          "Data quality requirements documentation",
          "Data quality assessment reports",
          "Quality remediation records"
        ],
        status: "in_progress",
        progress: 60
      },
      {
        id: "DGV-002",
        name: "Bias Detection and Mitigation",
        type: "preventive",
        frequency: "Per dataset, before deployment",
        riskLevel: "high",
        objective: "Identify and mitigate bias in training data",
        requirements: [
          "Examine datasets for statistical bias",
          "Test for demographic parity across protected groups",
          "Implement bias mitigation techniques",
          "Document bias assessment results"
        ],
        evidence: [
          "Bias assessment reports",
          "Demographic analysis results",
          "Mitigation implementation records"
        ],
        status: "in_progress",
        progress: 45
      },
      {
        id: "DGV-003",
        name: "Data Lineage and Provenance",
        type: "detective",
        frequency: "Per dataset",
        riskLevel: "medium",
        objective: "Maintain complete data lineage documentation",
        requirements: [
          "Document data sources and collection methods",
          "Track data transformations and processing steps",
          "Maintain data versioning",
          "Enable data traceability for audits"
        ],
        evidence: [
          "Data lineage documentation",
          "Data processing records",
          "Version control logs"
        ],
        status: "in_progress",
        progress: 70
      }
    ],
    kpis: [
      {
        id: "KPI-DGV-001",
        name: "Data Quality Score",
        definition: "Average data quality score across all training datasets",
        target: "≥ 90%",
        measurement: "Weighted average of quality dimensions",
        frequency: "Quarterly",
        owner: "Chief Data Officer",
        status: "on_track",
        currentValue: "92%"
      },
      {
        id: "KPI-DGV-002",
        name: "Bias Assessment Coverage",
        definition: "% of datasets with completed bias assessment",
        target: "100%",
        measurement: "(# datasets assessed / # total datasets) × 100",
        frequency: "Monthly",
        owner: "Chief Data Officer",
        status: "at_risk",
        currentValue: "78%"
      }
    ]
  },
  {
    id: "std-ai-004",
    standardId: "STD-AI-004",
    title: "AI Technical Documentation Standard",
    shortTitle: "Technical Documentation",
    description: "Create and maintain comprehensive technical documentation per EU AI Act Annex IV.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "CTO",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 11", "Annex IV"],
    iso42001Clauses: ["Clause 7.5"],
    category: "documentation",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 40,
    controls: [
      {
        id: "TDC-001",
        name: "System Design Documentation",
        type: "preventive",
        frequency: "Per AI system, maintained continuously",
        riskLevel: "high",
        objective: "Document AI system design and architecture comprehensively",
        requirements: [
          "Document system architecture and components",
          "Describe algorithm design and model architecture",
          "Document hardware and software requirements",
          "Maintain design change history"
        ],
        evidence: [
          "System architecture diagrams",
          "Algorithm documentation",
          "Component specifications"
        ],
        status: "in_progress",
        progress: 45
      },
      {
        id: "TDC-002",
        name: "Training and Validation Documentation",
        type: "preventive",
        frequency: "Per training cycle",
        riskLevel: "high",
        objective: "Document training methodology and validation approach",
        requirements: [
          "Document training data characteristics",
          "Describe training methodology and hyperparameters",
          "Document validation approach and results",
          "Record model performance metrics"
        ],
        evidence: [
          "Training data documentation",
          "Training logs and configurations",
          "Validation results"
        ],
        status: "in_progress",
        progress: 35
      }
    ],
    kpis: [
      {
        id: "KPI-TDC-001",
        name: "Documentation Completeness",
        definition: "% of high-risk systems with complete Annex IV documentation",
        target: "100%",
        measurement: "(# systems with complete docs / # high-risk systems) × 100",
        frequency: "Monthly",
        owner: "CTO",
        status: "at_risk",
        currentValue: "65%"
      }
    ]
  },
  {
    id: "std-ai-005",
    standardId: "STD-AI-005",
    title: "AI Logging and Record Keeping Standard",
    shortTitle: "Logging & Records",
    description: "Implement automated logging of AI system operations with 10-year retention.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "IT Security",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 12"],
    iso42001Clauses: ["Clause 7.5", "Clause 9.1"],
    category: "documentation",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 50,
    controls: [
      {
        id: "LOG-001",
        name: "Automated Event Logging",
        type: "detective",
        frequency: "Continuous",
        riskLevel: "high",
        objective: "Capture all AI system operations automatically",
        requirements: [
          "Log all system inputs and outputs",
          "Capture decision confidence levels",
          "Record timestamps with millisecond precision",
          "Implement tamper-proof log storage"
        ],
        evidence: [
          "Log configuration documentation",
          "Sample log extracts",
          "Tamper-proof verification"
        ],
        status: "in_progress",
        progress: 55
      },
      {
        id: "LOG-002",
        name: "Log Retention and Access",
        type: "detective",
        frequency: "Continuous",
        riskLevel: "medium",
        objective: "Maintain logs for 10 years with controlled access",
        requirements: [
          "Implement 10-year retention policy",
          "Enable log searchability and analysis",
          "Control access with role-based permissions",
          "Provide logs to authorities within 5 business days"
        ],
        evidence: [
          "Retention policy configuration",
          "Access control documentation",
          "Authority request response records"
        ],
        status: "in_progress",
        progress: 45
      }
    ],
    kpis: [
      {
        id: "KPI-LOG-001",
        name: "Logging Coverage",
        definition: "% of high-risk AI systems with compliant logging",
        target: "100%",
        measurement: "(# systems with logging / # high-risk systems) × 100",
        frequency: "Monthly",
        owner: "IT Security",
        status: "at_risk",
        currentValue: "70%"
      }
    ]
  },
  {
    id: "std-ai-006",
    standardId: "STD-AI-006",
    title: "AI Transparency Standard",
    shortTitle: "Transparency",
    description: "Provide clear, comprehensive information to deployers and users about AI system capabilities and limitations.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "Product Directors",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 13", "Article 50"],
    iso42001Clauses: ["Clause 4.2", "Clause 7.4"],
    category: "transparency",
    applicability: "High-risk AI systems, systems with transparency obligations",
    status: "draft",
    progress: 60,
    controls: [
      {
        id: "TRN-001",
        name: "Instructions for Use",
        type: "preventive",
        frequency: "Before deployment, on updates",
        riskLevel: "high",
        objective: "Provide comprehensive usage instructions to deployers",
        requirements: [
          "Create clear instructions for use",
          "Document intended purpose and limitations",
          "Describe human oversight requirements",
          "Provide contact information for queries"
        ],
        evidence: [
          "Instructions for use document",
          "User guide and documentation",
          "Help desk records"
        ],
        status: "in_progress",
        progress: 65
      },
      {
        id: "TRN-002",
        name: "AI Disclosure Notices",
        type: "preventive",
        frequency: "At interaction point",
        riskLevel: "medium",
        objective: "Inform users when interacting with AI systems",
        requirements: [
          "Implement clear AI disclosure at interaction points",
          "Notify users of deepfake/synthetic content",
          "Label AI-generated content appropriately",
          "Provide opt-out where applicable"
        ],
        evidence: [
          "Disclosure notice screenshots",
          "Implementation documentation",
          "User acknowledgment records"
        ],
        status: "in_progress",
        progress: 55
      }
    ],
    kpis: [
      {
        id: "KPI-TRN-001",
        name: "Transparency Compliance",
        definition: "% of systems with complete transparency measures",
        target: "100%",
        measurement: "(# compliant systems / # applicable systems) × 100",
        frequency: "Monthly",
        owner: "Product Directors",
        status: "on_track",
        currentValue: "88%"
      }
    ]
  },
  {
    id: "std-ai-007",
    standardId: "STD-AI-007",
    title: "AI Human Oversight Standard",
    shortTitle: "Human Oversight",
    description: "Design AI systems to enable effective human oversight and intervention.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "AI Risk Manager",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 14"],
    iso42001Clauses: ["Clause 8.2"],
    category: "oversight",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 45,
    controls: [
      {
        id: "HOV-001",
        name: "Human-in-the-Loop Design",
        type: "preventive",
        frequency: "Design phase, ongoing",
        riskLevel: "high",
        objective: "Enable human review before AI decisions are executed",
        requirements: [
          "Implement human review for high-stakes decisions",
          "Design clear human override mechanisms",
          "Provide sufficient information for human judgment",
          "Document human oversight procedures"
        ],
        evidence: [
          "System design documentation",
          "Override mechanism tests",
          "Human oversight procedures"
        ],
        status: "in_progress",
        progress: 50
      },
      {
        id: "HOV-002",
        name: "Oversight Personnel Training",
        type: "preventive",
        frequency: "Initial and ongoing",
        riskLevel: "medium",
        objective: "Ensure oversight personnel are competent",
        requirements: [
          "Train oversight personnel on AI capabilities and limitations",
          "Train on recognizing AI errors and biases",
          "Assess competence through practical exercises",
          "Maintain training records"
        ],
        evidence: [
          "Training materials",
          "Competence assessment results",
          "Training completion records"
        ],
        status: "in_progress",
        progress: 40
      }
    ],
    kpis: [
      {
        id: "KPI-HOV-001",
        name: "Human Oversight Implementation",
        definition: "% of high-risk systems with compliant oversight mechanisms",
        target: "100%",
        measurement: "(# systems with oversight / # high-risk systems) × 100",
        frequency: "Monthly",
        owner: "AI Risk Manager",
        status: "at_risk",
        currentValue: "62%"
      }
    ]
  },
  {
    id: "std-ai-008",
    standardId: "STD-AI-008",
    title: "AI Accuracy, Robustness & Security Standard",
    shortTitle: "Accuracy & Security",
    description: "Ensure AI systems achieve appropriate levels of accuracy, robustness, and cybersecurity.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "CTO",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 15"],
    iso42001Clauses: ["Clause 8.2"],
    category: "security",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 40,
    controls: [
      {
        id: "ARS-001",
        name: "Accuracy Testing and Validation",
        type: "preventive",
        frequency: "Before deployment, after changes",
        riskLevel: "high",
        objective: "Validate AI system accuracy meets requirements",
        requirements: [
          "Define accuracy requirements and metrics",
          "Conduct comprehensive accuracy testing",
          "Test across representative scenarios",
          "Document accuracy limitations"
        ],
        evidence: [
          "Accuracy requirements document",
          "Test results and reports",
          "Limitation documentation"
        ],
        status: "in_progress",
        progress: 45
      },
      {
        id: "ARS-002",
        name: "Robustness and Adversarial Testing",
        type: "preventive",
        frequency: "Before deployment, periodically",
        riskLevel: "high",
        objective: "Ensure resilience against adversarial inputs",
        requirements: [
          "Conduct adversarial testing",
          "Test for input perturbation resilience",
          "Validate performance under edge cases",
          "Implement adversarial defenses"
        ],
        evidence: [
          "Adversarial test results",
          "Robustness metrics",
          "Defense implementation records"
        ],
        status: "in_progress",
        progress: 35
      }
    ],
    kpis: [
      {
        id: "KPI-ARS-001",
        name: "Accuracy Compliance",
        definition: "% of systems meeting accuracy requirements",
        target: "100%",
        measurement: "(# systems meeting accuracy / # total systems) × 100",
        frequency: "Quarterly",
        owner: "CTO",
        status: "on_track",
        currentValue: "94%"
      }
    ]
  },
  {
    id: "std-ai-009",
    standardId: "STD-AI-009",
    title: "AI Quality Management Standard",
    shortTitle: "Quality Management",
    description: "Establish and maintain a Quality Management System (QMS) for AI systems.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "Quality Director",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 17"],
    iso42001Clauses: ["Clause 4-10"],
    category: "quality",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 50,
    controls: [
      {
        id: "QMS-001",
        name: "Quality Policy and Objectives",
        type: "preventive",
        frequency: "Annual review",
        riskLevel: "medium",
        objective: "Define and maintain quality policies for AI systems",
        requirements: [
          "Define AI quality policies aligned with organizational objectives",
          "Set measurable quality objectives",
          "Communicate policies to all relevant staff",
          "Review policies annually"
        ],
        evidence: [
          "Quality policy document",
          "Quality objectives and metrics",
          "Communication records"
        ],
        status: "compliant",
        progress: 100
      },
      {
        id: "QMS-002",
        name: "Internal Quality Audits",
        type: "detective",
        frequency: "Annually",
        riskLevel: "medium",
        objective: "Conduct regular internal quality audits",
        requirements: [
          "Develop annual audit schedule",
          "Conduct audits by qualified personnel",
          "Document findings and non-conformities",
          "Track corrective action completion"
        ],
        evidence: [
          "Audit schedule",
          "Audit reports",
          "Corrective action records"
        ],
        status: "in_progress",
        progress: 30
      }
    ],
    kpis: [
      {
        id: "KPI-QMS-001",
        name: "QMS Maturity",
        definition: "QMS maturity level assessment score",
        target: "Level 4 (Managed)",
        measurement: "Annual maturity assessment",
        frequency: "Annually",
        owner: "Quality Director",
        status: "on_track",
        currentValue: "Level 3"
      }
    ]
  },
  {
    id: "std-ai-010",
    standardId: "STD-AI-010",
    title: "AI Conformity Assessment Standard",
    shortTitle: "Conformity Assessment",
    description: "Undergo conformity assessment before placing high-risk AI systems on the market.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "Legal",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Articles 43-48", "Annex VI", "Annex VII"],
    iso42001Clauses: ["Clause 9.1", "Clause 9.2"],
    category: "conformity",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 25,
    controls: [
      {
        id: "CON-001",
        name: "Conformity Assessment Procedure Selection",
        type: "preventive",
        frequency: "Per AI system",
        riskLevel: "high",
        objective: "Select appropriate conformity assessment procedure",
        requirements: [
          "Determine if internal assessment (Annex VI) or notified body (Annex VII) required",
          "Engage notified body where required",
          "Document procedure selection rationale"
        ],
        evidence: [
          "Procedure selection documentation",
          "Notified body engagement records"
        ],
        status: "in_progress",
        progress: 30
      },
      {
        id: "CON-002",
        name: "EU Declaration of Conformity",
        type: "preventive",
        frequency: "Before market placement",
        riskLevel: "critical",
        objective: "Issue EU Declaration of Conformity and affix CE marking",
        requirements: [
          "Complete all conformity assessment activities",
          "Address all non-conformities",
          "Issue EU Declaration of Conformity",
          "Affix CE marking to AI system"
        ],
        evidence: [
          "EU Declaration of Conformity document",
          "CE marking evidence",
          "Non-conformity closure records"
        ],
        status: "not_started",
        progress: 0
      }
    ],
    kpis: [
      {
        id: "KPI-CON-001",
        name: "Conformity Assessment Completion",
        definition: "% of high-risk systems with completed conformity assessment",
        target: "100%",
        measurement: "(# assessed systems / # high-risk systems) × 100",
        frequency: "Quarterly",
        owner: "Legal",
        status: "off_track",
        currentValue: "40%"
      }
    ]
  },
  {
    id: "std-ai-011",
    standardId: "STD-AI-011",
    title: "AI Registration Standard",
    shortTitle: "Registration",
    description: "Register high-risk AI systems in EU database before market placement.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "Legal",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 49"],
    iso42001Clauses: [],
    category: "registration",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 20,
    controls: [
      {
        id: "REG-001",
        name: "EU Database Registration",
        type: "preventive",
        frequency: "Before market placement",
        riskLevel: "high",
        objective: "Register AI system in EU database",
        requirements: [
          "Complete registration in EU AI database",
          "Provide all required information fields",
          "Update registration for substantial modifications",
          "Maintain registration records"
        ],
        evidence: [
          "EU database registration confirmation",
          "Registration information submitted",
          "Update records"
        ],
        status: "not_started",
        progress: 0
      }
    ],
    kpis: [
      {
        id: "KPI-REG-001",
        name: "Registration Compliance",
        definition: "% of high-risk systems registered in EU database",
        target: "100%",
        measurement: "(# registered systems / # high-risk systems) × 100",
        frequency: "Quarterly",
        owner: "Legal",
        status: "off_track",
        currentValue: "25%"
      }
    ]
  },
  {
    id: "std-ai-012",
    standardId: "STD-AI-012",
    title: "AI Post-Market Monitoring Standard",
    shortTitle: "Post-Market Monitoring",
    description: "Establish and maintain post-market monitoring system for AI systems in operation.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "Product Directors",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 72"],
    iso42001Clauses: ["Clause 9.1", "Clause 10.2"],
    category: "monitoring",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 35,
    controls: [
      {
        id: "PMM-001",
        name: "Performance Monitoring System",
        type: "detective",
        frequency: "Continuous",
        riskLevel: "medium",
        objective: "Monitor AI system performance in production",
        requirements: [
          "Collect and analyze performance data",
          "Monitor for accuracy degradation",
          "Track user feedback and complaints",
          "Generate performance reports"
        ],
        evidence: [
          "Monitoring dashboards",
          "Performance reports",
          "User feedback records"
        ],
        status: "in_progress",
        progress: 45
      },
      {
        id: "PMM-002",
        name: "Periodic Review and Update",
        type: "detective",
        frequency: "Quarterly",
        riskLevel: "medium",
        objective: "Conduct periodic reviews and implement improvements",
        requirements: [
          "Conduct quarterly performance reviews",
          "Identify improvement opportunities",
          "Implement corrective actions",
          "Document review outcomes"
        ],
        evidence: [
          "Review meeting minutes",
          "Improvement records",
          "Corrective action documentation"
        ],
        status: "in_progress",
        progress: 25
      }
    ],
    kpis: [
      {
        id: "KPI-PMM-001",
        name: "Monitoring Coverage",
        definition: "% of deployed high-risk systems with active monitoring",
        target: "100%",
        measurement: "(# monitored systems / # deployed high-risk systems) × 100",
        frequency: "Monthly",
        owner: "Product Directors",
        status: "at_risk",
        currentValue: "75%"
      }
    ]
  },
  {
    id: "std-ai-013",
    standardId: "STD-AI-013",
    title: "AI Incident Management Standard",
    shortTitle: "Incident Management",
    description: "Report serious incidents and malfunctions to competent authorities.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "AI Risk Manager",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 73"],
    iso42001Clauses: ["Clause 10.1"],
    category: "incident",
    applicability: "High-risk AI systems",
    status: "draft",
    progress: 55,
    controls: [
      {
        id: "INC-001",
        name: "Incident Detection and Classification",
        type: "detective",
        frequency: "Continuous",
        riskLevel: "high",
        objective: "Detect and classify AI incidents promptly",
        requirements: [
          "Define serious incident criteria per Article 73",
          "Implement incident detection mechanisms",
          "Classify incidents by severity",
          "Log all incidents in Incident Register"
        ],
        evidence: [
          "Incident criteria documentation",
          "Incident Register",
          "Detection mechanism documentation"
        ],
        status: "in_progress",
        progress: 70
      },
      {
        id: "INC-002",
        name: "Authority Reporting",
        type: "corrective",
        frequency: "Within 15 days of serious incident",
        riskLevel: "critical",
        objective: "Report serious incidents to competent authorities",
        requirements: [
          "Report serious incidents within 15 days",
          "Use prescribed reporting format",
          "Provide investigation updates",
          "Document all authority communications"
        ],
        evidence: [
          "Authority reports submitted",
          "Communication records",
          "Timeline documentation"
        ],
        status: "in_progress",
        progress: 40
      }
    ],
    kpis: [
      {
        id: "KPI-INC-001",
        name: "Incident Reporting Timeliness",
        definition: "% of serious incidents reported within 15 days",
        target: "100%",
        measurement: "(# incidents reported on time / # serious incidents) × 100",
        frequency: "Per incident",
        owner: "AI Risk Manager",
        status: "on_track",
        currentValue: "100%"
      }
    ]
  },
  {
    id: "std-ai-014",
    standardId: "STD-AI-014",
    title: "AI Literacy and Training Standard",
    shortTitle: "AI Literacy",
    description: "Ensure all staff dealing with AI systems have appropriate AI literacy.",
    version: "1.0",
    effectiveDate: "2025-08-01",
    nextReviewDate: "2026-08-01",
    owner: "HR Director",
    parentPolicy: "POL-AI-001",
    euAiActArticles: ["Article 4"],
    iso42001Clauses: ["Clause 7.2"],
    category: "training",
    applicability: "All staff involved with AI systems",
    status: "draft",
    progress: 65,
    controls: [
      {
        id: "LIT-001",
        name: "AI Literacy Training Program",
        type: "preventive",
        frequency: "At onboarding, annually",
        riskLevel: "medium",
        objective: "Ensure all relevant staff have AI literacy",
        requirements: [
          "Develop role-based AI training curriculum",
          "Deliver AI Act compliance training",
          "Train on AI risks and limitations",
          "Assess training effectiveness"
        ],
        evidence: [
          "Training curriculum",
          "Training completion records",
          "Assessment results"
        ],
        status: "in_progress",
        progress: 75
      },
      {
        id: "LIT-002",
        name: "Training Records and Compliance",
        type: "detective",
        frequency: "Continuous tracking",
        riskLevel: "low",
        objective: "Maintain training records and track compliance",
        requirements: [
          "Maintain training records for all staff",
          "Track training completion rates",
          "Identify and address training gaps",
          "Report compliance to AI Governance Committee"
        ],
        evidence: [
          "Training records system",
          "Completion rate reports",
          "Gap analysis documentation"
        ],
        status: "in_progress",
        progress: 55
      }
    ],
    kpis: [
      {
        id: "KPI-LIT-001",
        name: "Training Completion Rate",
        definition: "% of relevant staff with completed AI literacy training",
        target: "100%",
        measurement: "(# staff trained / # relevant staff) × 100",
        frequency: "Quarterly",
        owner: "HR Director",
        status: "at_risk",
        currentValue: "82%"
      }
    ]
  }
]

// ============================================
// Policy Data (POL-AI-001)
// ============================================

export const aiPolicy: Policy = {
  id: "pol-ai-001",
  policyNumber: "POL-AI-001",
  title: "Artificial Intelligence Policy",
  version: "1.0",
  effectiveDate: "2025-08-01",
  nextReviewDate: "2026-08-01",
  owner: "Jane Doe, Chief Strategy & Risk Officer (CSRO)",
  sponsor: "John Smith, Chief Executive Officer (CEO)",
  approvedBy: "Board of Directors",
  status: "draft",
  purpose: "This policy establishes the organization's overarching framework for the responsible development, deployment, and operation of Artificial Intelligence (AI) systems in compliance with the EU AI Act and aligned with the organization's values, risk appetite, and strategic objectives.",
  scope: [
    "All AI systems developed, deployed, or operated by the organization",
    "All employees, contractors, third parties, and business partners involved in AI activities",
    "All business units, functions, and geographic locations",
    "Both product AI systems (sold to customers) and internal AI systems"
  ],
  policyStatement: [
    "Compliance: Ensuring full compliance with the EU AI Act and all applicable AI regulations",
    "Responsible AI: Developing and deploying AI systems that are safe, transparent, fair, accountable, and respect human rights",
    "Risk Management: Implementing comprehensive risk management throughout the AI system lifecycle",
    "Human Oversight: Maintaining appropriate human oversight of AI systems, particularly high-risk systems",
    "Transparency: Being transparent about AI use with customers, employees, and stakeholders",
    "Continuous Improvement: Continuously monitoring, evaluating, and improving AI systems",
    "Ethical Use: Using AI in alignment with organizational values and ethical principles"
  ],
  requirements: [
    {
      id: "req-5.1",
      title: "AI System Classification",
      description: "All AI systems must be classified according to EU AI Act risk categories",
      supportingStandard: "STD-AI-001",
      keyActivities: [
        "Assess against prohibited practices (Article 5)",
        "Assess against Annex III high-risk categories",
        "Determine transparency obligations",
        "Document classification decision",
        "Obtain legal review and approval"
      ],
      applicability: "All AI systems",
      euAiActArticle: "Articles 5, 6"
    },
    {
      id: "req-5.2",
      title: "AI Risk Management",
      description: "Establish and maintain a comprehensive AI risk management system throughout the AI system lifecycle",
      supportingStandard: "STD-AI-002",
      keyActivities: [
        "Identify AI-related risks (bias, safety, security, privacy, etc.)",
        "Assess risk likelihood and impact",
        "Implement risk mitigation measures",
        "Monitor risks continuously",
        "Maintain AI risk register"
      ],
      applicability: "All AI systems, mandatory for high-risk systems",
      euAiActArticle: "Article 9"
    },
    {
      id: "req-5.3",
      title: "Data Governance",
      description: "Ensure AI training, validation, and testing datasets meet quality, relevance, and representativeness standards",
      supportingStandard: "STD-AI-003",
      keyActivities: [
        "Define data quality requirements",
        "Examine datasets for bias",
        "Implement bias mitigation measures",
        "Document data lineage",
        "Maintain data governance records"
      ],
      applicability: "All AI systems, mandatory for high-risk systems",
      euAiActArticle: "Article 10"
    },
    {
      id: "req-5.4",
      title: "Technical Documentation",
      description: "Create and maintain comprehensive technical documentation per EU AI Act Annex IV",
      supportingStandard: "STD-AI-004",
      keyActivities: [
        "Document system design and architecture",
        "Document training methodology and data",
        "Document testing and validation",
        "Document risk management activities",
        "Maintain version control"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 11, Annex IV"
    },
    {
      id: "req-5.5",
      title: "Record Keeping and Logging",
      description: "Implement automated logging of AI system operations with 10-year retention",
      supportingStandard: "STD-AI-005",
      keyActivities: [
        "Log all AI system operations",
        "Capture input data, output decisions, confidence levels",
        "Implement tamper-proof logging",
        "Retain logs for 10 years",
        "Enable log searchability and analysis"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 12"
    },
    {
      id: "req-5.6",
      title: "Transparency and Information Provision",
      description: "Provide clear, comprehensive information to deployers and users about AI system capabilities and limitations",
      supportingStandard: "STD-AI-006",
      keyActivities: [
        "Create instructions for use",
        "Document system capabilities and limitations",
        "Implement explainability features",
        "Provide transparency notices",
        "Maintain user documentation"
      ],
      applicability: "High-risk AI systems, systems with transparency obligations",
      euAiActArticle: "Article 13, Article 50"
    },
    {
      id: "req-5.7",
      title: "Human Oversight",
      description: "Design AI systems to enable effective human oversight and intervention",
      supportingStandard: "STD-AI-007",
      keyActivities: [
        "Define human oversight measures",
        "Implement human-in-the-loop or human-on-the-loop controls",
        "Train oversight personnel",
        "Document oversight activities",
        "Monitor oversight effectiveness"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 14"
    },
    {
      id: "req-5.8",
      title: "Accuracy, Robustness, and Cybersecurity",
      description: "Ensure AI systems achieve appropriate levels of accuracy, robustness, and cybersecurity",
      supportingStandard: "STD-AI-008",
      keyActivities: [
        "Define accuracy requirements and metrics",
        "Test for robustness and resilience",
        "Implement cybersecurity controls",
        "Conduct adversarial testing",
        "Monitor performance continuously"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 15"
    },
    {
      id: "req-5.9",
      title: "Quality Management System",
      description: "Establish and maintain a Quality Management System (QMS) for AI systems",
      supportingStandard: "STD-AI-009",
      keyActivities: [
        "Define quality policies and procedures",
        "Implement quality controls throughout lifecycle",
        "Conduct internal audits",
        "Manage non-conformities and corrective actions",
        "Maintain QMS documentation"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 17"
    },
    {
      id: "req-5.10",
      title: "Conformity Assessment",
      description: "Undergo conformity assessment before placing high-risk AI systems on the market",
      supportingStandard: "STD-AI-010",
      keyActivities: [
        "Select conformity assessment procedure (Annex VI or VII)",
        "Conduct internal assessment or engage notified body",
        "Address non-conformities",
        "Issue EU Declaration of Conformity",
        "Affix CE marking"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Articles 43-48"
    },
    {
      id: "req-5.11",
      title: "Registration and Notification",
      description: "Register high-risk AI systems in EU database before market placement",
      supportingStandard: "STD-AI-011",
      keyActivities: [
        "Register in EU database (Article 49)",
        "Provide required information",
        "Update registration for substantial modifications",
        "Maintain registration records"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 49"
    },
    {
      id: "req-5.12",
      title: "Post-Market Monitoring",
      description: "Establish and maintain post-market monitoring system for AI systems in operation",
      supportingStandard: "STD-AI-012",
      keyActivities: [
        "Collect and analyze performance data",
        "Monitor for issues and incidents",
        "Conduct periodic reviews",
        "Implement corrective actions",
        "Report monitoring results"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 72"
    },
    {
      id: "req-5.13",
      title: "Incident Management",
      description: "Report serious incidents and malfunctions to competent authorities",
      supportingStandard: "STD-AI-013",
      keyActivities: [
        "Define serious incidents",
        "Establish incident reporting process",
        "Report to authorities within 15 days",
        "Investigate root causes",
        "Implement corrective actions"
      ],
      applicability: "High-risk AI systems",
      euAiActArticle: "Article 73"
    },
    {
      id: "req-5.14",
      title: "AI Literacy",
      description: "Ensure all staff dealing with AI systems have appropriate AI literacy",
      supportingStandard: "STD-AI-014",
      keyActivities: [
        "Provide AI Act compliance training",
        "Train on AI risks and limitations",
        "Train on human oversight responsibilities",
        "Assess training effectiveness",
        "Maintain training records"
      ],
      applicability: "All staff involved with AI systems",
      euAiActArticle: "Article 4"
    }
  ],
  prohibitedPractices: [
    "Subliminal manipulation - AI systems deploying subliminal techniques to materially distort behavior",
    "Exploitation of vulnerabilities - AI systems exploiting vulnerabilities of specific groups",
    "Social scoring by public authorities - AI systems for social scoring by or on behalf of public authorities",
    "Real-time remote biometric identification in public spaces - For law enforcement (with limited exceptions)",
    "Biometric categorization using sensitive characteristics - Inferring race, political opinions, trade union membership, religious beliefs, sex life, or sexual orientation",
    "Emotion recognition in workplace and education - Except for medical or safety reasons",
    "Scraping of facial images - Untargeted scraping from internet or CCTV",
    "Inference of sensitive characteristics - From biometric data (except for law enforcement with authorization)"
  ],
  governanceStructure: {
    committee: {
      name: "AI Governance Committee",
      composition: [
        "Chief Strategy & Risk Officer (CSRO) - Chair",
        "Chief Technology Officer (CTO)",
        "Chief Data Officer (CDO)",
        "Chief Legal Officer (CLO)",
        "Product Directors",
        "AI Act Program Manager"
      ],
      responsibilities: [
        "Owns this policy and all supporting standards",
        "Approves AI strategy and roadmap",
        "Reviews and approves high-risk AI systems",
        "Monitors AI Act compliance",
        "Escalates critical issues to Executive Committee / Board"
      ],
      meetingCadence: "Monthly"
    },
    programManager: {
      title: "AI Act Program Manager",
      responsibilities: [
        "Implements this policy and supporting standards",
        "Coordinates AI Act compliance activities",
        "Maintains AI system inventory",
        "Reports compliance status to AI Governance Committee",
        "Manages AI Act compliance program"
      ]
    }
  },
  kpis: [
    {
      id: "KPI-POL-001",
      name: "AI System Inventory Completeness",
      definition: "% of AI systems registered in inventory",
      target: "100%",
      measurement: "(# AI systems registered / # total AI systems) × 100",
      frequency: "Monthly",
      owner: "AI Act Program Manager",
      status: "at_risk",
      currentValue: "85%"
    },
    {
      id: "KPI-POL-002",
      name: "Risk Classification Completion",
      definition: "% of AI systems with risk classification",
      target: "100%",
      measurement: "(# AI systems classified / # total AI systems) × 100",
      frequency: "Monthly",
      owner: "AI Act Program Manager",
      status: "at_risk",
      currentValue: "78%"
    },
    {
      id: "KPI-POL-003",
      name: "High-Risk System Compliance",
      definition: "% of high-risk systems meeting all requirements",
      target: "100%",
      measurement: "(# compliant high-risk systems / # high-risk systems) × 100",
      frequency: "Monthly",
      owner: "AI Act Program Manager",
      status: "off_track",
      currentValue: "62%"
    },
    {
      id: "KPI-POL-004",
      name: "Prohibited AI Practices",
      definition: "Number of prohibited practices identified",
      target: "0",
      measurement: "Count of prohibited practices",
      frequency: "Monthly",
      owner: "AI Governance Committee",
      status: "on_track",
      currentValue: "0"
    },
    {
      id: "KPI-POL-005",
      name: "AI Literacy Training Completion",
      definition: "% of relevant staff with completed AI training",
      target: "100%",
      measurement: "(# staff trained / # relevant staff) × 100",
      frequency: "Quarterly",
      owner: "HR Director",
      status: "at_risk",
      currentValue: "82%"
    }
  ]
}

// ============================================
// Helper Functions
// ============================================

export function getStandardById(id: string): Standard | undefined {
  return standards.find(s => s.id === id || s.standardId === id)
}

// Note: For full control lists, use getStandardById from @/lib/actions/standards
// which merges controls from STANDARD_CONTROLS

export function getStandardsByCategory(category: Standard["category"]): Standard[] {
  return standards.filter(s => s.category === category)
}

export function getControlById(standardId: string, controlId: string): Control | undefined {
  const standard = getStandardById(standardId)
  return standard?.controls.find(c => c.id === controlId)
}

export function calculateOverallProgress(): number {
  const totalProgress = standards.reduce((sum, s) => sum + s.progress, 0)
  return Math.round(totalProgress / standards.length)
}

export function getStandardsWithLowProgress(threshold: number = 50): Standard[] {
  return standards.filter(s => s.progress < threshold)
}

export function getKPIsAtRisk(): KPI[] {
  const allKpis: KPI[] = []
  standards.forEach(s => {
    s.kpis.filter(k => k.status === "at_risk" || k.status === "off_track").forEach(k => allKpis.push(k))
  })
  return allKpis
}

export function getStandardStats() {
  return {
    total: standards.length,
    approved: standards.filter(s => s.status === "approved").length,
    inReview: standards.filter(s => s.status === "in_review").length,
    draft: standards.filter(s => s.status === "draft").length,
    overallProgress: calculateOverallProgress()
  }
}

export function getControlStats() {
  let total = 0
  let compliant = 0
  let inProgress = 0
  let notStarted = 0

  standards.forEach(s => {
    s.controls.forEach(c => {
      total++
      if (c.status === "compliant") compliant++
      else if (c.status === "in_progress") inProgress++
      else if (c.status === "not_started") notStarted++
    })
  })

  return { total, compliant, inProgress, notStarted }
}

// Category icons and colors mapping
export const categoryConfig: Record<Standard["category"], { icon: string; color: string; label: string }> = {
  classification: { icon: "FileSearch", color: "primary", label: "Classification" },
  risk: { icon: "AlertTriangle", color: "destructive", label: "Risk Management" },
  data: { icon: "Database", color: "accent", label: "Data Governance" },
  documentation: { icon: "FileText", color: "chart-3", label: "Documentation" },
  transparency: { icon: "Eye", color: "chart-5", label: "Transparency" },
  oversight: { icon: "Users", color: "primary", label: "Human Oversight" },
  security: { icon: "Shield", color: "destructive", label: "Security" },
  quality: { icon: "CheckSquare", color: "accent", label: "Quality" },
  conformity: { icon: "Award", color: "chart-3", label: "Conformity" },
  registration: { icon: "ClipboardList", color: "chart-5", label: "Registration" },
  monitoring: { icon: "Activity", color: "primary", label: "Monitoring" },
  incident: { icon: "AlertCircle", color: "destructive", label: "Incidents" },
  training: { icon: "GraduationCap", color: "accent", label: "Training" }
}
