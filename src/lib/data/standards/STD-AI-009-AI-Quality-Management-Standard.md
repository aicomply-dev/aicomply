# AI Quality Management Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-009  
**Standard Title:** AI Quality Management Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** Quality Director  
**Approved By:** AI Governance Committee Chair  
**Status:** Draft  
**Classification:** Internal Use Only

---

## TABLE OF CONTENTS

1. [Document History](#document-history)
2. [Objective](#objective)
3. [Scope and Applicability](#scope-and-applicability)
4. [Control Standard](#control-standard)
5. [Supporting Procedures](#supporting-procedures)
6. [Compliance](#compliance)
7. [Roles and Responsibilities](#roles-and-responsibilities)
8. [Exceptions](#exceptions)
9. [Enforcement](#enforcement)
10. [Key Performance Indicators (KPIs)](#key-performance-indicators-kpis)
11. [Training Requirements](#training-requirements)
12. [Definitions](#definitions)
13. [Link with AI Act and ISO42001](#link-with-ai-act-and-iso42001)

---

## DOCUMENT HISTORY

| Version | Date | Author | Changes | Approval Date | Approved By |
|---------|------|--------|---------|---------------|-------------|
| 0.1 | 2025-07-08 | Robert Martinez, Quality Director | Initial draft | - | - |
| 0.2 | 2025-07-22 | Robert Martinez, Quality Director | Added Article 17 details | - | - |
| 0.3 | 2025-08-01 | Robert Martinez, Quality Director | Incorporated stakeholder feedback | - | - |
| 1.0 | 2025-08-01 | Robert Martinez, Quality Director | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for establishing and maintaining a Quality Management System (QMS) for high-risk AI systems in compliance with EU AI Act Article 17.

**Primary Goals:**
- Establish comprehensive QMS framework per Article 17(1)
- Implement systematic design and development controls per Article 17(1)(b)
- Implement quality assurance and testing per Article 17(1)(c)(d)
- Implement corrective and preventive actions (CAPA) per Article 17(1)(a)
- Ensure QMS effectiveness through management review and continuous improvement

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems (EU AI Act Article 17)
- All lifecycle phases (design, development, testing, deployment, operation)

### 2.2 Recommended Applicability

This standard is **recommended** for:
- All AI systems for quality assurance
- Limited-risk and minimal-risk AI systems (voluntary QMS)

### 2.3 QMS Coverage

- Quality policies and objectives
- Design and development controls
- Quality assurance and testing
- Corrective and preventive actions (CAPA)
- Management review
- Continuous improvement

### 2.4 Out of Scope

- General enterprise quality management (covered by enterprise QMS)
- Non-AI system quality (covered by other quality standards)
- Quality outside EU AI Act scope

---

## CONTROL STANDARD

### Control QMS-001: Quality Management System Documentation

**Control ID:** QMS-001  
**Control Name:** QMS Framework Documentation  
**Control Type:** Preventive  
**Control Frequency:** Initial establishment, annual review  
**Risk Level:** High

#### Control Objective

Document QMS systematically and orderly per Article 17(1) to ensure comprehensive quality management framework is established, maintained, and continuously improved.

#### Control Requirements

**CR-001.1: QMS Documentation Structure**

Create comprehensive QMS documentation following hierarchical structure.

**QMS Documentation Structure:**

| Document Level | Document Type | Examples | Purpose |
|----------------|---------------|----------|---------|
| **Level 1: Quality Manual** | QMS overview | AI Quality Manual | High-level QMS description |
| **Level 2: Procedures** | How to perform activities | Design Control Procedure, Testing Procedure | Process descriptions |
| **Level 3: Work Instructions** | Detailed step-by-step instructions | Test execution instructions | Detailed guidance |
| **Level 4: Records** | Evidence of activities | Test reports, review records | Evidence of compliance |

**Mandatory Actions:**
- Create AI Quality Manual
- Document all QMS procedures
- Develop work instructions
- Define record requirements
- Obtain executive approval
- Review and update annually

**QMS Documentation Requirements (Article 17(1)(a-h)):**

| Article 17 Element | Documentation Required | Document Type |
|-------------------|------------------------|---------------|
| **(a) Regulatory compliance strategy** | Compliance procedures, change management, CAPA | Procedures |
| **(b) Design control** | Design procedures, verification procedures | Procedures |
| **(c) Development and QA** | Development procedures, QA procedures | Procedures |
| **(d) Testing and validation** | Test procedures, validation procedures | Procedures |
| **(e) Technical specifications** | Data specs, computational resource specs | Specifications |
| **(f) Data management** | Data governance procedures | Procedures |
| **(g) Risk management** | Risk management procedures (integrated) | Procedures |
| **(h) Post-market monitoring** | Post-market monitoring procedures (integrated) | Procedures |

**Evidence Required:**
- AI Quality Manual (MANUAL-AI-QMS-001)
- QMS procedure library
- Work instructions
- Record templates
- Approval records
- Annual review records

**Audit Verification:**
- Verify QMS documentation exists
- Confirm all Article 17 elements documented
- Check documentation structure follows hierarchy
- Validate executive approval obtained
- Verify annual review completed

---

### Control QMS-002: Quality Policy and Objectives

**Control ID:** QMS-002  
**Control Name:** Quality Policy and Objectives Management  
**Control Type:** Preventive  
**Control Frequency:** Annual review  
**Risk Level:** Medium

#### Control Objective

Establish quality policy and measurable quality objectives to guide QMS implementation and provide direction for quality improvement.

#### Control Requirements

**CR-002.1: Quality Policy and Objectives**

Establish and maintain quality policy and objectives.

**Quality Policy Requirements:**
- Aligned with organizational strategy
- Commitment to EU AI Act compliance
- Commitment to continuous improvement
- Communicated to all staff
- Reviewed annually
- Approved by executive management

**Quality Objectives:**

| Objective Category | Example Objectives | Target | Measurement |
|-------------------|-------------------|--------|-------------|
| **Compliance** | 100% high-risk AI compliant | 100% | % compliant |
| **Quality** | Defect escape rate < 5% | < 5% | Defect metrics |
| **Performance** | Test pass rate ≥ 95% | ≥ 95% | Test metrics |
| **Improvement** | CAPA closure rate ≥ 90% | ≥ 90% | CAPA metrics |

**Mandatory Actions:**
- Define quality policy
- Set quality objectives (cascaded to functions)
- Communicate to organization
- Monitor objective achievement
- Review and update annually
- Report to management

**Evidence Required:**
- AI Quality Policy (POLICY-AI-QMS-001)
- Quality Objectives (OBJ-AI-QMS-001)
- Communication records
- Objective tracking dashboard
- Annual review records

**Audit Verification:**
- Verify quality policy exists and approved
- Confirm quality objectives set and measurable
- Check objectives communicated
- Validate objectives monitored
- Verify annual review completed

---

### Control QMS-003: QMS Roles and Responsibilities

**Control ID:** QMS-003  
**Control Name:** QMS Organizational Structure and Roles  
**Control Type:** Preventive  
**Control Frequency:** Annual review  
**Risk Level:** Medium

#### Control Objective

Define clear roles and responsibilities for QMS to ensure accountability and effective QMS implementation.

#### Control Requirements

**CR-003.1: QMS Organizational Structure**

Define and document QMS organizational structure with clear roles.

**Key QMS Roles:**

| Role | Responsibility | Authority | Competence Required |
|------|---------------|-----------|-------------------|
| **Quality Director** | Overall QMS accountability | Full QMS authority | Quality management, EU AI Act |
| **Quality Manager** | Day-to-day QMS management | QMS operational authority | Quality management, process improvement |
| **Design Quality Engineer** | Design control and verification | Design review authority | Design control, verification |
| **Test Quality Engineer** | Testing and validation | Test approval authority | Testing methodologies, validation |
| **Quality Auditor** | Internal QMS audits | Audit authority | Audit expertise, QMS knowledge |
| **CAPA Coordinator** | CAPA system management | CAPA authority | Root cause analysis, CAPA |
| **Document Control** | QMS documentation management | Document control authority | Document management |

**Mandatory Actions:**
- Define QMS organizational structure
- Document roles and responsibilities
- Assign qualified personnel
- Provide QMS training
- Review assignments annually
- Update as needed

**Evidence Required:**
- QMS organizational chart
- Role descriptions
- Assignment records
- Training records
- Annual review records

**Audit Verification:**
- Verify QMS structure defined
- Confirm roles documented
- Check qualified personnel assigned
- Validate training provided
- Verify annual review completed

---

### Control QMS-004: Design Planning

**Control ID:** QMS-004  
**Control Name:** Design and Development Planning  
**Control Type:** Preventive  
**Control Frequency:** Per AI system  
**Risk Level:** High

#### Control Objective

Plan and control AI system design and development per Article 17(1)(b) to ensure systematic design process with appropriate reviews, verification, and validation.

#### Control Requirements

**CR-004.1: Design and Development Plan**

Create comprehensive design and development plan.

**Design Planning Elements:**

| Element | Description | Required |
|---------|-------------|----------|
| **Design Stages** | Phases of design process | YES |
| **Review Points** | Design review stages | YES |
| **Verification Activities** | Design verification activities | YES |
| **Validation Activities** | Design validation activities | YES |
| **Responsibilities** | Roles and responsibilities | YES |
| **Resources** | Resource requirements | YES |
| **Interfaces** | Interface management | YES |
| **Outputs** | Required design outputs | YES |

**Mandatory Actions:**
- Create design and development plan
- Define design phases
- Identify review/verification/validation points
- Assign responsibilities
- Allocate resources
- Obtain approval
- Update as needed

**Design Phases:**

| Phase | Activities | Review Points | Outputs |
|-------|-----------|--------------|---------|
| **Concept** | Concept development, feasibility | Conceptual Design Review | Concept document |
| **Preliminary Design** | High-level design, architecture | Preliminary Design Review | Architecture document |
| **Detailed Design** | Detailed specifications | Critical Design Review | Detailed design specs |
| **Development** | Implementation, unit testing | Development reviews | Code, unit tests |
| **Integration** | Integration, integration testing | Integration review | Integrated system |
| **Validation** | System validation | Validation review | Validated system |

**Evidence Required:**
- Design and Development Plan (PLAN-AI-DESIGN-XXX)
- Design phase definitions
- Responsibility matrix
- Resource allocation
- Approval records

**Audit Verification:**
- Verify design plan created for all high-risk AI
- Confirm all required elements included
- Check review points defined
- Validate approval obtained

---

### Control QMS-005: Design Inputs

**Control ID:** QMS-005  
**Control Name:** Design Input Requirements  
**Control Type:** Preventive  
**Control Frequency:** Per AI system, per major update  
**Risk Level:** High

#### Control Objective

Define and document design inputs to ensure all requirements are captured, reviewed, and approved before design begins.

#### Control Requirements

**CR-005.1: Design Input Documentation**

Gather, document, and approve all design inputs.

**Design Input Categories:**

| Category | Description | Examples | Source |
|----------|-------------|----------|--------|
| **Functional Requirements** | What system must do | Features, capabilities | User needs |
| **Performance Requirements** | How well system must perform | Accuracy, speed, throughput | User needs, standards |
| **Regulatory Requirements** | EU AI Act and other regulations | Article 9, 10, 11, etc. | EU AI Act |
| **Risk Management Requirements** | Risk-based requirements | Risk controls, mitigations | Risk assessment |
| **User Needs** | User requirements | Use cases, user stories | Users, stakeholders |
| **Interface Requirements** | System interfaces | APIs, data formats | System architecture |
| **Constraints** | Design constraints | Resources, time, technology | Project constraints |

**Mandatory Actions:**
- Gather design inputs from stakeholders
- Document all requirements
- Review for completeness and clarity
- Resolve ambiguities
- Obtain approval
- Maintain traceability

**Evidence Required:**
- Design Input Specification (SPEC-AI-DESIGN-XXX)
- Requirements traceability matrix
- Review records
- Approval records

**Audit Verification:**
- Verify design inputs documented for all high-risk AI
- Confirm all categories covered
- Check inputs reviewed
- Validate approval obtained
- Verify traceability maintained

---

### Control QMS-006: Design Outputs

**Control ID:** QMS-006  
**Control Name:** Design Output Verification  
**Control Type:** Preventive  
**Control Frequency:** Per design phase  
**Risk Level:** High

#### Control Objective

Define and verify design outputs meet design inputs to ensure design is complete, correct, and ready for development.

#### Control Requirements

**CR-006.1: Design Output Creation and Verification**

Create design outputs and verify against design inputs.

**Design Output Requirements:**
- Meet design input requirements
- Provide appropriate information for development
- Contain or reference acceptance criteria
- Specify characteristics essential for safe use
- Enable traceability to design inputs

**Design Outputs:**

| Output Type | Description | Required |
|-------------|-------------|----------|
| **System Architecture** | High-level system design | YES |
| **Detailed Design Specifications** | Detailed component specifications | YES |
| **Interface Specifications** | Interface definitions | YES |
| **Test Specifications** | Test requirements and plans | YES |
| **Risk Control Specifications** | Risk control implementations | YES |
| **Data Specifications** | Data requirements and formats | YES |

**Mandatory Actions:**
- Create design outputs
- Verify against design inputs
- Conduct design reviews
- Document verification
- Obtain approval
- Maintain traceability

**Evidence Required:**
- Design Output Documentation (DOC-AI-DESIGN-XXX)
- Design verification records
- Design review records
- Approval records
- Traceability matrix

**Audit Verification:**
- Verify design outputs created
- Confirm outputs verified against inputs
- Check design reviews conducted
- Validate approval obtained
- Verify traceability maintained

---

### Control QMS-007: Design Review

**Control ID:** QMS-007  
**Control Name:** Systematic Design Reviews  
**Control Type:** Preventive  
**Control Frequency:** Per design phase  
**Risk Level:** High

#### Control Objective

Conduct systematic design reviews at appropriate stages to ensure design quality, identify issues early, and enable informed decisions.

#### Control Requirements

**CR-007.1: Design Review Process**

Conduct design reviews per defined schedule.

**Design Review Types:**

| Review Type | When | Purpose | Participants | Approval Required |
|-------------|------|---------|-------------|------------------|
| **Conceptual Design Review** | After concept phase | Validate concept feasibility | All stakeholders | YES |
| **Preliminary Design Review** | After preliminary design | Verify design approach | Technical team, QA | YES |
| **Critical Design Review** | Before development | Approve final design | All stakeholders | YES |
| **Design Verification Review** | After verification | Confirm design meets requirements | QA, Technical team | YES |

**Review Participants:**
- AI System Owner
- Technical Lead
- Quality Engineer
- Risk Manager
- Subject matter experts
- Legal (if needed)

**Mandatory Actions:**
- Schedule design reviews
- Prepare review materials
- Conduct reviews
- Document findings and actions
- Track action closure
- Obtain approval to proceed
- Block progression if issues not resolved

**Evidence Required:**
- Design Review Records (REC-AI-REVIEW-XXX)
- Review findings
- Action item tracking
- Approval to proceed records

**Audit Verification:**
- Verify design reviews conducted per schedule
- Confirm all required participants attend
- Check findings documented
- Validate actions tracked to closure
- Verify approval obtained before progression

---

### Control QMS-008: Design Verification

**Control ID:** QMS-008  
**Control Name:** Design Verification Activities  
**Control Type:** Preventive  
**Control Frequency:** Per design phase  
**Risk Level:** High

#### Control Objective

Verify design outputs meet design inputs to ensure design correctness and completeness before proceeding to next phase.

#### Control Requirements

**CR-008.1: Design Verification Methods**

Conduct design verification using appropriate methods.

**Verification Methods:**

| Method | Description | When to Use | Evidence |
|--------|-------------|-------------|----------|
| **Design Calculations** | Mathematical verification | When calculations involved | Calculation records |
| **Alternative Calculations** | Independent verification | For critical calculations | Alternative calculation records |
| **Comparison with Proven Designs** | Comparison with similar systems | When similar systems exist | Comparison analysis |
| **Testing and Demonstrations** | Test or demonstrate design | When testable | Test results |
| **Document Reviews** | Review design documents | For all designs | Review records |

**Mandatory Actions:**
- Plan verification activities
- Execute verification
- Document verification results
- Address any failures
- Obtain verification approval
- Block progression if verification fails

**Evidence Required:**
- Design Verification Plan (PLAN-AI-VERIFY-XXX)
- Verification test results
- Verification reports
- Approval records

**Audit Verification:**
- Verify design verification conducted
- Confirm appropriate methods used
- Check verification results documented
- Validate failures addressed
- Verify approval obtained

---

### Control QMS-009: Design Validation

**Control ID:** QMS-009  
**Control Name:** Design Validation Activities  
**Control Type:** Preventive  
**Control Frequency:** Before deployment, after substantial modifications  
**Risk Level:** High

#### Control Objective

Validate AI system meets user needs and intended use to ensure system is fit for purpose before deployment.

#### Control Requirements

**CR-009.1: Design Validation Process**

Conduct design validation per defined requirements.

**Validation Requirements:**
- Conducted under defined operating conditions
- Uses representative data
- Includes user feedback
- Covers all intended use cases
- Performed before deployment
- Documented with evidence

**Mandatory Actions:**
- Plan validation activities
- Execute validation in realistic conditions
- Collect and analyze results
- Obtain user feedback
- Document validation
- Obtain approval
- Block deployment if validation fails

**Validation Test Matrix:**

| Use Case | Test Scenario | Success Criteria | Status |
|----------|--------------|-----------------|--------|
| [Use Case 1] | [Scenario] | [Criteria] | ☐ |
| [Use Case 2] | [Scenario] | [Criteria] | ☐ |
| [Use Case N] | [Scenario] | [Criteria] | ☐ |

**Evidence Required:**
- Design Validation Plan (PLAN-AI-VALID-XXX)
- Validation test results
- User feedback
- Validation report
- Approval records

**Audit Verification:**
- Verify design validation conducted before deployment
- Confirm realistic conditions used
- Check all use cases validated
- Validate user feedback obtained
- Verify approval obtained
- Check deployment blocked if validation fails

---

### Control QMS-010: Design Transfer

**Control ID:** QMS-010  
**Control Name:** Design Transfer to Development/Production  
**Control Type:** Preventive  
**Control Frequency:** Per AI system  
**Risk Level:** Medium

#### Control Objective

Transfer design to development/production with appropriate controls to ensure design is correctly implemented.

#### Control Requirements

**CR-010.1: Design Transfer Process**

Execute design transfer with verification.

**Transfer Requirements:**
- Design outputs complete and approved
- Development/production capabilities verified
- Transfer plan documented
- Transfer verification performed
- Acceptance criteria met

**Mandatory Actions:**
- Create design transfer plan
- Verify development readiness
- Execute transfer
- Verify transfer success
- Obtain acceptance
- Document transfer

**Evidence Required:**
- Design Transfer Plan (PLAN-AI-TRANSFER-XXX)
- Transfer verification records
- Acceptance records

**Audit Verification:**
- Verify design transfer planned
- Confirm development readiness verified
- Check transfer executed
- Validate acceptance obtained

---

### Control QMS-011: Design Change Control

**Control ID:** QMS-011  
**Control Name:** Design Change Management  
**Control Type:** Preventive  
**Control Frequency:** As needed  
**Risk Level:** Medium

#### Control Objective

Control and document design changes per Article 17(1)(a) to ensure changes are properly assessed, approved, and implemented.

#### Control Requirements

**CR-011.1: Design Change Control Process**

Manage design changes through formal change control process.

**Change Control Process:**
1. Change request submitted
2. Impact assessment conducted
3. Risk assessment updated
4. Change reviewed and approved
5. Change implemented
6. Change verified
7. Documentation updated
8. Stakeholders notified

**Mandatory Actions:**
- Submit change requests
- Assess impact and risks
- Review and approve changes
- Implement changes
- Verify changes
- Update documentation
- Notify stakeholders

**Change Classification:**

| Change Type | Impact Assessment | Approval Required | Verification Required |
|-------------|------------------|-------------------|---------------------|
| **Major Change** | Comprehensive | AI Governance Committee | Full verification |
| **Minor Change** | Standard | AI System Owner | Standard verification |
| **Emergency Change** | Post-implementation | AI System Owner (immediate) | Post-verification |

**Evidence Required:**
- Design Change Requests (DCR-AI-XXX)
- Impact assessments
- Change approvals
- Verification records
- Documentation updates

**Audit Verification:**
- Verify change control process followed
- Confirm impact assessments conducted
- Check changes approved
- Validate changes verified
- Verify documentation updated

---

### Control QMS-012: Quality Assurance Program

**Control ID:** QMS-012  
**Control Name:** Quality Assurance Program Implementation  
**Control Type:** Preventive  
**Control Frequency:** Continuous  
**Risk Level:** Medium

#### Control Objective

Establish comprehensive quality assurance program per Article 17(1)(c) to ensure quality throughout AI system lifecycle.

#### Control Requirements

**CR-012.1: QA Program Elements**

Implement comprehensive quality assurance program.

**QA Program Elements:**

| Element | Description | Implementation |
|---------|-------------|----------------|
| **Quality Planning** | Plan quality activities | Quality plans |
| **Process Audits** | Audit processes for compliance | Process audit schedule |
| **Product Audits** | Audit products for quality | Product audit schedule |
| **Supplier Quality Management** | Manage supplier quality | Supplier quality procedures |
| **Quality Metrics and Reporting** | Monitor and report quality | Quality dashboards, reports |

**Mandatory Actions:**
- Define QA program
- Conduct process audits
- Conduct product audits
- Monitor quality metrics
- Report quality status
- Implement improvements

**Evidence Required:**
- QA Program Plan (PLAN-AI-QA-001)
- Audit schedules and reports
- Quality metrics dashboard
- Quality reports

**Audit Verification:**
- Verify QA program defined
- Confirm audits conducted
- Check quality metrics monitored
- Validate reports generated

---

### Control QMS-013: Testing Strategy and Execution

**Control ID:** QMS-013  
**Control Name:** Comprehensive Testing Program  
**Control Type:** Preventive  
**Control Frequency:** Per AI system, per release  
**Risk Level:** High

#### Control Objective

Implement comprehensive testing strategy per Article 17(1)(d) to ensure AI systems are tested before, during, and after development.

#### Control Requirements

**CR-013.1: Testing Strategy and Execution**

Define and execute comprehensive testing strategy.

**Testing Levels:**

| Test Level | Purpose | When | Success Criteria |
|------------|---------|------|-----------------|
| **Unit Testing** | Test individual components | During development | All unit tests pass |
| **Integration Testing** | Test component interactions | After unit testing | All integration tests pass |
| **System Testing** | Test complete system | After integration | All system tests pass |
| **Acceptance Testing** | Validate user requirements | Before deployment | All acceptance tests pass |
| **Regression Testing** | Verify no unintended changes | After modifications | All regression tests pass |

**Mandatory Actions:**
- Define testing strategy
- Create test plans
- Execute tests
- Document results
- Track defects
- Obtain test approval
- Block deployment if tests fail

**Test Planning Requirements:**

| Element | Description | Required |
|---------|-------------|----------|
| **Test Objectives** | What to test | YES |
| **Test Scope** | What is covered | YES |
| **Test Approach** | How to test | YES |
| **Test Environment** | Test environment setup | YES |
| **Test Data** | Test data requirements | YES |
| **Entry/Exit Criteria** | When to start/stop testing | YES |
| **Test Schedule** | Testing timeline | YES |
| **Resources** | Resources required | YES |

**Evidence Required:**
- Testing Strategy (STRATEGY-AI-TEST-001)
- Test plans (PLAN-AI-TEST-XXX)
- Test results (TEST-AI-TEST-XXX)
- Defect logs
- Test reports
- Approval records

**Audit Verification:**
- Verify testing strategy defined
- Confirm test plans created
- Check tests executed
- Validate test results documented
- Verify approval obtained
- Check deployment blocked if tests fail

---

### Control QMS-014: Corrective and Preventive Actions (CAPA)

**Control ID:** QMS-014  
**Control Name:** CAPA System Implementation  
**Control Type:** Corrective/Preventive  
**Control Frequency:** Continuous  
**Risk Level:** High

#### Control Objective

Implement systematic CAPA system per Article 17(1)(a) to eliminate causes of nonconformities and prevent recurrence.

#### Control Requirements

**CR-014.1: CAPA System Establishment**

Establish and maintain CAPA system.

**CAPA System Elements:**
- Nonconformity identification
- Root cause analysis
- Corrective action planning
- Preventive action planning
- Implementation and verification
- Effectiveness review

**Corrective Action Process:**
1. Identify nonconformity
2. Contain immediate issue
3. Investigate root cause
4. Plan corrective action
5. Implement corrective action
6. Verify effectiveness
7. Update documentation
8. Close CAPA

**Preventive Action Process:**
1. Identify potential nonconformity
2. Assess risk
3. Plan preventive action
4. Implement preventive action
5. Verify effectiveness

**Root Cause Analysis Methods:**
- 5 Whys
- Fishbone diagram
- Fault tree analysis
- Pareto analysis

**Mandatory Actions:**
- Define CAPA process
- Train staff on CAPA
- Manage CAPA workflow
- Track CAPA to closure
- Review CAPA effectiveness
- Report CAPA metrics

**Evidence Required:**
- CAPA Procedure (PROC-AI-CAPA-001)
- CAPA tracking system
- CAPA records (CAPA-AI-XXX)
- Root cause analysis records
- Action plans
- Verification records
- Training records
- CAPA effectiveness reviews

**Audit Verification:**
- Verify CAPA system established
- Confirm CAPA process followed
- Check root cause analysis conducted
- Validate actions implemented
- Verify effectiveness reviewed

---

### Control QMS-015: Management Review and Continuous Improvement

**Control ID:** QMS-015  
**Control Name:** QMS Management Review and Improvement  
**Control Type:** Detective  
**Control Frequency:** Annually minimum  
**Risk Level:** Medium

#### Control Objective

Ensure QMS effectiveness through management review and drive continuous improvement to enhance QMS and AI system quality.

#### Control Requirements

**CR-015.1: Management Review**

Conduct periodic management review of QMS.

**Review Frequency:** At least annually, or more frequently if needed

**Review Inputs:**
- Quality policy and objectives status
- Quality metrics and KPIs
- Audit results (internal and external)
- Customer/user feedback
- Process performance
- Product/service conformity
- Nonconformities and CAPA status
- Changes affecting QMS
- Improvement opportunities

**Review Outputs:**
- Decisions on improvements
- Resource allocation decisions
- Quality objective updates
- QMS changes needed

**Mandatory Actions:**
- Schedule management reviews
- Prepare review materials
- Conduct review meeting
- Document decisions
- Track action items
- Communicate outcomes
- Implement decisions

**Evidence Required:**
- Management Review Records (REC-AI-MGT-REVIEW-XXX)
- Review presentations
- Decisions and action items
- Follow-up tracking

**CR-015.2: Continuous Improvement**

Drive continuous improvement of QMS and AI systems.

**Improvement Sources:**
- CAPA system
- Management review
- Internal audits
- Process metrics
- Lessons learned
- Industry best practices

**Mandatory Actions:**
- Identify improvement opportunities
- Prioritize improvements
- Plan and implement improvements
- Measure improvement effectiveness
- Share lessons learned

**Evidence Required:**
- Improvement initiatives log
- Improvement project plans
- Effectiveness measurements
- Lessons learned database

**Audit Verification:**
- Verify management review conducted annually
- Confirm all inputs reviewed
- Check decisions documented
- Validate action items tracked
- Verify improvements implemented

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-QMS-001: QMS Framework Implementation Procedure

**Purpose:** Define step-by-step process for establishing QMS  
**Owner:** Quality Director  
**Implements:** Controls QMS-001, QMS-002, QMS-003

**Procedure Steps:**
1. Create Quality Manual - Control QMS-001
2. Define quality policy and objectives - Control QMS-002
3. Define QMS structure and roles - Control QMS-003
4. Document all procedures
5. Obtain executive approval
6. Communicate to organization

**Outputs:**
- Quality Manual
- Quality Policy
- Quality Objectives
- QMS structure

---

### Procedure PROC-AI-QMS-002: Design Control Procedure

**Purpose:** Define process for controlling design  
**Owner:** Quality Director  
**Implements:** Controls QMS-004, QMS-005, QMS-006, QMS-007, QMS-008, QMS-009, QMS-010, QMS-011

**Procedure Steps:**
1. Create design plan - Control QMS-004
2. Gather design inputs - Control QMS-005
3. Create design outputs - Control QMS-006
4. Conduct design reviews - Control QMS-007
5. Verify design - Control QMS-008
6. Validate design - Control QMS-009
7. Transfer design - Control QMS-010
8. Manage design changes - Control QMS-011

**Outputs:**
- Design plans
- Design inputs/outputs
- Review records
- Verification/validation records

---

### Procedure PROC-AI-QMS-003: Quality Assurance Testing Procedure

**Purpose:** Define process for QA testing  
**Owner:** Quality Director  
**Implements:** Controls QMS-012, QMS-013

**Procedure Steps:**
1. Define QA program - Control QMS-012
2. Define testing strategy - Control QMS-013
3. Plan tests
4. Execute tests
5. Report results

**Outputs:**
- QA program
- Test plans
- Test results

---

### Procedure PROC-AI-CAPA-001: Corrective and Preventive Action Procedure

**Purpose:** Define process for CAPA  
**Owner:** Quality Director  
**Implements:** Control QMS-014

**Procedure Steps:**
1. Identify nonconformity/potential issue
2. Conduct root cause analysis
3. Plan actions
4. Implement actions
5. Verify effectiveness
6. Close CAPA

**Outputs:**
- CAPA records
- Root cause analysis
- Action plans

---

### Procedure PROC-AI-QMS-004: Management Review Procedure

**Purpose:** Define process for management review  
**Owner:** Quality Director  
**Implements:** Control QMS-015

**Procedure Steps:**
1. Prepare review materials
2. Conduct review
3. Document decisions
4. Track action items
5. Implement improvements

**Outputs:**
- Management review records
- Decisions
- Action items

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| QMS Documentation Completeness | 100% | % of Article 17 elements documented | Monthly | Quality Director |
| Design Review Completion | 100% | % of required reviews completed | Monthly | Quality Director |
| Test Pass Rate | ≥95% | % of tests passed first time | Per release | Quality Director |
| CAPA Closure Rate | ≥90% | % of CAPAs closed on time | Monthly | Quality Director |
| Defect Escape Rate | <5% | % of defects found post-release | Per release | Quality Director |
| Audit Findings Closure | 100% | % of audit findings closed on time | Quarterly | Quality Director |
| Management Review Completion | 100% | % of scheduled reviews completed | Annually | Quality Director |

**Monitoring Tools:**
- QMS Dashboard
- Quality Metrics Dashboard
- Compliance Reports
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- QMS documentation completeness
- Process compliance
- Design control effectiveness
- Testing effectiveness
- CAPA effectiveness
- Management review effectiveness
- Controls effectiveness (QMS-001 through QMS-015)

**Audit Activities:**
- Review 100% of QMS documentation
- Sample 20% of processes for compliance testing
- Test design control process
- Test testing process
- Review CAPA system
- Review management review
- Interview key personnel

**Audit Outputs:**
- Annual QMS Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready QMS documentation at all times
- Designate Quality Director and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- Quality Manual
- QMS procedures
- Design control records
- Test records
- CAPA records
- Management review records
- Internal audit reports
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested documentation within 5 business days
- Coordinate through Legal and Quality Director
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | Quality Director | Quality Manager | Design Quality Engineer | Test Quality Engineer | AI System Owner | Technical Lead | CAPA Coordinator |
|----------|-----------------|-----------------|----------------------|---------------------|-----------------|----------------|-----------------|
| **QMS Framework** | **R/A** | **R** | I | I | I | I | I |
| **Quality Policy** | **R/A** | C | I | I | I | I | I |
| **Design Planning** | **R** | C | **R** | I | **A** | **R** | I |
| **Design Inputs** | **R** | C | **R** | I | **A** | **R** | I |
| **Design Outputs** | **R** | C | **R** | I | **A** | **R** | I |
| **Design Review** | **R** | C | **R** | C | **A** | **R** | I |
| **Design Verification** | **R** | C | **R** | C | **A** | **R** | I |
| **Design Validation** | **R** | **R** | C | **R** | **A** | C | I |
| **Testing** | **R** | C | I | **R** | **A** | C | I |
| **CAPA** | **R** | C | I | I | **A** | I | **R/A** |
| **Management Review** | **R/A** | **R** | I | I | C | I | I |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**Quality Director**
- **Primary Responsibility:** Owns QMS framework, ensures compliance
- **Key Activities:**
  - Establishes QMS framework
  - Approves quality policy
  - Oversees QMS implementation
  - Reports to management
- **Required Competencies:** EU AI Act Article 17, ISO 9001, quality management

**Quality Manager**
- **Primary Responsibility:** Day-to-day QMS management
- **Key Activities:**
  - Manages QMS operations
  - Coordinates quality activities
  - Monitors quality metrics
  - Reports quality status
- **Required Competencies:** Quality management, process improvement

**Design Quality Engineer**
- **Primary Responsibility:** Design control and verification
- **Key Activities:**
  - Reviews design processes
  - Verifies design outputs
  - Conducts design reviews
- **Required Competencies:** Design control, verification

**Test Quality Engineer**
- **Primary Responsibility:** Testing and validation
- **Key Activities:**
  - Plans testing
  - Executes tests
  - Reports test results
- **Required Competencies:** Testing methodologies, validation

**AI System Owner**
- **Primary Responsibility:** Accountable for quality of their AI system
- **Key Activities:**
  - Ensures QMS followed
  - Approves design decisions
  - Participates in reviews
- **Required Competencies:** AI system knowledge, quality awareness

**CAPA Coordinator**
- **Primary Responsibility:** CAPA system management
- **Key Activities:**
  - Manages CAPA workflow
  - Coordinates root cause analysis
  - Tracks CAPA to closure
- **Required Competencies:** Root cause analysis, CAPA

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Quality management is a **critical regulatory compliance activity** for high-risk AI systems. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Simplified QMS (Minimal-Risk AI)** | AI system clearly minimal-risk; simplified QMS sufficient | Permanent | Quality Director | Document rationale; Annual re-confirmation |
| **Extended Design Review Timeline** | Resource constraints prevent timely review | 30 days | Quality Director + AI System Owner | Interim review; Accelerated plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping QMS for high-risk AI** - Mandatory per Article 17, no exceptions  
❌ **Skipping design reviews** - Required for design quality  
❌ **Skipping design verification** - Required for design correctness  
❌ **Skipping design validation** - Required before deployment  
❌ **Skipping testing** - Required per Article 17(1)(d)  
❌ **Skipping CAPA** - Required per Article 17(1)(a)  

---

### 7.4 Exception Request Process

**Step 1: Submit Exception Request**
- Complete Exception Request Form (FORM-AI-EXCEPTION-001)
- Include business justification
- Propose compensating controls
- Specify duration requested
- Attach risk assessment

**Step 2: Risk Assessment**
- Quality Director assesses risk of granting exception
- Evaluates adequacy of compensating controls
- Documents residual risk

**Step 3: Approval**
- Route to appropriate approval authority based on exception type
- Quality Director approval: Minor exceptions
- Quality Director + AI Governance Committee: Significant exceptions
- AI Governance Committee: Critical exceptions

**Step 4: Documentation and Monitoring**
- Document exception in Exception Register
- Assign exception owner
- Set review date
- Monitor compensating controls
- Report exceptions quarterly to AI Governance Committee

**Step 5: Exception Review and Closure**
- Review exception at specified review date
- Assess if exception still needed
- Close exception when normal QMS completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **High-risk AI without QMS** | Critical | Immediate suspension until QMS established | Establish QMS within 30 business days; Root cause analysis |
| **Skipping design reviews** | High | Escalation to AI Governance Committee | Complete reviews within 10 business days |
| **Skipping design validation** | Critical | Block deployment | Complete validation before deployment |
| **Skipping testing** | Critical | Block deployment | Complete testing before deployment |
| **CAPA not implemented** | High | Escalation to management | Implement CAPA within 10 business days |
| **Management review not conducted** | Medium | Written warning | Complete review within 30 business days |

---

### 8.2 Escalation Procedures

**Level 1: Quality Director**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: Quality Director + AI Governance Committee**
- Repeated violations
- Missing design reviews
- Missing testing
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- High-risk AI without QMS
- Missing design validation
- Critical compliance failures
- **Action:** Immediate AI system suspension, investigation, disciplinary action

**Level 4: Executive Management + Legal**
- Potential regulatory enforcement action
- Significant legal liability
- Reputational risk
- **Action:** Executive crisis management, legal strategy, regulatory engagement

---

### 8.3 Immediate Escalation Triggers

Escalate **immediately** to AI Governance Committee + Legal if:
- ⚠️ High-risk AI system operating without QMS
- ⚠️ Design validation not completed before deployment
- ⚠️ Testing not completed before deployment
- ⚠️ Regulatory inquiry or inspection related to QMS
- ⚠️ Critical quality issues affecting safety

---

### 8.4 Disciplinary Actions

Individuals responsible for QMS violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly deploying without validation)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Quality Management KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-QMS-001** | QMS Documentation Completeness | % of Article 17 elements documented | 100% | (# elements documented / # total elements) × 100 | Monthly | Quality Director | AI Governance Committee |
| **KPI-QMS-002** | Design Review Completion | % of required reviews completed | 100% | (# reviews completed / # required reviews) × 100 | Monthly | Quality Director | Management |
| **KPI-QMS-003** | Test Pass Rate | % of tests passed first time | ≥95% | (# tests passed / # total tests) × 100 | Per release | Quality Director | Management |
| **KPI-QMS-004** | CAPA Closure Rate | % of CAPAs closed on time | ≥90% | (# CAPAs closed on time / # total CAPAs) × 100 | Monthly | Quality Director | AI Governance Committee |
| **KPI-QMS-005** | Defect Escape Rate | % of defects found post-release | <5% | (# defects post-release / # total defects) × 100 | Per release | Quality Director | Management |
| **KPI-QMS-006** | Audit Findings Closure | % of audit findings closed on time | 100% | (# findings closed on time / # total findings) × 100 | Quarterly | Quality Director | AI Governance Committee |
| **KPI-QMS-007** | Management Review Completion | % of scheduled reviews completed | 100% | (# reviews completed / # scheduled reviews) × 100 | Annually | Quality Director | Executive Management |
| **KPI-QMS-008** | Design Verification Completion | % of designs verified | 100% | (# designs verified / # total designs) × 100 | Monthly | Quality Director | Management |
| **KPI-QMS-009** | Design Validation Completion | % of designs validated before deployment | 100% | (# designs validated / # designs deployed) × 100 | Monthly | Quality Director | AI Governance Committee |
| **KPI-QMS-010** | QMS Effectiveness Score | Composite QMS effectiveness score | ≥90% | Weighted average of effectiveness metrics | Quarterly | Quality Director | AI Governance Committee |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (Quality Director access)
- Current QMS status
- Design review status
- Testing status
- CAPA status
- Quality metrics

**Monthly Management Report**
- KPI-QMS-001, 002, 003, 004, 005, 008, 009
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- QMS effectiveness assessment
- Audit findings status
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- QMS maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **QMS Documentation Completeness** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Design Review Completion** | 100% | 90-99% | < 90% | Red: Escalate to AI Governance Committee |
| **Test Pass Rate** | ≥95% | 90-94% | < 90% | Red: Block deployments until improved |
| **CAPA Closure Rate** | ≥90% | 80-89% | < 80% | Yellow: Accelerate CAPA; Red: Escalate to AI Governance Committee |
| **Defect Escape Rate** | <5% | 5-10% | > 10% | Red: Escalate to AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in quality management must complete role-specific training to ensure competency in EU AI Act Article 17 requirements, QMS processes, and quality procedures.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **Quality Director** | QMS Management Expert Training | 20 hours | EU AI Act Article 17; ISO 9001; QMS framework; Management review | Initial + annually | Yes - Written exam (≥90%) |
| **Quality Manager** | QMS Operations Training | 16 hours | QMS processes; Quality assurance; Testing; CAPA | Initial + annually | Yes - Written exam (≥90%) |
| **Design Quality Engineer** | Design Control Training | 12 hours | Design control; Design review; Verification; Validation | Initial + annually | Yes - Practical exercise |
| **Test Quality Engineer** | Testing and Validation Training | 12 hours | Testing methodologies; Test planning; Test execution | Initial + annually | Yes - Practical exercise |
| **CAPA Coordinator** | CAPA Training | 8 hours | CAPA process; Root cause analysis; Action planning | Initial + annually | Yes - Practical exercise |
| **AI System Owners** | QMS Overview | 4 hours | QMS requirements; Responsibilities; Design control | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **All AI Development Staff** | Quality Awareness | 2 hours | Quality basics; QMS awareness; Quality requirements | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 17 Requirements**
- QMS establishment (Article 17(1))
- QMS elements (Article 17(1)(a-h))
- Compliance obligations

**Design Control**
- Design planning
- Design inputs/outputs
- Design review
- Design verification
- Design validation
- Design change control

**Quality Assurance and Testing**
- QA program
- Testing strategy
- Test planning
- Test execution
- Defect management

**CAPA**
- CAPA process
- Root cause analysis
- Corrective actions
- Preventive actions

**Management Review**
- Review process
- Review inputs/outputs
- Continuous improvement

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with QMS tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent QMS activities
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new quality staff
- Job shadowing during QMS activities
- Supervised QMS work for first 3 AI systems

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced quality staff

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- Quality Directors: Must demonstrate ability to establish QMS for 1 sample AI system with 100% compliance before independent work
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (Quality Directors) | < 45 days | Per person |

---

### 10.6 Training Records

**Records Maintained:**
- Training attendance records
- Assessment scores
- Competency validations
- Refresher training completion
- Individual training transcripts

**Retention:** 10 years (to align with EU AI Act documentation retention)

**Access:** HR, Quality Director, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **Quality Management System (QMS)** | Documented system for ensuring AI systems meet quality requirements | EU AI Act Article 17 |
| **Quality Policy** | Organization's intentions and direction related to quality | ISO 9001:2015 |
| **Quality Objective** | Measurable quality target | ISO 9001:2015 |
| **Nonconformity** | Failure to meet a requirement | ISO 9001:2015 |
| **Corrective Action** | Action to eliminate cause of nonconformity | ISO 9001:2015 |
| **Preventive Action** | Action to eliminate cause of potential nonconformity | ISO 9001:2015 |
| **CAPA** | Corrective and Preventive Action system | This Standard |
| **Design Input** | Requirements that form the basis for design | ISO 9001:2015 |
| **Design Output** | Results of design process | ISO 9001:2015 |
| **Design Verification** | Confirmation that design outputs meet design inputs | ISO 9001:2015 |
| **Design Validation** | Confirmation that design meets user needs and intended use | ISO 9001:2015 |
| **Design Review** | Systematic review of design at appropriate stages | ISO 9001:2015 |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Quality Management System** | Article 17 | QMS for high-risk AI | All controls (QMS-001 through QMS-015) |
| **QMS Documentation** | Article 17(1) | Documented QMS | QMS-001 |
| **Regulatory Compliance Strategy** | Article 17(1)(a) | Compliance procedures | QMS-001, QMS-014 |
| **Design Control** | Article 17(1)(b) | Design procedures | QMS-004, QMS-005, QMS-006, QMS-007, QMS-008, QMS-009, QMS-010, QMS-011 |
| **Development and QA** | Article 17(1)(c) | Development and QA procedures | QMS-012, QMS-013 |
| **Testing and Validation** | Article 17(1)(d) | Testing procedures | QMS-013 |
| **Technical Specifications** | Article 17(1)(e) | Technical specifications | QMS-005 |
| **Data Management** | Article 17(1)(f) | Data management procedures | QMS-001 (integrated with STD-AI-003) |
| **Risk Management** | Article 17(1)(g) | Risk management integration | QMS-001 (integrated with STD-AI-002) |
| **Post-Market Monitoring** | Article 17(1)(h) | Post-market monitoring integration | QMS-001 (integrated with STD-AI-012) |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 4.4: AI management system** | Establish AI management system | QMS-001 |
| **Clause 5.2: AI policy** | Establish AI policy | QMS-002 |
| **Clause 6.2: AI objectives** | Establish AI objectives | QMS-002 |
| **Clause 7.5: Documented information** | Maintain documented information | QMS-001 |
| **Clause 8.1: Operational planning and control** | Plan and control operations | QMS-004, QMS-005, QMS-006 |
| **Clause 8.2: AI system risk assessment** | Risk assessment | QMS-001 (integrated) |
| **Clause 9.2: Internal audit** | Conduct internal audits | Compliance Section 5.2 |
| **Clause 9.3: Management review** | Conduct management reviews | QMS-015 |
| **Clause 10.1: Nonconformity and corrective action** | Address nonconformities | QMS-014 |
| **Clause 10.2: Continual improvement** | Continually improve | QMS-015 |

---

### 12.3 ISO 9001:2015 Alignment

This standard aligns with ISO 9001:2015 as follows:

| ISO 9001 Clause | Requirement | Implementation in This Standard |
|----------------|-------------|-------------------------------|
| **Clause 4.4: Quality management system** | Establish QMS | QMS-001 |
| **Clause 5.2: Quality policy** | Establish quality policy | QMS-002 |
| **Clause 6.2: Quality objectives** | Establish quality objectives | QMS-002 |
| **Clause 7.3: Design and development** | Design and development control | QMS-004 through QMS-011 |
| **Clause 8.5: Production and service provision** | Control production | QMS-012, QMS-013 |
| **Clause 8.7: Control of nonconforming outputs** | Control nonconformities | QMS-014 |
| **Clause 9.2: Internal audit** | Conduct internal audits | Compliance Section 5.2 |
| **Clause 9.3: Management review** | Conduct management reviews | QMS-015 |
| **Clause 10.2: Nonconformity and corrective action** | Address nonconformities | QMS-014 |

---

### 12.4 Relationship to Other Standards

This quality management standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines if QMS required | High-risk AI requires Article 17 QMS |
| **STD-AI-002: Risk Management** | Risk management integrated in QMS (Article 17(1)(g)) | QMS includes risk management |
| **STD-AI-003: Data Governance** | Data management integrated in QMS (Article 17(1)(f)) | QMS includes data management |
| **STD-AI-004: Technical Documentation** | Technical specifications in QMS (Article 17(1)(e)) | QMS includes technical specifications |
| **STD-AI-012: Post-Market Monitoring** | Post-market monitoring integrated in QMS (Article 17(1)(h)) | QMS includes post-market monitoring |

---

### 12.5 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 17: Quality Management System
- Article 17(1): QMS Requirements
- Article 17(1)(a-h): QMS Elements

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system
- ISO 9001:2015: Quality management systems — Requirements
- ISO 13485:2016: Medical devices — Quality management systems (if applicable)

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard
- STD-AI-003: AI Data Governance Standard
- STD-AI-004: AI Technical Documentation Standard
- STD-AI-012: AI Post-Market Monitoring Standard
- PROC-AI-QMS-001, -002, -003, -004: QMS procedures
- PROC-AI-CAPA-001: CAPA procedure

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Robert Martinez | Quality Director | _________________ | ________ |
| **Reviewed By** | David Lee | Chief Technology Officer | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-009**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the Quality Director.*
