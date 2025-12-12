# AI Human Oversight Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-007  
**Standard Title:** AI Human Oversight Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** AI Risk Manager  
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
| 0.1 | 2025-07-02 | AI Risk Manager | Initial draft | - | - |
| 0.2 | 2025-07-18 | AI Risk Manager | Added oversight measures details | - | - |
| 0.3 | 2025-07-30 | AI Risk Manager | Incorporated stakeholder feedback | - | - |
| 1.0 | 2025-08-01 | AI Risk Manager | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for designing AI systems to enable effective human oversight and intervention in compliance with EU AI Act Article 14.

**Primary Goals:**
- Design AI systems with effective human oversight per Article 14(2)
- Ensure oversight personnel have necessary capabilities per Article 14(4)
- Implement and maintain effective human oversight throughout AI system lifecycle
- Monitor oversight effectiveness and continuously improve

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems (EU AI Act Article 14)
- All AI systems with significant impact on health, safety, or fundamental rights

### 2.2 Recommended Applicability

This standard is **recommended** for:
- All AI systems for best practices
- Limited-risk and minimal-risk AI systems (voluntary human oversight)

### 2.3 Oversight Requirements Covered

- Human oversight design and measures
- Oversight personnel capabilities
- Oversight implementation and monitoring
- Oversight effectiveness assessment

### 2.4 Out of Scope

- General system monitoring (covered by operations standards)
- Non-AI system oversight (covered by other oversight standards)
- Oversight outside EU AI Act scope

---

## CONTROL STANDARD

### Control HO-001: Human Oversight Measures Design

**Control ID:** HO-001  
**Control Name:** Human Oversight Measures Implementation  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system, during design phase  
**Risk Level:** High

#### Control Objective

Design AI systems with effective human oversight measures per Article 14(2) to enable humans to understand, interpret, override, and intervene in AI system operations, ensuring human control and preventing automation bias.

#### Control Requirements

**CR-001.1: Mandatory Oversight Measures**

Implement all required oversight measures per Article 14(2).

**Required Measures (Article 14(2)):**

| Measure | Description | Implementation | Verification |
|---------|-------------|----------------|-------------|
| **Understand Capabilities** | Fully understand AI system capabilities and limitations | Training, documentation, interface design | Knowledge assessment |
| **Awareness of Automation Bias** | Remain aware of automation bias tendency | Training, reminders, alerts | Awareness verification |
| **Interpret Outputs** | Correctly interpret AI system outputs | Clear output presentation, explanations | Interpretation testing |
| **Decision Not to Use** | Decide not to use AI system in particular situation | Manual override option, decision support | Override capability testing |
| **Override Decision** | Override or reverse AI system decision | Override mechanism, confirmation | Override functionality testing |
| **Intervene in Operation** | Intervene in AI system operation | Intervention controls, pause capability | Intervention testing |
| **Stop Operation** | Stop AI system operation | Stop button, emergency stop | Stop functionality testing |

**Mandatory Actions:**
- Design oversight interface
- Implement override capability
- Enable intervention mechanisms
- Provide stop functionality
- Test oversight effectiveness
- Document oversight design
- Obtain approval before deployment

**Oversight Interface Requirements:**
- Clear display of AI system outputs
- Confidence scores and explanations
- Override controls (prominent, accessible)
- Intervention controls
- Stop button (prominent, accessible)
- Alert mechanisms for critical situations
- Decision support information

**Evidence Required:**
- Human oversight design document
- Interface specifications
- Override mechanism documentation
- Intervention mechanism documentation
- Stop functionality documentation
- Test results
- Approval records

**Audit Verification:**
- Verify all oversight measures implemented
- Confirm oversight interface designed
- Check override capability functional
- Validate intervention mechanisms operational
- Verify stop functionality tested
- Check approval obtained before deployment

---

### Control HO-002: Oversight Personnel Capabilities

**Control ID:** HO-002  
**Control Name:** Oversight Personnel Competence and Authority  
**Control Type:** Preventive  
**Control Frequency:** Per oversight assignment, ongoing  
**Risk Level:** High

#### Control Objective

Ensure oversight personnel have necessary competence, training, authority, and resources per Article 14(4) to effectively perform oversight functions and make informed decisions about AI system use.

#### Control Requirements

**CR-002.1: Personnel Qualification and Authority**

Assign qualified personnel with necessary competence, training, and authority.

**Required Capabilities (Article 14(4)):**

| Capability | Requirement | Implementation | Verification |
|-----------|-------------|----------------|-------------|
| **Competence** | Necessary competence for oversight role | Qualification assessment, certification | Competency validation |
| **Training** | Appropriate training on AI system and oversight | Initial and ongoing training | Training completion records |
| **Authority** | Authority to override, intervene, stop | Authority delegation, role assignment | Authority verification |
| **Resources** | Adequate resources to perform oversight | Time allocation, tools, support | Resource allocation verification |
| **Technical Measures** | Technical measures enabling oversight | Oversight tools, interfaces | Technical capability verification |

**Mandatory Actions:**
- Identify oversight personnel requirements
- Assess personnel qualifications
- Assign qualified personnel
- Provide initial training
- Grant necessary authority
- Allocate adequate resources
- Implement technical measures
- Verify capabilities

**Oversight Personnel Requirements:**

| Role | Competence Requirements | Training Requirements | Authority Level |
|------|------------------------|---------------------|-----------------|
| **Primary Oversight** | Deep AI system knowledge, decision-making | Comprehensive training (16 hours) | Full override, intervene, stop |
| **Secondary Oversight** | AI system knowledge, monitoring | Standard training (8 hours) | Override, intervene (with approval) |
| **Emergency Oversight** | Basic AI system knowledge, emergency response | Emergency training (4 hours) | Emergency stop only |

**Evidence Required:**
- Oversight personnel assignments
- Qualification assessment records
- Training records
- Authority delegation records
- Resource allocation records
- Technical implementation records
- Capability verification records

**Audit Verification:**
- Verify oversight personnel assigned
- Confirm qualifications assessed
- Check training completed
- Validate authority granted
- Verify resources allocated
- Check technical measures implemented

---

### Control HO-003: Oversight Implementation and Operations

**Control ID:** HO-003  
**Control Name:** Human Oversight Operations and Monitoring  
**Control Type:** Detective  
**Control Frequency:** Continuous, ongoing  
**Risk Level:** Medium

#### Control Objective

Implement and maintain effective human oversight operations throughout AI system lifecycle, ensuring oversight personnel are available, trained, and performing oversight functions effectively.

#### Control Requirements

**CR-003.1: Ongoing Oversight Operations**

Maintain effective oversight operations with qualified personnel.

**Operational Requirements:**

| Requirement | Specification | Implementation |
|-------------|---------------|----------------|
| **Personnel Availability** | Oversight personnel available during AI system operation | Staffing schedules, on-call coverage |
| **Ongoing Training** | Regular training updates and refreshers | Annual training, update sessions |
| **Performance Monitoring** | Monitor oversight personnel performance | Performance reviews, metrics |
| **Role Clarity** | Clear roles and responsibilities | Job descriptions, RACI matrices |
| **Adequate Staffing** | Sufficient personnel for oversight load | Staffing analysis, capacity planning |

**Mandatory Actions:**
- Maintain oversight personnel assignments
- Provide ongoing training (annually minimum)
- Monitor performance regularly
- Review roles and responsibilities
- Ensure adequate staffing levels
- Conduct regular oversight reviews
- Document oversight activities

**Oversight Activity Logging:**
- Oversight personnel assignments
- Training completion
- Override actions
- Intervention actions
- Stop actions
- Performance metrics
- Review outcomes

**Evidence Required:**
- Personnel assignment records
- Ongoing training records
- Performance review records
- Oversight activity logs
- Staffing analysis records
- Review records

**Audit Verification:**
- Verify oversight personnel available
- Confirm ongoing training provided
- Check performance monitored
- Validate adequate staffing
- Verify oversight activities logged

---

### Control HO-004: Oversight Effectiveness Monitoring

**Control ID:** HO-004  
**Control Name:** Oversight Effectiveness Assessment and Improvement  
**Control Type:** Detective  
**Control Frequency:** Monthly monitoring, quarterly reviews  
**Risk Level:** Medium

#### Control Objective

Monitor oversight effectiveness, track metrics, analyze patterns, and implement improvements to ensure human oversight remains effective and achieves its objectives.

#### Control Requirements

**CR-004.1: Effectiveness Monitoring and Analysis**

Monitor and analyze oversight effectiveness continuously.

**Monitoring Requirements:**

| Metric | Target | Measurement | Frequency |
|--------|--------|-------------|-----------|
| **Override Rate** | Monitor trends | % of decisions overridden | Monthly |
| **Intervention Rate** | Monitor trends | % of operations intervened | Monthly |
| **Stop Rate** | Monitor trends | % of operations stopped | Monthly |
| **Response Time** | < 5 minutes | Average time to override/intervene | Monthly |
| **Oversight Coverage** | 100% | % of AI operations with oversight | Daily |
| **Training Completion** | 100% | % of personnel trained | Quarterly |
| **Effectiveness Score** | ≥ 95% | Composite effectiveness score | Quarterly |

**Mandatory Actions:**
- Track oversight activities
- Calculate effectiveness metrics
- Analyze trends and patterns
- Identify improvement opportunities
- Implement improvements
- Report to management
- Conduct quarterly effectiveness reviews

**Effectiveness Analysis:**

| Analysis Type | Purpose | Frequency |
|---------------|--------|-----------|
| **Override Pattern Analysis** | Understand when/why overrides occur | Monthly |
| **Intervention Analysis** | Understand intervention patterns | Monthly |
| **Response Time Analysis** | Identify response time issues | Monthly |
| **Training Effectiveness** | Assess training impact | Quarterly |
| **Overall Effectiveness** | Comprehensive effectiveness assessment | Quarterly |

**Evidence Required:**
- Oversight activity logs
- Metrics dashboard
- Analysis reports (monthly)
- Effectiveness reports (quarterly)
- Improvement initiatives
- Management reports

**Audit Verification:**
- Verify oversight activities tracked
- Confirm metrics calculated
- Check analysis conducted
- Validate improvements implemented
- Verify reports generated

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-HO-001: Human Oversight Design Procedure

**Purpose:** Define step-by-step process for designing human oversight  
**Owner:** AI Risk Manager  
**Implements:** Controls HO-001, HO-002

**Procedure Steps:**
1. Assess AI system risks and oversight needs
2. Design oversight measures - Control HO-001
3. Design oversight interface
4. Identify oversight personnel requirements - Control HO-002
5. Assign oversight personnel
6. Provide training
7. Grant authority
8. Test oversight effectiveness
9. Obtain approval

**Outputs:**
- Human oversight design document
- Oversight interface specifications
- Personnel assignments
- Training records
- Approval records

---

### Procedure PROC-AI-HO-002: Oversight Effectiveness Review Procedure

**Purpose:** Define process for reviewing oversight effectiveness  
**Owner:** AI Risk Manager  
**Implements:** Controls HO-003, HO-004

**Procedure Steps:**
1. Collect oversight activity data - Control HO-003
2. Calculate effectiveness metrics - Control HO-004
3. Analyze trends and patterns
4. Identify improvement opportunities
5. Implement improvements
6. Report to management
7. Conduct quarterly reviews

**Outputs:**
- Effectiveness analysis reports
- Improvement initiatives
- Management reports

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Oversight Measures Implementation | 100% | % of high-risk AI with all oversight measures | Monthly | AI Risk Manager |
| Oversight Personnel Assignment | 100% | % of AI systems with assigned oversight personnel | Monthly | AI Risk Manager |
| Oversight Personnel Training | 100% | % of oversight personnel trained | Quarterly | AI Risk Manager |
| Oversight Coverage | 100% | % of AI operations with oversight | Daily | AI Risk Manager |
| Oversight Effectiveness | ≥95% | Composite effectiveness score | Quarterly | AI Risk Manager |
| Override Response Time | < 5 minutes | Average time to override | Monthly | AI Risk Manager |
| Intervention Success Rate | ≥98% | % of successful interventions | Monthly | AI Risk Manager |

**Monitoring Tools:**
- Oversight Activity Dashboard
- Effectiveness Metrics Dashboard
- Compliance Reports
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Oversight measures implementation
- Oversight personnel qualifications
- Oversight operations effectiveness
- Oversight monitoring and analysis
- Controls effectiveness (HO-001 through HO-004)

**Audit Activities:**
- Review 100% of high-risk AI for oversight implementation
- Test oversight measures functionality
- Verify oversight personnel qualifications
- Review oversight activity logs
- Test override/intervention capabilities
- Analyze effectiveness metrics
- Interview oversight personnel
- Test oversight response times

**Audit Outputs:**
- Annual Human Oversight Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready oversight documentation at all times
- Designate AI Risk Manager and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- Human oversight design documents
- Oversight personnel assignments
- Training records
- Oversight activity logs
- Effectiveness reports
- Oversight procedures
- Internal audit reports
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested documentation within 5 business days
- Coordinate through Legal and AI Risk Manager
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | AI Risk Manager | AI System Owner | Oversight Personnel | Product Director | HR | Training |
|----------|----------------|-----------------|-------------------|------------------|-----|----------|
| **Oversight Design** | **R/A** | **A** | C | C | I | I |
| **Oversight Measures Implementation** | **R** | **A** | C | C | I | I |
| **Personnel Assignment** | **R** | **A** | I | I | **R** | I |
| **Personnel Training** | **R** | **A** | **A** | I | C | **R** |
| **Authority Grant** | **R** | **A** | I | I | C | I |
| **Oversight Operations** | **R** | **A** | **R** | I | I | I |
| **Effectiveness Monitoring** | **R** | **A** | C | I | I | I |
| **Performance Reviews** | **R** | **A** | **A** | I | **R** | I |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**AI Risk Manager**
- **Primary Responsibility:** Owns oversight framework, ensures compliance
- **Key Activities:**
  - Establishes oversight framework
  - Designs oversight measures
  - Monitors oversight effectiveness
  - Reports oversight metrics
- **Required Competencies:** EU AI Act Article 14, oversight design, risk management

**AI System Owner**
- **Primary Responsibility:** Accountable for oversight of their AI system
- **Key Activities:**
  - Ensures oversight implemented
  - Assigns oversight personnel
  - Monitors oversight operations
  - Participates in effectiveness reviews
- **Required Competencies:** AI system knowledge, oversight requirements

**Oversight Personnel**
- **Primary Responsibility:** Perform human oversight functions
- **Key Activities:**
  - Monitor AI system operations
  - Override AI decisions when needed
  - Intervene in AI operations
  - Stop AI operations when necessary
  - Document oversight activities
- **Required Competencies:** AI system knowledge, decision-making, oversight procedures

**Product Director**
- **Primary Responsibility:** Provides resources and support for oversight
- **Key Activities:**
  - Allocates resources for oversight
  - Supports oversight implementation
  - Reviews oversight effectiveness
- **Required Competencies:** Resource management, oversight awareness

**HR**
- **Primary Responsibility:** Manages oversight personnel assignments
- **Key Activities:**
  - Identifies qualified personnel
  - Manages assignments
  - Supports performance reviews
- **Required Competencies:** Personnel management, qualification assessment

**Training**
- **Primary Responsibility:** Provides oversight training
- **Key Activities:**
  - Develops training programs
  - Delivers training
  - Assesses training effectiveness
- **Required Competencies:** Training development, AI system knowledge

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Human oversight is a **critical regulatory compliance activity** for high-risk AI systems. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Reduced Oversight (Minimal-Risk AI)** | AI system clearly minimal-risk; reduced oversight sufficient | Permanent | AI Risk Manager | Document rationale; Annual re-confirmation |
| **Extended Training Timeline** | Resource constraints prevent timely training | 30 days | AI Risk Manager + HR | Interim oversight; Accelerated training plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping oversight for high-risk AI** - Mandatory per Article 14, no exceptions  
❌ **Disabling override capability** - Required for human control  
❌ **Operating without oversight personnel** - Required for effective oversight  
❌ **Skipping oversight training** - Required for personnel competence  
❌ **Removing stop functionality** - Required for safety  

---

### 7.4 Exception Request Process

**Step 1: Submit Exception Request**
- Complete Exception Request Form (FORM-AI-EXCEPTION-001)
- Include business justification
- Propose compensating controls
- Specify duration requested
- Attach risk assessment

**Step 2: Risk Assessment**
- AI Risk Manager assesses risk of granting exception
- Evaluates adequacy of compensating controls
- Documents residual risk

**Step 3: Approval**
- Route to appropriate approval authority based on exception type
- AI Risk Manager approval: Minor exceptions
- AI Risk Manager + AI Governance Committee: Significant exceptions
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
- Close exception when normal oversight completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **High-risk AI without oversight** | Critical | Immediate suspension until oversight implemented | Implement oversight within 5 business days; Root cause analysis |
| **Missing override capability** | Critical | Immediate correction; Compliance gap assessment | Implement override within 5 business days |
| **Oversight personnel not trained** | High | Escalation to AI Governance Committee; Freeze on operations | Complete training within 10 business days |
| **Oversight not operational** | High | Escalation to management | Restore oversight within 24 hours |
| **Missing stop functionality** | Critical | Immediate correction | Implement stop functionality within 5 business days |
| **Oversight effectiveness below target** | Medium | Written warning; Improvement plan | Implement improvements within 30 business days |

---

### 8.2 Escalation Procedures

**Level 1: AI Risk Manager**
- Minor procedural violations
- Training delays
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: AI Risk Manager + AI Governance Committee**
- Repeated violations
- Missing oversight measures
- Untrained personnel
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- High-risk AI without oversight
- Missing override/stop capability
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
- ⚠️ High-risk AI system operating without oversight
- ⚠️ Override or stop capability disabled
- ⚠️ Oversight personnel unable to perform functions
- ⚠️ Regulatory inquiry or inspection related to oversight
- ⚠️ Critical oversight failure leading to incident

---

### 8.4 Disciplinary Actions

Individuals responsible for oversight violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly disabling oversight)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Human Oversight KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-HO-001** | Oversight Measures Implementation | % of high-risk AI with all oversight measures | 100% | (# AI with all measures / # high-risk AI) × 100 | Monthly | AI Risk Manager | AI Governance Committee |
| **KPI-HO-002** | Oversight Personnel Assignment | % of AI systems with assigned oversight personnel | 100% | (# AI with personnel / # total AI) × 100 | Monthly | AI Risk Manager | Management |
| **KPI-HO-003** | Oversight Personnel Training | % of oversight personnel trained | 100% | (# trained personnel / # total personnel) × 100 | Quarterly | AI Risk Manager | AI Governance Committee |
| **KPI-HO-004** | Oversight Coverage | % of AI operations with oversight | 100% | (# operations with oversight / # total operations) × 100 | Daily | AI Risk Manager | Management |
| **KPI-HO-005** | Oversight Effectiveness | Composite effectiveness score | ≥95% | Weighted average of effectiveness metrics | Quarterly | AI Risk Manager | AI Governance Committee |
| **KPI-HO-006** | Override Response Time | Average time to override AI decision | < 5 minutes | Σ (override time) / # overrides | Monthly | AI Risk Manager | Management |
| **KPI-HO-007** | Intervention Success Rate | % of successful interventions | ≥98% | (# successful interventions / # total interventions) × 100 | Monthly | AI Risk Manager | Management |
| **KPI-HO-008** | Stop Response Time | Average time to stop AI system | < 2 minutes | Σ (stop time) / # stops | Monthly | AI Risk Manager | Management |
| **KPI-HO-009** | Oversight Activity Logging | % of oversight activities logged | 100% | (# logged activities / # total activities) × 100 | Monthly | AI Risk Manager | Management |
| **KPI-HO-010** | Training Effectiveness | Training effectiveness score | ≥90% | Post-training assessment scores | Quarterly | Training | AI Risk Manager |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (AI Risk Manager access)
- Current oversight coverage
- Oversight personnel availability
- Override/intervention rates
- Response times
- System health

**Monthly Management Report**
- KPI-HO-001, 002, 004, 006, 007, 008, 009
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- Oversight effectiveness assessment
- Training completion status
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- Oversight maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Oversight Measures Implementation** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Oversight Coverage** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee |
| **Oversight Effectiveness** | ≥95% | 90-94% | < 90% | Yellow: Improvement plan; Red: Escalate to AI Governance Committee |
| **Override Response Time** | < 5 minutes | 5-10 minutes | > 10 minutes | Red: Escalate to AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in human oversight must complete role-specific training to ensure competency in EU AI Act Article 14 requirements, oversight procedures, and oversight tools.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **Oversight Personnel (Primary)** | Comprehensive Oversight Training | 16 hours | EU AI Act Article 14; AI system knowledge; Override procedures; Intervention procedures; Decision-making; Automation bias | Initial + annually | Yes - Written exam (≥90%) + Practical exercise |
| **Oversight Personnel (Secondary)** | Standard Oversight Training | 8 hours | Oversight basics; Override procedures; Monitoring | Initial + annually | Yes - Knowledge check (≥80%) + Practical exercise |
| **Oversight Personnel (Emergency)** | Emergency Oversight Training | 4 hours | Emergency stop procedures; Basic oversight | Initial + annually | Yes - Practical exercise |
| **AI Risk Manager** | Oversight Management Training | 12 hours | Oversight framework; Effectiveness monitoring; Personnel management | Initial + annually | Yes - Written exam (≥90%) |
| **AI System Owners** | Oversight Overview | 4 hours | Oversight requirements; Responsibilities; Personnel assignment | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 14 Requirements**
- Oversight measures (Article 14(2))
- Oversight capabilities (Article 14(4))
- Compliance obligations

**Oversight Measures**
- Understanding AI capabilities and limitations
- Automation bias awareness
- Interpreting AI outputs
- Override procedures
- Intervention procedures
- Stop procedures

**Decision-Making**
- When to override
- When to intervene
- When to stop
- Decision support
- Risk assessment

**Oversight Tools**
- Oversight interface
- Override controls
- Intervention controls
- Monitoring tools
- Logging tools

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with oversight tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent oversight activities
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new oversight personnel
- Job shadowing during oversight operations
- Supervised oversight for first 10 AI operations

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced oversight personnel

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- Primary Oversight Personnel: Must demonstrate ability to override, intervene, and stop AI system with 100% success before independent oversight
- All personnel: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (Primary Oversight) | < 30 days | Per person |

---

### 10.6 Training Records

**Records Maintained:**
- Training attendance records
- Assessment scores
- Competency validations
- Refresher training completion
- Individual training transcripts

**Retention:** 10 years (to align with EU AI Act documentation retention)

**Access:** HR, AI Risk Manager, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **Human Oversight** | Human ability to understand, monitor, override, and intervene in AI system operations | EU AI Act Article 14 |
| **Oversight Measures** | Specific measures enabling human oversight (Article 14(2)) | EU AI Act Article 14(2) |
| **Oversight Capabilities** | Required capabilities for oversight personnel (Article 14(4)) | EU AI Act Article 14(4) |
| **Override** | Human action to reverse or change AI system decision | This Standard |
| **Intervention** | Human action to modify AI system operation | This Standard |
| **Stop** | Human action to halt AI system operation | This Standard |
| **Automation Bias** | Tendency to over-rely on automated systems and accept their outputs without question | This Standard |
| **Oversight Personnel** | Natural persons assigned to perform human oversight functions | This Standard |
| **Oversight Effectiveness** | Measure of how well human oversight achieves its objectives | This Standard |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Human Oversight** | Article 14 | Human oversight for high-risk AI | All controls (HO-001 through HO-004) |
| **Oversight Measures** | Article 14(2) | Specific measures enabling oversight | HO-001 |
| **Oversight Capabilities** | Article 14(4) | Required capabilities for oversight personnel | HO-002 |
| **Oversight Implementation** | Article 14 | Effective oversight implementation | HO-003, HO-004 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 6.1.2: AI system impact assessment** | Assess human oversight impacts | HO-001, HO-002 |
| **Clause 7.2: Competence** | Ensure personnel have appropriate competence | HO-002 |
| **Clause 8.2: AI system risk assessment** | Human oversight in risk management | HO-001, HO-003 |
| **Clause 9.1: Monitoring, measurement, analysis, and evaluation** | Monitor oversight effectiveness | HO-004 |

---

### 12.3 Relationship to Other Standards

This human oversight standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines if oversight required | High-risk AI requires Article 14 oversight |
| **STD-AI-002: Risk Management** | Oversight measures in risk management | Risk management identifies oversight needs |
| **STD-AI-004: Technical Documentation** | Oversight measures documented in Annex IV | Oversight information in technical documentation |
| **STD-AI-006: Transparency** | Oversight measures in Instructions for Use | Oversight information in Instructions for Use |

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 14: Human Oversight
- Article 14(2): Oversight Measures
- Article 14(4): Oversight Capabilities

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system
- ISO/IEC 23894:2023: Information technology — Artificial intelligence — Guidance on risk management

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard
- STD-AI-004: AI Technical Documentation Standard
- STD-AI-006: AI Transparency Standard
- PROC-AI-HO-001, -002: Human oversight procedures

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | AI Risk Manager | AI Risk Manager | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-007**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the AI Risk Manager.*
