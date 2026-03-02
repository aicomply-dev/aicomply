# PROC-AI-CAPA-001: Procedură pentru Acțiuni Corective și Preventive

**ID Procedură:** PROC-AI-CAPA-001
**Denumire Procedură:** Procedură pentru Acțiuni Corective și Preventive (CAPA)
**Standard:** STD-AI-009: Standard pentru Managementul Calității, STD-AI-013: Standard pentru Managementul Incidentelor
**Acoperă Controale:** QMS-006, QMS-007, QMS-008, INC-005, INC-006
**Data Intrării în Vigoare:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizuiri:** [De completat]
**Stare Aprobare:** [Proiect/Aprobat]

---

## 1. SCOP ȘI DOMENIU DE APLICARE

### 1.1 Scop

Această procedură stabilește procesul pentru identificarea, documentarea, implementarea și verificarea acțiunilor corective și preventive (CAPA) pentru sistemele IA. Asigură că problemele sunt abordate sistematic la cauza lor fundamentală și că se implementează măsuri pentru a preveni recurența sau apariția unor probleme similare.

### 1.2 Domeniu de Aplicare

Această procedură se aplică pentru:
- Neconformități identificate în sistemele IA
- Incidente și situații aproape-incidente care implică sisteme IA
- Constatări de audit legate de conformitatea IA
- Reclamații ale clienților legate de performanța sistemelor IA
- Eșecuri ale controalelor de risc
- Abateri de performanță
- Observații de reglementare

### 1.3 Definiții

| Termen | Definiție |
|--------|-----------|
| **Acțiune Corectivă** | Acțiune pentru eliminarea cauzei unei neconformități detectate sau a unei alte situații nedorite pentru a preveni recurența |
| **Acțiune Preventivă** | Acțiune pentru eliminarea cauzei unei potențiale neconformități sau a unei alte situații potențial nedorite pentru a preveni apariția |
| **Neconformitate** | Neîndeplinirea unei cerințe |
| **Cauză Fundamentală** | Motivul de bază pentru apariția unei probleme |
| **Verificare Eficacitate** | Confirmarea că CAPA a atins rezultatele intenționate |

### 1.4 Proprietar Procedură

| Rol | Nume | Funcție | Contact |
|-----|------|---------|---------|
| **Proprietar Procedură** | [Nume] | Manager Calitate | [Email/Telefon] |
| **Autoritate Tehnică** | [Nume] | Lider Dezvoltare IA | [Email/Telefon] |
| **Conformitate** | [Nume] | Responsabil Conformitate IA | [Email/Telefon] |

---

## 2. ROLURI ȘI RESPONSABILITĂȚI

### 2.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|-----|------------------|------------|
| **Inițiator CAPA** | Identificarea și raportarea problemelor; inițierea CAPA | Trimiterea cererilor CAPA |
| **Proprietar CAPA** | Deținerea CAPA; asigurarea finalizării | Alocarea resurselor; aprobarea închiderii |
| **Manager Calitate** | Supravegherea procesului CAPA; asigurarea eficacității | Aprobarea CAPA; respingerea acțiunilor inadecvate |
| **Investigator Cauză Fundamentală** | Efectuarea analizei cauzei fundamentale | Determinarea cauzei fundamentale |
| **Implementator Acțiuni** | Implementarea acțiunilor corective/preventive | Executarea acțiunilor alocate |
| **Responsabil Verificare** | Verificarea eficacității acțiunilor | Aprobarea sau solicitarea de acțiuni suplimentare |
| **Proprietar Sistem IA** | Aprobarea CAPA pentru sistemele lor | Acceptarea riscului rezidual |

### 2.2 Matricea RACI

| Activitate | Inițiator | Proprietar CAPA | Mgr. Calitate | Investigator | Implementator | Verificator |
|------------|-----------|-----------------|---------------|--------------|---------------|-------------|
| Identificare problemă | A | I | I | I | I | I |
| Inițiere CAPA | R | A | C | I | I | I |
| Analiză cauză fundamentală | C | A | C | R | I | I |
| Definire acțiuni | C | A | C | C | R | I |
| Aprobare plan CAPA | I | R | A | I | I | I |
| Implementare acțiuni | I | A | I | C | R | I |
| Verificare eficacitate | I | C | C | I | I | A |
| Închidere CAPA | I | R | A | I | I | C |

**Legendă:** A=Responsabil Final, R=Responsabil, C=Consultat, I=Informat

---

## 3. PREZENTARE GENERALĂ PROCES CAPA

### 3.1 Fluxul Procesului

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FLUXUL PROCESULUI CAPA                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │IDENTIFICĂ│───►│ INIȚIAZĂ │───►│INVESTIGHEAZĂ───►│PLANIFICĂ │            │
│   │ PROBLEMĂ │    │   CAPA   │    │CAUZĂ FUND.│    │ ACȚIUNI  │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│                                                         │                   │
│                                                         ▼                   │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │  ÎNCHIDE │◄───│ VERIFICĂ │◄───│IMPLEMENTEAZĂ◄───│  APROBĂ  │            │
│   │   CAPA   │    │EFICACITATE│    │ ACȚIUNI  │    │   PLAN   │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                    LECȚII ÎNVĂȚATE ȘI ÎMBUNĂTĂȚIRE                  │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Categorii CAPA

| Categorie | Descriere | Prioritate | Țintă Închidere |
|-----------|-----------|------------|-----------------|
| **Critică** | Impact asupra vieții/siguranței, neconformitate majoră de reglementare, încălcare drepturi fundamentale | Imediată | 30 zile |
| **Majoră** | Problemă semnificativă de conformitate, abatere majoră de performanță, probleme repetate | Ridicată | 60 zile |
| **Minoră** | Impact limitat, problemă izolată, lacună documentație | Normală | 90 zile |
| **Îmbunătățire** | Îmbunătățire proactivă, oportunitate de optimizare | Scăzută | 120 zile |

---

## 4. PROCEDURI CAPA DETALIATE

### 4.1 Faza 1: Identificare

#### 4.1.1 Surse CAPA

CAPA pot fi inițiate din:

| Sursă | Exemple |
|-------|---------|
| **Incidente** | Disfuncționalități sistem IA, erori, eșecuri |
| **Audituri** | Audituri interne, audituri externe, inspecții de reglementare |
| **Evaluări de Risc** | Riscuri identificate, eșecuri ale controalelor |
| **Reclamații** | Reclamații clienți, feedback utilizatori |
| **Neconformități** | Abateri de la cerințe, specificații |
| **Monitorizare Post-Piață** | Tendințe de performanță, probleme din teren |
| **Aproape-Incidente** | Incidente potențiale care au fost evitate |
| **Analiză de Management** | Oportunități de îmbunătățire identificate |

#### 4.1.2 Documentarea Problemei

Pentru fiecare problemă identificată, documentați:
1. Descrierea problemei
2. Când și cum a fost descoperită
3. Cine a raportat-o
4. Evaluarea impactului (real și potențial)
5. Acțiuni de izolare imediată luate
6. Dovezi colectate

### 4.2 Faza 2: Inițiere

**Pasul 1: Crearea Înregistrării CAPA**
1. Completarea Formularului de Cerere CAPA (FORM-AI-CAPA-001)
2. Atribuirea ID CAPA
3. Determinarea categoriei CAPA (Critică/Majoră/Minoră/Îmbunătățire)
4. Atribuirea Proprietarului CAPA
5. Stabilirea datei țintă de finalizare

**Pasul 2: Izolare Imediată**
1. Evaluarea necesității de izolare imediată
2. Implementarea acțiunilor de izolare pentru limitarea impactului
3. Documentarea acțiunilor de izolare
4. Verificarea eficacității izolării
5. Comunicarea către părțile interesate afectate

**Pasul 3: Evaluarea Impactului**
1. Evaluarea impactului asupra:
   - Sănătății și siguranței
   - Drepturilor fundamentale
   - Stării de conformitate
   - Performanței sistemului
   - Altor sisteme IA
2. Determinarea dacă este necesară notificarea autorităților de reglementare
3. Escaladarea dacă este Critică sau Majoră

### 4.3 Faza 3: Investigare

**Pasul 4: Analiza Cauzei Fundamentale**

Selectați metoda de analiză adecvată pe baza complexității:

| Metodă | Când se Utilizează | Descriere |
|--------|-------------------|-----------|
| **5 De Ce** | Probleme simple | Întrebați "de ce" repetat până la găsirea cauzei fundamentale |
| **Diagrama Fishbone (Ishikawa)** | Cauze potențiale multiple | Categorizați cauzele (Oameni, Proces, Tehnologie, Date, Mediu) |
| **Analiza Arborelui de Defecte** | Complexe, critice pentru siguranță | Analiză deductivă sistematică |
| **Analiza Modurilor de Defectare** | Defecțiuni tehnice | Analizați modurile și efectele defecțiunilor |

**Categorii de Cauze Fundamentale pentru Sistemele IA:**

| Categorie | Exemple |
|-----------|---------|
| **Date** | Calitatea datelor, bias în date, deriva datelor, erori de etichetare |
| **Model** | Arhitectura modelului, antrenare, supraajustare, subajustare |
| **Algoritm** | Erori de logică, cazuri limită, probleme de optimizare |
| **Proces** | Proceduri inadecvate, proces nerespecttat |
| **Oameni** | Lacune de instruire, competență, eroare umană |
| **Tehnologie** | Infrastructură, integrare, dependențe |
| **Mediu** | Condiții de operare, schimbări de context |

**Pasul 5: Documentarea Cauzei Fundamentale**
1. Documentarea metodologiei de investigare
2. Înregistrarea dovezilor analizate
3. Declararea clară a cauzei(lor) fundamentale
4. Distingerea cauzei fundamentale de factorii contribuitori
5. Obținerea acordului de la părțile interesate

### 4.4 Faza 4: Planificarea Acțiunilor

**Pasul 6: Definirea Acțiunilor Corective**
1. Pentru fiecare cauză fundamentală, definiți acțiuni pentru eliminarea acesteia
2. Asigurați-vă că acțiunile abordează cauza fundamentală, nu simptomele
3. Luați în considerare implicațiile sistemice
4. Atribuiți proprietar acțiune și dată scadentă
5. Definiți criteriile de succes

**Pasul 7: Definirea Acțiunilor Preventive**
1. Identificați scenariile potențiale de recurență
2. Identificați sisteme/procese similare în risc
3. Definiți acțiuni pentru prevenirea apariției în altă parte
4. Extindeți acțiunile orizontal unde este aplicabil

**Pasul 8: Analiza Risc-Beneficiu**
1. Evaluați reducerea riscului din acțiunile propuse
2. Evaluați costul și efortul necesar
3. Evaluați consecințele neintenționate potențiale
4. Prioritizați acțiunile pe baza analizei

**Pasul 9: Crearea Planului de Acțiuni**
Documentați pentru fiecare acțiune:
- Descrierea acțiunii
- Tipul acțiunii (Corectivă/Preventivă)
- Proprietar
- Data scadentă
- Resurse necesare
- Criteriile de succes
- Metoda de verificare

### 4.5 Faza 5: Aprobare

**Pasul 10: Revizuirea Planului CAPA**
1. Managerul de Calitate revizuiește planul CAPA
2. Verifică dacă cauza fundamentală este abordată adecvat
3. Verifică dacă acțiunile sunt adecvate și suficiente
4. Verifică dacă termenele sunt realiste
5. Aprobă sau returnează pentru revizuire

**Pasul 11: Aprobarea Părților Interesate**
În funcție de categoria CAPA:

| Categorie | Aprobare Necesară |
|-----------|-------------------|
| Critică | Manager Calitate + Proprietar Sistem IA + Conformitate + Comitet de Guvernanță IA |
| Majoră | Manager Calitate + Proprietar Sistem IA |
| Minoră | Manager Calitate |
| Îmbunătățire | Proprietar CAPA |

### 4.6 Faza 6: Implementare

**Pasul 12: Executarea Acțiunilor**
1. Implementați acțiunile conform planului aprobat
2. Documentați activitățile de implementare
3. Urmăriți progresul față de repere
4. Escaladați întârzierile sau blocajele
5. Colectați dovezi de implementare

**Pasul 13: Actualizarea Documentației**
1. Actualizați procedurile după cum este necesar
2. Actualizați documentația tehnică
3. Actualizați materialele de instruire
4. Actualizați evaluările de risc
5. Comunicați modificările părților interesate

### 4.7 Faza 7: Verificare

**Pasul 14: Verificarea Implementării**
1. Confirmați că toate acțiunile sunt finalizate
2. Revizuiți dovezile de implementare
3. Verificați că documentația este actualizată

**Pasul 15: Verificarea Eficacității**
1. Definiți metoda de verificare:
   - Testare/validare
   - Audit
   - Revizuirea datelor de monitorizare
   - Observarea procesului
2. Executați verificarea după o perioadă adecvată
3. Comparați cu criteriile de succes
4. Documentați rezultatele verificării

**Pasul 16: Determinarea Eficacității**

| Rezultat | Acțiune |
|----------|---------|
| **Eficace** | Procedați la închidere |
| **Parțial Eficace** | Implementați acțiuni suplimentare |
| **Ineficace** | Re-investigați; poate fi necesar un nou CAPA |

### 4.8 Faza 8: Închidere

**Pasul 17: Închiderea CAPA**
1. Compilați toată documentația CAPA
2. Obțineți aprobările de închidere
3. Documentați lecțiile învățate
4. Închideți înregistrarea CAPA
5. Arhivați documentația

**Pasul 18: Lecții Învățate**
1. Documentați învățămintele cheie
2. Partajați cu echipele relevante
3. Actualizați instruirea dacă este aplicabil
4. Luați în considerare îmbunătățirile de proces
5. Input pentru analiza de management

---

## 5. NOTIFICARE AUTORITĂȚI DE REGLEMENTARE

### 5.1 Declanșatoare de Notificare

Notificarea autorităților de reglementare poate fi necesară dacă CAPA se referă la:
- Incident grav conform Regulamentului UE privind IA
- Eșec de conformitate pentru IA cu risc ridicat
- Încălcare a drepturilor fundamentale
- Problemă de siguranță

### 5.2 Procesul de Notificare

1. Evaluați cerința de notificare cu Responsabilul de Conformitate
2. Urmați PROC-AI-INC-001 pentru incidente grave
3. Documentați notificarea și răspunsul autorității
4. Includeți feedback-ul de reglementare în CAPA

---

## 6. MONITORIZARE ȘI METRICI

### 6.1 Metrici CAPA

| Metrică | Descriere | Țintă |
|---------|-----------|-------|
| Vechime CAPA | CAPA deschise peste data țintă | <10% |
| Eficacitate CAPA | CAPA verificate ca eficace | >90% |
| Recurență CAPA | Aceeași problemă recurge în 12 luni | <5% |
| Timp de Ciclu CAPA | Zile medii de la inițiere la închidere | <60 zile |
| Calitate Cauză Fundamentală | CAPA care abordează cauza fundamentală vs. simptome | >95% |

### 6.2 Raportare

| Raport | Frecvență | Audiență |
|--------|-----------|----------|
| Raport Stare CAPA | Lunar | Comitet de Guvernanță IA |
| Analiză Tendințe CAPA | Trimestrial | Analiză de Management |
| Sumar Eficacitate CAPA | Anual | Echipa Executivă |

---

## 7. ÎNREGISTRĂRI

### 7.1 Înregistrări Necesare

| ID Înregistrare | Denumire Înregistrare | Perioadă Păstrare | Proprietar |
|-----------------|----------------------|-------------------|------------|
| REC-AI-CAPA-001 | Înregistrări CAPA | 10 ani | Manager Calitate |
| REC-AI-CAPA-002 | Înregistrări Analiză Cauză Fundamentală | 10 ani | Manager Calitate |
| REC-AI-CAPA-003 | Înregistrări Verificare | 10 ani | Manager Calitate |
| REC-AI-CAPA-004 | Înregistrări Lecții Învățate | 10 ani | Manager Calitate |

### 7.2 Formulare Necesare

| ID Formular | Denumire Formular | Scop |
|-------------|-------------------|------|
| FORM-AI-CAPA-001 | Formular Cerere CAPA | Inițierea CAPA |
| FORM-AI-CAPA-002 | Formular Analiză Cauză Fundamentală | Documentarea RCA |
| FORM-AI-CAPA-003 | Formular Verificare Eficacitate | Verificarea eficacității CAPA |

---

## 8. DOCUMENTE CONEXE

### 8.1 Standarde
- STD-AI-009: Standard pentru Managementul Calității
- STD-AI-013: Standard pentru Managementul Incidentelor

### 8.2 Proceduri
- PROC-AI-INC-001: Procedură de Gestionare a Incidentelor
- PROC-AI-CHG-001: Procedură de Gestionare a Modificărilor
- PROC-AI-QMS-001: Procedură pentru Sistemul de Management al Calității
- PROC-AI-RM-001: Procedură de Gestionare a Riscurilor

---

## 9. ISTORICUL REVIZUIRILOR

| Versiune | Data | Autor | Modificări |
|----------|------|-------|------------|
| 1.0 | [Data] | [Autor] | Versiune inițială |

---

## ANEXA A: FORMULAR CERERE CAPA (FORM-AI-CAPA-001)

### Secțiunea 1: Identificare CAPA

| Câmp | Înregistrare |
|------|--------------|
| **ID CAPA** | CAPA-AI-[AAAA]-[####] |
| **Data Inițierii** | |
| **Nume Inițiator** | |
| **Categorie CAPA** | [ ] Critică [ ] Majoră [ ] Minoră [ ] Îmbunătățire |
| **Data Țintă Închidere** | |

### Secțiunea 2: Detalii Problemă

| Câmp | Înregistrare |
|------|--------------|
| **Denumire Sistem IA** | |
| **ID Sistem IA** | |
| **Sursa Problemei** | [ ] Incident [ ] Audit [ ] Reclamație [ ] Risc [ ] PMM [ ] Altele: |
| **Referință Sursă** | |
| **Descriere Problemă** | |
| **Data Descoperirii** | |
| **Evaluare Impact** | |

### Secțiunea 3: Acțiuni de Izolare

| # | Acțiune de Izolare | Proprietar | Data | Stare |
|---|-------------------|------------|------|-------|
| 1 | | | | [ ] Finalizată [ ] În Progres |
| 2 | | | | [ ] Finalizată [ ] În Progres |

### Secțiunea 4: Analiza Cauzei Fundamentale

| Câmp | Înregistrare |
|------|--------------|
| **Metoda de Analiză** | [ ] 5 De Ce [ ] Fishbone [ ] Arbore Defecte [ ] Altele: |
| **Cauza(e) Fundamentală(e)** | |
| **Factori Contribuitori** | |
| **Dovezi Revizuite** | |

### Secțiunea 5: Acțiuni Corective

| # | Acțiune | Tip | Proprietar | Data Scadentă | Stare |
|---|---------|-----|------------|---------------|-------|
| 1 | | [ ] C [ ] P | | | [ ] Deschisă [ ] Finalizată |
| 2 | | [ ] C [ ] P | | | [ ] Deschisă [ ] Finalizată |
| 3 | | [ ] C [ ] P | | | [ ] Deschisă [ ] Finalizată |

(C=Corectivă, P=Preventivă)

### Secțiunea 6: Verificare

| Câmp | Înregistrare |
|------|--------------|
| **Metoda de Verificare** | |
| **Data Verificării** | |
| **Verificat De** | |
| **Rezultat Eficacitate** | [ ] Eficace [ ] Parțial Eficace [ ] Ineficace |
| **Dovezi Verificare** | |

### Secțiunea 7: Aprobări

| Rol | Nume | Semnătură | Data |
|-----|------|-----------|------|
| **Proprietar CAPA** | | | |
| **Manager Calitate** | | | |
| **Proprietar Sistem IA** (dacă este necesar) | | | |

### Secțiunea 8: Închidere

| Câmp | Înregistrare |
|------|--------------|
| **Data Închiderii** | |
| **Închis De** | |
| **Lecții Învățate** | |
