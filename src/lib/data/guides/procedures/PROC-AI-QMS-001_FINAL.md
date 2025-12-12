# PROC-AI-QMS-001: EU AI Act Quality Management System Procedure

**Procedure ID:** PROC-AI-QMS-001
**Procedure Name:** Quality Management System Procedure
**Standard:** STD-AI-009: Quality Management Standard
**EU AI Act Article:** Article 17 (Quality Management System)
**Covers Controls:** QMS-001 through QMS-014
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## TABLE OF CONTENTS

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Roles and Responsibilities](#2-roles-and-responsibilities)
3. [Quality Management System Framework](#3-quality-management-system-framework)
4. [Step-by-Step Procedure](#4-step-by-step-procedure)
   - Phase 1: QMS Establishment and Governance
   - Phase 2: Design and Development Controls
   - Phase 3: Documentation and Configuration Management
   - Phase 4: Supplier and Training Management
   - Phase 5: Corrective and Preventive Actions
   - Phase 6: Monitoring, Audit, and Review
   - Phase 7: Continuous Improvement
5. [Control Mechanisms](#5-control-mechanisms)
6. [Key Performance Indicators and Metrics](#6-key-performance-indicators-and-metrics)
7. [Documentation Requirements](#7-documentation-requirements)
8. [Quality Assurance](#8-quality-assurance)
9. [Non-Compliance Handling](#9-non-compliance-handling)
10. [Compliance and Audit](#10-compliance-and-audit)
11. [Revision History](#11-revision-history)
12. [Approval and Authorization](#12-approval-and-authorization)
13. [Document Control](#13-document-control)

**Appendices:**
- [Appendix A: KPI Library](#appendix-a-kpi-library)
- [Appendix B: Glossary](#appendix-b-glossary)
- [Appendix C: Cross-References](#appendix-c-cross-references-to-other-procedures)
- [Appendix D: Quick Reference Card](#appendix-d-quick-reference-card)
- [Appendix E: Integration Diagram](#appendix-e-qms-integration-diagram)

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes a comprehensive Quality Management System (QMS) for AI systems in compliance with EU AI Act Article 17, ensuring systematic quality control throughout the entire AI system lifecycle from design through deployment, operation, and decommissioning.

The QMS integrates all compliance requirements from Articles 8-15, providing a unified framework for:
- Design, development, and testing quality controls
- Technical documentation accuracy and completeness
- Data governance and quality assurance
- Risk management integration
- Post-market monitoring and incident reporting
- Continuous improvement and corrective action

### 1.2 Scope

This procedure applies to:
- All high-risk AI systems as classified per PROC-AI-CLS-001
- All AI system development, deployment, and operational activities
- All providers and deployers of AI systems within the organization
- All third-party suppliers and vendors supporting AI systems
- All personnel involved in AI system lifecycle activities

This procedure does not apply to:
- Minimal-risk AI systems (unless specifically designated)
- Research and development prototypes not intended for deployment
- Third-party AI systems where provider maintains QMS responsibility (covered by PROC-AI-VENDOR-001)

### 1.3 Regulatory Basis

This procedure implements:
- **EU AI Act Article 17:** Quality management system requirements
- **EU AI Act Articles 8-15:** Technical requirements integrated into QMS
- **ISO/IEC 42001:2023:** AI Management System standard
- **ISO 9001:2015:** Quality management system principles
- **ISO 13485:2016:** Medical device quality management (where applicable)
- **IEC 62304:** Medical device software lifecycle processes (where applicable)

### 1.4 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | Quality Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Quality Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |
| **Technical Contact** | [Name] | AI Technical Lead | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|----------------|-----------|
| **Quality Manager** | Own and execute QMS; maintain quality documentation; conduct internal audits; drive continuous improvement | Approve quality procedures; escalate non-conformances; block deployments |
| **Chief Quality Officer** | QMS oversight; approve quality policies; interface with management; ensure regulatory compliance | Escalate to Board; approve major QMS changes; allocate resources |
| **AI System Owner** | Ensure system compliance with QMS; implement quality controls; maintain system documentation | Accept quality risks; approve system changes; allocate system resources |
| **AI Governance Committee** | Oversee QMS effectiveness; approve quality policies; review audit findings; approve major changes | Approve QMS framework; mandate improvements; block non-compliant systems |
| **Design Authority** | Approve design specifications; verify design compliance; control design changes | Sign off designs; reject inadequate designs; approve design deviations |
| **Document Controller** | Maintain document repository; control document versions; ensure document accessibility | Approve document releases; enforce document standards; audit documentation |
| **Supplier Quality Manager** | Qualify suppliers; audit supplier performance; manage supplier corrective actions | Approve/reject suppliers; mandate supplier improvements; escalate supplier issues |
| **Training Manager** | Develop training programs; maintain training records; assess training effectiveness | Approve training materials; certify personnel; mandate retraining |
| **Internal Auditor** | Conduct internal audits; verify control effectiveness; identify improvement opportunities | Access all systems and records; report non-conformances; recommend improvements |
| **CAPA Coordinator** | Manage corrective and preventive actions; track CAPA effectiveness; close out actions | Assign CAPA owners; escalate overdue CAPAs; verify CAPA effectiveness |

### 2.2 RACI Matrix

| Activity | Quality Manager | CQO | AI System Owner | AI Gov Committee | Design Authority | Document Controller | Supplier QM | Training Mgr | Internal Auditor | CAPA Coord |
|----------|----------------|-----|-----------------|------------------|------------------|---------------------|-------------|--------------|------------------|------------|
| QMS establishment | A | R | C | A | C | I | C | C | C | I |
| Quality policy approval | C | R | I | A | I | I | I | I | I | I |
| Design control | C | I | R | C | A | C | I | I | I | I |
| Document control | C | I | R | I | C | A | I | I | I | I |
| Configuration management | A | I | R | C | C | C | I | I | I | I |
| Supplier qualification | C | I | C | I | C | I | A | I | I | I |
| Training delivery | C | I | C | I | I | I | I | A | I | I |
| CAPA management | C | I | R | C | I | I | C | I | I | A |
| Internal audit | A | C | I | C | I | I | I | I | R | I |
| Management review | R | A | R | A | C | C | C | C | C | C |
| Continuous improvement | R | A | R | C | C | C | C | C | R | R |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

### 2.3 Competence Requirements

| Role | Required Competencies | Verification Method |
|------|----------------------|---------------------|
| Quality Manager | ISO 9001 knowledge; AI system understanding; regulatory compliance; audit skills | Certification + experience |
| Design Authority | AI/ML technical expertise; system architecture; EU AI Act requirements | Technical degree + training |
| Internal Auditor | Audit methodology; AI system knowledge; interview skills; regulatory requirements | Auditor training + certification |
| Supplier Quality Manager | Supplier management; quality standards; contract management; risk assessment | Experience + training |

---

## 3. QUALITY MANAGEMENT SYSTEM FRAMEWORK

### 3.1 QMS Components Overview

The AI Quality Management System consists of seven integrated pillars aligned with EU AI Act Article 17:

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                    EU AI ACT QUALITY MANAGEMENT SYSTEM                         │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  1. GOVERNANCE & POLICY                                                        │
│     ├─ Quality Policy and Objectives                                           │
│     ├─ AI Governance Committee                                                 │
│     ├─ Resource Management                                                     │
│     └─ Accountability Framework                                                │
│                                                                                │
│  2. DESIGN & DEVELOPMENT CONTROL                                               │
│     ├─ Design Planning and Control                                             │
│     ├─ Design Input and Output                                                 │
│     ├─ Design Verification and Validation                                      │
│     └─ Design Transfer and Review                                              │
│                                                                                │
│  3. DOCUMENTATION & CONFIGURATION MANAGEMENT                                   │
│     ├─ Technical Documentation (Article 11)                                    │
│     ├─ Document Control and Version Management                                 │
│     ├─ Configuration Management                                                │
│     └─ Records Management and Retention                                        │
│                                                                                │
│  4. SUPPLIER & TRAINING MANAGEMENT                                             │
│     ├─ Supplier Qualification and Control                                      │
│     ├─ Purchased Product/Service Verification                                  │
│     ├─ Personnel Competence Requirements                                       │
│     └─ Training Program Management                                             │
│                                                                                │
│  5. PROCESS CONTROL & VALIDATION                                               │
│     ├─ Process Validation and Qualification                                    │
│     ├─ Production and Service Provision Control                                │
│     ├─ Change Control Management                                               │
│     └─ Risk Management Integration                                             │
│                                                                                │
│  6. MONITORING, MEASUREMENT & AUDIT                                            │
│     ├─ Quality Metrics and KPIs                                                │
│     ├─ Internal Audit Program                                                  │
│     ├─ Management Review Process                                               │
│     └─ Post-Market Monitoring Integration                                      │
│                                                                                │
│  7. IMPROVEMENT & CORRECTIVE ACTION                                            │
│     ├─ Corrective Action (CAPA) Process                                        │
│     ├─ Preventive Action Process                                               │
│     ├─ Continuous Improvement Framework                                        │
│     └─ Lessons Learned and Knowledge Management                                │
│                                                                                │
└───────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 QMS Lifecycle Integration

The QMS integrates quality controls at every stage of the AI system lifecycle:

| Lifecycle Phase | QMS Activities | Quality Gates | Deliverables |
|-----------------|----------------|---------------|--------------|
| **1. Planning** | Design planning; resource allocation; competence verification | Design plan approved; resources allocated | Design and Development Plan (DDP) |
| **2. Design** | Design inputs defined; design outputs documented; design review | Design review completed; inputs/outputs traceable | Design Specification; Design Review Records |
| **3. Development** | Code review; testing; configuration management; change control | Code review passed; tests passed; changes approved | Source code; Test results; Change records |
| **4. Verification** | Design verification; validation planning; traceability verification | Verification complete; requirements met | Verification Report; Traceability Matrix |
| **5. Validation** | Clinical/operational validation; user acceptance; performance validation | Validation criteria met; system approved for release | Validation Report; Performance Metrics |
| **6. Transfer** | Documentation review; training completion; deployment readiness | Documentation complete; personnel trained | Technical Documentation Package |
| **7. Production** | Post-market monitoring; change control; CAPA; configuration management | Changes controlled; CAPAs closed; monitoring active | Monitoring Reports; CAPA Records |
| **8. Post-Market** | Continuous monitoring; periodic review; incident management; updates | Reviews completed; incidents managed; updates validated | Review Reports; Incident Records; Update Records |

### 3.3 EU AI Act Article 17 Mapping

This QMS addresses all Article 17 requirements:

| Article 17 Requirement | QMS Implementation | Section Reference |
|------------------------|-------------------|-------------------|
| **(a)** Compliance strategy for Articles 8-15 | QMS framework integrates all technical requirements | Section 3.1, 4.2 |
| **(b)** Design, development, testing techniques | Design control procedures; validation protocols | Section 4.2, 4.12 |
| **(c)** Technical specifications and standards | Design inputs; acceptance criteria; standards adherence | Section 4.2.2 |
| **(d)** Data management procedures | Data governance integration; quality assurance | Section 4.2, Cross-ref PROC-AI-DATA-001 |
| **(e)** Risk management system | Risk management integration | Section 4.5, Cross-ref PROC-AI-RM-001 |
| **(f)** Post-market monitoring system | Monitoring integration; performance tracking | Section 4.11, Cross-ref PROC-AI-PMM-001 |
| **(g)** Incident reporting procedures | Incident management; serious incident reporting | Section 4.11, Cross-ref PROC-AI-INC-001 |
| **(h)** Communication with authorities | Authority interface; notification procedures | Section 4.11 |
| **(i)** Systematic reporting and documentation | Management review; audit reporting | Section 4.9, 4.10 |
| **(j)** Resource management | Competence; training; resource allocation | Section 4.4 |
| **(k)** Accountability framework | Roles and responsibilities; governance | Section 2.1, 4.1 |

### 3.4 Quality Policy Statement

**[Organization Name] AI Quality Policy**

We are committed to developing, deploying, and operating AI systems that:
- Meet or exceed all applicable regulatory requirements including the EU AI Act
- Protect fundamental rights, health, safety, and the environment
- Perform as intended throughout their lifecycle
- Are continuously improved based on feedback and monitoring
- Are developed and maintained by competent, trained personnel
- Are supported by robust processes, documentation, and controls

**Quality Objectives:**
1. **Compliance:** 100% compliance with EU AI Act requirements for all high-risk AI systems
2. **Safety:** Zero serious incidents caused by AI system failures
3. **Performance:** All AI systems meet defined performance criteria throughout lifecycle
4. **Documentation:** 100% completeness and accuracy of technical documentation
5. **Improvement:** Continuous improvement demonstrated through CAPA and audit findings

**Management Commitment:**
- Provide adequate resources for QMS implementation and maintenance
- Ensure personnel competence through training and development
- Review QMS effectiveness annually
- Support continuous improvement culture
- Ensure customer and regulatory compliance

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: QMS ESTABLISHMENT AND GOVERNANCE

#### Step 1.1: Establish QMS Framework (Control QMS-001)

**When:** At initial QMS implementation or major revision

**Who:** Quality Manager + Chief Quality Officer + AI Governance Committee

**How:**

1. **Define QMS Scope and Boundaries**
   - Identify AI systems covered by QMS (all high-risk systems)
   - Define organizational units included in scope
   - Identify regulatory requirements applicable
   - Document exclusions and rationale
   - Document in QMS Scope Statement (DOC-QMS-001)

2. **Establish Quality Policy**
   - Draft quality policy aligned with organizational strategy
   - Define quality objectives (SMART: Specific, Measurable, Achievable, Relevant, Time-bound)
   - Obtain senior management approval
   - Communicate to all personnel
   - Document in Quality Policy (POL-QMS-001)

3. **Design QMS Process Map**
   - Identify core QMS processes
   - Define process interactions and dependencies
   - Establish process owners
   - Define process inputs, outputs, and controls
   - Document in QMS Process Map (DOC-QMS-002)

   **Core QMS Processes:**
   - Design and development control
   - Document and configuration management
   - Supplier management
   - Training and competence
   - Process validation
   - Change control
   - Internal audit
   - Management review
   - CAPA (Corrective and Preventive Action)
   - Continuous improvement

4. **Establish Governance Structure**
   - Define AI Governance Committee charter
   - Appoint committee members
   - Define meeting frequency (minimum quarterly)
   - Establish decision-making authority
   - Document in Governance Charter (DOC-QMS-003)

5. **Allocate Resources**
   - Identify resource requirements (personnel, tools, infrastructure)
   - Assign Quality Manager and support staff
   - Allocate budget for QMS activities
   - Provide necessary tools (document management, audit tools, etc.)
   - Document in Resource Allocation Plan (DOC-QMS-004)

6. **Integrate with Enterprise Risk Management (ERM)**
   - Map QMS risks to enterprise risk register
   - Define escalation thresholds
   - Establish reporting to Board/Executive Committee
   - Align risk appetite statements
   - Document integration in ERM Integration Map (DOC-QMS-005)

7. **Obtain Management Approval**
   - Present QMS framework to senior management
   - Obtain AI Governance Committee approval
   - Secure budget and resource commitment
   - Document approval in QMS Approval Records (REC-QMS-001)

**Evidence Required:**
- QMS Scope Statement (DOC-QMS-001)
- Quality Policy (POL-QMS-001)
- QMS Process Map (DOC-QMS-002)
- Governance Charter (DOC-QMS-003)
- Resource Allocation Plan (DOC-QMS-004)
- ERM Integration Map (DOC-QMS-005)
- QMS Approval Records (REC-QMS-001)

**Timing:** 4-8 weeks for initial establishment

**Quality Check:**
- All high-risk AI systems included in scope
- Quality objectives are SMART
- Resources adequate for scope
- Governance structure has appropriate authority
- Senior management commitment documented

---

#### Step 1.2: Establish Accountability Framework (Control QMS-001)

**When:** During QMS establishment; review annually

**Who:** Quality Manager + Chief Quality Officer

**How:**

1. **Define Roles and Responsibilities**
   - Document all QMS roles (see Section 2.1)
   - Define responsibilities for each role
   - Define authority levels and escalation paths
   - Assign individuals to roles
   - Document in Roles and Responsibilities Matrix (DOC-QMS-006)

2. **Establish Decision-Making Authority**

| Decision Type | Authority Level | Required Approvals |
|---------------|----------------|-------------------|
| QMS policy changes | AI Governance Committee | CQO + Committee Chair |
| Quality procedure approval | Quality Manager | CQO review |
| Design approval | Design Authority | Quality Manager concurrence |
| Supplier qualification | Supplier Quality Manager | Quality Manager approval |
| CAPA closure | CAPA Coordinator | Quality Manager approval |
| Non-conformance disposition | Quality Manager | CQO (for critical non-conformances) |
| Deployment authorization | AI System Owner | Quality Manager + Design Authority |

3. **Establish Segregation of Duties**
   - Design Authority ≠ Design Implementer (for critical systems)
   - Internal Auditor ≠ Process Owner being audited
   - CAPA Coordinator ≠ CAPA Owner (for same CAPA)
   - Document Controller ≠ sole Document Author
   - Document in Segregation of Duties Matrix (DOC-QMS-007)

4. **Define Escalation Procedures**

| Issue Type | Escalation Trigger | Escalation Path | Timeline |
|-----------|-------------------|----------------|----------|
| Critical non-conformance | Affects safety, rights, compliance | Quality Mgr → CQO → AI Gov Committee | < 24 hours |
| Major non-conformance | Affects system performance | Quality Mgr → CQO | < 48 hours |
| Supplier quality issue | Supplier non-conformance impacts delivery | Supplier QM → Quality Mgr → CQO | < 72 hours |
| Overdue CAPA | CAPA > 30 days overdue | CAPA Coord → Quality Mgr → CQO | Weekly |
| Audit finding | Critical finding from internal/external audit | Internal Auditor → Quality Mgr → CQO → AI Gov Committee | < 48 hours |

5. **Communicate Accountability Framework**
   - Present framework to all personnel
   - Provide training on roles and responsibilities
   - Publish accountability framework in accessible location
   - Obtain acknowledgment from role holders
   - Document training in Training Records (REC-TRN-001)

**Evidence Required:**
- Roles and Responsibilities Matrix (DOC-QMS-006)
- Segregation of Duties Matrix (DOC-QMS-007)
- Escalation Procedures (DOC-QMS-008)
- Training Records (REC-TRN-001)

**Timing:** 2-3 weeks

**Quality Check:**
- All QMS roles assigned
- Authority levels appropriate for decision types
- Segregation of duties prevents conflicts of interest
- Escalation paths ensure timely management attention

---

### PHASE 2: DESIGN AND DEVELOPMENT CONTROL

#### Step 2.1: Plan Design and Development (Control QMS-002)

**When:** At start of each AI system development project

**Who:** AI System Owner + Design Authority + Quality Manager

**How:**

1. **Create Design and Development Plan (DDP)**
   - Define design stages and milestones
   - Identify design reviews and verification/validation activities
   - Assign design team members and responsibilities
   - Define resource requirements
   - Establish timeline and schedule
   - Use Design and Development Plan Template (TMP-QMS-002)

2. **Define Design Inputs**
   - Functional requirements (what the system must do)
   - Performance requirements (accuracy, speed, throughput)
   - Safety requirements (harm prevention, fail-safes)
   - Regulatory requirements (EU AI Act Articles 8-15)
   - User needs and use case requirements
   - Interface requirements (APIs, integrations)
   - Data requirements (training data, input data)
   - Risk management requirements
   - Document in Design Input Specification (SPEC-AI-DI-XXX)

   **Design Input Checklist:**
   - ☐ Intended purpose clearly defined
   - ☐ User population identified
   - ☐ Operating environment specified
   - ☐ Performance criteria quantified
   - ☐ Safety requirements identified
   - ☐ EU AI Act requirements mapped
   - ☐ Data requirements specified
   - ☐ Interface requirements defined
   - ☐ Acceptance criteria established
   - ☐ Traceability to user needs verified

3. **Establish Design Acceptance Criteria**
   - Define pass/fail criteria for design verification
   - Define success criteria for design validation
   - Quantify performance thresholds
   - Define test methodologies
   - Document in Design Acceptance Criteria (DOC-QMS-009)

4. **Plan Design Reviews**
   - Schedule design reviews at each phase gate
   - Identify review participants (Design Authority, Quality, Risk, Security, etc.)
   - Define review agenda and entrance/exit criteria
   - Document in Design Review Schedule (DOC-QMS-010)

   **Typical Design Review Gates:**
   - Gate 1: Design Input Review (inputs complete and approved)
   - Gate 2: Preliminary Design Review (architecture and approach)
   - Gate 3: Critical Design Review (detailed design complete)
   - Gate 4: Design Verification Review (testing complete, requirements met)
   - Gate 5: Design Validation Review (validation complete, ready for release)
   - Gate 6: Design Transfer Review (documentation complete, ready for deployment)

5. **Plan Verification and Validation**
   - Define verification activities (does it meet requirements?)
   - Define validation activities (does it meet user needs?)
   - Identify test environments and data sets
   - Plan for bias testing and fairness assessment
   - Plan for robustness and security testing
   - Document in Verification and Validation Plan (PLAN-AI-VV-XXX)

6. **Obtain Approval**
   - Design Authority reviews and approves DDP
   - Quality Manager reviews and approves DDP
   - AI System Owner approves resource commitment
   - Document approvals in DDP Approval Records (REC-QMS-002)

**Evidence Required:**
- Design and Development Plan (PLAN-AI-DD-XXX)
- Design Input Specification (SPEC-AI-DI-XXX)
- Design Acceptance Criteria (DOC-QMS-009)
- Design Review Schedule (DOC-QMS-010)
- Verification and Validation Plan (PLAN-AI-VV-XXX)
- DDP Approval Records (REC-QMS-002)

**Timing:** 2-4 weeks at project initiation

**Quality Check:**
- Design inputs are complete, unambiguous, and verifiable
- Acceptance criteria are quantified and testable
- Design reviews scheduled at appropriate gates
- Verification and validation plans are comprehensive
- Appropriate resources allocated and committed

---

#### Step 2.2: Document Design Outputs (Control QMS-002)

**When:** Throughout design and development phase

**Who:** Design Team + Design Authority

**How:**

1. **Develop Design Output Documentation**

   Design outputs must include:

   **a) System Architecture Specification**
   - Overall system architecture (components, interfaces, data flows)
   - AI model architecture (layers, activations, hyperparameters)
   - Infrastructure architecture (compute, storage, networking)
   - Security architecture (authentication, authorization, encryption)
   - Document in System Architecture Specification (SPEC-AI-ARCH-XXX)

   **b) Detailed Design Specification**
   - Algorithmic design and mathematical formulations
   - Data preprocessing and feature engineering
   - Model training procedure and hyperparameter tuning
   - Inference pipeline and post-processing
   - Error handling and exception management
   - Document in Detailed Design Specification (SPEC-AI-DD-XXX)

   **c) Interface Specifications**
   - API specifications (endpoints, parameters, responses)
   - Data interface specifications (formats, schemas, protocols)
   - User interface specifications (screens, workflows, interactions)
   - External system integration specifications
   - Document in Interface Control Documents (ICD-AI-XXX)

   **d) Data Specifications**
   - Training data requirements and specifications
   - Input data requirements and validation rules
   - Output data specifications and formats
   - Data quality requirements
   - Document in Data Specification (SPEC-AI-DATA-XXX)

   **e) Performance Specifications**
   - Accuracy, precision, recall, F1 targets
   - Latency and throughput requirements
   - Scalability and capacity specifications
   - Availability and reliability targets
   - Document in Performance Specification (SPEC-AI-PERF-XXX)

   **f) Safety and Risk Control Specifications**
   - Safety requirements and controls
   - Risk mitigation controls (from PROC-AI-RM-001)
   - Fail-safe and fallback mechanisms
   - Monitoring and alerting specifications
   - Document in Safety Specification (SPEC-AI-SAFE-XXX)

2. **Ensure Design Output Quality**

   All design outputs must meet these criteria:
   - ✓ **Traceable:** Each design output traces to specific design input(s)
   - ✓ **Complete:** All design inputs addressed by design outputs
   - ✓ **Unambiguous:** Design outputs are clear and interpretable
   - ✓ **Verifiable:** Design outputs can be tested and verified
   - ✓ **Compliant:** Design outputs meet regulatory requirements
   - ✓ **Manufacturable:** Design can be implemented with available resources
   - ✓ **Safe:** Design includes necessary safety controls

3. **Establish Traceability**
   - Create Design Traceability Matrix linking:
     - User needs → Design inputs → Design outputs → Verification tests → Validation tests
   - Ensure bidirectional traceability (forward and backward)
   - Document in Design Traceability Matrix (TRC-AI-XXX)

   **Example Traceability:**

   | User Need | Design Input | Design Output | Verification Test | Validation Test |
   |-----------|--------------|---------------|-------------------|-----------------|
   | Unbiased hiring | DI-001: Fairness requirement | DO-023: Fairness constraint implementation | VT-045: Demographic parity test | VAL-012: User acceptance test |

4. **Conduct Design Output Review**
   - Design Authority reviews all design outputs
   - Quality Manager verifies compliance with standards
   - Risk Manager verifies safety controls included
   - Document review in Design Output Review Records (REC-QMS-003)

5. **Approve Design Outputs**
   - Design Authority approves design outputs for implementation
   - Approvals documented and maintained
   - Design outputs placed under configuration control
   - Document in Design Approval Records (REC-QMS-004)

**Evidence Required:**
- System Architecture Specification (SPEC-AI-ARCH-XXX)
- Detailed Design Specification (SPEC-AI-DD-XXX)
- Interface Control Documents (ICD-AI-XXX)
- Data Specification (SPEC-AI-DATA-XXX)
- Performance Specification (SPEC-AI-PERF-XXX)
- Safety Specification (SPEC-AI-SAFE-XXX)
- Design Traceability Matrix (TRC-AI-XXX)
- Design Output Review Records (REC-QMS-003)
- Design Approval Records (REC-QMS-004)

**Timing:** Throughout design phase; 6-12 weeks typical

**Quality Check:**
- All design inputs addressed by design outputs
- Design outputs meet quality criteria (traceable, complete, unambiguous, verifiable)
- Traceability matrix complete and bidirectional
- Design Authority approval documented
- Design outputs under configuration control

---

#### Step 2.3: Conduct Design Reviews (Control QMS-002)

**When:** At each design phase gate (per Design Review Schedule)

**Who:** Design Authority + Quality Manager + Cross-functional team

**How:**

1. **Prepare for Design Review**
   - Schedule review meeting (minimum 2 weeks notice)
   - Distribute design documentation to reviewers (minimum 1 week before)
   - Prepare design review checklist (CHK-QMS-DR-001)
   - Identify review participants:
     - Design Authority (Chair)
     - Quality Manager
     - Risk Manager
     - Security Expert
     - Data Governance Representative
     - AI System Owner
     - Subject Matter Experts (as needed)

2. **Conduct Design Review Meeting**

   **Design Review Agenda (typical 2-3 hour meeting):**

   - **Opening (10 min)**
     - Review agenda and objectives
     - Confirm attendees and quorum
     - Review action items from previous review

   - **Design Presentation (30 min)**
     - Present design inputs and requirements
     - Present design outputs and architecture
     - Present verification and validation approach
     - Present risk assessment and controls

   - **Detailed Review (90 min)**
     - Review design against inputs (traceability)
     - Review completeness and quality of design outputs
     - Review compliance with EU AI Act requirements
     - Review safety and risk controls
     - Review data governance and quality
     - Identify design gaps or issues
     - Discuss design alternatives if needed

   - **Decision and Action Items (30 min)**
     - Identify action items and owners
     - Determine review outcome:
       - **Approved:** Design proceeds to next phase
       - **Approved with Conditions:** Design proceeds after minor changes
       - **Not Approved:** Design requires rework and re-review
     - Document decisions and rationale

3. **Document Design Review**
   - Complete Design Review Checklist (CHK-QMS-DR-001)
   - Document review attendance
   - Document findings and issues identified
   - Document action items with owners and due dates
   - Document review decision and rationale
   - All reviewers sign Design Review Minutes (REC-QMS-005)

4. **Track Action Items**
   - Assign action items to owners
   - Set due dates for closure
   - Track action items in Design Review Action Tracker (REC-QMS-006)
   - Verify closure before proceeding to next gate

5. **Gate Decision**
   - Design Authority makes final gate decision
   - "Approved" → Proceed to next phase
   - "Approved with Conditions" → Complete action items, then proceed
   - "Not Approved" → Complete rework, schedule re-review
   - Document gate decision in Gate Decision Records (REC-QMS-007)

**Typical Design Review Gates:**

| Gate | Review Name | Purpose | Key Questions | Exit Criteria |
|------|-------------|---------|---------------|---------------|
| 1 | Design Input Review | Verify inputs complete and correct | Are requirements clear, complete, testable? | All inputs approved |
| 2 | Preliminary Design Review | Assess architecture and approach | Is the approach sound? Are risks identified? | Architecture approved |
| 3 | Critical Design Review | Verify detailed design | Does design meet all requirements? | Detailed design approved |
| 4 | Design Verification Review | Confirm testing complete | Are all requirements verified? | All tests passed |
| 5 | Design Validation Review | Confirm validation complete | Does system meet user needs? | Validation successful |
| 6 | Design Transfer Review | Authorize production release | Is documentation complete and correct? | Ready for deployment |

**Evidence Required:**
- Design Review Checklist (CHK-QMS-DR-001) - completed
- Design Review Minutes (REC-QMS-005)
- Design Review Action Tracker (REC-QMS-006)
- Gate Decision Records (REC-QMS-007)
- Design documentation package (specifications, plans, test results)

**Timing:** 2-4 hours per review; multiple reviews throughout design phase

**Quality Check:**
- All required reviewers present (or documented exceptions)
- Design review checklist completed
- All findings documented with action items
- Gate decision documented with rationale
- Action items tracked to closure

---

### PHASE 3: DOCUMENTATION AND CONFIGURATION MANAGEMENT

#### Step 3.1: Establish Document Control System (Control QMS-003)

**When:** At QMS establishment; maintain continuously

**Who:** Document Controller + Quality Manager

**How:**

1. **Implement Document Management System**
   - Select document management platform (SharePoint, Confluence, dedicated QMS software)
   - Configure access controls and permissions
   - Set up document approval workflows
   - Configure version control
   - Enable audit trails
   - Document in Document Management System Configuration (DOC-QMS-011)

2. **Define Document Categories and Numbering**

| Document Category | Prefix | Examples | Retention |
|-------------------|--------|----------|-----------|
| Policies | POL- | POL-AI-001 (AI Policy) | Permanent |
| Standards | STD- | STD-AI-009 (QMS Standard) | 10 years |
| Procedures | PROC- | PROC-AI-QMS-001 (this document) | 10 years |
| Specifications | SPEC- | SPEC-AI-ARCH-001 (Architecture) | 10 years |
| Plans | PLAN- | PLAN-AI-DD-001 (Design Plan) | 10 years |
| Records | REC- | REC-QMS-001 (Approval Record) | 10 years |
| Templates | TMP- | TMP-QMS-001 (Template) | While current + 2 years |
| Forms | FORM- | FORM-QMS-001 (Form) | While current + 2 years |
| Reports | RPT- | RPT-QMS-001 (Audit Report) | 10 years |
| Work Instructions | WI- | WI-QMS-001 (Work Instruction) | 10 years |

3. **Define Document Lifecycle States**

| State | Description | Who Can Edit | Who Can Approve |
|-------|-------------|--------------|----------------|
| **Draft** | Document in development | Author | N/A |
| **In Review** | Document under review | Author (with change tracking) | Reviewers |
| **Approved** | Document approved and effective | No one (create new version) | Document Controller |
| **Obsolete** | Document superseded or withdrawn | No one | Document Controller |
| **Archived** | Document retained for records | No one | N/A |

4. **Establish Document Standards**

   All controlled documents must include:
   - **Header:**
     - Document ID
     - Document title
     - Version number (e.g., v1.0, v2.1)
     - Effective date
     - Author
     - Approver
     - Next review date

   - **Body:**
     - Purpose and scope
     - Procedure or content
     - References to related documents

   - **Footer:**
     - Revision history table
     - Approval signatures
     - Document control statement

   **Document in Document Standards and Templates (DOC-QMS-012)**

5. **Define Document Approval Requirements**

| Document Type | Required Approvals | Approval Authority |
|---------------|-------------------|-------------------|
| Quality Policy | AI Governance Committee + CQO | AI Gov Committee Chair |
| Quality Procedures | Quality Manager + CQO | CQO |
| Design Specifications | Design Authority + Quality Manager | Design Authority |
| Technical Documentation | AI System Owner + Quality Manager | Quality Manager |
| Training Materials | Training Manager | Training Manager |
| Forms and Templates | Process Owner | Quality Manager |

6. **Establish Version Control Rules**
   - **Major version change (X.0):** Significant changes, new approval required
   - **Minor version change (X.Y):** Editorial or clarification changes, Quality Manager approval
   - Version numbering: v1.0, v1.1, v1.2, v2.0, etc.
   - Effective date = approval date
   - Previous versions archived automatically
   - Document in Version Control Procedures (DOC-QMS-013)

7. **Configure Document Access Control**
   - Public: Accessible to all personnel
   - Internal: Accessible to designated personnel only
   - Confidential: Restricted access (named individuals)
   - Define access control matrix
   - Document in Access Control Matrix (DOC-QMS-014)

8. **Train Personnel on Document Control**
   - Train authors on document standards
   - Train approvers on approval workflows
   - Train all personnel on document access and use
   - Document training in Training Records (REC-TRN-001)

**Evidence Required:**
- Document Management System Configuration (DOC-QMS-011)
- Document Standards and Templates (DOC-QMS-012)
- Version Control Procedures (DOC-QMS-013)
- Access Control Matrix (DOC-QMS-014)
- Training Records (REC-TRN-001)

**Timing:** 3-4 weeks for initial setup

**Quality Check:**
- Document management system operational
- All document categories defined with numbering scheme
- Approval workflows configured
- Version control operational
- Personnel trained

---

#### Step 3.2: Maintain Configuration Management (Control QMS-004)

**When:** Throughout AI system lifecycle; continuously

**Who:** Configuration Manager + AI System Owner + Quality Manager

**How:**

1. **Define Configuration Items (CIs)**

   Configuration items subject to control:

   **Software Configuration Items:**
   - Source code (all versions)
   - Training scripts and pipelines
   - Model artifacts (trained models, weights)
   - Configuration files (hyperparameters, settings)
   - Deployment scripts and infrastructure-as-code
   - Third-party libraries and dependencies

   **Documentation Configuration Items:**
   - Design specifications
   - Technical documentation
   - User manuals and instructions for use
   - Validation and verification reports
   - Risk management documentation

   **Data Configuration Items:**
   - Training datasets (including versions)
   - Test datasets
   - Validation datasets
   - Reference data

   Document in Configuration Item List (DOC-QMS-015)

2. **Establish Configuration Baselines**

   A baseline is a formally approved configuration at a specific point in time.

   **Typical Baselines:**
   - **Design Baseline:** Design specifications approved
   - **Development Baseline:** Code and models under version control
   - **Test Baseline:** Testing artifacts and validated system
   - **Production Baseline:** Deployed system configuration

   For each baseline, document:
   - Baseline ID and version
   - Date established
   - List of CIs included with versions
   - Approval authority and date

   Document in Configuration Baseline Records (REC-QMS-008)

3. **Implement Version Control for All CIs**

   **Source Code and Scripts:**
   - Use Git or equivalent version control system
   - All changes committed with meaningful messages
   - Branching strategy defined (e.g., GitFlow)
   - Code review required before merge
   - Tags for releases and baselines

   **Model Artifacts:**
   - Use MLflow, DVC, or equivalent model registry
   - All models versioned and tracked
   - Training parameters and metrics logged
   - Lineage tracked (data → code → model)

   **Datasets:**
   - Use DVC, LakeFS, or equivalent data versioning
   - All datasets versioned with hash/checksum
   - Provenance tracked (source, transformations)
   - Immutable once used for training

   **Documentation:**
   - Document management system provides versioning
   - All versions retained per retention policy

   Document in Version Control Standards (DOC-QMS-016)

4. **Establish Configuration Status Accounting**

   Maintain a Configuration Status Report that includes:
   - Current baseline for each AI system
   - All configuration items and current versions
   - All approved changes and implementation status
   - Any deviations from baseline

   Update monthly and publish to stakeholders

   Document in Configuration Status Report (RPT-QMS-002)

5. **Implement Traceability**

   Maintain traceability from:
   - Requirements → Design → Code → Tests → Deployment
   - Training data → Model version → Validation results → Deployment
   - Issues/CAPAs → Changes → Verification → Deployment

   Use Configuration Traceability Matrix (TRC-QMS-001)

6. **Control Configuration Changes**
   - All changes to CIs must go through Change Control (see Step 6.3)
   - No direct changes to production configurations
   - All changes approved before implementation
   - All changes verified after implementation

   Document in Change Control Procedure (PROC-AI-CHG-001)

**Evidence Required:**
- Configuration Item List (DOC-QMS-015)
- Configuration Baseline Records (REC-QMS-008)
- Version Control Standards (DOC-QMS-016)
- Configuration Status Report (RPT-QMS-002) - monthly
- Configuration Traceability Matrix (TRC-QMS-001)

**Timing:** Ongoing throughout lifecycle

**Quality Check:**
- All CIs identified and under version control
- Baselines established at major milestones
- Configuration status accounting current
- Traceability maintained
- Changes controlled per change control procedure

---

### PHASE 4: SUPPLIER AND TRAINING MANAGEMENT

#### Step 4.1: Qualify and Manage Suppliers (Control QMS-005)

**When:** Before engaging new suppliers; ongoing for existing suppliers

**Who:** Supplier Quality Manager + Procurement + Quality Manager

**How:**

1. **Identify Critical Suppliers**

   Suppliers subject to qualification and control:
   - AI model providers (e.g., OpenAI, Anthropic)
   - Cloud infrastructure providers (e.g., AWS, Azure, GCP)
   - Training data providers
   - Third-party component providers
   - Consulting and development services
   - Testing and validation services

   Criticality assessment:
   - **Critical:** Supplier failure directly impacts AI system compliance or safety
   - **Important:** Supplier failure impacts performance or availability
   - **Standard:** Supplier failure has minor impact

   Document in Critical Supplier List (DOC-QMS-017)

2. **Conduct Supplier Qualification**

   **For Critical Suppliers, verify:**

   **a) Quality Management System**
   - ISO 9001 certification (or equivalent)
   - Quality manual and procedures
   - Audit rights granted

   **b) EU AI Act Compliance**
   - Provider compliance with EU AI Act obligations
   - Technical documentation available
   - Conformity assessment completed (if applicable)
   - Declaration of Conformity provided

   **c) Security and Data Protection**
   - ISO 27001 certification or equivalent
   - GDPR compliance (Data Processing Agreement)
   - Security controls assessment
   - Incident notification procedures

   **d) Technical Capability**
   - Relevant experience and references
   - Technical competence verification
   - Performance metrics and SLAs

   **e) Business Continuity**
   - Financial stability assessment
   - Business continuity and disaster recovery plans
   - Exit and transition provisions

   Document findings in Supplier Qualification Report (RPT-QMS-003)

3. **Approve or Reject Supplier**

   **Approval Criteria:**
   - All critical qualification criteria met
   - Risk assessment acceptable
   - Contract terms acceptable

   **Approval Process:**
   - Supplier Quality Manager recommends approval/rejection
   - Quality Manager reviews and approves
   - For critical suppliers: CQO approval required

   Document in Approved Supplier List (DOC-QMS-018)

4. **Establish Supplier Agreements**

   **Quality Agreement must include:**
   - Scope of products/services
   - Quality requirements and specifications
   - Acceptance criteria
   - Non-conformance handling
   - Right to audit
   - Change notification requirements
   - Incident notification requirements
   - CAPA requirements
   - Documentation requirements
   - Regulatory compliance obligations

   Document in Supplier Quality Agreement (template TMP-QMS-003)

5. **Monitor Supplier Performance**

   **Performance Metrics (typical):**
   - On-time delivery rate (target: >95%)
   - Quality acceptance rate (target: >98%)
   - Incident/defect rate (target: <2%)
   - CAPA closure timeliness (target: 100% on-time)
   - Responsiveness to issues (target: <24 hours)

   **Monitoring Frequency:**
   - Critical suppliers: Monthly scorecard
   - Important suppliers: Quarterly scorecard
   - Standard suppliers: Annual review

   Document in Supplier Performance Scorecard (RPT-QMS-004)

6. **Conduct Supplier Audits**

   **Audit Frequency:**
   - Critical suppliers: Annual audit (on-site or remote)
   - Important suppliers: Biennial audit
   - Standard suppliers: Risk-based (as needed)

   **Audit Scope:**
   - QMS effectiveness
   - EU AI Act compliance
   - Contract compliance
   - Non-conformance and CAPA management
   - Documentation and records

   Document in Supplier Audit Report (RPT-QMS-005)

7. **Manage Supplier Non-Conformances**
   - Document supplier non-conformances
   - Require supplier CAPA
   - Verify CAPA effectiveness
   - Escalate recurring issues
   - Consider supplier re-qualification or termination

   Document in Supplier Non-Conformance Records (REC-QMS-009)

8. **Review and Update Supplier Status**
   - Annual review of all suppliers
   - Update Approved Supplier List
   - Re-qualify suppliers as needed
   - Remove non-performing suppliers

   Document in Supplier Review Minutes (REC-QMS-010)

**Evidence Required:**
- Critical Supplier List (DOC-QMS-017)
- Supplier Qualification Reports (RPT-QMS-003)
- Approved Supplier List (DOC-QMS-018)
- Supplier Quality Agreements
- Supplier Performance Scorecards (RPT-QMS-004)
- Supplier Audit Reports (RPT-QMS-005)
- Supplier Non-Conformance Records (REC-QMS-009)
- Supplier Review Minutes (REC-QMS-010)

**Timing:**
- Initial qualification: 4-8 weeks
- Ongoing monitoring: Monthly/quarterly/annually per supplier tier

**Quality Check:**
- All critical suppliers qualified and approved
- Quality agreements in place
- Performance monitoring active
- Audits conducted per schedule
- Non-conformances managed with CAPA

---

#### Step 4.2: Manage Training and Competence (Control QMS-006)

**When:** Ongoing; training before role assignment and periodically

**Who:** Training Manager + Quality Manager + HR

**How:**

1. **Define Competence Requirements**

   For each QMS role, define:
   - Required education (degrees, certifications)
   - Required experience (years, domain)
   - Required training (courses, certifications)
   - Required skills (technical, soft skills)

   Document in Competence Requirements Matrix (DOC-QMS-019)

   **Example Competence Requirements:**

   | Role | Education | Experience | Training | Skills |
   |------|-----------|------------|----------|--------|
   | AI System Owner | Bachelor's in relevant field | 3+ years AI/ML | EU AI Act training; QMS training | Project management; Technical understanding |
   | Design Authority | Master's in CS/AI or equivalent | 5+ years AI/ML design | EU AI Act training; Design control training | Architecture; Risk assessment; Review skills |
   | Quality Manager | Bachelor's + Quality certification | 3+ years quality management | ISO 9001; EU AI Act; Internal auditor | Audit skills; Process improvement; Documentation |
   | Data Scientist | Master's in relevant field | 2+ years AI/ML development | Bias testing; Fairness; Security | Python/R; ML frameworks; Statistics |

2. **Assess Current Competence**
   - For each individual in a QMS role, assess current competence
   - Identify gaps between required and actual competence
   - Document in Competence Assessment Records (REC-QMS-011)

3. **Develop Training Plan**
   - For each competence gap, plan training to close gap
   - Identify training method:
     - Formal training course (internal or external)
     - On-the-job training with mentor
     - Self-study with assessment
     - Certification program
   - Assign training owner and due date
   - Document in Training Plan (PLAN-TRN-001)

4. **Deliver Training**

   **QMS Training Curriculum (required for all AI personnel):**

   **Module 1: EU AI Act Fundamentals (4 hours)**
   - EU AI Act scope and requirements
   - Risk classification
   - Prohibited practices
   - High-risk requirements (Articles 8-15)
   - Provider and deployer obligations

   **Module 2: Quality Management System (4 hours)**
   - QMS framework and processes
   - Roles and responsibilities
   - Design control
   - Document and configuration management
   - CAPA process

   **Module 3: Role-Specific Training (variable)**
   - Design control (for Design Authority, designers)
   - Internal audit methodology (for auditors)
   - Supplier management (for Supplier Quality Manager)
   - CAPA management (for CAPA Coordinator)

   **Module 4: Technical Training (variable)**
   - Bias detection and mitigation
   - Fairness metrics and testing
   - Robustness and security testing
   - Data governance and quality
   - Risk management

   **Training Delivery Methods:**
   - Instructor-led (in-person or virtual)
   - E-learning modules
   - On-the-job training with mentor
   - Self-study with assessment

5. **Assess Training Effectiveness**

   For each training, assess effectiveness:
   - **Knowledge assessment:** Quiz or exam (target: >80% pass rate)
   - **Skills assessment:** Practical exercise or observation
   - **On-the-job performance:** Supervisor assessment after 90 days

   Document in Training Effectiveness Assessment (REC-QMS-012)

6. **Maintain Training Records**

   For each individual, maintain:
   - Training history (courses completed, dates, scores)
   - Certifications (name, issuer, expiration)
   - Competence assessments (date, assessor, result)
   - Current competence status (qualified/not qualified for each role)

   Document in Training Records Database (REC-TRN-001)

7. **Manage Training Currency**
   - Define training refresh requirements:
     - EU AI Act training: Annual refresh
     - QMS training: Biennial refresh
     - Internal auditor training: Annual refresh
     - Technical training: As needed based on role changes

   - Monitor training expiration and schedule refresher training
   - Document in Training Currency Report (RPT-QMS-006)

8. **Verify Competence Before Critical Activities**
   - Before assigning individual to critical role, verify:
     - ✓ Competence requirements met
     - ✓ Required training completed
     - ✓ Certifications current
     - ✓ Competence assessment passed

   - Document verification in Competence Verification Records (REC-QMS-013)

**Evidence Required:**
- Competence Requirements Matrix (DOC-QMS-019)
- Competence Assessment Records (REC-QMS-011)
- Training Plan (PLAN-TRN-001)
- Training Records Database (REC-TRN-001)
- Training Effectiveness Assessment (REC-QMS-012)
- Training Currency Report (RPT-QMS-006)
- Competence Verification Records (REC-QMS-013)

**Timing:**
- Initial training: Before role assignment
- Ongoing: Per training currency requirements

**Quality Check:**
- Competence requirements defined for all roles
- All personnel in QMS roles have completed required training
- Training effectiveness assessed and acceptable
- Training records complete and current
- Competence verified before critical activities

---

### PHASE 5: CORRECTIVE AND PREVENTIVE ACTIONS

#### Step 5.1: Manage Corrective and Preventive Actions (CAPA) (Control QMS-007)

**When:** When non-conformances, incidents, or improvement opportunities identified

**Who:** CAPA Coordinator + Quality Manager + Process Owners

**How:**

1. **Identify CAPA Triggers**

   CAPAs are initiated when:
   - **Corrective Action Triggers:**
     - Non-conformance identified (internal or external)
     - Audit finding (internal or external)
     - Customer complaint
     - Incident or near-miss
     - Regulatory inspection finding
     - Supplier non-conformance
     - Quality metric threshold breach

   - **Preventive Action Triggers:**
     - Risk assessment identifies preventable risk
     - Trend analysis shows increasing issues
     - Lessons learned from other systems/industries
     - Process improvement opportunity
     - Proactive control enhancement

   Document triggers in CAPA Initiation Checklist (CHK-QMS-CAPA-001)

2. **Initiate CAPA**

   **CAPA Initiation Process:**
   - Anyone can initiate a CAPA by submitting CAPA Request Form (FORM-QMS-CAPA-001)
   - CAPA Coordinator reviews request within 2 business days
   - CAPA Coordinator determines:
     - Is CAPA warranted? (Yes/No)
     - CAPA priority (Critical/High/Medium/Low)
     - CAPA type (Corrective/Preventive)
   - CAPA Coordinator assigns CAPA ID and owner
   - CAPA Coordinator logs in CAPA Register (REC-QMS-014)

   **CAPA Priority Criteria:**

   | Priority | Criteria | Target Closure |
   |----------|----------|---------------|
   | Critical | Affects safety, fundamental rights, or regulatory compliance | 30 days |
   | High | Affects system performance or availability | 60 days |
   | Medium | Affects quality or efficiency | 90 days |
   | Low | Minor issue or improvement opportunity | 180 days |

3. **Investigate Root Cause**

   **Root Cause Analysis Methods:**
   - **5 Whys:** Ask "why" five times to drill down to root cause
   - **Fishbone Diagram (Ishikawa):** Categorize potential causes (People, Process, Technology, Environment, etc.)
   - **Failure Mode and Effects Analysis (FMEA):** Systematic analysis of potential failure modes
   - **Fault Tree Analysis:** Logical diagram of failure paths

   **Root Cause Investigation Process:**
   - CAPA Owner conducts root cause investigation
   - Gather evidence and data
   - Interview personnel involved
   - Analyze processes and systems
   - Apply root cause analysis method
   - Document findings in Root Cause Analysis Report (RPT-QMS-007)

   **Root Cause Validation:**
   - Test hypothesis: If root cause is addressed, will issue be prevented?
   - Verify with data or simulation
   - Obtain Quality Manager approval of root cause conclusion

4. **Develop Corrective/Preventive Action Plan**

   For each root cause, develop action plan:

   **Action Plan Components:**
   - **Immediate containment action:** Prevent immediate recurrence (if corrective action)
   - **Root cause action:** Address underlying cause
   - **Systemic action:** Prevent recurrence in other systems/processes
   - **Verification action:** Verify effectiveness

   **For each action, define:**
   - Action description (what will be done)
   - Action owner (who is responsible)
   - Target completion date
   - Resources required
   - Success criteria (how will effectiveness be measured)

   Document in CAPA Action Plan (PLAN-CAPA-XXX)

5. **Implement CAPA**

   - CAPA Owner implements actions per plan
   - CAPA Coordinator monitors progress
   - CAPA Owner provides status updates (weekly for Critical/High, monthly for Medium/Low)
   - CAPA Coordinator escalates overdue actions:
     - >7 days overdue: Escalate to Quality Manager
     - >14 days overdue: Escalate to CQO
     - >30 days overdue: Escalate to AI Governance Committee

   Document implementation in CAPA Implementation Records (REC-QMS-015)

6. **Verify CAPA Effectiveness**

   After implementation, verify effectiveness:

   **Verification Methods:**
   - **Data analysis:** Verify metrics improved (e.g., defect rate reduced)
   - **Process audit:** Verify process changes implemented and followed
   - **Re-testing:** Re-run tests that previously failed
   - **Monitoring:** Monitor for recurrence over time (e.g., 90 days)

   **Verification Timing:**
   - Immediate verification: Actions implemented correctly
   - Short-term verification (30 days): Initial effectiveness confirmed
   - Long-term verification (90 days): Sustained effectiveness confirmed

   Document in CAPA Effectiveness Verification Report (RPT-QMS-008)

7. **Close CAPA**

   **CAPA Closure Criteria:**
   - ✓ All actions completed
   - ✓ Immediate effectiveness verified
   - ✓ Short-term effectiveness verified (30 days)
   - ✓ Long-term effectiveness verified (90 days) - for Critical/High priority
   - ✓ Documentation complete
   - ✓ Quality Manager approval obtained

   **CAPA Closure Process:**
   - CAPA Owner submits closure request with evidence
   - Quality Manager reviews and approves closure
   - CAPA Coordinator updates CAPA Register
   - CAPA closed and archived

   Document in CAPA Closure Records (REC-QMS-016)

8. **Analyze CAPA Trends**
   - Monthly CAPA trend analysis
   - Identify recurring issues or patterns
   - Identify process improvement opportunities
   - Report to management review

   Document in CAPA Trend Analysis Report (RPT-QMS-009)

**Evidence Required:**
- CAPA Request Form (FORM-QMS-CAPA-001)
- CAPA Register (REC-QMS-014)
- Root Cause Analysis Report (RPT-QMS-007)
- CAPA Action Plan (PLAN-CAPA-XXX)
- CAPA Implementation Records (REC-QMS-015)
- CAPA Effectiveness Verification Report (RPT-QMS-008)
- CAPA Closure Records (REC-QMS-016)
- CAPA Trend Analysis Report (RPT-QMS-009)

**Timing:**
- CAPA initiation: Within 2 business days of identification
- Root cause analysis: Within 2 weeks
- Action plan: Within 1 week of root cause completion
- Implementation: Per priority (30/60/90/180 days)
- Verification: 30-90 days after implementation

**Quality Check:**
- Root cause thoroughly investigated and validated
- Actions address root cause, not just symptoms
- Effectiveness verification objective and documented
- CAPA closed only when sustained effectiveness demonstrated
- Trends analyzed and reported

---

### PHASE 6: MONITORING, AUDIT, AND REVIEW

#### Step 6.1: Conduct Internal Audits (Control QMS-008)

**When:** Per annual audit schedule; ad-hoc as needed

**Who:** Internal Auditor + Quality Manager

**How:**

1. **Develop Annual Audit Plan**

   **Audit Plan Components:**
   - Audit schedule (which processes/systems audited when)
   - Audit scope for each audit
   - Audit team assignments
   - Audit criteria (standards, procedures, requirements)
   - Estimated audit duration

   **Audit Frequency:**
   - All QMS processes: At least annually
   - High-risk processes: Semi-annually or quarterly
   - New processes: Within 6 months of implementation
   - Processes with previous findings: Follow-up within 6 months

   Document in Annual Internal Audit Plan (PLAN-AUDIT-YEAR)

2. **Plan Individual Audit**

   **Pre-Audit Activities:**
   - Define audit scope and objectives
   - Identify audit criteria (procedures, standards, regulations)
   - Assemble audit team (lead auditor + auditors)
   - Schedule audit (notify auditee at least 2 weeks in advance)
   - Review previous audit findings
   - Prepare audit checklist (CHK-QMS-AUDIT-XXX)
   - Request documentation from auditee

   Document in Audit Plan (PLAN-AUDIT-XXX)

3. **Conduct Opening Meeting**

   **Opening Meeting Agenda (30 minutes):**
   - Introduce audit team
   - Confirm audit scope and objectives
   - Review audit schedule and logistics
   - Explain audit process and expectations
   - Answer auditee questions
   - Document attendance in Audit Opening Meeting Minutes (REC-QMS-017)

4. **Perform Audit**

   **Audit Activities:**

   **a) Document Review**
   - Review procedures, work instructions, specifications
   - Review records, reports, logs
   - Verify documentation current and approved
   - Verify documentation meets requirements

   **b) Interviews**
   - Interview process owners and personnel
   - Verify understanding of procedures
   - Verify training and competence
   - Ask about challenges and issues

   **c) Observation**
   - Observe process execution
   - Verify compliance with procedures
   - Verify controls operating as designed
   - Identify improvement opportunities

   **d) Testing**
   - Sample records for completeness and accuracy
   - Trace transactions through process
   - Verify calculations and data integrity

   **Audit Evidence Collection:**
   - Document all findings with objective evidence
   - Take notes during interviews and observations
   - Collect copies of relevant records
   - Photograph issues (if applicable)
   - Document in Audit Working Papers (REC-QMS-018)

5. **Classify Audit Findings**

   **Finding Types:**

   | Finding Type | Definition | Example |
   |--------------|------------|---------|
   | **Critical Non-Conformance** | Major deviation from requirement; affects safety, rights, or compliance | Design not approved before implementation |
   | **Major Non-Conformance** | Significant deviation from requirement; affects system quality | Design review not conducted |
   | **Minor Non-Conformance** | Isolated deviation from requirement; minimal impact | Design review attendance not documented |
   | **Observation** | Potential issue or improvement opportunity; not a requirement deviation | Design review process could be streamlined |
   | **Positive Finding** | Exemplary practice worth sharing | Excellent traceability implementation |

6. **Conduct Closing Meeting**

   **Closing Meeting Agenda (1 hour):**
   - Present audit findings (non-conformances and observations)
   - Discuss evidence and rationale
   - Allow auditee to respond and provide context
   - Agree on finding classification (if possible)
   - Discuss CAPA expectations and timeline
   - Confirm next steps
   - Document in Audit Closing Meeting Minutes (REC-QMS-019)

7. **Issue Audit Report**

   **Audit Report Contents:**
   - Executive summary
   - Audit scope and objectives
   - Audit criteria
   - Audit team and participants
   - Audit findings (by severity)
   - Positive findings and best practices
   - Recommendations
   - Required CAPA timeline

   **Audit Report Distribution:**
   - Auditee
   - Quality Manager
   - CQO
   - AI Governance Committee (if critical findings)

   Document in Internal Audit Report (RPT-QMS-010)

8. **Track CAPA to Closure**
   - All non-conformances require CAPA (per Step 5.1)
   - Critical findings: CAPA within 30 days
   - Major findings: CAPA within 60 days
   - Minor findings: CAPA within 90 days
   - Internal Auditor verifies CAPA effectiveness
   - Findings closed only when CAPA verified effective

   Document in Audit Finding Tracker (REC-QMS-020)

9. **Conduct Follow-Up Audit**
   - For critical or major findings, conduct follow-up audit within 6 months
   - Verify CAPA implemented and effective
   - Verify issue has not recurred
   - Document in Follow-Up Audit Report (RPT-QMS-011)

**Evidence Required:**
- Annual Internal Audit Plan (PLAN-AUDIT-YEAR)
- Individual Audit Plans (PLAN-AUDIT-XXX)
- Audit Checklists (CHK-QMS-AUDIT-XXX)
- Audit Opening Meeting Minutes (REC-QMS-017)
- Audit Working Papers (REC-QMS-018)
- Audit Closing Meeting Minutes (REC-QMS-019)
- Internal Audit Reports (RPT-QMS-010)
- Audit Finding Tracker (REC-QMS-020)
- Follow-Up Audit Reports (RPT-QMS-011)

**Timing:**
- Annual audit plan: Created in Q4 for following year
- Individual audits: Per schedule (all processes at least annually)
- Audit duration: 1-5 days depending on scope
- Audit report: Within 2 weeks of closing meeting

**Quality Check:**
- Audit plan covers all QMS processes
- Auditors independent of audited process
- Audit findings supported by objective evidence
- Audit report issued timely
- CAPAs tracked to closure with effectiveness verification

---

#### Step 6.2: Conduct Management Review (Control QMS-009)

**When:** Quarterly minimum; annually comprehensive

**Who:** AI Governance Committee + CQO + Quality Manager

**How:**

1. **Prepare Management Review**

   **Data Collection (Quality Manager):**
   - QMS performance metrics and KPIs (see Section 6)
   - Internal audit results and trends
   - External audit results (if applicable)
   - CAPA status and trends
   - Non-conformance trends
   - Customer/user feedback and complaints
   - Supplier performance
   - Training completion and effectiveness
   - Resource adequacy
   - Changes in regulatory requirements
   - Post-market monitoring data
   - Incident reports
   - Continuous improvement initiatives

   **Prepare Management Review Report (RPT-QMS-012):**
   - Executive summary
   - QMS performance against objectives
   - Trends and analysis
   - Issues and risks
   - Recommendations for improvement
   - Resource needs

2. **Conduct Management Review Meeting**

   **Meeting Participants:**
   - AI Governance Committee members
   - Chief Quality Officer (Chair)
   - Quality Manager (Presenter)
   - AI System Owners
   - Other stakeholders as needed

   **Meeting Agenda (2-3 hours):**

   **1. Opening (15 min)**
   - Review agenda and objectives
   - Review action items from previous review

   **2. QMS Performance Review (60 min)**
   - Present QMS metrics and KPIs
   - Review progress against quality objectives
   - Present audit results and findings
   - Present CAPA status and trends
   - Present non-conformance trends
   - Present customer/user feedback
   - Present supplier performance

   **3. Compliance Review (30 min)**
   - Review EU AI Act compliance status
   - Review regulatory changes and impact
   - Review post-market monitoring data
   - Review incident reports

   **4. Resource Review (15 min)**
   - Review resource adequacy
   - Review training completion and effectiveness
   - Identify resource gaps and needs

   **5. Improvement Review (30 min)**
   - Review continuous improvement initiatives
   - Identify improvement opportunities
   - Prioritize improvement projects

   **6. Decisions and Action Items (30 min)**
   - Make decisions on:
     - Quality objective updates
     - Resource allocation
     - Process improvements
     - Policy changes
     - Escalations
   - Assign action items with owners and due dates
   - Set date for next review

3. **Document Management Review**

   **Management Review Minutes must include:**
   - Date, attendees, agenda
   - Summary of inputs reviewed
   - Key findings and trends
   - Decisions made
   - Action items (owner, due date)
   - Date of next review

   Document in Management Review Minutes (REC-QMS-021)

4. **Track Action Items**
   - Quality Manager tracks action items from review
   - Status updates provided to AI Governance Committee
   - Overdue items escalated
   - Document in Management Review Action Tracker (REC-QMS-022)

5. **Communicate Outcomes**
   - Communicate key decisions and actions to organization
   - Update quality objectives (if changed)
   - Communicate resource allocations
   - Communicate process improvements

   Document in Management Review Communication (REC-QMS-023)

6. **Review Frequency and Triggers**

   **Scheduled Reviews:**
   - Quarterly management review (all QMS performance)
   - Annual comprehensive review (includes strategic planning)

   **Ad-Hoc Reviews (triggered by):**
   - Critical audit finding
   - Serious incident
   - Regulatory inspection finding
   - Major regulatory change
   - Significant organizational change

**Evidence Required:**
- Management Review Report (RPT-QMS-012)
- Management Review Minutes (REC-QMS-021)
- Management Review Action Tracker (REC-QMS-022)
- Management Review Communication (REC-QMS-023)

**Timing:**
- Preparation: 2 weeks before meeting
- Meeting: 2-3 hours quarterly
- Minutes: Within 1 week of meeting
- Action item tracking: Ongoing

**Quality Check:**
- All required inputs reviewed
- Key trends identified and discussed
- Decisions documented with rationale
- Action items assigned with owners and due dates
- Outcomes communicated to organization

---

#### Step 6.3: Implement Change Control (Control QMS-013)

**When:** Whenever changes proposed to AI systems, processes, or documentation

**Who:** Change Control Board + Quality Manager + AI System Owner

**How:**

1. **Establish Change Control Board (CCB)**

   **CCB Membership:**
   - Quality Manager (Chair)
   - AI System Owner
   - Design Authority
   - Risk Manager
   - Security Representative
   - Other SMEs as needed

   **CCB Responsibilities:**
   - Review and approve/reject change requests
   - Assess change impact
   - Prioritize changes
   - Ensure changes properly validated
   - Ensure documentation updated

   Document in CCB Charter (DOC-QMS-020)

2. **Categorize Changes**

   | Change Category | Definition | Approval Required | Re-validation Required |
   |----------------|------------|-------------------|----------------------|
   | **Critical Change** | Affects safety, fundamental rights, or core functionality | CCB + AI Gov Committee | Full validation |
   | **Major Change** | Affects system performance or compliance | CCB | Targeted validation |
   | **Minor Change** | Bug fix, performance optimization, no functional impact | Quality Manager | Verification testing |
   | **Documentation Change** | Updates to documentation only (no system change) | Document Controller | Documentation review |

3. **Submit Change Request**

   **Change Request Process:**
   - Anyone can submit a Change Request Form (FORM-QMS-CHG-001)
   - Change requester completes:
     - Change description
     - Change rationale (why needed)
     - Proposed solution
     - Impacted systems/processes/documents
     - Proposed category (Critical/Major/Minor/Doc)
     - Proposed implementation date

   - Quality Manager reviews request within 3 business days
   - Quality Manager assigns Change ID and schedules CCB review

4. **Assess Change Impact**

   **Impact Assessment (performed by CCB or delegated SMEs):**

   **a) Technical Impact**
   - Which systems/components affected?
   - Does change affect system performance?
   - Does change affect system safety?
   - What testing is required?

   **b) Regulatory Impact**
   - Does change affect EU AI Act compliance?
   - Does change affect intended purpose?
   - Does change affect risk classification?
   - Does change require re-conformity assessment?

   **c) Documentation Impact**
   - Which documents must be updated?
   - Technical documentation updates required?
   - User documentation updates required?

   **d) Risk Impact**
   - Does change introduce new risks?
   - Does change affect existing risks?
   - Does change affect risk controls?
   - Is risk assessment update required?

   **e) Validation Impact**
   - What validation testing is required?
   - Can existing validation be leveraged?
   - What new validation is needed?

   **f) Resource Impact**
   - What resources required (time, personnel, budget)?
   - What is the implementation timeline?

   Document in Change Impact Assessment (DOC-QMS-021)

5. **Review and Approve Change**

   **CCB Review Meeting:**
   - Review change request and impact assessment
   - Discuss risks and benefits
   - Confirm change category
   - Decide: Approve / Approve with conditions / Defer / Reject
   - If approved:
     - Assign implementation owner
     - Set target completion date
     - Define validation requirements
     - Define documentation requirements

   Document in CCB Meeting Minutes (REC-QMS-024)

   **Approval Thresholds:**
   - Critical change: CCB + AI Governance Committee
   - Major change: CCB
   - Minor change: Quality Manager (can delegate to CCB)
   - Documentation change: Document Controller

6. **Implement Change**

   **Implementation Process:**
   - Implementation owner executes change per approved plan
   - All code changes go through version control
   - All changes implemented in development/test environment first
   - Changes not deployed to production until validation complete

   Document in Change Implementation Records (REC-QMS-025)

7. **Validate Change**

   **Validation Requirements:**

   | Change Category | Validation Required |
   |----------------|---------------------|
   | Critical | Full validation per V&V Plan; includes: Unit tests, Integration tests, System tests, Performance tests, Safety tests, Bias/fairness tests, User acceptance tests |
   | Major | Targeted validation: Tests affected by change + Regression tests to ensure no unintended impacts |
   | Minor | Verification testing: Unit tests + Regression tests for affected area |
   | Documentation | Documentation review and approval |

   Document in Change Validation Report (RPT-QMS-013)

8. **Update Documentation**

   **Documentation Updates:**
   - Technical documentation (design specs, architecture)
   - User documentation (instructions for use, user manual)
   - Quality documentation (procedures, work instructions)
   - Risk documentation (risk register, risk assessments)
   - Configuration documentation (configuration baselines)

   - All documentation updated before change deployed to production
   - All documentation version incremented
   - All documentation approved per document control

9. **Deploy Change**

   **Deployment Authorization:**
   - Implementation owner confirms:
     - ✓ Change implemented as approved
     - ✓ Validation complete and successful
     - ✓ Documentation updated and approved
     - ✓ Training completed (if required)
     - ✓ Deployment plan reviewed and approved

   - Quality Manager authorizes deployment
   - For critical changes: AI System Owner + Design Authority authorization required

   Document in Change Deployment Authorization (REC-QMS-026)

10. **Verify Change Effectiveness**

    **Post-Deployment Verification:**
    - Monitor system for specified period (e.g., 30 days)
    - Verify change achieved intended benefit
    - Verify no unintended consequences
    - Close change request when verified effective

    Document in Change Effectiveness Verification (REC-QMS-027)

**Evidence Required:**
- CCB Charter (DOC-QMS-020)
- Change Request Form (FORM-QMS-CHG-001)
- Change Impact Assessment (DOC-QMS-021)
- CCB Meeting Minutes (REC-QMS-024)
- Change Implementation Records (REC-QMS-025)
- Change Validation Report (RPT-QMS-013)
- Change Deployment Authorization (REC-QMS-026)
- Change Effectiveness Verification (REC-QMS-027)

**Timing:**
- Change request review: Within 3 business days
- CCB review: Within 2 weeks of submission
- Implementation: Per approved timeline
- Critical changes: Expedited as needed

**Quality Check:**
- All changes reviewed and approved by appropriate authority
- Impact assessment comprehensive
- Validation appropriate for change category
- Documentation updated before deployment
- Effectiveness verified post-deployment

---

### PHASE 7: CONTINUOUS IMPROVEMENT

#### Step 7.1: Implement Continuous Improvement (Control QMS-010)

**When:** Ongoing; formal review quarterly

**Who:** Quality Manager + AI System Owners + All Personnel

**How:**

1. **Establish Continuous Improvement Culture**

   **Cultural Elements:**
   - Encourage all personnel to identify improvement opportunities
   - Reward and recognize improvements
   - Provide resources for improvement initiatives
   - Leadership commitment and participation
   - Celebrate successes

   Document in Continuous Improvement Policy (POL-QMS-002)

2. **Identify Improvement Opportunities**

   **Sources of Improvement Ideas:**
   - CAPA analysis and trends
   - Internal audit findings
   - Management review discussions
   - Employee suggestions
   - Customer/user feedback
   - Industry best practices
   - Regulatory guidance
   - Benchmarking
   - Process metrics and KPIs

   **Improvement Opportunity Log:**
   - Anyone can submit improvement idea
   - Use Improvement Opportunity Form (FORM-QMS-IMP-001)
   - Quality Manager maintains Improvement Opportunity Log (REC-QMS-028)

3. **Prioritize Improvement Initiatives**

   **Prioritization Criteria:**

   | Criterion | Weight | Scoring (1-5) |
   |-----------|--------|---------------|
   | Impact on quality objectives | 30% | 1=Minimal, 5=Significant |
   | Impact on compliance | 25% | 1=Minimal, 5=Critical |
   | Resource efficiency | 20% | 1=High cost, 5=Low cost |
   | Implementation ease | 15% | 1=Very difficult, 5=Easy |
   | Time to benefit | 10% | 1=>1 year, 5=<1 month |

   **Priority Score** = Weighted sum

   **Prioritization Process:**
   - Quality Manager scores each opportunity quarterly
   - Present to management review for approval
   - Top 3-5 initiatives selected for implementation

   Document in Improvement Prioritization Matrix (DOC-QMS-022)

4. **Plan Improvement Initiative**

   For each approved initiative:
   - Define improvement objective (SMART goal)
   - Identify improvement owner
   - Define improvement approach (methodology)
   - Define resource requirements
   - Define timeline and milestones
   - Define success metrics

   Document in Improvement Initiative Plan (PLAN-IMP-XXX)

   **Common Improvement Methodologies:**
   - DMAIC (Define, Measure, Analyze, Improve, Control)
   - PDCA (Plan, Do, Check, Act)
   - Kaizen (continuous incremental improvement)
   - Lean (eliminate waste)
   - Six Sigma (reduce variation)

5. **Implement Improvement**

   - Improvement owner executes improvement plan
   - Quality Manager monitors progress
   - Status updates provided monthly
   - Changes implemented per change control process

   Document in Improvement Implementation Records (REC-QMS-029)

6. **Measure Improvement Effectiveness**

   - Measure baseline metrics before improvement
   - Implement improvement
   - Measure metrics after improvement
   - Calculate improvement delta
   - Verify improvement sustained over time (e.g., 90 days)

   Document in Improvement Effectiveness Report (RPT-QMS-014)

7. **Standardize Improvement**

   If improvement successful:
   - Update procedures and work instructions
   - Train personnel on new process
   - Update relevant documentation
   - Communicate improvement to organization
   - Consider applying to other systems/processes

   Document in Improvement Standardization Records (REC-QMS-030)

8. **Share Lessons Learned**

   - Document lessons learned from improvement initiative
   - Share with organization (newsletters, meetings, wiki)
   - Share best practices across AI systems
   - Consider external sharing (conferences, publications)

   Document in Lessons Learned Repository (REC-QMS-031)

**Evidence Required:**
- Continuous Improvement Policy (POL-QMS-002)
- Improvement Opportunity Form (FORM-QMS-IMP-001)
- Improvement Opportunity Log (REC-QMS-028)
- Improvement Prioritization Matrix (DOC-QMS-022)
- Improvement Initiative Plan (PLAN-IMP-XXX)
- Improvement Implementation Records (REC-QMS-029)
- Improvement Effectiveness Report (RPT-QMS-014)
- Improvement Standardization Records (REC-QMS-030)
- Lessons Learned Repository (REC-QMS-031)

**Timing:**
- Opportunity identification: Continuous
- Prioritization: Quarterly
- Implementation: 3-6 months typical
- Effectiveness measurement: 90 days post-implementation

**Quality Check:**
- Improvement opportunities actively solicited and logged
- Prioritization objective and documented
- Improvement initiatives have clear objectives and success criteria
- Effectiveness objectively measured
- Successful improvements standardized

---

## 5. CONTROL MECHANISMS

This section defines the operational controls that ensure QMS effectiveness.

### 5.1 Control Summary

| Control ID | Control Name | Control Type | Frequency | Owner | Evidence |
|-----------|--------------|--------------|-----------|-------|----------|
| QMS-001 | QMS Establishment and Maintenance | Preventive | Annual review | Quality Manager | QMS framework docs, review records |
| QMS-002 | QMS Design Control | Preventive | Per project | Design Authority | Design plans, reviews, approvals |
| QMS-003 | QMS Document Control | Preventive | Continuous | Document Controller | Document logs, version control |
| QMS-004 | QMS Configuration Management | Preventive | Continuous | Configuration Manager | Configuration baselines, change logs |
| QMS-005 | QMS Supplier Management | Preventive | Annual review | Supplier Quality Manager | Supplier qualifications, audits, scorecards |
| QMS-006 | QMS Training Management | Preventive | Continuous | Training Manager | Training records, competence assessments |
| QMS-007 | QMS CAPA | Corrective | Per occurrence | CAPA Coordinator | CAPA records, effectiveness verification |
| QMS-008 | QMS Internal Audit | Detective | Annual minimum | Internal Auditor | Audit reports, finding tracker |
| QMS-009 | QMS Management Review | Detective | Quarterly | CQO | Review minutes, action tracker |
| QMS-010 | QMS Continuous Improvement | Corrective | Quarterly | Quality Manager | Improvement plans, effectiveness reports |
| QMS-011 | QMS Metrics and KPIs | Detective | Monthly | Quality Manager | KPI dashboards, trend reports |
| QMS-012 | QMS Process Validation | Preventive | Per process | Process Owner | Validation protocols, validation reports |
| QMS-013 | QMS Change Control | Preventive | Per change | Change Control Board | Change requests, approvals, validation |
| QMS-014 | QMS Records Management | Preventive | Continuous | Document Controller | Records inventory, retention schedule |

### 5.2 Control Testing

Each control must be tested for effectiveness:

**Testing Frequency:**
- High-severity controls (QMS-001, QMS-002, QMS-005, QMS-007, QMS-008, QMS-009, QMS-012, QMS-013): Annually
- Medium-severity controls (QMS-003, QMS-004, QMS-006, QMS-010, QMS-011, QMS-014): Biennially

**Testing Methods:**
- Design effectiveness testing: Verify control designed appropriately
- Operating effectiveness testing: Verify control operating as designed
- Sample testing: Test sample of transactions/records
- Observation: Observe control execution
- Re-performance: Re-execute control to verify results

Document control testing in Control Testing Results (RPT-QMS-015)

---

## 6. KEY PERFORMANCE INDICATORS AND METRICS

### 6.1 QMS Effectiveness Metrics

| Metric ID | Metric Name | Calculation | Target | Frequency | Owner |
|-----------|-------------|-------------|--------|-----------|-------|
| KPI-QMS-001 | QMS Compliance Rate | (Compliant items / Total items audited) × 100% | >95% | Monthly | Quality Manager |
| KPI-QMS-002 | Audit Finding Closure Rate | (Findings closed on-time / Total findings) × 100% | >90% | Monthly | Quality Manager |
| KPI-QMS-003 | CAPA Closure Timeliness | (CAPAs closed on-time / Total CAPAs) × 100% | >85% | Monthly | CAPA Coordinator |
| KPI-QMS-004 | Non-Conformance Rate | (Non-conformances / Total opportunities) × 100% | <2% | Monthly | Quality Manager |
| KPI-QMS-005 | Document Currency Rate | (Current documents / Total documents) × 100% | 100% | Monthly | Document Controller |
| KPI-QMS-006 | Training Completion Rate | (Personnel trained / Personnel requiring training) × 100% | 100% | Monthly | Training Manager |
| KPI-QMS-007 | Supplier Quality Rate | (Acceptable supplier deliveries / Total deliveries) × 100% | >98% | Monthly | Supplier Quality Manager |
| KPI-QMS-008 | Design Review Timeliness | (Reviews completed on-time / Total reviews) × 100% | >90% | Monthly | Design Authority |
| KPI-QMS-009 | Change Control Cycle Time | Average days from change request to deployment | <45 days | Monthly | Quality Manager |
| KPI-QMS-010 | Management Review Action Closure | (Actions closed on-time / Total actions) × 100% | >90% | Quarterly | Quality Manager |

### 6.2 Quality Objective Metrics

| Objective | Metric | Target | Measurement Frequency |
|-----------|--------|--------|----------------------|
| Compliance | EU AI Act compliance rate for high-risk systems | 100% | Quarterly |
| Safety | Serious incidents caused by AI system failures | 0 | Monthly |
| Performance | AI systems meeting performance criteria throughout lifecycle | 100% | Monthly |
| Documentation | Technical documentation completeness and accuracy | 100% | Quarterly |
| Improvement | Number of improvement initiatives implemented | ≥4 per year | Quarterly |

### 6.3 Process Metrics

See Appendix A for detailed KPI library with 15+ additional process-specific metrics.

---

## 7. DOCUMENTATION REQUIREMENTS

### 7.1 QMS Documentation Hierarchy

```
Level 1: Quality Manual
   └─ Defines overall QMS approach and scope

Level 2: Quality Procedures
   ├─ PROC-AI-QMS-001 (this document)
   ├─ PROC-AI-RM-001 (Risk Management)
   ├─ PROC-AI-DATA-001 (Data Governance)
   └─ [Other procedures]

Level 3: Work Instructions
   ├─ WI-QMS-001 (Design Review Conduct)
   ├─ WI-QMS-002 (Audit Conduct)
   └─ [Other work instructions]

Level 4: Templates and Forms
   ├─ Templates (TMP-QMS-XXX)
   └─ Forms (FORM-QMS-XXX)

Level 5: Records
   ├─ Design records
   ├─ Audit records
   ├─ CAPA records
   ├─ Training records
   └─ [Other records]
```

### 7.2 Required Documentation by Procedure Phase

| Phase | Required Documents | Templates to Use |
|-------|-------------------|------------------|
| Phase 1: QMS Establishment | QMS Scope Statement, Quality Policy, QMS Process Map, Governance Charter, Resource Allocation Plan | TMP-QMS-001 |
| Phase 2: Design Control | Design Plan, Design Specifications, Design Review Records, Traceability Matrix | TMP-QMS-002, TMP-QMS-004 |
| Phase 3: Documentation | Document Register, Configuration Baselines, Configuration Status Report | TMP-QMS-005 |
| Phase 4: Supplier & Training | Supplier Qualification Reports, Training Records, Competence Assessments | TMP-QMS-003, TMP-QMS-006 |
| Phase 5: CAPA | CAPA Register, Root Cause Analysis, CAPA Plans, Effectiveness Verification | TMP-QMS-007 |
| Phase 6: Monitoring & Audit | Audit Reports, Management Review Minutes, Change Records | TMP-QMS-008, TMP-QMS-009 |
| Phase 7: Improvement | Improvement Plans, Effectiveness Reports, Lessons Learned | TMP-QMS-010 |

### 7.3 Records Retention

All QMS records retained for **10 years** minimum per EU AI Act Article 12(1).

Retention starts from:
- Date of last deployment (for design and validation records)
- Date of decommissioning (for operational records)
- Date of CAPA closure (for CAPA records)
- Date of audit (for audit records)

---

## 8. QUALITY ASSURANCE

### 8.1 Quality Checks by Procedure Step

| Procedure Step | Quality Check | Acceptance Criteria |
|---------------|---------------|---------------------|
| 1.1 QMS Establishment | Framework completeness | All required elements defined; management approval documented |
| 2.1 Design Planning | Design plan completeness | All inputs defined; acceptance criteria quantified; reviews scheduled |
| 2.2 Design Outputs | Output quality criteria | All outputs traceable, complete, unambiguous, verifiable |
| 2.3 Design Reviews | Review effectiveness | All reviewers participated; findings documented; gate decision documented |
| 3.1 Document Control | Document control effectiveness | All documents versioned; approvals documented; access controlled |
| 3.2 Configuration Management | CM effectiveness | All CIs under version control; baselines established; traceability maintained |
| 4.1 Supplier Management | Supplier qualification adequacy | Critical suppliers qualified; agreements in place; performance monitored |
| 4.2 Training Management | Training effectiveness | All personnel trained; competence verified; records maintained |
| 5.1 CAPA Management | CAPA effectiveness | Root causes addressed; effectiveness verified; timely closure |
| 6.1 Internal Audit | Audit quality | Findings objective; evidence-based; timely; CAPA tracked |
| 6.2 Management Review | Review effectiveness | All inputs reviewed; decisions documented; actions tracked |
| 6.3 Change Control | Change control effectiveness | All changes approved; validated; documented; effective |
| 7.1 Continuous Improvement | Improvement effectiveness | Improvements measured; effective; standardized; shared |

### 8.2 Self-Assessment

**Annual QMS Self-Assessment:**
- Quality Manager conducts comprehensive QMS self-assessment annually
- Assess against ISO 9001:2015 requirements
- Assess against EU AI Act Article 17 requirements
- Identify gaps and improvement opportunities
- Document in QMS Self-Assessment Report (RPT-QMS-016)

---

## 9. NON-COMPLIANCE HANDLING

### 9.1 Non-Conformance Classification

| Severity | Definition | Examples | Required Action |
|----------|------------|----------|----------------|
| **Critical** | Non-conformance affecting safety, fundamental rights, or regulatory compliance | Design not approved before deployment; Validation not performed; Serious incident not reported | Immediate containment; CAPA within 30 days; Escalate to AI Gov Committee |
| **Major** | Significant non-conformance affecting system quality or performance | Design review not conducted; Documentation incomplete; Training not completed | Containment action; CAPA within 60 days; Escalate to Quality Manager |
| **Minor** | Isolated non-conformance with minimal impact | Missing signature on record; Late document review; Missing training record | Correction; CAPA within 90 days (if recurring) |

### 9.2 Non-Conformance Process

1. **Identify Non-Conformance**
   - Anyone can identify and report non-conformance
   - Use Non-Conformance Report Form (FORM-QMS-NCR-001)
   - Quality Manager reviews and classifies severity

2. **Immediate Containment**
   - For Critical/Major non-conformances, implement immediate containment
   - Prevent non-conforming product/process from proceeding
   - Quarantine affected items
   - Notify affected stakeholders

3. **Disposition Decision**
   - Quality Manager determines disposition:
     - **Use as-is:** Accept non-conformance (with approval)
     - **Rework:** Correct non-conformance
     - **Scrap:** Reject and discard
     - **Return:** Return to supplier (if supplier-caused)

   - Critical non-conformances require CQO approval for disposition

4. **Initiate CAPA**
   - All Critical and Major non-conformances require CAPA
   - Minor non-conformances require CAPA if recurring (>2 occurrences)
   - Follow CAPA process (Step 5.1)

5. **Document and Close**
   - Document non-conformance and disposition
   - Verify correction/rework completed
   - Verify CAPA effectiveness
   - Close non-conformance report

   Document in Non-Conformance Register (REC-QMS-032)

---

## 10. COMPLIANCE AND AUDIT

### 10.1 Regulatory Requirements Mapping

This procedure implements the following EU AI Act requirements:

| EU AI Act Article | Requirement | Implemented By | Evidence |
|------------------|-------------|----------------|----------|
| **Article 17** | Quality management system | Entire procedure | QMS framework documentation |
| **Article 17(a)** | Compliance strategy for Articles 8-15 | Section 3.3 | Article 17 mapping table |
| **Article 17(b)** | Design, development, testing techniques | Steps 2.1-2.3, 6.3 | Design control procedures |
| **Article 17(c)** | Technical specifications | Step 2.2 | Design specifications |
| **Article 17(d)** | Data management procedures | Cross-ref PROC-AI-DATA-001 | Data governance integration |
| **Article 17(e)** | Risk management system | Cross-ref PROC-AI-RM-001 | Risk management integration |
| **Article 17(f)** | Post-market monitoring | Cross-ref PROC-AI-PMM-001 | PMM integration |
| **Article 17(g)** | Incident reporting | Cross-ref PROC-AI-INC-001 | Incident management integration |
| **Article 17(h)** | Authority communication | Step 6.2 | Management review, incident reporting |
| **Article 17(i)** | Systematic reporting | Steps 6.1, 6.2 | Internal audit, management review |
| **Article 17(j)** | Resource management | Steps 1.2, 4.2 | Resource allocation, training |
| **Article 17(k)** | Accountability framework | Steps 1.2, 2.1 | Roles and responsibilities |

### 10.2 Audit Preparation

**For External Audits or Regulatory Inspections:**

1. **Pre-Audit Preparation Checklist**
   - ☐ QMS documentation current and approved
   - ☐ All procedures implemented and followed
   - ☐ Records complete and accessible
   - ☐ Training records current
   - ☐ Internal audits completed per schedule
   - ☐ Management reviews completed per schedule
   - ☐ CAPAs closed or on-track
   - ☐ Non-conformances addressed
   - ☐ Metrics demonstrate QMS effectiveness

2. **Audit Room Setup**
   - Dedicated room for auditors
   - Access to document management system
   - Sample records prepared
   - Personnel available for interviews
   - Audit schedule confirmed

3. **Personnel Preparation**
   - Brief personnel on audit expectations
   - Remind personnel to answer honestly
   - Identify subject matter experts for each area
   - Assign escort for auditors

### 10.3 Audit Response

**During Audit:**
- Provide requested documentation promptly
- Answer questions honestly and completely
- Take notes of auditor questions and observations
- Clarify misunderstandings professionally
- Do not volunteer information beyond what is asked
- Escalate concerns to Quality Manager immediately

**Post-Audit:**
- Review audit findings for accuracy
- Provide factual corrections if needed
- Initiate CAPA for all findings
- Track CAPA to closure with evidence
- Prepare for follow-up audit

---

## 11. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial procedure development |
|  |  |  |  |

---

## 12. APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | [Name] | Quality Manager | __________ | ________ |
| **Reviewed By** | [Name] | Chief Quality Officer | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Reviewed By** | [Name] | AI Technical Lead | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## 13. DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Public/Internal/Confidential]
**Distribution:** Quality Manager, AI System Owners, AI Governance Committee, Design Authority, All QMS Personnel
**Retention:** 10 years (per EU AI Act Article 12)
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]
**Document Location:** [Document Management System Path]

---

## APPENDIX A: KPI LIBRARY

This appendix provides a comprehensive library of 25+ Key Performance Indicators for QMS monitoring across all QMS processes.

### A.1 Overall QMS Effectiveness KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-QMS-001 | QMS Compliance Rate | Overall compliance with QMS procedures | (Compliant items / Total items audited) × 100% | >95% | Monthly |
| KPI-QMS-002 | Quality Objective Achievement | Achievement of quality objectives | (Objectives met / Total objectives) × 100% | 100% | Quarterly |
| KPI-QMS-003 | QMS Maturity Score | Maturity assessment score | Weighted average of process maturity scores (1-5 scale) | >4.0 | Annually |
| KPI-QMS-004 | Employee QMS Satisfaction | Personnel satisfaction with QMS | Survey score (1-10 scale) | >7.0 | Annually |
| KPI-QMS-005 | QMS Cost as % of Revenue | QMS operational cost efficiency | (QMS costs / Revenue) × 100% | <2% | Quarterly |

### A.2 Design Control KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-DES-001 | Design Review Timeliness | Design reviews completed on schedule | (Reviews on-time / Total reviews) × 100% | >90% | Monthly |
| KPI-DES-002 | Design Approval Cycle Time | Time from design complete to approval | Average days from design submission to approval | <30 days | Monthly |
| KPI-DES-003 | Design Change Rate | Changes after design approval | (Design changes / Total designs) × 100% | <10% | Quarterly |
| KPI-DES-004 | Design Traceability Completeness | Completeness of design traceability | (Traced requirements / Total requirements) × 100% | 100% | Per project |
| KPI-DES-005 | Design Defect Density | Defects found in design review | Defects per design review | <5 | Per review |

### A.3 Document Control KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-DOC-001 | Document Currency Rate | Documents current and approved | (Current documents / Total documents) × 100% | 100% | Monthly |
| KPI-DOC-002 | Document Approval Cycle Time | Time to approve documents | Average days from submission to approval | <14 days | Monthly |
| KPI-DOC-003 | Document Access Compliance | Document access control compliance | (Compliant access / Total access attempts) × 100% | 100% | Monthly |
| KPI-DOC-004 | Obsolete Document Rate | Rate of obsolete documents still in use | (Obsolete docs used / Total docs used) × 100% | 0% | Quarterly |
| KPI-DOC-005 | Document Search Efficiency | Ability to find documents quickly | Average time to locate document (minutes) | <5 min | Quarterly |

### A.4 Configuration Management KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-CFG-001 | Configuration Item Coverage | CIs under configuration control | (Controlled CIs / Total CIs) × 100% | 100% | Monthly |
| KPI-CFG-002 | Baseline Currency | Baselines current and accurate | (Current baselines / Total baselines) × 100% | 100% | Monthly |
| KPI-CFG-003 | Configuration Audit Pass Rate | Configuration audits passed | (Passed audits / Total audits) × 100% | >95% | Quarterly |
| KPI-CFG-004 | Unauthorized Change Rate | Changes made without approval | (Unauthorized changes / Total changes) × 100% | 0% | Monthly |
| KPI-CFG-005 | Traceability Accuracy | Accuracy of configuration traceability | (Accurate traces / Total traces verified) × 100% | >98% | Quarterly |

### A.5 Supplier Management KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-SUP-001 | Supplier Quality Rate | Acceptable supplier deliveries | (Acceptable deliveries / Total deliveries) × 100% | >98% | Monthly |
| KPI-SUP-002 | Supplier On-Time Delivery | Deliveries on schedule | (On-time deliveries / Total deliveries) × 100% | >95% | Monthly |
| KPI-SUP-003 | Supplier CAPA Closure Rate | Supplier CAPAs closed on-time | (CAPAs closed on-time / Total supplier CAPAs) × 100% | >90% | Monthly |
| KPI-SUP-004 | Supplier Audit Pass Rate | Supplier audits with no major findings | (Passed audits / Total audits) × 100% | >80% | Annually |
| KPI-SUP-005 | Critical Supplier Qualification Rate | Critical suppliers fully qualified | (Qualified suppliers / Total critical suppliers) × 100% | 100% | Quarterly |

### A.6 Training KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-TRN-001 | Training Completion Rate | Personnel completed required training | (Trained personnel / Personnel requiring training) × 100% | 100% | Monthly |
| KPI-TRN-002 | Training Effectiveness Score | Training assessment pass rate | (Passed assessments / Total assessments) × 100% | >85% | Quarterly |
| KPI-TRN-003 | Training Currency Rate | Personnel with current training | (Current training / Total personnel) × 100% | 100% | Monthly |
| KPI-TRN-004 | Training Cycle Time | Time from training need to completion | Average days from identification to completion | <60 days | Quarterly |
| KPI-TRN-005 | On-the-Job Performance | Post-training performance rating | Average supervisor rating (1-5 scale) | >4.0 | Quarterly |

### A.7 CAPA KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-CAPA-001 | CAPA Closure Timeliness | CAPAs closed on-time | (CAPAs closed on-time / Total CAPAs) × 100% | >85% | Monthly |
| KPI-CAPA-002 | CAPA Effectiveness Rate | CAPAs verified effective | (Effective CAPAs / Total closed CAPAs) × 100% | >95% | Quarterly |
| KPI-CAPA-003 | CAPA Recurrence Rate | Issues recurring after CAPA | (Recurring issues / Total CAPAs) × 100% | <5% | Quarterly |
| KPI-CAPA-004 | CAPA Cycle Time | Time from initiation to closure | Average days from CAPA initiation to closure | <90 days | Monthly |
| KPI-CAPA-005 | Critical CAPA Backlog | Open critical CAPAs | Number of open critical CAPAs | 0 | Weekly |

### A.8 Internal Audit KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-AUD-001 | Audit Plan Completion | Audits completed per plan | (Completed audits / Planned audits) × 100% | 100% | Quarterly |
| KPI-AUD-002 | Audit Finding Closure Rate | Findings closed on-time | (Findings closed on-time / Total findings) × 100% | >90% | Monthly |
| KPI-AUD-003 | Critical Finding Rate | Critical findings per audit | Critical findings / Total audits | <0.5 | Quarterly |
| KPI-AUD-004 | Audit Cycle Time | Time from planning to report | Average days from audit start to report issuance | <30 days | Quarterly |
| KPI-AUD-005 | Repeat Finding Rate | Findings repeated from prior audits | (Repeat findings / Total findings) × 100% | <10% | Quarterly |

### A.9 Management Review KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-MGR-001 | Management Review Timeliness | Reviews conducted on schedule | (On-time reviews / Total reviews) × 100% | 100% | Quarterly |
| KPI-MGR-002 | Review Action Closure Rate | Actions closed on-time | (Actions closed on-time / Total actions) × 100% | >90% | Quarterly |
| KPI-MGR-003 | Review Attendance Rate | Required attendees present | (Attendees present / Required attendees) × 100% | >90% | Per review |
| KPI-MGR-004 | Decision Implementation Rate | Decisions implemented | (Implemented decisions / Total decisions) × 100% | 100% | Quarterly |
| KPI-MGR-005 | Review Input Completeness | Required inputs provided | (Inputs provided / Required inputs) × 100% | 100% | Per review |

### A.10 Change Control KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-CHG-001 | Change Approval Cycle Time | Time to approve changes | Average days from request to approval | <14 days | Monthly |
| KPI-CHG-002 | Change Implementation Cycle Time | Time from approval to deployment | Average days from approval to production | <45 days | Monthly |
| KPI-CHG-003 | Change Success Rate | Changes deployed without rollback | (Successful changes / Total changes) × 100% | >95% | Monthly |
| KPI-CHG-004 | Emergency Change Rate | Emergency changes (bypassing normal process) | (Emergency changes / Total changes) × 100% | <5% | Monthly |
| KPI-CHG-005 | Change-Related Incidents | Incidents caused by changes | Incidents per 100 changes | <2 | Monthly |

### A.11 Continuous Improvement KPIs

| KPI ID | KPI Name | Definition | Calculation | Target | Reporting Frequency |
|--------|----------|------------|-------------|--------|-------------------|
| KPI-IMP-001 | Improvement Initiative Completion | Initiatives completed | (Completed initiatives / Total initiatives) × 100% | >80% | Quarterly |
| KPI-IMP-002 | Improvement ROI | Return on improvement investment | (Benefit - Cost) / Cost × 100% | >100% | Per initiative |
| KPI-IMP-003 | Employee Improvement Participation | Personnel submitting improvement ideas | (Submitters / Total personnel) × 100% | >25% | Annually |
| KPI-IMP-004 | Improvement Idea Implementation Rate | Ideas implemented | (Implemented ideas / Total ideas) × 100% | >30% | Quarterly |
| KPI-IMP-005 | Time to Benefit | Time from idea to measurable benefit | Average days from approval to benefit realization | <180 days | Per initiative |

---

## APPENDIX B: GLOSSARY

This glossary defines key terms used throughout this procedure and related EU AI Act compliance documentation.

| Term | Definition |
|------|------------|
| **AI Governance Committee** | Senior leadership body responsible for oversight of AI systems and QMS, typically including executives from business, technology, legal, risk, and compliance functions |
| **AI System** | A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments (EU AI Act Article 3(1)) |
| **Baseline** | A formally approved version of a configuration item or set of configuration items, established at a specific point in time and used as reference for future changes |
| **Change Control Board (CCB)** | Cross-functional team responsible for reviewing and approving changes to AI systems, processes, or documentation |
| **Competence** | Demonstrated ability to apply knowledge and skills to achieve intended results |
| **Configuration Item (CI)** | Any component of an AI system (software, data, documentation) that is placed under configuration management control |
| **Configuration Management** | Technical and organizational activities for establishing and maintaining consistency of a product's attributes with its requirements and product configuration information throughout its lifecycle |
| **Conformity Assessment** | Process of demonstrating whether EU AI Act requirements for an AI system have been fulfilled (EU AI Act Article 3(24)) |
| **Continuous Improvement** | Recurring activity to enhance performance, based on measurement, analysis, and action |
| **Corrective Action (CA)** | Action to eliminate the cause of a detected non-conformance or other undesirable situation to prevent recurrence |
| **CAPA** | Corrective Action and Preventive Action - systematic approach to investigating, addressing, and preventing quality issues |
| **Critical Non-Conformance** | Non-conformance that affects safety, fundamental rights, or regulatory compliance; requires immediate action |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority (EU AI Act Article 3(4)) |
| **Design Authority** | Individual or body with authority to approve AI system designs and design changes |
| **Design Control** | Systematic process for translating user needs into design inputs, design outputs, verification, validation, and design transfer |
| **Design Input** | Physical and performance requirements of an AI system that form the basis for design |
| **Design Output** | Results of design and development activities (specifications, drawings, software, documentation) |
| **Design Verification** | Confirmation by examination and provision of objective evidence that design outputs meet design inputs |
| **Design Validation** | Confirmation by examination and provision of objective evidence that the AI system meets user needs and intended use |
| **Document Control** | Process for ensuring documents are reviewed, approved, current, and available where needed |
| **High-Risk AI System** | An AI system that is listed in Annex III of the EU AI Act or intended to be used as a safety component of a product covered by EU harmonization legislation (EU AI Act Article 6) |
| **Internal Audit** | Systematic, independent, and documented process for obtaining objective evidence to determine the extent to which QMS requirements are fulfilled |
| **Key Performance Indicator (KPI)** | Measurable value that demonstrates effectiveness of achieving key objectives |
| **Lessons Learned** | Knowledge gained through experience that can be applied to improve future performance |
| **Management Review** | Periodic evaluation by top management of QMS suitability, adequacy, effectiveness, and alignment with strategic direction |
| **Non-Conformance** | Non-fulfillment of a requirement |
| **Preventive Action (PA)** | Action to eliminate the cause of a potential non-conformance or other undesirable potential situation to prevent occurrence |
| **Provider** | Any natural or legal person, public authority, agency or other body that develops an AI system or general-purpose AI model, or has an AI system developed, and places it on the market or puts it into service under its own name or trademark (EU AI Act Article 3(3)) |
| **Quality** | Degree to which a set of inherent characteristics of an object fulfills requirements |
| **Quality Management System (QMS)** | Formalized system that documents processes, procedures, and responsibilities for achieving quality policies and objectives |
| **Quality Objective** | Goal related to quality, derived from quality policy and aligned with organizational strategy |
| **Quality Policy** | Overall intentions and direction of an organization related to quality, formally expressed by top management |
| **Root Cause** | Fundamental reason for the occurrence of a problem; addressing root cause prevents recurrence |
| **Serious Incident** | Any incident or malfunctioning of an AI system that directly or indirectly leads to death, serious damage to health, serious and irreversible disruption of critical infrastructure, breaches of fundamental rights, or serious harm to property or environment (EU AI Act Article 3(49)) |
| **Supplier** | External organization that provides products, components, or services used in AI systems |
| **Traceability** | Ability to trace relationships between requirements, design, implementation, testing, and validation |
| **Validation** | Confirmation through objective evidence that the requirements for a specific intended use have been fulfilled |
| **Verification** | Confirmation through objective evidence that specified requirements have been fulfilled |
| **Version Control** | Management of changes to documents, software, or other collections of information, tracking revisions and maintaining history |

---

## APPENDIX C: CROSS-REFERENCES TO OTHER PROCEDURES

This appendix maps relationships between this QMS procedure and other EU AI Act compliance procedures.

### C.1 Procedure Dependencies

```
                      ┌─────────────────────────────┐
                      │  POL-AI-001                 │
                      │  AI Governance Policy       │
                      │  (Parent Policy)            │
                      └─────────────┬───────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         │                          │                          │
         ▼                          ▼                          ▼
┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐
│ PROC-AI-CLS-001    │   │ PROC-AI-QMS-001    │   │ PROC-AI-GOV-001    │
│ Classification     │──▶│ Quality Management │◀──│ Governance         │
│                    │   │ (THIS PROCEDURE)   │   │                    │
└────────────────────┘   └──────────┬─────────┘   └────────────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         │                          │                          │
         ▼                          ▼                          ▼
┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐
│ PROC-AI-RM-001     │   │ PROC-AI-DATA-001   │   │ PROC-AI-DOC-001    │
│ Risk Management    │◀─▶│ Data Governance    │◀─▶│ Documentation      │
└────────────────────┘   └────────────────────┘   └────────────────────┘
         │                          │                          │
         ▼                          ▼                          ▼
┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐
│ PROC-AI-PMM-001    │   │ PROC-AI-INC-001    │   │ PROC-AI-VENDOR-001 │
│ Post-Market Mon.   │◀──│ Incident Mgmt      │   │ Vendor Management  │
└────────────────────┘   └────────────────────┘   └────────────────────┘
                                                            │
                                                            ▼
                                                   ┌────────────────────┐
                                                   │ PROC-AI-CHG-001    │
                                                   │ Change Control     │
                                                   └────────────────────┘
```

### C.2 QMS Integration Points with Other Procedures

| Other Procedure | Integration Point | QMS Section | Interface Description |
|----------------|-------------------|-------------|----------------------|
| **PROC-AI-CLS-001** (Classification) | Risk classification determines QMS rigor | Step 2.1 | High-risk classification triggers full QMS requirements |
| **PROC-AI-RM-001** (Risk Management) | Risk controls integrated into design | Step 2.2, 4.5 | Risk mitigation controls designed and validated through QMS |
| **PROC-AI-DATA-001** (Data Governance) | Data quality requirements | Step 2.1, 2.2 | Data specifications part of design inputs; data quality monitored |
| **PROC-AI-DOC-001** (Documentation) | Technical documentation | Step 3.1, 3.2 | Technical documentation controlled through document control |
| **PROC-AI-PMM-001** (Post-Market Monitoring) | Performance monitoring | Step 6.2 | PMM data feeds management review and CAPA |
| **PROC-AI-INC-001** (Incident Management) | Incident handling | Step 5.1, 6.2 | Incidents trigger CAPA; reported in management review |
| **PROC-AI-VENDOR-001** (Vendor Management) | Supplier quality | Step 4.1 | Supplier management integrated into QMS |
| **PROC-AI-CHG-001** (Change Control) | Change management | Step 6.3 | Change control integrated into QMS |
| **PROC-AI-TST-001** (Testing) | Verification and validation | Step 2.3, 4.12 | Testing procedures part of design control |
| **PROC-AI-TRN-001** (Training) | Personnel competence | Step 4.2 | Training managed through QMS |

### C.3 Document Cross-References

| Document from This Procedure | Referenced By | Purpose |
|------------------------------|---------------|---------|
| Quality Policy (POL-QMS-001) | All procedures | Defines overall quality approach |
| Design Control Procedures (Steps 2.1-2.3) | PROC-AI-DOC-001, PROC-AI-TST-001 | Design outputs feed technical documentation and testing |
| CAPA Process (Step 5.1) | PROC-AI-INC-001, PROC-AI-PMM-001 | Incidents and monitoring findings trigger CAPA |
| Supplier Management (Step 4.1) | PROC-AI-VENDOR-001 | Vendor procedure references QMS supplier requirements |
| Change Control (Step 6.3) | PROC-AI-CHG-001 | Change control procedure implements QMS requirements |

### C.4 Template Cross-References

| Template from This Procedure | Used By | Purpose |
|------------------------------|---------|---------|
| TMP-QMS-002 (Design Plan) | PROC-AI-DOC-001 | Design plan feeds technical documentation |
| TMP-QMS-007 (CAPA) | PROC-AI-INC-001, PROC-AI-PMM-001 | CAPA template used for incidents and monitoring findings |
| TMP-QMS-008 (Internal Audit) | All procedures | Audit template used to audit all procedures |
| TMP-QMS-009 (Management Review) | All procedures | Management review covers all procedures |

---

## APPENDIX D: QUICK REFERENCE CARD

### QMS Core Processes Quick Reference

| Process | Owner | Frequency | Key Deliverable |
|---------|-------|-----------|----------------|
| **QMS Establishment** | Quality Manager | Annual review | QMS Framework Documentation |
| **Design Control** | Design Authority | Per project | Approved Design Specifications |
| **Document Control** | Document Controller | Continuous | Current Document Repository |
| **Configuration Management** | Configuration Manager | Continuous | Configuration Baselines |
| **Supplier Management** | Supplier Quality Manager | Annual review | Approved Supplier List |
| **Training Management** | Training Manager | Continuous | Training Records |
| **CAPA** | CAPA Coordinator | Per occurrence | CAPA Effectiveness Verification |
| **Internal Audit** | Internal Auditor | Annual minimum | Audit Reports |
| **Management Review** | CQO | Quarterly | Review Minutes and Actions |
| **Change Control** | Change Control Board | Per change | Approved Changes |
| **Continuous Improvement** | Quality Manager | Quarterly | Improvement Effectiveness Reports |

### Design Control Phase Gates

| Gate | Name | Purpose | Required Before Proceeding |
|------|------|---------|---------------------------|
| 1 | Design Input Review | Verify requirements complete | All inputs approved and traceable |
| 2 | Preliminary Design Review | Assess architecture | Architecture approved; risks identified |
| 3 | Critical Design Review | Verify detailed design | Design outputs complete and traceable |
| 4 | Design Verification Review | Confirm testing complete | All requirements verified |
| 5 | Design Validation Review | Confirm validation complete | Validation successful; system meets user needs |
| 6 | Design Transfer Review | Authorize production release | Documentation complete; ready for deployment |

### CAPA Priority and Timing

| Priority | Criteria | Target Closure | Escalation (if overdue) |
|----------|----------|----------------|------------------------|
| Critical | Safety, rights, or compliance impact | 30 days | Quality Manager (immediately) |
| High | Performance or availability impact | 60 days | Quality Manager (7 days overdue) |
| Medium | Quality or efficiency impact | 90 days | Quality Manager (14 days overdue) |
| Low | Minor issue or improvement | 180 days | CQO (30 days overdue) |

### Key Contact Information

| Role | Contact | When to Contact |
|------|---------|-----------------|
| Quality Manager | [Email/Phone] | QMS questions, non-conformances, audit coordination |
| Chief Quality Officer | [Email/Phone] | Critical issues, management review, QMS strategy |
| Design Authority | [Email/Phone] | Design approvals, design reviews |
| Document Controller | [Email/Phone] | Document access, version questions |
| CAPA Coordinator | [Email/Phone] | CAPA initiation, CAPA status |
| Internal Auditor | [Email/Phone] | Audit questions, audit findings |
| Supplier Quality Manager | [Email/Phone] | Supplier issues, supplier qualifications |

### Key QMS Metrics Targets

| Metric | Target | Escalation Threshold |
|--------|--------|---------------------|
| QMS Compliance Rate | >95% | <90% |
| CAPA Closure Timeliness | >85% | <75% |
| Audit Finding Closure Rate | >90% | <80% |
| Training Completion Rate | 100% | <95% |
| Supplier Quality Rate | >98% | <95% |
| Design Review Timeliness | >90% | <85% |
| Document Currency Rate | 100% | <98% |

### Common Non-Conformance Severities

| Severity | Example | Required Action |
|----------|---------|----------------|
| Critical | Design not approved before deployment | Immediate containment; CAPA within 30 days; Escalate to AI Gov Committee |
| Major | Design review not conducted | Containment; CAPA within 60 days; Escalate to Quality Manager |
| Minor | Missing signature on record | Correction; CAPA if recurring |

---

## APPENDIX E: QMS INTEGRATION DIAGRAM

This diagram shows how the QMS integrates across the AI system lifecycle and with other compliance procedures.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                        EU AI ACT COMPLIANCE FRAMEWORK                                    │
│                   WITH QUALITY MANAGEMENT SYSTEM INTEGRATION                             │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│  AI LIFECYCLE      │ PLAN │ DESIGN │ DEVELOP │  TEST  │ DEPLOY │ OPERATE │ DECOMMISSION│
│  PHASE             │──────│────────│─────────│────────│────────│─────────│─────────────││
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │  ◐   │   ●    │    ●    │   ●    │   ●    │    ●    │      ●      │
│  │ QMS-001      │  │Start │Primary │ Primary │Primary │Primary │ Primary │   Primary   │
│  │ QMS Framework│  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │      │   ●    │    ●    │   ●    │   ●    │    ◐    │      ◐      │
│  │ QMS-002      │  │      │Primary │ Primary │Primary │ Gate   │  Update │   Review    │
│  │ Design       │  │      │        │         │        │        │         │             │
│  │ Control      │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │  ●   │   ●    │    ●    │   ●    │   ●    │    ●    │      ●      │
│  │ QMS-003      │  │Setup │ Create │ Update  │ Update │ Update │ Maintain│  Archive    │
│  │ Document     │  │      │        │         │        │        │         │             │
│  │ Control      │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │      │   ◐    │    ●    │   ●    │   ●    │    ●    │      ●      │
│  │ QMS-004      │  │      │ Setup  │ Primary │Primary │Primary │ Primary │   Baseline  │
│  │ Configuration│  │      │        │         │        │        │         │   Archive   │
│  │ Management   │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │  ●   │   ◐    │    ◐    │   ◐    │   ◐    │    ●    │      ◐      │
│  │ QMS-005      │  │Qualify│Monitor │ Monitor │Monitor │Monitor │ Primary │   Review    │
│  │ Supplier     │  │      │        │         │        │        │         │             │
│  │ Management   │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │  ●   │   ●    │    ●    │   ●    │   ●    │    ●    │      ◐      │
│  │ QMS-006      │  │Train │ Train  │  Train  │ Train  │ Train  │ Refresh │   Final     │
│  │ Training     │  │      │        │         │        │        │         │  Training   │
│  │ Management   │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │      │   ◐    │    ◐    │   ◐    │   ◐    │    ●    │      ◐      │
│  │ QMS-007      │  │      │As-need │ As-need │As-need │As-need │ Primary │   As-need   │
│  │ CAPA         │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │  ●   │   ◐    │    ◐    │   ◐    │   ●    │    ●    │      ●      │
│  │ QMS-008      │  │Setup │As-need │ As-need │As-need │ Gate   │ Primary │   Final     │
│  │ Internal     │  │      │        │         │        │        │         │   Audit     │
│  │ Audit        │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │  ●   │   ◐    │    ◐    │   ◐    │   ●    │    ●    │      ●      │
│  │ QMS-009      │  │Setup │Quarterly│Quarterly│Quarter │ Gate   │Quarterly│   Final     │
│  │ Management   │  │      │        │         │        │        │         │   Review    │
│  │ Review       │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                    │      │        │         │        │        │         │             │
│  ┌──────────────┐  │      │   ◐    │    ◐    │   ◐    │   ◐    │    ●    │      ◐      │
│  │ QMS-013      │  │      │As-need │ Primary │Primary │Primary │ Primary │   As-need   │
│  │ Change       │  │      │        │         │        │        │         │             │
│  │ Control      │  │      │        │         │        │        │         │             │
│  └──────────────┘  │      │        │         │        │        │         │             │
│                                                                                          │
│  Legend: ● Primary QMS activity in this phase   ◐ Supporting QMS activity              │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘

QMS INTEGRATION WITH OTHER EU AI ACT PROCEDURES:

┌─────────────────────────────────────────────────────────────────────────┐
│                      PROC-AI-QMS-001 (This Procedure)                   │
│                   Central Hub for Quality Management                    │
└────────────────────────────────┬────────────────────────────────────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        ▼                        ▼                        ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ PROC-AI-      │       │ PROC-AI-      │       │ PROC-AI-      │
│ RM-001        │◀─────▶│ DATA-001      │◀─────▶│ DOC-001       │
│ Risk Mgmt     │       │ Data Gov      │       │ Documentation │
└───────────────┘       └───────────────┘       └───────────────┘
        │                        │                        │
        └────────────────────────┼────────────────────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        ▼                        ▼                        ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ PROC-AI-      │       │ PROC-AI-      │       │ PROC-AI-      │
│ PMM-001       │       │ INC-001       │       │ VENDOR-001    │
│ Post-Market   │◀─────▶│ Incident      │       │ Vendor Mgmt   │
│ Monitoring    │       │ Management    │       │               │
└───────────────┘       └───────────────┘       └───────────────┘

QMS provides:
→ Design control framework
→ Document control standards
→ Configuration management
→ CAPA process for all procedures
→ Internal audit of all procedures
→ Management review integrating all procedures
→ Change control for all changes
→ Training for all personnel
→ Continuous improvement culture
```

---

**END OF PROCEDURE PROC-AI-QMS-001**

**Total Document Length:** 1,843 lines
**Total Word Count:** ~28,500 words
**Appendices:** 5 comprehensive appendices
**Controls Covered:** All 14 QMS controls (QMS-001 through QMS-014)
**EU AI Act Articles:** Full Article 17 implementation
**Integration:** Complete integration with Articles 8-15 requirements
