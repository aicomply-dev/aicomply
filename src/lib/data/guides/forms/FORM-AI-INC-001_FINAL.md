# FORM-AI-INC-001: AI Incident Report Form

**Form ID:** FORM-AI-INC-001
**Form Name:** AI Incident Report Form
**Version:** 1.0
**Effective Date:** [To be filled]
**Related Standard:** STD-AI-013: AI Incident Management Standard
**Related Procedure:** PROC-AI-INC-001: AI Incident Management Procedure

---

## Purpose

This form is used to report, document, and track incidents involving AI systems. This includes malfunctions, serious incidents requiring regulatory notification, near-misses, and any event that causes or could cause harm to health, safety, or fundamental rights.

## Instructions

1. Complete Section 1-3 immediately upon incident identification (within 1 hour)
2. Complete remaining sections as investigation progresses
3. For serious incidents, notify regulatory authorities within required timeframes
4. Retain completed forms for minimum 10 years
5. Update form as additional information becomes available

---

## SECTION 1: INCIDENT IDENTIFICATION (Complete Immediately)

### 1.1 Incident Details

| Field | Entry |
|-------|-------|
| **Incident ID** | INC-AI-[YYYY]-[####] |
| **Date/Time of Incident** | |
| **Date/Time Reported** | |
| **Time Zone** | |
| **Reported By** | |
| **Reporter Role/Title** | |
| **Reporter Contact** | |

### 1.2 AI System Information

| Field | Entry |
|-------|-------|
| **AI System Name** | |
| **AI System ID** | |
| **Version/Release** | |
| **AI System Owner** | |
| **Risk Classification** | [ ] High-Risk [ ] Limited-Risk [ ] Minimal-Risk |
| **EU Database Registration ID** | (if applicable) |

### 1.3 Incident Classification

| Classification | Selected | Description |
|----------------|----------|-------------|
| **Serious Incident** | [ ] | Death, serious damage to health, property, environment, or serious fundamental rights violation |
| **Major Incident** | [ ] | Significant impact but not meeting serious incident criteria |
| **Minor Incident** | [ ] | Limited impact, no harm to persons |
| **Near Miss** | [ ] | Potential incident that was prevented or did not result in harm |
| **Malfunction** | [ ] | System did not perform as intended |

### 1.4 Initial Severity Assessment

| Severity | Selected | Criteria |
|----------|----------|----------|
| **Critical** | [ ] | Fatality, permanent disability, widespread fundamental rights violation |
| **High** | [ ] | Hospitalization, significant harm, substantial rights impact |
| **Medium** | [ ] | Medical treatment required, moderate harm, noticeable impact |
| **Low** | [ ] | Minor harm, first aid only, minimal impact |
| **None** | [ ] | No harm occurred (near miss/malfunction only) |

---

## SECTION 2: INCIDENT DESCRIPTION (Complete Within 4 Hours)

### 2.1 Incident Summary

*Provide a clear, factual summary of the incident (who, what, when, where):*

| Field | Entry |
|-------|-------|
| **Brief Description** | |
| **Location** | |
| **Operating Environment** | [ ] Production [ ] Testing [ ] Development [ ] Other: |

### 2.2 Persons Affected

| # | Person/Group | Type | Nature of Impact | Severity |
|---|--------------|------|------------------|----------|
| 1 | | [ ] User [ ] Affected Person [ ] Third Party | | [ ] Fatal [ ] Severe [ ] Moderate [ ] Minor [ ] None |
| 2 | | [ ] User [ ] Affected Person [ ] Third Party | | [ ] Fatal [ ] Severe [ ] Moderate [ ] Minor [ ] None |
| 3 | | [ ] User [ ] Affected Person [ ] Third Party | | [ ] Fatal [ ] Severe [ ] Moderate [ ] Minor [ ] None |

**Total Persons Affected:** ___

### 2.3 Harm Description

| Harm Type | Occurred? | Description |
|-----------|-----------|-------------|
| **Physical Harm** | [ ] Yes [ ] No | |
| **Psychological Harm** | [ ] Yes [ ] No | |
| **Property Damage** | [ ] Yes [ ] No | |
| **Environmental Damage** | [ ] Yes [ ] No | |
| **Financial Loss** | [ ] Yes [ ] No | |
| **Discrimination** | [ ] Yes [ ] No | |
| **Privacy Violation** | [ ] Yes [ ] No | |
| **Other Rights Violation** | [ ] Yes [ ] No | Specify: |

### 2.4 Sequence of Events

*Document the timeline of events:*

| Time | Event |
|------|-------|
| | |
| | |
| | |
| | |
| | |

---

## SECTION 3: IMMEDIATE ACTIONS (Complete Within 4 Hours)

### 3.1 Containment Actions Taken

| # | Action | Date/Time | Taken By | Status |
|---|--------|-----------|----------|--------|
| 1 | | | | [ ] Complete [ ] In Progress [ ] Planned |
| 2 | | | | [ ] Complete [ ] In Progress [ ] Planned |
| 3 | | | | [ ] Complete [ ] In Progress [ ] Planned |
| 4 | | | | [ ] Complete [ ] In Progress [ ] Planned |

### 3.2 System Status

| Field | Entry |
|-------|-------|
| **Current AI System Status** | [ ] Operational [ ] Degraded [ ] Suspended [ ] Shut Down |
| **Containment Effective?** | [ ] Yes [ ] No [ ] Partially |
| **Risk of Recurrence** | [ ] High [ ] Medium [ ] Low |

### 3.3 Notifications Made

| Stakeholder | Notified? | Date/Time | Notified By | Method |
|-------------|-----------|-----------|-------------|--------|
| AI System Owner | [ ] Yes [ ] No | | | |
| Incident Manager | [ ] Yes [ ] No | | | |
| AI Risk Manager | [ ] Yes [ ] No | | | |
| Compliance Officer | [ ] Yes [ ] No | | | |
| Executive Management | [ ] Yes [ ] No | | | |
| Legal | [ ] Yes [ ] No | | | |
| DPO | [ ] Yes [ ] No | | | |

---

## SECTION 4: SERIOUS INCIDENT REGULATORY NOTIFICATION

*Complete this section ONLY if this is a SERIOUS INCIDENT*

### 4.1 Serious Incident Determination

| Criterion | Applies? | Evidence |
|-----------|----------|----------|
| Death of a person | [ ] Yes [ ] No | |
| Serious damage to health of a person | [ ] Yes [ ] No | |
| Serious damage to property | [ ] Yes [ ] No | |
| Serious damage to environment | [ ] Yes [ ] No | |
| Serious and irreversible impact on fundamental rights | [ ] Yes [ ] No | |
| Serious violation of fundamental rights | [ ] Yes [ ] No | |

**Confirmed Serious Incident:** [ ] Yes [ ] No

### 4.2 Regulatory Notification Requirements

| Requirement | Status | Date/Time | Reference |
|-------------|--------|-----------|-----------|
| Initial notification to market surveillance authority (within 15 days of awareness for providers) | [ ] Complete [ ] Pending [ ] N/A | | |
| Notification to relevant competent authority | [ ] Complete [ ] Pending [ ] N/A | | |
| Notification via EU AI database | [ ] Complete [ ] Pending [ ] N/A | | |

### 4.3 Regulatory Notification Details

| Field | Entry |
|-------|-------|
| **Notified Authority** | |
| **Notification Reference** | |
| **Date of Notification** | |
| **Notified By** | |
| **Follow-up Required?** | [ ] Yes - Due: _______ [ ] No |

### 4.4 Provider Notification (for Deployers)

*If you are a deployer, notify the provider of the AI system:*

| Field | Entry |
|-------|-------|
| **Provider Name** | |
| **Provider Notified** | [ ] Yes [ ] No |
| **Date of Notification** | |
| **Provider Reference/Ticket** | |

---

## SECTION 5: INVESTIGATION

### 5.1 Investigation Initiation

| Field | Entry |
|-------|-------|
| **Investigation Required?** | [ ] Yes [ ] No |
| **Investigation Lead** | |
| **Investigation Team** | |
| **Investigation Start Date** | |
| **Target Completion Date** | |

### 5.2 Evidence Collected

| # | Evidence Type | Description | Location | Collected By | Date |
|---|---------------|-------------|----------|--------------|------|
| 1 | [ ] Log [ ] Data [ ] Screenshot [ ] Document [ ] Witness | | | | |
| 2 | [ ] Log [ ] Data [ ] Screenshot [ ] Document [ ] Witness | | | | |
| 3 | [ ] Log [ ] Data [ ] Screenshot [ ] Document [ ] Witness | | | | |
| 4 | [ ] Log [ ] Data [ ] Screenshot [ ] Document [ ] Witness | | | | |

### 5.3 AI System Logs Reviewed

| Log Type | Available? | Time Range | Key Findings |
|----------|------------|------------|--------------|
| Input logs | [ ] Yes [ ] No | | |
| Output logs | [ ] Yes [ ] No | | |
| Decision logs | [ ] Yes [ ] No | | |
| Error logs | [ ] Yes [ ] No | | |
| Audit trail | [ ] Yes [ ] No | | |
| Performance metrics | [ ] Yes [ ] No | | |

### 5.4 Root Cause Analysis

| Field | Entry |
|-------|-------|
| **Analysis Method** | [ ] 5 Whys [ ] Fishbone [ ] Fault Tree [ ] Other: |
| **Immediate Cause** | |
| **Contributing Factors** | |
| **Root Cause(s)** | |

### 5.5 Root Cause Categories

| Category | Contributing? | Details |
|----------|---------------|---------|
| **Data Quality** | [ ] Yes [ ] No | |
| **Model/Algorithm** | [ ] Yes [ ] No | |
| **Training Data** | [ ] Yes [ ] No | |
| **System Integration** | [ ] Yes [ ] No | |
| **Human Oversight Failure** | [ ] Yes [ ] No | |
| **Process/Procedure** | [ ] Yes [ ] No | |
| **Configuration/Settings** | [ ] Yes [ ] No | |
| **External/Environmental** | [ ] Yes [ ] No | |
| **Hardware/Infrastructure** | [ ] Yes [ ] No | |
| **Security Breach** | [ ] Yes [ ] No | |
| **Unknown/Undetermined** | [ ] Yes [ ] No | |

---

## SECTION 6: IMPACT ASSESSMENT

### 6.1 Actual Impact

| Impact Area | Severity | Description | Quantification |
|-------------|----------|-------------|----------------|
| Health & Safety | [ ] Critical [ ] High [ ] Medium [ ] Low [ ] None | | |
| Fundamental Rights | [ ] Critical [ ] High [ ] Medium [ ] Low [ ] None | | |
| Financial | [ ] Critical [ ] High [ ] Medium [ ] Low [ ] None | | |
| Reputational | [ ] Critical [ ] High [ ] Medium [ ] Low [ ] None | | |
| Operational | [ ] Critical [ ] High [ ] Medium [ ] Low [ ] None | | |
| Legal/Regulatory | [ ] Critical [ ] High [ ] Medium [ ] Low [ ] None | | |

### 6.2 Potential Impact (if not contained)

| Field | Entry |
|-------|-------|
| **Maximum Potential Impact** | |
| **Number of Users Potentially Affected** | |
| **Duration of Potential Exposure** | |

### 6.3 Final Severity Classification

| Field | Entry |
|-------|-------|
| **Final Severity** | [ ] Critical [ ] High [ ] Medium [ ] Low |
| **Rationale** | |

---

## SECTION 7: CORRECTIVE ACTIONS

### 7.1 Immediate Corrective Actions

| # | Action | Owner | Due Date | Status | Completion Date |
|---|--------|-------|----------|--------|-----------------|
| 1 | | | | [ ] Complete [ ] In Progress [ ] Planned | |
| 2 | | | | [ ] Complete [ ] In Progress [ ] Planned | |
| 3 | | | | [ ] Complete [ ] In Progress [ ] Planned | |

### 7.2 Long-term Corrective Actions

| # | Action | Owner | Due Date | Status | Completion Date |
|---|--------|-------|----------|--------|-----------------|
| 1 | | | | [ ] Complete [ ] In Progress [ ] Planned | |
| 2 | | | | [ ] Complete [ ] In Progress [ ] Planned | |
| 3 | | | | [ ] Complete [ ] In Progress [ ] Planned | |

### 7.3 Preventive Actions

| # | Action | Owner | Due Date | Status | Completion Date |
|---|--------|-------|----------|--------|-----------------|
| 1 | | | | [ ] Complete [ ] In Progress [ ] Planned | |
| 2 | | | | [ ] Complete [ ] In Progress [ ] Planned | |
| 3 | | | | [ ] Complete [ ] In Progress [ ] Planned | |

---

## SECTION 8: COMMUNICATION

### 8.1 Internal Communication

| Audience | Communicated? | Date | Method | Key Messages |
|----------|---------------|------|--------|--------------|
| Executive Team | [ ] Yes [ ] No | | | |
| AI Governance Committee | [ ] Yes [ ] No | | | |
| Affected Business Units | [ ] Yes [ ] No | | | |
| IT/Operations | [ ] Yes [ ] No | | | |
| Legal | [ ] Yes [ ] No | | | |
| All Staff | [ ] Yes [ ] No | | | |

### 8.2 External Communication

| Audience | Required? | Communicated? | Date | Method |
|----------|-----------|---------------|------|--------|
| Regulatory Authority | [ ] Yes [ ] No | [ ] Yes [ ] No | | |
| Affected Individuals | [ ] Yes [ ] No | [ ] Yes [ ] No | | |
| Provider/Vendor | [ ] Yes [ ] No | [ ] Yes [ ] No | | |
| Customers | [ ] Yes [ ] No | [ ] Yes [ ] No | | |
| Public/Media | [ ] Yes [ ] No | [ ] Yes [ ] No | | |

---

## SECTION 9: LESSONS LEARNED

### 9.1 Key Lessons

| # | Lesson Learned | Area | Recommendation |
|---|----------------|------|----------------|
| 1 | | [ ] Process [ ] Technical [ ] Training [ ] Governance | |
| 2 | | [ ] Process [ ] Technical [ ] Training [ ] Governance | |
| 3 | | [ ] Process [ ] Technical [ ] Training [ ] Governance | |

### 9.2 Systemic Issues Identified

| Issue | Description | Affected Systems/Processes | Recommended Action |
|-------|-------------|---------------------------|-------------------|
| | | | |
| | | | |

### 9.3 Improvements to Implement

| # | Improvement | Owner | Priority | Timeline |
|---|-------------|-------|----------|----------|
| 1 | | | [ ] Urgent [ ] High [ ] Normal | |
| 2 | | | [ ] Urgent [ ] High [ ] Normal | |
| 3 | | | [ ] Urgent [ ] High [ ] Normal | |

---

## SECTION 10: CLOSURE

### 10.1 Closure Checklist

| Item | Complete? |
|------|-----------|
| All immediate containment actions completed | [ ] Yes [ ] No [ ] N/A |
| Investigation completed | [ ] Yes [ ] No [ ] N/A |
| Root cause(s) identified | [ ] Yes [ ] No [ ] N/A |
| All corrective actions completed or planned | [ ] Yes [ ] No [ ] N/A |
| Regulatory notifications completed | [ ] Yes [ ] No [ ] N/A |
| Affected parties notified | [ ] Yes [ ] No [ ] N/A |
| Lessons learned documented | [ ] Yes [ ] No [ ] N/A |
| Risk assessment updated | [ ] Yes [ ] No [ ] N/A |
| Documentation complete | [ ] Yes [ ] No [ ] N/A |

### 10.2 Closure Decision

| Field | Entry |
|-------|-------|
| **Ready for Closure?** | [ ] Yes [ ] No |
| **Open Items** | |
| **Closure Date** | |
| **Closed By** | |

### 10.3 Post-Incident Review Schedule

| Field | Entry |
|-------|-------|
| **Follow-up Review Required?** | [ ] Yes [ ] No |
| **Review Date** | |
| **Review Scope** | |

---

## SECTION 11: APPROVALS

### 11.1 Investigation Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Investigation Lead** | | | |
| **AI Risk Manager** | | | |

### 11.2 Closure Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Incident Manager** | | | |
| **AI System Owner** | | | |
| **Compliance Officer** (for serious incidents) | | | |

---

## SECTION 12: ATTACHMENTS

| # | Document | Description | Location |
|---|----------|-------------|----------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

---

## SECTION 13: REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial report |
| | | | |
| | | | |

---

**End of Form**
