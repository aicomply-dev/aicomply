# PROC-AI-RM-001: AI Risk Management Procedure

**Procedure ID:** PROC-AI-RM-001  
**Procedure Name:** AI Risk Management Procedure  
**Standard:** STD-AI-002: AI Risk Management Standard  
**Covers Controls:** RM-001, RM-002, RM-003, RM-004, RM-005, RM-006, RM-007, RM-008, RM-009, RM-010, RM-011, RM-012, RM-013, RM-014  
**Effective Date:** [To be filled]  
**Last Updated:** [To be filled]  
**Next Review Date:** [To be filled]  
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the step-by-step process for implementing a continuous, iterative AI risk management system that identifies, assesses, treats, and monitors risks throughout the AI system lifecycle in compliance with EU AI Act Article 9 and ISO/IEC 42001.

### 1.2 Scope

This procedure applies to:
- All AI systems classified as high-risk per STD-AI-001
- All AI systems that process personal data
- All AI systems used in critical decision-making
- All AI system development, deployment, and operation activities

This procedure does not apply to:
- Minimal-risk AI systems (unless specifically requested)
- Third-party AI systems (covered by PROC-AI-VENDOR-001)

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Risk Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Risk Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|---|---|
| **AI Risk Manager** | Own and execute risk management process; maintain risk register; conduct risk assessments | Approve risk assessments; escalate critical/high risks |
| **AI System Owner** | Identify risks for their systems; implement risk controls; accept residual risks | Accept low/very low residual risks |
| **Chief Risk Officer** | Oversight of risk management; approve high-risk mitigation plans; governance | Escalate to Board; approve critical risk acceptance |
| **AI Governance Committee** | Review and approve risk assessments; monitor risk status; approve risk acceptance | Approve high-risk mitigation; block deployments |
| **Data Scientist/ML Engineer** | Implement technical controls; conduct testing; provide technical risk input | Execute risk mitigation activities |
| **Compliance Officer** | Verify regulatory compliance; audit risk management process | Challenge risk assessments; recommend improvements |
| **Internal Audit** | Audit risk management effectiveness; verify control operation | Validate control implementation |

### 2.2 RACI Matrix

| Activity | AI Risk Manager | AI System Owner | CRO | AI Gov Committee | Data Scientist | Compliance |
|----------|---|---|---|---|---|---|
| Risk identification | A | R | C | I | R | C |
| Risk assessment | A | R | C | I | R | C |
| Risk register maintenance | R | C | I | C | I | I |
| Risk treatment planning | A | R | C | C | R | C |
| Control implementation | C | R | I | I | A | I |
| Residual risk assessment | A | R | C | C | R | C |
| Risk acceptance | C | R | A | A | I | C |
| Risk monitoring | A | R | I | C | R | I |
| Incident reporting | I | R | A | C | R | C |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. RISK MANAGEMENT FRAMEWORK

### 3.1 Risk Management System Components

The AI risk management system consists of five integrated components:

```
┌─────────────────────────────────────────────────────────────┐
│         AI RISK MANAGEMENT SYSTEM FRAMEWORK                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. GOVERNANCE & OVERSIGHT                                  │
│     ├─ AI Governance Committee                              │
│     ├─ Risk Management Policy                               │
│     └─ Risk Appetite & Tolerance                            │
│                                                              │
│  2. RISK IDENTIFICATION & ASSESSMENT                        │
│     ├─ Risk Identification Process                          │
│     ├─ Risk Analysis & Scoring                              │
│     ├─ Bias & Discrimination Assessment                     │
│     └─ Risk Register Maintenance                            │
│                                                              │
│  3. RISK TREATMENT & CONTROL                                │
│     ├─ Risk Treatment Strategy Selection                    │
│     ├─ Control Design & Implementation                      │
│     ├─ Residual Risk Assessment                             │
│     └─ Risk Acceptance & Approval                           │
│                                                              │
│  4. RISK MONITORING & REVIEW                                │
│     ├─ Continuous Risk Monitoring                           │
│     ├─ Periodic Risk Reviews                                │
│     ├─ Incident Risk Assessment                             │
│     └─ Escalation & Response                                │
│                                                              │
│  5. CONTINUOUS IMPROVEMENT                                  │
│     ├─ Lessons Learned Process                              │
│     ├─ Framework Effectiveness Review                       │
│     └─ Framework Updates                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Risk Management Lifecycle Integration

Risk management activities are integrated into each phase of the AI system lifecycle:

| Lifecycle Phase | Risk Activities | Gate Criteria |
|---|---|---|
| **1. Design** | Initial risk assessment; Risk requirements definition; Risk-based design decisions | Risk assessment completed; Risk requirements documented |
| **2. Development** | Ongoing risk assessment; Risk control implementation; Risk testing | Controls implemented; Risk testing completed |
| **3. Testing** | Risk control testing; Residual risk assessment; Risk acceptance decision | Residual risk acceptable; Risk acceptance documented |
| **4. Deployment** | Pre-deployment risk review; Deployment risk assessment; Risk monitoring setup | Pre-deployment review completed; Monitoring configured |
| **5. Operation** | Continuous risk monitoring; Incident risk assessment; Periodic risk reviews | Monitoring operational; Reviews scheduled |
| **6. Decommissioning** | Decommissioning risk assessment; Data retention/deletion risks; Transition risks | Decommissioning risks assessed; Data handling plan approved |

### 3.3 Risk Appetite and Tolerance

Risk appetite defines the level and type of risk the organization is willing to accept in pursuit of its AI objectives. Risk tolerance defines the acceptable deviation from the risk appetite.

#### 3.3.1 Risk Appetite Statement

The organization maintains a **conservative risk appetite** for AI systems, prioritizing:
1. **Safety First:** Zero tolerance for AI systems that could cause physical harm
2. **Rights Protection:** Low tolerance for fundamental rights violations
3. **Compliance Assurance:** Zero tolerance for prohibited practices (Article 5)
4. **Operational Excellence:** Moderate tolerance for operational risks with adequate controls

#### 3.3.2 Risk Appetite by Category

| Risk Category | Appetite Level | Tolerance Threshold | Rationale |
|---------------|---------------|---------------------|-----------|
| **Safety Risks** | Very Low | Residual risk ≤ 4 (Very Low) | Human safety is paramount |
| **Fundamental Rights** | Low | Residual risk ≤ 9 (Low) | Legal and ethical imperative |
| **Compliance** | Very Low | Residual risk ≤ 4 (Very Low) | Regulatory penalties severe |
| **Financial** | Moderate | Residual risk ≤ 14 (Medium) | Business judgment applies |
| **Operational** | Moderate | Residual risk ≤ 14 (Medium) | Standard business operations |
| **Reputational** | Low | Residual risk ≤ 9 (Low) | Brand protection important |

#### 3.3.3 Calibrating Thresholds to Organization Size

The impact thresholds in Section 4 (Step 2.2) should be calibrated based on organization size:

| Impact Score | Small Organization (<50 employees) | Medium Organization (50-500 employees) | Large Organization (>500 employees) |
|--------------|-----------------------------------|----------------------------------------|-------------------------------------|
| 5 (Catastrophic) | > €500K | > €5M | > €10M |
| 4 (Major) | €100K-€500K | €500K-€5M | €1M-€10M |
| 3 (Moderate) | €25K-€100K | €100K-€500K | €100K-€1M |
| 2 (Minor) | €5K-€25K | €25K-€100K | €10K-€100K |
| 1 (Negligible) | < €5K | < €25K | < €10K |

**Note:** Organizations should document their specific calibration in the Risk Management Framework document (approved by AI Governance Committee).

#### 3.3.4 Risk Tolerance Breach Protocol

When residual risk exceeds tolerance:

1. **Immediate escalation** to AI Risk Manager (within 4 hours)
2. **Deployment block** until risk is reduced to tolerance
3. **AI Governance Committee review** within 5 business days
4. **Documented exception** required if proceeding (signed by CRO)
5. **Enhanced monitoring** if exception granted

### 3.4 Vendor and Third-Party AI Risk Integration

When AI systems are developed, operated, or hosted by third parties, vendor risks must be integrated into the risk management framework.

#### 3.4.1 Vendor Risk Categories

| Risk Category | Description | Key Concerns |
|---------------|-------------|--------------|
| **Operational** | Vendor service continuity | Downtime, performance degradation, support responsiveness |
| **Security** | Data and system security | Data breaches, access controls, vulnerability management |
| **Compliance** | Regulatory compliance | EU AI Act compliance, GDPR, contractual obligations |
| **Concentration** | Over-reliance on vendor | Single point of failure, switching costs, lock-in |
| **Reputational** | Vendor reputation impact | Vendor incidents affecting your organization |
| **Financial** | Vendor viability | Business continuity, pricing stability, bankruptcy risk |

#### 3.4.2 Vendor Risk Assessment Requirements

For each AI vendor/third-party, assess:

1. **Pre-Engagement Assessment**
   - AI system risk classification (per PROC-AI-CLS-001)
   - Vendor EU AI Act compliance certification
   - Security certifications (ISO 27001, SOC 2)
   - Data processing agreement (GDPR Article 28)
   - Right to audit clause

2. **Ongoing Monitoring**
   - Annual vendor risk reassessment
   - Quarterly performance review
   - Incident notification tracking
   - Compliance certificate renewal verification

3. **Exit Planning**
   - Data portability provisions
   - Transition timeline requirements
   - Knowledge transfer provisions
   - Post-termination data handling

#### 3.4.3 Vendor Risk Scoring

| Criteria | Weight | Score Range |
|----------|--------|-------------|
| AI System Criticality | 30% | 1-5 (5=Mission critical) |
| Data Sensitivity | 25% | 1-5 (5=Special category data) |
| Vendor Replaceability | 20% | 1-5 (5=Irreplaceable) |
| Vendor Security Posture | 15% | 1-5 (5=Poor controls) |
| Regulatory Exposure | 10% | 1-5 (5=High regulatory scrutiny) |

**Vendor Risk Score** = Weighted sum of criteria scores

| Score Range | Vendor Risk Tier | Review Frequency | Controls Required |
|-------------|------------------|------------------|-------------------|
| 4.0-5.0 | Critical | Quarterly | Enhanced due diligence, on-site audits |
| 3.0-3.9 | High | Semi-annual | Annual audits, SLA monitoring |
| 2.0-2.9 | Medium | Annual | Standard contract terms, periodic review |
| 1.0-1.9 | Low | Biennial | Basic monitoring |

#### 3.4.4 Vendor Risk Integration with AI Risk Register

- Add vendor-related risks to AI System Risk Register with "VENDOR-" prefix
- Link vendor risks to specific AI systems they support
- Include vendor risks in AI Governance Committee reporting
- Cross-reference with PROC-AI-VENDOR-001 (Vendor Management Procedure)

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: RISK IDENTIFICATION

#### Step 1.1: Initiate Risk Assessment (Control RM-004)

**When:** At the start of AI system design phase

**Who:** AI Risk Manager + AI System Owner

**How:**

1. **Schedule Risk Identification Workshop**
   - Schedule 4-hour workshop with cross-functional team
   - Participants: AI System Owner, Data Scientists, Product Manager, Compliance, Security, Legal
   - Location: In-person or virtual meeting room
   - Timing: Within 2 weeks of AI system project initiation

2. **Prepare for Workshop**
   - Gather AI system requirements and design documents
   - Review similar AI systems for lessons learned
   - Prepare risk identification checklist (CHK-AI-RM-002)
   - Prepare risk identification template (FORM-AI-RM-001)

3. **Conduct Risk Identification Workshop**
   - Present AI system overview (15 minutes)
   - Review risk categories and examples (15 minutes)
   - Brainstorm risks by category (90 minutes):
     - Technical risks
     - Safety risks
     - Fundamental rights risks
     - Operational risks
     - Compliance risks
   - Consolidate and deduplicate risks (30 minutes)
   - Document all identified risks (30 minutes)

4. **Document Workshop Outcomes**
   - Complete Risk Identification Workshop Minutes (REC-AI-RM-005)
   - List all identified risks with brief description
   - Assign preliminary risk categories
   - Identify information gaps requiring further investigation

5. **Review and Validate**
   - AI Risk Manager reviews identified risks for completeness
   - Verify minimum 10 risks identified for high-risk systems
   - Escalate if fewer than 10 risks identified (may indicate incomplete assessment)
   - Obtain AI System Owner sign-off on identified risks

**Evidence Required:**
- Risk Identification Workshop Minutes (REC-AI-RM-005)
- Risk Identification Checklist (CHK-AI-RM-002) - completed
- Risk Identification Report (RPT-AI-RM-002)
- AI System Owner approval

**Timing:** 2-3 weeks from project initiation

---

#### Step 1.2: Conduct Comprehensive Risk Identification (Control RM-004)

**When:** Immediately after initial workshop

**Who:** AI Risk Manager + Subject Matter Experts

**How:**

1. **Assess Technical Risks**
   - Bias and discrimination in AI outputs
   - Inaccurate predictions or decisions
   - Lack of robustness to adversarial attacks
   - Security vulnerabilities
   - Data quality issues
   - Model drift and performance degradation
   
   **Questions to Ask:**
   - What could cause the model to produce biased outputs?
   - What adversarial attacks could fool the model?
   - What data quality issues could degrade performance?
   - How might the model drift over time?

2. **Assess Safety Risks**
   - Physical harm to persons
   - Damage to property
   - Environmental harm
   - Critical infrastructure disruption
   
   **Questions to Ask:**
   - Could AI decisions cause physical harm?
   - Could failures affect critical infrastructure?
   - What are the worst-case scenarios?

3. **Assess Fundamental Rights Risks**
   - Privacy violations (GDPR)
   - Discrimination (protected characteristics)
   - Freedom of expression
   - Right to explanation
   - Right to human review
   - Due process violations
   
   **Questions to Ask:**
   - Could the system violate privacy rights?
   - Could the system discriminate against protected groups?
   - Can users understand how decisions are made?
   - Can users challenge decisions?

4. **Assess Operational Risks**
   - System failures and downtime
   - Integration issues with existing systems
   - Scalability limitations
   - Resource constraints
   
   **Questions to Ask:**
   - What could cause system failures?
   - How would the system integrate with existing systems?
   - Can the system scale to expected volumes?

5. **Assess Compliance Risks**
   - EU AI Act non-compliance
   - GDPR violations
   - Sector-specific regulatory violations
   - Contractual breaches
   
   **Questions to Ask:**
   - Does the system comply with EU AI Act requirements?
   - Are there GDPR compliance issues?
   - Are there sector-specific regulatory requirements?

6. **Review Historical Incidents**
   - Research similar AI systems in industry
   - Review internal incident history
   - Identify near-misses and lessons learned
   - Document relevant incidents

7. **Consult Subject Matter Experts**
   - Security expert: review security risks
   - Data expert: review data quality and bias risks
   - Domain expert: review operational and safety risks
   - Legal expert: review compliance and rights risks
   - Document expert consultations (REC-AI-RM-006)

8. **Consolidate Identified Risks**
   - Compile all risks from workshop and expert consultations
   - Remove duplicates
   - Standardize risk descriptions
   - Assign unique risk IDs (RM-AI-XXXX format)
   - Document in Risk Identification Report (RPT-AI-RM-002)

**Evidence Required:**
- Risk Identification Report (RPT-AI-RM-002)
- Subject Matter Expert Consultation Records (REC-AI-RM-006)
- Historical incident research summary
- Consolidated risk list with descriptions

**Timing:** 1-2 weeks

**Quality Check:**
- Minimum 10 risks identified per high-risk AI system
- All 5 risk categories represented
- Risks are specific and measurable
- Risks are documented with clear descriptions

---

#### Step 1.3: Assess Reasonably Foreseeable Misuse (Control RM-004, Article 9(2)(b))

**When:** As part of risk identification process

**Who:** AI Risk Manager + AI System Owner + Security Expert

**Regulatory Basis:** Article 9(2)(b) requires identification of risks arising from "reasonably foreseeable misuse."

**How:**

1. **Define Intended Use Boundaries**
   - Document primary intended use case(s)
   - Document intended user population
   - Document intended operating environment
   - Document explicitly excluded use cases

2. **Identify Potential Misuse Scenarios**

   | Misuse Category | Description | Example Questions |
   |-----------------|-------------|-------------------|
   | **Off-Label Use** | Using system outside intended purpose | Could the system be used for decisions it wasn't designed for? |
   | **Vulnerable Population Exposure** | Use on/by populations not intended | Could children, elderly, or disabled persons interact with this system? |
   | **Adversarial Manipulation** | Deliberate gaming of inputs | How could bad actors manipulate inputs to achieve desired outputs? |
   | **Data Poisoning** | Tampering with training/inference data | What if training data were deliberately corrupted? |
   | **Automation Bias** | Over-reliance on AI recommendations | Will users blindly trust AI outputs without verification? |
   | **Function Creep** | Gradual expansion beyond original scope | Could the system be repurposed without proper reassessment? |
   | **Dual-Use** | Military/civilian dual applications | Could this technology enable harmful applications? |

3. **Apply Misuse Likelihood Assessment**

   For each identified misuse scenario, assess:
   - **Accessibility:** How easy is it to misuse? (1=Difficult, 5=Trivial)
   - **Detectability:** How likely is misuse to be detected? (1=Certain detection, 5=Undetectable)
   - **Motivation:** How motivated are actors to misuse? (1=No motivation, 5=High motivation)

   **Misuse Risk Score** = (Accessibility + Detectability + Motivation) / 3

   | Score | Misuse Likelihood | Action |
   |-------|------------------|--------|
   | 4-5 | High | Implement preventive controls before deployment |
   | 3-4 | Medium | Implement detective controls; monitor closely |
   | 2-3 | Low | Document and monitor |
   | 1-2 | Very Low | Accept with documentation |

4. **Document Misuse Analysis**
   - Complete Misuse Risk Assessment Form (FORM-AI-RM-003)
   - For each misuse scenario, document:
     - Misuse description
     - Affected stakeholders
     - Potential harm (type and severity)
     - Likelihood assessment
     - Existing safeguards
     - Additional controls needed

5. **Design Misuse Prevention Controls**

   | Control Type | Examples |
   |--------------|----------|
   | **Technical** | Input validation, rate limiting, anomaly detection, access controls |
   | **Procedural** | User training, usage guidelines, audit trails |
   | **Contractual** | Terms of service, acceptable use policies, user agreements |
   | **Physical** | Deployment environment restrictions, hardware controls |

6. **Add to Risk Register**
   - Add all significant misuse risks to Risk Register
   - Link to specific controls in Controls Register
   - Set review frequency (more frequent for high misuse risk)

**Evidence Required:**
- Misuse Risk Assessment Form (FORM-AI-RM-003)
- Intended Use Documentation
- Misuse Prevention Control Plan
- Updated Risk Register

**Timing:** 1-2 weeks

**Quality Check:**
- Minimum 5 misuse scenarios analyzed per high-risk system
- All misuse categories considered
- Misuse prevention controls documented
- Residual misuse risk is acceptable

---

### PHASE 2: RISK ASSESSMENT AND ANALYSIS

#### Step 2.1: Assess Risk Likelihood (Control RM-005)

**When:** After risk identification is complete

**Who:** AI Risk Manager + AI System Owner + Subject Matter Experts

**How:**

1. **Prepare Assessment Team**
   - Gather team members with knowledge of AI system and risks
   - Distribute risk assessment worksheets (REC-AI-RM-007)
   - Explain likelihood assessment scale and definitions

2. **Apply Likelihood Assessment Scale**

| Score | Likelihood | Description | Frequency |
|-------|-----------|-------------|-----------|
| 5 | Almost Certain | Expected to occur | > 90% probability or > 1/year |
| 4 | Likely | Will probably occur | 60-90% probability or 1/2 years |
| 3 | Possible | Might occur | 30-60% probability or 1/5 years |
| 2 | Unlikely | Not expected but possible | 10-30% probability or 1/10 years |
| 1 | Rare | May occur in exceptional circumstances | < 10% probability or < 1/10 years |

3. **Assess Each Risk**
   - For each identified risk, assess the likelihood of occurrence
   - Consider historical data and expert judgment
   - Document rationale for likelihood assessment
   - Examples:
     - "Bias in model outputs - Likely (4): Training data known to have demographic imbalances"
     - "Adversarial attack - Possible (3): No known attacks on similar systems, but theoretically feasible"
     - "Privacy breach - Unlikely (2): Strong security controls in place, but data exposure possible"

4. **Document Likelihood Assessments**
   - Complete Risk Assessment Worksheets (REC-AI-RM-007)
   - Record likelihood score for each risk
   - Document assessment rationale
   - Obtain subject matter expert sign-off

**Evidence Required:**
- Risk Assessment Worksheets (REC-AI-RM-007) - likelihood section completed
- Assessment rationale documentation
- Subject matter expert sign-off

**Timing:** 1 week

---

#### Step 2.2: Assess Risk Impact (Control RM-005)

**When:** After likelihood assessment

**Who:** AI Risk Manager + AI System Owner + Subject Matter Experts

**How:**

1. **Prepare Impact Assessment**
   - Explain impact assessment scale and dimensions
   - Distribute impact assessment guidance

2. **Apply Impact Assessment Scale**

| Score | Impact | Health/Safety | Fundamental Rights | Financial | Reputational |
|-------|--------|---------------|-------------------|-----------|--------------|
| 5 | Catastrophic | Death or permanent disability | Widespread severe violations | > €10M | International crisis |
| 4 | Major | Serious injury | Significant violations | €1M-€10M | National crisis |
| 3 | Moderate | Minor injury | Moderate violations | €100K-€1M | Regional impact |
| 2 | Minor | First aid required | Minor violations | €10K-€100K | Local impact |
| 1 | Negligible | No injury | No violations | < €10K | Minimal impact |

3. **Assess Each Risk**
   - For each identified risk, assess the potential impact
   - Consider multiple impact dimensions (health/safety, rights, financial, reputational)
   - Use the highest score across dimensions
   - Document impact rationale
   - Examples:
     - "Bias in hiring decisions - Major (4): Significant discrimination violations; major reputational impact"
     - "Model inaccuracy - Moderate (3): Minor financial impact; potential customer dissatisfaction"
     - "Data breach - Catastrophic (5): Privacy violations; major financial and reputational impact"

4. **Document Impact Assessments**
   - Complete Risk Assessment Worksheets (REC-AI-RM-007)
   - Record impact score for each risk
   - Document assessment rationale
   - Obtain subject matter expert sign-off

**Evidence Required:**
- Risk Assessment Worksheets (REC-AI-RM-007) - impact section completed
- Assessment rationale documentation
- Subject matter expert sign-off

**Timing:** 1 week

---

#### Step 2.3: Calculate Risk Scores and Classify Risk Levels (Control RM-005)

**When:** After likelihood and impact assessment

**Who:** AI Risk Manager

**How:**

1. **Calculate Inherent Risk Scores**
   - Formula: Inherent Risk Score = Likelihood × Impact
   - Calculate for each identified risk
   - Range: 1-25

   **Example Calculations:**
   - Bias in outputs: Likelihood 4 × Impact 4 = Score 16 (High)
   - Model inaccuracy: Likelihood 3 × Impact 3 = Score 9 (Low)
   - Data breach: Likelihood 2 × Impact 5 = Score 10 (Medium)

2. **Classify Risk Levels**

| Risk Score | Risk Level | Color | Action Required |
|------------|-----------|-------|-----------------|
| 20-25 | Critical | 🔴 Red | Immediate action; escalate to AI Governance Committee |
| 15-19 | High | 🟠 Orange | Senior management attention; mitigation plan within 30 days |
| 10-14 | Medium | 🟡 Yellow | Management attention; mitigation plan within 60 days |
| 5-9 | Low | 🟢 Green | Monitor; mitigation plan within 90 days |
| 1-4 | Very Low | ⚪ White | Accept or monitor |

3. **Create Risk Prioritization Matrix**
   - Plot risks on likelihood vs. impact matrix
   - Visualize risk landscape
   - Identify high-priority risks requiring immediate attention
   - Document in Risk Prioritization Matrix (REC-AI-RM-008)

4. **Escalate High and Critical Risks**
   - Identify all Critical (20-25) and High (15-19) risks
   - Prepare escalation report for AI Governance Committee
   - Schedule escalation meeting if critical risks identified
   - Document escalation (REC-AI-RM-009)

**Evidence Required:**
- Risk Assessment Worksheets (REC-AI-RM-007) - with calculated scores
- Risk Prioritization Matrix (REC-AI-RM-008)
- Risk Assessment Report (RPT-AI-RM-003)
- Escalation records (if applicable)

**Timing:** 3-5 days

---

#### Step 2.4: Conduct Bias and Discrimination Risk Assessment (Control RM-006)

**When:** After general risk assessment; before risk treatment planning

**Who:** AI Risk Manager + Data Scientist + Compliance Officer

**How:**

1. **Assess Training Data Bias**
   - Analyze training dataset for demographic representation
   - Check for historical bias in data
   - Identify underrepresented minority groups
   - Calculate demographic statistics by protected characteristic
   
   **Protected Characteristics to Assess:**
   - Race or ethnic origin
   - Gender and gender identity
   - Age
   - Disability status
   - Religion or philosophical beliefs
   - Sexual orientation
   - Genetic data
   - Biometric data
   - Health data

2. **Calculate Fairness Metrics**
   - Demographic Parity: Equal positive prediction rate across groups
   - Equal Opportunity: Equal true positive rate across groups
   - Equalized Odds: Equal TPR and FPR across groups
   - Predictive Parity: Equal precision across groups
   - Calibration: Equal calibration across groups
   
   **Target Thresholds:**
   - Ratio between groups: 0.8 - 1.2 (acceptable)
   - Calibration difference: < 5% (acceptable)

3. **Test for Disparate Impact**
   - Analyze model outputs by protected group
   - Identify systematic errors for specific groups
   - Calculate disparate impact ratios
   - Document findings in Disparate Impact Analysis Report (RPT-AI-RM-005)

4. **Document Bias Assessment**
   - Complete Bias Risk Assessment Report (RPT-AI-RM-004)
   - Document all identified bias risks
   - Record fairness metrics and test results
   - Identify bias mitigation opportunities

5. **Create Bias Mitigation Plan**
   - For each identified bias risk, plan mitigation approach
   - Options: data rebalancing, fairness constraints, post-processing, monitoring
   - Assign mitigation owner and target date
   - Document in Bias Mitigation Plan

**Evidence Required:**
- Training Data Bias Analysis Report (RPT-AI-DATA-001)
- Fairness Metrics Test Results (TEST-AI-RM-001)
- Disparate Impact Analysis Report (RPT-AI-RM-005)
- Bias Risk Assessment Report (RPT-AI-RM-004)
- Bias Mitigation Plan

**Timing:** 2-3 weeks (depends on data analysis complexity)

---

### PHASE 3: RISK REGISTER MAINTENANCE

#### Step 3.1: Create and Populate Risk Register (Control RM-003)

**When:** After risk identification and assessment complete

**Who:** AI Risk Manager

**How:**

1. **Create Risk Register Template**
   - Use Risk Register Template (REC-AI-RM-003)
   - Set up spreadsheet or database with all mandatory fields
   - Configure for monthly updates and quarterly reviews

2. **Populate Risk Register**
   - For each identified risk, create risk register entry
   - Complete all mandatory fields:
     - Risk_ID (RM-AI-XXXX format)
     - AI_System_ID
     - Risk_Category
     - Risk_Description
     - Risk_Source
     - Likelihood (1-5)
     - Impact (1-5)
     - Inherent_Risk_Score
     - Risk_Level
     - Risk_Controls (to be filled during risk treatment)
     - Residual_Risk_Score (to be filled after control implementation)
     - Risk_Owner
     - Risk_Status (initially "Open")
     - Target_Date
     - Review_Date
     - Next_Review_Date

3. **Example Risk Register Entry:**

| Field | Value |
|-------|-------|
| Risk_ID | RM-AI-0001 |
| AI_System_ID | AI-SYS-0042 |
| Risk_Category | Technical |
| Risk_Description | Model produces biased hiring recommendations for female candidates |
| Risk_Source | Training data contains historical hiring bias |
| Likelihood | 4 (Likely) |
| Impact | 4 (Major) |
| Inherent_Risk_Score | 16 |
| Risk_Level | High |
| Risk_Controls | (To be filled) |
| Residual_Risk_Score | (To be filled) |
| Risk_Owner | John Smith, Data Science Lead |
| Risk_Status | Open |
| Target_Date | 2025-03-31 |
| Review_Date | 2025-01-15 |
| Next_Review_Date | 2025-02-15 |

4. **Obtain Approvals**
   - AI System Owner reviews and approves risk register
   - AI Risk Manager signs off on completeness
   - Document approval (REC-AI-RM-010)

**Evidence Required:**
- Risk Register (REC-AI-RM-003) - populated with all identified risks
- Risk Register Update Log (REC-AI-RM-004)
- Approval records

**Timing:** 1 week

---

#### Step 3.2: Maintain and Update Risk Register (Control RM-003)

**When:** Monthly updates; quarterly reviews

**Who:** AI Risk Manager

**How:**

1. **Monthly Updates**
   - Review risk register for accuracy
   - Update risk status based on mitigation progress
   - Update review dates
   - Add new risks as identified
   - Close risks that have been fully mitigated
   - Document all changes in Risk Register Update Log (REC-AI-RM-004)

2. **Quarterly Reviews**
   - Conduct comprehensive risk register review with AI Governance Committee
   - Present quarterly Risk Register Review Report (RPT-AI-RM-001)
   - Discuss high and critical risks
   - Review mitigation progress
   - Identify emerging risks
   - Approve risk acceptance decisions
   - Document review meeting minutes

3. **Annual Archive**
   - Archive closed risks at year-end
   - Retain archived risks for 10 years (per EU AI Act)
   - Maintain audit trail of all changes
   - Update risk register version number

**Evidence Required:**
- Updated Risk Register (REC-AI-RM-003)
- Risk Register Update Log (REC-AI-RM-004)
- Quarterly Risk Register Review Report (RPT-AI-RM-001)
- Quarterly review meeting minutes

**Timing:** Ongoing (monthly updates, quarterly reviews)

---

### PHASE 4: RISK TREATMENT PLANNING

#### Step 4.1: Select Risk Treatment Strategy (Control RM-007)

**When:** After risk assessment and classification

**Who:** AI Risk Manager + AI System Owner + CRO (for high/critical risks)

**How:**

1. **Review Risk Treatment Options**

| Strategy | Description | When to Use | Example |
|----------|-------------|-------------|---------|
| **Avoid** | Eliminate the risk by not proceeding | Risk too high; no effective controls | Cancel high-risk AI project |
| **Mitigate** | Reduce likelihood or impact | Risk can be controlled | Implement bias mitigation techniques |
| **Transfer** | Share risk with third party | Risk can be insured or outsourced | Purchase AI liability insurance |
| **Accept** | Acknowledge risk without action | Risk below tolerance; cost of mitigation exceeds benefit | Accept low-probability, low-impact risks |

2. **Apply Risk Treatment Decision Matrix**

| Risk Level | Recommended Strategy | Approval Required |
|------------|---------------------|-------------------|
| Critical (20-25) | Avoid or Mitigate (must reduce to Medium or below) | AI Governance Committee |
| High (15-19) | Mitigate (must reduce to Low or below) | Product Director + AI Risk Manager |
| Medium (10-14) | Mitigate or Accept with justification | AI Risk Manager |
| Low (5-9) | Accept or Mitigate | AI System Owner |
| Very Low (1-4) | Accept | AI System Owner |

3. **Document Treatment Decision**
   - For each risk, document selected treatment strategy
   - Document rationale for selection
   - Identify treatment owner and target date
   - Record in Risk Treatment Decision Records (REC-AI-RM-009)

4. **Example Treatment Decisions:**

| Risk | Risk Level | Treatment Strategy | Rationale | Owner | Target Date |
|-----|-----------|-------------------|-----------|-------|-------------|
| Bias in hiring | High (16) | Mitigate | Implement fairness constraints and monitoring | Data Science Lead | 2025-03-31 |
| Model inaccuracy | Low (9) | Accept | Low impact; acceptable for use case | Product Manager | N/A |
| Data breach | Medium (10) | Mitigate | Implement encryption and access controls | IT Security | 2025-02-28 |

5. **Obtain Required Approvals**
   - Critical/High risks: Escalate to AI Governance Committee
   - Medium risks: AI Risk Manager approval
   - Low/Very Low risks: AI System Owner approval
   - Document approvals (REC-AI-RM-010)

**Evidence Required:**
- Risk Treatment Decision Records (REC-AI-RM-009)
- Risk Treatment Plan (RPT-AI-RM-006)
- Approval records (REC-AI-RM-010)

**Timing:** 1-2 weeks

---

#### Step 4.2: Design and Implement Risk Controls (Control RM-008)

**When:** After treatment strategy selected (for mitigated risks)

**Who:** Data Scientists, Engineers, Compliance Officer

**How:**

1. **Design Controls**
   - For each mitigated risk, design appropriate control(s)
   - Specify control objective
   - Define control activities
   - Assign control owner
   - Define control frequency and testing approach

2. **Control Types**

**Preventive Controls** (prevent risk from occurring):
- Bias mitigation techniques in model training
- Input validation and sanitization
- Access controls and authentication
- Secure development practices
- Data quality checks

**Detective Controls** (detect when risk occurs):
- Monitoring and alerting
- Anomaly detection
- Audit logging
- Performance metrics
- Bias detection in production

**Corrective Controls** (correct after risk occurs):
- Incident response procedures
- Model retraining
- Human review and override
- Rollback procedures
- Corrective action plans

3. **Example Control Design:**

| Risk | Risk Level | Control Type | Control Activity | Control Owner | Frequency |
|-----|-----------|---|---|---|---|
| Bias in hiring | High | Preventive | Rebalance training data; implement fairness constraints | Data Science Lead | Before training |
| Bias in hiring | High | Detective | Monitor fairness metrics in production; alert if ratio < 0.8 | ML Ops | Weekly |
| Bias in hiring | High | Corrective | Review flagged decisions; retrain model if bias detected | Product Manager | Per incident |

4. **Implement Controls**
   - Develop control procedures (PROC-AI-CTRL-XXX)
   - Configure technical controls
   - Train control operators
   - Test control effectiveness
   - Document in Controls Register (REC-AI-CTRL-001)

5. **Test Control Effectiveness**
   - Execute control testing plan
   - Verify controls operate as designed
   - Document test results (TEST-AI-CTRL-XXX)
   - Obtain sign-off from control owner

**Evidence Required:**
- Controls Register (REC-AI-CTRL-001)
- Control Procedures (PROC-AI-CTRL-XXX)
- Control Testing Results (TEST-AI-CTRL-XXX)
- Control Effectiveness Report (quarterly) (RPT-AI-CTRL-001)

**Timing:** 4-8 weeks (depends on control complexity)

---

### PHASE 5: RESIDUAL RISK ASSESSMENT AND ACCEPTANCE

#### Step 5.1: Calculate Residual Risk (Control RM-009)

**When:** After controls implemented and tested

**Who:** AI Risk Manager + Control Owner

**How:**

1. **Assess Control Effectiveness**
   - For each implemented control, determine effectiveness
   - Effectiveness = reduction in likelihood or impact
   - Scale: 0-100% (0% = no effect; 100% = complete elimination)
   
   **Examples:**
   - Bias mitigation (fairness constraints): 60% reduction in likelihood
   - Monitoring and alerting: 40% reduction in impact (early detection)
   - Human review and override: 80% reduction in impact (can prevent harm)

2. **Calculate Residual Risk Score**
   - Formula: Residual Risk Score = Inherent Risk Score - (Inherent Risk Score × Control Effectiveness)
   - Example: Inherent Risk 16 - (16 × 0.60) = 16 - 9.6 = 6.4 ≈ 6 (Low)

3. **Classify Residual Risk Level**

| Residual Risk Level | Acceptable? | Action Required |
|-----|---|---|
| Critical (20-25) | ❌ No | Additional controls required; cannot deploy |
| High (15-19) | ❌ No | Additional controls required |
| Medium (10-14) | ✅ Yes (with approval) | AI Risk Manager approval required |
| Low (5-9) | ✅ Yes | AI System Owner acceptance |
| Very Low (1-4) | ✅ Yes | Automatic acceptance |

4. **Document Residual Risk Assessment**
   - Complete Residual Risk Assessment Records (REC-AI-RM-011)
   - Document control effectiveness assessment
   - Calculate residual risk scores
   - Classify residual risk levels
   - Update risk register with residual risk scores

**Evidence Required:**
- Residual Risk Assessment Records (REC-AI-RM-011)
- Control Effectiveness Documentation
- Updated Risk Register (REC-AI-RM-003)

**Timing:** 1 week

---

#### Step 5.2: Obtain Risk Acceptance Approval (Control RM-009)

**When:** After residual risk calculated

**Who:** AI Risk Manager, AI System Owner, CRO, AI Governance Committee

**How:**

1. **Determine Approval Authority**

| Residual Risk Level | Approval Authority |
|-----|---|
| Critical/High | AI Governance Committee |
| Medium | AI Risk Manager |
| Low | AI System Owner |
| Very Low | Automatic (no approval needed) |

2. **Prepare Risk Acceptance Documentation**
   - Prepare Residual Risk Acceptance Records (REC-AI-RM-012)
   - Document residual risk level
   - Explain why residual risk is acceptable
   - Identify any residual risk monitoring requirements
   - Specify conditions of acceptance (if any)

3. **Obtain Approvals**
   - Submit to appropriate approval authority
   - Schedule approval meeting if needed
   - Obtain written approval (email or signed form)
   - Document approval date and approver

4. **Block Deployment if Unacceptable**
   - If residual risk is unacceptable (Critical/High):
     - Block deployment
     - Require additional controls
     - Escalate to AI Governance Committee
     - Document escalation

5. **Update Risk Register**
   - Record risk acceptance approval
   - Update risk status to "Accepted" or "Mitigated"
   - Document approval date and approver
   - Set next review date

**Evidence Required:**
- Residual Risk Acceptance Records (REC-AI-RM-012)
- Risk Acceptance Approval (email or signed form)
- Updated Risk Register (REC-AI-RM-003)

**Timing:** 1-2 weeks

---

### PHASE 6: CONTINUOUS RISK MONITORING

#### Step 6.1: Implement Risk Monitoring (Control RM-010)

**When:** After deployment; throughout operational lifecycle

**Who:** ML Ops, AI System Owner, AI Risk Manager

**How:**

1. **Define Risk Indicators (KRIs)**
   - For each significant risk, define Key Risk Indicators
   - KRI = metric that indicates risk level or control effectiveness
   - Examples:
     - Bias risk: Fairness ratio (0.8-1.2 acceptable)
     - Accuracy risk: Model accuracy (< 5% degradation acceptable)
     - Drift risk: Feature drift score (< 0.3 acceptable)

2. **Set Monitoring Thresholds**
   - Green (Good): Risk under control
   - Yellow (Warning): Risk approaching threshold
   - Red (Critical): Risk threshold exceeded

   **Example Thresholds:**
   - Fairness ratio: Green > 0.85, Yellow 0.75-0.85, Red < 0.75
   - Accuracy: Green > 95%, Yellow 90-95%, Red < 90%
   - Drift: Green < 0.2, Yellow 0.2-0.3, Red > 0.3

3. **Implement Monitoring Systems**
   - Configure automated monitoring dashboards
   - Set up alerting for threshold breaches
   - Define escalation procedures
   - Train monitoring personnel

4. **Establish Monitoring Frequency**
   - Critical/High risks: Daily or continuous monitoring
   - Medium risks: Weekly monitoring
   - Low risks: Monthly monitoring
   - Very Low risks: Quarterly monitoring

5. **Document Monitoring Setup**
   - Create Risk Monitoring Plan (per AI system)
   - Document KRIs, thresholds, frequency
   - Assign monitoring responsibility
   - Define escalation procedures

**Evidence Required:**
- Risk Monitoring Plan (per AI system)
- Monitoring Dashboard Configuration
- KRI Definitions and Thresholds
- Monitoring Procedure Documentation

**Timing:** 2-4 weeks (before deployment)

---

#### Step 6.2: Conduct Periodic Risk Reviews (Control RM-011)

**When:** Monthly, quarterly, and annually

**Who:** AI Risk Manager, AI System Owner, AI Governance Committee

**How:**

1. **Monthly Risk Review**
   - Review risk register for updates
   - Check monitoring dashboard for threshold breaches
   - Update risk status based on mitigation progress
   - Identify emerging risks
   - Document in Monthly Risk Review Report

2. **Quarterly Risk Review**
   - Comprehensive review with AI Governance Committee
   - Present quarterly Risk Register Review Report (RPT-AI-RM-001)
   - Discuss high and critical risks
   - Review control effectiveness
   - Approve risk acceptance decisions
   - Identify emerging risks
   - Document review meeting minutes

3. **Annual Risk Review**
   - Comprehensive assessment of risk management effectiveness
   - Review all risks and controls
   - Assess need for framework updates
   - Identify lessons learned
   - Plan improvements
   - Document in Annual Risk Management Review Report

**Evidence Required:**
- Monthly Risk Review Reports
- Quarterly Risk Register Review Report (RPT-AI-RM-001)
- Annual Risk Management Review Report
- Meeting minutes and approvals

**Timing:** Ongoing (monthly, quarterly, annual)

---

#### Step 6.3: Assess and Report Incidents (Control RM-012, RM-013)

**When:** When incident occurs

**Who:** AI System Owner, AI Risk Manager, CRO

**How:**

1. **Detect Incident**
   - Monitoring system alerts to threshold breach
   - User reports issue
   - Internal audit identifies problem
   - Incident is escalated per PROC-AI-INC-001

2. **Assess Incident Risk Impact**
   - Determine which risks materialized
   - Assess actual impact vs. predicted impact
   - Determine if residual risk assessment was accurate
   - Identify control failures

3. **Document Incident Risk Assessment**
   - Complete Incident Risk Assessment (part of incident report)
   - Document which risks materialized
   - Document actual impact
   - Identify root cause
   - Recommend corrective actions

4. **Update Risk Register**
   - If incident reveals new risks: Add to risk register
   - If incident reveals control ineffectiveness: Reassess residual risk
   - If incident reveals risk assessment was inaccurate: Update assessment
   - Document incident in risk register

5. **Report to Authorities (if required)**
   - Per PROC-AI-INC-001, report serious incidents to authorities
   - Include risk assessment in incident report
   - Document authority notification

**Evidence Required:**
- Incident Report (per PROC-AI-INC-001)
- Incident Risk Assessment
- Updated Risk Register
- Authority Notification (if applicable)

**Timing:** Per incident (escalation procedures define timing)

---

### PHASE 7: CONTINUOUS IMPROVEMENT

#### Step 7.1: Conduct Lessons Learned Review (Control RM-014)

**When:** After significant incidents or annually

**Who:** AI Risk Manager, AI System Owner, Cross-functional team

**How:**

1. **Identify Lessons Learned**
   - What risks materialized that weren't predicted?
   - What controls were ineffective?
   - What risks were over-estimated?
   - What processes need improvement?

2. **Conduct Lessons Learned Workshop**
   - Schedule 2-hour workshop
   - Participants: AI System Owner, Data Scientists, Compliance, Risk Manager
   - Review incidents and near-misses
   - Discuss root causes
   - Identify improvements
   - Document in Lessons Learned Report

3. **Update Risk Register**
   - Add new risks identified
   - Adjust risk assessments based on experience
   - Update control effectiveness assessments
   - Document lessons learned

4. **Improve Risk Management Process**
   - Update risk identification checklist
   - Improve risk assessment methodology
   - Enhance control design
   - Update monitoring approach

**Evidence Required:**
- Lessons Learned Report
- Updated Risk Register
- Process Improvement Documentation

**Timing:** Annually or after significant incidents

---

#### Step 7.2: Review and Update Risk Management Framework (Control RM-001)

**When:** Annually or when regulatory changes occur

**Who:** AI Risk Manager, CRO, AI Governance Committee

**How:**

1. **Assess Framework Effectiveness**
   - Review risk management process execution
   - Evaluate quality of risk assessments
   - Assess control effectiveness
   - Review compliance with procedure
   - Gather feedback from stakeholders

2. **Identify Improvement Opportunities**
   - What aspects of the process work well?
   - What aspects need improvement?
   - Are there gaps in coverage?
   - Are there unnecessary steps?

3. **Update Framework**
   - Revise risk management procedures
   - Update templates and forms
   - Enhance guidance and examples
   - Improve tools and systems

4. **Obtain Approval**
   - Present updates to AI Governance Committee
   - Obtain approval for changes
   - Communicate updates to organization
   - Provide training on changes

5. **Document Updates**
   - Update procedure version number
   - Document changes in change log
   - Maintain version history
   - Archive previous versions

**Evidence Required:**
- Framework Effectiveness Assessment Report
- Updated Procedures and Templates
- AI Governance Committee Approval
- Change Log and Version History

**Timing:** Annually (or more frequently if needed)

---

## 5. DECISION SUPPORT

### 5.1 Risk Classification Decision Tree

```
START: Identified Risk
│
├─ Is this a prohibited practice (Article 5)?
│  ├─ YES → RISK LEVEL: CRITICAL (25)
│  │        ACTION: Escalate immediately to AI Governance Committee
│  │        TREATMENT: AVOID (do not proceed)
│  │
│  └─ NO → Continue to next question
│
├─ Does this risk affect health, safety, or fundamental rights?
│  ├─ YES → Continue to likelihood/impact assessment
│  │
│  └─ NO → Likely Low/Very Low risk; assess likelihood/impact
│
├─ Assess Likelihood (1-5 scale)
│  ├─ Almost Certain (5) → Continue
│  ├─ Likely (4) → Continue
│  ├─ Possible (3) → Continue
│  ├─ Unlikely (2) → Continue
│  └─ Rare (1) → Continue
│
├─ Assess Impact (1-5 scale)
│  ├─ Catastrophic (5) → Continue
│  ├─ Major (4) → Continue
│  ├─ Moderate (3) → Continue
│  ├─ Minor (2) → Continue
│  └─ Negligible (1) → Continue
│
├─ Calculate Risk Score (Likelihood × Impact)
│  ├─ Score 20-25 → CRITICAL (Red)
│  ├─ Score 15-19 → HIGH (Orange)
│  ├─ Score 10-14 → MEDIUM (Yellow)
│  ├─ Score 5-9 → LOW (Green)
│  └─ Score 1-4 → VERY LOW (White)
│
└─ END: Risk Level Determined
   ACTION: Proceed to risk treatment
```

### 5.2 Risk Treatment Decision Tree

```
START: Risk with Assessed Level
│
├─ Is risk CRITICAL (20-25)?
│  ├─ YES → TREATMENT OPTIONS: Avoid or Mitigate to Medium or below
│  │        APPROVAL: AI Governance Committee
│  │        TIMELINE: Immediate action
│  │
│  └─ NO → Continue
│
├─ Is risk HIGH (15-19)?
│  ├─ YES → TREATMENT OPTIONS: Mitigate to Low or below
│  │        APPROVAL: Product Director + AI Risk Manager
│  │        TIMELINE: Within 30 days
│  │
│  └─ NO → Continue
│
├─ Is risk MEDIUM (10-14)?
│  ├─ YES → TREATMENT OPTIONS: Mitigate or Accept with justification
│  │        APPROVAL: AI Risk Manager
│  │        TIMELINE: Within 60 days
│  │
│  └─ NO → Continue
│
├─ Is risk LOW (5-9)?
│  ├─ YES → TREATMENT OPTIONS: Accept or Mitigate
│  │        APPROVAL: AI System Owner
│  │        TIMELINE: Within 90 days
│  │
│  └─ NO → Continue (Very Low risk)
│
├─ Is risk VERY LOW (1-4)?
│  └─ YES → TREATMENT: Accept
│         APPROVAL: Automatic
│         TIMELINE: No action required
│
└─ END: Treatment Strategy Selected
   ACTION: Proceed to control design and implementation
```

---

## 6. TEMPLATES AND FORMS

This procedure uses a consolidated set of 8 core templates that cover all risk management activities. Each template is designed to be reusable across multiple AI systems and lifecycle phases.

### 6.1 Core Templates (Consolidated)

| Template ID | Template Name | Purpose | Contains |
|---|---|---|---|
| **TMP-AI-RM-001** | **Risk Identification & Assessment Workbook** | Comprehensive risk assessment documentation | Risk identification checklist; Risk assessment worksheets; Risk prioritization matrix; Bias assessment; Disparate impact analysis |
| **TMP-AI-RM-002** | **Risk Register & Tracking Database** | Centralized risk database with full lifecycle tracking | Risk register (all mandatory fields); Risk register update log; Phase gate risk review records; Escalation log |
| **TMP-AI-RM-003** | **Risk Treatment & Control Planning** | Document risk treatment decisions and control design | Risk treatment decision records; Risk treatment approval records; Control design specifications; Control procedures |
| **TMP-AI-RM-004** | **Residual Risk Assessment & Acceptance** | Calculate and approve residual risks | Residual risk assessment worksheets; Residual risk acceptance records; Risk acceptance approvals |
| **TMP-AI-RM-005** | **Risk Monitoring & KRI Dashboard** | Monitor risks during operation | KRI definitions and thresholds; Monitoring dashboard configuration; Threshold breach alerts; Monthly/quarterly monitoring reports |
| **TMP-AI-RM-006** | **Risk Governance & Reporting** | Governance and stakeholder reporting | Risk identification workshop minutes; Expert consultation records; Quarterly risk register review report; Annual risk management review report |
| **TMP-AI-RM-007** | **Control Testing & Effectiveness** | Verify and monitor control effectiveness | Control testing plans; Control testing results; Control effectiveness assessments; Control failure logs |
| **TMP-AI-RM-008** | **Incident Risk Assessment & Lessons Learned** | Assess incident risks and capture improvements | Incident risk assessment forms; Incident impact analysis; Lessons learned documentation; Framework improvement recommendations |

### 6.2 Template Usage by Procedure Step

| Procedure Step | Primary Template | Supporting Templates |
|---|---|---|
| 1.1 Initiate Risk Assessment | TMP-AI-RM-001 | TMP-AI-RM-006 |
| 1.2 Comprehensive Risk Identification | TMP-AI-RM-001 | TMP-AI-RM-006 |
| 2.1 Assess Likelihood | TMP-AI-RM-001 | — |
| 2.2 Assess Impact | TMP-AI-RM-001 | — |
| 2.3 Calculate Risk Scores | TMP-AI-RM-001 | TMP-AI-RM-002 |
| 2.4 Bias Assessment | TMP-AI-RM-001 | — |
| 3.1 Create Risk Register | TMP-AI-RM-002 | — |
| 3.2 Maintain Risk Register | TMP-AI-RM-002 | TMP-AI-RM-006 |
| 4.1 Select Treatment Strategy | TMP-AI-RM-003 | TMP-AI-RM-002 |
| 4.2 Design & Implement Controls | TMP-AI-RM-003 | TMP-AI-RM-007 |
| 5.1 Calculate Residual Risk | TMP-AI-RM-004 | TMP-AI-RM-002 |
| 5.2 Obtain Risk Acceptance | TMP-AI-RM-004 | TMP-AI-RM-003 |
| 6.1 Implement Risk Monitoring | TMP-AI-RM-005 | — |
| 6.2 Conduct Periodic Reviews | TMP-AI-RM-005 | TMP-AI-RM-006 |
| 6.3 Assess Incidents | TMP-AI-RM-008 | TMP-AI-RM-002 |
| 7.1 Lessons Learned Review | TMP-AI-RM-008 | TMP-AI-RM-006 |
| 7.2 Update Framework | TMP-AI-RM-006 | — |

### 6.3 Template Structure

Each consolidated template contains:
- **Checklists** - Ensure completeness of activities
- **Worksheets** - Document assessments and decisions
- **Forms** - Capture structured information
- **Records** - Store evidence and audit trail
- **Reports** - Summarize findings for stakeholders
- **Dashboards** - Visualize key metrics and status

This consolidation reduces the number of templates from 26 to 8 while maintaining comprehensive coverage of all risk management activities.

---

## 7. QUALITY ASSURANCE

### 7.1 Quality Checks

| Step | Quality Check | Acceptance Criteria |
|---|---|---|
| Risk Identification | Completeness | Minimum 10 risks identified per high-risk AI system |
| Risk Identification | Comprehensiveness | All 5 risk categories represented |
| Risk Assessment | Consistency | Risk scores calculated using standard methodology |
| Risk Assessment | Accuracy | Risk levels classified correctly per scoring matrix |
| Risk Register | Completeness | All mandatory fields populated for each risk |
| Risk Register | Accuracy | Risk register matches source assessments |
| Risk Treatment | Appropriateness | Treatment strategy appropriate for risk level |
| Risk Treatment | Approval | Required approvals obtained and documented |
| Control Implementation | Effectiveness | Controls tested and verified as operational |
| Residual Risk | Acceptability | No unacceptable residual risks remain |
| Risk Monitoring | Effectiveness | Monitoring systems operational and detecting issues |

### 7.2 Audit and Review

- **Internal Audit:** Annual audit of risk management process effectiveness
- **External Audit:** Annual audit by external auditor (if required)
- **Regulatory Inspection:** Competent authority inspection (if triggered)
- **Management Review:** Annual review by AI Governance Committee

---

## 8. ESCALATION PROCEDURES

### 8.1 Escalation Triggers

| Trigger | Escalation Level | Escalation To | Timeline |
|---|---|---|---|
| Critical risk identified (20-25) | Level 1 | AI Governance Committee | Immediate (< 24 hours) |
| High risk identified (15-19) | Level 2 | AI Risk Manager + Product Director | Within 2 business days |
| Residual risk unacceptable | Level 1 | AI Governance Committee | Immediate (< 24 hours) |
| Control failure detected | Level 2 | AI Risk Manager + Control Owner | Within 1 business day |
| Incident risk assessment | Level 2 | AI Risk Manager + CRO | Within 1 business day |
| Monitoring threshold breach | Level 3 | AI System Owner + ML Ops | Within 4 hours |

### 8.2 Escalation Process

1. **Identify escalation trigger**
2. **Prepare escalation documentation**
3. **Contact escalation recipient**
4. **Present issue and recommendation**
5. **Obtain decision and approval**
6. **Document escalation and decision**
7. **Implement approved actions**
8. **Follow up and close**

---

## 9. COMPLIANCE AND AUDIT

### 9.1 Regulatory Requirements

This procedure implements the following EU AI Act requirements:

| EU AI Act Article | Requirement | Implemented By |
|---|---|---|
| Article 9(1) | Risk management system | Steps 1.1-1.2, 3.1, 6.1-6.3 |
| Article 9(2) | Risk identification | Step 1.2 |
| Article 9(3) | Risk estimation and evaluation | Steps 2.1-2.3 |
| Article 9(4) | Risk management measures | Step 4.2 |
| Article 9(5) | Testing risk management measures | Step 4.2 |
| Article 9(6) | Iterative risk management | Steps 6.2, 7.1-7.2 |
| Article 10(5) | Bias examination | Step 2.4 |
| Article 13 | Instructions for use | Step 4.2 (control implementation) |
| Article 73 | Incident reporting | Step 6.3 |

### 9.2 Audit Verification

Auditors will verify:

1. **Risk Management System Established**
   - Framework document exists and is approved
   - Roles and responsibilities defined
   - Governance structure in place
   - ERM integration documented

2. **Risk Identification Conducted**
   - Risk identification workshops documented
   - All risk categories assessed
   - Minimum 10 risks identified per high-risk system
   - Risks documented with clear descriptions

3. **Risk Assessment Completed**
   - All risks assessed for likelihood and impact
   - Risk scores calculated using standard methodology
   - Risk levels classified correctly
   - High and critical risks escalated

4. **Risk Treatment Planned and Implemented**
   - Treatment strategy selected for all risks
   - Controls designed and implemented
   - Controls tested and operational
   - Residual risks assessed and accepted

5. **Risk Monitoring Operational**
   - Monitoring systems configured
   - KRIs defined and monitored
   - Threshold breaches detected and escalated
   - Periodic reviews conducted

6. **Continuous Improvement Implemented**
   - Lessons learned captured
   - Framework updated annually
   - Process improvements implemented

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
| **Prepared By** | [Name] | AI Risk Manager | __________ | ________ |
| **Reviewed By** | [Name] | Chief Risk Officer | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## 12. DOCUMENT CONTROL

**Document Status:** [Draft/Approved]  
**Classification:** [Public/Internal/Confidential]  
**Distribution:** AI Risk Manager, AI System Owners, AI Governance Committee, Compliance, Internal Audit  
**Retention:** 10 years (per EU AI Act)  
**Review Frequency:** Annually or upon regulatory change  
**Next Review Date:** [Date]

---

## APPENDIX A: KEY RISK INDICATORS (KRI) LIBRARY

This appendix provides 25+ sample Key Risk Indicators for AI system risk monitoring. Select appropriate KRIs based on your AI system's risk profile.

### A.1 Model Performance KRIs

| KRI ID | KRI Name | Definition | Threshold (Red) | Frequency |
|--------|----------|------------|-----------------|-----------|
| KRI-PERF-001 | Model Accuracy | Overall prediction accuracy vs. baseline | < 90% of baseline | Daily |
| KRI-PERF-002 | Precision | Positive predictive value | < 85% | Weekly |
| KRI-PERF-003 | Recall | True positive rate | < 85% | Weekly |
| KRI-PERF-004 | F1 Score | Harmonic mean of precision and recall | < 80% | Weekly |
| KRI-PERF-005 | AUC-ROC | Area under ROC curve | < 0.75 | Monthly |
| KRI-PERF-006 | Model Latency | Average inference time | > 500ms | Continuous |

### A.2 Fairness and Bias KRIs

| KRI ID | KRI Name | Definition | Threshold (Red) | Frequency |
|--------|----------|------------|-----------------|-----------|
| KRI-FAIR-001 | Demographic Parity | Ratio of positive outcomes across groups | < 0.8 or > 1.25 | Weekly |
| KRI-FAIR-002 | Equal Opportunity | True positive rate ratio across groups | < 0.8 or > 1.25 | Weekly |
| KRI-FAIR-003 | Equalized Odds | TPR and FPR balance across groups | > 10% difference | Weekly |
| KRI-FAIR-004 | Calibration Gap | Difference in predicted vs. actual rates by group | > 5% | Monthly |
| KRI-FAIR-005 | Disparate Impact Ratio | Selection rate ratio (protected vs. non-protected) | < 0.8 | Monthly |

### A.3 Data Quality KRIs

| KRI ID | KRI Name | Definition | Threshold (Red) | Frequency |
|--------|----------|------------|-----------------|-----------|
| KRI-DATA-001 | Data Completeness | % of records without missing values | < 95% | Daily |
| KRI-DATA-002 | Data Freshness | Age of most recent training data | > 30 days | Weekly |
| KRI-DATA-003 | Feature Drift | Statistical distance of feature distributions | > 0.3 (PSI) | Weekly |
| KRI-DATA-004 | Label Quality | % of verified/correct labels | < 98% | Monthly |
| KRI-DATA-005 | Outlier Rate | % of data points flagged as anomalous | > 5% | Daily |

### A.4 Operational KRIs

| KRI ID | KRI Name | Definition | Threshold (Red) | Frequency |
|--------|----------|------------|-----------------|-----------|
| KRI-OPS-001 | System Availability | Uptime percentage | < 99.5% | Continuous |
| KRI-OPS-002 | Error Rate | % of requests resulting in errors | > 1% | Continuous |
| KRI-OPS-003 | Human Override Rate | % of AI decisions overridden by humans | > 20% | Weekly |
| KRI-OPS-004 | Escalation Rate | % of decisions escalated for review | > 15% | Weekly |
| KRI-OPS-005 | Retraining Frequency | Time since last model update | > 90 days | Monthly |

### A.5 Security and Compliance KRIs

| KRI ID | KRI Name | Definition | Threshold (Red) | Frequency |
|--------|----------|------------|-----------------|-----------|
| KRI-SEC-001 | Unauthorized Access Attempts | Count of failed access attempts | > 10/day | Continuous |
| KRI-SEC-002 | Data Access Anomalies | Unusual data access patterns detected | Any | Continuous |
| KRI-SEC-003 | Adversarial Input Rate | % of inputs flagged as potentially adversarial | > 0.1% | Daily |
| KRI-SEC-004 | Compliance Audit Findings | Open audit findings count | > 3 high severity | Monthly |
| KRI-SEC-005 | Incident Count | AI-related incidents per period | > 2/quarter | Quarterly |

---

## APPENDIX B: GLOSSARY OF TERMS

This glossary defines key terms used throughout this procedure and related AI Act compliance documentation.

| Term | Definition |
|------|------------|
| **AI System** | A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments (EU AI Act Art. 3(1)) |
| **Control** | A measure that modifies risk, including any process, policy, device, practice, or other action that maintains and/or modifies risk |
| **Control Effectiveness** | The degree to which a control reduces risk likelihood and/or impact when operating as designed |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority (EU AI Act Art. 3(4)) |
| **Fundamental Rights** | Rights recognized by the EU Charter of Fundamental Rights, including dignity, freedoms, equality, solidarity, citizens' rights, and justice |
| **High-Risk AI System** | An AI system that is listed in Annex III of the EU AI Act or intended to be used as a safety component of a product covered by EU harmonization legislation |
| **Inherent Risk** | The level of risk before any controls are applied |
| **Key Risk Indicator (KRI)** | A metric used to monitor and provide early warning of increasing risk exposures |
| **Likelihood** | The probability of a risk event occurring within a given timeframe |
| **Impact** | The consequence or effect of a risk event if it occurs |
| **Provider** | Any natural or legal person, public authority, agency or other body that develops an AI system or general-purpose AI model, or has an AI system developed, and places it on the market or puts it into service under its own name or trademark (EU AI Act Art. 3(3)) |
| **Prohibited Practice** | An AI practice explicitly banned under Article 5 of the EU AI Act |
| **Residual Risk** | The level of risk remaining after controls are applied |
| **Risk** | The effect of uncertainty on objectives, measured as likelihood × impact |
| **Risk Appetite** | The amount and type of risk an organization is willing to accept in pursuit of its objectives |
| **Risk Register** | A structured record of identified risks, their assessments, and treatment status |
| **Risk Tolerance** | The acceptable deviation from the risk appetite |
| **Risk Treatment** | The process of selecting and implementing options to address risk (avoid, mitigate, transfer, or accept) |
| **Serious Incident** | An incident or malfunctioning of an AI system that directly or indirectly leads to death, serious harm to health, property, environment, or fundamental rights (EU AI Act Art. 3(49)) |

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
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ PROC-AI-CLS-001   │   │ PROC-AI-RM-001    │   │ PROC-AI-DATA-001  │
│ Classification    │──▶│ Risk Management   │◀──│ Data Governance   │
│                   │   │ (THIS PROCEDURE)  │   │                   │
└───────────────────┘   └─────────┬─────────┘   └───────────────────┘
        │                         │                         │
        │                         ▼                         │
        │               ┌───────────────────┐               │
        │               │ PROC-AI-DOC-001   │               │
        └──────────────▶│ Documentation     │◀──────────────┘
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-INC-001   │
                        │ Incident Response │
                        └───────────────────┘
```

### C.2 Procedure Interface Matrix

| From This Procedure | To Procedure | Interface | When |
|---------------------|--------------|-----------|------|
| Step 1.1 | PROC-AI-CLS-001 | Risk classification informs risk assessment scope | Before risk assessment |
| Step 2.4 | PROC-AI-DATA-001 | Bias assessment uses data quality metrics | During bias assessment |
| Step 4.2 | PROC-AI-DOC-001 | Control documentation requirements | After control design |
| Step 6.3 | PROC-AI-INC-001 | Incident triggers risk reassessment | Upon incident |
| Section 3.4 | PROC-AI-VENDOR-001 | Vendor risks integrated into register | Ongoing |

### C.3 Template Cross-Reference

| Template from This Procedure | Used By | Purpose |
|------------------------------|---------|---------|
| TMP-AI-RM-001 | PROC-AI-CLS-001 | Risk classification informs initial risk profile |
| TMP-AI-RM-002 | PROC-AI-DOC-001 | Risk register feeds technical documentation |
| TMP-AI-RM-005 | PROC-AI-INC-001 | KRI breaches trigger incident reporting |

---

## APPENDIX D: QUICK REFERENCE CARD

### Risk Scoring Quick Reference

| Likelihood | Impact | Result |
|------------|--------|--------|
| 5 (Almost Certain) | × | 5 (Catastrophic) | = 25 (Critical) |
| 4 (Likely) | × | 4 (Major) | = 16 (High) |
| 3 (Possible) | × | 3 (Moderate) | = 9 (Low) |
| 2 (Unlikely) | × | 2 (Minor) | = 4 (Very Low) |
| 1 (Rare) | × | 1 (Negligible) | = 1 (Very Low) |

### Risk Level Actions

| Level | Score | Color | Action | Approval |
|-------|-------|-------|--------|----------|
| Critical | 20-25 | Red | Immediate action; cannot deploy | AI Gov Committee |
| High | 15-19 | Orange | Mitigate to Low; 30-day plan | Product Director |
| Medium | 10-14 | Yellow | Mitigate or accept; 60-day plan | AI Risk Manager |
| Low | 5-9 | Green | Accept or mitigate; 90-day plan | AI System Owner |
| Very Low | 1-4 | White | Accept automatically | N/A |

### Key Contacts

| Role | Contact | Escalate For |
|------|---------|--------------|
| AI Risk Manager | [Email] | Risk assessments, register updates |
| Chief Risk Officer | [Email] | Critical/High risk approval |
| AI Governance Committee | [Distribution List] | Risk acceptance decisions |
| Compliance Officer | [Email] | Regulatory questions |

### Key Dates & Frequencies

| Activity | Frequency | Owner |
|----------|-----------|-------|
| Risk Register Update | Monthly | AI Risk Manager |
| Quarterly Risk Review | Quarterly | AI Governance Committee |
| Annual Framework Review | Annually | CRO |
| KRI Monitoring | Per risk level | ML Ops |

---

## APPENDIX E: PROCEDURE INTEGRATION DIAGRAM

This diagram shows how this procedure integrates with the overall AI compliance framework.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           EU AI ACT COMPLIANCE FRAMEWORK                             │
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
│  ┌─────────────────┐ │    ◐     │    ●    │    ●    │   ●    │   ◐    │     ●      │
│  │ PROC-AI-RM-001  │ │ Inform   │ Primary │ Primary │Primary │ Review │ Monitor    │
│  │ Risk Management │ │          │         │         │        │        │            │
│  │ (THIS PROCEDURE)│ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                      │          │         │         │        │        │            │
│  ┌─────────────────┐ │          │    ●    │    ●    │        │        │     ◐      │
│  │ PROC-AI-DATA-001│ │          │ Primary │ Primary │        │        │ Maintain   │
│  │ Data Governance │ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                      │          │         │         │        │        │            │
│  ┌─────────────────┐ │          │    ◐    │    ●    │   ●    │   ●    │     ◐      │
│  │ PROC-AI-DOC-001 │ │          │ Start   │ Primary │Primary │Primary │ Update     │
│  │ Documentation   │ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                      │          │         │         │        │        │            │
│  ┌─────────────────┐ │          │         │         │        │        │     ●      │
│  │ PROC-AI-INC-001 │ │          │         │         │        │        │ Primary    │
│  │ Incident Mgmt   │ │          │         │         │        │        │            │
│  └─────────────────┘ │          │         │         │        │        │            │
│                                                                                      │
│  Legend: ● Primary activity in this phase   ◐ Supporting activity in this phase    │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘

RISK MANAGEMENT TOUCHPOINTS DETAIL:

     CLASSIFY           DESIGN           DEVELOP           TEST           OPERATE
        │                  │                │                │                │
        ▼                  ▼                ▼                ▼                ▼
   ┌─────────┐       ┌──────────┐     ┌──────────┐    ┌──────────┐    ┌──────────┐
   │ Initial │       │   Risk   │     │  Ongoing │    │ Residual │    │Continuous│
   │  Risk   │──────▶│Identifi- │────▶│   Risk   │───▶│   Risk   │───▶│   Risk   │
   │Profile  │       │ cation   │     │Assessment│    │Acceptance│    │Monitoring│
   └─────────┘       └──────────┘     └──────────┘    └──────────┘    └──────────┘
        │                  │                │                │                │
        │                  ▼                │                │                │
        │           ┌──────────┐            │                │                │
        │           │  Misuse  │            │                │                │
        │           │Assessment│            │                │                │
        │           └──────────┘            │                │                │
        │                  │                │                │                │
        ▼                  ▼                ▼                ▼                ▼
   ┌───────────────────────────────────────────────────────────────────────────────┐
   │                          RISK REGISTER (Continuous)                            │
   └───────────────────────────────────────────────────────────────────────────────┘
```

---

**END OF PROCEDURE PROC-AI-RM-001**

