# PROC-AI-PMM-001: Procedură de Monitorizare Post-Piață

**ID Procedură:** PROC-AI-PMM-001
**Nume Procedură:** Procedură de Monitorizare Post-Piață
**Standard:** STD-AI-012: Standard de Monitorizare Post-Piață
**Articol Regulament IA UE:** Articolul 72 (Monitorizarea Post-Piață de către Furnizori)
**Acoperă Controalele:** PMM-001, PMM-002, PMM-003, PMM-004, PMM-005
**Data Efectivă:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizii:** [De completat]
**Statut Aprobare:** [Ciornă/Aprobat]

---

## CUPRINS

1. [Scop și Domeniu de Aplicare](#1-scop-și-domeniu-de-aplicare)
2. [Definiții](#2-definiții)
3. [Bază Reglementară](#3-bază-reglementară)
4. [Roluri și Responsabilități](#4-roluri-și-responsabilități)
5. [Cadrul de Monitorizare Post-Piață](#5-cadrul-de-monitorizare-post-piață)
6. [Procedură Pas cu Pas](#6-procedură-pas-cu-pas)
   - Faza 1: Dezvoltarea Planului de Monitorizare Post-Piață
   - Faza 2: Colectarea și Analiza Datelor
   - Faza 3: Evaluarea Performanței
   - Faza 4: Acțiuni Corective
   - Faza 5: Raportare și Comunicare
   - Faza 6: Îmbunătățire Continuă
7. [Mecanisme de Control](#7-mecanisme-de-control)
8. [ICP și Valori Măsurate](#8-icp-și-valori-măsurate)
9. [Cerințe de Documentare](#9-cerințe-de-documentare)
10. [Revizuire și Audit](#10-revizuire-și-audit)
11. [Gestionarea Non-Conformității](#11-gestionarea-non-conformității)
12. [Documente Conexe](#12-documente-conexe)
13. [Anexe](#13-anexe)
14. [Istoric Revizii](#14-istoric-revizii)
15. [Aprobare și Autorizare](#15-aprobare-și-autorizare)

---

## 1. SCOP ȘI DOMENIU DE APLICARE

### 1.1 Scop

Această procedură stabilește un sistem cuprinzător, sistematic și proporțional de monitorizare post-piață pentru sistemele de IA cu risc ridicat, pentru a colecta, documenta și analiza activ și continuu datele privind performanța sistemelor de IA pe parcursul ciclului lor de viață operațional, în conformitate cu Articolul 72 al Regulamentului IA UE.

Sistemul de monitorizare post-piață asigură:
- Verificarea continuă a conformității sistemului de IA cu cerințele Regulamentului IA UE
- Detectarea timpurie a degradării performanței, derivei părtinitorii și problemelor de securitate
- Identificarea proactivă a riscurilor previzibile în mod rezonabil care nu au fost identificate în timpul evaluării pre-desfășurare
- Integrarea cu sistemele de gestionare a riscurilor, gestionare a calității și raportare a incidentelor
- Îmbunătățirea continuă bazată pe dovezi a sistemelor de IA

### 1.2 Domeniu de Aplicare

Această procedură se aplică la:

**În Domeniul de Aplicare:**
- Toate sistemele de IA cu risc ridicat plasate pe piață sau puse în funcțiune (conform clasificării Anexei III)
- Toate sistemele de IA supuse evaluării conformității conform Articolului 43
- Toate sistemele de IA implementate în medii de producție care deservesc utilizatori finali
- Toate sistemele de IA care procesează date cu caracter personal sau iau decizii care afectează drepturi fundamentale
- Toate sistemele de IA care au finalizat faza de implementare (post Faza 5 în ciclul de viață)

**În Afara Domeniului de Aplicare:**
- Sisteme de IA în faze de dezvoltare sau testare (acoperite de PROC-AI-DEV-001)
- Sisteme de IA încă neimplementate în producție
- Sisteme de IA cu risc minim (cu excepția cazului în care organizația aplică voluntar monitorizarea)
- Sisteme de IA operate doar de către operatori (obligații ale operatorilor conform Articolului 26)
- Prototipuri de cercetare și dezvoltare care nu sunt destinate plasării pe piață

### 1.3 Proprietar al Procedurii și Contacte

| Rol | Nume | Titlu | Contact |
|------|------|-------|---------|
| **Proprietar Procedură** | [Nume] | Manager Monitorizare Post-Piață IA | [Email/Telefon] |
| **Escaladare** | [Nume] | Director Executiv Produse | [Email/Telefon] |
| **Guvernanță** | [Nume] | Președinte Comitet de Guvernanță IA | [Email/Telefon] |
| **Integrare Calitate** | [Nume] | Manager SMC | [Email/Telefon] |
| **Integrare Gestionare Riscuri** | [Nume] | Manager Riscuri IA | [Email/Telefon] |

---

## 2. DEFINIȚII

| Termen | Definiție |
|------|------------|
| **Monitorizare Post-Piață (PMM)** | Toate activitățile desfășurate de către furnizori pentru a colecta și examina în mod proactiv experiența acumulată din utilizarea sistemelor de IA pe care le plasează pe piață sau le pun în funcțiune, în scopul identificării oricărei nevoi de a aplica imediat acțiuni corective sau preventive necesare (Regulament IA UE Articolul 72) |
| **Plan de Monitorizare Post-Piață (PMMP)** | Un plan documentat care descrie strategia, metodele și procedurile pentru colectarea, înregistrarea și analiza activă și sistematică a datelor relevante privind calitatea și performanța unui sistem de IA pe parcursul duratei sale de viață |
| **Sistem de Monitorizare Post-Piață** | Structura organizațională, procedurile, procesele și resursele pentru colectarea, înregistrarea și analiza datelor privind performanța sistemului de IA în uz operațional |
| **Date de Performanță** | Date cantitative și calitative despre acuratețea, fiabilitatea, robustețea, securitatea și alte caracteristici operaționale ale sistemului de IA în timpul utilizării în producție |
| **Feedback** | Informații primite de la operatori, utilizatori, persoane afectate sau alte părți interesate privind performanța sistemului de IA, incidente sau preocupări |
| **Derivă a Părtinitorii** | Fenomenul prin care caracteristicile de echitate ale unui sistem de IA se modifică în timp din cauza schimbărilor în distribuțiile datelor de intrare, comportamentul utilizatorilor sau contextul operațional |
| **Degradarea Performanței** | Scădere măsurabilă a acurateței, precizie, rechemare sau alte valori de performanță ale sistemului de IA comparativ cu nivelurile de performanță de bază sau intenționate |
| **Acțiune Corectivă** | Acțiune întreprinsă pentru a elimina cauza unei neconformități detectate sau a altei situații nedorite (ISO 9000:2015) |
| **Acțiune Preventivă** | Acțiune întreprinsă pentru a elimina cauza unei neconformități potențiale sau a altei situații potențial nedorite (ISO 9000:2015) |
| **Incident Grav** | Orice incident sau defecțiune a unui sistem de IA care conduce direct sau indirect la deces, vătămare gravă a sănătății, perturbări grave și ireversibile ale infrastructurii critice sau încălcare gravă a drepturilor fundamentale (Regulament IA UE Articolul 3(49)) |
| **Autoritate de Supraveghere a Pieței** | Autoritate națională competentă desemnată să desfășoare activități de supraveghere a pieței pe teritoriul său (Regulament IA UE Articolul 74) |
| **Operator** | Orice persoană fizică sau juridică, autoritate publică, agenție sau alt organism care utilizează un sistem de IA sub autoritatea sa (Regulament IA UE Articolul 3(4)) |
| **Furnizor** | O persoană fizică sau juridică, autoritate publică, agenție sau alt organism care dezvoltă un sistem de IA sau care a dezvoltat un sistem de IA și îl plasează pe piață sau îl pune în funcțiune sub propriul nume sau marcă comercială (Regulament IA UE Articolul 3(3)) |

---

## 3. BAZĂ REGLEMENTARĂ

### 3.1 Cerințe ale Regulamentului IA UE

Această procedură implementează următoarele cerințe ale Articolului 72 al Regulamentului IA UE:

#### 3.1.1 Obligații Principale (Articolul 72(1))

**Cerință:** Furnizorii trebuie să stabilească și să documenteze un sistem de monitorizare post-piață adecvat naturii și riscurilor sistemului de IA cu risc ridicat.

**Implementare:** Secțiunile 5 și 6 stabilesc cadrul sistemului PMM cu monitorizare proporțională bazată pe clasificarea riscurilor.

#### 3.1.2 Colectare Activă de Date (Articolul 72(2))

**Cerință:** Sistemul de monitorizare post-piață trebuie să colecteze, să documenteze și să analizeze activ și sistematic datele relevante furnizate de operatori sau colectate din alte surse privind performanța sistemelor de IA cu risc ridicat pe parcursul duratei lor de viață.

**Implementare:** Faza 2 (Colectarea și Analiza Datelor) stabilește mecanisme de colectare activă și proceduri sistematice de analiză.

#### 3.1.3 Proporționalitate (Articolul 72(3))

**Cerință:** Sistemul de monitorizare post-piață trebuie să fie proporțional cu natura tehnologiilor IA și riscurile sistemului de IA cu risc ridicat.

**Implementare:** Secțiunea 5.2 definește intensitatea monitorizării bazate pe risc cu frecvențe și profunzimi diferite în funcție de clasificarea riscurilor.

#### 3.1.4 Plan de Monitorizare Post-Piață (Articolul 72(4))

**Cerință:** Sistemul de monitorizare post-piață trebuie să se bazeze pe un plan de monitorizare post-piață.

**Implementare:** Faza 1 stabilește procesul cuprinzător de dezvoltare a PMMP; Anexa A furnizează șablonul PMMP.

#### 3.1.5 Conținutul Planului de Monitorizare Post-Piață (Articolul 72(5))

**Cerință:** Planul de monitorizare post-piață trebuie să facă parte din documentația tehnică și trebuie să includă:

a) O strategie pentru colectarea datelor furnizate de operatori sau din alte surse relevante
b) O strategie pentru analiza datelor furnizate
c) Metode pentru evaluarea conformității continue a sistemului de IA cu risc ridicat
d) Procedura pentru interacțiunea cu sistemul de gestionare a riscurilor
e) Procedura pentru gestionarea și rezolvarea reclamațiilor utilizatorilor și colectarea feedback-ului
f) Mecanisme pentru stabilirea și menținerea unor canale de comunicare eficiente cu operatorii și furnizorii din aval

**Implementare:** Secțiunea 6.1 (Pașii 1.1-1.6) abordează fiecare element cerut cu proceduri detaliate.

#### 3.1.6 Integrarea Rezultatelor Evaluării (Articolul 72(6))

**Cerință:** Furnizorii trebuie să utilizeze informațiile și concluziile extrase din sistemul de monitorizare post-piață pentru a actualiza evaluarea riscurilor, pentru a implementa acțiuni corective necesare și pentru a actualiza documentația tehnică.

**Implementare:** Faza 4 (Acțiuni Corective) și Faza 6 (Îmbunătățire Continuă) stabilesc bucle de feedback către sistemele de gestionare a riscurilor și documentare.

#### 3.1.7 Acces pentru Autorități (Articolul 72(7))

**Cerință:** Planul de monitorizare post-piață și documentația trebuie să fie disponibile autorităților naționale competente și organismelor notificate la cerere.

**Implementare:** Secțiunea 9 definește cerințele de documentare și procedurile de acces pentru autorități.

#### 3.1.8 Integrarea Raportării Incidentelor (Articolul 72(8))

**Cerință:** Sistemul de monitorizare post-piață trebuie să fie integrat cu sistemul de raportare a incidentelor grave conform Articolului 73.

**Implementare:** Secțiunea 6.4 (Pasul 4.3) stabilește proceduri de integrare PMM-raportare incidente.

### 3.2 Dispoziții Conexe ale Regulamentului IA UE

| Articol | Cerință | Implementare în Această Procedură |
|---------|-------------|-----------------------------------|
| Articolul 9 | Sistem de gestionare a riscurilor | Faza 4 integrează constatările PMM cu gestionarea riscurilor |
| Articolul 11 | Documentație tehnică | Secțiunea 9 documentează înregistrările PMM în documentația tehnică |
| Articolul 61 | Monitorizare post-piață pentru modificări substanțiale | Secțiunea 6.6 (Pasul 6.2) abordează actualizările declanșate de evaluare |
| Articolul 73 | Raportarea incidentelor grave | Secțiunea 6.4 (Pasul 4.3) integrează raportarea incidentelor |
| Articolul 74-77 | Cooperare pentru supravegherea pieței | Secțiunea 6.5 (Pasul 5.2) abordează raportarea către autorități |

### 3.3 Standarde Armonizate

Această procedură se aliniază cu următoarele standarde (când sunt adoptate ca standarde armonizate):

- **ISO 13485:2016** - Gestionarea calității dispozitivelor medicale (Clauza 8.2.1 Feedback)
- **ISO 14971:2019** - Gestionarea riscurilor pentru dispozitive medicale (Clauza 9 Informații post-producție)
- **ISO/IEC 42001:2023** - Sistem de management al IA (Clauza 8.2 Monitorizare post-implementare)
- **IEC 62304:2006** - Ciclul de viață al software-ului pentru dispozitive medicale (Clauza 9 Activități post-producție)

---

## 4. ROLURI ȘI RESPONSABILITĂȚI

### 4.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|------|----------------|-----------|
| **Manager Monitorizare Post-Piață IA** | Deține și execută sistemul PMM; menține planurile PMM; efectuează analize de performanță; coordonează colectarea feedback-ului | Aprobă planurile PMM; inițiază acțiuni corective; escaladează probleme critice |
| **Proprietar Sistem IA** | Furnizează cerințe de monitorizare specifice sistemului; revizuiește rapoartele de performanță; implementează acțiuni corective | Acceptă constatările PMM cu severitate redusă; aprobă actualizări de sistem |
| **Lider Analiză Date** | Proiectează și implementează tablouri de bord de monitorizare; analizează tendințe de performanță; dezvoltă modele predictive | Definește metodologii de analiză; stabilește praguri de alertă |
| **Echipă Operațiuni ML (MLOps)** | Implementează infrastructura de monitorizare; colectează date de performanță; menține tablouri de bord; răspunde la alerte | Execută proceduri de monitorizare; escaladează depășiri de praguri |
| **Reprezentant Gestionare Calitate** | Integrează PMM cu SMC; revizuiește eficacitatea PMM; efectuează audituri interne | Aprobă modificări ale procedurii PMM; inițiază îmbunătățiri de calitate |
| **Manager Riscuri IA** | Revizuiește constatările PMM pentru implicații de risc; actualizează evaluările de risc; validează ipoteze de risc rezidual | Declanșează reevaluări de risc; aprobă actualizări de tratament al riscului |
| **Lider Suport Clienți** | Colectează și documentează feedback-ul utilizatorilor; gestionează reclamații; menține baza de date de feedback | Escaladează feedback critic; aprobă rezolvarea feedback-ului |
| **Responsabil Conformitate** | Verifică conformitatea reglementară; pregătește rapoarte pentru autorități; gestionează solicitări de supraveghere a pieței | Aprobă depuneri către autorități; solicită acțiuni de conformitate |
| **Director Executiv Produse** | Supraveghere a sistemului PMM; aprobă schimbări semnificative de produs; alocă resurse PMM | Aprobă acțiuni corective majore; escaladează către conducerea executivă |
| **Comitet de Guvernanță IA** | Revizuiește rapoarte PMM trimestriale; aprobă schimbări semnificative; monitorizează eficacitatea PMM | Aprobă schimbări de strategie PMM; blochează implementări dacă nu sunt conforme |

### 4.2 Matrice RACI

| Activitate | Manager PMM | Proprietar Sistem IA | Lider Analiză | MLOps | Rep SMC | Manager Risc | Suport | Conformitate | DEP | Comitet Gov |
|----------|-------------|----------------|----------------|-------|---------|----------|---------|------------|-----|---------------|
| Dezvoltare Plan PMM | A | R | C | C | C | C | I | C | I | I |
| Infrastructură Monitorizare | C | C | R | A | I | I | I | I | I | I |
| Colectare Date | A | C | C | R | I | I | R | I | I | I |
| Analiză Performanță | R | C | A | C | C | C | C | I | I | I |
| Colectare Feedback | C | C | I | I | I | I | A | I | I | I |
| Detectare Părtinire/Derivă | A | C | R | C | I | C | I | C | I | I |
| Inițiere Acțiune Corectivă | A | R | C | C | C | C | C | C | C | I |
| Actualizări Evaluare Risc | C | C | I | I | I | A | I | C | I | C |
| Raportare Autorități | C | C | I | I | C | C | I | A | C | I |
| Revizuire PMM Trimestrială | R | C | C | C | C | C | C | C | A | A |
| Audit Sistem PMM | C | C | I | I | A | C | I | C | I | C |
| Escaladare Incident Grav | A | R | I | C | C | C | C | C | A | I |

**Legendă:** A=Responsabil (Accountable), R=Executant (Responsible), C=Consultat, I=Informat

### 4.3 Cerințe de Competență

#### 4.3.1 Manager Monitorizare Post-Piață IA

**Competențe Necesare:**
- Înțelegere aprofundată a cerințelor Regulamentului IA UE (Articolele 9, 11, 61, 72, 73)
- Cunoștințe despre valorile de performanță IA/ML și tehnici de monitorizare
- Experiență cu sisteme de management al calității (ISO 9001, ISO 13485)
- Înțelegerea analizei statistice și științei datelor
- Familiaritate cu cadre de gestionare a riscurilor (ISO 14971, ISO 31000)
- Experiență în supravegherea pieței și raportare reglementară

**Cerințe de Formare:**
- Formare comprehensivă Regulament IA UE (40 ore)
- Formare supraveghere post-piață (16 ore)
- Analiză statistică pentru sisteme IA (24 ore)
- Formare sisteme de management al calității (16 ore)

#### 4.3.2 Lider Analiză Date

**Competențe Necesare:**
- Analiză statistică avansată și științe ale datelor
- Evaluarea performanței modelelor IA/ML
- Proiectare tablouri de bord și vizualizare date
- Detectare părtinire și metrici de echitate
- Modelare predictivă și detectare anomalii

**Cerințe de Formare:**
- Echitate IA și detectare părtinire (16 ore)
- Monitorizare performanță modele (16 ore)
- Control statistic al proceselor (8 ore)

#### 4.3.3 Echipă MLOps

**Competențe Necesare:**
- Infrastructură și implementare ML
- Configurare instrumente de monitorizare (Prometheus, Grafana, tablouri personalizate)
- Agregare și analiză jurnale
- Configurare alerte și răspuns la incidente
- Gestionare pipeline-uri de date

**Cerințe de Formare:**
- Practici optime MLOps (24 ore)
- Infrastructură de monitorizare (16 ore)
- Cerințe operaționale Regulament IA UE (8 ore)

---

## 5. CADRUL DE MONITORIZARE POST-PIAȚĂ

### 5.1 Arhitectura Sistemului PMM

Sistemul de monitorizare post-piață constă în șase componente integrate care funcționează continuu pe parcursul ciclului de viață operațional al sistemului de IA:

```
┌─────────────────────────────────────────────────────────────────────┐
│              CADRUL SISTEMULUI DE MONITORIZARE POST-PIAȚĂ           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. PLAN DE MONITORIZARE POST-PIAȚĂ (PMMP)                          │
│     ├─ Strategie colectare date (activă și reactivă)               │
│     ├─ Metodologii de analiză și frecvențe                         │
│     ├─ Proceduri de evaluare conformitate                          │
│     ├─ Integrare gestionare risc                                   │
│     ├─ Gestionare feedback și reclamații                           │
│     └─ Alocare resurse și responsabilități                         │
│                                                                      │
│  2. MECANISME DE COLECTARE DATE                                     │
│     ├─ Metrici automate de performanță (monitorizare tehnică)      │
│     ├─ Feedback utilizatori și reclamații (colectare reactivă)     │
│     ├─ Rapoarte și comunicări operatori (colectare activă)         │
│     ├─ Notificări supraveghere piață                               │
│     ├─ Evoluții științifice și tehnice                             │
│     └─ Rapoarte incidente și aproape-incidente                     │
│                                                                      │
│  3. MOTOR DE ANALIZĂ PERFORMANȚĂ                                    │
│     ├─ Analiză statistică a metricilor de performanță              │
│     ├─ Detectare derivă părtinire și monitorizare echitate         │
│     ├─ Analiză tendințe și modelare predictivă                     │
│     ├─ Verificări conformitate                                     │
│     ├─ Analiză cauză principală pentru degradare                   │
│     └─ Analiză comparativă față de valori de referință            │
│                                                                      │
│  4. SISTEM ACȚIUNI CORECTIVE                                        │
│     ├─ Detectare depășire praguri și alertare                      │
│     ├─ Inițiere și urmărire acțiuni corective                      │
│     ├─ Investigare cauză principală                                │
│     ├─ Implementare acțiuni preventive                             │
│     ├─ Verificare eficacitate                                      │
│     └─ Documentare și închidere                                    │
│                                                                      │
│  5. RAPORTARE ȘI COMUNICARE                                         │
│     ├─ Raportare internă (guvernanță, management)                  │
│     ├─ Comunicare cu operatorii                                    │
│     ├─ Raportare către autoritatea de supraveghere a pieței        │
│     ├─ Raportare incidente grave (Articolul 73)                    │
│     ├─ Comunicare cu organismul notificat                          │
│     └─ Raportare transparență publică (dacă aplicabil)             │
│                                                                      │
│  6. ÎMBUNĂTĂȚIRE CONTINUĂ                                           │
│     ├─ Revizuire eficacitate PMM                                   │
│     ├─ Actualizări sistem gestionare risc                          │
│     ├─ Actualizări documentație tehnică                            │
│     ├─ Integrare lecții învățate                                   │
│     ├─ Actualizări plan PMM                                        │
│     └─ Optimizare proces                                           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.2 Intensitatea Monitorizării Bazată pe Risc

Monitorizarea post-piață trebuie să fie proporțională cu natura și riscurile sistemului de IA. Intensitatea monitorizării este determinată de clasificarea riscului sistemului de IA și contextul operațional.

#### 5.2.1 Matrice de Clasificare a Riscului

| Factor de Risc | Pondere | Evaluare |
|-------------|--------|------------|
| **Impact asupra Drepturilor Fundamentale** | 35% | Scală: 1 (Minim) - 5 (Posibile încălcări severe) |
| **Impact asupra Securității** | 30% | Scală: 1 (Fără vătămare fizică) - 5 (Pericol de moarte) |
| **Scară de Implementare** | 20% | Scală: 1 (<100 utilizatori) - 5 (>1M utilizatori) |
| **Nivel de Automatizare** | 10% | Scală: 1 (Om în buclă) - 5 (Complet autonom) |
| **Reversibilitatea Deciziilor** | 5% | Scală: 1 (Ușor reversibil) - 5 (Ireversibil) |

**Calcul Scor Risc:** Sumă ponderată a scorurilor factorilor (interval: 1.00 - 5.00)

#### 5.2.2 Intensitatea Monitorizării pe Scor de Risc

| Scor Risc | Nivel Risc | Intensitate Monitorizare | Metrici Timp Real | Revizuire Feedback | Testare Părtinire | Raport Performanță | Revizuire Plan PMM |
|------------|-----------|---------------------|-------------------|-----------------|--------------|-------------------|-----------------|
| 4.0 - 5.0 | **Critic** | Maximum | Continuu (< 1 min latență) | Zilnic | Săptămânal | Săptămânal | Lunar |
| 3.0 - 3.9 | **Ridicat** | Intensificat | Aproape timp real (< 15 min) | De 2 ori pe săptămână | Bisăptămânal | Bisăptămânal | Trimestrial |
| 2.0 - 2.9 | **Mediu** | Standard | Agregare orară | Săptămânal | Lunar | Lunar | Semestrial |
| 1.0 - 1.9 | **Scăzut** | De bază | Agregare zilnică | Bisăptămânal | Trimestrial | Trimestrial | Anual |

#### 5.2.3 Exemple de Atribuiri pe Niveluri de Risc

| Tip Sistem IA | Nivel Risc Tipic | Justificare |
|----------------|-------------------|-----------|
| IA de diagnostic medical | Critic | Impact mare securitate; drepturi fundamentale (sănătate); decizii ireversibile |
| IA de recrutare/angajare | Ridicat | Drepturi fundamentale (egalitate); scară mare de implementare; risc discriminare |
| IA de scorare credit | Ridicat | Drepturi fundamentale (participare economică); scară mare de implementare |
| IA de moderare conținut | Mediu | Drepturi fundamentale (expresie); reversibil; revizuire umană disponibilă |
| Chatbot serviciu clienți | Scăzut | Fără impact securitate/drepturi; reversibil; escaladare umană posibilă |

### 5.3 Integrare cu Sistemul de Management al Calității

Sistemul PMM este o componentă obligatorie a Sistemului de Management al Calității (SMC) al organizației conform Articolului 17.

#### 5.3.1 Puncte de Integrare SMC

```
┌──────────────────────────────────────────────────────────────────┐
│               SISTEMUL DE MANAGEMENT AL CALITĂȚII                 │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Proces SMC                 Integrare PMM                         │
│  ───────────                ──────────────                        │
│                                                                   │
│  Controale Proiectare   →   Cerințe Plan PMM                     │
│  ├─ Intrări proiectare  →   Definire metrici de monitorizare     │
│  ├─ Ieșiri proiectare   →   Stabilire performanță de referință   │
│  └─ Validare proiectare →   Validare performanță în realitate    │
│                                                                   │
│  Controale Proces       →   Proceduri Colectare Date             │
│  ├─ Monitorizare proces →   Colectare metrici automatizate       │
│  └─ Validare proces     →   Validare metodologie analiză         │
│                                                                   │
│  Acțiuni Corective      →   CAPA Declanșate de PMM               │
│  ├─ Neconformități      →   Depășiri praguri de performanță      │
│  ├─ Analiză cauză       →   Analiză date PMM                     │
│  └─ Verificare eficacit →   Monitorizare post-acțiune            │
│                                                                   │
│  Revizuire Management   →   Rapoarte PMM Trimestriale            │
│  ├─ Performanță sistem  →   Tablou bord ICP PMM                  │
│  ├─ Feedback clienți    →   Rezumat analiză feedback             │
│  └─ Acțiuni îmbunătățire→   Îmbunătățiri eficacitate PMM         │
│                                                                   │
│  Audit Intern           →   Audit Sistem PMM                     │
│  ├─ Conformitate proces →   Aderență procedură PMM               │
│  └─ Eficacitate         →   Realizare obiective PMM              │
│                                                                   │
│  Control Documente      →   Management Documentație PMM          │
│  ├─ Documente tehnice   →   Planuri și rapoarte PMM              │
│  └─ Control înregistrări→   Retenție date performanță            │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

#### 5.3.2 Integrarea Procedurilor SMC

| Procedură SMC | Integrare PMM | Referință Încrucișată |
|---------------|-----------------|-----------------|
| PROC-QMS-001: Control Documente | Planuri și rapoarte PMM controlate conform acestei proceduri | Secțiunea 9.1 |
| PROC-QMS-002: Acțiune Corectivă | Constatările PMM declanșează procesul CAPA | Secțiunea 6.4 |
| PROC-QMS-003: Revizuire Management | Rapoarte PMM trimestriale prezentate managementului | Secțiunea 10.2 |
| PROC-QMS-004: Audit Intern | Audit anual sistem PMM | Secțiunea 10.3 |
| PROC-QMS-005: Feedback Clienți | Colectarea feedback-ului alimentează PMM | Secțiunea 6.2.2 |

### 5.4 Integrare cu Sistemul de Gestionare a Riscurilor

PMM furnizează feedback continuu către sistemul de gestionare a riscurilor conform cerințelor Articolului 9(6) pentru gestionarea iterativă a riscurilor.

#### 5.4.1 Bucla de Feedback PMM către Gestionarea Riscurilor

```
     MONITORIZARE POST-PIAȚĂ                  SISTEM GESTIONARE RISC
     ───────────────────────                  ──────────────────────

  1. Date Performanță           →    Validează ipoteze probabilitate/
     - Rate incidente reale           impact
     - Frecvențe erori
     - Apariții aproape-incidente
                               ↓

  2. Detectare Derivă Părtinire→    Identificare risc nou
     - Modificări metrici echitate    "Risc: Părtinire demografică
     - Impact dispartat               în date producție"
     - Schimbări calibrare
                               ↓

  3. Degradare Performanță     →    Reevaluare risc rezidual
     - Scădere acuratețe              "Controale mai puțin
     - Modificări precizie/rechemare  eficiente decât prevăzut"
     - Creșteri latență
                               ↓

  4. Analiză Feedback Utilizatori→  Actualizări utilizare greșită
     - Modele noi de utilizare        previzibilă în mod rezonabil
       greșită                        "Vector nou utilizare greșită:..."
     - Cazuri de utilizare
       neașteptate
     - Confuzie utilizatori
                               ↓

  5. Rapoarte Incidente        →    Materializare risc
     - Evenimente de vătămare         "Riscul RM-AI-0042 s-a
       reală                           produs"
     - Defecțiuni sistem              Actualizare evaluare
     - Aproape-incidente              probabilitate
                               ↓

  6. Schimbări Mediu           →    Identificare risc nou
     - Actualizări reglementare       "Risc: Neconformitate cu
     - Progrese științifice            cerințe noi"
     - Peisaj competitiv

           ↓                                ↓

     Raport Constatări PMM      →    Actualizare Registru Risc
     (Lunar)                          (Declanșat de PMM)

           ↓                                ↓

     Acțiuni Corective          ←    Plan Tratament Risc
     (Inițiate de PMM)                (Condus de risc)
```

#### 5.4.2 Activități de Risc Declanșate de PMM

| Constatare PMM | Acțiune Gestionare Risc | Termen | Responsabilitate |
|-------------|------------------------|----------|----------------|
| Depășire prag critic de performanță | Reevaluare imediată risc; considerare suspendare implementare | În 24 ore | Manager Risc IA + Manager PMM |
| Deriva părtinitorii depășește pragul de echitate | Actualizare evaluare risc părtinire; implementare controale corective | În 5 zile lucrătoare | Manager Risc IA |
| Model nou de utilizare greșită identificat | Actualizare analiză risc utilizare greșită; intensificare controale preventive | În 10 zile lucrătoare | Manager Risc IA |
| Raport incident primit | Efectuare evaluare risc incident conform PROC-AI-INC-001 | Conform procedurii de incident | Manager Risc IA |
| Tendință degradare performanță | Reevaluare risc rezidual; validare eficacitate control | În 15 zile lucrătoare | Manager Risc IA + Manager PMM |

---

## 6. PROCEDURĂ PAS CU PAS

### FAZA 1: DEZVOLTAREA PLANULUI DE MONITORIZARE POST-PIAȚĂ

#### Pasul 1.1: Inițierea Planului de Monitorizare Post-Piață (Control PMM-001)

**Când:** În timpul fazei de proiectare a sistemului de IA, înainte de implementarea în producție

**Cine:** Manager Monitorizare Post-Piață IA + Proprietar Sistem IA + Lider MLOps

**Bază Reglementară:** Articolul 72(4) - Sistemul PMM trebuie să se bazeze pe un plan de monitorizare post-piață

**Cum:**

1. **Verificarea Clasificării Sistemului de IA**
   - Confirmarea că sistemul de IA este cu risc ridicat conform clasificării STD-AI-001
   - Revizuirea documentației de clasificare din PROC-AI-CLS-001
   - Dacă nu este cu risc ridicat: Documentarea justificării pentru PMM voluntar (dacă aplicabil)
   - Dacă este cu risc ridicat: Continuarea cu dezvoltarea planului PMM obligatoriu

2. **Stabilirea Echipei de Planificare PMM**
   - Manager Monitorizare Post-Piață IA (lider)
   - Proprietar Sistem IA (cunoștințe sistem)
   - Lider MLOps (capacități de monitorizare tehnică)
   - Lider Analiză Date (metodologii de analiză)
   - Manager Risc IA (integrare risc)
   - Reprezentant Gestionare Calitate (integrare SMC)
   - Responsabil Conformitate (cerințe reglementare)

   **Programarea ședinței de lansare** (4 ore) în termen de 2 săptămâni de la aprobarea implementării

3. **Colectarea Contextului și Cerințelor Sistemului**
   - Revizuirea scopului prevăzut al sistemului de IA și cazurilor de utilizare
   - Revizuirea documentației tehnice (conform Articolului 11)
   - Revizuirea evaluării riscurilor și registrului de risc (PROC-AI-RM-001)
   - Revizuirea populației de utilizatori și scării de implementare
   - Revizuirea documentației de guvernanță a datelor (PROC-AI-DATA-001)
   - Identificarea riscurilor cunoscute care necesită monitorizare
   - Documentarea metricilor de performanță de referință din validare

4. **Determinarea Intensității Monitorizării Bazate pe Risc**
   - Calcularea scorului de risc conform Secțiunii 5.2.1
   - Atribuirea nivelului de risc (Critic/Ridicat/Mediu/Scăzut)
   - Determinarea cerințelor de intensitate a monitorizării
   - Documentarea în secțiunea de evaluare a riscului PMMP

5. **Definirea Scopului și Obiectivelor Planului PMM**
   - **Scop:** Care versiuni de sistem IA, medii de implementare, populații de utilizatori
   - **Obiective:** Ce urmărește să realizeze planul PMM (ex.: "Detectare degradare acuratețe >5%", "Identificare derivă părtinire >10% față de referință")
   - **Criterii de succes:** Cum va fi măsurată eficacitatea PMM
   - **Cerințe de resurse:** Personal, infrastructură, buget

6. **Crearea Documentului Plan PMM**
   - Utilizarea Șablonului Plan PMM (Anexa A)
   - Control documente conform PROC-QMS-001
   - Atribuirea ID plan unic: PMMP-[ID-SISTEM-IA]-v[VERSIUNE]
   - Stocare în depozitul de documentație tehnică

**Dovezi Necesare:**
- Proces-Verbal Ședință Lansare Plan PMM (REC-AI-PMM-001)
- Documentație Clasificare Sistem IA
- Fișă Calcul Scor Risc (FORM-AI-PMM-001)
- Proiect Document Plan PMM (PMMP-[ID]-v0.1)

**Timing:** 2-3 săptămâni de la decizia de implementare

**Verificare Calitate:**
- Nivelul de risc calculat și justificat corect
- Toți membrii necesari ai echipei implicați
- Contextul sistemului documentat comprehensiv
- Șablonul planului PMM complet populat

---

#### Pasul 1.2: Definirea Strategiei de Colectare Date (Control PMM-002)

**Când:** În timpul dezvoltării planului PMM

**Cine:** Lider Analiză Date + Lider MLOps + Proprietar Sistem IA

**Bază Reglementară:** Articolul 72(5)(a) - O strategie pentru colectarea datelor furnizate de operatori sau colectate din alte surse

**Cum:**

1. **Identificarea Surselor de Date**

   **Colectare Activă de Date (Inițiată de Furnizor):**
   - Metrici automate de performanță din sistemul de producție
   - Chestionare/sondaje structurate pentru operatori
   - Interviuri programate cu operatorii
   - Jurnale de sistem proactive și telemetrie
   - Testare automatizată părtinire/echitate
   - Benchmark performanță față de seturi de testare

   **Colectare Reactivă de Date (Inițiată Extern):**
   - Feedback și reclamații utilizatori
   - Rapoarte incidente operatori
   - Tichete suport clienți
   - Notificări supraveghere piață
   - Rapoarte publice și acoperire media
   - Publicații științifice despre sisteme similare

   **Documentarea tuturor surselor de date planificate în Planul PMM Secțiunea 3: Strategia de Colectare Date**

2. **Definirea Metricilor Tehnice de Performanță**

   Pentru fiecare sistem de IA, identificați metrici relevante din următoarele categorii:

   **Metrici Performanță Model:**
   - Acuratețe, Precizie, Rechemare, Scor F1
   - AUC-ROC, AUC-PR
   - Statistici matrice confuzie
   - Metrici calibrare (Scor Brier, Eroare de Calibrare Așteptată)
   - Distribuție încredere

   **Metrici Operaționale:**
   - Latență inferență (p50, p95, p99)
   - Debit (cereri/secundă)
   - Rată erori (erori sistem, nu erori predicție)
   - Disponibilitate/uptime
   - Utilizare resurse (CPU, memorie, GPU)

   **Metrici Calitate Date:**
   - Rată valori lipsă
   - Rată valori aberante
   - Derivă distribuție caracteristici (Indice Stabilitate Populație)
   - Învechire date
   - Rată eșec validare intrări

   **Metrici Echitate:**
   - Raport paritate demografică
   - Raport oportunități egale
   - Șanse egalizate
   - Paritate predictivă
   - Calibrare pe grupuri

   **Utilizarea Bibliotecii ICP (Anexa B) ca referință**

3. **Specificarea Metodelor de Colectare Date**

   Pentru fiecare sursă de date și metrică, documentați:

   | Tip Date | Metodă Colectare | Frecvență | Stocare | Responsabil |
   |-----------|-------------------|-----------|---------|-------------|
   | Acuratețe | Înregistrare automată predicții + comparare cu adevăr fundamental | Lot zilnic | DB Performanță | MLOps |
   | Latență | Instrument APM (ex. Datadog) | Timp real | DB Serie timp | MLOps |
   | Feedback utilizatori | Formular feedback în UI + colectare email | Continuu | Sistem CRM | Suport |
   | Rapoarte operatori | Chestionar structurat trimestrial | Trimestrial | Management documente | Manager PMM |
   | Metrici părtinire | Analiză lot săptămânală pe predicții eșantionate | Săptămânal | Depozit analize | Lider Analiză |

   **Utilizarea Matricei Metode Colectare Date (Anexa C)**

4. **Stabilirea Standardelor de Calitate Date**
   - Definirea pragurilor acceptabile de completitudine date (ex. >95% completitudine)
   - Definirea regulilor de validare date
   - Definirea procedurilor de gestionare pentru date lipsă sau invalide
   - Documentare în Planul PMM Secțiunea 3.4: Standarde Calitate Date

5. **Abordarea Confidențialității și Protecției Datelor**
   - Verificarea conformității GDPR pentru colectarea datelor de performanță
   - Documentarea bazei legale pentru colectarea datelor (interes legitim, contract, consimțământ)
   - Definirea abordării minimizării datelor
   - Definirea perioadelor de retenție date (aliniere cu Articolul 12(2) - minim 10 ani pentru jurnale)
   - Definirea cerințelor de pseudonimizare/anonimizare
   - Referință încrucișată PROC-AI-DATA-001 (Guvernanța Datelor)

6. **Documentarea Mecanismelor de Colectare Date de la Operatori**

   **Articolul 72(5)(a) cere în mod specific strategia pentru colectarea datelor "furnizate de operatori"**

   **Date Operatori de Colectat:**
   - Statistici utilizare sistem (volum, frecvență, demografie utilizatori)
   - Observații performanță (acuratețe în contextul lor, cazuri limită)
   - Incidente și aproape-incidente
   - Feedback utilizatori de la utilizatorii lor
   - Modificări în mediul de implementare
   - Probleme de integrare

   **Mecanisme de Colectare:**
   - **Obligație contractuală:** Includerea obligațiilor de raportare PMM în acordurile cu operatorii
   - **Șabloane structurate:** Furnizarea șabloanelor de raportare operatori
   - **Cadență regulată:** Sondaje/interviuri trimestriale operatori pentru sistemele Ridicate/Critice
   - **Integrare tehnică:** API-uri pentru depunerea automată date operatori (dacă fezabil)
   - **Portal feedback:** Portal web pentru operatori pentru depunerea datelor de performanță

   **Documentare în Planul PMM Secțiunea 3.2: Colectare Date Operatori**

7. **Definirea Cerințelor Infrastructură Tehnică**
   - Infrastructură înregistrare jurnale (jurnale structurate, agregare jurnale)
   - Infrastructură monitorizare (colectare metrici, tablouri de bord)
   - Infrastructură stocare date (baze de date, lacuri de date)
   - Infrastructură analiză (pipeline-uri date, instrumente analiză)
   - Infrastructură alertare (monitorizare praguri, sisteme notificare)

   **Identificarea lacunelor:** Compararea infrastructurii necesare vs. curente
   **Crearea planului de implementare:** Pentru orice lacune de infrastructură

**Dovezi Necesare:**
- Document Strategie Colectare Date (secțiune în PMMP)
- Matrice Metode Colectare Date (Anexa C a PMMP)
- Evaluare Impact asupra Confidențialității Datelor (dacă colectare nouă de date)
- Analiză Lacune Infrastructură
- Șabloane Comunicare Operatori (FORM-AI-PMM-002)

**Timing:** 2-3 săptămâni

**Verificare Calitate:**
- Toate categoriile de metrici necesare acoperite
- Ambele metode de colectare activă și reactivă definite
- Colectarea datelor de la operatori abordată explicit
- Conformitatea cu confidențialitatea și protecția datelor verificată
- Fezabilitatea tehnică validată de MLOps

---

#### Pasul 1.3: Definirea Procedurilor de Analiză și Evaluare (Control PMM-003)

**Când:** În timpul dezvoltării planului PMM, după definirea strategiei de colectare date

**Cine:** Lider Analiză Date + Manager Risc IA + Responsabil Conformitate

**Bază Reglementară:**
- Articolul 72(5)(b) - O strategie pentru analiza datelor furnizate
- Articolul 72(5)(c) - Metode pentru evaluarea conformității continue

**Cum:**

1. **Definirea Procedurilor de Analiză Performanță**

   **Metode de Analiză Statistică:**
   - Statistici descriptive (medie, mediană, varianță în timp)
   - Analiză tendințe (medii mobile, regresie liniară)
   - Analiză comparativă (curent vs. referință, curent vs. perioadă anterioară)
   - Analiză distribuție (histograme, grafice KDE)
   - Detectare valori aberante (metode z-score, IQR)

   **Documentare în Planul PMM Secțiunea 4.1: Analiză Performanță**

2. **Definirea Procedurilor de Analiză Părtinire și Echitate**

   **Proceduri de Analiză:**

   a) **Calcularea Metricilor de Echitate**
      - Calcularea parității demografice, oportunității egale, șanselor egalizate
      - Frecvență: Conform nivelului intensitate monitorizare (Săptămânal pentru Critic/Ridicat, Lunar pentru Mediu/Scăzut)
      - Metodă: Eșantionare stratificată a predicțiilor, grupată pe caracteristici protejate

   b) **Detectarea Derivei Părtinitorii**
      - Compararea metricilor curente de echitate cu referința (din validare)
      - Aplicarea algoritmilor de detectare derivă (ex. test Kolmogorov-Smirnov, test Chi-pătrat)
      - Stabilirea pragului de derivă (ex. >10% modificare în raportul de echitate)

   c) **Analiza Impactului Dispartat**
      - Calcularea ratelor de selecție/aprobare pe grup protejat
      - Aplicarea regulii 80% pentru detectarea impactului advers
      - Documentarea constatărilor pe grup

   d) **Analiza Părtinitorii Intersecționale** (pentru sistemele nivel Critic/Ridicat)
      - Analizarea echității prin intersecții ale caracteristicilor protejate
      - Exemplu: Gen × Rasă, Vârstă × Statut Dizabilitate

   **Documentare în Planul PMM Secțiunea 4.2: Analiză Părtinire și Echitate**

3. **Definirea Procedurilor de Evaluare Conformitate**

   **Verificarea Conformității Continue - Cerința Articolului 72(5)(c):**

   Conform Articolului 72(5)(c), planul PMM trebuie să includă "metode pentru evaluarea conformității continue a sistemului de IA cu risc ridicat."

   **Cadrul de Evaluare a Conformității:**

   | Cerință Regulament IA UE | Indicator Conformitate | Metodă Verificare | Frecvență |
   |----------------------|---------------------|---------------------|-----------|
   | **Articolul 10: Guvernanța Datelor** | Reprezentativitatea datelor de antrenare menținută | Comparare distribuție intrări producție cu distribuție date antrenare | Lunar |
   | **Articolul 10(3): Calitatea Datelor** | Calitatea datelor de intrare menținută | Monitorizare valori lipsă, aberante, eșecuri validare | Săptămânal |
   | **Articolul 13: Transparență** | Informații utilizatori furnizate | Verificare afișare informații în UI; colectare feedback înțelegere utilizatori | Trimestrial |
   | **Articolul 14: Supraveghere Umană** | Supravegherea umană funcționează | Monitorizare rate anulare, timpi revizuire umană, rezultate anulare | Săptămânal |
   | **Articolul 15: Acuratețe** | Acuratețea în intervalul acceptabil | Monitorizare metrici acuratețe față de cerințe | Zilnic/Săptămânal |
   | **Articolul 15: Robustețe** | Sistemul rezistent la erori | Monitorizare rate erori, timpi recuperare, prăbușiri sistem | Continuu |
   | **Articolul 15: Securitate Cibernetică** | Măsuri securitate eficace | Monitorizare incidente securitate, scanări vulnerabilitate, încălcări acces | Continuu |
   | **Articolul 9: Gestionarea Riscurilor** | Riscurile rămân atenuate | Verificare IRI în praguri; validare eficacitate control | Săptămânal |

   **Procesul de Verificare a Conformității:**

   1. **Verificare Lunară Conformitate:**
      - Revizuirea tuturor indicatorilor de conformitate
      - Documentarea statutului conformității (Conform/Neconform/Necesită Investigare)
      - Pentru neconformitate: Inițierea acțiunii corective (Pasul 4.1)

   2. **Raport Trimestrial Conformitate:**
      - Evaluare comprehensivă conformitate
      - Analiză tendințe (în îmbunătățire/stabil/în degradare)
      - Prezentare la Comitetul de Guvernanță IA

   3. **Audit Anual Conformitate:**
      - Audit intern independent al procesului de verificare conformitate
      - Verificare că toți indicatorii sunt măsurați corect
      - Validare că acțiunile corective sunt eficace

   **Documentare în Planul PMM Secțiunea 4.3: Evaluarea Conformității**

4. **Definirea Procedurilor de Analiză a Cauzei Principale**

   **Când se Efectuează Analiza Cauzei Principale:**
   - Depășire prag performanță
   - Derivă părtinire detectată
   - Neconformitate conformitate
   - Modele reclamații utilizatori
   - Apariție incident

   **Metoda Analiză Cauză Principală (5 De Ce + Fishbone):**

   1. **Declarația Problemei:** Definirea clară a problemei
   2. **Colectarea Datelor:** Adunarea datelor PMM relevante
   3. **Analiza 5 De Ce:** Întrebarea "de ce" de 5 ori pentru identificarea cauzei principale
   4. **Diagrama Fishbone:** Categorizarea cauzelor potențiale
      - Factori model (arhitectură, antrenare, hiperparametri)
      - Factori date (schimbare distribuție, calitate, etichetare)
      - Factori proces (implementare, monitorizare, actualizări)
      - Factori oameni (comportament utilizatori, acțiuni operatori)
      - Factori mediu (infrastructură, integrări)
   5. **Identificarea Cauzei Principale:** Documentarea celei mai probabile cauze(cauze) principale
   6. **Validare:** Testarea ipotezei cu analiza datelor

   **Documentare în Planul PMM Secțiunea 4.4: Analiza Cauzei Principale**

5. **Definirea Analizei Predictive și Avertizării Timpurii**

   **Monitorizare Predictivă (pentru sistemele nivel Critic/Ridicat):**

   - **Extrapolarea Tendințelor:** Prezicerea când metrica va depăși pragul pe baza tendinței curente
   - **Detectarea Anomaliilor:** Detectare bazată pe ML a modelelor neobișnuite (Isolation Forest, Autoencoders)
   - **Predicția Derivei:** Detectarea timpurie a derivei datelor înainte de impactul asupra performanței
   - **Analiza Sezonalității:** Contabilizarea variațiilor așteptate (modele zilnice, săptămânale, sezoniere)

   **Praguri de Avertizare Timpurie:**
   - Prag galben: Metrica se apropie de pragul roșu (ex. în 20% de încălcare)
   - Prag portocaliu: Tendința indică o încălcare probabilă în X zile
   - Prag roșu: Depășire efectivă a pragului

   **Documentare în Planul PMM Secțiunea 4.5: Analiza Predictivă**

6. **Definirea Frecvenței Analizelor și Responsabilităților**

   | Tip Analiză | Nivel Critic/Ridicat | Nivel Mediu | Nivel Scăzut | Responsabil |
   |---------------|-------------------|-------------|----------|-------------|
   | Metrici performanță | Zilnic | Săptămânal | Lunar | Lider Analiză Date |
   | Metrici părtinire/echitate | Săptămânal | Lunar | Trimestrial | Lider Analiză Date |
   | Indicatori conformitate | Săptămânal | Lunar | Trimestrial | Responsabil Conformitate |
   | Cauză principală (când declanșat) | În 48 ore | În 5 zile | În 10 zile | Manager PMM + Analiză |
   | Analiză tendințe | Săptămânal | Lunar | Trimestrial | Lider Analiză Date |
   | Analiză predictivă | Săptămânal | N/A | N/A | Lider Analiză Date |

   **Documentare în Planul PMM Secțiunea 4.6: Program Analiză**

7. **Definirea Procedurilor de Raportare și Escaladare**

   **Raportare Internă:**
   - **Zilnic:** Tablou de bord automatizat pentru MLOps (nivel Critic/Ridicat)
   - **Săptămânal:** Raport status PMM către Manager PMM și Proprietar Sistem IA
   - **Lunar:** Raport PMM comprehensiv către management
   - **Trimestrial:** Rezumat executiv către Comitetul de Guvernanță IA

   **Criterii de Escaladare:** (Vezi Anexa D: Matrice Escaladare)
   - Depășire prag critic → Escaladare imediată către DEP + Comitet Guvernanță IA
   - Depășire prag ridicat → Escaladare către Manager PMM + Proprietar Sistem IA în 4 ore
   - Derivă părtinire detectată → Escaladare către Manager Risc IA în 24 ore
   - Neconformitate conformitate → Escaladare către Responsabil Conformitate imediat

   **Documentare în Planul PMM Secțiunea 5: Raportare și Escaladare**

**Dovezi Necesare:**
- Proceduri Analiză și Evaluare (secțiune în PMMP)
- Cadrul Evaluării Conformității (tabel în PMMP)
- Șablon Analiză Cauză Principală (FORM-AI-PMM-003)
- Matrice Escaladare (Anexa D a PMMP)

**Timing:** 2 săptămâni

**Verificare Calitate:**
- Toate analizele necesare definite cu metodologii clare
- Evaluarea conformității continue abordată explicit conform Articolului 72(5)(c)
- Frecvențele de analiză adecvate nivelului de risc
- Criteriile de escaladare definite clar
- Părțile responsabile desemnate

---

#### Pasul 1.4: Definirea Integrării Gestionării Riscurilor (Control PMM-001, PMM-004)

**Când:** În timpul dezvoltării planului PMM

**Cine:** Manager Risc IA + Manager PMM

**Bază Reglementară:** Articolul 72(5)(d) - Procedura pentru interacțiunea cu sistemul de gestionare a riscurilor

**Cum:**

1. **Documentarea Interfeței Sistemului de Gestionare a Riscurilor**

   **Puncte de Contact PMM către Gestionarea Riscurilor:**

   | Activitate PMM | Activitate Gestionare Risc | Criterii Declanșare | Termen | Referință Proces |
   |--------------|-------------------------|------------------|----------|-------------------|
   | Depășire prag performanță | Reevaluare probabilitate risc | Orice depășire prag roșu | În 5 zile lucrătoare | PROC-AI-RM-001 Pasul 2.1 |
   | Detectare derivă părtinire | Reevaluare risc părtinire | Raport echitate <0.8 sau >1.25 | În 5 zile lucrătoare | PROC-AI-RM-001 Pasul 2.4 |
   | Model nou utilizare greșită identificat | Actualizare risc utilizare greșită | Utilizare greșită nouă observată | În 10 zile lucrătoare | PROC-AI-RM-001 Pasul 1.3 |
   | Incident raportat | Evaluare risc incident | Orice incident grav | Conform PROC-AI-INC-001 | PROC-AI-INC-001 Secțiunea 6 |
   | Neconformitate conformitate | Evaluare risc conformitate | Orice indicator conformitate neconform | În 5 zile lucrătoare | PROC-AI-RM-001 Pasul 2.1 |
   | Validare eficacitate control | Reevaluare risc rezidual | Trimestrial (revizuire planificată) | Trimestrial | PROC-AI-RM-001 Pasul 5.1 |
   | Schimbare mediu | Identificare risc nou | Schimbare reglementară/tehnică/piață | În 15 zile lucrătoare | PROC-AI-RM-001 Pasul 1.2 |

   **Documentare în Planul PMM Secțiunea 6: Integrarea Gestionării Riscurilor**

2. **Definirea Procedurilor de Actualizare Registru Risc**

   **Procedura pentru Actualizarea Registrului de Risc pe Baza Constatărilor PMM:**

   1. **Managerul PMM identifică o constatare relevantă pentru risc** (ex. derivă părtinire, degradare performanță)

   2. **Evaluează dacă este risc existent sau risc nou:**
      - Dacă risc existent: Continuare cu reevaluarea
      - Dacă risc nou: Inițierea identificării riscului conform PROC-AI-RM-001 Pasul 1.2

   3. **Efectuarea reevaluării riscului** (cu Managerul Risc IA):
      - Revizuirea datelor PMM ca dovadă
      - Reevaluarea probabilității (rata de apariție reală informează evaluarea)
      - Reevaluarea impactului (impacturile reale sau aproape-incidente informează evaluarea)
      - Recalcularea scorului de risc
      - Actualizarea registrului de risc

   4. **Evaluarea riscului rezidual:**
      - Controalele sunt încă eficace?
      - Riscul rezidual este încă acceptabil?
      - Dacă riscul rezidual acum inacceptabil: Inițierea acțiunii corective

   5. **Documentarea actualizării registrului de risc:**
      - Actualizarea Registrului de Risc (REC-AI-RM-003)
      - Completarea Jurnalului de Actualizare Registru Risc (REC-AI-RM-004)
      - Legătură către constatarea/raportul PMM care a declanșat actualizarea

   6. **Escaladare dacă este necesar:**
      - Dacă nivelul de risc a crescut la Ridicat/Critic: Escaladare conform PROC-AI-RM-001 Secțiunea 8

   **Termen:** Finalizare în 10 zile lucrătoare de la constatarea PMM

3. **Definirea Integrării IRI**

   **Indicatorii Cheie de Risc (IRI) sunt monitorizați prin PMM:**

   - Legarea fiecărui risc semnificativ din registrul de risc la unul sau mai multe metrici PMM
   - Monitorizarea PMM furnizează date continue IRI
   - Pragurile IRI alimentează alertarea PMM

   **Exemplu de Integrare:**

   | ID Risc | Descriere Risc | Metrici PMM Legate | Prag IRI | Nivel Alertă |
   |---------|------------------|---------------------|---------------|-------------|
   | RM-AI-0023 | Părtinire în decizii de credit | Raport paritate demografică | <0.8 sau >1.25 | Roșu |
   | RM-AI-0045 | Degradare acuratețe | Acuratețe generală | <90% din referință | Roșu |
   | RM-AI-0067 | Derivă date | Indice Stabilitate Populație | >0.25 | Portocaliu |

   **Documentare în Planul PMM Secțiunea 6.2: Monitorizarea IRI**

4. **Definirea Validării Eficacității Controalelor**

   **PMM furnizează dovezi ale eficacității controalelor:**

   Pentru fiecare control de risc implementat (conform PROC-AI-RM-001 Pasul 4.2), sistemul PMM monitorizează eficacitatea controlului:

   | Tip Control | Metodă Validare PMM | Frecvență |
   |--------------|----------------------|-----------|
   | **Controale Preventive** (ex. atenuare părtinire în antrenare) | Monitorizare metrici echitate ieșire | Săptămânal |
   | **Controale Detective** (ex. detectare anomalii) | Monitorizare rate detectare, rate fals pozitiv/negativ | Săptămânal |
   | **Controale Corective** (ex. anulare umană) | Monitorizare rate anulare, rezultate anulare | Săptămânal |

   **Criterii Eficacitate Control:**
   - Controlul funcționează conform designului
   - Controlul realizează reducerea riscului intenționată
   - Nu au fost detectate eșecuri sau ocoliri ale controlului

   **Dacă controlul ineficace:** Inițierea acțiunii corective conform Pasului 4.1

5. **Documentarea Fluxului de Lucru PMM către Gestionarea Riscului**

   **Crearea diagramei de flux proces în Planul PMM arătând:**
   - Cum constatările PMM declanșează reevaluarea riscului
   - Cine este responsabil la fiecare pas
   - Ce documentație este necesară
   - Puncte de integrare cu PROC-AI-RM-001
   - Termene pentru fiecare activitate

**Dovezi Necesare:**
- Secțiune Integrare Gestionare Risc (în PMMP)
- Diagramă Flux Proces PMM către Gestionarea Riscului
- Tabel Mapare IRI către Metrici PMM
- Plan Validare Eficacitate Control

**Timing:** 1 săptămână

**Verificare Calitate:**
- Toate cerințele Articolului 72(5)(d) abordate
- Proceduri clare pentru fiecare punct de integrare
- Termene definite și realiste
- Responsabilități clar atribuite
- Referințe încrucișate documentație verificate

---

#### Pasul 1.5: Definirea Gestionării Feedback-ului și Reclamațiilor (Control PMM-002, PMM-003)