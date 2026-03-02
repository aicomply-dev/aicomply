# PROC-AI-CHG-001: Procedura de Gestionare a Modificărilor AI

**ID Procedură:** PROC-AI-CHG-001
**Nume Procedură:** Procedura de Gestionare a Modificărilor AI
**Standard:** STD-AI-009: Standard de Gestionare a Calității, STD-AI-002: Standard de Gestionare a Riscurilor
**Acoperă Controale:** QMS-004, QMS-005, RM-010, RM-011
**Data Intrării în Vigoare:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizuiri:** [De completat]
**Status Aprobare:** [Proiect/Aprobat]

---

## 1. SCOP ȘI DOMENIU DE APLICARE

### 1.1 Scop

Această procedură stabilește cerințele pentru gestionarea modificărilor aduse sistemelor AI pe parcursul ciclului lor de viață, asigurându-se că modificările nu afectează negativ conformitatea cu Regulamentul UE privind IA, performanța sistemului sau nivelurile de risc. Aceasta asigură că toate modificările sunt evaluate, aprobate, implementate și documentate corespunzător.

### 1.2 Domeniu de aplicare

Această procedură se aplică pentru:
- Toate modificările aduse sistemelor AI implementate (risc ridicat, risc limitat, risc minimal)
- Actualizări de model, reciclare și ajustare fină
- Modificări de date (date de antrenament, date de validare, date de referință)
- Modificări de algoritmi și parametri
- Modificări de infrastructură și configurare
- Modificări de integrare și interfață
- Modificări de documentație

### 1.3 Proprietar Procedură

| Rol | Nume | Funcție | Contact |
|------|------|-------|---------|
| **Proprietar Procedură** | [Nume] | Manager Modificări AI | [Email/Telefon] |
| **Autoritate Tehnică** | [Nume] | Responsabil Dezvoltare AI | [Email/Telefon] |
| **Conformitate** | [Nume] | Ofițer Conformitate AI | [Email/Telefon] |

---

## 2. ROLURI ȘI RESPONSABILITĂȚI

### 2.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|------|----------------|-----------|
| **Solicitant Modificare** | Depune cereri de modificare; furnizează justificare | Inițiază cereri de modificare |
| **Proprietar Sistem AI** | Aprobă modificări de afaceri; acceptă riscuri reziduale | Aprobă/respinge modificări pentru sistemele lor |
| **Manager Modificări** | Coordonează procesul de modificare; facilitează întâlnirile CAB | Programează modificări; escaladează probleme |
| **Consiliul Consultativ pentru Modificări (CAB)** | Revizuiește și aprobă modificări semnificative | Aprobă/amână/respinge cereri de modificare |
| **Manager Risc AI** | Evaluează impactul modificării asupra riscurilor | Blochează modificări cu riscuri inacceptabile |
| **Ofițer Conformitate** | Evaluează impactul de reglementare | Blochează modificări neconforme |
| **Responsabil Tehnic** | Evaluează fezabilitatea tehnică și impactul | Aprobă implementarea tehnică |

### 2.2 Matricea RACI

| Activitate | Solicitant | Proprietar Sistem | Manager Modif. | CAB | Manager Risc | Conformitate | Resp. Tehnic |
|----------|-----------|--------------|------------|-----|----------|------------|-----------|
| Depune cerere | A | I | R | I | I | I | I |
| Evaluare inițială | C | C | A | I | R | R | R |
| Evaluare impact risc | C | C | C | I | A | C | C |
| Evaluare conformitate | C | C | C | I | C | A | C |
| Evaluare tehnică | C | C | C | I | C | C | A |
| Aprobare modificare | I | R | C | A | R | R | R |
| Implementare | R | A | C | I | I | I | R |
| Revizuire post-implementare | R | A | R | I | R | R | R |

**Legendă:** A=Responsabil (Accountable), R=Execută (Responsible), C=Consultat, I=Informat

---

## 3. CLASIFICAREA MODIFICĂRILOR

### 3.1 Tipuri de Modificări

| Tip | Descriere | Exemple |
|------|-------------|----------|
| **Modificare Model** | Modificări ale modelului AI | Reciclare, ajustare fină, schimbare arhitectură, actualizare parametri |
| **Modificare Date** | Modificări ale datelor | Date noi de antrenament, schimbare schemă date, schimbare sursă date |
| **Modificare Algoritm** | Modificări de logică sau algoritm | Algoritm nou, modificare optimizare, inginerie caracteristici |
| **Modificare Configurare** | Setări și parametri | Praguri, hiperparametri, marcaje caracteristici |
| **Modificare Infrastructură** | Platformă sau infrastructură | Upgrade hardware, migrare cloud, scalare |
| **Modificare Integrare** | Modificări de interfață | Modificări API, integrări noi, modificări protocol |
| **Modificare Documentație** | Actualizări documentație | Documente tehnice, ghiduri utilizator, documente conformitate |

### 3.2 Categorii de Modificări

| Categorie | Criterii | Nivel Aprobare | Termen |
|----------|----------|----------------|----------|
| **Standard** | Pre-aprobată, risc scăzut, rutină | Pre-autorizată | Imediat |
| **Normală** | Impact moderat, urmează procesul | CAB | 5-10 zile lucrătoare |
| **Semnificativă** | Impact material asupra comportamentului sistemului | CAB + Proprietar Sistem + Conformitate | 10-20 zile lucrătoare |
| **Substanțială** | Poate necesita evaluare de conformitate nouă | Comitet Guvernanță AI | 20-40 zile lucrătoare |
| **Urgență** | Remediere urgentă pentru problemă critică | CAB de urgență | Imediat cu revizuire retrospectivă |

### 3.3 Criterii pentru Modificare Substanțială (Regulamentul UE privind IA)

O modificare este considerată **substanțială** dacă afectează:

| Criteriu | Descriere | Declanșator |
|----------|-------------|---------|
| **Scop Intenționat** | Schimbare în utilizarea intenționată sau domeniul de aplicare | Orice schimbare de scop |
| **Clasificare Risc** | Poate modifica nivelul de risc | Deplasare între categorii de risc |
| **Arhitectură Model** | Modificare fundamentală a structurii modelului | >30% modificare parametri, arhitectură nouă |
| **Date Antrenament** | Modificări semnificative ale datelor de antrenament | >20% modificare date, surse noi de date |
| **Performanță** | Modificări materiale ale performanței | >10% modificare acuratețe, moduri noi de eșec |
| **Impact Drepturi Fundamentale** | Modificări care afectează drepturile | Populații noi afectate, impacturi noi asupra drepturilor |

**Modificările substanțiale necesită evaluare de conformitate nouă pentru sistemele AI cu risc ridicat.**

---

## 4. PROCESUL DE GESTIONARE A MODIFICĂRILOR

### 4.1 Prezentare Generală a Procesului

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  PROCESUL DE GESTIONARE A MODIFICĂRILOR AI                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │  CERERE  │───►│ EVALUARE │───►│ APROBARE │───►│IMPLEMENTARE           │
│   │          │    │          │    │          │    │          │            │
│   └──────────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘            │
│                        │               │               │                   │
│                        ▼               ▼               ▼                   │
│                   ┌─────────┐    ┌─────────┐    ┌─────────┐               │
│                   │ Analiză │    │Revizuire│    │ Testare │               │
│                   │ Impact  │    │  CAB    │    │&Lansare │               │
│                   └─────────┘    └─────────┘    └─────────┘               │
│                                                      │                     │
│                                                      ▼                     │
│                                              ┌──────────────┐             │
│                                              │  REVIZUIRE   │             │
│                                              │  & ÎNCHIDERE │             │
│                                              └──────────────┘             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Faza 1: Cerere

**Pasul 1: Depunerea Cererii de Modificare**
1. Completați Formularul de Cerere de Modificare (FORM-AI-CHG-001)
2. Furnizați o descriere detaliată a modificării propuse
3. Documentați justificarea de afaceri
4. Identificați sistemul/sistemele AI afectate
5. Propuneți abordarea de implementare
6. Trimiteți la Managerul de Modificări

**Pasul 2: Triaj Inițial**
1. Managerul de Modificări revizuiește completitudinea cererii
2. Atribuiți ID de modificare și înregistrați în registrul modificărilor
3. Determinați categoria inițială a modificării
4. Direcționați pentru evaluare corespunzătoare
5. Notificați părțile interesate

### 4.3 Faza 2: Evaluare

**Pasul 3: Evaluarea Impactului Tehnic**
1. Responsabilul Tehnic evaluează:
   - Fezabilitatea tehnică
   - Domeniul de impact al sistemului
   - Impacturile de integrare
   - Cerințele de resurse
   - Complexitatea implementării
2. Documentați constatările în secțiunea Evaluare Impact

**Pasul 4: Evaluarea Impactului asupra Riscului**
1. Managerul de Risc AI evaluează:
   - Impactul asupra riscurilor existente
   - Riscuri noi introduse
   - Modificări ale eficacității controalelor
   - Modificări ale nivelului de risc
2. Determinați dacă este necesară re-evaluarea riscului
3. Documentați în secțiunea Impact Risc

**Pasul 5: Evaluarea Impactului asupra Conformității**
1. Ofițerul de Conformitate evaluează:
   - Impactul asupra conformității cu Regulamentul UE privind IA
   - Determinarea modificării substanțiale
   - Cerința de re-clasificare
   - Cerința de re-evaluare a conformității
   - Cerințele de actualizare a documentației
   - Cerințele de actualizare a înregistrării
2. Documentați în secțiunea Impact Conformitate

**Pasul 6: Determinarea Modificării Substanțiale**
Dacă oricare dintre următoarele este adevărat, modificarea este SUBSTANȚIALĂ:
- [ ] Scopul intenționat se modifică
- [ ] Clasificarea de risc se poate modifica
- [ ] Arhitectura modelului se modifică fundamental
- [ ] Datele de antrenament se modifică semnificativ (>20%)
- [ ] Metricile de performanță se modifică material (>10%)
- [ ] Populații noi sunt afectate
- [ ] Impacturi noi asupra drepturilor fundamentale

**Pentru modificări substanțiale ale sistemelor AI cu risc ridicat:**
- Este necesară evaluare de conformitate nouă
- Documentația tehnică trebuie actualizată
- Înregistrarea în baza de date UE trebuie actualizată
- Marcajul CE trebuie re-evaluat

### 4.4 Faza 3: Aprobare

**Pasul 7: Revizuirea Consiliului Consultativ pentru Modificări**

| Categorie Modificare | Compoziție CAB |
|-----------------|-----------------|
| Standard | Pre-aprobată, nu este necesar CAB |
| Normală | Manager Modificări, Responsabil Tehnic, Manager Risc |
| Semnificativă | CAB complet + Proprietar Sistem + Conformitate |
| Substanțială | Comitet Guvernanță AI |
| Urgență | CAB de urgență (membri de gardă) |

**Procesul de Revizuire CAB:**
1. Prezentați cererea de modificare și evaluările de impact
2. Revizuiți impacturile asupra riscului și conformității
3. Discutați abordarea de implementare
4. Luați decizia de aprobare:
   - **Aprobat** - Continuați cu implementarea
   - **Aprobat cu Condiții** - Continuați cu condițiile specificate
   - **Amânat** - Sunt necesare mai multe informații
   - **Respins** - Modificarea nu este aprobată
5. Documentați decizia și rațiunea

**Pasul 8: Documentarea Aprobării**
1. Înregistrați decizia CAB în Cererea de Modificare
2. Documentați orice condiții
3. Stabiliți programul de implementare
4. Notificați părțile interesate relevante

### 4.5 Faza 4: Implementare

**Pasul 9: Planificarea Implementării**
1. Creați un plan detaliat de implementare
2. Identificați echipa de implementare
3. Definiți procedurile de rollback
4. Programați fereastra de implementare
5. Pregătiți planul de testare

**Pasul 10: Executarea Modificării**
1. Implementați modificarea conform planului aprobat
2. Executați mai întâi în mediu controlat
3. Rulați teste de validare
4. Documentați pașii de implementare
5. Verificați criteriile de succes

**Pasul 11: Lansarea în Producție**
1. Executați lansarea în producție
2. Monitorizați pentru probleme
3. Verificați funcționalitatea sistemului
4. Confirmați metricile de performanță
5. Executați rollback dacă este necesar

### 4.6 Faza 5: Revizuire și Închidere

**Pasul 12: Revizuirea Post-Implementare**
1. Verificați că obiectivele modificării au fost atinse
2. Confirmați absența impacturilor neașteptate
3. Validați îndeplinirea cerințelor de conformitate
4. Revizuiți orice probleme întâmpinate
5. Documentați lecțiile învățate

**Pasul 13: Actualizarea Documentației**
1. Actualizați documentația tehnică
2. Actualizați evaluarea de risc (dacă este necesar)
3. Actualizați înregistrarea în baza de date UE (dacă este necesar)
4. Arhivați înregistrările modificărilor
5. Actualizați Inventarul Sistemelor AI

**Pasul 14: Închiderea Modificării**
1. Obțineți aprobarea de la Proprietarul Sistemului
2. Confirmați finalizarea tuturor activităților
3. Închideți cererea de modificare
4. Arhivați documentația

---

## 5. PROCESUL DE MODIFICARE DE URGENȚĂ

### 5.1 Criterii pentru Modificare de Urgență

Modificările de urgență sunt justificate doar pentru:
- Defecțiuni critice ale sistemului care afectează sănătatea/siguranța
- Incidente de securitate active
- Urgențe de conformitate de reglementare
- Impact critic asupra afacerii

### 5.2 Procesul de Urgență

1. **Acțiuni Imediate**
   - Notificați membrii CAB de urgență
   - Documentați justificarea urgenței
   - Obțineți aprobare verbală de la Proprietarul Sistemului AI

2. **Evaluare Expediată**
   - Evaluare rapidă a riscului
   - Verificare minimă de conformitate
   - Confirmare a fezabilității tehnice

3. **Implementare**
   - Implementați cu resursele disponibile
   - Monitorizare continuă
   - Documentați toate acțiunile întreprinse

4. **Revizuire Retrospectivă** (în termen de 5 zile lucrătoare)
   - Completați documentația completă a modificării
   - Efectuați evaluări de impact corespunzătoare
   - Revizuire completă CAB
   - Actualizați toată documentația
   - Lecții învățate

---

## 6. CONTROLUL MODIFICĂRILOR PENTRU SISTEMELE AI CU RISC RIDICAT

### 6.1 Cerințe Suplimentare

Pentru sistemele AI cu risc ridicat, se aplică controale suplimentare:

| Cerință | Descriere |
|-------------|-------------|
| **Re-evaluare Conformitate** | Modificările substanțiale necesită evaluare de conformitate nouă |
| **Actualizare Documentație** | Documentația tehnică (Anexa IV) trebuie actualizată |
| **Actualizare Înregistrare** | Baza de date UE trebuie actualizată în termen de 3 luni |
| **Notificare** | Organismul notificat trebuie informat (dacă CA terță parte) |
| **Re-evaluare Risc** | Evaluare completă a riscului necesară pentru modificări semnificative |

### 6.2 Procesul pentru Modificări Substanțiale

```
┌─────────────────────────────────────────────────────────────────────────────┐
│           PROCESUL PENTRU MODIFICĂRI SUBSTANȚIALE (AI RISC RIDICAT)         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Proces Standard de Modificare                                              │
│         │                                                                   │
│         ▼                                                                   │
│  ┌──────────────┐                                                          │
│  │ Modificare   │──► Da ────┐                                              │
│  │Substanțială? │           │                                              │
│  └──────────────┘           ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Evaluare    │                                      │
│         Nu           │   Risc Nouă  │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │ Actualizare  │                                      │
│         │            │  Doc. Tehn.  │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Evaluare    │                                      │
│         │            │ Conformitate │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │ Actualizare  │                                      │
│         │            │  Bază Date   │                                      │
│         │            │     UE       │                                      │
│         │            └──────┬───────┘                                      │
│         │                   │                                              │
│         └────────────┬──────┘                                              │
│                      ▼                                                     │
│               ┌──────────────┐                                             │
│               │   Continuă   │                                             │
│               │Implementarea │                                             │
│               └──────────────┘                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. CERINȚE SPECIFICE PENTRU MODIFICĂRI DE MODEL

### 7.1 Modificări de Reciclare Model

| Aspect | Cerință |
|--------|-------------|
| **Validare Date** | Verificați că noile date de antrenament îndeplinesc cerințele de guvernanță |
| **Evaluare Prejudecăți** | Re-rulați testarea prejudecăților pe noul model |
| **Testare Performanță** | Comparați performanța cu linia de bază |
| **Testare Validare** | Validare completă pe setul de testare separat |
| **Documentație** | Actualizați documentația modelului |

### 7.2 Controlul Versiunilor Modelului

1. Toate versiunile modelului trebuie stocate și trasabile
2. Versiunile datelor de antrenament trebuie legate de versiunile modelului
3. Linia de descendență a modelului trebuie documentată
4. Capacitatea de rollback trebuie menținută
5. Testarea A/B poate fi necesară pentru modificări semnificative

---

## 8. ÎNREGISTRĂRI ȘI DOCUMENTAȚIE

### 8.1 Înregistrări Necesare

| ID Înregistrare | Nume Înregistrare | Perioadă Păstrare | Proprietar |
|-----------|-------------|------------------|-------|
| REC-AI-CHG-001 | Înregistrări Cereri Modificare | 10 ani | Manager Modificări |
| REC-AI-CHG-002 | Minute Întâlniri CAB | 10 ani | Manager Modificări |
| REC-AI-CHG-003 | Înregistrări Evaluare Impact | 10 ani | Manager Modificări |
| REC-AI-CHG-004 | Înregistrări Implementare | 10 ani | Responsabil Tehnic |
| REC-AI-CHG-005 | Revizuiri Post-Implementare | 10 ani | Manager Modificări |

### 8.2 Formulare Necesare

| ID Formular | Nume Formular | Scop |
|---------|-----------|---------|
| FORM-AI-CHG-001 | Formular Cerere Modificare | Depunerea cererilor de modificare |
| FORM-AI-CHG-002 | Formular Modificare Urgență | Modificări de urgență |
| FORM-AI-CHG-003 | Înregistrare Decizie CAB | Documentarea deciziilor CAB |

---

## 9. DOCUMENTE ASOCIATE

### 9.1 Standarde
- STD-AI-002: Standard de Gestionare a Riscurilor AI
- STD-AI-009: Standard de Gestionare a Calității
- STD-AI-010: Standard de Evaluare a Conformității

### 9.2 Proceduri
- PROC-AI-DEV-001: Procedura Ciclului de Viață al Dezvoltării AI
- PROC-AI-RM-001: Procedura de Gestionare a Riscurilor
- PROC-AI-CA-001: Procedura de Evaluare a Conformității
- PROC-AI-DOC-001: Procedura de Documentație Tehnică
- PROC-AI-REG-001: Procedura de Înregistrare

---

## 10. ISTORICUL REVIZUIRILOR

| Versiune | Data | Autor | Modificări |
|---------|------|--------|---------|
| 1.0 | [Data] | [Autor] | Lansare inițială |

---

## ANEXA A: FORMULAR CERERE MODIFICARE (FORM-AI-CHG-001)

### Secțiunea 1: Informații Cerere

| Câmp | Completare |
|-------|-------|
| **ID Modificare** | CHG-AI-[YYYY]-[####] |
| **Data Cererii** | |
| **Nume Solicitant** | |
| **Contact Solicitant** | |
| **Nume Sistem AI** | |
| **ID Sistem AI** | |

### Secțiunea 2: Descriere Modificare

| Câmp | Completare |
|-------|-------|
| **Titlu Modificare** | |
| **Tip Modificare** | [ ] Model [ ] Date [ ] Algoritm [ ] Config [ ] Infrastructură [ ] Integrare [ ] Documentație |
| **Descriere Modificare** | |
| **Justificare Afaceri** | |
| **Data Propusă Implementare** | |

### Secțiunea 3: Rezumat Evaluare Impact

| Zonă | Nivel Impact | Descriere |
|------|--------------|-------------|
| Tehnic | [ ] Ridicat [ ] Mediu [ ] Scăzut [ ] Absent | |
| Risc | [ ] Ridicat [ ] Mediu [ ] Scăzut [ ] Absent | |
| Conformitate | [ ] Ridicat [ ] Mediu [ ] Scăzut [ ] Absent | |
| Performanță | [ ] Ridicat [ ] Mediu [ ] Scăzut [ ] Absent | |

### Secțiunea 4: Evaluare Modificare Substanțială

| Criteriu | Da | Nu |
|-----------|-----|-----|
| Modifică aceasta scopul intenționat? | [ ] | [ ] |
| Modifică aceasta clasificarea de risc? | [ ] | [ ] |
| Este aceasta o modificare fundamentală a arhitecturii modelului? | [ ] | [ ] |
| Se modifică datele de antrenament >20%? | [ ] | [ ] |
| Se modifică metricile de performanță >10%? | [ ] | [ ] |
| Sunt afectate populații noi? | [ ] | [ ] |
| Există impacturi noi asupra drepturilor fundamentale? | [ ] | [ ] |

**Determinare Modificare Substanțială:** [ ] Da [ ] Nu

### Secțiunea 5: Aprobare

| Rol | Nume | Decizie | Semnătură | Data |
|------|------|----------|-----------|------|
| Proprietar Sistem | | [ ] Aprobă [ ] Respinge | | |
| Responsabil Tehnic | | [ ] Aprobă [ ] Respinge | | |
| Manager Risc | | [ ] Aprobă [ ] Respinge | | |
| Ofițer Conformitate | | [ ] Aprobă [ ] Respinge | | |
| Decizie CAB | | [ ] Aprobă [ ] Respinge [ ] Amână | | |

### Secțiunea 6: Implementare

| Câmp | Completare |
|-------|-------|
| **Data Implementării** | |
| **Implementat De** | |
| **Note Implementare** | |
| **Rollback Executat?** | [ ] Da [ ] Nu |

### Secțiunea 7: Închidere

| Câmp | Completare |
|-------|-------|
| **Modificare Reușită?** | [ ] Da [ ] Nu |
| **Documentație Actualizată?** | [ ] Da [ ] Nu [ ] N/A |
| **Data Închiderii** | |
| **Închis De** | |
