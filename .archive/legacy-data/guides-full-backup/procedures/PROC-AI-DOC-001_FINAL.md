# PROC-AI-DOC-001: AI Technical Documentation Procedure

**Procedure ID:** PROC-AI-DOC-001
**Procedure Name:** AI Technical Documentation Procedure
**Standard:** STD-AI-004: AI Technical Documentation Standard
**Covers Controls:** DOC-001, DOC-002, DOC-003, DOC-004, DOC-005
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the mandatory, step-by-step process for creating and maintaining comprehensive technical documentation for high-risk AI systems in compliance with Article 11 and Annex IV of the EU AI Act. It ensures that all required documentation is complete, accurate, continuously updated, and readily available for inspection by competent authorities and use by deployers throughout the AI system's 10-year retention period.

### 1.2 Scope

This procedure applies to:
- All AI systems classified as high-risk per Article 6 and Annex III of the EU AI Act
- General-purpose AI (GPAI) models subject to Annex XI and XII requirements
- AI systems undergoing substantial modifications requiring re-documentation
- The creation of initial technical documentation and all subsequent updates
- The maintenance, retention, and archival of technical documentation throughout the system lifecycle and 10-year post-market retention period

This procedure does not apply to:
- Technical documentation for non-high-risk AI systems (though these principles are recommended as best practice)
- General-purpose AI models with systemic risk (covered by enhanced GPAI procedures)

### 1.3 Regulatory Basis

This procedure implements the following EU AI Act requirements:

| EU AI Act Article | Requirement | Implemented By |
|-------------------|-------------|----------------|
| Article 11 | Technical documentation requirements | Sections 3, 4, Appendix A |
| Article 18 | Record-keeping and retention (10 years) | Section 8, Steps 4.2, 5.2 |
| Article 53 | Annex IV compliance | Appendix A (Complete checklist) |
| Annex IV | Technical documentation content | Section 3.1, Appendix A |
| Annex XI | GPAI model documentation | Section 9 |
| Annex XII | GPAI downstream provider information | Section 9 |

### 1.4 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Documentation Lead | [Email/Phone] |
| **Escalation** | [Name] | Chief Technology Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |
| **Compliance Support** | [Name] | AI Compliance Officer | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|----------------|-----------|
| **AI Documentation Lead** | Owns this procedure; accountable for the overall completeness, quality, and compliance of all technical documentation | Approve final technical documentation packages; authorize submission to authorities; block deployments if documentation incomplete |
| **AI System Owner** | Responsible for creating and maintaining the technical documentation for their AI system; ensure documentation accuracy and currency | Author and update technical documentation; request reviews from SMEs; accept residual documentation risks |
| **Technical Writer** | Responsible for ensuring documentation clarity, consistency, and accessibility; maintain documentation standards | Edit documentation for clarity; enforce style guidelines; approve documentation format |
| **Data Scientist** | Provide technical content for model architecture, training methodology, data governance, and performance metrics | Approve technical accuracy of model documentation; sign off on bias assessments |
| **QA Engineer** | Provide testing and validation results; verify documentation accuracy against actual system | Approve testing documentation; verify technical claims |
| **Compliance Officer** | Verify regulatory compliance of documentation; ensure Annex IV completeness | Approve compliance attestation; challenge incomplete documentation |
| **Subject Matter Experts (SMEs)** | Review and approve sections within their domain expertise | Approve specific technical sections; provide expert validation |

### 2.2 RACI Matrix

| Activity | Doc Lead | System Owner | Technical Writer | Data Scientist | QA Engineer | Compliance | SMEs |
|----------|----------|--------------|------------------|----------------|-------------|------------|------|
| Initiate documentation process | A | R | C | C | I | C | I |
| Create documentation plan | A | R | C | I | I | C | I |
| Document system architecture | C | R | C | A | I | I | C |
| Document data and training | C | R | C | A | I | I | C |
| Document testing results | C | R | C | C | A | I | C |
| Technical review | C | C | C | R | R | R | R |
| Compliance review | C | C | I | I | I | A | I |
| Final approval | A | R | I | I | I | C | I |
| Maintain documentation | A | R | C | C | C | C | I |
| 10-year retention management | A | C | I | I | I | C | I |
| Archive documentation | R | C | I | I | I | C | I |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. TECHNICAL DOCUMENTATION FRAMEWORK

### 3.1 Technical Documentation Structure (Annex IV Alignment)

The technical documentation is a comprehensive set of documents structured according to Annex IV of the EU AI Act. It consists of nine mandatory parts:

```
┌──────────────────────────────────────────────────────────────────┐
│       TECHNICAL DOCUMENTATION STRUCTURE (ANNEX IV COMPLETE)      │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  PART 1: GENERAL DESCRIPTION OF THE AI SYSTEM                   │
│  ├─ System identification and version                            │
│  ├─ Provider identification and contact details                  │
│  ├─ Intended purpose and use cases                              │
│  ├─ High-risk classification rationale                           │
│  ├─ Target users and deployer profiles                           │
│  ├─ Hardware and software dependencies                           │
│  ├─ Versions and update history                                  │
│  └─ Instructions for use and deployment                          │
│                                                                   │
│  PART 2: DETAILED DESCRIPTION - DEVELOPMENT PROCESS              │
│  (a) Development methods and third-party tools/services          │
│      ├─ Development methodology and lifecycle                    │
│      ├─ Third-party components and dependencies                  │
│      ├─ Open-source libraries and licenses                       │
│      └─ External services and APIs                               │
│  (b) Design specifications and system architecture               │
│      ├─ High-level architecture diagram                          │
│      ├─ Component descriptions and interactions                  │
│      ├─ Data flow diagrams                                       │
│      ├─ Model type and algorithmic approach                      │
│      └─ Key parameters and hyperparameters                       │
│  (c) Data requirements and specifications                        │
│      ├─ Training data characteristics                            │
│      ├─ Data governance and quality standards                    │
│      ├─ Data collection methodology                              │
│      ├─ Data preprocessing and feature engineering               │
│      └─ Data sheets and data cards                               │
│  (d) Human oversight measures                                    │
│      ├─ Human oversight design rationale                         │
│      ├─ Human-in-the-loop mechanisms                             │
│      ├─ Human-on-the-loop monitoring                             │
│      ├─ Human override capabilities                              │
│      └─ Operator training requirements                           │
│  (e) Pre-determined changes and update procedures                │
│      ├─ Permitted modification scope                             │
│      ├─ Substantial modification criteria                        │
│      ├─ Update and patch procedures                              │
│      └─ Version control methodology                              │
│  (f) Validation and testing procedures                           │
│      ├─ Test plan and methodology                                │
│      ├─ Validation datasets and benchmarks                       │
│      ├─ Performance testing results                              │
│      └─ Robustness and bias testing                              │
│                                                                   │
│  PART 3: MONITORING, FUNCTIONING, AND CONTROL                    │
│  ├─ Post-deployment monitoring procedures                        │
│  ├─ Key Risk Indicators (KRIs) and thresholds                    │
│  ├─ Performance metrics and SLAs                                 │
│  ├─ Alerting and escalation procedures                           │
│  ├─ Continuous validation approach                               │
│  └─ Model drift detection and response                           │
│                                                                   │
│  PART 4: PERFORMANCE METRICS AND ROBUSTNESS                      │
│  ├─ Performance metrics (accuracy, precision, recall, F1)        │
│  ├─ Performance across demographic groups                        │
│  ├─ Robustness testing results                                   │
│  ├─ Adversarial attack resilience                                │
│  ├─ Edge case and outlier handling                               │
│  ├─ Known limitations and failure modes                          │
│  └─ Error handling and graceful degradation                      │
│                                                                   │
│  PART 5: QUALITY MANAGEMENT SYSTEM                               │
│  ├─ Quality management framework reference                       │
│  ├─ Quality assurance procedures                                 │
│  ├─ Change management process                                    │
│  ├─ Version control and release management                       │
│  ├─ Configuration management                                     │
│  └─ Audit and compliance processes                               │
│                                                                   │
│  PART 6: LIFECYCLE CHANGES DESCRIPTION                           │
│  ├─ Post-market modifications log                                │
│  ├─ Substantial modification assessments                         │
│  ├─ Retraining and update history                                │
│  ├─ Performance impact of changes                                │
│  └─ Re-validation after modifications                            │
│                                                                   │
│  PART 7: HARMONIZED STANDARDS AND SOLUTIONS                      │
│  ├─ List of applied harmonized standards                         │
│  ├─ Standards compliance evidence                                │
│  ├─ Alternative technical solutions (if standards not applied)   │
│  ├─ Justification for alternative solutions                      │
│  └─ Common specifications applied                                │
│                                                                   │
│  PART 8: EU DECLARATION OF CONFORMITY                            │
│  ├─ Copy of signed EU declaration of conformity                  │
│  ├─ Conformity assessment procedure followed                     │
│  ├─ Notified body information (if applicable)                    │
│  └─ Conformity marking documentation                             │
│                                                                   │
│  PART 9: POST-MARKET PERFORMANCE EVALUATION                      │
│  ├─ Post-market monitoring plan reference                        │
│  ├─ Performance evaluation procedures                            │
│  ├─ Data collection and analysis methods                         │
│  ├─ Incident reporting procedures                                │
│  ├─ Serious incident response plan                               │
│  └─ Corrective action procedures                                 │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 Documentation Lifecycle Integration

Technical documentation is created, updated, and maintained throughout the AI system lifecycle and 10-year retention period:

| Lifecycle Phase | Documentation Activities | Gate Criteria | Evidence Required |
|-----------------|-------------------------|---------------|-------------------|
| **1. Design** | Initial documentation outline created; system architecture documented; risk assessment documented | Documentation plan approved; Architecture documented | Documentation Plan; Architecture Diagrams; Initial Risk Assessment |
| **2. Development** | Development methodology documented; training process documented; data governance documented | Development documentation complete; Data sheets created | Development Log; Training Records; Data Sheets |
| **3. Testing** | Testing results documented; performance metrics recorded; bias assessment completed | All testing documented; Performance thresholds met | Test Reports; Performance Metrics; Bias Assessment |
| **4. Pre-Deployment** | Final documentation package completed and approved; compliance review passed | Final documentation approved; Compliance attestation signed | Final Documentation Package; Compliance Certificate |
| **5. Deployment** | Deployment configuration documented; initial monitoring baseline established | Deployment verified; Monitoring operational | Deployment Records; Monitoring Baseline |
| **6. Operation** | Documentation maintained and updated; modifications documented; monitoring results logged | Documentation current; Updates within 30 days | Version History; Modification Log; Monitoring Reports |
| **7. Decommissioning** | Final documentation archived; retention plan executed; 10-year retention begins | Documentation archived; Retention verified | Archive Records; Retention Certificate |
| **8. Post-Market (10 years)** | Documentation retained in accessible format; authority access maintained | Annual retention verification | Annual Retention Audit; Access Logs |

### 3.3 Documentation Quality Standards

All technical documentation must meet these quality criteria:

| Quality Dimension | Standard | Verification Method |
|-------------------|----------|---------------------|
| **Completeness** | All Annex IV sections present and populated | Checklist verification (Appendix A) |
| **Accuracy** | Documentation matches actual system implementation | Spot-check verification; Technical review |
| **Currency** | Documentation updated within 30 days of changes | Version control audit; Change log review |
| **Clarity** | Accessible to competent authorities and deployers | Technical writer review; Readability assessment |
| **Traceability** | All claims linked to evidence | Evidence mapping; Cross-reference verification |
| **Accessibility** | Retrievable within 72 hours of authority request | Access time testing; Annual drill |

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: DOCUMENTATION PLANNING AND INITIATION

#### Step 1.1: Initiate Documentation Process (Control DOC-001)

**When:** At the start of AI system design phase (within 1 week of project initiation)

**Who:** AI Documentation Lead + AI System Owner

**How:**

1. **Trigger Documentation Initiation**
   - AI system classified as high-risk (per PROC-AI-CLS-001)
   - AI system project initiation approved
   - Documentation Lead notified within 48 hours

2. **Schedule Documentation Planning Meeting**
   - Schedule 3-hour planning workshop
   - Participants: AI System Owner, Documentation Lead, Technical Writer, Data Scientist, QA Engineer, Compliance Officer
   - Timing: Within 1 week of project initiation
   - Agenda: Scope, timeline, resource allocation, roles, review schedule

3. **Create Documentation Plan**
   - Complete Documentation Plan Template (TMP-AI-DOC-001, Sheet 1)
   - Define scope: Which Annex IV sections apply?
   - Define timeline: Documentation milestones aligned with development phases
   - Define resources: Who will author each section?
   - Define review schedule: Technical review, compliance review, approval timeline
   - Define tools: Documentation repository, version control, collaboration tools

4. **Assign Section Responsibilities**
   - Part 1 (General Description): AI System Owner + Technical Writer
   - Part 2(a) (Development Methods): Development Lead
   - Part 2(b) (Design Specifications): System Architect
   - Part 2(c) (Data Requirements): Data Scientist + Data Steward
   - Part 2(d) (Human Oversight): UX Designer + Product Manager
   - Part 2(e) (Pre-determined Changes): Configuration Manager
   - Part 2(f) (Validation & Testing): QA Engineer
   - Part 3 (Monitoring & Control): ML Ops Engineer
   - Part 4 (Performance & Robustness): Data Scientist + QA Engineer
   - Part 5 (QMS): Quality Manager
   - Part 6 (Lifecycle Changes): Configuration Manager
   - Part 7 (Standards): Compliance Officer
   - Part 8 (Declaration of Conformity): Legal Counsel + Compliance Officer
   - Part 9 (Post-Market Evaluation): Post-Market Monitoring Lead

5. **Establish Documentation Repository**
   - Create centralized documentation folder structure
   - Set up version control system (Git or document management system)
   - Configure access controls (role-based permissions)
   - Implement backup and disaster recovery
   - Document repository structure and access procedures

6. **Document Planning Outcomes**
   - Complete Documentation Initiation Report (REC-AI-DOC-001)
   - Document plan approved by AI Documentation Lead
   - Responsibilities acknowledged by assigned personnel
   - Timeline baselined and communicated

**Evidence Required:**
- Completed Documentation Plan (TMP-AI-DOC-001, Sheet 1)
- Documentation Initiation Report (REC-AI-DOC-001)
- Repository setup verification
- Role assignment matrix with sign-offs

**Timing:** 1 week from AI system project initiation

**Quality Check:**
- Documentation plan covers all Annex IV sections
- Timeline is realistic and aligned with development schedule
- All roles assigned with named individuals
- Repository is accessible and secure

---

#### Step 1.2: Define Documentation Standards (Control DOC-002)

**When:** Week 1 of documentation initiation (parallel with Step 1.1)

**Who:** AI Documentation Lead + Technical Writer

**How:**

1. **Establish Writing Standards**
   - **Style Guide:** Professional, clear, accessible to technical and regulatory audiences
   - **Voice:** Third-person, active voice where possible
   - **Tense:** Present tense for current capabilities; past tense for development activities
   - **Terminology:** Consistent use of EU AI Act terminology (aligned with Appendix C)
   - **Acronyms:** Define all acronyms on first use
   - **Length:** Concise but comprehensive; no arbitrary page limits

2. **Define Document Structure Standards**
   - **Hierarchy:** Maximum 4 heading levels (H1, H2, H3, H4)
   - **Numbering:** Consistent section numbering (1.0, 1.1, 1.1.1)
   - **Tables:** Used for structured data; include headers and captions
   - **Figures:** High-resolution diagrams; include captions and references
   - **Lists:** Bulleted for unordered; numbered for sequential steps
   - **Cross-references:** Hyperlinked within document and to external evidence

3. **Establish Formatting Standards**
   - **Font:** Arial or Calibri, 11pt for body text, 14pt for H2, 12pt for H3
   - **Spacing:** 1.15 line spacing; 6pt before/after paragraphs
   - **Margins:** 1 inch (2.54cm) on all sides
   - **Headers/Footers:** Document ID, version, date, page number
   - **Document Format:** Primary format PDF/A for archival; editable format .docx maintained

4. **Create Documentation Templates**
   - Create templates for each Annex IV section (TMP-AI-DOC-001, Sheets 2-10)
   - Templates include: section headings, required content prompts, examples, placeholder text
   - Templates include mandatory evidence linking fields
   - Distribute templates to all assigned personnel

5. **Establish Review and Approval Process**
   - **Technical Review:** All sections reviewed by assigned SME
   - **Compliance Review:** All sections reviewed by Compliance Officer
   - **Final Approval:** AI Documentation Lead approves complete package
   - **Review Criteria:** Completeness, accuracy, clarity, compliance
   - **Review Timeline:** 2 weeks for technical review; 1 week for compliance review
   - **Comment Resolution:** All reviewer comments addressed or explicitly accepted as residual risk

6. **Define Version Control Standards**
   - **Versioning Scheme:** Major.Minor.Patch (e.g., 1.0.0, 1.1.0, 1.1.1)
   - **Major Version:** Substantial modifications; full re-review required
   - **Minor Version:** Significant updates; targeted review required
   - **Patch Version:** Corrections and clarifications; no re-review required
   - **Change Tracking:** All changes documented in version history table
   - **Approval:** Version increments require AI System Owner approval

7. **Document Standards Package**
   - Complete Documentation Standards and Templates (TMP-AI-DOC-001, Sheet 2)
   - Publish standards to documentation repository
   - Conduct 1-hour training session for all documentation contributors
   - Distribute standards quick reference card (Appendix E)

**Evidence Required:**
- Documentation Standards and Templates (TMP-AI-DOC-001, Sheet 2)
- Style guide and formatting standards
- Template library (all Annex IV sections)
- Review and approval process flowchart
- Version control procedure
- Training attendance records

**Timing:** 1 week (parallel with Step 1.1)

**Quality Check:**
- Standards are clear and unambiguous
- Templates cover all Annex IV mandatory content
- Review process defines clear acceptance criteria
- Version control supports 10-year retention requirements

---

### PHASE 2: DOCUMENTATION CREATION (ANNEX IV PARTS 1-4)

#### Step 2.1: Document General Description (Control DOC-003, Annex IV Part 1)

**When:** Design phase (Weeks 2-3 of project)

**Who:** AI System Owner + Technical Writer

**How:**

1. **Document System Identification**
   - **System Name:** Official product/system name
   - **System ID:** Unique identifier (format: AI-SYS-YYYY-NNN)
   - **Version:** Current version number (initially 0.1.0 for development)
   - **Classification:** High-risk category per Annex III (reference PROC-AI-CLS-001)
   - **CE Marking Status:** Not yet CE marked (development phase)

2. **Document Provider Information**
   - **Provider Name:** Legal entity name
   - **Provider Address:** Registered business address
   - **Contact Person:** AI System Owner name and contact details
   - **Regulatory Contact:** Compliance Officer name and contact details
   - **Website:** Public-facing website URL
   - **Registration Number:** Business registration number

3. **Document Intended Purpose**
   - **Primary Use Case:** Detailed description of intended use (2-3 paragraphs)
   - **Use Case Examples:** 3-5 concrete examples of intended use
   - **Out-of-Scope Uses:** Explicitly document uses NOT intended (prohibited uses)
   - **Use Constraints:** Environmental, operational, or user constraints
   - **Intended Users:** User profiles and qualifications required
   - **Deployment Contexts:** Where and how the system will be deployed

4. **Document High-Risk Classification Rationale**
   - **Annex III Category:** Which category applies (e.g., Annex III.1(a) employment)
   - **Classification Criteria:** Why this system meets high-risk criteria
   - **Classification Evidence:** Reference to classification assessment (PROC-AI-CLS-001)
   - **Classification Date:** When classification was determined
   - **Classification Reviewer:** Who approved the classification

5. **Document Target Users and Deployers**
   - **User Profiles:** Who will interact with the AI system (operators, end-users)
   - **User Qualifications:** Required training, certifications, experience
   - **Deployer Profiles:** Organizations that will deploy the system
   - **Deployer Obligations:** Deployer responsibilities per Article 26
   - **Training Requirements:** Mandatory training for users and deployers

6. **Document Hardware and Software Dependencies**
   - **Hardware Requirements:** Minimum and recommended hardware specifications
   - **Software Requirements:** Operating system, runtime environment, dependencies
   - **Third-Party Services:** External APIs, cloud services, data sources
   - **Network Requirements:** Bandwidth, latency, connectivity requirements
   - **Security Requirements:** Authentication, authorization, encryption requirements

7. **Complete General Description Documentation**
   - Use template TMP-AI-DOC-001, Sheet 3
   - Include all evidence references
   - Cross-reference to risk assessment (PROC-AI-RM-001)
   - Obtain AI System Owner approval

**Evidence Required:**
- Completed General Description (Annex IV Part 1)
- Classification assessment reference
- Intended use specification
- User and deployer profiles
- Hardware/software requirements specification

**Timing:** 2 weeks during design phase

**Quality Check:**
- Intended purpose is clear and specific
- Out-of-scope uses are explicitly documented
- Classification rationale is well-supported
- User qualifications are defined
- Hardware/software requirements are testable

---

#### Step 2.2: Document Development Process and System Design (Control DOC-003, Annex IV Part 2)

**When:** Development phase (Weeks 4-12 of project)

**Who:** Development Lead, System Architect, Data Scientist, UX Designer, Configuration Manager, QA Engineer

**How:**

**PART 2(a): Development Methods and Third-Party Tools**

1. **Document Development Methodology**
   - **Development Approach:** Agile, Waterfall, DevOps, MLOps
   - **Development Phases:** Design, development, testing, deployment
   - **Development Tools:** IDEs, version control, CI/CD pipelines
   - **Development Standards:** Coding standards, review procedures
   - **Development Team:** Key personnel and roles

2. **Document Third-Party Components**
   - **Third-Party Libraries:** List all external libraries and versions
   - **Open-Source Components:** License information (MIT, Apache, GPL)
   - **Proprietary Components:** Vendor name, version, license agreement
   - **Cloud Services:** AWS, Azure, GCP services used
   - **APIs and Integrations:** External APIs consumed
   - **Dependency Management:** How dependencies are tracked and updated

3. **Document Supply Chain Risks**
   - **Component Risk Assessment:** Security and compliance risks of third-party components
   - **License Compliance:** Verification of license compatibility
   - **Vendor Lock-In Risks:** Assessment of switching costs
   - **Update and Patching:** How third-party components are kept current

**PART 2(b): Design Specifications and System Architecture**

4. **Document System Architecture**
   - **High-Level Architecture Diagram:** Major components and their interactions
   - **Component Descriptions:** Detailed description of each component
   - **Data Flow Diagram:** How data moves through the system
   - **Integration Points:** Where the AI system integrates with other systems
   - **Deployment Architecture:** Cloud, on-premises, hybrid deployment model

5. **Document AI Model Architecture**
   - **Model Type:** Neural network, decision tree, ensemble, transformer, etc.
   - **Model Architecture:** Layers, neurons, activation functions (for neural networks)
   - **Algorithmic Approach:** Supervised learning, reinforcement learning, etc.
   - **Training Approach:** Transfer learning, fine-tuning, from-scratch training
   - **Model Complexity:** Number of parameters, computational requirements

6. **Document Key Parameters and Hyperparameters**
   - **Hyperparameters:** Learning rate, batch size, epochs, regularization
   - **Thresholds:** Decision thresholds, confidence thresholds
   - **Configuration Parameters:** All configurable parameters and defaults
   - **Performance Parameters:** Latency targets, throughput targets

**PART 2(c): Data Requirements and Specifications**

7. **Document Training Data Characteristics**
   - **Data Volume:** Number of training samples
   - **Data Sources:** Where training data originated
   - **Data Timeframe:** When data was collected
   - **Data Demographics:** Demographic distribution in training data
   - **Data Representativeness:** How well data represents intended use population

8. **Document Data Governance and Quality Standards**
   - **Data Quality Metrics:** Completeness, accuracy, consistency, timeliness
   - **Data Quality Assessment Results:** Actual quality scores
   - **Data Validation Procedures:** How data quality is verified
   - **Data Lineage:** Tracking of data sources and transformations
   - **Data Retention:** How long data is retained

9. **Document Data Collection Methodology**
   - **Collection Methods:** Surveys, sensors, web scraping, APIs
   - **Collection Tools:** Software and systems used for collection
   - **Collection Dates:** When data was collected
   - **Consent and Legal Basis:** GDPR legal basis for data processing
   - **Bias in Collection:** Identified biases in collection process

10. **Document Data Preprocessing and Feature Engineering**
    - **Preprocessing Steps:** Cleaning, normalization, encoding
    - **Feature Selection:** Which features are used and why
    - **Feature Engineering:** How features are derived
    - **Data Augmentation:** Techniques used to increase data volume
    - **Train/Validation/Test Split:** How data is partitioned

11. **Create Data Sheets and Data Cards**
    - **Data Sheet:** Structured data description (per Gebru et al., 2021)
    - **Data Card:** Visual data summary (per Google Model Cards)
    - **Demographic Breakdown:** Visual representation of data demographics
    - **Data Limitations:** Known limitations and gaps in data

**PART 2(d): Human Oversight Measures**

12. **Document Human Oversight Design**
    - **Oversight Rationale:** Why human oversight is necessary
    - **Oversight Strategy:** Human-in-the-loop, human-on-the-loop, or human-in-command
    - **Oversight Frequency:** Continuous, periodic, or on-demand oversight
    - **Oversight Triggers:** What events trigger human review

13. **Document Human-in-the-Loop Mechanisms**
    - **Decision Points:** Where humans make decisions in the workflow
    - **Override Capabilities:** How humans can override AI decisions
    - **Review Interface:** User interface for human review
    - **Review Criteria:** What humans assess during review

14. **Document Human-on-the-Loop Monitoring**
    - **Monitoring Dashboards:** Real-time performance monitoring
    - **Alerting Mechanisms:** How humans are notified of issues
    - **Escalation Procedures:** When and how issues are escalated
    - **Response Protocols:** How humans respond to alerts

15. **Document Operator Training Requirements**
    - **Training Curriculum:** What operators must learn
    - **Training Duration:** How long training takes
    - **Training Verification:** How competence is verified
    - **Ongoing Training:** Refresher training requirements

**PART 2(e): Pre-determined Changes and Update Procedures**

16. **Document Permitted Modification Scope**
    - **Minor Updates:** What changes can be made without re-assessment (bug fixes, UI changes)
    - **Major Updates:** What changes require re-documentation (model retraining, algorithm changes)
    - **Substantial Modifications:** What changes trigger full re-assessment (purpose change, new risk introduction)

17. **Document Update and Patch Procedures**
    - **Update Process:** How updates are developed, tested, and deployed
    - **Patch Management:** How security patches are applied
    - **Rollback Procedures:** How to revert failed updates
    - **Update Notification:** How deployers are notified of updates

18. **Document Version Control Methodology**
    - **Versioning Scheme:** Major.Minor.Patch versioning
    - **Version Tracking:** How versions are tracked and documented
    - **Backward Compatibility:** How compatibility is maintained
    - **Deprecation Policy:** How old versions are phased out

**PART 2(f): Validation and Testing Procedures**

19. **Document Test Plan and Methodology**
    - **Test Strategy:** Overall approach to testing
    - **Test Types:** Unit, integration, system, acceptance, performance, security, bias testing
    - **Test Coverage:** What percentage of code/functionality is tested
    - **Test Automation:** Which tests are automated

20. **Document Validation Datasets and Benchmarks**
    - **Validation Dataset:** Separate dataset for validation (not used in training)
    - **Benchmark Datasets:** Industry-standard datasets for comparison
    - **Test Scenarios:** Real-world scenarios tested
    - **Edge Cases:** Boundary conditions and rare scenarios tested

21. **Document Performance Testing Results**
    - **Accuracy Metrics:** Overall accuracy, precision, recall, F1 score
    - **Performance Benchmarks:** Comparison with baseline or competitors
    - **Performance Across Groups:** Performance by demographic group
    - **Performance in Context:** Performance in different deployment contexts

22. **Document Robustness and Bias Testing**
    - **Adversarial Testing:** Testing against adversarial inputs
    - **Robustness Testing:** Testing under distribution shift, noise, missing data
    - **Bias Testing:** Fairness metrics across protected groups
    - **Stress Testing:** Testing under high load or extreme conditions

23. **Complete Development and Design Documentation**
    - Use templates TMP-AI-DOC-001, Sheets 4-6
    - Include all evidence references (test reports, data sheets, architecture diagrams)
    - Obtain SME approvals (Development Lead, System Architect, Data Scientist, QA Engineer)

**Evidence Required:**
- Development methodology documentation
- Third-party component inventory with licenses
- System architecture diagrams
- Model architecture documentation
- Data sheets and data cards
- Human oversight design documentation
- Version control procedures
- Test plans and test results
- Bias assessment reports

**Timing:** 8-10 weeks during development phase

**Quality Check:**
- All third-party components are documented with licenses
- Architecture diagrams are clear and accurate
- Data quality assessment is quantitative
- Human oversight mechanisms are clearly defined
- Test results demonstrate acceptable performance
- Bias testing covers all protected characteristics

---

#### Step 2.3: Document Monitoring, Performance, and QMS (Control DOC-003, Annex IV Parts 3-5)

**When:** Testing and pre-deployment phase (Weeks 13-16 of project)

**Who:** ML Ops Engineer, Data Scientist, QA Engineer, Quality Manager

**How:**

**PART 3: Monitoring, Functioning, and Control**

1. **Document Post-Deployment Monitoring Procedures**
   - **Monitoring Strategy:** Continuous, real-time monitoring approach
   - **Monitoring Tools:** Dashboards, alerting systems, logging infrastructure
   - **Monitoring Frequency:** How often metrics are collected and reviewed
   - **Monitoring Scope:** What is monitored (performance, fairness, security, availability)

2. **Document Key Risk Indicators (KRIs) and Thresholds**
   - Use KRI Library (Appendix B) to select appropriate KRIs
   - For each KRI, document:
     - **KRI Name and Definition:** What is being measured
     - **Calculation Method:** How the metric is calculated
     - **Green Threshold:** Acceptable performance range
     - **Yellow Threshold:** Warning threshold requiring attention
     - **Red Threshold:** Critical threshold requiring immediate action
     - **Monitoring Frequency:** How often KRI is calculated
     - **Escalation Procedure:** Who is notified when thresholds are breached

3. **Document Performance Metrics and SLAs**
   - **Availability SLA:** System uptime guarantee (e.g., 99.9%)
   - **Latency SLA:** Response time guarantee (e.g., < 200ms p95)
   - **Accuracy SLA:** Minimum accuracy threshold (e.g., > 95%)
   - **Fairness SLA:** Maximum disparate impact ratio (e.g., 0.8-1.25)

4. **Document Alerting and Escalation Procedures**
   - **Alerting Rules:** What conditions trigger alerts
   - **Alert Severity:** Critical, high, medium, low
   - **Escalation Path:** Who receives alerts and when
   - **Response SLAs:** How quickly alerts must be responded to

5. **Document Continuous Validation Approach**
   - **Validation Frequency:** Weekly, monthly validation on hold-out data
   - **Validation Metrics:** Same metrics as initial validation
   - **Validation Thresholds:** Acceptable performance degradation
   - **Validation Response:** What happens when validation fails

6. **Document Model Drift Detection and Response**
   - **Drift Detection Methods:** Statistical tests, performance monitoring
   - **Drift Thresholds:** When drift is considered significant
   - **Drift Response:** Retraining triggers, update procedures
   - **Drift Logging:** How drift events are documented

**PART 4: Performance Metrics and Robustness**

7. **Document Performance Metrics**
   - **Accuracy:** Overall accuracy on test set
   - **Precision:** Positive predictive value
   - **Recall:** True positive rate (sensitivity)
   - **F1 Score:** Harmonic mean of precision and recall
   - **AUC-ROC:** Area under receiver operating characteristic curve
   - **Confusion Matrix:** True positives, false positives, true negatives, false negatives

8. **Document Performance Across Demographic Groups**
   - For each protected characteristic (race, gender, age, disability):
     - **Group-Specific Performance:** Accuracy, precision, recall by group
     - **Fairness Ratios:** Ratio of performance across groups
     - **Disparate Impact Analysis:** Reference to detailed analysis (RPT-AI-RM-005)

9. **Document Robustness Testing Results**
   - **Distribution Shift Testing:** Performance under data drift
   - **Noise Robustness:** Performance with noisy inputs
   - **Missing Data Handling:** Performance with incomplete inputs
   - **Outlier Handling:** How system handles extreme values

10. **Document Adversarial Attack Resilience**
    - **Attack Scenarios Tested:** FGSM, PGD, C&W attacks (if applicable)
    - **Attack Success Rate:** How often attacks fool the model
    - **Defense Mechanisms:** Adversarial training, input validation
    - **Residual Vulnerability:** Known attack vectors that succeed

11. **Document Known Limitations and Failure Modes**
    - **Performance Limitations:** Where the system does not perform well
    - **Scope Limitations:** Use cases where system should not be used
    - **Data Limitations:** Data gaps that affect performance
    - **Technical Limitations:** Computational or algorithmic constraints
    - **Failure Modes:** How the system fails when it fails
    - **Mitigation:** How limitations are communicated and mitigated

12. **Document Error Handling and Graceful Degradation**
    - **Error Detection:** How errors are detected
    - **Error Response:** What happens when errors occur
    - **Graceful Degradation:** How system degrades under failure
    - **User Notification:** How users are notified of errors

**PART 5: Quality Management System**

13. **Document Quality Management Framework**
    - **QMS Reference:** Reference to organization's QMS (ISO 9001, ISO 42001)
    - **QMS Scope:** How QMS applies to AI systems
    - **QMS Responsibilities:** Who owns quality management
    - **QMS Documentation:** Where QMS procedures are documented

14. **Document Quality Assurance Procedures**
    - **Code Review:** Peer review procedures
    - **Testing Standards:** Test coverage and acceptance criteria
    - **Documentation Review:** Documentation quality checks
    - **Audit Procedures:** Internal and external audit schedules

15. **Document Change Management Process**
    - **Change Request:** How changes are requested and approved
    - **Impact Assessment:** How change impact is assessed
    - **Change Testing:** How changes are tested before deployment
    - **Change Documentation:** How changes are documented

16. **Document Version Control and Release Management**
    - **Version Control System:** Git, SVN, or other VCS
    - **Branching Strategy:** Git flow, trunk-based development
    - **Release Process:** How releases are created and deployed
    - **Release Notes:** What is included in release notes

17. **Document Configuration Management**
    - **Configuration Items:** What is under configuration control
    - **Configuration Baselines:** Approved configurations
    - **Configuration Audits:** How configuration compliance is verified
    - **Configuration Documentation:** Where configurations are documented

18. **Complete Monitoring, Performance, and QMS Documentation**
    - Use templates TMP-AI-DOC-001, Sheets 7-9
    - Include all evidence references (monitoring procedures, test results, QMS procedures)
    - Obtain SME approvals (ML Ops Engineer, Quality Manager)

**Evidence Required:**
- Monitoring procedures and dashboard screenshots
- KRI definitions and thresholds (from Appendix B)
- Performance test results with demographic breakdowns
- Robustness test reports
- Known limitations documentation
- QMS framework reference
- Change management procedures
- Version control procedures

**Timing:** 4 weeks during testing and pre-deployment phase

**Quality Check:**
- All KRIs have defined thresholds and escalation procedures
- Performance is documented for all demographic groups
- Known limitations are honestly and comprehensively documented
- QMS procedures are referenced and accessible
- Error handling is clearly defined

---

### PHASE 3: DOCUMENTATION COMPLETION (ANNEX IV PARTS 6-9)

#### Step 3.1: Document Lifecycle Changes, Standards, and Conformity (Control DOC-003, Annex IV Parts 6-8)

**When:** Pre-deployment phase (Weeks 17-18 of project)

**Who:** Configuration Manager, Compliance Officer, Legal Counsel

**How:**

**PART 6: Lifecycle Changes Description**

1. **Establish Post-Market Modifications Log**
   - Create modification tracking template (initially empty for new systems)
   - Define fields: Date, version, change type, change description, impact assessment, revalidation status
   - For existing systems being documented, retrospectively document all changes since initial deployment
   - Set up automated change tracking in version control system

2. **Document Substantial Modification Assessment Criteria**
   - Define what constitutes a substantial modification (per Article 43(4)):
     - Changes to intended purpose
     - Introduction of new risks
     - Changes that would require new conformity assessment
   - Document decision tree for substantial modification determination
   - Assign responsibility for substantial modification assessment

3. **Document Retraining and Update History**
   - For new systems: Document initial training
   - For existing systems: Document all retraining events with:
     - Date of retraining
     - Reason for retraining (drift, new data, performance improvement)
     - Data used for retraining
     - Performance before and after retraining
     - Validation of retrained model

4. **Document Performance Impact of Changes**
   - Template for documenting performance impact (initially empty for new systems)
   - Required fields: Change ID, performance metrics before, performance metrics after, fairness metrics before, fairness metrics after
   - Process for capturing performance impact during future updates

5. **Document Re-validation After Modifications**
   - Re-validation requirements for different change types:
     - Major changes: Full re-validation required
     - Minor changes: Targeted re-validation required
     - Patches: No re-validation required (unless security-related)
   - Re-validation procedures reference (same as initial validation)

**PART 7: Harmonized Standards and Solutions**

6. **Document Applied Harmonized Standards**
   - List all harmonized standards applied (if any):
     - Standard number and title
     - Version and publication date
     - Which requirements the standard addresses
     - Evidence of compliance with standard
   - Common harmonized standards for AI systems:
     - ISO/IEC 42001:2023 (AI Management System)
     - ISO/IEC 23894:2023 (AI Risk Management)
     - ISO/IEC 24028:2020 (AI Trustworthiness)
     - ISO/IEC TR 24027:2021 (AI Bias)

7. **Document Alternative Technical Solutions**
   - If harmonized standards are not fully applied, document alternative solutions:
     - Which requirement is addressed
     - Why harmonized standard was not used
     - Alternative solution implemented
     - Evidence that alternative solution meets the requirement

8. **Document Common Specifications Applied**
   - If European Commission has adopted common specifications, document application:
     - Common specification reference
     - How it is applied
     - Evidence of compliance

**PART 8: EU Declaration of Conformity**

9. **Prepare EU Declaration of Conformity**
   - Note: This is prepared pre-deployment but signed only after final conformity assessment
   - Use template per Annex V of EU AI Act
   - Include:
     - AI system identification
     - Provider details
     - Declaration that system meets all requirements
     - Harmonized standards or common specifications applied
     - Notified body details (if applicable)
     - Authorized signatory name and title
     - Date and place of issue

10. **Document Conformity Assessment Procedure**
    - **Self-Assessment (Article 43):** For most high-risk AI systems
    - **Notified Body Assessment (Article 43(1)):** If required by Annex VI or VII
    - Document which procedure was followed
    - Document evidence supporting conformity
    - Document internal conformity assessment report

11. **Document Notified Body Information (if applicable)**
    - Notified body name and identification number
    - Scope of notified body involvement
    - Notified body assessment report reference
    - Certificate of conformity reference

12. **Complete Lifecycle, Standards, and Conformity Documentation**
    - Use templates TMP-AI-DOC-001, Sheets 10-12
    - Include all evidence references
    - Obtain SME approvals (Configuration Manager, Compliance Officer, Legal Counsel)

**Evidence Required:**
- Post-market modifications log (template ready for future use)
- Substantial modification criteria and decision tree
- Harmonized standards compliance evidence
- Alternative technical solutions documentation (if applicable)
- Draft EU Declaration of Conformity (to be finalized at deployment)
- Conformity assessment report
- Notified body certificate (if applicable)

**Timing:** 2 weeks during pre-deployment phase

**Quality Check:**
- Modification tracking system is operational
- Substantial modification criteria are clear and unambiguous
- All applied standards are documented with evidence
- Declaration of Conformity is complete and accurate
- Conformity assessment evidence is comprehensive

---

#### Step 3.2: Document Post-Market Performance Evaluation (Control DOC-003, Annex IV Part 9)

**When:** Pre-deployment phase (Week 19 of project)

**Who:** Post-Market Monitoring Lead + AI System Owner

**How:**

1. **Document Post-Market Monitoring Plan**
   - Reference to detailed post-market monitoring plan (PROC-AI-PMM-001)
   - Summary of monitoring approach:
     - What is monitored (performance, safety, fairness)
     - How it is monitored (automated metrics, user feedback, incident reports)
     - When it is monitored (continuous, weekly, monthly)
     - Who monitors (ML Ops, Product Owner, Compliance Officer)

2. **Document Performance Evaluation Procedures**
   - **Ongoing Performance Evaluation:**
     - Weekly automated performance testing on hold-out data
     - Monthly performance review meetings
     - Quarterly comprehensive performance evaluation
     - Annual external audit of performance
   - **Performance Evaluation Metrics:**
     - Same metrics as initial validation (consistency)
     - Additional metrics based on real-world usage
   - **Performance Degradation Thresholds:**
     - When performance degradation triggers action
     - Action required for different degradation levels

3. **Document Data Collection and Analysis Methods**
   - **Data Collection:**
     - What data is collected post-deployment (inputs, outputs, user feedback)
     - How data is collected (logging, telemetry, surveys)
     - Legal basis for data collection (GDPR Article 6)
     - Data retention period (10 years per Article 18)
   - **Data Analysis:**
     - How collected data is analyzed
     - Frequency of analysis
     - Who performs analysis
     - How findings are acted upon

4. **Document Incident Reporting Procedures**
   - Reference to detailed incident reporting procedure (PROC-AI-INC-001)
   - **Incident Detection:**
     - How incidents are detected (monitoring, user reports, audits)
     - What constitutes an incident (performance degradation, bias, safety issue)
   - **Incident Classification:**
     - Serious incident definition (per Article 3(49))
     - Incident severity levels (critical, high, medium, low)
   - **Incident Reporting:**
     - Internal reporting (to whom, when)
     - External reporting to authorities (per Article 73, within 15 days for serious incidents)
     - User notification (when and how)

5. **Document Serious Incident Response Plan**
   - **Serious Incident Criteria:**
     - Direct or indirect death
     - Serious harm to health
     - Serious property damage
     - Serious environmental damage
     - Serious fundamental rights violation
   - **Immediate Response (within 24 hours):**
     - Incident assessment and classification
     - Immediate containment actions (system suspension, rollback)
     - Stakeholder notification (management, legal, compliance)
   - **Short-term Response (within 15 days):**
     - Root cause analysis
     - Authority notification (per Article 73)
     - User notification
     - Corrective action plan
   - **Long-term Response:**
     - Corrective action implementation
     - System re-validation
     - Documentation update
     - Lessons learned

6. **Document Corrective Action Procedures**
   - **Corrective Action Triggers:**
     - Performance degradation beyond threshold
     - Bias detection
     - Security incident
     - Safety incident
     - User complaints
   - **Corrective Action Process:**
     - Issue identification and assessment
     - Root cause analysis
     - Corrective action design
     - Corrective action implementation and testing
     - Effectiveness verification
     - Documentation update
   - **Corrective Action Types:**
     - Model retraining
     - Algorithm tuning
     - Data quality improvement
     - System redesign
     - Use restriction or withdrawal

7. **Complete Post-Market Performance Documentation**
   - Use template TMP-AI-DOC-001, Sheet 13
   - Include all evidence references (monitoring plan, incident procedures)
   - Obtain approval from Post-Market Monitoring Lead

**Evidence Required:**
- Post-market monitoring plan reference (PROC-AI-PMM-001)
- Performance evaluation procedures
- Data collection and analysis methodology
- Incident reporting procedures reference (PROC-AI-INC-001)
- Serious incident response plan
- Corrective action procedures

**Timing:** 1 week during pre-deployment phase

**Quality Check:**
- Post-market monitoring plan is comprehensive and realistic
- Performance evaluation procedures are clearly defined
- Incident reporting procedures comply with Article 73 (15-day reporting for serious incidents)
- Serious incident response plan is actionable
- Corrective action procedures are linked to monitoring triggers

---

### PHASE 4: DOCUMENTATION REVIEW AND APPROVAL

#### Step 4.1: Conduct Technical Review (Control DOC-004)

**When:** After all documentation sections are drafted (Week 20 of project)

**Who:** Subject Matter Experts (assigned per section)

**How:**

1. **Distribute Documentation for Technical Review**
   - Compile complete draft documentation package (all Annex IV parts)
   - Assign reviewers for each section (per role assignments from Step 1.1)
   - Distribute documentation via secure collaboration platform
   - Provide review checklist (CHK-AI-DOC-001)
   - Set review deadline: 2 weeks from distribution

2. **Conduct Section-by-Section Technical Review**
   - Each SME reviews assigned sections for:
     - **Accuracy:** Does documentation match actual system implementation?
     - **Completeness:** Are all required elements present?
     - **Clarity:** Is documentation clear and understandable?
     - **Consistency:** Is documentation internally consistent and consistent with other documents?
     - **Evidence:** Are all claims supported by evidence?
   - Reviewers use standardized comment template:
     - Section reference
     - Comment type (question, correction, suggestion)
     - Severity (critical, major, minor)
     - Suggested resolution

3. **Technical Review Checklist (CHK-AI-DOC-001)**

| Section | Review Criteria | Reviewer | Status |
|---------|----------------|----------|--------|
| **Part 1: General Description** | System identification complete; Intended purpose clear; Classification rationale sound | AI System Owner | [ ] |
| **Part 2(a): Development Methods** | Third-party components listed; Licenses documented; Supply chain risks assessed | Development Lead | [ ] |
| **Part 2(b): Design Specifications** | Architecture diagrams accurate; Model architecture documented; Parameters documented | System Architect | [ ] |
| **Part 2(c): Data Requirements** | Data sources documented; Data quality assessed; Data sheets created | Data Scientist | [ ] |
| **Part 2(d): Human Oversight** | Oversight mechanisms clear; Training requirements defined; Override capabilities documented | UX Designer | [ ] |
| **Part 2(e): Pre-determined Changes** | Modification criteria clear; Update procedures documented; Version control defined | Config Manager | [ ] |
| **Part 2(f): Validation & Testing** | Test plan comprehensive; Test results documented; Bias testing complete | QA Engineer | [ ] |
| **Part 3: Monitoring & Control** | Monitoring procedures defined; KRIs documented; Alerting configured | ML Ops Engineer | [ ] |
| **Part 4: Performance & Robustness** | Performance metrics complete; Demographic analysis done; Limitations documented | Data Scientist + QA | [ ] |
| **Part 5: QMS** | QMS referenced; Change management documented; Audit procedures defined | Quality Manager | [ ] |
| **Part 6: Lifecycle Changes** | Modification log ready; Retraining procedures documented | Config Manager | [ ] |
| **Part 7: Standards** | Harmonized standards listed; Compliance evidence provided; Alternatives justified | Compliance Officer | [ ] |
| **Part 8: Declaration** | Declaration complete; Conformity assessment documented | Legal Counsel | [ ] |
| **Part 9: Post-Market** | Monitoring plan referenced; Incident procedures documented | PMM Lead | [ ] |

4. **Consolidate Review Comments**
   - AI Documentation Lead collects all reviewer comments
   - Consolidate comments into master comment log
   - Identify conflicting comments and resolve
   - Prioritize comments by severity:
     - **Critical:** Must be addressed before approval (e.g., factual errors, missing mandatory content)
     - **Major:** Should be addressed before approval (e.g., clarity issues, missing evidence)
     - **Minor:** Nice to have (e.g., formatting, editorial suggestions)

5. **Address Technical Review Comments**
   - AI System Owner and section authors address each comment:
     - **Accepted:** Change made; document revision
     - **Accepted with modification:** Change made differently; document rationale
     - **Rejected:** Comment not addressed; document rationale (rare, requires strong justification)
   - Track comment resolution in comment log
   - For rejected comments, assess residual risk and document acceptance

6. **Obtain Technical Review Sign-Off**
   - After all critical and major comments addressed, re-distribute documentation to reviewers
   - Reviewers verify that their comments were addressed
   - Reviewers provide written sign-off (email or signature)
   - Document all sign-offs in Technical Review Report (REC-AI-DOC-002)

7. **Document Technical Review Process**
   - Complete Technical Review Report (REC-AI-DOC-002) including:
     - List of reviewers and sections reviewed
     - Summary of comments by severity
     - Comment resolution summary
     - Unresolved comments and rationale
     - Sign-offs obtained
     - Review completion date

**Evidence Required:**
- Complete draft documentation package
- Technical Review Checklist (CHK-AI-DOC-001) - completed
- Consolidated comment log with resolutions
- Technical Review Report (REC-AI-DOC-002)
- Reviewer sign-offs (emails or signatures)

**Timing:** 3-4 weeks (2 weeks for review, 2 weeks for comment resolution)

**Quality Check:**
- All reviewers have completed their reviews
- All critical and major comments have been addressed or explicitly accepted as residual risk
- All reviewers have signed off
- Technical Review Report is complete

---

#### Step 4.2: Conduct Compliance Review (Control DOC-004)

**When:** After technical review is complete (Week 24 of project)

**Who:** Compliance Officer + AI Documentation Lead

**How:**

1. **Prepare for Compliance Review**
   - Compile documentation package with all technical review updates incorporated
   - Prepare Annex IV Compliance Checklist (Appendix A)
   - Schedule compliance review meeting (4-hour session)
   - Participants: Compliance Officer, AI Documentation Lead, AI System Owner

2. **Conduct Annex IV Completeness Verification**
   - Use Annex IV Complete Checklist (Appendix A)
   - For each Annex IV element, verify:
     - **Present:** Is the element documented?
     - **Complete:** Is the documentation comprehensive?
     - **Accurate:** Is the documentation correct?
     - **Evidence-Linked:** Is the documentation supported by evidence?
   - Document any gaps or deficiencies

3. **Verify Compliance with EU AI Act Requirements**
   - **Article 11 (Technical Documentation):** All requirements documented
   - **Article 13 (Transparency and Information):** Instructions for use clear and complete
   - **Article 14 (Human Oversight):** Human oversight measures documented
   - **Article 15 (Accuracy, Robustness, Cybersecurity):** Technical measures documented
   - **Article 18 (Record-keeping):** 10-year retention plan documented
   - **Annex IV:** All sections complete and accurate

4. **Verify Suitability for Authority Inspection**
   - Documentation is in official EU language (or English if acceptable)
   - Documentation is clearly organized with table of contents
   - Documentation is accessible (can be provided within 72 hours)
   - Documentation format is stable and readable (PDF/A)
   - Evidence references are traceable
   - Version control is clear and auditable

5. **Spot-Check Documentation Accuracy**
   - Select 10-15 key claims from documentation
   - Verify claims against evidence:
     - Performance metrics: Check test reports
     - Data statistics: Check data sheets
     - Architecture diagrams: Check against codebase or system
     - Training procedures: Check training logs
     - Third-party components: Check dependency manifests
   - Document verification results

6. **Identify Compliance Gaps and Risks**
   - Document any gaps in Annex IV coverage
   - Assess severity of gaps:
     - **Critical:** Mandatory element missing; cannot deploy without
     - **High:** Important element incomplete; should address before deployment
     - **Medium:** Element could be improved; address within 90 days of deployment
     - **Low:** Minor improvement opportunity
   - For each gap, recommend resolution

7. **Document Compliance Review**
   - Complete Compliance Review Report (REC-AI-DOC-003) including:
     - Annex IV Completeness Checklist results
     - EU AI Act compliance verification results
     - Spot-check verification results
     - Identified gaps and recommended resolutions
     - Overall compliance assessment (pass/conditional pass/fail)
     - Compliance Officer sign-off

**Evidence Required:**
- Annex IV Complete Checklist (Appendix A) - completed
- Compliance Review Report (REC-AI-DOC-003)
- Spot-check verification results
- Gap resolution plan (if gaps identified)
- Compliance Officer sign-off

**Timing:** 2 weeks (1 week for review, 1 week for gap resolution if needed)

**Quality Check:**
- All Annex IV elements are verified present
- No critical or high-severity gaps remain unresolved
- Spot-check verification confirms documentation accuracy
- Compliance Officer has signed off on overall compliance

---

#### Step 4.3: Obtain Final Approval and Prepare for Deployment (Control DOC-005)

**When:** After technical and compliance reviews are complete (Week 26 of project)

**Who:** AI Documentation Lead + AI System Owner

**How:**

1. **Prepare Final Documentation Package**
   - Incorporate all technical and compliance review updates
   - Finalize all Annex IV sections
   - Update document version to 1.0.0 (deployment version)
   - Update document date to approval date
   - Generate PDF/A version for archival
   - Compile supporting evidence package:
     - Test reports
     - Data sheets
     - Architecture diagrams
     - Risk assessments
     - Review reports
     - Approval records

2. **Prepare Documentation Summary and Cover Letter**
   - Create executive summary (2-3 pages) covering:
     - AI system overview
     - Intended purpose and high-risk classification
     - Key performance metrics
     - Compliance approach
     - Post-market monitoring plan
   - Prepare cover letter for authority submission (if required):
     - System identification
     - Provider details
     - Declaration of completeness
     - Contact person for inquiries
     - Date and signature

3. **Conduct Final Internal Review**
   - AI Documentation Lead performs final quality check:
     - All sections complete
     - All evidence linked
     - All approvals obtained
     - Document formatting consistent
     - Table of contents accurate
     - Version control correct
   - AI System Owner performs final accuracy check:
     - Documentation matches deployed system
     - Known limitations are honestly documented
     - Instructions for use are clear and complete

4. **Obtain Final Approval Signatures**
   - **AI System Owner:** Certifies documentation accuracy
   - **Technical Writer:** Certifies documentation clarity and completeness
   - **Compliance Officer:** Certifies regulatory compliance
   - **AI Documentation Lead:** Approves final documentation package
   - Document all approvals in Documentation Approval Report (REC-AI-DOC-004)

5. **Finalize EU Declaration of Conformity**
   - Update Declaration of Conformity with final information
   - Obtain authorized signatory signature (typically CTO or CEO)
   - Date and place of issue
   - Include signed declaration in documentation package

6. **Prepare Documentation for Retention**
   - Store final documentation package in secure, long-term repository
   - Implement access controls (read-only for most users)
   - Set up 10-year retention schedule (per Article 18)
   - Configure backup and disaster recovery
   - Document repository location and access procedures

7. **Prepare for Authority Submission (if required)**
   - Some member states or use cases may require proactive submission
   - Format documentation per authority requirements
   - Prepare submission portal credentials
   - Schedule submission (typically within 30 days of deployment)
   - Track submission status

8. **Document Final Approval**
   - Complete Documentation Approval Report (REC-AI-DOC-004) including:
     - Approval date
     - List of approvers and signatures
     - Document version approved (1.0.0)
     - Any conditions or reservations
     - Deployment authorization (yes/no)
     - Next review date (typically 12 months from deployment)

**Evidence Required:**
- Final Documentation Package (PDF/A version 1.0.0)
- Supporting evidence package (all referenced documents)
- Executive summary
- Cover letter (if applicable)
- Documentation Approval Report (REC-AI-DOC-004)
- Signed approval records from all approvers
- Signed EU Declaration of Conformity
- Repository access verification
- 10-year retention plan documentation

**Timing:** 1-2 weeks

**Quality Check:**
- Final documentation package is complete and error-free
- All required approvals obtained and documented
- Declaration of Conformity is signed by authorized signatory
- Documentation is stored in secure, accessible repository
- 10-year retention plan is operational
- Deployment is authorized

---

### PHASE 5: DOCUMENTATION MAINTENANCE AND RETENTION

#### Step 5.1: Maintain and Update Documentation (Control DOC-005)

**When:** Throughout AI system operational lifecycle (continuous)

**Who:** AI System Owner + Configuration Manager

**How:**

1. **Monitor for Documentation Update Triggers**

Continuous monitoring for events that require documentation updates:

| Update Trigger | Description | Documentation Impact | Timeline | Approval Required |
|----------------|-------------|---------------------|----------|-------------------|
| **Substantial Modification** | Changes to intended purpose, new risks introduced, major algorithm changes | Full documentation review and update; may require new conformity assessment | Within 30 days | AI Governance Committee |
| **Regulatory Changes** | New EU AI Act delegated acts, implementing acts, or guidance | Update compliance sections; verify continued compliance | Within 60 days | Compliance Officer |
| **Performance Issues** | Performance degradation beyond SLA thresholds; fairness ratio violations | Update known limitations; document corrective actions | Within 15 days | AI System Owner |
| **Post-Market Monitoring Findings** | New risks identified; usage patterns different than expected | Update risk assessment; update instructions for use | Within 30 days | AI System Owner |
| **Incident Reports** | Serious incidents requiring authority notification | Update incident log; document root cause and corrective actions | Within 15 days (linked to Article 73 reporting) | AI Documentation Lead |
| **Model Retraining** | Periodic retraining or drift-triggered retraining | Update training data documentation; update performance metrics | Within 30 days | Data Scientist |
| **Third-Party Updates** | Updates to third-party components or services | Update component inventory; assess impact on system | Within 30 days | Development Lead |
| **User Feedback** | Systematic user complaints or confusion | Update instructions for use; clarify limitations | Within 60 days | Technical Writer |
| **Audit Findings** | Internal or external audit identifies documentation gaps | Address findings; update documentation | Per audit timeline | AI Documentation Lead |
| **Harmonized Standard Updates** | New versions of applied harmonized standards | Assess applicability; update compliance documentation | Within 90 days | Compliance Officer |

2. **Assess Whether Change is Substantial Modification**
   - Use decision tree from Part 6 documentation
   - Substantial modification criteria (per Article 43(4)):
     - Changes to the AI system's intended purpose
     - Introduction of new risks or increase in risk levels
     - Changes that would have required a new conformity assessment if present at initial assessment
   - If substantial modification:
     - Requires full re-documentation
     - May require new conformity assessment
     - Requires AI Governance Committee approval
   - If not substantial modification:
     - Requires targeted documentation update
     - Requires AI System Owner approval

3. **Update Relevant Documentation Sections**
   - Identify which Annex IV sections are affected by the change
   - Update affected sections using same templates as initial documentation
   - Maintain previous version in version control
   - Document changes in version history table
   - Update modification log (Part 6)
   - Cross-reference to change request or incident report

4. **Conduct Update Review**
   - For substantial modifications:
     - Full technical and compliance review (repeat Steps 4.1-4.2)
     - AI Governance Committee approval required
   - For significant updates:
     - Targeted technical review by affected SMEs
     - Compliance spot-check by Compliance Officer
     - AI Documentation Lead approval
   - For minor updates:
     - AI System Owner review
     - Documentation Lead notification

5. **Version Control for Updates**
   - **Major Version Increment (X.0.0):** Substantial modifications
   - **Minor Version Increment (1.X.0):** Significant updates (e.g., retraining, new features)
   - **Patch Version Increment (1.0.X):** Minor corrections and clarifications
   - Each version increment requires:
     - Update to document header (version number, date)
     - Entry in version history table
     - Entry in modification log
     - Archival of previous version
     - Approval per version type

6. **Archive Previous Versions**
   - When documentation is updated, archive the previous version:
     - Copy previous version to archive folder
     - Rename with version number and date
     - Maintain read-only permissions
     - Ensure archived versions are included in 10-year retention
   - Maintain complete version history showing:
     - Version number
     - Date of version
     - Summary of changes
     - Approver name
     - Reference to change request or incident

7. **Notify Stakeholders of Documentation Updates**
   - **Internal Stakeholders:**
     - AI System Owner
     - ML Ops team
     - Support team
     - Compliance Officer
   - **External Stakeholders (if applicable):**
     - Deployers (if documentation changes affect deployment or use)
     - Competent authorities (if substantial modification)
   - Notification includes:
     - What changed
     - Why it changed
     - Impact on system use
     - Effective date of change

**Evidence Required:**
- Updated documentation (new version)
- Archived previous version
- Version history table (updated)
- Modification log (Part 6, updated)
- Update review records
- Approval records per update type
- Stakeholder notification records

**Timing:** Ongoing throughout operational lifecycle; specific timelines per trigger type

**Quality Check:**
- All update triggers are monitored
- Substantial modification assessment is documented for all changes
- Updates are completed within required timelines
- Previous versions are archived and accessible
- Version control is maintained accurately
- Required approvals are obtained

---

#### Step 5.2: 10-Year Retention and Archive Management (Control DOC-005)

**When:** Deployment through 10 years after market placement or last use

**Who:** AI Documentation Lead + Records Manager

**Regulatory Basis:** Article 18 of EU AI Act requires 10-year retention of technical documentation and automatically generated logs.

**How:**

**DEPLOYMENT: Retention Period Begins**

1. **Establish Retention Start Date**
   - **Retention Start Date:** Date of system deployment (market placement)
   - **Retention End Date:** 10 years after market placement or last use (whichever is later)
   - Document retention dates in Documentation Retention Record (REC-AI-DOC-005)
   - Configure retention policy in document management system

2. **Configure Retention Repository**
   - **Repository Requirements:**
     - Secure, tamper-proof storage
     - Geographic redundancy (multiple data centers)
     - Format stability (PDF/A for long-term readability)
     - Access logging and auditing
     - Backup and disaster recovery
   - **Repository Types:**
     - Primary: Cloud-based document management system (e.g., SharePoint, Google Drive with retention policies)
     - Secondary: Offline backup in secure facility
   - Document repository details (location, access procedures, backup schedule)

3. **Set Up Access Controls and Audit Logging**
   - **Access Permissions:**
     - Read-only access for authorized personnel
     - Write access restricted to AI Documentation Lead and Records Manager
     - Competent authority access provisioned (on-demand, with verification)
   - **Audit Logging:**
     - Log all access events (who, when, what)
     - Log all modifications (version updates)
     - Retain access logs for 10 years (same retention period)
   - Configure automated alerting for unauthorized access attempts

**ONGOING: Annual Retention Verification**

4. **Conduct Annual Retention Audits**
   - **Audit Frequency:** Annually (every 12 months from deployment)
   - **Audit Scope:**
     - Verify documentation is still accessible
     - Verify documentation format is still readable (PDF/A validation)
     - Verify backup copies are current and restorable
     - Verify access logs are maintained
     - Verify retention end date is correctly calculated
   - **Audit Procedure:**
     - Attempt to retrieve documentation within 72 hours (simulating authority request)
     - Verify all Annex IV sections are present and readable
     - Test restore from backup
     - Review access logs for anomalies
   - Document audit results in Annual Retention Audit Report

5. **Version Management Across Lifecycle**
   - Retain all versions of documentation (not just latest):
     - Version 1.0.0 (initial deployment)
     - All subsequent versions (1.1.0, 1.2.0, 2.0.0, etc.)
   - For each version, retain:
     - Complete documentation package
     - Supporting evidence package
     - Approval records
     - Review reports
   - Each version has its own 10-year retention period from deployment

6. **Automatically Generated Logs Retention**
   - **Log Types Subject to 10-Year Retention (per Article 18):**
     - System operation logs (inputs, outputs, timestamps)
     - Performance monitoring logs (KRI values, threshold breaches)
     - Incident logs (detected incidents, responses)
     - Change logs (system modifications, updates)
     - Access logs (who accessed system, when)
   - **Log Retention Requirements:**
     - Logs retained for 10 years from creation
     - Logs stored in tamper-proof format
     - Logs accessible for authority inspection
   - **Log Retention Challenges:**
     - Volume: Logs can be massive (terabytes); implement compression and archival
     - Cost: Long-term storage costs; budget for 10-year retention
     - Privacy: Logs may contain personal data; implement privacy-preserving techniques (pseudonymization)

**AUTHORITY ACCESS: Competent Authority Inspection**

7. **Authority Access Provisions**
   - **Article 64 Obligations:** Providers must grant competent authorities access to documentation and logs upon request
   - **Access Timeline:** Documentation must be provided "without delay"; best practice is within 72 hours
   - **Access Procedure:**
     - Authority submits formal request (typically via secure email or portal)
     - Records Manager verifies authority credentials
     - AI Documentation Lead prepares documentation package
     - Documentation transmitted via secure channel (encrypted email, secure portal, or physical delivery)
     - Access event logged and reported to management
   - **Authority Access Log:**
     - Date of request
     - Requesting authority and contact person
     - Scope of request (which systems, which versions)
     - Date of provision
     - Method of provision
     - Documents provided

8. **Prepare Authority Access Package**
   - Pre-configure authority access package for rapid response:
     - Complete documentation package (latest version)
     - Version history showing all updates
     - Current conformity declaration
     - Post-market monitoring summary
     - Incident log (if any)
   - Package updated quarterly or after significant changes
   - Package size optimized for transmission (typically < 100 MB)

**DECOMMISSIONING: Final Archive and Retention Continuation**

9. **Document System Decommissioning**
   - When AI system is decommissioned (withdrawn from market):
     - Document decommissioning date
     - Document decommissioning reason
     - Update retention end date (10 years from decommissioning, not deployment)
     - Create final documentation snapshot
     - Archive all versions and logs

10. **Secure Long-Term Storage**
    - Transfer documentation to long-term archive:
      - Cold storage for cost optimization (e.g., AWS Glacier, Azure Archive Storage)
      - Maintain accessibility (retrieval within 72 hours, even from cold storage)
      - Periodic format migration if PDF/A becomes obsolete (unlikely but possible)
    - Maintain organizational knowledge:
      - Document who has responsibility for archived documentation
      - Include in organizational records retention policy
      - Brief successors on retention obligations

**RETENTION END: Secure Deletion**

11. **Retention Period Expiration**
    - After 10-year retention period:
      - Verify no legal holds or authority investigations in progress
      - Obtain approval for deletion from Legal Counsel
      - Securely delete documentation and logs:
        - Overwrite data (DOD 5220.22-M standard)
        - Delete all copies (primary, backup, archive)
        - Delete access logs
      - Document deletion in Retention Completion Certificate
      - Retain deletion certificate indefinitely (proof of compliance)

**Evidence Required:**
- Documentation Retention Record (REC-AI-DOC-005) with start and end dates
- Repository configuration documentation
- Access control and audit logging configuration
- Annual Retention Audit Reports (one per year for 10 years)
- Authority Access Log (if any authority requests)
- Decommissioning documentation (when applicable)
- Retention Completion Certificate (after 10 years)

**Timing:**
- Initial setup: At deployment
- Annual audits: Every 12 months
- Authority access: Within 72 hours of request
- Retention end: 10 years after market placement or last use

**Quality Check:**
- Retention start date is correctly documented
- Repository is secure, redundant, and accessible
- Annual audits consistently verify accessibility
- All versions are retained, not just latest
- Logs are retained for 10 years
- Authority access can be provided within 72 hours
- Deletion is secure and documented after retention period

---

## 5. CONTROL MECHANISMS

This procedure implements the following documentation controls:

| Control ID | Control Name | Control Type | Risk Level | Implementation |
|------------|--------------|--------------|------------|----------------|
| **DOC-001** | Documentation Standards | Preventive | High | Step 1.2: Standards defined, templates created, training provided |
| **DOC-002** | Technical Documentation Creation | Preventive | Critical | Steps 2.1-3.2: All Annex IV sections documented with evidence |
| **DOC-003** | Documentation Review | Detective | High | Steps 4.1-4.2: Technical and compliance reviews with sign-offs |
| **DOC-004** | Version Control | Preventive | High | Steps 1.2, 5.1: Version control standards, change tracking |
| **DOC-005** | Documentation Retention | Preventive | Medium | Step 5.2: 10-year retention with annual verification |

### 5.1 Control Testing and Effectiveness

| Control | Test Procedure | Test Frequency | Evidence |
|---------|---------------|----------------|----------|
| DOC-001 | Verify documentation adheres to standards; spot-check formatting and style | Per documentation review | Technical Review Report |
| DOC-002 | Verify all Annex IV sections are complete using checklist; spot-check accuracy | Per documentation approval | Compliance Review Report |
| DOC-003 | Verify all reviews completed and sign-offs obtained | Per documentation approval | Approval Report |
| DOC-004 | Verify version history is accurate; verify archived versions are accessible | Quarterly | Version Control Audit |
| DOC-005 | Verify documentation is accessible within 72 hours; test restore from backup | Annually | Annual Retention Audit |

---

## 6. KEY PERFORMANCE INDICATORS (KPIs)

Track these KPIs to measure documentation quality and compliance (see Appendix B for complete KPI library):

| KPI ID | KPI Name | Definition | Target | Frequency |
|--------|----------|------------|--------|-----------|
| KPI-DOC-001 | Documentation Completeness | % of Annex IV sections complete | 100% | Per approval |
| KPI-DOC-002 | Documentation Accuracy | % of spot-checked claims verified accurate | > 95% | Per approval |
| KPI-DOC-003 | Review Completion Time | Days from draft to approval | < 28 days | Per approval |
| KPI-DOC-004 | Update Timeliness | % of updates completed within required timeline | > 95% | Quarterly |
| KPI-DOC-005 | Authority Access Time | Hours to provide documentation to authorities | < 72 hours | Per request |
| KPI-DOC-006 | Version Control Compliance | % of changes properly versioned and logged | 100% | Quarterly |
| KPI-DOC-007 | Retention Audit Pass Rate | % of annual retention audits passed | 100% | Annually |
| KPI-DOC-008 | Review Comment Resolution | % of review comments addressed | > 98% | Per approval |
| KPI-DOC-009 | Documentation Accessibility | % uptime of documentation repository | > 99.5% | Monthly |
| KPI-DOC-010 | Stakeholder Satisfaction | Documentation user satisfaction score | > 4.0/5.0 | Annually |

---

## 7. DOCUMENTATION REQUIREMENTS

This procedure references the following templates, forms, and records:

### 7.1 Templates (Consolidated Workbook: TMP-AI-DOC-001)

| Sheet | Template Name | Purpose |
|-------|---------------|---------|
| 1 | Documentation Plan | Plan documentation creation and timeline |
| 2 | Documentation Standards | Define writing, formatting, and review standards |
| 3 | Part 1: General Description | Document system overview and intended purpose |
| 4 | Part 2(a-c): Development & Data | Document development methods, design, and data |
| 5 | Part 2(d-f): Oversight & Testing | Document human oversight, changes, and validation |
| 6 | Part 3: Monitoring & Control | Document post-deployment monitoring |
| 7 | Part 4: Performance & Robustness | Document performance metrics and limitations |
| 8 | Part 5: Quality Management System | Document QMS and change management |
| 9 | Part 6-7: Changes & Standards | Document lifecycle changes and harmonized standards |
| 10 | Part 8: Declaration of Conformity | Document EU declaration and conformity assessment |
| 11 | Part 9: Post-Market Evaluation | Document post-market monitoring and incident response |
| 12 | Evidence Linking Matrix | Cross-reference documentation to evidence |
| 13 | Version History and Change Log | Track all documentation versions and changes |

### 7.2 Forms and Checklists

| Form ID | Form Name | Purpose |
|---------|-----------|---------|
| CHK-AI-DOC-001 | Technical Review Checklist | Guide technical review of documentation |
| CHK-AI-DOC-002 | Compliance Review Checklist | Guide compliance review (see Appendix A for complete Annex IV checklist) |

### 7.3 Records

| Record ID | Record Name | Purpose | Retention |
|-----------|-------------|---------|-----------|
| REC-AI-DOC-001 | Documentation Initiation Report | Document planning outcomes | 10 years |
| REC-AI-DOC-002 | Technical Review Report | Document technical review process and outcomes | 10 years |
| REC-AI-DOC-003 | Compliance Review Report | Document compliance review process and outcomes | 10 years |
| REC-AI-DOC-004 | Documentation Approval Report | Document final approval and authorization | 10 years |
| REC-AI-DOC-005 | Documentation Retention Record | Document retention start/end dates and repository | 10 years + 7 years |
| REC-AI-DOC-006 | Annual Retention Audit Report | Document annual retention verification | 10 years |
| REC-AI-DOC-007 | Authority Access Log | Document competent authority access events | 10 years |

---

## 8. REVIEW AND AUDIT

### 8.1 Procedure Review

This procedure is reviewed and updated:
- **Annually:** Scheduled review every 12 months
- **Upon Regulatory Change:** Within 60 days of new EU AI Act guidance, delegated acts, or implementing acts
- **Upon Process Improvement:** When improvements are identified through lessons learned
- **Upon Audit Finding:** When internal or external audits identify procedure gaps

### 8.2 Internal Audit Verification

Internal auditors should verify:

1. **Documentation Completeness:** All Annex IV sections are present and complete (using Appendix A checklist)
2. **Documentation Accuracy:** Spot-check verification that documentation matches actual system (10-15 claims)
3. **Evidence Linking:** All documentation claims are linked to supporting evidence
4. **Review Completeness:** Technical and compliance reviews were conducted with all sign-offs obtained
5. **Version Control:** Version history is accurate and all versions are archived
6. **Update Timeliness:** Documentation updates are completed within required timelines
7. **Retention Compliance:** 10-year retention is operational and verified annually
8. **Authority Access Readiness:** Documentation can be provided within 72 hours

### 8.3 External Audit and Authority Inspection

When competent authorities or external auditors inspect documentation:

1. **Authority Notification:** Notify AI Documentation Lead and Legal Counsel immediately
2. **Documentation Provision:** Provide requested documentation within 72 hours (or timeline specified by authority)
3. **Cooperation:** Cooperate fully with authority requests; provide access to personnel for interviews
4. **Issue Tracking:** Document any findings or concerns raised by authority
5. **Corrective Action:** Address any findings within timeline specified by authority
6. **Follow-Up:** Verify corrective actions are effective and document closure

---

## 9. GENERAL-PURPOSE AI (GPAI) DOCUMENTATION REQUIREMENTS

For organizations developing or deploying General-Purpose AI models, additional documentation requirements apply per Annexes XI and XII.

### 9.1 Applicability

This section applies when:
- Your organization develops a general-purpose AI model (e.g., foundation model, large language model)
- Your organization integrates a general-purpose AI model into a high-risk AI system
- Your organization provides a general-purpose AI model to downstream providers

### 9.2 Annex XI: Technical Documentation for GPAI Models

In addition to Annex IV requirements, GPAI model providers must document (per Annex XI):

**1. Training Process Documentation**
- **Training Data:** Description of data sources, volume, and characteristics
- **Data Curation:** Data filtering, cleaning, and selection criteria
- **Compute Resources:** Computational resources used for training (GPU hours, energy consumption)
- **Training Duration:** Timeline from start to completion
- **Model Architecture:** Detailed model architecture (layers, parameters, attention mechanisms)

**2. Model Capabilities and Limitations**
- **Intended Modalities:** Text, image, audio, video, multimodal
- **Intended Tasks:** Zero-shot, few-shot, fine-tuning capabilities
- **Known Limitations:** Tasks where model performs poorly
- **Known Biases:** Systematic biases in model outputs
- **Misuse Risks:** Potential harmful applications

**3. Model Evaluation**
- **Evaluation Benchmarks:** Industry-standard benchmarks used (e.g., MMLU, HellaSwag, TruthfulQA)
- **Evaluation Results:** Performance on each benchmark
- **Comparison:** Comparison with other models (if available)
- **Limitations of Evaluation:** What the benchmarks don't test

**4. Mitigation Measures**
- **Safety Mitigations:** Alignment techniques (RLHF, constitutional AI)
- **Bias Mitigation:** Techniques to reduce bias
- **Security Measures:** Protections against misuse
- **Content Filtering:** Input/output filtering mechanisms

**5. Energy Consumption**
- **Training Energy:** Total energy consumption for training (kWh)
- **Inference Energy:** Energy consumption per inference
- **Carbon Footprint:** Estimated CO2 emissions

### 9.3 Annex XII: Information for Downstream Providers

If providing GPAI model to downstream providers (who integrate it into high-risk AI systems), provide:

**1. Model Card**
- Model name, version, and release date
- Provider contact information
- Intended use and prohibited uses
- Known limitations and risks
- Performance benchmarks
- Licensing terms

**2. Technical Specifications**
- Input/output format and schema
- API documentation (if applicable)
- Latency and throughput specifications
- Hardware requirements for inference
- Deployment options (cloud, on-premises, edge)

**3. Safety and Compliance Information**
- Known safety risks and mitigations
- Bias assessment results
- Content filtering capabilities
- Prohibited use cases
- Compliance with EU AI Act requirements

**4. Integration Guidance**
- How to fine-tune the model
- How to evaluate model performance
- How to monitor model in production
- How to report incidents or issues

**5. Update and Support Information**
- Model update frequency
- Notification process for updates
- Backward compatibility commitments
- Support channels and SLAs
- End-of-life policy

### 9.4 GPAI Models with Systemic Risk

For GPAI models with systemic risk (per Article 51), additional requirements:
- **Adversarial Testing:** Red-teaming and adversarial testing results
- **Systemic Risk Assessment:** Assessment of risks from widespread adoption
- **Risk Mitigation:** Measures to mitigate systemic risks
- **Incident Response:** Enhanced incident monitoring and reporting

### 9.5 GPAI Documentation Templates

| Template | Purpose |
|----------|---------|
| TMP-AI-GPAI-001 | GPAI Model Card | Annex XII downstream provider information |
| TMP-AI-GPAI-002 | GPAI Technical Documentation | Annex XI technical documentation |
| TMP-AI-GPAI-003 | GPAI Systemic Risk Assessment | Article 51 systemic risk documentation |

---

## 10. NON-COMPLIANCE HANDLING

### 10.1 Documentation Non-Compliance Scenarios

| Scenario | Severity | Immediate Action | Corrective Action |
|----------|----------|------------------|-------------------|
| **Missing Annex IV Section** | Critical | Block deployment until complete | Complete missing section; conduct compliance review |
| **Inaccurate Documentation** | High | Assess impact; may block deployment | Correct inaccuracies; re-verify accuracy |
| **Outdated Documentation** | High | Assess staleness; update if > 90 days out of date | Update documentation; verify update triggers are monitored |
| **Missing Evidence Links** | Medium | Flag for resolution before next update | Link documentation to evidence; verify traceability |
| **Version Control Gaps** | Medium | Document retroactively; prevent future gaps | Reconstruct version history; audit version control process |
| **Retention Failure** | Critical | Restore from backup; investigate cause | Verify backup integrity; enhance retention monitoring |
| **Failed Authority Access** | Critical | Escalate to Legal; investigate cause | Remediate access issues; test access within 24 hours |

### 10.2 Escalation Process

1. **Identify Non-Compliance:** Documentation Lead or auditor identifies gap
2. **Assess Severity:** Determine severity (critical, high, medium, low)
3. **Escalate:** Critical and high issues escalated to AI Governance Committee
4. **Remediate:** Implement corrective action per timeline
5. **Verify:** Verify corrective action effectiveness
6. **Document:** Document non-compliance and resolution in incident log

---

## 11. RELATED DOCUMENTS

This procedure interfaces with the following procedures and standards:

| Document ID | Document Name | Relationship |
|-------------|---------------|--------------|
| PROC-AI-CLS-001 | AI Classification Procedure | Determines which systems require documentation per this procedure |
| PROC-AI-RM-001 | AI Risk Management Procedure | Risk assessment feeds into Annex IV Part 2(f) and Part 9 |
| PROC-AI-DATA-001 | AI Data Governance Procedure | Data governance feeds into Annex IV Part 2(c) |
| PROC-AI-PMM-001 | Post-Market Monitoring Procedure | Post-market monitoring feeds into Annex IV Part 9 |
| PROC-AI-INC-001 | Incident Management Procedure | Incidents trigger documentation updates per Step 5.1 |
| STD-AI-004 | AI Technical Documentation Standard | Defines documentation quality standards |
| POL-AI-001 | AI Governance Policy | Defines governance structure for documentation approvals |

---

## 12. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial procedure development matching RM-001 template quality |
| | | | |

---

## 13. APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | [Name] | AI Documentation Lead | __________ | ________ |
| **Reviewed By** | [Name] | Chief Technology Officer | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## 14. DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Public/Internal/Confidential]
**Distribution:** AI Documentation Lead, AI System Owners, Technical Writers, Compliance, Internal Audit
**Retention:** 10 years (per EU AI Act Article 18)
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]

---

## APPENDIX A: ANNEX IV COMPLETE CHECKLIST

This comprehensive checklist covers all Annex IV requirements section-by-section. Use this for compliance verification (Step 4.2).

### Part 1: General Description of the AI System

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **1.1 System Identification** | | | | |
| System name and version | ☐ | ☐ | | |
| System unique identifier | ☐ | ☐ | | |
| Provider name and contact details | ☐ | ☐ | | |
| Authorized representative (if applicable) | ☐ | ☐ | | |
| **1.2 Intended Purpose** | | | | |
| Detailed description of intended purpose | ☐ | ☐ | | |
| Specific use cases documented | ☐ | ☐ | | |
| Out-of-scope uses explicitly documented | ☐ | ☐ | | |
| Environmental and operational constraints | ☐ | ☐ | | |
| **1.3 Classification** | | | | |
| High-risk classification rationale | ☐ | ☐ | | |
| Annex III category identified | ☐ | ☐ | | |
| Classification assessment reference | ☐ | ☐ | | |
| **1.4 Users and Deployers** | | | | |
| Intended user profiles documented | ☐ | ☐ | | |
| User qualifications and training requirements | ☐ | ☐ | | |
| Deployer profiles and obligations | ☐ | ☐ | | |
| **1.5 Dependencies** | | | | |
| Hardware requirements (min and recommended) | ☐ | ☐ | | |
| Software requirements (OS, runtime, etc.) | ☐ | ☐ | | |
| Third-party services and APIs | ☐ | ☐ | | |
| Network and connectivity requirements | ☐ | ☐ | | |

### Part 2(a): Development Methods and Third-Party Tools

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **2(a).1 Development Methodology** | | | | |
| Development approach documented (Agile, MLOps, etc.) | ☐ | ☐ | | |
| Development phases and timeline | ☐ | ☐ | | |
| Development tools and environment | ☐ | ☐ | | |
| Development standards and procedures | ☐ | ☐ | | |
| **2(a).2 Third-Party Components** | | | | |
| Third-party libraries and versions | ☐ | ☐ | | |
| Open-source components and licenses | ☐ | ☐ | | |
| Proprietary components and licenses | ☐ | ☐ | | |
| Cloud services used | ☐ | ☐ | | |
| External APIs and integrations | ☐ | ☐ | | |
| **2(a).3 Supply Chain Management** | | | | |
| Component risk assessment | ☐ | ☐ | | |
| License compliance verification | ☐ | ☐ | | |
| Dependency update procedures | ☐ | ☐ | | |

### Part 2(b): Design Specifications and System Architecture

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **2(b).1 System Architecture** | | | | |
| High-level architecture diagram | ☐ | ☐ | | |
| Component descriptions | ☐ | ☐ | | |
| Component interactions documented | ☐ | ☐ | | |
| Data flow diagram | ☐ | ☐ | | |
| Deployment architecture (cloud/on-prem/hybrid) | ☐ | ☐ | | |
| **2(b).2 AI Model Architecture** | | | | |
| Model type documented (NN, decision tree, etc.) | ☐ | ☐ | | |
| Model architecture details (layers, neurons, etc.) | ☐ | ☐ | | |
| Algorithmic approach (supervised, RL, etc.) | ☐ | ☐ | | |
| Training approach (transfer learning, fine-tuning, etc.) | ☐ | ☐ | | |
| **2(b).3 Parameters and Configuration** | | | | |
| Hyperparameters documented | ☐ | ☐ | | |
| Decision thresholds documented | ☐ | ☐ | | |
| Confidence thresholds documented | ☐ | ☐ | | |
| All configurable parameters documented | ☐ | ☐ | | |

### Part 2(c): Data Requirements and Specifications

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **2(c).1 Training Data Characteristics** | | | | |
| Data volume (number of samples) | ☐ | ☐ | | |
| Data sources documented | ☐ | ☐ | | |
| Data collection timeframe | ☐ | ☐ | | |
| Demographic distribution in data | ☐ | ☐ | | |
| Data representativeness assessment | ☐ | ☐ | | |
| **2(c).2 Data Quality and Governance** | | | | |
| Data quality metrics defined | ☐ | ☐ | | |
| Data quality assessment results | ☐ | ☐ | | |
| Data validation procedures | ☐ | ☐ | | |
| Data lineage tracking | ☐ | ☐ | | |
| Data retention policies | ☐ | ☐ | | |
| **2(c).3 Data Collection Methodology** | | | | |
| Collection methods documented | ☐ | ☐ | | |
| Collection tools documented | ☐ | ☐ | | |
| Collection dates documented | ☐ | ☐ | | |
| GDPR legal basis documented | ☐ | ☐ | | |
| Bias in collection identified | ☐ | ☐ | | |
| **2(c).4 Data Preprocessing** | | | | |
| Preprocessing steps documented | ☐ | ☐ | | |
| Feature selection documented | ☐ | ☐ | | |
| Feature engineering documented | ☐ | ☐ | | |
| Data augmentation techniques | ☐ | ☐ | | |
| Train/validation/test split documented | ☐ | ☐ | | |
| **2(c).5 Data Sheets and Cards** | | | | |
| Data sheet created (per Gebru et al.) | ☐ | ☐ | | |
| Data card created | ☐ | ☐ | | |
| Visual demographic breakdown | ☐ | ☐ | | |
| Data limitations documented | ☐ | ☐ | | |

### Part 2(d): Human Oversight Measures

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **2(d).1 Oversight Design** | | | | |
| Oversight rationale documented | ☐ | ☐ | | |
| Oversight strategy (HITL, HOTL, HIC) | ☐ | ☐ | | |
| Oversight frequency defined | ☐ | ☐ | | |
| Oversight triggers identified | ☐ | ☐ | | |
| **2(d).2 Human-in-the-Loop** | | | | |
| Decision points where humans decide | ☐ | ☐ | | |
| Override capabilities documented | ☐ | ☐ | | |
| Review interface described | ☐ | ☐ | | |
| Review criteria defined | ☐ | ☐ | | |
| **2(d).3 Human-on-the-Loop** | | | | |
| Monitoring dashboards documented | ☐ | ☐ | | |
| Alerting mechanisms described | ☐ | ☐ | | |
| Escalation procedures defined | ☐ | ☐ | | |
| Response protocols documented | ☐ | ☐ | | |
| **2(d).4 Operator Training** | | | | |
| Training curriculum documented | ☐ | ☐ | | |
| Training duration specified | ☐ | ☐ | | |
| Competence verification method | ☐ | ☐ | | |
| Refresher training requirements | ☐ | ☐ | | |

### Part 2(e): Pre-determined Changes and Update Procedures

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **2(e).1 Modification Scope** | | | | |
| Minor updates defined (no re-assessment) | ☐ | ☐ | | |
| Major updates defined (re-documentation) | ☐ | ☐ | | |
| Substantial modifications defined (re-assessment) | ☐ | ☐ | | |
| **2(e).2 Update Procedures** | | | | |
| Update development process | ☐ | ☐ | | |
| Update testing process | ☐ | ☐ | | |
| Update deployment process | ☐ | ☐ | | |
| Rollback procedures | ☐ | ☐ | | |
| Deployer notification process | ☐ | ☐ | | |
| **2(e).3 Version Control** | | | | |
| Versioning scheme documented | ☐ | ☐ | | |
| Version tracking process | ☐ | ☐ | | |
| Backward compatibility approach | ☐ | ☐ | | |
| Deprecation policy | ☐ | ☐ | | |

### Part 2(f): Validation and Testing Procedures

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **2(f).1 Test Plan** | | | | |
| Test strategy documented | ☐ | ☐ | | |
| Test types documented (unit, integration, system, etc.) | ☐ | ☐ | | |
| Test coverage metrics | ☐ | ☐ | | |
| Test automation approach | ☐ | ☐ | | |
| **2(f).2 Validation Datasets** | | | | |
| Validation dataset described | ☐ | ☐ | | |
| Benchmark datasets used | ☐ | ☐ | | |
| Test scenarios documented | ☐ | ☐ | | |
| Edge cases tested | ☐ | ☐ | | |
| **2(f).3 Performance Testing** | | | | |
| Accuracy metrics documented | ☐ | ☐ | | |
| Performance benchmarks documented | ☐ | ☐ | | |
| Performance by demographic group | ☐ | ☐ | | |
| Performance in different contexts | ☐ | ☐ | | |
| **2(f).4 Robustness and Bias Testing** | | | | |
| Adversarial testing results | ☐ | ☐ | | |
| Robustness testing results (drift, noise, etc.) | ☐ | ☐ | | |
| Bias testing results (fairness metrics) | ☐ | ☐ | | |
| Stress testing results | ☐ | ☐ | | |

### Part 3: Monitoring, Functioning, and Control

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **3.1 Monitoring Procedures** | | | | |
| Monitoring strategy documented | ☐ | ☐ | | |
| Monitoring tools described | ☐ | ☐ | | |
| Monitoring frequency defined | ☐ | ☐ | | |
| Monitoring scope specified | ☐ | ☐ | | |
| **3.2 Key Risk Indicators (KRIs)** | | | | |
| KRIs defined for critical risks | ☐ | ☐ | | |
| KRI calculation methods documented | ☐ | ☐ | | |
| KRI thresholds defined (green/yellow/red) | ☐ | ☐ | | |
| KRI monitoring frequency specified | ☐ | ☐ | | |
| **3.3 Performance SLAs** | | | | |
| Availability SLA defined | ☐ | ☐ | | |
| Latency SLA defined | ☐ | ☐ | | |
| Accuracy SLA defined | ☐ | ☐ | | |
| Fairness SLA defined | ☐ | ☐ | | |
| **3.4 Alerting and Escalation** | | | | |
| Alerting rules defined | ☐ | ☐ | | |
| Alert severity levels defined | ☐ | ☐ | | |
| Escalation path documented | ☐ | ☐ | | |
| Response SLAs defined | ☐ | ☐ | | |
| **3.5 Drift Detection** | | | | |
| Drift detection methods documented | ☐ | ☐ | | |
| Drift thresholds defined | ☐ | ☐ | | |
| Drift response procedures | ☐ | ☐ | | |
| Retraining triggers documented | ☐ | ☐ | | |

### Part 4: Performance Metrics and Robustness

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **4.1 Performance Metrics** | | | | |
| Accuracy documented | ☐ | ☐ | | |
| Precision documented | ☐ | ☐ | | |
| Recall documented | ☐ | ☐ | | |
| F1 score documented | ☐ | ☐ | | |
| AUC-ROC documented (if applicable) | ☐ | ☐ | | |
| Confusion matrix provided | ☐ | ☐ | | |
| **4.2 Demographic Performance** | | | | |
| Performance by race/ethnicity | ☐ | ☐ | | |
| Performance by gender | ☐ | ☐ | | |
| Performance by age group | ☐ | ☐ | | |
| Performance by disability status (if applicable) | ☐ | ☐ | | |
| Fairness ratios calculated | ☐ | ☐ | | |
| Disparate impact analysis conducted | ☐ | ☐ | | |
| **4.3 Robustness** | | | | |
| Distribution shift testing results | ☐ | ☐ | | |
| Noise robustness results | ☐ | ☐ | | |
| Missing data handling results | ☐ | ☐ | | |
| Outlier handling results | ☐ | ☐ | | |
| **4.4 Adversarial Resilience** | | | | |
| Adversarial attack scenarios tested | ☐ | ☐ | | |
| Attack success rates documented | ☐ | ☐ | | |
| Defense mechanisms described | ☐ | ☐ | | |
| Residual vulnerabilities documented | ☐ | ☐ | | |
| **4.5 Limitations and Failure Modes** | | | | |
| Performance limitations documented | ☐ | ☐ | | |
| Scope limitations documented | ☐ | ☐ | | |
| Data limitations documented | ☐ | ☐ | | |
| Technical limitations documented | ☐ | ☐ | | |
| Failure modes described | ☐ | ☐ | | |
| Mitigation of limitations described | ☐ | ☐ | | |
| **4.6 Error Handling** | | | | |
| Error detection methods | ☐ | ☐ | | |
| Error response procedures | ☐ | ☐ | | |
| Graceful degradation approach | ☐ | ☐ | | |
| User error notification | ☐ | ☐ | | |

### Part 5: Quality Management System

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **5.1 QMS Framework** | | | | |
| QMS reference (ISO 9001, ISO 42001, etc.) | ☐ | ☐ | | |
| QMS scope for AI systems | ☐ | ☐ | | |
| QMS responsibilities defined | ☐ | ☐ | | |
| QMS documentation location | ☐ | ☐ | | |
| **5.2 Quality Assurance** | | | | |
| Code review procedures | ☐ | ☐ | | |
| Testing standards and acceptance criteria | ☐ | ☐ | | |
| Documentation review procedures | ☐ | ☐ | | |
| Audit procedures (internal and external) | ☐ | ☐ | | |
| **5.3 Change Management** | | | | |
| Change request process | ☐ | ☐ | | |
| Impact assessment procedures | ☐ | ☐ | | |
| Change testing procedures | ☐ | ☐ | | |
| Change documentation requirements | ☐ | ☐ | | |
| **5.4 Release Management** | | | | |
| Version control system documented | ☐ | ☐ | | |
| Branching strategy documented | ☐ | ☐ | | |
| Release process documented | ☐ | ☐ | | |
| Release notes requirements | ☐ | ☐ | | |
| **5.5 Configuration Management** | | | | |
| Configuration items identified | ☐ | ☐ | | |
| Configuration baselines documented | ☐ | ☐ | | |
| Configuration audit procedures | ☐ | ☐ | | |
| Configuration documentation location | ☐ | ☐ | | |

### Part 6: Lifecycle Changes Description

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **6.1 Modification Log** | | | | |
| Post-market modification log established | ☐ | ☐ | | |
| Log fields defined (date, version, change, impact) | ☐ | ☐ | | |
| Historical changes documented (if existing system) | ☐ | ☐ | | |
| **6.2 Substantial Modification Criteria** | | | | |
| Substantial modification definition documented | ☐ | ☐ | | |
| Decision tree for substantial modification | ☐ | ☐ | | |
| Responsibility for assessment assigned | ☐ | ☐ | | |
| **6.3 Retraining History** | | | | |
| Initial training documented | ☐ | ☐ | | |
| Retraining events documented (if applicable) | ☐ | ☐ | | |
| Retraining data and rationale | ☐ | ☐ | | |
| Performance before/after retraining | ☐ | ☐ | | |
| **6.4 Performance Impact** | | | | |
| Template for performance impact analysis | ☐ | ☐ | | |
| Process for capturing impact during updates | ☐ | ☐ | | |
| **6.5 Re-validation** | | | | |
| Re-validation requirements by change type | ☐ | ☐ | | |
| Re-validation procedures documented | ☐ | ☐ | | |

### Part 7: Harmonized Standards and Solutions

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **7.1 Harmonized Standards** | | | | |
| Applied harmonized standards listed | ☐ | ☐ | | |
| Standard number, title, version, date | ☐ | ☐ | | |
| Requirements addressed by each standard | ☐ | ☐ | | |
| Evidence of compliance with standards | ☐ | ☐ | | |
| **7.2 Alternative Solutions** | | | | |
| Alternative solutions documented (if applicable) | ☐ | ☐ | | |
| Rationale for not using standards | ☐ | ☐ | | |
| Evidence of alternative solution effectiveness | ☐ | ☐ | | |
| **7.3 Common Specifications** | | | | |
| Common specifications applied (if adopted by EC) | ☐ | ☐ | | |
| Evidence of compliance | ☐ | ☐ | | |

### Part 8: EU Declaration of Conformity

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **8.1 Declaration Content** | | | | |
| AI system identification | ☐ | ☐ | | |
| Provider details | ☐ | ☐ | | |
| Declaration of conformity statement | ☐ | ☐ | | |
| Harmonized standards applied | ☐ | ☐ | | |
| Common specifications applied (if applicable) | ☐ | ☐ | | |
| Notified body details (if applicable) | ☐ | ☐ | | |
| Authorized signatory name and title | ☐ | ☐ | | |
| Date and place of issue | ☐ | ☐ | | |
| Signature of authorized signatory | ☐ | ☐ | | |
| **8.2 Conformity Assessment** | | | | |
| Conformity assessment procedure documented | ☐ | ☐ | | |
| Self-assessment report (if Article 43) | ☐ | ☐ | | |
| Notified body report (if Annex VI/VII) | ☐ | ☐ | | |
| Certificate of conformity (if notified body) | ☐ | ☐ | | |

### Part 9: Post-Market Performance Evaluation

| Requirement | Present? | Complete? | Evidence Reference | Notes |
|-------------|----------|-----------|-------------------|-------|
| **9.1 Post-Market Monitoring Plan** | | | | |
| Reference to detailed monitoring plan | ☐ | ☐ | | |
| Summary of monitoring approach | ☐ | ☐ | | |
| Monitoring scope, frequency, responsibility | ☐ | ☐ | | |
| **9.2 Performance Evaluation** | | | | |
| Ongoing evaluation procedures | ☐ | ☐ | | |
| Evaluation metrics defined | ☐ | ☐ | | |
| Degradation thresholds defined | ☐ | ☐ | | |
| Action triggers defined | ☐ | ☐ | | |
| **9.3 Data Collection** | | | | |
| Data collection scope defined | ☐ | ☐ | | |
| Collection methods documented | ☐ | ☐ | | |
| GDPR legal basis documented | ☐ | ☐ | | |
| Data retention period (10 years per Article 18) | ☐ | ☐ | | |
| **9.4 Incident Reporting** | | | | |
| Reference to incident reporting procedure | ☐ | ☐ | | |
| Incident detection methods | ☐ | ☐ | | |
| Incident classification (serious incident definition) | ☐ | ☐ | | |
| Internal reporting procedures | ☐ | ☐ | | |
| Authority reporting procedures (Article 73, 15 days) | ☐ | ☐ | | |
| **9.5 Serious Incident Response** | | | | |
| Serious incident criteria defined | ☐ | ☐ | | |
| Immediate response plan (< 24 hours) | ☐ | ☐ | | |
| Short-term response plan (< 15 days) | ☐ | ☐ | | |
| Long-term response procedures | ☐ | ☐ | | |
| **9.6 Corrective Actions** | | | | |
| Corrective action triggers defined | ☐ | ☐ | | |
| Corrective action process documented | ☐ | ☐ | | |
| Corrective action types identified | ☐ | ☐ | | |

### Completeness Summary

| Annex IV Part | Total Items | Complete | % Complete |
|---------------|-------------|----------|------------|
| Part 1: General Description | | | |
| Part 2(a): Development Methods | | | |
| Part 2(b): Design Specifications | | | |
| Part 2(c): Data Requirements | | | |
| Part 2(d): Human Oversight | | | |
| Part 2(e): Pre-determined Changes | | | |
| Part 2(f): Validation & Testing | | | |
| Part 3: Monitoring & Control | | | |
| Part 4: Performance & Robustness | | | |
| Part 5: QMS | | | |
| Part 6: Lifecycle Changes | | | |
| Part 7: Standards | | | |
| Part 8: Declaration | | | |
| Part 9: Post-Market | | | |
| **TOTAL** | | | |

**Overall Compliance Assessment:** [ ] Pass  [ ] Conditional Pass  [ ] Fail

**Reviewer:** ________________  **Date:** ________  **Signature:** __________

---

## APPENDIX B: DOCUMENTATION KPI LIBRARY

This appendix provides 15 Key Performance Indicators for documentation quality and compliance monitoring.

### B.1 Completeness KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Frequency |
|--------|----------|------------|-------------|--------|-----------|
| KPI-DOC-001 | Annex IV Completeness | Percentage of Annex IV sections complete | (Completed sections / Total required sections) × 100% | 100% | Per approval |
| KPI-DOC-002 | Evidence Linking Rate | Percentage of documentation claims linked to evidence | (Claims with evidence links / Total claims) × 100% | > 95% | Per approval |
| KPI-DOC-003 | Template Compliance | Percentage of sections using approved templates | (Sections using templates / Total sections) × 100% | 100% | Per approval |

### B.2 Accuracy KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Frequency |
|--------|----------|------------|-------------|--------|-----------|
| KPI-DOC-004 | Documentation Accuracy | Percentage of spot-checked claims verified accurate | (Accurate claims / Claims checked) × 100% | > 95% | Per approval |
| KPI-DOC-005 | System-Documentation Match | Degree to which documentation matches deployed system | Qualitative assessment (High/Med/Low) | High | Per deployment |
| KPI-DOC-006 | Technical Review Defect Rate | Number of critical/high defects found per 100 pages | (Critical + High defects / Total pages) × 100 | < 5 | Per review |

### B.3 Timeliness KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Frequency |
|--------|----------|------------|-------------|--------|-----------|
| KPI-DOC-007 | Documentation Creation Time | Days from project initiation to documentation approval | Approval date - Project start date | < 90 days | Per approval |
| KPI-DOC-008 | Review Cycle Time | Days from draft completion to final approval | Approval date - Draft completion date | < 28 days | Per approval |
| KPI-DOC-009 | Update Timeliness | Percentage of updates completed within required timeline | (On-time updates / Total updates) × 100% | > 95% | Quarterly |
| KPI-DOC-010 | Authority Response Time | Hours to provide documentation to competent authorities | Provision time - Request time (hours) | < 72 hours | Per request |

### B.4 Quality KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Frequency |
|--------|----------|------------|-------------|--------|-----------|
| KPI-DOC-011 | Review Comment Resolution | Percentage of review comments addressed | (Addressed comments / Total comments) × 100% | > 98% | Per approval |
| KPI-DOC-012 | Version Control Compliance | Percentage of changes properly versioned and logged | (Properly versioned changes / Total changes) × 100% | 100% | Quarterly |
| KPI-DOC-013 | Retention Audit Pass Rate | Percentage of annual retention audits passed | (Passed audits / Total audits) × 100% | 100% | Annually |

### B.5 Usability KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Frequency |
|--------|----------|------------|-------------|--------|-----------|
| KPI-DOC-014 | Documentation Accessibility | Percentage uptime of documentation repository | (Uptime hours / Total hours) × 100% | > 99.5% | Monthly |
| KPI-DOC-015 | Stakeholder Satisfaction | Documentation user satisfaction score | Survey: 1-5 scale | > 4.0/5.0 | Annually |

### B.6 KPI Dashboard and Reporting

**Monthly Dashboard:**
- KPI-DOC-014 (Accessibility)

**Per-Approval Dashboard:**
- KPI-DOC-001, 002, 003, 004, 005, 006, 007, 008, 011, 012

**Quarterly Dashboard:**
- KPI-DOC-009 (Update Timeliness)
- KPI-DOC-012 (Version Control)

**Annual Dashboard:**
- KPI-DOC-013 (Retention Audits)
- KPI-DOC-015 (Stakeholder Satisfaction)

**Target Dashboard Colors:**
- Green: Target met or exceeded
- Yellow: Within 5% of target (warning)
- Red: More than 5% below target (action required)

---

## APPENDIX C: GLOSSARY OF DOCUMENTATION TERMS

This glossary defines key terms used in EU AI Act technical documentation.

| Term | Definition |
|------|------------|
| **AI System** | A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments (EU AI Act Art. 3(1)) |
| **Annex IV** | Technical documentation requirements for high-risk AI systems specified in Annex IV of the EU AI Act |
| **Authority** | Competent national authority responsible for EU AI Act enforcement in a member state |
| **Conformity Assessment** | Process of demonstrating whether requirements for an AI system have been fulfilled (Article 43) |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority (EU AI Act Art. 3(4)) |
| **Documentation Completeness** | All Annex IV sections are present and populated with required information |
| **Documentation Accuracy** | Documentation correctly represents the actual AI system implementation |
| **Documentation Currency** | Documentation is up-to-date and reflects current system state |
| **EU Declaration of Conformity** | Document by which the provider declares that the AI system meets all EU AI Act requirements (Annex V) |
| **Evidence Linking** | Practice of cross-referencing documentation claims to supporting evidence (test reports, data sheets, etc.) |
| **General-Purpose AI (GPAI)** | AI model that displays significant generality and is capable of competently performing a wide range of distinct tasks (Article 3(44)) |
| **Harmonized Standard** | European standard adopted by European standardization organization; compliance creates presumption of conformity |
| **High-Risk AI System** | An AI system listed in Annex III or intended as a safety component of a product covered by EU harmonization legislation (Article 6) |
| **Human Oversight** | Measures designed to be taken by natural persons to prevent or minimize risks to health, safety, or fundamental rights (Article 14) |
| **Instructions for Use** | Information provided by provider to deployer explaining system use, capabilities, and limitations (Article 13) |
| **Intended Purpose** | The use for which an AI system is intended by the provider, including specific context and conditions of use (Article 3(12)) |
| **Post-Market Monitoring** | All activities carried out by providers to collect and review experience with AI systems they place on market or put into service (Article 72) |
| **Provider** | Natural or legal person that develops an AI system or general-purpose AI model and places it on the market or puts it into service under its own name or trademark (EU AI Act Art. 3(3)) |
| **Serious Incident** | Incident or malfunctioning of an AI system that directly or indirectly leads to death, serious harm to health, serious property damage, serious environmental damage, or serious violation of fundamental rights (Article 3(49)) |
| **Substantial Modification** | Change to an AI system after market placement that was not foreseen or planned in the initial conformity assessment and affects compliance (Article 43(4)) |
| **Technical Documentation** | Comprehensive set of documents required by Annex IV demonstrating AI system compliance with EU AI Act |
| **Version Control** | System for tracking and managing changes to documentation over time |

---

## APPENDIX D: CROSS-REFERENCES TO OTHER PROCEDURES

This appendix maps relationships between this procedure and other AI compliance procedures.

### D.1 Procedure Dependencies

```
                    ┌─────────────────────────────┐
                    │  POL-AI-001                 │
                    │  AI Governance Policy       │
                    │  (Parent Policy)            │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ PROC-AI-CLS-001   │   │ PROC-AI-DOC-001   │   │ PROC-AI-RM-001    │
│ Classification    │──▶│ Documentation     │◀──│ Risk Management   │
│                   │   │ (THIS PROCEDURE)  │   │                   │
└───────────────────┘   └─────────┬─────────┘   └───────────────────┘
        │                         │                         │
        │                         ▼                         │
        │               ┌───────────────────┐               │
        │               │ PROC-AI-DATA-001  │               │
        │               │ Data Governance   │               │
        │               └─────────┬─────────┘               │
        │                         │                         │
        └─────────────────────────┼─────────────────────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-PMM-001   │
                        │ Post-Market Mon.  │
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-INC-001   │
                        │ Incident Response │
                        └───────────────────┘
```

### D.2 Procedure Interface Matrix

| From This Procedure (Step) | To Procedure | Interface | When | Information Flow |
|-----------------------------|--------------|-----------|------|------------------|
| Step 1.1 (Initiate) | PROC-AI-CLS-001 | Classification determines documentation scope | Before planning | Classification result → Documentation scope |
| Step 2.2 (Data Requirements) | PROC-AI-DATA-001 | Data governance feeds into Annex IV Part 2(c) | During creation | Data sheets, quality assessments → Documentation |
| Step 2.2 (Validation) | PROC-AI-RM-001 | Risk assessment feeds into Annex IV Part 2(f) and Part 9 | During creation | Risk register, bias assessment → Documentation |
| Step 3.2 (Post-Market) | PROC-AI-PMM-001 | Post-market plan feeds into Annex IV Part 9 | Before approval | Monitoring plan → Documentation |
| Step 5.1 (Maintain) | PROC-AI-INC-001 | Incidents trigger documentation updates | During operation | Incident reports → Documentation updates |
| Step 5.1 (Maintain) | PROC-AI-RM-001 | Substantial modifications trigger risk re-assessment | During operation | Modification log → Risk re-assessment |

### D.3 Documentation Inputs from Other Procedures

| Input Document | Source Procedure | Feeds Into | Frequency |
|----------------|------------------|------------|-----------|
| AI System Classification Report | PROC-AI-CLS-001 | Annex IV Part 1 (Classification rationale) | Per system |
| Risk Assessment Report | PROC-AI-RM-001 | Annex IV Part 2(f), Part 9 | Per system + updates |
| Bias Assessment Report | PROC-AI-RM-001 | Annex IV Part 2(c), Part 4 | Per system + updates |
| Data Governance Documentation | PROC-AI-DATA-001 | Annex IV Part 2(c) | Per system + updates |
| Data Sheets and Data Cards | PROC-AI-DATA-001 | Annex IV Part 2(c) | Per system |
| Post-Market Monitoring Plan | PROC-AI-PMM-001 | Annex IV Part 9 | Per system |
| Incident Reports | PROC-AI-INC-001 | Annex IV Part 6 (Modification log), Part 9 | Per incident |

### D.4 Documentation Outputs to Other Procedures

| Output Document | Receiving Procedure | Used For | Frequency |
|-----------------|---------------------|----------|-----------|
| Complete Technical Documentation | PROC-AI-PMM-001 | Reference during post-market monitoring | Deployment + updates |
| EU Declaration of Conformity | PROC-AI-VENDOR-001 | Vendor due diligence (if provider) | Deployment |
| Known Limitations Documentation | PROC-AI-PMM-001 | Monitoring trigger definition | Deployment + updates |
| Instructions for Use | PROC-AI-DEPLOY-001 | Deployer onboarding | Deployment + updates |

---

## APPENDIX E: QUICK REFERENCE CARD FOR DOCUMENTATION TEAM

### Documentation Planning Checklist (Step 1.1-1.2)

- [ ] AI system classified as high-risk (PROC-AI-CLS-001)
- [ ] Documentation planning meeting scheduled (within 1 week)
- [ ] Documentation plan created (TMP-AI-DOC-001, Sheet 1)
- [ ] Section responsibilities assigned
- [ ] Documentation repository established
- [ ] Documentation standards defined (TMP-AI-DOC-001, Sheet 2)
- [ ] Templates distributed to contributors

### Annex IV Section Assignments (Typical)

| Annex IV Section | Primary Author | Review SME |
|------------------|----------------|------------|
| Part 1: General Description | AI System Owner | Technical Writer |
| Part 2(a): Development Methods | Development Lead | System Architect |
| Part 2(b): Design Specifications | System Architect | Development Lead |
| Part 2(c): Data Requirements | Data Scientist | Data Steward |
| Part 2(d): Human Oversight | UX Designer | Product Manager |
| Part 2(e): Pre-determined Changes | Configuration Manager | Development Lead |
| Part 2(f): Validation & Testing | QA Engineer | Data Scientist |
| Part 3: Monitoring & Control | ML Ops Engineer | AI System Owner |
| Part 4: Performance & Robustness | Data Scientist | QA Engineer |
| Part 5: QMS | Quality Manager | Compliance Officer |
| Part 6: Lifecycle Changes | Configuration Manager | AI System Owner |
| Part 7: Standards | Compliance Officer | Legal Counsel |
| Part 8: Declaration | Legal Counsel | Compliance Officer |
| Part 9: Post-Market | PMM Lead | AI System Owner |

### Documentation Review and Approval Timeline

| Activity | Duration | Owner |
|----------|----------|-------|
| Draft all sections | 8-12 weeks | Section authors |
| Technical review | 2 weeks | SMEs |
| Comment resolution | 2 weeks | Section authors |
| Compliance review | 1 week | Compliance Officer |
| Gap resolution | 1 week | AI System Owner |
| Final approval | 1 week | AI Documentation Lead |
| **Total** | **15-19 weeks** | |

### Documentation Update Triggers (Step 5.1)

| Trigger | Timeline | Approval |
|---------|----------|----------|
| Substantial modification | 30 days | AI Governance Committee |
| Regulatory changes | 60 days | Compliance Officer |
| Performance issues | 15 days | AI System Owner |
| Post-market findings | 30 days | AI System Owner |
| Serious incidents | 15 days | AI Documentation Lead |
| Model retraining | 30 days | Data Scientist |

### Version Control Quick Reference

| Change Type | Version Increment | Review Required | Approval Required |
|-------------|-------------------|-----------------|-------------------|
| Substantial modification | Major (X.0.0) | Full (technical + compliance) | AI Governance Committee |
| Significant update | Minor (1.X.0) | Targeted (affected SMEs) | AI Documentation Lead |
| Correction/clarification | Patch (1.0.X) | AI System Owner | AI System Owner |

### 10-Year Retention Key Points

- **Start Date:** Deployment (market placement)
- **End Date:** 10 years after deployment or last use (whichever later)
- **Annual Audit:** Verify accessibility within 72 hours
- **Authority Access:** Provide within 72 hours of request
- **All Versions:** Retain all versions, not just latest
- **Logs:** Retain automatically generated logs for 10 years

### Key Contacts for Documentation Team

| Role | Responsibility | Escalate For |
|------|---------------|--------------|
| AI Documentation Lead | Overall documentation accountability | Final approval, authority requests |
| Technical Writer | Documentation clarity and standards | Style and formatting issues |
| Compliance Officer | Regulatory compliance verification | Annex IV completeness, compliance gaps |
| AI System Owner | Documentation accuracy | Technical accuracy, system changes |
| Records Manager | 10-year retention management | Retention audits, archive access |

### Common Pitfalls to Avoid

1. **Generic intended purpose:** Be specific about use cases and constraints
2. **Missing evidence links:** Link every claim to supporting evidence
3. **Ignoring limitations:** Honestly document known limitations and failure modes
4. **Stale documentation:** Update within 30 days of changes
5. **Incomplete demographic analysis:** Performance must be analyzed by protected groups
6. **Weak human oversight:** Clearly define how humans can intervene
7. **Missing version history:** Maintain complete change log
8. **Inaccessible archives:** Test retrieval annually

---

**END OF PROCEDURE PROC-AI-DOC-001**
