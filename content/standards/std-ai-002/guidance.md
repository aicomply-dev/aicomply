# AI Risk Management Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-002  
**Standard Title:** AI Risk Management Standard  
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
| 0.1 | 2025-06-15 | Michael Chen, AI Risk Manager | Initial draft | - | - |
| 0.2 | 2025-07-01 | Michael Chen, AI Risk Manager | Incorporated stakeholder feedback | - | - |
| 0.3 | 2025-07-15 | Michael Chen, AI Risk Manager | Legal review incorporated | - | - |
| 1.0 | 2025-08-01 | Michael Chen, AI Risk Manager | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines the requirements for establishing, implementing, and maintaining a comprehensive AI risk management system throughout the AI system lifecycle in compliance with EU AI Act Article 9 and aligned with ISO/IEC 42001 and NIST AI RMF.

**Primary Goals:**
- Establish continuous, iterative risk management integrated with enterprise risk management
- Systematically identify and assess all AI-related risks to health, safety, and fundamental rights
- Implement appropriate risk treatment measures to reduce risks to acceptable levels
- Continuously monitor AI risks and review risk management effectiveness
- Ensure effective communication and reporting of AI risks to all stakeholders

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems (EU AI Act Article 9)
- All phases of AI system lifecycle: Design, Development, Testing, Deployment, Operation, Decommissioning

### 2.2 Recommended Applicability

This standard is **recommended** for:
- All limited-risk AI systems
- All minimal-risk AI systems (voluntary best practices)

### 2.3 Risk Categories Covered

- **Technical Risks:** Bias, inaccuracy, lack of robustness, security vulnerabilities
- **Operational Risks:** System failures, performance degradation, data quality issues
- **Compliance Risks:** Regulatory non-compliance, legal liability
- **Reputational Risks:** Public perception, customer trust
- **Ethical Risks:** Fairness, transparency, accountability concerns
- **Safety Risks:** Physical harm, health impacts
- **Privacy Risks:** Data protection violations, unauthorized access

### 2.4 Out of Scope

- General enterprise risk management (covered by ERM framework)
- Non-AI system risks (covered by other risk management standards)
- Risks outside EU AI Act scope

---

## CONTROL STANDARD

### Control RM-001: Risk Management System Establishment

**Control ID:** RM-001  
**Control Name:** AI Risk Management Framework Establishment  
**Control Type:** Preventive  
**Control Frequency:** Initial establishment, annual review  
**Risk Level:** High

#### Control Objective

Establish a continuous, iterative AI risk management system integrated into the overall enterprise risk management framework to ensure systematic identification, assessment, treatment, and monitoring of AI-related risks throughout the AI system lifecycle in compliance with EU AI Act Article 9(1).

#### Control Requirements

**CR-001.1: Risk Management System Documentation**

Establish and document an AI risk management system that is:
- Continuous and iterative throughout the AI system lifecycle
- Proportionate to the intended purpose and risk level of the AI system
- Integrated with the organization's enterprise risk management framework
- Regularly reviewed and updated

**Mandatory Actions:**
- Define AI risk management framework document
- Establish AI risk governance structure
- Define risk management roles and responsibilities
- Integrate with Enterprise Risk Management (ERM)
- Obtain AI Governance Committee approval
- Review framework annually

**Evidence Required:**
- AI Risk Management Framework Document (DOC-AI-RM-001)
- Risk Management Governance Structure
- Roles and Responsibilities Matrix
- ERM Integration Documentation
- AI Governance Committee Approval Records

**Audit Verification:**
- Verify framework document exists and is approved
- Confirm roles and responsibilities clearly defined
- Validate ERM integration documented
- Check annual review completion

---

### Control RM-002: Risk Management Lifecycle Integration

**Control ID:** RM-002  
**Control Name:** Lifecycle Risk Management Integration  
**Control Type:** Preventive  
**Control Frequency:** Per lifecycle phase, continuous  
**Risk Level:** High

#### Control Objective

Integrate risk management activities into each phase of the AI system lifecycle to ensure risks are identified, assessed, and managed at appropriate points, maintaining risk traceability from design through decommissioning.

#### Control Requirements

**CR-002.1: Lifecycle Phase Risk Activities**

Define and implement risk management activities for each of the 6 AI system lifecycle phases.

**Lifecycle Phases and Risk Activities:**

| Phase | Risk Management Activities | Phase Gate Requirements |
|-------|---------------------------|------------------------|
| **1. Design** | - Initial risk assessment<br>- Risk requirements definition<br>- Risk-based design decisions | Risk assessment completed; Risk requirements documented |
| **2. Development** | - Ongoing risk assessment<br>- Risk control implementation<br>- Risk testing and validation | Controls implemented; Risk testing completed |
| **3. Testing** | - Risk control testing<br>- Residual risk assessment<br>- Risk acceptance decision | Residual risk acceptable; Risk acceptance documented |
| **4. Deployment** | - Pre-deployment risk review<br>- Deployment risk assessment<br>- Risk monitoring setup | Pre-deployment review completed; Monitoring configured |
| **5. Operation** | - Continuous risk monitoring<br>- Incident risk assessment<br>- Periodic risk reviews | Monitoring operational; Reviews scheduled |
| **6. Decommissioning** | - Decommissioning risk assessment<br>- Data retention/deletion risks<br>- Transition risks | Decommissioning risks assessed; Data handling plan approved |

**Mandatory Actions:**
- Define risk activities for each lifecycle phase
- Create lifecycle-specific risk checklists
- Assign risk responsibilities per phase
- Document risk decisions at phase gates
- Maintain risk traceability across phases
- Block phase progression if risk gates not met

**Evidence Required:**
- AI System Development Lifecycle Procedure (PROC-AI-DEV-001)
- Risk Assessment Checklist per Lifecycle Phase (CHK-AI-RM-001)
- Risk Assessment Records per AI System (REC-AI-RM-001)
- Phase Gate Risk Review Records (REC-AI-RM-002)
- Risk Traceability Matrix

**Audit Verification:**
- Verify risk activities defined for all 6 lifecycle phases
- Confirm risk assessments conducted at each phase gate
- Validate risk decisions documented and approved
- Check risk traceability maintained from design to decommissioning

---

### Control RM-003: Risk Register Maintenance

**Control ID:** RM-003  
**Control Name:** AI Risk Register Management  
**Control Type:** Detective  
**Control Frequency:** Monthly updates, quarterly reviews  
**Risk Level:** Medium

#### Control Objective

Maintain a comprehensive AI risk register for all AI systems to enable effective risk oversight, tracking, and reporting, ensuring all identified risks are properly documented, assessed, and managed.

#### Control Requirements

**CR-003.1: Risk Register Structure and Content**

Maintain a centralized AI risk register containing all identified risks with complete mandatory information.

**Risk Register Mandatory Fields:**

| Field | Description | Mandatory | Format/Values |
|-------|-------------|-----------|---------------|
| Risk_ID | Unique risk identifier | YES | RM-AI-XXXX |
| AI_System_ID | AI system affected | YES | AI-SYS-XXXX |
| Risk_Category | Type of risk | YES | Technical/Operational/Compliance/Reputational/Ethical/Safety/Privacy |
| Risk_Description | Detailed risk description | YES | Text |
| Risk_Source | Where risk originates | YES | Text |
| Likelihood | Probability of occurrence | YES | 1-5 scale |
| Impact | Severity of impact | YES | 1-5 scale |
| Inherent_Risk_Score | Likelihood × Impact (before controls) | YES | 1-25 |
| Risk_Level | Risk classification | YES | Critical/High/Medium/Low/Very Low |
| Risk_Controls | Controls mitigating this risk | YES | Control IDs |
| Residual_Risk_Score | Risk score after controls | YES | 1-25 |
| Risk_Owner | Person accountable for risk | YES | Name/Title |
| Risk_Status | Current status | YES | Open/Mitigated/Accepted/Closed |
| Target_Date | Date for risk mitigation | If Open | YYYY-MM-DD |
| Review_Date | Last review date | YES | YYYY-MM-DD |
| Next_Review_Date | Next scheduled review | YES | YYYY-MM-DD |

**Mandatory Actions:**
- Create AI risk register template
- Populate risk register for each AI system
- Update risk register monthly
- Review risk register quarterly with AI Governance Committee
- Archive closed risks annually (retain for 10 years)
- Maintain audit trail of all changes

**Evidence Required:**
- AI Risk Register (REC-AI-RM-003)
- Quarterly Risk Register Review Report (RPT-AI-RM-001)
- Risk Register Update Log (REC-AI-RM-004)
- Archive records for closed risks

**Audit Verification:**
- Verify risk register contains all identified risks
- Confirm all mandatory fields populated
- Check register updated monthly
- Validate quarterly review completed with AI Governance Committee
- Verify 10-year retention for archived risks

---

### Control RM-004: Known and Foreseeable Risk Identification

**Control ID:** RM-004  
**Control Name:** Risk Identification Process  
**Control Type:** Preventive  
**Control Frequency:** Initial assessment, after substantial modifications, annually  
**Risk Level:** High

#### Control Objective

Systematically identify known and reasonably foreseeable risks related to health, safety, and fundamental rights for each AI system to ensure comprehensive risk coverage and enable appropriate risk treatment decisions.

#### Control Requirements

**CR-004.1: Comprehensive Risk Identification**

Identify risks across all relevant categories using systematic identification methods.

**Risk Categories to Assess:**

**A. Technical Risks:**
- Bias and discrimination in AI outputs
- Inaccurate predictions or decisions
- Lack of robustness to adversarial attacks
- Security vulnerabilities
- Data quality issues
- Model drift and performance degradation

**B. Safety Risks:**
- Physical harm to persons
- Damage to property
- Environmental harm
- Critical infrastructure disruption

**C. Fundamental Rights Risks:**
- Privacy violations (GDPR)
- Discrimination (protected characteristics)
- Freedom of expression
- Right to explanation
- Right to human review
- Due process violations

**D. Operational Risks:**
- System failures and downtime
- Integration issues with existing systems
- Scalability limitations
- Resource constraints

**E. Compliance Risks:**
- EU AI Act non-compliance
- GDPR violations
- Sector-specific regulatory violations
- Contractual breaches

**Mandatory Actions:**
- Conduct initial risk identification workshop
- Use risk identification checklist (CHK-AI-RM-002)
- Review historical incidents and near-misses
- Consult subject matter experts
- Review similar AI systems for lessons learned
- Document all identified risks in risk register
- Minimum 10 risks identified per high-risk AI system

**Evidence Required:**
- Risk Identification Workshop Minutes (REC-AI-RM-005)
- Risk Identification Checklist (completed) (CHK-AI-RM-002)
- Risk Identification Report per AI System (RPT-AI-RM-002)
- Subject Matter Expert Consultation Records (REC-AI-RM-006)

**Audit Verification:**
- Verify risk identification conducted for all risk categories
- Confirm minimum 10 risks identified per high-risk AI system
- Validate subject matter experts consulted
- Check all risks documented in risk register

---

### Control RM-005: Risk Analysis and Evaluation

**Control ID:** RM-005  
**Control Name:** Risk Assessment Methodology  
**Control Type:** Preventive  
**Control Frequency:** Per identified risk, after modifications  
**Risk Level:** High

#### Control Objective

Analyze and evaluate identified risks using a consistent risk assessment methodology to determine risk levels, prioritize risks for treatment, and enable informed risk management decisions.

#### Control Requirements

**CR-005.1: Risk Assessment Methodology Application**

Apply standardized risk assessment methodology to all identified risks.

**Step 1: Likelihood Assessment (1-5 scale)**

| Score | Likelihood | Description | Frequency |
|-------|-----------|-------------|-----------|
| 5 | Almost Certain | Expected to occur | > 90% probability or > 1/year |
| 4 | Likely | Will probably occur | 60-90% probability or 1/2 years |
| 3 | Possible | Might occur | 30-60% probability or 1/5 years |
| 2 | Unlikely | Not expected but possible | 10-30% probability or 1/10 years |
| 1 | Rare | May occur in exceptional circumstances | < 10% probability or < 1/10 years |

**Step 2: Impact Assessment (1-5 scale)**

| Score | Impact | Health/Safety | Fundamental Rights | Financial | Reputational |
|-------|--------|---------------|-------------------|-----------|--------------|
| 5 | Catastrophic | Death or permanent disability | Widespread severe violations | > €10M | International crisis |
| 4 | Major | Serious injury | Significant violations | €1M-€10M | National crisis |
| 3 | Moderate | Minor injury | Moderate violations | €100K-€1M | Regional impact |
| 2 | Minor | First aid required | Minor violations | €10K-€100K | Local impact |
| 1 | Negligible | No injury | No violations | < €10K | Minimal impact |

**Step 3: Risk Score Calculation**

```
Inherent Risk Score = Likelihood × Impact
```

**Step 4: Risk Level Classification**

| Risk Score | Risk Level | Color | Action Required |
|------------|-----------|-------|-----------------|
| 20-25 | Critical | 🔴 Red | Immediate action; escalate to AI Governance Committee |
| 15-19 | High | 🟠 Orange | Senior management attention; mitigation plan within 30 days |
| 10-14 | Medium | 🟡 Yellow | Management attention; mitigation plan within 60 days |
| 5-9 | Low | 🟢 Green | Monitor; mitigation plan within 90 days |
| 1-4 | Very Low | ⚪ White | Accept or monitor |

**Mandatory Actions:**
- Assess likelihood for each identified risk
- Assess impact for each identified risk
- Calculate inherent risk score
- Classify risk level
- Prioritize risks for treatment
- Document risk assessment in risk register
- Escalate high and critical risks to AI Governance Committee

**Evidence Required:**
- Risk Assessment Worksheets (per risk) (REC-AI-RM-007)
- Risk Assessment Report (per AI system) (RPT-AI-RM-003)
- Risk Prioritization Matrix (REC-AI-RM-008)

**Audit Verification:**
- Verify all identified risks assessed for likelihood and impact
- Confirm risk scores calculated using standard methodology
- Validate risk levels classified consistently
- Check high and critical risks escalated to AI Governance Committee

---

### Control RM-006: Bias and Discrimination Risk Assessment

**Control ID:** RM-006  
**Control Name:** Bias and Discrimination Risk Assessment  
**Control Type:** Preventive  
**Control Frequency:** Before training, after dataset updates, annually  
**Risk Level:** High

#### Control Objective

Specifically assess risks of bias and discrimination per EU AI Act Article 10(5) to prevent discriminatory outcomes and ensure fairness across all protected characteristics.

#### Control Requirements

**CR-006.1: Comprehensive Bias Assessment**

Conduct bias assessment across all relevant dimensions and protected characteristics.

**Bias Assessment Dimensions:**

| Dimension | Assessment Questions | Data Required |
|-----------|---------------------|---------------|
| **Training Data Bias** | - Are protected characteristics represented?<br>- Is data historically biased?<br>- Are minority groups underrepresented? | Training dataset statistics |
| **Algorithmic Bias** | - Does algorithm amplify existing bias?<br>- Are fairness metrics measured?<br>- Are there disparate impacts? | Model fairness metrics |
| **Output Bias** | - Do outputs differ by protected groups?<br>- Are there systematic errors for specific groups? | Output analysis by group |
| **Deployment Bias** | - Will deployment context introduce bias?<br>- Are users from diverse backgrounds?<br>- Is feedback loop biased? | Deployment analysis |

**Protected Characteristics (per GDPR Article 9):**
- Race or ethnic origin
- Political opinions
- Religious or philosophical beliefs
- Trade union membership
- Genetic data
- Biometric data
- Health data
- Sex life or sexual orientation
- **Additional:** Gender, age, disability

**Mandatory Actions:**
- Conduct bias risk assessment workshop
- Analyze training data for bias
- Calculate fairness metrics (see Appendix B)
- Test for disparate impact
- Document bias risks in risk register
- Create mitigation plan for identified bias risks

**Fairness Metrics to Calculate:**
- Demographic Parity (equal positive prediction rate)
- Equal Opportunity (equal true positive rate)
- Equalized Odds (equal TPR and FPR)
- Predictive Parity (equal precision)
- Calibration (equal calibration across groups)

**Target Fairness Thresholds:**
- Ratio between groups: 0.8 - 1.2 (acceptable)
- Calibration difference: < 5% (acceptable)

**Evidence Required:**
- Bias Risk Assessment Report (RPT-AI-RM-004)
- Training Data Bias Analysis Report (RPT-AI-DATA-001)
- Fairness Metrics Test Results (TEST-AI-RM-001)
- Disparate Impact Analysis Report (RPT-AI-RM-005)
- Bias Mitigation Plan

**Audit Verification:**
- Verify bias assessment conducted for all protected characteristics
- Confirm training data analyzed for representation
- Validate fairness metrics calculated and documented
- Check bias risks documented in risk register
- Verify mitigation plan created for identified bias risks

---

### Control RM-007: Risk Treatment Strategy Selection

**Control ID:** RM-007  
**Control Name:** Risk Treatment Decision and Planning  
**Control Type:** Preventive  
**Control Frequency:** Per identified risk, after risk assessment  
**Risk Level:** High

#### Control Objective

Select and implement appropriate risk treatment strategies for each identified risk to reduce risks to acceptable levels, ensuring critical and high risks are properly mitigated before deployment.

#### Control Requirements

**CR-007.1: Risk Treatment Strategy Selection**

Select appropriate risk treatment strategy for each identified risk based on risk level and organizational risk appetite.

**Risk Treatment Options:**

| Strategy | Description | When to Use | Example |
|----------|-------------|-------------|---------|
| **Avoid** | Eliminate the risk by not proceeding | Risk too high; no effective controls | Cancel high-risk AI project |
| **Mitigate** | Reduce likelihood or impact | Risk can be controlled | Implement bias mitigation techniques |
| **Transfer** | Share risk with third party | Risk can be insured or outsourced | Purchase AI liability insurance |
| **Accept** | Acknowledge risk without action | Risk below tolerance; cost of mitigation exceeds benefit | Accept low-probability, low-impact risks |

**Risk Treatment Decision Matrix:**

| Risk Level | Recommended Strategy | Approval Required |
|------------|---------------------|-------------------|
| Critical (20-25) | Avoid or Mitigate (must reduce to Medium or below) | AI Governance Committee |
| High (15-19) | Mitigate (must reduce to Low or below) | Product Director + AI Risk Manager |
| Medium (10-14) | Mitigate or Accept with justification | AI Risk Manager |
| Low (5-9) | Accept or Mitigate | AI System Owner |
| Very Low (1-4) | Accept | AI System Owner |

**Mandatory Actions:**
- Review each risk in risk register
- Select appropriate treatment strategy
- Document treatment rationale
- Obtain required approvals
- Assign treatment owner and target date
- Track treatment implementation
- Block deployment if critical/high risks not treated

**Evidence Required:**
- Risk Treatment Decision Records (REC-AI-RM-009)
- Risk Treatment Plan (per AI system) (RPT-AI-RM-006)
- Risk Treatment Approval Records (REC-AI-RM-010)

**Audit Verification:**
- Verify treatment strategy selected for all risks
- Confirm treatment decisions documented with rationale
- Validate required approvals obtained
- Check treatment owners assigned and target dates defined
- Verify critical/high risks mitigated before deployment

---

### Control RM-008: Risk Control Implementation

**Control ID:** RM-008  
**Control Name:** Risk Control Design and Implementation  
**Control Type:** Preventive/Detective/Corrective  
**Control Frequency:** Per mitigated risk, continuous operation  
**Risk Level:** High

#### Control Objective

Implement technical and organizational controls to mitigate identified risks, ensuring controls are designed, implemented, tested, and operational before deployment.

#### Control Requirements

**CR-008.1: Control Design and Implementation**

Design and implement appropriate controls for all risks selected for mitigation.

**Control Types:**

**A. Preventive Controls** (prevent risk from occurring)
- Bias mitigation techniques in model training
- Input validation and sanitization
- Access controls and authentication
- Secure development practices
- Data quality checks

**B. Detective Controls** (detect when risk occurs)
- Monitoring and alerting
- Anomaly detection
- Audit logging
- Performance metrics
- Bias detection in production

**C. Corrective Controls** (correct after risk occurs)
- Incident response procedures
- Model retraining
- Human review and override
- Rollback procedures
- Corrective action plans

**Control Implementation Process:**

1. **Design Controls**
   - Define control objective
   - Specify control activities
   - Assign control owner
   - Define control frequency

2. **Implement Controls**
   - Develop control procedures
   - Configure technical controls
   - Train control operators
   - Test control effectiveness

3. **Document Controls**
   - Document in Controls Register
   - Link to risks in Risk Register
   - Create control procedures
   - Define control evidence

4. **Monitor Controls**
   - Test control operation
   - Review control effectiveness
   - Update controls as needed
   - Report control status

**Mandatory Actions:**
- Design controls for all mitigated risks
- Implement controls before deployment
- Test control effectiveness
- Document controls in Controls Register
- Link controls to risks in Risk Register
- Train control operators
- Monitor control operation continuously

**Evidence Required:**
- Controls Register (REC-AI-CTRL-001)
- Control Procedures (one per control) (PROC-AI-CTRL-XXX)
- Control Testing Results (TEST-AI-CTRL-XXX)
- Control Effectiveness Report (quarterly) (RPT-AI-CTRL-001)

**Audit Verification:**
- Verify controls designed for all mitigated risks
- Confirm controls implemented and operational
- Validate control procedures documented
- Check control effectiveness tested
- Verify controls linked to risks in Risk Register

---

### Control RM-009: Residual Risk Assessment

**Control ID:** RM-009  
**Control Name:** Residual Risk Evaluation and Acceptance  
**Control Type:** Detective  
**Control Frequency:** After control implementation, before deployment  
**Risk Level:** High

#### Control Objective

Assess residual risk after control implementation and determine acceptability to ensure no unacceptable risks remain before deployment, protecting health, safety, and fundamental rights.

#### Control Requirements

**CR-009.1: Residual Risk Calculation and Acceptance**

Calculate residual risk for each mitigated risk and determine acceptability.

**Residual Risk Calculation:**

```
Residual Risk Score = Inherent Risk Score - Control Effectiveness

Where Control Effectiveness reduces:
- Likelihood (if preventive control)
- Impact (if detective or corrective control)
```

**Residual Risk Acceptability:**

| Residual Risk Level | Acceptable? | Action Required |
|---------------------|-------------|-----------------|
| Critical (20-25) | ❌ No | Additional controls required; cannot deploy |
| High (15-19) | ❌ No | Additional controls required |
| Medium (10-14) | ✅ Yes (with approval) | AI Risk Manager approval required |
| Low (5-9) | ✅ Yes | AI System Owner acceptance |
| Very Low (1-4) | ✅ Yes | Automatic acceptance |

**Mandatory Actions:**
- Calculate residual risk for each mitigated risk
- Assess residual risk acceptability
- Obtain required approvals for acceptance
- Document residual risk acceptance
- Update risk register with residual risk scores
- Block deployment if unacceptable residual risks remain

**Evidence Required:**
- Residual Risk Assessment Records (REC-AI-RM-011)
- Residual Risk Acceptance Records (REC-AI-RM-012)
- Residual Risk Report (per AI system) (RPT-AI-RM-007)

**Audit Verification:**
- Verify residual risk calculated for all mitigated risks
- Confirm residual risk acceptability determined
- Validate required approvals obtained
- Check residual risks documented in risk register
- Verify no unacceptable residual risks remain before deployment

---

### Control RM-010: Continuous Risk Monitoring

**Control ID:** RM-010  
**Control Name:** Continuous Risk Monitoring and Alerting  
**Control Type:** Detective  
**Control Frequency:** Continuous, monthly reviews  
**Risk Level:** Medium

#### Control Objective

Implement continuous monitoring of AI risks throughout the operational lifecycle to detect risk indicator threshold breaches, identify emerging risks, and enable timely risk response.

#### Control Requirements

**CR-010.1: Risk Monitoring Implementation**

Implement comprehensive risk monitoring using automated and manual approaches.

**Monitoring Approach:**

**A. Automated Monitoring**
- Real-time performance metrics
- Bias detection in production
- Anomaly detection
- Error rate monitoring
- Drift detection

**B. Periodic Reviews**
- Monthly risk indicator review
- Quarterly risk register review
- Annual comprehensive risk assessment

**C. Event-Triggered Reviews**
- Incident occurrence
- Substantial modification
- Regulatory changes
- New risk identification

**Risk Indicators (KRIs):**

| KRI | Metric | Threshold | Frequency | Alert Action |
|-----|--------|-----------|-----------|--------------|
| Model Accuracy | Accuracy % | < 95% | Daily | Alert AI System Owner |
| Bias Metric | Disparate Impact Ratio | < 0.8 or > 1.2 | Weekly | Alert AI Risk Manager |
| Error Rate | % of errors | > 5% | Daily | Alert Operations Team |
| Incident Count | # of incidents | > 0 serious incidents | Real-time | Immediate escalation |
| Drift Detection | Statistical drift score | > 0.1 | Weekly | Alert Data Science Team |
| Human Override Rate | % of AI decisions overridden | > 10% | Weekly | Alert AI System Owner |

**Mandatory Actions:**
- Define risk indicators for each AI system
- Implement automated monitoring
- Set up alerting for threshold breaches
- Review risk indicators monthly
- Escalate threshold breaches per escalation criteria
- Document monitoring results

**Evidence Required:**
- Risk Monitoring Configuration (CFG-AI-RM-001)
- Risk Indicator Monitoring Logs (REC-AI-RM-013)
- Monthly Risk Monitoring Report (RPT-AI-RM-008)
- Risk Threshold Breach Records (REC-AI-RM-014)

**Audit Verification:**
- Verify risk indicators defined for all AI systems
- Confirm automated monitoring implemented
- Check monitoring reviewed monthly
- Validate threshold breaches escalated
- Verify monitoring results documented

---

### Control RM-011: Periodic Risk Reviews

**Control ID:** RM-011  
**Control Name:** Periodic Comprehensive Risk Reviews  
**Control Type:** Detective  
**Control Frequency:** Monthly, quarterly, annually, post-incident  
**Risk Level:** Medium

#### Control Objective

Conduct periodic comprehensive risk reviews to ensure risk register remains current, controls remain effective, and emerging risks are identified and addressed.

#### Control Requirements

**CR-011.1: Risk Review Schedule and Execution**

Conduct risk reviews per defined schedule with appropriate participants.

**Review Frequency:**

| Review Type | Frequency | Participants | Output |
|-------------|-----------|--------------|--------|
| **AI System Owner Review** | Monthly | AI System Owner, AI Risk Manager | Updated risk register |
| **Risk Register Review** | Quarterly | AI Risk Manager, AI Governance Committee | Risk register approval |
| **Comprehensive Risk Assessment** | Annually | All stakeholders | Updated risk assessment report |
| **Post-Incident Review** | After each incident | Incident team, AI Risk Manager | Incident risk analysis |

**Review Agenda:**

1. **Review Risk Register**
   - New risks identified?
   - Risk scores changed?
   - Controls effective?
   - Residual risks acceptable?

2. **Review Risk Indicators**
   - Any threshold breaches?
   - Trends identified?
   - Action needed?

3. **Review Incidents**
   - Any incidents occurred?
   - Root causes identified?
   - Controls updated?

4. **Review Regulatory Changes**
   - Any new requirements?
   - Impact on risk profile?
   - Updates needed?

5. **Action Items**
   - Assign owners
   - Set target dates
   - Track completion

**Mandatory Actions:**
- Schedule periodic risk reviews
- Prepare risk review materials
- Conduct risk review meetings
- Document review outcomes
- Track action items to completion
- Update risk register based on review

**Evidence Required:**
- Risk Review Meeting Minutes (REC-AI-RM-015)
- Quarterly Risk Review Report (RPT-AI-RM-009)
- Risk Review Action Item Tracker (REC-AI-RM-016)

**Audit Verification:**
- Verify reviews conducted per schedule
- Confirm all required participants attend
- Check review outcomes documented
- Validate action items assigned and tracked
- Verify risk register updated based on review

---

### Control RM-012: Risk Management Effectiveness Assessment

**Control ID:** RM-012  
**Control Name:** Risk Management System Effectiveness Evaluation  
**Control Type:** Detective  
**Control Frequency:** Annually  
**Risk Level:** Medium

#### Control Objective

Assess the effectiveness of the AI risk management system annually to identify improvement opportunities, ensure continuous improvement, and demonstrate risk management maturity.

#### Control Requirements

**CR-012.1: Effectiveness Metrics and Assessment**

Assess risk management effectiveness using defined metrics and improvement process.

**Effectiveness Metrics:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Risk Identification Coverage | 100% of AI systems | % of AI systems with risk assessment |
| Risk Assessment Timeliness | 100% on time | % of assessments completed by target date |
| Control Implementation Rate | 100% for High/Critical | % of planned controls implemented |
| Control Effectiveness | ≥ 90% | % of controls achieving objectives |
| Residual Risk Acceptance | 0 unacceptable risks | # of unacceptable residual risks |
| Incident Rate | < 5 per year | # of risk-related incidents |
| Risk Review Completion | 100% | % of scheduled reviews completed |

**Assessment Process:**

1. **Collect Metrics**
   - Gather data from risk register
   - Collect monitoring data
   - Review incident reports
   - Survey stakeholders

2. **Analyze Performance**
   - Compare to targets
   - Identify trends
   - Benchmark against industry
   - Identify gaps

3. **Report Findings**
   - Prepare effectiveness report
   - Present to AI Governance Committee
   - Escalate issues
   - Recommend improvements

4. **Implement Improvements**
   - Update risk management framework
   - Enhance controls
   - Improve processes
   - Train stakeholders

**Mandatory Actions:**
- Define effectiveness metrics
- Collect metric data quarterly
- Conduct annual effectiveness assessment
- Report to AI Governance Committee
- Implement improvement actions
- Update risk management framework

**Evidence Required:**
- Annual Risk Management Effectiveness Report (RPT-AI-RM-010)
- Risk Management Metrics Dashboard (REC-AI-RM-017)
- Risk Management Improvement Action Tracker (REC-AI-RM-018)

**Audit Verification:**
- Verify effectiveness assessment conducted annually
- Confirm all metrics measured
- Check report presented to AI Governance Committee
- Validate improvement actions identified and implemented
- Verify framework updated based on findings

---

### Control RM-013: Risk Reporting

**Control ID:** RM-013  
**Control Name:** Risk Reporting and Escalation  
**Control Type:** Detective  
**Control Frequency:** Real-time, monthly, quarterly, annually, ad-hoc  
**Risk Level:** Medium

#### Control Objective

Report AI risks to appropriate stakeholders per defined frequency and escalation criteria to ensure timely risk awareness, enable informed decision-making, and support regulatory compliance.

#### Control Requirements

**CR-013.1: Risk Reporting Structure**

Generate and distribute risk reports per defined schedule and escalation criteria.

**Reporting Structure:**

| Report | Audience | Frequency | Content |
|--------|----------|-----------|---------|
| **Risk Dashboard** | AI System Owners | Real-time | Risk indicators, alerts |
| **Monthly Risk Report** | AI Risk Manager, Product Directors | Monthly | Risk register summary, new risks, incidents |
| **Quarterly Risk Report** | AI Governance Committee | Quarterly | Risk profile, trends, effectiveness metrics |
| **Annual Risk Report** | Executive Committee, Board | Annually | Comprehensive risk assessment, strategy |
| **Incident Risk Report** | AI Governance Committee, Legal | Ad-hoc | Incident analysis, root cause, actions |

**Escalation Criteria:**

| Risk Level | Escalation Path | Timeframe |
|------------|----------------|-----------|
| Critical (20-25) | Immediate escalation to AI Governance Committee | Within 24 hours |
| High (15-19) | Escalation to Product Director + AI Risk Manager | Within 3 days |
| Medium (10-14) | Report to AI Risk Manager | Within 1 week |
| Serious Incident | Immediate escalation to AI Governance Committee + Legal | Immediate |

**Mandatory Actions:**
- Generate risk reports per schedule
- Distribute reports to stakeholders
- Escalate risks per criteria
- Track escalation response
- Archive risk reports (10-year retention)

**Evidence Required:**
- Monthly Risk Report (RPT-AI-RM-011)
- Quarterly Risk Report to AI Governance Committee (RPT-AI-RM-012)
- Annual Risk Report to Board (RPT-AI-RM-013)
- Risk Escalation Records (REC-AI-RM-019)

**Audit Verification:**
- Verify reports generated per schedule
- Confirm reports distributed to correct audiences
- Check escalations made per criteria
- Validate escalation responses documented
- Verify reports archived for audit trail

---

### Control RM-014: Stakeholder Risk Communication

**Control ID:** RM-014  
**Control Name:** Stakeholder Risk Communication  
**Control Type:** Preventive  
**Control Frequency:** At deployment, continuous, as required  
**Risk Level:** Medium

#### Control Objective

Communicate AI risks to relevant stakeholders including deployers, users, and affected persons to ensure transparency, enable informed use, and comply with EU AI Act transparency obligations.

#### Control Requirements

**CR-014.1: Stakeholder Communication Plan and Delivery**

Develop and deliver risk communications to all relevant stakeholders.

**Stakeholder Communication:**

| Stakeholder | Communication Method | Content | Frequency |
|-------------|---------------------|---------|-----------|
| **Deployers** | Instructions for Use | Known risks, limitations, mitigation measures | At deployment |
| **End Users** | User documentation, UI notices | Transparency about AI use, limitations | Continuous |
| **Affected Persons** | Privacy notices, transparency statements | How AI affects them, rights | At interaction |
| **Regulators** | Regulatory submissions | Risk assessments, incidents | As required |
| **Internal Teams** | Risk briefings, training | Risk awareness, responsibilities | Quarterly |

**Communication Requirements:**

**A. Instructions for Use (Article 13)**
- Intended purpose and limitations
- Known risks and mitigation measures
- Human oversight requirements
- Expected level of accuracy
- Circumstances that may lead to risks

**B. Transparency Notices (Article 50)**
- Clear disclosure of AI use
- Explanation of AI decision-making
- User rights (e.g., human review)

**C. Incident Communications (Article 73)**
- Serious incident notifications to authorities
- User communications about incidents
- Corrective actions taken

**Mandatory Actions:**
- Develop stakeholder communication plan
- Create communication materials
- Deliver communications per plan
- Track communication delivery
- Update communications when risks change

**Evidence Required:**
- Risk Communication Procedure (PROC-AI-RM-004)
- Instructions for Use (per AI system) (TECH-AI-XXX)
- Stakeholder Communication Records (REC-AI-RM-020)
- Regulatory Risk Communications (CORR-AI-RM-001)

**Audit Verification:**
- Verify communication plan defined for all stakeholders
- Confirm communications delivered per plan
- Check Instructions for Use provided to deployers
- Validate transparency notices provided to users
- Verify regulatory communications made as required

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-RM-001: AI Risk Assessment Procedure

**Purpose:** Define step-by-step process for conducting AI risk assessments  
**Owner:** AI Risk Manager  
**Implements:** Controls RM-004, RM-005, RM-006

**Procedure Steps:**
1. Initiate risk assessment
2. Assemble risk assessment team
3. Identify risks (use checklist) - Control RM-004
4. Analyze risks (likelihood + impact) - Control RM-005
5. Evaluate risks (risk score + level) - Control RM-005
6. Conduct bias assessment - Control RM-006
7. Document risks in risk register - Control RM-003
8. Obtain risk assessment approval

**Outputs:**
- Risk Assessment Report
- Updated Risk Register
- Bias Assessment Report
- Approval records

---

### Procedure PROC-AI-RM-002: AI Risk Treatment Procedure

**Purpose:** Define process for selecting and implementing risk treatment measures  
**Owner:** AI Risk Manager  
**Implements:** Controls RM-007, RM-008, RM-009

**Procedure Steps:**
1. Review identified risks
2. Select treatment strategy - Control RM-007
3. Design risk controls - Control RM-008
4. Obtain treatment approval
5. Implement controls - Control RM-008
6. Test control effectiveness
7. Assess residual risk - Control RM-009
8. Obtain residual risk acceptance

**Outputs:**
- Risk Treatment Plan
- Controls Register
- Residual Risk Assessment
- Acceptance records

---

### Procedure PROC-AI-RM-003: AI Risk Monitoring Procedure

**Purpose:** Define process for continuous risk monitoring and periodic reviews  
**Owner:** AI Risk Manager  
**Implements:** Controls RM-010, RM-011, RM-012

**Procedure Steps:**
1. Define risk indicators - Control RM-010
2. Configure monitoring
3. Monitor indicators continuously
4. Conduct periodic reviews - Control RM-011
5. Escalate threshold breaches
6. Update risk register
7. Report monitoring results
8. Conduct annual effectiveness assessment - Control RM-012

**Outputs:**
- Risk Monitoring Reports
- Risk Review Reports
- Effectiveness Assessment Report

---

### Procedure PROC-AI-RM-004: AI Risk Communication Procedure

**Purpose:** Define process for communicating risks to stakeholders  
**Owner:** AI Risk Manager  
**Implements:** Controls RM-013, RM-014

**Procedure Steps:**
1. Identify stakeholders
2. Determine communication requirements
3. Develop communication materials - Control RM-014
4. Deliver communications
5. Generate risk reports - Control RM-013
6. Track communication delivery
7. Update communications as needed

**Outputs:**
- Communication materials
- Risk reports
- Communication delivery records

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Risk Assessment Coverage | 100% | % of AI systems with current risk assessment | Monthly | AI Risk Manager |
| Risk Assessment Timeliness | 100% | % of assessments completed by target date | Monthly | AI Risk Manager |
| High/Critical Risk Treatment | 100% | % of high/critical risks with approved treatment plans | Monthly | AI Risk Manager |
| Control Implementation | 100% | % of planned controls implemented | Monthly | AI Risk Manager |
| Residual Risk Acceptance | 100% | % of residual risks accepted (no unacceptable risks) | Monthly | AI Risk Manager |
| Risk Review Completion | 100% | % of scheduled reviews completed on time | Quarterly | AI Risk Manager |
| Risk Reporting Timeliness | 100% | % of reports generated per schedule | Monthly | AI Risk Manager |
| Effectiveness Assessment | 100% | Annual effectiveness assessment completed | Annually | AI Risk Manager |

**Monitoring Tools:**
- Risk Register Dashboard (real-time)
- Risk Monitoring Dashboard
- Automated alerts for threshold breaches
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Risk management framework completeness and effectiveness
- Risk register accuracy and completeness
- Risk assessment quality (sample-based testing)
- Risk treatment implementation
- Control effectiveness
- Risk monitoring and review completion
- Risk reporting accuracy and timeliness
- Controls effectiveness (RM-001 through RM-014)

**Audit Activities:**
- Review 100% of Risk Register for completeness
- Sample 20% of risk assessments for detailed quality review
- Test controls through transaction sampling
- Interview key personnel (AI Risk Manager, AI System Owners)
- Review AI Governance Committee meeting minutes
- Test risk monitoring effectiveness
- Verify risk reporting accuracy

**Audit Outputs:**
- Annual Risk Management Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready risk documentation at all times
- Designate AI Risk Manager and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- AI Risk Register (REC-AI-RM-003)
- Sample risk assessment reports
- Risk treatment plans
- Risk monitoring reports
- Risk management procedures (PROC-AI-RM-001 through -004)
- Internal audit reports
- AI Governance Committee meeting minutes (relevant to risk management)
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested documentation within 5 business days
- Coordinate through Legal and AI Risk Manager
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | AI Risk Manager | AI System Owner | Product Director | AI Governance Committee | Legal & Compliance | Data Science | Internal Audit |
|----------|----------------|-----------------|------------------|------------------------|-------------------|--------------|----------------|
| **Risk Framework Establishment** | **R/A** | C | C | I | C | I | I |
| **Risk Identification** | **R** | **A** | C | I | C | C | I |
| **Risk Assessment** | **R** | **A** | C | I | C | C | I |
| **Bias Assessment** | **R** | **A** | I | I | C | **R** | I |
| **Risk Treatment Selection** | **R** | **A** | **A** | I | C | I | I |
| **Control Implementation** | **R** | **A** | C | I | I | **R** | I |
| **Residual Risk Acceptance** | **R/A** | **A** | C | I | C | I | I |
| **Risk Monitoring** | **R** | **A** | I | I | I | C | I |
| **Risk Reviews** | **R** | **A** | C | I | I | I | I |
| **Risk Reporting** | **R** | C | I | **A** | I | I | I |
| **Stakeholder Communication** | **R** | C | C | I | C | I | I |
| **Risk Register Management** | **R/A** | C | I | I | I | I | I |
| **Internal Audit** | C | I | I | I | I | I | **R/A** |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**AI Risk Manager**
- **Primary Responsibility:** Owns risk management framework, coordinates risk assessments, maintains risk register
- **Key Activities:**
  - Implements risk management framework
  - Maintains AI risk register
  - Coordinates risk assessments
  - Reports risk metrics
  - Provides risk management training
  - Conducts effectiveness assessments
- **Required Competencies:** Risk management expertise, EU AI Act knowledge, ISO 31000, NIST AI RMF

**AI System Owner**
- **Primary Responsibility:** Accountable for risk management of their AI system
- **Key Activities:**
  - Conducts risk assessments for their AI systems
  - Implements risk controls
  - Monitors risk indicators
  - Reports risk incidents
  - Accepts low and very low risks
- **Required Competencies:** AI system knowledge, risk assessment basics

**Product Directors**
- **Primary Responsibility:** Accountable for AI risks in their products
- **Key Activities:**
  - Ensure risk assessments conducted
  - Approve risk treatment for high risks
  - Allocate resources for risk mitigation
  - Escalate unacceptable risks
- **Required Competencies:** Product management, risk awareness

**AI Governance Committee**
- **Primary Responsibility:** Approves risk management framework, reviews high/critical risks, oversees effectiveness
- **Key Activities:**
  - Approves risk management framework
  - Reviews high and critical risks quarterly
  - Approves risk treatment for critical risks
  - Oversees risk management effectiveness
- **Authority:** Final approval for critical risk treatment

**Data Science / AI Engineering**
- **Primary Responsibility:** Identify technical risks, implement technical controls
- **Key Activities:**
  - Identify technical risks
  - Implement technical risk controls
  - Test control effectiveness
  - Monitor technical risk indicators
  - Conduct bias assessments
- **Required Competencies:** Technical AI expertise, bias detection, fairness metrics

**Legal & Compliance**
- **Primary Responsibility:** Advise on compliance risks, review risk assessments
- **Key Activities:**
  - Advise on compliance risks
  - Review risk assessments
  - Support incident investigations
  - Manage regulatory communications
- **Required Competencies:** EU AI Act legal expertise, regulatory compliance

**Internal Audit**
- **Primary Responsibility:** Audit risk management framework, test control effectiveness
- **Key Activities:**
  - Audit risk management framework
  - Test control effectiveness
  - Report audit findings
- **Required Competencies:** Audit expertise, risk management knowledge

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Risk management is a **critical regulatory compliance activity** for high-risk AI systems. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Simplified Risk Assessment (Minimal-Risk AI)** | AI system clearly minimal-risk; no significant risks identified | Permanent | AI Risk Manager | Document simplified rationale; Annual re-confirmation |
| **Extended Risk Review Timeline** | Resource constraints prevent timely review | 3 months extension | AI Governance Committee Chair | Prioritize high-risk systems; Interim monitoring |
| **Deferred Control Implementation** | Technical constraints prevent immediate implementation | 30 days | Product Director + AI Risk Manager | Interim risk mitigation; Accelerated implementation plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping risk assessment for high-risk AI** - Mandatory per Article 9, no exceptions  
❌ **Deploying with unacceptable residual risks** - Regulatory violation, safety risk  
❌ **Ignoring critical/high risk escalation** - Creates compliance gaps, safety risk  
❌ **Operating without risk monitoring** - Required for continuous risk management  
❌ **Skipping bias assessment** - Required per Article 10(5) for high-risk AI  

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
- AI Risk Manager approval: Minor exceptions (simplified assessment)
- Product Director + AI Risk Manager: Significant exceptions (deferred controls)
- AI Governance Committee Chair: Extended timelines

**Step 4: Documentation and Monitoring**
- Document exception in Exception Register
- Assign exception owner
- Set review date
- Monitor compensating controls
- Report exceptions quarterly to AI Governance Committee

**Step 5: Exception Review and Closure**
- Review exception at specified review date
- Assess if exception still needed
- Close exception when normal risk management completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **High-risk AI without risk assessment** | Critical | Immediate suspension until risk assessment completed | Complete risk assessment within 10 business days; Root cause analysis |
| **Deploying with unacceptable residual risks** | Critical | Immediate halt deployment; Compliance gap assessment | Implement additional controls; Re-assess residual risk; Re-approval required |
| **Missing risk monitoring** | High | Escalation to AI Governance Committee; Freeze on new features | Implement monitoring within 5 business days |
| **Late risk review** | Medium | Written warning; Escalation to management | Complete review within 10 business days |
| **Incomplete risk register** | Medium | Written warning | Complete risk register within 5 business days |
| **Missing risk reports** | Low | Written warning | Generate missing reports immediately |

---

### 8.2 Escalation Procedures

**Level 1: AI Risk Manager**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: Product Director + AI Risk Manager**
- Repeated violations
- Missing risk assessments
- Deferred control implementation
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- High-risk AI without risk assessment
- Unacceptable residual risks
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
- ⚠️ High-risk AI system operating without risk assessment
- ⚠️ Unacceptable residual risks identified in production
- ⚠️ Critical risk threshold breach
- ⚠️ Regulatory inquiry or inspection related to risk management
- ⚠️ Potential serious incident (Article 73) related to risk management failure

---

### 8.4 Disciplinary Actions

Individuals responsible for risk management violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly deploying with unacceptable risks)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Risk Management KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-RM-001** | Risk Assessment Coverage | % of AI systems with current risk assessment | 100% | (# AI systems with risk assessment / # total AI systems) × 100 | Monthly | AI Risk Manager | AI Governance Committee |
| **KPI-RM-002** | Risk Assessment Timeliness | % of risk assessments completed by target date | 100% | (# assessments on time / # total assessments) × 100 | Monthly | AI Risk Manager | Management |
| **KPI-RM-003** | High/Critical Risk Treatment | % of high/critical risks with approved treatment plans | 100% | (# high/critical risks with treatment / # high/critical risks) × 100 | Monthly | AI Risk Manager | AI Governance Committee |
| **KPI-RM-004** | Control Implementation Rate | % of planned controls implemented | 100% | (# controls implemented / # planned controls) × 100 | Monthly | AI Risk Manager | Management |
| **KPI-RM-005** | Residual Risk Acceptance | % of residual risks acceptable (0 unacceptable) | 100% | (# acceptable residual risks / # total residual risks) × 100 | Monthly | AI Risk Manager | AI Governance Committee |
| **KPI-RM-006** | Risk Review Completion | % of scheduled reviews completed on time | 100% | (# reviews completed on time / # scheduled reviews) × 100 | Quarterly | AI Risk Manager | AI Governance Committee |
| **KPI-RM-007** | Risk Monitoring Coverage | % of AI systems with active risk monitoring | 100% | (# AI systems with monitoring / # total AI systems) × 100 | Monthly | AI Risk Manager | Management |
| **KPI-RM-008** | Risk Indicator Threshold Breaches | Number of threshold breaches per month | < 5 | Count of threshold breaches | Monthly | AI Risk Manager | AI Governance Committee |
| **KPI-RM-009** | Risk Reporting Timeliness | % of risk reports generated per schedule | 100% | (# reports on time / # scheduled reports) × 100 | Monthly | AI Risk Manager | Management |
| **KPI-RM-010** | Risk Management Effectiveness | Overall risk management system effectiveness score | ≥ 90% | Composite score from effectiveness metrics | Annually | AI Risk Manager | AI Governance Committee |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (AI Risk Manager access)
- Current risk assessment coverage
- Risk register status
- Active risk indicators
- Threshold breach alerts
- High/critical risk inventory

**Monthly Management Report**
- KPI-RM-001, 002, 003, 004, 005, 007, 009
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- High/critical risk inventory and status
- Risk review completion status
- Effectiveness assessment results
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- Risk management maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Risk Assessment Coverage** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Risk Assessment Timeliness** | 100% | 90-99% | < 90% | Red: Escalate to AI Governance Committee |
| **High/Critical Risk Treatment** | 100% | 90-99% | < 90% | Red: Halt high-risk AI deployments until treated |
| **Residual Risk Acceptance** | 100% (0 unacceptable) | 1-2 unacceptable | > 2 unacceptable | Red: Immediate escalation to Executive Management |
| **Risk Review Completion** | 100% | 90-99% | < 90% | Yellow: Accelerate reviews; Red: Freeze new AI deployments |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in AI risk management must complete role-specific training to ensure competency in risk management methodologies, EU AI Act requirements, and risk management procedures.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **AI Risk Manager** | Risk Management Expert Training | 24 hours | Risk management frameworks (ISO 31000, NIST AI RMF); EU AI Act Article 9; Risk assessment methodology; Bias assessment; Control design; Effectiveness assessment | Initial + annually | Yes - Written exam (≥90%) + Practical risk assessment exercise |
| **AI System Owners** | Risk Management Fundamentals | 8 hours | Risk identification; Risk assessment basics; Risk treatment; Risk monitoring; Responsibilities | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **Data Scientists / AI Engineers** | Technical Risk and Bias Assessment | 12 hours | Technical risk identification; Bias detection; Fairness metrics; Control implementation; Monitoring | Initial + annually | Yes - Practical bias assessment exercise |
| **Product Directors** | Risk Management for Leaders | 6 hours | Risk management overview; High/critical risk approval; Resource allocation; Escalation | Initial + annually | Yes - Knowledge check (≥80%) |
| **Legal & Compliance** | Compliance Risk Assessment | 4 hours | Compliance risks; Regulatory requirements; Risk reporting to authorities | Initial + annually | Yes - Knowledge check (≥80%) |
| **All AI Development Staff** | Risk Awareness | 2 hours | Risk categories; How to identify risks; Escalation procedures | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**Risk Management Fundamentals**
- Risk management framework overview
- Risk identification techniques
- Risk assessment methodology (likelihood × impact)
- Risk treatment strategies
- Risk monitoring and review

**EU AI Act Article 9 Requirements**
- Continuous and iterative risk management
- Known and foreseeable risk identification
- Risk estimation and evaluation
- Risk management measures
- Testing risk management measures

**Bias and Discrimination Risk Assessment**
- Protected characteristics
- Bias types (historical, representation, algorithmic, output, deployment)
- Fairness metrics (demographic parity, equal opportunity, etc.)
- Bias detection methods
- Bias mitigation techniques

**Risk Assessment Methodology**
- Likelihood assessment (1-5 scale)
- Impact assessment (1-5 scale)
- Risk score calculation
- Risk level classification
- Risk prioritization

**Risk Treatment and Controls**
- Treatment strategies (avoid, mitigate, transfer, accept)
- Control types (preventive, detective, corrective)
- Control design and implementation
- Control effectiveness testing
- Residual risk assessment

**Risk Monitoring and Review**
- Risk indicators (KRIs)
- Automated monitoring
- Periodic reviews
- Effectiveness assessment
- Continuous improvement

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with risk assessment tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent risk assessments
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new AI Risk Managers
- Job shadowing during risk assessment process
- Supervised risk assessments for first 5 AI systems

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced risk managers

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- AI Risk Managers: Must correctly assess 5 sample AI systems with 100% accuracy before independent risk assessment
- AI System Owners: Must demonstrate understanding of risk categories and their responsibilities
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (AI Risk Managers) | < 45 days | Per person |

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
| **Inherent Risk** | Risk level before any controls are applied | ISO 31000:2018 |
| **Residual Risk** | Risk level after controls are applied | ISO 31000:2018 |
| **Risk Appetite** | Amount of risk the organization is willing to accept | ISO 31000:2018 |
| **Risk Tolerance** | Maximum acceptable level of risk | ISO 31000:2018 |
| **Control** | Measure that modifies risk (preventive, detective, corrective) | ISO 31000:2018 |
| **Risk Owner** | Person accountable for managing a specific risk | ISO 31000:2018 |
| **Risk Register** | Centralized database of all identified risks maintained by the organization | This Standard |
| **Risk Indicator (KRI)** | Metric used to monitor risk levels and detect threshold breaches | This Standard |
| **Bias** | Systematic error or unfairness in data or model outputs that leads to discriminatory outcomes | EU AI Act Article 10(5) |
| **Fairness Metric** | Quantitative measure of fairness across protected characteristics (e.g., demographic parity, equal opportunity) | This Standard |
| **Disparate Impact** | When AI system outcomes differ significantly across protected groups | This Standard |
| **Protected Characteristics** | Personal characteristics protected from discrimination (race, gender, age, disability, etc.) | GDPR Article 9 |
| **Risk Treatment** | Process of selecting and implementing strategies to address identified risks (avoid, mitigate, transfer, accept) | ISO 31000:2018 |
| **Control Effectiveness** | Measure of how well a control achieves its objective in reducing risk | This Standard |
| **Risk Monitoring** | Continuous observation of risk indicators to detect changes and threshold breaches | This Standard |
| **Risk Review** | Periodic comprehensive assessment of risk register, controls, and risk management effectiveness | This Standard |
| **Instructions for Use** | Documentation provided to deployers containing known risks, limitations, and mitigation measures | EU AI Act Article 13 |
| **Transparency Notice** | Disclosure to users that they are interacting with AI and explanation of AI decision-making | EU AI Act Article 50 |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Risk Management System** | Article 9(1) | Continuous and iterative risk management system | RM-001, RM-002 |
| **Risk Identification** | Article 9(2) | Identify known and reasonably foreseeable risks | RM-004 |
| **Risk Estimation and Evaluation** | Article 9(3) | Estimate and evaluate risks | RM-005 |
| **Risk Management Measures** | Article 9(4) | Adopt risk management measures | RM-007, RM-008 |
| **Testing Risk Management Measures** | Article 9(5) | Test risk management measures | RM-008, RM-009 |
| **Iterative Risk Management** | Article 9(6) | Iterative risk management throughout lifecycle | RM-002, RM-010, RM-011 |
| **Bias Examination** | Article 10(5) | Examine training data for bias | RM-006 |
| **Instructions for Use** | Article 13 | Provide known risks and limitations to deployers | RM-014 |
| **Transparency Obligations** | Article 50 | Disclose AI use and explain decisions | RM-014 |
| **Incident Reporting** | Article 73 | Report serious incidents (risk-related) | RM-013 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 (Artificial Intelligence Management System) as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 6.1: Actions to address risks and opportunities** | Risk-based approach to AI management | All controls (RM-001 through RM-014) |
| **Clause 6.1.2: AI system impact assessment** | Assess AI systems for risks to individuals, groups, society, environment | RM-004, RM-005, RM-006 |
| **Clause 8.2: AI system risk assessment** | Establish process for AI risk assessment throughout lifecycle | RM-002, RM-004, RM-005 |
| **Clause 9.1: Monitoring, measurement, analysis, and evaluation** | Monitor and measure AI management system performance | RM-010, RM-011, RM-012 |
| **Clause 9.2: Internal audit** | Conduct internal audits | Compliance Section 5.2 |
| **Clause 9.3: Management review** | Conduct management reviews | RM-011, RM-012 |
| **Clause 10.1: Nonconformity and corrective action** | Address nonconformities | Enforcement Section 8 |
| **Clause 10.2: Continual improvement** | Continually improve AI management system | RM-012 |

---

### 12.3 ISO 31000:2018 Alignment

This standard aligns with ISO 31000:2018 (Risk Management) as follows:

| ISO 31000 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 5: Risk management framework** | Establish risk management framework | RM-001 |
| **Clause 6: Risk assessment process** | Risk identification, analysis, evaluation | RM-004, RM-005 |
| **Clause 6.4: Risk treatment** | Select and implement risk treatment | RM-007, RM-008, RM-009 |
| **Clause 6.5: Monitoring and review** | Monitor and review risks | RM-010, RM-011 |
| **Clause 7: Continual improvement** | Improve risk management | RM-012 |

---

### 12.4 NIST AI RMF Alignment

This standard aligns with NIST AI Risk Management Framework 1.0 as follows:

| NIST AI RMF Function | Requirement | Implementation in This Standard |
|---------------------|-------------|-------------------------------|
| **Map** | Risk identification and categorization | RM-004 |
| **Measure** | Risk measurement and assessment | RM-005, RM-006 |
| **Manage** | Risk treatment and control implementation | RM-007, RM-008, RM-009 |
| **Govern** | Risk governance and oversight | RM-001, RM-011, RM-012, RM-013 |

---

### 12.5 Relationship to Other Standards

This risk management standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines risk level and compliance obligations | High-risk AI requires full risk management |
| **STD-AI-003: Data Governance** | Bias risk assessment (RM-006) uses data governance outputs | Data quality and bias analysis feed into risk assessment |
| **STD-AI-008: Accuracy, Robustness, Security** | Technical risks identified in risk assessment | Risk controls may include accuracy/robustness/security measures |
| **STD-AI-013: Incident Management** | Incidents trigger risk reassessment | Incident analysis feeds into risk register updates |

---

### 12.6 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 9: Risk Management System
- Article 10(5): Bias Examination
- Article 13: Instructions for Use
- Article 50: Transparency Obligations
- Article 73: Incident Reporting

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system
- ISO/IEC 23894:2023: Information technology — Artificial intelligence — Guidance on risk management
- ISO 31000:2018: Risk management — Guidelines

**External Frameworks:**
- NIST AI Risk Management Framework 1.0
- COSO Enterprise Risk Management Framework

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-003: AI Data Governance Standard
- PROC-AI-RM-001 through PROC-AI-RM-004: Risk management procedures

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Michael Chen | AI Risk Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer (CSRO) | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | David Lee | Chief Technology Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-002**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the AI Risk Manager.*
