// EU AI Act Glossary Data
// Comprehensive definitions from the EU AI Act (Regulation 2024/1689)
// Based on Article 3 definitions and key concepts throughout the regulation

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  article: string
  category: GlossaryCategory
  related: string[]
  examples?: string[]
  keyPoints?: string[]
}

export type GlossaryCategory =
  | "Core Concepts"
  | "Actors & Roles"
  | "Risk Classification"
  | "Compliance & Assessment"
  | "Documentation"
  | "Requirements"
  | "Governance"
  | "Technical"
  | "Enforcement"
  | "GPAI"

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "Core Concepts",
  "Actors & Roles",
  "Risk Classification",
  "Compliance & Assessment",
  "Documentation",
  "Requirements",
  "Governance",
  "Technical",
  "Enforcement",
  "GPAI",
]

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // === CORE CONCEPTS ===
  {
    id: "ai-system",
    term: "AI System",
    definition:
      "A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments.",
    article: "Article 3(1)",
    category: "Core Concepts",
    related: ["Machine Learning", "General Purpose AI Model", "High-Risk AI System"],
    keyPoints: [
      "Operates with varying autonomy levels",
      "May adapt after deployment",
      "Generates outputs from inputs",
      "Can influence physical or virtual environments",
    ],
  },
  {
    id: "risk-based-approach",
    term: "Risk-Based Approach",
    definition:
      "The fundamental regulatory philosophy of the AI Act that calibrates obligations based on the potential harm an AI system could cause, with four tiers: prohibited, high-risk, limited risk, and minimal risk.",
    article: "Recital 14",
    category: "Core Concepts",
    related: ["Prohibited AI Practices", "High-Risk AI System", "Limited Risk AI", "Minimal Risk AI"],
    keyPoints: [
      "Four risk tiers",
      "Proportionate obligations",
      "Based on potential harm",
      "Draws from EU product safety framework",
    ],
  },
  {
    id: "placing-on-market",
    term: "Placing on the Market",
    definition:
      "The first making available of an AI system or a general-purpose AI model on the Union market. This includes both commercial and non-commercial supply.",
    article: "Article 3(9)",
    category: "Core Concepts",
    related: ["Putting into Service", "Provider", "Making Available"],
  },
  {
    id: "putting-into-service",
    term: "Putting into Service",
    definition:
      "The supply of an AI system for first use directly to the deployer or for own use in the Union for its intended purpose.",
    article: "Article 3(11)",
    category: "Core Concepts",
    related: ["Placing on the Market", "Deployer", "Intended Purpose"],
  },
  {
    id: "intended-purpose",
    term: "Intended Purpose",
    definition:
      "The use for which an AI system is intended by the provider, including the specific context and conditions of use, as specified in the information supplied by the provider in the instructions for use, promotional or sales materials and statements, as well as in the technical documentation.",
    article: "Article 3(12)",
    category: "Core Concepts",
    related: ["Reasonably Foreseeable Misuse", "Instructions for Use", "Technical Documentation"],
  },
  {
    id: "reasonably-foreseeable-misuse",
    term: "Reasonably Foreseeable Misuse",
    definition:
      "The use of an AI system in a way that is not in accordance with its intended purpose, but which may result from reasonably foreseeable human behaviour or interaction with other systems.",
    article: "Article 3(13)",
    category: "Core Concepts",
    related: ["Intended Purpose", "Risk Management System", "Safety Component"],
  },
  {
    id: "safety-component",
    term: "Safety Component",
    definition:
      "A component of a product or of an AI system which fulfils a safety function for that product or AI system, or the failure or malfunctioning of which endangers the health and safety of persons or property.",
    article: "Article 3(14)",
    category: "Core Concepts",
    related: ["High-Risk AI System", "Product Safety", "CE Marking"],
  },
  {
    id: "substantial-modification",
    term: "Substantial Modification",
    definition:
      "A change to an AI system after its placing on the market or putting into service which is not foreseen or planned in the initial conformity assessment and as a result of which the compliance of the AI system with the requirements is affected or the intended purpose is modified.",
    article: "Article 3(23)",
    category: "Core Concepts",
    related: ["Conformity Assessment", "Post-Market Monitoring", "CE Marking"],
  },

  // === ACTORS & ROLES ===
  {
    id: "provider",
    term: "Provider",
    definition:
      "A natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model or that has an AI system or a general-purpose AI model developed and places it on the market or puts the AI system into service under its own name or trademark, whether for payment or free of charge.",
    article: "Article 3(3)",
    category: "Actors & Roles",
    related: ["Deployer", "Distributor", "Importer", "Authorised Representative"],
    keyPoints: [
      "Develops or commissions AI system",
      "Places on market under own name",
      "Primary compliance responsibility",
      "Applies regardless of payment",
    ],
  },
  {
    id: "deployer",
    term: "Deployer",
    definition:
      "A natural or legal person, public authority, agency or other body using an AI system under its authority except where the AI system is used in the course of a personal non-professional activity.",
    article: "Article 3(4)",
    category: "Actors & Roles",
    related: ["Provider", "User", "Operator", "Fundamental Rights Impact Assessment"],
    keyPoints: [
      "Uses AI under own authority",
      "Excludes personal use",
      "Has specific obligations for high-risk AI",
      "Must conduct FRIA in certain cases",
    ],
  },
  {
    id: "authorised-representative",
    term: "Authorised Representative",
    definition:
      "A natural or legal person located or established in the Union who has received and accepted a written mandate from a provider of an AI system or a general-purpose AI model to, respectively, perform and carry out on its behalf the obligations and procedures established by this Regulation.",
    article: "Article 3(5)",
    category: "Actors & Roles",
    related: ["Provider", "Non-EU Provider", "Market Surveillance"],
  },
  {
    id: "importer",
    term: "Importer",
    definition:
      "A natural or legal person located or established in the Union that places on the market an AI system that bears the name or trademark of a natural or legal person established in a third country.",
    article: "Article 3(6)",
    category: "Actors & Roles",
    related: ["Provider", "Distributor", "Third Country"],
  },
  {
    id: "distributor",
    term: "Distributor",
    definition:
      "A natural or legal person in the supply chain, other than the provider or the importer, that makes an AI system available on the Union market.",
    article: "Article 3(7)",
    category: "Actors & Roles",
    related: ["Provider", "Importer", "Supply Chain"],
  },
  {
    id: "operator",
    term: "Operator",
    definition:
      "A provider, product manufacturer, deployer, authorised representative, importer or distributor.",
    article: "Article 3(8)",
    category: "Actors & Roles",
    related: ["Provider", "Deployer", "Supply Chain"],
  },
  {
    id: "affected-person",
    term: "Affected Person",
    definition:
      "A natural person who is subject to or otherwise affected by an AI system.",
    article: "Article 3(53)",
    category: "Actors & Roles",
    related: ["Fundamental Rights", "Transparency", "Right to Explanation"],
  },
  {
    id: "notified-body",
    term: "Notified Body",
    definition:
      "A conformity assessment body notified in accordance with this Regulation and other relevant Union harmonisation legislation.",
    article: "Article 3(22)",
    category: "Actors & Roles",
    related: ["Conformity Assessment", "Third-Party Assessment", "CE Marking"],
  },

  // === RISK CLASSIFICATION ===
  {
    id: "prohibited-ai-practices",
    term: "Prohibited AI Practices",
    definition:
      "AI systems and practices that are prohibited under Article 5 due to their unacceptable risk to fundamental rights, including subliminal manipulation, exploitation of vulnerabilities, social scoring by public authorities, and certain uses of real-time remote biometric identification.",
    article: "Article 5",
    category: "Risk Classification",
    related: ["Social Scoring", "Subliminal Techniques", "Biometric Identification"],
    keyPoints: [
      "Complete ban - no compliance pathway",
      "Social scoring prohibited",
      "Subliminal manipulation banned",
      "Some biometric ID exceptions for law enforcement",
    ],
    examples: [
      "Social scoring systems",
      "AI exploiting children's vulnerabilities",
      "Emotion recognition in workplace/education (with exceptions)",
      "Untargeted facial image scraping",
    ],
  },
  {
    id: "high-risk-ai-system",
    term: "High-Risk AI System",
    definition:
      "An AI system that falls within one of the areas listed in Annex III (such as biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice) or is a safety component of a product covered by Union harmonisation legislation listed in Annex I.",
    article: "Article 6",
    category: "Risk Classification",
    related: ["Annex III", "Conformity Assessment", "CE Marking", "Technical Documentation"],
    keyPoints: [
      "Two pathways to high-risk",
      "Extensive compliance requirements",
      "Mandatory conformity assessment",
      "Registration in EU database",
    ],
    examples: [
      "AI for CV screening in recruitment",
      "Credit scoring systems",
      "AI in medical devices",
      "Biometric identification systems",
    ],
  },
  {
    id: "limited-risk-ai",
    term: "Limited Risk AI",
    definition:
      "AI systems subject primarily to transparency obligations under Article 50, where users must be informed they are interacting with AI or that content was AI-generated.",
    article: "Article 50",
    category: "Risk Classification",
    related: ["Transparency Obligations", "Chatbots", "Deepfakes", "Emotion Recognition"],
    examples: [
      "Chatbots and conversational AI",
      "AI-generated content (deepfakes)",
      "Emotion recognition systems",
      "Biometric categorisation",
    ],
  },
  {
    id: "minimal-risk-ai",
    term: "Minimal Risk AI",
    definition:
      "AI systems not falling under prohibited, high-risk, or limited risk categories. No mandatory requirements apply, though voluntary codes of conduct are encouraged.",
    article: "Recital 28",
    category: "Risk Classification",
    related: ["Codes of Conduct", "Voluntary Standards"],
    examples: [
      "AI-enabled video games",
      "Spam filters",
      "Inventory management systems",
      "AI in manufacturing optimisation",
    ],
  },
  {
    id: "social-scoring",
    term: "Social Scoring",
    definition:
      "AI systems that evaluate or classify natural persons or groups based on their social behaviour or known, inferred or predicted personal characteristics, leading to detrimental or unfavourable treatment in unrelated social contexts or disproportionate to their social behaviour.",
    article: "Article 5(1)(c)",
    category: "Risk Classification",
    related: ["Prohibited AI Practices", "Fundamental Rights", "Public Authorities"],
  },
  {
    id: "subliminal-techniques",
    term: "Subliminal Techniques",
    definition:
      "AI systems deploying techniques beyond a person's consciousness to materially distort their behaviour in a manner that causes or is reasonably likely to cause significant harm.",
    article: "Article 5(1)(a)",
    category: "Risk Classification",
    related: ["Prohibited AI Practices", "Manipulation", "Dark Patterns"],
  },
  {
    id: "biometric-identification",
    term: "Biometric Identification",
    definition:
      "The automated recognition of physical, physiological, behavioural, or psychological human features for the purpose of establishing the identity of a natural person by comparing biometric data of that person to biometric data stored in a database.",
    article: "Article 3(35)",
    category: "Risk Classification",
    related: ["Remote Biometric Identification", "Biometric Data", "Real-Time Identification"],
  },
  {
    id: "remote-biometric-identification",
    term: "Remote Biometric Identification",
    definition:
      "An AI system for the purpose of identifying natural persons, without their active involvement, typically at a distance through comparison of a person's biometric data with the biometric data contained in a reference database.",
    article: "Article 3(37)",
    category: "Risk Classification",
    related: ["Biometric Identification", "Real-Time Identification", "Law Enforcement"],
  },
  {
    id: "real-time-rbi",
    term: "Real-Time Remote Biometric Identification",
    definition:
      "A remote biometric identification system whereby the capturing of biometric data, the comparison and the identification all occur without a significant delay, comprising instantaneous identification as well as limited short delays to avoid circumvention.",
    article: "Article 3(38)",
    category: "Risk Classification",
    related: ["Remote Biometric Identification", "Law Enforcement", "Prohibited AI Practices"],
  },
  {
    id: "post-rbi",
    term: "Post Remote Biometric Identification",
    definition:
      "A remote biometric identification system other than a real-time remote biometric identification system.",
    article: "Article 3(39)",
    category: "Risk Classification",
    related: ["Remote Biometric Identification", "Real-Time RBI"],
  },
  {
    id: "emotion-recognition",
    term: "Emotion Recognition System",
    definition:
      "An AI system for the purpose of identifying or inferring emotions or intentions of natural persons on the basis of their biometric data.",
    article: "Article 3(34)",
    category: "Risk Classification",
    related: ["Biometric Data", "Transparency Obligations", "Workplace AI"],
  },
  {
    id: "biometric-categorisation",
    term: "Biometric Categorisation System",
    definition:
      "An AI system for the purpose of assigning natural persons to specific categories on the basis of their biometric data, unless ancillary to another commercial service and strictly necessary for objective technical reasons.",
    article: "Article 3(36)",
    category: "Risk Classification",
    related: ["Biometric Data", "Prohibited AI Practices", "Sensitive Categories"],
  },

  // === COMPLIANCE & ASSESSMENT ===
  {
    id: "conformity-assessment",
    term: "Conformity Assessment",
    definition:
      "The process demonstrating whether the requirements of this Regulation relating to a high-risk AI system have been fulfilled. Conformity assessment may be based on internal control or involve a third-party assessment by a notified body.",
    article: "Article 43",
    category: "Compliance & Assessment",
    related: ["CE Marking", "Notified Body", "Technical Documentation", "Internal Control"],
    keyPoints: [
      "Required before market placement",
      "Internal or third-party options",
      "Based on harmonised standards",
      "Results in CE marking",
    ],
  },
  {
    id: "ce-marking",
    term: "CE Marking",
    definition:
      "A marking by which a provider indicates that an AI system is in conformity with the requirements of this Regulation and other applicable Union harmonisation legislation providing for its affixing.",
    article: "Article 3(24)",
    category: "Compliance & Assessment",
    related: ["Conformity Assessment", "EU Declaration of Conformity", "Market Access"],
  },
  {
    id: "eu-declaration-conformity",
    term: "EU Declaration of Conformity",
    definition:
      "A document drawn up by the provider stating that the high-risk AI system complies with the requirements of this Regulation. The declaration must be kept for 10 years after the AI system has been placed on the market.",
    article: "Article 47",
    category: "Compliance & Assessment",
    related: ["CE Marking", "Conformity Assessment", "Provider"],
  },
  {
    id: "fundamental-rights-impact-assessment",
    term: "Fundamental Rights Impact Assessment (FRIA)",
    definition:
      "An assessment carried out by deployers of high-risk AI systems that are bodies governed by public law, or private entities providing public services, and deployers using AI for credit scoring or risk assessment in life/health insurance.",
    article: "Article 27",
    category: "Compliance & Assessment",
    related: ["Deployer", "High-Risk AI System", "Fundamental Rights", "DPIA"],
    keyPoints: [
      "Required for certain deployers",
      "Assess impact on fundamental rights",
      "Must be done before first use",
      "Complements DPIA under GDPR",
    ],
  },
  {
    id: "quality-management-system",
    term: "Quality Management System",
    definition:
      "A system implemented by providers of high-risk AI systems to ensure compliance with this Regulation, documented in a systematic and orderly manner in the form of written policies, procedures and instructions.",
    article: "Article 17",
    category: "Compliance & Assessment",
    related: ["Provider", "High-Risk AI System", "ISO Standards"],
  },
  {
    id: "post-market-monitoring",
    term: "Post-Market Monitoring",
    definition:
      "All activities carried out by providers of AI systems to collect and review experience gained from the use of AI systems they place on the market or put into service for the purpose of identifying any need to immediately apply corrective or preventive actions.",
    article: "Article 72",
    category: "Compliance & Assessment",
    related: ["Provider", "Serious Incident", "Market Surveillance"],
  },
  {
    id: "ai-regulatory-sandbox",
    term: "AI Regulatory Sandbox",
    definition:
      "A controlled framework set up by a competent authority which offers providers or prospective providers of AI systems the possibility to develop, train, validate and test an innovative AI system under regulatory supervision for a limited time.",
    article: "Article 57",
    category: "Compliance & Assessment",
    related: ["Competent Authority", "Innovation", "Testing"],
    keyPoints: [
      "Controlled testing environment",
      "Regulatory supervision",
      "Limited time period",
      "Supports innovation",
    ],
  },
  {
    id: "harmonised-standard",
    term: "Harmonised Standard",
    definition:
      "A European standard adopted on the basis of a request made by the Commission for the application of Union harmonisation legislation.",
    article: "Article 3(28)",
    category: "Compliance & Assessment",
    related: ["Conformity Assessment", "Presumption of Conformity", "CEN/CENELEC"],
  },
  {
    id: "common-specification",
    term: "Common Specification",
    definition:
      "A set of technical specifications providing means to comply with certain requirements established under this Regulation, adopted by the Commission where harmonised standards do not exist or are insufficient.",
    article: "Article 41",
    category: "Compliance & Assessment",
    related: ["Harmonised Standard", "Technical Specification", "Commission"],
  },

  // === DOCUMENTATION ===
  {
    id: "technical-documentation",
    term: "Technical Documentation",
    definition:
      "Documentation required under Article 11 that enables national competent authorities and notified bodies to assess the compliance of the high-risk AI system with the requirements set out in this Regulation.",
    article: "Article 11",
    category: "Documentation",
    related: ["Conformity Assessment", "Annex IV", "Record-Keeping"],
    keyPoints: [
      "Must be prepared before market placement",
      "Kept up to date",
      "Content specified in Annex IV",
      "Retained for 10 years",
    ],
  },
  {
    id: "instructions-for-use",
    term: "Instructions for Use",
    definition:
      "Information provided by the provider to inform the deployer of an AI system's intended purpose and proper use, including the specific geographical, behavioural or functional settings within which the high-risk AI system is intended to be used.",
    article: "Article 13",
    category: "Documentation",
    related: ["Technical Documentation", "Intended Purpose", "Deployer"],
  },
  {
    id: "logging-capabilities",
    term: "Logging Capabilities",
    definition:
      "Automatic recording of events (logs) while high-risk AI systems are operating, enabling traceability of the AI system's functioning throughout its lifecycle.",
    article: "Article 12",
    category: "Documentation",
    related: ["Traceability", "High-Risk AI System", "Audit Trail"],
  },
  {
    id: "eu-database",
    term: "EU Database for High-Risk AI Systems",
    definition:
      "A database established and maintained by the Commission containing information about high-risk AI systems registered by providers before placing them on the market or putting them into service.",
    article: "Article 71",
    category: "Documentation",
    related: ["Registration", "High-Risk AI System", "Transparency"],
  },

  // === REQUIREMENTS ===
  {
    id: "risk-management-system",
    term: "Risk Management System",
    definition:
      "A continuous iterative process planned and run throughout the entire lifecycle of a high-risk AI system, requiring regular systematic updating. It shall identify and analyse known and reasonably foreseeable risks, estimate and evaluate risks, and adopt risk management measures.",
    article: "Article 9",
    category: "Requirements",
    related: ["High-Risk AI System", "Technical Documentation", "Residual Risk"],
    keyPoints: [
      "Continuous throughout lifecycle",
      "Iterative process",
      "Systematic updating required",
      "Must address foreseeable risks",
    ],
  },
  {
    id: "data-governance",
    term: "Data Governance",
    definition:
      "Requirements for training, validation and testing data sets used for high-risk AI systems, including requirements for relevance, representativeness, accuracy, completeness, and appropriateness for the intended purpose.",
    article: "Article 10",
    category: "Requirements",
    related: ["Training Data", "Bias", "Data Quality", "GDPR"],
    keyPoints: [
      "Data quality requirements",
      "Bias examination mandatory",
      "Statistical properties must be appropriate",
      "Documentation of data choices",
    ],
  },
  {
    id: "human-oversight",
    term: "Human Oversight",
    definition:
      "Measures designed to be implemented by the deployer, or identified by the provider, to enable natural persons to oversee the functioning of a high-risk AI system, understand its capabilities and limitations, monitor operation, and intervene or interrupt when necessary.",
    article: "Article 14",
    category: "Requirements",
    related: ["High-Risk AI System", "Deployer", "Automation Bias"],
    keyPoints: [
      "Built into system design",
      "Prevents automation bias",
      "Enables intervention",
      "Appropriate to context",
    ],
  },
  {
    id: "accuracy",
    term: "Accuracy",
    definition:
      "High-risk AI systems shall be designed and developed in such a way that they achieve an appropriate level of accuracy, robustness and cybersecurity, as declared by the provider.",
    article: "Article 15(1)",
    category: "Requirements",
    related: ["Robustness", "Cybersecurity", "Performance Metrics"],
  },
  {
    id: "robustness",
    term: "Robustness",
    definition:
      "The ability of a high-risk AI system to maintain its level of performance when facing conditions not anticipated during development, including errors, faults, inconsistencies, or adversarial attacks.",
    article: "Article 15(4)",
    category: "Requirements",
    related: ["Accuracy", "Cybersecurity", "Adversarial Attacks"],
  },
  {
    id: "cybersecurity",
    term: "Cybersecurity",
    definition:
      "High-risk AI systems shall be designed and developed so that they achieve an appropriate level of cybersecurity and are resilient against attempts to alter their use, outputs or performance.",
    article: "Article 15(5)",
    category: "Requirements",
    related: ["Robustness", "Data Poisoning", "Model Manipulation"],
  },
  {
    id: "transparency-requirements",
    term: "Transparency Requirements",
    definition:
      "High-risk AI systems shall be designed and developed in such a way as to ensure that their operation is sufficiently transparent to enable deployers to interpret a system's output and use it appropriately.",
    article: "Article 13",
    category: "Requirements",
    related: ["Instructions for Use", "Explainability", "Deployer"],
  },

  // === GOVERNANCE ===
  {
    id: "ai-office",
    term: "AI Office",
    definition:
      "The Commission body established to support the implementation and enforcement of the AI Act, particularly regarding general-purpose AI models, and to coordinate AI governance across the EU.",
    article: "Article 64",
    category: "Governance",
    related: ["European Commission", "GPAI", "AI Board"],
    keyPoints: [
      "Commission body",
      "Oversees GPAI compliance",
      "Coordinates enforcement",
      "Develops guidance",
    ],
  },
  {
    id: "ai-board",
    term: "European Artificial Intelligence Board",
    definition:
      "An advisory body composed of representatives from Member States established to assist the Commission and Member States in ensuring consistent application of the AI Act across the Union.",
    article: "Article 65",
    category: "Governance",
    related: ["AI Office", "Member States", "Coordination"],
  },
  {
    id: "national-competent-authority",
    term: "National Competent Authority",
    definition:
      "The notifying authority and the market surveillance authority designated by each Member State for the purpose of the AI Act. Member States may designate more than one competent authority.",
    article: "Article 70",
    category: "Governance",
    related: ["Market Surveillance", "Notifying Authority", "Enforcement"],
  },
  {
    id: "market-surveillance-authority",
    term: "Market Surveillance Authority",
    definition:
      "The national authority carrying out market surveillance activities and enforcement of the AI Act, with powers to investigate, request information, and take corrective measures.",
    article: "Article 70",
    category: "Governance",
    related: ["National Competent Authority", "Enforcement", "Penalties"],
  },
  {
    id: "scientific-panel",
    term: "Scientific Panel of Independent Experts",
    definition:
      "A panel of independent experts established to support the enforcement of the AI Act, particularly in relation to general-purpose AI models, providing technical expertise and assessments.",
    article: "Article 68",
    category: "Governance",
    related: ["AI Office", "GPAI", "Systemic Risk"],
  },

  // === TECHNICAL ===
  {
    id: "training-data",
    term: "Training Data",
    definition:
      "Data used for training an AI system through fitting its learnable parameters. Training data must meet quality requirements for high-risk AI systems.",
    article: "Article 3(29)",
    category: "Technical",
    related: ["Validation Data", "Testing Data", "Data Governance"],
  },
  {
    id: "validation-data",
    term: "Validation Data",
    definition:
      "Data used for providing an evaluation of the trained AI system and for tuning its non-learnable parameters and its learning process to prevent underfitting or overfitting.",
    article: "Article 3(30)",
    category: "Technical",
    related: ["Training Data", "Testing Data", "Overfitting"],
  },
  {
    id: "testing-data",
    term: "Testing Data",
    definition:
      "Data used for providing an independent evaluation of the AI system to confirm expected performance before placing on the market or putting into service.",
    article: "Article 3(31)",
    category: "Technical",
    related: ["Training Data", "Validation Data", "Performance"],
  },
  {
    id: "input-data",
    term: "Input Data",
    definition:
      "Data provided to or directly acquired by an AI system on the basis of which the system produces an output.",
    article: "Article 3(32)",
    category: "Technical",
    related: ["Output", "AI System", "Inference"],
  },
  {
    id: "biometric-data",
    term: "Biometric Data",
    definition:
      "Personal data resulting from specific technical processing relating to the physical, physiological or behavioural characteristics of a natural person, such as facial images or dactyloscopic data.",
    article: "Article 3(33)",
    category: "Technical",
    related: ["Biometric Identification", "GDPR", "Special Categories"],
  },
  {
    id: "deep-fake",
    term: "Deep Fake",
    definition:
      "AI-generated or manipulated image, audio or video content that resembles existing persons, objects, places, entities or events and would falsely appear to a person to be authentic or truthful.",
    article: "Article 3(60)",
    category: "Technical",
    related: ["Transparency Obligations", "Synthetic Media", "Disclosure"],
  },

  // === ENFORCEMENT ===
  {
    id: "serious-incident",
    term: "Serious Incident",
    definition:
      "An incident or malfunctioning of an AI system that directly or indirectly leads to death or serious damage to health, property, or the environment, or serious and irreversible disruption of critical infrastructure.",
    article: "Article 3(49)",
    category: "Enforcement",
    related: ["Post-Market Monitoring", "Reporting", "Market Surveillance"],
    keyPoints: [
      "Must be reported immediately",
      "Triggers investigation",
      "May result in market withdrawal",
      "Includes near-misses in some cases",
    ],
  },
  {
    id: "penalties",
    term: "Penalties and Fines",
    definition:
      "Administrative fines for non-compliance with the AI Act, with maximum amounts up to 35 million EUR or 7% of worldwide annual turnover for prohibited AI practices, 15 million EUR or 3% for other violations.",
    article: "Article 99",
    category: "Enforcement",
    related: ["Prohibited AI Practices", "Non-Compliance", "Market Surveillance"],
    keyPoints: [
      "Up to 35M EUR / 7% for prohibited practices",
      "Up to 15M EUR / 3% for other violations",
      "Up to 7.5M EUR / 1.5% for false information",
      "Proportionate to violation severity",
    ],
  },
  {
    id: "right-to-explanation",
    term: "Right to Explanation",
    definition:
      "The right of affected persons to obtain from the deployer clear and meaningful explanations about the role of the AI system in the decision-making procedure and the main elements of the decision taken.",
    article: "Article 86",
    category: "Enforcement",
    related: ["Affected Person", "Transparency", "High-Risk AI System"],
  },
  {
    id: "right-to-complaint",
    term: "Right to Lodge a Complaint",
    definition:
      "The right of any natural or legal person to lodge a complaint with the relevant market surveillance authority if they consider that there has been an infringement of the AI Act.",
    article: "Article 85",
    category: "Enforcement",
    related: ["Market Surveillance Authority", "Affected Person", "Enforcement"],
  },

  // === GPAI (General Purpose AI) ===
  {
    id: "gpai-model",
    term: "General-Purpose AI Model",
    definition:
      "An AI model, including where such an AI model is trained with a large amount of data using self-supervision at scale, that displays significant generality and is capable of competently performing a wide range of distinct tasks.",
    article: "Article 3(63)",
    category: "GPAI",
    related: ["Foundation Model", "GPAI with Systemic Risk", "AI System"],
    keyPoints: [
      "Significant generality",
      "Wide range of tasks",
      "Often trained at scale",
      "Distinct from AI systems",
    ],
  },
  {
    id: "gpai-systemic-risk",
    term: "General-Purpose AI Model with Systemic Risk",
    definition:
      "A general-purpose AI model that has high impact capabilities evaluated on the basis of appropriate technical tools and methodologies, including indicators such as computational power used for training (threshold: 10^25 FLOP).",
    article: "Article 51",
    category: "GPAI",
    related: ["GPAI Model", "Systemic Risk", "Model Evaluation"],
    keyPoints: [
      "High impact capabilities",
      "10^25 FLOP threshold",
      "Additional obligations",
      "Model evaluation required",
    ],
  },
  {
    id: "systemic-risk",
    term: "Systemic Risk",
    definition:
      "A risk that is specific to the high-impact capabilities of general-purpose AI models, having a significant impact on the Union market due to their reach, or due to actual or reasonably foreseeable negative effects on public health, safety, public security, fundamental rights, or society.",
    article: "Article 3(65)",
    category: "GPAI",
    related: ["GPAI with Systemic Risk", "Model Evaluation", "Risk Mitigation"],
  },
  {
    id: "downstream-provider",
    term: "Downstream Provider",
    definition:
      "A provider of an AI system, including a general-purpose AI system, which integrates an AI model, regardless of whether the AI model is provided by themselves and vertically integrated or provided by another entity based on contractual relations.",
    article: "Article 3(68)",
    category: "GPAI",
    related: ["GPAI Model", "Provider", "Integration"],
  },
  {
    id: "gpai-transparency",
    term: "GPAI Transparency Obligations",
    definition:
      "Obligations for providers of general-purpose AI models to draw up and keep up-to-date technical documentation, make available information to downstream providers, put in place a policy to respect EU copyright law, and publish a summary of training data.",
    article: "Article 53",
    category: "GPAI",
    related: ["Technical Documentation", "Copyright", "Training Data Summary"],
  },
  {
    id: "model-evaluation",
    term: "Model Evaluation",
    definition:
      "Evaluations of general-purpose AI models with systemic risk to identify and mitigate systemic risks, including adversarial testing and red-teaming procedures.",
    article: "Article 55",
    category: "GPAI",
    related: ["GPAI with Systemic Risk", "Adversarial Testing", "Red-Teaming"],
  },
  {
    id: "codes-of-practice",
    term: "Codes of Practice",
    definition:
      "Voluntary codes developed with the involvement of providers of general-purpose AI models to demonstrate compliance with GPAI obligations, providing detailed technical and operational guidance.",
    article: "Article 56",
    category: "GPAI",
    related: ["GPAI Model", "Compliance", "Self-Regulation"],
  },
]

// Helper function to get terms by category
export function getTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return GLOSSARY_TERMS.filter((term) => term.category === category)
}

// Helper function to search terms
export function searchTerms(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase()
  return GLOSSARY_TERMS.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery) ||
      term.article.toLowerCase().includes(lowerQuery)
  )
}

// Helper function to get related terms
export function getRelatedTerms(termId: string): GlossaryTerm[] {
  const term = GLOSSARY_TERMS.find((t) => t.id === termId)
  if (!term) return []

  return GLOSSARY_TERMS.filter((t) =>
    term.related.some((r) => t.term.toLowerCase().includes(r.toLowerCase()))
  )
}
