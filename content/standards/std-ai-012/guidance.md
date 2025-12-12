# AI Post-Market Monitoring Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-012  
**Standard Title:** AI Post-Market Monitoring Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** Product Director  
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
| 0.1 | 2025-07-15 | Product Director | Initial draft | - | - |
| 0.2 | 2025-07-30 | Product Director | Added Article 72 details | - | - |
| 0.3 | 2025-08-01 | Product Director | Incorporated stakeholder feedback | - | - |
| 1.0 | 2025-08-01 | Product Director | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for establishing and maintaining a post-market monitoring system for AI systems in operation in compliance with EU AI Act Article 72.

**Primary Goals:**
- Establish post-market monitoring system per Article 72(1)
- Create and maintain post-market monitoring plan per Article 72(2)
- Monitor AI system performance in real-world conditions
- Enable corrective actions based on monitoring results

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems in operation (EU AI Act Article 72)
- All AI systems throughout their operational lifecycle

### 2.2 Recommended Applicability

This standard is **recommended** for:
- All AI systems for best practices
- Limited-risk and minimal-risk AI systems (voluntary monitoring)

### 2.3 Monitoring Requirements Covered

- Post-market monitoring system establishment
- Post-market monitoring plan creation and maintenance
- Performance monitoring and analysis
- Corrective actions based on monitoring

### 2.4 Out of Scope

- Pre-market testing (covered by testing standards)
- Non-AI system monitoring (covered by other monitoring standards)
- Monitoring outside EU AI Act scope

---

## CONTROL STANDARD

### Control PMM-001: Post-Market Monitoring System Establishment

**Control ID:** PMM-001  
**Control Name:** Post-Market Monitoring System Design and Implementation  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system, before market placement  
**Risk Level:** High

#### Control Objective

Establish post-market monitoring system per Article 72(1) to actively and systematically collect data, analyze performance in real-world conditions, identify risks and opportunities for improvement, and enable corrective actions.

#### Control Requirements

**CR-001.1: PMM System Design and Implementation**

Design and implement comprehensive post-market monitoring system.

**System Requirements (Article 72(1)):**

| Requirement | Description | Implementation | Verification |
|-------------|-------------|----------------|-------------|
| **Active Data Collection** | Actively and systematically collect data | Automated data collection | Data collection logs |
| **Performance Analysis** | Analyze performance in real-world conditions | Performance analysis tools | Analysis reports |
| **Risk Identification** | Identify risks and opportunities for improvement | Risk analysis processes | Risk reports |
| **Corrective Actions** | Enable corrective actions | Corrective action procedures | Action records |
| **Integration** | Integrate with risk management and quality management | System integration | Integration documentation |

**Mandatory Actions:**
- Design PMM system architecture
- Implement data collection mechanisms
- Set up analysis processes
- Enable corrective action workflows
- Integrate with risk management (STD-AI-002)
- Integrate with quality management (STD-AI-009)
- Test system functionality
- Obtain approval

**PMM System Architecture:**

| Component | Description | Technology | Integration |
|-----------|-------------|------------|-------------|
| **Data Collection** | Collect monitoring data | Automated tools | AI system, logging |
| **Data Storage** | Store monitoring data | Database, data warehouse | Data governance |
| **Analysis Engine** | Analyze performance | Analytics tools | Performance monitoring |
| **Alerting System** | Alert on issues | Alerting tools | Incident management |
| **Reporting** | Generate reports | Reporting tools | Management reporting |
| **Corrective Actions** | Enable corrective actions | Workflow tools | CAPA system |

**Evidence Required:**
- PMM System Documentation (DOC-AI-PMM-001)
- System architecture
- Integration documentation
- Test results
- Approval records

**Audit Verification:**
- Verify PMM system designed
- Confirm data collection implemented
- Check analysis processes set up
- Validate corrective actions enabled
- Verify integration with risk/quality management

---

### Control PMM-002: Post-Market Monitoring Plan Creation

**Control ID:** PMM-002  
**Control Name:** Post-Market Monitoring Plan Development  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system, before market placement  
**Risk Level:** High

#### Control Objective

Create and maintain post-market monitoring plan per Article 72(2) to define strategy, methods, and procedures for post-market monitoring.

#### Control Requirements

**CR-002.1: PMM Plan Development**

Create comprehensive post-market monitoring plan.

**Plan Contents (Article 72(2)):**

| Element | Description | Required | Implementation |
|---------|-------------|----------|----------------|
| **Data Collection Strategy** | Strategy for collecting monitoring data | YES | Data collection plan |
| **Data Sources** | Sources of monitoring data | YES | Data source inventory |
| **Analysis Methods** | Methods for analyzing data | YES | Analysis procedures |
| **Corrective Action Procedures** | Procedures for corrective actions | YES | Corrective action procedures |
| **Reporting Procedures** | Procedures for reporting | YES | Reporting procedures |
| **Review and Update Procedures** | Procedures for reviewing and updating plan | YES | Review procedures |

**Mandatory Actions:**
- Create PMM plan
- Define data collection strategy
- Identify data sources
- Establish analysis methods
- Define corrective action procedures
- Define reporting procedures
- Define review and update procedures
- Obtain approval
- Review and update annually

**Data Collection Strategy:**

| Data Type | Collection Method | Frequency | Data Source |
|-----------|------------------|-----------|-------------|
| **Performance Metrics** | Automated collection | Real-time | AI system logs |
| **User Feedback** | User surveys, support tickets | Monthly | User feedback systems |
| **Incident Reports** | Incident management system | As needed | Incident management |
| **Error Logs** | Automated collection | Real-time | System logs |
| **Usage Patterns** | Automated collection | Daily | Usage analytics |
| **Environmental Conditions** | Automated collection | Real-time | System monitoring |

**Evidence Required:**
- Post-Market Monitoring Plan (PLAN-AI-PMM-XXX)
- Data collection strategy
- Data source inventory
- Analysis methods documentation
- Corrective action procedures
- Reporting procedures
- Approval records
- Annual review records

**Audit Verification:**
- Verify PMM plan created
- Confirm all required elements included
- Check plan approved
- Validate plan reviewed and updated annually

---

### Control PMM-003: Performance Data Collection

**Control ID:** PMM-003  
**Control Name:** Performance Data Collection and Management  
**Control Type:** Detective  
**Control Frequency:** Continuous  
**Risk Level:** Medium

#### Control Objective

Collect and manage performance data systematically to enable performance analysis and identify issues early.

#### Control Requirements

**CR-003.1: Data Collection Implementation**

Implement comprehensive data collection per PMM plan.

**Data Types:**

| Data Type | Description | Collection Method | Frequency | Storage |
|-----------|-------------|------------------|-----------|---------|
| **Performance Metrics** | Accuracy, precision, recall, etc. | Automated | Real-time | Database |
| **User Feedback** | User satisfaction, complaints | Surveys, tickets | Monthly | Feedback system |
| **Incident Reports** | Incidents, errors | Incident system | As needed | Incident database |
| **Error Logs** | System errors, exceptions | Automated | Real-time | Log system |
| **Usage Patterns** | Usage statistics, patterns | Automated | Daily | Analytics database |
| **Environmental Conditions** | Operating conditions | Automated | Real-time | Monitoring system |

**Mandatory Actions:**
- Implement data collection per plan
- Monitor data quality
- Store data securely
- Maintain data retention
- Analyze data regularly
- Report data collection status

**Data Quality Requirements:**

| Quality Dimension | Requirement | Measurement | Target |
|------------------|-------------|-------------|--------|
| **Completeness** | All required data collected | % of data collected | ≥95% |
| **Accuracy** | Data accurate and correct | Error rate | <1% |
| **Timeliness** | Data collected on time | Collection delay | <1 hour |
| **Consistency** | Data consistent across sources | Consistency score | ≥95% |

**Evidence Required:**
- Data collection records
- Data quality reports
- Data storage records
- Data retention records
- Analysis reports

**Audit Verification:**
- Verify data collection implemented
- Confirm data quality monitored
- Check data stored securely
- Validate data analyzed regularly

---

### Control PMM-004: Performance Monitoring and Analysis

**Control ID:** PMM-004  
**Control Name:** Performance Monitoring and Analysis  
**Control Type:** Detective  
**Control Frequency:** Continuous, monthly analysis  
**Risk Level:** Medium

#### Control Objective

Monitor AI system performance in real-world conditions and analyze trends to identify issues and opportunities for improvement.

#### Control Requirements

**CR-004.1: Performance Metrics Tracking**

Track performance metrics continuously and compare to baselines.

**Performance Metrics:**

| Metric | Description | Baseline | Target | Alert Threshold |
|--------|-------------|----------|--------|----------------|
| **Accuracy in Production** | Production accuracy | Pre-deployment accuracy | ≥95% | <90% |
| **Error Rates** | Error frequency | Pre-deployment error rate | <5% | >10% |
| **User Satisfaction** | User satisfaction score | Target satisfaction | ≥4.0/5.0 | <3.5/5.0 |
| **System Availability** | System uptime | Target availability | ≥99.5% | <99% |
| **Response Times** | System response time | Target response time | <2 seconds | >5 seconds |
| **Drift Indicators** | Data/concept drift | Drift threshold | <0.1 | >0.2 |

**Mandatory Actions:**
- Track metrics continuously
- Compare to baselines
- Alert on deviations
- Investigate issues
- Report trends
- Update baselines as needed

**Performance Analysis:**

| Analysis Type | Purpose | Frequency | Output |
|--------------|---------|-----------|--------|
| **Trend Analysis** | Identify performance trends | Monthly | Trend reports |
| **Comparative Analysis** | Compare to baselines | Monthly | Comparison reports |
| **Root Cause Analysis** | Investigate issues | As needed | Root cause reports |
| **Predictive Analysis** | Predict future performance | Quarterly | Predictive reports |

**Evidence Required:**
- Performance dashboard
- Metrics reports (monthly)
- Trend analysis reports
- Investigation records
- Alert logs

**Audit Verification:**
- Verify metrics tracked continuously
- Confirm baselines established
- Check alerts configured
- Validate issues investigated
- Verify reports generated

---

### Control PMM-005: Corrective Actions Based on Monitoring

**Control ID:** PMM-005  
**Control Name:** Corrective Actions from Post-Market Monitoring  
**Control Type:** Corrective  
**Control Frequency:** As needed  
**Risk Level:** Medium

#### Control Objective

Implement corrective actions based on post-market monitoring results to address performance issues and improve AI system quality.

#### Control Requirements

**CR-005.1: Corrective Action Process**

Implement corrective actions per PMM plan and CAPA procedures.

**Corrective Action Requirements:**

| Requirement | Description | Implementation | Timeline |
|-------------|-------------|----------------|----------|
| **Issue Identification** | Identify performance issues | Monitoring alerts, analysis | Immediate |
| **Root Cause Analysis** | Investigate root causes | Root cause analysis | 5 days |
| **Action Planning** | Plan corrective actions | Action planning | 5 days |
| **Action Implementation** | Implement corrective actions | Action implementation | 30 days |
| **Effectiveness Verification** | Verify action effectiveness | Verification testing | 10 days |
| **Documentation Update** | Update documentation | Documentation update | 5 days |

**Mandatory Actions:**
- Monitor for performance issues
- Investigate root causes
- Plan corrective actions
- Implement actions
- Verify effectiveness
- Update documentation
- Report to management

**Corrective Action Types:**

| Action Type | Description | When to Use | Example |
|-------------|-------------|-------------|---------|
| **Model Retraining** | Retrain model with new data | Performance degradation | Accuracy drop |
| **Model Update** | Update model architecture | Architecture issues | Architecture problems |
| **Data Quality Improvement** | Improve data quality | Data quality issues | Data quality problems |
| **Process Improvement** | Improve processes | Process issues | Process problems |
| **Configuration Changes** | Change system configuration | Configuration issues | Configuration problems |

**Evidence Required:**
- Issue logs
- Root cause analyses
- Corrective action plans
- Implementation records
- Verification records
- Documentation updates

**Audit Verification:**
- Verify issues identified
- Confirm root cause analysis conducted
- Check corrective actions implemented
- Validate effectiveness verified
- Verify documentation updated

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-PMM-001: Post-Market Monitoring Plan Creation Procedure

**Purpose:** Define step-by-step process for creating PMM plan  
**Owner:** Product Director  
**Implements:** Control PMM-002

**Procedure Steps:**
1. Define data collection strategy
2. Identify data sources
3. Establish analysis methods
4. Define corrective action procedures
5. Define reporting procedures
6. Obtain approval

**Outputs:**
- Post-Market Monitoring Plan
- Data collection strategy
- Analysis methods

---

### Procedure PROC-AI-PMM-002: Performance Data Collection Procedure

**Purpose:** Define process for collecting performance data  
**Owner:** Product Director  
**Implements:** Control PMM-003

**Procedure Steps:**
1. Implement data collection
2. Monitor data quality
3. Store data securely
4. Analyze data regularly

**Outputs:**
- Data collection records
- Data quality reports
- Analysis reports

---

### Procedure PROC-AI-PMM-003: Performance Analysis Procedure

**Purpose:** Define process for analyzing performance  
**Owner:** Product Director  
**Implements:** Control PMM-004

**Procedure Steps:**
1. Track performance metrics
2. Compare to baselines
3. Analyze trends
4. Investigate issues
5. Report results

**Outputs:**
- Performance reports
- Trend analysis
- Investigation records

---

### Procedure PROC-AI-PMM-004: Corrective Action Procedure

**Purpose:** Define process for corrective actions  
**Owner:** Product Director  
**Implements:** Control PMM-005

**Procedure Steps:**
1. Identify issues
2. Investigate root causes
3. Plan corrective actions
4. Implement actions
5. Verify effectiveness

**Outputs:**
- Corrective action plans
- Implementation records
- Verification records

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| PMM System Coverage | 100% | % of high-risk AI with PMM system | Monthly | Product Director |
| PMM Plan Coverage | 100% | % of high-risk AI with PMM plan | Monthly | Product Director |
| Data Collection Completeness | ≥95% | % of required data collected | Daily | Product Director |
| Analysis Frequency | Monthly minimum | Frequency of analysis | Monthly | Product Director |
| Corrective Action Closure | <30 days | Average days to close actions | Per action | Product Director |
| Performance Stability | <5% variation | Performance variation | Weekly | Product Director |

**Monitoring Tools:**
- PMM Dashboard
- Performance Monitoring Dashboard
- Compliance Reports
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- PMM system implementation
- PMM plan completeness
- Data collection effectiveness
- Performance analysis quality
- Corrective action effectiveness
- Controls effectiveness (PMM-001 through PMM-005)

**Audit Activities:**
- Review 100% of high-risk AI for PMM system
- Sample 20% of PMM plans for quality review
- Test data collection process
- Review performance analysis
- Review corrective actions
- Interview key personnel

**Audit Outputs:**
- Annual Post-Market Monitoring Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready PMM documentation at all times
- Designate Product Director and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- PMM system documentation
- PMM plans
- Performance data and reports
- Corrective action records
- Internal audit reports
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested documentation within 5 business days
- Coordinate through Legal and Product Director
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | Product Director | AI System Owner | Operations | Data Science | Quality Director |
|----------|----------------|-----------------|------------|--------------|-----------------|
| **PMM System Establishment** | **R/A** | C | C | C | C |
| **PMM Plan Creation** | **R** | **A** | C | C | C |
| **Data Collection** | **R** | **A** | **R** | C | I |
| **Performance Analysis** | **R** | **A** | C | **R** | C |
| **Corrective Actions** | **R** | **A** | C | **R** | **R** |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**Product Director**
- **Primary Responsibility:** Owns PMM framework, ensures compliance
- **Key Activities:**
  - Establishes PMM framework
  - Oversees PMM implementation
  - Monitors PMM effectiveness
  - Reports to management
- **Required Competencies:** EU AI Act Article 72, performance monitoring, data analysis

**AI System Owner**
- **Primary Responsibility:** Accountable for PMM of their AI system
- **Key Activities:**
  - Ensures PMM plan created
  - Monitors performance
  - Supports corrective actions
- **Required Competencies:** AI system knowledge, PMM awareness

**Operations**
- **Primary Responsibility:** Collects and manages monitoring data
- **Key Activities:**
  - Implements data collection
  - Monitors data quality
  - Manages data storage
- **Required Competencies:** Data collection, system operations

**Data Science**
- **Primary Responsibility:** Analyzes performance data
- **Key Activities:**
  - Analyzes performance metrics
  - Identifies trends
  - Supports corrective actions
- **Required Competencies:** Data analysis, performance analysis

**Quality Director**
- **Primary Responsibility:** Supports corrective actions
- **Key Activities:**
  - Supports CAPA process
  - Verifies corrective actions
- **Required Competencies:** Quality management, CAPA

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Post-market monitoring is a **critical regulatory compliance activity** for high-risk AI systems. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Reduced Monitoring (Minimal-Risk AI)** | AI system clearly minimal-risk; reduced monitoring sufficient | Permanent | Product Director | Document rationale; Annual re-confirmation |
| **Extended Analysis Timeline** | Resource constraints prevent timely analysis | 15 days | Product Director | Interim monitoring; Accelerated plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping PMM for high-risk AI** - Mandatory per Article 72, no exceptions  
❌ **Skipping PMM plan** - Required per Article 72(2), no exceptions  
❌ **Skipping data collection** - Required for effective monitoring  
❌ **Skipping performance analysis** - Required to identify issues  

---

### 7.4 Exception Request Process

**Step 1: Submit Exception Request**
- Complete Exception Request Form (FORM-AI-EXCEPTION-001)
- Include business justification
- Propose compensating controls
- Specify duration requested
- Attach risk assessment

**Step 2: Risk Assessment**
- Product Director assesses risk of granting exception
- Evaluates adequacy of compensating controls
- Documents residual risk

**Step 3: Approval**
- Route to appropriate approval authority based on exception type
- Product Director approval: Minor exceptions
- Product Director + AI Governance Committee: Significant exceptions
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
- Close exception when normal PMM completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **High-risk AI without PMM system** | Critical | Immediate suspension until PMM implemented | Implement PMM within 30 business days; Root cause analysis |
| **Missing PMM plan** | High | Escalation to AI Governance Committee | Create PMM plan within 10 business days |
| **Missing data collection** | High | Escalation to management | Implement data collection within 10 business days |
| **Missing performance analysis** | Medium | Written warning | Implement analysis within 15 business days |
| **Corrective actions not implemented** | Medium | Written warning | Implement actions within 30 business days |

---

### 8.2 Escalation Procedures

**Level 1: Product Director**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: Product Director + AI Governance Committee**
- Repeated violations
- Missing PMM system
- Missing PMM plan
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- High-risk AI without PMM
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
- ⚠️ High-risk AI system operating without PMM system
- ⚠️ Missing PMM plan
- ⚠️ Critical performance issues affecting safety
- ⚠️ Regulatory inquiry or inspection related to PMM
- ⚠️ Critical monitoring failure leading to incident

---

### 8.4 Disciplinary Actions

Individuals responsible for PMM violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly disabling PMM)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Post-Market Monitoring KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-PMM-001** | PMM System Coverage | % of high-risk AI with PMM system | 100% | (# with PMM / # high-risk AI) × 100 | Monthly | Product Director | AI Governance Committee |
| **KPI-PMM-002** | PMM Plan Coverage | % of high-risk AI with PMM plan | 100% | (# with plan / # high-risk AI) × 100 | Monthly | Product Director | Management |
| **KPI-PMM-003** | Data Collection Completeness | % of required data collected | ≥95% | (# data points collected / # required) × 100 | Daily | Product Director | Management |
| **KPI-PMM-004** | Analysis Frequency | Frequency of performance analysis | Monthly minimum | Count of analyses per month | Monthly | Product Director | Management |
| **KPI-PMM-005** | Corrective Action Closure | Average days to close corrective actions | <30 days | Σ (closure days) / # actions | Per action | Product Director | Management |
| **KPI-PMM-006** | Performance Stability | Performance variation over time | <5% | Standard deviation of performance | Weekly | Product Director | Management |
| **KPI-PMM-007** | Issue Detection Time | Average time to detect issues | <24 hours | Σ (detection time) / # issues | Per issue | Product Director | Management |
| **KPI-PMM-008** | Corrective Action Effectiveness | % of corrective actions effective | ≥90% | (# effective / # total actions) × 100 | Per action | Product Director | Management |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (Product Director access)
- Current PMM status
- Performance metrics
- Data collection status
- Corrective action status
- System health

**Monthly Management Report**
- KPI-PMM-001, 002, 003, 004, 005, 006, 007, 008
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- PMM effectiveness assessment
- Performance trends
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- PMM maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **PMM System Coverage** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Data Collection Completeness** | ≥95% | 90-94% | < 90% | Red: Escalate to AI Governance Committee |
| **Performance Stability** | <5% | 5-10% | > 10% | Red: Escalate to AI Governance Committee |
| **Corrective Action Closure** | <30 days | 30-45 days | > 45 days | Red: Escalate to AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in post-market monitoring must complete role-specific training to ensure competency in EU AI Act Article 72 requirements, PMM procedures, and performance analysis.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **Product Director** | PMM Management Expert Training | 16 hours | EU AI Act Article 72; PMM system; PMM planning; Performance analysis | Initial + annually | Yes - Written exam (≥90%) |
| **AI System Owners** | PMM Overview | 4 hours | PMM requirements; Responsibilities; PMM plan | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **Operations Staff** | PMM Data Collection Training | 8 hours | Data collection; Data quality; Data management | Initial + annually | Yes - Practical exercise |
| **Data Science** | PMM Analysis Training | 8 hours | Performance analysis; Trend analysis; Root cause analysis | Initial + annually | Yes - Practical exercise |
| **All AI Development Staff** | PMM Awareness | 2 hours | PMM basics; Requirements; Awareness | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 72 Requirements**
- PMM system (Article 72(1))
- PMM plan (Article 72(2))
- Compliance obligations

**PMM System**
- System design
- Data collection
- Performance analysis
- Corrective actions

**Performance Analysis**
- Performance metrics
- Trend analysis
- Root cause analysis
- Corrective action planning

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with PMM tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent PMM activities
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new PMM staff
- Job shadowing during PMM activities
- Supervised PMM for first 3 AI systems

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced staff

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- Product Directors: Must demonstrate ability to establish PMM system for 1 sample AI system with 100% compliance before independent work
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (Product Directors) | < 45 days | Per person |

---

### 10.6 Training Records

**Records Maintained:**
- Training attendance records
- Assessment scores
- Competency validations
- Refresher training completion
- Individual training transcripts

**Retention:** 10 years (to align with EU AI Act documentation retention)

**Access:** HR, Product Director, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **Post-Market Monitoring (PMM)** | System for monitoring AI systems after market placement | EU AI Act Article 72 |
| **PMM System** | System for actively and systematically collecting data and analyzing performance | EU AI Act Article 72(1) |
| **PMM Plan** | Plan defining PMM strategy, methods, and procedures | EU AI Act Article 72(2) |
| **Performance Metrics** | Metrics measuring AI system performance | This Standard |
| **Data Drift** | Change in input data distribution over time | This Standard |
| **Concept Drift** | Change in relationship between inputs and outputs over time | This Standard |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Post-Market Monitoring** | Article 72 | PMM system for high-risk AI | All controls (PMM-001 through PMM-005) |
| **PMM System** | Article 72(1) | System requirements | PMM-001 |
| **PMM Plan** | Article 72(2) | Plan requirements | PMM-002 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 9.1: Monitoring, measurement, analysis, and evaluation** | Monitor and measure | PMM-003, PMM-004 |
| **Clause 10.1: Nonconformity and corrective action** | Address nonconformities | PMM-005 |

---

### 12.3 Relationship to Other Standards

This post-market monitoring standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines if PMM required | High-risk AI requires Article 72 PMM |
| **STD-AI-002: Risk Management** | PMM integrated with risk management (Article 17(1)(h)) | PMM supports risk management |
| **STD-AI-009: Quality Management** | PMM integrated with quality management (Article 17(1)(h)) | PMM supports quality management |
| **STD-AI-013: Incident Management** | PMM may identify incidents | PMM data feeds incident management |

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 72: Post-Market Monitoring
- Article 72(1): PMM System
- Article 72(2): PMM Plan

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard
- STD-AI-009: AI Quality Management Standard
- STD-AI-013: AI Incident Management Standard
- PROC-AI-PMM-001, -002, -003, -004: PMM procedures

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Product Director | Product Director | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-012**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the Product Director.*
