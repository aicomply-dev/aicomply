# PROC-AI-ARS-001: AI Accuracy, Robustness and Cybersecurity Procedure

**Procedure ID:** PROC-AI-ARS-001
**Procedure Name:** AI Accuracy, Robustness and Cybersecurity Procedure
**Standard:** STD-AI-003: AI Accuracy, Robustness and Cybersecurity Standard
**Covers Controls:** ARS-001, ARS-002, ARS-003, ARS-004, ARS-005, ARS-006, ARS-007, ARS-008
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the step-by-step process for ensuring AI systems achieve appropriate levels of accuracy, robustness, and cybersecurity throughout their lifecycle in compliance with EU AI Act Article 15. It defines how to establish accuracy requirements, conduct robustness testing, detect model drift, assess AI-specific threats, and maintain resilience against errors, faults, and cyber attacks.

### 1.2 Scope

This procedure applies to:
- All AI systems classified as high-risk per STD-AI-001
- All AI systems that make automated decisions affecting individuals
- All AI systems processing sensitive or personal data
- All AI system development, testing, deployment, and operational phases

This procedure does not apply to:
- Minimal-risk AI systems (unless specifically requested)
- Third-party AI systems where provider maintains ARS responsibilities (covered by PROC-AI-VENDOR-001)
- Non-AI software systems (covered by standard IT security procedures)

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Quality Assurance Lead | [Email/Phone] |
| **Escalation** | [Name] | Chief Technology Officer | [Email/Phone] |
| **Cybersecurity** | [Name] | Chief Information Security Officer | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|---|---|
| **AI Quality Assurance Lead** | Own and execute ARS process; define accuracy requirements; coordinate testing | Approve accuracy thresholds; approve testing plans; escalate critical issues |
| **Data Scientist/ML Engineer** | Implement accuracy metrics; conduct robustness testing; implement technical controls | Execute testing; implement improvements; recommend thresholds |
| **AI Security Engineer** | Assess AI-specific threats; implement cybersecurity controls; conduct adversarial testing | Approve security controls; block insecure deployments |
| **ML Ops Engineer** | Implement production monitoring; detect drift; maintain model performance | Deploy monitoring; trigger alerts; execute retraining |
| **AI System Owner** | Define acceptable accuracy levels for use case; accept residual ARS risks | Accept residual risks within tolerance |
| **Chief Technology Officer** | Oversight of ARS program; approve critical decisions; resource allocation | Escalate to Board; approve major threshold changes |
| **Compliance Officer** | Verify regulatory compliance; audit ARS effectiveness | Challenge assessments; recommend improvements |

### 2.2 RACI Matrix

| Activity | QA Lead | Data Scientist | AI Security | ML Ops | System Owner | CTO | Compliance |
|----------|---|---|---|---|---|---|---|
| Accuracy requirements definition | A | R | I | I | C | C | C |
| Accuracy metric selection | C | A | I | R | C | I | C |
| Accuracy testing | A | R | I | R | C | I | I |
| Production accuracy monitoring | C | I | I | A | R | I | I |
| Robustness requirements | A | R | C | I | C | C | C |
| Robustness testing | C | A | R | R | I | I | I |
| Drift detection setup | C | R | I | A | I | I | I |
| Drift response execution | I | R | I | A | C | C | I |
| Threat assessment | C | R | A | I | C | C | C |
| Cybersecurity testing | C | I | A | R | I | C | I |
| Security control implementation | I | R | A | R | C | C | I |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. ARS FRAMEWORK

### 3.1 ARS System Components

The AI Accuracy, Robustness and Cybersecurity system consists of three integrated pillars with continuous monitoring:

```
┌─────────────────────────────────────────────────────────────┐
│       AI ACCURACY, ROBUSTNESS & CYBERSECURITY FRAMEWORK      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. ACCURACY PILLAR (Article 15(1))                         │
│     ├─ Accuracy Requirements Definition                     │
│     ├─ Metrics Selection & Thresholds                       │
│     ├─ Pre-Deployment Accuracy Testing                      │
│     ├─ Production Accuracy Monitoring                       │
│     └─ Accuracy Degradation Response                        │
│                                                              │
│  2. ROBUSTNESS PILLAR (Article 15(2))                       │
│     ├─ Robustness Requirements Definition                   │
│     ├─ Error & Fault Resilience Testing                     │
│     ├─ Technical Redundancy Implementation                  │
│     ├─ Model Drift Detection                                │
│     └─ Drift Response & Retraining                          │
│                                                              │
│  3. CYBERSECURITY PILLAR (Article 15(3)-(4))                │
│     ├─ AI Threat Landscape Assessment                       │
│     ├─ AI-Specific Vulnerability Analysis                   │
│     ├─ Security Controls Implementation                     │
│     ├─ Adversarial Attack Testing                           │
│     └─ Continuous Security Monitoring                       │
│                                                              │
│  4. CONTINUOUS IMPROVEMENT                                  │
│     ├─ Performance Trend Analysis                           │
│     ├─ Threshold Optimization                               │
│     ├─ Control Effectiveness Review                         │
│     └─ Framework Updates                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Accuracy Standards by AI System Type

Accuracy requirements vary by AI system type, use case criticality, and domain standards.

#### 3.2.1 Accuracy Dimensions

| Dimension | Definition | When Critical |
|---|---|---|
| **Predictive Accuracy** | Correctness of predictions vs. ground truth | Classification, regression models |
| **Precision** | Proportion of positive predictions that are correct | High cost of false positives |
| **Recall** | Proportion of actual positives correctly identified | High cost of false negatives |
| **F1 Score** | Harmonic mean of precision and recall | Balanced performance needed |
| **Calibration** | Alignment of predicted probabilities with actual outcomes | Probability-based decisions |
| **Consistency** | Stable performance across similar inputs | User trust, fairness |

#### 3.2.2 Minimum Accuracy Thresholds by Use Case

| Use Case Category | Minimum Accuracy | Rationale | Example Metrics |
|---|---|---|---|
| **Safety-Critical** | ≥ 99% | Human life/safety at stake | Accuracy, Recall |
| **Healthcare Diagnosis** | ≥ 95% | Medical decisions; regulatory requirements | Sensitivity, Specificity |
| **Financial Decision** | ≥ 90% | Financial impact; regulatory compliance | Precision, Accuracy |
| **Hiring/Employment** | ≥ 85% | Fundamental rights; discrimination risk | Accuracy, Fairness metrics |
| **Content Moderation** | ≥ 80% | Free expression vs. harm prevention | Precision, Recall balance |
| **Recommendation Systems** | ≥ 75% | User experience; business impact | Relevance, CTR |

**Note:** These are baseline minimums. Organizations must calibrate thresholds based on:
- Regulatory requirements in their sector
- Risk tolerance and risk assessment outcomes
- State-of-the-art performance benchmarks
- Human baseline performance for comparable tasks

#### 3.2.3 Accuracy Degradation Tolerance

Define acceptable degradation from baseline before triggering response:

| Alert Level | Degradation | Action Required | Timeline |
|---|---|---|---|
| Green | < 2% from baseline | Monitor | None |
| Yellow | 2-5% from baseline | Investigation | Within 5 business days |
| Orange | 5-10% from baseline | Mitigation plan | Within 2 business days |
| Red | > 10% from baseline | Immediate action | Within 24 hours |

### 3.3 Robustness Standards

Robustness ensures the AI system performs reliably under varying conditions, including errors, faults, and unexpected inputs.

#### 3.3.1 Robustness Dimensions

| Dimension | Definition | Testing Approach |
|---|---|---|
| **Input Robustness** | Performance with noisy, corrupted, or out-of-distribution inputs | Adversarial examples, noise injection |
| **Fault Tolerance** | Graceful degradation when components fail | Fault injection, component failure simulation |
| **Operational Resilience** | Continued operation under resource constraints | Load testing, resource throttling |
| **Temporal Stability** | Consistent performance over time | Long-duration testing, concept drift simulation |
| **Environmental Variability** | Performance across different conditions | Cross-environment testing |

#### 3.3.2 Technical Redundancy Requirements

Per Article 15(2), implement appropriate technical redundancy:

| Redundancy Type | Purpose | Implementation |
|---|---|---|
| **Model Ensemble** | Reduce single-point-of-failure risk | Multiple models voting or averaging |
| **Fallback Mechanisms** | Maintain service during failures | Rule-based backup, human escalation |
| **Data Redundancy** | Prevent data loss | Backup, replication |
| **Infrastructure Redundancy** | High availability | Multi-zone deployment, load balancing |
| **Monitoring Redundancy** | Reliable detection | Multiple monitoring systems |

#### 3.3.3 Drift Detection Standards

| Drift Type | Detection Method | Threshold | Action |
|---|---|---|---|
| **Feature Drift** | Population Stability Index (PSI) | PSI > 0.25 | Investigate; PSI > 0.50 retrain |
| **Prediction Drift** | Distribution comparison (KS test) | p-value < 0.05 | Investigate causes |
| **Performance Drift** | Accuracy decline | Per Section 3.2.3 | Tiered response |
| **Concept Drift** | Ground truth comparison | > 5% shift | Model update required |

### 3.4 Cybersecurity Standards

Cybersecurity protections must address both traditional IT threats and AI-specific vulnerabilities.

#### 3.4.1 AI-Specific Threat Categories

| Threat Category | Description | Article 15 Reference |
|---|---|---|
| **Data Poisoning** | Malicious corruption of training data | Article 15(3) |
| **Model Inversion** | Extracting training data from model | Article 15(3) |
| **Adversarial Examples** | Crafted inputs to fool model | Article 15(3) |
| **Model Stealing** | Replicating model through queries | Article 15(3) |
| **Membership Inference** | Determining if data was in training set | Article 15(3) |
| **Backdoor Attacks** | Trigger-based malicious behavior | Article 15(3) |

#### 3.4.2 Security Control Maturity Levels

| Level | Description | Requirements |
|---|---|---|
| **Level 1: Basic** | Minimum acceptable security | Standard IT controls; basic input validation |
| **Level 2: Managed** | Proactive security posture | AI-specific threat assessment; adversarial testing |
| **Level 3: Defined** | Comprehensive AI security | Continuous adversarial monitoring; red team exercises |
| **Level 4: Advanced** | Industry-leading security | Automated adversarial defense; formal verification |

**Minimum Required Level:**
- High-risk AI systems: Level 2 (Managed)
- Safety-critical AI systems: Level 3 (Defined)

### 3.5 AI-Specific Threat Landscape

Organizations must maintain awareness of evolving AI threats and update defenses accordingly.

#### 3.5.1 OWASP AI Security & Privacy Top 10 Integration

This procedure integrates defenses against OWASP AI Top 10 threats (see Appendix B for full catalog):

1. **Prompt Injection** - Malicious inputs to manipulate LLM behavior
2. **Insecure Output Handling** - Downstream consumption of AI outputs without validation
3. **Training Data Poisoning** - Backdoors, bias, or vulnerabilities via corrupted data
4. **Model Denial of Service** - Resource exhaustion attacks
5. **Supply Chain Vulnerabilities** - Compromised third-party components
6. **Sensitive Information Disclosure** - Leakage of confidential data
7. **Insecure Plugin Design** - Vulnerabilities in extensions
8. **Excessive Agency** - Uncontrolled AI actions
9. **Overreliance** - Insufficient oversight of AI decisions
10. **Model Theft** - Unauthorized access to proprietary models

#### 3.5.2 Threat Intelligence Integration

- **Internal Threat Log:** Maintain log of attempted attacks and near-misses
- **External Threat Feeds:** Subscribe to AI security advisories (OWASP, MITRE ATLAS, NIST)
- **Quarterly Threat Review:** Update threat assessment based on emerging threats
- **Cross-Reference with Risk Register:** Link threats to PROC-AI-RM-001 risk register

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: ACCURACY REQUIREMENTS AND METRICS (Controls ARS-001, ARS-002)

#### Step 1.1: Define Accuracy Requirements (Control ARS-001)

**When:** During AI system design phase, before model development

**Who:** AI Quality Assurance Lead + AI System Owner + Data Scientist

**How:**

1. **Understand Use Case and Decision Impact**
   - What decisions will the AI system make?
   - Who is affected by those decisions?
   - What are the consequences of incorrect decisions (false positives vs. false negatives)?
   - What is the acceptable error rate for this use case?

   **Example Questions:**
   - "What happens if the model incorrectly predicts a positive outcome?"
   - "What happens if the model misses a true positive?"
   - "Are false positives or false negatives more harmful?"
   - "What accuracy does a human expert achieve on the same task?"

2. **Identify Applicable Regulatory and Industry Standards**
   - Check for sector-specific accuracy requirements (medical devices, financial services, etc.)
   - Review relevant ISO, IEC, or domain standards
   - Consult with Compliance Officer on regulatory expectations
   - Document external benchmarks and state-of-the-art performance

   **Common Standards:**
   - Medical AI: FDA guidance on clinical validation
   - Financial AI: Model risk management guidance (SR 11-7)
   - Hiring AI: EEOC guidance on adverse impact
   - Autonomous vehicles: ISO 26262 safety standards

3. **Conduct Stakeholder Accuracy Workshops**
   - Schedule 2-hour workshop with cross-functional team
   - Participants: AI System Owner, Data Scientist, Domain Expert, End Users, Compliance
   - Discuss acceptable vs. unacceptable errors
   - Define accuracy requirements for different user populations
   - Document consensus on minimum acceptable accuracy

4. **Establish Baseline and Target Accuracy Levels**

   | Accuracy Level | Definition | Purpose |
   |---|---|---|
   | **Baseline** | Current performance (existing system or human) | Starting point for comparison |
   | **Minimum Acceptable** | Threshold below which system is unfit for purpose | Deployment gate criterion |
   | **Target** | Desired performance level | Development goal |
   | **State-of-the-Art** | Best known performance in research/industry | Stretch goal; context |

   **Example:**
   - Baseline: 78% (current manual process accuracy)
   - Minimum Acceptable: 85% (must improve on baseline)
   - Target: 90% (competitive with industry)
   - State-of-the-Art: 93% (research benchmark)

5. **Define Accuracy Requirements by Subpopulation**
   - If the system affects multiple demographic groups, define accuracy requirements per group
   - Ensure no group has substantially lower accuracy than others
   - Document fairness constraints (e.g., accuracy gap < 5% between groups)
   - Link to bias assessment in PROC-AI-RM-001 Step 2.4

   **Example:**
   - Overall accuracy: ≥ 90%
   - Per-group accuracy: ≥ 87% (no group below this threshold)
   - Accuracy gap: ≤ 5% (max difference between best and worst group)

6. **Document Accuracy Requirements**
   - Complete Accuracy Requirements Specification (TMP-AI-ARS-001)
   - Include use case description, decision impact analysis, accuracy dimensions, thresholds, subpopulation requirements
   - Obtain AI System Owner sign-off
   - Submit for AI Governance Committee review

**Evidence Required:**
- Accuracy Requirements Specification (TMP-AI-ARS-001)
- Stakeholder Workshop Minutes
- Regulatory Standards Review Summary
- AI System Owner Approval

**Timing:** 2-3 weeks

**Quality Check:**
- Accuracy requirements are specific and measurable
- Thresholds are justified based on use case impact
- Subpopulation requirements defined where applicable
- Regulatory requirements incorporated

---

#### Step 1.2: Select Accuracy Metrics and Establish Thresholds (Control ARS-001)

**When:** Immediately after accuracy requirements defined

**Who:** Data Scientist + AI Quality Assurance Lead

**How:**

1. **Select Primary Accuracy Metrics**

   Based on AI system type and use case, select appropriate metrics (see Appendix A for full catalog):

   | AI System Type | Recommended Primary Metrics | Rationale |
   |---|---|---|
   | **Binary Classification** | Accuracy, Precision, Recall, F1, AUC-ROC | Balance of false positives and false negatives |
   | **Multi-Class Classification** | Accuracy, Macro F1, Confusion Matrix, Per-Class Recall | Performance across all classes |
   | **Regression** | MAE, RMSE, R-squared, MAPE | Prediction error magnitude |
   | **Ranking/Recommendation** | NDCG, MAP, MRR, Precision@K | Relevance and ordering quality |
   | **Object Detection** | mAP, IoU, Precision, Recall | Localization and classification accuracy |
   | **NLP/Text Generation** | BLEU, ROUGE, Perplexity, Human Eval | Text quality and fluency |
   | **Segmentation** | IoU, Dice Coefficient, Pixel Accuracy | Segmentation quality |

2. **Select Secondary and Diagnostic Metrics**

   - **Secondary metrics** provide additional accuracy perspective
   - **Diagnostic metrics** help troubleshoot performance issues

   **Example for binary classification:**
   - Primary: Accuracy, F1 Score
   - Secondary: AUC-ROC, Precision, Recall
   - Diagnostic: Confusion Matrix, Per-Class Metrics, Calibration Error

3. **Establish Metric-Specific Thresholds**

   For each selected metric, define thresholds:

   | Metric | Minimum Acceptable | Target | Monitoring Threshold |
   |---|---|---|---|
   | Accuracy | 85% | 90% | Alert if < 83% (2% buffer) |
   | Precision | 80% | 88% | Alert if < 78% |
   | Recall | 82% | 90% | Alert if < 80% |
   | F1 Score | 81% | 89% | Alert if < 79% |

4. **Define Test Set Requirements**

   - **Test set size:** Minimum sample size for statistical confidence
     - Formula: n = (Z² × p × (1-p)) / E²
     - Example: 95% confidence, 90% accuracy, 3% margin = 384 samples minimum
   - **Test set composition:** Representative of production population
   - **Test set refresh:** Update frequency (e.g., quarterly)
   - **Hold-out strategy:** Time-based split if temporal drift expected

5. **Establish Confidence Intervals**

   - Define acceptable confidence intervals for accuracy metrics
   - Example: "Accuracy ≥ 85% with 95% confidence interval of ±2%"
   - Larger test sets = tighter confidence intervals

6. **Document Metric Selection and Thresholds**
   - Complete Accuracy Metrics Specification (part of TMP-AI-ARS-001)
   - Justify metric selection based on use case
   - Document threshold-setting rationale
   - Define test set requirements
   - Obtain Data Science Lead approval

**Evidence Required:**
- Accuracy Metrics Specification (part of TMP-AI-ARS-001)
- Metric Selection Justification
- Threshold Rationale Documentation
- Test Set Design Specification

**Timing:** 1-2 weeks

**Quality Check:**
- Metrics align with use case and decision impact
- Thresholds are achievable and justified
- Test set is statistically valid
- Subpopulation metrics defined where required

---

#### Step 1.3: Conduct Pre-Deployment Accuracy Testing (Control ARS-002)

**When:** After model training, before deployment

**Who:** Data Scientist + AI Quality Assurance Lead

**How:**

1. **Prepare Test Environment**
   - Set up isolated test environment separate from training
   - Load held-out test dataset (never used in training)
   - Verify test data quality and representativeness
   - Configure metric calculation tools

2. **Execute Accuracy Testing**

   **Test 1: Overall Accuracy Assessment**
   - Run model on full test set
   - Calculate all primary and secondary metrics
   - Compare results to minimum acceptable and target thresholds
   - Document results in Accuracy Test Report (TMP-AI-ARS-002)

   **Test 2: Subpopulation Accuracy Assessment**
   - Segment test set by demographic groups, geographic regions, or other relevant factors
   - Calculate metrics for each subpopulation
   - Verify no group falls below minimum threshold
   - Verify accuracy gap is within acceptable range
   - Document in Subpopulation Accuracy Report (part of TMP-AI-ARS-002)

   **Test 3: Edge Case and Boundary Testing**
   - Test performance on edge cases (rare conditions, boundary values)
   - Test with deliberately challenging inputs
   - Document edge case performance

   **Test 4: Calibration Testing**
   - For probabilistic models, assess calibration
   - Plot calibration curves
   - Calculate calibration error (ECE)
   - Document calibration quality

3. **Analyze Test Results**

   | Outcome | Action |
   |---|---|
   | All metrics meet target thresholds | Approve for deployment; proceed to robustness testing |
   | Metrics meet minimum but not target | Conditional approval; document gap; plan improvement |
   | Any metric below minimum | Block deployment; require model improvement |
   | Subpopulation accuracy gap exceeds limit | Block deployment; require fairness improvement |

4. **Generate Accuracy Test Report**
   - Complete Accuracy Test Report (TMP-AI-ARS-002)
   - Include all metric results with confidence intervals
   - Include subpopulation analysis
   - Include visualizations (confusion matrix, calibration curves, etc.)
   - Document pass/fail decision and rationale
   - Obtain AI Quality Assurance Lead approval

5. **Gate Decision**
   - **PASS:** All metrics meet minimum acceptable thresholds → Proceed to robustness testing
   - **CONDITIONAL PASS:** Metrics meet minimum but gaps identified → Proceed with conditions documented
   - **FAIL:** Any metric below minimum → Block deployment; return to model development

**Evidence Required:**
- Accuracy Test Report (TMP-AI-ARS-002)
- Test Dataset Documentation
- Metric Calculation Scripts/Tools
- Pass/Fail Gate Decision Documentation
- QA Lead Approval

**Timing:** 1-2 weeks (depends on model complexity)

**Quality Check:**
- Test set is independent of training data
- All required metrics calculated
- Subpopulation analysis completed
- Results meet or exceed minimum thresholds
- Confidence intervals documented

---

### PHASE 2: PRODUCTION ACCURACY MONITORING (Control ARS-003)

#### Step 2.1: Implement Production Accuracy Monitoring (Control ARS-003)

**When:** Before deployment; must be operational at launch

**Who:** ML Ops Engineer + Data Scientist

**How:**

1. **Design Monitoring Architecture**

   ```
   ┌─────────────────────────────────────────────────────────┐
   │         PRODUCTION ACCURACY MONITORING SYSTEM            │
   ├─────────────────────────────────────────────────────────┤
   │                                                          │
   │  1. DATA COLLECTION                                     │
   │     ├─ Prediction Logging (inputs, outputs, timestamps) │
   │     ├─ Ground Truth Collection (labels, feedback)       │
   │     └─ Metadata Capture (user segments, conditions)     │
   │                                                          │
   │  2. METRIC CALCULATION                                  │
   │     ├─ Batch Calculation (daily/weekly)                 │
   │     ├─ Sliding Window Calculation (30-day rolling)      │
   │     └─ Subpopulation Metrics (per segment)              │
   │                                                          │
   │  3. THRESHOLD MONITORING                                │
   │     ├─ Compare to Baseline                              │
   │     ├─ Detect Degradation                               │
   │     └─ Generate Alerts                                  │
   │                                                          │
   │  4. VISUALIZATION & REPORTING                           │
   │     ├─ Real-Time Dashboard                              │
   │     ├─ Automated Reports (weekly/monthly)               │
   │     └─ Alert Notifications                              │
   │                                                          │
   └─────────────────────────────────────────────────────────┘
   ```

2. **Implement Data Collection**

   **Prediction Logging:**
   - Log every prediction with unique ID
   - Capture input features, model output, prediction timestamp, model version
   - Store in durable data store with retention per PROC-AI-DATA-001

   **Ground Truth Collection:**
   - Identify ground truth source (user feedback, manual review, authoritative system)
   - Implement ground truth collection pipeline
   - Join ground truth with predictions by ID
   - Handle delayed ground truth (e.g., outcome known weeks later)

   **Example:**
   ```python
   # Pseudo-code for prediction logging
   prediction_log = {
       "prediction_id": uuid.generate(),
       "timestamp": current_time(),
       "model_version": "v2.3.1",
       "input_features": feature_dict,
       "prediction": model.predict(features),
       "confidence": model.predict_proba(features),
       "user_segment": user.segment
   }
   save_to_datastore(prediction_log)
   ```

3. **Implement Metric Calculation**

   - **Batch Calculation:** Daily or weekly batch jobs to calculate metrics
   - **Sliding Window:** Calculate metrics over rolling 7-day, 30-day, 90-day windows
   - **Segmentation:** Calculate metrics by user segment, geography, or other dimensions
   - **Comparison:** Compare current metrics to baseline and target thresholds

4. **Configure Alerting**

   | Alert Level | Trigger Condition | Notification | Response Time |
   |---|---|---|---|
   | **Critical (Red)** | Accuracy < Minimum OR degradation > 10% | Email + SMS + Dashboard | 24 hours |
   | **Warning (Orange)** | Degradation 5-10% | Email + Dashboard | 2 business days |
   | **Info (Yellow)** | Degradation 2-5% | Dashboard | 5 business days |
   | **Normal (Green)** | Within 2% of baseline | Dashboard | N/A |

5. **Build Monitoring Dashboard**

   **Key Dashboard Components:**
   - Accuracy trend chart (30-day rolling)
   - Current vs. baseline comparison
   - Subpopulation accuracy comparison
   - Alert status indicator
   - Metric distribution histogram
   - Prediction volume chart

6. **Establish Monitoring Procedures**

   - **Daily:** ML Ops reviews dashboard for critical alerts
   - **Weekly:** Data Scientist reviews trends and investigates yellow alerts
   - **Monthly:** AI System Owner reviews monitoring report
   - **Quarterly:** QA Lead presents accuracy trends to AI Governance Committee

7. **Document Monitoring Implementation**
   - Complete Production Monitoring Plan (TMP-AI-ARS-003)
   - Document data collection approach
   - Document metric calculation logic
   - Document alerting thresholds and procedures
   - Obtain ML Ops Lead approval

**Evidence Required:**
- Production Monitoring Plan (TMP-AI-ARS-003)
- Monitoring Dashboard (screenshot/link)
- Alert Configuration Documentation
- Data Collection Pipeline Documentation
- ML Ops Approval

**Timing:** 2-4 weeks (before deployment)

**Quality Check:**
- Prediction logging operational
- Ground truth collection pipeline working
- Metrics calculated correctly
- Alerts trigger appropriately
- Dashboard accessible to stakeholders

---

#### Step 2.2: Respond to Accuracy Degradation (Control ARS-003)

**When:** When monitoring detects accuracy degradation

**Who:** Data Scientist + ML Ops + AI System Owner

**How:**

1. **Alert Triage**
   - ML Ops receives alert (email, SMS, dashboard)
   - Verify alert is genuine (not false alarm due to data issue)
   - Assess severity based on degradation level
   - Notify appropriate personnel per alert level

2. **Immediate Investigation (within alert response time)**

   **Step 1: Confirm Degradation**
   - Verify metrics calculation is correct
   - Check for data quality issues in ground truth
   - Confirm degradation is persistent (not one-time anomaly)

   **Step 2: Identify Affected Segments**
   - Is degradation global or limited to specific segments?
   - Check subpopulation metrics
   - Identify geographic, demographic, or temporal patterns

   **Step 3: Hypothesize Root Causes**
   - Data drift (input distribution changed)
   - Concept drift (relationship between inputs and outputs changed)
   - Data quality issues (corrupted inputs)
   - Model bug or regression
   - Adversarial activity

3. **Root Cause Analysis**

   | Potential Cause | Diagnostic Test | Remediation |
   |---|---|---|
   | **Data Drift** | Compare recent feature distributions to baseline | Retrain model on recent data |
   | **Concept Drift** | Compare ground truth distribution over time | Update model; adjust thresholds |
   | **Data Quality** | Check for missing values, outliers, format changes | Fix data pipeline; filter bad data |
   | **Model Bug** | Test model on historical data (should still work) | Rollback to previous version |
   | **Adversarial Activity** | Check for suspicious input patterns | Implement input filtering; security response |

4. **Execute Response Plan**

   | Degradation Level | Response Actions |
   |---|---|
   | **Critical (>10%)** | Immediate escalation to AI System Owner; Consider suspending model; Emergency retraining; Daily progress updates |
   | **Warning (5-10%)** | Prioritized investigation; Mitigation plan within 2 days; Implement fix within 2 weeks |
   | **Info (2-5%)** | Standard investigation; Mitigation plan within 5 days; Implement fix within 1 month |

5. **Implement Mitigation**

   **Short-term mitigations:**
   - Increase human review rate
   - Lower confidence threshold (if false negatives are the issue)
   - Raise confidence threshold (if false positives are the issue)
   - Fallback to rule-based system
   - Rollback to previous model version

   **Long-term fixes:**
   - Retrain model with recent data
   - Improve feature engineering
   - Adjust model architecture
   - Update training procedure
   - Fix data pipeline issues

6. **Verify Mitigation Effectiveness**
   - Deploy fix to test environment
   - Validate accuracy improvement
   - Deploy to production
   - Monitor closely for 1 week
   - Confirm accuracy returns to acceptable level

7. **Document Incident and Response**
   - Complete Accuracy Degradation Incident Report (TMP-AI-ARS-008)
   - Document root cause analysis
   - Document mitigation actions
   - Document lessons learned
   - Update monitoring thresholds if needed
   - Share with AI Governance Committee

**Evidence Required:**
- Accuracy Degradation Incident Report (TMP-AI-ARS-008)
- Root Cause Analysis Documentation
- Mitigation Implementation Records
- Post-Mitigation Accuracy Validation
- Lessons Learned Documentation

**Timing:** Per alert response time requirements

**Quality Check:**
- Root cause identified and documented
- Mitigation implemented and effective
- Accuracy returns to acceptable level
- Lessons learned captured for future prevention

---

### PHASE 3: ROBUSTNESS REQUIREMENTS AND TESTING (Controls ARS-004, ARS-005)

#### Step 3.1: Define Robustness Requirements (Control ARS-004)

**When:** During AI system design phase, in parallel with accuracy requirements

**Who:** AI Quality Assurance Lead + Data Scientist + AI System Owner

**How:**

1. **Assess Operational Environment and Variability**

   Document expected and potential environmental conditions:
   - **Input Variability:** Range of possible inputs, including edge cases
   - **Operational Conditions:** Resource availability, latency requirements, load patterns
   - **Failure Scenarios:** What could go wrong? (infrastructure, data, dependencies)
   - **Error Propagation:** How do upstream errors affect the AI system?

   **Example Questions:**
   - "What is the expected range of input values?"
   - "What happens if an upstream API fails?"
   - "How should the system behave with missing or corrupted inputs?"
   - "What resource constraints might the system face in production?"

2. **Define Robustness Dimensions and Requirements**

   For each robustness dimension from Section 3.3.1, define requirements:

   | Dimension | Requirement Example | Success Criterion |
   |---|---|---|
   | **Input Robustness** | Gracefully handle inputs with 10% Gaussian noise | Accuracy degradation < 5% with noisy inputs |
   | **Fault Tolerance** | Continue operation if one dependency fails | Fallback to backup; degraded mode activated |
   | **Operational Resilience** | Handle 2x peak load | Response time < 500ms even at 2x load |
   | **Temporal Stability** | Maintain accuracy for 90 days without retraining | Accuracy degradation < 3% over 90 days |
   | **Environmental Variability** | Perform across all supported languages/regions | Per-region accuracy > 85% |

3. **Define Technical Redundancy Requirements**

   Per Article 15(2), define redundancy approach:

   | System Component | Redundancy Approach | Failover Behavior |
   |---|---|---|
   | **Model** | Ensemble of 3 models | If primary fails, use ensemble vote |
   | **Data Pipeline** | Backup data source | Switch to backup if primary unavailable |
   | **Infrastructure** | Multi-zone deployment | Automatic failover to secondary zone |
   | **Monitoring** | Dual monitoring systems | Alert if either system detects issue |

4. **Define Graceful Degradation Strategy**

   How should the system behave when operating outside normal conditions?

   | Scenario | Degraded Mode Behavior | User Experience |
   |---|---|---|
   | **High Confidence Unavailable** | Return only high-confidence predictions; escalate low-confidence to human | Slower but accurate |
   | **Partial Feature Availability** | Use reduced feature set; wider confidence intervals | Prediction with caveat |
   | **Dependency Failure** | Fallback to rule-based system | Reduced accuracy; notification |
   | **Resource Constraint** | Batch processing; queue requests | Slower response time |

5. **Establish Robustness Testing Scenarios**

   Define specific test scenarios for robustness validation:

   **Input Robustness Scenarios:**
   - Gaussian noise (σ = 0.1, 0.2, 0.5)
   - Missing features (10%, 25%, 50% dropout)
   - Out-of-distribution inputs
   - Adversarial perturbations (FGSM, PGD)

   **Fault Injection Scenarios:**
   - Database connection failure
   - API timeout/error
   - Model server crash
   - Network partition

   **Load Testing Scenarios:**
   - 2x, 5x, 10x baseline load
   - Burst traffic (sudden spike)
   - Sustained high load (1 hour)

6. **Document Robustness Requirements**
   - Complete Robustness Requirements Specification (TMP-AI-ARS-004)
   - Include all dimensions, redundancy approach, degradation strategy
   - Define testing scenarios
   - Obtain AI System Owner sign-off

**Evidence Required:**
- Robustness Requirements Specification (TMP-AI-ARS-004)
- Environmental Variability Assessment
- Technical Redundancy Design
- AI System Owner Approval

**Timing:** 2-3 weeks

**Quality Check:**
- All robustness dimensions addressed
- Requirements are specific and testable
- Redundancy approach is appropriate for risk level
- Graceful degradation strategy defined

---

#### Step 3.2: Conduct Robustness Testing (Control ARS-005)

**When:** After accuracy testing passes, before deployment

**Who:** Data Scientist + AI Quality Assurance Lead + AI Security Engineer

**How:**

1. **Prepare Test Environment**
   - Set up test infrastructure that simulates production
   - Prepare test datasets with injected noise, faults, and variability
   - Configure fault injection tools
   - Set up load testing tools

2. **Execute Input Robustness Testing**

   **Test 1: Noise Robustness**
   - Add Gaussian noise to test inputs (σ = 0.1, 0.2, 0.5)
   - Calculate accuracy with noisy inputs
   - Verify accuracy degradation is within acceptable limits
   - Document results in Robustness Test Report (TMP-AI-ARS-005)

   **Example:**
   - Baseline accuracy (clean inputs): 90%
   - Accuracy with σ=0.1 noise: 88% (2% degradation - acceptable)
   - Accuracy with σ=0.2 noise: 85% (5% degradation - acceptable)
   - Accuracy with σ=0.5 noise: 78% (12% degradation - flag for investigation)

   **Test 2: Missing Feature Robustness**
   - Randomly drop features (10%, 25%, 50% dropout rate)
   - Test model behavior with incomplete inputs
   - Verify graceful degradation or appropriate error handling
   - Document which features are most critical

   **Test 3: Out-of-Distribution (OOD) Robustness**
   - Test with inputs outside training distribution
   - Verify model produces appropriate confidence scores (should be low)
   - Verify OOD detection mechanisms work (if implemented)
   - Document OOD handling behavior

   **Test 4: Adversarial Robustness**
   - Generate adversarial examples (FGSM, PGD attacks)
   - Test model accuracy on adversarial examples
   - Verify adversarial defenses (if implemented)
   - Document adversarial vulnerability level
   - Cross-reference with cybersecurity testing (Step 5.2)

3. **Execute Fault Tolerance Testing**

   **Test 5: Dependency Failure Simulation**
   - Simulate failure of each external dependency (database, API, etc.)
   - Verify fallback mechanisms activate
   - Verify system continues operating (possibly in degraded mode)
   - Measure failover time and impact
   - Document in Fault Tolerance Test Report (part of TMP-AI-ARS-005)

   **Test 6: Component Failure Testing**
   - Simulate failure of model server
   - Simulate failure of feature computation
   - Verify redundancy mechanisms engage
   - Verify monitoring detects failures
   - Document recovery behavior

4. **Execute Operational Resilience Testing**

   **Test 7: Load Testing**
   - Test at 1x, 2x, 5x baseline load
   - Measure response time, throughput, error rate
   - Verify system meets performance requirements under load
   - Identify bottlenecks and breaking points
   - Document load testing results

   **Test 8: Resource Constraint Testing**
   - Throttle CPU, memory, or network
   - Test behavior under resource constraints
   - Verify graceful degradation
   - Document minimum resource requirements

5. **Execute Temporal Stability Testing**

   **Test 9: Long-Duration Testing**
   - Run model continuously for extended period (7 days minimum)
   - Monitor for performance degradation over time
   - Check for memory leaks, resource accumulation
   - Verify stability
   - Document long-duration behavior

6. **Analyze Robustness Test Results**

   | Test Result | Action |
   |---|---|
   | All tests pass robustness requirements | Approve for deployment |
   | Minor robustness gaps identified | Document gaps; conditional approval with monitoring |
   | Major robustness failures | Block deployment; require improvements |

7. **Generate Robustness Test Report**
   - Complete Robustness Test Report (TMP-AI-ARS-005)
   - Include all test results with pass/fail status
   - Document robustness gaps and limitations
   - Include recommendations for improvements
   - Obtain QA Lead approval

**Evidence Required:**
- Robustness Test Report (TMP-AI-ARS-005)
- Test Scripts and Configurations
- Test Result Data and Visualizations
- Pass/Fail Gate Decision
- QA Lead Approval

**Timing:** 2-4 weeks (depends on test complexity)

**Quality Check:**
- All defined test scenarios executed
- Results meet robustness requirements
- Failure modes documented
- Redundancy mechanisms validated
- Graceful degradation verified

---

### PHASE 4: MODEL DRIFT DETECTION AND RESPONSE (Control ARS-006)

#### Step 4.1: Implement Model Drift Detection (Control ARS-006)

**When:** Before deployment; must be operational at launch

**Who:** ML Ops Engineer + Data Scientist

**How:**

1. **Understand Drift Types**

   | Drift Type | Description | Detection Method | Impact |
   |---|---|---|---|
   | **Feature Drift** | Input distribution changes | PSI, KL divergence, KS test | May require retraining |
   | **Prediction Drift** | Output distribution changes | KS test, distribution comparison | Investigate cause |
   | **Concept Drift** | Input-output relationship changes | Accuracy degradation | Requires retraining |
   | **Upstream Drift** | Data pipeline changes | Data quality metrics | Fix pipeline issue |

2. **Implement Feature Drift Detection**

   **Population Stability Index (PSI):**
   - Calculate PSI for each feature: PSI = Σ (actual% - expected%) × ln(actual% / expected%)
   - Baseline: Training data feature distributions
   - Comparison: Production data feature distributions (weekly)
   - Thresholds:
     - PSI < 0.1: No significant drift
     - PSI 0.1-0.25: Moderate drift; investigate
     - PSI > 0.25: High drift; retraining likely needed

   **Kolmogorov-Smirnov (KS) Test:**
   - Compare production feature distribution to training distribution
   - Calculate KS statistic and p-value
   - Threshold: p-value < 0.05 indicates significant drift

   **Example Implementation:**
   ```python
   # Pseudo-code for PSI calculation
   def calculate_psi(expected_dist, actual_dist, bins=10):
       expected_hist = histogram(expected_dist, bins)
       actual_hist = histogram(actual_dist, bins)
       psi = sum((actual_hist - expected_hist) * log(actual_hist / expected_hist))
       return psi

   # Weekly drift check
   for feature in model_features:
       psi = calculate_psi(training_data[feature], production_data_last_week[feature])
       if psi > 0.25:
           alert("High drift detected in feature: " + feature)
   ```

3. **Implement Prediction Drift Detection**

   - Compare production prediction distribution to validation prediction distribution
   - Calculate KS statistic for prediction drift
   - Alert if significant shift detected
   - Investigate cause (feature drift, concept drift, data quality issue)

4. **Implement Concept Drift Detection**

   - Monitor accuracy over time (already implemented in Step 2.1)
   - Accuracy degradation is primary indicator of concept drift
   - Use sliding window to detect gradual drift
   - Use ADWIN (Adaptive Windowing) for automatic drift point detection (optional)

5. **Configure Drift Monitoring Dashboard**

   **Key Dashboard Components:**
   - PSI chart for each critical feature (weekly)
   - Prediction distribution comparison (baseline vs. recent)
   - Accuracy trend (30-day rolling)
   - Drift alert status
   - Time since last retraining

6. **Establish Drift Alerting**

   | Alert Level | Trigger Condition | Notification | Response Time |
   |---|---|---|---|
   | **Critical** | PSI > 0.50 OR accuracy degradation > 10% | Email + SMS | 24 hours |
   | **Warning** | PSI 0.25-0.50 OR accuracy degradation 5-10% | Email | 3 business days |
   | **Info** | PSI 0.10-0.25 OR accuracy degradation 2-5% | Dashboard | 1 week |

7. **Document Drift Detection Implementation**
   - Complete Drift Detection Plan (TMP-AI-ARS-006)
   - Document drift metrics and thresholds
   - Document alerting configuration
   - Obtain ML Ops Lead approval

**Evidence Required:**
- Drift Detection Plan (TMP-AI-ARS-006)
- Drift Monitoring Dashboard
- Alert Configuration Documentation
- ML Ops Approval

**Timing:** 2-3 weeks (before deployment)

**Quality Check:**
- Feature drift detection operational for all critical features
- Prediction drift detection implemented
- Concept drift detection via accuracy monitoring
- Alerts configured and tested
- Dashboard accessible to stakeholders

---

#### Step 4.2: Respond to Model Drift (Control ARS-006)

**When:** When drift detection alerts trigger

**Who:** Data Scientist + ML Ops + AI System Owner

**How:**

1. **Alert Triage**
   - ML Ops receives drift alert
   - Verify alert is genuine
   - Assess drift severity
   - Notify Data Scientist per alert level

2. **Drift Investigation**

   **Step 1: Confirm Drift**
   - Verify drift metric calculation is correct
   - Check for data quality issues causing false drift signal
   - Confirm drift is persistent (not temporary anomaly)

   **Step 2: Identify Drifted Features**
   - Which features have highest PSI?
   - Are drifted features critical to model performance?
   - Is drift isolated or affecting multiple features?

   **Step 3: Understand Drift Cause**
   - Has the real-world data distribution changed? (e.g., user behavior shift, market change)
   - Is this a data pipeline issue? (e.g., feature engineering bug)
   - Is this seasonal or temporary?
   - Is this adversarial activity?

3. **Assess Impact**

   - **Impact on Accuracy:** Has accuracy degraded? (Check production accuracy monitoring)
   - **Impact on Fairness:** Has drift affected subpopulation accuracy differently?
   - **Impact on Business Metrics:** Has drift affected business KPIs?

   | Drift Impact | Assessment | Action Priority |
   |---|---|---|
   | **High:** Accuracy degraded significantly | Immediate action needed | P0 - Within 24 hours |
   | **Medium:** Drift detected but accuracy stable | Plan retraining within 2-4 weeks | P1 - Within 1 week |
   | **Low:** Minor drift, no accuracy impact | Monitor; include in next retraining cycle | P2 - Within 1 month |

4. **Execute Drift Response Plan**

   **Option 1: Model Retraining (most common)**
   - Retrain model on recent data (including production data)
   - Validate retrained model on recent test data
   - Ensure accuracy meets requirements
   - Deploy retrained model
   - Timeline: 1-4 weeks depending on model complexity

   **Option 2: Feature Engineering Update**
   - If drift is due to feature engineering issue, fix pipeline
   - Recompute features for production data
   - Re-validate model with corrected features
   - Deploy fix

   **Option 3: Model Update (concept drift)**
   - If input-output relationship has fundamentally changed, update model architecture or approach
   - This is a more substantial change requiring full development cycle
   - Timeline: 1-3 months

   **Option 4: Acceptance (low impact drift)**
   - If drift is low impact and accuracy remains acceptable, document and accept
   - Increase monitoring frequency
   - Plan retraining in next cycle

5. **Retraining Procedure (when required)**

   **Step 1: Prepare Retraining Dataset**
   - Combine original training data with recent production data
   - Weight recent data more heavily (e.g., 70% recent, 30% original)
   - Ensure data quality
   - Create new validation and test sets with recent data

   **Step 2: Retrain Model**
   - Use same training procedure as original model
   - Consider hyperparameter retuning if substantial drift
   - Validate on recent test set
   - Compare to original model performance

   **Step 3: Validate Retrained Model**
   - Accuracy testing per Step 1.3
   - Robustness testing per Step 3.2 (abbreviated)
   - A/B test in production (optional but recommended)
   - Obtain approval for deployment

   **Step 4: Deploy Retrained Model**
   - Deploy to production
   - Monitor closely for 1 week
   - Verify drift is resolved and accuracy is restored
   - Update model version and documentation

6. **Document Drift Incident and Response**
   - Complete Drift Incident Report (TMP-AI-ARS-008)
   - Document drift cause and impact
   - Document response actions
   - Document lessons learned
   - Update drift detection thresholds if needed

**Evidence Required:**
- Drift Incident Report (TMP-AI-ARS-008)
- Drift Investigation Analysis
- Retraining Documentation (if retrained)
- Post-Response Validation Results
- Lessons Learned

**Timing:** Per alert response time requirements

**Quality Check:**
- Drift cause identified and documented
- Appropriate response action selected
- If retrained, model meets accuracy and robustness requirements
- Drift resolved or accepted with justification
- Lessons learned captured

---

### PHASE 5: CYBERSECURITY REQUIREMENTS AND TESTING (Controls ARS-007, ARS-008)

#### Step 5.1: Conduct AI Threat Assessment (Control ARS-007)

**When:** During AI system design phase, before development

**Who:** AI Security Engineer + Data Scientist + AI Risk Manager

**How:**

1. **Understand AI System Attack Surface**

   Map all potential entry points for attacks:

   | Attack Surface Component | Exposure | Threats |
   |---|---|---|
   | **Training Data** | Data collection, storage, access | Data poisoning, unauthorized access |
   | **Model** | Model file, API, inference endpoint | Model stealing, inversion, backdoors |
   | **Input Pipeline** | User inputs, APIs, data feeds | Adversarial examples, injection attacks |
   | **Output Pipeline** | Predictions, explanations, logs | Information leakage, misuse |
   | **Infrastructure** | Servers, databases, networks | Standard IT threats + AI-specific |
   | **Dependencies** | Third-party libraries, models, data | Supply chain attacks, vulnerabilities |

2. **Apply OWASP AI Top 10 Threat Assessment**

   For each OWASP AI Top 10 threat (see Appendix B), assess applicability and risk:

   | OWASP Threat | Applicable? | Risk Level | Justification |
   |---|---|---|---|
   | Prompt Injection | Yes (if LLM) | High | User-facing LLM without input filtering |
   | Insecure Output Handling | Yes | Medium | Outputs used in downstream decisions |
   | Training Data Poisoning | Yes | High | Training data from untrusted sources |
   | Model Denial of Service | Yes | Low | Rate limiting implemented |
   | Supply Chain Vulnerabilities | Yes | Medium | Using third-party libraries |
   | Sensitive Information Disclosure | Yes | High | Model trained on personal data |
   | Insecure Plugin Design | No | N/A | No plugins in system |
   | Excessive Agency | Yes | Medium | System makes automated decisions |
   | Overreliance | Yes | Medium | Users may over-trust AI |
   | Model Theft | Yes | Medium | Model accessible via API |

3. **Assess AI-Specific Threat Categories**

   For each threat category from Section 3.4.1, perform detailed assessment:

   **Data Poisoning Assessment:**
   - What is the source of training data? (Internal, external, user-generated)
   - Is training data verified and validated?
   - Could an attacker manipulate training data?
   - What would be the impact of poisoned training data?
   - Risk Level: [Critical/High/Medium/Low]

   **Adversarial Examples Assessment:**
   - Is the model vulnerable to adversarial perturbations?
   - Are there adversarial defenses implemented?
   - What is the impact of successful adversarial attack?
   - Risk Level: [Critical/High/Medium/Low]

   **Model Inversion Assessment:**
   - Could an attacker extract training data from model?
   - Does model memorize sensitive training examples?
   - Are there privacy protections (differential privacy, etc.)?
   - Risk Level: [Critical/High/Medium/Low]

   **Model Stealing Assessment:**
   - Is the model accessible via API?
   - Are there query limits or rate limiting?
   - What is the value of the model (cost to train, competitive advantage)?
   - Risk Level: [Critical/High/Medium/Low]

   **Membership Inference Assessment:**
   - Could an attacker determine if data was in training set?
   - Is this a privacy concern given the data type?
   - Are there membership inference defenses?
   - Risk Level: [Critical/High/Medium/Low]

   **Backdoor Attack Assessment:**
   - Could an attacker insert a backdoor during training?
   - Are there backdoor detection mechanisms?
   - What would be the impact of a backdoor?
   - Risk Level: [Critical/High/Medium/Low]

4. **Apply MITRE ATLAS Framework (Optional)**

   For comprehensive threat assessment, map threats to MITRE ATLAS tactics and techniques:
   - Reconnaissance
   - Resource Development
   - Initial Access
   - ML Model Access
   - Execution
   - Persistence
   - Defense Evasion
   - Discovery
   - Collection
   - ML Attack Staging
   - Exfiltration
   - Impact

5. **Calculate AI Security Risk Scores**

   For each identified threat:
   - Likelihood: [1-5] (How likely is this attack?)
   - Impact: [1-5] (What is the harm if successful?)
   - Risk Score: Likelihood × Impact
   - Risk Level: Critical (20-25), High (15-19), Medium (10-14), Low (5-9), Very Low (1-4)

6. **Prioritize Threats**
   - Focus on Critical and High-risk threats
   - Consider both likelihood and impact
   - Prioritize threats specific to this AI system's use case

7. **Document Threat Assessment**
   - Complete AI Threat Assessment Report (TMP-AI-ARS-007)
   - Document all identified threats with risk scores
   - Prioritize threats for mitigation
   - Cross-reference with risk register (PROC-AI-RM-001)
   - Obtain AI Security Engineer approval

**Evidence Required:**
- AI Threat Assessment Report (TMP-AI-ARS-007)
- OWASP AI Top 10 Assessment
- Attack Surface Mapping
- Threat Risk Scores and Prioritization
- AI Security Engineer Approval

**Timing:** 2-3 weeks

**Quality Check:**
- All AI-specific threat categories assessed
- OWASP AI Top 10 threats evaluated
- Threats prioritized by risk level
- High and Critical threats have mitigation plans
- Cross-referenced with PROC-AI-RM-001 risk register

---

#### Step 5.2: Implement Cybersecurity Controls (Control ARS-007)

**When:** During development, before deployment

**Who:** AI Security Engineer + Data Scientist + ML Ops

**How:**

1. **Design Security Control Strategy**

   Based on threat assessment, design layered security controls:

   ```
   ┌─────────────────────────────────────────────────────────┐
   │           AI CYBERSECURITY DEFENSE-IN-DEPTH              │
   ├─────────────────────────────────────────────────────────┤
   │                                                          │
   │  LAYER 1: DATA SECURITY                                 │
   │    ├─ Training Data Access Control                      │
   │    ├─ Data Provenance Tracking                          │
   │    ├─ Data Poisoning Detection                          │
   │    └─ Secure Data Storage (encryption at rest)          │
   │                                                          │
   │  LAYER 2: MODEL SECURITY                                │
   │    ├─ Model Access Control                              │
   │    ├─ Model Integrity Verification (signing)            │
   │    ├─ Model Watermarking                                │
   │    └─ Secure Model Storage                              │
   │                                                          │
   │  LAYER 3: INPUT SECURITY                                │
   │    ├─ Input Validation & Sanitization                   │
   │    ├─ Adversarial Input Detection                       │
   │    ├─ Rate Limiting & Abuse Prevention                  │
   │    └─ Prompt Injection Prevention (for LLMs)            │
   │                                                          │
   │  LAYER 4: OUTPUT SECURITY                               │
   │    ├─ Output Filtering & Sanitization                   │
   │    ├─ Sensitive Data Leakage Prevention                 │
   │    ├─ Confidence Thresholding                           │
   │    └─ Output Monitoring & Logging                       │
   │                                                          │
   │  LAYER 5: INFRASTRUCTURE SECURITY                       │
   │    ├─ Network Segmentation                              │
   │    ├─ Encryption in Transit (TLS)                       │
   │    ├─ Authentication & Authorization                    │
   │    └─ Security Monitoring & Logging                     │
   │                                                          │
   └─────────────────────────────────────────────────────────┘
   ```

2. **Implement Data Security Controls**

   **Control 1: Training Data Access Control**
   - Implement role-based access control (RBAC) for training data
   - Log all training data access
   - Require approval for data access
   - Audit data access regularly

   **Control 2: Data Provenance Tracking**
   - Track origin of all training data
   - Maintain chain of custody
   - Verify data integrity (checksums, digital signatures)
   - Document data lineage

   **Control 3: Data Poisoning Detection**
   - Implement outlier detection in training data
   - Review data quality metrics before training
   - Use trusted data sources where possible
   - Validate data against expected distributions

3. **Implement Model Security Controls**

   **Control 4: Model Access Control**
   - Restrict access to model files and weights
   - Implement API authentication for model serving
   - Use separate serving infrastructure (don't expose training environment)

   **Control 5: Model Integrity Verification**
   - Sign model files with digital signatures
   - Verify signature before loading model
   - Detect unauthorized model modifications
   - Maintain model version control

   **Control 6: Model Watermarking (optional)**
   - Embed watermark in model to detect theft
   - Use watermark to prove model ownership

4. **Implement Input Security Controls**

   **Control 7: Input Validation & Sanitization**
   - Define allowed input ranges and formats
   - Reject or sanitize out-of-range inputs
   - Validate data types and schemas
   - Prevent code injection via inputs

   **Control 8: Adversarial Input Detection**
   - Implement adversarial example detection (e.g., MagNet, Defense-GAN)
   - Flag inputs with low-confidence or anomalous patterns
   - Use input preprocessing to reduce adversarial perturbations

   **Control 9: Rate Limiting & Abuse Prevention**
   - Implement per-user/IP rate limits
   - Detect and block suspicious query patterns
   - Prevent model extraction via excessive queries
   - Monitor query volumes and patterns

   **Control 10: Prompt Injection Prevention (for LLMs)**
   - Sanitize user prompts
   - Use instruction hierarchy (system > user)
   - Detect prompt injection attempts
   - Filter malicious instructions

5. **Implement Output Security Controls**

   **Control 11: Output Filtering & Sanitization**
   - Filter sensitive information from outputs
   - Sanitize outputs before downstream use
   - Prevent SQL injection, XSS via AI outputs

   **Control 12: Sensitive Data Leakage Prevention**
   - Scan outputs for PII, secrets, credentials
   - Redact sensitive information
   - Implement differential privacy (if applicable)

   **Control 13: Confidence Thresholding**
   - Only return predictions above confidence threshold
   - Escalate low-confidence predictions to human review
   - Prevent overconfident incorrect predictions

6. **Implement Infrastructure Security Controls**

   **Control 14: Network Segmentation**
   - Isolate AI infrastructure from general network
   - Use VPCs and security groups
   - Implement firewall rules

   **Control 15: Encryption**
   - TLS for all network communication
   - Encryption at rest for data and models
   - Secure key management

   **Control 16: Authentication & Authorization**
   - Multi-factor authentication for admin access
   - Role-based access control (RBAC)
   - Principle of least privilege

   **Control 17: Security Monitoring & Logging**
   - Log all access to data, models, and predictions
   - Monitor for suspicious activity
   - Set up alerts for security events
   - Retain logs per compliance requirements

7. **Document Security Controls**
   - Complete Security Controls Register (TMP-AI-ARS-007)
   - Document each control with implementation details
   - Assign control owners
   - Define testing procedures
   - Obtain CISO approval

**Evidence Required:**
- Security Controls Register (TMP-AI-ARS-007)
- Control Implementation Documentation
- Security Architecture Diagrams
- CISO Approval

**Timing:** 4-8 weeks (depends on control complexity)

**Quality Check:**
- All high-risk threats have corresponding controls
- Defense-in-depth implemented (multiple layers)
- Controls are operational and tested
- Control owners assigned and trained

---

#### Step 5.3: Conduct Cybersecurity Testing (Control ARS-008)

**When:** After security controls implemented, before deployment

**Who:** AI Security Engineer + Data Scientist + External Security Tester (optional)

**How:**

1. **Prepare Security Testing Environment**
   - Set up isolated test environment
   - Do NOT test on production systems
   - Prepare test datasets and attack tools
   - Obtain authorization for testing

2. **Execute Adversarial Attack Testing**

   **Test 1: White-Box Adversarial Examples**
   - Use FGSM (Fast Gradient Sign Method) to generate adversarial examples
   - Use PGD (Projected Gradient Descent) for stronger attacks
   - Use C&W (Carlini & Wagner) attack
   - Measure attack success rate and robustness
   - Verify adversarial defenses are effective

   **Example:**
   ```python
   # Pseudo-code for FGSM attack testing
   epsilon = 0.1  # Perturbation magnitude
   adversarial_examples = fgsm_attack(model, test_data, epsilon)
   adversarial_accuracy = model.evaluate(adversarial_examples)

   # Success: Adversarial accuracy should be close to clean accuracy
   # Failure: Adversarial accuracy << clean accuracy (model is vulnerable)
   ```

   **Test 2: Black-Box Adversarial Examples**
   - Use query-based attacks (no access to model internals)
   - Use transferability attacks (attack trained on surrogate model)
   - Measure attack success rate
   - Verify rate limiting prevents excessive queries

3. **Execute Data Poisoning Testing**

   **Test 3: Training Data Poisoning Simulation**
   - Inject poisoned samples into training data (e.g., 1%, 5%, 10%)
   - Retrain model on poisoned data
   - Measure impact on model accuracy and behavior
   - Verify data quality controls detect poisoning
   - Document poisoning resilience

4. **Execute Model Extraction Testing**

   **Test 4: Model Stealing via Query Access**
   - Attempt to extract model by querying API
   - Train surrogate model using query results
   - Compare surrogate model performance to original
   - Verify rate limiting prevents extraction
   - Measure query budget needed for extraction

5. **Execute Privacy Attack Testing**

   **Test 5: Membership Inference Attack**
   - Attempt to determine if specific data point was in training set
   - Use membership inference techniques
   - Measure attack accuracy
   - Verify privacy defenses (differential privacy, etc.) are effective

   **Test 6: Model Inversion Attack**
   - Attempt to reconstruct training data from model
   - Measure success of inversion attack
   - Verify defenses prevent data extraction

6. **Execute Input Security Testing**

   **Test 7: Input Validation Testing**
   - Test with malformed, oversized, or invalid inputs
   - Verify input validation rejects bad inputs
   - Verify system doesn't crash or leak information

   **Test 8: Prompt Injection Testing (for LLMs)**
   - Test with prompt injection attacks
   - Attempt to override system instructions
   - Verify prompt filtering is effective
   - Document vulnerabilities found

7. **Execute Infrastructure Security Testing**

   **Test 9: Penetration Testing**
   - Standard penetration testing of AI infrastructure
   - Test authentication, authorization, network security
   - Verify no unauthorized access to data or models
   - Document findings

   **Test 10: Security Monitoring Testing**
   - Trigger security events (suspicious queries, access attempts)
   - Verify monitoring detects events
   - Verify alerts fire appropriately
   - Verify incident response procedures work

8. **Analyze Security Test Results**

   | Test Result | Action |
   |---|---|
   | All security tests pass | Approve for deployment |
   | Minor vulnerabilities identified | Document; conditional approval with mitigation plan |
   | Major vulnerabilities identified | Block deployment; require security improvements |

9. **Generate Cybersecurity Test Report**
   - Complete Cybersecurity Test Report (TMP-AI-ARS-008)
   - Document all test results with attack success rates
   - Document vulnerabilities found
   - Prioritize vulnerabilities by severity
   - Recommend security improvements
   - Obtain AI Security Engineer approval

**Evidence Required:**
- Cybersecurity Test Report (TMP-AI-ARS-008)
- Test Scripts and Configurations
- Attack Success Rate Data
- Vulnerability Assessment
- AI Security Engineer Approval

**Timing:** 2-4 weeks

**Quality Check:**
- All AI-specific threat categories tested
- Adversarial robustness validated
- Privacy protections verified
- Infrastructure security validated
- Vulnerabilities prioritized and addressed

---

### PHASE 6: CONTINUOUS ARS MONITORING

#### Step 6.1: Implement Continuous ARS Monitoring (All Controls)

**When:** Before deployment; operational throughout AI system lifecycle

**Who:** ML Ops + AI Security Engineer + Data Scientist

**How:**

1. **Design Integrated ARS Monitoring Dashboard**

   Consolidate all ARS monitoring into unified dashboard:

   ```
   ┌─────────────────────────────────────────────────────────┐
   │           INTEGRATED ARS MONITORING DASHBOARD            │
   ├─────────────────────────────────────────────────────────┤
   │                                                          │
   │  ACCURACY STATUS                                        │
   │    Accuracy: 89.2% ⚠️ (Target: 90%)                     │
   │    Precision: 91.5% ✅                                  │
   │    Recall: 86.8% ⚠️                                     │
   │    [30-day trend chart]                                  │
   │                                                          │
   │  ROBUSTNESS STATUS                                      │
   │    Noise Robustness: 85.7% ✅                           │
   │    Fault Tolerance: Operational ✅                       │
   │    Load Capacity: 78% of peak ✅                        │
   │                                                          │
   │  DRIFT STATUS                                           │
   │    Feature Drift (PSI): 0.18 ⚠️                         │
   │    Prediction Drift: Normal ✅                           │
   │    Days since retrain: 42                                │
   │    [PSI trend chart]                                     │
   │                                                          │
   │  SECURITY STATUS                                        │
   │    Adversarial Queries: 0.02% of traffic ✅             │
   │    Rate Limit Violations: 3 today ✅                    │
   │    Security Alerts: 0 critical ✅                       │
   │    Last Security Scan: 3 days ago                        │
   │                                                          │
   │  OVERALL ARS HEALTH: ⚠️ WARNING                         │
   │    Critical Issues: 0                                    │
   │    Warnings: 3 (Accuracy, Recall, Feature Drift)         │
   │                                                          │
   └─────────────────────────────────────────────────────────┘
   ```

2. **Implement Accuracy Monitoring** (per Step 2.1)
   - Real-time accuracy tracking
   - Subpopulation accuracy monitoring
   - Threshold alerting

3. **Implement Robustness Monitoring**

   - **Input Quality Monitoring:** Track percentage of out-of-range or anomalous inputs
   - **Fault Rate Monitoring:** Track dependency failures and fallback activations
   - **Performance Monitoring:** Track response time, throughput, error rate under load
   - **Long-Term Stability:** Track performance consistency over extended periods

4. **Implement Drift Monitoring** (per Step 4.1)
   - Feature drift (PSI) tracking
   - Prediction drift tracking
   - Concept drift via accuracy monitoring

5. **Implement Security Monitoring**

   - **Adversarial Query Detection:** Flag queries with adversarial characteristics
   - **Rate Limit Monitoring:** Track rate limit violations
   - **Access Monitoring:** Track unauthorized access attempts
   - **Data Leakage Monitoring:** Scan outputs for sensitive information
   - **Security Alert Tracking:** Track security incidents and alerts

6. **Configure Integrated Alerting**

   | Alert Category | Priority | Routing | Response Time |
   |---|---|---|---|
   | **Critical Accuracy Degradation** | P0 | SMS + Email | 24 hours |
   | **Critical Security Event** | P0 | SMS + Email + Security Team | Immediate |
   | **High Drift** | P1 | Email | 3 days |
   | **Robustness Warning** | P2 | Email | 1 week |
   | **Minor Drift** | P3 | Dashboard | Next review cycle |

7. **Establish Monitoring Procedures**

   - **Real-Time:** Automated monitoring systems detect critical issues immediately
   - **Daily:** ML Ops reviews dashboard for P0/P1 alerts
   - **Weekly:** Data Scientist reviews trends, investigates warnings
   - **Monthly:** AI System Owner reviews ARS report, approves actions
   - **Quarterly:** QA Lead presents ARS status to AI Governance Committee

8. **Document Integrated Monitoring Implementation**
   - Complete Integrated ARS Monitoring Plan (TMP-AI-ARS-003)
   - Document all monitoring components
   - Document alerting procedures
   - Obtain ML Ops and AI Security approval

**Evidence Required:**
- Integrated ARS Monitoring Plan (TMP-AI-ARS-003)
- Monitoring Dashboard (screenshot/link)
- Alert Configuration Documentation
- Monitoring Procedures Documentation
- ML Ops and AI Security Approval

**Timing:** 3-4 weeks (before deployment)

**Quality Check:**
- All ARS dimensions monitored (accuracy, robustness, drift, security)
- Alerts configured and tested
- Dashboard accessible to all stakeholders
- Monitoring procedures documented and understood

---

#### Step 6.2: Conduct Periodic ARS Reviews (All Controls)

**When:** Monthly, quarterly, annually

**Who:** AI Quality Assurance Lead + AI System Owner + AI Governance Committee

**How:**

1. **Monthly ARS Review**

   - **Review ARS Dashboard:** Check all metrics and trends
   - **Review Alerts:** Analyze triggered alerts and responses
   - **Assess Degradation Trends:** Identify emerging issues
   - **Document Findings:** Complete Monthly ARS Review Report

   **Key Questions:**
   - Are all ARS metrics within acceptable ranges?
   - Are there concerning trends (even if not yet at alert threshold)?
   - Have all alerts been responded to appropriately?
   - Are there emerging issues requiring attention?

2. **Quarterly ARS Review**

   More comprehensive review with AI Governance Committee:

   - **Present Quarterly ARS Report:** Summary of accuracy, robustness, drift, security over quarter
   - **Review Incidents:** Discuss all ARS incidents and responses
   - **Assess Threshold Appropriateness:** Are thresholds set correctly?
   - **Evaluate Control Effectiveness:** Are ARS controls working as intended?
   - **Approve Retraining Plans:** Approve scheduled model retraining
   - **Document Review:** Complete Quarterly ARS Review Report

3. **Annual ARS Framework Review**

   - **Assess Framework Effectiveness:** Is the ARS procedure working well?
   - **Review Metrics and Thresholds:** Are we measuring the right things?
   - **Benchmark Against State-of-the-Art:** Are we keeping pace with industry?
   - **Identify Improvements:** What can be improved?
   - **Update Framework:** Revise procedure, templates, thresholds as needed
   - **Document Review:** Complete Annual ARS Framework Review Report

**Evidence Required:**
- Monthly ARS Review Reports
- Quarterly ARS Review Reports (with AI Governance Committee approval)
- Annual ARS Framework Review Report
- Meeting Minutes and Decisions

**Timing:** Ongoing (monthly, quarterly, annual)

---

## 5. DECISION SUPPORT

### 5.1 Accuracy Threshold Decision Tree

```
START: Defining Accuracy Requirements
│
├─ Is this a safety-critical system? (physical harm possible)
│  ├─ YES → MINIMUM ACCURACY: ≥ 99%
│  │        RATIONALE: Human life/safety at stake
│  │        SUBPOPULATION ACCURACY GAP: ≤ 1%
│  │
│  └─ NO → Continue to next question
│
├─ Is this a healthcare or medical system?
│  ├─ YES → MINIMUM ACCURACY: ≥ 95%
│  │        RATIONALE: Medical decisions; regulatory requirements
│  │        CHECK: Compare to human expert baseline
│  │        SUBPOPULATION ACCURACY GAP: ≤ 2%
│  │
│  └─ NO → Continue to next question
│
├─ Is this a financial decision system? (lending, insurance, etc.)
│  ├─ YES → MINIMUM ACCURACY: ≥ 90%
│  │        RATIONALE: Financial impact; regulatory compliance
│  │        CHECK: Compare to existing decision process
│  │        SUBPOPULATION ACCURACY GAP: ≤ 3%
│  │
│  └─ NO → Continue to next question
│
├─ Does this affect fundamental rights? (hiring, housing, etc.)
│  ├─ YES → MINIMUM ACCURACY: ≥ 85%
│  │        RATIONALE: Fundamental rights; discrimination risk
│  │        FAIRNESS: Mandatory fairness metrics (demographic parity, equal opportunity)
│  │        SUBPOPULATION ACCURACY GAP: ≤ 5%
│  │
│  └─ NO → Continue to next question
│
├─ What is the cost of errors?
│  ├─ HIGH COST → MINIMUM ACCURACY: ≥ 85-90%
│  │               BALANCE: Consider false positive vs. false negative costs
│  │
│  ├─ MEDIUM COST → MINIMUM ACCURACY: ≥ 75-85%
│  │                 USER OVERRIDE: Implement human review for low confidence
│  │
│  └─ LOW COST → MINIMUM ACCURACY: ≥ 70-75%
│                ACCEPT: Lower accuracy acceptable for low-stakes decisions
│
└─ END: Document accuracy requirements
   │
   ├─ Specify minimum acceptable accuracy
   ├─ Specify target accuracy
   ├─ Specify subpopulation requirements
   ├─ Specify false positive vs. false negative tolerance
   ├─ Specify confidence threshold for human escalation
   └─ Obtain AI System Owner approval
```

### 5.2 Drift Response Decision Tree

```
START: Drift Alert Triggered
│
├─ What type of drift?
│  ├─ Feature Drift (PSI > threshold)
│  ├─ Prediction Drift (distribution change)
│  └─ Concept Drift (accuracy degradation)
│
├─ What is the severity?
│  │
│  ├─ CRITICAL (PSI > 0.50 OR accuracy degradation > 10%)
│  │  ├─ ACTION: Immediate investigation
│  │  ├─ TIMELINE: Within 24 hours
│  │  ├─ RESPONSE: Emergency retraining or rollback
│  │  └─ ESCALATION: AI System Owner + CTO
│  │
│  ├─ HIGH (PSI 0.25-0.50 OR accuracy degradation 5-10%)
│  │  ├─ ACTION: Prioritized investigation
│  │  ├─ TIMELINE: Within 3 days
│  │  ├─ RESPONSE: Scheduled retraining within 2 weeks
│  │  └─ ESCALATION: AI System Owner
│  │
│  ├─ MEDIUM (PSI 0.10-0.25 OR accuracy degradation 2-5%)
│  │  ├─ ACTION: Standard investigation
│  │  ├─ TIMELINE: Within 1 week
│  │  ├─ RESPONSE: Plan retraining within 1 month
│  │  └─ ESCALATION: Data Scientist
│  │
│  └─ LOW (PSI < 0.10 OR accuracy degradation < 2%)
│     ├─ ACTION: Monitor
│     ├─ TIMELINE: Next review cycle
│     ├─ RESPONSE: Include in next retraining cycle
│     └─ ESCALATION: None
│
├─ Investigate root cause
│  ├─ Real-world distribution change? → RETRAIN
│  ├─ Data pipeline issue? → FIX PIPELINE
│  ├─ Seasonal/temporary? → MONITOR
│  └─ Adversarial activity? → SECURITY RESPONSE
│
├─ Has accuracy degraded?
│  ├─ YES → URGENT: Follow accuracy degradation response (Step 2.2)
│  └─ NO → Plan retraining per severity level
│
├─ Execute response
│  ├─ Option 1: Model Retraining
│  ├─ Option 2: Feature Engineering Fix
│  ├─ Option 3: Model Update (major change)
│  └─ Option 4: Accept (low impact)
│
├─ Validate response effectiveness
│  ├─ Check drift metrics post-response
│  ├─ Check accuracy post-response
│  └─ Confirm drift resolved
│
└─ END: Document drift incident and response
```

### 5.3 Cybersecurity Control Selection Matrix

| Threat | Risk Level | Recommended Controls | Implementation Priority |
|---|---|---|---|
| **Data Poisoning** | Critical/High | Data provenance tracking; Outlier detection; Trusted data sources; Data validation | P0 - Before training |
| **Adversarial Examples** | High/Medium | Input validation; Adversarial training; Ensemble models; Confidence thresholding | P1 - Before deployment |
| **Model Inversion** | High/Medium | Differential privacy; Output filtering; Model complexity reduction; Confidence thresholding | P1 - Before deployment |
| **Model Stealing** | Medium | Rate limiting; Query monitoring; API authentication; Query pattern detection | P2 - Before deployment |
| **Membership Inference** | Medium/Low | Differential privacy; Model regularization; Confidence smoothing | P2 - Before deployment |
| **Backdoor Attacks** | High (if training data untrusted) | Backdoor detection; Model inspection; Trusted training pipeline; Monitoring | P1 - Before training |
| **Prompt Injection (LLMs)** | High | Prompt sanitization; Instruction hierarchy; Input filtering; Output validation | P0 - Before deployment |
| **DoS (Model)** | Medium | Rate limiting; Resource monitoring; Auto-scaling; Query timeout | P2 - Before deployment |

---

## 6. TEMPLATES AND FORMS

This procedure uses a consolidated set of 8 core templates that cover all ARS activities.

### 6.1 Core Templates (Consolidated)

| Template ID | Template Name | Purpose | Contains |
|---|---|---|---|
| **TMP-AI-ARS-001** | **Accuracy Requirements & Testing Workbook** | Comprehensive accuracy specification and testing | Accuracy requirements specification; Metric selection & thresholds; Test set design; Accuracy test report; Subpopulation accuracy analysis |
| **TMP-AI-ARS-002** | **Accuracy Test Results & Evidence Package** | Pre-deployment accuracy validation evidence | Accuracy test report; Confusion matrices; Calibration curves; Subpopulation results; Pass/fail decision documentation |
| **TMP-AI-ARS-003** | **Production Monitoring Configuration & Dashboards** | Production accuracy and drift monitoring setup | Monitoring plan; Data collection pipeline; Metric calculation logic; Alert configuration; Dashboard configuration |
| **TMP-AI-ARS-004** | **Robustness Requirements & Testing Workbook** | Comprehensive robustness specification and testing | Robustness requirements specification; Technical redundancy design; Robustness testing plan; Test results; Graceful degradation validation |
| **TMP-AI-ARS-005** | **Robustness Test Results & Evidence Package** | Pre-deployment robustness validation evidence | Robustness test report; Noise robustness results; Fault tolerance results; Load testing results; Pass/fail decision |
| **TMP-AI-ARS-006** | **Drift Detection Configuration & Response Plans** | Model drift monitoring and response | Drift detection plan; PSI configuration; Drift alert configuration; Drift response procedures; Retraining workflow |
| **TMP-AI-ARS-007** | **AI Cybersecurity Assessment & Controls Register** | Comprehensive AI security documentation | AI threat assessment; OWASP Top 10 assessment; Security controls register; Control implementation details; Security architecture |
| **TMP-AI-ARS-008** | **ARS Incident Reports & Lessons Learned** | Incident documentation and continuous improvement | Accuracy degradation incident report; Drift incident report; Security incident report; Root cause analysis; Lessons learned |

### 6.2 Template Usage by Procedure Step

| Procedure Step | Primary Template | Supporting Templates |
|---|---|---|
| 1.1 Define Accuracy Requirements | TMP-AI-ARS-001 | — |
| 1.2 Select Accuracy Metrics | TMP-AI-ARS-001 | — |
| 1.3 Conduct Accuracy Testing | TMP-AI-ARS-001, TMP-AI-ARS-002 | — |
| 2.1 Implement Production Monitoring | TMP-AI-ARS-003 | — |
| 2.2 Respond to Degradation | TMP-AI-ARS-008 | TMP-AI-ARS-003 |
| 3.1 Define Robustness Requirements | TMP-AI-ARS-004 | — |
| 3.2 Conduct Robustness Testing | TMP-AI-ARS-004, TMP-AI-ARS-005 | — |
| 4.1 Implement Drift Detection | TMP-AI-ARS-006 | TMP-AI-ARS-003 |
| 4.2 Respond to Drift | TMP-AI-ARS-008 | TMP-AI-ARS-006 |
| 5.1 Conduct Threat Assessment | TMP-AI-ARS-007 | — |
| 5.2 Implement Security Controls | TMP-AI-ARS-007 | — |
| 5.3 Conduct Security Testing | TMP-AI-ARS-007, TMP-AI-ARS-008 | — |
| 6.1 Implement Continuous Monitoring | TMP-AI-ARS-003 | TMP-AI-ARS-006 |
| 6.2 Conduct Periodic Reviews | TMP-AI-ARS-008 | All templates |

### 6.3 Template Structure

Each consolidated template contains:
- **Requirements Specifications** - Define what is needed
- **Test Plans** - How to validate requirements
- **Test Results** - Evidence of testing
- **Configuration Documentation** - How systems are configured
- **Incident Reports** - Document issues and responses
- **Dashboards** - Visualize metrics and status

---

## 7. QUALITY ASSURANCE

### 7.1 Quality Checks

| Step | Quality Check | Acceptance Criteria |
|---|---|---|
| Accuracy Requirements | Completeness & Justification | Requirements specific, measurable, justified based on use case |
| Accuracy Metrics | Appropriateness | Metrics align with use case and decision impact |
| Accuracy Testing | Statistical Validity | Test set size sufficient; confidence intervals documented; all metrics calculated |
| Accuracy Pass/Fail | Threshold Compliance | All metrics meet minimum acceptable thresholds; subpopulation gaps within limits |
| Production Monitoring | Operational Readiness | Monitoring operational before deployment; alerts tested |
| Robustness Requirements | Testability | Requirements are specific and testable |
| Robustness Testing | Comprehensiveness | All robustness dimensions tested; failure modes documented |
| Drift Detection | Sensitivity | Drift detection triggers at appropriate thresholds |
| Threat Assessment | Completeness | All AI-specific threat categories assessed; OWASP Top 10 evaluated |
| Security Controls | Effectiveness | Controls tested and operational; high-risk threats mitigated |
| Security Testing | Thoroughness | Adversarial, privacy, and infrastructure testing completed |

### 7.2 Audit and Review

- **Internal Audit:** Annual audit of ARS process effectiveness
- **External Audit:** Annual audit by external auditor (if required)
- **Regulatory Inspection:** Competent authority inspection (if triggered)
- **Management Review:** Quarterly review by AI Governance Committee

---

## 8. ESCALATION PROCEDURES

### 8.1 Escalation Triggers

| Trigger | Escalation Level | Escalation To | Timeline |
|---|---|---|---|
| Critical accuracy degradation (> 10%) | Level 1 | AI System Owner + CTO | Immediate (< 24 hours) |
| Accuracy below minimum threshold | Level 1 | AI System Owner + QA Lead | Immediate (< 24 hours) |
| Critical drift (PSI > 0.50) | Level 1 | AI System Owner + CTO | Within 24 hours |
| Critical security event | Level 1 | CISO + AI Security Engineer | Immediate |
| Major robustness failure | Level 2 | AI System Owner + QA Lead | Within 2 business days |
| High drift (PSI 0.25-0.50) | Level 2 | Data Scientist + AI System Owner | Within 3 business days |
| Warning-level accuracy degradation (5-10%) | Level 2 | Data Scientist + QA Lead | Within 2 business days |

### 8.2 Escalation Process

1. **Identify escalation trigger**
2. **Assess severity and impact**
3. **Notify escalation recipient (per timeline)**
4. **Prepare escalation documentation** (metrics, analysis, recommendations)
5. **Present issue and recommended actions**
6. **Obtain decision and approval**
7. **Document escalation and decision**
8. **Execute approved actions**
9. **Follow up and verify resolution**
10. **Close escalation with lessons learned**

---

## 9. COMPLIANCE AND AUDIT

### 9.1 Regulatory Requirements Mapping

This procedure implements the following EU AI Act Article 15 requirements:

| EU AI Act Article | Paragraph | Requirement | Implemented By |
|---|---|---|---|
| Article 15 | (1) | Appropriate level of accuracy, robustness, and cybersecurity for intended purpose | Steps 1.1, 3.1, 5.1 |
| Article 15 | (1) | Take account of generally acknowledged state of the art | Step 1.1 (benchmark against state-of-the-art) |
| Article 15 | (2) | Resilience against errors, faults, inconsistencies | Steps 3.1, 3.2 (robustness requirements and testing) |
| Article 15 | (2) | Technical redundancy solutions | Step 3.1 (technical redundancy requirements) |
| Article 15 | (3) | Resilience against attempts to alter use or performance | Steps 5.1, 5.2, 5.3 (threat assessment, controls, testing) |
| Article 15 | (3) | AI-specific vulnerabilities (adversarial examples, data poisoning) | Steps 5.1, 5.3 (threat assessment and adversarial testing) |
| Article 15 | (4) | Cybersecurity measures appropriate to circumstances and risks | Steps 5.2 (defense-in-depth controls) |

### 9.2 Audit Verification Points

Auditors will verify:

1. **Accuracy Requirements Established**
   - Accuracy requirements documented with justification
   - Metrics selected appropriately for use case
   - Thresholds defined and approved
   - Subpopulation requirements defined where applicable

2. **Accuracy Testing Conducted**
   - Pre-deployment accuracy testing completed
   - Test results documented
   - All metrics meet minimum thresholds
   - Pass/fail decision documented and approved

3. **Production Accuracy Monitoring Operational**
   - Monitoring systems configured and operational
   - Alerts configured appropriately
   - Monitoring procedures documented
   - Accuracy degradation incidents responded to

4. **Robustness Requirements Established**
   - Robustness requirements documented
   - Technical redundancy implemented per Article 15(2)
   - Graceful degradation strategy defined

5. **Robustness Testing Conducted**
   - Pre-deployment robustness testing completed
   - All robustness dimensions tested
   - Test results documented
   - Pass/fail decision documented

6. **Drift Detection Operational**
   - Drift detection configured and operational
   - Drift alerts configured
   - Drift incidents responded to
   - Retraining performed when needed

7. **Cybersecurity Threat Assessment Conducted**
   - AI-specific threats assessed per Article 15(3)
   - OWASP AI Top 10 threats evaluated
   - Threats prioritized by risk level
   - High-risk threats have mitigation plans

8. **Cybersecurity Controls Implemented**
   - Defense-in-depth controls implemented per Article 15(4)
   - Controls tested and operational
   - Controls address AI-specific vulnerabilities

9. **Cybersecurity Testing Conducted**
   - Adversarial attack testing completed
   - Privacy attack testing completed
   - Infrastructure security testing completed
   - Vulnerabilities documented and addressed

10. **Continuous Improvement Implemented**
    - Periodic ARS reviews conducted
    - Incidents documented with lessons learned
    - Framework updated based on experience

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
| **Prepared By** | [Name] | AI Quality Assurance Lead | __________ | ________ |
| **Reviewed By** | [Name] | Chief Information Security Officer | __________ | ________ |
| **Reviewed By** | [Name] | Chief Technology Officer | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## 12. DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Public/Internal/Confidential]
**Distribution:** AI Quality Assurance Lead, AI System Owners, Data Scientists, ML Ops, AI Security Engineers, AI Governance Committee, Compliance, Internal Audit
**Retention:** 10 years (per EU AI Act)
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]

---

## APPENDIX A: ACCURACY METRICS CATALOG

This appendix provides 30+ accuracy metrics organized by AI system type. Select appropriate metrics based on your AI system's task and use case.

### A.1 Classification Metrics

#### A.1.1 Binary Classification

| Metric | Formula | When to Use | Interpretation |
|---|---|---|---|
| **Accuracy** | (TP + TN) / (TP + TN + FP + FN) | Balanced classes | Overall correctness |
| **Precision** | TP / (TP + FP) | Cost of false positives high | Of positive predictions, how many are correct? |
| **Recall (Sensitivity)** | TP / (TP + FN) | Cost of false negatives high | Of actual positives, how many did we find? |
| **F1 Score** | 2 × (Precision × Recall) / (Precision + Recall) | Balance precision and recall | Harmonic mean of precision and recall |
| **Specificity** | TN / (TN + FP) | Cost of false positives high (medical) | Of actual negatives, how many did we identify? |
| **AUC-ROC** | Area under ROC curve | Evaluate across thresholds | Overall discriminative ability |
| **AUC-PR** | Area under Precision-Recall curve | Imbalanced classes | Precision-recall tradeoff |
| **Matthews Correlation** | (TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN)) | Imbalanced classes | Correlation between predicted and actual |
| **Cohen's Kappa** | (Observed accuracy - Expected accuracy) / (1 - Expected accuracy) | Inter-rater agreement | Agreement beyond chance |
| **Log Loss** | -Σ (y log(p) + (1-y) log(1-p)) | Probabilistic predictions | Quality of probability estimates |

**Threshold-Dependent vs. Threshold-Independent:**
- Threshold-Dependent: Accuracy, Precision, Recall, F1 (require classification threshold)
- Threshold-Independent: AUC-ROC, AUC-PR (evaluate across all thresholds)

#### A.1.2 Multi-Class Classification

| Metric | Formula | When to Use | Interpretation |
|---|---|---|---|
| **Overall Accuracy** | Correct predictions / Total predictions | Balanced classes | Overall correctness |
| **Macro F1** | Average of per-class F1 scores | Equal importance to all classes | Unweighted average performance |
| **Weighted F1** | Weighted average of per-class F1 by class size | Imbalanced classes | Weighted by class frequency |
| **Micro F1** | F1 calculated on pooled TP, FP, FN | Large classes more important | Aggregate across all classes |
| **Per-Class Precision** | Precision for each class | Class-specific performance | How accurate are predictions for this class? |
| **Per-Class Recall** | Recall for each class | Class-specific performance | How many instances of this class did we find? |
| **Confusion Matrix** | Matrix of predicted vs. actual classes | Understand error patterns | Where is the model confused? |
| **Top-K Accuracy** | Correct class in top K predictions | Multiple plausible answers | Is correct answer in top K? |

### A.2 Regression Metrics

| Metric | Formula | When to Use | Interpretation | Range |
|---|---|---|---|---|
| **Mean Absolute Error (MAE)** | Σ|y - ŷ| / n | Robust to outliers | Average absolute error | [0, ∞) lower better |
| **Root Mean Squared Error (RMSE)** | √(Σ(y - ŷ)² / n) | Penalize large errors | RMS of errors | [0, ∞) lower better |
| **Mean Squared Error (MSE)** | Σ(y - ŷ)² / n | Mathematical convenience | Average squared error | [0, ∞) lower better |
| **R-squared (R²)** | 1 - (SS_res / SS_tot) | Goodness of fit | Variance explained | (-∞, 1] higher better |
| **Adjusted R²** | 1 - (1 - R²)(n - 1)/(n - p - 1) | Multiple features | R² adjusted for # features | (-∞, 1] higher better |
| **Mean Absolute Percentage Error (MAPE)** | Σ|y - ŷ|/|y| / n × 100% | Interpretable scale | Average % error | [0, ∞) lower better |
| **Symmetric MAPE** | Σ|y - ŷ|/(|y| + |ŷ|) / n × 100% | Avoid division by zero | Symmetric % error | [0, 200%] lower better |
| **Median Absolute Error** | median(|y - ŷ|) | Robust to outliers | Median error | [0, ∞) lower better |

### A.3 Ranking and Recommendation Metrics

| Metric | Formula | When to Use | Interpretation |
|---|---|---|---|
| **NDCG (Normalized Discounted Cumulative Gain)** | DCG / IDCG | Graded relevance | Quality of ranking with position discount |
| **Mean Average Precision (MAP)** | Average of AP for all queries | Information retrieval | Average precision across all queries |
| **Mean Reciprocal Rank (MRR)** | Average of 1/rank_first_relevant | First relevant result important | How high is first relevant result? |
| **Precision@K** | Relevant items in top K / K | Top K results important | Of top K, how many are relevant? |
| **Recall@K** | Relevant items in top K / Total relevant | Coverage in top K | Of all relevant, how many in top K? |
| **Hit Rate@K** | Queries with ≥1 relevant in top K / Total queries | At least one relevant needed | % of queries with relevant result in top K |

### A.4 Object Detection Metrics

| Metric | Formula | When to Use | Interpretation |
|---|---|---|---|
| **mAP (mean Average Precision)** | Average of AP across all classes | Overall detection quality | Average precision across classes |
| **IoU (Intersection over Union)** | Area of Overlap / Area of Union | Localization accuracy | How well does box overlap ground truth? |
| **Precision** | TP / (TP + FP) | Avoid false detections | Of detected objects, how many are correct? |
| **Recall** | TP / (TP + FN) | Find all objects | Of all objects, how many did we detect? |
| **F1 Score** | 2 × (Precision × Recall) / (Precision + Recall) | Balance precision and recall | Harmonic mean |

### A.5 NLP and Text Generation Metrics

| Metric | When to Use | Interpretation | Range |
|---|---|---|---|
| **BLEU** | Machine translation | N-gram overlap with reference | [0, 1] higher better |
| **ROUGE-N** | Summarization | N-gram overlap | [0, 1] higher better |
| **ROUGE-L** | Summarization | Longest common subsequence | [0, 1] higher better |
| **METEOR** | Translation | Semantic similarity | [0, 1] higher better |
| **Perplexity** | Language modeling | How surprised is model? | [1, ∞) lower better |
| **Human Evaluation** | Subjective quality | Human judgment of quality | Task-specific |
| **BERTScore** | Semantic similarity | Contextualized embedding similarity | [-1, 1] higher better |
| **Exact Match** | Question answering | Exact string match | [0, 1] higher better |

### A.6 Segmentation Metrics

| Metric | Formula | When to Use | Interpretation |
|---|---|---|---|
| **IoU (Jaccard Index)** | |Prediction ∩ Ground Truth| / |Prediction ∪ Ground Truth| | Semantic segmentation | Overlap quality |
| **Dice Coefficient** | 2|Prediction ∩ Ground Truth| / (|Prediction| + |Ground Truth|) | Medical imaging | Similar to IoU, more weight to TP |
| **Pixel Accuracy** | Correct pixels / Total pixels | Overall correctness | Simple accuracy |
| **Mean IoU** | Average IoU across classes | Multi-class segmentation | Average overlap quality |

### A.7 Fairness and Bias Metrics

| Metric | Definition | When to Use | Interpretation |
|---|---|---|---|
| **Demographic Parity** | P(ŷ=1|A=a) = P(ŷ=1|A=b) | Equal positive rates desired | Are positive rates equal across groups? |
| **Equal Opportunity** | P(ŷ=1|y=1,A=a) = P(ŷ=1|y=1,A=b) | Equal true positive rates | Are true positive rates equal? |
| **Equalized Odds** | TPR and FPR equal across groups | Both errors matter equally | Are error rates equal? |
| **Predictive Parity** | P(y=1|ŷ=1,A=a) = P(y=1|ŷ=1,A=b) | Equal precision desired | Is precision equal across groups? |
| **Calibration** | P(y=1|ŷ=p,A=a) = p for all groups | Probability accuracy | Are probabilities accurate for all groups? |

### A.8 Calibration Metrics

| Metric | Definition | When to Use | Interpretation |
|---|---|---|---|
| **Expected Calibration Error (ECE)** | Weighted average of |accuracy - confidence| | Probabilistic models | How well do confidences match accuracies? |
| **Maximum Calibration Error (MCE)** | Maximum |accuracy - confidence| across bins | Worst-case calibration | Worst calibration error |
| **Brier Score** | MSE of probabilistic predictions | Probabilistic accuracy | Lower is better |

---

## APPENDIX B: AI THREAT CATALOG

This appendix provides a comprehensive catalog of AI-specific threats based on OWASP AI Top 10, MITRE ATLAS, and industry best practices.

### B.1 OWASP AI Security & Privacy Top 10 (2023)

#### LLM01: Prompt Injection
**Description:** Manipulating LLM via crafted inputs to override system instructions or cause unintended behavior.

**Attack Scenarios:**
- Direct injection: Malicious instructions in user prompt
- Indirect injection: Malicious instructions in external content (websites, documents)

**Mitigations:**
- Input sanitization and validation
- Instruction hierarchy (system > user)
- Prompt injection detection
- Output filtering
- Least privilege for LLM actions

**Testing:**
- Test with known prompt injection payloads
- Test with indirect injection via external content
- Verify system instructions cannot be overridden

---

#### LLM02: Insecure Output Handling
**Description:** Insufficient validation of LLM outputs before downstream use, leading to XSS, SSRF, or code injection.

**Attack Scenarios:**
- LLM generates malicious JavaScript → XSS when rendered
- LLM generates SQL injection payload → SQLi in backend
- LLM generates shell commands → command injection

**Mitigations:**
- Treat LLM output as untrusted
- Output sanitization before downstream use
- Encode outputs for context (HTML, SQL, shell)
- Content Security Policy (CSP)

**Testing:**
- Prompt LLM to generate malicious outputs (XSS, SQLi)
- Verify sanitization prevents exploitation
- Test with various output contexts

---

#### LLM03: Training Data Poisoning
**Description:** Manipulating training data to introduce backdoors, bias, or vulnerabilities.

**Attack Scenarios:**
- Inject backdoor triggers in training data
- Introduce bias to discriminate against groups
- Corrupt labels to degrade performance
- Inject malicious examples to leak sensitive info

**Mitigations:**
- Data provenance tracking
- Data quality validation
- Outlier detection in training data
- Trusted data sources
- Data sanitization
- Regular retraining with clean data

**Testing:**
- Inject poisoned samples (1%, 5%, 10%)
- Retrain and measure impact
- Verify data quality controls detect poisoning
- Test backdoor trigger activation

---

#### LLM04: Model Denial of Service
**Description:** Resource exhaustion attacks causing model unavailability or excessive costs.

**Attack Scenarios:**
- High-frequency requests → resource exhaustion
- Extremely long inputs → timeout or crash
- Computationally expensive queries → CPU/GPU exhaustion

**Mitigations:**
- Rate limiting per user/IP
- Input length limits
- Query timeout
- Resource monitoring and auto-scaling
- Cost limits per user

**Testing:**
- Load testing at 2x, 5x, 10x expected volume
- Test with extremely long inputs
- Test with computationally expensive queries
- Verify rate limiting blocks excessive requests

---

#### LLM05: Supply Chain Vulnerabilities
**Description:** Compromised third-party components (models, datasets, libraries) introducing vulnerabilities.

**Attack Scenarios:**
- Backdoored pre-trained model
- Poisoned public dataset
- Vulnerable third-party library
- Compromised model registry

**Mitigations:**
- Vet all third-party components
- Use trusted sources (verified publishers)
- Verify model and data integrity (checksums, signatures)
- Vulnerability scanning of dependencies
- Maintain inventory of components (SBOM)

**Testing:**
- Audit all third-party models and datasets
- Scan dependencies for known vulnerabilities
- Verify checksums and signatures
- Test models for backdoors

---

#### LLM06: Sensitive Information Disclosure
**Description:** LLM reveals confidential data from training set or system prompts.

**Attack Scenarios:**
- Model memorizes and regurgitates training data (PII, secrets)
- System prompts leaked via prompt injection
- Training data extracted via model inversion

**Mitigations:**
- Sanitize training data (remove PII, secrets)
- Differential privacy
- Output filtering (scan for PII, secrets)
- Limit model memorization (regularization)
- Avoid sensitive data in system prompts

**Testing:**
- Prompt model to reveal training data
- Attempt membership inference
- Attempt model inversion
- Verify output filtering catches PII/secrets

---

#### LLM07: Insecure Plugin Design
**Description:** Plugins/extensions with insufficient access control or input validation.

**Attack Scenarios:**
- Plugin accepts unvalidated LLM outputs → exploitation
- Plugin has excessive permissions → unauthorized actions
- Plugin lacks authentication → unauthorized access

**Mitigations:**
- Validate all plugin inputs (even from LLM)
- Principle of least privilege for plugins
- Plugin authentication and authorization
- Audit plugin code for vulnerabilities

**Testing:**
- Test plugins with malicious inputs
- Verify input validation
- Test with unauthorized access attempts
- Audit plugin permissions

---

#### LLM08: Excessive Agency
**Description:** LLM has excessive permissions or autonomy, leading to unintended actions.

**Attack Scenarios:**
- LLM authorized to delete data → accidental data loss
- LLM can execute arbitrary code → system compromise
- LLM can make financial transactions → unauthorized charges

**Mitigations:**
- Principle of least privilege
- Human-in-the-loop for high-risk actions
- Action allowlists (not blocklists)
- Transaction limits and approvals
- Audit logging of all actions

**Testing:**
- Test LLM with prompts to perform unauthorized actions
- Verify permission controls block unauthorized actions
- Verify human approval required for high-risk actions

---

#### LLM09: Overreliance
**Description:** Users or systems over-trust LLM outputs without verification, leading to harmful outcomes.

**Attack Scenarios:**
- User accepts incorrect LLM advice → bad decision
- System automatically acts on LLM output → unintended consequences
- LLM hallucinates facts → misinformation propagation

**Mitigations:**
- User education on LLM limitations
- Confidence scores and uncertainty quantification
- Human review of high-stakes decisions
- Fact-checking and source attribution
- Disclaimers and warnings

**Testing:**
- Test with prompts that elicit hallucinations
- Verify confidence scores reflect accuracy
- Verify disclaimers are displayed
- User testing to assess over-reliance

---

#### LLM10: Model Theft
**Description:** Unauthorized access to proprietary models via extraction or exfiltration.

**Attack Scenarios:**
- Query-based extraction (train surrogate model)
- Exfiltration of model files or weights
- Insider threat copying model
- Supply chain compromise

**Mitigations:**
- Rate limiting (prevent extraction via queries)
- Query monitoring (detect extraction patterns)
- API authentication and authorization
- Encrypt model files
- Access control for model storage
- Watermarking (prove ownership)

**Testing:**
- Attempt model extraction via queries
- Measure number of queries needed for surrogate
- Verify rate limiting prevents extraction
- Test access controls on model files

---

### B.2 Additional AI-Specific Threats

#### B.2.1 Adversarial Examples

**Description:** Crafted inputs designed to fool AI models (e.g., imperceptibly perturbed images misclassified).

**Attack Types:**
- **White-box:** Attacker has full model access (weights, architecture)
  - FGSM (Fast Gradient Sign Method)
  - PGD (Projected Gradient Descent)
  - C&W (Carlini & Wagner)
- **Black-box:** Attacker has only query access
  - Transfer attacks (attack trained on surrogate model)
  - Query-based attacks (iteratively refine input)

**Mitigations:**
- Adversarial training (train on adversarial examples)
- Input transformation (JPEG compression, bit depth reduction)
- Ensemble models (harder to fool multiple models)
- Adversarial detection (detect anomalous inputs)
- Confidence thresholding (reject low-confidence predictions)

**Testing:**
- Generate adversarial examples with FGSM, PGD, C&W
- Measure adversarial accuracy
- Test white-box and black-box attacks
- Verify defenses reduce attack success rate

---

#### B.2.2 Model Inversion

**Description:** Extracting training data or sensitive information from model.

**Attack Scenarios:**
- Reconstruct training images from model
- Infer sensitive attributes of training data
- Extract proprietary information embedded in model

**Mitigations:**
- Differential privacy during training
- Output perturbation
- Model complexity reduction (prevent memorization)
- Confidence thresholding (prevent overfitting signals)

**Testing:**
- Attempt to reconstruct training data
- Measure reconstruction quality
- Verify defenses prevent successful inversion

---

#### B.2.3 Membership Inference

**Description:** Determining if a specific data point was in the training set.

**Privacy Risk:** Can reveal sensitive information (e.g., "Was this person in the medical dataset?").

**Attack Method:**
- Train shadow model on similar data
- Compare confidence scores for members vs. non-members
- Classify data point as member or non-member

**Mitigations:**
- Differential privacy
- Model regularization (prevent overfitting)
- Confidence smoothing
- Limit model queries

**Testing:**
- Attempt membership inference on known members/non-members
- Measure attack accuracy
- Verify defenses reduce attack accuracy to near-random

---

#### B.2.4 Backdoor Attacks

**Description:** Hidden trigger causes model to misbehave when trigger is present.

**Attack Scenarios:**
- Trojan pattern in image → misclassification
- Specific phrase in text → malicious output
- Trigger embedded during training or fine-tuning

**Mitigations:**
- Backdoor detection (Neural Cleanse, STRIP)
- Model inspection and testing
- Trusted training pipeline
- Monitor for anomalous behavior

**Testing:**
- Test for known backdoor triggers
- Use backdoor detection tools
- Monitor for trigger-specific behavior

---

### B.3 MITRE ATLAS Framework (Adversarial Threat Landscape for AI Systems)

MITRE ATLAS provides a comprehensive knowledge base of adversary tactics and techniques targeting AI systems.

**Key Tactics:**
1. **Reconnaissance:** Gather information about AI system
2. **Resource Development:** Obtain resources for attack (data, models)
3. **Initial Access:** Gain access to AI system or data
4. **ML Model Access:** Access to model for inference or extraction
5. **Execution:** Run malicious code
6. **Persistence:** Maintain access
7. **Defense Evasion:** Avoid detection
8. **Discovery:** Explore AI system
9. **Collection:** Gather data
10. **ML Attack Staging:** Prepare ML-specific attacks
11. **Exfiltration:** Steal data or model
12. **Impact:** Disrupt, degrade, or manipulate AI system

**Reference:** https://atlas.mitre.org/

---

### B.4 Threat Risk Scoring

For each identified threat, calculate risk score:

**Risk Score = Likelihood × Impact**

| Score | Risk Level | Action Required |
|---|---|---|
| 20-25 | Critical | Immediate mitigation; block deployment |
| 15-19 | High | Mitigation plan within 30 days |
| 10-14 | Medium | Mitigation plan within 60 days or accept with justification |
| 5-9 | Low | Monitor or accept |
| 1-4 | Very Low | Accept |

---

## APPENDIX C: GLOSSARY OF TERMS

| Term | Definition |
|------|------------|
| **Accuracy** | The proportion of correct predictions made by an AI system |
| **Adversarial Example** | A crafted input designed to cause an AI system to make a mistake |
| **Calibration** | The degree to which predicted probabilities match actual outcome frequencies |
| **Concept Drift** | Change in the relationship between input features and target variable over time |
| **Differential Privacy** | A mathematical framework for protecting individual privacy in datasets and models |
| **F1 Score** | The harmonic mean of precision and recall, balancing both metrics |
| **Feature Drift** | Change in the distribution of input features over time |
| **FGSM (Fast Gradient Sign Method)** | A white-box adversarial attack method using model gradients |
| **Graceful Degradation** | System behavior that maintains partial functionality when operating under stress or failure |
| **Model Drift** | General term for changes in model performance or data distributions over time |
| **Model Inversion** | Attack technique to extract training data from a model |
| **Model Stealing** | Attack technique to replicate a model through queries |
| **Precision** | The proportion of positive predictions that are correct |
| **PSI (Population Stability Index)** | Metric for measuring feature distribution drift |
| **Recall (Sensitivity)** | The proportion of actual positive cases correctly identified |
| **Robustness** | The ability of an AI system to maintain performance under varying conditions, errors, or attacks |
| **Technical Redundancy** | Backup systems or components to maintain functionality if primary fails (Article 15(2)) |

---

## APPENDIX D: CROSS-REFERENCES TO OTHER PROCEDURES

### D.1 Procedure Dependencies

```
                    ┌─────────────────────────────┐
                    │  POL-AI-001                 │
                    │  AI Governance Policy       │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ PROC-AI-RM-001    │   │ PROC-AI-ARS-001   │   │ PROC-AI-DATA-001  │
│ Risk Management   │──▶│ Accuracy/Robust/  │◀──│ Data Governance   │
│                   │   │ Cybersecurity     │   │                   │
└───────────────────┘   │ (THIS PROCEDURE)  │   └───────────────────┘
        │               └─────────┬─────────┘           │
        │                         │                     │
        │                         ▼                     │
        │               ┌───────────────────┐           │
        │               │ PROC-AI-DOC-001   │           │
        └──────────────▶│ Documentation     │◀──────────┘
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-INC-001   │
                        │ Incident Response │
                        └───────────────────┘
```

### D.2 Procedure Interface Matrix

| From This Procedure | To Procedure | Interface | When |
|---------------------|--------------|-----------|------|
| Step 1.1 | PROC-AI-RM-001 | Risk classification informs accuracy requirements | During accuracy requirements definition |
| Step 2.2 | PROC-AI-INC-001 | Accuracy degradation may trigger incident | When degradation > 10% |
| Step 2.4 | PROC-AI-DATA-001 | Bias assessment uses data quality metrics | During bias assessment |
| Step 3.2 | PROC-AI-RM-001 | Robustness failures are risks | During robustness testing |
| Step 4.2 | PROC-AI-DATA-001 | Drift may require new training data | During drift response (retraining) |
| Step 5.1 | PROC-AI-RM-001 | Cybersecurity threats are risks | During threat assessment |
| Step 5.3 | PROC-AI-INC-001 | Security test failures may trigger incident | When critical vulnerabilities found |
| All | PROC-AI-DOC-001 | ARS documentation feeds technical documentation | Ongoing |

---

## APPENDIX E: QUICK REFERENCE CARD

### Accuracy Thresholds Quick Reference

| Use Case | Minimum Accuracy | Primary Metrics |
|---|---|---|
| Safety-Critical | ≥ 99% | Accuracy, Recall |
| Healthcare | ≥ 95% | Sensitivity, Specificity |
| Financial | ≥ 90% | Precision, Accuracy |
| Hiring | ≥ 85% | Accuracy, Fairness Metrics |
| Content Moderation | ≥ 80% | Precision, Recall |
| Recommendation | ≥ 75% | NDCG, MAP |

### Degradation Response Times

| Degradation Level | Threshold | Response Time | Action |
|---|---|---|---|
| Critical (Red) | > 10% | 24 hours | Emergency response; consider suspension |
| Warning (Orange) | 5-10% | 2 business days | Mitigation plan |
| Info (Yellow) | 2-5% | 5 business days | Investigation |

### Drift Response Triggers

| PSI Score | Drift Level | Action |
|---|---|---|
| > 0.50 | Critical | Immediate retraining |
| 0.25-0.50 | High | Retraining within 2 weeks |
| 0.10-0.25 | Medium | Retraining within 1 month |
| < 0.10 | Low | Monitor |

### Key Contacts

| Role | Contact | Escalate For |
|---|---|---|
| AI Quality Assurance Lead | [Email] | Accuracy and robustness issues |
| AI Security Engineer | [Email] | Cybersecurity threats and incidents |
| ML Ops Engineer | [Email] | Production monitoring and drift |
| Chief Technology Officer | [Email] | Critical issues and approvals |

### Key Monitoring Frequencies

| Activity | Frequency | Owner |
|---|---|---|
| Dashboard Review | Daily | ML Ops |
| Trend Analysis | Weekly | Data Scientist |
| ARS Report | Monthly | AI System Owner |
| Governance Review | Quarterly | AI Governance Committee |
| Framework Review | Annually | QA Lead |

---

## APPENDIX F: INTEGRATION DIAGRAM

This diagram shows how PROC-AI-ARS-001 integrates with the AI system lifecycle and other procedures.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           EU AI ACT COMPLIANCE FRAMEWORK                             │
│                          (ARS Integration with Lifecycle)                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  LIFECYCLE PHASE     │ DESIGN │ DEVELOP │  TEST   │ DEPLOY │  OPERATE │ RETRAIN    │
│                      │────────│─────────│─────────│────────│──────────│───────────││
│                                                                                      │
│  ┌─────────────────┐ │   ●    │         │         │        │          │            │
│  │ PROC-AI-RM-001  │ │ Risk   │         │         │        │          │            │
│  │ Risk Management │ │ ID     │         │         │        │          │            │
│  └─────────────────┘ │        │         │         │        │          │            │
│                                                                                      │
│  ┌─────────────────┐ │   ●    │    ●    │    ●    │   ◐    │     ●    │     ●      │
│  │ PROC-AI-ARS-001 │ │Define  │ Build   │ Pre-    │Monitor │ Continuous│ Drift     │
│  │ Accuracy/Robust/│ │Req     │ Controls│ Deploy  │Setup   │ Monitor   │ Response  │
│  │ Cybersecurity   │ │        │         │ Test    │        │           │            │
│  │(THIS PROCEDURE) │ │        │         │         │        │           │            │
│  └─────────────────┘ │        │         │         │        │           │            │
│                      │        │         │         │        │           │            │
│   Accuracy Pillar    │   ●    │         │    ●    │   ◐    │     ●    │            │
│   (Steps 1.1-1.3,    │        │         │         │        │           │            │
│    2.1-2.2)          │        │         │         │        │           │            │
│                      │        │         │         │        │           │            │
│   Robustness Pillar  │   ●    │    ●    │    ●    │        │     ◐    │            │
│   (Steps 3.1-3.2)    │        │         │         │        │           │            │
│                      │        │         │         │        │           │            │
│   Drift Detection    │   ◐    │         │         │   ●    │     ●    │     ●      │
│   (Steps 4.1-4.2)    │        │         │         │        │           │            │
│                      │        │         │         │        │           │            │
│   Cybersecurity      │   ●    │    ●    │    ●    │   ◐    │     ●    │            │
│   (Steps 5.1-5.3)    │        │         │         │        │           │            │
│                                                                                      │
│  Legend: ● Primary activity in this phase   ◐ Supporting activity in this phase    │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘

ARS TOUCHPOINTS THROUGHOUT LIFECYCLE:

     DESIGN              DEVELOP             TEST              OPERATE
        │                   │                  │                   │
        ▼                   ▼                  ▼                   ▼
   ┌──────────┐       ┌──────────┐       ┌──────────┐       ┌──────────┐
   │ Accuracy │       │ Implement│       │ Pre-     │       │Continuous│
   │   Req    │──────▶│ Controls │──────▶│ Deploy   │──────▶│ Monitor  │
   │Definition│       │  & Test  │       │ Testing  │       │ & Drift  │
   └──────────┘       └──────────┘       └──────────┘       └──────────┘
        │                   │                  │                   │
        │                   │                  │                   │
        ▼                   ▼                  ▼                   ▼
   ┌──────────┐       ┌──────────┐       ┌──────────┐       ┌──────────┐
   │Robustness│       │Redundancy│       │Robustness│       │  Fault   │
   │   Req    │──────▶│   Impl   │──────▶│  Testing │──────▶│ Monitor  │
   └──────────┘       └──────────┘       └──────────┘       └──────────┘
        │                   │                  │                   │
        │                   │                  │                   │
        ▼                   ▼                  ▼                   ▼
   ┌──────────┐       ┌──────────┐       ┌──────────┐       ┌──────────┐
   │  Threat  │       │ Security │       │ Security │       │ Security │
   │Assessment│──────▶│ Controls │──────▶│  Testing │──────▶│ Monitor  │
   └──────────┘       └──────────┘       └──────────┘       └──────────┘
        │                   │                  │                   │
        ▼                   ▼                  ▼                   ▼
   ┌───────────────────────────────────────────────────────────────────┐
   │              INTEGRATED ARS MONITORING DASHBOARD                  │
   │  (Accuracy + Robustness + Drift + Security = Overall ARS Health) │
   └───────────────────────────────────────────────────────────────────┘
```

---

**END OF PROCEDURE PROC-AI-ARS-001**
