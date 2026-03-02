# AI Act Controls Catalog

## Document Information

| Field | Value |
|-------|-------|
| **Document ID** | TOOL-CTRL-001 |
| **Version** | 1.0 |
| **Status** | Ready to Use |
| **Owner** | AI Act Program Manager |
| **Last Updated** | 2024-12-01 |

## Purpose

This catalog provides a comprehensive mapping of controls to EU AI Act requirements, organized by article and control category. Use this as a reference for implementing compliance controls and gathering evidence.

---

## Control Categories Overview

| Category | Prefix | Article(s) | Control Count |
|----------|--------|------------|---------------|
| Risk Management | RM | Article 9 | 15 |
| Data Governance | DATA | Article 10 | 15 |
| Documentation | DOC | Article 11 | 10 |
| Logging | LOG | Article 12 | 5 |
| Transparency | TRANS | Article 13, 50 | 10 |
| Human Oversight | HO | Article 14 | 8 |
| Accuracy & Security | ARS | Article 15 | 8 |
| Quality Management | QMS | Article 17 | 14 |
| Conformity Assessment | CA | Article 43 | 10 |
| Registration | REG | Article 49 | 5 |
| Post-Market Monitoring | PMM | Article 72 | 8 |
| Incident Management | INC | Article 73 | 6 |
| AI Literacy | LIT | Article 4 | 4 |

---

## Article 9: Risk Management System

### RM-001: Risk Management Framework
- **Objective**: Establish a risk management system for AI systems
- **Type**: Preventive
- **Frequency**: Continuous
- **Evidence Required**:
  - Risk management policy
  - Risk assessment methodology
  - Risk register

### RM-002: Risk Identification
- **Objective**: Identify known and foreseeable risks
- **Type**: Detective
- **Frequency**: Per release / Major change
- **Evidence Required**:
  - Risk identification records
  - Hazard analysis
  - Use case analysis

### RM-003: Risk Estimation
- **Objective**: Estimate and evaluate risks from intended use and misuse
- **Type**: Detective
- **Frequency**: Per release
- **Evidence Required**:
  - Risk estimation methodology
  - Severity and likelihood assessments
  - Risk matrices

### RM-004: Risk Mitigation
- **Objective**: Adopt risk management measures
- **Type**: Preventive
- **Frequency**: Continuous
- **Evidence Required**:
  - Mitigation plans
  - Control implementation records
  - Residual risk acceptance

### RM-005: Risk Testing
- **Objective**: Test to ensure consistent performance
- **Type**: Detective
- **Frequency**: Per release
- **Evidence Required**:
  - Test plans and results
  - Performance metrics
  - Validation reports

---

## Article 10: Data and Data Governance

### DATA-001: Data Governance Framework
- **Objective**: Establish data governance for training, validation, and testing data
- **Type**: Preventive
- **Frequency**: Continuous
- **Evidence Required**:
  - Data governance policy
  - Data quality standards
  - Data management procedures

### DATA-002: Data Quality Assessment
- **Objective**: Ensure data is relevant, representative, and error-free
- **Type**: Detective
- **Frequency**: Per dataset
- **Evidence Required**:
  - Data quality reports
  - Completeness checks
  - Accuracy validation

### DATA-003: Bias Examination
- **Objective**: Examine data for potential biases
- **Type**: Detective
- **Frequency**: Per dataset / Periodic
- **Evidence Required**:
  - Bias assessment reports
  - Demographic analysis
  - Fairness metrics

### DATA-004: Data Provenance
- **Objective**: Document data provenance and lineage
- **Type**: Preventive
- **Frequency**: Per dataset
- **Evidence Required**:
  - Data lineage documentation
  - Source records
  - Processing history

---

## Article 11: Technical Documentation

### DOC-001: System Description
- **Objective**: Document general description of the AI system
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - System architecture document
  - Intended purpose statement
  - Capability description

### DOC-002: Development Process Documentation
- **Objective**: Document elements and development process
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - Design specifications
  - Development methodology
  - Training procedures

### DOC-003: Annex IV Compliance
- **Objective**: Ensure documentation meets Annex IV requirements
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - Annex IV checklist
  - Technical file
  - Compliance matrix

---

## Article 12: Record-Keeping (Logging)

### LOG-001: Automatic Logging
- **Objective**: Implement automatic recording of events
- **Type**: Detective
- **Frequency**: Continuous
- **Evidence Required**:
  - Logging architecture
  - Log samples
  - Retention policy

### LOG-002: Log Retention
- **Objective**: Maintain logs for minimum 6 months
- **Type**: Preventive
- **Frequency**: Continuous
- **Evidence Required**:
  - Retention policy
  - Storage configuration
  - Backup procedures

### LOG-003: Traceability
- **Objective**: Enable traceability of AI functioning
- **Type**: Detective
- **Frequency**: Continuous
- **Evidence Required**:
  - Audit trail design
  - Correlation capabilities
  - Investigation procedures

---

## Article 13: Transparency

### TRANS-001: Instructions for Use
- **Objective**: Provide instructions for use in appropriate format
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - User manual
  - Quick start guide
  - Integration documentation

### TRANS-002: Provider Information
- **Objective**: Include identity and contact details of provider
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - Product labeling
  - Contact information
  - Support channels

### TRANS-003: Performance Disclosure
- **Objective**: Disclose characteristics, capabilities, and limitations
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - Performance specifications
  - Known limitations
  - Use case boundaries

---

## Article 14: Human Oversight

### HO-001: Oversight Design
- **Objective**: Design system to enable effective human oversight
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - Oversight architecture
  - Interface design
  - Control mechanisms

### HO-002: Intervention Capability
- **Objective**: Enable ability to intervene or stop operation
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - Stop mechanisms
  - Override procedures
  - Emergency protocols

### HO-003: Output Interpretation
- **Objective**: Enable interpretation of AI output
- **Type**: Preventive
- **Frequency**: Per release
- **Evidence Required**:
  - Explainability features
  - Confidence indicators
  - Decision rationale

---

## Article 50: Transparency Obligations (Limited Risk)

### TRANS-101: User Notification
- **Objective**: Inform users they are interacting with AI
- **Type**: Preventive
- **Frequency**: Continuous
- **Evidence Required**:
  - Notification design
  - User interface screenshots
  - Disclosure text

### TRANS-102: Content Labeling
- **Objective**: Mark AI-generated content appropriately
- **Type**: Preventive
- **Frequency**: Continuous
- **Evidence Required**:
  - Labeling implementation
  - Watermarking (if applicable)
  - Metadata tagging

---

## Article 72: Post-Market Monitoring

### PMM-001: Monitoring System
- **Objective**: Establish post-market monitoring system
- **Type**: Detective
- **Frequency**: Continuous
- **Evidence Required**:
  - Monitoring plan
  - Data collection procedures
  - Analysis methodology

### PMM-002: Performance Tracking
- **Objective**: Track AI system performance over time
- **Type**: Detective
- **Frequency**: Continuous
- **Evidence Required**:
  - Performance dashboards
  - Trend analysis
  - Degradation alerts

### PMM-003: Feedback Integration
- **Objective**: Integrate feedback into improvements
- **Type**: Corrective
- **Frequency**: Periodic
- **Evidence Required**:
  - Feedback collection
  - Improvement records
  - Update history

---

## Article 73: Serious Incident Reporting

### INC-001: Incident Detection
- **Objective**: Detect serious incidents promptly
- **Type**: Detective
- **Frequency**: Continuous
- **Evidence Required**:
  - Detection mechanisms
  - Alert configurations
  - Escalation procedures

### INC-002: Incident Reporting
- **Objective**: Report serious incidents to authorities within 15 days
- **Type**: Corrective
- **Frequency**: Per incident
- **Evidence Required**:
  - Incident report template
  - Authority contact list
  - Submission records

### INC-003: Root Cause Analysis
- **Objective**: Investigate and document root causes
- **Type**: Corrective
- **Frequency**: Per incident
- **Evidence Required**:
  - Investigation reports
  - Root cause analysis
  - Corrective actions

---

## Using This Catalog

### For Compliance Assessment
1. Identify applicable articles based on risk level and role
2. Review required controls for each article
3. Assess current implementation status
4. Document gaps and remediation plans

### For Evidence Collection
1. Use the evidence requirements as a checklist
2. Gather documentation for each implemented control
3. Maintain evidence in organized folders
4. Update evidence after each release or change

### For Audit Preparation
1. Map controls to audit scope
2. Prepare evidence packages per control
3. Document control effectiveness
4. Identify any non-conformities

---

## Related Documents

- [Risk Management Procedure](../procedures/PROC-AI-RM-001_FINAL.md)
- [Technical Documentation Checklist](../checklists/CHK-AI-DOC-001_FINAL.md)
- [Incident Management Procedure](../procedures/PROC-AI-INC-001_FINAL.md)
- [Post-Market Monitoring Procedure](../procedures/PROC-AI-PMM-001_FINAL.md)

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | AI Act Program Manager | Initial release |
