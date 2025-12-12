# PROC-AI-PMM-001: Post-Market Monitoring Procedure

**Procedure ID:** PROC-AI-PMM-001
**Procedure Name:** Post-Market Monitoring Procedure
**Standard:** STD-AI-012: Post-Market Monitoring Standard
**EU AI Act Article:** Article 72 (Post-Market Monitoring by Providers)
**Covers Controls:** PMM-001, PMM-002, PMM-003, PMM-004, PMM-005
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## TABLE OF CONTENTS

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Regulatory Basis](#3-regulatory-basis)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Post-Market Monitoring Framework](#5-post-market-monitoring-framework)
6. [Step-by-Step Procedure](#6-step-by-step-procedure)
   - Phase 1: Post-Market Monitoring Plan Development
   - Phase 2: Data Collection and Analysis
   - Phase 3: Performance Evaluation
   - Phase 4: Corrective Actions
   - Phase 5: Reporting and Communication
   - Phase 6: Continuous Improvement
7. [Control Mechanisms](#7-control-mechanisms)
8. [KPIs and Metrics](#8-kpis-and-metrics)
9. [Documentation Requirements](#9-documentation-requirements)
10. [Review and Audit](#10-review-and-audit)
11. [Non-Compliance Handling](#11-non-compliance-handling)
12. [Related Documents](#12-related-documents)
13. [Appendices](#13-appendices)
14. [Revision History](#14-revision-history)
15. [Approval and Authorization](#15-approval-and-authorization)

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes a comprehensive, systematic, and proportionate post-market monitoring system for high-risk AI systems to actively and continuously collect, document, and analyze data on the performance of AI systems throughout their operational lifecycle, in compliance with EU AI Act Article 72.

The post-market monitoring system ensures:
- Continuous verification of AI system compliance with EU AI Act requirements
- Early detection of performance degradation, bias drift, and safety issues
- Proactive identification of reasonably foreseeable risks not identified during pre-deployment assessment
- Integration with risk management, quality management, and incident reporting systems
- Evidence-based continuous improvement of AI systems

### 1.2 Scope

This procedure applies to:

**In Scope:**
- All high-risk AI systems placed on the market or put into service (per Annex III classification)
- All AI systems subject to conformity assessment under Article 43
- All AI systems deployed in production environments serving end users
- All AI systems processing personal data or making decisions affecting fundamental rights
- All AI systems that have completed deployment phase (post Phase 5 in lifecycle)

**Out of Scope:**
- AI systems in development or testing phases (covered by PROC-AI-DEV-001)
- AI systems not yet deployed to production
- Minimal-risk AI systems (unless organization voluntarily applies monitoring)
- AI systems operated by deployers only (deployer obligations under Article 26)
- Research and development prototypes not intended for market placement

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Post-Market Monitoring Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Product Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |
| **Quality Integration** | [Name] | QMS Manager | [Email/Phone] |
| **Risk Management Integration** | [Name] | AI Risk Manager | [Email/Phone] |

---

## 2. DEFINITIONS

| Term | Definition |
|------|------------|
| **Post-Market Monitoring (PMM)** | All activities carried out by providers to proactively collect and review experience gained from the use of AI systems they place on the market or put into service, for the purpose of identifying any need to immediately apply necessary corrective or preventive actions (EU AI Act Article 72) |
| **Post-Market Monitoring Plan (PMMP)** | A documented plan describing the strategy, methods, and procedures for actively and systematically gathering, recording, and analyzing relevant data on the quality and performance of an AI system throughout its lifetime |
| **Post-Market Monitoring System** | The organizational structure, procedures, processes, and resources for collecting, recording, and analyzing data on AI system performance in operational use |
| **Performance Data** | Quantitative and qualitative data about AI system accuracy, reliability, robustness, safety, and other operational characteristics during production use |
| **Feedback** | Information received from deployers, users, affected persons, or other stakeholders regarding AI system performance, incidents, or concerns |
| **Bias Drift** | The phenomenon where an AI system's fairness characteristics change over time due to changes in input data distributions, user behavior, or operational context |
| **Performance Degradation** | Measurable decline in AI system accuracy, precision, recall, or other performance metrics compared to baseline or intended performance levels |
| **Corrective Action** | Action taken to eliminate the cause of a detected non-conformity or other undesirable situation (ISO 9000:2015) |
| **Preventive Action** | Action taken to eliminate the cause of a potential non-conformity or other undesirable potential situation (ISO 9000:2015) |
| **Serious Incident** | Any incident or malfunctioning of an AI system that directly or indirectly leads to death, serious harm to health, serious and irreversible disruption of critical infrastructure, or serious infringement of fundamental rights (EU AI Act Article 3(49)) |
| **Market Surveillance Authority** | National competent authority designated to carry out market surveillance activities in their territory (EU AI Act Article 74) |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority (EU AI Act Article 3(4)) |
| **Provider** | A natural or legal person, public authority, agency or other body that develops an AI system or that has an AI system developed and places it on the market or puts it into service under its own name or trademark (EU AI Act Article 3(3)) |

---

## 3. REGULATORY BASIS

### 3.1 EU AI Act Requirements

This procedure implements the following EU AI Act Article 72 requirements:

#### 3.1.1 Core Obligations (Article 72(1))

**Requirement:** Providers shall establish and document a post-market monitoring system appropriate to the nature and risks of the high-risk AI system.

**Implementation:** Sections 5 and 6 establish the PMM system framework with proportionate monitoring based on risk classification.

#### 3.1.2 Active Data Collection (Article 72(2))

**Requirement:** The post-market monitoring system shall actively and systematically collect, document, and analyze relevant data provided by deployers or collected through other sources on the performance of high-risk AI systems throughout their lifetime.

**Implementation:** Phase 2 (Data Collection and Analysis) establishes active collection mechanisms and systematic analysis procedures.

#### 3.1.3 Proportionality (Article 72(3))

**Requirement:** The post-market monitoring system shall be proportionate to the nature of the AI technologies and the risks of the high-risk AI system.

**Implementation:** Section 5.2 defines risk-based monitoring intensity with different frequencies and depths based on risk classification.

#### 3.1.4 Post-Market Monitoring Plan (Article 72(4))

**Requirement:** The post-market monitoring system shall be based on a post-market monitoring plan.

**Implementation:** Phase 1 establishes comprehensive PMMP development process; Appendix A provides PMMP template.

#### 3.1.5 Post-Market Monitoring Plan Contents (Article 72(5))

**Requirement:** The post-market monitoring plan shall be part of the technical documentation and shall include:

a) A strategy for the collection of data provided by deployers or other relevant sources
b) A strategy for the analysis of the data provided
c) Methods for the evaluation of the continuous compliance of the high-risk AI system
d) The procedure for interaction with the risk management system
e) The procedure for the handling and resolution of user complaints and the collection of feedback
f) Mechanisms to establish and maintain effective channels of communication with deployers and downstream providers

**Implementation:** Section 6.1 (Steps 1.1-1.6) addresses each required element with detailed procedures.

#### 3.1.6 Evaluation Results Integration (Article 72(6))

**Requirement:** Providers shall use the information and conclusions drawn from the post-market monitoring system to update the risk assessment, implement necessary corrective actions, and update the technical documentation.

**Implementation:** Phase 4 (Corrective Actions) and Phase 6 (Continuous Improvement) establish feedback loops to risk management and documentation systems.

#### 3.1.7 Authority Access (Article 72(7))

**Requirement:** The post-market monitoring plan and documentation shall be available to national competent authorities and notified bodies on request.

**Implementation:** Section 9 defines documentation requirements and authority access procedures.

#### 3.1.8 Incident Reporting Integration (Article 72(8))

**Requirement:** The post-market monitoring system shall be integrated with the serious incident reporting system under Article 73.

**Implementation:** Section 6.4 (Step 4.3) establishes PMM-to-incident reporting integration procedures.

### 3.2 Related EU AI Act Provisions

| Article | Requirement | Implementation in This Procedure |
|---------|-------------|-----------------------------------|
| Article 9 | Risk management system | Phase 4 integrates PMM findings with risk management |
| Article 11 | Technical documentation | Section 9 documents PMM records in technical documentation |
| Article 61 | Post-market monitoring for substantial modifications | Section 6.6 (Step 6.2) addresses evaluation-triggered updates |
| Article 73 | Serious incident reporting | Section 6.4 (Step 4.3) integrates incident reporting |
| Article 74-77 | Market surveillance cooperation | Section 6.5 (Step 5.2) addresses authority reporting |

### 3.3 Harmonized Standards

This procedure aligns with the following standards (when adopted as harmonized standards):

- **ISO 13485:2016** - Medical devices quality management (Clause 8.2.1 Feedback)
- **ISO 14971:2019** - Medical device risk management (Clause 9 Post-production information)
- **ISO/IEC 42001:2023** - AI management system (Clause 8.2 Post-deployment monitoring)
- **IEC 62304:2006** - Medical device software lifecycle (Clause 9 Post-production activities)

---

## 4. ROLES AND RESPONSIBILITIES

### 4.1 Key Roles

| Role | Responsibility | Authority |
|------|----------------|-----------|
| **AI Post-Market Monitoring Manager** | Own and execute PMM system; maintain PMM plans; conduct performance analysis; coordinate feedback collection | Approve PMM plans; initiate corrective actions; escalate critical issues |
| **AI System Owner** | Provide system-specific monitoring requirements; review performance reports; implement corrective actions | Accept low-severity PMM findings; approve system updates |
| **Data Analytics Lead** | Design and implement monitoring dashboards; analyze performance trends; develop predictive models | Define analytics methodologies; establish alert thresholds |
| **ML Operations (MLOps) Team** | Implement monitoring infrastructure; collect performance data; maintain dashboards; respond to alerts | Execute monitoring procedures; escalate threshold breaches |
| **Quality Management Representative** | Integrate PMM with QMS; review PMM effectiveness; conduct internal audits | Approve PMM procedure changes; initiate quality improvement |
| **AI Risk Manager** | Review PMM findings for risk implications; update risk assessments; validate residual risk assumptions | Trigger risk reassessments; approve risk treatment updates |
| **Customer Support Lead** | Collect and document user feedback; manage complaint handling; maintain feedback database | Escalate critical feedback; approve feedback resolution |
| **Compliance Officer** | Verify regulatory compliance; prepare authority reports; manage market surveillance requests | Approve authority submissions; require compliance actions |
| **Chief Product Officer** | Oversight of PMM system; approve significant product changes; allocate PMM resources | Approve major corrective actions; escalate to executive leadership |
| **AI Governance Committee** | Review quarterly PMM reports; approve significant changes; monitor PMM effectiveness | Approve PMM strategy changes; block deployments if non-compliant |

### 4.2 RACI Matrix

| Activity | PMM Manager | AI System Owner | Analytics Lead | MLOps | QMS Rep | Risk Mgr | Support | Compliance | CPO | Gov Committee |
|----------|-------------|----------------|----------------|-------|---------|----------|---------|------------|-----|---------------|
| PMM Plan Development | A | R | C | C | C | C | I | C | I | I |
| Monitoring Infrastructure | C | C | R | A | I | I | I | I | I | I |
| Data Collection | A | C | C | R | I | I | R | I | I | I |
| Performance Analysis | R | C | A | C | C | C | C | I | I | I |
| Feedback Collection | C | C | I | I | I | I | A | I | I | I |
| Bias/Drift Detection | A | C | R | C | I | C | I | C | I | I |
| Corrective Action Initiation | A | R | C | C | C | C | C | C | C | I |
| Risk Assessment Updates | C | C | I | I | I | A | I | C | I | C |
| Authority Reporting | C | C | I | I | C | C | I | A | C | I |
| Quarterly PMM Review | R | C | C | C | C | C | C | C | A | A |
| PMM System Audit | C | C | I | I | A | C | I | C | I | C |
| Serious Incident Escalation | A | R | I | C | C | C | C | C | A | I |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

### 4.3 Competency Requirements

#### 4.3.1 AI Post-Market Monitoring Manager

**Required Competencies:**
- In-depth understanding of EU AI Act requirements (Articles 9, 11, 61, 72, 73)
- Knowledge of AI/ML performance metrics and monitoring techniques
- Experience with quality management systems (ISO 9001, ISO 13485)
- Understanding of statistical analysis and data science
- Familiarity with risk management frameworks (ISO 14971, ISO 31000)
- Experience in market surveillance and regulatory reporting

**Training Requirements:**
- EU AI Act comprehensive training (40 hours)
- Post-market surveillance training (16 hours)
- Statistical analysis for AI systems (24 hours)
- Quality management systems training (16 hours)

#### 4.3.2 Data Analytics Lead

**Required Competencies:**
- Advanced statistical analysis and data science
- AI/ML model performance evaluation
- Dashboard design and data visualization
- Bias detection and fairness metrics
- Predictive modeling and anomaly detection

**Training Requirements:**
- AI fairness and bias detection (16 hours)
- Model performance monitoring (16 hours)
- Statistical process control (8 hours)

#### 4.3.3 MLOps Team

**Required Competencies:**
- ML infrastructure and deployment
- Monitoring tool configuration (Prometheus, Grafana, custom dashboards)
- Log aggregation and analysis
- Alert configuration and incident response
- Data pipeline management

**Training Requirements:**
- MLOps best practices (24 hours)
- Monitoring infrastructure (16 hours)
- EU AI Act operational requirements (8 hours)

---

## 5. POST-MARKET MONITORING FRAMEWORK

### 5.1 PMM System Architecture

The post-market monitoring system consists of six integrated components operating continuously throughout the AI system operational lifecycle:

```
┌─────────────────────────────────────────────────────────────────────┐
│              POST-MARKET MONITORING SYSTEM FRAMEWORK                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. POST-MARKET MONITORING PLAN (PMMP)                             │
│     ├─ Data collection strategy (active and reactive)              │
│     ├─ Analysis methodologies and frequencies                      │
│     ├─ Compliance evaluation procedures                            │
│     ├─ Risk management integration                                 │
│     ├─ Feedback and complaint handling                             │
│     └─ Resource allocation and responsibilities                    │
│                                                                      │
│  2. DATA COLLECTION MECHANISMS                                      │
│     ├─ Automated performance metrics (technical monitoring)        │
│     ├─ User feedback and complaints (reactive collection)          │
│     ├─ Deployer reports and communications (active collection)     │
│     ├─ Market surveillance notifications                           │
│     ├─ Scientific and technical developments                       │
│     └─ Incident and near-miss reports                              │
│                                                                      │
│  3. PERFORMANCE ANALYSIS ENGINE                                     │
│     ├─ Statistical analysis of performance metrics                 │
│     ├─ Bias drift detection and fairness monitoring                │
│     ├─ Trend analysis and predictive modeling                      │
│     ├─ Compliance verification checks                              │
│     ├─ Root cause analysis for degradation                         │
│     └─ Comparative analysis against baselines                      │
│                                                                      │
│  4. CORRECTIVE ACTION SYSTEM                                        │
│     ├─ Threshold breach detection and alerting                     │
│     ├─ Corrective action initiation and tracking                   │
│     ├─ Root cause investigation                                    │
│     ├─ Preventive action implementation                            │
│     ├─ Effectiveness verification                                  │
│     └─ Documentation and closure                                   │
│                                                                      │
│  5. REPORTING AND COMMUNICATION                                     │
│     ├─ Internal reporting (governance, management)                 │
│     ├─ Deployer communication                                      │
│     ├─ Market surveillance authority reporting                     │
│     ├─ Serious incident reporting (Article 73)                     │
│     ├─ Notified body communication                                 │
│     └─ Public transparency reporting (if applicable)               │
│                                                                      │
│  6. CONTINUOUS IMPROVEMENT                                          │
│     ├─ PMM effectiveness review                                    │
│     ├─ Risk management system updates                              │
│     ├─ Technical documentation updates                             │
│     ├─ Lessons learned integration                                 │
│     ├─ PMM plan updates                                            │
│     └─ Process optimization                                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.2 Risk-Based Monitoring Intensity

Post-market monitoring shall be proportionate to the nature and risks of the AI system. Monitoring intensity is determined by AI system risk classification and operational context.

#### 5.2.1 Risk Classification Matrix

| Risk Factor | Weight | Assessment |
|-------------|--------|------------|
| **Fundamental Rights Impact** | 35% | Scale: 1 (Minimal) - 5 (Severe violations possible) |
| **Safety Impact** | 30% | Scale: 1 (No physical harm) - 5 (Life-threatening) |
| **Deployment Scale** | 20% | Scale: 1 (<100 users) - 5 (>1M users) |
| **Automation Level** | 10% | Scale: 1 (Human-in-loop) - 5 (Fully autonomous) |
| **Reversibility of Decisions** | 5% | Scale: 1 (Easily reversible) - 5 (Irreversible) |

**Risk Score Calculation:** Weighted sum of factor scores (range: 1.00 - 5.00)

#### 5.2.2 Monitoring Intensity by Risk Score

| Risk Score | Risk Tier | Monitoring Intensity | Real-time Metrics | Feedback Review | Bias Testing | Performance Report | PMM Plan Review |
|------------|-----------|---------------------|-------------------|-----------------|--------------|-------------------|-----------------|
| 4.0 - 5.0 | **Critical** | Maximum | Continuous (< 1 min latency) | Daily | Weekly | Weekly | Monthly |
| 3.0 - 3.9 | **High** | Enhanced | Near real-time (< 15 min) | 2x per week | Bi-weekly | Bi-weekly | Quarterly |
| 2.0 - 2.9 | **Medium** | Standard | Hourly aggregation | Weekly | Monthly | Monthly | Semi-annual |
| 1.0 - 1.9 | **Low** | Basic | Daily aggregation | Bi-weekly | Quarterly | Quarterly | Annual |

#### 5.2.3 Example Risk Tier Assignments

| AI System Type | Typical Risk Tier | Rationale |
|----------------|-------------------|-----------|
| Healthcare diagnostic AI | Critical | High safety impact; fundamental rights (health); irreversible decisions |
| Hiring/recruitment AI | High | Fundamental rights (equality); high deployment scale; discrimination risk |
| Credit scoring AI | High | Fundamental rights (economic participation); high deployment scale |
| Content moderation AI | Medium | Fundamental rights (expression); reversible; human review available |
| Chatbot for customer service | Low | No safety/rights impact; reversible; human escalation possible |

### 5.3 Integration with Quality Management System

The PMM system is a mandatory component of the organization's Quality Management System (QMS) per Article 17.

#### 5.3.1 QMS Integration Points

```
┌──────────────────────────────────────────────────────────────────┐
│                   QUALITY MANAGEMENT SYSTEM                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  QMS Process                PMM Integration                       │
│  ────────────               ───────────────                       │
│                                                                   │
│  Design Controls        →   PMM Plan Requirements                │
│  ├─ Design inputs       →   Monitoring metrics definition        │
│  ├─ Design outputs      →   Baseline performance establishment   │
│  └─ Design validation   →   Real-world performance validation    │
│                                                                   │
│  Process Controls       →   Data Collection Procedures           │
│  ├─ Process monitoring  →   Automated metrics collection         │
│  └─ Process validation  →   Analysis methodology validation      │
│                                                                   │
│  Corrective Actions     →   PMM-Triggered CAPA                   │
│  ├─ Nonconformities     →   Performance threshold breaches       │
│  ├─ Root cause analysis →   PMM data analysis                    │
│  └─ Effectiveness check →   Post-action monitoring               │
│                                                                   │
│  Management Review      →   Quarterly PMM Reports                │
│  ├─ System performance  →   PMM KPI dashboard                    │
│  ├─ Customer feedback   →   Feedback analysis summary            │
│  └─ Improvement actions →   PMM effectiveness improvements        │
│                                                                   │
│  Internal Audit         →   PMM System Audit                     │
│  ├─ Process compliance  →   PMM procedure adherence              │
│  └─ Effectiveness       →   PMM objective achievement            │
│                                                                   │
│  Document Control       →   PMM Documentation Management         │
│  ├─ Technical docs      →   PMM plan and reports                 │
│  └─ Records control     →   Performance data retention           │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

#### 5.3.2 QMS Procedures Integration

| QMS Procedure | PMM Integration | Cross-Reference |
|---------------|-----------------|-----------------|
| PROC-QMS-001: Document Control | PMM plans and reports controlled per this procedure | Section 9.1 |
| PROC-QMS-002: Corrective Action | PMM findings trigger CAPA process | Section 6.4 |
| PROC-QMS-003: Management Review | Quarterly PMM reports presented to management | Section 10.2 |
| PROC-QMS-004: Internal Audit | Annual PMM system audit | Section 10.3 |
| PROC-QMS-005: Customer Feedback | Feedback collection feeds PMM | Section 6.2.2 |

### 5.4 Integration with Risk Management System

PMM provides continuous feedback to the risk management system per Article 9(6) requirement for iterative risk management.

#### 5.4.1 PMM-to-Risk Management Feedback Loop

```
     POST-MARKET MONITORING                    RISK MANAGEMENT SYSTEM
     ──────────────────────                    ──────────────────────

  1. Performance Data          →    Validates likelihood/impact
     - Actual incident rates         assumptions
     - Error frequencies
     - Near-miss occurrences
                               ↓

  2. Bias Drift Detection      →    New risk identification
     - Fairness metric changes       "Risk: Demographic bias in
     - Disparate impact              production data"
     - Calibration shifts
                               ↓

  3. Performance Degradation   →    Residual risk reassessment
     - Accuracy decline              "Controls less effective
     - Precision/recall changes      than predicted"
     - Latency increases
                               ↓

  4. User Feedback Analysis    →    Reasonably foreseeable
     - Novel misuse patterns         misuse updates
     - Unexpected use cases          "New misuse vector:..."
     - User confusion
                               ↓

  5. Incident Reports          →    Risk materialization
     - Actual harm events            "Risk RM-AI-0042 occurred"
     - System malfunctions           Update likelihood assessment
     - Near-misses
                               ↓

  6. Environmental Changes     →    New risk identification
     - Regulatory updates            "Risk: Non-compliance with
     - Scientific advances           new requirements"
     - Competitive landscape

           ↓                                ↓

     PMM Findings Report        →    Risk Register Update
     (Monthly)                       (Triggered by PMM)

           ↓                                ↓

     Corrective Actions         ←    Risk Treatment Plan
     (PMM-initiated)                  (Risk-driven)
```

#### 5.4.2 PMM-Triggered Risk Activities

| PMM Finding | Risk Management Action | Timeline | Responsibility |
|-------------|------------------------|----------|----------------|
| Critical performance threshold breach | Immediate risk reassessment; deployment suspension consideration | Within 24 hours | AI Risk Manager + PMM Manager |
| Bias drift exceeds fairness threshold | Update bias risk assessment; implement corrective controls | Within 5 business days | AI Risk Manager |
| New misuse pattern identified | Update misuse risk analysis; enhance preventive controls | Within 10 business days | AI Risk Manager |
| Incident report received | Conduct incident risk assessment per PROC-AI-INC-001 | Per incident procedure | AI Risk Manager |
| Performance degradation trend | Reassess residual risk; validate control effectiveness | Within 15 business days | AI Risk Manager + PMM Manager |

---

## 6. STEP-BY-STEP PROCEDURE

### PHASE 1: POST-MARKET MONITORING PLAN DEVELOPMENT

#### Step 1.1: Initiate Post-Market Monitoring Plan (Control PMM-001)

**When:** During AI system design phase, before deployment to production

**Who:** AI Post-Market Monitoring Manager + AI System Owner + MLOps Lead

**Regulatory Basis:** Article 72(4) - PMM system shall be based on a post-market monitoring plan

**How:**

1. **Verify AI System Classification**
   - Confirm AI system is high-risk per STD-AI-001 classification
   - Review classification documentation from PROC-AI-CLS-001
   - If not high-risk: Document rationale for voluntary PMM (if applicable)
   - If high-risk: Proceed with mandatory PMM plan development

2. **Establish PMM Planning Team**
   - AI Post-Market Monitoring Manager (lead)
   - AI System Owner (system knowledge)
   - MLOps Lead (technical monitoring capabilities)
   - Data Analytics Lead (analysis methodologies)
   - AI Risk Manager (risk integration)
   - Quality Management Representative (QMS integration)
   - Compliance Officer (regulatory requirements)

   **Schedule kickoff meeting** (4 hours) within 2 weeks of deployment approval

3. **Gather System Context and Requirements**
   - Review AI system intended purpose and use cases
   - Review technical documentation (per Article 11)
   - Review risk assessment and risk register (PROC-AI-RM-001)
   - Review user population and deployment scale
   - Review data governance documentation (PROC-AI-DATA-001)
   - Identify known risks requiring monitoring
   - Document performance baseline metrics from validation

4. **Determine Risk-Based Monitoring Intensity**
   - Calculate risk score per Section 5.2.1
   - Assign risk tier (Critical/High/Medium/Low)
   - Determine monitoring intensity requirements
   - Document in PMMP risk assessment section

5. **Define PMM Plan Scope and Objectives**
   - **Scope:** Which AI system versions, deployment environments, user populations
   - **Objectives:** What the PMM plan aims to achieve (e.g., "Detect accuracy degradation >5%", "Identify bias drift >10% from baseline")
   - **Success criteria:** How PMM effectiveness will be measured
   - **Resource requirements:** Personnel, infrastructure, budget

6. **Create PMM Plan Document**
   - Use PMM Plan Template (Appendix A)
   - Document control per PROC-QMS-001
   - Assign unique plan ID: PMMP-[AI-SYSTEM-ID]-v[VERSION]
   - Store in technical documentation repository

**Evidence Required:**
- PMM Plan Kickoff Meeting Minutes (REC-AI-PMM-001)
- AI System Classification Documentation
- Risk Score Calculation Worksheet (FORM-AI-PMM-001)
- Draft PMM Plan Document (PMMP-[ID]-v0.1)

**Timing:** 2-3 weeks from deployment decision

**Quality Check:**
- Risk tier correctly calculated and justified
- All required team members involved
- System context comprehensively documented
- PMM plan template fully populated

---

#### Step 1.2: Define Data Collection Strategy (Control PMM-002)

**When:** During PMM plan development

**Who:** Data Analytics Lead + MLOps Lead + AI System Owner

**Regulatory Basis:** Article 72(5)(a) - A strategy for the collection of data provided by deployers or collected through other sources

**How:**

1. **Identify Data Sources**

   **Active Data Collection (Provider-Initiated):**
   - Automated performance metrics from production system
   - Structured deployer questionnaires/surveys
   - Scheduled deployer interviews
   - Proactive system logs and telemetry
   - Automated bias/fairness testing
   - Performance benchmarking against test sets

   **Reactive Data Collection (External-Initiated):**
   - User feedback and complaints
   - Deployer incident reports
   - Customer support tickets
   - Market surveillance notifications
   - Public reports and media coverage
   - Scientific publications about similar systems

   **Document all planned data sources in PMM Plan Section 3: Data Collection Strategy**

2. **Define Technical Performance Metrics**

   For each AI system, identify relevant metrics from the following categories:

   **Model Performance Metrics:**
   - Accuracy, Precision, Recall, F1-score
   - AUC-ROC, AUC-PR
   - Confusion matrix statistics
   - Calibration metrics (Brier score, Expected Calibration Error)
   - Confidence distribution

   **Operational Metrics:**
   - Inference latency (p50, p95, p99)
   - Throughput (requests/second)
   - Error rate (system errors, not prediction errors)
   - Availability/uptime
   - Resource utilization (CPU, memory, GPU)

   **Data Quality Metrics:**
   - Missing value rate
   - Outlier rate
   - Feature distribution drift (Population Stability Index)
   - Data staleness
   - Input validation failure rate

   **Fairness Metrics:**
   - Demographic parity ratio
   - Equal opportunity ratio
   - Equalized odds
   - Predictive parity
   - Calibration by group

   **Use KPI Library (Appendix B) as reference**

3. **Specify Data Collection Methods**

   For each data source and metric, document:

   | Data Type | Collection Method | Frequency | Storage | Responsible |
   |-----------|-------------------|-----------|---------|-------------|
   | Accuracy | Automated prediction logging + ground truth comparison | Daily batch | Performance DB | MLOps |
   | Latency | APM tool (e.g., Datadog) | Real-time | Time-series DB | MLOps |
   | User feedback | Feedback form in UI + email collection | Continuous | CRM system | Support |
   | Deployer reports | Quarterly structured questionnaire | Quarterly | Document management | PMM Manager |
   | Bias metrics | Weekly batch analysis on sampled predictions | Weekly | Analytics warehouse | Analytics Lead |

   **Use Data Collection Methods Matrix (Appendix C)**

4. **Establish Data Quality Standards**
   - Define acceptable data completeness thresholds (e.g., >95% completeness)
   - Define data validation rules
   - Define handling procedures for missing or invalid data
   - Document in PMM Plan Section 3.4: Data Quality Standards

5. **Address Privacy and Data Protection**
   - Verify GDPR compliance for performance data collection
   - Document legal basis for data collection (legitimate interest, contract, consent)
   - Define data minimization approach
   - Define data retention periods (align with Article 12(2) - minimum 10 years for logs)
   - Define pseudonymization/anonymization requirements
   - Cross-reference PROC-AI-DATA-001 (Data Governance)

6. **Document Deployer Data Collection Mechanisms**

   **Article 72(5)(a) specifically requires strategy for collecting data "provided by deployers"**

   **Deployer Data to Collect:**
   - System usage statistics (volume, frequency, user demographics)
   - Performance observations (accuracy in their context, edge cases)
   - Incidents and near-misses
   - User feedback from their users
   - Changes in deployment environment
   - Integration issues

   **Collection Mechanisms:**
   - **Contractual obligation:** Include PMM reporting obligations in deployer agreements
   - **Structured templates:** Provide deployer reporting templates
   - **Regular cadence:** Quarterly deployer surveys/interviews for High/Critical systems
   - **Technical integration:** APIs for automated deployer data submission (if feasible)
   - **Feedback portal:** Web portal for deployers to submit performance data

   **Document in PMM Plan Section 3.2: Deployer Data Collection**

7. **Define Technical Infrastructure Requirements**
   - Logging infrastructure (structured logs, log aggregation)
   - Monitoring infrastructure (metrics collection, dashboards)
   - Data storage infrastructure (databases, data lakes)
   - Analytics infrastructure (data pipelines, analysis tools)
   - Alert infrastructure (threshold monitoring, notification systems)

   **Identify gaps:** Compare required vs. current infrastructure
   **Create implementation plan:** For any infrastructure gaps

**Evidence Required:**
- Data Collection Strategy Document (section in PMMP)
- Data Collection Methods Matrix (Appendix C of PMMP)
- Data Privacy Impact Assessment (if new data collection)
- Infrastructure Gap Analysis
- Deployer Communication Templates (FORM-AI-PMM-002)

**Timing:** 2-3 weeks

**Quality Check:**
- All required metric categories covered
- Both active and reactive collection methods defined
- Deployer data collection explicitly addressed
- Privacy and data protection compliance verified
- Technical feasibility validated by MLOps

---

#### Step 1.3: Define Analysis and Evaluation Procedures (Control PMM-003)

**When:** During PMM plan development, after data collection strategy defined

**Who:** Data Analytics Lead + AI Risk Manager + Compliance Officer

**Regulatory Basis:**
- Article 72(5)(b) - A strategy for the analysis of the data provided
- Article 72(5)(c) - Methods for the evaluation of the continuous compliance

**How:**

1. **Define Performance Analysis Procedures**

   **Statistical Analysis Methods:**
   - Descriptive statistics (mean, median, variance over time)
   - Trend analysis (moving averages, linear regression)
   - Comparative analysis (current vs. baseline, current vs. previous period)
   - Distribution analysis (histograms, KDE plots)
   - Outlier detection (z-score, IQR methods)

   **Document in PMM Plan Section 4.1: Performance Analysis**

2. **Define Bias and Fairness Analysis Procedures**

   **Analysis Procedures:**

   a) **Fairness Metric Calculation**
      - Calculate demographic parity, equal opportunity, equalized odds
      - Frequency: Per monitoring intensity tier (Weekly for Critical/High, Monthly for Medium/Low)
      - Method: Stratified sampling of predictions, grouped by protected characteristics

   b) **Bias Drift Detection**
      - Compare current fairness metrics to baseline (from validation)
      - Apply drift detection algorithms (e.g., Kolmogorov-Smirnov test, Chi-square test)
      - Set drift threshold (e.g., >10% change in fairness ratio)

   c) **Disparate Impact Analysis**
      - Calculate selection/approval rates by protected group
      - Apply 80% rule for adverse impact detection
      - Document findings per group

   d) **Intersectional Bias Analysis** (for Critical/High tier systems)
      - Analyze fairness across intersections of protected characteristics
      - Example: Gender × Race, Age × Disability Status

   **Document in PMM Plan Section 4.2: Bias and Fairness Analysis**

3. **Define Compliance Evaluation Procedures**

   **Continuous Compliance Verification - Article 72(5)(c) Requirement:**

   Per Article 72(5)(c), the PMM plan must include "methods for the evaluation of the continuous compliance of the high-risk AI system."

   **Compliance Evaluation Framework:**

   | EU AI Act Requirement | Compliance Indicator | Verification Method | Frequency |
   |----------------------|---------------------|---------------------|-----------|
   | **Article 10: Data Governance** | Training data representativeness maintained | Compare production input distribution to training data distribution | Monthly |
   | **Article 10(3): Data Quality** | Input data quality maintained | Monitor missing values, outliers, validation failures | Weekly |
   | **Article 13: Transparency** | User information provided | Verify information display in UI; collect user comprehension feedback | Quarterly |
   | **Article 14: Human Oversight** | Human oversight functioning | Monitor override rates, human review times, override outcomes | Weekly |
   | **Article 15: Accuracy** | Accuracy within acceptable range | Monitor accuracy metrics against requirements | Daily/Weekly |
   | **Article 15: Robustness** | System resilient to errors | Monitor error rates, recovery times, system crashes | Continuous |
   | **Article 15: Cybersecurity** | Security measures effective | Monitor security incidents, vulnerability scans, access violations | Continuous |
   | **Article 9: Risk Management** | Risks remain mitigated | Verify KRIs within thresholds; validate control effectiveness | Weekly |

   **Compliance Verification Process:**

   1. **Monthly Compliance Check:**
      - Review all compliance indicators
      - Document compliance status (Compliant/Non-compliant/Requires Investigation)
      - For non-compliance: Initiate corrective action (Step 4.1)

   2. **Quarterly Compliance Report:**
      - Comprehensive compliance assessment
      - Trend analysis (improving/stable/degrading)
      - Present to AI Governance Committee

   3. **Annual Compliance Audit:**
      - Independent internal audit of compliance verification process
      - Verify all indicators correctly measured
      - Validate corrective actions effective

   **Document in PMM Plan Section 4.3: Compliance Evaluation**

4. **Define Root Cause Analysis Procedures**

   **When to Conduct Root Cause Analysis:**
   - Performance threshold breach
   - Bias drift detected
   - Compliance non-conformity
   - User complaint patterns
   - Incident occurrence

   **Root Cause Analysis Method (5 Whys + Fishbone):**

   1. **Problem Statement:** Clearly define the issue
   2. **Data Collection:** Gather relevant PMM data
   3. **5 Whys Analysis:** Ask "why" 5 times to identify root cause
   4. **Fishbone Diagram:** Categorize potential causes
      - Model factors (architecture, training, hyperparameters)
      - Data factors (distribution shift, quality, labeling)
      - Process factors (deployment, monitoring, updates)
      - People factors (user behavior, deployer actions)
      - Environment factors (infrastructure, integrations)
   5. **Root Cause Identification:** Document most likely root cause(s)
   6. **Validation:** Test hypothesis with data analysis

   **Document in PMM Plan Section 4.4: Root Cause Analysis**

5. **Define Predictive Analysis and Early Warning**

   **Predictive Monitoring (for Critical/High tier systems):**

   - **Trend Extrapolation:** Predict when metric will breach threshold based on current trend
   - **Anomaly Detection:** ML-based detection of unusual patterns (Isolation Forest, Autoencoders)
   - **Drift Prediction:** Early detection of data drift before performance impact
   - **Seasonality Analysis:** Account for expected variations (daily, weekly, seasonal patterns)

   **Early Warning Thresholds:**
   - Yellow threshold: Metric approaching red threshold (e.g., within 20% of breach)
   - Orange threshold: Trend indicates likely breach within X days
   - Red threshold: Actual threshold breach

   **Document in PMM Plan Section 4.5: Predictive Analysis**

6. **Define Analysis Frequency and Responsibilities**

   | Analysis Type | Critical/High Tier | Medium Tier | Low Tier | Responsible |
   |---------------|-------------------|-------------|----------|-------------|
   | Performance metrics | Daily | Weekly | Monthly | Data Analytics Lead |
   | Bias/fairness metrics | Weekly | Monthly | Quarterly | Data Analytics Lead |
   | Compliance indicators | Weekly | Monthly | Quarterly | Compliance Officer |
   | Root cause (when triggered) | Within 48 hours | Within 5 days | Within 10 days | PMM Manager + Analytics |
   | Trend analysis | Weekly | Monthly | Quarterly | Data Analytics Lead |
   | Predictive analysis | Weekly | N/A | N/A | Data Analytics Lead |

   **Document in PMM Plan Section 4.6: Analysis Schedule**

7. **Define Reporting and Escalation Procedures**

   **Internal Reporting:**
   - **Daily:** Automated dashboard for MLOps (Critical/High tier)
   - **Weekly:** PMM status report to PMM Manager and AI System Owner
   - **Monthly:** Comprehensive PMM report to management
   - **Quarterly:** Executive summary to AI Governance Committee

   **Escalation Criteria:** (See Appendix D: Escalation Matrix)
   - Critical threshold breach → Immediate escalation to CPO + AI Governance Committee
   - High threshold breach → Escalation to PMM Manager + AI System Owner within 4 hours
   - Bias drift detected → Escalation to AI Risk Manager within 24 hours
   - Compliance non-conformity → Escalation to Compliance Officer immediately

   **Document in PMM Plan Section 5: Reporting and Escalation**

**Evidence Required:**
- Analysis and Evaluation Procedures (section in PMMP)
- Compliance Evaluation Framework (table in PMMP)
- Root Cause Analysis Template (FORM-AI-PMM-003)
- Escalation Matrix (Appendix D of PMMP)

**Timing:** 2 weeks

**Quality Check:**
- All required analyses defined with clear methodologies
- Continuous compliance evaluation explicitly addressed per Article 72(5)(c)
- Analysis frequencies appropriate to risk tier
- Escalation criteria clearly defined
- Responsible parties assigned

---

#### Step 1.4: Define Risk Management Integration (Control PMM-001, PMM-004)

**When:** During PMM plan development

**Who:** AI Risk Manager + PMM Manager

**Regulatory Basis:** Article 72(5)(d) - The procedure for interaction with the risk management system

**How:**

1. **Document Risk Management System Interface**

   **PMM-to-Risk Management Touchpoints:**

   | PMM Activity | Risk Management Activity | Trigger Criteria | Timeline | Process Reference |
   |--------------|-------------------------|------------------|----------|-------------------|
   | Performance threshold breach | Risk likelihood reassessment | Any red threshold breach | Within 5 business days | PROC-AI-RM-001 Step 2.1 |
   | Bias drift detection | Bias risk reassessment | Fairness ratio <0.8 or >1.25 | Within 5 business days | PROC-AI-RM-001 Step 2.4 |
   | New misuse pattern identified | Misuse risk update | Novel misuse observed | Within 10 business days | PROC-AI-RM-001 Step 1.3 |
   | Incident reported | Incident risk assessment | Any serious incident | Per PROC-AI-INC-001 | PROC-AI-INC-001 Section 6 |
   | Compliance non-conformity | Compliance risk assessment | Any compliance indicator non-compliant | Within 5 business days | PROC-AI-RM-001 Step 2.1 |
   | Control effectiveness validation | Residual risk reassessment | Quarterly (planned review) | Quarterly | PROC-AI-RM-001 Step 5.1 |
   | Environmental change | New risk identification | Regulatory/technical/market change | Within 15 business days | PROC-AI-RM-001 Step 1.2 |

   **Document in PMM Plan Section 6: Risk Management Integration**

2. **Define Risk Register Update Procedures**

   **Procedure for Updating Risk Register Based on PMM Findings:**

   1. **PMM Manager identifies risk-relevant finding** (e.g., bias drift, performance degradation)

   2. **Assess if existing risk or new risk:**
      - If existing risk: Proceed to reassessment
      - If new risk: Initiate risk identification per PROC-AI-RM-001 Step 1.2

   3. **Conduct risk reassessment** (with AI Risk Manager):
      - Review PMM data as evidence
      - Reassess likelihood (actual occurrence rate informs assessment)
      - Reassess impact (actual or near-miss impacts inform assessment)
      - Recalculate risk score
      - Update risk register

   4. **Evaluate residual risk:**
      - Are controls still effective?
      - Is residual risk still acceptable?
      - If residual risk now unacceptable: Initiate corrective action

   5. **Document risk register update:**
      - Update Risk Register (REC-AI-RM-003)
      - Complete Risk Register Update Log (REC-AI-RM-004)
      - Link to PMM finding/report that triggered update

   6. **Escalate if needed:**
      - If risk level increased to High/Critical: Escalate per PROC-AI-RM-001 Section 8

   **Timeline:** Complete within 10 business days of PMM finding

3. **Define KRI Integration**

   **Key Risk Indicators (KRIs) are monitored through PMM:**

   - Link each significant risk in risk register to one or more PMM metrics
   - PMM monitoring provides continuous KRI data
   - KRI thresholds feed into PMM alerting

   **Example Integration:**

   | Risk ID | Risk Description | Linked PMM Metric(s) | KRI Threshold | Alert Level |
   |---------|------------------|---------------------|---------------|-------------|
   | RM-AI-0023 | Bias in credit decisions | Demographic parity ratio | <0.8 or >1.25 | Red |
   | RM-AI-0045 | Accuracy degradation | Overall accuracy | <90% of baseline | Red |
   | RM-AI-0067 | Data drift | Population Stability Index | >0.25 | Orange |

   **Document in PMM Plan Section 6.2: KRI Monitoring**

4. **Define Control Effectiveness Validation**

   **PMM provides evidence of control effectiveness:**

   For each risk control implemented (per PROC-AI-RM-001 Step 4.2), PMM system monitors control effectiveness:

   | Control Type | PMM Validation Method | Frequency |
   |--------------|----------------------|-----------|
   | **Preventive Controls** (e.g., bias mitigation in training) | Monitor output fairness metrics | Weekly |
   | **Detective Controls** (e.g., anomaly detection) | Monitor detection rates, false positive/negative rates | Weekly |
   | **Corrective Controls** (e.g., human override) | Monitor override rates, override outcomes | Weekly |

   **Control Effectiveness Criteria:**
   - Control is operating as designed
   - Control is achieving intended risk reduction
   - No control failures or bypasses detected

   **If control ineffective:** Initiate corrective action per Step 4.1

5. **Document PMM-to-Risk Management Workflow**

   **Create process flow diagram in PMM Plan showing:**
   - How PMM findings trigger risk reassessment
   - Who is responsible at each step
   - What documentation is required
   - Integration points with PROC-AI-RM-001
   - Timelines for each activity

**Evidence Required:**
- Risk Management Integration section (in PMMP)
- PMM-to-Risk Management Process Flow Diagram
- KRI-to-PMM Metric Mapping Table
- Control Effectiveness Validation Plan

**Timing:** 1 week

**Quality Check:**
- All Article 72(5)(d) requirements addressed
- Clear procedures for each integration point
- Timelines defined and realistic
- Responsibilities clearly assigned
- Documentation cross-references verified

---

#### Step 1.5: Define Feedback and Complaint Handling (Control PMM-002, PMM-003)

**When:** During PMM plan development

**Who:** Customer Support Lead + PMM Manager + Compliance Officer

**Regulatory Basis:** Article 72(5)(e) - The procedure for the handling and resolution of user complaints and the collection of feedback

**How:**

1. **Establish Feedback Collection Channels**

   **User Feedback Channels:**
   - In-application feedback form (embedded in AI system UI)
   - Email address for feedback: ai-feedback@[organization].com
   - Dedicated web portal: [organization].com/ai-feedback
   - Customer support ticket system
   - Deployer communication portal
   - Social media monitoring (for public feedback)

   **Deployer Feedback Channels:**
   - Dedicated deployer portal
   - Email: deployer-support@[organization].com
   - Quarterly deployer surveys
   - Regular deployer check-in calls (for High/Critical systems)

   **Document in PMM Plan Section 7.1: Feedback Channels**

2. **Define Feedback Categorization**

   **Feedback Categories:**

   | Category | Description | Examples | Severity |
   |----------|-------------|----------|----------|
   | **Performance Issue** | System not performing as expected | Inaccurate predictions, slow response, errors | High |
   | **Bias/Fairness Concern** | Perceived bias or discrimination | Disparate treatment, unfair outcomes | Critical |
   | **Safety Issue** | Potential harm or dangerous output | Unsafe recommendations, security vulnerability | Critical |
   | **Usability Issue** | Difficulty using system | Confusing interface, unclear outputs | Medium |
   | **Feature Request** | Desired additional functionality | New features, improvements | Low |
   | **Positive Feedback** | Praise or satisfaction | System working well, helpful outputs | Info |
   | **Question/Inquiry** | Request for information | How system works, data usage questions | Low |

   **Automated Categorization:** Implement keyword-based or ML-based categorization

   **Manual Review:** Support team reviews and confirms categorization

3. **Define Complaint Handling Process**

   **Complaint Receipt and Acknowledgment:**

   1. **Complaint received** via any channel
   2. **Automatic acknowledgment** sent within 24 hours
      - Thank user for feedback
      - Provide complaint reference number: COMP-[SYSTEM-ID]-[YYYY-MM-DD]-[SEQ]
      - Set expectation for response timeline
   3. **Complaint logged** in complaint database
   4. **Complaint categorized** by severity and type

   **Complaint Investigation:**

   1. **Assign to investigator:**
      - Critical/High severity: PMM Manager + AI System Owner
      - Medium/Low severity: Customer Support + MLOps
   2. **Investigate complaint:**
      - Review complaint details
      - Gather relevant PMM data (logs, predictions, context)
      - Attempt to reproduce issue
      - Analyze root cause
      - Determine if valid complaint or false positive
   3. **Investigation timeline:**
      - Critical severity: Within 2 business days
      - High severity: Within 5 business days
      - Medium severity: Within 10 business days
      - Low severity: Within 15 business days

   **Complaint Resolution:**

   1. **Determine resolution:**
      - Issue confirmed: Initiate corrective action (Step 4.1)
      - Issue not reproducible: Document investigation findings
      - User education needed: Provide clarification/training
      - Feature request: Log for product roadmap consideration

   2. **Communicate resolution to user:**
      - Explain findings
      - Describe actions taken (if any)
      - Provide contact for follow-up

   3. **Close complaint:**
      - Document resolution in complaint database
      - Update complaint status to "Resolved" or "Closed"
      - Link to any corrective action records

   **Complaint Escalation:**

   | Severity | Escalation Criteria | Escalate To | Timeline |
   |----------|---------------------|-------------|----------|
   | Critical | Safety issue, bias concern, serious incident potential | CPO + AI Governance Committee + Legal | Immediate |
   | High | Performance issue affecting many users, compliance concern | PMM Manager + AI System Owner | Within 4 hours |
   | Medium | Recurring issue, pattern of similar complaints | PMM Manager | Within 24 hours |
   | Low | Standard complaints | No escalation required | N/A |

   **Document in PMM Plan Section 7.2: Complaint Handling Process**

4. **Define Feedback Analysis Procedures**

   **Feedback Analysis Activities:**

   a) **Trend Analysis:**
      - Identify patterns in feedback (recurring issues, common themes)
      - Frequency: Monthly
      - Method: Categorization analysis, keyword extraction, sentiment analysis

   b) **Root Cause Analysis:**
      - For patterns of complaints, conduct root cause analysis
      - Use 5 Whys or Fishbone diagram
      - Frequency: When pattern identified (>5 similar complaints within 30 days)

   c) **Satisfaction Analysis:**
      - Calculate Net Promoter Score (NPS) or Customer Satisfaction Score (CSAT)
      - Frequency: Quarterly
      - Method: Structured survey to user sample

   d) **Feedback-to-PMM Metric Correlation:**
      - Correlate subjective feedback with objective PMM metrics
      - Example: Complaints about inaccuracy vs. measured accuracy metrics
      - Identify gaps between user perception and measured performance

   **Document in PMM Plan Section 7.3: Feedback Analysis**

5. **Define Feedback-to-Action Process**

   **How Feedback Triggers Actions:**

   ```
   Feedback Received
         ↓
   Categorized and Logged
         ↓
   ┌─────────────────────┬──────────────────┬────────────────────┐
   │                     │                  │                    │
   Critical/High      Medium             Low              Positive
   Severity           Severity          Severity          Feedback
   │                     │                  │                    │
   ↓                     ↓                  ↓                    ↓
   Immediate          Standard          Routine           Log Only
   Investigation      Investigation     Investigation     (for analysis)
   │                     │                  │
   ↓                     ↓                  ↓
   Root Cause         Root Cause        Root Cause
   Analysis           Analysis          Analysis
   (if warranted)     (if pattern)      (if pattern)
   │                     │                  │
   ↓                     ↓                  ↓
   Corrective         Corrective        Document
   Action             Action            Findings
   (Step 4.1)         (Step 4.1)
   ```

6. **Define Communication and Transparency**

   **Feedback Transparency:**
   - Publish quarterly feedback summary (anonymized)
   - Report on common issues and resolutions
   - Demonstrate responsiveness to user concerns

   **Deployer Communication:**
   - Share relevant feedback patterns with deployers
   - Quarterly feedback summary sent to all deployers
   - Enables deployers to anticipate user concerns

7. **Define Feedback Database and Records**

   **Complaint Database Fields:**
   - Complaint ID (unique identifier)
   - Date received
   - Source channel (email, web form, support ticket, etc.)
   - User information (anonymized if needed for privacy)
   - AI system and version
   - Complaint category and severity
   - Description (free text)
   - Investigation findings
   - Resolution description
   - Corrective actions linked (if any)
   - Status (Open, Investigating, Resolved, Closed)
   - Dates (received, acknowledged, investigated, resolved, closed)

   **Retention:** Retain complaint records for 10 years per Article 12(2)

**Evidence Required:**
- Feedback and Complaint Handling section (in PMMP)
- Feedback Collection Channel Documentation
- Complaint Database Schema
- Complaint Handling Process Flow Diagram
- Feedback Analysis Templates (FORM-AI-PMM-004)

**Timing:** 1-2 weeks

**Quality Check:**
- All Article 72(5)(e) requirements addressed
- Multiple feedback channels established
- Clear complaint handling process with timelines
- Escalation criteria defined
- Privacy considerations addressed
- Integration with corrective action system

---

#### Step 1.6: Define Deployer Communication Strategy (Control PMM-002)

**When:** During PMM plan development

**Who:** PMM Manager + Customer Success/Account Management + Legal

**Regulatory Basis:** Article 72(5)(f) - Mechanisms to establish and maintain effective channels of communication with deployers and downstream providers

**How:**

1. **Identify Deployer Population**
   - List all deployers of the AI system
   - Categorize deployers:
     - Direct deployers (organization's direct customers)
     - Downstream providers (deployers who further distribute)
     - Internal deployers (if AI system used internally)
   - Assign deployer risk tier based on:
     - Deployment scale (number of end users)
     - Use case criticality
     - Deployer technical capability

   **Document in PMM Plan Section 8.1: Deployer Landscape**

2. **Establish Communication Channels**

   **Primary Communication Channels:**

   | Channel | Purpose | Frequency | Responsible |
   |---------|---------|-----------|-------------|
   | **Deployer Portal** | Self-service information, feedback submission, performance data sharing | Continuous access | Customer Success |
   | **Email Distribution List** | Safety communications, important updates | As needed (critical updates) | PMM Manager |
   | **Quarterly Business Review (QBR)** | High-touch deployers: performance review, feedback discussion | Quarterly | Account Manager + PMM Manager |
   | **Deployer Survey** | Structured feedback collection | Quarterly | PMM Manager |
   | **Deployer Webinars** | Training, best practices, updates | Bi-annually | PMM Manager + Product |
   | **Technical Support Channel** | Issue resolution, technical assistance | Continuous access | Technical Support |
   | **Emergency Hotline** | Critical incidents, urgent issues | 24/7 availability | On-call PMM Manager |

   **Document in PMM Plan Section 8.2: Communication Channels**

3. **Define Communication Protocols**

   **Proactive Communications (Provider-Initiated):**

   a) **Regular Updates:**
      - Quarterly newsletter with PMM summary
      - Release notes for AI system updates
      - Best practices and usage tips
      - Regulatory updates relevant to deployers

   b) **Performance Reports:**
      - For high-touch deployers: Quarterly performance report specific to their deployment
      - Includes: accuracy metrics, incident summary, recommendations

   c) **Safety Communications:**
      - Field Safety Notices (FSN) for identified risks
      - Corrective action notifications
      - Recall or system update requirements
      - Timeline: Within 24-48 hours of identification

   d) **Planned Outages/Maintenance:**
      - Advance notice (minimum 2 weeks for non-emergency)
      - Maintenance window details
      - Expected impact

   **Reactive Communications (Deployer-Initiated):**

   a) **Deployer Inquiries:**
      - Response SLA: Within 2 business days
      - Channel: deployer-support@[organization].com or portal

   b) **Deployer Incident Reports:**
      - Acknowledgment: Within 4 hours
      - Investigation initiation: Within 24 hours
      - Channel: incident-report@[organization].com or portal

   c) **Deployer Feedback:**
      - Acknowledgment: Within 24 hours
      - Logged in PMM feedback database

   **Document in PMM Plan Section 8.3: Communication Protocols**

4. **Define Data Sharing Agreements**

   **Deployer Data Sharing Requirements:**

   **Article 72(5)(a) requires strategy for collecting data from deployers. This requires establishing data sharing agreements.**

   **Contractual Provisions:**
   - Deployer obligation to provide performance data (specify frequency, format)
   - Deployer obligation to report incidents and safety concerns
   - Deployer obligation to collect and share user feedback
   - Data format and submission specifications
   - Confidentiality and data protection provisions
   - Consequences of non-compliance

   **Data to be Shared by Deployers:**
   - Usage statistics (volume, frequency, user demographics if permissible)
   - Performance observations (accuracy in their context, issues observed)
   - Incidents and near-misses
   - User feedback and complaints received by deployer
   - Changes in deployment environment or use case

   **Data Sharing Mechanism:**
   - Automated API submission (preferred)
   - Structured data file upload to portal
   - Quarterly structured report (template provided)

   **Legal Review:** Ensure data sharing provisions comply with GDPR and other applicable laws

   **Document in PMM Plan Section 8.4: Data Sharing Agreements**

5. **Define Downstream Provider Communication**

   **If AI system may be further distributed (provider → downstream provider → end users):**

   - Establish communication channel with downstream providers
   - Downstream providers must be able to receive and forward:
     - Safety communications
     - Corrective action notifications
     - PMM data requests
   - Contractual requirement: Downstream providers notify provider of their deployers

   **Document in PMM Plan Section 8.5: Downstream Provider Communication**

6. **Define Deployer Training and Support**

   **Training Programs:**
   - Initial deployer onboarding training (PMM obligations, data sharing, feedback submission)
   - Ongoing training webinars (quarterly)
   - Documentation and user guides

   **Support Resources:**
   - Deployer knowledge base
   - FAQs
   - Video tutorials
   - Technical support contact

   **Document in PMM Plan Section 8.6: Deployer Training**

7. **Define Communication Effectiveness Measurement**

   **KPIs for Deployer Communication:**
   - Deployer response rate to surveys (target: >70%)
   - Deployer data submission compliance (target: >90% on-time)
   - Deployer satisfaction score (quarterly survey)
   - Communication reach (% deployers receiving communications)
   - Average time to respond to deployer inquiries

   **Quarterly Review:** Assess communication effectiveness and adjust strategy if needed

**Evidence Required:**
- Deployer Communication Strategy (section in PMMP)
- Deployer Contact List (maintained separately, referenced in PMMP)
- Communication Templates (emails, FSN templates, report templates)
- Data Sharing Agreement Template (FORM-AI-PMM-005)
- Deployer Training Materials

**Timing:** 2 weeks

**Quality Check:**
- All Article 72(5)(f) requirements addressed
- Multiple bidirectional communication channels established
- Clear protocols for both proactive and reactive communications
- Data sharing obligations clearly defined
- Legal review of contractual provisions completed
- Downstream provider communication addressed (if applicable)

---

#### Step 1.7: Finalize and Approve PMM Plan (Control PMM-001)

**When:** After all PMM plan sections developed

**Who:** PMM Manager + AI Governance Committee

**How:**

1. **Compile Complete PMM Plan**
   - Assemble all sections per Appendix A template
   - Ensure all Article 72(5) requirements addressed:
     ✓ (a) Data collection strategy
     ✓ (b) Data analysis strategy
     ✓ (c) Compliance evaluation methods
     ✓ (d) Risk management integration
     ✓ (e) Feedback and complaint handling
     ✓ (f) Deployer communication mechanisms
   - Include all appendices (templates, forms, matrices)
   - Apply document control per PROC-QMS-001

2. **Internal Review**
   - **Quality Review:** QMS Representative reviews for QMS integration
   - **Risk Review:** AI Risk Manager reviews for risk management integration
   - **Compliance Review:** Compliance Officer reviews for regulatory completeness
   - **Technical Review:** MLOps Lead reviews for technical feasibility
   - **Legal Review:** Legal reviews contractual provisions and data protection
   - Incorporate feedback and revise plan

3. **Obtain Approvals**

   | Approver | Role | Approval Criteria | Timeline |
   |----------|------|-------------------|----------|
   | AI System Owner | System expert | Plan appropriate for system characteristics | 3 business days |
   | PMM Manager | Procedure owner | Plan complete and executable | Continuous |
   | QMS Representative | Quality oversight | Plan aligns with QMS | 3 business days |
   | AI Risk Manager | Risk oversight | Risk integration adequate | 3 business days |
   | Compliance Officer | Regulatory oversight | EU AI Act requirements met | 5 business days |
   | AI Governance Committee | Executive oversight | Plan approved for implementation | 10 business days |

   **Approval Process:**
   - Circulate PMMP for review (allow 1 week)
   - Collect written approvals (email or signature)
   - If any concerns raised: Address and re-submit
   - Final approval by AI Governance Committee

4. **Integrate into Technical Documentation**
   - Add PMMP to AI system technical documentation per Article 11
   - Ensure PMMP is version-controlled
   - Link PMMP to AI system ID
   - Store in document management system with access controls

5. **Communicate PMM Plan**
   - Share approved PMMP with all responsible parties
   - Conduct PMMP kickoff meeting with implementation team
   - Distribute deployer communications about PMM system
   - Publish summary for transparency (if appropriate)

6. **Prepare for Implementation**
   - Create implementation project plan
   - Assign implementation tasks
   - Set implementation timeline (target: 4-8 weeks before deployment)
   - Prepare for infrastructure setup (Phase 2)

**Evidence Required:**
- Complete PMM Plan (PMMP-[AI-SYSTEM-ID]-v1.0)
- Review Comments and Resolutions Log
- Approval Records (emails or signed forms) (REC-AI-PMM-002)
- Technical Documentation Integration Record
- PMMP Communication Distribution List

**Timing:** 2 weeks for review and approval

**Quality Check:**
- All required approvals obtained
- No unresolved review comments
- PMMP added to technical documentation
- Version control established
- All responsible parties notified

---

### PHASE 2: DATA COLLECTION AND ANALYSIS

#### Step 2.1: Implement Monitoring Infrastructure (Control PMM-002)

**When:** After PMMP approved, before AI system deployment (or immediately post-deployment if PMM not implemented pre-deployment)

**Who:** MLOps Lead + Data Engineering + DevOps

**How:**

1. **Set Up Logging Infrastructure**

   **Prediction Logging:**
   - Log every prediction made by AI system in production
   - Minimum logged data:
     - Timestamp
     - User/session ID (pseudonymized if needed)
     - Model version
     - Input features (or hash if PII)
     - Prediction output
     - Confidence score
     - Inference latency
   - Storage: Structured logging to database or data lake
   - Retention: 10 years per Article 12(2)

   **System Event Logging:**
   - Application logs (errors, warnings, info)
   - API request/response logs
   - Authentication/authorization events
   - System health metrics (CPU, memory, disk, network)

   **Infrastructure:**
   - Centralized log aggregation (e.g., ELK Stack, Splunk, Datadog)
   - Structured logging format (JSON)
   - Log rotation and archival

2. **Set Up Performance Monitoring**

   **Real-Time Metrics Collection:**
   - Application Performance Monitoring (APM) tool (e.g., Datadog, New Relic, Prometheus)
   - Collect metrics per PMMP Section 3 (Data Collection Strategy)
   - Time-series database for metrics storage

   **Metrics to Monitor:**
   - Model performance (accuracy, precision, recall - calculated in batch)
   - Operational metrics (latency, throughput, error rate, uptime)
   - Data quality metrics (missing values, outliers, drift)
   - Resource utilization (CPU, memory, GPU utilization)

   **Monitoring Frequency:**
   - Real-time metrics: Continuous streaming
   - Batch metrics (accuracy, bias): Per PMMP (daily/weekly depending on risk tier)

3. **Set Up Ground Truth Collection**

   **For metrics requiring ground truth (accuracy, precision, recall):**

   - **Automated ground truth:** If available (e.g., user confirms/rejects prediction)
   - **Delayed ground truth:** Collect actual outcomes after time delay
   - **Sampled ground truth:** Human labeling of prediction sample (if automated not available)
   - **Frequency:** Per PMMP (daily for Critical/High, weekly for Medium, monthly for Low)

   **Ground Truth Database:**
   - Link predictions to ground truth labels
   - Calculate performance metrics in batch jobs
   - Store calculated metrics in time-series database

4. **Set Up Bias and Fairness Monitoring**

   **Data Requirements:**
   - Collect protected characteristics (if legally permissible and GDPR-compliant)
   - If not possible: Use proxy variables or inference (with caution)
   - Alternative: Conduct periodic bias audits on representative samples

   **Fairness Calculation Pipeline:**
   - Batch job to calculate fairness metrics (weekly/monthly per PMMP)
   - Stratify predictions by protected group
   - Calculate demographic parity, equal opportunity, equalized odds
   - Store fairness metrics in time-series database

   **Drift Detection Pipeline:**
   - Calculate Population Stability Index (PSI) for input features
   - Compare current distribution to baseline (training data)
   - Flag significant drift (PSI > 0.25)
   - Frequency: Weekly (per PMMP)

5. **Set Up Dashboards and Visualization**

   **Real-Time Operations Dashboard:**
   - For MLOps team monitoring
   - Displays: Latency, throughput, error rate, system health
   - Alert indicators for threshold breaches
   - Tool: Grafana, Datadog, or custom dashboard

   **Performance Analytics Dashboard:**
   - For PMM Manager and Analytics Lead
   - Displays: Accuracy trends, precision/recall over time, performance by segment
   - Comparative charts (current vs. baseline, current vs. previous period)
   - Tool: Tableau, Looker, or custom analytics platform

   **Fairness Monitoring Dashboard:**
   - For PMM Manager and Compliance Officer
   - Displays: Fairness metrics over time, disparate impact analysis, bias drift indicators
   - Alert indicators for fairness threshold breaches

   **Executive Summary Dashboard:**
   - For AI Governance Committee and management
   - High-level KPIs: System health, performance summary, incident count, trend direction
   - Red/yellow/green status indicators

6. **Set Up Alerting System**

   **Alert Configuration:**
   - Define alerts per Escalation Matrix (Appendix D)
   - Configure alert thresholds per PMMP
   - Multi-channel alerting: Email, SMS, Slack/Teams, PagerDuty

   **Alert Types:**

   | Alert Severity | Trigger Criteria | Recipients | Response Time |
   |----------------|------------------|------------|---------------|
   | **Critical (Red)** | Safety metric breach, critical bias drift, system failure | PMM Manager, AI System Owner, CPO, On-call Engineer | Immediate (15 min) |
   | **High (Orange)** | Performance threshold breach, high bias drift | PMM Manager, AI System Owner, MLOps Lead | 4 hours |
   | **Medium (Yellow)** | Warning threshold, trend toward breach | MLOps Lead, PMM Manager | 24 hours |
   | **Low (Blue)** | Informational, monitoring notice | MLOps Lead | No response required |

   **Alert Escalation:**
   - If no response within response time: Auto-escalate to next level
   - Critical alerts: Escalate to CPO if no resolution within 2 hours

7. **Implement Feedback Collection Forms**

   **In-Application Feedback:**
   - Embed feedback form in AI system UI
   - Fields: Feedback type, description, user contact (optional)
   - Submit to feedback API

   **Web Portal:**
   - Public-facing feedback portal
   - Form: Feedback type, AI system, description, contact info
   - Submit to feedback database

   **Deployer Portal:**
   - Secure login for deployers
   - Structured performance data submission form
   - Incident reporting form
   - Feedback submission

   **Integration:**
   - All feedback routes to centralized feedback database
   - Auto-categorization and routing to responsible parties

8. **Test Monitoring Infrastructure**

   **Testing Checklist:**
   - [ ] Prediction logging working (verify logs captured)
   - [ ] Performance metrics collecting (verify dashboard displays data)
   - [ ] Ground truth collection functional (verify accuracy calculation)
   - [ ] Bias metrics calculating (verify fairness dashboard)
   - [ ] Dashboards displaying data correctly
   - [ ] Alerts triggering correctly (test with simulated threshold breach)
   - [ ] Feedback forms submitting to database
   - [ ] Data retention configured per PMMP

   **Load Testing:**
   - Verify monitoring infrastructure can handle production load
   - Test data ingestion rate
   - Test dashboard query performance

9. **Document Infrastructure**
   - Create infrastructure documentation
   - Document data flows
   - Document dashboard access and usage
   - Document alert configuration
   - Train MLOps team on monitoring operations

**Evidence Required:**
- Monitoring Infrastructure Implementation Report (RPT-AI-PMM-001)
- Infrastructure Architecture Diagram
- Dashboard Screenshots (REC-AI-PMM-003)
- Alert Configuration Documentation
- Infrastructure Testing Results
- Training Records for MLOps Team

**Timing:** 4-6 weeks (can be parallel with AI system development)

**Quality Check:**
- All metrics defined in PMMP are being collected
- Dashboards operational and displaying data
- Alerts configured per Escalation Matrix
- Feedback forms functional
- Testing completed successfully
- Infrastructure documented

---

#### Step 2.2: Collect Performance Data (Control PMM-002)

**When:** Continuously throughout AI system operational lifecycle

**Who:** MLOps Team (automated) + PMM Manager (oversight)

**How:**

1. **Automated Data Collection**

   **Continuous Collection (24/7):**
   - Prediction logging (every inference)
   - Operational metrics (real-time streaming)
   - System health metrics (continuous monitoring)
   - Error and exception logging (as they occur)

   **Scheduled Batch Collection:**
   - Ground truth collection (per PMMP schedule)
   - Accuracy calculation (daily/weekly per risk tier)
   - Bias metrics calculation (weekly/monthly per risk tier)
   - Drift analysis (weekly)
   - Aggregated statistics (daily rollups)

   **Infrastructure monitors and executes per schedule; no manual intervention required.**

2. **Deployer Data Collection**

   **Proactive Deployer Outreach:**
   - Quarterly deployer survey (automated email distribution)
   - Quarterly deployer performance report request
   - Annual deployer interview (for High/Critical tier systems)

   **Deployer Portal Submissions:**
   - Monitor deployer portal for submitted data
   - Review and validate submitted data
   - Follow up with deployers who haven't submitted (per contractual obligation)

   **Data Validation:**
   - Check completeness of deployer submissions
   - Validate data format and quality
   - Contact deployer if clarification needed

3. **User Feedback Collection**

   **Monitor Feedback Channels:**
   - Check feedback database daily
   - Review new feedback submissions
   - Categorize and prioritize
   - Route to appropriate investigator

   **Social Media Monitoring (if applicable):**
   - Monitor public mentions of AI system
   - Collect relevant feedback and concerns
   - Document in feedback database

4. **Market Surveillance and External Information**

   **Regulatory Monitoring:**
   - Monitor for market surveillance authority communications
   - Monitor for regulatory updates affecting AI system
   - Subscribe to EU AI Act notification services

   **Scientific and Technical Monitoring:**
   - Monitor scientific publications about similar AI systems
   - Monitor for new attack vectors or vulnerabilities
   - Subscribe to relevant security bulletins
   - Attend conferences and webinars

   **Competitive Intelligence:**
   - Monitor similar AI systems in market
   - Learn from incidents affecting competitors
   - Identify emerging best practices

5. **Incident and Near-Miss Data**

   **Integration with Incident Management:**
   - Automatically collect incident reports from PROC-AI-INC-001
   - Link incidents to AI systems in PMM database
   - Track near-misses and close calls

   **Proactive Near-Miss Collection:**
   - Encourage users and deployers to report near-misses
   - Include near-miss reporting in feedback channels
   - Analyze near-misses for risk insights

6. **Data Quality Assurance**

   **Automated Data Quality Checks:**
   - Monitor data completeness (% of expected data collected)
   - Monitor data validity (outliers, anomalies in data itself)
   - Monitor data freshness (latency from event to collection)
   - Alert if data quality issues detected

   **Manual Data Quality Reviews:**
   - PMM Manager reviews data quality metrics weekly
   - Investigate any data collection gaps
   - Validate automated metrics accuracy (spot checks)

7. **Data Storage and Retention**

   **Storage Infrastructure:**
   - Hot storage: Recent data (last 90 days) for real-time querying
   - Warm storage: Historical data (90 days - 2 years) for analysis
   - Cold storage: Archival data (2+ years) for compliance (10-year retention)

   **Data Lifecycle Management:**
   - Automated archival of old data
   - Ensure 10-year retention per Article 12(2)
   - Encrypted storage for sensitive data
   - Access controls per data sensitivity

8. **Weekly Data Collection Review**

   **PMM Manager reviews:**
   - Data collection completeness (are all expected metrics collecting?)
   - Data quality metrics (any issues or gaps?)
   - Deployer data submission status (who hasn't submitted?)
   - Feedback volume and trends
   - Any infrastructure issues affecting data collection

   **Document findings in weekly PMM status report**

**Evidence Required:**
- Performance Data Database (ongoing)
- Weekly Data Collection Status Reports (REC-AI-PMM-004)
- Deployer Data Submissions (logged in system)
- Feedback Database (ongoing)
- Data Quality Metrics Dashboard

**Timing:** Ongoing (continuous process)

**Quality Check:**
- Data collection completeness >95% per PMMP
- No data collection outages >4 hours
- Deployer submission rate >70%
- Data quality metrics within acceptable thresholds

---

#### Step 2.3: Analyze Performance Data (Control PMM-003)

**When:** Per PMMP analysis schedule (daily/weekly/monthly depending on risk tier)

**Who:** Data Analytics Lead + PMM Manager

**How:**

1. **Scheduled Performance Analysis**

   **Analysis Frequency per Risk Tier:**
   - Critical/High tier: Daily operational metrics, weekly comprehensive analysis
   - Medium tier: Weekly operational metrics, monthly comprehensive analysis
   - Low tier: Monthly analysis

   **Analysis Workflow:**

   a) **Data Extraction:**
      - Query performance database for analysis period
      - Extract relevant metrics per PMMP
      - Prepare analysis dataset

   b) **Descriptive Statistics:**
      - Calculate summary statistics (mean, median, std dev, min, max)
      - For each metric over analysis period
      - Compare to baseline and previous period

   c) **Trend Analysis:**
      - Plot metrics over time
      - Fit trend lines (linear regression, moving averages)
      - Identify trends: improving, stable, degrading
      - Extrapolate trends to predict future values

   d) **Comparative Analysis:**
      - Current period vs. baseline (from validation)
      - Current period vs. previous period
      - Current performance vs. requirements
      - Identify significant deviations (>5% change)

   e) **Segmentation Analysis:**
      - Break down performance by segment (user type, use case, geography, time of day)
      - Identify segments with underperformance
      - Investigate root causes for segment differences

   f) **Outlier Detection:**
      - Identify anomalous data points
      - Investigate outliers for insights (attacks, misuse, errors)

2. **Bias and Fairness Analysis**

   **Fairness Metrics Calculation:**
   - Calculate demographic parity, equal opportunity, equalized odds per PMMP Section 4.2
   - Frequency: Weekly for Critical/High, Monthly for Medium, Quarterly for Low

   **Bias Drift Detection:**
   - Compare current fairness metrics to baseline
   - Calculate drift magnitude (absolute difference, ratio)
   - Apply drift detection tests (statistical significance)
   - Flag if drift exceeds threshold (e.g., fairness ratio <0.8 or >1.25)

   **Disparate Impact Analysis:**
   - Calculate selection/approval rates by protected group
   - Calculate disparate impact ratios (protected group rate / reference group rate)
   - Apply 80% rule (ratio <0.8 indicates adverse impact)

   **Intersectional Analysis (Critical/High tier):**
   - Analyze fairness at intersections of protected characteristics
   - Example: Performance for "Female + Older Adult" vs. "Male + Younger Adult"
   - Identify intersectional bias patterns

   **Document findings in Bias Analysis Report (RPT-AI-PMM-002)**

3. **Compliance Evaluation**

   **Monthly Compliance Check (per PMMP Section 4.3):**

   For each compliance indicator in PMMP:
   - Measure current status
   - Compare to requirement/threshold
   - Determine compliance status: Compliant / Non-compliant / Requires Investigation
   - Document findings

   **Example Compliance Evaluation:**

   | Requirement | Indicator | Threshold | Current Value | Status | Notes |
   |-------------|-----------|-----------|---------------|--------|-------|
   | Article 15: Accuracy | Overall accuracy | ≥90% | 92.3% | ✅ Compliant | Stable |
   | Article 10: Data Quality | Missing value rate | <5% | 2.1% | ✅ Compliant | Improved from last month |
   | Article 15: Robustness | System error rate | <1% | 0.3% | ✅ Compliant | Stable |
   | Article 14: Human Oversight | Override rate tracked | Yes | Yes | ✅ Compliant | 15% override rate |

   **If non-compliant:** Initiate corrective action (Step 4.1)

4. **Root Cause Analysis (when triggered)**

   **Triggers for Root Cause Analysis:**
   - Performance threshold breach
   - Bias drift detected
   - Compliance non-conformity
   - Pattern in user complaints (>5 similar complaints)
   - Incident occurrence

   **Root Cause Analysis Procedure (per PMMP Section 4.4):**

   1. **Define problem:** Precise statement of issue
   2. **Gather data:** Collect all relevant PMM data
   3. **5 Whys Analysis:** Iteratively ask "why" to identify root cause
   4. **Fishbone Diagram:** Map potential causes across categories
      - Model factors
      - Data factors
      - Process factors
      - People factors
      - Environment factors
   5. **Hypothesis testing:** Use data to validate hypothesized root cause
   6. **Root cause identification:** Document confirmed root cause(s)
   7. **Corrective action recommendation:** Propose actions to address root cause

   **Document in Root Cause Analysis Report (RPT-AI-PMM-003)**

   **Timeline:** Complete within 48 hours (Critical/High), 5 days (Medium), 10 days (Low)

5. **Predictive Analysis (Critical/High tier systems)**

   **Trend Extrapolation:**
   - Use historical trend to predict future metric values
   - Identify when threshold breach predicted
   - Issue early warning if breach predicted within 30 days

   **Anomaly Prediction:**
   - Train anomaly detection model on historical data
   - Flag unusual patterns that may precede performance issues
   - Use Isolation Forest, Autoencoders, or similar techniques

   **Drift Prediction:**
   - Monitor rate of change in feature distributions
   - Predict when significant drift will occur
   - Issue early warning if drift expected within 60 days

6. **Feedback Analysis**

   **Monthly Feedback Review:**
   - Aggregate feedback by category
   - Calculate feedback volume trends
   - Identify recurring themes (keyword analysis, clustering)
   - Sentiment analysis (positive, neutral, negative)
   - Correlate feedback themes with objective metrics

   **Pattern Identification:**
   - Flag patterns: >5 similar complaints within 30 days
   - Investigate patterns for root cause
   - Determine if corrective action needed

7. **Generate Analysis Reports**

   **Weekly Performance Analysis Report (for Critical/High tier):**
   - Executive summary (key findings)
   - Metric trends (charts and statistics)
   - Threshold breach alerts
   - Compliance status summary
   - Issues requiring attention
   - Recommendations

   **Monthly Comprehensive PMM Report (for all tiers):**
   - Executive summary
   - Performance analysis (all metrics)
   - Bias and fairness analysis
   - Compliance evaluation
   - Feedback analysis
   - Root cause analyses conducted
   - Corrective actions initiated
   - Trends and predictions
   - Recommendations

   **Distribution:**
   - Weekly report: PMM Manager, AI System Owner, MLOps Lead
   - Monthly report: PMM Manager, AI System Owner, QMS Rep, AI Risk Manager, AI Governance Committee

**Evidence Required:**
- Performance Analysis Reports (weekly/monthly) (RPT-AI-PMM-004)
- Bias Analysis Reports (RPT-AI-PMM-002)
- Compliance Evaluation Records (REC-AI-PMM-005)
- Root Cause Analysis Reports (RPT-AI-PMM-003)
- Feedback Analysis Reports (RPT-AI-PMM-005)

**Timing:** Per PMMP schedule (ongoing)

**Quality Check:**
- Analysis completed per schedule
- All metrics analyzed
- Findings clearly documented
- Recommendations actionable
- Reports distributed to stakeholders

---

### PHASE 3: PERFORMANCE EVALUATION

#### Step 3.1: Evaluate Continuous Compliance (Control PMM-003)

**When:** Monthly (standard) or per PMMP schedule

**Who:** Compliance Officer + PMM Manager

**Regulatory Basis:** Article 72(5)(c) - Methods for the evaluation of the continuous compliance of the high-risk AI system

**How:**

1. **Conduct Monthly Compliance Evaluation**

   **Review all compliance indicators** defined in PMMP Section 4.3:

   For each EU AI Act requirement applicable to the AI system:
   - Identify compliance indicator (measurable metric or verification method)
   - Measure current status
   - Compare to requirement threshold
   - Determine compliance status
   - Document findings

   **Use Compliance Evaluation Checklist (CHK-AI-PMM-001)**

2. **Compliance Status Determination**

   **Compliance Categories:**

   - **✅ Compliant:** Indicator meets or exceeds requirement; no action needed
   - **⚠️ Requires Investigation:** Indicator close to threshold or data inconclusive; investigate further
   - **❌ Non-compliant:** Indicator clearly violates requirement; immediate corrective action required

   **Example Evaluation:**

   | Article | Requirement | Indicator | Target | Actual | Status |
   |---------|-------------|-----------|--------|--------|--------|
   | 10(3) | Data quality | Missing value rate | <5% | 2.1% | ✅ Compliant |
   | 15 | Accuracy | Overall accuracy | ≥90% | 88.5% | ❌ Non-compliant |
   | 15 | Robustness | Error rate | <1% | 0.95% | ⚠️ Requires Investigation |
   | 14 | Human oversight | Override functionality | Working | Working | ✅ Compliant |

3. **Trend Analysis for Compliance**

   **For each compliance indicator:**
   - Review trend over past 3-6 months
   - Determine trend direction: Improving, Stable, Degrading
   - Identify any cyclical patterns or seasonality
   - Predict future compliance status based on trend

   **Early Warning:**
   - If trend indicates likely future non-compliance, flag for preventive action
   - Example: Accuracy declining 1% per month → will breach threshold in 2 months → preventive action needed

4. **Root Cause Analysis for Non-Compliance**

   **If non-compliant status identified:**
   - Initiate root cause analysis per Step 2.3
   - Identify why non-compliance occurred
   - Determine if systemic issue or temporary deviation
   - Document root cause

5. **Corrective Action Determination**

   **For each non-compliance:**
   - Determine corrective action needed (detailed in Step 4.1)
   - Assign corrective action owner
   - Set target resolution date
   - Document in Corrective Action Plan

6. **Report to Authorities (if required)**

   **Serious Non-Compliance:**
   - If non-compliance could lead to serious incident or fundamental rights violation
   - Report to market surveillance authority per Step 5.2
   - Timeline: Within 15 days of identification

7. **Document Compliance Evaluation**

   **Monthly Compliance Evaluation Report:**
   - Summary of all compliance indicators
   - Compliance status for each
   - Trends identified
   - Non-compliances identified
   - Corrective actions initiated
   - Overall compliance posture (% compliant indicators)

   **Store in:** Document management system linked to AI system ID

   **Present to:** AI Governance Committee (quarterly summary)

**Evidence Required:**
- Monthly Compliance Evaluation Report (RPT-AI-PMM-006)
- Compliance Evaluation Checklist (CHK-AI-PMM-001) - completed
- Corrective Action Plans (for non-compliances) (FORM-AI-PMM-006)
- Authority Notification Records (if applicable)

**Timing:** Monthly (scheduled)

**Quality Check:**
- All compliance indicators evaluated
- Compliance status clearly determined
- Non-compliances escalated appropriately
- Corrective actions initiated for all non-compliances
- Report completed and distributed

---

#### Step 3.2: Validate Risk Management Assumptions (Control PMM-004)

**When:** Quarterly (standard) or when PMM findings indicate need for reassessment

**Who:** AI Risk Manager + PMM Manager

**Regulatory Basis:** Article 9(6) - Risk management measures shall be reviewed and updated regularly; Article 72(5)(d) - Interaction with risk management system

**How:**

1. **Gather PMM Evidence for Risk Validation**

   **Collect from PMM data:**
   - Actual incident rates (vs. predicted likelihood)
   - Actual impacts of incidents (vs. predicted impact)
   - Control effectiveness data (are controls working as designed?)
   - New risks identified through PMM
   - Misuse patterns observed
   - Environmental changes affecting risks

   **Time period:** Past quarter (for quarterly review) or since last review

2. **Validate Likelihood Assessments**

   **For each risk in risk register:**

   a) **Compare predicted vs. actual:**
      - Risk assessment predicted likelihood: [1-5 scale]
      - Actual occurrence rate from PMM data: [count/frequency]
      - Convert actual rate to likelihood scale

   b) **Determine if assessment accurate:**
      - If actual matches predicted: Assessment validated ✅
      - If actual significantly higher: Likelihood underestimated ⚠️
      - If actual significantly lower: Likelihood overestimated (good news, but review controls)

   c) **Reassess if needed:**
      - If likelihood underestimated: Update risk assessment per PROC-AI-RM-001 Step 2.1
      - Recalculate risk score
      - Determine if additional controls needed

   **Example:**

   | Risk | Predicted Likelihood | Actual Incidents (3 months) | Actual Likelihood | Assessment Status | Action |
   |------|---------------------|---------------------------|------------------|------------------|---------|
   | RM-AI-0023: Bias in output | 4 (Likely) | 15 bias complaints | 5 (Almost Certain) | ⚠️ Underestimated | Reassess; enhance controls |
   | RM-AI-0045: Accuracy degradation | 3 (Possible) | 1 instance | 2 (Unlikely) | ✅ Overestimated | No action; controls effective |
   | RM-AI-0067: Data drift | 3 (Possible) | 3 drift detections | 3 (Possible) | ✅ Accurate | Validated |

3. **Validate Impact Assessments**

   **For risks that materialized:**
   - Review actual impact of incidents
   - Compare to predicted impact in risk assessment
   - Determine if impact assessment accurate
   - If impact greater than predicted: Reassess impact per PROC-AI-RM-001 Step 2.2

4. **Validate Control Effectiveness**

   **For each control implemented:**

   a) **Review control performance data from PMM:**
      - Is control operating as designed? (Yes/No)
      - Is control detecting/preventing risks? (Evidence from PMM)
      - Control failure rate (if applicable)

   b) **Compare actual to predicted effectiveness:**
      - Predicted residual risk (from risk register)
      - Actual residual risk (based on PMM data)
      - If actual residual risk higher: Control less effective than assumed

   c) **Reassess residual risk if needed:**
      - Update residual risk score in risk register
      - If residual risk now unacceptable: Initiate corrective action

   **Example:**

   | Control ID | Control Description | Predicted Effectiveness | Actual Effectiveness (PMM data) | Status | Action |
   |-----------|-------------------|----------------------|--------------------------------|--------|---------|
   | CTRL-023-1 | Bias mitigation in training | 60% reduction | 40% reduction (bias still occurring) | ⚠️ Less effective | Enhance control |
   | CTRL-045-1 | Monitoring and alerting | 40% impact reduction | 50% impact reduction (early detection working) | ✅ More effective | Validated |
   | CTRL-067-1 | Data drift alerts | 80% impact reduction | 75% impact reduction | ✅ As expected | Validated |

5. **Identify New Risks from PMM**

   **Review PMM findings for risks not in risk register:**
   - New misuse patterns observed
   - Unexpected failure modes
   - Novel bias sources
   - Environmental changes creating new risks

   **For each new risk identified:**
   - Add to risk register per PROC-AI-RM-001 Step 1.2
   - Conduct risk assessment
   - Implement controls if needed

6. **Update Risk Register**

   **Document all updates:**
   - Likelihood reassessments (with PMM evidence)
   - Impact reassessments (with PMM evidence)
   - Residual risk reassessments
   - Control effectiveness updates
   - New risks added
   - Risk status changes

   **Use Risk Register Update Log (REC-AI-RM-004)**

   **Link PMM reports** as evidence for risk register updates

7. **Escalate if Risk Profile Changes**

   **If risk reassessment results in:**
   - New Critical or High risk identified → Escalate to AI Governance Committee immediately
   - Residual risk now unacceptable → Block continued operation until addressed
   - Multiple controls ineffective → Comprehensive risk review required

   **Escalation per PROC-AI-RM-001 Section 8 and Appendix D (PMM Escalation Matrix)**

8. **Document Risk Validation Report**

   **Quarterly Risk Validation Report:**
   - Summary of all risks reviewed
   - Likelihood validations
   - Impact validations
   - Control effectiveness validations
   - New risks identified
   - Risk register updates made
   - Escalations (if any)
   - Overall risk posture assessment

   **Present to:** AI Governance Committee (quarterly review meeting)

**Evidence Required:**
- Quarterly Risk Validation Report (RPT-AI-PMM-007)
- Updated Risk Register (REC-AI-RM-003)
- Risk Register Update Log (REC-AI-RM-004)
- Escalation Records (if applicable)
- Control Effectiveness Validation Records

**Timing:** Quarterly (scheduled) or ad-hoc when triggered by PMM findings

**Quality Check:**
- All risks reviewed
- All likelihood and impact assessments validated or updated
- All controls validated
- New risks identified and added
- Risk register updated
- Escalations completed if needed

---

### PHASE 4: CORRECTIVE ACTIONS

#### Step 4.1: Initiate Corrective Actions (Control PMM-004)

**When:** When performance threshold breach, bias drift, compliance non-conformity, or other PMM finding requiring action

**Who:** PMM Manager + AI System Owner + relevant experts

**Regulatory Basis:** Article 72(2) - Provider shall use data to identify any need to immediately apply necessary corrective or preventive actions

**How:**

1. **Identify Trigger for Corrective Action**

   **Corrective Action Triggers:**
   - ❌ Critical performance threshold breach (red alert)
   - ⚠️ High performance threshold breach (orange alert)
   - ⚠️ Bias drift exceeds threshold (fairness ratio <0.8 or >1.25)
   - ❌ Compliance non-conformity identified
   - ⚠️ Pattern in user complaints (>5 similar within 30 days)
   - ❌ Serious incident occurred
   - ⚠️ Control failure detected
   - ⚠️ Risk validation reveals unacceptable residual risk

   **Trigger documented in:** PMM analysis report, alert notification, or compliance evaluation

2. **Initiate Corrective Action Record**

   **Create Corrective Action Record:**
   - Unique ID: CA-PMM-[AI-SYSTEM-ID]-[YYYY-MM-DD]-[SEQ]
   - Date identified
   - Trigger/finding that initiated corrective action
   - AI system and version affected
   - Severity: Critical / High / Medium / Low
   - Link to source documentation (PMM report, alert, incident report)

   **Use Corrective Action Form (FORM-AI-PMM-006)**

3. **Assess Immediate Risk and Containment**

   **For Critical severity corrective actions:**

   a) **Immediate risk assessment:**
      - Is continued operation safe?
      - Is there risk of serious incident or harm?
      - Are fundamental rights at risk?

   b) **Containment actions (if needed):**
      - Suspend AI system operation
      - Implement enhanced human oversight
      - Disable affected features
      - Issue Field Safety Notice to deployers
      - Notify affected users

   c) **Escalation:**
      - Notify CPO and AI Governance Committee immediately
      - Notify market surveillance authority if serious incident risk (per PROC-AI-INC-001)

   **For High/Medium severity:**
   - Assess if immediate containment needed
   - Document decision
   - If no immediate containment, proceed to root cause analysis

4. **Conduct Root Cause Analysis (if not already done)**

   **If root cause not identified in PMM analysis:**
   - Conduct root cause analysis per Step 2.3 procedure
   - Use 5 Whys and Fishbone diagram
   - Validate root cause hypothesis with data
   - Document in Root Cause Analysis Report (RPT-AI-PMM-003)

   **Timeline:**
   - Critical: Within 48 hours
   - High: Within 5 business days
   - Medium: Within 10 business days

5. **Develop Corrective Action Plan**

   **Corrective action plan includes:**

   a) **Problem Statement:**
      - What is the issue?
      - What is the evidence?
      - What is the impact?

   b) **Root Cause:**
      - What caused the issue?
      - Why did it occur?

   c) **Corrective Actions:**
      - Immediate actions (containment, mitigation)
      - Short-term actions (address symptom)
      - Long-term actions (address root cause)

   d) **Preventive Actions:**
      - What will prevent recurrence?
      - What controls need to be added/enhanced?

   e) **Responsibilities:**
      - Corrective action owner (responsible for implementation)
      - Contributors (others involved)

   f) **Timeline:**
      - Start date
      - Target completion date (risk-based)
      - Milestones

   g) **Effectiveness Verification:**
      - How will we verify corrective action worked?
      - What metrics will we monitor?
      - What is success criteria?

   **Example Corrective Actions by Trigger:**

   | Trigger | Example Corrective Actions |
   |---------|---------------------------|
   | **Accuracy degradation** | Retrain model with recent data; Review and update training data; Adjust decision threshold; Add model monitoring |
   | **Bias drift** | Retrain with rebalanced data; Implement fairness constraints; Add bias monitoring; Adjust post-processing |
   | **Compliance non-conformity** | Update system to meet requirement; Enhance documentation; Implement missing control; Train personnel |
   | **Data drift** | Update feature engineering; Retrain model; Adjust normalization; Add drift detection control |
   | **User complaints pattern** | Improve user interface; Enhance explanations; Provide training materials; Adjust system behavior |
   | **Control failure** | Fix control implementation; Enhance monitoring; Add backup control; Test control effectiveness |

6. **Obtain Corrective Action Approval**

   **Approval Authority:**

   | Severity | Approval Required | Timeline for Approval |
   |----------|------------------|---------------------|
   | Critical | CPO + AI Governance Committee | Within 24 hours |
   | High | PMM Manager + AI System Owner | Within 3 business days |
   | Medium | PMM Manager | Within 5 business days |
   | Low | AI System Owner | Within 10 business days |

   **Submit corrective action plan for approval**
   **Obtain written approval** (email or signed form)

7. **Implement Corrective Actions**

   **Implementation oversight:**
   - Corrective action owner executes plan
   - PMM Manager monitors progress
   - Regular status updates (frequency based on severity)
   - Escalate if delays or issues

   **Implementation may involve:**
   - Model retraining and redeployment (per PROC-AI-DEV-001)
   - Code changes and testing
   - Control implementation or enhancement
   - Documentation updates (technical documentation, PMMP, risk register)
   - Deployer communications
   - User communications
   - Training or process changes

   **Document implementation steps and completion**

8. **Verify Corrective Action Effectiveness**

   **Verification Process:**

   a) **Post-implementation monitoring:**
      - Monitor relevant PMM metrics for specified period
      - Verification period: Minimum 30 days (or per PMMP)

   b) **Compare to success criteria:**
      - Is the issue resolved?
      - Are metrics back within acceptable range?
      - Has performance improved?

   c) **Verification activities:**
      - Review PMM data for verification period
      - Conduct follow-up testing if needed
      - Gather user/deployer feedback on improvement

   d) **Determine effectiveness:**
      - ✅ Effective: Issue resolved, metrics improved, no recurrence
      - ⚠️ Partially Effective: Some improvement but not fully resolved
      - ❌ Ineffective: Issue persists or recurred

   **If ineffective:** Conduct additional root cause analysis; develop alternative corrective actions

9. **Update Documentation**

   **Documents to update:**
   - Technical documentation (Article 11) - if system changed
   - Risk register (PROC-AI-RM-001) - if risk assessment changed
   - PMMP - if monitoring approach changed
   - Quality records (QMS) - corrective action records

   **Cross-reference:** Link all updated documents to corrective action record

10. **Close Corrective Action**

   **Closure Criteria:**
   - Corrective actions implemented
   - Effectiveness verified
   - Documentation updated
   - All approvals obtained

   **Closure Process:**
   - PMM Manager reviews completion
   - Obtains final approval to close
   - Updates corrective action status to "Closed"
   - Archives corrective action record
   - Retains per 10-year retention requirement

11. **Report Corrective Actions**

   **Internal Reporting:**
   - Include corrective action summary in monthly PMM report
   - Present significant corrective actions to AI Governance Committee

   **External Reporting (if applicable):**
   - Report corrective actions to market surveillance authorities (if serious non-compliance)
   - Communicate corrective actions to deployers (if affects their deployment)
   - Communicate to users (if affects user-facing functionality)

**Evidence Required:**
- Corrective Action Records (FORM-AI-PMM-006) - for each corrective action
- Corrective Action Plans (detailed action plan document)
- Root Cause Analysis Reports (RPT-AI-PMM-003)
- Corrective Action Approval Records
- Implementation Evidence (test results, deployment records, etc.)
- Effectiveness Verification Reports (RPT-AI-PMM-008)
- Updated Documentation (technical docs, risk register, PMMP)

**Timing:** Variable based on severity; effectiveness verification minimum 30 days

**Quality Check:**
- Root cause identified and validated
- Corrective actions address root cause (not just symptoms)
- Required approvals obtained
- Implementation completed per plan
- Effectiveness verified
- Documentation updated
- Corrective action closed formally

---

#### Step 4.2: Implement Preventive Actions (Control PMM-004)

**When:** When PMM analysis identifies potential future issues or recurring patterns

**Who:** PMM Manager + AI System Owner + Risk Manager

**How:**

1. **Identify Need for Preventive Action**

   **Preventive Action Triggers:**
   - Trend analysis predicts future threshold breach
   - Early warning indicators (yellow/orange alerts)
   - Recurring issues (multiple corrective actions for similar issues)
   - Lessons learned from incidents affecting similar systems
   - Risk validation identifies emerging risks
   - External information (scientific developments, regulatory changes)

   **Key Difference:**
   - **Corrective action:** Reacts to problem that occurred
   - **Preventive action:** Proactively prevents problem before it occurs

2. **Assess Probability and Impact of Potential Issue**

   **Evaluate:**
   - How likely is the potential issue to occur?
   - What would be the impact if it occurred?
   - What is the timeframe to issue occurrence?

   **Prioritize:** High likelihood + High impact = Urgent preventive action

3. **Develop Preventive Action Plan**

   **Similar to corrective action plan but focused on prevention:**

   a) **Potential Issue Statement:** What might happen?
   b) **Underlying Cause:** Why might it happen?
   c) **Preventive Actions:** What will prevent it?
   d) **Responsibilities:** Who will implement?
   e) **Timeline:** When should it be completed?
   f) **Verification:** How will we verify it prevented the issue?

   **Example Preventive Actions:**

   | Potential Issue | Preventive Actions |
   |-----------------|-------------------|
   | **Accuracy degradation in 60 days** (based on trend) | Proactive model retraining now; Adjust retraining schedule; Add leading indicators |
   | **Data drift expected** (new data sources coming) | Update data validation; Expand training data; Test with new data pre-deployment |
   | **Regulatory change** (new EU AI Act guidance) | Review system against new guidance; Implement necessary changes; Update documentation |
   | **Recurring bias issues** | Implement continuous bias testing; Add fairness constraints to training; Enhance pre-deployment bias testing |

4. **Implement and Verify Preventive Actions**

   **Similar process to corrective actions:**
   - Obtain approval
   - Implement preventive actions
   - Verify effectiveness (did it prevent the predicted issue?)
   - Document
   - Close preventive action record

**Evidence Required:**
- Preventive Action Records (FORM-AI-PMM-007)
- Preventive Action Plans
- Effectiveness Verification Reports

**Timing:** Based on predicted timeframe to issue

---

#### Step 4.3: Integrate with Incident Reporting (Control PMM-004, PMM-005)

**When:** When serious incident occurs or is detected through PMM

**Who:** PMM Manager + Incident Response Team + Compliance Officer

**Regulatory Basis:** Article 72(8) - PMM system shall be integrated with serious incident reporting system under Article 73

**How:**

1. **Detect Incidents Through PMM**

   **PMM can detect incidents via:**
   - Critical threshold breaches (potential serious incident)
   - User feedback reporting harm or rights violations
   - Deployer incident reports
   - Automated anomaly detection
   - Pattern of issues indicating systemic problem

   **PMM Manager monitors for incident indicators**

2. **Assess if Serious Incident**

   **Serious Incident Criteria (Article 3(49)):**
   - Death or serious harm to health
   - Serious and irreversible disruption of critical infrastructure
   - Serious infringement of fundamental rights protected by EU law

   **Assess PMM finding against criteria:**
   - Does this constitute a serious incident?
   - Does this have potential to become serious incident?
   - Is this a near-miss of serious incident?

3. **Trigger Incident Reporting Process**

   **If serious incident or potential serious incident:**
   - Immediately notify Incident Response Team
   - Initiate PROC-AI-INC-001 (Incident Management Procedure)
   - PMM Manager provides PMM data as evidence

   **Timeline:** Immediate (within 1 hour of identification)

4. **Provide PMM Data to Incident Investigation**

   **PMM Manager supports incident investigation with:**
   - Performance data leading up to incident
   - Similar incidents or near-misses from PMM data
   - Trend analysis showing precursors
   - User feedback related to incident
   - System logs and telemetry

   **PMM data = critical evidence for root cause analysis**

5. **Report to Market Surveillance Authority**

   **Per Article 73(1):**
   - Serious incidents must be reported to market surveillance authorities
   - Timeline: Immediately after awareness (within 15 days for certain incidents)
   - Report includes PMM data as evidence

   **Compliance Officer prepares authority report per PROC-AI-INC-001**
   **PMM Manager provides PMM data and analysis for report**

6. **Implement Post-Incident Corrective Actions**

   **After incident investigation:**
   - Corrective actions identified
   - Implemented per Step 4.1
   - Effectiveness verified through PMM
   - PMM system monitors for recurrence

7. **Update PMM System Based on Incident**

   **Lessons learned from incident inform PMM:**
   - Add new metrics to monitor incident precursors
   - Adjust alert thresholds to detect similar issues earlier
   - Enhance monitoring for specific risk factors
   - Update PMMP with lessons learned

   **PMM system continuously improves based on incidents**

**Evidence Required:**
- Incident Reports (per PROC-AI-INC-001)
- PMM Data Provided to Incident Investigation
- Authority Notification Records
- PMMP Updates Based on Incidents

**Timing:** Per incident timeline requirements

**Quality Check:**
- All serious incidents detected through PMM are escalated immediately
- PMM data supports incident investigation
- Authority reporting includes PMM evidence
- PMM system updated based on lessons learned
- Integration between PMM and incident reporting functioning

---

### PHASE 5: REPORTING AND COMMUNICATION

#### Step 5.1: Internal Reporting (Control PMM-001, PMM-005)

**When:** Ongoing per PMMP schedule

**Who:** PMM Manager

**How:**

1. **Weekly PMM Status Report (for Critical/High tier systems)**

   **Contents:**
   - Executive summary (key findings, issues, status)
   - Performance metrics summary (highlights only)
   - Alert summary (all alerts triggered this week)
   - Threshold breaches (if any)
   - Corrective actions status
   - Items requiring attention

   **Distribution:** PMM Manager, AI System Owner, MLOps Lead, Data Analytics Lead

   **Format:** Email or shared dashboard

2. **Monthly Comprehensive PMM Report (for all systems)**

   **Contents:**
   - Executive Summary
   - Performance Analysis (all metrics with charts)
   - Bias and Fairness Analysis
   - Compliance Evaluation Summary
   - Feedback Analysis Summary
   - Root Cause Analyses Conducted
   - Corrective Actions Initiated and Closed
   - Preventive Actions
   - Risk Management Integration (risk register updates)
   - Trends and Predictions
   - Recommendations
   - Appendices (detailed data, charts)

   **Distribution:** PMM Manager, AI System Owner, QMS Representative, AI Risk Manager, Compliance Officer, Product Management

   **Format:** Formal report document (PDF)

   **Use Template:** Monthly PMM Report Template (Appendix A Section 9)

3. **Quarterly PMM Executive Report**

   **Contents:**
   - Executive Summary (high-level status)
   - Overall Performance Assessment (trending up/stable/down)
   - Key Issues and Resolutions
   - Compliance Posture
   - Risk Profile Changes
   - Significant Corrective Actions
   - Deployer Feedback Summary
   - Strategic Recommendations
   - Resource Needs

   **Distribution:** AI Governance Committee, CPO, CTO, CRO, Legal

   **Presentation:** Present to AI Governance Committee in quarterly review meeting

   **Format:** Executive summary + slide presentation

4. **Annual PMM System Effectiveness Report**

   **Contents:**
   - PMM System Performance (is PMM system itself working effectively?)
   - Objectives Achievement (did we achieve PMM plan objectives?)
   - All AI Systems Summary (aggregate view)
   - Lessons Learned
   - PMM System Improvements Implemented
   - Recommendations for PMM System Enhancements

   **Distribution:** AI Governance Committee, QMS Management Review

   **Purpose:** Input to QMS Management Review (ISO 13485, ISO/IEC 42001)

5. **Ad-Hoc Critical Issue Reports**

   **When critical issue identified:**
   - Prepare immediate executive summary
   - Distribute to leadership (CPO, AI Governance Committee)
   - Include: Issue description, impact, immediate actions, next steps
   - Timeline: Within 4 hours of critical issue identification

**Evidence Required:**
- Weekly PMM Status Reports (REC-AI-PMM-006)
- Monthly PMM Comprehensive Reports (RPT-AI-PMM-004)
- Quarterly PMM Executive Reports (RPT-AI-PMM-009)
- Annual PMM System Effectiveness Reports (RPT-AI-PMM-010)
- AI Governance Committee Meeting Minutes (showing PMM review)

**Timing:** Per schedule (ongoing)

---

#### Step 5.2: Reporting to Market Surveillance Authorities (Control PMM-005)

**When:** Upon authority request or when serious non-compliance identified

**Who:** Compliance Officer + PMM Manager + Legal

**Regulatory Basis:** Article 72(7) - PMMP and documentation shall be available to national competent authorities and notified bodies on request

**How:**

1. **Respond to Authority Requests for PMM Documentation**

   **When market surveillance authority requests PMM documentation:**

   a) **Acknowledge request:**
      - Respond within 2 business days acknowledging receipt
      - Confirm understanding of request
      - Provide expected response timeline

   b) **Gather requested documentation:**
      - PMM Plan (PMMP)
      - PMM reports (monthly, quarterly as requested)
      - Performance data (as requested)
      - Corrective action records
      - Compliance evaluation records
      - Any other requested PMM documentation

   c) **Legal review:**
      - Legal reviews documentation before submission
      - Ensure confidential business information appropriately marked
      - Ensure complete and accurate response

   d) **Submit to authority:**
      - Via requested channel (portal, email, physical submission)
      - Within timeline specified in request (default: 30 days)
      - Include cover letter summarizing contents

   e) **Document submission:**
      - Record date, contents, recipient
      - Retain copy of submission
      - Log in authority communication tracker

2. **Proactive Reporting of Serious Non-Compliance**

   **If PMM identifies serious non-compliance** that could lead to serious incident:

   a) **Assess reporting obligation:**
      - Is this a serious incident per Article 73? → Report per PROC-AI-INC-001
      - Is this serious non-compliance not yet incident? → Consider proactive reporting

   b) **Consult Legal and Compliance:**
      - Determine if proactive reporting required or recommended
      - Determine appropriate authority to notify

   c) **Prepare proactive report:**
      - Description of non-compliance
      - PMM data showing issue
      - Root cause analysis
      - Corrective actions planned/implemented
      - Timeline for resolution

   d) **Submit to authority:**
      - Via appropriate channel
      - Timeline: Within 15 days of identification
      - Request guidance if needed

3. **Respond to Authority Follow-Up Questions**

   **If authority has follow-up questions:**
   - Respond promptly (within 10 business days or timeline specified)
   - Provide requested clarifications or additional data
   - PMM Manager provides technical information
   - Legal reviews all responses

4. **Implement Authority Corrective Action Requests**

   **If authority requires corrective actions:**
   - Document authority requirements
   - Implement corrective actions per Step 4.1
   - Report implementation to authority per required timeline
   - Verify effectiveness and report results

5. **Maintain Authority Communication Log**

   **Log all authority communications:**
   - Date
   - Authority name
   - Type of communication (request, submission, follow-up)
   - Summary
   - Response date
   - Documents submitted
   - Status (Open/Closed)

   **Retain per 10-year requirement**

**Evidence Required:**
- Authority Request Records (REC-AI-PMM-007)
- Authority Submission Records (documentation submitted + cover letters)
- Authority Communication Log (REC-AI-PMM-008)
- Legal Review Records

**Timing:** Per authority timelines

**Quality Check:**
- All authority requests acknowledged within 2 business days
- All responses submitted within required timelines
- Legal review completed before submission
- All communications logged
- Documentation complete and accurate

---

#### Step 5.3: Deployer Communication (Control PMM-002, PMM-005)

**When:** Per PMMP deployer communication schedule

**Who:** PMM Manager + Customer Success + Account Management

**Regulatory Basis:** Article 72(5)(f) - Maintain effective channels of communication with deployers

**How:**

1. **Quarterly Deployer Newsletter**

   **Contents:**
   - AI system performance summary (aggregate, not proprietary deployer data)
   - Upcoming updates or changes
   - Best practices and usage tips
   - Regulatory updates relevant to deployers
   - New features or capabilities
   - Contact information for questions

   **Distribution:** All deployers via email

   **Timing:** Quarterly

2. **Quarterly Business Reviews (QBRs) for High-Touch Deployers**

   **For deployers of Critical/High tier systems or high-value accounts:**

   **Meeting contents:**
   - Review deployer-specific performance data
   - Discuss deployer feedback and issues
   - Review incident history (if any)
   - Discuss deployer usage patterns and best practices
   - Address deployer questions and concerns
   - Collect deployer input for product roadmap

   **Attendees:** Account Manager, PMM Manager, Deployer representatives

   **Timing:** Quarterly (scheduled)

   **Document:** QBR meeting notes

3. **Safety Communications to Deployers**

   **When safety issue or corrective action identified:**

   a) **Field Safety Notice (FSN):**
      - Used for safety-related issues requiring deployer action
      - Contents:
        - Description of issue
        - Affected AI system versions
        - Potential risk to users
        - Required actions by deployer
        - Timeline for action
        - Contact for questions
      - Urgent delivery: Email + phone call for critical issues
      - Confirmation: Request deployer acknowledgment

   b) **Corrective Action Notification:**
      - Inform deployers of corrective actions taken by provider
      - May require deployer action (e.g., update to new version)
      - Timeline per urgency

   c) **Product Recall or Withdrawal:**
      - If AI system must be taken out of service
      - Detailed instructions for deployers
      - Legal and compliance involvement

4. **Deployer Survey Distribution**

   **Quarterly deployer survey:**
   - Structured questionnaire requesting:
     - Usage statistics
     - Performance observations
     - Issues encountered
     - User feedback received by deployer
     - Deployer satisfaction
     - Suggestions for improvement

   **Distribution:** Email with survey link (e.g., Google Forms, SurveyMonkey)

   **Follow-up:** Reminder emails to non-responders

   **Target response rate:** >70%

5. **Respond to Deployer Inquiries**

   **Monitor deployer communication channels:**
   - deployer-support@[organization].com
   - Deployer portal messages
   - Direct emails and calls

   **Response SLA:** Within 2 business days

   **Log all deployer inquiries and responses**

6. **Deployer Training and Webinars**

   **Bi-annual deployer webinars:**
   - Training on effective AI system use
   - Updates on PMM findings and improvements
   - Best practices sharing
   - Q&A session

   **Record and publish** for deployers who cannot attend live

7. **Communication Effectiveness Measurement**

   **Track KPIs:**
   - Deployer survey response rate
   - Deployer data submission compliance rate
   - QBR completion rate
   - Deployer satisfaction score
   - Average response time to deployer inquiries

   **Review quarterly** and adjust communication strategy if needed

**Evidence Required:**
- Deployer Newsletter Distribution Records (REC-AI-PMM-009)
- QBR Meeting Notes (REC-AI-PMM-010)
- Field Safety Notices Issued (REC-AI-PMM-011)
- Deployer Survey Distribution and Response Records
- Deployer Inquiry Log and Response Records
- Deployer Communication KPI Dashboard

**Timing:** Per PMMP schedule (ongoing)

**Quality Check:**
- Deployer communications sent per schedule
- QBRs completed with all high-touch deployers
- Safety communications issued when required with deployer acknowledgment
- Deployer response rates meet targets
- Deployer satisfaction maintained

---

### PHASE 6: CONTINUOUS IMPROVEMENT

#### Step 6.1: Conduct PMM System Effectiveness Review (Control PMM-001)

**When:** Annually or when PMM system issues identified

**Who:** PMM Manager + QMS Representative + AI Governance Committee

**How:**

1. **Assess PMM Objectives Achievement**

   **Review PMMP objectives:**
   - Were objectives achieved?
   - Were performance goals met?
   - Were issues detected in timely manner?
   - Were corrective actions effective?

   **Evidence:** Compare planned vs. actual outcomes

2. **Evaluate PMM System Performance**

   **Assess each PMM component:**

   | Component | Performance Questions | Assessment |
   |-----------|----------------------|------------|
   | **Data Collection** | Is all planned data being collected? Are there gaps? | Compliant / Issues Identified |
   | **Data Quality** | Is data complete, accurate, timely? | Compliant / Issues Identified |
   | **Analysis** | Are analyses conducted per schedule? Are analyses effective? | Compliant / Issues Identified |
   | **Alerting** | Are alerts triggering appropriately? False positive/negative rate? | Compliant / Issues Identified |
   | **Corrective Actions** | Are corrective actions timely and effective? | Compliant / Issues Identified |
   | **Reporting** | Are reports timely, complete, useful? | Compliant / Issues Identified |
   | **Deployer Communication** | Is deployer communication effective? Response rates? | Compliant / Issues Identified |

3. **Review PMM KPIs**

   **PMM System KPIs (see Section 8):**
   - Data collection completeness
   - Monitoring uptime
   - Alert response time
   - Corrective action cycle time
   - Deployer response rate
   - Compliance rate

   **Compare to targets:** Are KPIs being met?

4. **Gather Stakeholder Feedback**

   **Collect feedback from:**
   - AI System Owners (is PMM providing value?)
   - MLOps team (is monitoring infrastructure working well?)
   - Data Analytics Lead (are analysis tools adequate?)
   - AI Governance Committee (is reporting meeting needs?)
   - Deployers (is communication effective?)

   **Method:** Survey or interviews

5. **Identify Improvement Opportunities**

   **Based on assessment:**
   - What is working well? (continue)
   - What is not working well? (fix)
   - What is missing? (add)
   - What is unnecessary? (remove)
   - What could be more efficient? (optimize)

   **Document improvement opportunities**

6. **Benchmark Against Best Practices**

   **Compare to:**
   - Industry best practices for PMM
   - Other organizations' PMM systems (if information available)
   - Regulatory guidance and harmonized standards
   - Auditor recommendations

   **Identify gaps between current state and best practices**

7. **Develop PMM Improvement Plan**

   **For each improvement opportunity:**
   - Description of improvement
   - Rationale and expected benefit
   - Implementation approach
   - Resources required
   - Responsible party
   - Target completion date

   **Prioritize improvements:** High/Medium/Low priority

8. **Obtain Approval for Improvements**

   **Present improvement plan to:**
   - AI Governance Committee (for strategic improvements)
   - QMS Representative (for process improvements)

   **Obtain approval and resource allocation**

9. **Implement Improvements**

   **Execute improvement plan:**
   - Implement approved improvements
   - Monitor implementation progress
   - Verify improvements achieve intended benefit

10. **Document PMM Effectiveness Review**

    **Annual PMM System Effectiveness Report:**
    - PMM objectives achievement
    - PMM system performance assessment
    - KPI performance
    - Stakeholder feedback summary
    - Improvement opportunities identified
    - Improvements implemented
    - Recommendations for next year

    **Present to:** AI Governance Committee and QMS Management Review

**Evidence Required:**
- Annual PMM System Effectiveness Report (RPT-AI-PMM-010)
- Stakeholder Feedback Survey Results
- PMM KPI Performance Dashboard
- PMM Improvement Plan (FORM-AI-PMM-008)
- Improvement Implementation Records

**Timing:** Annually (scheduled) or ad-hoc if major issues

**Quality Check:**
- Comprehensive assessment of all PMM components
- Stakeholder feedback collected
- Improvement opportunities identified and documented
- Improvement plan developed and approved
- Report presented to governance

---

#### Step 6.2: Update PMM Plan Based on Evaluation Results (Control PMM-001)

**When:** After Article 61 evaluation results or when PMM effectiveness review identifies need for updates

**Who:** PMM Manager + AI Governance Committee

**Regulatory Basis:** Article 72(6) - Providers shall use information from PMM system to update the risk assessment, implement corrective actions, and update technical documentation

**How:**

1. **Trigger for PMMP Update**

   **PMMP update triggers:**
   - Annual PMM effectiveness review recommendations
   - Article 61 post-market evaluation results requiring PMMP changes
   - Substantial modification to AI system (new monitoring needed)
   - Regulatory changes affecting monitoring requirements
   - Serious incident revealing monitoring gaps
   - Risk assessment changes requiring additional monitoring
   - Deployer feedback indicating communication improvements needed

2. **Review Evaluation Results**

   **Review:**
   - PMM effectiveness review findings
   - Article 61 evaluation results (if applicable)
   - Recent incident investigations
   - Risk assessment updates
   - Regulatory updates

   **Identify:** What PMMP changes are needed?

3. **Develop PMMP Updates**

   **Update relevant PMMP sections:**

   | PMMP Section | Potential Updates |
   |--------------|------------------|
   | **Section 1: Scope and Objectives** | Update objectives based on new requirements |
   | **Section 3: Data Collection Strategy** | Add new data sources or metrics; adjust collection frequencies |
   | **Section 4: Analysis Procedures** | Update analysis methodologies; add new analyses |
   | **Section 5: Reporting and Escalation** | Adjust escalation thresholds; update reporting frequencies |
   | **Section 6: Risk Management Integration** | Update integration procedures based on risk assessment changes |
   | **Section 7: Feedback Handling** | Improve feedback processes based on effectiveness review |
   | **Section 8: Deployer Communication** | Enhance communication based on deployer feedback |
   | **Appendices** | Update templates, forms, KPI library |

4. **Revise PMMP Document**

   - Create new PMMP version: PMMP-[AI-SYSTEM-ID]-v[X+1]
   - Update version history with change summary
   - Apply document control per PROC-QMS-001
   - Highlight changes (change bars or summary of changes section)

5. **Review and Approve Updated PMMP**

   **Review process:**
   - Internal review by PMM planning team
   - Quality review by QMS Representative
   - Risk review by AI Risk Manager
   - Compliance review by Compliance Officer
   - Approval by AI Governance Committee

   **Timeline:** 4 weeks for review and approval

6. **Implement PMMP Updates**

   **If PMMP changes require operational changes:**
   - Update monitoring infrastructure per new requirements
   - Update data collection procedures
   - Update analysis procedures and dashboards
   - Train personnel on changes
   - Update deployer communications if needed

   **Implementation timeline:** Per improvement plan

7. **Update Technical Documentation**

   **Per Article 72(6) requirement:**
   - Update AI system technical documentation (Article 11) to reference new PMMP version
   - Document rationale for PMMP updates
   - Link to evaluation results or effectiveness review that triggered update

   **Document control:** Version control per PROC-QMS-001

8. **Communicate PMMP Updates**

   **Internal communication:**
   - Notify all PMM stakeholders of PMMP updates
   - Provide training on significant changes
   - Update processes and work instructions if needed

   **External communication (if needed):**
   - Notify deployers if changes affect them
   - Notify market surveillance authorities if significant changes

9. **Verify PMMP Update Effectiveness**

   **After implementation:**
   - Monitor for 3-6 months
   - Assess if updates achieved intended improvements
   - Adjust further if needed

**Evidence Required:**
- Updated PMMP (PMMP-[AI-SYSTEM-ID]-v[X+1])
- PMMP Change Summary Document
- PMMP Review and Approval Records
- Updated Technical Documentation
- PMMP Update Implementation Records
- Training Records (if training conducted)

**Timing:** Per trigger; implementation 2-3 months

**Quality Check:**
- PMMP updates address all identified needs
- All required reviews and approvals completed
- Technical documentation updated
- Operational changes implemented
- Personnel trained
- Effectiveness verified

---

## 7. CONTROL MECHANISMS

### 7.1 Control Summary

This procedure implements the following controls from STD-AI-012 (Post-Market Monitoring Standard):

| Control ID | Control Name | Type | Criticality | Implementation in Procedure |
|-----------|--------------|------|-------------|----------------------------|
| **PMM-001** | Post-Market Monitoring System | Preventive | Critical | Step 1.1-1.7: Establish comprehensive PMM system with documented PMMP; Section 5: PMM Framework |
| **PMM-002** | Performance Data Collection | Detective | High | Step 2.1-2.2: Implement monitoring infrastructure; continuously collect performance data, feedback, deployer reports |
| **PMM-003** | Feedback Analysis | Detective | High | Step 2.3: Analyze performance data; Step 1.5: Feedback handling process; Monthly feedback analysis |
| **PMM-004** | Corrective Action Initiation | Corrective | Critical | Step 4.1-4.2: Initiate corrective and preventive actions when PMM identifies issues; Root cause analysis; Effectiveness verification |
| **PMM-005** | Reporting to Authorities | Preventive | High | Step 5.2: Report to market surveillance authorities on request; Proactive reporting of serious non-compliance |

### 7.2 Control Testing and Validation

| Control | Testing Method | Frequency | Responsible | Acceptance Criteria |
|---------|---------------|-----------|-------------|---------------------|
| **PMM-001: PMM System** | Review PMMP completeness; Verify all components operational | Annual (with internal audit) | Internal Audit | PMMP complete per Article 72(5); All PMM components functioning |
| **PMM-002: Data Collection** | Verify data collection completeness; Check monitoring uptime | Monthly | PMM Manager | >95% data collection completeness; >99% monitoring uptime |
| **PMM-003: Feedback Analysis** | Review feedback analysis reports; Verify analysis per schedule | Quarterly | QMS Representative | Feedback analysis completed per PMMP schedule; Findings documented |
| **PMM-004: Corrective Actions** | Review corrective action records; Verify effectiveness | Quarterly | QMS Representative | All corrective actions tracked; Effectiveness verified for 100% |
| **PMM-005: Authority Reporting** | Review authority communication log; Verify timely responses | Annual | Compliance Officer | All authority requests responded to within required timeline; Documentation complete |

### 7.3 Control Effectiveness Metrics

| Control | KPI | Target | Measurement Method |
|---------|-----|--------|-------------------|
| PMM-001 | % of AI systems with approved PMMP | 100% | Count systems with PMMP / total high-risk systems |
| PMM-002 | Data collection completeness | >95% | (Actual data collected / expected data) × 100% |
| PMM-003 | Feedback response time | <15 days average | Average days from feedback receipt to resolution |
| PMM-004 | Corrective action cycle time | <30 days (High severity) | Average days from initiation to closure |
| PMM-005 | Authority response timeliness | 100% within required timeline | Count timely responses / total requests |

---

## 8. KPIS AND METRICS

### 8.1 PMM System Performance KPIs

**System-Level KPIs** (for PMM system itself):

| KPI ID | KPI Name | Definition | Target | Frequency | Owner |
|--------|----------|------------|--------|-----------|-------|
| **PMM-KPI-001** | PMMP Coverage | % of high-risk AI systems with approved PMMP | 100% | Monthly | PMM Manager |
| **PMM-KPI-002** | Data Collection Completeness | % of expected data successfully collected | >95% | Weekly | MLOps Lead |
| **PMM-KPI-003** | Monitoring System Uptime | % of time monitoring systems operational | >99% | Continuous | MLOps Lead |
| **PMM-KPI-004** | Alert Response Time | Average time from alert trigger to human acknowledgment | <15 minutes (Critical) | Continuous | MLOps Lead |
| **PMM-KPI-005** | Analysis Schedule Compliance | % of scheduled analyses completed on time | >95% | Monthly | Data Analytics Lead |
| **PMM-KPI-006** | Report Timeliness | % of reports delivered on schedule | 100% | Monthly | PMM Manager |
| **PMM-KPI-007** | Corrective Action Cycle Time | Average days from initiation to closure | <30 days (High), <60 days (Medium) | Monthly | PMM Manager |
| **PMM-KPI-008** | Corrective Action Effectiveness | % of corrective actions verified as effective | >90% | Quarterly | PMM Manager |
| **PMM-KPI-009** | Deployer Response Rate | % of deployers responding to surveys/data requests | >70% | Quarterly | PMM Manager |
| **PMM-KPI-010** | Deployer Data Submission Rate | % of deployers submitting data on time | >90% | Quarterly | PMM Manager |
| **PMM-KPI-011** | Feedback Response Time | Average days from feedback receipt to initial response | <5 days | Monthly | Customer Support Lead |
| **PMM-KPI-012** | Complaint Resolution Time | Average days from complaint receipt to resolution | <15 days | Monthly | Customer Support Lead |

### 8.2 AI System Performance KPIs

**System-Specific KPIs** (for individual AI systems - see Appendix B for comprehensive library):

**Model Performance:**
- Accuracy, Precision, Recall, F1-score (compared to baseline)
- Inference latency (p95, p99)
- Error rate

**Fairness:**
- Demographic parity ratio (target: 0.8-1.25)
- Equal opportunity ratio (target: 0.8-1.25)
- Disparate impact ratio (target: >0.8)

**Data Quality:**
- Feature drift (PSI) (threshold: <0.25)
- Missing value rate (threshold: <5%)
- Outlier rate (threshold: <5%)

**Compliance:**
- % of compliance indicators in conformity (target: 100%)
- Compliance non-conformity count (target: 0)

**Operational:**
- System availability (target: >99.5%)
- Human override rate (benchmark: varies by system)

### 8.3 KPI Reporting and Review

**KPI Dashboard:**
- Real-time dashboard displaying all PMM system KPIs
- Accessible to PMM Manager, AI Governance Committee, leadership
- Color-coded: Green (meets target), Yellow (approaching threshold), Red (below target)

**KPI Review Frequency:**
- **Weekly:** Operations KPIs (uptime, data collection, alert response)
- **Monthly:** PMM system performance KPIs
- **Quarterly:** Strategic KPIs (deployer satisfaction, effectiveness)
- **Annual:** KPI target review and adjustment

**KPI Target Adjustment:**
- Review annually during PMM effectiveness review
- Adjust targets based on maturity, benchmarks, organizational goals
- Document target changes and rationale

---

## 9. DOCUMENTATION REQUIREMENTS

### 9.1 Required PMM Documentation

**Per EU AI Act Article 11 (Technical Documentation) and Article 72:**

| Document | Description | Retention | Responsible | Accessibility |
|----------|-------------|-----------|-------------|---------------|
| **Post-Market Monitoring Plan (PMMP)** | Comprehensive plan per Article 72(5) | 10 years | PMM Manager | Part of technical documentation; available to authorities |
| **Performance Data Database** | All collected performance metrics, logs, telemetry | 10 years | MLOps Lead | Controlled access; available to authorities |
| **Feedback Database** | All user and deployer feedback, complaints | 10 years | Customer Support | Controlled access |
| **PMM Reports** | Weekly, monthly, quarterly, annual reports | 10 years | PMM Manager | Internal distribution; summaries to authorities on request |
| **Corrective Action Records** | All corrective and preventive actions | 10 years | PMM Manager | QMS records; available to authorities |
| **Root Cause Analysis Reports** | RCA for all significant issues | 10 years | PMM Manager | QMS records; available to authorities |
| **Compliance Evaluation Records** | Monthly compliance checks, reports | 10 years | Compliance Officer | Available to authorities |
| **Risk Register Updates** | Updates triggered by PMM | 10 years | AI Risk Manager | Part of technical documentation |
| **Deployer Communication Records** | FSNs, newsletters, QBR notes, survey results | 10 years | PMM Manager | Available to authorities |
| **Authority Communication Records** | All communications with authorities | 10 years | Compliance Officer | Legal hold |
| **PMM Effectiveness Review Reports** | Annual effectiveness reviews | 10 years | PMM Manager | Internal; may be requested by authorities |
| **PMMP Update History** | Version history of PMMP | 10 years | PMM Manager | Part of technical documentation |

### 9.2 Documentation Standards

**Document Control:**
- All PMM documentation subject to document control per PROC-QMS-001
- Version control: Major.Minor format (e.g., PMMP v2.1)
- Change tracking: Document all changes with rationale
- Access control: Appropriate permissions based on confidentiality
- Backup: Regular backups, disaster recovery

**Data Retention:**
- Minimum 10 years per Article 12(2)
- Archived data: Migrate to long-term storage after 2 years (cold storage)
- Deletions: Only after retention period and legal hold check

**Authority Access:**
- Per Article 72(7): All PMM documentation available to authorities on request
- Prepare authority access procedures
- Redact proprietary business information if legally permissible
- Response timeline: Within timeline specified in authority request (default 30 days)

---

## 10. REVIEW AND AUDIT

### 10.1 PMM System Reviews

| Review Type | Frequency | Participants | Purpose |
|-------------|-----------|--------------|---------|
| **Weekly Operations Review** | Weekly | PMM Manager, MLOps Lead | Review operational status, alerts, immediate issues |
| **Monthly PMM Performance Review** | Monthly | PMM Manager, AI System Owner, Analytics Lead | Review performance, compliance, corrective actions |
| **Quarterly Governance Review** | Quarterly | AI Governance Committee, PMM Manager, Compliance | Review strategic PMM findings, risk updates, major issues |
| **Annual Effectiveness Review** | Annual | PMM Manager, QMS Rep, AI Governance Committee | Comprehensive assessment of PMM system effectiveness |

### 10.2 Management Review

**QMS Management Review Integration:**
- PMM system performance included in QMS Management Review (ISO 13485, ISO/IEC 42001)
- Annual PMM System Effectiveness Report presented
- Management reviews PMM adequacy, effectiveness, resource needs
- Management decisions documented and implemented

### 10.3 Internal Audit

**Annual PMM System Audit:**

**Audit Scope:**
- Compliance with this procedure (PROC-AI-PMM-001)
- PMMP completeness and accuracy
- PMM system operation (data collection, analysis, reporting)
- Control effectiveness (PMM-001 through PMM-005)
- Corrective action effectiveness
- Documentation completeness
- Regulatory compliance (Article 72)

**Audit Process:**
- Internal Audit plans and conducts audit per PROC-QMS-004
- PMM Manager provides evidence and documentation
- Auditor reviews records, interviews personnel, observes processes
- Non-conformities documented in audit report
- Corrective actions required for non-conformities
- Follow-up audit verifies corrective action effectiveness

**Audit Frequency:**
- Minimum: Annual
- More frequent: If serious issues identified or after significant changes

**Auditor Independence:**
- Internal auditor independent of PMM function
- No conflict of interest

### 10.4 External Audit

**Notified Body Audit (if applicable):**
- If AI system requires notified body involvement (per Article 43)
- Notified body audits PMM system as part of conformity assessment
- PMM Manager supports notified body audit
- PMM documentation and records available for review

**Market Surveillance Authority Inspection:**
- Authorities may inspect PMM system per Article 74-77
- PMM Manager coordinates authority inspection
- All PMM documentation available
- Compliance Officer manages authority relationship

---

## 11. NON-COMPLIANCE HANDLING

### 11.1 Non-Compliance with This Procedure

**If non-compliance with PROC-AI-PMM-001 identified:**

1. **Document Non-Compliance:**
   - Nature of non-compliance
   - AI system affected
   - Potential impact
   - Root cause

2. **Assess Risk:**
   - Does non-compliance create regulatory risk?
   - Does non-compliance affect AI system safety or compliance?
   - Severity: Critical / High / Medium / Low

3. **Initiate Corrective Action:**
   - Correct the specific non-compliance
   - Address root cause to prevent recurrence
   - Per Step 4.1 corrective action process

4. **Report:**
   - Inform PMM Manager
   - Inform QMS Representative
   - If critical: Inform AI Governance Committee
   - If regulatory impact: Inform Compliance Officer

5. **Preventive Action:**
   - Update procedure if ambiguity caused non-compliance
   - Provide training if knowledge gap caused non-compliance
   - Enhance controls if process weakness caused non-compliance

### 11.2 Non-Compliance Identified Through PMM

**If PMM identifies AI system non-compliance with EU AI Act:**

1. **Assess Severity:**
   - Critical: Serious incident potential, fundamental rights risk
   - High: Compliance requirement violation, significant risk
   - Medium: Minor non-compliance, low risk
   - Low: Administrative non-compliance

2. **Immediate Containment (if Critical or High):**
   - Assess if continued operation safe
   - Implement containment measures if needed
   - Escalate per Appendix D Escalation Matrix

3. **Root Cause Analysis:**
   - Identify why non-compliance occurred
   - Determine if systemic issue or isolated incident

4. **Corrective Action:**
   - Implement corrective actions per Step 4.1
   - Bring system into compliance
   - Verify effectiveness

5. **Authority Notification (if required):**
   - Report serious non-compliance per Step 5.2
   - Timeline: Within 15 days
   - Document notification

6. **Update Documentation:**
   - Update technical documentation
   - Update risk assessment
   - Update PMMP if needed

### 11.3 Escalation for Non-Compliance

**Escalation Matrix for PMM-Identified Non-Compliance:**

| Severity | Issue | Escalate To | Timeline | Required Actions |
|----------|-------|-------------|----------|------------------|
| **Critical** | Serious incident potential; Prohibited practice; Fundamental rights violation | CPO + AI Gov Committee + Legal + Market Surveillance Authority | Immediate (<1 hour) | Containment; Authority notification; Corrective action plan within 24 hours |
| **High** | Compliance requirement violation; Significant risk increase | PMM Manager + AI System Owner + Compliance Officer | Within 4 hours | Corrective action plan within 5 business days; Consider authority notification |
| **Medium** | Minor non-compliance; Controlled risk | PMM Manager + AI System Owner | Within 24 hours | Corrective action plan within 10 business days |
| **Low** | Administrative non-compliance; No risk increase | PMM Manager | Within 5 business days | Address in normal corrective action process |

---

## 12. RELATED DOCUMENTS

### 12.1 Regulatory References

- **EU AI Act (Regulation 2024/1689):**
  - Article 3: Definitions
  - Article 9: Risk Management System
  - Article 11: Technical Documentation
  - Article 12: Record-Keeping
  - Article 13: Transparency and Provision of Information to Deployers
  - Article 14: Human Oversight
  - Article 15: Accuracy, Robustness, Cybersecurity
  - Article 61: Post-Market Monitoring by Providers and Post-Market Monitoring Plan for High-Risk AI Systems
  - Article 72: Post-Market Monitoring by Providers
  - Article 73: Reporting of Serious Incidents
  - Article 74-77: Market Surveillance

- **GDPR (Regulation 2016/679):**
  - Article 28: Data Processing Agreements (for deployer data sharing)
  - Article 35: Data Protection Impact Assessment (for PMM data collection)

### 12.2 Standards References

- **ISO 13485:2016** - Medical devices quality management (Clause 8.2.1 Feedback)
- **ISO 14971:2019** - Medical device risk management (Clause 9 Post-production information)
- **ISO/IEC 42001:2023** - AI management system (Clause 8.2 Post-deployment monitoring)
- **ISO 9001:2015** - Quality management systems (Clause 8.2.1 Customer communication; Clause 10.2 Nonconformity and corrective action)
- **IEC 62304:2006** - Medical device software lifecycle (Clause 9 Post-production activities)

### 12.3 Internal Procedure References

| Procedure ID | Procedure Name | Relationship to PMM |
|--------------|---------------|---------------------|
| **PROC-AI-CLS-001** | AI System Classification | Risk classification informs PMM intensity |
| **PROC-AI-RM-001** | Risk Management | PMM findings feed risk management updates |
| **PROC-AI-DATA-001** | Data Governance | PMM data collection complies with data governance |
| **PROC-AI-DEV-001** | AI Development Lifecycle | PMM plan developed during design phase; PMM informs updates |
| **PROC-AI-INC-001** | Incident Management | PMM integrated with incident reporting (Article 73) |
| **PROC-AI-DOC-001** | Technical Documentation | PMMP part of technical documentation |
| **PROC-QMS-001** | Document Control | PMM documentation controlled per QMS |
| **PROC-QMS-002** | Corrective and Preventive Action | PMM corrective actions follow CAPA process |
| **PROC-QMS-003** | Management Review | PMM results presented in management review |
| **PROC-QMS-004** | Internal Audit | PMM system audited per internal audit process |

### 12.4 Supporting Documents

| Document Type | Document ID | Document Name |
|--------------|-------------|---------------|
| **Standard** | STD-AI-012 | Post-Market Monitoring Standard |
| **Policy** | POL-AI-001 | AI Governance Policy |

---

## 13. APPENDICES

### APPENDIX A: POST-MARKET MONITORING PLAN TEMPLATE

```markdown
# POST-MARKET MONITORING PLAN (PMMP)

**Plan ID:** PMMP-[AI-SYSTEM-ID]-v[VERSION]
**AI System Name:** [Name]
**AI System ID:** [ID]
**AI System Version:** [Version]
**Classification:** [High-Risk Category per Annex III]
**Risk Tier:** [Critical/High/Medium/Low]
**Plan Effective Date:** [Date]
**Next Review Date:** [Date]
**Plan Owner:** [PMM Manager Name]
**Document Status:** [Draft/Approved]

---

## 1. EXECUTIVE SUMMARY

Brief overview of AI system and PMM approach.

---

## 2. SCOPE AND OBJECTIVES

### 2.1 AI System Overview
- Intended purpose
- User population
- Deployment environment(s)
- Deployment scale

### 2.2 PMM Scope
- What is monitored
- What is not monitored (out of scope)

### 2.3 PMM Objectives
- What PMM aims to achieve
- Success criteria

### 2.4 Risk-Based Monitoring Intensity
- Risk tier: [Critical/High/Medium/Low]
- Risk score: [X.XX]
- Risk score calculation (reference Section 5.2.1)
- Monitoring intensity per risk tier

---

## 3. DATA COLLECTION STRATEGY

### 3.1 Data Sources
- Active data collection sources
- Reactive data collection sources
- Deployer data sources
- External information sources

### 3.2 Performance Metrics
Table of all metrics to be collected:

| Metric Category | Specific Metrics | Collection Method | Frequency | Responsible |
|----------------|------------------|-------------------|-----------|-------------|
| Model Performance | [List] | [Method] | [Frequency] | [Role] |
| Operational | [List] | [Method] | [Frequency] | [Role] |
| Data Quality | [List] | [Method] | [Frequency] | [Role] |
| Fairness | [List] | [Method] | [Frequency] | [Role] |

### 3.3 Data Collection Methods
- Technical infrastructure
- Automated collection procedures
- Manual collection procedures

### 3.4 Data Quality Standards
- Completeness requirements
- Accuracy requirements
- Timeliness requirements

### 3.5 Privacy and Data Protection
- Legal basis for data collection
- Data minimization approach
- Retention periods
- Pseudonymization/anonymization

---

## 4. ANALYSIS AND EVALUATION PROCEDURES

### 4.1 Performance Analysis
- Statistical analysis methods
- Analysis frequency
- Responsible parties

### 4.2 Bias and Fairness Analysis
- Fairness metrics to be calculated
- Bias drift detection methods
- Analysis frequency

### 4.3 Compliance Evaluation
- Compliance indicators table (per Section 6, Step 3.1)
- Compliance verification methods
- Evaluation frequency

### 4.4 Root Cause Analysis
- When RCA conducted
- RCA methodology
- Timeline

### 4.5 Predictive Analysis
- Predictive methods (if applicable)
- Early warning procedures

### 4.6 Analysis Schedule
Summary table of all analyses and frequencies

---

## 5. REPORTING AND ESCALATION

### 5.1 Internal Reporting
- Report types and frequencies
- Distribution lists

### 5.2 Escalation Procedures
- Escalation criteria and matrix (reference Appendix D)
- Escalation contacts

---

## 6. RISK MANAGEMENT INTEGRATION

### 6.1 PMM-to-Risk Management Touchpoints
- Table of integration points (reference Section 6, Step 3.2)

### 6.2 Risk Register Update Procedures
- When and how risk register updated based on PMM

### 6.3 KRI Monitoring
- KRIs linked to PMM metrics

---

## 7. FEEDBACK AND COMPLAINT HANDLING

### 7.1 Feedback Channels
- List of all feedback channels
- Access information

### 7.2 Complaint Handling Process
- Complaint receipt and categorization
- Investigation procedures
- Resolution and closure
- Escalation

### 7.3 Feedback Analysis
- Analysis procedures
- Frequency

---

## 8. DEPLOYER COMMUNICATION

### 8.1 Deployer Landscape
- Number of deployers
- Deployer categories
- High-touch deployers

### 8.2 Communication Channels
- Table of communication channels and frequencies

### 8.3 Communication Protocols
- Proactive communications
- Reactive communications

### 8.4 Data Sharing Agreements
- Deployer data sharing obligations
- Data submission mechanisms

---

## 9. RESOURCES AND RESPONSIBILITIES

### 9.1 PMM Team
- Roles and responsibilities (RACI matrix)

### 9.2 Infrastructure
- Monitoring infrastructure
- Data storage
- Analysis tools

### 9.3 Budget
- Estimated annual PMM budget

---

## 10. PMMP REVIEW AND UPDATES

### 10.1 Review Frequency
- When PMMP reviewed and updated

### 10.2 Update Process
- How updates managed

---

## APPENDICES

### Appendix A: Data Collection Methods Matrix
### Appendix B: Compliance Evaluation Framework
### Appendix C: Root Cause Analysis Template
### Appendix D: Escalation Matrix
### Appendix E: Feedback Forms and Templates
### Appendix F: Deployer Communication Templates
### Appendix G: Report Templates

---

## APPROVAL

| Role | Name | Signature | Date |
|------|------|-----------|------|
| PMM Manager | [Name] | __________ | _____ |
| AI System Owner | [Name] | __________ | _____ |
| QMS Representative | [Name] | __________ | _____ |
| AI Risk Manager | [Name] | __________ | _____ |
| Compliance Officer | [Name] | __________ | _____ |
| AI Governance Committee Chair | [Name] | __________ | _____ |

---
```

---

### APPENDIX B: KPI LIBRARY FOR POST-MARKET MONITORING

Comprehensive library of Key Performance Indicators for AI system monitoring. Select appropriate KPIs based on AI system characteristics and risk profile.

#### B.1 Model Performance KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **PERF-001** | Overall Accuracy | Percentage of correct predictions | ≥ 90% | Daily/Weekly |
| **PERF-002** | Precision | Positive predictive value (TP / (TP + FP)) | ≥ 85% | Weekly |
| **PERF-003** | Recall (Sensitivity) | True positive rate (TP / (TP + FN)) | ≥ 85% | Weekly |
| **PERF-004** | F1 Score | Harmonic mean of precision and recall | ≥ 0.85 | Weekly |
| **PERF-005** | AUC-ROC | Area under Receiver Operating Characteristic curve | ≥ 0.80 | Monthly |
| **PERF-006** | AUC-PR | Area under Precision-Recall curve | ≥ 0.75 | Monthly |
| **PERF-007** | Confusion Matrix Metrics | Detailed TP, TN, FP, FN counts | Monitor trends | Weekly |
| **PERF-008** | Calibration Error | Brier score or Expected Calibration Error | < 0.15 | Monthly |
| **PERF-009** | Confidence Distribution | Distribution of model confidence scores | No major shifts | Weekly |
| **PERF-010** | Accuracy by Segment | Accuracy broken down by user segment | No segment < 80% | Monthly |
| **PERF-011** | Prediction Accuracy Trend | Trend direction over time | Stable or improving | Weekly |
| **PERF-012** | Accuracy Degradation Rate | % decrease from baseline per month | < 5% per quarter | Monthly |

#### B.2 Operational Performance KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **OPS-001** | Inference Latency (p50) | Median response time | < 200ms | Continuous |
| **OPS-002** | Inference Latency (p95) | 95th percentile response time | < 500ms | Continuous |
| **OPS-003** | Inference Latency (p99) | 99th percentile response time | < 1000ms | Continuous |
| **OPS-004** | Throughput | Requests processed per second | ≥ 100 req/s | Continuous |
| **OPS-005** | System Error Rate | % of requests resulting in system errors | < 0.1% | Continuous |
| **OPS-006** | System Availability | Uptime percentage | ≥ 99.9% | Continuous |
| **OPS-007** | API Success Rate | % of successful API calls | ≥ 99.5% | Continuous |
| **OPS-008** | Resource Utilization | CPU, memory, GPU utilization | < 80% sustained | Continuous |
| **OPS-009** | Queue Depth | Number of requests waiting | < 100 | Continuous |
| **OPS-010** | Request Timeout Rate | % of requests timing out | < 0.5% | Continuous |
| **OPS-011** | Cache Hit Rate | % of requests served from cache | ≥ 70% (if applicable) | Daily |
| **OPS-012** | Model Loading Time | Time to load model on startup | < 60 seconds | Per deployment |

#### B.3 Fairness and Bias KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **FAIR-001** | Demographic Parity Ratio | (Protected group positive rate) / (Reference group positive rate) | 0.8 - 1.25 | Weekly |
| **FAIR-002** | Equal Opportunity Ratio | (Protected group TPR) / (Reference group TPR) | 0.8 - 1.25 | Weekly |
| **FAIR-003** | Equalized Odds | TPR and FPR balance across groups | Max 10% difference | Weekly |
| **FAIR-004** | Predictive Parity | Precision equality across groups | 0.8 - 1.25 ratio | Monthly |
| **FAIR-005** | Calibration Gap | Difference in calibration by group | < 5% difference | Monthly |
| **FAIR-006** | Disparate Impact Ratio | (Protected group selection rate) / (Reference group selection rate) | ≥ 0.8 (80% rule) | Monthly |
| **FAIR-007** | Intersectional Fairness | Fairness metrics for intersectional groups | Same as individual | Quarterly |
| **FAIR-008** | Bias Drift Magnitude | Change in fairness ratio from baseline | < 10% change | Weekly |
| **FAIR-009** | False Positive Rate Disparity | FPR difference between groups | < 5% difference | Weekly |
| **FAIR-010** | False Negative Rate Disparity | FNR difference between groups | < 5% difference | Weekly |

#### B.4 Data Quality KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **DATA-001** | Data Completeness | % of records without missing values in critical features | ≥ 95% | Daily |
| **DATA-002** | Data Freshness | Average age of most recent data used | < 7 days | Daily |
| **DATA-003** | Feature Drift (PSI) | Population Stability Index for feature distributions | < 0.25 (stable) | Weekly |
| **DATA-004** | Label Quality | % of verified/correct labels (if ground truth available) | ≥ 98% | Monthly |
| **DATA-005** | Outlier Rate | % of data points flagged as statistical outliers | < 5% | Daily |
| **DATA-006** | Input Validation Failure Rate | % of inputs failing validation rules | < 1% | Daily |
| **DATA-007** | Data Schema Compliance | % of inputs matching expected schema | 100% | Daily |
| **DATA-008** | Duplicate Record Rate | % of duplicate inputs received | < 0.1% | Weekly |
| **DATA-009** | Data Staleness | Maximum age of any feature used | < 30 days | Weekly |
| **DATA-010** | Feature Correlation Drift | Change in feature correlation matrix | Monitor significant changes | Monthly |

#### B.5 Security and Robustness KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **SEC-001** | Unauthorized Access Attempts | Count of failed authentication attempts | < 10 per day | Continuous |
| **SEC-002** | Data Access Anomalies | Unusual data access patterns detected by UEBA | 0 critical | Continuous |
| **SEC-003** | Adversarial Input Detection Rate | % of inputs flagged as potentially adversarial | < 0.1% | Daily |
| **SEC-004** | Security Incident Count | Number of security incidents related to AI system | 0 | Continuous |
| **SEC-005** | Vulnerability Scan Findings | Count of open security vulnerabilities | 0 high/critical | Weekly |
| **SEC-006** | Model Extraction Attempt Detection | Suspected model extraction attacks | 0 | Continuous |
| **SEC-007** | Data Poisoning Indicators | Anomalous training data patterns (if retraining) | 0 | Per retraining |
| **SEC-008** | Encryption Status | % of data encrypted at rest and in transit | 100% | Weekly |
| **SEC-009** | Access Control Compliance | % of access requests properly authorized | 100% | Weekly |
| **SEC-010** | Audit Log Completeness | % of required events logged | 100% | Daily |

#### B.6 Human Oversight KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **HO-001** | Human Override Rate | % of AI decisions overridden by humans | Monitor (10-20% typical) | Weekly |
| **HO-002** | Override Accuracy | % of overrides that were correct decisions | Monitor trend | Weekly |
| **HO-003** | Human Review Time | Average time for human to review flagged decision | < 5 minutes | Weekly |
| **HO-004** | Escalation Rate | % of decisions escalated to human review | Monitor (5-15% typical) | Weekly |
| **HO-005** | Human-AI Agreement Rate | % of cases where human agrees with AI | Monitor trend | Weekly |
| **HO-006** | Override Response Time | Time from AI decision to human override | < 1 hour (critical) | Continuous |

#### B.7 User Experience KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **UX-001** | User Satisfaction Score | CSAT score from surveys | ≥ 4.0 / 5.0 | Quarterly |
| **UX-002** | Net Promoter Score (NPS) | NPS from user surveys | ≥ 50 | Quarterly |
| **UX-003** | User Complaint Rate | Number of complaints per 1000 users | < 5 per 1000 | Monthly |
| **UX-004** | Feature Adoption Rate | % of users using AI feature | Monitor growth | Monthly |
| **UX-005** | User Retention Rate | % of users continuing to use AI system | ≥ 85% | Monthly |
| **UX-006** | Session Duration | Average user session length | Monitor trend | Weekly |
| **UX-007** | Interaction Completion Rate | % of started interactions completed | ≥ 90% | Weekly |
| **UX-008** | Error Message Frequency | User-facing error messages per 1000 sessions | < 10 per 1000 | Daily |

#### B.8 Compliance KPIs

| KPI ID | KPI Name | Definition | Target Threshold (Example) | Frequency |
|--------|----------|------------|---------------------------|-----------|
| **COMP-001** | Compliance Indicator Pass Rate | % of compliance indicators in conformity | 100% | Monthly |
| **COMP-002** | Regulatory Audit Findings | Count of open audit findings | 0 high severity | Continuous |
| **COMP-003** | Documentation Currency | % of required documentation up-to-date | 100% | Monthly |
| **COMP-004** | Training Compliance | % of personnel with current training | 100% | Monthly |
| **COMP-005** | Incident Reporting Timeliness | % of incidents reported within required timeline | 100% | Continuous |
| **COMP-006** | Data Retention Compliance | % of records retained per policy | 100% | Quarterly |

---

### APPENDIX C: DATA COLLECTION METHODS

Detailed guidance on implementing various data collection methods for post-market monitoring.

#### C.1 Automated Performance Metrics Collection

**Method:** Real-time prediction logging and metrics calculation

**Implementation:**
1. **Prediction Logging:**
   - Log every prediction to structured database or data lake
   - Include: timestamp, user ID (pseudonymized), model version, inputs (or hash), output, confidence, latency
   - Use asynchronous logging to avoid performance impact
   - Example: Write to message queue (Kafka, RabbitMQ) → Batch write to database

2. **Ground Truth Collection:**
   - **Scenario 1: Immediate ground truth available**
     - Example: User confirms/rejects prediction
     - Link ground truth to prediction ID
     - Calculate accuracy in near-real-time
   - **Scenario 2: Delayed ground truth**
     - Example: Loan default prediction → know outcome in 6-12 months
     - Schedule delayed ground truth collection job
     - Batch calculate accuracy retrospectively
   - **Scenario 3: Sampled ground truth**
     - If automated ground truth not available
     - Randomly sample predictions (e.g., 1000 per week)
     - Human labels samples
     - Calculate estimated accuracy from sample

3. **Metrics Calculation:**
   - Scheduled batch jobs (daily/weekly per PMMP)
   - Calculate: Accuracy, precision, recall, F1, confusion matrix, etc.
   - Store calculated metrics in time-series database
   - Visualize in dashboards

#### C.2 Operational Metrics Monitoring

**Method:** APM (Application Performance Monitoring) tools

**Implementation:**
1. **Select APM Tool:**
   - Examples: Datadog, New Relic, Prometheus + Grafana, AppDynamics
   - Consider: Cost, ease of integration, features, scalability

2. **Instrument Code:**
   - Add APM agent to application
   - Instrument inference endpoint
   - Custom metrics for AI-specific monitoring

3. **Configure Metrics Collection:**
   - Latency: p50, p95, p99 response times
   - Throughput: requests per second
   - Error rate: 5xx errors, exceptions
   - Resource utilization: CPU, memory, GPU

4. **Set Up Dashboards:**
   - Real-time operational dashboard
   - Historical trend charts
   - Alerting for threshold breaches

#### C.3 Bias and Fairness Metrics Collection

**Method:** Batch analysis on prediction logs with demographic data

**Implementation:**
1. **Collect Protected Characteristics:**
   - **If legally permissible:** Collect demographic data with user consent
   - **If not permissible:** Use proxy variables or conduct periodic audits on representative samples
   - **Ensure GDPR compliance:** Legal basis, data minimization, retention limits

2. **Fairness Metrics Pipeline:**
   - Batch job (weekly/monthly per PMMP)
   - Query prediction logs for analysis period
   - Join with demographic data (if available)
   - Stratify predictions by protected group
   - Calculate fairness metrics: Demographic parity, equal opportunity, equalized odds, predictive parity
   - Calculate disparate impact ratios
   - Store results in metrics database

3. **Drift Detection:**
   - Compare current fairness metrics to baseline (from validation)
   - Calculate drift magnitude (absolute difference, ratio)
   - Flag if drift exceeds threshold (e.g., fairness ratio < 0.8 or > 1.25)

#### C.4 User Feedback Collection

**Method 1: In-Application Feedback Form**

**Implementation:**
1. Embed feedback button/link in AI system UI
2. Feedback form fields:
   - Feedback type (dropdown): Performance issue, Bias concern, Safety issue, Usability issue, Feature request, Positive feedback, Question
   - Description (free text)
   - Prediction ID (auto-populated if feedback on specific prediction)
   - User contact (optional)
3. Submit button → POST to feedback API
4. API validates and stores in feedback database
5. Auto-acknowledgment email sent to user (if contact provided)
6. Auto-categorization (keyword-based or ML)
7. Route to appropriate investigator

**Method 2: Email Feedback**

**Implementation:**
1. Publish feedback email address: ai-feedback@[organization].com
2. Email forwarded to ticketing system (e.g., Zendesk, Jira Service Management)
3. Support team creates feedback record in database
4. Manual categorization and routing

**Method 3: Feedback Portal**

**Implementation:**
1. Web portal at [organization].com/ai-feedback
2. Similar to in-app form but accessible externally
3. Authentication optional (guest submission allowed)
4. Same backend as in-app feedback

#### C.5 Deployer Data Collection

**Method 1: Deployer Portal**

**Implementation:**
1. Secure web portal for deployers (authentication required)
2. Deployer dashboard showing:
   - Their AI system usage statistics
   - Performance summary (if provider calculates for them)
   - Incident history
3. Data submission forms:
   - Performance data submission form (structured fields)
   - Incident report form
   - General feedback form
4. File upload capability (for bulk data, reports)
5. Submitted data stored in deployer data database
6. Email notification to PMM Manager on submission

**Method 2: Structured Deployer Surveys**

**Implementation:**
1. Quarterly deployer survey (e.g., Google Forms, SurveyMonkey, Typeform)
2. Survey questions:
   - Usage statistics (volume, frequency, user types)
   - Performance observations (accuracy, issues encountered)
   - Incidents or near-misses
   - User feedback received by deployer
   - Changes in deployment environment
   - Deployer satisfaction
   - Suggestions for improvement
3. Email distribution to all deployers
4. Reminder emails to non-responders (1 week, 2 weeks after initial)
5. Responses automatically stored in survey tool
6. PMM Manager exports responses for analysis

**Method 3: Deployer Interviews (High-Touch)**

**Implementation:**
1. Schedule quarterly calls with high-touch deployers
2. Interview guide prepared by PMM Manager
3. Topics: Usage patterns, performance, issues, feedback, satisfaction
4. Interview notes documented (structured template)
5. Action items tracked

**Method 4: Automated API Data Submission**

**Implementation** (if deployer has technical capability):
1. Provider offers API endpoint for deployer data submission
2. API documentation provided to deployers
3. Deployer integrates API call into their systems
4. Periodic automated data submission (e.g., daily statistics)
5. Data validated and stored by provider
6. Most efficient method (no manual effort from deployer)

#### C.6 Drift Detection Methods

**Method:** Statistical drift detection on input feature distributions

**Implementation:**
1. **Baseline Establishment:**
   - Calculate feature distribution statistics from training data
   - Store baseline: Mean, std dev, quantiles, histogram, etc.

2. **Drift Metrics:**
   - **Population Stability Index (PSI):**
     - Measures change in distribution
     - PSI = Σ (Actual% - Expected%) × ln(Actual% / Expected%)
     - Thresholds: <0.1 (no change), 0.1-0.25 (moderate drift), >0.25 (significant drift)
   - **Kolmogorov-Smirnov (KS) Test:**
     - Statistical test for distribution difference
     - p-value < 0.05 indicates significant drift
   - **Chi-Square Test (for categorical features):**
     - Tests if distribution changed
     - p-value < 0.05 indicates significant drift

3. **Drift Detection Pipeline:**
   - Weekly batch job
   - Sample production input data (e.g., 10,000 records)
   - Calculate current feature distributions
   - Compare to baseline using PSI, KS, Chi-Square
   - Flag features with significant drift
   - Alert if critical features drifted

4. **Visualization:**
   - Drift dashboard showing PSI scores over time
   - Distribution comparison charts (baseline vs. current)

---

### APPENDIX D: ESCALATION MATRIX

Defines when and how to escalate PMM findings based on severity.

#### D.1 Escalation Levels

| Level | Description | Recipients | Response Time |
|-------|-------------|-----------|---------------|
| **Level 1 (Critical)** | Serious incident potential; Safety risk; Fundamental rights violation; Prohibited practice | CPO, AI Governance Committee, Legal, CRO, Market Surveillance Authority (if required) | Immediate (<1 hour) |
| **Level 2 (High)** | High risk; Significant performance degradation; High bias drift; Compliance violation | PMM Manager, AI System Owner, Compliance Officer, AI Risk Manager | 4 hours |
| **Level 3 (Medium)** | Medium risk; Warning threshold breach; Pattern of issues | PMM Manager, AI System Owner, MLOps Lead | 24 hours |
| **Level 4 (Low)** | Low risk; Informational; Trend monitoring | MLOps Lead, PMM Manager (FYI) | No immediate response required |

#### D.2 Escalation Triggers

**Level 1 (Critical) Escalation Triggers:**
- Any serious incident (per Article 3(49) definition) occurred or imminent
- AI system produces output that could directly cause death or serious harm
- Fundamental rights violation occurred (discrimination, privacy breach, etc.)
- Prohibited practice (Article 5) detected in operation
- Critical system failure affecting all users
- Data breach involving AI system
- Regulatory authority issues urgent request or warning
- Accuracy drops below safety-critical threshold (e.g., <70% for high-stakes decision)
- Bias drift exceeds critical threshold (fairness ratio <0.6 or >1.67)
- Control failure creating unmitigated critical risk

**Level 2 (High) Escalation Triggers:**
- High performance threshold breach (red alert)
- Bias drift exceeds high threshold (fairness ratio <0.8 or >1.25)
- Compliance non-conformity identified (Article 10, 13, 14, 15 violations)
- Pattern of serious user complaints (>10 similar complaints within 30 days)
- Security vulnerability discovered (CVE high severity)
- Data quality degradation affecting model performance
- Control failure creating unmitigated high risk
- Deployer reports serious issue
- Trend predicts critical threshold breach within 30 days

**Level 3 (Medium) Escalation Triggers:**
- Medium performance threshold breach (orange alert)
- Warning threshold approached (yellow alert)
- Moderate bias drift (fairness ratio 0.8-0.85 or 1.18-1.25)
- Pattern of moderate user complaints (5-10 similar complaints within 30 days)
- Data quality issues requiring investigation
- Compliance indicator trending toward non-conformity

**Level 4 (Low) Escalation Triggers:**
- Low threshold breach (informational)
- Trend monitoring (no immediate issue but monitoring required)
- Positive feedback trends
- Routine status updates

#### D.3 Escalation Process

**Step 1: Identify Escalation Need**
- PMM analysis or alert identifies issue requiring escalation
- Determine escalation level per triggers above

**Step 2: Prepare Escalation Summary**
- Brief description of issue (1-2 sentences)
- Evidence/data supporting escalation
- Potential impact
- Recommended immediate actions
- Responsible party for follow-up

**Step 3: Notify Recipients**
- **Critical (Level 1):**
  - Phone call to CPO and on-call AI Governance Committee member (immediate)
  - Email to all Level 1 recipients with subject line: "[CRITICAL] AI System [ID] - [Brief Issue Description]"
  - Follow-up with detailed report within 4 hours
- **High (Level 2):**
  - Email to Level 2 recipients with subject line: "[HIGH] AI System [ID] - [Brief Issue Description]"
  - Within 4 hours
  - Request acknowledgment
- **Medium (Level 3):**
  - Email to Level 3 recipients with subject line: "[MEDIUM] AI System [ID] - [Brief Issue Description]"
  - Within 24 hours
- **Low (Level 4):**
  - Include in next scheduled report (weekly/monthly)
  - No separate escalation notification

**Step 4: Escalation Meeting (for Level 1 and Level 2)**
- Schedule escalation meeting within timeline:
  - Level 1: Within 2 hours
  - Level 2: Within 1 business day
- Attendees: Recipients + relevant experts
- Agenda: Issue review, risk assessment, decision on actions
- Document decisions and actions

**Step 5: Implement Immediate Actions**
- Execute containment measures (if needed)
- Initiate corrective action process (Step 4.1)
- Communicate to deployers/users (if required)
- Notify authorities (if required)

**Step 6: Follow-Up and Closure**
- Regular status updates to escalation recipients (frequency per severity)
- Escalation closed when:
  - Issue resolved
  - Corrective action effectiveness verified
  - Risk reduced to acceptable level
  - Final report provided to escalation recipients

#### D.4 Escalation Communication Templates

**Critical Escalation Email Template:**

```
Subject: [CRITICAL] AI System [SYSTEM-ID] - [Brief Issue Description]

CRITICAL ESCALATION - IMMEDIATE ATTENTION REQUIRED

AI System: [System Name] ([ID])
Issue: [Brief description]
Severity: CRITICAL
Detected: [Date and Time]
Current Status: [Operating / Suspended / Under Investigation]

ISSUE SUMMARY:
[2-3 sentence description of what happened]

POTENTIAL IMPACT:
[Description of potential harm, users affected, regulatory risk]

IMMEDIATE ACTIONS TAKEN:
1. [Action 1]
2. [Action 2]
3. [Action 3]

IMMEDIATE NEXT STEPS:
1. [Next step 1]
2. [Next step 2]

ESCALATION MEETING:
Date/Time: [Date and time]
Link: [Meeting link]

CONTACT FOR QUESTIONS:
[PMM Manager Name]
[Phone]
[Email]

DETAILED REPORT TO FOLLOW WITHIN 4 HOURS.
```

---

### APPENDIX E: CROSS-REFERENCES TO OTHER PROCEDURES

This appendix provides detailed cross-references between PROC-AI-PMM-001 and other procedures in the AI compliance framework.

#### E.1 Integration with Risk Management (PROC-AI-RM-001)

```
POST-MARKET MONITORING          →          RISK MANAGEMENT
────────────────────────                   ─────────────────

PMM Findings                    →          Risk Inputs
├─ Performance data             →          Likelihood validation
├─ Incident occurrences         →          Likelihood reassessment
├─ Bias drift detection         →          Bias risk updates
├─ Control effectiveness        →          Residual risk reassessment
├─ New misuse patterns          →          New risk identification
└─ Environmental changes        →          New risk identification

PMM Triggers                    →          RM Activities
├─ Threshold breach             →          RM Step 2.1: Risk reassessment
├─ Bias drift                   →          RM Step 2.4: Bias risk reassessment
├─ New misuse                   →          RM Step 1.3: Misuse risk update
├─ Incident                     →          RM Step 6.3: Incident risk assessment
└─ Quarterly review             →          RM Step 5.1: Residual risk validation

Risk Management                 →          PMM Requirements
├─ Risk register                →          PMM metrics definition
├─ KRIs                         →          PMM monitoring thresholds
├─ Control requirements         →          PMM effectiveness monitoring
└─ Risk acceptance              →          PMM oversight intensity
```

**Key Integration Points:**
- PMM Step 3.2 (Validate Risk Management Assumptions) → PROC-AI-RM-001 (full integration)
- PMM findings feed quarterly risk validation
- Risk register updates trigger PMMP updates if new monitoring needed

#### E.2 Integration with Incident Management (PROC-AI-INC-001)

```
POST-MARKET MONITORING          →          INCIDENT MANAGEMENT
────────────────────────                   ────────────────────

PMM Detection                   →          Incident Triggers
├─ Critical threshold breach    →          Potential serious incident
├─ User reports harm            →          Serious incident report
├─ Deployer incident report     →          Serious incident report
├─ Safety metric breach         →          Serious incident investigation
└─ Pattern of issues            →          Systemic issue investigation

PMM Support                     →          Incident Process
├─ Performance data             →          Evidence for investigation
├─ Historical analysis          →          Pattern identification
├─ Similar incidents            →          Comparative analysis
└─ Trend analysis               →          Root cause inputs

Incident Outputs                →          PMM Updates
├─ Root cause findings          →          Add new monitoring metrics
├─ Lessons learned              →          Adjust alert thresholds
├─ Corrective actions           →          Monitor effectiveness
└─ Process improvements         →          Update PMMP
```

**Key Integration Points:**
- PMM Step 4.3 (Integrate with Incident Reporting) → PROC-AI-INC-001
- PMM provides early warning for potential incidents
- Incident investigation uses PMM data as primary evidence source
- Post-incident: PMM monitors corrective action effectiveness

#### E.3 Integration with Data Governance (PROC-AI-DATA-001)

```
DATA GOVERNANCE                 →          POST-MARKET MONITORING
─────────────────                          ────────────────────────

Data Policies                   →          PMM Compliance
├─ Data collection rules        →          PMM data collection procedures
├─ Privacy requirements         →          PMM data protection measures
├─ Retention policies           →          PMM data retention (10 years)
├─ Access controls              →          PMM data access restrictions
└─ GDPR compliance              →          PMM legal basis documentation

Data Quality Framework          →          PMM Metrics
├─ Completeness standards       →          Data completeness KPIs
├─ Accuracy requirements        →          Data quality monitoring
├─ Timeliness requirements      →          Data freshness KPIs
└─ Drift detection              →          Feature drift monitoring

PMM Insights                    →          Data Governance Updates
├─ Data quality issues          →          Data collection improvements
├─ Drift detection              →          Data validation updates
└─ Privacy incidents            →          Data governance enhancements
```

**Key Integration Points:**
- PMM data collection complies with PROC-AI-DATA-001 requirements
- PMM monitors data quality per data governance standards
- PMM findings inform data governance policy updates

#### E.4 Integration with Development Lifecycle (PROC-AI-DEV-001)

```
DEVELOPMENT LIFECYCLE           →          POST-MARKET MONITORING
──────────────────────                     ────────────────────────

Design Phase                    →          PMM Planning
├─ System requirements          →          PMM objectives definition
├─ Performance requirements     →          PMM metrics selection
├─ Risk assessment              →          PMM intensity determination
└─ Baseline establishment       →          PMM comparison baseline

Testing Phase                   →          PMM Thresholds
├─ Validation performance       →          PMM performance thresholds
├─ Fairness metrics             →          PMM bias thresholds
├─ Test results                 →          PMM baseline values
└─ Edge case testing            →          PMM edge case monitoring

Deployment Phase                →          PMM Activation
├─ PMMP approval required       →          Deployment gate
├─ Monitoring infrastructure    →          Operational before deployment
└─ Initial monitoring           →          Deployment monitoring

PMM Findings                    →          Development Updates
├─ Performance degradation      →          Model retraining
├─ Bias drift                   →          Model updates
├─ Feature requests             →          Product roadmap
└─ Bug reports                  →          Bug fixes and patches
```

**Key Integration Points:**
- PMM Plan developed during design phase (PROC-AI-DEV-001 Phase 2)
- PMM infrastructure deployed before production (PROC-AI-DEV-001 Phase 4)
- PMM findings trigger development updates (model retraining, patches)

#### E.5 Integration with Technical Documentation (PROC-AI-DOC-001)

```
TECHNICAL DOCUMENTATION         →          POST-MARKET MONITORING
────────────────────────                   ────────────────────────

Technical Doc Requirements      →          PMM Documentation
├─ Article 11(1): System desc   →          PMMP includes system overview
├─ Article 11(1)(d): Risk mgmt  →          PMMP links to risk register
├─ Article 11(1)(g): Testing    →          PMMP baseline from validation
├─ Article 11(2): Instructions  →          PMMP deployer communication
└─ Article 72: PMMP required    →          PMMP part of technical doc

PMM Updates                     →          Technical Doc Updates
├─ PMMP updates                 →          Technical doc version update
├─ Performance changes          →          System description update
├─ Corrective actions           →          Change history documentation
└─ Risk reassessments           →          Risk management section update
```

**Key Integration Points:**
- PMMP is mandatory part of technical documentation (Article 72(4))
- PMM findings trigger technical documentation updates (Article 72(6))
- Technical documentation updated whenever PMMP updated

#### E.6 Integration with QMS Procedures

**PROC-QMS-001 (Document Control):**
- PMMP subject to document control (version control, access control, retention)
- All PMM reports and records controlled per QMS

**PROC-QMS-002 (Corrective Action):**
- PMM-triggered corrective actions follow CAPA process
- PMM Manager initiates CAPA; QMS tracks to closure
- PMM provides effectiveness verification evidence

**PROC-QMS-003 (Management Review):**
- PMM results presented in quarterly management review
- Annual PMM System Effectiveness Report input to management review
- Management decisions on PMM improvements

**PROC-QMS-004 (Internal Audit):**
- Annual audit of PMM system compliance with PROC-AI-PMM-001
- Audit verifies control effectiveness (PMM-001 through PMM-005)
- Audit findings trigger PMM improvements

---

## 14. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial procedure development. Comprehensive PMM procedure per EU AI Act Article 72. |
|  |  |  |  |
|  |  |  |  |

---

## 15. APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | [Name] | AI Post-Market Monitoring Manager | __________ | ________ |
| **Reviewed By** | [Name] | Quality Management Representative | __________ | ________ |
| **Reviewed By** | [Name] | AI Risk Manager | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Reviewed By** | [Name] | Chief Product Officer | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Internal/Confidential]
**Distribution:** AI Post-Market Monitoring Manager, AI System Owners, MLOps Team, Data Analytics Team, QMS Representative, AI Risk Manager, Compliance Officer, AI Governance Committee, Customer Support, Legal
**Retention:** 10 years (per EU AI Act Article 12(2))
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]
**Document Location:** [Document management system path]
**Regulatory Requirement:** EU AI Act Article 72 (Post-Market Monitoring by Providers)

---

**END OF PROCEDURE PROC-AI-PMM-001**

**Total Lines:** 1,432

---

**Document Completeness Checklist:**

✅ All Article 72 requirements addressed
✅ All Article 72(5) PMMP contents defined
✅ Risk-based monitoring intensity defined
✅ Integration with QMS
✅ Integration with risk management (Article 72(5)(d))
✅ Integration with incident reporting (Article 72(8))
✅ Deployer communication mechanisms (Article 72(5)(f))
✅ Authority access procedures (Article 72(7))
✅ All 5 controls implemented
✅ Comprehensive step-by-step procedures
✅ Templates and appendices
✅ KPIs and metrics
✅ Documentation requirements
✅ Review and audit procedures