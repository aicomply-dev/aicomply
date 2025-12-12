# AI Transparency Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-006  
**Standard Title:** AI Transparency Standard  
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
| 0.1 | 2025-06-30 | Product Director | Initial draft | - | - |
| 0.2 | 2025-07-15 | Product Director | Added Article 50 details | - | - |
| 0.3 | 2025-07-28 | Product Director | Incorporated user feedback | - | - |
| 1.0 | 2025-08-01 | Product Director | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for providing clear, comprehensive information to deployers and users about AI system capabilities and limitations in compliance with EU AI Act Articles 13 and 50.

**Primary Goals:**
- Provide comprehensive instructions for use to deployers per Article 13
- Ensure users are aware they are interacting with AI per Article 50
- Enable users to understand AI decisions through explainability

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems (EU AI Act Article 13)
- AI systems with transparency obligations (EU AI Act Article 50)
- All deployers and end users

### 2.2 Recommended Applicability

This standard is **recommended** for:
- All AI systems for best practices
- Limited-risk and minimal-risk AI systems (voluntary transparency)

### 2.3 Transparency Requirements Covered

- Instructions for Use (Article 13)
- User transparency disclosures (Article 50)
- Explainability and decision explanations
- Transparency notice design and implementation

### 2.4 Out of Scope

- General product documentation (covered by product documentation standards)
- Non-AI system transparency (covered by other transparency standards)
- Transparency outside EU AI Act scope

---

## CONTROL STANDARD

### Control TRANS-001: Instructions for Use Content

**Control ID:** TRANS-001  
**Control Name:** Instructions for Use Creation and Distribution  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system, after substantial modifications  
**Risk Level:** High

#### Control Objective

Provide comprehensive instructions for use to deployers per Article 13(3) to ensure deployers understand AI system characteristics, capabilities, limitations, and proper use, enabling safe and effective deployment.

#### Control Requirements

**CR-001.1: Complete Instructions for Use**

Create and distribute complete Instructions for Use containing all required elements per Article 13(3).

**Required Elements (Article 13(3)):**

| Element | Description | Mandatory | Example |
|---------|-------------|-----------|---------|
| **Provider Identity** | Identity and contact details of provider | YES | Company name, address, contact |
| **Characteristics** | Characteristics, capabilities, and limitations | YES | Detailed description |
| **Performance Metrics** | Accuracy, robustness metrics | YES | Accuracy: 95%, robustness: 92% |
| **Changes and Updates** | Information about changes and updates | YES | Update history, change log |
| **Human Oversight** | Human oversight measures | YES | Oversight procedures, triggers |
| **Expected Lifetime** | Expected lifetime of AI system | YES | 5 years, maintenance schedule |
| **Maintenance and Care** | Maintenance and care instructions | YES | Maintenance procedures, schedules |
| **Installation** | Installation instructions | YES | Step-by-step installation guide |
| **Technical Specifications** | Technical specifications | YES | Hardware, software requirements |
| **Intended Purpose** | Intended purpose and use cases | YES | Purpose statement, use cases |
| **Foreseeable Misuse** | Reasonably foreseeable misuse | YES | Misuse scenarios, prevention |
| **Known Risks** | Known risks and mitigation measures | YES | Risk list, mitigation strategies |
| **Training Requirements** | Training requirements for deployers | YES | Training courses, certifications |

**Mandatory Actions:**
- Create Instructions for Use per Article 13(3)
- Include all required elements
- Use clear, understandable language
- Obtain legal review
- Obtain Product Director approval
- Distribute to deployers before deployment
- Maintain distribution records

**Evidence Required:**
- Instructions for Use document (TECH-AI-IFU-XXX)
- Completeness checklist (completed)
- Legal review records
- Approval records
- Distribution records
- Deployer acknowledgment records

**Audit Verification:**
- Verify Instructions for Use created for all high-risk AI
- Confirm all required elements included
- Check legal review completed
- Validate approval obtained
- Verify distribution to deployers
- Check deployer acknowledgments received

---

### Control TRANS-002: Instructions for Use Updates

**Control ID:** TRANS-002  
**Control Name:** Instructions for Use Maintenance and Updates  
**Control Type:** Preventive  
**Control Frequency:** As triggered by changes  
**Risk Level:** Medium

#### Control Objective

Keep Instructions for Use current and accurate by updating them when AI system changes occur, ensuring deployers always have current information about AI system capabilities, limitations, and risks.

#### Control Requirements

**CR-002.1: Change-Driven Updates**

Update Instructions for Use promptly when changes occur.

**Update Triggers:**
- Substantial modifications to AI system
- Changes to intended purpose
- New risks identified
- Changes to capabilities or limitations
- Changes to performance metrics
- Changes to human oversight measures
- Changes to maintenance requirements
- Regulatory requirement changes

**Mandatory Actions:**
- Monitor for update triggers
- Assess impact on Instructions for Use
- Update affected sections
- Maintain version history
- Obtain approval for updates
- Communicate updates to deployers
- Track deployer acknowledgments
- Update within 30 days of change

**Update Communication Process:**
1. Identify change requiring update
2. Update Instructions for Use
3. Obtain approval
4. Notify all deployers
5. Provide updated Instructions for Use
6. Track acknowledgments
7. Follow up with non-acknowledgers

**Evidence Required:**
- Updated Instructions for Use (versioned)
- Update notifications sent
- Deployer acknowledgments
- Version history
- Approval records
- Update completion records

**Audit Verification:**
- Verify Instructions for Use updated within 30 days of changes
- Confirm all affected sections updated
- Check deployers notified
- Validate acknowledgments tracked
- Verify version history maintained

---

### Control TRANS-003: AI Disclosure to Users

**Control ID:** TRANS-003  
**Control Name:** User AI Disclosure Implementation  
**Control Type:** Preventive  
**Control Frequency:** Continuous, at each user interaction  
**Risk Level:** High

#### Control Objective

Ensure users are aware they are interacting with AI per Article 50 to enable informed decision-making and protect user rights, preventing deception and ensuring transparency.

#### Control Requirements

**CR-003.1: Mandatory AI Disclosure**

Implement AI disclosure notices per Article 50 requirements.

**Disclosure Requirements (Article 50):**

| AI System Type | Disclosure Requirement | When | Format |
|----------------|------------------------|------|--------|
| **Chatbots/Conversational AI** | Inform users they are interacting with AI (unless obvious) | Before or at start of interaction | Text notice, audio announcement |
| **Synthetic Content** | Label AI-generated content (deepfakes, etc.) | With content | Visible label, watermark |
| **Emotion Recognition** | Inform users of emotion recognition use | Before use | Clear notice, consent |
| **Biometric Categorization** | Inform users of biometric categorization | Before use | Clear notice, consent |

**Mandatory Actions:**
- Implement AI disclosure notices
- Display prominently (before or at interaction)
- Use clear, understandable language
- Obtain user acknowledgment (where required)
- Document disclosure
- Monitor disclosure effectiveness

**Disclosure Design Requirements:**
- Clear and understandable language
- Prominent display (visible, not hidden)
- Timely (before or at interaction)
- Accessible format (WCAG 2.1 AA)
- Multiple languages if needed
- Persistent (for ongoing interactions)

**Evidence Required:**
- Transparency notices (NOTICE-AI-TRANS-XXX)
- Disclosure screenshots/recordings
- User acknowledgment logs
- Disclosure effectiveness metrics
- Accessibility verification records

**Audit Verification:**
- Verify AI disclosure implemented for all applicable AI systems
- Confirm disclosure displayed prominently
- Check clear language used
- Validate user acknowledgments obtained (where required)
- Verify accessibility requirements met

---

### Control TRANS-004: Transparency Notice Design

**Control ID:** TRANS-004  
**Control Name:** Transparency Notice Design and Implementation  
**Control Type:** Preventive  
**Control Frequency:** Per AI system, continuous monitoring  
**Risk Level:** Medium

#### Control Objective

Design and implement effective transparency notices that are clear, prominent, accessible, and understandable to ensure users are properly informed about AI use.

#### Control Requirements

**CR-004.1: Notice Design and Testing**

Design transparency notices following best practices and test with users.

**Design Requirements:**

| Requirement | Specification | Implementation |
|-------------|--------------|---------------|
| **Clarity** | Clear, understandable language (grade 8 reading level) | Plain language review |
| **Prominence** | Visible, not hidden (above fold, sufficient size) | UI/UX design guidelines |
| **Timeliness** | Before or at interaction | Implementation timing |
| **Accessibility** | WCAG 2.1 AA compliant | Accessibility testing |
| **Languages** | Multiple languages if needed | Translation services |
| **Persistence** | Persistent for ongoing interactions | UI implementation |

**Mandatory Actions:**
- Design transparency notices
- Test with users (usability testing)
- Implement in UI/UX
- Verify visibility and prominence
- Test accessibility (WCAG 2.1 AA)
- Monitor effectiveness
- Update based on feedback

**User Testing Requirements:**
- Test with representative users
- Verify notice visibility
- Verify notice understandability
- Verify notice effectiveness
- Document test results
- Implement improvements

**Evidence Required:**
- Transparency notice designs
- User testing results
- Implementation verification
- Accessibility test results
- Effectiveness metrics
- User feedback records

**Audit Verification:**
- Verify transparency notices designed
- Confirm user testing conducted
- Check accessibility requirements met
- Validate notices implemented in UI
- Verify effectiveness monitored

---

### Control TRANS-005: Decision Explainability

**Control ID:** TRANS-005  
**Control Name:** AI Decision Explanations and Explainability  
**Control Type:** Preventive  
**Control Frequency:** On-demand, when requested  
**Risk Level:** Medium

#### Control Objective

Enable users to understand AI decisions by providing explanations when requested, supporting user rights to explanation and enabling informed decision-making.

#### Control Requirements

**CR-005.1: Explanation Capability**

Implement explanation capability for AI decisions.

**Explanation Requirements:**

| Requirement | Specification | Implementation |
|-------------|--------------|---------------|
| **On-Demand** | Provide explanations when requested | Explanation API/UI |
| **Key Factors** | Explain key factors influencing decision | Feature importance, decision factors |
| **Understandable** | Use understandable language | Plain language, visualizations |
| **Human Review** | Enable human review of decisions | Human review process |
| **Timely** | Provide explanations promptly | Response time < 5 seconds |

**Explanation Content:**
- Decision outcome
- Key factors influencing decision
- Confidence/probability scores
- Alternative outcomes considered
- Data used in decision
- Model version used

**Mandatory Actions:**
- Implement explanation capability
- Design explanation format
- Test understandability with users
- Enable on-demand access
- Monitor explanation usage
- Improve explanations based on feedback

**Explanation Formats:**
- Text explanations
- Visual explanations (charts, graphs)
- Interactive explanations
- Step-by-step explanations
- Summary and detailed views

**Evidence Required:**
- Explanation capability documentation
- Explanation examples
- User testing results
- Explanation usage metrics
- User feedback records
- Improvement records

**Audit Verification:**
- Verify explanation capability implemented
- Confirm explanations provided on-demand
- Check explanations understandable
- Validate human review enabled
- Verify explanation usage monitored

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-TRANS-001: Instructions for Use Creation Procedure

**Purpose:** Define step-by-step process for creating Instructions for Use  
**Owner:** Product Director  
**Implements:** Controls TRANS-001, TRANS-002

**Procedure Steps:**
1. Gather AI system information
2. Create Instructions for Use template
3. Complete all required elements - Control TRANS-001
4. Conduct legal review
5. Obtain approval
6. Distribute to deployers
7. Track acknowledgments
8. Update as needed - Control TRANS-002

**Outputs:**
- Complete Instructions for Use
- Distribution records
- Acknowledgment records

---

### Procedure PROC-AI-TRANS-002: Transparency Notice Implementation Procedure

**Purpose:** Define process for implementing transparency notices  
**Owner:** Product Director  
**Implements:** Controls TRANS-003, TRANS-004

**Procedure Steps:**
1. Identify AI system type requiring disclosure
2. Design transparency notice - Control TRANS-004
3. Test with users
4. Implement in UI/UX - Control TRANS-003
5. Verify visibility and accessibility
6. Monitor effectiveness
7. Update based on feedback

**Outputs:**
- Transparency notices
- User testing results
- Implementation verification
- Effectiveness metrics

---

### Procedure PROC-AI-TRANS-003: Transparency Information Update Procedure

**Purpose:** Define process for updating transparency information  
**Owner:** Product Director  
**Implements:** Control TRANS-002

**Procedure Steps:**
1. Monitor for update triggers
2. Assess impact on transparency information
3. Update Instructions for Use
4. Update transparency notices (if needed)
5. Obtain approval
6. Communicate updates
7. Track acknowledgments

**Outputs:**
- Updated transparency information
- Update notifications
- Acknowledgment records

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Instructions for Use Completeness | 100% | % of high-risk AI with complete Instructions for Use | Monthly | Product Director |
| Instructions for Use Currency | 100% | % of Instructions for Use current (< 1 year old) | Monthly | Product Director |
| Transparency Notice Display Rate | 100% | % of user interactions with disclosure | Daily | Product Director |
| User Awareness | ≥90% | % of users aware of AI use (survey) | Quarterly | Product Director |
| Update Timeliness | 100% | % of updates completed within 30 days | Monthly | Product Director |
| Explanation Availability | 100% | % of AI systems with explanation capability | Quarterly | Product Director |
| Accessibility Compliance | 100% | % of notices meeting WCAG 2.1 AA | Quarterly | Product Director |

**Monitoring Tools:**
- Transparency Dashboard
- User Survey Results
- Compliance Reports
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Instructions for Use completeness and quality
- Instructions for Use currency
- Transparency notice implementation
- Transparency notice effectiveness
- Explanation capability implementation
- Accessibility compliance
- Controls effectiveness (TRANS-001 through TRANS-005)

**Audit Activities:**
- Review 100% of high-risk AI for Instructions for Use
- Sample 20% of Instructions for Use for quality review
- Test transparency notices in production
- Survey users for awareness
- Test explanation capability
- Test accessibility compliance
- Interview key personnel

**Audit Outputs:**
- Annual Transparency Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready transparency documentation at all times
- Designate Product Director and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- Instructions for Use (sample or all)
- Transparency notices (screenshots/recordings)
- User awareness survey results
- Explanation capability documentation
- Accessibility test results
- Transparency procedures
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

| Activity | Product Director | AI System Owner | UX/UI Design | Legal & Compliance | Marketing | Customer Support |
|----------|-----------------|-----------------|-------------|-------------------|-----------|------------------|
| **Instructions for Use Creation** | **R/A** | **A** | C | C | C | I |
| **Instructions for Use Updates** | **R** | **A** | C | C | C | I |
| **Transparency Notice Design** | **R** | **A** | **R** | C | C | C |
| **Transparency Notice Implementation** | **R** | **A** | **R** | C | I | I |
| **Explanation Capability** | **R** | **A** | C | I | I | I |
| **User Testing** | **R** | **A** | **R** | I | C | C |
| **Accessibility Compliance** | **R** | **A** | **R** | I | I | I |
| **Deployer Communication** | **R** | **A** | I | C | **R** | **R** |
| **User Communication** | **R** | **A** | C | C | **R** | **R** |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**Product Director**
- **Primary Responsibility:** Owns transparency framework, ensures compliance
- **Key Activities:**
  - Establishes transparency framework
  - Approves Instructions for Use
  - Approves transparency notices
  - Reports transparency metrics
  - Coordinates with authorities
- **Required Competencies:** EU AI Act Articles 13 and 50, product management, user experience

**AI System Owner**
- **Primary Responsibility:** Accountable for transparency of their AI system
- **Key Activities:**
  - Ensures Instructions for Use created
  - Ensures transparency notices implemented
  - Participates in user testing
  - Coordinates updates
- **Required Competencies:** AI system knowledge, transparency requirements

**UX/UI Design**
- **Primary Responsibility:** Designs and implements transparency notices
- **Key Activities:**
  - Designs transparency notices
  - Implements notices in UI/UX
  - Tests accessibility
  - Conducts user testing
- **Required Competencies:** UX/UI design, accessibility (WCAG), user testing

**Legal & Compliance**
- **Primary Responsibility:** Reviews for regulatory compliance
- **Key Activities:**
  - Reviews Instructions for Use
  - Reviews transparency notices
  - Advises on regulatory requirements
  - Manages authority requests
- **Required Competencies:** EU AI Act legal expertise, regulatory compliance

**Marketing**
- **Primary Responsibility:** Communicates transparency to deployers and users
- **Key Activities:**
  - Communicates Instructions for Use to deployers
  - Communicates transparency to users
  - Manages deployer relationships
- **Required Competencies:** Communication, stakeholder management

**Customer Support**
- **Primary Responsibility:** Supports users with transparency questions
- **Key Activities:**
  - Answers user questions about AI use
  - Provides explanations
  - Escalates complex questions
- **Required Competencies:** Customer service, AI system knowledge

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Transparency is a **critical regulatory compliance activity** for high-risk AI systems and AI systems with transparency obligations. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Simplified Instructions (Minimal-Risk AI)** | AI system clearly minimal-risk; simplified instructions sufficient | Permanent | Product Director | Document rationale; Annual re-confirmation |
| **Extended Update Timeline** | Resource constraints prevent timely update | 60 days | Product Director + AI Governance Committee | Interim communication; Accelerated plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping Instructions for Use for high-risk AI** - Mandatory per Article 13, no exceptions  
❌ **Skipping AI disclosure for Article 50 systems** - Mandatory per Article 50, no exceptions  
❌ **Hiding transparency notices** - Violates transparency requirements  
❌ **Using unclear language** - Violates understandability requirements  
❌ **Skipping accessibility requirements** - Violates accessibility laws  

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
- Close exception when normal transparency completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **High-risk AI without Instructions for Use** | Critical | Immediate suspension until Instructions created | Create Instructions within 10 business days; Root cause analysis |
| **Missing AI disclosure (Article 50)** | Critical | Immediate correction; Compliance gap assessment | Implement disclosure within 5 business days |
| **Outdated Instructions for Use** | High | Escalation to AI Governance Committee; Freeze on new features | Update Instructions within 30 business days |
| **Inaccessible transparency notices** | High | Immediate correction; Legal risk | Fix accessibility within 5 business days |
| **Unclear transparency language** | Medium | Written warning | Improve language within 10 business days |
| **Missing explanation capability** | Medium | Written warning | Implement explanation capability within 30 business days |

---

### 8.2 Escalation Procedures

**Level 1: Product Director**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: Product Director + AI Governance Committee**
- Repeated violations
- Missing Instructions for Use
- Missing transparency notices
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- High-risk AI without Instructions for Use
- Missing Article 50 disclosures
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
- ⚠️ High-risk AI system operating without Instructions for Use
- ⚠️ Article 50 disclosure missing for applicable systems
- ⚠️ Regulatory inquiry or inspection related to transparency
- ⚠️ User complaint about lack of transparency
- ⚠️ Media attention to transparency issues

---

### 8.4 Disciplinary Actions

Individuals responsible for transparency violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly hiding AI use)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Transparency KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-TRANS-001** | Instructions for Use Completeness | % of high-risk AI with complete Instructions for Use | 100% | (# high-risk AI with IFU / # high-risk AI) × 100 | Monthly | Product Director | AI Governance Committee |
| **KPI-TRANS-002** | Instructions for Use Currency | % of Instructions for Use current (< 1 year old) | 100% | (# current IFU / # total IFU) × 100 | Monthly | Product Director | Management |
| **KPI-TRANS-003** | Transparency Notice Display Rate | % of user interactions with disclosure | 100% | (# interactions with disclosure / # total interactions) × 100 | Daily | Product Director | Management |
| **KPI-TRANS-004** | User Awareness | % of users aware of AI use (survey) | ≥90% | Survey results | Quarterly | Product Director | AI Governance Committee |
| **KPI-TRANS-005** | Update Timeliness | % of updates completed within 30 days | 100% | (# updates within 30 days / # total updates) × 100 | Monthly | Product Director | Management |
| **KPI-TRANS-006** | Explanation Availability | % of AI systems with explanation capability | 100% | (# AI systems with explanations / # total AI systems) × 100 | Quarterly | Product Director | AI Governance Committee |
| **KPI-TRANS-007** | Accessibility Compliance | % of notices meeting WCAG 2.1 AA | 100% | (# compliant notices / # total notices) × 100 | Quarterly | Product Director | AI Governance Committee |
| **KPI-TRANS-008** | Deployer Acknowledgment Rate | % of deployers acknowledging Instructions for Use | 100% | (# acknowledgments / # deployers) × 100 | Monthly | Product Director | Management |
| **KPI-TRANS-009** | Explanation Usage Rate | % of users requesting explanations | ≥10% | (# explanation requests / # total decisions) × 100 | Monthly | Product Director | Management |
| **KPI-TRANS-010** | User Satisfaction (Transparency) | User satisfaction score with transparency | ≥4.0/5.0 | User survey score | Quarterly | Product Director | AI Governance Committee |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (Product Director access)
- Current Instructions for Use completeness
- Transparency notice display rates
- User awareness metrics
- Explanation usage
- Accessibility compliance

**Monthly Management Report**
- KPI-TRANS-001, 002, 003, 005, 008, 009
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- User awareness survey results
- Explanation capability status
- Accessibility compliance status
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- Transparency maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Instructions for Use Completeness** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Transparency Notice Display Rate** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee |
| **User Awareness** | ≥90% | 80-89% | < 80% | Yellow: Improve transparency; Red: Escalate to AI Governance Committee |
| **Update Timeliness** | 100% | 90-99% | < 90% | Red: Escalate to AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in transparency must complete role-specific training to ensure competency in EU AI Act Articles 13 and 50 requirements, transparency design, and transparency procedures.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **Product Director** | Transparency Management Expert Training | 12 hours | EU AI Act Articles 13 and 50; Instructions for Use; Transparency notices; Explainability | Initial + annually | Yes - Written exam (≥90%) |
| **UX/UI Designers** | Transparency Notice Design | 8 hours | Article 50 requirements; Notice design; Accessibility; User testing | Initial + annually | Yes - Practical design exercise |
| **AI System Owners** | Transparency Overview | 4 hours | Transparency requirements; Responsibilities; Instructions for Use | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **Marketing** | Transparency Communication | 4 hours | Communicating transparency; Deployer communication; User communication | Initial + annually | Yes - Knowledge check (≥80%) |
| **Customer Support** | Transparency Support | 3 hours | Answering transparency questions; Providing explanations | Initial + annually | Yes - Knowledge check (≥80%) |
| **All AI Development Staff** | Transparency Awareness | 2 hours | Transparency basics; When transparency needed; Requirements | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 13 (Instructions for Use)**
- Required elements
- Content requirements
- Distribution requirements
- Update requirements

**EU AI Act Article 50 (User Transparency)**
- Disclosure requirements
- Chatbot/conversational AI disclosure
- Synthetic content labeling
- Emotion recognition disclosure
- Biometric categorization disclosure

**Transparency Notice Design**
- Design principles
- Accessibility requirements (WCAG 2.1 AA)
- User testing
- Effectiveness measurement

**Explainability**
- Explanation requirements
- Explanation formats
- User understanding
- Human review

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with transparency tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent transparency activities
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new transparency staff
- Job shadowing during transparency implementation
- Supervised transparency work for first 3 AI systems

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced transparency staff

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- Product Directors: Must create Instructions for Use for 1 sample AI system with 100% completeness before independent creation
- UX/UI Designers: Must design transparency notice meeting all requirements
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (Product Directors) | < 30 days | Per person |

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
| **Instructions for Use** | Comprehensive information provided to deployers about AI system characteristics, capabilities, limitations, and proper use | EU AI Act Article 13(3) |
| **Transparency** | Providing clear information to users about AI system use and capabilities | EU AI Act Article 50 |
| **AI Disclosure** | Informing users they are interacting with AI | EU AI Act Article 50 |
| **Synthetic Content** | AI-generated content such as deepfakes, synthetic media | EU AI Act Article 50(1)(b) |
| **Emotion Recognition** | AI system that infers emotions from biometric data | EU AI Act Article 50(1)(c) |
| **Biometric Categorization** | AI system that categorizes persons based on biometric data | EU AI Act Article 50(1)(d) |
| **Explainability** | Ability to explain AI decisions in understandable terms | This Standard |
| **Deployer** | Natural or legal person using AI system under its authority | EU AI Act Article 3(4) |
| **User** | End user interacting with AI system | This Standard |
| **Accessibility** | Design that enables use by people with disabilities (WCAG 2.1 AA) | WCAG 2.1 |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Transparency and Information Provision** | Article 13 | Instructions for Use for high-risk AI | TRANS-001, TRANS-002 |
| **Transparency Obligations** | Article 50 | User disclosure for certain AI systems | TRANS-003, TRANS-004 |
| **AI Disclosure** | Article 50(1) | Inform users of AI interaction | TRANS-003 |
| **Synthetic Content Labeling** | Article 50(1)(b) | Label AI-generated content | TRANS-003 |
| **Emotion Recognition Disclosure** | Article 50(1)(c) | Inform users of emotion recognition | TRANS-003 |
| **Biometric Categorization Disclosure** | Article 50(1)(d) | Inform users of biometric categorization | TRANS-003 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 5.2: AI policy** | Policy includes transparency commitment | Instructions for Use and transparency notices |
| **Clause 6.1.2: AI system impact assessment** | Assess transparency impacts | Transparency notice design and testing |
| **Clause 7.4: Communication** | Communicate with interested parties | Instructions for Use, transparency notices |
| **Clause 8.2: AI system risk assessment** | Transparency-related risk assessment | Transparency requirements in risk assessment |

---

### 12.3 Relationship to Other Standards

This transparency standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines transparency requirements | High-risk AI requires Article 13; Article 50 applies to specific AI types |
| **STD-AI-002: Risk Management** | Known risks documented in Instructions for Use | Risk management outputs feed into Instructions for Use |
| **STD-AI-004: Technical Documentation** | Instructions for Use referenced in technical documentation | Instructions for Use linked to Annex IV documentation |
| **STD-AI-007: Human Oversight** | Human oversight measures in Instructions for Use | Human oversight information included in Instructions for Use |

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 13: Transparency and Information Provision
- Article 13(3): Instructions for Use Content
- Article 50: Transparency Obligations
- Article 50(1): AI Disclosure Requirements

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system
- ISO/IEC 23894:2023: Information technology — Artificial intelligence — Guidance on risk management

**Accessibility Standards:**
- WCAG 2.1: Web Content Accessibility Guidelines

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard
- STD-AI-004: AI Technical Documentation Standard
- PROC-AI-TRANS-001, -002, -003: Transparency procedures

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Product Director | Product Director | _________________ | ________ |
| **Reviewed By** | Michael Brown | Chief Legal Officer | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-006**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the Product Director.*
