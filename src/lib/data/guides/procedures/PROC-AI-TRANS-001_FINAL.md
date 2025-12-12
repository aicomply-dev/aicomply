# PROC-AI-TRANS-001: AI Transparency Procedure

**Procedure ID:** PROC-AI-TRANS-001
**Procedure Name:** AI Transparency Procedure
**Standard:** STD-AI-003: AI Transparency Standard
**Covers Controls:** TRANS-001, TRANS-002, TRANS-003, TRANS-004, TRANS-005
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the step-by-step process for implementing comprehensive transparency and information disclosure requirements for AI systems in compliance with EU AI Act Article 13 (Transparency and Information to Deployers) and Article 50 (Transparency for Users). It ensures that all stakeholders receive clear, accurate, and accessible information about AI systems throughout their lifecycle.

### 1.2 Scope

This procedure applies to:
- All high-risk AI systems per Annex III of the EU AI Act
- All AI systems that interact with natural persons
- All AI systems requiring user disclosure (emotion recognition, biometric categorization, deepfakes)
- All AI systems requiring explainability of decisions
- All provider and deployer transparency obligations

This procedure does not apply to:
- Minimal-risk AI systems without user interaction (unless specifically requested)
- Internal testing systems not deployed to users
- Research prototypes not placed on the market

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Transparency Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Compliance Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|---|---|
| **AI Transparency Manager** | Own and execute transparency procedures; maintain documentation; conduct disclosure reviews | Approve transparency materials; escalate non-compliance |
| **AI System Owner** | Ensure transparency for their systems; maintain Instructions for Use; respond to user information requests | Approve system-specific transparency content |
| **Technical Writer** | Create and maintain Instructions for Use; develop user-facing transparency notices; ensure clarity and accessibility | Draft and update transparency documentation |
| **Product Manager** | Define user interaction points; implement transparency UI/UX; integrate disclosure mechanisms | Approve user-facing transparency features |
| **Legal Counsel** | Verify regulatory compliance; review transparency disclosures; advise on legal requirements | Validate legal adequacy of disclosures |
| **Compliance Officer** | Audit transparency implementation; verify documentation completeness; assess regulatory alignment | Challenge inadequate transparency; recommend improvements |
| **Data Scientist/ML Engineer** | Provide technical accuracy metrics; develop explainability mechanisms; generate technical documentation | Ensure technical accuracy of transparency content |

### 2.2 RACI Matrix

| Activity | Transparency Mgr | System Owner | Tech Writer | Product Mgr | Legal | Compliance | Data Scientist |
|----------|---|---|---|---|---|---|---|
| Instructions for Use creation | A | R | R | C | C | I | R |
| User disclosure implementation | C | R | C | A | C | I | C |
| Transparency notice design | A | R | R | R | C | C | C |
| Explainability mechanism design | C | R | I | C | C | I | A |
| Accuracy metrics documentation | C | R | C | I | I | C | A |
| Transparency materials approval | A | R | C | C | A | C | I |
| User information request response | C | A | C | C | C | I | R |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. TRANSPARENCY FRAMEWORK

### 3.1 Transparency System Components

The AI transparency system consists of six integrated components:

```
┌─────────────────────────────────────────────────────────────┐
│         AI TRANSPARENCY SYSTEM FRAMEWORK                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. INSTRUCTIONS FOR USE (Article 13)                       │
│     ├─ Provider Identity & Contact                          │
│     ├─ AI System Characteristics                            │
│     ├─ Intended Purpose & Use Cases                         │
│     ├─ Performance Metrics & Limitations                    │
│     ├─ Human Oversight Requirements                         │
│     └─ Maintenance & Update Information                     │
│                                                              │
│  2. USER AI DISCLOSURE (Article 50)                         │
│     ├─ Interaction Detection                                │
│     ├─ Disclosure Timing & Placement                        │
│     ├─ Clear & Conspicuous Notice                           │
│     └─ User Acknowledgement (where required)                │
│                                                              │
│  3. TRANSPARENCY NOTICES                                    │
│     ├─ Decision-Making Transparency                         │
│     ├─ Data Usage Disclosure                                │
│     ├─ Rights & Remedies Information                        │
│     └─ Contact Information                                  │
│                                                              │
│  4. EXPLAINABILITY MECHANISMS                               │
│     ├─ Decision Rationale Explanations                      │
│     ├─ Feature Importance Disclosure                        │
│     ├─ Model Confidence Indicators                          │
│     └─ Contrastual Explanations                             │
│                                                              │
│  5. ACCURACY & PERFORMANCE REPORTING                        │
│     ├─ Accuracy Levels & Metrics                            │
│     ├─ Error Rates & Limitations                            │
│     ├─ Performance Degradation Monitoring                   │
│     └─ Periodic Performance Updates                         │
│                                                              │
│  6. DOCUMENTATION MAINTENANCE                               │
│     ├─ Version Control & Change Logs                        │
│     ├─ Periodic Review & Updates                            │
│     ├─ Stakeholder Communication                            │
│     └─ Archive & Retention Management                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Transparency Lifecycle Integration

Transparency activities are integrated into each phase of the AI system lifecycle:

| Lifecycle Phase | Transparency Activities | Deliverables |
|---|---|---|
| **1. Design** | Define transparency requirements; Plan disclosure mechanisms; Design explainability approach | Transparency Requirements Document; Disclosure Design Specification |
| **2. Development** | Create draft Instructions for Use; Implement disclosure UI/UX; Develop explainability features | Draft Instructions for Use; Disclosure Implementation; Explainability Module |
| **3. Testing** | Test transparency materials for clarity; Validate disclosure mechanisms; Test explainability accuracy | User Testing Report; Disclosure Testing Results; Explainability Validation |
| **4. Deployment** | Finalize Instructions for Use; Activate disclosure mechanisms; Enable explainability features | Final Instructions for Use; Active Disclosure System; Live Explainability |
| **5. Operation** | Monitor disclosure effectiveness; Update performance metrics; Respond to information requests | Disclosure Analytics; Updated Performance Metrics; User Request Logs |
| **6. Updates** | Update Instructions for Use; Communicate changes to users; Refresh transparency materials | Updated Instructions for Use; Change Notifications; Revised Materials |

### 3.3 Disclosure Requirements by AI System Type

Different AI systems have different transparency obligations under the EU AI Act:

| AI System Type | Article | Disclosure Required | Timing | Format |
|---|---|---|---|---|
| **High-Risk AI** | Art. 13 | Instructions for Use (comprehensive) | Before deployment | Technical documentation + user guide |
| **Emotion Recognition** | Art. 50(1) | Inform users AI is being used | Before interaction | Clear, conspicuous notice |
| **Biometric Categorization** | Art. 50(1) | Inform users AI is being used | Before interaction | Clear, conspicuous notice |
| **Deepfakes/Synthetic Content** | Art. 50(2) | Disclose artificial generation | With content | Visible watermark + metadata |
| **AI-Generated Content** | Art. 50(4) | Mark as AI-generated | With content | Machine-readable format |
| **Chatbots/Conversational AI** | Art. 50(1) | Inform users they're interacting with AI | At conversation start | Clear statement |
| **Decision-Making AI** | Art. 13(3)(b)(vi) | Explain decision logic | With decision | User-accessible explanation |

### 3.4 Explainability Levels Framework

Explainability requirements vary based on AI system risk and user needs:

#### 3.4.1 Explainability Tier Classification

| Tier | Description | When Required | Explanation Depth |
|------|-------------|---------------|-------------------|
| **Tier 1: Full Explainability** | Complete decision rationale | High-risk AI affecting fundamental rights; Legal/regulatory decisions | Full feature attribution; Contrastual explanations; Alternative scenarios |
| **Tier 2: Substantial Explainability** | Key factors and logic | High-risk AI with moderate impact; Employment decisions | Primary factors; Confidence scores; General logic |
| **Tier 3: Basic Explainability** | High-level rationale | Limited-risk AI; User-requested explanations | Output reasoning; General approach; Limitations disclosure |
| **Tier 4: Transparency Notice** | AI presence disclosure | All user-facing AI | AI usage notification; General purpose; Contact info |

#### 3.4.2 Explainability Content Requirements

| Tier | Must Include | May Include | User Format |
|------|--------------|-------------|-------------|
| **Tier 1** | Specific features used; Feature weights/importance; Decision threshold; Alternative scenarios; Confidence score | Counterfactual explanations; Model architecture; Training data characteristics | Technical report + plain language summary |
| **Tier 2** | Top 5 factors; General decision logic; Confidence level; Limitations | Feature importance visualization; Performance metrics | Plain language explanation + optional detail |
| **Tier 3** | AI system used; General approach; Limitations; Contact for questions | Model type; Performance level | Plain language notice |
| **Tier 4** | AI presence; Purpose; Provider contact | System capabilities; Privacy policy link | Simple, clear notice |

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: INSTRUCTIONS FOR USE CREATION (Control TRANS-001)

#### Step 1.1: Gather Required Information for Instructions for Use

**When:** During AI system design phase, before deployment

**Who:** AI Transparency Manager + AI System Owner + Technical Writer + Data Scientist

**Regulatory Basis:** Article 13(3)(b) specifies mandatory content for Instructions for Use

**How:**

1. **Collect Provider Information**
   - Legal entity name and registered address
   - Authorized representative (if outside EU)
   - Contact information (email, phone, website)
   - Registration number (if applicable)
   - Quality management system certification

2. **Document AI System Identity**
   - AI system name and version number
   - Product code or unique identifier
   - Classification per Annex III (specify category)
   - CE marking status (once obtained)
   - Date of first market placement

3. **Define AI System Characteristics (Article 13(3)(b)(i))**
   - Type of AI system (e.g., supervised learning, neural network)
   - Input data types and formats
   - Output types (predictions, recommendations, decisions)
   - Operating environment requirements
   - Integration interfaces (APIs, data formats)
   - Processing capabilities and limitations

4. **Document Intended Purpose (Article 13(3)(b)(ii))**
   - Primary intended use case(s)
   - Target user population
   - Intended deployment environment
   - Intended user skills/qualifications
   - Geographic scope of intended use
   - Explicitly excluded use cases (off-label uses)

5. **Compile Performance Metrics (Article 13(3)(b)(iv))**
   - Overall accuracy level (e.g., 94.3% on validation set)
   - Precision, recall, F1-score (as applicable)
   - Performance by demographic group (fairness metrics)
   - Performance degradation thresholds
   - Validation methodology used
   - Test dataset characteristics
   - Benchmark comparisons (if available)

6. **Identify Known Limitations (Article 13(3)(b)(iv))**
   - Circumstances where accuracy degrades
   - Known bias or fairness issues
   - Environmental limitations (lighting, noise, etc.)
   - Input data quality requirements
   - Populations where performance is reduced
   - Edge cases and failure modes
   - Cybersecurity vulnerabilities

7. **Define Human Oversight Requirements (Article 13(3)(b)(v))**
   - Required level of human oversight (per PROC-AI-OVERSIGHT-001)
   - Human reviewer qualifications
   - Decision review protocols
   - Override mechanisms and procedures
   - Monitoring requirements
   - Escalation procedures

8. **Document Technical Specifications**
   - Hardware requirements
   - Software dependencies
   - Network/connectivity requirements
   - Data storage requirements
   - Computational resources needed
   - Interoperability standards supported

9. **Compile Maintenance Information (Article 13(3)(b)(iii))**
   - Expected operational lifetime
   - Recommended update frequency
   - Model retraining schedule
   - Monitoring and maintenance procedures
   - Support and service information
   - End-of-life procedures

10. **Prepare Safety Information**
    - Reasonably foreseeable misuse scenarios
    - Safety warnings and precautions
    - Emergency procedures
    - Incident reporting instructions
    - Cybersecurity best practices
    - Data protection requirements

**Evidence Required:**
- Information Gathering Checklist (CHK-AI-TRANS-001) - completed
- Provider Information Package
- AI System Technical Specifications
- Performance Metrics Report (RPT-AI-PERF-001)
- Limitations Assessment Report
- Human Oversight Requirements Document

**Timing:** 2-3 weeks

**Quality Check:**
- All Article 13(3)(b) requirements addressed
- Performance metrics validated by Data Scientist
- Limitations assessment comprehensive and accurate
- Technical information verified for accuracy

---

#### Step 1.2: Create Instructions for Use Document (Control TRANS-001)

**When:** After information gathering complete

**Who:** Technical Writer + AI Transparency Manager + AI System Owner

**Regulatory Basis:** Article 13(3)(b) requires Instructions for Use in digital format, accessible format

**How:**

1. **Use Instructions for Use Template**
   - Apply standardized template (TMP-AI-TRANS-001)
   - Ensure consistent structure across all AI systems
   - Include all mandatory sections per Article 13

2. **Write Instructions for Use Content**

   **Section 1: Provider Information**
   ```
   Provider Name: [Legal entity name]
   Address: [Full registered address]
   Contact: [Email, phone, website]
   Authorized Representative (if applicable): [Name, address, contact]
   ```

   **Section 2: AI System Identity**
   ```
   AI System Name: [Name]
   Version: [Version number]
   Product Code: [Unique identifier]
   Classification: [Annex III category]
   Date of First Placement on Market: [Date]
   ```

   **Section 3: Intended Purpose**
   ```
   Primary Use Case: [Detailed description]
   Target Users: [User population characteristics]
   Deployment Environment: [Where system operates]
   User Qualifications: [Required skills/training]
   Geographic Scope: [Intended regions]
   Excluded Uses: [Explicitly not intended for...]
   ```

   **Section 4: AI System Characteristics**
   ```
   System Type: [e.g., Deep learning neural network]
   Input Data: [Types, formats, requirements]
   Output Data: [Types, formats, interpretation]
   Operating Environment: [Hardware, software, network]
   Integration: [APIs, data formats, protocols]
   ```

   **Section 5: Performance and Accuracy**
   ```
   Overall Accuracy: [e.g., 94.3% on validation set]
   Precision: [Value and interpretation]
   Recall: [Value and interpretation]
   F1-Score: [Value and interpretation]
   Fairness Metrics: [Performance by demographic group]
   Validation Methodology: [How performance was measured]
   Test Dataset: [Characteristics and representativeness]
   Performance by Subgroup: [Detailed breakdown]
   ```

   **Section 6: Known Limitations**
   ```
   Accuracy Limitations: [When accuracy degrades]
   Bias and Fairness Limitations: [Known fairness issues]
   Environmental Limitations: [Lighting, noise, etc.]
   Data Quality Requirements: [Minimum data quality]
   Population Limitations: [Groups with reduced performance]
   Edge Cases: [Failure modes and scenarios]
   ```

   **Section 7: Human Oversight**
   ```
   Oversight Level Required: [Continuous/periodic/event-based]
   Reviewer Qualifications: [Required skills and training]
   Review Procedures: [Step-by-step review process]
   Override Mechanisms: [How to override AI decisions]
   Monitoring Requirements: [What to monitor and how]
   Escalation Procedures: [When and how to escalate]
   ```

   **Section 8: Installation and Setup**
   ```
   Hardware Requirements: [Specifications]
   Software Dependencies: [Required software]
   Installation Procedure: [Step-by-step installation]
   Configuration: [Required configuration steps]
   Testing and Validation: [How to verify correct operation]
   ```

   **Section 9: Operation and Use**
   ```
   Normal Operation: [How to use the system]
   Input Preparation: [How to prepare input data]
   Output Interpretation: [How to interpret results]
   Monitoring During Operation: [What to monitor]
   Troubleshooting: [Common issues and solutions]
   ```

   **Section 10: Maintenance and Updates**
   ```
   Expected Lifetime: [Duration before replacement]
   Maintenance Schedule: [Routine maintenance requirements]
   Update Procedures: [How updates are delivered]
   Retraining Requirements: [When retraining is needed]
   Performance Monitoring: [Ongoing monitoring procedures]
   ```

   **Section 11: Safety and Security**
   ```
   Safety Warnings: [Important safety information]
   Reasonably Foreseeable Misuse: [Scenarios and mitigation]
   Emergency Procedures: [What to do in emergencies]
   Cybersecurity Requirements: [Security best practices]
   Data Protection: [Privacy and data handling]
   Incident Reporting: [How to report incidents]
   ```

   **Section 12: Support and Contact**
   ```
   Technical Support: [Contact information and hours]
   Training Resources: [Available training materials]
   Documentation Updates: [Where to find latest version]
   Feedback and Questions: [How to provide feedback]
   Incident Reporting: [Emergency contact information]
   ```

3. **Apply Clarity and Accessibility Standards**
   - Use plain language (avoid jargon where possible)
   - Define all technical terms in glossary
   - Use clear, concise sentences (maximum 25 words)
   - Structure with headings, bullet points, and white space
   - Include diagrams and illustrations where helpful
   - Use tables for structured information
   - Provide examples to clarify complex concepts

4. **Ensure Accessibility Compliance**
   - Digital format: PDF/A or HTML
   - Screen reader compatible
   - Sufficient color contrast (WCAG 2.1 AA minimum)
   - Alternative text for all images
   - Logical reading order
   - Keyboard navigable (for web versions)
   - Available in language(s) of target market

5. **Add Multilingual Versions**
   - Translate into all official EU languages where system is marketed
   - Use professional translation services (not machine translation)
   - Have translations reviewed by native speakers
   - Maintain version control across all language versions
   - Ensure consistency of technical terminology

6. **Version Control and Metadata**
   - Document version number (e.g., v1.0)
   - Creation date
   - Last update date
   - Revision history
   - Author and reviewer names
   - Approval signatures
   - Change summary (for updates)

**Evidence Required:**
- Instructions for Use Document (DOC-AI-IFU-XXX) - complete
- Accessibility Compliance Report (TEST-AI-TRANS-001)
- Translation Verification Records (for multilingual versions)
- Version Control Log
- Review and Approval Records

**Timing:** 3-4 weeks

**Quality Check:**
- All Article 13(3)(b) requirements present
- Content accurate and verified by technical experts
- Language clear and accessible (readability score ≥ 60)
- Accessibility standards met (WCAG 2.1 AA)
- Translations accurate and consistent
- Legal review approved

---

#### Step 1.3: Review and Approve Instructions for Use (Control TRANS-001)

**When:** After Instructions for Use draft complete

**Who:** AI Transparency Manager + AI System Owner + Legal Counsel + Compliance Officer

**How:**

1. **Technical Review**
   - Data Scientist reviews technical accuracy
   - Verify performance metrics are correct
   - Validate limitations assessment
   - Confirm system characteristics accurate
   - Sign off on technical content

2. **Legal Review**
   - Legal Counsel reviews regulatory compliance
   - Verify Article 13 requirements met
   - Check for legal disclaimers and warnings
   - Ensure liability statements adequate
   - Validate contact information
   - Approve legal content

3. **Compliance Review**
   - Compliance Officer audits completeness
   - Verify all mandatory elements present
   - Check for consistency with technical documentation
   - Validate alignment with risk assessment
   - Confirm audit trail adequate
   - Approve compliance aspects

4. **User Accessibility Review**
   - Conduct readability assessment (Flesch Reading Ease ≥ 60)
   - Test with sample users (if possible)
   - Verify accessibility standards met
   - Check multilingual versions for accuracy
   - Obtain user feedback (if pilot available)

5. **Final Approval**
   - AI System Owner approves system-specific content
   - AI Transparency Manager approves overall document
   - Legal Counsel provides legal approval
   - Compliance Officer provides compliance approval
   - Document all approvals with signatures and dates

6. **Publication Preparation**
   - Finalize all versions (languages, formats)
   - Generate final PDF/A and HTML versions
   - Prepare distribution package
   - Upload to documentation repository
   - Prepare public access link (if applicable)

**Evidence Required:**
- Technical Review Sign-off
- Legal Review Approval
- Compliance Review Approval
- User Accessibility Testing Report
- Final Approval Records with Signatures
- Publication Package

**Timing:** 1-2 weeks

**Quality Check:**
- All reviewers have approved
- No outstanding issues or comments
- All versions finalized and tested
- Distribution package complete
- Audit trail complete

---

#### Step 1.4: Distribute and Publish Instructions for Use (Control TRANS-001)

**When:** Before AI system deployment; with product delivery

**Who:** AI Transparency Manager + Product Manager

**Regulatory Basis:** Article 13(1) requires Instructions for Use to accompany AI system

**How:**

1. **Prepare Distribution Channels**
   - Add Instructions for Use to product package (digital)
   - Upload to provider website (public access)
   - Add to customer portal/documentation system
   - Prepare download links
   - Set up distribution tracking

2. **Distribute to Deployers**
   - Include Instructions for Use in product delivery
   - Email direct link to deployers
   - Provide in customer onboarding package
   - Ensure deployers acknowledge receipt
   - Document distribution date and recipient

3. **Publish for Public Access**
   - Upload to provider website documentation section
   - Create public URL (e.g., https://provider.com/ai-systems/[system-id]/instructions)
   - Ensure search engine discoverability
   - Add to product information pages
   - Include in marketing materials (reference)

4. **Maintain Access Records**
   - Log all distribution events
   - Track download statistics
   - Record deployer acknowledgements
   - Monitor access requests
   - Maintain audit trail

5. **Communicate Availability**
   - Notify all current deployers
   - Announce availability on website
   - Include in release notes
   - Update product documentation
   - Inform sales and support teams

**Evidence Required:**
- Distribution Records (REC-AI-TRANS-001)
- Deployer Acknowledgement Forms
- Public Access URL
- Website Publication Confirmation
- Communication Records

**Timing:** 1 week

**Quality Check:**
- All deployers have received Instructions for Use
- Public access URL functional
- Download tracking operational
- Acknowledgements received and documented
- Communication completed

---

### PHASE 2: INSTRUCTIONS FOR USE MAINTENANCE (Control TRANS-002)

#### Step 2.1: Monitor Triggers for Instructions for Use Updates

**When:** Continuous during operation

**Who:** AI Transparency Manager + AI System Owner + Data Scientist

**Regulatory Basis:** Article 13(3)(b)(iii) requires updates for accuracy, performance, or limitations changes

**How:**

1. **Establish Update Triggers**

   | Trigger Category | Trigger Event | Update Required | Timeline |
   |---|---|---|---|
   | **Performance Change** | Accuracy drops >5% from documented level | Yes | Within 30 days |
   | **Performance Change** | Fairness metric breach (ratio <0.8 or >1.25) | Yes | Within 30 days |
   | **Limitations Change** | New limitation discovered | Yes | Within 30 days |
   | **Functionality Change** | New features or capabilities added | Yes | With deployment |
   | **Safety Change** | New safety issue or misuse discovered | Yes | Within 15 days |
   | **Human Oversight Change** | Oversight requirements modified | Yes | Before implementation |
   | **Version Update** | New software/model version deployed | Yes | With deployment |
   | **Regulatory Change** | New legal requirements | Yes | Per regulation |
   | **Contact Change** | Provider contact information changes | Yes | Within 15 days |
   | **Periodic Review** | Annual comprehensive review | Evaluate | Annually |

2. **Implement Continuous Monitoring**
   - Monitor performance metrics (per PROC-AI-RM-001 KRIs)
   - Track incident reports and user feedback
   - Review system change logs
   - Monitor regulatory developments
   - Track contact information changes
   - Review periodic performance reports

3. **Document Trigger Events**
   - Record trigger event date and details
   - Assess impact on Instructions for Use
   - Determine update urgency (15/30/60 days)
   - Assign update owner
   - Create update task in tracking system
   - Document in Update Trigger Log (REC-AI-TRANS-002)

4. **Prioritize Updates**

   | Priority | Trigger Type | Response Time |
   |---|---|---|
   | **Critical** | Safety issue; Major performance degradation; Compliance breach | 15 days |
   | **High** | Moderate performance change; New limitation; Contact change | 30 days |
   | **Medium** | Minor functionality change; Process improvement | 60 days |
   | **Low** | Clarification; Formatting improvement | Next scheduled review |

5. **Escalate Critical Triggers**
   - Notify AI Transparency Manager immediately
   - Escalate to AI Governance Committee if critical
   - Prepare emergency update if safety-related
   - Document escalation

**Evidence Required:**
- Update Trigger Log (REC-AI-TRANS-002)
- Performance Monitoring Reports
- Incident Reports triggering updates
- Escalation Records (if applicable)

**Timing:** Continuous monitoring; Weekly trigger review

**Quality Check:**
- All monitoring systems operational
- Triggers detected and documented promptly
- Prioritization assigned correctly
- Escalation procedures followed for critical triggers

---

#### Step 2.2: Update Instructions for Use (Control TRANS-002)

**When:** When update trigger occurs

**Who:** Technical Writer + AI Transparency Manager + Subject Matter Experts

**How:**

1. **Assess Required Changes**
   - Review trigger event details
   - Identify affected sections of Instructions for Use
   - Determine scope of changes needed
   - Consult subject matter experts
   - Document change requirements

2. **Draft Updated Content**
   - Revise affected sections
   - Update performance metrics (if changed)
   - Add new limitations (if discovered)
   - Update version number and date
   - Add change summary to revision history
   - Track all changes (track changes mode)

3. **Update Multilingual Versions**
   - Translate updated sections
   - Maintain consistency across languages
   - Update version numbers in all languages
   - Quality check translations

4. **Review Updated Content**
   - Technical review by Data Scientist (if technical changes)
   - Legal review by Legal Counsel (if significant)
   - Compliance review by Compliance Officer
   - AI System Owner approval
   - AI Transparency Manager final approval

5. **Finalize Updated Instructions for Use**
   - Accept all tracked changes
   - Increment version number (e.g., v1.0 → v1.1)
   - Update "Last Updated" date
   - Add revision history entry summarizing changes
   - Finalize all format versions (PDF, HTML)
   - Generate change summary document

**Evidence Required:**
- Updated Instructions for Use (DOC-AI-IFU-XXX v[N+1])
- Revision History with Change Summary
- Review and Approval Records
- Change Comparison Document (redline)
- Updated Multilingual Versions

**Timing:** 15-60 days depending on priority

**Quality Check:**
- All required changes incorporated
- Version number incremented correctly
- Revision history updated
- All reviews and approvals obtained
- Translations accurate and complete

---

#### Step 2.3: Communicate Instructions for Use Updates (Control TRANS-002)

**When:** After Instructions for Use update approved

**Who:** AI Transparency Manager + Product Manager

**Regulatory Basis:** Article 13 requires deployers to have current information

**How:**

1. **Prepare Update Notification**
   - Create Update Notification document (TMP-AI-TRANS-002)
   - Summarize changes made
   - Explain impact on deployers
   - Provide link to updated Instructions for Use
   - Include effective date
   - Specify any required actions by deployers

2. **Identify Notification Recipients**
   - All current deployers of the AI system
   - New deployers (automatically receive latest)
   - Internal stakeholders (product, support, sales)
   - Regulatory authorities (if required)

3. **Distribute Update Notification**
   - Email notification to all deployers
   - Post update notice on provider website
   - Update documentation portal
   - Replace old version with new version (maintain archive)
   - Update public access link
   - Notify customer support team

4. **Track Acknowledgements**
   - Request deployer acknowledgement of receipt
   - Track acknowledgement responses
   - Follow up with non-responsive deployers
   - Document acknowledgement dates
   - Escalate non-acknowledgement after 30 days

5. **Archive Previous Version**
   - Move superseded version to archive folder
   - Maintain version history (10 years per EU AI Act)
   - Clearly mark archived versions as superseded
   - Keep audit trail of version succession
   - Ensure archived versions remain accessible

**Evidence Required:**
- Update Notification Document
- Distribution Records
- Deployer Acknowledgement Log
- Website Update Confirmation
- Version Archive Records

**Timing:** Within 7 days of approval

**Quality Check:**
- All deployers notified
- Website updated with new version
- Old version archived properly
- Acknowledgements tracked
- Audit trail complete

---

### PHASE 3: USER AI DISCLOSURE IMPLEMENTATION (Control TRANS-003)

#### Step 3.1: Identify AI Disclosure Requirements (Control TRANS-003)

**When:** During AI system design phase

**Who:** AI Transparency Manager + Product Manager + Legal Counsel

**Regulatory Basis:** Article 50 mandates disclosure for specific AI system types

**How:**

1. **Assess AI System Against Article 50 Requirements**

   **Apply Decision Tree:**
   ```
   START: AI System Assessment
   │
   ├─ Does the system interact with natural persons?
   │  ├─ NO → No Article 50 disclosure required (skip to Step 3.6)
   │  └─ YES → Continue
   │
   ├─ Is the system an emotion recognition system?
   │  ├─ YES → Article 50(1) disclosure REQUIRED
   │  │        "Inform natural persons that they are exposed to emotion recognition"
   │  └─ NO → Continue
   │
   ├─ Is the system a biometric categorization system?
   │  ├─ YES → Article 50(1) disclosure REQUIRED
   │  │        "Inform natural persons that they are exposed to biometric categorization"
   │  └─ NO → Continue
   │
   ├─ Does the system generate or manipulate image/audio/video content?
   │  ├─ YES → Continue deepfake assessment
   │  │  ├─ Is content realistic appearing ("deepfake")?
   │  │  │  ├─ YES → Article 50(2) disclosure REQUIRED
   │  │  │  │        "Disclose that content is artificially generated or manipulated"
   │  │  │  └─ NO → Continue
   │  │  │
   │  │  └─ Is content used for news, satire, art, or similar?
   │  │     ├─ YES → Article 50(2) applies BUT exemption possible
   │  │     │        Exemption requires: clearly labeled + no harm risk
   │  │     └─ NO → Article 50(2) disclosure REQUIRED
   │  └─ NO → Continue
   │
   ├─ Does the system generate text or other synthetic content?
   │  ├─ YES → Article 50(4) disclosure REQUIRED
   │  │        "Mark content as artificially generated in machine-readable format"
   │  └─ NO → Continue
   │
   ├─ Is the system a chatbot or conversational AI?
   │  ├─ YES → Article 50(1) disclosure REQUIRED
   │  │        "Inform users they are interacting with AI system"
   │  │        UNLESS: obvious from circumstances (e.g., chatbot named "ChatBot")
   │  └─ NO → Continue
   │
   └─ END: Disclosure requirements identified
   ```

2. **Document Disclosure Requirements**
   - Complete AI Disclosure Assessment Form (FORM-AI-TRANS-001)
   - Identify which Article 50 provisions apply
   - Document disclosure timing requirements
   - Identify disclosure location/placement
   - Define disclosure content requirements
   - Note any exemptions that may apply

3. **Determine Disclosure Specifics**

   | AI System Type | Disclosure Content | Timing | Placement |
   |---|---|---|---|
   | **Emotion Recognition** | "This system uses AI to detect emotions" | Before exposure | Visible notice at entry point |
   | **Biometric Categorization** | "This system uses AI to categorize based on biometric data" | Before exposure | Visible notice at entry point |
   | **Deepfake/Synthetic Media** | "This [image/audio/video] was artificially generated" | With content | Visible watermark + metadata |
   | **AI-Generated Text** | Machine-readable marker | With content | Embedded in document metadata |
   | **Chatbot** | "You are interacting with an AI chatbot" | At conversation start | First message or header |

4. **Assess "Obvious from Circumstances" Exception**
   - Determine if AI use is obvious to reasonable person
   - Document reasoning for any exception claimed
   - Obtain Legal Counsel approval for exception
   - Document exception in assessment form

5. **Obtain Legal Approval**
   - Legal Counsel reviews disclosure assessment
   - Validates Article 50 interpretation
   - Approves disclosure content and placement
   - Signs off on any exceptions claimed
   - Documents approval

**Evidence Required:**
- AI Disclosure Assessment Form (FORM-AI-TRANS-001) - completed
- Disclosure Requirements Document
- Legal Approval Record
- Exception Justification (if applicable)

**Timing:** 1 week

**Quality Check:**
- All Article 50 requirements assessed
- Disclosure requirements clearly documented
- Legal review completed and approved
- Exceptions justified and approved

---

#### Step 3.2: Design User Disclosure Mechanisms (Control TRANS-003)

**When:** After disclosure requirements identified

**Who:** Product Manager + UX Designer + AI Transparency Manager

**How:**

1. **Design Disclosure UI/UX**

   **Disclosure Design Principles:**
   - **Clear:** Unambiguous language, no jargon
   - **Conspicuous:** Visually prominent, not hidden
   - **Timely:** Shown before AI interaction/exposure
   - **Persistent:** Remains visible during interaction (as appropriate)
   - **Accessible:** WCAG 2.1 AA compliant

2. **Apply Disclosure Placement Standards**

   | System Type | Placement | Visual Design | Example |
   |---|---|---|---|
   | **Emotion Recognition** | Entry point (before camera/mic access) | Modal dialog or banner | "🤖 AI Emotion Detection\nThis application uses AI to detect emotions. Continue?" |
   | **Biometric Categorization** | Entry point (before biometric capture) | Modal dialog | "🤖 AI Biometric Analysis\nThis system uses AI for biometric categorization." |
   | **Deepfake** | Overlaid on content | Visible watermark + text label | Watermark: "AI Generated"\nCaption: "This image was created using AI" |
   | **AI Text** | Metadata + optional visible badge | Machine-readable format | HTML meta tag + "Generated by AI 🤖" badge |
   | **Chatbot** | First message or header | Chat message or header banner | "🤖 AI Assistant\nYou're chatting with an AI. A human is available if needed." |

3. **Create Disclosure Content**

   **Standard Disclosure Templates by Type:**

   **Emotion Recognition Disclosure:**
   ```
   🤖 AI-Powered Emotion Detection

   This application uses artificial intelligence to detect and analyze emotions.

   What this means:
   - AI analyzes your facial expressions [or voice tone]
   - Emotional states are inferred by the AI system
   - This information is used for [specific purpose]

   Your rights:
   - You can decline to use this feature
   - You can request human review of results
   - You can contact us with questions: [contact]

   [Continue] [Learn More] [Decline]
   ```

   **Biometric Categorization Disclosure:**
   ```
   🤖 AI-Powered Biometric Analysis

   This system uses artificial intelligence to analyze biometric data.

   What this means:
   - AI analyzes biometric characteristics
   - Categories are inferred by the AI system
   - This information is used for [specific purpose]

   Your rights:
   - You can decline to use this feature
   - You can request human review
   - Privacy policy: [link]
   - Contact us: [contact]

   [Continue] [Learn More] [Decline]
   ```

   **Deepfake/Synthetic Media Disclosure:**
   ```
   Visible Watermark (overlaid on content):
   "AI GENERATED" or "🤖 SYNTHETIC MEDIA"

   Caption/Description:
   "This [image/audio/video] was artificially generated or manipulated using AI technology. It does not depict real events or persons."

   Metadata (embedded in file):
   - Creator: [Name]
   - AI_Generated: true
   - Generation_Date: [Date]
   - AI_Model: [Model identifier]
   - Disclaimer: "Synthetic media created using AI"
   ```

   **AI-Generated Text Disclosure:**
   ```
   Machine-Readable Metadata:
   <meta name="AI-generated" content="true">
   <meta name="AI-model" content="[model-identifier]">
   <meta name="Generation-date" content="[ISO-8601-date]">

   Optional Visible Badge:
   "🤖 Generated by AI" or "AI-Assisted Content"
   ```

   **Chatbot Disclosure:**
   ```
   Header Banner:
   "🤖 AI Assistant | You're chatting with an AI. Need a human? Click here."

   Or First Message:
   "👋 Hi! I'm [Name], an AI assistant. I'm here to help you with [purpose].
   I'm powered by artificial intelligence, but a human is available if you need one.
   How can I help you today?"
   ```

4. **Design for Accessibility**
   - Color contrast ≥ 4.5:1 (WCAG AA)
   - Alternative text for icons
   - Keyboard navigable
   - Screen reader compatible
   - Appropriate font size (≥14px)
   - Clear visual hierarchy

5. **Create Disclosure Mockups**
   - Design visual mockups for all disclosure types
   - Show placement in actual UI context
   - Include mobile and desktop views
   - Document interaction flows
   - Specify technical implementation requirements

6. **Review and Approve Design**
   - Product Manager reviews UX design
   - AI Transparency Manager reviews disclosure content
   - Legal Counsel approves disclosure wording
   - Accessibility expert reviews compliance
   - Obtain all approvals before implementation

**Evidence Required:**
- Disclosure Design Specification (SPEC-AI-TRANS-001)
- UI/UX Mockups for all disclosure types
- Accessibility Compliance Assessment
- Design Review and Approval Records

**Timing:** 2-3 weeks

**Quality Check:**
- All disclosure types designed
- Clear, conspicuous, and timely placement
- Content accurate and approved by Legal
- Accessibility standards met
- Mockups complete and approved

---

#### Step 3.3: Implement User Disclosure Mechanisms (Control TRANS-003)

**When:** During development phase

**Who:** Software Engineer + Product Manager

**How:**

1. **Implement Disclosure UI Components**
   - Develop disclosure dialogs, banners, or notices
   - Implement according to approved design specifications
   - Ensure responsive design (mobile, tablet, desktop)
   - Add accessibility features (ARIA labels, keyboard nav)
   - Implement localization for multilingual support

2. **Implement Disclosure Triggering Logic**
   - Detect when disclosure is required
   - Trigger disclosure at correct time (before AI interaction)
   - Ensure disclosure shown before AI system processes user data
   - Implement disclosure acknowledgement capture (if required)
   - Handle user decline/opt-out flows

3. **Implement Disclosure Persistence**
   - For ongoing interactions, ensure disclosure remains visible
   - For one-time disclosures, track user acknowledgement
   - Store disclosure acceptance records
   - Implement "Learn More" expanded information
   - Provide easy access to privacy policy and contact info

4. **Implement Deepfake Watermarking**
   - Add visible watermark to all AI-generated media
   - Embed machine-readable metadata
   - Ensure watermark difficult to remove
   - Implement watermark verification capability
   - Test watermark visibility across platforms

5. **Implement AI-Generated Content Marking**
   - Add machine-readable metadata to AI-generated text
   - Implement optional visible badges/labels
   - Ensure metadata preserved through export/copy
   - Test metadata across different formats (HTML, PDF, etc.)

6. **Implement Disclosure Logging**
   - Log all disclosure events (shown, acknowledged, declined)
   - Record timestamps and user IDs
   - Store disclosure version shown to user
   - Maintain audit trail for compliance
   - Implement disclosure analytics

7. **Implement Exemption Handling**
   - For systems claiming "obvious from circumstances" exemption
   - Implement clear contextual cues (e.g., chatbot named "AI Assistant")
   - Document exemption justification
   - Obtain Legal approval for exemption implementation

**Evidence Required:**
- Disclosure Implementation Code (in version control)
- Implementation Testing Results (TEST-AI-TRANS-002)
- Disclosure Logging Verification
- Accessibility Testing Report
- Legal Review of Implementation

**Timing:** 2-4 weeks

**Quality Check:**
- All disclosure types implemented per specification
- Triggering logic correct (shown before AI interaction)
- User acknowledgement captured correctly
- Logging operational and complete
- Accessibility standards met in implementation

---

#### Step 3.4: Test User Disclosure Mechanisms (Control TRANS-003)

**When:** During testing phase, before deployment

**Who:** QA Engineer + AI Transparency Manager + Accessibility Specialist

**How:**

1. **Functional Testing**
   - Verify disclosure shown at correct time
   - Test disclosure appears before AI processes data
   - Verify disclosure content accurate
   - Test user acknowledgement flow
   - Test user decline/opt-out flow
   - Verify "Learn More" functionality
   - Test across all supported platforms (web, mobile, etc.)

2. **Visual Testing**
   - Verify disclosure is conspicuous and prominent
   - Check color contrast meets WCAG standards
   - Verify font size readable
   - Test on different screen sizes
   - Verify placement does not obstruct critical content
   - Check visual consistency across platforms

3. **Accessibility Testing**
   - Test with screen readers (NVDA, JAWS, VoiceOver)
   - Verify keyboard navigation works
   - Test with high contrast mode
   - Verify focus indicators visible
   - Test with zoom/magnification
   - Validate ARIA labels and roles

4. **Localization Testing**
   - Test all supported languages
   - Verify translations accurate
   - Check text fits in UI elements
   - Test right-to-left languages (if applicable)
   - Verify language switching works

5. **Logging Testing**
   - Verify all disclosure events logged
   - Check log data completeness
   - Test log data retention
   - Verify audit trail integrity
   - Test analytics reporting

6. **User Testing** (if possible)
   - Conduct user testing with representative users
   - Verify users understand disclosure
   - Assess disclosure noticeability
   - Gather user feedback on clarity
   - Document user testing results

7. **Edge Case Testing**
   - Test with ad blockers enabled
   - Test with JavaScript disabled (for web)
   - Test rapid interaction scenarios
   - Test disclosure on slow connections
   - Test with browser privacy modes

**Evidence Required:**
- Disclosure Testing Report (TEST-AI-TRANS-002)
- Accessibility Testing Report (TEST-AI-TRANS-003)
- User Testing Report (if conducted)
- Test Case Documentation
- Bug/Issue Log and Resolutions

**Timing:** 1-2 weeks

**Quality Check:**
- All test cases passed
- No critical or high-priority bugs remain
- Accessibility standards met
- User testing positive (if conducted)
- All issues resolved or documented as acceptable

---

#### Step 3.5: Deploy and Monitor User Disclosure (Control TRANS-003)

**When:** At deployment; continuously during operation

**Who:** Product Manager + AI Transparency Manager

**How:**

1. **Pre-Deployment Verification**
   - Final review of disclosure implementation
   - Verify disclosure in production environment
   - Test disclosure on live system (staging first)
   - Confirm logging operational
   - Obtain deployment approval

2. **Deploy Disclosure Mechanisms**
   - Deploy to production environment
   - Verify deployment successful
   - Test disclosure in production
   - Activate disclosure logging
   - Monitor initial performance

3. **Monitor Disclosure Effectiveness**
   - Track disclosure view rate (% of users who see disclosure)
   - Track disclosure acknowledgement rate
   - Monitor user decline/opt-out rate
   - Track "Learn More" click rate
   - Monitor support inquiries related to disclosure

4. **Analyze Disclosure Analytics**
   - Review disclosure metrics weekly
   - Identify issues or anomalies
   - Assess disclosure effectiveness
   - Gather user feedback
   - Document findings in Disclosure Effectiveness Report

5. **Respond to Disclosure Issues**
   - If disclosure not shown: investigate technical issue
   - If acknowledgement rate low: assess clarity
   - If opt-out rate high: investigate user concerns
   - If support inquiries high: improve disclosure content
   - Implement improvements as needed

6. **Maintain Disclosure Audit Trail**
   - Archive disclosure logs (10 years per EU AI Act)
   - Maintain version history of disclosure content
   - Document all changes to disclosure mechanisms
   - Track compliance with Article 50 requirements
   - Prepare disclosure compliance reports

**Evidence Required:**
- Deployment Verification Records
- Disclosure Analytics Reports (weekly/monthly)
- Disclosure Effectiveness Report (quarterly)
- Issue Response Records
- Audit Trail Documentation

**Timing:** Ongoing during operation

**Quality Check:**
- Disclosure consistently shown to users
- Acknowledgement rates acceptable (>95%)
- No compliance issues identified
- User feedback positive
- Audit trail complete

---

#### Step 3.6: Document No-Disclosure Justification (if applicable)

**When:** If AI system does NOT require Article 50 disclosure

**Who:** AI Transparency Manager + Legal Counsel

**How:**

1. **Document Assessment**
   - Complete AI Disclosure Assessment Form (FORM-AI-TRANS-001)
   - Document why Article 50 does NOT apply
   - Provide clear justification for no disclosure requirement
   - Cite specific Article 50 provisions not triggered

2. **Legal Review**
   - Legal Counsel reviews no-disclosure determination
   - Validates Article 50 interpretation
   - Approves no-disclosure justification
   - Documents approval

3. **Archive Documentation**
   - Store no-disclosure justification in compliance records
   - Include in AI system documentation package
   - Maintain for audit purposes (10 years)

**Evidence Required:**
- AI Disclosure Assessment Form (FORM-AI-TRANS-001) with no-disclosure justification
- Legal Approval of no-disclosure determination

**Timing:** 1 week

---

### PHASE 4: TRANSPARENCY NOTICE DESIGN AND IMPLEMENTATION (Control TRANS-004)

#### Step 4.1: Design Transparency Notices (Control TRANS-004)

**When:** During design phase, for user-facing AI interactions

**Who:** Product Manager + AI Transparency Manager + Technical Writer

**How:**

1. **Identify Transparency Notice Requirements**

   Transparency notices go beyond Article 50 mandatory disclosures to provide:
   - How AI system makes decisions
   - What data is used
   - User rights and remedies
   - Contact information for questions

2. **Design Transparency Notice Content Framework**

   **Transparency Notice Standard Sections:**

   **Section 1: AI System Overview**
   ```
   What This AI System Does
   - [Plain language description of AI system purpose]
   - [What decisions or recommendations it makes]
   - [How it's used in this context]

   Example:
   "This AI system analyzes your loan application and recommends
   whether to approve your loan. It considers your financial history,
   income, employment, and credit score."
   ```

   **Section 2: How It Works**
   ```
   How the AI Makes Decisions
   - [High-level description of decision process]
   - [Key factors considered]
   - [How factors are weighted (general)]

   Example:
   "The AI evaluates multiple factors including:
   • Credit score (high importance)
   • Income stability (high importance)
   • Debt-to-income ratio (high importance)
   • Employment history (moderate importance)
   • Previous loan performance (moderate importance)"
   ```

   **Section 3: Data Used**
   ```
   What Data We Use
   - [Types of data used by AI]
   - [Data sources]
   - [How data is processed]

   Example:
   "We use data from:
   • Your loan application
   • Credit reporting agencies
   • Your banking history (with consent)
   • Employment verification services"
   ```

   **Section 4: Accuracy and Limitations**
   ```
   Accuracy and Limitations
   - [Accuracy level in plain language]
   - [Known limitations]
   - [When AI might be less accurate]

   Example:
   "This AI system is accurate about 92% of the time. It may be
   less accurate for:
   • First-time borrowers with limited credit history
   • Self-employed individuals with variable income
   • Recent immigrants with no US credit history"
   ```

   **Section 5: Human Oversight**
   ```
   Human Review
   - [Level of human oversight]
   - [When humans review AI decisions]
   - [How to request human review]

   Example:
   "All AI recommendations are reviewed by a loan officer before
   a final decision is made. You can request additional human
   review by contacting us at [contact]."
   ```

   **Section 6: Your Rights**
   ```
   Your Rights
   - Right to explanation of decision
   - Right to human review
   - Right to challenge decision
   - Right to opt-out (if applicable)
   - Data protection rights (GDPR)

   Example:
   "You have the right to:
   • Request a detailed explanation of the AI's recommendation
   • Request human review of the decision
   • Challenge the decision if you believe it's incorrect
   • Access your data and request corrections
   • Withdraw consent (where applicable)"
   ```

   **Section 7: Contact and Questions**
   ```
   Questions or Concerns?
   - Contact information for AI-related questions
   - How to request human review
   - How to file complaints
   - Privacy policy link

   Example:
   "Questions about how AI was used in your application?
   • Email: ai-questions@company.com
   • Phone: +1-555-AI-HELP
   • Privacy Policy: [link]
   • Complaint Process: [link]"
   ```

3. **Apply Transparency Notice Design Principles**
   - **Plain Language:** Avoid jargon, use simple terms
   - **Concise:** Maximum 500 words for standard notice
   - **Structured:** Clear sections with headings
   - **Visual:** Use bullet points, white space, icons
   - **Accessible:** WCAG 2.1 AA compliant
   - **Actionable:** Clear next steps for users

4. **Create Transparency Notice Templates**
   - Develop standard template (TMP-AI-TRANS-003)
   - Create templates for common AI use cases:
     - Credit/lending decisions
     - Employment decisions
     - Benefits/eligibility determinations
     - Healthcare recommendations
     - Content recommendations
   - Customize templates per AI system

5. **Design Transparency Notice Placement**

   | Context | Placement | Format | Timing |
   |---|---|---|---|
   | **Pre-Decision** | Before AI processes user request | Modal, expandable panel, or dedicated page | Before user submits data |
   | **Post-Decision** | With AI decision/recommendation | Inline notice or linked page | With decision delivery |
   | **General Information** | Always available | "How AI Works" page or FAQ | Anytime user wants to learn |
   | **Privacy Policy** | Within privacy policy | Dedicated AI section | Anytime |

6. **Review and Approve Transparency Notices**
   - Technical review for accuracy
   - Legal review for compliance
   - Readability assessment (Flesch Reading Ease ≥60)
   - User testing (if possible)
   - Final approval by AI Transparency Manager

**Evidence Required:**
- Transparency Notice Templates (TMP-AI-TRANS-003)
- System-Specific Transparency Notices
- Readability Assessment Report
- Review and Approval Records

**Timing:** 2-3 weeks

**Quality Check:**
- All sections present and accurate
- Plain language used (readability ≥60)
- Legal review approved
- User testing positive (if conducted)
- Placement appropriate and accessible

---

#### Step 4.2: Implement and Publish Transparency Notices (Control TRANS-004)

**When:** During development and deployment

**Who:** Software Engineer + Product Manager + AI Transparency Manager

**How:**

1. **Implement Transparency Notice Display**
   - Add transparency notices to UI per design specification
   - Implement pre-decision notices (before AI processing)
   - Implement post-decision notices (with AI results)
   - Implement "How AI Works" informational pages
   - Ensure responsive design across devices

2. **Implement Transparency Notice Navigation**
   - Add "Learn More About AI" links
   - Implement "How was this decision made?" links
   - Add transparency notices to help/FAQ sections
   - Implement search functionality for transparency content
   - Ensure easy access from all relevant user flows

3. **Implement Transparency Notice Versioning**
   - Track which transparency notice version shown to each user
   - Log transparency notice views
   - Maintain version history
   - Implement A/B testing capability (if improving notices)

4. **Publish Transparency Notices**
   - Add to product documentation
   - Publish to website/help center
   - Include in user onboarding
   - Add to privacy policy
   - Communicate availability to users

5. **Test Transparency Notice Implementation**
   - Functional testing (displays correctly)
   - Accessibility testing (WCAG 2.1 AA)
   - Localization testing (all languages)
   - Analytics testing (tracking works)
   - User testing (if possible)

**Evidence Required:**
- Transparency Notice Implementation (in version control)
- Implementation Testing Report
- Accessibility Testing Report
- Published Transparency Notices (URLs)

**Timing:** 2-3 weeks

**Quality Check:**
- All transparency notices implemented per specification
- Display correctly across all platforms
- Accessibility standards met
- Analytics tracking operational
- User feedback positive (if tested)

---

### PHASE 5: AI DECISION EXPLANATIONS AND EXPLAINABILITY (Control TRANS-005)

#### Step 5.1: Design Explainability Mechanisms (Control TRANS-005)

**When:** During AI system design phase

**Who:** Data Scientist + AI Transparency Manager + Product Manager

**How:**

1. **Determine Explainability Tier Required**
   - Review Section 3.4 Explainability Levels Framework
   - Assess AI system risk level
   - Identify impact on fundamental rights
   - Determine regulatory requirements
   - Document explainability tier (1-4)

2. **Select Explainability Techniques**

   **Tier 1: Full Explainability - Techniques:**
   - SHAP (SHapley Additive exPlanations) values
   - LIME (Local Interpretable Model-agnostic Explanations)
   - Attention mechanisms (for deep learning)
   - Decision tree approximations
   - Counterfactual explanations
   - Feature importance analysis
   - Contrastual explanations

   **Tier 2: Substantial Explainability - Techniques:**
   - Feature importance ranking
   - Confidence scores
   - Decision thresholds
   - Top-N influential features
   - General decision logic

   **Tier 3: Basic Explainability - Techniques:**
   - Model type disclosure
   - General approach description
   - Performance metrics
   - Limitations disclosure

   **Tier 4: Transparency Notice - Techniques:**
   - AI presence disclosure
   - General purpose
   - Contact information

3. **Design Explanation Output Format**

   **Tier 1 Full Explanation Example (Loan Decision):**
   ```
   AI Loan Decision Explanation

   Decision: Not Approved
   Confidence: 87%

   Top Factors That Influenced This Decision:
   1. Credit Score (620) - HIGH IMPACT (negative)
      • Your credit score is below our typical approval threshold (680)
      • This factor accounted for 35% of the decision

   2. Debt-to-Income Ratio (52%) - HIGH IMPACT (negative)
      • Your debt-to-income ratio is above our limit (45%)
      • This factor accounted for 28% of the decision

   3. Employment Duration (4 months) - MODERATE IMPACT (negative)
      • Recent job change impacts stability assessment
      • This factor accounted for 15% of the decision

   4. Income ($48,000/year) - MODERATE IMPACT (neutral)
      • Income meets minimum requirements
      • This factor accounted for 12% of the decision

   5. Previous Loan History (none) - LOW IMPACT (negative)
      • No previous loan history with our institution
      • This factor accounted for 10% of the decision

   What Would Change This Decision?
   • Increasing your credit score to 680+ would likely result in approval
   • Reducing your debt-to-income ratio to below 45% would help
   • 6+ months of stable employment would improve your application

   Human Review:
   This AI recommendation was reviewed by Loan Officer Jane Smith.
   Final decision: Not Approved (concurs with AI)

   Your Rights:
   • Request additional human review: [link/contact]
   • Challenge this decision: [link/contact]
   • Learn more about our AI: [link]
   ```

   **Tier 2 Substantial Explanation Example (Resume Screening):**
   ```
   AI Resume Screening Result

   Status: Not Selected for Interview

   Our AI analyzed your resume for the Senior Engineer position and
   considered these key factors:

   Key Factors:
   ✓ Education: Master's degree in Computer Science (positive)
   ✓ Years of Experience: 5 years (meets requirement)
   ✗ Required Skills Match: 60% (below 80% threshold)
      Missing: Kubernetes, GraphQL, React
   ✗ Leadership Experience: Limited (role requires team lead experience)

   Decision Logic:
   Our AI requires a minimum 80% match on required technical skills for
   this senior-level position. Your application showed strong experience
   in backend development but limited experience in the specific
   technologies this role requires.

   Next Steps:
   • Apply to other positions that match your skills: [link]
   • Learn more about required skills: [link]
   • Request human review: [contact]
   ```

   **Tier 3 Basic Explanation Example (Content Recommendation):**
   ```
   Why Am I Seeing This?

   Our AI recommended this article based on:
   • Your reading history on similar topics
   • Articles you've saved or liked
   • Current trending content

   Our AI uses machine learning to personalize your content feed.
   It's accurate about 78% of the time based on user feedback.

   Not interested? Help improve recommendations:
   • Hide this article
   • Tell us why: [feedback options]

   Learn more about our AI: [link]
   ```

4. **Design Explanation Delivery Mechanisms**

   | Explainability Tier | Delivery Method | Access |
   |---|---|---|
   | **Tier 1** | Detailed explanation automatically provided with decision | Always shown |
   | **Tier 2** | Summary automatically provided; detailed explanation on request | Summary auto, detail on-demand |
   | **Tier 3** | Available on request | On-demand only |
   | **Tier 4** | Transparency notice | Always available |

5. **Design Explanation Accessibility**
   - Plain language (Flesch Reading Ease ≥60)
   - Visual elements (charts, icons, color coding)
   - Structured format (headings, bullets, sections)
   - Multiple formats (on-screen, PDF, accessible HTML)
   - Multilingual support
   - Screen reader compatible

6. **Review and Approve Explainability Design**
   - Data Scientist validates technical accuracy
   - AI Transparency Manager reviews clarity
   - Legal Counsel reviews regulatory compliance
   - Accessibility expert reviews WCAG compliance
   - User testing (if possible)
   - Final approval

**Evidence Required:**
- Explainability Design Specification (SPEC-AI-TRANS-002)
- Explainability Tier Determination Document
- Explanation Output Templates
- Review and Approval Records

**Timing:** 2-4 weeks

**Quality Check:**
- Appropriate explainability tier selected
- Techniques suitable for model type
- Explanation format clear and understandable
- Accessibility standards met
- Legal review approved

---

#### Step 5.2: Implement Explainability Mechanisms (Control TRANS-005)

**When:** During development phase

**Who:** Data Scientist + Software Engineer

**How:**

1. **Implement Explainability Algorithms**
   - Implement selected explainability technique (SHAP, LIME, etc.)
   - Integrate with AI model inference pipeline
   - Generate feature importance scores
   - Calculate confidence levels
   - Develop counterfactual generation (if Tier 1)

2. **Implement Explanation Generation**
   - Create explanation generation module
   - Map technical outputs to plain language
   - Apply explanation templates
   - Generate visualizations (if applicable)
   - Implement explanation versioning

3. **Implement Explanation Delivery**
   - Add explanation UI components
   - Implement "Why this decision?" functionality
   - Create explanation detail pages
   - Implement explanation export (PDF, etc.)
   - Add explanation request mechanisms (for on-demand)

4. **Implement Explanation Logging**
   - Log all explanations generated
   - Track explanation requests
   - Record explanation versions shown
   - Maintain audit trail
   - Implement explanation analytics

5. **Optimize Explanation Performance**
   - Ensure explanation generation doesn't significantly delay responses
   - Implement caching where appropriate
   - Optimize explainability algorithm performance
   - Target: <2 second explanation generation for Tier 1-2

6. **Test Explainability Implementation**
   - Validate explanation accuracy (technical correctness)
   - Test explanation generation across various scenarios
   - Validate plain language translation
   - Test explanation delivery UI
   - Test explanation logging
   - Accessibility testing

**Evidence Required:**
- Explainability Implementation Code (in version control)
- Explanation Accuracy Validation Report
- Implementation Testing Report
- Performance Benchmarking Report
- Accessibility Testing Report

**Timing:** 3-6 weeks (depending on complexity)

**Quality Check:**
- Explanations technically accurate
- Explanations generated for all decisions (Tier 1-2)
- Plain language translation effective
- Performance acceptable (<2 sec for Tier 1-2)
- Accessibility standards met

---

#### Step 5.3: Validate Explanation Quality (Control TRANS-005)

**When:** During testing phase, before deployment

**Who:** Data Scientist + AI Transparency Manager + User Testing Team

**How:**

1. **Technical Accuracy Validation**
   - Verify explanations match actual model behavior
   - Test feature importance accuracy
   - Validate counterfactual explanations (if applicable)
   - Test across diverse scenarios
   - Compare explanations to ground truth (where available)

2. **Comprehensibility Testing**
   - Readability assessment (Flesch Reading Ease ≥60)
   - Plain language review
   - Jargon identification and elimination
   - User comprehension testing (if possible)

3. **User Testing** (if possible)
   - Recruit representative users
   - Present explanations for sample decisions
   - Assess user understanding
   - Gather feedback on clarity and usefulness
   - Document improvements needed

   **User Testing Questions:**
   - Do you understand why this decision was made?
   - What factors were most important in the decision?
   - What could you change to get a different outcome?
   - Is there anything confusing in this explanation?
   - Do you feel this explanation is fair and transparent?

4. **Fairness Validation**
   - Verify explanations provided consistently across demographic groups
   - Test explanation quality for edge cases
   - Ensure no discriminatory language in explanations
   - Validate fairness of explanation content

5. **Completeness Validation**
   - Verify all required elements present (per tier requirements)
   - Check contact information accurate
   - Validate "next steps" guidance
   - Ensure rights information complete

6. **Document Validation Results**
   - Compile Explanation Quality Report (RPT-AI-TRANS-001)
   - Document technical accuracy validation
   - Include user testing results (if conducted)
   - List identified issues and resolutions
   - Record final validation approval

**Evidence Required:**
- Explanation Quality Report (RPT-AI-TRANS-001)
- Technical Accuracy Validation Results
- User Testing Report (if conducted)
- Readability Assessment Report
- Validation Approval

**Timing:** 2-3 weeks

**Quality Check:**
- Technical accuracy validated
- Comprehensibility confirmed (readability ≥60)
- User testing positive (if conducted)
- All issues resolved or documented
- Final validation approved

---

#### Step 5.4: Deploy and Monitor Explainability (Control TRANS-005)

**When:** At deployment; continuously during operation

**Who:** Product Manager + Data Scientist + AI Transparency Manager

**How:**

1. **Deploy Explainability Mechanisms**
   - Deploy to production environment
   - Verify explanation generation working
   - Test explanation delivery in production
   - Activate explanation logging
   - Monitor initial performance

2. **Monitor Explanation Generation**
   - Track explanation generation rate (should be 100% for Tier 1-2)
   - Monitor explanation generation latency
   - Track explanation request rate (for on-demand)
   - Monitor explanation errors/failures
   - Alert on anomalies

3. **Monitor Explanation Quality**
   - Sample explanations for quality review (weekly)
   - Track user feedback on explanations
   - Monitor support inquiries about explanations
   - Assess explanation effectiveness
   - Identify improvement opportunities

4. **Respond to Explanation Issues**
   - Investigate explanation generation failures
   - Address explanation accuracy issues
   - Improve explanation clarity based on feedback
   - Update explanation templates as needed
   - Document all changes

5. **Periodic Explanation Audits**
   - Quarterly review of explanation quality
   - Re-validate technical accuracy
   - Re-assess user comprehension (if resources available)
   - Update explanations for model changes
   - Document audit results

6. **Maintain Explanation Audit Trail**
   - Archive all explanations generated (10 years)
   - Maintain explanation version history
   - Document explanation algorithm changes
   - Track compliance with explainability requirements
   - Prepare explainability compliance reports

**Evidence Required:**
- Explanation Generation Metrics (weekly/monthly)
- Explanation Quality Audit Reports (quarterly)
- User Feedback Summary
- Issue Response Records
- Audit Trail Documentation

**Timing:** Ongoing during operation

**Quality Check:**
- Explanations consistently generated (100% for Tier 1-2)
- Explanation quality maintained
- No unresolved explanation issues
- User feedback positive
- Audit trail complete

---

### PHASE 6: TRANSPARENCY QUALITY ASSURANCE

#### Step 6.1: Conduct Transparency Compliance Audit

**When:** Quarterly; before major deployments

**Who:** Compliance Officer + AI Transparency Manager

**How:**

1. **Audit Instructions for Use**
   - Verify Instructions for Use exist for all high-risk AI systems
   - Check Instructions for Use completeness (all Article 13 elements)
   - Validate Instructions for Use accuracy (matches current system)
   - Verify Instructions for Use distributed to all deployers
   - Check Instructions for Use accessibility (WCAG 2.1 AA)

2. **Audit User Disclosures**
   - Verify disclosures implemented for all Article 50 systems
   - Check disclosure timing (before AI interaction)
   - Validate disclosure content (clear and conspicuous)
   - Review disclosure analytics (shown consistently)
   - Test disclosure functionality

3. **Audit Transparency Notices**
   - Verify transparency notices available
   - Check notice accuracy and currency
   - Validate notice placement and accessibility
   - Review user feedback on notices
   - Test notice functionality

4. **Audit Explainability Mechanisms**
   - Verify explanations generated for all decisions (Tier 1-2)
   - Check explanation technical accuracy (sample testing)
   - Validate explanation comprehensibility
   - Review explanation analytics
   - Test explanation functionality

5. **Review Transparency Documentation**
   - Verify all transparency evidence complete
   - Check documentation retention (10 years)
   - Validate version control and change logs
   - Review audit trails
   - Assess documentation accessibility

6. **Document Audit Findings**
   - Compile Transparency Compliance Audit Report
   - List all findings (compliant, issues, non-compliant)
   - Prioritize issues (critical, high, medium, low)
   - Recommend corrective actions
   - Set deadlines for issue resolution

**Evidence Required:**
- Transparency Compliance Audit Report (quarterly)
- Audit Findings Log
- Corrective Action Plan (if issues identified)

**Timing:** Quarterly audits (1 week per audit)

**Quality Check:**
- All transparency components audited
- All findings documented with evidence
- Corrective actions assigned and scheduled
- Report approved by Compliance Officer

---

#### Step 6.2: Respond to Transparency Issues

**When:** When audit or monitoring identifies issues

**Who:** AI Transparency Manager + Responsible Party

**How:**

1. **Prioritize Issues**

   | Priority | Criteria | Response Time |
   |---|---|---|
   | **Critical** | Non-compliance with Article 13/50; User harm risk | 7 days |
   | **High** | Incomplete transparency; Accessibility failure | 30 days |
   | **Medium** | Clarity issue; Minor inaccuracy | 60 days |
   | **Low** | Formatting; Minor improvement | Next update cycle |

2. **Create Corrective Action Plan**
   - Assign issue owner
   - Define corrective actions
   - Set target completion date
   - Identify resources needed
   - Document plan

3. **Implement Corrective Actions**
   - Execute corrective actions per plan
   - Test corrections
   - Validate issue resolution
   - Document resolution

4. **Verify Issue Resolution**
   - Compliance Officer verifies resolution
   - Re-audit affected area
   - Obtain stakeholder sign-off
   - Close issue in tracking system
   - Document verification

5. **Communicate Resolution**
   - Notify affected stakeholders
   - Update documentation
   - Communicate changes to users (if user-facing)
   - Document communication

**Evidence Required:**
- Corrective Action Plan
- Issue Resolution Documentation
- Verification Records
- Communication Records

**Timing:** Per issue priority

**Quality Check:**
- All critical issues resolved within 7 days
- All high issues resolved within 30 days
- All resolutions verified
- Stakeholders notified

---

## 5. DECISION SUPPORT

### 5.1 Disclosure Requirement Decision Tree

```
START: Assess AI System for Disclosure Requirements
│
├─ Does the system interact with natural persons?
│  ├─ NO → No Article 50 disclosure required
│  │        (Still create Instructions for Use if high-risk)
│  │        → END
│  │
│  └─ YES → Continue to disclosure assessment
│
├─ Is this an emotion recognition system?
│  ├─ YES → Article 50(1) REQUIRED
│  │        Disclosure: "Inform users of emotion recognition AI"
│  │        Timing: Before exposure
│  │        Format: Clear, conspicuous notice
│  │        → Proceed to implementation (Step 3.2)
│  │
│  └─ NO → Continue
│
├─ Is this a biometric categorization system?
│  ├─ YES → Article 50(1) REQUIRED
│  │        Disclosure: "Inform users of biometric categorization AI"
│  │        Timing: Before exposure
│  │        Format: Clear, conspicuous notice
│  │        → Proceed to implementation (Step 3.2)
│  │
│  └─ NO → Continue
│
├─ Does the system generate/manipulate media (image/audio/video)?
│  ├─ YES → Continue deepfake assessment
│  │  │
│  │  ├─ Is content realistic ("deepfake")?
│  │  │  ├─ YES → Continue exemption check
│  │  │  │  │
│  │  │  │  ├─ Is this used for news/satire/art/similar?
│  │  │  │  │  ├─ YES → Check if clearly labeled + no harm
│  │  │  │  │  │  ├─ YES (clearly labeled + no harm)
│  │  │  │  │  │  │   → Article 50(2) EXEMPTION may apply
│  │  │  │  │  │  │   → Obtain legal approval for exemption
│  │  │  │  │  │  │   → Document exemption justification
│  │  │  │  │  │  │   → END
│  │  │  │  │  │  │
│  │  │  │  │  │  └─ NO (not clearly labeled OR harm risk)
│  │  │  │  │  │      → Article 50(2) REQUIRED
│  │  │  │  │  │
│  │  │  │  │  └─ NO → Article 50(2) REQUIRED
│  │  │  │  │          Disclosure: "Disclose artificial generation"
│  │  │  │  │          Timing: With content
│  │  │  │  │          Format: Visible watermark + metadata
│  │  │  │  │          → Proceed to implementation (Step 3.2)
│  │  │  │  │
│  │  │  │  └─ NO → Continue
│  │  │  │
│  │  │  └─ NO → Continue (not realistic, may still need marking)
│  │  │
│  │  └─ END deepfake assessment → Continue
│  │
│  └─ NO → Continue
│
├─ Does the system generate text/synthetic content?
│  ├─ YES → Article 50(4) REQUIRED
│  │        Disclosure: "Mark as AI-generated (machine-readable)"
│  │        Timing: With content
│  │        Format: Metadata tags
│  │        → Proceed to implementation (Step 3.2)
│  │
│  └─ NO → Continue
│
├─ Is this a chatbot or conversational AI?
│  ├─ YES → Assess "obvious from circumstances"
│  │  │
│  │  ├─ Is it OBVIOUS to reasonable person this is AI?
│  │  │  (e.g., named "ChatBot", clearly robotic, explicit context)
│  │  │  │
│  │  │  ├─ YES → Article 50(1) EXEMPTION may apply
│  │  │  │        → Obtain legal approval for exemption
│  │  │  │        → Document clear contextual cues
│  │  │  │        → Recommend disclosure anyway (best practice)
│  │  │  │        → END
│  │  │  │
│  │  │  └─ NO → Article 50(1) REQUIRED
│  │  │           Disclosure: "Inform users interacting with AI"
│  │  │           Timing: At conversation start
│  │  │           Format: Clear statement in chat
│  │  │           → Proceed to implementation (Step 3.2)
│  │
│  └─ NO → Continue
│
└─ END: Article 50 assessment complete
   │
   └─ NEXT: Create transparency notices (Phase 4)
          Create explainability mechanisms (Phase 5)
```

### 5.2 Explainability Tier Selection Decision Tree

```
START: Determine Explainability Tier
│
├─ Is this a high-risk AI system (Annex III)?
│  ├─ NO → Likely Tier 3 or 4
│  │       → Continue assessment
│  │
│  └─ YES → Continue high-risk assessment
│     │
│     ├─ Does this system affect fundamental rights?
│     │  (e.g., discrimination risk, privacy impact, due process)
│     │  │
│     │  ├─ YES → Assess impact severity
│     │  │  │
│     │  │  ├─ SEVERE impact
│     │  │  │   (legal decisions, eligibility, rights restrictions)
│     │  │  │   → TIER 1: FULL EXPLAINABILITY
│     │  │  │   Required:
│     │  │  │   • Feature-level explanations
│     │  │  │   • Counterfactual scenarios
│     │  │  │   • Alternative outcomes
│     │  │  │   • Confidence scores
│     │  │  │   • Human review information
│     │  │  │   → Proceed to Step 5.1
│     │  │  │
│     │  │  └─ MODERATE impact
│     │  │      (employment, credit, benefits)
│     │  │      → TIER 2: SUBSTANTIAL EXPLAINABILITY
│     │  │      Required:
│     │  │      • Top factors (5-7)
│     │  │      • General decision logic
│     │  │      • Confidence scores
│     │  │      • Limitations
│     │  │      • Human review information
│     │  │      → Proceed to Step 5.1
│     │  │
│     │  └─ NO → Assess user need
│     │     │
│     │     ├─ Do users need to understand decisions?
│     │     │  (e.g., recommendations, rankings)
│     │     │  │
│     │     │  ├─ YES → TIER 2: SUBSTANTIAL EXPLAINABILITY
│     │     │  │        → Proceed to Step 5.1
│     │     │  │
│     │     │  └─ NO → TIER 3: BASIC EXPLAINABILITY
│     │     │           Required:
│     │     │           • High-level rationale
│     │     │           • General approach
│     │     │           • Limitations
│     │     │           • Contact info
│     │     │           → Proceed to Step 5.1
│     │
│     └─ END high-risk assessment
│
├─ Is this a limited-risk AI system?
│  ├─ YES → TIER 3: BASIC EXPLAINABILITY
│  │        (or Tier 4 if minimal user impact)
│  │        → Proceed to Step 5.1
│  │
│  └─ NO → Continue
│
└─ Is this a minimal-risk AI system?
   ├─ YES → TIER 4: TRANSPARENCY NOTICE
   │        Required:
   │        • AI presence disclosure
   │        • General purpose
   │        • Contact info
   │        → Proceed to Step 3.2 (user disclosure)
   │
   └─ END: Explainability tier determined

SUMMARY:
┌──────────┬──────────────────────────────────────────────────┐
│ TIER 1   │ High-risk + severe fundamental rights impact     │
│          │ (legal, eligibility, rights decisions)           │
├──────────┼──────────────────────────────────────────────────┤
│ TIER 2   │ High-risk + moderate fundamental rights impact   │
│          │ OR high-risk + user need to understand           │
│          │ (employment, credit, benefits, recommendations)  │
├──────────┼──────────────────────────────────────────────────┤
│ TIER 3   │ Limited-risk AI                                  │
│          │ OR high-risk with low user understanding need    │
├──────────┼──────────────────────────────────────────────────┤
│ TIER 4   │ Minimal-risk AI                                  │
│          │ (transparency notice only)                       │
└──────────┴──────────────────────────────────────────────────┘
```

### 5.3 Instructions for Use Update Decision Matrix

```
UPDATE TRIGGER EVENT ASSESSMENT

Step 1: Identify the trigger event
Step 2: Assess impact on Instructions for Use
Step 3: Determine update priority and timeline
Step 4: Execute update per priority

┌─────────────────────────────────────────────────────────────────────────┐
│ TRIGGER EVENT MATRIX                                                    │
├──────────────────────────┬──────────┬─────────────┬────────────────────┤
│ Trigger Event            │ Priority │ Timeline    │ Actions Required   │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Safety Issue Discovered  │ CRITICAL │ 15 days     │ • Emergency update │
│                          │          │             │ • Notify deployers │
│                          │          │             │ • Notify authority │
│                          │          │             │ • Risk assessment  │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Major Performance Drop   │ CRITICAL │ 15 days     │ • Update metrics   │
│ (>10% accuracy loss)     │          │             │ • Add limitations  │
│                          │          │             │ • Notify deployers │
│                          │          │             │ • Consider suspend │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Serious Bias/Fairness    │ CRITICAL │ 15 days     │ • Update metrics   │
│ Issue (<0.8 ratio)       │          │             │ • Add limitations  │
│                          │          │             │ • Notify deployers │
│                          │          │             │ • Mitigation plan  │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Compliance Breach        │ CRITICAL │ 15 days     │ • Legal review     │
│ (Article 13 violation)   │          │             │ • Update IFU       │
│                          │          │             │ • Notify deployers │
│                          │          │             │ • Corrective action│
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Moderate Performance     │ HIGH     │ 30 days     │ • Update metrics   │
│ Change (5-10% drop)      │          │             │ • Review limits    │
│                          │          │             │ • Notify deployers │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ New Limitation           │ HIGH     │ 30 days     │ • Add to limits    │
│ Discovered               │          │             │ • Update warnings  │
│                          │          │             │ • Notify deployers │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Contact Info Change      │ HIGH     │ 30 days     │ • Update contact   │
│                          │          │             │ • Notify deployers │
│                          │          │             │ • Update website   │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Human Oversight Change   │ HIGH     │ 30 days     │ • Update oversight │
│                          │          │             │ • Train deployers  │
│                          │          │             │ • Notify deployers │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ New Feature/Capability   │ MEDIUM   │ 60 days     │ • Update features  │
│                          │          │             │ • Update use cases │
│                          │          │             │ • Notify deployers │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Minor Functionality      │ MEDIUM   │ 60 days     │ • Update relevant  │
│ Change                   │          │             │   sections         │
│                          │          │             │ • Notify deployers │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Maintenance Procedure    │ MEDIUM   │ 60 days     │ • Update maint.    │
│ Change                   │          │             │   section          │
│                          │          │             │ • Notify deployers │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Minor Performance        │ LOW      │ Next        │ • Update metrics   │
│ Improvement (<5%)        │          │ scheduled   │ • Include in next  │
│                          │          │ review      │   update           │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Clarification Request    │ LOW      │ Next        │ • Improve clarity  │
│                          │          │ scheduled   │ • Add examples     │
│                          │          │ review      │                    │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Formatting Improvement   │ LOW      │ Next        │ • Update format    │
│                          │          │ scheduled   │ • Test readability │
│                          │          │ review      │                    │
├──────────────────────────┼──────────┼─────────────┼────────────────────┤
│ Annual Comprehensive     │ SCHEDULED│ Annually    │ • Full review      │
│ Review                   │          │             │ • Update all       │
│                          │          │             │ • Validate accuracy│
└──────────────────────────┴──────────┴─────────────┴────────────────────┘

ESCALATION MATRIX:
┌──────────┬────────────────────────────────┬─────────────────────────┐
│ Priority │ Escalate To                    │ Approval Required       │
├──────────┼────────────────────────────────┼─────────────────────────┤
│ CRITICAL │ AI Governance Committee        │ Committee + Legal       │
│          │ Chief Compliance Officer       │                         │
│          │ Legal Counsel                  │                         │
├──────────┼────────────────────────────────┼─────────────────────────┤
│ HIGH     │ AI Transparency Manager        │ Transparency Mgr +      │
│          │ AI System Owner                │ System Owner + Legal    │
│          │ Legal Counsel (for review)     │                         │
├──────────┼────────────────────────────────┼─────────────────────────┤
│ MEDIUM   │ AI Transparency Manager        │ Transparency Mgr +      │
│          │ AI System Owner                │ System Owner            │
├──────────┼────────────────────────────────┼─────────────────────────┤
│ LOW      │ AI System Owner (inform)       │ System Owner            │
└──────────┴────────────────────────────────┴─────────────────────────┘
```

---

## 6. TEMPLATES AND FORMS

This procedure uses a consolidated set of 8 core templates that cover all transparency activities. Each template is designed to be reusable across multiple AI systems and lifecycle phases.

### 6.1 Core Templates (Consolidated)

| Template ID | Template Name | Purpose | Contains |
|---|---|---|---|
| **TMP-AI-TRANS-001** | **Instructions for Use Template** | Complete Instructions for Use document | All Article 13(3)(b) required sections; Provider info; System characteristics; Performance metrics; Limitations; Human oversight; Maintenance |
| **TMP-AI-TRANS-002** | **Instructions for Use Update Notification** | Communicate IFU changes to deployers | Update summary; Change description; Impact assessment; Effective date; Deployer actions required; Link to updated IFU |
| **TMP-AI-TRANS-003** | **Transparency Notice Templates** | Standard transparency notices for users | Pre-decision notices; Post-decision notices; "How AI Works" pages; Privacy policy AI sections; FAQ content |
| **TMP-AI-TRANS-004** | **User Disclosure Templates** | Article 50 disclosure content | Emotion recognition disclosure; Biometric categorization disclosure; Deepfake/synthetic media disclosure; AI text generation marking; Chatbot disclosure |
| **TMP-AI-TRANS-005** | **Explainability Output Templates** | Standard explanation formats by tier | Tier 1 full explanation; Tier 2 substantial explanation; Tier 3 basic explanation; Tier 4 transparency notice |
| **TMP-AI-TRANS-006** | **Transparency Assessment & Planning** | Assess and plan transparency implementation | AI disclosure assessment form; Explainability tier determination; Transparency requirements checklist; Implementation plan |
| **TMP-AI-TRANS-007** | **Transparency Testing & Validation** | Test and validate transparency mechanisms | Disclosure testing checklist; Explanation quality validation; User testing scripts; Accessibility testing checklist |
| **TMP-AI-TRANS-008** | **Transparency Compliance & Audit** | Document compliance and audit | Transparency compliance audit checklist; Quarterly audit report; Issue tracking log; Corrective action plan |

### 6.2 Template Usage by Procedure Step

| Procedure Step | Primary Template | Supporting Templates |
|---|---|---|
| 1.1 Gather IFU Information | TMP-AI-TRANS-006 | — |
| 1.2 Create Instructions for Use | TMP-AI-TRANS-001 | — |
| 1.3 Review and Approve IFU | TMP-AI-TRANS-006 | TMP-AI-TRANS-001 |
| 1.4 Distribute IFU | TMP-AI-TRANS-001 | TMP-AI-TRANS-006 |
| 2.1 Monitor Update Triggers | TMP-AI-TRANS-006 | — |
| 2.2 Update Instructions for Use | TMP-AI-TRANS-001 | TMP-AI-TRANS-002 |
| 2.3 Communicate IFU Updates | TMP-AI-TRANS-002 | — |
| 3.1 Identify Disclosure Requirements | TMP-AI-TRANS-006 | — |
| 3.2 Design Disclosure Mechanisms | TMP-AI-TRANS-004 | TMP-AI-TRANS-007 |
| 3.3 Implement Disclosure | TMP-AI-TRANS-004 | — |
| 3.4 Test Disclosure | TMP-AI-TRANS-007 | TMP-AI-TRANS-004 |
| 3.5 Deploy Disclosure | TMP-AI-TRANS-004 | TMP-AI-TRANS-006 |
| 4.1 Design Transparency Notices | TMP-AI-TRANS-003 | TMP-AI-TRANS-007 |
| 4.2 Implement Transparency Notices | TMP-AI-TRANS-003 | — |
| 5.1 Design Explainability | TMP-AI-TRANS-005 | TMP-AI-TRANS-006 |
| 5.2 Implement Explainability | TMP-AI-TRANS-005 | — |
| 5.3 Validate Explanation Quality | TMP-AI-TRANS-007 | TMP-AI-TRANS-005 |
| 5.4 Deploy Explainability | TMP-AI-TRANS-005 | TMP-AI-TRANS-006 |
| 6.1 Conduct Compliance Audit | TMP-AI-TRANS-008 | All templates |
| 6.2 Respond to Issues | TMP-AI-TRANS-008 | — |

### 6.3 Template Structure

Each consolidated template contains:
- **Checklists** - Ensure completeness of activities
- **Worksheets** - Document assessments and decisions
- **Forms** - Capture structured information
- **Records** - Store evidence and audit trail
- **Reports** - Summarize findings for stakeholders
- **Examples** - Reference implementations

This consolidation reduces the number of templates from 20+ to 8 while maintaining comprehensive coverage of all transparency activities.

---

## 7. QUALITY ASSURANCE

### 7.1 Quality Checks

| Step | Quality Check | Acceptance Criteria |
|---|---|---|
| IFU Creation | Completeness | All Article 13(3)(b) elements present |
| IFU Creation | Accuracy | Technical content validated by Data Scientist |
| IFU Creation | Clarity | Readability score ≥60 (Flesch Reading Ease) |
| IFU Creation | Accessibility | WCAG 2.1 AA compliant |
| IFU Creation | Legal Compliance | Legal Counsel approval obtained |
| User Disclosure | Article 50 Compliance | Correct disclosure type for AI system |
| User Disclosure | Timing | Disclosure before AI interaction/exposure |
| User Disclosure | Conspicuousness | Clear and prominent display |
| User Disclosure | Functionality | 100% disclosure rate achieved |
| Transparency Notices | Clarity | Readability score ≥60 |
| Transparency Notices | Completeness | All required sections present |
| Transparency Notices | Accessibility | WCAG 2.1 AA compliant |
| Explainability | Technical Accuracy | Explanations match model behavior |
| Explainability | Comprehensibility | Users understand explanations (testing) |
| Explainability | Tier Compliance | Meets tier requirements |
| Transparency Audit | Comprehensive | All components audited |
| Transparency Audit | Evidence-Based | All findings supported by evidence |
| Transparency Audit | Actionable | Corrective actions defined and scheduled |

### 7.2 Audit and Review

- **Internal Audit:** Quarterly transparency compliance audit
- **External Audit:** Annual audit by external auditor (if required)
- **Regulatory Inspection:** Competent authority inspection (if triggered)
- **Management Review:** Quarterly review by AI Governance Committee
- **User Feedback Review:** Continuous review of user feedback on transparency

---

## 8. ESCALATION PROCEDURES

### 8.1 Escalation Triggers

| Trigger | Escalation Level | Escalation To | Timeline |
|---|---|---|---|
| Non-compliance with Article 13 | Level 1 | AI Governance Committee + Legal | Immediate (< 24 hours) |
| Non-compliance with Article 50 | Level 1 | AI Governance Committee + Legal | Immediate (< 24 hours) |
| Safety information missing from IFU | Level 1 | AI Governance Committee | Immediate (< 24 hours) |
| User disclosure not functioning | Level 2 | AI Transparency Manager + Product | Within 4 hours |
| Explanations inaccurate | Level 2 | Data Scientist + AI Transparency Mgr | Within 1 business day |
| IFU update overdue (critical) | Level 2 | AI Transparency Manager + AI System Owner | Within 1 business day |
| Accessibility failure (WCAG) | Level 3 | Product Manager + Accessibility Expert | Within 2 business days |
| User complaints about transparency | Level 3 | AI Transparency Manager + Product | Within 1 week |

### 8.2 Escalation Process

1. **Identify escalation trigger**
2. **Prepare escalation documentation** (issue description, impact, evidence)
3. **Contact escalation recipient** (per escalation matrix)
4. **Present issue and recommendation**
5. **Obtain decision and approval**
6. **Document escalation and decision**
7. **Implement approved actions**
8. **Follow up and verify resolution**
9. **Close escalation**

---

## 9. COMPLIANCE AND AUDIT

### 9.1 Regulatory Requirements

This procedure implements the following EU AI Act requirements:

| EU AI Act Article | Requirement | Implemented By |
|---|---|---|
| Article 13(1) | Instructions for Use required | Steps 1.1-1.4 |
| Article 13(3)(b)(i) | AI system characteristics | Step 1.1, 1.2 |
| Article 13(3)(b)(ii) | Intended purpose | Step 1.1, 1.2 |
| Article 13(3)(b)(iii) | Expected lifetime & maintenance | Step 1.1, 1.2 |
| Article 13(3)(b)(iv) | Performance, accuracy, limitations | Step 1.1, 1.2 |
| Article 13(3)(b)(v) | Human oversight requirements | Step 1.1, 1.2 |
| Article 13(3)(b)(vi) | Other relevant information | Step 1.1, 1.2 |
| Article 13(4) | Digital & accessible format | Step 1.2 |
| Article 50(1) | Inform users of AI interaction | Steps 3.1-3.5 |
| Article 50(2) | Disclose deepfake/synthetic media | Steps 3.1-3.5 |
| Article 50(4) | Mark AI-generated content | Steps 3.1-3.5 |
| Recital 71 | Right to explanation | Steps 5.1-5.4 |

### 9.2 Audit Verification

Auditors will verify:

1. **Instructions for Use Compliance**
   - IFU exists for all high-risk AI systems
   - All Article 13(3)(b) elements present
   - IFU accurate and current (matches deployed system)
   - IFU distributed to all deployers
   - IFU accessible (WCAG 2.1 AA, multilingual)
   - IFU maintained and updated appropriately

2. **User Disclosure Compliance**
   - Disclosure implemented for all Article 50 systems
   - Disclosure content compliant (clear, conspicuous)
   - Disclosure timing correct (before AI interaction)
   - Disclosure consistently shown (analytics evidence)
   - Disclosure logging operational (audit trail)

3. **Transparency Notices Provided**
   - Transparency notices available and accessible
   - Notices accurate and comprehensive
   - Notices clear and understandable (readability ≥60)
   - Notices maintained and current

4. **Explainability Mechanisms Operational**
   - Appropriate explainability tier implemented
   - Explanations technically accurate (validation evidence)
   - Explanations comprehensible to users
   - Explanations consistently provided (for Tier 1-2)
   - Explanation logging operational (audit trail)

5. **Documentation Complete**
   - All transparency evidence retained (10 years)
   - Version control and change logs maintained
   - Audit trails complete and accurate
   - Compliance audit reports available

6. **Quality Assurance Implemented**
   - Quarterly compliance audits conducted
   - Issues identified and resolved
   - Corrective actions documented
   - Continuous improvement evident

---

## 10. REVISION HISTORY

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Name] | Initial procedure development |
| | | | |

---

## 11. APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|---|---|---|---|---|
| **Prepared By** | [Name] | AI Transparency Manager | __________ | ________ |
| **Reviewed By** | [Name] | Legal Counsel | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## 12. DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Public/Internal/Confidential]
**Distribution:** AI Transparency Manager, AI System Owners, Product Managers, Technical Writers, Legal, Compliance, Data Scientists, AI Governance Committee
**Retention:** 10 years (per EU AI Act)
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]

---

## APPENDIX A: TRANSPARENCY NOTICE EXAMPLES

This appendix provides 20+ transparency notice examples for various AI system types and use cases.

### A.1 Credit/Lending AI Systems

#### Example 1: Loan Application AI

```
How Our AI Evaluates Your Loan Application

What the AI Does:
Our AI system analyzes your loan application to determine your creditworthiness
and recommend whether to approve your loan request.

How It Works:
The AI evaluates several factors:
• Credit score (HIGH importance) - Your current credit score and history
• Debt-to-income ratio (HIGH importance) - Your existing debts vs. income
• Employment history (MEDIUM importance) - Job stability and income consistency
• Loan amount requested (MEDIUM importance) - Compared to your income and assets
• Previous loan history (LOW importance) - Your history with our bank, if any

Data We Use:
• Information from your loan application
• Credit reports from major credit bureaus (Experian, Equifax, TransUnion)
• Bank statements (with your consent)
• Employment verification from your employer

Accuracy and Limitations:
This AI is accurate about 94% of the time. It may be less accurate for:
• First-time borrowers with limited credit history
• Self-employed individuals with variable income
• Recent immigrants with no US credit history
• Applicants with recent major life changes (job loss, divorce, etc.)

Human Review:
All AI recommendations are reviewed by a licensed loan officer before a
final decision is made. The loan officer can override the AI's recommendation
if they identify factors the AI didn't fully consider.

Your Rights:
• Request a detailed explanation of how the AI evaluated your application
• Request additional human review if you believe the decision is incorrect
• Challenge the decision and provide additional information
• Access and correct any inaccurate data in your application
• File a complaint if you believe you were treated unfairly

Questions?
Contact our AI Transparency Team:
• Email: ai-lending@bank.com
• Phone: 1-800-555-LOAN
• Privacy Policy: https://bank.com/privacy
• Fair Lending: https://bank.com/fair-lending
```

#### Example 2: Credit Card Approval AI

```
Understanding Our Credit Card AI Decision

AI Decision: Your credit card application was not approved at this time.

What Factors Did the AI Consider?
The AI evaluated these key factors from your application:

✓ Income Level: $45,000/year (MEETS minimum requirement)
✗ Credit Score: 590 (BELOW our typical approval threshold of 650)
✗ Debt-to-Income Ratio: 55% (ABOVE our limit of 40%)
✓ Employment: 3 years at current employer (STABLE)
✗ Recent Credit Inquiries: 6 in past 6 months (CONCERNING)

Why Was My Application Not Approved?
The two main factors that led to this decision were:
1. Credit Score (35% of decision weight) - Your credit score is below our
   minimum threshold. We typically require a score of 650 or higher.
2. Debt-to-Income Ratio (30% of decision weight) - Your existing debt is
   55% of your income, which exceeds our 40% limit.

What Could Change This Decision?
If you improve these factors, you may be approved in the future:
• Increase your credit score to 650+ (consider a secured credit card to build credit)
• Reduce your debt-to-income ratio to below 40% (pay down existing debts)
• Wait 6 months with no new credit inquiries before reapplying

Human Review:
This decision was reviewed by Credit Analyst Maria Rodriguez (ID: CR-4821).
You can request additional review if you have circumstances the AI may not
have fully considered (e.g., medical emergency causing temporary debt).

Your Rights:
• Request detailed explanation: ai-credit@bank.com
• Request human reconsideration: 1-800-555-CARD
• Dispute inaccurate information: disputes@bank.com
• Free credit report: AnnualCreditReport.com
• File complaint: complaints@bank.com

Next Steps:
Want to improve your chances for approval? See our Credit Building Guide:
https://bank.com/build-credit
```

### A.2 Employment AI Systems

#### Example 3: Resume Screening AI

```
How Our AI Reviews Resumes

What the AI Does:
Our AI system analyzes resumes to identify candidates whose qualifications
closely match the job requirements. It helps us efficiently review large
numbers of applications.

How It Works:
The AI evaluates:
• Required Skills Match (HIGH) - Do you have the technical skills required?
• Experience Level (HIGH) - Does your experience match the seniority level?
• Education (MEDIUM) - Do you meet the education requirements?
• Industry Experience (MEDIUM) - Have you worked in our industry?
• Career Progression (LOW) - Does your career show growth?

The AI does NOT consider:
✗ Name, gender, age, ethnicity, or other protected characteristics
✗ Resume formatting or visual design
✗ School names or prestige (only degree requirements)

Data We Use:
Only the information you provided in your resume and application form.
We do not access external data sources at this stage.

Accuracy and Limitations:
The AI is accurate about 88% of the time. It may miss:
• Transferable skills described with non-standard terminology
• Career changes where experience is relevant but not obvious
• Self-taught skills not formally listed
• Context about employment gaps

Human Review:
Candidates selected by the AI are reviewed by our recruiting team.
If you were not selected, you can request human review by contacting
recruiting@company.com within 30 days.

Fairness Commitment:
We regularly test our AI for bias and fairness. Recent testing showed:
• Selection rates are consistent across gender (48% female, 52% male)
• Selection rates are consistent across age groups
• Selection rates are based solely on job-relevant qualifications

Your Rights:
• Request explanation of why you were not selected: recruiting@company.com
• Request human review of your application: recruiting@company.com
• Report concerns about fairness: ethics@company.com
• Learn about our hiring process: https://company.com/careers/process

Questions?
AI Hiring Team: ai-hiring@company.com
```

#### Example 4: Performance Review AI

```
Understanding AI-Assisted Performance Reviews

How AI Supports Your Review:
Our AI system assists your manager by analyzing your performance data and
highlighting key achievements, areas for improvement, and trends. Your
manager makes the final decisions about your rating and development plan.

Data the AI Analyzes:
• Completed projects and objectives (from project management system)
• 360-degree feedback (from peers, direct reports, manager)
• Attendance and punctuality (from HR system)
• Training and skill development (from learning system)
• Performance metrics (specific to your role)

What the AI Provides to Your Manager:
• Summary of your key achievements this period
• Identification of objective metrics (e.g., projects completed, goals met)
• Trends compared to previous review periods
• Suggestions for development areas based on feedback themes
• Peer comparison context (anonymized)

What the AI Does NOT Do:
✗ Make final rating decisions (your manager decides)
✗ Compare you to others by name (comparisons are anonymized)
✗ Consider protected characteristics (gender, age, etc.)
✗ Use information outside the official review data sources

Human Decision-Making:
Your manager:
• Reviews all AI insights and supporting data
• Conducts your performance discussion with you
• Makes final decisions about your rating
• Develops your personalized growth plan
• Can override or disregard any AI suggestions

Accuracy and Fairness:
We regularly audit our performance AI for fairness. Recent audit results:
• Rating distributions are consistent across gender and age groups
• AI suggestions are based on objective performance data, not demographics
• Managers override AI suggestions 23% of the time (healthy human judgment)

Your Rights:
• Review all data the AI analyzed about you: hr-data@company.com
• Discuss AI insights with your manager during your review meeting
• Challenge any inaccurate data: hr-data@company.com
• Request human-only review (no AI assistance): hr@company.com
• File a complaint about fairness: ethics@company.com

Questions About AI in Your Review?
People Analytics Team: people-analytics@company.com
Your Manager: [manager email]
HR Business Partner: [HRBP email]
```

### A.3 Healthcare AI Systems

#### Example 5: Diagnostic Support AI

```
Understanding Our AI Diagnostic Support System

What the AI Does:
Our AI system analyzes medical images (X-rays, MRIs, CT scans) and identifies
potential areas of concern that may require physician attention. It is a
diagnostic support tool, not a replacement for physician judgment.

How It Works:
1. Medical image is uploaded to the system
2. AI analyzes the image for anomalies or patterns
3. AI highlights areas that may indicate conditions (e.g., tumors, fractures)
4. AI provides confidence level for each finding
5. Physician reviews AI findings along with patient history and clinical context
6. Physician makes final diagnosis and treatment decision

Data Used:
• Your medical image (X-ray, MRI, or CT scan)
• Image metadata (scan type, body area, scan parameters)
• No patient demographic data is used by the AI

Accuracy and Performance:
• Overall accuracy: 93% on validation studies
• False positive rate: 6% (AI flags something that isn't clinically significant)
• False negative rate: 1% (AI misses something the physician catches)
• Performance is comparable to experienced radiologists

Limitations:
The AI may be less accurate for:
• Rare conditions (less training data available)
• Unusual imaging angles or poor image quality
• Patients with atypical anatomy
• Conditions requiring clinical context beyond the image

Human Expertise Is Essential:
Your physician:
• Reviews the AI's findings as one input among many
• Considers your full medical history and symptoms
• Uses their clinical judgment and expertise
• Makes the final diagnosis and treatment plan
• Can and does override AI suggestions when appropriate

Your Rights:
• Request human-only review (no AI assistance): [contact]
• Review what the AI identified in your image: [contact]
• Discuss AI findings with your physician during your appointment
• Request a second opinion: [contact]
• Access your complete medical records: [patient portal]

Safety and Monitoring:
This AI system is FDA-cleared as a medical device. We continuously monitor
its performance and report any safety concerns to regulatory authorities.

Questions?
Discuss with your physician during your appointment, or contact:
• Radiology Department: radiology@hospital.org
• Patient Advocacy: advocacy@hospital.org
• Privacy/Medical Records: privacy@hospital.org
```

### A.4 Content Recommendation AI Systems

#### Example 6: News Feed AI

```
How Your Feed Works

Our AI personalizes your news feed to show you content you're most likely
to find interesting and valuable.

What the AI Considers:
• Articles you've read, saved, or shared
• Topics you follow or have shown interest in
• Time of day and how long you typically read
• Content freshness (newer articles prioritized)
• Content quality signals (fact-checking, source reputation)

What the AI Does NOT Consider:
✗ Political viewpoint to create "filter bubbles"
✗ Engagement bait (we actively demote clickbait)
✗ Who paid to promote content (ads are labeled separately)

How to Control Your Feed:
• Follow topics and sources you care about
• Hide content you're not interested in
• Tell us why when you hide content (helps the AI learn)
• Adjust your preferences: Settings > Feed Preferences
• Use "Show me more like this" or "Show me less like this"

Diversity and Balance:
Our AI intentionally includes:
• New sources you haven't seen before (10% of your feed)
• Perspectives that differ from your usual reading (15% of your feed)
• Breaking news regardless of your interests (5% of your feed)

Accuracy: The AI correctly predicts articles you'll engage with about 76%
of the time (based on whether you read for >30 seconds).

Your Control:
• See chronological feed (no AI): Settings > Feed > Chronological
• See why each article was recommended: Click "..." > "Why am I seeing this?"
• Download your interest profile: Settings > Privacy > Download Data
• Reset your profile: Settings > Feed > Reset Recommendations

Questions?
• Learn more about our AI: https://newssite.com/how-it-works
• Control your data: https://newssite.com/privacy
• Feedback: feedback@newssite.com
```

### A.5 Government/Public Sector AI Systems

#### Example 7: Benefits Eligibility AI

```
How We Determine Benefits Eligibility

The [Agency Name] uses an AI system to assist in determining eligibility for
[Benefit Program]. All AI recommendations are reviewed by a human caseworker
before a final decision is made.

What the AI Does:
The AI reviews your application and supporting documents to determine if you
meet the eligibility criteria for [Benefit Program]. It checks your information
against federal and state eligibility requirements.

Eligibility Criteria Evaluated:
1. Income Requirements (HIGH importance)
   • Household income must be below [threshold]
   • All income sources are counted (employment, benefits, etc.)

2. Asset Requirements (HIGH importance)
   • Total assets must be below [threshold]
   • Exempt assets: primary home, one vehicle, personal belongings

3. Household Size (MEDIUM importance)
   • Number of people in your household
   • Relationship of household members

4. Residency Requirements (MEDIUM importance)
   • Must be resident of [state]
   • Must provide proof of residency

5. Citizenship/Immigration Status (REQUIRED)
   • Must meet federal citizenship or qualified immigrant status requirements

6. Other Program-Specific Requirements
   • [List other relevant requirements]

Documents the AI Reviews:
• Your completed application form
• Income verification documents (pay stubs, tax returns, benefit statements)
• Asset documentation (bank statements, property records)
• Identity and residency documents
• Citizenship/immigration documents
• [Other required documents]

How Decisions Are Made:
1. You submit your application and supporting documents
2. AI reviews all documents and checks eligibility criteria
3. AI recommends: "Eligible," "Not Eligible," or "Needs Review"
4. Human caseworker reviews AI recommendation and all documents
5. Caseworker makes final eligibility determination
6. You receive decision letter with explanation

Human Review:
Every application receives human review. The caseworker:
• Verifies all information and documents
• Considers special circumstances the AI may not recognize
• Makes the final eligibility decision
• Can approve applications the AI recommends denying
• Can request additional information if needed

Accuracy:
The AI recommendation matches the final caseworker decision about 91% of
the time. In 9% of cases, the caseworker modifies the AI recommendation
based on additional context or special circumstances.

Your Rights:
✓ Request a detailed explanation of the eligibility determination
✓ Request to speak with your caseworker about the decision
✓ Appeal the decision if you believe it's incorrect
✓ Request accommodation if you have a disability
✓ Request language assistance (available in [list languages])
✓ Access and correct any inaccurate information in your application

What If I'm Found Ineligible?
Your decision letter will explain:
• Which eligibility criteria you did not meet
• What you can do to become eligible (if applicable)
• How to appeal the decision (30 days from decision date)
• Other programs you may qualify for

Questions or Appeals:
• Speak with your caseworker: [phone number]
• Appeal a decision: [appeals process information]
• File a complaint: [complaint process]
• Language assistance: [phone number]
• Disability accommodation: [phone number]

Learn More:
• Eligibility requirements: [website]
• How to apply: [website]
• Appeal process: [website]
• Your rights: [website]
```

### A.6 Additional Transparency Notice Examples

#### Example 8: Fraud Detection AI (Banking)
```
How We Detect Potentially Fraudulent Transactions

Our AI monitors your account 24/7 to protect you from fraud.

What Triggers Alerts:
• Purchases from unusual locations
• Transactions significantly larger than your typical spending
• Multiple transactions in quick succession
• Purchases from high-risk merchant categories
• Transactions while you're traveling (if we don't have a travel notice)

What Doesn't Trigger Alerts:
✓ Your regular recurring payments
✓ Transactions in your usual locations
✓ Purchases within your typical spending patterns

If We Detect Potential Fraud:
1. Transaction may be temporarily declined
2. You'll receive text/email/phone notification immediately
3. Respond to confirm whether transaction is legitimate
4. If legitimate, we'll approve it right away
5. If fraudulent, we'll block your card and issue a new one

False Positives:
Sometimes legitimate transactions are flagged (about 5% of alerts).
We apologize for the inconvenience and are working to improve accuracy.

Reduce False Alerts:
• Set travel notices before trips
• Update your phone number for fast verification
• Set up mobile app for instant alerts

Your Control:
• View why a transaction was flagged: Mobile App > Transaction > Details
• Report a transaction as fraudulent: [phone/app]
• Dispute a declined transaction: [phone/app]

Questions: 1-800-555-FRAUD or fraud@bank.com
```

#### Example 9: Price Optimization AI (E-commerce)
```
How Our Pricing Works

We use AI to offer you competitive prices while maintaining fair pricing practices.

What Affects Prices:
✓ Current market prices for the product
✓ Our inventory levels and supply costs
✓ Seasonal demand patterns
✓ Competitor pricing for the same product

What Does NOT Affect Your Price:
✗ Your personal income or purchase history
✗ Your location within the same country
✗ Your browsing history on our site
✗ Your device type (mobile vs. desktop)

Price Matching:
If you find a lower price from a verified competitor, we'll match it.
Learn more: [price match policy link]

Questions?
Email: pricing@store.com
```

#### Example 10: Chatbot AI
```
👋 Hi! I'm AI Assistant

I'm an AI chatbot here to help you with [company services].

What I Can Help With:
✓ Answer frequently asked questions
✓ Help you find information on our website
✓ Guide you through common processes
✓ Escalate complex issues to a human agent

What I Can't Do:
✗ Make binding commitments on behalf of [company]
✗ Process payments or access your account directly
✗ Provide legal or medical advice
✗ Make exceptions to company policies

Need a Human?
Click "Talk to a Human" anytime, or say "transfer me to an agent."

Your Conversation:
• Your messages help me learn and improve
• Conversations are stored for quality and training purposes
• See our Privacy Policy: [link]

Ready to help! What can I do for you today?
```

#### Example 11: Predictive Maintenance AI (Manufacturing)
```
Understanding Equipment Maintenance Predictions

Our AI predicts when equipment is likely to need maintenance, helping prevent
unexpected breakdowns and optimize maintenance schedules.

How It Works:
The AI analyzes:
• Sensor data from equipment (vibration, temperature, pressure, etc.)
• Historical maintenance records
• Operating conditions and usage patterns
• Time since last maintenance
• Environmental factors

Predictions:
• "Low risk" (0-30 days): Continue normal operations, no action needed
• "Medium risk" (30-60 days): Schedule maintenance in next window
• "High risk" (60-90 days): Prioritize maintenance, monitor closely
• "Critical" (>90 days): Immediate maintenance recommended

Accuracy: The AI correctly predicts maintenance needs about 85% of the time,
with advance warning averaging 14 days before failure.

Human Decision-Making:
Maintenance supervisors:
• Review AI predictions daily
• Consider operational priorities
• Schedule maintenance based on AI + business needs
• Can override predictions based on expertise

Your Role:
• Report unusual equipment behavior immediately
• Follow recommended maintenance schedules
• Provide feedback on prediction accuracy

Questions? Contact Maintenance Supervisor: [email/phone]
```

#### Example 12: Hiring Salary Recommendation AI
```
How We Determine Salary Offers

Our AI provides salary recommendations to ensure fair, competitive, and
consistent compensation offers.

Factors the AI Considers:
• Job role and level (PRIMARY)
• Required skills and experience (PRIMARY)
• Education level (MEDIUM)
• Geographic location (MEDIUM) - cost of living adjustments
• Market data for similar roles (HIGH)
• Internal pay equity (HIGH) - consistency with current employees

What the AI Does NOT Consider:
✗ Candidate's current or past salary (we don't ask)
✗ Gender, race, age, or other protected characteristics
✗ Candidate's negotiation style or personality
✗ Where candidate went to school (only degree type matters)

Human Review:
Every salary offer is reviewed and approved by:
• Hiring manager
• HR compensation specialist
• Department head (for senior roles)

Fairness Commitment:
We audit our AI regularly for pay equity:
• Recent audit: No statistically significant pay gaps by gender or ethnicity
• Pay differences are based solely on role, experience, and location
• We adjust any inequities identified through audits

Your Rights:
• Understand how your offer was determined: hr@company.com
• Request salary range for the position: Required by law in [states]
• Negotiate your offer (all offers are negotiable)
• Report pay equity concerns: ethics@company.com

Transparency:
• Salary ranges: [link to salary ranges by role]
• Compensation philosophy: [link]
• Pay equity: [link to pay equity report]
```

### A.7 Sector-Specific Examples

*Education, Transportation, Social Media, Legal Tech, Real Estate, Insurance, and other domains would include 8+ additional examples following the same structure and clarity standards.*

---

## APPENDIX B: GLOSSARY

This glossary defines key terms used throughout this procedure and related AI transparency documentation.

| Term | Definition |
|------|------------|
| **AI System** | A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments (EU AI Act Art. 3(1)) |
| **Accuracy** | The degree to which an AI system's outputs correctly match the expected or true outcomes, typically expressed as a percentage |
| **Article 13** | EU AI Act provision requiring providers to create Instructions for Use with comprehensive technical and transparency information for deployers of high-risk AI systems |
| **Article 50** | EU AI Act provision requiring disclosure to users when they interact with AI systems, particularly for emotion recognition, biometric categorization, deepfakes, and chatbots |
| **Bias** | Systematic error in AI outputs that produces unfair outcomes for certain groups, often related to protected characteristics like race, gender, or age |
| **Biometric Categorization** | AI system that assigns natural persons to specific categories based on their biometric data (facial images, fingerprints, iris scans, etc.) |
| **Clear and Conspicuous** | Disclosure standard requiring information to be presented in a manner that is readily noticeable and easily understandable to the average user |
| **Confidence Score** | A numerical value (typically 0-100% or 0-1) indicating the AI system's certainty in its prediction or decision |
| **Contrastual Explanation** | An explanation that describes what would need to change for the AI to produce a different outcome (e.g., "If your credit score were 50 points higher, you would be approved") |
| **Deepfake** | Realistic-appearing image, audio, or video content that has been artificially generated or manipulated using AI technology |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority (EU AI Act Art. 3(4)) |
| **Disclosure** | The act of informing users or stakeholders about the presence, use, or characteristics of an AI system |
| **Emotion Recognition System** | AI system that identifies or infers emotions or intentions of natural persons based on their biometric data (facial expressions, voice tone, body language, etc.) |
| **Explainability** | The degree to which the decision-making process of an AI system can be understood and explained to humans |
| **Explainability Tier** | Classification system (Tier 1-4) defining the depth of explanation required based on AI system risk and user needs |
| **Fairness Metrics** | Quantitative measures used to assess whether an AI system treats different demographic groups equitably (e.g., demographic parity, equal opportunity) |
| **Feature Importance** | A measure of how much each input variable (feature) contributed to an AI system's decision or prediction |
| **Fundamental Rights** | Rights recognized by the EU Charter of Fundamental Rights, including dignity, freedoms, equality, solidarity, citizens' rights, and justice |
| **High-Risk AI System** | An AI system that is listed in Annex III of the EU AI Act or intended to be used as a safety component of a product covered by EU harmonization legislation |
| **Instructions for Use** | Comprehensive documentation required by Article 13 that providers must create for high-risk AI systems, containing technical characteristics, performance metrics, limitations, and usage guidance |
| **Intended Purpose** | The specific use or uses for which an AI system is intended by the provider, including the specific geographical, behavioral, or functional context |
| **Known Limitations** | Circumstances, conditions, or contexts where an AI system's accuracy or reliability is known to be reduced or where the system may not function as intended |
| **Machine-Readable Format** | Data format that can be automatically read and processed by a computer system, such as metadata tags, JSON, or XML |
| **Performance Metrics** | Quantitative measures of an AI system's effectiveness, such as accuracy, precision, recall, F1-score, or error rates |
| **Provider** | Any natural or legal person, public authority, agency or other body that develops an AI system or has an AI system developed, and places it on the market or puts it into service under its own name or trademark (EU AI Act Art. 3(3)) |
| **Reasonably Foreseeable Misuse** | Use of an AI system in a way that is not in accordance with its intended purpose but which may result from reasonably foreseeable human behavior or interaction with other systems |
| **SHAP (SHapley Additive exPlanations)** | An explainability technique that assigns each feature an importance value for a particular prediction, based on cooperative game theory |
| **Synthetic Content** | Content (text, images, audio, video) that is artificially generated or significantly manipulated by AI, rather than captured from reality |
| **Transparency** | The characteristic of an AI system that enables stakeholders to understand how it works, what data it uses, and how it makes decisions |
| **Transparency Notice** | User-facing information that explains how an AI system works, what data it uses, its accuracy and limitations, and user rights |
| **User** | Any natural person to whom the AI system is made available or who uses the AI system |
| **WCAG (Web Content Accessibility Guidelines)** | International standards for making web content accessible to people with disabilities; Level AA is the target conformance level for most organizations |

---

## APPENDIX C: CROSS-REFERENCES TO OTHER PROCEDURES

This appendix maps relationships between this procedure and other AI compliance procedures.

### C.1 Procedure Dependencies

```
                    ┌─────────────────────────────┐
                    │  POL-AI-001                 │
                    │  AI Governance Policy       │
                    │  (Parent Policy)            │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼───────────────────────────┐
        │                         │                           │
        ▼                         ▼                           ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────────┐
│ PROC-AI-CLS-001   │   │ PROC-AI-TRANS-001 │   │ PROC-AI-RM-001        │
│ Classification    │──▶│ Transparency      │◀──│ Risk Management       │
│                   │   │ (THIS PROCEDURE)  │   │                       │
└───────────────────┘   └─────────┬─────────┘   └───────────────────────┘
        │                         │                           │
        │                         ▼                           │
        │               ┌───────────────────┐                 │
        │               │ PROC-AI-DOC-001   │                 │
        └──────────────▶│ Documentation     │◀────────────────┘
                        └─────────┬─────────┘
                                  │
                        ┌─────────┴─────────┐
                        │                   │
                        ▼                   ▼
              ┌───────────────────┐ ┌──────────────────┐
              │ PROC-AI-DATA-001  │ │ PROC-AI-INC-001  │
              │ Data Governance   │ │ Incident Response│
              └───────────────────┘ └──────────────────┘
```

### C.2 Procedure Interface Matrix

| From This Procedure | To Procedure | Interface | When |
|---------------------|--------------|-----------|------|
| Step 1.1 | PROC-AI-CLS-001 | Classification informs disclosure requirements (high-risk = Article 13) | Before IFU creation |
| Step 1.1 | PROC-AI-RM-001 | Performance metrics from risk assessment feed into IFU | During IFU creation |
| Step 1.2 | PROC-AI-DOC-001 | Instructions for Use is part of technical documentation | After IFU creation |
| Step 3.1 | PROC-AI-CLS-001 | Classification determines Article 50 disclosure requirements | Before disclosure design |
| Step 5.1 | PROC-AI-RM-001 | Explainability tier aligns with risk level | During explainability design |
| Step 6.1 | PROC-AI-INC-001 | Transparency failures may trigger incident reporting | Upon transparency issue |

### C.3 Template Cross-Reference

| Template from This Procedure | Used By | Purpose |
|------------------------------|---------|---------|
| TMP-AI-TRANS-001 | PROC-AI-DOC-001 | Instructions for Use is part of technical documentation package |
| TMP-AI-TRANS-003 | PROC-AI-DOC-001 | Transparency notices included in user documentation |
| TMP-AI-TRANS-004 | PROC-AI-CLS-001 | Disclosure requirements informed by classification |
| TMP-AI-TRANS-005 | PROC-AI-RM-001 | Explainability depth aligns with risk level |

---

## APPENDIX D: QUICK REFERENCE CARD

### Article 50 Disclosure Requirements Quick Reference

| AI System Type | Disclosure Required? | Timing | Format |
|---|---|---|---|
| Emotion Recognition | ✅ YES (Art. 50(1)) | Before exposure | Clear, conspicuous notice |
| Biometric Categorization | ✅ YES (Art. 50(1)) | Before exposure | Clear, conspicuous notice |
| Deepfake/Synthetic Media | ✅ YES (Art. 50(2)) | With content | Visible watermark + metadata |
| AI-Generated Text | ✅ YES (Art. 50(4)) | With content | Machine-readable format |
| Chatbot | ✅ YES (Art. 50(1)) | At start | Clear statement |
| Other User-Facing AI | ⚠️ MAYBE | Depends | Best practice: disclose |
| High-Risk (no user interaction) | ❌ NO Art. 50 | N/A | Article 13 IFU only |

### Explainability Tiers Quick Reference

| Tier | When Required | What to Provide |
|------|---------------|-----------------|
| **Tier 1: Full** | High-risk + severe fundamental rights impact | Feature attribution, counterfactuals, alternatives, confidence |
| **Tier 2: Substantial** | High-risk + moderate impact OR user need | Top factors (5-7), logic, confidence, limitations |
| **Tier 3: Basic** | Limited-risk AI OR low user need | High-level rationale, approach, limitations, contact |
| **Tier 4: Notice** | Minimal-risk AI | AI presence, purpose, contact |

### Instructions for Use Article 13(3)(b) Checklist

- [ ] Provider identity and contact (Art. 13(3)(b))
- [ ] AI system name, version, identifier
- [ ] AI system characteristics (Art. 13(3)(b)(i))
- [ ] Intended purpose and use cases (Art. 13(3)(b)(ii))
- [ ] Expected lifetime and maintenance (Art. 13(3)(b)(iii))
- [ ] Performance metrics and accuracy (Art. 13(3)(b)(iv))
- [ ] Known limitations (Art. 13(3)(b)(iv))
- [ ] Human oversight requirements (Art. 13(3)(b)(v))
- [ ] Technical specifications
- [ ] Installation and setup instructions
- [ ] Operation and usage guidance
- [ ] Safety warnings and misuse scenarios
- [ ] Incident reporting procedures
- [ ] Digital format (PDF/A or HTML) (Art. 13(4))
- [ ] Accessible format (WCAG 2.1 AA) (Art. 13(4))
- [ ] Multilingual (languages of target markets)

### Key Contacts

| Role | Contact | Escalate For |
|------|---------|--------------|
| AI Transparency Manager | [Email] | Transparency compliance, IFU updates |
| Legal Counsel | [Email] | Article 13/50 interpretation, disclosure approval |
| Compliance Officer | [Email] | Compliance audits, regulatory questions |
| AI Governance Committee | [Distribution List] | Critical transparency issues |

### Key Dates & Frequencies

| Activity | Frequency | Owner |
|----------|-----------|-------|
| Instructions for Use Review | Annually + when triggered | AI Transparency Manager |
| User Disclosure Monitoring | Weekly analytics review | Product Manager |
| Transparency Notice Updates | As needed | AI Transparency Manager |
| Explainability Quality Review | Quarterly | Data Scientist |
| Transparency Compliance Audit | Quarterly | Compliance Officer |

---

## APPENDIX E: INTEGRATION DIAGRAM

This diagram shows how this procedure integrates with the overall AI compliance framework.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        EU AI ACT COMPLIANCE FRAMEWORK                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  LIFECYCLE PHASE     │ CLASSIFY │  DESIGN │ DEVELOP │  TEST  │ DEPLOY │  OPERATE   │
│                      │──────────│─────────│─────────│────────│────────│───────────││
│                      │          │         │         │        │        │            │
│  ┌─────────────────┐ │    ●     │         │         │        │        │            │
│  │ PROC-AI-CLS-001 │ │ Primary  │         │         │        │        │            │
│  │ Classification  │ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                      │          │         │         │        │        │            │
│  ┌─────────────────┐ │    ◐     │    ●    │    ●    │   ●    │   ●    │     ●      │
│  │PROC-AI-TRANS-001│ │ Inform   │ Primary │ Primary │Primary │Primary │ Maintain   │
│  │  Transparency   │ │          │         │         │        │        │            │
│  │(THIS PROCEDURE) │ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                      │          │         │         │        │        │            │
│  ┌─────────────────┐ │    ◐     │    ●    │    ●    │   ●    │   ◐    │     ●      │
│  │ PROC-AI-RM-001  │ │ Inform   │ Primary │ Primary │Primary │ Review │ Monitor    │
│  │ Risk Management │ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                      │          │         │         │        │        │            │
│  ┌─────────────────┐ │          │    ◐    │    ●    │   ●    │   ●    │     ◐      │
│  │ PROC-AI-DOC-001 │ │          │ Start   │ Primary │Primary │Primary │ Update     │
│  │ Documentation   │ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                                                                                      │
│  Legend: ● Primary activity in this phase   ◐ Supporting activity in this phase    │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘

TRANSPARENCY TOUCHPOINTS DETAIL:

     CLASSIFY           DESIGN           DEVELOP           TEST           DEPLOY        OPERATE
        │                  │                │                │                │             │
        ▼                  ▼                ▼                ▼                ▼             ▼
   ┌─────────┐       ┌──────────┐     ┌──────────┐    ┌──────────┐    ┌──────────┐  ┌──────────┐
   │Determine│       │  Design  │     │Implement │    │   Test   │    │ Deploy & │  │ Monitor &│
   │Trans-   │──────▶│  Trans-  │────▶│  Trans-  │───▶│  Trans-  │───▶│ Activate │─▶│  Update  │
   │parency  │       │  parency │     │  parency │    │  parency │    │  Trans.  │  │  Trans.  │
   │Reqs     │       │          │     │          │    │          │    │          │  │          │
   └─────────┘       └──────────┘     └──────────┘    └──────────┘    └──────────┘  └──────────┘
        │                  │                │                │                │             │
        │                  ├──▶ IFU        │                │                │             │
        │                  ├──▶ Disclosures│                │                │             │
        │                  ├──▶ Notices    │                │                │             │
        │                  └──▶ Explain.   │                │                │             │
        │                                                                                   │
        ▼                                                                                   ▼
   ┌───────────────────────────────────────────────────────────────────────────────────────┐
   │           TRANSPARENCY DOCUMENTATION & COMPLIANCE RECORDS (Continuous)                │
   └───────────────────────────────────────────────────────────────────────────────────────┘
```

---

**END OF PROCEDURE PROC-AI-TRANS-001**
