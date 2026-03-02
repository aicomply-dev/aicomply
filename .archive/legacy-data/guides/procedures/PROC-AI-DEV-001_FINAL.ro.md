# PROC-AI-DEV-001: Procedura Ciclului de Viață al Dezvoltării Sistemelor AI

**ID Procedură:** PROC-AI-DEV-001
**Nume Procedură:** Procedura Ciclului de Viață al Dezvoltării Sistemelor AI
**Standard:** STD-AI-001: Standard de Clasificare a Sistemelor AI, STD-AI-002: Standard de Gestionare a Riscurilor AI
**Acoperă Controalele:** CLS-001, CLS-002, CLS-003, CLS-004, RM-001, RM-002, RM-003, RM-004
**Data Intrării în Vigoare:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizuiri:** [De completat]
**Stare Aprobare:** [Ciornă/Aprobat]

---

## 1. SCOP ȘI APLICABILITATE

### 1.1 Scop

Această procedură stabilește procesul standardizat pentru dezvoltarea sistemelor AI în conformitate cu Actul AI al UE, asigurând că cerințele de gestionare a riscurilor, documentare și conformitate sunt integrate pe parcursul întregului ciclu de viață al dezvoltării, de la concept până la implementare și ulterior.

### 1.2 Aplicabilitate

Această procedură se aplică la:
- Toate proiectele noi de dezvoltare a sistemelor AI
- Îmbunătățiri majore ale sistemelor AI existente
- Sisteme AI achiziționate de la terți care necesită personalizare
- Sisteme AI destinate implementării pe piața UE
- Toate categoriile de risc AI (interzise, cu risc ridicat, cu risc limitat, cu risc minimal)

Această procedură nu se aplică la:
- Sisteme AI standard fără personalizare (a se vedea PROC-AI-VENDOR-001)
- Cercetare și AI experimental nedestinat producției
- Sisteme AI excluse explicit din domeniul de aplicare al Actului AI al UE

### 1.3 Proprietarul Procedurii și Contacte

| Rol | Nume | Titlu | Contact |
|------|------|-------|---------|
| **Proprietar Procedură** | [Nume] | Lider Dezvoltare AI | [Email/Telefon] |
| **Escaladare** | [Nume] | Director Tehnologic | [Email/Telefon] |
| **Guvernanță** | [Nume] | Președinte Comitet Guvernanță AI | [Email/Telefon] |

---

## 2. ROLURI ȘI RESPONSABILITĂȚI

### 2.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|------|----------------|-----------|
| **Manager Proiect AI** | Gestionează ciclul de viață al dezvoltării; asigură conformitatea la porțile de fază; coordonează echipele | Aprobă tranziții de fază; escaladează blocaje |
| **Proprietar Sistem AI** | Definește cerințele de afaceri; acceptă sistemul pentru implementare; deține conformitatea | Aprobă cerințele; acceptă riscurile reziduale |
| **Lider Dezvoltare AI** | Conducere tehnică; decizii de arhitectură; calitate cod | Aprobă proiectele tehnice; respinge codul neconform |
| **Data Scientist/Inginer ML** | Dezvoltare model; antrenare; testare; validare | Execută activități de dezvoltare |
| **Manager Risc AI** | Evaluare risc la fiecare fază; menținere registru riscuri | Blochează implementarea pentru riscuri inacceptabile |
| **Ofițer Conformitate** | Verificare conformitate reglementară; aliniere Actul AI UE | Aprobă documentația de conformitate |
| **Asigurare Calitate** | Testare; validare; activități de verificare | Aprobă rezultatele testelor; respinge sisteme defectuoase |
| **Arhitect Securitate** | Cerințe securitate; modelare amenințări; testare securitate | Aprobă arhitectura de securitate |
| **Ofițer Protecție Date** | Conformitate GDPR; evaluări impact protecție date | Aprobă activitățile de prelucrare date |

### 2.2 Matrice RACI

| Activitate | Manager Proiect | Proprietar Sistem | Lider Dev | Data Scientist | Manager Risc | Conformitate | QA |
|----------|-------------|--------------|----------|----------------|----------|------------|-----|
| Inițiere proiect | A | R | C | I | C | C | I |
| Definire cerințe | R | A | C | C | C | C | I |
| Clasificare risc | C | R | C | I | A | C | I |
| Proiectare arhitectură | C | I | A | R | C | C | C |
| Dezvoltare model | C | I | C | A | I | I | C |
| Testare și validare | C | I | C | R | C | C | A |
| Revizuire conformitate | C | I | C | I | R | A | C |
| Aprobare implementare | A | R | C | I | R | R | R |
| Monitorizare post-implementare | C | A | C | R | R | C | C |

**Legendă:** A=Responsabil (Accountable), R=Responsabil (Responsible), C=Consultat, I=Informat

---

## 3. CADRUL CICLULUI DE VIAȚĂ AL DEZVOLTĂRII AI

### 3.1 Prezentare Generale a Fazelor Ciclului de Viață

Ciclul de viață al dezvoltării AI constă din șapte faze obligatorii cu porți de fază:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CICLUL DE VIAȚĂ AL DEZVOLTĂRII SISTEMULUI AI             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FAZA 1           FAZA 2           FAZA 3           FAZA 4                 │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐      ┌─────────┐           │
│  │ CONCEPT │ ──►  │PROIECT- │ ──►  │DEZVOL-  │ ──►  │ TESTARE │           │
│  │ ȘI INIȚIERE│    │  ARE    │      │  TARE   │      │         │           │
│  └────┬────┘      └────┬────┘      └────┬────┘      └────┬────┘           │
│       │                │                │                │                 │
│    POARTA 1         POARTA 2         POARTA 3         POARTA 4            │
│  Clasificare      Revizuire        Revizuire       Finalizare            │
│  și Revizuire     Proiectare       Dezvoltare         Testare             │
│     Risc                                                                    │
│                                                                             │
│  FAZA 5           FAZA 6           FAZA 7                                 │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐                            │
│  │IMPLE-   │ ──►  │OPERARE  │ ──►  │RETRAGERE│                            │
│  │MENTARE  │      │ȘI MONIT.│      │         │                            │
│  └────┬────┘      └────┬────┘      └────┬────┘                            │
│       │                │                │                                  │
│    POARTA 5         POARTA 6         POARTA 7                             │
│  Aprobare        Revizuire         Aprobare                               │
│ Implementare    Operațională       Retragere                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Cerințe pentru Porțile de Fază

Fiecare poartă de fază necesită aprobări specifice înainte de a continua:

| Poartă | Aprobări Necesare | Livrabile Cheie | Criterii Go/No-Go |
|------|-------------------|------------------|-------------------|
| **Poarta 1** | Manager Risc AI, Conformitate | Decizie clasificare, Evaluare inițială risc | Nivel risc determinat, Cale conformitate clară |
| **Poarta 2** | Lider Dev, Securitate, DPO | Document arhitectură, DPIA (dacă necesar) | Proiect aprobat, Cerințe securitate îndeplinite |
| **Poarta 3** | Lider Dev, QA | Model funcțional, Teste unitare trecute | Cod complet, Standarde calitate îndeplinite |
| **Poarta 4** | QA, Manager Risc | Rapoarte testare, Rezultate validare | Toate testele trecute, Riscuri mitigate |
| **Poarta 5** | Proprietar Sistem, Conformitate, Risc | Evaluare conformitate, Marcare CE (dacă risc ridicat) | Implementare aprobată, Înregistrare completă |
| **Poarta 6** | Proprietar Sistem, Manager Risc | Plan PMM activ, Monitorizare operațională | Sistem stabil, Fără probleme critice |
| **Poarta 7** | Proprietar Sistem, Conformitate | Plan dezafectare, Dispoziție date | Retragere sigură, Înregistrări arhivate |

---

## 4. PROCEDURI DETALIATE ALE FAZELOR

### 4.1 Faza 1: Concept și Inițiere

#### 4.1.1 Obiective
- Definirea scopului sistemului AI și a utilizării prevăzute
- Efectuarea clasificării inițiale a riscului
- Stabilirea guvernanței proiectului
- Asigurarea aprobărilor inițiale și a resurselor

#### 4.1.2 Activități

**Pasul 1: Înregistrarea Proiectului**
1. Completați Formularul de Înregistrare Proiect AI (FORM-AI-DEV-001)
2. Desemnați Proprietarul Sistemului AI și Managerul de Proiect
3. Înregistrați în Inventarul Sistemelor AI
4. Obțineți ID-ul proiectului și numărul de urmărire

**Pasul 2: Definirea Scopului**
1. Documentați scopul prevăzut conform Articolului 3 din Actul AI al UE
2. Definiți utilizatorii țintă și persoanele afectate
3. Identificați contextul și mediul de implementare
4. Documentați rezultatele așteptate și deciziile

**Pasul 3: Clasificarea Inițială a Riscului**
1. Completați Verificarea Practicilor Interzise (conform PROC-AI-CLS-001)
2. Evaluați conform Anexei I (legislația siguranței produselor)
3. Evaluați conform Anexei III (cazuri de utilizare cu risc ridicat)
4. Documentați decizia de clasificare folosind FORM-AI-CLS-001
5. Dacă risc ridicat: inițiați planificarea evaluării conformității

**Pasul 4: Evaluarea Inițială a Riscului**
1. Identificați riscurile potențiale pentru sănătate, siguranță, drepturi fundamentale
2. Documentați riscurile în Registrul Riscurilor (REC-AI-RM-001)
3. Determinați cerințele de gestionare a riscurilor
4. Stabiliți criterii de acceptare a riscului

#### 4.1.3 Livrabile Poarta 1
- [ ] Formular Înregistrare Proiect AI completat
- [ ] Document Decizie Clasificare (FORM-AI-CLS-001)
- [ ] Evaluare Inițială Risc (REC-AI-RM-001)
- [ ] Carta Proiectului aprobată
- [ ] Alocarea resurselor confirmată

#### 4.1.4 Revizuire Poarta 1
- **Revizori:** Manager Risc AI, Ofițer Conformitate, Comitet Guvernanță AI (pentru risc ridicat)
- **Decizie:** Continua / Revizuire / Respingere
- **Documentare:** Înregistrare Revizuire Poarta 1 (REC-AI-DEV-001)

---

### 4.2 Faza 2: Proiectare

#### 4.2.1 Obiective
- Definirea arhitecturii sistemului și a componentelor
- Stabilirea cerințelor și guvernanței datelor
- Proiectarea controalelor și mitigărilor de risc
- Planificarea pentru cerințele de conformitate

#### 4.2.2 Activități

**Pasul 1: Specificarea Cerințelor**
1. Documentați cerințele funcționale
2. Documentați cerințele nefuncționale (performanță, securitate, accesibilitate)
3. Definiți cerințele de conformitate Actul AI al UE în funcție de nivelul de risc
4. Stabiliți criterii de acceptare

**Pasul 2: Proiectarea Arhitecturii**
1. Proiectați arhitectura sistemului
2. Definiți arhitectura modelului și algoritmii
3. Proiectați mecanisme de supraveghere umană (conform STD-AI-007)
4. Proiectați logging și trasabilitate (conform STD-AI-005)
5. Proiectați caracteristici de transparență (conform STD-AI-006)

**Pasul 3: Planificarea Guvernanței Datelor**
1. Identificați cerințele pentru datele de antrenare, validare și testare
2. Evaluați cerințele de calitate a datelor (conform STD-AI-003)
3. Documentați proveniența și linia datelor
4. Completați DPIA dacă sunt implicate date personale
5. Stabiliți controale de guvernanță a datelor

**Pasul 4: Proiectarea Controalelor de Risc**
1. Proiectați controale pentru riscurile identificate
2. Planificați măsuri de detectare și mitigare a prejudecăților
3. Proiectați măsuri de acuratețe și robustețe (conform STD-AI-008)
4. Documentați specificațiile controalelor

**Pasul 5: Planificarea Documentației Tehnice**
1. Planificați documentația tehnică (conform STD-AI-004)
2. Stabiliți standarde și șabloane de documentare
3. Alocați responsabilități de documentare

#### 4.2.3 Livrabile Poarta 2
- [ ] Document Specificare Cerințe
- [ ] Document Arhitectură Sistem
- [ ] Plan Guvernanță Date
- [ ] Document Proiectare Controale Risc
- [ ] DPIA (dacă aplicabil)
- [ ] Plan Documentare Tehnică
- [ ] Evaluare Risc Actualizată

#### 4.2.4 Revizuire Poarta 2
- **Revizori:** Lider Dezvoltare AI, Arhitect Securitate, DPO, Manager Risc AI
- **Decizie:** Continua / Revizuire / Respingere
- **Documentare:** Înregistrare Revizuire Poarta 2 (REC-AI-DEV-002)

---

### 4.3 Faza 3: Dezvoltare

#### 4.3.1 Obiective
- Implementarea sistemului AI conform proiectului aprobat
- Dezvoltarea și antrenarea modelelor
- Implementarea controalelor de risc
- Crearea documentației tehnice

#### 4.3.2 Activități

**Pasul 1: Configurarea Mediului de Dezvoltare**
1. Stabiliți mediu securizat de dezvoltare
2. Configurați controlul versiunilor și pipeline-uri CI/CD
3. Configurați infrastructură logging și monitorizare
4. Implementați controale de acces

**Pasul 2: Pregătirea Datelor**
1. Achiziționați și validați datele de antrenare
2. Implementați controale de calitate a datelor
3. Documentați pașii de preprocesare a datelor
4. Validați datele conform cerințelor de guvernanță

**Pasul 3: Dezvoltarea Modelului**
1. Implementați arhitectura modelului
2. Antrenați modelul folosind datele aprobate
3. Implementați mecanisme de detectare a prejudecăților
4. Documentați metodologia și parametrii de antrenare

**Pasul 4: Implementarea Controalelor**
1. Implementați controalele de risc proiectate
2. Implementați caracteristici de supraveghere umană
3. Implementați logging și piste de audit
4. Implementați mecanisme de transparență

**Pasul 5: Testare Unitară**
1. Efectuați teste unitare pentru toate componentele
2. Testați eficacitatea controalelor de risc
3. Documentați rezultatele testelor
4. Remediați problemele identificate

**Pasul 6: Documentare Tehnică**
1. Creați documentație tehnică conform Anexei IV (dacă risc ridicat)
2. Documentați specificațiile modelului
3. Documentați implementarea guvernanței datelor
4. Mențineți înregistrări ale deciziilor de proiectare

#### 4.3.3 Livrabile Poarta 3
- [ ] Sistem/model AI funcțional
- [ ] Rezultate teste unitare
- [ ] Documentație tehnică (conformă Anexa IV dacă risc ridicat)
- [ ] Înregistrări guvernanță date
- [ ] Dovezi implementare controale
- [ ] Registru Riscuri actualizat

#### 4.3.4 Revizuire Poarta 3
- **Revizori:** Lider Dezvoltare AI, Lider QA, Manager Risc AI
- **Decizie:** Continua / Revizuire / Respingere
- **Documentare:** Înregistrare Revizuire Poarta 3 (REC-AI-DEV-003)

---

### 4.4 Faza 4: Testare și Validare

#### 4.4.1 Obiective
- Validarea îndeplinirii cerințelor de către sistem
- Verificarea conformității cu Actul AI al UE
- Evaluarea riscurilor reziduale
- Pregătirea pentru implementare

#### 4.4.2 Activități

**Pasul 1: Testare de Integrare**
1. Testați integrarea sistemului cu sistemele din aval/amonte
2. Testați fluxurile de date și interfețele
3. Validați logging și monitorizare
4. Documentați rezultatele testării de integrare

**Pasul 2: Testare de Performanță**
1. Testați metricile de acuratețe conform cerințelor
2. Testați robustețea în diverse condiții
3. Testați reziliența la securitate cibernetică
4. Comparați cu criteriile de performanță

**Pasul 3: Testare Prejudecăți și Echitate**
1. Efectuați testare prejudecăți pe caracteristici protejate
2. Testați pentru rezultate discriminatorii
3. Validați metricile de echitate
4. Documentați rezultatele testării prejudecăților

**Pasul 4: Testare Supraveghere Umană**
1. Testați capacitățile de suprascriere umană
2. Validați caracteristicile de interpretabilitate
3. Testați sistemele de alertă și notificare
4. Verificați că omul poate înțelege rezultatele

**Pasul 5: Validare Conformitate**
1. Verificați îndeplinirea tuturor cerințelor Actului AI al UE
2. Validați completitudinea documentației tehnice
3. Efectuați audit intern de conformitate
4. Abordați lacunele de conformitate

**Pasul 6: Testare Acceptare Utilizator**
1. Efectuați UAT cu utilizatori reprezentativi
2. Validați utilizabilitatea și transparența
3. Colectați și abordați feedback-ul utilizatorilor
4. Documentați rezultatele UAT

**Pasul 7: Evaluarea Riscului Rezidual**
1. Reevaluați riscurile după testare
2. Documentați riscurile reziduale
3. Obțineți aprobări de acceptare a riscului
4. Actualizați Registrul Riscurilor

#### 4.4.3 Livrabile Poarta 4
- [ ] Raport testare de integrare
- [ ] Raport testare de performanță
- [ ] Raport testare prejudecăți și echitate
- [ ] Raport validare supraveghere umană
- [ ] Raport validare conformitate
- [ ] Semnare UAT
- [ ] Evaluare risc rezidual
- [ ] Înregistrări acceptare risc

#### 4.4.4 Revizuire Poarta 4
- **Revizori:** Lider QA, Manager Risc AI, Ofițer Conformitate, Proprietar Sistem AI
- **Decizie:** Continua / Revizuire / Respingere
- **Documentare:** Înregistrare Revizuire Poarta 4 (REC-AI-DEV-004)

---

### 4.5 Faza 5: Implementare

#### 4.5.1 Obiective
- Finalizarea evaluării conformității (dacă risc ridicat)
- Obținerea aprobărilor de implementare
- Implementarea în producție
- Finalizarea cerințelor de înregistrare

#### 4.5.2 Activități

**Pasul 1: Evaluarea Conformității (Doar Risc Ridicat)**
1. Completați evaluarea internă de conformitate sau angajați organism notificat
2. Pregătiți documentația de evaluare a conformității
3. Abordați orice neconformități
4. Obțineți marcarea CE (dacă aplicabil)

**Pasul 2: Documentație Finală**
1. Finalizați documentația tehnică
2. Pregătiți Declarația UE de Conformitate (dacă risc ridicat)
3. Pregătiți instrucțiuni de utilizare
4. Completați documentația de transparență

**Pasul 3: Înregistrare**
1. Înregistrați în baza de date UE (dacă risc ridicat) conform PROC-AI-REG-001
2. Completați registrul intern al sistemelor AI
3. Documentați detaliile înregistrării

**Pasul 4: Aprobare Implementare**
1. Prezentați Comitetului de Guvernanță AI
2. Obțineți semnarea Proprietarului Sistemului
3. Obțineți semnarea Conformității
4. Obțineți semnarea acceptării Riscului

**Pasul 5: Implementare în Producție**
1. Executați planul de implementare
2. Verificați configurația de producție
3. Activați monitorizarea și logging-ul
4. Verificați capacitatea de rollback

**Pasul 6: Verificare Post-Implementare**
1. Verificați sistemul operațional în producție
2. Confirmați monitorizarea activă
3. Validați metricile inițiale de producție
4. Documentați finalizarea implementării

#### 4.5.3 Livrabile Poarta 5
- [ ] Raport evaluare conformitate (dacă risc ridicat)
- [ ] Declarație UE de Conformitate (dacă risc ridicat)
- [ ] Dovadă marcare CE (dacă aplicabil)
- [ ] Înregistrare bază date UE (dacă risc ridicat)
- [ ] Înregistrări aprobare implementare
- [ ] Verificare implementare producție
- [ ] Confirmare activare monitorizare

#### 4.5.4 Revizuire Poarta 5
- **Revizori:** Proprietar Sistem AI, Ofițer Conformitate, Manager Risc AI, Comitet Guvernanță AI
- **Decizie:** Continua / Revizuire / Respingere
- **Documentare:** Înregistrare Revizuire Poarta 5 (REC-AI-DEV-005)

---

### 4.6 Faza 6: Operare și Monitorizare

#### 4.6.1 Obiective
- Monitorizarea performanței și riscurilor sistemului
- Menținerea conformității
- Gestionarea incidentelor și schimbărilor
- Susținerea îmbunătățirii continue

#### 4.6.2 Activități

**Pasul 1: Monitorizare Post-Comercializare**
1. Implementați planul PMM conform PROC-AI-PMM-001
2. Monitorizați metricile de performanță
3. Urmăriți incidentele și anomaliile
4. Colectați feedback utilizatori

**Pasul 2: Monitorizare Risc**
1. Monitorizați continuu indicatorii de risc
2. Actualizați Registrul Riscurilor după necesitate
3. Reevaluați riscurile periodic
4. Raportați statutul riscurilor la guvernanță

**Pasul 3: Menținere Conformitate**
1. Monitorizați schimbările reglementare
2. Mențineți actualitatea documentației
3. Efectuați revizuiri periodice de conformitate
4. Actualizați înregistrările conform cerințelor

**Pasul 4: Gestionarea Incidentelor**
1. Gestionați incidentele conform PROC-AI-INC-001
2. Raportați incidentele grave autorităților
3. Efectuați analize de cauză principală
4. Implementați acțiuni corective

**Pasul 5: Gestionarea Schimbărilor**
1. Evaluați schimbările propuse pentru impact
2. Reevaluați clasificarea dacă schimbări significative
3. Actualizați documentația pentru schimbări
4. Mențineți înregistrări ale schimbărilor

**Pasul 6: Revizuire Periodică**
1. Efectuați revizuiri anuale ale sistemului
2. Revizuiți evaluările de risc anual
3. Revizuiți statutul de conformitate
4. Planificați îmbunătățiri

#### 4.6.3 Livrabile Poarta 6 (Periodic)
- [ ] Rapoarte PMM
- [ ] Registru Riscuri actualizat
- [ ] Înregistrări revizuire conformitate
- [ ] Rapoarte incidente și rezoluții
- [ ] Înregistrări schimbări
- [ ] Raport revizuire anuală

#### 4.6.4 Revizuire Poarta 6 (Anual)
- **Revizori:** Proprietar Sistem AI, Manager Risc AI, Ofițer Conformitate
- **Decizie:** Continua / Remediere / Retragere
- **Documentare:** Înregistrare Revizuire Operațională (REC-AI-DEV-006)

---

### 4.7 Faza 7: Retragere

#### 4.7.1 Obiective
- Dezafectarea sigură a sistemului AI
- Conservarea înregistrărilor necesare
- Dispoziția adecvată a datelor
- Actualizarea înregistrărilor

#### 4.7.2 Activități

**Pasul 1: Planificarea Retragerii**
1. Documentați rațiunea retragerii
2. Identificați părțile interesate afectate
3. Planificați tranziția/înlocuirea
4. Stabiliți calendarul retragerii

**Pasul 2: Dispoziția Datelor**
1. Identificați cerințele de retenție a datelor
2. Arhivați datele și documentația necesare
3. Ștergeți securizat datele nenecesare
4. Documentați dispoziția datelor

**Pasul 3: Dezafectarea Sistemului**
1. Dezactivați accesul la sistem
2. Eliminați din mediul de producție
3. Arhivați artefactele sistemului
4. Documentați pașii de dezafectare

**Pasul 4: Actualizări Înregistrări**
1. Actualizați statutul înregistrării în baza de date UE
2. Actualizați registrul intern al sistemelor AI
3. Notificați părțile interesate relevante
4. Documentați actualizările înregistrărilor

**Pasul 5: Retenția Înregistrărilor**
1. Arhivați documentația tehnică (10 ani pentru risc ridicat)
2. Arhivați înregistrările de conformitate
3. Arhivați înregistrările de risc și incidente
4. Mențineți pista de audit

#### 4.7.3 Livrabile Poarta 7
- [ ] Aprobare retragere
- [ ] Înregistrări dispoziție date
- [ ] Înregistrări dezafectare
- [ ] Confirmare actualizare înregistrare
- [ ] Index documentație arhivată
- [ ] Înregistrare finalizare retragere

#### 4.7.4 Revizuire Poarta 7
- **Revizori:** Proprietar Sistem AI, Ofițer Conformitate, Manager Înregistrări
- **Decizie:** Retragere Completă / Acțiuni Adiționale Necesare
- **Documentare:** Înregistrare Retragere (REC-AI-DEV-007)

---

## 5. ÎNREGISTRĂRI ȘI DOCUMENTARE

### 5.1 Înregistrări Necesare

| ID Înregistrare | Nume Înregistrare | Perioadă Retenție | Proprietar |
|-----------|-------------|------------------|-------|
| REC-AI-DEV-001 | Înregistrare Revizuire Poarta 1 | 10 ani | Manager Proiect |
| REC-AI-DEV-002 | Înregistrare Revizuire Poarta 2 | 10 ani | Manager Proiect |
| REC-AI-DEV-003 | Înregistrare Revizuire Poarta 3 | 10 ani | Manager Proiect |
| REC-AI-DEV-004 | Înregistrare Revizuire Poarta 4 | 10 ani | Manager Proiect |
| REC-AI-DEV-005 | Înregistrare Revizuire Poarta 5 | 10 ani | Manager Proiect |
| REC-AI-DEV-006 | Înregistrare Revizuire Operațională | 10 ani | Proprietar Sistem |
| REC-AI-DEV-007 | Înregistrare Retragere | 10 ani | Proprietar Sistem |

### 5.2 Formulare Necesare

| ID Formular | Nume Formular | Scop |
|---------|-----------|---------|
| FORM-AI-DEV-001 | Formular Înregistrare Proiect AI | Înregistrarea proiectelor AI noi |
| FORM-AI-DEV-002 | Formular Aprobare Poartă Fază | Documentarea deciziilor la porți |
| FORM-AI-DEV-003 | Formular Cerere Schimbare | Solicitarea schimbărilor la sistemul AI |

---

## 6. DOCUMENTE CONEXE

### 6.1 Standarde
- STD-AI-001: Standard de Clasificare a Sistemelor AI
- STD-AI-002: Standard de Gestionare a Riscurilor AI
- STD-AI-003: Standard de Guvernanță a Datelor AI
- STD-AI-004: Standard de Documentare Tehnică AI
- STD-AI-005: Standard de Logging și Păstrare Înregistrări AI
- STD-AI-006: Standard de Transparență AI
- STD-AI-007: Standard de Supraveghere Umană AI
- STD-AI-008: Standard de Acuratețe, Robustețe și Securitate AI

### 6.2 Proceduri
- PROC-AI-CLS-001: Procedura de Clasificare AI
- PROC-AI-RM-001: Procedura de Gestionare a Riscurilor AI
- PROC-AI-DATA-001: Procedura de Guvernanță a Datelor
- PROC-AI-DOC-001: Procedura de Documentare Tehnică
- PROC-AI-PMM-001: Procedura de Monitorizare Post-Comercializare
- PROC-AI-INC-001: Procedura de Gestionare a Incidentelor
- PROC-AI-REG-001: Procedura de Înregistrare
- PROC-AI-VENDOR-001: Procedura de Gestionare a Furnizorilor

### 6.3 Referințe Externe
- Actul AI al UE (Regulamentul 2024/1689)
- ISO/IEC 42001: Sistem de Management AI
- ISO/IEC 23894: Gestionarea Riscurilor AI

---

## 7. ISTORIC REVIZUIRI

| Versiune | Dată | Autor | Modificări |
|---------|------|--------|---------|
| 1.0 | [Dată] | [Autor] | Lansare inițială |

---

## ANEXA A: FORMULAR ÎNREGISTRARE PROIECT AI (FORM-AI-DEV-001)

### Secțiunea 1: Informații Proiect
| Câmp | Valoare |
|-------|-------|
| Nume Proiect | |
| ID Proiect | |
| Solicitat De | |
| Dată Solicitare | |
| Data Țintă Go-Live | |

### Secțiunea 2: Descrierea Sistemului AI
| Câmp | Valoare |
|-------|-------|
| Nume Sistem | |
| Scop Prevăzut | |
| Utilizatori Țintă | |
| Context Implementare | |
| Rezultate Așteptate | |

### Secțiunea 3: Clasificare Inițială
| Întrebare | Răspuns |
|----------|----------|
| Este aceasta o practică interzisă conform Articolului 5? | Da / Nu |
| Se încadrează în Anexa I (siguranța produselor)? | Da / Nu |
| Se încadrează în Anexa III (cazuri de utilizare cu risc ridicat)? | Da / Nu |
| Clasificare Inițială Risc | Interzis / Ridicat / Limitat / Minimal |

### Secțiunea 4: Aprobări
| Rol | Nume | Semnătură | Dată |
|------|------|-----------|------|
| Solicitant | | | |
| Proprietar Sistem AI | | | |
| Manager Risc AI | | | |

---

## ANEXA B: FORMULAR APROBARE POARTĂ FAZĂ (FORM-AI-DEV-002)

### Secțiunea 1: Informații Poartă
| Câmp | Valoare |
|-------|-------|
| ID Proiect | |
| Nume Proiect | |
| Număr Poartă | Poarta 1 / 2 / 3 / 4 / 5 / 6 / 7 |
| Dată Poartă | |

### Secțiunea 2: Listă Verificare Livrabile
| Livrabil | Complet | Locație Dovadă |
|-------------|----------|-------------------|
| [Livrabil 1] | Da / Nu | |
| [Livrabil 2] | Da / Nu | |
| [Livrabil 3] | Da / Nu | |

### Secțiunea 3: Stare Risc
| Nivel Risc | Număr | Cel Mai Ridicat Nemitigat |
|------------|-------|---------------------|
| Critic | | |
| Ridicat | | |
| Mediu | | |
| Scăzut | | |

### Secțiunea 4: Decizia la Poartă
| Decizie | Continua / Continua Condiționat / Revizuire / Respingere |
|----------|------------------------------------------------|
| Condiții (dacă există) | |
| Rațiune | |

### Secțiunea 5: Aprobări
| Rol | Nume | Decizie | Semnătură | Dată |
|------|------|----------|-----------|------|
| [Revizor 1] | | Aprobare/Respingere | | |
| [Revizor 2] | | Aprobare/Respingere | | |
| [Revizor 3] | | Aprobare/Respingere | | |
