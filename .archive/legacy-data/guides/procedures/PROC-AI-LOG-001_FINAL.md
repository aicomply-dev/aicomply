# PROC-AI-LOG-001: AI Logging Procedure

**Procedure ID:** PROC-AI-LOG-001
**Procedure Name:** AI Logging Procedure
**Standard:** STD-AI-003: AI Logging and Traceability Standard
**Covers Controls:** LOG-001, LOG-002, LOG-003, LOG-004, LOG-005
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the step-by-step process for implementing automated logging infrastructure that records AI system operations, decisions, and events to enable traceability, monitoring, investigation support, and regulatory compliance with EU AI Act Articles 12 and 19.

### 1.2 Scope

This procedure applies to:
- All high-risk AI systems as classified per STD-AI-001
- All AI systems that make decisions affecting individuals
- All AI systems that process personal data
- All AI system operational environments (development, testing, production)

This procedure does not apply to:
- Minimal-risk AI systems (unless specifically required)
- Pre-production development environments without access to real data
- Third-party AI systems where logging is provider-managed (covered by PROC-AI-VENDOR-001)

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Operations Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Technology Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|---|---|
| **AI Operations Manager** | Own and execute logging infrastructure; maintain log retention policies; ensure tamper protection | Approve logging architecture; escalate log security breaches |
| **AI System Owner** | Define logging requirements for their systems; specify retention needs; review logs | Approve system-specific logging configurations |
| **Chief Technology Officer** | Oversight of logging infrastructure; approve log retention policies; governance | Escalate to Board; approve log retention exceptions |
| **AI Governance Committee** | Review and approve logging standards; monitor compliance; approve retention policies | Block deployments with inadequate logging |
| **Security Officer** | Implement log tamper protection; manage log access controls; monitor security | Execute log security measures; investigate breaches |
| **Compliance Officer** | Verify regulatory compliance; audit logging effectiveness; ensure 10-year retention | Challenge logging adequacy; recommend improvements |
| **ML Engineer/DevOps** | Implement logging instrumentation; configure log collection; maintain log systems | Execute logging implementation activities |
| **Internal Audit** | Audit logging effectiveness; verify control operation; validate retention compliance | Validate logging implementation |

### 2.2 RACI Matrix

| Activity | AI Ops Manager | AI System Owner | CTO | AI Gov Committee | Security Officer | Compliance | ML Engineer |
|----------|---|---|---|---|---|---|---|
| Logging requirements definition | A | R | C | I | C | C | C |
| Logging architecture design | A | C | C | C | R | I | R |
| Log instrumentation implementation | C | C | I | I | C | I | A |
| Log infrastructure deployment | A | C | C | I | R | I | R |
| Tamper protection implementation | C | I | C | I | A | C | R |
| Log retention policy | A | R | A | A | C | C | I |
| Log access management | C | C | I | I | A | C | C |
| Log monitoring and analysis | A | R | I | C | R | C | R |
| Log retention compliance | A | C | C | C | C | A | I |
| Incident investigation support | C | R | A | C | A | C | R |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. LOGGING FRAMEWORK

### 3.1 AI Logging System Components

The AI logging system consists of five integrated components:

```
┌─────────────────────────────────────────────────────────────┐
│         AI LOGGING SYSTEM FRAMEWORK                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. LOG INSTRUMENTATION & GENERATION                        │
│     ├─ Application-Level Logging                            │
│     ├─ Model Inference Logging                              │
│     ├─ System Event Logging                                 │
│     └─ Audit Trail Logging                                  │
│                                                              │
│  2. LOG COLLECTION & AGGREGATION                            │
│     ├─ Log Collection Agents                                │
│     ├─ Log Parsing & Normalization                          │
│     ├─ Log Enrichment & Correlation                         │
│     └─ Real-Time Log Streaming                              │
│                                                              │
│  3. LOG STORAGE & RETENTION                                 │
│     ├─ Short-Term Hot Storage (0-90 days)                   │
│     ├─ Medium-Term Warm Storage (90 days - 2 years)         │
│     ├─ Long-Term Cold Storage (2-10 years)                  │
│     └─ Tamper-Evident Storage                               │
│                                                              │
│  4. LOG SECURITY & ACCESS CONTROL                           │
│     ├─ Encryption (in-transit and at-rest)                  │
│     ├─ Integrity Protection (hashing, signatures)           │
│     ├─ Role-Based Access Control                            │
│     └─ Access Audit Logging                                 │
│                                                              │
│  5. LOG ANALYSIS & MONITORING                               │
│     ├─ Real-Time Monitoring Dashboards                      │
│     ├─ Automated Anomaly Detection                          │
│     ├─ Investigation Query Tools                            │
│     └─ Regulatory Reporting                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Logging Lifecycle Integration

Logging activities are integrated into each phase of the AI system lifecycle:

| Lifecycle Phase | Logging Activities | Gate Criteria |
|---|---|---|
| **1. Design** | Define logging requirements; Design log schema; Plan retention strategy | Logging requirements documented; Log schema approved |
| **2. Development** | Implement log instrumentation; Configure log collection; Test logging | Logging instrumentation complete; Logs generating correctly |
| **3. Testing** | Test log completeness; Test tamper protection; Validate retention | All required events logged; Tamper protection verified |
| **4. Deployment** | Deploy log infrastructure; Configure monitoring; Enable archival | Log infrastructure operational; Monitoring active |
| **5. Operation** | Continuous log monitoring; Periodic log review; Incident investigation | Monitoring operational; Reviews scheduled |
| **6. Decommissioning** | Archive operational logs; Maintain 10-year retention; Delete system logs after retention | Logs archived; Retention schedule set |

### 3.3 Log Retention Requirements (Article 12(2))

#### 3.3.1 Mandatory 10-Year Retention

Per EU AI Act Article 12(2), logs generated by high-risk AI systems must be retained for **10 years** from the date of generation.

| Log Category | Retention Period | Storage Tier | Rationale |
|--------------|------------------|--------------|-----------|
| **Inference Decisions** | 10 years | Hot → Warm → Cold | Article 12(2) requirement |
| **Input Data** | 10 years | Hot → Warm → Cold | Traceability requirement |
| **Model Metadata** | 10 years | Hot → Warm → Cold | Model version traceability |
| **System Events** | 10 years | Hot → Warm → Cold | Operational context |
| **Access Logs** | 10 years | Hot → Warm → Cold | Security and audit trail |
| **Incident Logs** | 10 years minimum | Hot → Warm → Cold | Regulatory and legal |

#### 3.3.2 Storage Tier Strategy

| Tier | Age | Access Time | Storage Cost | Use Case |
|------|-----|-------------|--------------|----------|
| **Hot** | 0-90 days | < 1 second | High | Active monitoring and investigation |
| **Warm** | 90 days - 2 years | < 1 minute | Medium | Periodic review and analysis |
| **Cold** | 2-10 years | < 1 hour | Low | Regulatory compliance and archival |

#### 3.3.3 Retention Exceptions

- **Ongoing Investigations:** Extend retention indefinitely until investigation concluded
- **Legal Hold:** Extend retention indefinitely until legal matter resolved
- **Active Disputes:** Extend retention until dispute resolved + 1 year

### 3.4 Tamper Protection Requirements

Logs must be protected against unauthorized modification or deletion to ensure integrity and evidentiary value.

#### 3.4.1 Tamper Protection Mechanisms

| Mechanism | Description | Implementation |
|-----------|-------------|----------------|
| **Write-Once Storage** | Logs written to immutable storage | AWS S3 Object Lock, Azure Immutable Blob |
| **Cryptographic Hashing** | Each log entry hashed; chain integrity verified | SHA-256 hash with timestamp |
| **Digital Signatures** | Periodic log batch signing | RSA or ECDSA signature every 5 minutes |
| **Append-Only Logs** | Logs can only be appended, never modified | Blockchain-inspired append-only database |
| **Access Audit Trail** | All log access attempts logged | Separate audit log system |

#### 3.4.2 Tamper Detection

| Detection Method | Frequency | Alert Threshold | Response |
|------------------|-----------|-----------------|----------|
| **Hash Chain Verification** | Hourly | Any break in chain | Immediate security incident |
| **Signature Verification** | Daily | Any invalid signature | Immediate security incident |
| **Access Anomaly Detection** | Real-time | Unusual access patterns | Security alert and investigation |
| **Storage Integrity Check** | Weekly | Any corruption detected | Restore from backup and investigate |

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: LOGGING REQUIREMENTS AND DESIGN (Control LOG-001)

#### Step 1.1: Define Logging Requirements

**When:** At the start of AI system design phase

**Who:** AI Operations Manager + AI System Owner + Compliance Officer

**How:**

1. **Identify AI System Classification**
   - Review AI system classification (per PROC-AI-CLS-001)
   - High-risk systems require comprehensive logging
   - Document classification in Logging Requirements Document

2. **Define Regulatory Logging Requirements**
   - EU AI Act Article 12: Logs must enable traceability and monitoring
   - EU AI Act Article 19: Deployers must keep logs generated
   - GDPR Article 5(2): Demonstrate compliance with data processing principles
   - Sector-specific requirements (medical devices, financial services, etc.)
   - Document in Logging Requirements Document (DOC-AI-LOG-001)

3. **Identify Required Log Events (Minimum Set)**

   Per Article 12, logs must enable:
   - **Traceability:** Track AI system operation over time
   - **Monitoring:** Detect operational issues and anomalies
   - **Investigation:** Support incident investigation and root cause analysis

   **Mandatory Log Events:**

   | Event Category | Required Events | Article 12 Purpose |
   |----------------|-----------------|-------------------|
   | **Inference** | Model input, output, decision, confidence score | Traceability of decisions |
   | **Model** | Model version, parameters, configuration | Traceability of model used |
   | **Data** | Input data characteristics, data quality metrics | Traceability of input quality |
   | **System** | System health, performance metrics, errors | Monitoring system operation |
   | **User** | User ID, user action, timestamp | Traceability of human interaction |
   | **Security** | Access attempts, authentication, authorization | Security monitoring |

4. **Define System-Specific Logging Requirements**
   - Review AI system use case and risks
   - Identify additional events requiring logging
   - Consider misuse scenarios (per PROC-AI-RM-001)
   - Document in Logging Requirements Document

5. **Assess Data Privacy Implications**
   - Identify personal data in logs
   - Apply data minimization principles
   - Plan pseudonymization/anonymization where appropriate
   - Document privacy analysis in Logging Requirements Document
   - Cross-reference with PROC-AI-DATA-001

6. **Define Log Retention Requirements**
   - Default: 10 years per Article 12(2)
   - Identify any extended retention needs (legal, contractual)
   - Define retention exceptions process
   - Document in Logging Requirements Document

7. **Obtain Stakeholder Approval**
   - AI System Owner reviews and approves requirements
   - Compliance Officer validates regulatory compliance
   - AI Governance Committee approves high-risk system logging
   - Document approval (REC-AI-LOG-001)

**Evidence Required:**
- Logging Requirements Document (DOC-AI-LOG-001)
- Privacy Impact Assessment (if personal data logged)
- Stakeholder Approval Records (REC-AI-LOG-001)

**Timing:** 1-2 weeks

**Quality Check:**
- All Article 12 mandatory events identified
- Privacy implications assessed
- Retention requirements documented
- Stakeholder approvals obtained

---

#### Step 1.2: Design Log Schema and Event Catalog

**When:** After logging requirements defined

**Who:** AI Operations Manager + ML Engineer + Security Officer

**How:**

1. **Define Standard Log Schema**

   All AI system logs must follow a standard schema for consistency and interoperability.

   **Mandatory Fields:**

   | Field | Type | Description | Example |
   |-------|------|-------------|---------|
   | `log_id` | UUID | Unique log entry identifier | `a1b2c3d4-e5f6-7890-abcd-ef1234567890` |
   | `timestamp` | ISO 8601 | Event timestamp (UTC) | `2025-12-08T14:23:45.123Z` |
   | `ai_system_id` | String | AI system identifier | `AI-SYS-0042` |
   | `model_id` | String | Model identifier | `MODEL-v2.3.1` |
   | `event_type` | Enum | Event category | `INFERENCE`, `SYSTEM_ERROR`, `ACCESS` |
   | `event_name` | String | Specific event name | `INFERENCE_COMPLETED` |
   | `severity` | Enum | Event severity | `INFO`, `WARNING`, `ERROR`, `CRITICAL` |
   | `session_id` | UUID | User/API session identifier | `sess-12345678` |
   | `user_id` | String | User identifier (pseudonymized) | `USER-HASH-ABC123` |
   | `inference_id` | UUID | Inference request identifier | `inf-98765432` |
   | `input_hash` | SHA-256 | Hash of input data | `d2d2d2...` |
   | `output_hash` | SHA-256 | Hash of output data | `f3f3f3...` |
   | `confidence_score` | Float | Model confidence (0-1) | `0.87` |
   | `processing_time_ms` | Integer | Processing duration | `142` |
   | `metadata` | JSON | Event-specific metadata | `{"feature_flags": [...]}` |

2. **Create Event Catalog**

   Document all log events that the AI system will generate. Use the Event Catalog Template (TMP-AI-LOG-002).

   **Event Catalog Structure:**
   - Event ID (unique identifier)
   - Event Name (descriptive name)
   - Event Type (category)
   - Severity Level
   - Event Description
   - Mandatory Fields
   - Optional Fields
   - Example Event (JSON)

   See **APPENDIX A** for sample log event catalog (20+ events).

3. **Define Log Levels**

   | Level | Description | Use Case | Retention Priority |
   |-------|-------------|----------|-------------------|
   | **CRITICAL** | System failure; immediate action required | Serious incidents, critical errors | Highest (never delete) |
   | **ERROR** | Error condition; functionality impaired | Processing errors, failed inferences | High |
   | **WARNING** | Warning condition; potential issue | Low confidence, anomaly detected | Medium |
   | **INFO** | Informational message; normal operation | Inference completed, model loaded | Standard |
   | **DEBUG** | Detailed diagnostic information | Development and troubleshooting | Optional (delete after 30 days) |

4. **Design Log Format**

   Choose log format based on use case:
   - **JSON:** Structured, machine-readable, recommended for production
   - **Plain Text:** Human-readable, suitable for simple systems
   - **Binary:** Compact, high-performance, suitable for high-volume systems

   **Recommended: JSON format**

   ```json
   {
     "log_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
     "timestamp": "2025-12-08T14:23:45.123Z",
     "ai_system_id": "AI-SYS-0042",
     "model_id": "MODEL-v2.3.1",
     "event_type": "INFERENCE",
     "event_name": "INFERENCE_COMPLETED",
     "severity": "INFO",
     "session_id": "sess-12345678",
     "user_id": "USER-HASH-ABC123",
     "inference_id": "inf-98765432",
     "input_hash": "d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2",
     "output_hash": "f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3",
     "confidence_score": 0.87,
     "processing_time_ms": 142,
     "metadata": {
       "features": ["feature1", "feature2"],
       "model_config": {"param1": "value1"}
     }
   }
   ```

5. **Document Log Schema**
   - Create Log Schema Specification (DOC-AI-LOG-002)
   - Document all mandatory fields
   - Document all event types
   - Provide JSON schema for validation
   - Include example log entries

6. **Review and Approve Log Schema**
   - AI Operations Manager reviews schema
   - Security Officer validates security fields
   - Compliance Officer validates regulatory requirements
   - AI Governance Committee approves (for high-risk systems)
   - Document approval (REC-AI-LOG-002)

**Evidence Required:**
- Log Schema Specification (DOC-AI-LOG-002)
- Event Catalog (per TMP-AI-LOG-002)
- JSON Schema Validation File
- Approval Records (REC-AI-LOG-002)

**Timing:** 1-2 weeks

**Quality Check:**
- All Article 12 events covered in catalog
- Schema includes all mandatory fields
- JSON schema validates correctly
- Approvals obtained

---

### PHASE 2: LOG INSTRUMENTATION IMPLEMENTATION (Control LOG-001)

#### Step 2.1: Implement Application-Level Logging

**When:** During AI system development

**Who:** ML Engineer + DevOps + AI System Owner

**How:**

1. **Select Logging Framework**

   Choose appropriate logging framework for your technology stack:

   | Technology | Recommended Framework | Rationale |
   |------------|----------------------|-----------|
   | **Python** | `structlog` or `python-json-logger` | Structured JSON logging |
   | **Java/Scala** | `Logback` with `logstash-logback-encoder` | Enterprise-grade, JSON support |
   | **Node.js/TypeScript** | `winston` or `pino` | High-performance, JSON support |
   | **Go** | `zap` or `logrus` | High-performance, structured logging |
   | **.NET/C#** | `Serilog` | Structured logging, JSON support |

2. **Configure Logging Framework**

   **Python Example (using structlog):**

   ```python
   import structlog
   import logging.config

   # Configure structlog for JSON output
   structlog.configure(
       processors=[
           structlog.stdlib.filter_by_level,
           structlog.stdlib.add_logger_name,
           structlog.stdlib.add_log_level,
           structlog.stdlib.PositionalArgumentsFormatter(),
           structlog.processors.TimeStamper(fmt="iso"),
           structlog.processors.StackInfoRenderer(),
           structlog.processors.format_exc_info,
           structlog.processors.UnicodeDecoder(),
           structlog.processors.JSONRenderer()
       ],
       context_class=dict,
       logger_factory=structlog.stdlib.LoggerFactory(),
       cache_logger_on_first_use=True,
   )

   logger = structlog.get_logger()
   ```

3. **Implement Log Event Functions**

   Create reusable logging functions for each event type:

   **Example: Inference Logging**

   ```python
   import structlog
   import hashlib
   import uuid
   from datetime import datetime

   logger = structlog.get_logger()

   def log_inference(
       ai_system_id: str,
       model_id: str,
       session_id: str,
       user_id: str,
       input_data: dict,
       output_data: dict,
       confidence_score: float,
       processing_time_ms: int
   ):
       """Log an AI inference event per Article 12 requirements."""

       # Generate unique identifiers
       log_id = str(uuid.uuid4())
       inference_id = str(uuid.uuid4())

       # Hash sensitive data
       input_hash = hashlib.sha256(
           str(input_data).encode()
       ).hexdigest()
       output_hash = hashlib.sha256(
           str(output_data).encode()
       ).hexdigest()

       # Log the event
       logger.info(
           "inference_completed",
           log_id=log_id,
           timestamp=datetime.utcnow().isoformat() + "Z",
           ai_system_id=ai_system_id,
           model_id=model_id,
           event_type="INFERENCE",
           event_name="INFERENCE_COMPLETED",
           severity="INFO",
           session_id=session_id,
           user_id=user_id,
           inference_id=inference_id,
           input_hash=input_hash,
           output_hash=output_hash,
           confidence_score=confidence_score,
           processing_time_ms=processing_time_ms,
           metadata={
               "input_features": list(input_data.keys()),
               "output_type": type(output_data).__name__
           }
       )

       return inference_id
   ```

4. **Instrument AI System Code**

   Add logging calls at key points in the AI system:

   **Inference Pipeline Example:**

   ```python
   def predict(input_data: dict) -> dict:
       """Make a prediction with logging."""
       start_time = time.time()

       # Log inference start
       logger.info(
           "inference_started",
           ai_system_id=AI_SYSTEM_ID,
           model_id=MODEL_ID,
           session_id=session_id,
           user_id=user_id
       )

       try:
           # Preprocess input
           processed_input = preprocess(input_data)

           # Make prediction
           prediction = model.predict(processed_input)

           # Calculate confidence
           confidence = calculate_confidence(prediction)

           # Process output
           output_data = postprocess(prediction)

           # Calculate processing time
           processing_time_ms = int((time.time() - start_time) * 1000)

           # Log successful inference
           log_inference(
               ai_system_id=AI_SYSTEM_ID,
               model_id=MODEL_ID,
               session_id=session_id,
               user_id=user_id,
               input_data=input_data,
               output_data=output_data,
               confidence_score=confidence,
               processing_time_ms=processing_time_ms
           )

           return output_data

       except Exception as e:
           # Log error
           logger.error(
               "inference_failed",
               ai_system_id=AI_SYSTEM_ID,
               model_id=MODEL_ID,
               session_id=session_id,
               user_id=user_id,
               error_type=type(e).__name__,
               error_message=str(e),
               traceback=traceback.format_exc()
           )
           raise
   ```

5. **Implement Logging for All Required Events**

   Based on Event Catalog (from Step 1.2), implement logging for:
   - Model loading/unloading
   - Configuration changes
   - System health checks
   - Data quality checks
   - Security events (authentication, authorization)
   - Errors and exceptions
   - Performance metrics

6. **Test Logging Implementation**
   - Verify all required events generate logs
   - Verify log format matches schema
   - Verify all mandatory fields populated
   - Test error handling and exception logging
   - Document test results (TEST-AI-LOG-001)

**Evidence Required:**
- Source code with logging instrumentation
- Logging Framework Configuration
- Log Event Functions (reusable library)
- Logging Implementation Test Results (TEST-AI-LOG-001)

**Timing:** 2-4 weeks (depends on system complexity)

**Quality Check:**
- All required events logged
- Log format matches schema
- All mandatory fields populated
- Error handling tested

---

#### Step 2.2: Implement Model Inference Logging

**When:** During model integration

**Who:** ML Engineer + Data Scientist

**How:**

1. **Identify Model Inference Points**
   - Locate all model inference calls in codebase
   - Identify batch vs. real-time inference paths
   - Document inference workflows

2. **Implement Inference Logging Wrapper**

   Create a decorator or wrapper to automatically log all model inferences:

   **Python Decorator Example:**

   ```python
   from functools import wraps
   import time

   def log_inference_call(ai_system_id: str, model_id: str):
       """Decorator to automatically log model inference calls."""
       def decorator(func):
           @wraps(func)
           def wrapper(*args, **kwargs):
               # Extract context
               session_id = kwargs.get('session_id', 'UNKNOWN')
               user_id = kwargs.get('user_id', 'SYSTEM')

               start_time = time.time()

               try:
                   # Call the actual inference function
                   result = func(*args, **kwargs)

                   # Calculate metrics
                   processing_time_ms = int((time.time() - start_time) * 1000)

                   # Extract confidence if available
                   confidence = getattr(result, 'confidence', None)

                   # Log successful inference
                   log_inference(
                       ai_system_id=ai_system_id,
                       model_id=model_id,
                       session_id=session_id,
                       user_id=user_id,
                       input_data=kwargs.get('input_data', {}),
                       output_data=result,
                       confidence_score=confidence or 1.0,
                       processing_time_ms=processing_time_ms
                   )

                   return result

               except Exception as e:
                   # Log failed inference
                   logger.error(
                       "inference_failed",
                       ai_system_id=ai_system_id,
                       model_id=model_id,
                       session_id=session_id,
                       user_id=user_id,
                       error=str(e)
                   )
                   raise

           return wrapper
       return decorator

   # Usage
   @log_inference_call(ai_system_id="AI-SYS-0042", model_id="MODEL-v2.3.1")
   def predict(input_data: dict, session_id: str, user_id: str) -> dict:
       # Model inference logic
       return model.predict(input_data)
   ```

3. **Log Input and Output Data**

   Balance traceability with privacy:

   **Option A: Hash-Only (High Privacy)**
   - Store only SHA-256 hash of input/output
   - Cannot reconstruct original data
   - Sufficient for tamper detection and change tracking

   **Option B: Pseudonymized Storage (Medium Privacy)**
   - Remove direct identifiers
   - Pseudonymize personal data
   - Store processed version for analysis

   **Option C: Full Storage with Encryption (Low Privacy, High Traceability)**
   - Store complete input/output data
   - Encrypt sensitive fields
   - Enable full reconstruction for investigation

   **Recommended:** Option A (hash-only) + Option C (full storage) for critical inferences requiring investigation.

4. **Log Model Metadata**

   For each inference, log model version and configuration:

   ```python
   def log_model_metadata():
       """Log model metadata on startup."""
       logger.info(
           "model_loaded",
           ai_system_id=AI_SYSTEM_ID,
           model_id=MODEL_ID,
           model_version=MODEL_VERSION,
           model_type=MODEL_TYPE,
           training_date=TRAINING_DATE,
           model_parameters=MODEL_PARAMETERS,
           model_config=MODEL_CONFIG
       )
   ```

5. **Implement Batch Inference Logging**

   For batch processing, log summary metrics:

   ```python
   def log_batch_inference(
       batch_id: str,
       batch_size: int,
       successful_count: int,
       failed_count: int,
       avg_confidence: float,
       total_processing_time_ms: int
   ):
       """Log batch inference summary."""
       logger.info(
           "batch_inference_completed",
           ai_system_id=AI_SYSTEM_ID,
           model_id=MODEL_ID,
           event_type="INFERENCE",
           event_name="BATCH_INFERENCE_COMPLETED",
           batch_id=batch_id,
           batch_size=batch_size,
           successful_count=successful_count,
           failed_count=failed_count,
           avg_confidence=avg_confidence,
           total_processing_time_ms=total_processing_time_ms
       )
   ```

6. **Test Model Inference Logging**
   - Execute test inferences
   - Verify all inferences logged
   - Verify log completeness
   - Test batch inference logging
   - Document test results

**Evidence Required:**
- Inference Logging Implementation (source code)
- Model Metadata Logging Configuration
- Batch Inference Logging Implementation
- Test Results (TEST-AI-LOG-002)

**Timing:** 1-2 weeks

**Quality Check:**
- All inferences logged (100% coverage)
- Model metadata captured
- Batch inferences logged
- Test results document completeness

---

### PHASE 3: LOG INFRASTRUCTURE DEPLOYMENT (Control LOG-002)

#### Step 3.1: Deploy Log Collection Infrastructure

**When:** Before AI system deployment

**Who:** DevOps + AI Operations Manager + Security Officer

**How:**

1. **Select Log Collection Technology**

   | Technology | Use Case | Pros | Cons |
   |------------|----------|------|------|
   | **Fluentd** | General-purpose log collection | Open-source, flexible, extensive plugins | Resource-intensive |
   | **Fluent Bit** | Lightweight log collection | Lightweight, fast, cloud-native | Fewer plugins than Fluentd |
   | **Logstash** | ELK stack integration | Powerful parsing, large ecosystem | Heavy resource usage |
   | **Vector** | High-performance log collection | Very fast, low resource, modern | Newer, smaller ecosystem |
   | **CloudWatch Agent** | AWS-native logging | Native AWS integration, managed | AWS-only |
   | **Azure Monitor Agent** | Azure-native logging | Native Azure integration, managed | Azure-only |

   **Recommended:** Fluent Bit for cloud-native deployments; Vector for high-performance requirements.

2. **Configure Log Collection Agents**

   **Example: Fluent Bit Configuration**

   ```ini
   [SERVICE]
       Flush        5
       Log_Level    info
       Parsers_File parsers.conf

   [INPUT]
       Name              tail
       Path              /var/log/ai-system/*.log
       Parser            json
       Tag               ai.system
       Refresh_Interval  5

   [FILTER]
       Name    modify
       Match   ai.system
       Add     environment production
       Add     log_collector fluent-bit

   [OUTPUT]
       Name               s3
       Match              ai.system
       bucket             ai-logs-production
       region             us-east-1
       total_file_size    100M
       upload_timeout     1m
       s3_key_format      /logs/$TAG[2]/%Y/%m/%d/%H/%M-%S
       compression        gzip
   ```

3. **Deploy Log Collection Agents**

   **Kubernetes Deployment:**

   ```yaml
   apiVersion: apps/v1
   kind: DaemonSet
   metadata:
     name: fluent-bit
     namespace: logging
   spec:
     selector:
       matchLabels:
         app: fluent-bit
     template:
       metadata:
         labels:
           app: fluent-bit
       spec:
         containers:
         - name: fluent-bit
           image: fluent/fluent-bit:2.0
           volumeMounts:
           - name: varlog
             mountPath: /var/log
           - name: config
             mountPath: /fluent-bit/etc/
         volumes:
         - name: varlog
           hostPath:
             path: /var/log
         - name: config
           configMap:
             name: fluent-bit-config
   ```

4. **Configure Log Aggregation**

   Aggregate logs from multiple sources into centralized storage:

   - **Option A: Cloud-Native Storage**
     - AWS: S3 + CloudWatch Logs
     - Azure: Blob Storage + Log Analytics
     - GCP: Cloud Storage + Cloud Logging

   - **Option B: Self-Hosted Storage**
     - Elasticsearch (searchable)
     - Apache Kafka (streaming)
     - Object Storage (long-term archival)

5. **Test Log Collection**
   - Generate test log events
   - Verify logs collected by agents
   - Verify logs delivered to storage
   - Test log collection under load
   - Document test results (TEST-AI-LOG-003)

**Evidence Required:**
- Log Collection Agent Configuration
- Deployment Manifests (Kubernetes, Docker, etc.)
- Log Aggregation Configuration
- Test Results (TEST-AI-LOG-003)

**Timing:** 1-2 weeks

**Quality Check:**
- All log sources configured
- Logs delivered to storage successfully
- Collection performance acceptable
- Test results document success

---

#### Step 3.2: Implement Log Storage and Retention Infrastructure (Control LOG-003)

**When:** Before AI system deployment

**Who:** DevOps + AI Operations Manager + Security Officer

**How:**

1. **Design Storage Architecture**

   Implement tiered storage for cost optimization:

   ```
   ┌─────────────────────────────────────────────────────────┐
   │          LOG STORAGE ARCHITECTURE                        │
   ├─────────────────────────────────────────────────────────┤
   │                                                          │
   │  HOT TIER (0-90 days)                                   │
   │  ├─ Storage: SSD-backed object storage                  │
   │  ├─ Access: < 1 second                                  │
   │  ├─ Use: Active monitoring, investigation               │
   │  └─ Cost: High (but < 5% of total storage)              │
   │                                                          │
   │  WARM TIER (90 days - 2 years)                          │
   │  ├─ Storage: Standard object storage                    │
   │  ├─ Access: < 1 minute                                  │
   │  ├─ Use: Periodic review, analysis                      │
   │  └─ Cost: Medium (~20% of total storage)                │
   │                                                          │
   │  COLD TIER (2-10 years)                                 │
   │  ├─ Storage: Archive storage (Glacier, Archive Tier)    │
   │  ├─ Access: < 1 hour                                    │
   │  ├─ Use: Regulatory compliance, archival                │
   │  └─ Cost: Low (~75% of total storage)                   │
   │                                                          │
   └─────────────────────────────────────────────────────────┘
   ```

2. **Configure Hot Storage (0-90 days)**

   **AWS S3 Hot Storage Example:**

   ```json
   {
     "Rules": [
       {
         "Id": "HotStorageRetention",
         "Status": "Enabled",
         "Filter": {
           "Prefix": "logs/"
         },
         "Transitions": [
           {
             "Days": 90,
             "StorageClass": "STANDARD_IA"
           }
         ]
       }
     ]
   }
   ```

3. **Configure Warm Storage (90 days - 2 years)**

   Transition logs to lower-cost storage tier:

   ```json
   {
     "Id": "WarmStorageRetention",
     "Status": "Enabled",
     "Transitions": [
       {
         "Days": 730,
         "StorageClass": "GLACIER_IR"
       }
     ]
   }
   ```

4. **Configure Cold Storage (2-10 years)**

   Transition to archival storage:

   ```json
   {
     "Id": "ColdStorageRetention",
     "Status": "Enabled",
     "Transitions": [
       {
         "Days": 730,
         "StorageClass": "DEEP_ARCHIVE"
       }
     ],
     "Expiration": {
       "Days": 3650
     }
   }
   ```

5. **Implement Legal Hold and Retention Exceptions**

   Create process for extending retention beyond 10 years:

   ```python
   def apply_legal_hold(log_identifier: str, reason: str, requestor: str):
       """Apply legal hold to prevent deletion."""

       # Tag logs with legal hold
       s3_client.put_object_tagging(
           Bucket='ai-logs',
           Key=log_identifier,
           Tagging={
               'TagSet': [
                   {'Key': 'LegalHold', 'Value': 'true'},
                   {'Key': 'HoldReason', 'Value': reason},
                   {'Key': 'Requestor', 'Value': requestor},
                   {'Key': 'HoldDate', 'Value': datetime.now().isoformat()}
               ]
           }
       )

       # Log the legal hold action
       logger.info(
           "legal_hold_applied",
           log_identifier=log_identifier,
           reason=reason,
           requestor=requestor
       )
   ```

6. **Configure Storage Redundancy**

   Ensure logs survive hardware failures:
   - **Hot Tier:** Multi-AZ replication (3 copies minimum)
   - **Warm Tier:** Multi-region replication (2 regions minimum)
   - **Cold Tier:** Archival storage with built-in redundancy

7. **Test Storage and Retention**
   - Upload test logs to each tier
   - Verify tier transitions occur correctly
   - Test retrieval from each tier
   - Verify retention policies enforce correctly
   - Test legal hold functionality
   - Document test results (TEST-AI-LOG-004)

**Evidence Required:**
- Storage Architecture Diagram
- Storage Configuration (S3 Lifecycle Policies, etc.)
- Retention Policy Configuration
- Legal Hold Procedures
- Test Results (TEST-AI-LOG-004)

**Timing:** 1-2 weeks

**Quality Check:**
- Three-tier storage configured
- 10-year retention enforced
- Legal hold mechanism tested
- Redundancy configured

---

### PHASE 4: LOG SECURITY AND TAMPER PROTECTION (Control LOG-002, LOG-004)

#### Step 4.1: Implement Log Encryption

**When:** Before AI system deployment

**Who:** Security Officer + DevOps

**How:**

1. **Enable Encryption in Transit**

   All log transmission must use TLS 1.2 or higher:

   **Fluent Bit TLS Configuration:**

   ```ini
   [OUTPUT]
       Name               forward
       Match              *
       Host               log-collector.example.com
       Port               24224
       tls                on
       tls.verify         on
       tls.ca_file        /certs/ca.crt
       tls.crt_file       /certs/client.crt
       tls.key_file       /certs/client.key
   ```

2. **Enable Encryption at Rest**

   Encrypt all stored logs:

   **AWS S3 Server-Side Encryption:**

   ```json
   {
     "Rules": [
       {
         "ApplyServerSideEncryptionByDefault": {
           "SSEAlgorithm": "aws:kms",
           "KMSMasterKeyID": "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012"
         },
         "BucketKeyEnabled": true
       }
     ]
   }
   ```

   **Key Management:**
   - Use AWS KMS, Azure Key Vault, or GCP KMS
   - Rotate encryption keys annually
   - Maintain key access audit trail
   - Document key management in Key Management Policy

3. **Implement Field-Level Encryption**

   Encrypt sensitive fields in logs:

   ```python
   from cryptography.fernet import Fernet
   import base64

   def encrypt_sensitive_field(value: str, encryption_key: bytes) -> str:
       """Encrypt a sensitive field in a log entry."""
       f = Fernet(encryption_key)
       encrypted = f.encrypt(value.encode())
       return base64.b64encode(encrypted).decode()

   # Usage in logging
   logger.info(
       "user_action",
       user_id=user_id,
       action=action,
       sensitive_data=encrypt_sensitive_field(sensitive_data, ENCRYPTION_KEY)
   )
   ```

4. **Test Encryption**
   - Verify TLS connections established
   - Verify logs encrypted at rest
   - Test key rotation procedures
   - Verify encrypted fields decryptable
   - Document test results (TEST-AI-LOG-005)

**Evidence Required:**
- Encryption Configuration (TLS, KMS)
- Key Management Procedures
- Field-Level Encryption Implementation
- Test Results (TEST-AI-LOG-005)

**Timing:** 1 week

---

#### Step 4.2: Implement Log Tamper Protection (Control LOG-002)

**When:** Before AI system deployment

**Who:** Security Officer + DevOps

**How:**

1. **Enable Write-Once Storage**

   **AWS S3 Object Lock:**

   ```bash
   # Enable versioning (required for Object Lock)
   aws s3api put-bucket-versioning \
     --bucket ai-logs-production \
     --versioning-configuration Status=Enabled

   # Enable Object Lock
   aws s3api put-object-lock-configuration \
     --bucket ai-logs-production \
     --object-lock-configuration '
     {
       "ObjectLockEnabled": "Enabled",
       "Rule": {
         "DefaultRetention": {
           "Mode": "GOVERNANCE",
           "Years": 10
         }
       }
     }'
   ```

   **Azure Immutable Blob Storage:**

   ```bash
   # Enable immutability policy
   az storage account blob-service-properties update \
     --account-name ailogsstorage \
     --enable-versioning true

   az storage container immutability-policy create \
     --account-name ailogsstorage \
     --container-name logs \
     --period 3650
   ```

2. **Implement Cryptographic Hashing**

   Generate hash for each log entry:

   ```python
   import hashlib
   import json

   def hash_log_entry(log_entry: dict, previous_hash: str = "0") -> str:
       """
       Create cryptographic hash of log entry.
       Includes previous hash to create chain.
       """
       # Create stable JSON representation
       log_json = json.dumps(log_entry, sort_keys=True)

       # Combine with previous hash (blockchain-style chaining)
       combined = f"{previous_hash}:{log_json}"

       # Generate SHA-256 hash
       hash_value = hashlib.sha256(combined.encode()).hexdigest()

       # Add hash to log entry
       log_entry['log_hash'] = hash_value
       log_entry['previous_hash'] = previous_hash

       return hash_value
   ```

3. **Implement Log Signing**

   Periodically sign batches of logs:

   ```python
   from cryptography.hazmat.primitives import hashes
   from cryptography.hazmat.primitives.asymmetric import padding
   from cryptography.hazmat.primitives import serialization
   import json

   def sign_log_batch(log_batch: list, private_key_path: str) -> str:
       """Sign a batch of logs with RSA private key."""

       # Load private key
       with open(private_key_path, "rb") as key_file:
           private_key = serialization.load_pem_private_key(
               key_file.read(),
               password=None
           )

       # Create batch fingerprint
       batch_json = json.dumps(log_batch, sort_keys=True)
       batch_hash = hashlib.sha256(batch_json.encode()).digest()

       # Sign the hash
       signature = private_key.sign(
           batch_hash,
           padding.PSS(
               mgf=padding.MGF1(hashes.SHA256()),
               salt_length=padding.PSS.MAX_LENGTH
           ),
           hashes.SHA256()
       )

       return base64.b64encode(signature).decode()
   ```

4. **Implement Hash Chain Verification**

   Regularly verify log integrity:

   ```python
   def verify_log_chain(log_entries: list) -> bool:
       """Verify integrity of log chain."""

       previous_hash = "0"

       for entry in log_entries:
           # Extract stored hash
           stored_hash = entry.get('log_hash')
           stored_previous = entry.get('previous_hash')

           # Verify previous hash matches
           if stored_previous != previous_hash:
               logger.error(
                   "log_chain_broken",
                   log_id=entry['log_id'],
                   expected_previous=previous_hash,
                   actual_previous=stored_previous
               )
               return False

           # Recalculate hash
           entry_copy = entry.copy()
           entry_copy.pop('log_hash')
           entry_copy.pop('previous_hash')

           calculated_hash = hash_log_entry(entry_copy, previous_hash)

           # Verify hash matches
           if calculated_hash != stored_hash:
               logger.error(
                   "log_hash_mismatch",
                   log_id=entry['log_id'],
                   expected_hash=stored_hash,
                   calculated_hash=calculated_hash
               )
               return False

           previous_hash = stored_hash

       return True
   ```

5. **Configure Tamper Detection Monitoring**

   Set up automated monitoring:

   ```python
   import schedule
   import time

   def verify_recent_logs():
       """Verify integrity of recent logs (hourly)."""

       # Fetch logs from last hour
       logs = fetch_logs(hours=1)

       # Verify chain integrity
       if not verify_log_chain(logs):
           # CRITICAL: Log chain broken - potential tampering
           logger.critical(
               "log_tampering_detected",
               severity="CRITICAL",
               logs_affected=len(logs)
           )

           # Trigger security incident
           trigger_security_incident(
               incident_type="LOG_TAMPERING",
               severity="CRITICAL"
           )

   # Schedule hourly verification
   schedule.every().hour.do(verify_recent_logs)

   while True:
       schedule.run_pending()
       time.sleep(60)
   ```

6. **Test Tamper Protection**
   - Verify write-once storage prevents modifications
   - Test hash chain verification
   - Test log signature verification
   - Simulate tampering attempt and verify detection
   - Document test results (TEST-AI-LOG-006)

**Evidence Required:**
- Write-Once Storage Configuration
- Hashing Implementation (source code)
- Signing Implementation (source code)
- Tamper Detection Monitoring Configuration
- Test Results (TEST-AI-LOG-006)

**Timing:** 2 weeks

**Quality Check:**
- Write-once storage enabled
- Hash chain implemented
- Signature verification working
- Tamper detection monitoring active

---

#### Step 4.3: Implement Log Access Controls (Control LOG-004)

**When:** Before AI system deployment

**Who:** Security Officer + AI Operations Manager

**How:**

1. **Define Access Control Policy**

   Establish who can access logs:

   | Role | Access Level | Permissions | Justification |
   |------|--------------|-------------|---------------|
   | **AI Ops Manager** | Full read/write | View, query, export, manage retention | Operational responsibility |
   | **Security Officer** | Full read, limited write | View, query, export, manage access controls | Security oversight |
   | **Compliance Officer** | Read-only | View, query, export | Audit and compliance |
   | **AI System Owner** | Read-only (own system) | View logs for their AI system | Operational monitoring |
   | **Data Scientist** | Read-only (own system) | View model performance logs | Troubleshooting |
   | **Auditor** | Read-only (time-limited) | View, query, export (with approval) | Audit activities |
   | **Incident Responder** | Read-only (incident-specific) | View logs related to incident | Investigation |

2. **Implement Role-Based Access Control (RBAC)**

   **AWS IAM Policy Example:**

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AISystemOwnerReadAccess",
         "Effect": "Allow",
         "Action": [
           "s3:GetObject",
           "s3:ListBucket"
         ],
         "Resource": [
           "arn:aws:s3:::ai-logs-production/logs/AI-SYS-0042/*"
         ],
         "Condition": {
           "StringEquals": {
             "aws:userid": "${aws:userid}"
           }
         }
       },
       {
         "Sid": "DenyModification",
         "Effect": "Deny",
         "Action": [
           "s3:DeleteObject",
           "s3:PutObject"
         ],
         "Resource": "arn:aws:s3:::ai-logs-production/logs/*"
       }
     ]
   }
   ```

3. **Implement Access Audit Logging**

   Log all access to logs (meta-logging):

   ```python
   def log_access(
       accessor_id: str,
       accessor_role: str,
       access_type: str,
       log_identifier: str,
       justification: str
   ):
       """Log all access to AI system logs."""

       access_logger.info(
           "log_accessed",
           accessor_id=accessor_id,
           accessor_role=accessor_role,
           access_type=access_type,
           log_identifier=log_identifier,
           justification=justification,
           access_timestamp=datetime.utcnow().isoformat() + "Z"
       )
   ```

4. **Implement Access Approval Workflow**

   For sensitive log access, require approval:

   ```python
   def request_log_access(
       requestor_id: str,
       log_identifier: str,
       justification: str,
       duration_hours: int
   ) -> str:
       """Request temporary access to logs."""

       # Create access request
       request_id = str(uuid.uuid4())

       logger.info(
           "log_access_requested",
           request_id=request_id,
           requestor_id=requestor_id,
           log_identifier=log_identifier,
           justification=justification,
           duration_hours=duration_hours
       )

       # Send for approval
       send_approval_request(
           request_id=request_id,
           approver=get_log_owner(log_identifier),
           requestor=requestor_id,
           justification=justification
       )

       return request_id
   ```

5. **Configure Access Anomaly Detection**

   Monitor for unusual access patterns:

   ```python
   def detect_access_anomalies():
       """Detect unusual log access patterns."""

       # Get access logs from last 24 hours
       access_logs = fetch_access_logs(hours=24)

       # Analyze patterns
       for accessor_id in set([log['accessor_id'] for log in access_logs]):
           accessor_logs = [l for l in access_logs if l['accessor_id'] == accessor_id]

           # Check for anomalies
           if len(accessor_logs) > 100:  # Excessive access
               logger.warning(
                   "excessive_log_access",
                   accessor_id=accessor_id,
                   access_count=len(accessor_logs)
               )

           # Check for off-hours access
           off_hours = [l for l in accessor_logs if is_off_hours(l['access_timestamp'])]
           if len(off_hours) > 10:
               logger.warning(
                   "off_hours_log_access",
                   accessor_id=accessor_id,
                   off_hours_count=len(off_hours)
               )
   ```

6. **Test Access Controls**
   - Verify RBAC policies enforce correctly
   - Test access denial for unauthorized users
   - Test access audit logging
   - Test access approval workflow
   - Test anomaly detection
   - Document test results (TEST-AI-LOG-007)

**Evidence Required:**
- Access Control Policy Document
- RBAC Configuration (IAM policies, etc.)
- Access Audit Logging Implementation
- Access Approval Workflow Procedures
- Anomaly Detection Configuration
- Test Results (TEST-AI-LOG-007)

**Timing:** 1-2 weeks

**Quality Check:**
- RBAC policies configured
- Access audit logging active
- Approval workflow operational
- Anomaly detection monitoring active

---

### PHASE 5: LOG MONITORING AND ANALYSIS (Control LOG-005)

#### Step 5.1: Implement Real-Time Log Monitoring

**When:** Before AI system deployment

**Who:** AI Operations Manager + DevOps + ML Engineer

**How:**

1. **Define Monitoring Objectives**

   What should monitoring detect?
   - **Performance Issues:** Slow inference, high error rates
   - **Quality Issues:** Low confidence scores, data quality degradation
   - **Security Issues:** Unauthorized access, suspicious patterns
   - **Compliance Issues:** Missing required log fields, retention failures

2. **Select Monitoring Technology**

   | Technology | Use Case | Pros | Cons |
   |------------|----------|------|------|
   | **Grafana** | General-purpose dashboards | Open-source, flexible, beautiful | Requires data source setup |
   | **Kibana** | ELK stack visualization | Powerful search, integrated with Elasticsearch | Resource-intensive |
   | **CloudWatch** | AWS-native monitoring | Native AWS integration, managed | AWS-only |
   | **Azure Monitor** | Azure-native monitoring | Native Azure integration, managed | Azure-only |
   | **Datadog** | Commercial monitoring platform | Comprehensive, easy to use, AI/ML focus | Expensive |

   **Recommended:** Grafana for flexibility; CloudWatch/Azure Monitor for cloud-native simplicity.

3. **Create Log Monitoring Dashboards**

   **Dashboard 1: AI System Health**
   - Total inferences (last hour, day, week)
   - Average inference time
   - Error rate percentage
   - System uptime percentage

   **Dashboard 2: Model Performance**
   - Average confidence score
   - Low confidence alert count
   - Model accuracy (if ground truth available)
   - Prediction distribution

   **Dashboard 3: Data Quality**
   - Missing field percentage
   - Data anomaly count
   - Feature drift score
   - Input validation failure rate

   **Dashboard 4: Security**
   - Failed access attempts
   - Unusual access patterns
   - Tamper detection alerts
   - Encryption failures

   **Grafana Dashboard Example (JSON):**

   ```json
   {
     "dashboard": {
       "title": "AI System Health",
       "panels": [
         {
           "title": "Total Inferences",
           "type": "stat",
           "targets": [
             {
               "expr": "sum(rate(ai_inference_total[1h]))"
             }
           ]
         },
         {
           "title": "Error Rate",
           "type": "graph",
           "targets": [
             {
               "expr": "rate(ai_inference_errors[5m]) / rate(ai_inference_total[5m])"
             }
           ],
           "alert": {
             "conditions": [
               {
                 "evaluator": {
                   "params": [0.05],
                   "type": "gt"
                 }
               }
             ]
           }
         }
       ]
     }
   }
   ```

4. **Configure Log Alerts**

   Set up automated alerts for critical conditions:

   | Alert | Condition | Severity | Action |
   |-------|-----------|----------|--------|
   | High Error Rate | Error rate > 5% for 5 minutes | CRITICAL | Page on-call engineer |
   | Low Confidence Spike | > 20% of inferences with confidence < 0.7 | HIGH | Notify ML team |
   | Tamper Detection | Any hash chain break | CRITICAL | Trigger security incident |
   | Missing Logs | No logs received for 5 minutes | HIGH | Notify operations team |
   | Retention Failure | Log deletion before 10 years | CRITICAL | Trigger compliance incident |

   **Grafana Alert Example:**

   ```yaml
   apiVersion: 1
   groups:
     - name: ai_system_alerts
       interval: 1m
       rules:
         - alert: HighErrorRate
           expr: rate(ai_inference_errors[5m]) / rate(ai_inference_total[5m]) > 0.05
           for: 5m
           labels:
             severity: critical
           annotations:
             summary: "High error rate detected"
             description: "AI system error rate is {{ $value }}%"
   ```

5. **Implement Anomaly Detection**

   Use statistical methods or ML to detect anomalies:

   ```python
   from sklearn.ensemble import IsolationForest
   import numpy as np

   def detect_inference_anomalies(recent_inferences: list) -> list:
       """Detect anomalous inference patterns."""

       # Extract features
       features = np.array([
           [
               inf['processing_time_ms'],
               inf['confidence_score'],
               len(inf.get('input_features', []))
           ]
           for inf in recent_inferences
       ])

       # Train anomaly detector
       detector = IsolationForest(contamination=0.01)
       detector.fit(features)

       # Detect anomalies
       predictions = detector.predict(features)

       # Return anomalous inferences
       anomalies = [
           inf for inf, pred in zip(recent_inferences, predictions)
           if pred == -1
       ]

       if anomalies:
           logger.warning(
               "inference_anomalies_detected",
               anomaly_count=len(anomalies),
               total_inferences=len(recent_inferences)
           )

       return anomalies
   ```

6. **Test Monitoring and Alerts**
   - Generate test log events
   - Verify dashboards display correctly
   - Trigger test alerts
   - Verify alert notifications delivered
   - Test anomaly detection
   - Document test results (TEST-AI-LOG-008)

**Evidence Required:**
- Monitoring Dashboard Screenshots
- Dashboard Configuration Files
- Alert Configuration
- Anomaly Detection Implementation
- Test Results (TEST-AI-LOG-008)

**Timing:** 2 weeks

---

#### Step 5.2: Implement Log Investigation Tools (Control LOG-005)

**When:** Before AI system deployment

**Who:** AI Operations Manager + DevOps

**How:**

1. **Set Up Log Query Interface**

   Provide tools for ad-hoc log analysis:

   **Option A: Elasticsearch + Kibana**
   - Full-text search across all logs
   - Complex query capabilities (KQL)
   - Visualization and aggregation

   **Option B: AWS CloudWatch Insights**
   - SQL-like query language
   - Native AWS integration
   - Cost-effective for AWS deployments

   **Option C: Azure Log Analytics**
   - KQL query language
   - Native Azure integration
   - Advanced analytics capabilities

2. **Create Common Query Templates**

   **Query 1: Find inferences for specific user**
   ```sql
   SELECT *
   FROM ai_logs
   WHERE event_type = 'INFERENCE'
     AND user_id = 'USER-HASH-ABC123'
     AND timestamp > '2025-12-01T00:00:00Z'
   ORDER BY timestamp DESC
   ```

   **Query 2: Find low confidence inferences**
   ```sql
   SELECT inference_id, confidence_score, model_id, timestamp
   FROM ai_logs
   WHERE event_type = 'INFERENCE'
     AND confidence_score < 0.7
     AND timestamp > NOW() - INTERVAL '24 hours'
   ORDER BY confidence_score ASC
   ```

   **Query 3: Investigate specific incident**
   ```sql
   SELECT *
   FROM ai_logs
   WHERE session_id = 'sess-12345678'
   ORDER BY timestamp ASC
   ```

3. **Create Investigation Runbooks**

   Document procedures for common investigations:

   **Runbook 1: Investigating Inference Error**
   1. Identify error log entry
   2. Query all logs with same `inference_id`
   3. Review input data hash
   4. Review model version and configuration
   5. Check for similar errors in timeframe
   6. Document findings

   **Runbook 2: Investigating Bias Complaint**
   1. Identify affected user and timeframe
   2. Query all inferences for user
   3. Compare confidence scores vs. population average
   4. Review input data characteristics
   5. Escalate to ML team if bias confirmed
   6. Document findings

4. **Implement Log Export Functionality**

   Enable exporting logs for external analysis:

   ```python
   def export_logs(
       ai_system_id: str,
       start_date: str,
       end_date: str,
       export_format: str = 'json'
   ) -> str:
       """Export logs for regulatory reporting or investigation."""

       # Query logs
       logs = query_logs(
           ai_system_id=ai_system_id,
           start_date=start_date,
           end_date=end_date
       )

       # Generate export file
       export_id = str(uuid.uuid4())
       export_path = f"/exports/{export_id}.{export_format}"

       if export_format == 'json':
           with open(export_path, 'w') as f:
               json.dump(logs, f, indent=2)
       elif export_format == 'csv':
           df = pd.DataFrame(logs)
           df.to_csv(export_path, index=False)

       # Log the export
       logger.info(
           "logs_exported",
           export_id=export_id,
           ai_system_id=ai_system_id,
           start_date=start_date,
           end_date=end_date,
           log_count=len(logs),
           export_format=export_format
       )

       return export_path
   ```

5. **Test Investigation Tools**
   - Test log query interface
   - Execute common queries
   - Test log export functionality
   - Verify exported logs complete and accurate
   - Document test results (TEST-AI-LOG-009)

**Evidence Required:**
- Log Query Interface Configuration
- Common Query Templates Library
- Investigation Runbooks
- Log Export Implementation
- Test Results (TEST-AI-LOG-009)

**Timing:** 1-2 weeks

---

### PHASE 6: CONTINUOUS COMPLIANCE AND IMPROVEMENT

#### Step 6.1: Conduct Periodic Log Compliance Reviews

**When:** Quarterly

**Who:** Compliance Officer + AI Operations Manager

**How:**

1. **Review Logging Coverage**
   - Verify all AI systems have logging enabled
   - Verify all required events logged
   - Identify gaps in logging coverage
   - Document findings in Logging Compliance Review Report (RPT-AI-LOG-001)

2. **Review Retention Compliance**
   - Verify 10-year retention enforced
   - Check for premature deletions
   - Verify legal holds maintained
   - Review retention exceptions
   - Document findings

3. **Review Tamper Protection**
   - Verify hash chain integrity
   - Review tamper detection alerts
   - Verify write-once storage operational
   - Document findings

4. **Review Access Controls**
   - Review access audit logs
   - Identify unusual access patterns
   - Review access approvals
   - Update access control policies as needed
   - Document findings

5. **Generate Compliance Report**
   - Summarize compliance status
   - Identify non-compliance issues
   - Recommend corrective actions
   - Present to AI Governance Committee
   - Document approval

**Evidence Required:**
- Logging Compliance Review Report (RPT-AI-LOG-001)
- AI Governance Committee Meeting Minutes
- Corrective Action Plan (if issues identified)

**Timing:** Quarterly

---

#### Step 6.2: Update Logging Framework

**When:** Annually or when regulatory changes occur

**Who:** AI Operations Manager + AI Governance Committee

**How:**

1. **Assess Framework Effectiveness**
   - Review logging process execution
   - Evaluate log quality and completeness
   - Assess monitoring effectiveness
   - Review compliance with procedure
   - Gather feedback from stakeholders

2. **Identify Improvement Opportunities**
   - What aspects of logging work well?
   - What aspects need improvement?
   - Are there gaps in coverage?
   - Are there unnecessary log events?

3. **Update Framework**
   - Revise logging procedures
   - Update event catalog
   - Enhance monitoring dashboards
   - Improve investigation tools

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

**Timing:** Annually

---

## 5. DECISION SUPPORT

### 5.1 Log Level Decision Tree

```
START: Event Occurs in AI System
│
├─ Is this a system failure or critical error?
│  ├─ YES → LOG LEVEL: CRITICAL
│  │        RETENTION: Never delete
│  │        ACTION: Immediate alert and investigation
│  │
│  └─ NO → Continue to next question
│
├─ Is this an error affecting functionality?
│  ├─ YES → LOG LEVEL: ERROR
│  │        RETENTION: 10 years (standard)
│  │        ACTION: Alert and investigation
│  │
│  └─ NO → Continue to next question
│
├─ Is this a warning condition (potential issue)?
│  ├─ YES → LOG LEVEL: WARNING
│  │        RETENTION: 10 years (standard)
│  │        ACTION: Monitor and review
│  │
│  └─ NO → Continue to next question
│
├─ Is this an important operational event?
│  ├─ YES → LOG LEVEL: INFO
│  │        RETENTION: 10 years (standard)
│  │        ACTION: Standard logging
│  │
│  └─ NO → Continue to next question
│
├─ Is this detailed diagnostic information?
│  └─ YES → LOG LEVEL: DEBUG
│           RETENTION: 30 days (optional)
│           ACTION: Development/troubleshooting only
│
└─ END: Log Level Determined
   ACTION: Generate log with appropriate level
```

### 5.2 Log Retention Decision Tree

```
START: Log Entry Created
│
├─ Is this log from a high-risk AI system?
│  ├─ YES → RETENTION: 10 years (Article 12(2))
│  │        STORAGE: Hot → Warm → Cold tier
│  │
│  └─ NO → Continue to next question
│
├─ Is this log related to an ongoing investigation?
│  ├─ YES → RETENTION: Indefinite (until investigation closed)
│  │        STORAGE: Hot tier (accessible)
│  │        TAG: Investigation hold
│  │
│  └─ NO → Continue to next question
│
├─ Is this log under legal hold?
│  ├─ YES → RETENTION: Indefinite (until hold released)
│  │        STORAGE: Hot tier (accessible)
│  │        TAG: Legal hold
│  │
│  └─ NO → Continue to next question
│
├─ Is this log related to an active dispute?
│  ├─ YES → RETENTION: Until dispute resolved + 1 year
│  │        STORAGE: Warm tier
│  │        TAG: Dispute hold
│  │
│  └─ NO → Continue to standard retention
│
└─ STANDARD RETENTION:
   ├─ 0-90 days: Hot storage (fast access)
   ├─ 90 days - 2 years: Warm storage (standard access)
   ├─ 2-10 years: Cold storage (archival access)
   └─ After 10 years: Delete (unless hold active)
```

### 5.3 Log Access Decision Tree

```
START: User Requests Log Access
│
├─ Does user have assigned role with log access?
│  ├─ NO → DENY ACCESS
│  │       ACTION: Log access denial
│  │       NOTIFY: Security team
│  │
│  └─ YES → Continue to next question
│
├─ Is access for user's own AI system?
│  ├─ YES → GRANT READ ACCESS
│  │        SCOPE: Logs for user's AI system only
│  │        LOG: Access granted
│  │
│  └─ NO → Continue to next question
│
├─ Is access for incident investigation?
│  ├─ YES → Require approval
│  │        ├─ Approval granted → GRANT TEMPORARY ACCESS
│  │        │                     DURATION: Investigation period
│  │        │                     SCOPE: Incident-related logs only
│  │        │                     LOG: Access granted with justification
│  │        │
│  │        └─ Approval denied → DENY ACCESS
│  │                             LOG: Access denied
│  │
│  └─ NO → Continue to next question
│
├─ Is access for audit or compliance?
│  ├─ YES → Require approval
│  │        ├─ Approval granted → GRANT TEMPORARY ACCESS
│  │        │                     DURATION: Audit period
│  │        │                     SCOPE: Full read access
│  │        │                     LOG: Audit access granted
│  │        │
│  │        └─ Approval denied → DENY ACCESS
│  │                             LOG: Access denied
│  │
│  └─ NO → DENY ACCESS
│           LOG: Insufficient justification
│
└─ END: Access Decision Made
   ACTION: Log access decision
```

---

## 6. TEMPLATES AND FORMS

This procedure uses a consolidated set of 8 core templates that cover all logging activities. Each template is designed to be reusable across multiple AI systems and lifecycle phases.

### 6.1 Core Templates (Consolidated)

| Template ID | Template Name | Purpose | Contains |
|---|---|---|---|
| **TMP-AI-LOG-001** | **Logging Requirements & Design Workbook** | Define logging requirements and design log schema | Logging requirements checklist; Event catalog; Log schema specification; Privacy assessment |
| **TMP-AI-LOG-002** | **Log Event Catalog** | Document all log events generated by AI system | Event definitions; Event schema; Example events; Event severity mapping |
| **TMP-AI-LOG-003** | **Log Infrastructure Configuration** | Configure log collection, storage, and retention | Log collection configuration; Storage tier configuration; Retention policy; Tamper protection config |
| **TMP-AI-LOG-004** | **Log Security & Access Control** | Manage log security and access controls | Encryption configuration; Access control policy; RBAC configuration; Access approval workflow |
| **TMP-AI-LOG-005** | **Log Monitoring & Alerting** | Monitor logs and configure alerts | Dashboard configuration; Alert definitions; Anomaly detection config; KPI definitions |
| **TMP-AI-LOG-006** | **Log Investigation Tools** | Support incident investigation and analysis | Query templates; Investigation runbooks; Export procedures; Analysis workflows |
| **TMP-AI-LOG-007** | **Log Compliance & Audit** | Track compliance and audit activities | Compliance review checklist; Audit findings; Corrective action plans; Compliance reports |
| **TMP-AI-LOG-008** | **Log Testing & Validation** | Test and validate logging implementation | Test plans; Test results; Validation checklists; Quality assurance records |

### 6.2 Template Usage by Procedure Step

| Procedure Step | Primary Template | Supporting Templates |
|---|---|---|
| 1.1 Define Logging Requirements | TMP-AI-LOG-001 | — |
| 1.2 Design Log Schema | TMP-AI-LOG-001, TMP-AI-LOG-002 | — |
| 2.1 Implement Application Logging | TMP-AI-LOG-002 | TMP-AI-LOG-008 |
| 2.2 Implement Inference Logging | TMP-AI-LOG-002 | TMP-AI-LOG-008 |
| 3.1 Deploy Log Collection | TMP-AI-LOG-003 | TMP-AI-LOG-008 |
| 3.2 Implement Storage & Retention | TMP-AI-LOG-003 | TMP-AI-LOG-007 |
| 4.1 Implement Encryption | TMP-AI-LOG-004 | TMP-AI-LOG-008 |
| 4.2 Implement Tamper Protection | TMP-AI-LOG-004 | TMP-AI-LOG-008 |
| 4.3 Implement Access Controls | TMP-AI-LOG-004 | TMP-AI-LOG-007 |
| 5.1 Implement Monitoring | TMP-AI-LOG-005 | TMP-AI-LOG-008 |
| 5.2 Implement Investigation Tools | TMP-AI-LOG-006 | — |
| 6.1 Compliance Reviews | TMP-AI-LOG-007 | — |
| 6.2 Update Framework | TMP-AI-LOG-007 | TMP-AI-LOG-001 |

### 6.3 Template Structure

Each consolidated template contains:
- **Checklists** - Ensure completeness of activities
- **Worksheets** - Document requirements and designs
- **Forms** - Capture structured information
- **Records** - Store evidence and audit trail
- **Reports** - Summarize findings for stakeholders
- **Configurations** - Technical configuration files

This consolidation reduces the number of templates from 30+ to 8 while maintaining comprehensive coverage of all logging activities.

---

## 7. QUALITY ASSURANCE

### 7.1 Quality Checks

| Step | Quality Check | Acceptance Criteria |
|---|---|---|
| Logging Requirements | Completeness | All Article 12 mandatory events identified |
| Logging Requirements | Privacy compliance | Personal data handling compliant with GDPR |
| Log Schema | Standardization | All logs follow standard schema |
| Log Schema | Completeness | All mandatory fields included |
| Log Instrumentation | Coverage | 100% of required events logged |
| Log Instrumentation | Accuracy | Log data accurate and complete |
| Log Infrastructure | Reliability | 99.9% log collection success rate |
| Log Infrastructure | Performance | Log collection adds < 5% overhead |
| Tamper Protection | Integrity | Hash chain unbroken; no tamper detected |
| Retention Compliance | Duration | 10-year retention enforced |
| Access Controls | Security | Only authorized users can access logs |
| Monitoring | Effectiveness | Alerts detect issues within 5 minutes |

### 7.2 Audit and Review

- **Internal Audit:** Annual audit of logging system effectiveness
- **External Audit:** Annual audit by external auditor (if required)
- **Regulatory Inspection:** Competent authority inspection (if triggered)
- **Management Review:** Quarterly review by AI Governance Committee

---

## 8. ESCALATION PROCEDURES

### 8.1 Escalation Triggers

| Trigger | Escalation Level | Escalation To | Timeline |
|---|---|---|---|
| Log tampering detected | Level 1 (Critical) | Security Officer + CTO | Immediate (< 1 hour) |
| Retention failure (premature deletion) | Level 1 (Critical) | Compliance Officer + CTO | Immediate (< 4 hours) |
| Log collection failure | Level 2 (High) | AI Ops Manager + DevOps | Within 2 hours |
| Monitoring system failure | Level 2 (High) | AI Ops Manager + DevOps | Within 4 hours |
| Access control breach | Level 1 (Critical) | Security Officer | Immediate (< 1 hour) |
| Encryption failure | Level 1 (Critical) | Security Officer | Immediate (< 1 hour) |
| Compliance review findings | Level 3 (Medium) | Compliance Officer + AI Governance Committee | Within 5 business days |

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
| Article 12(1) | Logs enable traceability and monitoring | Steps 1.1-1.2, 2.1-2.2 |
| Article 12(2) | 10-year log retention | Step 3.2, Section 3.3 |
| Article 12(3) | Logs enable operation investigation | Step 5.2 |
| Article 19(1) | Deployers must keep logs generated | Steps 3.2, 6.1 |
| Article 19(2) | Logs accessible to authorities | Step 4.3, 5.2 |

### 9.2 Audit Verification

Auditors will verify:

1. **Logging System Established**
   - Logging requirements documented
   - Log schema defined and approved
   - Event catalog complete

2. **Log Instrumentation Implemented**
   - All required events logged
   - Log format follows schema
   - All mandatory fields populated

3. **Log Infrastructure Operational**
   - Log collection functional
   - Storage tiers configured
   - 10-year retention enforced

4. **Tamper Protection Active**
   - Write-once storage enabled
   - Hash chain implemented
   - Tamper detection monitoring active

5. **Access Controls Enforced**
   - RBAC configured
   - Access audit logging operational
   - Unauthorized access prevented

6. **Monitoring and Investigation Capable**
   - Monitoring dashboards operational
   - Alerts configured and tested
   - Investigation tools available

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
| **Prepared By** | [Name] | AI Operations Manager | __________ | ________ |
| **Reviewed By** | [Name] | Chief Technology Officer | __________ | ________ |
| **Reviewed By** | [Name] | Security Officer | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## 12. DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Public/Internal/Confidential]
**Distribution:** AI Operations Manager, AI System Owners, AI Governance Committee, Compliance, Security, Internal Audit
**Retention:** 10 years (per EU AI Act)
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]

---

## APPENDIX A: LOG EVENT CATALOG

This appendix provides 25+ sample log events for AI systems. Customize based on your AI system's specific requirements.

### A.1 Inference Events

| Event ID | Event Name | Severity | Description | Mandatory Fields |
|----------|-----------|----------|-------------|------------------|
| LOG-INF-001 | INFERENCE_STARTED | INFO | Inference request received | ai_system_id, model_id, session_id, user_id, inference_id, timestamp |
| LOG-INF-002 | INFERENCE_COMPLETED | INFO | Inference completed successfully | ai_system_id, model_id, inference_id, input_hash, output_hash, confidence_score, processing_time_ms |
| LOG-INF-003 | INFERENCE_FAILED | ERROR | Inference processing failed | ai_system_id, model_id, inference_id, error_type, error_message |
| LOG-INF-004 | LOW_CONFIDENCE_INFERENCE | WARNING | Inference completed with low confidence | ai_system_id, model_id, inference_id, confidence_score, threshold |
| LOG-INF-005 | BATCH_INFERENCE_STARTED | INFO | Batch inference job started | ai_system_id, model_id, batch_id, batch_size |
| LOG-INF-006 | BATCH_INFERENCE_COMPLETED | INFO | Batch inference job completed | ai_system_id, model_id, batch_id, successful_count, failed_count, avg_confidence |

### A.2 Model Events

| Event ID | Event Name | Severity | Description | Mandatory Fields |
|----------|-----------|----------|-------------|------------------|
| LOG-MDL-001 | MODEL_LOADED | INFO | Model loaded into memory | ai_system_id, model_id, model_version, training_date, load_time_ms |
| LOG-MDL-002 | MODEL_UNLOADED | INFO | Model unloaded from memory | ai_system_id, model_id, unload_time_ms |
| LOG-MDL-003 | MODEL_UPDATED | INFO | Model updated to new version | ai_system_id, old_model_id, new_model_id, update_reason |
| LOG-MDL-004 | MODEL_LOAD_FAILED | ERROR | Failed to load model | ai_system_id, model_id, error_message |
| LOG-MDL-005 | MODEL_CONFIGURATION_CHANGED | INFO | Model configuration updated | ai_system_id, model_id, config_changes, changed_by |

### A.3 Data Quality Events

| Event ID | Event Name | Severity | Description | Mandatory Fields |
|----------|-----------|----------|-------------|------------------|
| LOG-DAT-001 | DATA_VALIDATION_PASSED | INFO | Input data validation passed | ai_system_id, inference_id, validation_rules_applied |
| LOG-DAT-002 | DATA_VALIDATION_FAILED | WARNING | Input data validation failed | ai_system_id, inference_id, validation_failures, failed_rules |
| LOG-DAT-003 | MISSING_REQUIRED_FIELD | ERROR | Required input field missing | ai_system_id, inference_id, missing_fields |
| LOG-DAT-004 | DATA_QUALITY_ANOMALY | WARNING | Data quality anomaly detected | ai_system_id, inference_id, anomaly_type, anomaly_score |
| LOG-DAT-005 | FEATURE_DRIFT_DETECTED | WARNING | Feature distribution drift detected | ai_system_id, model_id, feature_name, drift_score |

### A.4 System Events

| Event ID | Event Name | Severity | Description | Mandatory Fields |
|----------|-----------|----------|-------------|------------------|
| LOG-SYS-001 | SYSTEM_STARTED | INFO | AI system started | ai_system_id, version, environment |
| LOG-SYS-002 | SYSTEM_STOPPED | INFO | AI system stopped | ai_system_id, shutdown_reason |
| LOG-SYS-003 | SYSTEM_HEALTH_CHECK | INFO | System health check executed | ai_system_id, health_status, uptime_seconds |
| LOG-SYS-004 | SYSTEM_ERROR | ERROR | System-level error occurred | ai_system_id, error_type, error_message, stack_trace |
| LOG-SYS-005 | PERFORMANCE_DEGRADATION | WARNING | System performance degraded | ai_system_id, metric_name, current_value, baseline_value |

### A.5 Security Events

| Event ID | Event Name | Severity | Description | Mandatory Fields |
|----------|-----------|----------|-------------|------------------|
| LOG-SEC-001 | AUTHENTICATION_SUCCESS | INFO | User authenticated successfully | user_id, session_id, authentication_method |
| LOG-SEC-002 | AUTHENTICATION_FAILED | WARNING | Authentication attempt failed | user_id_attempted, failure_reason, source_ip |
| LOG-SEC-003 | AUTHORIZATION_DENIED | WARNING | User authorization denied | user_id, session_id, requested_action, denial_reason |
| LOG-SEC-004 | SUSPICIOUS_ACTIVITY | WARNING | Suspicious activity detected | user_id, session_id, activity_description, risk_score |
| LOG-SEC-005 | ADVERSARIAL_INPUT_DETECTED | CRITICAL | Potential adversarial input detected | ai_system_id, inference_id, detection_method, confidence |
| LOG-SEC-006 | LOG_TAMPERING_DETECTED | CRITICAL | Log tampering attempt detected | affected_logs, detection_method, timestamp |

### A.6 User Interaction Events

| Event ID | Event Name | Severity | Description | Mandatory Fields |
|----------|-----------|----------|-------------|------------------|
| LOG-USR-001 | USER_ACTION | INFO | User performed action | user_id, session_id, action_type, action_details |
| LOG-USR-002 | HUMAN_OVERRIDE | INFO | User overrode AI decision | user_id, session_id, inference_id, override_reason, original_decision, override_decision |
| LOG-USR-003 | USER_FEEDBACK | INFO | User provided feedback on AI output | user_id, session_id, inference_id, feedback_type, feedback_details |
| LOG-USR-004 | DECISION_CHALLENGED | INFO | User challenged AI decision | user_id, session_id, inference_id, challenge_reason |

### A.7 Compliance Events

| Event ID | Event Name | Severity | Description | Mandatory Fields |
|----------|-----------|----------|-------------|------------------|
| LOG-CMP-001 | AUDIT_LOG_ACCESSED | INFO | Audit log accessed | accessor_id, access_reason, log_identifier |
| LOG-CMP-002 | REGULATORY_REPORT_GENERATED | INFO | Regulatory report generated | report_type, period_start, period_end, generated_by |
| LOG-CMP-003 | RETENTION_POLICY_APPLIED | INFO | Log retention policy applied | logs_affected, retention_action, policy_id |
| LOG-CMP-004 | LEGAL_HOLD_APPLIED | INFO | Legal hold applied to logs | log_identifier, hold_reason, applied_by |

---

## APPENDIX B: GLOSSARY OF TERMS

| Term | Definition |
|------|------------|
| **AI System** | A machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments (EU AI Act Art. 3(1)) |
| **Append-Only Log** | A log storage mechanism where entries can only be added, never modified or deleted, ensuring log integrity |
| **Cold Storage** | Long-term archival storage with slower access times but lower cost, typically used for logs older than 2 years |
| **Cryptographic Hash** | A one-way mathematical function that produces a unique fixed-size output for any input, used to verify data integrity |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority (EU AI Act Art. 3(4)) |
| **Hash Chain** | A sequence of cryptographic hashes where each entry includes the hash of the previous entry, creating an immutable chain |
| **High-Risk AI System** | An AI system that is listed in Annex III of the EU AI Act or intended to be used as a safety component of a product covered by EU harmonization legislation |
| **Hot Storage** | Short-term storage with fast access times for recently generated logs, typically 0-90 days |
| **Inference** | The process of using a trained AI model to make predictions or decisions on new input data |
| **Legal Hold** | A requirement to preserve logs indefinitely due to ongoing or anticipated legal proceedings |
| **Log Event** | A discrete occurrence in an AI system that is recorded in the logging system |
| **Log Level** | A classification of log importance: CRITICAL, ERROR, WARNING, INFO, DEBUG |
| **Log Schema** | The structured format defining the fields and data types of log entries |
| **Provider** | Any natural or legal person, public authority, agency or other body that develops an AI system or general-purpose AI model, or has an AI system developed, and places it on the market or puts it into service under its own name or trademark (EU AI Act Art. 3(3)) |
| **Pseudonymization** | The processing of personal data such that the data can no longer be attributed to a specific data subject without additional information |
| **Tamper Protection** | Security mechanisms that prevent unauthorized modification or deletion of logs |
| **Traceability** | The ability to track the operation of an AI system over time through comprehensive logging |
| **Warm Storage** | Medium-term storage with moderate access times and cost, typically used for logs 90 days to 2 years old |
| **Write-Once Storage** | Storage technology that allows data to be written once but prevents subsequent modification or deletion |

---

## APPENDIX C: CROSS-REFERENCES TO OTHER PROCEDURES

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
│ PROC-AI-CLS-001   │   │ PROC-AI-LOG-001   │   │ PROC-AI-DATA-001  │
│ Classification    │──▶│ Logging           │◀──│ Data Governance   │
│                   │   │ (THIS PROCEDURE)  │   │                   │
└───────────────────┘   └─────────┬─────────┘   └───────────────────┘
        │                         │                         │
        │                         ▼                         │
        │               ┌───────────────────┐               │
        │               │ PROC-AI-RM-001    │               │
        └──────────────▶│ Risk Management   │◀──────────────┘
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
| Step 1.1 | PROC-AI-CLS-001 | AI system classification informs logging requirements | During requirements definition |
| Step 1.1 | PROC-AI-DATA-001 | Privacy assessment for personal data in logs | During requirements definition |
| Section 3.3 | PROC-AI-RM-001 | Retention exceptions for investigation | Ongoing |
| Step 5.2 | PROC-AI-INC-001 | Log investigation supports incident response | During incidents |

### C.3 Template Cross-Reference

| Template from This Procedure | Used By | Purpose |
|------------------------------|---------|---------|
| TMP-AI-LOG-002 | PROC-AI-DOC-001 | Event catalog feeds technical documentation |
| TMP-AI-LOG-006 | PROC-AI-INC-001 | Investigation tools support incident response |
| TMP-AI-LOG-007 | Internal Audit | Compliance reviews support audit activities |

---

## APPENDIX D: QUICK REFERENCE CARD

### Log Levels Quick Reference

| Level | When to Use | Retention | Example |
|-------|-------------|-----------|---------|
| CRITICAL | System failure; immediate action required | Never delete | Log tampering detected |
| ERROR | Error affecting functionality | 10 years | Inference processing failed |
| WARNING | Potential issue; warning condition | 10 years | Low confidence inference |
| INFO | Normal operation; important event | 10 years | Inference completed |
| DEBUG | Detailed diagnostic information | 30 days | Internal processing details |

### Retention Policy Quick Reference

| Log Age | Storage Tier | Access Time | Action |
|---------|--------------|-------------|--------|
| 0-90 days | Hot | < 1 second | Active monitoring |
| 90 days - 2 years | Warm | < 1 minute | Periodic review |
| 2-10 years | Cold | < 1 hour | Archival/compliance |
| > 10 years | Delete | N/A | Unless legal hold |

### Key Contacts

| Role | Contact | Escalate For |
|------|---------|--------------|
| AI Operations Manager | [Email] | Log infrastructure issues |
| Security Officer | [Email] | Tampering, access breaches |
| Compliance Officer | [Email] | Retention compliance |
| AI Governance Committee | [Distribution List] | Policy violations |

### Key Dates & Frequencies

| Activity | Frequency | Owner |
|----------|-----------|-------|
| Log Monitoring | Continuous | ML Ops |
| Hash Chain Verification | Hourly | Security Officer |
| Compliance Review | Quarterly | Compliance Officer |
| Framework Review | Annually | AI Operations Manager |

---

## APPENDIX E: INTEGRATION DIAGRAM

This diagram shows how logging integrates with the AI system lifecycle.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           AI SYSTEM LIFECYCLE WITH LOGGING                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  LIFECYCLE PHASE     │ DESIGN │ DEVELOP │  TEST  │ DEPLOY │  OPERATE │ DECOMMISSION│
│                      │────────│─────────│────────│────────│──────────│─────────────││
│                                                                                      │
│  ┌─────────────────┐ │   ●    │    ●    │   ●    │   ●    │    ●     │      ●      │
│  │ PROC-AI-LOG-001 │ │ Design │ Implement│ Test  │ Deploy │ Monitor  │  Archive    │
│  │ Logging         │ │ Schema │ Logging  │Logging │  Infra │  & Alert │  Logs       │
│  │ (THIS PROCEDURE)│ │        │          │        │        │          │             │
│  └─────────────────┘ │        │          │        │        │          │             │
│                                                                                      │
│  LOG ACTIVITIES BY PHASE:                                                           │
│                                                                                      │
│  DESIGN:           DEVELOP:         TEST:            DEPLOY:         OPERATE:       │
│  • Requirements    • Instrument      • Verify         • Deploy        • Monitor      │
│  • Event Catalog   • Implement       • Validate       • Configure     • Alert        │
│  • Schema Design   • Test Coverage   • Load Test      • Tamper Prot   • Investigate  │
│                                                                                      │
│  DECOMMISSION:                                                                      │
│  • Archive logs                                                                     │
│  • Maintain 10-year retention                                                       │
│  • Delete after retention period                                                    │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘

LOGGING DATA FLOW:

     AI SYSTEM                LOG COLLECTION           LOG STORAGE              LOG ANALYSIS
        │                           │                        │                        │
        │  1. Generate Log Event    │                        │                        │
        ├──────────────────────────▶│                        │                        │
        │                           │                        │                        │
        │                           │  2. Collect & Parse    │                        │
        │                           ├───────────────────────▶│                        │
        │                           │                        │                        │
        │                           │                        │  3. Store in Tier      │
        │                           │                        │  (Hot/Warm/Cold)       │
        │                           │                        │                        │
        │                           │                        │  4. Query & Analyze    │
        │                           │                        ├───────────────────────▶│
        │                           │                        │                        │
        │                           │                        │                        │  5. Alert
        │                           │                        │                        │  or Report
        │                           │                        │                        │
```

---

**END OF PROCEDURE PROC-AI-LOG-001**
