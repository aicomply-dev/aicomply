# PROC-AI-QMS-001: Procedura Sistemului de Management al Calității pentru Actul UE privind IA

**ID Procedură:** PROC-AI-QMS-001
**Denumire Procedură:** Procedura Sistemului de Management al Calității
**Standard:** STD-AI-009: Standardul de Management al Calității
**Articol din Actul UE privind IA:** Articolul 17 (Sistemul de Management al Calității)
**Acoperă Controalele:** QMS-001 până la QMS-014
**Data Intrării în Vigoare:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizuiri:** [De completat]
**Status Aprobare:** [Ciornă/Aprobat]

---

## CUPRINS

1. [Scop și Domeniu de Aplicare](#1-scop-și-domeniu-de-aplicare)
2. [Roluri și Responsabilități](#2-roluri-și-responsabilități)
3. [Cadrul Sistemului de Management al Calității](#3-cadrul-sistemului-de-management-al-calității)
4. [Procedură Pas cu Pas](#4-procedură-pas-cu-pas)
   - Faza 1: Stabilirea și Guvernanța SMC
   - Faza 2: Controlul Proiectării și Dezvoltării
   - Faza 3: Managementul Documentației și Configurației
   - Faza 4: Managementul Furnizorilor și Formării
   - Faza 5: Acțiuni Corective și Preventive
   - Faza 6: Monitorizare, Audit și Revizuire
   - Faza 7: Îmbunătățire Continuă
5. [Mecanisme de Control](#5-mecanisme-de-control)
6. [Indicatori Cheie de Performanță și Metrici](#6-indicatori-cheie-de-performanță-și-metrici)
7. [Cerințe de Documentare](#7-cerințe-de-documentare)
8. [Asigurarea Calității](#8-asigurarea-calității)
9. [Gestionarea Neconformităților](#9-gestionarea-neconformităților)
10. [Conformitate și Audit](#10-conformitate-și-audit)
11. [Istoricul Revizuirilor](#11-istoricul-revizuirilor)
12. [Aprobare și Autorizare](#12-aprobare-și-autorizare)
13. [Controlul Documentului](#13-controlul-documentului)

**Anexe:**
- [Anexa A: Biblioteca KPI](#anexa-a-biblioteca-kpi)
- [Anexa B: Glosar](#anexa-b-glosar)
- [Anexa C: Referințe Încrucișate](#anexa-c-referințe-încrucișate-la-alte-proceduri)
- [Anexa D: Card de Referință Rapidă](#anexa-d-card-de-referință-rapidă)
- [Anexa E: Diagrama de Integrare](#anexa-e-diagrama-de-integrare-smc)

---

## 1. SCOP ȘI DOMENIU DE APLICARE

### 1.1 Scop

Această procedură stabilește un Sistem de Management al Calității (SMC) cuprinzător pentru sistemele de IA în conformitate cu Articolul 17 din Actul UE privind IA, asigurând controlul sistematic al calității pe întregul ciclu de viață al sistemului de IA, de la proiectare până la desfășurare, operare și dezafectare.

SMC integrează toate cerințele de conformitate din Articolele 8-15, oferind un cadru unificat pentru:
- Controlul calității proiectării, dezvoltării și testării
- Acuratețea și exhaustivitatea documentației tehnice
- Guvernanța și asigurarea calității datelor
- Integrarea managementului riscurilor
- Monitorizarea post-piață și raportarea incidentelor
- Îmbunătățirea continuă și acțiunea corectivă

### 1.2 Domeniu de Aplicare

Această procedură se aplică pentru:
- Toate sistemele de IA cu risc ridicat clasificate conform PROC-AI-CLS-001
- Toate activitățile de dezvoltare, desfășurare și operare a sistemelor de IA
- Toți furnizorii și operatorii de sisteme de IA din cadrul organizației
- Toți furnizorii terți și vânzătorii care susțin sistemele de IA
- Tot personalul implicat în activitățile ciclului de viață al sistemelor de IA

Această procedură nu se aplică pentru:
- Sistemele de IA cu risc minim (cu excepția cazului în care sunt desemnate în mod specific)
- Prototipuri de cercetare și dezvoltare care nu sunt destinate desfășurării
- Sistemele de IA terțe în cazul în care furnizorul menține responsabilitatea SMC (acoperite de PROC-AI-VENDOR-001)

### 1.3 Baza Reglementară

Această procedură implementează:
- **Articolul 17 din Actul UE privind IA:** Cerințele sistemului de management al calității
- **Articolele 8-15 din Actul UE privind IA:** Cerințe tehnice integrate în SMC
- **ISO/IEC 42001:2023:** Standard pentru sistemul de management al IA
- **ISO 9001:2015:** Principiile sistemului de management al calității
- **ISO 13485:2016:** Managementul calității dispozitivelor medicale (unde este aplicabil)
- **IEC 62304:** Procesele ciclului de viață al software-ului pentru dispozitive medicale (unde este aplicabil)

### 1.4 Proprietarul Procedurii și Persoane de Contact

| Rol | Nume | Titlu | Contact |
|------|------|-------|---------|
| **Proprietar Procedură** | [Nume] | Manager Calitate | [Email/Telefon] |
| **Escaladare** | [Nume] | Director Calitate | [Email/Telefon] |
| **Guvernanță** | [Nume] | Președinte Comitet Guvernanță IA | [Email/Telefon] |
| **Contact Tehnic** | [Nume] | Responsabil Tehnic IA | [Email/Telefon] |

---

## 2. ROLURI ȘI RESPONSABILITĂȚI

### 2.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|------|----------------|-----------|
| **Manager Calitate** | Deține și execută SMC; menține documentația calității; efectuează audituri interne; conduce îmbunătățirea continuă | Aprobă procedurile de calitate; escaladează neconformități; blochează desfășurări |
| **Director Calitate** | Supraveghere SMC; aprobă politicile de calitate; interfață cu managementul; asigură conformitatea reglementară | Escaladează la Consiliu; aprobă modificări majore SMC; alocă resurse |
| **Proprietar Sistem IA** | Asigură conformitatea sistemului cu SMC; implementează controlul calității; menține documentația sistemului | Acceptă riscurile de calitate; aprobă modificările sistemului; alocă resurse sistem |
| **Comitet Guvernanță IA** | Supraveghează eficacitatea SMC; aprobă politicile de calitate; revizuiește concluziile auditurilor; aprobă modificări majore | Aprobă cadrul SMC; impune îmbunătățiri; blochează sisteme neconforme |
| **Autoritate Proiectare** | Aprobă specificațiile de proiectare; verifică conformitatea proiectării; controlează modificările de proiectare | Semnează proiectări; respinge proiectări inadecvate; aprobă devieri de proiectare |
| **Controller Documente** | Menține depozitul de documente; controlează versiunile documentelor; asigură accesibilitatea documentelor | Aprobă eliberarea documentelor; impune standardele de documentare; auditează documentația |
| **Manager Calitate Furnizori** | Califică furnizorii; auditează performanța furnizorilor; gestionează acțiunile corective ale furnizorilor | Aprobă/respinge furnizori; impune îmbunătățiri furnizori; escaladează probleme furnizori |
| **Manager Formare** | Dezvoltă programe de formare; menține evidențele de formare; evaluează eficacitatea formării | Aprobă materiale de formare; certifică personal; impune reconversie |
| **Auditor Intern** | Efectuează audituri interne; verifică eficacitatea controalelor; identifică oportunități de îmbunătățire | Acces la toate sistemele și înregistrările; raportează neconformități; recomandă îmbunătățiri |
| **Coordonator CAPA** | Gestionează acțiuni corective și preventive; urmărește eficacitatea CAPA; închide acțiuni | Atribuie proprietari CAPA; escaladează CAPA întârziate; verifică eficacitatea CAPA |

### 2.2 Matricea RACI

| Activitate | Manager Calitate | Director Calitate | Proprietar Sistem IA | Comitet Guv. IA | Autoritate Proiectare | Controller Documente | Manager Cal. Furnizori | Manager Formare | Auditor Intern | Coordonator CAPA |
|----------|----------------|-----|-----------------|------------------|------------------|---------------------|-------------|--------------|------------------|------------|
| Stabilire SMC | A | R | C | A | C | I | C | C | C | I |
| Aprobare politică calitate | C | R | I | A | I | I | I | I | I | I |
| Control proiectare | C | I | R | C | A | C | I | I | I | I |
| Control documente | C | I | R | I | C | A | I | I | I | I |
| Management configurație | A | I | R | C | C | C | I | I | I | I |
| Calificare furnizori | C | I | C | I | C | I | A | I | I | I |
| Livrare formare | C | I | C | I | I | I | I | A | I | I |
| Management CAPA | C | I | R | C | I | I | C | I | I | A |
| Audit intern | A | C | I | C | I | I | I | I | R | I |
| Revizuire management | R | A | R | A | C | C | C | C | C | C |
| Îmbunătățire continuă | R | A | R | C | C | C | C | C | R | R |

**Legendă:** A=Responsabil, R=Executant, C=Consultat, I=Informat

### 2.3 Cerințe de Competență

| Rol | Competențe Necesare | Metodă de Verificare |
|------|----------------------|---------------------|
| Manager Calitate | Cunoștințe ISO 9001; înțelegere sisteme IA; conformitate reglementară; competențe audit | Certificare + experiență |
| Autoritate Proiectare | Expertiză tehnică IA/ML; arhitectură sistem; cerințe Actul UE privind IA | Diplomă tehnică + formare |
| Auditor Intern | Metodologie audit; cunoștințe sisteme IA; competențe interviu; cerințe reglementare | Formare auditor + certificare |
| Manager Calitate Furnizori | Management furnizori; standarde calitate; management contracte; evaluare riscuri | Experiență + formare |

---

## 3. CADRUL SISTEMULUI DE MANAGEMENT AL CALITĂȚII

### 3.1 Prezentare Generală Componente SMC

Sistemul de Management al Calității pentru IA constă din șapte piloni integrați aliniați cu Articolul 17 din Actul UE privind IA:

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                SISTEMUL DE MANAGEMENT AL CALITĂȚII ACTUL UE PRIVIND IA         │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  1. GUVERNANȚĂ ȘI POLITICĂ                                                     │
│     ├─ Politică și Obiective de Calitate                                       │
│     ├─ Comitet Guvernanță IA                                                   │
│     ├─ Management Resurse                                                      │
│     └─ Cadru de Responsabilitate                                               │
│                                                                                │
│  2. CONTROLUL PROIECTĂRII ȘI DEZVOLTĂRII                                       │
│     ├─ Planificare și Control Proiectare                                       │
│     ├─ Input și Output Proiectare                                              │
│     ├─ Verificare și Validare Proiectare                                       │
│     └─ Transfer și Revizuire Proiectare                                        │
│                                                                                │
│  3. MANAGEMENTUL DOCUMENTAȚIEI ȘI CONFIGURAȚIEI                                │
│     ├─ Documentație Tehnică (Articolul 11)                                     │
│     ├─ Control Documente și Management Versiuni                                │
│     ├─ Management Configurație                                                 │
│     └─ Management Înregistrări și Păstrare                                     │
│                                                                                │
│  4. MANAGEMENTUL FURNIZORILOR ȘI FORMĂRII                                      │
│     ├─ Calificare și Control Furnizori                                         │
│     ├─ Verificare Produse/Servicii Achiziționate                               │
│     ├─ Cerințe Competență Personal                                            │
│     └─ Management Program Formare                                              │
│                                                                                │
│  5. CONTROLUL ȘI VALIDAREA PROCESELOR                                          │
│     ├─ Validare și Calificare Proces                                           │
│     ├─ Control Producție și Prestare Servicii                                  │
│     ├─ Management Control Modificări                                           │
│     └─ Integrare Management Riscuri                                            │
│                                                                                │
│  6. MONITORIZARE, MĂSURARE ȘI AUDIT                                            │
│     ├─ Metrici Calitate și KPI                                                 │
│     ├─ Program Audit Intern                                                    │
│     ├─ Proces Revizuire Management                                             │
│     └─ Integrare Monitorizare Post-Piață                                       │
│                                                                                │
│  7. ÎMBUNĂTĂȚIRE ȘI ACȚIUNE CORECTIVĂ                                          │
│     ├─ Proces Acțiune Corectivă (CAPA)                                         │
│     ├─ Proces Acțiune Preventivă                                               │
│     ├─ Cadru Îmbunătățire Continuă                                             │
│     └─ Lecții Învățate și Management Cunoștințe                                │
│                                                                                │
└───────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Integrarea SMC în Ciclul de Viață

SMC integrează controalele de calitate în fiecare etapă a ciclului de viață al sistemului de IA:

| Fază Ciclu de Viață | Activități SMC | Porți de Calitate | Livrabile |
|-----------------|----------------|---------------|--------------|
| **1. Planificare** | Planificare proiectare; alocare resurse; verificare competență | Plan proiectare aprobat; resurse alocate | Plan Proiectare și Dezvoltare (PPD) |
| **2. Proiectare** | Inputuri proiectare definite; outputuri proiectare documentate; revizuire proiectare | Revizuire proiectare completată; inputuri/outputuri trasabile | Specificație Proiectare; Înregistrări Revizuire Proiectare |
| **3. Dezvoltare** | Revizuire cod; testare; management configurație; control modificări | Revizuire cod trecută; teste trecute; modificări aprobate | Cod sursă; Rezultate teste; Înregistrări modificări |
| **4. Verificare** | Verificare proiectare; planificare validare; verificare trasabilitate | Verificare completă; cerințe îndeplinite | Raport Verificare; Matrice Trasabilitate |
| **5. Validare** | Validare clinică/operațională; acceptare utilizator; validare performanță | Criterii validare îndeplinite; sistem aprobat pentru lansare | Raport Validare; Metrici Performanță |
| **6. Transfer** | Revizuire documentație; finalizare formare; pregătire desfășurare | Documentație completă; personal instruit | Pachet Documentație Tehnică |
| **7. Producție** | Monitorizare post-piață; control modificări; CAPA; management configurație | Modificări controlate; CAPA închise; monitorizare activă | Rapoarte Monitorizare; Înregistrări CAPA |
| **8. Post-Piață** | Monitorizare continuă; revizuire periodică; management incidente; actualizări | Revizuiri complete; incidente gestionate; actualizări validate | Rapoarte Revizuire; Înregistrări Incidente; Înregistrări Actualizări |

### 3.3 Maparea Articolului 17 din Actul UE privind IA

Acest SMC abordează toate cerințele Articolului 17:

| Cerință Articolul 17 | Implementare SMC | Referință Secțiune |
|------------------------|-------------------|-------------------|
| **(a)** Strategie conformitate Articolele 8-15 | Cadrul SMC integrează toate cerințele tehnice | Secțiunea 3.1, 4.2 |
| **(b)** Tehnici proiectare, dezvoltare, testare | Proceduri control proiectare; protocoale validare | Secțiunea 4.2, 4.12 |
| **(c)** Specificații tehnice și standarde | Inputuri proiectare; criterii acceptare; aderență standarde | Secțiunea 4.2.2 |
| **(d)** Proceduri management date | Integrare guvernanță date; asigurare calitate | Secțiunea 4.2, Ref. încrucișată PROC-AI-DATA-001 |
| **(e)** Sistem management riscuri | Integrare management riscuri | Secțiunea 4.5, Ref. încrucișată PROC-AI-RM-001 |
| **(f)** Sistem monitorizare post-piață | Integrare monitorizare; urmărire performanță | Secțiunea 4.11, Ref. încrucișată PROC-AI-PMM-001 |
| **(g)** Proceduri raportare incidente | Management incidente; raportare incidente grave | Secțiunea 4.11, Ref. încrucișată PROC-AI-INC-001 |
| **(h)** Comunicare cu autorități | Interfață autorități; proceduri notificare | Secțiunea 4.11 |
| **(i)** Raportare și documentare sistematică | Revizuire management; raportare audit | Secțiunea 4.9, 4.10 |
| **(j)** Management resurse | Competență; formare; alocare resurse | Secțiunea 4.4 |
| **(k)** Cadru responsabilitate | Roluri și responsabilități; guvernanță | Secțiunea 2.1, 4.1 |

### 3.4 Declarație Politică Calitate

**Politica Calitate IA [Numele Organizației]**

Ne angajăm să dezvoltăm, să desfășurăm și să operăm sisteme de IA care:
- Îndeplinesc sau depășesc toate cerințele reglementare aplicabile, inclusiv Actul UE privind IA
- Protejează drepturile fundamentale, sănătatea, siguranța și mediul
- Funcționează conform intenției pe tot parcursul ciclului lor de viață
- Sunt îmbunătățite continuu pe baza feedback-ului și monitorizării
- Sunt dezvoltate și menținute de personal competent și instruit
- Sunt susținute de procese, documentație și controale robuste

**Obiective Calitate:**
1. **Conformitate:** 100% conformitate cu cerințele Actului UE privind IA pentru toate sistemele de IA cu risc ridicat
2. **Siguranță:** Zero incidente grave cauzate de defecțiuni ale sistemelor de IA
3. **Performanță:** Toate sistemele de IA îndeplinesc criteriile de performanță definite pe tot parcursul ciclului de viață
4. **Documentație:** 100% exhaustivitate și acuratețe a documentației tehnice
5. **Îmbunătățire:** Îmbunătățire continuă demonstrată prin CAPA și concluzii audit

**Angajament Management:**
- Furnizarea resurselor adecvate pentru implementarea și menținerea SMC
- Asigurarea competenței personalului prin formare și dezvoltare
- Revizuirea eficacității SMC anual
- Susținerea culturii de îmbunătățire continuă
- Asigurarea conformității cu clienții și cerințele reglementare

---

## 4. PROCEDURĂ PAS CU PAS

### FAZA 1: STABILIREA SMC ȘI GUVERNANȚA

#### Pasul 1.1: Stabilirea Cadrului SMC (Control QMS-001)

**Când:** La implementarea inițială SMC sau revizuire majoră

**Cine:** Manager Calitate + Director Calitate + Comitet Guvernanță IA

**Cum:**

1. **Definirea Scopului și Limitelor SMC**
   - Identifică sistemele de IA acoperite de SMC (toate sistemele cu risc ridicat)
   - Definește unitățile organizaționale incluse în scop
   - Identifică cerințele reglementare aplicabile
   - Documentează exclusiunile și justificarea
   - Documentează în Declarația Scop SMC (DOC-QMS-001)

2. **Stabilirea Politicii Calitate**
   - Elaborează politica calitate aliniată cu strategia organizațională
   - Definește obiectivele calitate (SMART: Specifice, Măsurabile, Realizabile, Relevante, Limitate în Timp)
   - Obține aprobarea managementului superior
   - Comunică către tot personalul
   - Documentează în Politica Calitate (POL-QMS-001)

3. **Proiectarea Hărții Proceselor SMC**
   - Identifică procesele核 SMC
   - Definește interacțiunile și dependențele proceselor
   - Stabilește proprietarii proceselor
   - Definește inputurile, outputurile și controalele proceselor
   - Documentează în Harta Proceselor SMC (DOC-QMS-002)

   **Procese核 SMC:**
   - Control proiectare și dezvoltare
   - Management documente și configurație
   - Management furnizori
   - Formare și competență
   - Validare proces
   - Control modificări
   - Audit intern
   - Revizuire management
   - CAPA (Acțiune Corectivă și Preventivă)
   - Îmbunătățire continuă

4. **Stabilirea Structurii de Guvernanță**
   - Definește carta Comitetului Guvernanță IA
   - Numește membrii comitetului
   - Definește frecvența întâlnirilor (minim trimestrial)
   - Stabilește autoritatea decizională
   - Documentează în Carta Guvernanță (DOC-QMS-003)

5. **Alocarea Resurselor**
   - Identifică cerințele de resurse (personal, instrumente, infrastructură)
   - Atribuie Manager Calitate și personal de suport
   - Alocă buget pentru activități SMC
   - Furnizează instrumentele necesare (management documente, instrumente audit, etc.)
   - Documentează în Planul Alocare Resurse (DOC-QMS-004)

6. **Integrarea cu Managementul Riscurilor Organizaționale (ERM)**
   - Mapează riscurile SMC în registrul riscurilor organizaționale
   - Definește pragurile de escaladare
   - Stabilește raportarea către Consiliu/Comitet Executiv
   - Aliniază declarațiile de apetit pentru risc
   - Documentează integrarea în Harta Integrare ERM (DOC-QMS-005)

7. **Obținerea Aprobării Managementului**
   - Prezintă cadrul SMC către managementul superior
   - Obține aprobarea Comitetului Guvernanță IA
   - Asigură angajament buget și resurse
   - Documentează aprobarea în Înregistrări Aprobare SMC (REC-QMS-001)

**Dovezi Necesare:**
- Declarație Scop SMC (DOC-QMS-001)
- Politică Calitate (POL-QMS-001)
- Hartă Procese SMC (DOC-QMS-002)
- Carta Guvernanță (DOC-QMS-003)
- Plan Alocare Resurse (DOC-QMS-004)
- Hartă Integrare ERM (DOC-QMS-005)
- Înregistrări Aprobare SMC (REC-QMS-001)

**Durată:** 4-8 săptămâni pentru stabilirea inițială

**Verificare Calitate:**
- Toate sistemele de IA cu risc ridicat incluse în scop
- Obiectivele calitate sunt SMART
- Resursele sunt adecvate pentru scop
- Structura de guvernanță are autoritatea corespunzătoare
- Angajamentul managementului superior documentat

---

#### Pasul 1.2: Stabilirea Cadrului de Responsabilitate (Control QMS-001)

**Când:** În timpul stabilirii SMC; revizuire anuală

**Cine:** Manager Calitate + Director Calitate

**Cum:**

1. **Definirea Rolurilor și Responsabilităților**
   - Documentează toate rolurile SMC (vezi Secțiunea 2.1)
   - Definește responsabilitățile pentru fiecare rol
   - Definește nivelurile de autoritate și căile de escaladare
   - Atribuie persoane rolurilor
   - Documentează în Matricea Roluri și Responsabilități (DOC-QMS-006)

2. **Stabilirea Autorității Decizionale**

| Tip Decizie | Nivel Autoritate | Aprobări Necesare |
|---------------|----------------|-------------------|
| Modificări politică SMC | Comitet Guvernanță IA | Director Calitate + Președinte Comitet |
| Aprobare proceduri calitate | Manager Calitate | Revizuire Director Calitate |
| Aprobare proiectare | Autoritate Proiectare | Acord Manager Calitate |
| Calificare furnizor | Manager Calitate Furnizori | Aprobare Manager Calitate |
| Închidere CAPA | Coordonator CAPA | Aprobare Manager Calitate |
| Dispoziție neconformitate | Manager Calitate | Director Calitate (pentru neconformități critice) |
| Autorizare desfășurare | Proprietar Sistem IA | Manager Calitate + Autoritate Proiectare |

3. **Stabilirea Segregării Atribuțiilor**
   - Autoritate Proiectare ≠ Implementator Proiectare (pentru sisteme critice)
   - Auditor Intern ≠ Proprietar Proces auditat
   - Coordonator CAPA ≠ Proprietar CAPA (pentru aceeași CAPA)
   - Controller Documente ≠ unic Autor Documente
   - Documentează în Matricea Segregare Atribuții (DOC-QMS-007)

4. **Definirea Procedurilor de Escaladare**

| Tip Problemă | Declanșator Escaladare | Cale Escaladare | Termen |
|-----------|-------------------|----------------|----------|
| Neconformitate critică | Afectează siguranța, drepturile, conformitatea | Manager Calitate → Director Calitate → Comitet Guv. IA | < 24 ore |
| Neconformitate majoră | Afectează performanța sistemului | Manager Calitate → Director Calitate | < 48 ore |
| Problemă calitate furnizor | Neconformitatea furnizorului impactează livrarea | Manager Cal. Furnizori → Manager Calitate → Director Calitate | < 72 ore |
| CAPA întârziată | CAPA > 30 zile întârziere | Coordonator CAPA → Manager Calitate → Director Calitate | Săptămânal |
| Constatare audit | Constatare critică din audit intern/extern | Auditor Intern → Manager Calitate → Director Calitate → Comitet Guv. IA | < 48 ore |

5. **Comunicarea Cadrului de Responsabilitate**
   - Prezintă cadrul către tot personalul
   - Furnizează formare despre roluri și responsabilități
   - Publică cadrul de responsabilitate într-o locație accesibilă
   - Obține confirmare de la deținătorii rolurilor
   - Documentează formarea în Înregistrări Formare (REC-TRN-001)

**Dovezi Necesare:**
- Matricea Roluri și Responsabilități (DOC-QMS-006)
- Matricea Segregare Atribuții (DOC-QMS-007)
- Proceduri Escaladare (DOC-QMS-008)
- Înregistrări Formare (REC-TRN-001)

**Durată:** 2-3 săptămâni

**Verificare Calitate:**
- Toate rolurile SMC atribuite
- Nivelurile de autoritate corespunzătoare pentru tipurile de decizii
- Segregarea atribuțiilor previne conflicte de interese
- Căile de escaladare asigură atenția promptă a managementului

---

### FAZA 2: CONTROLUL PROIECTĂRII ȘI DEZVOLTĂRII

#### Pasul 2.1: Planificarea Proiectării și Dezvoltării (Control QMS-002)

**Când:** La începutul fiecărui proiect de dezvoltare sistem IA

**Cine:** Proprietar Sistem IA + Autoritate Proiectare + Manager Calitate

**Cum:**

1. **Crearea Planului de Proiectare și Dezvoltare (PPD)**
   - Definește etapele proiectării și jaloanele
   - Identifică revizuirile proiectării și activitățile de verificare/validare
   - Atribuie membrii echipei de proiectare și responsabilitățile
   - Definește cerințele de resurse
   - Stabilește calendarul și programul
   - Utilizează Șablonul Plan Proiectare și Dezvoltare (TMP-QMS-002)

2. **Definirea Inputurilor Proiectare**
   - Cerințe funcționale (ce trebuie să facă sistemul)
   - Cerințe performanță (acuratețe, viteză, capacitate)
   - Cerințe siguranță (prevenire daune, mecanisme failsafe)
   - Cerințe reglementare (Articolele 8-15 Actul UE privind IA)
   - Nevoi utilizatori și cerințe cazuri de utilizare
   - Cerințe interfață (API-uri, integrări)
   - Cerințe date (date antrenament, date input)
   - Cerințe management riscuri
   - Documentează în Specificația Input Proiectare (SPEC-AI-DI-XXX)

   **Lista de Verificare Input Proiectare:**
   - [ ] Scopul destinat definit clar
   - [ ] Populația utilizatori identificată
   - [ ] Mediul de operare specificat
   - [ ] Criterii performanță cuantificate
   - [ ] Cerințe siguranță identificate
   - [ ] Cerințe Actul UE privind IA mapate
   - [ ] Cerințe date specificate
   - [ ] Cerințe interfață definite
   - [ ] Criterii acceptare stabilite
   - [ ] Trasabilitate la nevoile utilizatorilor verificată

3. **Stabilirea Criteriilor de Acceptare Proiectare**
   - Definește criterii trecut/eșuat pentru verificarea proiectării
   - Definește criterii succes pentru validarea proiectării
   - Cuantifică pragurile performanță
   - Definește metodologiile de testare
   - Documentează în Criteriile Acceptare Proiectare (DOC-QMS-009)

4. **Planificarea Revizuirilor Proiectare**
   - Programează revizuiri proiectare la fiecare poartă de fază
   - Identifică participanții la revizuire (Autoritate Proiectare, Calitate, Risc, Securitate, etc.)
   - Definește agenda revizuire și criteriile de intrare/ieșire
   - Documentează în Programul Revizuiri Proiectare (DOC-QMS-010)

   **Porți Tipice Revizuire Proiectare:**
   - Poarta 1: Revizuire Input Proiectare (inputuri complete și aprobate)
   - Poarta 2: Revizuire Proiectare Preliminară (arhitectură și abordare)
   - Poarta 3: Revizuire Proiectare Critică (proiectare detaliată completă)
   - Poarta 4: Revizuire Verificare Proiectare (testare completă, cerințe îndeplinite)
   - Poarta 5: Revizuire Validare Proiectare (validare completă, gata pentru lansare)
   - Poarta 6: Revizuire Transfer Proiectare (documentație completă, gata pentru desfășurare)

5. **Planificarea Verificării și Validării**
   - Definește activități verificare (îndeplinește cerințele?)
   - Definește activități validare (îndeplinește nevoile utilizatorilor?)
   - Identifică medii de testare și seturi de date
   - Planifică testarea bias-ului și evaluarea echității
   - Planifică testarea robustetii și securității
   - Documentează în Planul Verificare și Validare (PLAN-AI-VV-XXX)

6. **Obținerea Aprobării**
   - Autoritatea Proiectare revizuiește și aprobă PPD
   - Managerul Calitate revizuiește și aprobă PPD
   - Proprietarul Sistem IA aprobă angajamentul resurselor
   - Documentează aprobările în Înregistrări Aprobare PPD (REC-QMS-002)

**Dovezi Necesare:**
- Plan Proiectare și Dezvoltare (PLAN-AI-DD-XXX)
- Specificație Input Proiectare (SPEC-AI-DI-XXX)
- Criterii Acceptare Proiectare (DOC-QMS-009)
- Program Revizuiri Proiectare (DOC-QMS-010)
- Plan Verificare și Validare (PLAN-AI-VV-XXX)
- Înregistrări Aprobare PPD (REC-QMS-002)

**Durată:** 2-4 săptămâni la inițierea proiectului

**Verificare Calitate:**
- Inputurile proiectare sunt complete, neambigue și verificabile
- Criteriile de acceptare sunt cuantificate și testabile
- Revizuirile proiectare programate la porțile corespunzătoare
- Planurile de verificare și validare sunt cuprinzătoare
- Resurse corespunzătoare alocate și angajate

---

#### Pasul 2.2: Documentarea Outputurilor Proiectare (Control QMS-002)

**Când:** Pe parcursul fazei de proiectare și dezvoltare

**Cine:** Echipa Proiectare + Autoritate Proiectare

**Cum:**

1. **Dezvoltarea Documentației Output Proiectare**

   Outputurile proiectare trebuie să includă:

   **a) Specificația Arhitectură Sistem**
   - Arhitectura generală sistem (componente, interfețe, fluxuri date)
   - Arhitectura model IA (straturi, activări, hiperparametri)
   - Arhitectura infrastructură (calcul, stocare, rețea)
   - Arhitectura securitate (autentificare, autorizare, criptare)
   - Documentează în Specificația Arhitectură Sistem (SPEC-AI-ARCH-XXX)

   **b) Specificația Proiectare Detaliată**
   - Proiectare algoritmică și formulări matematice
   - Preprocesare date și inginerie caracteristici
   - Procedura antrenament model și ajustare hiperparametri
   - Pipeline inferență și post-procesare
   - Gestionare erori și management excepții
   - Documentează în Specificația Proiectare Detaliată (SPEC-AI-DD-XXX)

   **c) Specificații Interfață**
   - Specificații API (endpoint-uri, parametri, răspunsuri)
   - Specificații interfață date (formate, scheme, protocoale)
   - Specificații interfață utilizator (ecrane, fluxuri, interacțiuni)
   - Specificații integrare sisteme externe
   - Documentează în Documente Control Interfață (ICD-AI-XXX)

   **d) Specificații Date**
   - Cerințe și specificații date antrenament
   - Cerințe date input și reguli validare
   - Specificații și formate date output
   - Cerințe calitate date
   - Documentează în Specificația Date (SPEC-AI-DATA-XXX)

   **e) Specificații Performanță**
   - Ținte acuratețe, precizie, recall, F1
   - Cerințe latență și capacitate
   - Specificații scalabilitate și capacitate
   - Ținte disponibilitate și fiabilitate
   - Documentează în Specificația Performanță (SPEC-AI-PERF-XXX)

   **f) Specificații Siguranță și Control Risc**
   - Cerințe și controale siguranță
   - Controale mitigare risc (din PROC-AI-RM-001)
   - Mecanisme failsafe și fallback
   - Specificații monitorizare și alertare
   - Documentează în Specificația Siguranță (SPEC-AI-SAFE-XXX)

2. **Asigurarea Calității Output Proiectare**

   Toate outputurile proiectare trebuie să îndeplinească aceste criterii:
   - ✓ **Trasabile:** Fiecare output proiectare trasează la input(uri) proiectare specific(e)
   - ✓ **Complete:** Toate inputurile proiectare abordate de outputurile proiectare
   - ✓ **Neambigue:** Outputurile proiectare sunt clare și interpretabile
   - ✓ **Verificabile:** Outputurile proiectare pot fi testate și verificate
   - ✓ **Conforme:** Outputurile proiectare îndeplinesc cerințele reglementare
   - ✓ **Fabricabile:** Proiectarea poate fi implementată cu resursele disponibile
   - ✓ **Sigure:** Proiectarea include controalele de siguranță necesare

3. **Stabilirea Trasabilității**
   - Creează Matricea Trasabilitate Proiectare care leagă:
     - Nevoi utilizatori → Inputuri proiectare → Outputuri proiectare → Teste verificare → Teste validare
   - Asigură trasabilitate bidirecțională (înainte și înapoi)
   - Documentează în Matricea Trasabilitate Proiectare (TRC-AI-XXX)

   **Exemplu Trasabilitate:**

   | Nevoie Utilizator | Input Proiectare | Output Proiectare | Test Verificare | Test Validare |
   |-----------|--------------|---------------|-------------------|-----------------|
   | Angajare nediscriminatorie | DI-001: Cerință echitate | DO-023: Implementare constrângere echitate | VT-045: Test paritate demografică | VAL-012: Test acceptare utilizator |

4. **Efectuarea Revizuirii Output Proiectare**
   - Autoritatea Proiectare revizuiește toate outputurile proiectare
   - Managerul Calitate verifică conformitatea cu standardele
   - Managerul Risc verifică includerea controalelor de siguranță
   - Documentează revizuirea în Înregistrări Revizuire Output Proiectare (REC-QMS-003)

5. **Aprobarea Outputurilor Proiectare**
   - Autoritatea Proiectare aprobă outputurile proiectare pentru implementare
   - Aprobările documentate și menținute
   - Outputurile proiectare plasate sub control configurație
   - Documentează în Înregistrări Aprobare Proiectare (REC-QMS-004)

**Dovezi Necesare:**
- Specificația Arhitectură Sistem (SPEC-AI-ARCH-XXX)
- Specificația Proiectare Detaliată (SPEC-AI-DD-XXX)
- Documente Control Interfață (ICD-AI-XXX)
- Specificația Date (SPEC-AI-DATA-XXX)
- Specificația Performanță (SPEC-AI-PERF-XXX)
- Specificația Siguranță (SPEC-AI-SAFE-XXX)
- Matricea Trasabilitate Proiectare (TRC-AI-XXX)
- Înregistrări Revizuire Output Proiectare (REC-QMS-003)
- Înregistrări Aprobare Proiectare (REC-QMS-004)

**Durată:** Pe parcursul fazei de proiectare; 6-12 săptămâni tipic

**Verificare Calitate:**
- Toate inputurile proiectare abordate de outputurile proiectare
- Outputurile proiectare îndeplinesc criteriile de calitate (trasabile, complete, neambigue, verificabile)
- Matricea trasabilitate completă și bidirecțională
- Aprobarea Autorității Proiectare documentată
- Outputurile proiectare sub control configurație

---

#### Pasul 2.3: Efectuarea Revizuirilor Proiectare (Control QMS-002)

**Când:** La fiecare poartă de fază proiectare (conform Programului Revizuiri Proiectare)

**Cine:** Autoritate Proiectare + Manager Calitate + Echipă interfuncțională

**Cum:**

1. **Pregătirea pentru Revizuirea Proiectare**
   - Programează întâlnirea de revizuire (minim 2 săptămâni preaviz)
   - Distribuie documentația proiectare către evaluatori (minim 1 săptămână înainte)
   - Pregătește lista de verificare revizuire proiectare (CHK-QMS-DR-001)
   - Identifică participanții la revizuire:
     - Autoritate Proiectare (Președinte)
     - Manager Calitate
     - Manager Risc
     - Expert Securitate
     - Reprezentant Guvernanță Date
     - Proprietar Sistem IA
     - Experți domeniu (după necesități)

2. **Efectuarea Întâlnirii Revizuire Proiectare**

   **Agenda Revizuire Proiectare (întâlnire tipică 2-3 ore):**

   - **Deschidere (10 min)**
     - Revizuirea agendei și obiectivelor
     - Confirmarea participanților și cvorum
     - Revizuirea elementelor de acțiune din revizuirea anterioară

   - **Prezentare Proiectare (30 min)**
     - Prezintă inputurile și cerințele proiectare
     - Prezintă outputurile și arhitectura proiectare
     - Prezintă abordarea verificare și validare
     - Prezintă evaluarea riscurilor și controalele

   - **Revizuire Detaliată (90 min)**
     - Revizuiește proiectarea față de inputuri (trasabilitate)
     - Revizuiește exhaustivitatea și calitatea outputurilor proiectare
     - Revizuiește conformitatea cu cerințele Actului UE privind IA
     - Revizuiește controalele siguranță și risc
     - Revizuiește guvernanța și calitatea datelor
     - Identifică lacune sau probleme proiectare
     - Discută alternative proiectare dacă este necesar

   - **Decizie și Elemente de Acțiune (30 min)**
     - Identifică elemente de acțiune și proprietari
     - Determină rezultatul revizuirii:
       - **Aprobat:** Proiectarea trece la faza următoare
       - **Aprobat cu Condiții:** Proiectarea trece după modificări minore
       - **Neaprobat:** Proiectarea necesită refacere și re-revizuire
     - Documentează deciziile și justificarea

3. **Documentarea Revizuirii Proiectare**
   - Completează Lista Verificare Revizuire Proiectare (CHK-QMS-DR-001)
   - Documentează prezența la revizuire
   - Documentează constatările și problemele identificate
   - Documentează elementele de acțiune cu proprietari și termene
   - Documentează decizia revizuirii și justificarea
   - Toți evaluatorii semnează Procesul Verbal Revizuire Proiectare (REC-QMS-005)

4. **Urmărirea Elementelor de Acțiune**
   - Atribuie elemente de acțiune proprietarilor
   - Stabilește termene pentru închidere
   - Urmărește elementele de acțiune în Tracker Acțiuni Revizuire Proiectare (REC-QMS-006)
   - Verifică închiderea înainte de a trece la poarta următoare

5. **Decizia Poartă**
   - Autoritatea Proiectare ia decizia finală poartă
   - "Aprobat" → Trece la faza următoare
   - "Aprobat cu Condiții" → Completează elementele de acțiune, apoi trece
   - "Neaprobat" → Completează refacerea, programează re-revizuirea
   - Documentează decizia poartă în Înregistrări Decizie Poartă (REC-QMS-007)

**Porți Tipice Revizuire Proiectare:**

| Poartă | Denumire Revizuire | Scop | Întrebări Cheie | Criterii Ieșire |
|------|-------------|---------|---------------|---------------|
| 1 | Revizuire Input Proiectare | Verifică inputuri complete și corecte | Sunt cerințele clare, complete, testabile? | Toate inputurile aprobate |
| 2 | Revizuire Proiectare Preliminară | Evaluează arhitectura și abordarea | Este abordarea solidă? Sunt riscurile identificate? | Arhitectura aprobată |
| 3 | Revizuire Proiectare Critică | Verifică proiectarea detaliată | Proiectarea îndeplinește toate cerințele? | Proiectarea detaliată aprobată |
| 4 | Revizuire Verificare Proiectare | Confirmă testarea completă | Sunt toate cerințele verificate? | Toate testele trecute |
| 5 | Revizuire Validare Proiectare | Confirmă validarea completă | Sistemul îndeplinește nevoile utilizatorilor? | Validare reușită |
| 6 | Revizuire Transfer Proiectare | Autorizează lansarea producție | Este documentația completă și corectă? | Gata pentru desfășurare |

**Dovezi Necesare:**
- Lista Verificare Revizuire Proiectare (CHK-QMS-DR-001) - completată
- Proces Verbal Revizuire Proiectare (REC-QMS-005)
- Tracker Acțiuni Revizuire Proiectare (REC-QMS-006)
- Înregistrări Decizie Poartă (REC-QMS-007)
- Pachet documentație proiectare (specificații, planuri, rezultate teste)

**Durată:** 2-4 ore per revizuire; revizuiri multiple pe parcursul fazei de proiectare

**Verificare Calitate:**
- Toți evaluatorii necesari prezenți (sau excepții documentate)
- Lista verificare revizuire proiectare completată
- Toate constatările documentate cu elemente de acțiune
- Decizia poartă documentată cu justificare
- Elementele de acțiune urmărite până la închidere

---

### FAZA 3: MANAGEMENTUL DOCUMENTAȚIEI ȘI CONFIGURAȚIEI

#### Pasul 3.1: Stabilirea Sistemului Control Documente (Control QMS-003)

**Când:** La stabilirea SMC; menținere continuă

**Cine:** Controller Documente + Manager Calitate

**Cum:**

1. **Implementarea Sistemului Management Documente**
   - Selectează platforma management documente (SharePoint, Confluence, software SMC dedicat)
   - Configurează controalele de acces și permisiunile
   - Stabilește fluxurile de aprobare documente
   - Configurează controlul versiunilor
   - Activează pistele de audit
   - Documentează în Configurația Sistemului Management Documente (DOC-QMS-011)

2. **Definirea Categoriilor Documente și Numerotării**

| Categorie Documente | Prefix | Exemple | Păstrare |
|-------------------|--------|----------|-----------|
| Politici | POL- | POL-AI-001 (Politică IA) | Permanent |
| Standarde | STD- | STD-AI-009 (Standard SMC) | 10 ani |
| Proceduri | PROC- | PROC-AI-QMS-001 (acest document) | 10 ani |
| Specificații | SPEC- | SPEC-AI-ARCH-001 (Arhitectură) | 10 ani |
| Planuri | PLAN- | PLAN-AI-DD-001 (Plan Proiectare) | 10 ani |
| Înregistrări | REC- | REC-QMS-001 (Înregistrare Aprobare) | 10 ani |
| Șabloane | TMP- | TMP-QMS-001 (Șablon) | Cât timp este actual + 2 ani |
| Formulare | FORM- | FORM-QMS-001 (Formular) | Cât timp este actual + 2 ani |
| Rapoarte | RPT- | RPT-QMS-001 (Raport Audit) | 10 ani |
| Instrucțiuni Lucru | WI- | WI-QMS-001 (Instrucțiune Lucru) | 10 ani |

3. **Definirea Stărilor Ciclului de Viață Documente**

| Stare | Descriere | Cine Poate Edita | Cine Poate Aproba |
|-------|-------------|--------------|----------------|
| **Ciornă** | Document în dezvoltare | Autor | N/A |
| **În Revizuire** | Document sub revizuire | Autor (cu urmărire modificări) | Evaluatori |
| **Aprobat** | Document aprobat și efectiv | Nimeni (creează versiune nouă) | Controller Documente |
| **Depășit** | Document înlocuit sau retras | Nimeni | Controller Documente |
| **Arhivat** | Document păstrat pentru înregistrări | Nimeni | N/A |

4. **Stabilirea Standardelor Documente**

   Toate documentele controlate trebuie să includă:
   - **Antet:**
     - ID document
     - Titlu document
     - Număr versiune (ex. v1.0, v2.1)
     - Data intrării în vigoare
     - Autor
     - Aprobator
     - Data următoarei revizuiri

   - **Corp:**
     - Scop și domeniu
     - Procedură sau conținut
     - Referințe la documente conexe

   - **Subsol:**
     - Tabel istoric revizuiri
     - Semnături aprobare
     - Declarație control documente

   **Documentează în Standarde și Șabloane Documente (DOC-QMS-012)**

5. **Definirea Cerințelor de Aprobare Documente**

| Tip Document | Aprobări Necesare | Autoritate Aprobare |
|---------------|-------------------|-------------------|
| Politică Calitate | Comitet Guvernanță IA + Director Calitate | Președinte Comitet Guv. IA |
| Proceduri Calitate | Manager Calitate + Director Calitate | Director Calitate |
| Specificații Proiectare | Autoritate Proiectare + Manager Calitate | Autoritate Proiectare |
| Documentație Tehnică | Proprietar Sistem IA + Manager Calitate | Manager Calitate |
| Materiale Formare | Manager Formare | Manager Formare |
| Formulare și Șabloane | Proprietar Proces | Manager Calitate |

6. **Stabilirea Regulilor Control Versiuni**
   - **Schimbare versiune majoră (X.0):** Modificări semnificative, aprobare nouă necesară
   - **Schimbare versiune minoră (X.Y):** Modificări editoriale sau clarificări, aprobare Manager Calitate
   - Numerotare versiuni: v1.0, v1.1, v1.2, v2.0, etc.
   - Data intrării în vigoare = data aprobării
   - Versiunile anterioare arhivate automat
   - Documentează în Procedurile Control Versiuni (DOC-QMS-013)

7. **Configurarea Controlului Acces Documente**
   - Public: Accesibil pentru tot personalul
   - Intern: Accesibil doar pentru personalul desemnat
   - Confidențial: Acces restricționat (persoane numite)
   - Definește matricea control acces
   - Documentează în Matricea Control Acces (DOC-QMS-014)

8. **Formarea Personalului pe Controlul Documente**
   - Instruiește autorii pe standardele documente
   - Instruiește aprobatorii pe fluxurile de aprobare
   - Instruiește tot personalul pe accesul și utilizarea documentelor
   - Documentează formarea în Înregistrări Formare (REC-TRN-001)

**Dovezi Necesare:**
- Configurația Sistemului Management Documente (DOC-QMS-011)
- Standarde și Șabloane Documente (DOC-QMS-012)
- Procedurile Control Versiuni (DOC-QMS-013)
- Matricea Control Acces (DOC-QMS-014)
- Înregistrări Formare (REC-TRN-001)

**Durată:** 3-4 săptămâni pentru configurarea inițială

**Verificare Calitate:**
- Sistemul management documente operațional
- Toate categoriile documente definite cu schemă numerotare
- Fluxuri aprobare configurate
- Control versiuni operațional
- Personal instruit

---

#### Pasul 3.2: Menținerea Managementului Configurației (Control QMS-004)

**Când:** Pe parcursul ciclului de viață sistem IA; continuu

**Cine:** Manager Configurație + Proprietar Sistem IA + Manager Calitate

**Cum:**

1. **Definirea Elementelor de Configurație (CI)**

   Elemente de configurație supuse controlului:

   **Elemente Configurație Software:**
   - Cod sursă (toate versiunile)
   - Script-uri și pipeline-uri antrenament
   - Artefacte model (modele antrenate, ponderi)
   - Fișiere configurație (hiperparametri, setări)
   - Script-uri desfășurare și infrastructură-ca-cod
   - Biblioteci terțe și dependențe

   **Elemente Configurație Documentație:**
   - Specificații proiectare
   - Documentație tehnică
   - Manuale utilizator și instrucțiuni de utilizare
   - Rapoarte validare și verificare
   - Documentație management riscuri

   **Elemente Configurație Date:**
   - Seturi date antrenament (inclusiv versiuni)
   - Seturi date testare
   - Seturi date validare
   - Date referință

   Documentează în Lista Elemente Configurație (DOC-QMS-015)

2. **Stabilirea Liniilor de Bază Configurație**

   O linie de bază este o configurație aprobată formal la un moment specific în timp.

   **Linii de Bază Tipice:**
   - **Linie Bază Proiectare:** Specificații proiectare aprobate
   - **Linie Bază Dezvoltare:** Cod și modele sub control versiuni
   - **Linie Bază Testare:** Artefacte testare și sistem validat
   - **Linie Bază Producție:** Configurație sistem desfășurat

   Pentru fiecare linie de bază, documentează:
   - ID linie de bază și versiune
   - Data stabilirii
   - Lista CI incluse cu versiuni
   - Autoritate aprobare și data

   Documentează în Înregistrări Linii de Bază Configurație (REC-QMS-008)

3. **Implementarea Controlului Versiuni pentru Toate CI**

   **Cod Sursă și Script-uri:**
   - Utilizează Git sau sistem control versiuni echivalent
   - Toate modificările comise cu mesaje semnificative
   - Strategie ramificare definită (ex. GitFlow)
   - Revizuire cod necesară înainte de îmbinare
   - Etichete pentru lansări și linii de bază

   **Artefacte Model:**
   - Utilizează MLflow, DVC sau registru model echivalent
   - Toate modelele versionate și urmărite
   - Parametrii antrenament și metricile înregistrate
   - Linia urmărită (date → cod → model)

   **Seturi Date:**
   - Utilizează DVC, LakeFS sau versioning date echivalent
   - Toate seturile de date versionate cu hash/checksum
   - Proveniența urmărită (sursă, transformări)
   - Imuabile odată utilizate pentru antrenament

   **Documentație:**
   - Sistemul management documente furnizează versioning
   - Toate versiunile păstrate conform politicii de păstrare

   Documentează în Standardele Control Versiuni (DOC-QMS-016)

4. **Stabilirea Contabilității Status Configurație**

   Menține un Raport Status Configurație care include:
   - Linia de bază curentă pentru fiecare sistem IA
   - Toate elementele de configurație și versiunile curente
   - Toate modificările aprobate și statusul implementării
   - Orice devieri de la linia de bază

   Actualizează lunar și publică către părțile interesate

   Documentează în Raportul Status Configurație (RPT-QMS-002)

5. **Implementarea Trasabilității**

   Menține trasabilitatea de la:
   - Cerințe → Proiectare → Cod → Teste → Desfășurare
   - Date antrenament → Versiune model → Rezultate validare → Desfășurare
   - Probleme/CAPA → Modificări → Verificare → Desfășurare

   Utilizează Matricea Trasabilitate Configurație (TRC-QMS-001)

6. **Controlul Modificărilor Configurație**
   - Toate modificările CI trebuie să treacă prin Controlul Modificărilor (vezi Pasul 6.3)
   - Fără modificări directe la configurațiile producție
   - Toate modificările aprobate înainte de implementare
   - Toate modificările verificate după implementare

   Documentează în Procedura Control Modificări (PROC-AI-CHG-001)

**Dovezi Necesare:**
- Lista Elemente Configurație (DOC-QMS-015)
- Înregistrări Linii de Bază Configurație (REC-QMS-008)
- Standardele Control Versiuni (DOC-QMS-016)
- Raportul Status Configurație (RPT-QMS-002) - lunar
- Matricea Trasabilitate Configurație (TRC-QMS-001)

**Durată:** Permanent pe parcursul ciclului de viață

**Verificare Calitate:**
- Toate CI identificate și sub control versiuni
- Linii de bază stabilite la jaloanele majore
- Contabilitatea status configurație curentă
- Trasabilitate menținută
- Modificările controlate conform procedurii control modificări

---

### FAZA 4: MANAGEMENTUL FURNIZORILOR ȘI FORMĂRII

#### Pasul 4.1: Calificarea și Gestionarea Furnizorilor (Control QMS-005)

**Când:** Înainte de angajarea furnizorilor noi; permanent pentru furnizorii existenți

**Cine:** Manager Calitate Furnizori + Achiziții + Manager Calitate

**Cum:**

1. **Identificarea Furnizorilor Critici**

   Furnizori supuși calificării și controlului:
   - Furnizori modele IA (ex. OpenAI, Anthropic)
   - Furnizori infrastructură cloud (ex. AWS, Azure, GCP)
   - Furnizori date antrenament
   - Furnizori componente terțe
   - Servicii consultanță și dezvoltare
   - Servicii testare și validare

   Evaluarea criticalității:
   - **Critic:** Eșecul furnizorului impactează direct conformitatea sau siguranța sistemului IA
   - **Important:** Eșecul furnizorului impactează performanța sau disponibilitatea
   - **Standard:** Eșecul furnizorului are impact minor

   Documentează în Lista Furnizori Critici (DOC-QMS-017)

2. **Efectuarea Calificării Furnizor**

   **Pentru Furnizorii Critici, verifică:**

   **a) Sistem Management Calitate**
   - Certificare ISO 9001 (sau echivalent)
   - Manual și proceduri calitate
   - Drepturi audit acordate

   **b) Conformitate Actul UE privind IA**
   - Conformitatea furnizorului cu obligațiile Actului UE privind IA
   - Documentație tehnică disponibilă
   - Evaluare conformitate finalizată (dacă este aplicabil)
   - Declarație Conformitate furnizată

   **c) Securitate și Protecție Date**
   - Certificare ISO 27001 sau echivalent
   - Conformitate GDPR (Acord Procesare Date)
   - Evaluare controale securitate
   - Proceduri notificare incidente

   **d) Capacitate Tehnică**
   - Experiență relevantă și referințe
   - Verificare competență tehnică
   - Metrici performanță și SLA

   **e) Continuitate Afaceri**
   - Evaluare stabilitate financiară
   - Planuri continuitate afaceri și recuperare dezastre
   - Prevederi ieșire și tranziție

   Documentează constatările în Raportul Calificare Furnizor (RPT-QMS-003)

3. **Aprobarea sau Respingerea Furnizorului**

   **Criterii Aprobare:**
   - Toate criteriile critice de calificare îndeplinite
   - Evaluarea riscurilor acceptabilă
   - Termeni contractuali acceptabili

   **Procesul Aprobare:**
   - Managerul Calitate Furnizori recomandă aprobare/respingere
   - Managerul Calitate revizuiește și aprobă
   - Pentru furnizorii critici: aprobare Director Calitate necesară

   Documentează în Lista Furnizori Aprobați (DOC-QMS-018)

4. **Stabilirea Acordurilor cu Furnizorii**

   **Acordul Calitate trebuie să includă:**
   - Sfera produselor/serviciilor
   - Cerințe și specificații calitate
   - Criterii acceptare
   - Gestionare neconformități
   - Drept la audit
   - Cerințe notificare modificări
   - Cerințe notificare incidente
   - Cerințe CAPA
   - Cerințe documentație
   - Obligații conformitate reglementară

   Documentează în Acordul Calitate Furnizor (șablon TMP-QMS-003)

5. **Monitorizarea Performanței Furnizorului**

   **Metrici Performanță (tipice):**
   - Rată livrare la timp (țintă: >95%)
   - Rată acceptare calitate (țintă: >98%)
   - Rată incidente/defecte (țintă: <2%)
   - Promptitudine închidere CAPA (țintă: 100% la timp)
   - Reactivitate la probleme (țintă: <24 ore)

   **Frecvență Monitorizare:**
   - Furnizori critici: Fișă evaluare lunară
   - Furnizori importanți: Fișă evaluare trimestrială
   - Furnizori standard: Revizuire anuală

   Documentează în Fișa Evaluare Performanță Furnizor (RPT-QMS-004)

6. **Efectuarea Auditurilor Furnizorilor**

   **Frecvență Audit:**
   - Furnizori critici: Audit anual (on-site sau remote)
   - Furnizori importanți: Audit bianual
   - Furnizori standard: Bazat pe risc (după necesități)

   **Sfera Audit:**
   - Eficacitatea SMC
   - Conformitatea Actului UE privind IA
   - Conformitatea contractuală
   - Managementul neconformităților și CAPA
   - Documentație și înregistrări

   Documentează în Raportul Audit Furnizor (RPT-QMS-005)

7. **Gestionarea Neconformităților Furnizorului**
   - Documentează neconformitățile furnizorului
   - Solicită CAPA furnizorului
   - Verifică eficacitatea CAPA
   - Escaladează problemele recurente
   - Consideră recalificarea sau rezilierea furnizorului

   Documentează în Înregistrări Neconformități Furnizor (REC-QMS-009)

8. **Revizuirea și Actualizarea Statusului Furnizorului**
   - Revizuire anuală a tuturor furnizorilor
   - Actualizează Lista Furnizori Aprobați
   - Recalifică furnizorii după necesități
   - Elimină furnizorii neperformanți

   Documentează în Procesele Verbale Revizuire Furnizor (REC-QMS-010)

**Dovezi Necesare:**
- Lista Furnizori Critici (DOC-QMS-017)
- Rapoarte Calificare Furnizor (RPT-QMS-003)
- Lista Furnizori Aprobați (DOC-QMS-018)
- Acorduri Calitate Furnizor
- Fișe Evaluare Performanță Furnizor (RPT-QMS-004)
- Rapoarte Audit Furnizor (RPT-QMS-005)
- Înregistrări Neconformități Furnizor (REC-QMS-009)
- Procese Verbale Revizuire Furnizor (REC-QMS-010)

**Durată:**
- Calificare inițială: 4-8 săptămâni
- Monitorizare permanentă: Lunar/trimestrial/anual conform nivelului furnizor

**Verificare Calitate:**
- Toți furnizorii critici calificați și aprobați
- Acorduri calitate în vigoare
- Monitorizare performanță activă
- Audituri efectuate conform programului
- Neconformități gestionate cu CAPA

---

#### Pasul 4.2: Gestionarea Formării și Competenței (Control QMS-006)

**Când:** Permanent; formare înainte de atribuirea rolului și periodic

**Cine:** Manager Formare + Manager Calitate + HR

**Cum:**

1. **Definirea Cerințelor de Competență**

   Pentru fiecare rol SMC, definește:
   - Educație necesară (diplome, certificări)
   - Experiență necesară (ani, domeniu)
   - Formare necesară (cursuri, certificări)
   - Abilități necesare (tehnice, soft skills)

   Documentează în Matricea Cerințe Competență (DOC-QMS-019)

   **Exemplu Cerințe Competență:**

   | Rol | Educație | Experiență | Formare | Abilități |
   |------|-----------|------------|----------|--------|
   | Proprietar Sistem IA | Licență în domeniu relevant | 3+ ani IA/ML | Formare Actul UE privind IA; Formare SMC | Management proiecte; Înțelegere tehnică |
   | Autoritate Proiectare | Master în CS/IA sau echivalent | 5+ ani proiectare IA/ML | Formare Actul UE privind IA; Formare control proiectare | Arhitectură; Evaluare riscuri; Abilități revizuire |
   | Manager Calitate | Licență + Certificare Calitate | 3+ ani management calitate | ISO 9001; Actul UE privind IA; Auditor intern | Abilități audit; Îmbunătățire proces; Documentare |
   | Data Scientist | Master în domeniu relevant | 2+ ani dezvoltare IA/ML | Testare bias; Echitate; Securitate | Python/R; Framework-uri ML; Statistică |

2. **Evaluarea Competenței Curente**
   - Pentru fiecare persoană într-un rol SMC, evaluează competența curentă
   - Identifică lacunele între competența necesară și reală
   - Documentează în Înregistrări Evaluare Competență (REC-QMS-011)

3. **Dezvoltarea Planului de Formare**
   - Pentru fiecare lacună de competență, planifică formare pentru închiderea lacunei
   - Identifică metoda de formare:
     - Curs formare formal (intern sau extern)
     - Formare la locul de muncă cu mentor
     - Autostudiu cu evaluare
     - Program certificare
   - Atribuie proprietar formare și termen
   - Documentează în Planul Formare (PLAN-TRN-001)

4. **Livrarea Formării**

   **Curriculum Formare SMC (necesar pentru tot personalul IA):**

   **Modulul 1: Fundamentele Actului UE privind IA (4 ore)**
   - Scopul și cerințele Actului UE privind IA
   - Clasificarea riscurilor
   - Practici interzise
   - Cerințe risc ridicat (Articolele 8-15)
   - Obligații furnizori și operatori

   **Modulul 2: Sistem Management Calitate (4 ore)**
   - Cadrul și procesele SMC
   - Roluri și responsabilități
   - Control proiectare
   - Management documente și configurație
   - Procesul CAPA

   **Modulul 3: Formare Specifică Rolului (variabil)**
   - Control proiectare (pentru Autoritate Proiectare, proiectanți)
   - Metodologie audit intern (pentru auditori)
   - Management furnizori (pentru Manager Calitate Furnizori)
   - Management CAPA (pentru Coordonator CAPA)

   **Modulul 4: Formare Tehnică (variabil)**
   - Detectare și mitigare bias
   - Metrici și testare echitate
   - Testare robustețe și securitate
   - Guvernanță și calitate date
   - Management riscuri

   **Metode Livrare Formare:**
   - Condusă de instructor (în persoană sau virtual)
   - Module e-learning
   - Formare la locul de muncă cu mentor
   - Autostudiu cu evaluare

5. **Evaluarea Eficacității Formării**

   Pentru fiecare formare, evaluează eficacitatea:
   - **Evaluare cunoștințe:** Chestionar sau examen (țintă: >80% rată promovare)
   - **Evaluare abilități:** Exercițiu practic sau observare
   - **Performanță la locul de muncă:** Evaluare supervizor după 90 zile

   Documentează în Evaluarea Eficacității Formării (REC-QMS-012)

6. **Menținerea Înregistrărilor de Formare**

   Pentru fiecare persoană, menține:
   - Istoric formare (cursuri completate, date, scoruri)
   - Certificări (denumire, emitent, expirare)
   - Evaluări competență (dată, evaluator, rezultat)
   - Status competență curent (calificat/necalificat pentru fiecare rol)

   Documentează în Baza Date Înregistrări Formare (REC-TRN-001)

7. **Gestionarea Actualității Formării**
   - Definește cerințele de reîmprospătare formare:
     - Formare Actul UE privind IA: Reîmprospătare anuală
     - Formare SMC: Reîmprospătare bianual
     - Formare auditor intern: Reîmprospătare anuală
     - Formare tehnică: După necesități bazat pe schimbări rol

   - Monitorizează expirarea formării și programează formare reîmprospătare
   - Documentează în Raportul Actualitate Formare (RPT-QMS-006)

8. **Verificarea Competenței Înainte de Activități Critice**
   - Înainte de a atribui persoană la rol critic, verifică:
     - ✓ Cerințele competență îndeplinite
     - ✓ Formarea necesară completată
     - ✓ Certificările curente
     - ✓ Evaluarea competență trecută

   - Documentează verificarea în Înregistrări Verificare Competență (REC-QMS-013)

**Dovezi Necesare:**
- Matricea Cerințe Competență (DOC-QMS-019)
- Înregistrări Evaluare Competență (REC-QMS-011)
- Plan Formare (PLAN-TRN-001)
- Baza Date Înregistrări Formare (REC-TRN-001)
- Evaluarea Eficacității Formării (REC-QMS-012)
- Raportul Actualitate Formare (RPT-QMS-006)
- Înregistrări Verificare Competență (REC-QMS-013)

**Durată:**
- Formare inițială: Înainte de atribuirea rolului
- Permanent: Conform cerințelor actualitate formare

**Verificare Calitate:**
- Cerințele competență definite pentru toate rolurile
- Tot personalul în roluri SMC a completat formarea necesară
- Eficacitatea formării evaluată și acceptabilă
- Înregistrările formare complete și curente
- Competența verificată înainte de activități critice

---

### FAZA 5: ACȚIUNI CORECTIVE ȘI PREVENTIVE

#### Pasul 5.1: Gestionarea Acțiunilor Corective și Preventive (CAPA) (Control QMS-007)

**Când:** Când neconformități, incidente sau oportunități de îmbunătățire sunt identificate

**Cine:** Coordonator CAPA + Manager Calitate + Proprietari Proces

**Cum:**

1. **Identificarea Declanșatorilor CAPA**

   CAPA sunt inițiate când:
   - **Declanșatori Acțiune Corectivă:**
     - Neconformitate identificată (internă sau externă)
     - Constatare audit (intern sau extern)
     - Reclamație client
     - Incident sau aproape-incident
     - Constatare inspecție reglementară
     - Neconformitate furnizor
     - Încălcare prag metrică calitate

   - **Declanșatori Acțiune Preventivă:**
     - Evaluarea riscurilor identifică risc preventabil
     - Analiza tendințelor arată creștere probleme
     - Lecții învățate din alte sisteme/industrii
     - Oportunitate îmbunătățire proces
     - Îmbunătățire proactivă control

   Documentează declanșatorii în Lista Verificare Inițiere CAPA (CHK-QMS-CAPA-001)

2. **Inițierea CAPA**

   **Procesul Inițiere CAPA:**
   - Oricine poate inițiaCAPA prin trimiterea Formularului Cerere CAPA (FORM-QMS-CAPA-001)
   - Coordonatorul CAPA revizuiește cererea în termen de 2 zile lucrătoare
   - Coordonatorul CAPA determină:
     - Este CAPA justificată? (Da/Nu)
     - Prioritatea CAPA (Critică/Ridicată/Medie/Scăzută)
     - Tipul CAPA (Corectivă/Preventivă)
   - Coordonatorul CAPA atribuie ID CAPA și proprietar
   - Coordonatorul CAPA înregistrează în Registrul CAPA (REC-QMS-014)

   **Criterii Prioritate CAPA:**

   | Prioritate | Criterii | Închidere Țintă |
   |----------|----------|---------------|
   | Critică | Afectează siguranța, drepturile fundamentale sau conformitatea reglementară | 30 zile |
   | Ridicată | Afectează performanța sau disponibilitatea sistemului | 60 zile |
   | Medie | Afectează calitatea sau eficiența | 90 zile |
   | Scăzută | Problemă minoră sau oportunitate îmbunătățire | 180 zile |

3. **Investigarea Cauzei Rădăcină**

   **Metode Analiză Cauză Rădăcină:**
   - **5 De ce:** Întreabă "de ce" de cinci ori pentru a ajunge la cauza rădăcină
   - **Diagramă Fishbone (Ishikawa):** Categorisează cauzele potențiale (Persoane, Proces, Tehnologie, Mediu, etc.)
   - **Analiza Modurilor și Efectelor Eșuării (FMEA):** Analiză sistematică a modurilor potențiale de eșec
   - **Analiza Arbore Defecțiuni:** Diagramă logică a căilor eșuării

   **Procesul Investigare Cauză Rădăcină:**
   - Proprietarul CAPA efectuează investigarea cauzei rădăcină
   - Adună dovezi și date
   - Intervievează personalul implicat
   - Analizează procesele și sistemele
   - Aplică metoda analiză cauză rădăcină
   - Documentează constatările în Raportul Analiză Cauză Rădăcină (RPT-QMS-007)

   **Validarea Cauzei Rădăcină:**
   - Testează ipoteza: Dacă cauza rădăcină este abordată, problema va fi prevenită?
   - Verifică cu date sau simulare
   - Obține aprobarea Managerului Calitate pentru concluzia cauzei rădăcină

4. **Dezvoltarea Planului Acțiune Corectivă/Preventivă**

   Pentru fiecare cauză rădăcină, dezvoltă planul de acțiune:

   **Componente Plan Acțiune:**
   - **Acțiune izolare imediată:** Previne reapariția imediată (dacă acțiune corectivă)
   - **Acțiune cauză rădăcină:** Abordează cauza subiacentă
   - **Acțiune sistemică:** Previne reapariția în alte sisteme/procese
   - **Acțiune verificare:** Verifică eficacitatea

   **Pentru fiecare acțiune, definește:**
   - Descrierea acțiunii (ce va fi făcut)
   - Proprietarul acțiunii (cine este responsabil)
   - Data țintă finalizare
   - Resurse necesare
   - Criterii succes (cum va fi măsurată eficacitatea)

   Documentează în Planul Acțiune CAPA (PLAN-CAPA-XXX)

5. **Implementarea CAPA**

   - Proprietarul CAPA implementează acțiunile conform planului
   - Coordonatorul CAPA monitorizează progresul
   - Proprietarul CAPA furnizează actualizări status (săptămânal pentru Critică/Ridicată, lunar pentru Medie/Scăzută)
   - Coordonatorul CAPA escaladează acțiunile întârziate:
     - >7 zile întârziere: Escaladează la Manager Calitate
     - >14 zile întârziere: Escaladează la Director Calitate
     - >30 zile întârziere: Escaladează la Comitet Guvernanță IA

   Documentează implementarea în Înregistrări Implementare CAPA (REC-QMS-015)

6. **Verificarea Eficacității CAPA**

   După implementare, verifică eficacitatea:

   **Metode Verificare:**
   - **Analiza datelor:** Verifică metricile îmbunătățite (ex. rata defectelor redusă)
   - **Audit proces:** Verifică modificările proces implementate și urmate
   - **Re-testare:** Re-rulează testele care au eșuat anterior
   - **Monitorizare:** Monitorizează reapariția în timp (ex. 90 zile)

   **Timing Verificare:**
   - Verificare imediată: Acțiunile implementate corect
   - Verificare pe termen scurt (30 zile): Eficacitatea inițială confirmată
   - Verificare pe termen lung (90 zile): Eficacitatea susținută confirmată

   Documentează în Raportul Verificare Eficacitate CAPA (RPT-QMS-008)

7. **Închiderea CAPA**

   **Criterii Închidere CAPA:**
   - ✓ Toate acțiunile completate
   - ✓ Eficacitatea imediată verificată
   - ✓ Eficacitatea pe termen scurt verificată (30 zile)
   - ✓ Eficacitatea pe termen lung verificată (90 zile) - pentru prioritate Critică/Ridicată
   - ✓ Documentație completă
   - ✓ Aprobarea Managerului Calitate obținută

   **Procesul Închidere CAPA:**
   - Proprietarul CAPA trimite cerere închidere cu dovezi
   - Managerul Calitate revizuiește și aprobă închiderea
   - Coordonatorul CAPA actualizează Registrul CAPA
   - CAPA închisă și arhivată

   Documentează în Înregistrări Închidere CAPA (REC-QMS-016)

8. **Analiza Tendințelor CAPA**
   - Analiza tendințelor CAPA lunară
   - Identifică problemele recurente sau tiparele
   - Identifică oportunități îmbunătățire proces
   - Raportează la revizuirea managementului

   Documentează în Raportul Analiza Tendințe CAPA (RPT-QMS-009)

**Dovezi Necesare:**
- Formular Cerere CAPA (FORM-QMS-CAPA-001)
- Registru CAPA (REC-QMS-014)
- Raport Analiză Cauză Rădăcină (RPT-QMS-007)
- Plan Acțiune CAPA (PLAN-CAPA-XXX)
- Înregistrări Implementare CAPA (REC-QMS-015)
- Raport Verificare Eficacitate CAPA (RPT-QMS-008)
- Înregistrări Închidere CAPA (REC-QMS-016)
- Raport Analiza Tendințe CAPA (RPT-QMS-009)

**Durată:**
- Inițiere CAPA: În termen de 2 zile lucrătoare de la identificare
- Analiza cauzei rădăcină: În termen de 2 săptămâni
- Plan acțiune: În termen de 1 săptămână de la finalizarea cauzei rădăcină
- Implementare: Conform priorității (30/60/90/180 zile)
- Verificare: 30-90 zile după implementare

**Verificare Calitate:**
- Cauza rădăcină investigată temeinic și validată
- Acțiunile abordează cauza rădăcină, nu doar simptomele
- Verificarea eficacității obiectivă și documentată
- CAPA închisă doar când eficacitatea susținută este demonstrată
- Tendințele analizate și raportate

---

### FAZA 6: MONITORIZARE, AUDIT ȘI REVIZUIRE

#### Pasul 6.1: Efectuarea Auditurilor Interne (Control QMS-008)

**Când:** Conform programului anual audit; ad-hoc după necesități

**Cine:** Auditor Intern + Manager Calitate

**Cum:**

1. **Dezvoltarea Planului Anual Audit**

   **Componente Plan Audit:**
   - Program audit (care procese/sisteme auditate când)
   - Sfera audit pentru fiecare audit
   - Atribuiri echipă audit
   - Criterii audit (standarde, proceduri, cerințe)
   - Durată estimată audit

   **Frecvență Audit:**
   - Toate procesele SMC: Cel puțin anual
   - Procese cu risc ridicat: Semestrial sau trimestrial
   - Procese noi: În termen de 6 luni de la implementare
   - Procese cu constatări anterioare: Urmărire în termen de 6 luni

   Documentează în Planul Anual Audit Intern (PLAN-AUDIT-YEAR)

2. **Planificarea Auditului Individual**

   **Activități Pre-Audit:**
   - Definește sfera și obiectivele audit
   - Identifică criteriile audit (proceduri, standarde, reglementări)
   - Formează echipa audit (auditor șef + auditori)
   - Programează auditul (notifică auditat cu cel puțin 2 săptămâni înainte)
   - Revizuiește constatările auditurilor anterioare
   - Pregătește lista de verificare audit (CHK-QMS-AUDIT-XXX)
   - Solicită documentație de la auditat

   Documentează în Planul Audit (PLAN-AUDIT-XXX)

3. **Efectuarea Întâlnirii de Deschidere**

   **Agenda Întâlnire Deschidere (30 minute):**
   - Prezintă echipa audit
   - Confirmă sfera și obiectivele audit
   - Revizuiește programul și logistica audit
   - Explică procesul și așteptările audit
   - Răspunde la întrebările auditatului
   - Documentează prezența în Procesul Verbal Întâlnire Deschidere Audit (REC-QMS-017)

4. **Efectuarea Auditului**

   **Activități Audit:**

   **a) Revizuire Documente**
   - Revizuiește proceduri, instrucțiuni lucru, specificații
   - Revizuiește înregistrări, rapoarte, jurnale
   - Verifică documentația curentă și aprobată
   - Verifică documentația îndeplinește cerințele

   **b) Interviuri**
   - Intervievează proprietarii proces și personalul
   - Verifică înțelegerea procedurilor
   - Verifică formarea și competența
   - Întreabă despre provocări și probleme

   **c) Observare**
   - Observă execuția procesului
   - Verifică conformitatea cu procedurile
   - Verifică controalele operează conform proiectării
   - Identifică oportunități îmbunătățire

   **d) Testare**
   - Eșantionează înregistrări pentru exhaustivitate și acuratețe
   - Trasează tranzacții prin proces
   - Verifică calculele și integritatea datelor

   **Colectarea Dovezilor Audit:**
   - Documentează toate constatările cu dovezi obiective
   - Face notițe în timpul interviurilor și observărilor
   - Colectează copii înregistrări relevante
   - Fotografiază problemele (dacă este aplicabil)
   - Documentează în Documentele de Lucru Audit (REC-QMS-018)

5. **Clasificarea Constatărilor Audit**

   **Tipuri Constatări:**

   | Tip Constatare | Definiție | Exemplu |
   |--------------|------------|---------|
   | **Neconformitate Critică** | Deviere majoră de la cerință; afectează siguranța, drepturile sau conformitatea | Proiectare neaprobată înainte de implementare |
   | **Neconformitate Majoră** | Deviere semnificativă de la cerință; afectează calitatea sistemului | Revizuirea proiectare neefectuată |
   | **Neconformitate Minoră** | Deviere izolată de la cerință; impact minimal | Prezență revizuire proiectare nedocumentată |
   | **Observație** | Problemă potențială sau oportunitate îmbunătățire; nu este deviere cerință | Procesul revizuire proiectare ar putea fi simplificat |
   | **Constatare Pozitivă** | Practică exemplară care merită partajată | Implementare excelentă trasabilitate |

6. **Efectuarea Întâlnirii de Închidere**

   **Agenda Întâlnire Închidere (1 oră):**
   - Prezintă constatările audit (neconformități și observații)
   - Discută dovezile și justificarea
   - Permite auditatului să răspundă și să furnizeze context
   - Convine asupra clasificării constatărilor (dacă este posibil)
   - Discută așteptările și termenul CAPA
   - Confirmă pașii următori
   - Documentează în Procesul Verbal Întâlnire Închidere Audit (REC-QMS-019)

7. **Emiterea Raportului Audit**

   **Conținut Raport Audit:**
   - Rezumat executiv
   - Sfera și obiectivele audit
   - Criteriile audit
   - Echipa audit și participanții
   - Constatările audit (pe severitate)
   - Constatări pozitive și practici bune
   - Recomandări
   - Termen CAPA necesar

   **Distribuția Raportului Audit:**
   - Auditat
   - Manager Calitate
   - Director Calitate
   - Comitet Guvernanță IA (dacă constatări critice)

   Documentează în Raportul Audit Intern (RPT-QMS-010)

8. **Urmărirea CAPA până la Închidere**
   - Toate neconformitățile necesită CAPA (conform Pasului 5.1)
   - Constatări critice: CAPA în termen de 30 zile
   - Constatări majore: CAPA în termen de 60 zile
   - Constatări minore: CAPA în termen de 90 zile
   - Auditorul Intern verifică eficacitatea CAPA
   - Constatările închise doar când CAPA verificată eficace

   Documentează în Tracker Constatări Audit (REC-QMS-020)

9. **Efectuarea Auditului de Urmărire**
   - Pentru constatări critice sau majore, efectuează audit urmărire în termen de 6 luni
   - Verifică CAPA implementată și eficace
   - Verifică problema nu s-a repetat
   - Documentează în Raportul Audit Urmărire (RPT-QMS-011)

**Dovezi Necesare:**
- Planul Anual Audit Intern (PLAN-AUDIT-YEAR)
- Planuri Audit Individuale (PLAN-AUDIT-XXX)
- Liste Verificare Audit (CHK-QMS-AUDIT-XXX)
- Procese Verbale Întâlnire Deschidere Audit (REC-QMS-017)
- Documente de Lucru Audit (REC-QMS-018)
- Procese Verbale Întâlnire Închidere Audit (REC-QMS-019)
- Rapoarte Audit Intern (RPT-QMS-010)
- Tracker Constatări Audit (REC-QMS-020)
- Rapoarte Audit Urmărire (RPT-QMS-011)

**Durată:**
- Plan audit anual: Creat în T4 pentru anul următor
- Audituri individuale: Conform programului (toate procesele cel puțin anual)
- Durată audit: 1-5 zile în funcție de sferă
- Raport audit: În termen de 2 săptămâni de la întâlnirea închidere

**Verificare Calitate:**
- Planul audit acoperă toate procesele SMC
- Auditorii independenți de procesul auditat
- Constatările audit susținute de dovezi obiective
- Raportul audit emis prompt
- CAPA urmărite până la închidere cu verificare eficacitate

---

#### Pasul 6.2: Efectuarea Revizuirii Managementului (Control QMS-009)

**Când:** Trimestrial minim; anual cuprinzător

**Cine:** Comitet Guvernanță IA + Director Calitate + Manager Calitate

**Cum:**

1. **Pregătirea Revizuirii Managementului**

   **Colectarea Datelor (Manager Calitate):**
   - Metrici performanță SMC și KPI (vezi Secțiunea 6)
   - Rezultate și tendințe audituri interne
   - Rezultate audituri externe (dacă este aplicabil)
   - Status și tendințe CAPA
   - Tendințe neconformități
   - Feedback și reclamații clienți/utilizatori
   - Performanță furnizori
   - Finalizare și eficacitate formare
   - Adecvarea resurselor
   - Modificări cerințe reglementare
   - Date monitorizare post-piață
   - Rapoarte incidente
   - Inițiative îmbunătățire continuă

   **Pregătește Raportul Revizuire Management (RPT-QMS-012):**
   - Rezumat executiv
   - Performanța SMC față de obiective
   - Tendințe și analiza
   - Probleme și riscuri
   - Recomandări pentru îmbunătățire
   - Nevoi resurse

2. **Efectuarea Întâlnirii Revizuire Management**

   **Participanți Întâlnire:**
   - Membrii Comitet Guvernanță IA
   - Director Calitate (Președinte)
   - Manager Calitate (Prezentator)
   - Proprietari Sistem IA
   - Alte părți interesate după necesități

   **Agenda Întâlnire (2-3 ore):**

   **1. Deschidere (15 min)**
   - Revizuirea agendei și obiectivelor
   - Revizuirea elementelor de acțiune din revizuirea anterioară

   **2. Revizuirea Performanței SMC (60 min)**
   - Prezintă metricile și KPI SMC
   - Revizuiește progresul față de obiectivele calitate
   - Prezintă rezultatele și constatările auditurilor
   - Prezintă statusul și tendințele CAPA
   - Prezintă tendințele neconformităților
   - Prezintă feedback-ul clienți/utilizatori
   - Prezintă performanța furnizorilor

   **3. Revizuirea Conformității (30 min)**
   - Revizuiește statusul conformității Actului UE privind IA
   - Revizuiește modificările reglementare și impactul
   - Revizuiește datele monitorizării post-piață
   - Revizuiește rapoartele incidentelor

   **4. Revizuirea Resurselor (15 min)**
   - Revizuiește adecvarea resurselor
   - Revizuiește finalizarea și eficacitatea formării
   - Identifică lacunele și nevoile resurse

   **5. Revizuirea Îmbunătățirilor (30 min)**
   - Revizuiește inițiativele îmbunătățire continuă
   - Identifică oportunități îmbunătățire
   - Prioritizează proiectele îmbunătățire

   **6. Decizii și Elemente de Acțiune (30 min)**
   - Ia decizii privind:
     - Actualizări obiective calitate
     - Alocarea resurselor
     - Îmbunătățiri proces
     - Modificări politică
     - Escaladări
   - Atribuie elemente de acțiune cu proprietari și termene
   - Stabilește data pentru următoarea revizuire

3. **Documentarea Revizuirii Managementului**

   **Procesul Verbal Revizuire Management trebuie să includă:**
   - Data, participanții, agenda
   - Rezumatul inputurilor revizuite
   - Constatările cheie și tendințele
   - Deciziile luate
   - Elementele de acțiune (proprietar, termen)
   - Data următoarei revizuiri

   Documentează în Procesul Verbal Revizuire Management (REC-QMS-021)

4. **Urmărirea Elementelor de Acțiune**
   - Managerul Calitate urmărește elementele de acțiune din revizuire
   - Actualizări status furnizate Comitetului Guvernanță IA
   - Elementele întârziate escalate
   - Documentează în Tracker Acțiuni Revizuire Management (REC-QMS-022)

5. **Comunicarea Rezultatelor**
   - Comunică deciziile cheie și acțiunile către organizație
   - Actualizează obiectivele calitate (dacă au fost modificate)
   - Comunică alocările resurse
   - Comunică îmbunătățirile proces

   Documentează în Comunicarea Revizuire Management (REC-QMS-023)

6. **Frecvența Revizuirilor și Declanșatorii**

   **Revizuiri Programate:**
   - Revizuire management trimestrială (toată performanța SMC)
   - Revizuire cuprinzătoare anuală (include planificare strategică)

   **Revizuiri Ad-Hoc (declanșate de):**
   - Constatare audit critică
   - Incident grav
   - Constatare inspecție reglementară
   - Modificare reglementară majoră
   - Schimbare organizațională semnificativă

**Dovezi Necesare:**
- Raport Revizuire Management (RPT-QMS-012)
- Proces Verbal Revizuire Management (REC-QMS-021)
- Tracker Acțiuni Revizuire Management (REC-QMS-022)
- Comunicare Revizuire Management (REC-QMS-023)

**Durată:**
- Pregătire: 2 săptămâni înainte de întâlnire
- Întâlnire: 2-3 ore trimestrial
- Proces verbal: În termen de 1 săptămână de la întâlnire
- Urmărire elemente acțiune: Permanent

**Verificare Calitate:**
- Toate inputurile necesare revizuite
- Tendințele cheie identificate și discutate
- Deciziile documentate cu justificare
- Elementele de acțiune atribuite cu proprietari și termene
- Rezultatele comunicate către organizație

---

[CONTINUARE ÎN AL DOILEA MESAJ - FIȘIERUL ESTE PREA MARE]
