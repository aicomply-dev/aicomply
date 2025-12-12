/**
 * EU AI Act Role-Based Requirements
 *
 * Validated against Regulation (EU) 2024/1689 (EU AI Act)
 *
 * This file defines requirements applicable to each operator role under the EU AI Act.
 */

export type OperatorRole =
  | "provider"
  | "deployer"
  | "importer"
  | "distributor"
  | "gpai_provider"
  | "authorized_representative";

export type RiskLevel =
  | "prohibited"
  | "high"
  | "limited"
  | "minimal";

export type RequirementStatus =
  | "not_started"
  | "in_progress"
  | "implemented"
  | "verified";

export interface Requirement {
  id: string;
  article: string;
  category: string;
  requirement: string;
  description?: string;
  mandatory: boolean;
  items?: string[];
  controls: string[];
  evidence: string[];
}

export interface Control {
  id: string;
  name: string;
  description?: string;
  owner: string;
  article: string;
  mandatory?: boolean;
  implementationSteps?: string[];
  successCriteria?: string[];
  evidenceRequired?: string[];
}

export interface RoleRequirements {
  title: string;
  description: string;
  articles: string[];
  riskLevels: RiskLevel[];
  requirements: Requirement[];
  controls: Control[];
  obligationsCount: number;
  controlsCount: number;
}

// =============================================================================
// HIGH-RISK AI SYSTEMS - PROVIDER OBLIGATIONS
// =============================================================================

export const PROVIDER_REQUIREMENTS: RoleRequirements = {
  title: "Provider Obligations (High-Risk AI)",
  description: "Requirements for providers of high-risk AI systems under EU AI Act Articles 9-21, 43, 72-73",
  articles: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "43", "72", "73"],
  riskLevels: ["high"],
  obligationsCount: 176,
  controlsCount: 48,
  requirements: [
    {
      id: "PROV-9-RMS",
      article: "Article 9",
      category: "Risk Management System",
      requirement: "Establish, implement, document and maintain continuous iterative risk management system",
      mandatory: true,
      items: [
        "Identify and analyze known and foreseeable risks to health, safety, fundamental rights",
        "Estimate and evaluate risks under intended use and foreseeable misuse",
        "Evaluate risks from post-market monitoring data",
        "Adopt appropriate risk management measures",
        "Test AI systems to identify risk management measures",
        "Consider impact on persons under 18 and vulnerable groups"
      ],
      controls: ["AI-CTRL-RISK-001", "AI-CTRL-RISK-002", "AI-CTRL-RISK-003", "AI-CTRL-RISK-004", "AI-CTRL-RISK-005"],
      evidence: ["Risk Management Policy", "Risk Register", "Risk Assessment Reports", "Test Reports"]
    },
    {
      id: "PROV-10-DATA",
      article: "Article 10",
      category: "Data and Data Governance",
      requirement: "Ensure training, validation and testing datasets meet quality standards",
      mandatory: true,
      items: [
        "Training/validation/testing datasets must be relevant, representative, error-free",
        "Examine training data for possible biases",
        "Implement data governance practices (design choices, collection, annotation, etc.)",
        "Assess data availability, quantity and suitability",
        "Detect, prevent and mitigate biases affecting health, safety, fundamental rights",
        "Identify data gaps and address them",
        "Ensure datasets have appropriate statistical properties"
      ],
      controls: ["AI-CTRL-DATA-001", "AI-CTRL-DATA-002", "AI-CTRL-DATA-003", "AI-CTRL-DATA-004"],
      evidence: ["Data Governance Policy", "Data Quality Reports", "Bias Assessment Reports", "Dataset Documentation"]
    },
    {
      id: "PROV-11-DOC",
      article: "Article 11",
      category: "Technical Documentation",
      requirement: "Draw up technical documentation per Annex IV before market placement",
      mandatory: true,
      items: [
        "Keep documentation up to date",
        "Ensure documentation demonstrates compliance with Section 2 requirements",
        "Provide clear and comprehensive information to authorities and notified bodies"
      ],
      controls: ["AI-CTRL-DOC-001", "AI-CTRL-DOC-002"],
      evidence: ["Technical Documentation Package (Annex IV)", "Documentation Update Log"]
    },
    {
      id: "PROV-12-LOG",
      article: "Article 12",
      category: "Record-Keeping (Logging)",
      requirement: "Enable automatic recording of events (logs) over system lifetime",
      mandatory: true,
      items: [
        "Log events for identifying risk situations",
        "Log events for facilitating post-market monitoring",
        "For biometric systems: log usage period, reference database, input data, verifier identity"
      ],
      controls: ["AI-CTRL-LOG-001", "AI-CTRL-LOG-002", "AI-CTRL-LOG-003"],
      evidence: ["Logging Architecture Document", "Log Retention Policy", "Sample Log Outputs"]
    },
    {
      id: "PROV-13-TRANS",
      article: "Article 13",
      category: "Transparency & Information to Deployers",
      requirement: "Design system with sufficient transparency for deployers to interpret output",
      mandatory: true,
      items: [
        "Provide instructions for use in digital format",
        "Include provider identity and contact details",
        "Document characteristics, capabilities, limitations, accuracy metrics",
        "Describe human oversight measures",
        "Specify computational/hardware resources needed",
        "Document expected lifetime and maintenance requirements"
      ],
      controls: ["AI-CTRL-TRANS-001", "AI-CTRL-TRANS-002"],
      evidence: ["Instructions for Use Document", "System Specifications", "Accuracy Metrics Report"]
    },
    {
      id: "PROV-14-OVERSIGHT",
      article: "Article 14",
      category: "Human Oversight",
      requirement: "Design system to be effectively overseen by natural persons during use",
      mandatory: true,
      items: [
        "Provide human-machine interface tools",
        "Enable humans to understand capacities and limitations",
        "Prevent automation bias",
        "Enable humans to interpret output correctly",
        "Enable humans to override or reverse system output",
        "Enable system interruption (stop button or similar)",
        "For biometric ID: require verification by at least 2 persons (with exceptions)"
      ],
      controls: ["AI-CTRL-HUMAN-001", "AI-CTRL-HUMAN-002", "AI-CTRL-HUMAN-003", "AI-CTRL-HUMAN-004"],
      evidence: ["Human Oversight Design Document", "Override Mechanism Documentation", "Training Materials"]
    },
    {
      id: "PROV-15-ACCURACY",
      article: "Article 15",
      category: "Accuracy, Robustness, Cybersecurity",
      requirement: "Achieve appropriate levels of accuracy, robustness and cybersecurity",
      mandatory: true,
      items: [
        "Achieve appropriate level of accuracy throughout lifecycle",
        "Achieve appropriate level of robustness throughout lifecycle",
        "Achieve appropriate level of cybersecurity throughout lifecycle",
        "Declare accuracy levels and metrics in instructions",
        "Be resilient to errors, faults, inconsistencies",
        "Implement technical redundancy solutions (backup, fail-safe)",
        "Address feedback loops in systems that continue learning",
        "Be resilient against unauthorized third-party attacks",
        "Prevent data poisoning, model poisoning, adversarial examples, confidentiality attacks"
      ],
      controls: ["AI-CTRL-ACC-001", "AI-CTRL-ROB-001", "AI-CTRL-SEC-001", "AI-CTRL-SEC-002"],
      evidence: ["Accuracy Test Reports", "Robustness Test Reports", "Security Assessment", "Penetration Test Results"]
    },
    {
      id: "PROV-16-OBLIG",
      article: "Article 16",
      category: "Provider Obligations",
      requirement: "Fulfill all provider obligations under Article 16",
      mandatory: true,
      items: [
        "Ensure system complies with Section 2 requirements (Articles 9-15)",
        "Indicate provider name and contact on system/packaging/documentation",
        "Have quality management system (Article 17)",
        "Keep documentation (Article 18)",
        "Keep automatically generated logs (Article 19)",
        "Conduct conformity assessment (Article 43)",
        "Draw up EU declaration of conformity (Article 47)",
        "Affix CE marking (Article 48)",
        "Register in EU database (Article 49(1))",
        "Take corrective actions when non-compliant (Article 20)",
        "Cooperate with authorities (Article 21)",
        "Ensure accessibility compliance (Directives 2016/2102 and 2019/882)"
      ],
      controls: ["AI-CTRL-CONF-001", "AI-CTRL-CONF-002", "AI-CTRL-CONF-003", "AI-CTRL-REG-001"],
      evidence: ["CE Marking Documentation", "EU Declaration of Conformity", "EU Database Registration"]
    },
    {
      id: "PROV-17-QMS",
      article: "Article 17",
      category: "Quality Management System",
      requirement: "Establish and maintain quality management system",
      mandatory: true,
      items: [
        "Document QMS in written policies, procedures, instructions",
        "Strategy for regulatory compliance and conformity assessment",
        "Design, design control, design verification techniques/procedures",
        "Development, quality control, quality assurance procedures",
        "Examination, test, validation procedures (before, during, after development)",
        "Technical specifications and standards application",
        "Data management systems (acquisition, collection, analysis, labeling, storage, etc.)",
        "Risk management system (Article 9)",
        "Post-market monitoring system (Article 72)",
        "Serious incident reporting procedures (Article 73)",
        "Communication procedures with authorities, notified bodies, customers",
        "Record-keeping systems for documentation",
        "Resource management including security-of-supply",
        "Accountability framework for management and staff responsibilities"
      ],
      controls: ["AI-CTRL-QMS-001", "AI-CTRL-QMS-002", "AI-CTRL-QMS-003", "AI-CTRL-QMS-004", "AI-CTRL-QMS-005", "AI-CTRL-QMS-006"],
      evidence: ["QMS Manual", "Process Documentation", "Accountability Matrix"]
    },
    {
      id: "PROV-18-RETENTION",
      article: "Article 18",
      category: "Documentation Keeping",
      requirement: "Retain documentation for 10 years",
      mandatory: true,
      items: [
        "Keep technical documentation for 10 years",
        "Keep QMS documentation for 10 years",
        "Keep conformity assessment changes documentation",
        "Keep notified body decisions and documents",
        "Keep EU declaration of conformity"
      ],
      controls: ["AI-CTRL-DOC-003"],
      evidence: ["Document Retention Policy", "Archive Records"]
    },
    {
      id: "PROV-19-LOGS",
      article: "Article 19",
      category: "Automatically Generated Logs",
      requirement: "Keep logs automatically generated by system",
      mandatory: true,
      items: [
        "Retain logs for minimum 6 months or as required by law",
        "Maintain logs appropriate to system's intended purpose"
      ],
      controls: ["AI-CTRL-LOG-002"],
      evidence: ["Log Retention Configuration", "Sample Retained Logs"]
    },
    {
      id: "PROV-20-CORRECTIVE",
      article: "Article 20",
      category: "Corrective Actions",
      requirement: "Take corrective actions when non-compliant",
      mandatory: true,
      items: [
        "Take immediate corrective action if non-compliant",
        "Withdraw, disable, or recall system as appropriate",
        "Inform distributors, deployers, representatives, importers",
        "Investigate causes of risks",
        "Inform market surveillance authorities",
        "Inform notified body if applicable"
      ],
      controls: ["AI-CTRL-CORR-001"],
      evidence: ["Corrective Action Procedure", "Incident Records"]
    },
    {
      id: "PROV-43-CONFORMITY",
      article: "Article 43",
      category: "Conformity Assessment",
      requirement: "Conduct conformity assessment before market placement",
      mandatory: true,
      items: [
        "Choose appropriate conformity assessment procedure (Annex VI or VII)",
        "Internal control procedure (Annex VI) for non-biometric systems OR",
        "EU-type examination + internal control (Annex VII) for biometric/critical systems",
        "Involve notified body if required by Annex VII",
        "Draw up EU declaration of conformity",
        "Affix CE marking to AI system or packaging",
        "Maintain CE marking validity throughout lifecycle",
        "Ensure conformity assessment current with updates/modifications"
      ],
      controls: ["AI-CTRL-CONF-001", "AI-CTRL-CONF-002", "AI-CTRL-CONF-003"],
      evidence: ["Conformity Assessment Report", "Notified Body Certificate (if applicable)"]
    },
    {
      id: "PROV-72-PMM",
      article: "Article 72",
      category: "Post-Market Monitoring System",
      requirement: "Establish and document post-market monitoring system",
      mandatory: true,
      items: [
        "Actively and systematically collect and analyze data on performance",
        "Monitor deployed AI systems throughout their lifetime",
        "Collect data from deployers (when provided via agreement)",
        "Identify emerging risks and evaluate effectiveness of risk mitigation",
        "Document post-market monitoring plan commensurate with nature of AI",
        "Report findings to risk management system (Article 9)",
        "Update post-market monitoring plan based on findings",
        "Include post-market monitoring plan summary in EU database registration"
      ],
      controls: ["AI-CTRL-MON-001"],
      evidence: ["Post-Market Monitoring Plan", "Monitoring Reports", "Trend Analysis"]
    },
    {
      id: "PROV-73-INCIDENT",
      article: "Article 73",
      category: "Serious Incident Reporting",
      requirement: "Report serious incidents to market surveillance authority",
      mandatory: true,
      items: [
        "Report serious incidents WITHOUT UNDUE DELAY",
        "Report within 15 days of awareness of serious incident",
        "Serious incident = Death, serious damage to health, serious fundamental rights violation",
        "Include incident description, identification of AI system involved",
        "Include nature and causes of incident (if known)",
        "Include corrective measures taken or planned",
        "Report to authority of Member State where incident occurred",
        "Maintain records of all serious incidents and reporting",
        "Cooperate with authorities in incident investigation"
      ],
      controls: ["AI-CTRL-INC-001"],
      evidence: ["Incident Reporting Procedure", "Incident Register", "Authority Correspondence"]
    }
  ],
  controls: [
    // Risk Management Controls
    {
      id: "AI-CTRL-RISK-001",
      name: "AI Risk Management System Establishment",
      description: "Establish a continuous, iterative risk management system throughout the AI system lifecycle",
      owner: "Chief Risk Officer",
      article: "Article 9(1)",
      mandatory: true,
      implementationSteps: [
        "Define risk management governance structure",
        "Establish risk assessment methodology",
        "Create risk register template",
        "Define risk tolerance thresholds",
        "Implement continuous monitoring processes"
      ],
      successCriteria: [
        "Documented risk management policy approved by management",
        "Risk register populated with identified risks",
        "Regular risk review meetings scheduled"
      ],
      evidenceRequired: [
        "Risk Management Policy",
        "Risk Register",
        "Meeting minutes"
      ]
    },
    {
      id: "AI-CTRL-RISK-002",
      name: "Risk Identification and Analysis Process",
      description: "Identify and analyze known and foreseeable risks to health, safety, and fundamental rights",
      owner: "Risk Management Team",
      article: "Article 9(2)(a)",
      mandatory: true
    },
    {
      id: "AI-CTRL-RISK-003",
      name: "Risk Estimation and Evaluation Methodology",
      description: "Estimate and evaluate risks under intended use and foreseeable misuse conditions",
      owner: "Risk Management Team",
      article: "Article 9(2)(b)",
      mandatory: true
    },
    {
      id: "AI-CTRL-RISK-004",
      name: "Post-Market Risk Evaluation",
      description: "Evaluate risks arising from post-market monitoring data analysis",
      owner: "Risk Management Team",
      article: "Article 9(2)(c)",
      mandatory: true
    },
    {
      id: "AI-CTRL-RISK-005",
      name: "Risk Mitigation Measures Implementation",
      description: "Adopt and implement appropriate risk management and mitigation measures",
      owner: "Risk Management Team",
      article: "Article 9(2)(d), 9(5)",
      mandatory: true
    },
    // Data Governance Controls
    {
      id: "AI-CTRL-DATA-001",
      name: "Training Data Quality Management",
      description: "Ensure training, validation, and testing datasets are relevant, representative, and error-free",
      owner: "Data Governance Team",
      article: "Article 10(1-3)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DATA-002",
      name: "Data Bias Detection and Mitigation",
      description: "Examine training data for possible biases and implement mitigation measures",
      owner: "Data Science Team",
      article: "Article 10(2)(f-g)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DATA-003",
      name: "Data Governance Framework",
      description: "Implement comprehensive data governance practices for AI development",
      owner: "Data Governance Team",
      article: "Article 10(2)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DATA-004",
      name: "Dataset Statistical Properties Validation",
      description: "Ensure datasets have appropriate statistical properties for intended purpose",
      owner: "Data Science Team",
      article: "Article 10(3-4)",
      mandatory: true
    },
    // Documentation Controls
    {
      id: "AI-CTRL-DOC-001",
      name: "Technical Documentation Package (Annex IV)",
      description: "Draw up comprehensive technical documentation per Annex IV requirements",
      owner: "Compliance Team",
      article: "Article 11(1) + Annex IV",
      mandatory: true
    },
    {
      id: "AI-CTRL-DOC-002",
      name: "Documentation Update and Maintenance",
      description: "Keep technical documentation up to date throughout system lifecycle",
      owner: "Compliance Team",
      article: "Article 11(1)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DOC-003",
      name: "10-Year Documentation Retention",
      description: "Retain all required documentation for minimum 10 years",
      owner: "Compliance Team",
      article: "Article 18(1)",
      mandatory: true
    },
    // Logging Controls
    {
      id: "AI-CTRL-LOG-001",
      name: "Automatic Event Logging System",
      description: "Enable automatic recording of events over system lifetime",
      owner: "IT Operations",
      article: "Article 12(1-2)",
      mandatory: true
    },
    {
      id: "AI-CTRL-LOG-002",
      name: "Log Data Retention and Management",
      description: "Retain logs for minimum 6 months or as required by law",
      owner: "IT Operations",
      article: "Article 19(1-2)",
      mandatory: true
    },
    {
      id: "AI-CTRL-LOG-003",
      name: "Biometric Logging (if applicable)",
      description: "For biometric systems: log usage period, reference database, input data, verifier identity",
      owner: "IT Operations",
      article: "Article 12(3)",
      mandatory: true
    },
    // Transparency Controls
    {
      id: "AI-CTRL-TRANS-001",
      name: "Instructions for Use Documentation",
      description: "Provide comprehensive instructions for use in digital format",
      owner: "Product Team",
      article: "Article 13(2-3)",
      mandatory: true
    },
    {
      id: "AI-CTRL-TRANS-002",
      name: "System Transparency Design",
      description: "Design system with sufficient transparency for deployers to interpret output",
      owner: "Development Team",
      article: "Article 13(1)",
      mandatory: true
    },
    // Human Oversight Controls
    {
      id: "AI-CTRL-HUMAN-001",
      name: "Human Oversight Measures Design",
      description: "Design system to be effectively overseen by natural persons during use",
      owner: "Development Team",
      article: "Article 14(1-3)",
      mandatory: true
    },
    {
      id: "AI-CTRL-HUMAN-002",
      name: "Decision Override Capability",
      description: "Enable humans to override or reverse system output",
      owner: "Development Team",
      article: "Article 14(4)(d)",
      mandatory: true
    },
    {
      id: "AI-CTRL-HUMAN-003",
      name: "System Interruption Mechanism (Stop Button)",
      description: "Enable system interruption through stop button or similar mechanism",
      owner: "Development Team",
      article: "Article 14(4)(e)",
      mandatory: true
    },
    {
      id: "AI-CTRL-HUMAN-004",
      name: "Automation Bias Prevention",
      description: "Prevent automation bias in human-AI interaction design",
      owner: "Development Team",
      article: "Article 14(4)(b)",
      mandatory: true
    },
    // Accuracy and Robustness Controls
    {
      id: "AI-CTRL-ACC-001",
      name: "Accuracy Level Achievement and Declaration",
      description: "Achieve and declare appropriate accuracy levels with metrics",
      owner: "QA Team",
      article: "Article 15(1-3)",
      mandatory: true
    },
    {
      id: "AI-CTRL-ROB-001",
      name: "Robustness and Error Resilience",
      description: "Ensure system is resilient to errors, faults, and inconsistencies",
      owner: "QA Team",
      article: "Article 15(4)",
      mandatory: true
    },
    // Security Controls
    {
      id: "AI-CTRL-SEC-001",
      name: "Cybersecurity Risk Assessment and Mitigation",
      description: "Assess and mitigate cybersecurity risks throughout lifecycle",
      owner: "Information Security",
      article: "Article 15(5)",
      mandatory: true
    },
    {
      id: "AI-CTRL-SEC-002",
      name: "AI-Specific Vulnerability Protection",
      description: "Protect against data poisoning, model poisoning, adversarial attacks",
      owner: "Information Security",
      article: "Article 15(5)",
      mandatory: true
    },
    // QMS Controls
    {
      id: "AI-CTRL-QMS-001",
      name: "Quality Management System Establishment",
      description: "Establish and document comprehensive quality management system",
      owner: "Quality Assurance",
      article: "Article 17(1)",
      mandatory: true
    },
    {
      id: "AI-CTRL-QMS-002",
      name: "Regulatory Compliance Strategy",
      description: "Develop and document strategy for regulatory compliance",
      owner: "Compliance Team",
      article: "Article 17(1)(a)",
      mandatory: true
    },
    {
      id: "AI-CTRL-QMS-003",
      name: "Design Control and Verification Procedures",
      description: "Implement design control and verification procedures",
      owner: "Development Team",
      article: "Article 17(1)(b-c)",
      mandatory: true
    },
    {
      id: "AI-CTRL-QMS-004",
      name: "Testing and Validation Framework",
      description: "Establish comprehensive testing and validation framework",
      owner: "QA Team",
      article: "Article 17(1)(d)",
      mandatory: true
    },
    {
      id: "AI-CTRL-QMS-005",
      name: "Standards and Technical Specifications",
      description: "Document applicable standards and technical specifications",
      owner: "Compliance Team",
      article: "Article 17(1)(e)",
      mandatory: true
    },
    {
      id: "AI-CTRL-QMS-006",
      name: "Accountability Framework",
      description: "Establish accountability framework for management and staff",
      owner: "Executive Management",
      article: "Article 17(1)(m)",
      mandatory: true
    },
    // Conformity Controls
    {
      id: "AI-CTRL-CONF-001",
      name: "Conformity Assessment Procedure",
      description: "Conduct appropriate conformity assessment procedure",
      owner: "Compliance Team",
      article: "Article 16(f), Article 43",
      mandatory: true
    },
    {
      id: "AI-CTRL-CONF-002",
      name: "EU Declaration of Conformity",
      description: "Draw up and maintain EU declaration of conformity",
      owner: "Compliance Team",
      article: "Article 16(g), Article 47",
      mandatory: true
    },
    {
      id: "AI-CTRL-CONF-003",
      name: "CE Marking Affixing",
      description: "Affix CE marking to AI system or packaging",
      owner: "Compliance Team",
      article: "Article 16(h), Article 48",
      mandatory: true
    },
    {
      id: "AI-CTRL-REG-001",
      name: "EU Database Registration",
      description: "Register AI system in EU database before market placement",
      owner: "Compliance Team",
      article: "Article 16(i), Article 49(1)",
      mandatory: true
    },
    // Post-Market Controls
    {
      id: "AI-CTRL-CORR-001",
      name: "Corrective Action Procedure",
      description: "Establish procedure for corrective actions when non-compliant",
      owner: "Compliance Team",
      article: "Article 20(1-2)",
      mandatory: true
    },
    {
      id: "AI-CTRL-MON-001",
      name: "Post-Market Monitoring System",
      description: "Establish and document post-market monitoring system",
      owner: "Risk Management Team",
      article: "Article 17(1)(h), Article 72",
      mandatory: true
    },
    {
      id: "AI-CTRL-INC-001",
      name: "Serious Incident Reporting",
      description: "Establish procedure for serious incident reporting within 15 days",
      owner: "Compliance Team",
      article: "Article 17(1)(i), Article 73",
      mandatory: true
    }
  ]
};

// =============================================================================
// HIGH-RISK AI SYSTEMS - DEPLOYER OBLIGATIONS
// =============================================================================

export const DEPLOYER_REQUIREMENTS: RoleRequirements = {
  title: "Deployer Obligations (High-Risk AI)",
  description: "Requirements for deployers of high-risk AI systems under EU AI Act Articles 26-27",
  articles: ["26", "27"],
  riskLevels: ["high"],
  obligationsCount: 8,
  controlsCount: 5,
  requirements: [
    {
      id: "DEPL-26-USE",
      article: "Article 26",
      category: "Deployer Obligations",
      requirement: "Use AI system according to instructions and ensure proper operation",
      mandatory: true,
      items: [
        "Use AI system according to instructions for use",
        "Assign human oversight to competent persons",
        "Monitor operation based on instructions",
        "Suspend use if system presents risk",
        "Inform provider, distributor, importer of risks and malfunctions",
        "Keep logs generated by system (under deployer control)",
        "Conduct data protection impact assessment (if applicable)",
        "Ensure input data is relevant to intended purpose"
      ],
      controls: ["AI-CTRL-DEP-001", "AI-CTRL-DEP-002", "AI-CTRL-DEP-003", "AI-CTRL-DEP-004", "AI-CTRL-DEP-005"],
      evidence: ["Usage Logs", "Oversight Assignment Records", "DPIA (if applicable)", "Incident Reports"]
    },
    {
      id: "DEPL-27-FRIA",
      article: "Article 27",
      category: "Fundamental Rights Impact Assessment",
      requirement: "Conduct fundamental rights impact assessment before deployment",
      mandatory: true,
      items: [
        "Assess impact on fundamental rights of affected persons",
        "Document assessment methodology and findings",
        "Identify and implement mitigation measures",
        "Consult with relevant stakeholders",
        "Update assessment when significant changes occur"
      ],
      controls: ["AI-CTRL-FRIA-001"],
      evidence: ["FRIA Document", "Stakeholder Consultation Records", "Mitigation Plan"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-DEP-001",
      name: "Deployer Instructions Compliance",
      description: "Ensure AI system is used according to provider's instructions for use",
      owner: "AI System Owners",
      article: "Article 26(1)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DEP-002",
      name: "Human Oversight Assignment",
      description: "Assign human oversight to competent, trained persons",
      owner: "Department Managers",
      article: "Article 26(2)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DEP-003",
      name: "Operational Monitoring",
      description: "Monitor AI system operation based on provider instructions",
      owner: "AI System Operators",
      article: "Article 26(3)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DEP-004",
      name: "Risk Suspension and Notification",
      description: "Suspend use if risk identified and notify relevant parties",
      owner: "AI System Owners",
      article: "Article 26(4-5)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DEP-005",
      name: "Input Data Quality Assurance",
      description: "Ensure input data is relevant to intended purpose",
      owner: "Data Stewards",
      article: "Article 26(6)",
      mandatory: true
    },
    {
      id: "AI-CTRL-FRIA-001",
      name: "Fundamental Rights Impact Assessment",
      description: "Conduct FRIA before deploying high-risk AI system",
      owner: "Legal / Ethics Team",
      article: "Article 27",
      mandatory: true
    }
  ]
};

// =============================================================================
// LIMITED RISK - TRANSPARENCY OBLIGATIONS
// =============================================================================

export const LIMITED_RISK_REQUIREMENTS: RoleRequirements = {
  title: "Limited Risk - Transparency Obligations",
  description: "Requirements for AI systems with transparency obligations under Article 50",
  articles: ["50"],
  riskLevels: ["limited"],
  obligationsCount: 4,
  controlsCount: 4,
  requirements: [
    {
      id: "TRANS-50-NOTIFY",
      article: "Article 50",
      category: "Transparency Obligations",
      requirement: "Inform users about AI interaction and mark AI-generated content",
      mandatory: true,
      items: [
        "Inform users they are interacting with AI system (chatbots, conversational agents)",
        "Design system to make AI interaction transparent",
        "Mark AI-generated content (images, audio, video)",
        "Ensure transparency information is accessible and easily understandable"
      ],
      controls: ["AI-CTRL-TRANS-101", "AI-CTRL-TRANS-102", "AI-CTRL-TRANS-103", "AI-CTRL-TRANS-104"],
      evidence: ["User Notification Design", "Content Labeling Examples", "Accessibility Testing"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-TRANS-101",
      name: "User Notification Mechanism",
      description: "Implement clear, visible notice that users are interacting with AI",
      owner: "Product Team / UX Design",
      article: "Article 50(1)",
      mandatory: true
    },
    {
      id: "AI-CTRL-TRANS-102",
      name: "AI Interaction Transparency Design",
      description: "Design interfaces to make AI interaction clear and distinguishable",
      owner: "UX Design Team",
      article: "Article 50(1)",
      mandatory: true
    },
    {
      id: "AI-CTRL-TRANS-103",
      name: "AI-Generated Content Labeling",
      description: "Mark all content generated by AI appropriately (images, video, audio)",
      owner: "Content Team / Development",
      article: "Article 50(2-4)",
      mandatory: true
    },
    {
      id: "AI-CTRL-TRANS-104",
      name: "Transparency Information Accessibility",
      description: "Ensure transparency notices are accessible to all users",
      owner: "Accessibility Team",
      article: "Article 50",
      mandatory: true
    }
  ]
};

// =============================================================================
// MINIMAL RISK - VOLUNTARY OBLIGATIONS
// =============================================================================

export const MINIMAL_RISK_REQUIREMENTS: RoleRequirements = {
  title: "Minimal Risk - Voluntary Codes of Conduct",
  description: "Voluntary requirements for minimal risk AI systems under Article 96",
  articles: ["96"],
  riskLevels: ["minimal"],
  obligationsCount: 0,
  controlsCount: 0,
  requirements: [
    {
      id: "MIN-96-VOLUNTARY",
      article: "Article 96",
      category: "Voluntary Codes of Conduct",
      requirement: "Consider voluntary adoption of codes of conduct",
      mandatory: false,
      items: [
        "Voluntary application of codes of conduct",
        "No mandatory AI Act requirements",
        "Organizations encouraged to adopt voluntary commitments"
      ],
      controls: ["AI-CTRL-MIN-001"],
      evidence: ["Code of Conduct Adoption Documentation (optional)"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-MIN-001",
      name: "Voluntary Code of Conduct Adoption",
      description: "Adopt voluntary codes of conduct for minimal risk AI systems (optional)",
      owner: "AI Governance Team",
      article: "Article 96 (Voluntary)",
      mandatory: false
    }
  ]
};

// =============================================================================
// GPAI PROVIDER OBLIGATIONS
// =============================================================================

export const GPAI_PROVIDER_REQUIREMENTS: RoleRequirements = {
  title: "GPAI Provider Obligations",
  description: "Requirements for providers of General-Purpose AI models under Articles 53-55",
  articles: ["53", "54", "55"],
  riskLevels: ["high", "limited"],
  obligationsCount: 23,
  controlsCount: 4,
  requirements: [
    {
      id: "GPAI-53-TECHDOC",
      article: "Article 53(1)(a)",
      category: "Technical Documentation (Annex XI)",
      requirement: "Draw up and maintain technical documentation per Annex XI",
      mandatory: true,
      items: [
        "Include training process and methodologies",
        "Document training data (sources, scope, processing)",
        "Include testing and validation procedures",
        "Document evaluation results and metrics",
        "Document model capabilities and limitations",
        "Include energy consumption information",
        "Document known or foreseeable risks"
      ],
      controls: ["AI-CTRL-GPAI-001"],
      evidence: ["Technical Documentation (Annex XI)", "Training Methodology Document", "Model Card"]
    },
    {
      id: "GPAI-53-DOWNSTREAM",
      article: "Article 53(1)(b)",
      category: "Downstream Provider Information (Annex XII)",
      requirement: "Provide information to downstream providers per Annex XII",
      mandatory: true,
      items: [
        "Provide general description of model capabilities",
        "Provide information on how to use the model",
        "Include technical specifications (inputs, outputs, resources)",
        "Document training data characteristics",
        "Document known limitations and restrictions",
        "Provide measures to interpret outputs",
        "Document conditions for use"
      ],
      controls: ["AI-CTRL-GPAI-002"],
      evidence: ["Downstream Provider Documentation (Annex XII)", "API Documentation", "Usage Guidelines"]
    },
    {
      id: "GPAI-53-COPYRIGHT",
      article: "Article 53(1)(c)",
      category: "Copyright Compliance Policy",
      requirement: "Implement policy for EU copyright and related rights compliance",
      mandatory: true,
      items: [
        "Identify rights reservations per Directive 2019/790",
        "Use state-of-the-art technologies for compliance",
        "Document copyright compliance procedures"
      ],
      controls: ["AI-CTRL-GPAI-003"],
      evidence: ["Copyright Policy", "Compliance Procedures", "Opt-out Mechanisms"]
    },
    {
      id: "GPAI-53-SUMMARY",
      article: "Article 53(1)(d)",
      category: "Training Data Summary",
      requirement: "Publish sufficiently detailed summary of training content",
      mandatory: true,
      items: [
        "Use AI Office template",
        "Make publicly available",
        "Update when model changes"
      ],
      controls: ["AI-CTRL-GPAI-004"],
      evidence: ["Published Training Data Summary", "AI Office Template Compliance"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-GPAI-001",
      name: "GPAI Technical Documentation (Annex XI)",
      description: "Maintain comprehensive technical documentation per Annex XI requirements",
      owner: "GPAI Technical Team",
      article: "Article 53(1)(a)",
      mandatory: true
    },
    {
      id: "AI-CTRL-GPAI-002",
      name: "Downstream Provider Information Package (Annex XII)",
      description: "Provide complete information package to downstream providers per Annex XII",
      owner: "GPAI Product Team",
      article: "Article 53(1)(b)",
      mandatory: true
    },
    {
      id: "AI-CTRL-GPAI-003",
      name: "Copyright Compliance Policy",
      description: "Implement and maintain copyright compliance policy for training data",
      owner: "Legal / IP Team",
      article: "Article 53(1)(c)",
      mandatory: true
    },
    {
      id: "AI-CTRL-GPAI-004",
      name: "Training Data Summary Publication",
      description: "Publish and maintain public training data summary per AI Office template",
      owner: "GPAI Documentation Team",
      article: "Article 53(1)(d)",
      mandatory: true
    }
  ]
};

// =============================================================================
// GPAI SYSTEMIC RISK - ADDITIONAL OBLIGATIONS
// =============================================================================

export const GPAI_SYSTEMIC_RISK_REQUIREMENTS: RoleRequirements = {
  title: "GPAI with Systemic Risk - Additional Obligations",
  description: "Additional requirements for GPAI models with systemic risk under Article 55",
  articles: ["55"],
  riskLevels: ["high"],
  obligationsCount: 20,
  controlsCount: 5,
  requirements: [
    {
      id: "GPAI-SR-55-EVAL",
      article: "Article 55(1)(a)",
      category: "Model Evaluation",
      requirement: "Perform model evaluation per standardized protocols",
      mandatory: true,
      items: [
        "Use appropriate tools and methodologies",
        "Use independent experts where appropriate",
        "Document evaluation results",
        "Test against established benchmarks"
      ],
      controls: ["AI-CTRL-GPAI-SR-001"],
      evidence: ["Evaluation Reports", "Benchmark Results", "Expert Assessments"]
    },
    {
      id: "GPAI-SR-55-ADVERSARIAL",
      article: "Article 55(1)(b)",
      category: "Adversarial Testing & Risk Mitigation",
      requirement: "Assess systemic risks and conduct adversarial testing",
      mandatory: true,
      items: [
        "Assess systemic risks (accidents, security breaches, etc.)",
        "Conduct adversarial testing (red-teaming)",
        "Test robustness against attacks",
        "Document identified vulnerabilities",
        "Implement and document mitigation measures"
      ],
      controls: ["AI-CTRL-GPAI-SR-002", "AI-CTRL-GPAI-SR-003"],
      evidence: ["Red-Team Reports", "Vulnerability Assessment", "Mitigation Plan"]
    },
    {
      id: "GPAI-SR-55-INCIDENT",
      article: "Article 55(1)(c)",
      category: "Serious Incident Tracking",
      requirement: "Track and report serious incidents related to systemic risks",
      mandatory: true,
      items: [
        "Track serious incidents related to systemic risks",
        "Document incidents and analysis",
        "Report to AI Office without undue delay",
        "Implement corrective actions",
        "Monitor effectiveness of corrective actions"
      ],
      controls: ["AI-CTRL-GPAI-SR-004"],
      evidence: ["Incident Register", "AI Office Reports", "Corrective Action Records"]
    },
    {
      id: "GPAI-SR-55-SECURITY",
      article: "Article 55(1)(d)",
      category: "Cybersecurity",
      requirement: "Ensure adequate cybersecurity protection for model and infrastructure",
      mandatory: true,
      items: [
        "Protect model parameters and weights",
        "Protect training infrastructure",
        "Implement access controls",
        "Regular security assessments and penetration testing"
      ],
      controls: ["AI-CTRL-GPAI-SR-005"],
      evidence: ["Security Assessment Reports", "Penetration Test Results", "Access Control Documentation"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-GPAI-SR-001",
      name: "Standardized Model Evaluation",
      description: "Perform model evaluation using standardized protocols and methodologies",
      owner: "GPAI Safety Team",
      article: "Article 55(1)(a)",
      mandatory: true
    },
    {
      id: "AI-CTRL-GPAI-SR-002",
      name: "Adversarial Testing & Red-Teaming",
      description: "Conduct adversarial testing and red-teaming exercises",
      owner: "GPAI Security Team",
      article: "Article 55(1)(b)",
      mandatory: true
    },
    {
      id: "AI-CTRL-GPAI-SR-003",
      name: "Systemic Risk Mitigation Plan",
      description: "Develop and implement plan to mitigate identified systemic risks",
      owner: "GPAI Safety Team",
      article: "Article 55(1)(b)",
      mandatory: true
    },
    {
      id: "AI-CTRL-GPAI-SR-004",
      name: "Serious Incident Tracking & Reporting",
      description: "Track serious incidents and report to AI Office without undue delay",
      owner: "GPAI Compliance Team",
      article: "Article 55(1)(c)",
      mandatory: true
    },
    {
      id: "AI-CTRL-GPAI-SR-005",
      name: "GPAI Cybersecurity Program",
      description: "Implement comprehensive cybersecurity program for GPAI model and infrastructure",
      owner: "GPAI Security Team / CISO",
      article: "Article 55(1)(d)",
      mandatory: true
    }
  ]
};

// =============================================================================
// IMPORTER OBLIGATIONS
// =============================================================================

export const IMPORTER_REQUIREMENTS: RoleRequirements = {
  title: "Importer Obligations (High-Risk AI)",
  description: "Requirements for importers of high-risk AI systems under Article 23",
  articles: ["23"],
  riskLevels: ["high"],
  obligationsCount: 8,
  controlsCount: 4,
  requirements: [
    {
      id: "IMP-23-VERIFY",
      article: "Article 23",
      category: "Importer Obligations",
      requirement: "Verify provider compliance before placing AI system on EU market",
      mandatory: true,
      items: [
        "Verify conformity assessment has been carried out",
        "Verify technical documentation is available",
        "Verify CE marking is affixed",
        "Verify EU declaration of conformity accompanies system",
        "Verify instructions for use accompany system",
        "Ensure provider is identifiable",
        "Indicate importer name and contact on system/packaging",
        "Ensure storage/transport conditions don't jeopardize compliance"
      ],
      controls: ["AI-CTRL-IMP-001", "AI-CTRL-IMP-002", "AI-CTRL-IMP-003", "AI-CTRL-IMP-004"],
      evidence: ["Verification Checklist", "Provider Documentation", "Import Records"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-IMP-001",
      name: "Provider Compliance Verification",
      description: "Verify provider has completed conformity assessment and documentation",
      owner: "Import Compliance Team",
      article: "Article 23(1-3)",
      mandatory: true
    },
    {
      id: "AI-CTRL-IMP-002",
      name: "CE Marking and Documentation Verification",
      description: "Verify CE marking and required documentation accompanies system",
      owner: "Import Compliance Team",
      article: "Article 23(4-5)",
      mandatory: true
    },
    {
      id: "AI-CTRL-IMP-003",
      name: "Importer Identification Marking",
      description: "Ensure importer name and contact details are on system/packaging",
      owner: "Import Operations",
      article: "Article 23(7)",
      mandatory: true
    },
    {
      id: "AI-CTRL-IMP-004",
      name: "Storage and Transport Compliance",
      description: "Ensure storage/transport conditions maintain system compliance",
      owner: "Logistics Team",
      article: "Article 23(8)",
      mandatory: true
    }
  ]
};

// =============================================================================
// DISTRIBUTOR OBLIGATIONS
// =============================================================================

export const DISTRIBUTOR_REQUIREMENTS: RoleRequirements = {
  title: "Distributor Obligations (High-Risk AI)",
  description: "Requirements for distributors of high-risk AI systems under Article 24",
  articles: ["24"],
  riskLevels: ["high"],
  obligationsCount: 5,
  controlsCount: 3,
  requirements: [
    {
      id: "DIST-24-VERIFY",
      article: "Article 24",
      category: "Distributor Obligations",
      requirement: "Verify compliance markings and documentation before distribution",
      mandatory: true,
      items: [
        "Verify CE marking is affixed",
        "Verify required documentation accompanies system",
        "Verify provider and importer contact details are available",
        "Not make available systems that appear non-compliant",
        "Ensure storage/transport conditions don't jeopardize compliance"
      ],
      controls: ["AI-CTRL-DIST-001", "AI-CTRL-DIST-002", "AI-CTRL-DIST-003"],
      evidence: ["Distribution Verification Records", "Compliance Checklists"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-DIST-001",
      name: "Distribution Compliance Verification",
      description: "Verify CE marking and documentation before distribution",
      owner: "Distribution Compliance Team",
      article: "Article 24(1-2)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DIST-002",
      name: "Non-Compliant System Identification",
      description: "Identify and withhold non-compliant systems from distribution",
      owner: "Quality Control Team",
      article: "Article 24(3)",
      mandatory: true
    },
    {
      id: "AI-CTRL-DIST-003",
      name: "Distribution Storage and Transport",
      description: "Maintain compliant storage/transport conditions",
      owner: "Logistics Team",
      article: "Article 24(4)",
      mandatory: true
    }
  ]
};

// =============================================================================
// UNIVERSAL REQUIREMENTS
// =============================================================================

export const UNIVERSAL_REQUIREMENTS: RoleRequirements = {
  title: "Universal Requirements (All AI Systems)",
  description: "Requirements that apply to all AI systems regardless of risk level",
  articles: ["2", "3"],
  riskLevels: ["prohibited", "high", "limited", "minimal"],
  obligationsCount: 2,
  controlsCount: 2,
  requirements: [
    {
      id: "UNI-2-SCOPE",
      article: "Article 2",
      category: "Territorial Scope",
      requirement: "Ensure compliance with territorial scope requirements",
      mandatory: true,
      items: [
        "Applies to providers placing AI on EU market regardless of establishment",
        "Applies to deployers established in EU",
        "Applies to providers/deployers outside EU if output used in EU"
      ],
      controls: ["AI-CTRL-GOV-001"],
      evidence: ["Jurisdictional Assessment"]
    },
    {
      id: "UNI-3-DEFINITION",
      article: "Article 3",
      category: "AI System Definition",
      requirement: "Verify system meets AI system definition under Article 3",
      mandatory: true,
      items: [
        "Machine-based system designed to operate with varying levels of autonomy",
        "May exhibit adaptiveness after deployment",
        "Infers from inputs to generate outputs (predictions, content, decisions)"
      ],
      controls: ["AI-CTRL-INV-001"],
      evidence: ["AI System Classification Document"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-GOV-001",
      name: "AI Governance Framework Establishment",
      description: "Establish AI governance structure (recommended as best practice)",
      owner: "Chief Risk Officer / AI Governance Board",
      article: "Best Practice",
      mandatory: false
    },
    {
      id: "AI-CTRL-INV-001",
      name: "AI Systems Inventory",
      description: "Maintain inventory of all AI systems in use",
      owner: "AI Governance Team",
      article: "Article 49(2) + Best Practice",
      mandatory: false
    }
  ]
};

// =============================================================================
// PROHIBITED PRACTICES
// =============================================================================

export const PROHIBITED_REQUIREMENTS: RoleRequirements = {
  title: "Prohibited AI Practices (Article 5)",
  description: "AI practices that are prohibited under the EU AI Act",
  articles: ["5"],
  riskLevels: ["prohibited"],
  obligationsCount: 1,
  controlsCount: 1,
  requirements: [
    {
      id: "PROHIB-5-SCREEN",
      article: "Article 5",
      category: "Prohibited Practices",
      requirement: "Screen AI systems against prohibited practices - do not place on market or use",
      mandatory: true,
      items: [
        "Subliminal/manipulative/deceptive techniques causing harm",
        "Exploitation of vulnerabilities (age, disability, social/economic situation)",
        "Social scoring by public authorities leading to detrimental treatment",
        "Predictive policing based solely on profiling",
        "Untargeted scraping of facial images for facial recognition databases",
        "Emotion recognition in workplace/education (with exceptions)",
        "Biometric categorization inferring sensitive characteristics",
        "Real-time remote biometric identification in public spaces by law enforcement (with exceptions)"
      ],
      controls: ["AI-CTRL-PROHIBIT-001"],
      evidence: ["Prohibited Practice Screening Checklist", "Legal Opinion"]
    }
  ],
  controls: [
    {
      id: "AI-CTRL-PROHIBIT-001",
      name: "Prohibited Practice Screening",
      description: "Screen all AI systems against Article 5 prohibited practices before development",
      owner: "Legal & Compliance",
      article: "Article 5",
      mandatory: true
    }
  ]
};

// =============================================================================
// ROLE REQUIREMENTS MAP
// =============================================================================

export const ROLE_REQUIREMENTS: Record<OperatorRole, RoleRequirements> = {
  provider: PROVIDER_REQUIREMENTS,
  deployer: DEPLOYER_REQUIREMENTS,
  importer: IMPORTER_REQUIREMENTS,
  distributor: DISTRIBUTOR_REQUIREMENTS,
  gpai_provider: GPAI_PROVIDER_REQUIREMENTS,
  authorized_representative: {
    title: "Authorized Representative Obligations",
    description: "Requirements for authorized representatives under Articles 22 & 54",
    articles: ["22", "54"],
    riskLevels: ["high"],
    obligationsCount: 6,
    controlsCount: 2,
    requirements: [
      {
        id: "AR-22-MANDATE",
        article: "Article 22",
        category: "Authorized Representative Obligations",
        requirement: "Act on behalf of non-EU provider with written mandate",
        mandatory: true,
        items: [
          "Receive and maintain written mandate from provider",
          "Verify conformity documentation exists",
          "Provide documentation to authorities on request",
          "Cooperate with authorities",
          "Inform provider of authority requests",
          "Terminate mandate if provider non-compliant"
        ],
        controls: ["AI-CTRL-AR-001", "AI-CTRL-AR-002"],
        evidence: ["Written Mandate", "Authority Correspondence", "Documentation Inventory"]
      }
    ],
    controls: [
      {
        id: "AI-CTRL-AR-001",
        name: "Written Mandate Management",
        description: "Maintain valid written mandate from non-EU provider",
        owner: "Authorized Representative",
        article: "Article 22(1)",
        mandatory: true
      },
      {
        id: "AI-CTRL-AR-002",
        name: "Authority Cooperation",
        description: "Cooperate with market surveillance authorities and provide documentation",
        owner: "Authorized Representative",
        article: "Article 22(3-5)",
        mandatory: true
      }
    ]
  }
};

// =============================================================================
// RISK LEVEL REQUIREMENTS MAP
// =============================================================================

export const RISK_LEVEL_REQUIREMENTS: Record<RiskLevel, RoleRequirements[]> = {
  prohibited: [PROHIBITED_REQUIREMENTS],
  high: [PROVIDER_REQUIREMENTS, DEPLOYER_REQUIREMENTS, IMPORTER_REQUIREMENTS, DISTRIBUTOR_REQUIREMENTS],
  limited: [LIMITED_RISK_REQUIREMENTS],
  minimal: [MINIMAL_RISK_REQUIREMENTS]
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all requirements applicable to a specific role and risk level
 */
export function getRequirementsForRole(
  role: OperatorRole,
  riskLevel: RiskLevel
): Requirement[] {
  const requirements: Requirement[] = [];
  
  // First, check if the role has requirements for this risk level
  const roleReqs = ROLE_REQUIREMENTS[role];
  if (roleReqs.riskLevels.includes(riskLevel)) {
    requirements.push(...roleReqs.requirements);
  }
  
  // Also include risk-level-specific requirements (e.g., limited risk transparency)
  const riskLevelReqs = RISK_LEVEL_REQUIREMENTS[riskLevel];
  for (const reqs of riskLevelReqs) {
    // Avoid duplicates - only add if not already from role requirements
    for (const req of reqs.requirements) {
      if (!requirements.find(r => r.id === req.id)) {
        requirements.push(req);
      }
    }
  }
  
  // Add universal requirements (AI literacy, etc.)
  for (const req of UNIVERSAL_REQUIREMENTS.requirements) {
    if (!requirements.find(r => r.id === req.id)) {
      requirements.push(req);
    }
  }
  
  return requirements;
}

/**
 * Get all controls applicable to a specific role
 */
export function getControlsForRole(role: OperatorRole): Control[] {
  return ROLE_REQUIREMENTS[role].controls;
}

/**
 * Get all requirements for a specific risk level across all roles
 */
export function getRequirementsForRiskLevel(riskLevel: RiskLevel): Requirement[] {
  const requirements: Requirement[] = [];
  const roleReqsList = RISK_LEVEL_REQUIREMENTS[riskLevel];

  for (const roleReqs of roleReqsList) {
    requirements.push(...roleReqs.requirements);
  }

  return requirements;
}

/**
 * Get a specific control by ID
 */
/**
 * Get a requirement by its ID
 */
export function getRequirementById(requirementId: string): Requirement | undefined {
  // Check all role requirements
  for (const role of Object.values(ROLE_REQUIREMENTS)) {
    const req = role.requirements.find(r => r.id === requirementId);
    if (req) return req;
  }

  // Check risk level requirements
  for (const reqs of Object.values(RISK_LEVEL_REQUIREMENTS)) {
    for (const roleReq of reqs) {
      const req = roleReq.requirements.find(r => r.id === requirementId);
      if (req) return req;
    }
  }

  // Check universal requirements
  const universalReq = UNIVERSAL_REQUIREMENTS.requirements.find(r => r.id === requirementId);
  if (universalReq) return universalReq;

  // Check limited risk requirements
  const limitedReq = LIMITED_RISK_REQUIREMENTS.requirements.find(r => r.id === requirementId);
  if (limitedReq) return limitedReq;

  // Check prohibited requirements
  const prohibitedReq = PROHIBITED_REQUIREMENTS.requirements.find(r => r.id === requirementId);
  if (prohibitedReq) return prohibitedReq;

  return undefined;
}

export function getControlById(controlId: string): Control | undefined {
  for (const role of Object.values(ROLE_REQUIREMENTS)) {
    const control = role.controls.find(c => c.id === controlId);
    if (control) return control;
  }

  // Also check GPAI systemic risk controls
  const sysRiskControl = GPAI_SYSTEMIC_RISK_REQUIREMENTS.controls.find(c => c.id === controlId);
  if (sysRiskControl) return sysRiskControl;

  // Check universal requirements
  const universalControl = UNIVERSAL_REQUIREMENTS.controls.find(c => c.id === controlId);
  if (universalControl) return universalControl;

  return undefined;
}

/**
 * Get all controls across all roles
 */
export function getAllControls(): Control[] {
  const controls: Control[] = [];

  for (const role of Object.values(ROLE_REQUIREMENTS)) {
    controls.push(...role.controls);
  }

  // Add GPAI systemic risk controls
  controls.push(...GPAI_SYSTEMIC_RISK_REQUIREMENTS.controls);

  // Add universal controls
  controls.push(...UNIVERSAL_REQUIREMENTS.controls);

  // Add limited risk controls
  controls.push(...LIMITED_RISK_REQUIREMENTS.controls);

  return controls;
}

/**
 * Get requirement counts summary for a role and risk level
 */
export function getRequirementsSummary(role: OperatorRole, riskLevel: RiskLevel): {
  total: number;
  mandatory: number;
  optional: number;
  controlsCount: number;
} {
  const requirements = getRequirementsForRole(role, riskLevel);
  const controls = getControlsForRole(role);

  return {
    total: requirements.length,
    mandatory: requirements.filter(r => r.mandatory).length,
    optional: requirements.filter(r => !r.mandatory).length,
    controlsCount: controls.length
  };
}
