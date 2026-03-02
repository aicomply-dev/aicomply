# PROC-AI-CLS-001: Procedura de Clasificare a Sistemelor de IA

**ID Procedură:** PROC-AI-CLS-001
**Nume Procedură:** Procedura de Clasificare a Sistemelor de IA
**Standard:** STD-AI-001: Standardul de Clasificare a Sistemelor de IA
**Acoperă Controalele:** CLS-001, CLS-002, CLS-003, CLS-004, CLS-005, CLS-006, CLS-007
**Data Intrării în Vigoare:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizuiri:** [De completat]
**Status Aprobare:** [Ciornă/Aprobat]

---

## CUPRINS

1. [Scop și Domeniu de Aplicare](#1-scop-și-domeniu-de-aplicare)
2. [Roluri și Responsabilități](#2-roluri-și-responsabilități)
3. [Cadrul de Clasificare](#3-cadrul-de-clasificare)
4. [Procedura Pas cu Pas](#4-procedura-pas-cu-pas)
5. [Clasificarea IA cu Scop General (GPAI)](#5-clasificarea-ia-cu-scop-general-gpai)
6. [Mecanisme de Control](#6-mecanisme-de-control)
7. [Indicatori de Performanță și Valori Măsurate](#7-indicatori-de-performanță-și-valori-măsurate)
8. [Cerințe de Documentare](#8-cerințe-de-documentare)
9. [Revizuire și Audit](#9-revizuire-și-audit)
10. [Gestionarea Neconformităților](#10-gestionarea-neconformităților)
11. [Documente Aferente](#11-documente-aferente)
12. [Anexe](#12-anexe)

---

## 1. SCOP ȘI DOMENIU DE APLICARE

### 1.1 Scop

Această procedură stabilește procesul obligatoriu, pas cu pas, pentru clasificarea tuturor sistemelor de IA conform categoriilor de risc ale Actului UE privind IA (practici interzise, risc ridicat, risc limitat, risc minimal și IA cu Scop General). Scopul său este de a asigura că fiecare sistem de IA este clasificat cu acuratețe înainte de începerea dezvoltării și este reevaluat pe parcursul ciclului său de viață, garantând că obligațiile de conformitate adecvate sunt aplicate în mod consecvent și corect.

### 1.2 Domeniu de Aplicare

Această procedură se aplică pentru:
- Toate sistemele care îndeplinesc definiția Actului UE privind IA pentru un "sistem de IA"
- Toate modelele de IA cu Scop General (GPAI) conform Articolelor 51-56
- Toate sistemele de IA în orice etapă a ciclului de viață (proiectare, dezvoltare, implementare, funcționare)
- Toate sistemele de IA dezvoltate intern sau de terți în numele organizației
- Toate sistemele de IA integrate de la furnizori GPAI upstream

Această procedură nu se aplică pentru:
- Sistemele de IA folosite exclusiv pentru activități personale, non-profesionale
- Sistemele de IA folosite exclusiv în scopuri militare, de apărare sau de securitate națională

### 1.3 Bază Regulamentară

Această procedură implementează:
- **Articolele 5, 6, 7, 50 ale Actului UE privind IA:** Practici interzise, clasificare risc ridicat, transparență risc limitat
- **Articolele 51-56 ale Actului UE privind IA:** Cerințe pentru modelele de IA cu Scop General
- **Anexa I:** Produse reglementate de legislația de armonizare a Uniunii
- **Anexa III:** Cazuri de utilizare a sistemelor de IA cu risc ridicat

### 1.4 Proprietarul Procedurii și Persoane de Contact

| Rol | Nume | Titlu | Contact |
|---|---|---|---|
| **Proprietar Procedură** | [Nume] | Manager Program Actul IA | [Email/Telefon] |
| **Escaladare** | [Nume] | Director Juridic | [Email/Telefon] |
| **Guvernanță** | [Nume] | Președinte Comitet Guvernanță IA | [Email/Telefon] |

---

## 2. ROLURI ȘI RESPONSABILITĂȚI

### 2.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|---|---|---|
| **Manager Program Actul IA** | Deține și execută procesul de clasificare; menține Registrul Sistemelor de IA; oferă aprobarea finală a clasificărilor | Aprobă clasificările finale; escaladează cazurile limită către Comitetul de Guvernanță IA |
| **Proprietar Sistem de IA** | Inițiază cererile de clasificare; furnizează toate informațiile necesare; implementează controalele necesare pe baza clasificării | Propune clasificarea inițială; contestă deciziile de clasificare |
| **Director Juridic (CLO)** | Furnizează interpretare juridică obligatorie a Actului IA, în special pentru practicile interzise și definițiile de risc ridicat | Poate respinge o clasificare propusă din motive juridice; poate impune reclasificarea |
| **Comitet de Guvernanță IA** | Revizuiește și aprobă toate clasificările de risc ridicat; rezolvă clasificările escalatate sau disputate | Aprobă clasificările de risc ridicat; blochează implementarea sistemelor clasificate incorect |
| **Responsabil Conformitate GPAI** | Evaluează riscul sistemic al modelului GPAI; gestionează obligațiile specifice GPAI | Clasifică modelele GPAI; aprobă documentația de conformitate GPAI |

### 2.2 Matricea RACI

| Activitate | Manager Program Actul IA | Proprietar Sistem IA | CLO | Comitet Gov IA | Responsabil GPAI |
|---|---|---|---|---|---|
| Verificare Practici Interzise | A | R | C | I | I |
| Evaluare Risc Ridicat Anexa I | A | R | C | I | I |
| Evaluare Risc Ridicat Anexa III | A | R | C | I | I |
| Clasificare Model GPAI | C | R | I | I | A |
| Decizie Finală Clasificare | R | C | C | A (pentru Risc Ridicat) | C |
| Menținere Registru Sisteme IA | R | C | I | I | C |
| Evaluare Reclasificare | A | R | C | C | C |

**Legendă:** A=Responsabil (Accountable), R=Executor (Responsible), C=Consultat, I=Informat

---

## 3. CADRUL DE CLASIFICARE

### 3.1 Fluxul Deciziei de Clasificare

Procesul de clasificare urmează un arbore decizional strict, secvențial pentru a determina nivelul de risc al unui sistem de IA.

```
┌────────────────────────────────────────────────────────────────────┐
│              ARBORE DECIZIONAL CLASIFICARE SISTEME IA               │
└────────────────────────────────────────────────────────────────────┘

START: Sistem de IA Nou sau Model GPAI
│
├─ Pasul 1: Este un model GPAI? (Articolele 51-56)
│  ├─ DA → Continuați la Secțiunea 5 (Clasificare GPAI)
│  └─ NU → Continuați la Pasul 2
│
├─ Pasul 2: Verificare Practici Interzise (Articolul 5)
│  ├─ DA → STOP - INTERZIS (Nu se poate dezvolta/implementa)
│  └─ NU → Continuați la Pasul 3
│
├─ Pasul 3: Risc Ridicat Anexa I? (Articolul 6)
│  ├─ DA → CLASIFICAT: RISC RIDICAT
│  └─ NU → Continuați la Pasul 4
│
├─ Pasul 4: Risc Ridicat Anexa III? (Articolul 7)
│  ├─ DA → Continuați la Pasul 5
│  └─ NU → Continuați la Pasul 6
│
├─ Pasul 5: Evaluare Risc Semnificativ de Prejudiciu
│  ├─ DA → CLASIFICAT: RISC RIDICAT
│  └─ NU → Continuați la Pasul 6
│
├─ Pasul 6: Obligații de Transparență Risc Limitat? (Articolul 50)
│  ├─ DA → CLASIFICAT: RISC LIMITAT
│  └─ NU → CLASIFICAT: RISC MINIMAL
│
FINAL: Aplicați Controale Specifice Clasificării
```

### 3.2 Integrarea în Ciclul de Viață

Clasificarea nu este un eveniment singular. Este integrată în ciclul de viață al sistemului de IA.

| Faza Ciclului de Viață | Activități de Clasificare | Criterii de Verificare |
|---|---|---|
| **1. Proiectare** | Evaluare inițială de clasificare efectuată; obligațiile furnizorului GPAI evaluate | Clasificarea aprobată înainte de începerea dezvoltării |
| **2. Dezvoltare** | Monitorizare pentru modificări care ar putea afecta clasificarea | Fără modificări care declanșează reclasificarea |
| **3. Implementare** | Verificare finală a clasificării înainte de implementare | Clasificarea finală confirmată și documentată |
| **4. Funcționare** | Revizuire anuală de reclasificare; reclasificare bazată pe trigger la modificare substanțială | Revizuire anuală finalizată; reclasificare efectuată dacă este necesar |

### 3.3 Categorii de Risc și Obligații

| Clasificare | Nivel de Risc | Obligații de Conformitate | Controale Necesare | Monitorizare |
|---|---|---|---|---|
| **Interzis** | Extrem | Proiectul trebuie oprit; nu se permite implementarea | Niciuna - sistemul nu poate fi dezvoltat | N/A |
| **Risc Ridicat** | Ridicat | Conformitate completă Actul UE privind IA; documentație tehnică; evaluare conformitate; înregistrare | Toate controalele din STD-AI-002 până la STD-AI-014 | Monitorizare continuă; revizuire anuală |
| **Risc Limitat** | Mediu | Obligații de transparență; cerințe de divulgare | Controale de transparență; notificare utilizator | Revizuire periodică (anuală) |
| **Risc Minimal** | Scăzut | Conformitate generală; practici recomandate | Guvernanță de bază; documentare | Când este necesar |
| **GPAI (Standard)** | Variabil | Transparență; documentație tehnică; conformitate drepturi de autor | Fișe model; documentație; instrucțiuni | Revizuire periodică |
| **GPAI (Risc Sistemic)** | Ridicat | Obligații îmbunătățite; evaluare risc sistemic; testare adversarială | Toate controalele GPAI standard + testare îmbunătățită | Monitorizare continuă |

---

## 4. PROCEDURA PAS CU PAS

### FAZA 1: CLASIFICARE INIȚIALĂ

#### **Pasul 1.1: Verificare Practici Interzise (Control CLS-001)**

**Când:** Înainte de începerea oricărei lucrări de dezvoltare pentru o nouă propunere de sistem de IA

**Cine:** Proprietarul Sistemului de IA, cu revizuire obligatorie de către Managerul Programului Actul IA și CLO

**Cum:**

1. **Inițiați Cererea de Clasificare**
   - Proprietarul Sistemului de IA depune o cerere de clasificare prin Formularul de Cerere de Clasificare a Sistemului de IA (TMP-AI-CLS-001)
   - Formularul include: numele sistemului, scopul intenționat, descrierea cazului de utilizare, utilizatorii țintă și contextul de implementare
   - Managerul Programului Actul IA atribuie un ID unic de clasificare (de ex., CLS-2025-001)
   - Cererea de clasificare este înregistrată în Registrul Sistemelor de IA

2. **Verificați Practicile Interzise**
   - Proprietarul Sistemului de IA completează **Formularul de Evaluare a Practicilor Interzise** (parte din TMP-AI-CLS-001)
   - Formularul necesită o evaluare detaliată împotriva tuturor celor 8 practici interzise definite în Articolul 5(1) al Actului:

   **Practici IA Interzise conform Articolului 5(1):**

   a) **Tehnici subliminale:** Sisteme de IA care folosesc tehnici subliminale dincolo de conștiința unei persoane pentru a distorsiona material comportamentul într-un mod care cauzează sau este probabil să cauzeze prejudiciu

   b) **Exploatarea vulnerabilităților:** Sisteme de IA care exploatează vulnerabilitățile unor grupuri specifice (vârstă, dizabilitate) pentru a distorsiona material comportamentul într-un mod care cauzează sau este probabil să cauzeze prejudiciu

   c) **Scoring social de către autoritățile publice:** Sisteme de IA folosite de autoritățile publice sau în numele acestora în scopuri de scoring social

   d) **Identificare biometrică la distanță în timp real în spații accesibile publicului:** În scopuri de aplicare a legii, cu excepția cazurilor strict limitate (prevenirea amenințării imediate, identificarea victimelor, infracțiuni grave)

   e) **Sisteme de categorizare biometrică care deduc atribute sensibile:** Sisteme de IA care deduc rasă, opinii politice, apartenență sindicală, credințe religioase sau filosofice, viață sexuală sau orientare sexuală (cu excepții pentru aplicarea legii)

   f) **Recunoaștere emoțională la locul de muncă/în educație:** Sisteme de IA pentru recunoașterea emoțiilor la locurile de muncă și în instituțiile de învățământ (cu excepții pentru motive medicale sau de siguranță)

   g) **Colectarea de baze de date de recunoaștere facială:** Sisteme de IA care creează sau extind baze de date de recunoaștere facială prin colectarea netarghetată a imaginilor faciale de pe internet sau din filmările CCTV

   h) **Evaluarea riscului pentru infracțiuni:** Sisteme de IA care evaluează riscul ca persoanele fizice să comită infracțiuni bazându-se exclusiv pe profilare sau pe trăsături de personalitate (cu excepții pentru augmentarea evaluării umane)

   - Pentru fiecare practică interzisă, Proprietarul Sistemului de IA furnizează: dacă sistemul folosește această practică, justificare dacă nu este clar și dovezi de susținere

3. **Revizuiți Evaluarea**
   - Managerul Programului Actul IA revizuiește formularul completat pentru acuratețe, completitudine și calitatea justificării
   - **Punct de Decizie:** Dacă sistemul potențial intră sub orice practică interzisă, CLO trebuie consultat pentru o opinie juridică obligatorie. Proiectul este pus în așteptare în această perioadă
   - Dacă CLO confirmă că sistemul este o practică interzisă, toate lucrările la proiect sunt **oprite imediat și permanent**
   - Decizia și baza sa juridică sunt înregistrate în Registrul Sistemelor de IA cu statusul de clasificare "INTERZIS - NU DEZVOLTAȚI"

4. **Documentați Rezultatele Verificării**
   - Completați Raportul de Verificare a Practicilor Interzise (REC-AI-CLS-001)
   - Dacă sistemul trece verificarea, continuați la Pasul 1.2
   - Dacă sistemul nu trece verificarea, documentați interdicția și notificați toate părțile interesate

**Dovezi Necesare:**
- Formular de Evaluare a Practicilor Interzise completat și semnat
- Opinie juridică obligatorie de la CLO pentru orice cazuri limită sau confirmate
- Înregistrare în Registrul Sistemelor de IA cu determinarea finală și justificarea
- Raport de Verificare a Practicilor Interzise (REC-AI-CLS-001)

**Temporizare:** 1 săptămână de la propunerea noului sistem

**Verificare Calitate:**
- 100% din sistemele noi de IA sunt verificate înainte de alocarea oricăror resurse de dezvoltare
- Se obține aprobarea CLO pentru toate cazurile care nu sunt clar și fără echivoc în afara categoriilor interzise
- Documentația este completă și justificabilă într-un audit

---

#### **Pasul 1.2: Evaluare Risc Ridicat Anexa I (Control CLS-002)**

**Când:** Imediat după trecerea verificării practicilor interzise

**Cine:** Proprietarul Sistemului de IA, revizuit de Managerul Programului Actul IA

**Cum:**

1. **Evaluați Clasificarea Produsului**
   - Proprietarul Sistemului de IA completează **Formularul de Evaluare Anexa I** (parte din TMP-AI-CLS-001)
   - Aceasta necesită efectuarea testului în trei părți pentru clasificarea Anexei I:
     1. Este sistemul de IA destinat să fie folosit ca componentă de siguranță a unui produs, sau este el însuși un produs, reglementat de legislația de armonizare a Uniunii listată în Anexa I (de ex., mașini, jucării, dispozitive medicale)?
     2. Este produsul supus unei evaluări de conformitate de către terți legate de riscurile de sănătate și siguranță conform legislației listate în Anexa I?
     3. Funcționarea sistemului de IA afectează direct siguranța produsului?

2. **Determinați Statutul de Componentă de Siguranță**
   - Revizuiți specificațiile tehnice și cerințele de siguranță ale produsului
   - Evaluați dacă sistemul de IA este o "componentă de siguranță" (adică defecțiunea sa ar putea cauza direct prejudiciu)
   - Documentați raționamentul cu referințe specifice la specificațiile produsului
   - Obțineți confirmarea de la Managerul de Produs și Liderul Inginerie

3. **Verificați Legislația Aplicabilă**
   - Identificați legislația relevantă din Anexa I (de ex., Directiva Mașini 2006/42/CE, Regulamentul Dispozitive Medicale 2017/745)
   - Confirmați că produsul este supus evaluării de conformitate de către terți
   - Documentați legislația aplicabilă și cerințele de evaluare a conformității

4. **Luați Decizia de Clasificare**
   - **Punct de Decizie:** Dacă răspunsul la toate cele trei întrebări este DA, sistemul este clasificat ca **Risc Ridicat (Anexa I)**
   - Procesul se oprește aici, clasificarea este înregistrată și Comitetul de Guvernanță IA este notificat
   - Dacă vreun răspuns este NU, continuați la Pasul 1.3 (Evaluare Anexa III)

5. **Documentați Evaluarea**
   - Completați Raportul de Evaluare Anexa I (REC-AI-CLS-002)
   - Includeți rezultatele testului în trei părți, dovezile de susținere și decizia finală de clasificare

**Dovezi Necesare:**
- Formular de Evaluare Anexa I completat și semnat
- Identificare clară a legislației relevante din Anexa I
- Specificații tehnice ale produsului și documentație de siguranță
- Justificare pentru determinarea "componentei de siguranță" dacă este aplicabil
- Raport de Evaluare Anexa I (REC-AI-CLS-002)

**Temporizare:** 1-2 zile

**Verificare Calitate:**
- Determinarea "componentei de siguranță" este bine documentată și justificabilă, cu referire la specificațiile tehnice ale produsului
- Toate cele trei părți ale testului sunt răspunse clar cu dovezi de susținere

---

#### **Pasul 1.3: Evaluare Risc Ridicat Anexa III (Control CLS-003)**

**Când:** Dacă sistemul nu este clasificat ca risc ridicat conform Anexei I

**Cine:** Proprietarul Sistemului de IA, revizuit de Managerul Programului Actul IA

**Cum:**

1. **Evaluați Clasificarea Cazului de Utilizare**
   - Proprietarul Sistemului de IA completează **Formularul de Evaluare Anexa III** (parte din TMP-AI-CLS-001)
   - Aceasta necesită evaluarea dacă scopul intenționat al sistemului de IA se încadrează în una dintre cele 8 cazuri de utilizare cu risc ridicat definite în Anexa III:

   **Cazuri de Utilizare cu Risc Ridicat din Anexa III:**

   1. **Identificare și categorizare biometrică a persoanelor fizice**
      - Sisteme de identificare biometrică la distanță
      - Sisteme de categorizare biometrică

   2. **Managementul și operarea infrastructurii critice**
      - Sisteme de IA pentru gestionarea traficului și aprovizionării cu apă/gaz/încălzire/electricitate

   3. **Educație și formare profesională**
      - Sisteme de IA pentru admitere, evaluare, evaluarea rezultatelor învățării
      - Sisteme de IA pentru monitorizarea și detectarea comportamentului interzis în timpul testelor

   4. **Ocuparea forței de muncă, gestionarea lucrătorilor și accesul la activități independente**
      - Sisteme de IA pentru recrutare, screening, filtrare, evaluare
      - Sisteme de IA pentru alocarea sarcinilor, monitorizare, evaluarea performanței

   5. **Accesul la și beneficierea de servicii private esențiale și servicii și beneficii publice**
      - Sisteme de IA pentru evaluarea solvabilității
      - Sisteme de IA pentru evaluarea riscului și stabilirea prețurilor pentru asigurări de viață/sănătate
      - Sisteme de IA pentru eligibilitatea la beneficii/servicii de asistență publică
      - Sisteme de IA pentru trimiterea și prioritizarea serviciilor de urgență

   6. **Aplicarea legii**
      - Sisteme de IA pentru evaluarea riscului pentru potențialele victime ale infracțiunilor
      - Sisteme de IA pentru poligraf și instrumente similare
      - Sisteme de IA pentru evaluarea fiabilității probelor
      - Sisteme de IA pentru analiza criminalității, detectare, investigare, urmărire penală
      - Sisteme de IA pentru gestionarea migrației, azilului, controlului frontierelor

   7. **Gestionarea migrației, azilului și controlului frontierelor**
      - Sisteme de IA pentru poligraf și instrumente similare
      - Sisteme de IA pentru evaluarea riscului de imigrare neregulată sau riscuri de securitate/sănătate
      - Sisteme de IA pentru examinarea cererilor de azil
      - Sisteme de IA pentru detectarea persoanelor în scopuri de aplicare a legii

   8. **Administrarea justiției și proceselor democratice**
      - Sisteme de IA pentru asistarea autorităților judiciare în cercetarea și interpretarea faptelor și dreptului

2. **Mapați la Categoria Anexei III**
   - Pentru fiecare categorie din Anexa III, evaluați dacă scopul intenționat al sistemului de IA se încadrează în acea categorie
   - Documentați maparea cu referire specifică la scopul intenționat al sistemului și cazul de utilizare
   - Obțineți confirmarea de la Managerul de Produs și experții relevanți în domeniu

3. **Luați Decizia de Clasificare**
   - **Punct de Decizie:** Dacă scopul intenționat al sistemului se încadrează clar într-una dintre aceste categorii, continuați la Pasul 1.4 (Evaluare Risc Semnificativ de Prejudiciu)
   - Dacă nu, continuați la Pasul 1.5 (Evaluare Risc Limitat)

4. **Documentați Evaluarea**
   - Completați Raportul de Evaluare Anexa III (REC-AI-CLS-003)
   - Includeți maparea la categoriile Anexei III, dovezile de susținere și decizia de a continua

**Dovezi Necesare:**
- Formular de Evaluare Anexa III completat și semnat
- Mapare clară a scopului intenționat al sistemului de IA la o categorie și subcategorie specifică din Anexa III
- Raport de Evaluare Anexa III (REC-AI-CLS-003)

**Temporizare:** 1-2 zile

**Verificare Calitate:**
- Maparea la o categorie din Anexa III este precisă, specifică și justificabilă pe baza declarației de scop intenționat a sistemului
- Evaluarea este amănunțită și consideră toate aspectele relevante ale cazului de utilizare

---

#### **Pasul 1.4: Evaluare Risc Semnificativ de Prejudiciu (Control CLS-004)**

**Când:** Doar pentru sistemele care se încadrează într-o categorie din Anexa III

**Cine:** Proprietarul Sistemului de IA, revizuit de Managerul Programului Actul IA

**Cum:**

1. **Evaluați Potențialul de Prejudiciu**
   - Pentru un sistem din Anexa III, trebuie efectuată o evaluare formală pentru a determina dacă prezintă un **risc semnificativ de prejudiciu** pentru sănătatea, siguranța sau drepturile fundamentale ale persoanelor fizice
   - Proprietarul Sistemului de IA completează **Formularul de Evaluare a Riscului Semnificativ de Prejudiciu** (parte din TMP-AI-CLS-001)

2. **Evaluați Factorii de Risc**
   - Evaluarea trebuie să ia în considerare:
     - **Intensitatea:** Gravitatea prejudiciului potențial (de ex., vătămare corporală, pierdere financiară, discriminare)
     - **Amploarea:** Numărul de persoane care ar putea fi afectate
     - **Vulnerabilitatea:** Vulnerabilitatea persoanelor sau grupurilor care ar putea fi afectate (de ex., copii, vârstnici, persoane cu dizabilități)
     - **Reversibilitatea:** Dacă prejudiciul este reversibil sau permanent
     - **Probabilitatea:** Probabilitatea ca prejudiciul să apară

3. **Efectuați Analiza de Risc**
   - Documentați scenariile specifice în care sistemul ar putea cauza prejudiciu
   - Evaluați probabilitatea și gravitatea fiecărui scenariu
   - Luați în considerare atât prejudiciile directe, cât și indirecte
   - Evaluați designul sistemului și măsurile de protecție care ar putea atenua prejudiciul

4. **Luați Decizia de Clasificare**
   - **Punct de Decizie:** Dacă evaluarea concluzionează că sistemul *prezintă* un risc semnificativ de prejudiciu, este clasificat ca **Risc Ridicat (Anexa III)**
   - Procesul se oprește aici, clasificarea este înregistrată și Comitetul de Guvernanță IA este notificat
   - Dacă *nu* prezintă un risc semnificativ, furnizorul trebuie să documenteze această evaluare și să înregistreze sistemul în baza de date UE
   - Procesul continuă apoi la Evaluarea Riscului Limitat (Pasul 1.5)

5. **Documentați Evaluarea**
   - Completați Raportul de Evaluare a Riscului Semnificativ de Prejudiciu (REC-AI-CLS-004)
   - Includeți analiza de risc, dovezile de susținere și decizia finală de clasificare

**Dovezi Necesare:**
- Evaluare a Riscului Semnificativ de Prejudiciu completată cu justificare detaliată și dovezi de susținere
- Aprobarea evaluării de către Managerul Programului Actul IA
- Pentru sistemele considerate că nu prezintă un risc semnificativ, dovada înregistrării în baza de date UE
- Raport de Evaluare a Riscului Semnificativ de Prejudiciu (REC-AI-CLS-004)

**Temporizare:** 3-5 zile

**Verificare Calitate:**
- Evaluarea "riscului semnificativ" este amănunțită, bazată pe dovezi și bine documentată
- Toți factorii de risc relevanți sunt luați în considerare
- Raționamentul este justificabil într-un audit sau revizuire regulamentară

---

#### **Pasul 1.5: Clasificare Risc Limitat și Risc Minimal (Controale CLS-005, CLS-006)**

**Când:** Dacă un sistem nu este clasificat ca risc ridicat

**Cine:** Managerul Programului Actul IA

**Cum:**

1. **Evaluați Obligațiile de Transparență**
   - Evaluați dacă sistemul are obligații specifice de transparență conform Articolului 50:
     - Sisteme care interacționează direct cu persoane fizice (chatbots, asistenți virtuali)
     - Sisteme de recunoaștere a emoțiilor
     - Sisteme de categorizare biometrică
     - Sisteme de IA care generează sau manipulează conținut imagistic, audio sau video (deepfakes)
   - Completați **Formularul de Evaluare Risc Limitat** (parte din TMP-AI-CLS-001)

2. **Luați Decizia de Clasificare**
   - **Punct de Decizie:** Dacă sistemul este supus acestor obligații de transparență, este clasificat ca **Risc Limitat**
   - Dacă sistemul nu este risc ridicat și nu are obligații specifice de transparență, este clasificat ca **Risc Minimal**

3. **Înregistrați Clasificarea**
   - Clasificarea finală este înregistrată în Registrul Sistemelor de IA cu data și justificarea
   - Pentru sistemele cu Risc Limitat, documentați obligațiile specifice de transparență care se aplică

4. **Notificați Părțile Interesate**
   - Notificați Proprietarul Sistemului de IA despre clasificarea finală
   - Furnizați îndrumări privind obligațiile de conformitate aplicabile

**Dovezi Necesare:**
- Decizie finală de clasificare documentată în Registrul Sistemelor de IA
- Pentru sistemele cu Risc Limitat, înregistrarea obligațiilor specifice de transparență care se aplică
- Formular de Evaluare Risc Limitat (REC-AI-CLS-005)

**Temporizare:** 1 zi

---

### FAZA 2: GESTIONARE CONTINUĂ

#### **Pasul 2.1: Menținerea Registrului Sistemelor de IA (Control CLS-007)**

**Când:** Continuu

**Cine:** Managerul Programului Actul IA

**Cum:**

1. **Mențineți Registrul Central**
   - Mențineți un **Registru Centralizat al Sistemelor de IA** (TMP-AI-CLS-002) pentru toate sistemele de IA din organizație
   - Registrul trebuie să includă, la minimum:
     - Numele sistemului și ID-ul unic
     - Proprietarul sistemului și informațiile de contact
     - Descriere scurtă a scopului intenționat
     - Clasificare (Interzis, Risc Ridicat, Risc Limitat, Risc Minimal, GPAI)
     - Data clasificării
     - Justificarea clasificării
     - Status (În Dezvoltare, Implementat, Dezafectat)
     - Pentru GPAI: Tipul de furnizor (upstream/downstream), desemnarea riscului sistemic

2. **Actualizați Registrul**
   - Actualizați registrul ori de câte ori un sistem nou este clasificat
   - Actualizați registrul ori de câte ori clasificarea unui sistem se modifică
   - Actualizați registrul ori de câte ori statusul unui sistem se modifică

3. **Revizuire și Guvernanță**
   - Registrul este sursa unică de adevăr pentru clasificările sistemelor de IA
   - Registrul este revizuit trimestrial de Comitetul de Guvernanță IA
   - Orice discrepanțe sau întrebări sunt escalatate către Managerul Programului Actul IA

**Dovezi Necesare:**
- Un Registru al Sistemelor de IA actualizat
- Minute de revizuire trimestrială de la Comitetul de Guvernanță IA

**Temporizare:** Continuu

---

#### **Pasul 2.2: Reclasificare la Modificare Substanțială (Control CLS-008)**

**Când:** Ori de câte ori se propune o modificare substanțială pentru un sistem de IA existent

**Cine:** Proprietarul Sistemului de IA

**Cum:**

1. **Identificați Modificarea Substanțială**
   - O modificare substanțială este definită ca orice modificare care ar putea afecta clasificarea sistemului, inclusiv:
     - Modificarea scopului intenționat
     - Modificare semnificativă a arhitecturii modelului
     - Modificare a datelor utilizate care ar putea altera profilul de risc
     - Modificare a contextului de implementare sau a utilizatorilor țintă ai sistemului

2. **Inițiați Reclasificarea**
   - Proprietarul Sistemului de IA notifică Managerul Programului Actul IA despre modificarea propusă
   - Managerul Programului Actul IA inițiază un proces complet de reclasificare, începând de la **Pasul 1.1: Verificare Practici Interzise**

3. **Efectuați Evaluarea Completă**
   - Sistemul este tratat ca un sistem nou și toate pașii de clasificare sunt reluați
   - Nu se poate începe nicio lucrare de dezvoltare la modificarea substanțială până când reclasificarea nu este completă și aprobată

4. **Actualizați Registrul**
   - La finalizarea reclasificării, Registrul Sistemelor de IA este actualizat cu noua clasificare (dacă s-a modificat) și data modificării

**Dovezi Necesare:**
- O evaluare de clasificare nouă, completă pentru sistemul modificat
- Înregistrare actualizată în Registrul Sistemelor de IA
- Documentația modificării substanțiale și justificarea acesteia

**Temporizare:** Înainte ca modificarea să fie implementată

---

#### **Pasul 2.3: Revizuire Anuală a Clasificării (Control CLS-009)**

**Când:** Anual pentru toate sistemele de IA implementate

**Cine:** Managerul Programului Actul IA

**Cum:**

1. **Programați Revizuirea Anuală**
   - Programați o revizuire anuală a tuturor sistemelor de IA implementate, de obicei în Q1 al fiecărui an
   - Notificați toți Proprietarii de Sisteme de IA despre programul de revizuire

2. **Efectuați Revizuirea**
   - Pentru fiecare sistem de IA implementat, revizuiți:
     - Dacă clasificarea sistemului rămâne precisă pe baza implementării și utilizării curente
     - Dacă au existat modificări ale Actului IA sau actelor sale de implementare care ar putea afecta clasificarea
     - Dacă au existat incidente sau probleme care ar putea afecta clasificarea
   - Completați **Formularul de Revizuire Anuală a Clasificării** (parte din TMP-AI-CLS-001)

3. **Actualizați Clasificările**
   - Dacă revizuirea identifică că clasificarea unui sistem ar trebui să se modifice, inițiați un proces formal de reclasificare
   - Actualizați Registrul Sistemelor de IA cu rezultatele revizuirii

4. **Raportați Rezultatele**
   - Pregătiți **Raportul de Revizuire Anuală a Clasificării** (REC-AI-CLS-006)
   - Prezentați rezultatele Comitetului de Guvernanță IA
   - Evidențiați orice sisteme cu clasificări modificate sau orice zone de îngrijorare

**Dovezi Necesare:**
- Înregistrarea revizuirii anuale a clasificării, inclusiv o listă a tuturor sistemelor revizuite și rezultatul
- Formularul de Revizuire Anuală a Clasificării (parte din TMP-AI-CLS-001)
- Minute de la ședința Comitetului de Guvernanță IA unde a fost prezentată revizuirea
- Raport de Revizuire Anuală a Clasificării (REC-AI-CLS-006)

**Temporizare:** Anual

---

## 5. CLASIFICAREA IA CU SCOP GENERAL (GPAI)

### 5.1 Identificarea Modelului GPAI

**Când:** La evaluarea oricărui model de IA care ar putea fi un model GPAI

**Cine:** Responsabilul Conformitate GPAI + Proprietarul Sistemului de IA

**Bază Regulamentară:** Articolele 51-56 ale Actului UE privind IA

**Cum:**

1. **Evaluați Criteriile GPAI**

   Un model de IA cu Scop General este definit ca un model de IA care:
   - Afișează generalitate semnificativă
   - Este capabil să efectueze competent o gamă largă de sarcini distincte
   - Poate fi integrat într-o varietate de sisteme sau aplicații downstream (cu excepția instrumentelor pentru C&D înainte de lansarea pe piață)

   Completați **Evaluarea de Identificare a Modelului GPAI** (parte din TMP-AI-CLS-003)

2. **Determinați Tipul de Furnizor**

   | Tipul de Furnizor | Definiție | Obligații |
   |---------------|------------|-------------|
   | **Furnizor Model GPAI** | Dezvoltă sau are un model GPAI dezvoltat și îl lansează pe piață sub propriul nume/marcă comercială | Obligațiile Articolelor 53-54; documentație tehnică; fișe model; conformitate drepturi de autor |
   | **Furnizor Downstream** | Folosește modelul GPAI pentru a dezvolta/implementa sistemul de IA | Conformitate cu cerințele la nivel de sistem; due diligence la furnizorul upstream |

3. **Evaluați Plasarea pe Piață**
   - Este modelul lansat sub o licență gratuită și open-source?
   - Codul sursă, parametrii modelului și datele de instruire sunt disponibile public?
   - Modelul îndeplinește scutirile pentru gratuit și open-source conform Articolului 51(2)?

4. **Documentați Determinarea GPAI**
   - Completați Raportul de Identificare a Modelului GPAI (REC-AI-GPAI-001)
   - Înregistrați tipul de furnizor și statusul de scutire
   - Adăugați în Registrul Sistemelor de IA cu desemnarea GPAI

**Dovezi Necesare:**
- Evaluare de Identificare a Modelului GPAI (parte din TMP-AI-CLS-003)
- Raport de Identificare a Modelului GPAI (REC-AI-GPAI-001)
- Registrul Sistemelor de IA actualizat

**Temporizare:** 2-3 zile

---

### 5.2 Evaluarea Riscului Sistemic

**Când:** Pentru toate modelele GPAI identificate în Pasul 5.1

**Cine:** Responsabilul Conformitate GPAI + Echipa Tehnică

**Bază Regulamentară:** Articolul 51(1)(b) definește modelele GPAI cu risc sistemic

**Cum:**

1. **Aplicați Testul Pragului Computațional**

   **Test Primar:** Modelul GPAI are capabilități de impact ridicat, determinate prin:
   - Calculul de instruire utilizat pentru instruirea modelului ≥ **10²⁵ operații în virgulă mobilă (FLOPs)**?

   | Nivel de Calcul | Clasificare | Obligații |
   |---------------|---------------|-------------|
   | < 10²⁵ FLOPs | GPAI Standard | Articolele 53-54 |
   | ≥ 10²⁵ FLOPs | GPAI cu Risc Sistemic | Articolele 53-55 (îmbunătățite) |

2. **Aplicați Testul Alternativ de Desemnare**

   Chiar dacă este sub pragul FLOP, Biroul European pentru IA poate desemna un model ca având risc sistemic pe baza:
   - Capacităților sau impactului echivalent cu modelele la/peste pragul FLOP
   - Raționamentul bazat pe criteriile din Anexa XIII:
     - Numărul de parametri
     - Calitatea sau dimensiunea setului de date de instruire
     - Modalități (text, imagine, audio, video)
     - Instrumente și nivel de autonomie
     - Riscul specific prezentat de model
     - Acoperire (număr de utilizatori, venituri)
     - Cota de piață

3. **Documentați Determinarea Riscului Sistemic**

   Completați **Evaluarea Riscului Sistemic GPAI** (parte din TMP-AI-CLS-003):
   - Calculul calculului de instruire și documentația
   - Evaluarea criteriilor din Anexa XIII
   - Statusul desemnării Biroului European pentru IA (dacă este aplicabil)
   - Justificarea determinării riscului sistemic

4. **Aplicați Obligații Îmbunătățite (dacă există Risc Sistemic)**

   Dacă este clasificat ca GPAI cu risc sistemic, se aplică următoarele obligații **adiționale**:

   | Obligație | Articol | Descriere |
   |------------|---------|-------------|
   | Evaluare Model | 55(1)(a) | Efectuează și documentează evaluarea modelului conform protocoalelor standardizate |
   | Testare Adversarială | 55(1)(b) | Evaluează și atenuează riscurile sistemice (red teaming, testare adversarială) |
   | Urmărire Incidente | 55(1)(c) | Urmărește, documentează și raportează incidentele grave |
   | Securitate Cibernetică | 55(1)(d) | Asigură un nivel adecvat de protecție de securitate cibernetică |
   | Coduri de Practică | 56 | Urmează coduri de practică sau standarde armonizate |

5. **Înregistrați Determinarea Riscului Sistemic**
   - Actualizați Registrul Sistemelor de IA cu desemnarea riscului sistemic
   - Notificați Comitetul de Guvernanță IA despre clasificarea riscului sistemic
   - Implementați monitorizarea și controalele îmbunătățite

**Dovezi Necesare:**
- Evaluare Risc Sistemic GPAI (parte din TMP-AI-CLS-003)
- Calcule ale calculului de instruire și documentația
- Evaluarea criteriilor din Anexa XIII
- Documentația desemnării Biroului European pentru IA (dacă este aplicabil)
- Registrul Sistemelor de IA actualizat
- Notificarea Comitetului de Guvernanță IA

**Temporizare:** 1-2 săptămâni

**Verificare Calitate:**
- Calculele calculului de instruire sunt precise și verificabile
- Criteriile din Anexa XIII sunt documentate amănunțit
- Obligațiile îmbunătățite sunt identificate și atribuite

---

### 5.3 Matricea Obligațiilor Furnizorului GPAI

| Obligație | GPAI Standard (Art. 53) | GPAI Risc Sistemic (Art. 55) |
|------------|------------------------|------------------------------|
| **Documentație Tehnică** | ✅ Necesar | ✅ Necesar + Îmbunătățit |
| **Informații către Furnizorii Downstream** | ✅ Necesar | ✅ Necesar |
| **Politică de Conformitate Drepturi de Autor** | ✅ Necesar | ✅ Necesar |
| **Rezumat Disponibil Public** | ✅ Necesar | ✅ Necesar |
| **Protocol Evaluare Model** | ❌ Nu este Necesar | ✅ Necesar |
| **Evaluare Risc Sistemic** | ❌ Nu este Necesar | ✅ Necesar |
| **Testare Adversarială** | ❌ Nu este Necesar | ✅ Necesar |
| **Urmărire Incidente Grave** | ❌ Nu este Necesar | ✅ Necesar |
| **Măsuri de Securitate Cibernetică** | ❌ Nu este Necesar | ✅ Necesar |

### 5.4 Scutiri pentru Gratuit și Open-Source

**Criterii de Scutire conform Articolului 51(2):**

Modelele GPAI lansate sub o licență gratuită și open-source sunt scutite de anumite obligații dacă:

1. **Tipul de Licență:**
   - Model lansat sub licență gratuită și open-source
   - Licența permite accesul, utilizarea, modificarea și distribuția

2. **Disponibilitate Publică:**
   - Parametrii modelului (inclusiv greutăți, biasuri, arhitectură)
   - Informații despre datele de instruire (caracteristicile setului de date, proveniența, metodologiile)
   - Codul de instruire (dacă este fezabil din punct de vedere tehnic)

3. **Excluderi de la Scutire:**
   - Scutirea **NU** se aplică dacă:
     - Modelul se califică ca GPAI cu risc sistemic conform Articolului 51(1)(b)
     - Furnizorul aplică restricții downstream care contrazic licența gratuită/deschisă

**Cerințe de Documentare pentru Scutire:**
- Verificați că licența este o licență open-source aprobată (aprobată OSI, Creative Commons, etc.)
- Documentați disponibilitatea publică a modelului, parametrilor, informațiilor despre datele de instruire
- Confirmați că nu se aplică nicio desemnare de risc sistemic
- Înregistrați scutirea în Registrul Sistemelor de IA

---

### 5.5 Due Diligence Furnizor Downstream GPAI

**Când:** La integrarea modelelor GPAI de la furnizorii upstream în sistemele de IA

**Cine:** Proprietarul Sistemului de IA + Responsabilul Conformitate GPAI

**Cum:**

1. **Verificați Conformitatea Furnizorului Upstream**
   - Solicitați și revizuiți documentația modelului GPAI (conformitate Articolul 53)
   - Verificați că furnizorul upstream este înregistrat în registrul de conformitate UE
   - Solicitați fișa modelului și documentația tehnică
   - Evaluați postura de conformitate cu Actul UE privind IA a furnizorului upstream

2. **Evaluați Clasificarea la Nivel de Sistem**
   - Chiar dacă se utilizează un model GPAI conform, evaluați clasificarea sistemului downstream
   - Aplicați procesul standard de clasificare (Pașii 1.1-1.5)
   - Documentați cum este integrat și utilizat modelul GPAI

3. **Documentați Due Diligence**
   - Completați **Evaluarea Furnizorului Downstream GPAI** (parte din TMP-AI-CLS-003)
   - Înregistrați verificarea conformității furnizorului upstream
   - Documentați clasificarea la nivel de sistem
   - Adăugați în Registrul Sistemelor de IA

**Dovezi Necesare:**
- Evaluarea Furnizorului Downstream GPAI (parte din TMP-AI-CLS-003)
- Documentația furnizorului upstream (fișă model, documente tehnice)
- Verificarea conformității furnizorului upstream
- Documentația clasificării la nivel de sistem

**Temporizare:** 1 săptămână

---

## 6. MECANISME DE CONTROL

Această secțiune documentează cele 7 controale de clasificare care asigură o clasificare precisă, completă și auditabilă a sistemelor de IA.

### 6.1 Control CLS-001: Categorizare Sistem (Preventiv, Critic)

**Obiectiv Control:** Asigurați că toate sistemele de IA sunt identificate și categorizate pentru evaluarea clasificării

**Descriere Control:**
- Toate sistemele de IA și modelele GPAI sunt înregistrate în Registrul Sistemelor de IA la inițiere
- ID-uri unice de clasificare sunt atribuite (format CLS-YYYY-NNN)
- Proprietarul sistemului și rolurile părților interesate sunt atribuite
- Categorizarea inițială determină calea de clasificare (sistem de IA standard vs. model GPAI)

**Activități Control:**
- Proces de admitere pentru noi propuneri de sistem de IA
- Atribuirea și urmărirea ID-ului de clasificare
- Atribuirea rolurilor (Proprietar Sistem, Lider Tehnic, etc.)
- Determinarea inițială GPAI vs. IA standard

**Proprietar Control:** Managerul Programului Actul IA

**Frecvență Control:** La inițierea fiecărui sistem/model de IA nou

**Abordare Testare:**
- Eșantion de 20 de sisteme de IA din registru
- Verificați că toate au ID-uri de clasificare și proprietari atribuiți
- Verificați că toate au trecut prin evaluarea de categorizare inițială
- Verificați 100% completitudine a documentației de admitere

**Indicator Performanță:** % din sistemele noi de IA înregistrate în 1 săptămână de la inițiere (Țintă: 100%)

---

### 6.2 Control CLS-002: Aplicarea Criteriilor de Risc (Preventiv, Critic)

**Obiectiv Control:** Asigurați că criteriile de clasificare sunt aplicate cu acuratețe și consecvență conform cerințelor Actului UE privind IA

**Descriere Control:**
- Verificarea practicilor interzise este obligatorie pentru toate sistemele
- Criteriile Anexei I și Anexei III sunt aplicate sistematic
- Pragurile de risc sistemic GPAI sunt calculate și documentate
- Revizuirea juridică este obținută pentru cazurile limită

**Activități Control:**
- Completarea listei de verificare a practicilor interzise (Articolul 5)
- Aplicarea testului în trei părți al Anexei I
- Aplicarea mapării cazurilor de utilizare din Anexa III
- Calculul pragului FLOP pentru GPAI
- Revizuirea juridică CLO pentru practici interzise

**Proprietar Control:** Managerul Programului Actul IA (cu CLO pentru revizuirea juridică)

**Frecvență Control:** Pentru fiecare evaluare de clasificare

**Abordare Testare:**
- Eșantion de 20 de evaluări de clasificare
- Verificați că toți pașii din arborele decizional au fost completați
- Verificați că aprobarea CLO a fost obținută pentru evaluările practicilor interzise
- Verificați că criteriile Anexei I/III au fost aplicate corect
- Verificați că calculele FLOP pentru GPAI sunt precise

**Indicator Performanță:** % din clasificări cu aplicarea completă a criteriilor (Țintă: 100%)

---

### 6.3 Control CLS-003: Documentarea Clasificării (Preventiv, Ridicat)

**Obiectiv Control:** Asigurați că deciziile de clasificare sunt complet documentate cu dovezi și justificare

**Descriere Control:**
- Toate evaluările de clasificare sunt documentate în șabloane standardizate
- Dovezile care susțin deciziile de clasificare sunt colectate și păstrate
- Justificarea pentru clasificările limită sau complexe este documentată
- Documentația este revizuită și aprobată înainte de finalizare

**Activități Control:**
- Completarea formularelor de evaluare a clasificării
- Colectarea dovezilor de susținere (specificații tehnice, descrieri ale cazurilor de utilizare)
- Documentarea justificării clasificării
- Revizuirea și aprobarea de către Managerul Programului Actul IA
- Arhivarea în depozitul de clasificare

**Proprietar Control:** Proprietarul Sistemului de IA (execuție), Managerul Programului Actul IA (aprobare)

**Frecvență Control:** Pentru fiecare clasificare

**Abordare Testare:**
- Eșantion de 20 de decizii de clasificare
- Verificați că toată documentația obligatorie este completă
- Verificați că dovezile susțin concluzia clasificării
- Verificați că semnăturile de aprobare au fost obținute
- Verificați că documentația este stocată conform politicii de păstrare

**Indicator Performanță:** % din clasificări cu documentație completă (Țintă: 100%)

---

### 6.4 Control CLS-004: Revizuirea Clasificării (Detectiv, Ridicat)

**Obiectiv Control:** Asigurați că deciziile de clasificare sunt revizuite și validate de autoritatea competentă

**Descriere Control:**
- Toate clasificările de risc ridicat sunt revizuite și aprobate de Comitetul de Guvernanță IA
- Determinările privind practicile interzise sunt revizuite și aprobate de CLO
- Clasificările de risc sistemic GPAI sunt revizuite de Responsabilul Conformitate GPAI
- Deciziile de clasificare sunt contestate și validate prin revizuire colegială

**Activități Control:**
- Ședințe de revizuire ale Comitetului de Guvernanță IA pentru clasificări de risc ridicat
- Revizuirea juridică CLO pentru practici interzise
- Revizuirea Responsabilului Conformitate GPAI pentru modele cu risc sistemic
- Revizuirea colegială a justificării clasificării
- Procesul de escaladare pentru clasificări disputate

**Proprietar Control:** Comitetul de Guvernanță IA (risc ridicat), CLO (interzis), Responsabil GPAI (GPAI)

**Frecvență Control:** Pentru fiecare clasificare de risc ridicat, interzis sau risc sistemic GPAI

**Abordare Testare:**
- Eșantion de 20 de clasificări de risc ridicat
- Verificați că aprobarea Comitetului de Guvernanță IA a fost obținută
- Verificați aprobarea CLO la evaluările practicilor interzise
- Verificați aprobarea Responsabilului GPAI la determinările de risc sistemic
- Revizuiți minutele de ședință pentru dovezi de contestare și validare

**Indicator Performanță:** % din clasificările de risc ridicat cu aprobare de guvernanță (Țintă: 100%)

---

### 6.5 Control CLS-005: Gestionarea Modificărilor de Clasificare (Preventiv, Ridicat)

**Obiectiv Control:** Asigurați că modificările de clasificare sunt identificate, evaluate și aprobate înainte de implementare

**Descriere Control:**
- Modificările substanțiale declanșează evaluarea de reclasificare
- Revizuirile anuale identifică modificări care necesită reclasificare
- Reclasificarea urmează același proces ca și clasificarea inițială
- Modificările de clasificare sunt documentate și comunicate părților interesate

**Activități Control:**
- Identificarea și notificarea modificării substanțiale
- Execuția evaluării de reclasificare
- Procesul de revizuire anuală a clasificării
- Aprobarea și comunicarea modificării clasificării
- Actualizarea Registrului Sistemelor de IA

**Proprietar Control:** Managerul Programului Actul IA

**Frecvență Control:** La modificarea substanțială, anual

**Abordare Testare:**
- Eșantion de 10 modificări substanțiale
- Verificați că reclasificarea a fost declanșată
- Verificați că reclasificarea a urmat procesul complet
- Verificați că modificările de clasificare au fost aprobate
- Verificați că Registrul Sistemelor de IA a fost actualizat

**Indicator Performanță:** % din modificările substanțiale care declanșează reclasificarea (Țintă: 100%)

---

### 6.6 Control CLS-006: Monitorizarea Regulamentară (Detectiv, Mediu)

**Obiectiv Control:** Asigurați că modificările Actului UE privind IA și actele de implementare sunt monitorizate și încorporate în procesul de clasificare

**Descriere Control:**
- Actul UE privind IA și actele de implementare sunt monitorizate pentru modificări
- Modificările care afectează criteriile de clasificare sunt identificate
- Procedurile și șabloanele de clasificare sunt actualizate
- Sistemele de IA afectate sunt reclasificate dacă este necesar

**Activități Control:**
- Revizuirea trimestrială de monitorizare regulamentară
- Evaluarea impactului modificărilor
- Actualizarea procedurilor și șabloanelor
- Comunicarea către părțile interesate
- Reclasificare țintită a sistemelor afectate

**Proprietar Control:** Managerul Programului Actul IA

**Frecvență Control:** Trimestrial

**Abordare Testare:**
- Revizuiți jurnalele de monitorizare regulamentară
- Verificați că revizuirile trimestriale au fost efectuate
- Verificați că modificările identificate au fost evaluate pentru impact
- Verificați că procedurile au fost actualizate în 30 de zile de la modificarea regulamentară
- Verificați că sistemele afectate au fost reclasificate

**Indicator Performanță:** Zile de la modificarea regulamentară la actualizarea procedurii (Țintă: < 30 de zile)

---

### 6.7 Control CLS-007: Pistă de Audit a Clasificării (Detectiv, Ridicat)

**Obiectiv Control:** Asigurați pistă de audit completă și rezistentă la manipulare pentru toate deciziile și modificările de clasificare

**Descriere Control:**
- Toate activitățile de clasificare sunt înregistrate cu marcaje temporale și ID-uri de utilizator
- Istoricul clasificării este menținut pentru fiecare sistem de IA
- Modificările clasificărilor sunt înregistrate cu justificare
- Pista de audit este păstrată timp de 10 ani conform cerințelor Actului UE privind IA

**Activități Control:**
- Înregistrarea automată a activităților de clasificare
- Controlul versiunilor pentru documentele de clasificare
- Menținerea jurnalului de modificări în Registrul Sistemelor de IA
- Revizuirea anuală a pistei de audit
- Arhivare și păstrare securizată

**Proprietar Control:** Managerul Programului Actul IA

**Frecvență Control:** Continuu (înregistrare automată), revizuire anuală

**Abordare Testare:**
- Eșantion de 20 de sisteme de IA
- Verificați că istoricul complet al clasificării este disponibil
- Verificați că toate modificările sunt înregistrate cu justificare
- Verificați integritatea pistei de audit (fără lacune sau manipulare)
- Verificați conformitatea cu politica de păstrare

**Indicator Performanță:** % din sistemele de IA cu pistă de audit completă (Țintă: 100%)

---

## 7. INDICATORI DE PERFORMANȚĂ ȘI VALORI MĂSURATE

### 7.1 Indicatori de Performanță ai Procesului de Clasificare

| ID Indicator | Nume Indicator | Definiție | Țintă | Frecvență | Proprietar |
|--------|----------|------------|--------|-----------|-------|
| **KPI-CLS-001** | Timp Finalizare Clasificare | Zile de la inițiere la clasificarea finală | ≤ 14 zile | Per clasificare | Managerul Programului Actul IA |
| **KPI-CLS-002** | Acoperire Clasificare | % din sistemele de IA cu clasificare documentată | 100% | Lunar | Managerul Programului Actul IA |
| **KPI-CLS-003** | Rata Verificare Practici Interzise | % din sistemele noi verificate pentru practici interzise | 100% | Lunar | Managerul Programului Actul IA |
| **KPI-CLS-004** | Finalizare Revizuire CLO | % din cazurile limită cu aprobare CLO | 100% | Lunar | Directorul Juridic |
| **KPI-CLS-005** | Aprobare Guvernanță Risc Ridicat | % din clasificările de risc ridicat cu aprobare Comitet Gov IA | 100% | Trimestrial | Comitetul de Guvernanță IA |
| **KPI-CLS-006** | Rata Declanșare Reclasificare | % din modificările substanțiale care declanșează reclasificarea | 100% | Trimestrial | Managerul Programului Actul IA |
| **KPI-CLS-007** | Finalizare Revizuire Anuală | % din sistemele implementate revizuite anual | 100% | Anual | Managerul Programului Actul IA |
| **KPI-CLS-008** | Completitudine Documentație Clasificare | % din clasificări cu toată documentația obligatorie | 100% | Trimestrial | Managerul Programului Actul IA |
| **KPI-CLS-009** | Rata Acuratețe Clasificare | % din clasificări confirmate precise la audit/revizuire | ≥ 95% | Anual | Audit Intern |
| **KPI-CLS-010** | Rata Identificare Model GPAI | % din modelele GPAI identificate corect | 100% | Trimestrial | Responsabilul Conformitate GPAI |

### 7.2 Indicatori de Performanță Specifici GPAI

| ID Indicator | Nume Indicator | Definiție | Țintă | Frecvență | Proprietar |
|--------|----------|------------|--------|-----------|-------|
| **KPI-GPAI-001** | Timp Evaluare Risc Sistemic | Zile de la identificarea GPAI la determinarea riscului sistemic | ≤ 10 zile | Per model GPAI | Responsabilul Conformitate GPAI |
| **KPI-GPAI-002** | Acuratețe Calcul FLOP | % din calculele FLOP verificate și precise | 100% | Per model GPAI | Responsabilul Conformitate GPAI |
| **KPI-GPAI-003** | Due Diligence Furnizor Upstream | % din furnizorii GPAI upstream cu due diligence completat | 100% | Trimestrial | Responsabilul Conformitate GPAI |
| **KPI-GPAI-004** | Verificare Scutire Gratuit/Open-Source | % din scutirile FOSS cu verificare completă | 100% | Per model GPAI | Responsabilul Conformitate GPAI |

### 7.3 Raportare și Escaladare Indicatori

**Raportare Lunară:**
- Tendințe timp finalizare clasificare
- Status acoperire clasificare
- Rata verificare practici interzise
- Finalizare revizuire CLO

**Raportare Trimestrială către Comitetul de Guvernanță IA:**
- Toți indicatorii lunari
- Rata aprobare guvernanță risc ridicat
- Rata declanșare reclasificare
- Indicatori specifici GPAI
- Analiza tendințelor și recomandări

**Raportare Anuală:**
- Toți indicatorii trimestriali
- Finalizare revizuire anuală
- Rata acuratețe clasificare (rezultate audit)
- Tendințe de la an la an
- Recomandări îmbunătățire proces

**Praguri de Escaladare:**
- Orice indicator sub țintă → Escaladare către Managerul Programului Actul IA
- Acoperire clasificare < 95% → Escaladare către Comitetul de Guvernanță IA
- Acuratețe clasificare < 95% → Escaladare către Directorul Juridic

---

## 8. CERINȚE DE DOCUMENTARE

### 8.1 Șabloane și Formulare de Clasificare

**TMP-AI-CLS-001: Registru de Lucru Clasificare Sistem IA**
- Foaie 1: Formular Cerere Clasificare
- Foaie 2: Formular Evaluare Practici Interzise (cu textul exact al Articolului 5(1))
- Foaie 3: Formular Evaluare Anexa I
- Foaie 4: Formular Evaluare Anexa III
- Foaie 5: Formular Evaluare Risc Semnificativ de Prejudiciu
- Foaie 6: Formular Evaluare Risc Limitat
- Foaie 7: Formular Revizuire Anuală Clasificare

**TMP-AI-CLS-002: Registrul Sistemelor de IA**
- Bază de date centrală a tuturor sistemelor de IA și clasificărilor acestora
- Câmpuri: ID Sistem, Nume, Proprietar, Descriere, Clasificare, Justificare, Status, Date

**TMP-AI-CLS-003: Registru de Lucru Clasificare GPAI**
- Foaie 1: Evaluare Identificare Model GPAI
- Foaie 2: Evaluare Risc Sistemic GPAI (calcul FLOP, Anexa XIII)
- Foaie 3: Evaluare Furnizor Downstream GPAI
- Foaie 4: Verificare Scutire Gratuit/Open-Source

### 8.2 Înregistrări de Clasificare

| ID Înregistrare | Nume Înregistrare | Conținut | Păstrare |
|-----------|-------------|---------|-----------|
| REC-AI-CLS-001 | Raport Verificare Practici Interzise | Rezultate evaluare, opinie CLO, decizie | 10 ani |
| REC-AI-CLS-002 | Raport Evaluare Anexa I | Rezultate test trei părți, dovezi, decizie | 10 ani |
| REC-AI-CLS-003 | Raport Evaluare Anexa III | Mapare caz utilizare, dovezi, decizie | 10 ani |
| REC-AI-CLS-004 | Raport Evaluare Risc Semnificativ Prejudiciu | Factori risc, scenarii, analiză, decizie | 10 ani |
| REC-AI-CLS-005 | Formular Evaluare Risc Limitat | Evaluare obligații transparență | 10 ani |
| REC-AI-CLS-006 | Raport Revizuire Anuală Clasificare | Rezultate revizuire anuală, modificări, recomandări | 10 ani |
| REC-AI-GPAI-001 | Raport Identificare Model GPAI | Determinare GPAI, tip furnizor, scutiri | 10 ani |
| REC-AI-GPAI-002 | Raport Risc Sistemic GPAI | Calcul FLOP, criterii Anexa XIII, determinare | 10 ani |

### 8.3 Înregistrări de Guvernanță

| ID Înregistrare | Nume Înregistrare | Păstrare |
|-----------|-------------|-----------|
| REC-AI-CLS-GOVMIN-001 | Minute Ședințe Comitet Guvernanță IA | 10 ani |
| REC-AI-CLS-CLOREVIEW-001 | Înregistrări Opinii Juridice CLO | 10 ani |
| REC-AI-CLS-ESCALATION-001 | Înregistrări Escaladare Clasificare | 10 ani |

---

## 9. REVIZUIRE ȘI AUDIT

### 9.1 Verificări de Calitate

| Pas | Verificare Calitate | Metodă Verificare |
|---|---|---|
| 1.1 | 100% din sistemele noi verificate pentru practici interzise | Audit Registru Sisteme IA |
| 1.1 | Aprobare CLO obținută pentru cazuri limită | Revizuire înregistrări aprobare CLO |
| 1.2 | Evaluare Anexa I completă și documentată | Revizuire formulare evaluare |
| 1.3 | Mapare Anexa III precisă și justificată | Revizuire formulare evaluare |
| 1.4 | Evaluare risc amănunțită și bazată pe dovezi | Revizuire rapoarte evaluare |
| 2.1 | Registru menținut și actual | Revizuire trimestrială registru |
| 2.2 | Reclasificare declanșată pentru modificări substanțiale | Audit înregistrări modificări |
| 2.3 | Revizuire anuală finalizată pentru toate sistemele | Revizuire raport revizuire anuală |
| 5.1 | Modele GPAI identificate corect | Revizuire evaluări identificare GPAI |
| 5.2 | Calcule FLOP precise și documentate | Revizuire tehnică calcule |

### 9.2 Proceduri de Verificare Audit

Auditorii interni vor verifica:

1. **Completitudine:** Toate sistemele de IA au fost clasificate
2. **Acuratețe:** Clasificările sunt precise pe baza criteriilor de evaluare
3. **Documentație:** Toată documentația necesară este completă și semnată
4. **Oportunitate:** Clasificările sunt finalizate în termenele cerute
5. **Guvernanță:** Clasificările de risc ridicat au fost aprobate de Comitetul de Guvernanță IA
6. **Actualizări:** Registrul Sistemelor de IA este menținut și actual
7. **Conformitate GPAI:** Modelele GPAI sunt identificate corect și riscul sistemic evaluat
8. **Eficacitatea Controalelor:** Toate cele 7 controale de clasificare funcționează eficient

### 9.3 Programul de Audit Anual

| Activitate Audit | Domeniu | Frecvență | Auditor |
|----------------|-------|-----------|---------|
| Audit Proces Clasificare | Toate clasificările din anul anterior | Anual | Audit Intern |
| Audit Conformitate GPAI | Toate modelele și evaluările GPAI | Anual | Audit Intern + Responsabil GPAI |
| Testare Controale | Testare 7 controale clasificare | Anual | Audit Intern |
| Revizuire Acuratețe Registru | Verificare registru vs. sisteme reale | Anual | Managerul Programului Actul IA |
| Completitudine Documentație | Eșantion 20 clasificări | Trimestrial | Responsabil Conformitate |

---

## 10. GESTIONAREA NECONFORMITĂȚILOR

### 10.1 Declanșatori de Neconformitate

| Declanșator | Gravitate | Acțiune Necesară |
|---------|----------|-----------------|
| **Sistem interzis implementat** | Critică | Oprire imediată implementare; escaladare CLO; notificare autoritate |
| **Sistem risc ridicat implementat fără clasificare** | Ridicată | Oprire imediată implementare; clasificare expediată; revizuire guvernanță |
| **Documentație clasificare lipsă** | Medie | Revizuire clasificare; remediere documentație; termen 30 zile |
| **Reclasificare nedeclanșată** | Medie | Reclasificare imediată; analiză cauză rădăcină |
| **Revizuire anuală nefinalizată** | Scăzută | Finalizare în 30 zile; îmbunătățire proces |

### 10.2 Procesul de Escaladare a Neconformității

1. **Identificați Neconformitatea**
   - Prin audit, revizuire sau incident
   - Documentați constatarea de neconformitate

2. **Evaluați Gravitatea**
   - Aplicați criteriile de gravitate (Critică, Ridicată, Medie, Scăzută)
   - Determinați acțiunile imediate necesare

3. **Escaladați conform Gravității**
   - Critică → Comitetul de Guvernanță IA + CLO (imediat)
   - Ridicată → Managerul Programului Actul IA + Directorul de Produs (în 24 ore)
   - Medie → Managerul Programului Actul IA (în 3 zile lucrătoare)
   - Scăzută → Proprietarul Sistemului de IA (în 1 săptămână)

4. **Remediați Neconformitatea**
   - Executați acțiunile necesare conform gravității
   - Documentați activitățile de remediere
   - Verificați eficacitatea remedierii

5. **Analiză Cauză Rădăcină**
   - Identificați de ce a apărut neconformitatea
   - Implementați acțiuni corective
   - Actualizați procedurile dacă este necesar

6. **Închideți Neconformitatea**
   - Verificați că toate acțiunile au fost finalizate
   - Documentați închiderea și lecțiile învățate
   - Raportați către Comitetul de Guvernanță IA

### 10.3 Notificarea Autorității

Dacă un sistem de IA interzis a fost dezvoltat sau implementat, autoritatea națională competentă trebuie notificată conform Articolului 73:
- Notificare în 15 zile de la descoperire
- Includeți descriere, evaluare clasificare, acțiuni de remediere
- Cooperați cu investigația autorității
- Documentați toate comunicările

---

## 11. DOCUMENTE AFERENTE

### 11.1 Politici și Standarde

- POL-AI-001: Politica de Guvernanță IA
- STD-AI-001: Standardul de Clasificare a Sistemelor de IA
- STD-AI-002: Standardul de Gestionare a Riscului IA

### 11.2 Proceduri

- PROC-AI-RM-001: Procedura de Gestionare a Riscului IA
- PROC-AI-DATA-001: Procedura de Guvernanță a Datelor IA
- PROC-AI-QMS-001: Procedura de Gestionare a Calității IA
- PROC-AI-DOC-001: Procedura de Documentație Tehnică IA
- PROC-AI-INC-001: Procedura de Răspuns la Incidente IA
- PROC-AI-VENDOR-001: Procedura de Gestionare a Furnizorilor IA

### 11.3 Referințe Regulamentare

- **Actul UE privind IA (Regulamentul (UE) 2024/1689):**
  - Articolul 5: Practici IA Interzise
  - Articolul 6: Reguli de Clasificare pentru Sistemele de IA cu Risc Ridicat (Anexa I)
  - Articolul 7: Amendamente la Lista Sistemelor de IA cu Risc Ridicat (Anexa III)
  - Articolul 50: Obligații de Transparență pentru Anumite Sisteme de IA
  - Articolele 51-56: Modele de IA cu Scop General
  - Articolul 73: Raportarea Incidentelor Grave
  - Anexa I: Lista Legislației de Armonizare a Uniunii
  - Anexa III: Sisteme de IA cu Risc Ridicat
  - Anexa XIII: Criterii pentru Clasificarea ca GPAI cu Risc Sistemic

---

## 12. ANEXE

### ANEXA A: ARBORE DECIZIONAL CLASIFICARE (DIAGRAMĂ VIZUALĂ)

```
┌─────────────────────────────────────────────────────────────────────┐
│        ARBORE DECIZIONAL CLASIFICARE SISTEME IA (DETALIAT)          │
└─────────────────────────────────────────────────────────────────────┘

START: Sistem sau Model de IA Nou
│
▼
┌─────────────────────────────────────┐
│ PASUL 1: IDENTIFICARE MODEL GPAI   │
│ (Secțiunea 5.1)                     │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  DA: Model GPAI            NU: Sistem IA Standard
     │                         │
     ▼                         │
┌──────────────────────────┐  │
│ Test Risc Sistemic GPAI  │  │
│ (Secțiunea 5.2)          │  │
│ - FLOP ≥ 10^25?          │  │
│ - Criterii Anexa XIII?   │  │
└────────┬────────┬────────┘  │
         │        │            │
    DA   │        │ NU         │
         │        │            │
         ▼        ▼            │
    GPAI cu      GPAI          │
    Risc         (Standard)    │
    Sistemic                   │
         │        │            │
         └────┬───┘            │
              │                │
              ▼                │
    Obligații Îmbunătățite     │
    (Articolele 53-55)         │
                               │
                               │
    ┌──────────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│ PASUL 2: VERIFICARE PRACTICI        │
│ INTERZISE (Articolul 5)             │
│ (Pasul 1.1)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  DA: Interzis              NU: Continuați
     │
     ▼
┌──────────────────────────┐
│ PRACTICĂ INTERZISĂ       │
│ Articolul 5(1)(a-h):     │
│ - Tehnici subliminale    │
│ - Exploatare vulnerab.   │
│ - Scoring social         │
│ - Biometrie timp real    │
│ - Recunoaștere emoții    │
│ - Emoții loc muncă/edu   │
│ - Colectare facială      │
│ - Profilare criminală    │
└────────┬─────────────────┘
         │
         ▼
    STOP: Nu se Poate Dezvolta
    Revizuire CLO Necesară
    Opriți Proiectul
         │
         └─→ FINAL

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ PASUL 3: RISC RIDICAT ANEXA I       │
│ (Articolul 6)                       │
│ (Pasul 1.2)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  DA: Componentă Siguranță  NU: Continuați
     │
     ▼
┌──────────────────────────┐
│ TEST TREI PĂRȚI:         │
│ 1. Produs Anexa I?       │
│ 2. Evaluare terți?       │
│ 3. Critic siguranță?     │
│ Toate DA?                │
└────────┬─────────────────┘
         │
         ▼
    RISC RIDICAT (Anexa I)
    Conformitate Completă Necesară
         │
         └─→ FINAL: Aplicați Controale Risc Ridicat

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ PASUL 4: RISC RIDICAT ANEXA III     │
│ (Articolul 7)                       │
│ (Pasul 1.3)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  DA: Caz Utilizare Anexa III  NU: Continuați
     │
     ▼
┌──────────────────────────┐
│ CATEGORII ANEXA III:     │
│ 1. Identificare biom.    │
│ 2. Infrastructură crit.  │
│ 3. Educație              │
│ 4. Ocupare forță muncă   │
│ 5. Servicii esențiale    │
│ 6. Aplicare lege         │
│ 7. Migrație/azil         │
│ 8. Justiție/democrație   │
└────────┬─────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ PASUL 5: EVALUARE RISC SEMNIFICATIV│
│ DE PREJUDICIU (Pasul 1.4)           │
│ Factori:                            │
│ - Intensitatea prejudiciului        │
│ - Amploare (# afectați)             │
│ - Vulnerabilitate persoane          │
│ - Reversibilitate                   │
│ - Probabilitate                     │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  DA: Risc Semnificativ     NU: Risc Scăzut
     │                         │
     ▼                         │
RISC RIDICAT (Anexa III)       │
Conformitate Completă Necesară │
     │                         │
     └─→ FINAL: Aplicați Controale
                               │
                  ┌────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│ PASUL 6: RISC LIMITAT               │
│ TRANSPARENȚĂ (Articolul 50)         │
│ (Pasul 1.5)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  DA: Obligații Transparență NU: Minimal
     │                         │
     ▼                         ▼
RISC LIMITAT                RISC MINIMAL
- Chatbots                  - Fără obligații specifice
- Recunoaștere emoții       - Practici recomandate
- Deepfakes                 - Coduri voluntare
- Categorizare biometrică
     │                         │
     └────────┬────────────────┘
              │
              ▼
         FINAL: Aplicați Controale Specifice Clasificării
```

---

### ANEXA B: GLOSAR DE TERMENI

| Termen | Definiție |
|------|------------|
| **Sistem de IA** | Un sistem bazat pe mașină conceput pentru a funcționa cu niveluri variabile de autonomie și care poate prezenta adaptabilitate după implementare și care, pentru obiective explicite sau implicite, deduce, din datele de intrare pe care le primește, cum să genereze rezultate precum predicții, conținut, recomandări sau decizii care pot influența medii fizice sau virtuale (Actul UE privind IA Art. 3(1)) |
| **Anexa I** | Lista legislației de armonizare a Uniunii unde sistemele de IA folosite ca componente de siguranță sunt considerate cu risc ridicat (mașini, jucării, dispozitive medicale, etc.) |
| **Anexa III** | Lista cu 8 cazuri de utilizare a sistemelor de IA cu risc ridicat (identificare biometrică, infrastructură critică, ocupare forță de muncă, servicii esențiale, aplicare lege, migrație, justiție, educație) |
| **Anexa XIII** | Criterii pentru clasificarea modelelor GPAI cu risc sistemic (parametri, calcul, set date, modalități, acoperire, cotă piață) |
| **Deployer (Utilizator)** | Orice persoană fizică sau juridică, autoritate publică, agenție sau alt organism care utilizează un sistem de IA sub autoritatea sa (Actul UE privind IA Art. 3(4)) |
| **Furnizor Downstream** | Furnizor care folosește un model de IA cu Scop General pentru a dezvolta un sistem de IA pentru plasare pe piață sau punere în serviciu |
| **FLOP (Operație în Virgulă Mobilă)** | Unitate de lucru computațional; 10^25 FLOPs este pragul pentru desemnarea riscului sistemic GPAI |
| **Model IA Gratuit și Open-Source** | Model de IA lansat sub o licență gratuită și open-source care permite accesul, utilizarea, modificarea și distribuția, cu parametrii modelului și informațiile de instruire disponibile public |
| **Drepturi Fundamentale** | Drepturi recunoscute de Carta Drepturilor Fundamentale a UE, inclusiv demnitatea, libertățile, egalitatea, solidaritatea, drepturile cetățenilor și justiția |
| **Model de IA cu Scop General (GPAI)** | Un model de IA care afișează generalitate semnificativă și este capabil să efectueze competent o gamă largă de sarcini distincte indiferent de modul în care modelul este plasat pe piață și care poate fi integrat într-o varietate de sisteme sau aplicații downstream (Actul UE privind IA Art. 3(63)) |
| **GPAI cu Risc Sistemic** | Un model GPAI care are capabilități de impact ridicat evaluate pe baza instrumentelor și metodologiilor tehnice adecvate, sau care a fost desemnat ca atare de Biroul European pentru IA |
| **Sistem de IA cu Risc Ridicat** | Un sistem de IA care fie: (1) este folosit ca componentă de siguranță a unui produs reglementat de legislația de armonizare a Uniunii (Anexa I), sau (2) se încadrează într-una din cele 8 categorii de caz de utilizare din Anexa III și prezintă risc semnificativ de prejudiciu |
| **Sistem de IA cu Risc Limitat** | Un sistem de IA neclasificat ca risc ridicat dar supus obligațiilor specifice de transparență conform Articolului 50 (chatbots, recunoaștere emoții, deepfakes, categorizare biometrică) |
| **Sistem de IA cu Risc Minimal** | Un sistem de IA care nu este interzis, risc ridicat sau risc limitat; supus doar codurilor voluntare de conduită și conformității generale |
| **Plasare pe Piață** | Prima punere la dispoziție a unui sistem de IA sau model de IA cu scop general pe piața Uniunii |
| **Practică Interzisă** | O practică de IA explicit interzisă conform Articolului 5 al Actului UE privind IA (8 practici specifice) |
| **Furnizor (Provider)** | Orice persoană fizică sau juridică, autoritate publică, agenție sau alt organism care dezvoltă un sistem de IA sau model de IA cu scop general, sau are un sistem de IA dezvoltat, și îl plasează pe piață sau îl pune în serviciu sub propriul nume sau marcă comercială (Actul UE privind IA Art. 3(3)) |
| **Punere în Serviciu** | Furnizarea unui sistem de IA pentru prima utilizare direct către utilizator sau pentru utilizare proprie în Uniune pentru scopul său intenționat |
| **Componentă de Siguranță** | O componentă a unui produs care îndeplinește o funcție de siguranță pentru acel produs sau a cărei defecțiune sau funcționare defectuoasă pune în pericol sănătatea și siguranța persoanelor sau proprietății |
| **Incident Grav** | Orice incident sau funcționare defectuoasă a unui sistem de IA care conduce direct sau indirect la deces, vătămare gravă a sănătății, perturbarea gravă și ireversibilă a infrastructurii critice sau încălcarea drepturilor fundamentale (Actul UE privind IA Art. 3(49)) |
| **Risc Semnificativ de Prejudiciu** | Risc care îndeplinește criteriile de prag pentru intensitate, amploare, vulnerabilitate, reversibilitate și probabilitate de prejudiciu pentru sănătate, siguranță sau drepturi fundamentale |
| **Modificare Substanțială** | O modificare a unui sistem de IA după plasarea pe piață sau punerea în serviciu care nu este prevăzută sau planificată în evaluarea inițială de conformitate și afectează conformitatea cu cerințele sau rezultă într-o modificare a scopului intenționat |
| **Risc Sistemic** | Risc specific capacităților de impact ridicat ale modelelor de IA cu scop general, având un impact semnificativ pe piața Uniunii datorită acoperirii lor, sau datorită efectelor negative reale sau rezonabil previzibile asupra sănătății publice, siguranței, securității, drepturilor fundamentale sau societății în ansamblu |
| **Obligații de Transparență** | Cerințe conform Articolului 50 de a informa persoanele fizice că interacționează cu un sistem de IA (chatbots, deepfakes, etc.) |
| **Legislația de Armonizare a Uniunii** | Legislația UE listată în Anexa I care armonizează condițiile de comercializare a produselor (mașini, jucării, dispozitive medicale, aviație, automotive, etc.) |
| **Furnizor Upstream** | Furnizor al unui model de IA cu Scop General care este folosit de furnizorii downstream pentru a dezvolta sisteme de IA |

---

### ANEXA C: REFERINȚE ÎNCRUCIȘATE LA ALTE PROCEDURI

Această anexă mapează relațiile dintre această procedură și alte proceduri de conformitate IA.

#### C.1 Dependențe de Procedură

```
                    ┌─────────────────────────────┐
                    │  POL-AI-001                 │
                    │  Politica Guvernanță IA     │
                    │  (Politică Părinte)         │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ PROC-AI-CLS-001   │   │ PROC-AI-RM-001    │   │ PROC-AI-DATA-001  │
│ Clasificare       │──▶│ Gestionare Risc   │◀──│ Guvernanță Date   │
│ (ACEASTĂ PROCEDURĂ)│   │                   │   │                   │
└───────────────────┘   └─────────┬─────────┘   └───────────────────┘
        │                         │                         │
        │                         ▼                         │
        │               ┌───────────────────┐               │
        └──────────────▶│ PROC-AI-DOC-001   │◀──────────────┘
                        │ Documentație      │
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-INC-001   │
                        │ Răspuns Incidente │
                        └───────────────────┘
```

#### C.2 Matricea de Interfață a Procedurilor

| Din Această Procedură | Către Procedura | Interfață | Când |
|---------------------|--------------|-----------|------|
| Pasul 1.1-1.5 | PROC-AI-RM-001 | Clasificarea informează domeniul evaluării inițiale de risc | După clasificarea completă |
| Pasul 2.1 (Registru) | PROC-AI-DOC-001 | Registrul alimentează cerințele documentației tehnice | Continuu |
| Pasul 5.2 (Risc Sistemic GPAI) | PROC-AI-RM-001 | Riscurile sistemice GPAI adăugate în registrul de risc | La clasificarea GPAI |
| Pasul 10.3 (Notificare Autoritate) | PROC-AI-INC-001 | Implementarea sistemului interzis declanșează incident | La descoperirea neconformității |
| Clasificare Risc Ridicat | PROC-AI-QMS-001 | Desemnarea risc ridicat declanșează cerințele QMS | După clasificare |
| Clasificare GPAI | PROC-AI-VENDOR-001 | Due diligence furnizor GPAI upstream | La folosirea GPAI terță parte |

#### C.3 Referință Încrucișată Șabloane

| Șablon din Această Procedură | Folosit De | Scop |
|------------------------------|---------|---------|
| TMP-AI-CLS-002 (Registru Sisteme IA) | PROC-AI-RM-001 | Registrul de risc se conectează la registrul de clasificare |
| TMP-AI-CLS-002 (Registru Sisteme IA) | PROC-AI-DOC-001 | Domeniul documentației tehnice bazat pe clasificare |
| TMP-AI-CLS-003 (Registru GPAI) | PROC-AI-VENDOR-001 | Evaluare furnizor pentru furnizori GPAI |

---

### ANEXA D: FIȘĂ DE REFERINȚĂ RAPIDĂ

#### Referință Rapidă Clasificare

**PRACTICI INTERZISE (Articolul 5) - OPRIȚI IMEDIAT:**

1. ❌ Manipulare subliminală
2. ❌ Exploatare vulnerabilități
3. ❌ Scoring social de autorități
4. ❌ Identificare biometrică timp real (cu excepții)
5. ❌ Recunoaștere emoții loc muncă/educație
6. ❌ Categorizare biometrică (atribute sensibile)
7. ❌ **Colectare bază date recunoaștere facială (internet/CCTV)**
8. ❌ Profilare criminală fără supraveghere umană

**CLASIFICARE RISC RIDICAT:**

- Anexa I: Componentă siguranță + evaluare terți + produs Anexa I = RISC RIDICAT
- Anexa III: Corespondență caz utilizare + risc semnificativ prejudiciu = RISC RIDICAT

**CAZURI UTILIZARE ANEXA III:**

1. Identificare biometrică
2. Infrastructură critică
3. Educație
4. Ocupare forță de muncă
5. Servicii esențiale
6. Aplicare lege
7. Migrație/azil
8. Justiție/democrație

**CLASIFICARE GPAI:**

- GPAI Standard: Obligații Articolele 53-54
- GPAI Risc Sistemic: Calcul instruire ≥ 10^25 FLOPs SAU desemnare Anexa XIII
- Gratuit/Open-Source: Scutiri dacă cu adevărat deschis + nu risc sistemic

**PERSOANE DE CONTACT CHEIE:**

| Nevoie | Contact | Pentru |
|------|---------|-----|
| Întrebări clasificare | Manager Program Actul IA | [Email] |
| Opinie juridică practică interzisă | Director Juridic | [Email] |
| Aprobare risc ridicat | Comitet Guvernanță IA | [Lista Distribuție] |
| Clasificare GPAI | Responsabil Conformitate GPAI | [Email] |

**TERMENE CHEIE:**

| Activitate | Termen |
|----------|----------|
| Verificare practici interzise | 1 săptămână de la inițiere |
| Clasificare completă | ≤ 14 zile de la inițiere |
| Reclasificare (modificare substanțială) | Înainte de implementare |
| Revizuire anuală | Anual pentru toate sistemele implementate |

**ESCALADARE:**

- Practică interzisă → CLO + Comitet Gov IA (imediat)
- Clasificare risc ridicat → Comitet Gov IA (înainte de implementare)
- Caz limită → Manager Program Actul IA (în 3 zile)

---

### ANEXA E: LISTĂ DE VERIFICARE PRACTICI INTERZISE ARTICOLUL 5

Această anexă furnizează textul juridic complet, exact al tuturor celor 8 practici interzise din Articolul 5(1) al Actului UE privind IA, cu îndrumări de evaluare.

#### Practica 1: Tehnici Subliminale (Articolul 5(1)(a))

**Text Juridic:**
"Plasarea pe piață, punerea în serviciu în acest scop specific sau utilizarea unui sistem de IA care implementează tehnici subliminale dincolo de conștiința unei persoane cu obiectivul sau efectul de a distorsiona material comportamentul unei persoane sau al unui grup de persoane prin afectarea apreciabilă a capacității lor de a lua o decizie informată, determinându-le astfel să ia o decizie pe care nu ar fi luat-o altfel, într-un mod care cauzează sau este rezonabil probabil să cauzeze acelei persoane, altei persoane sau grup de persoane un prejudiciu semnificativ."

**Întrebări de Evaluare:**
- Sistemul de IA funcționează sub conștiința?
- Manipulează luarea deciziilor fără știrea utilizatorului?
- Ar putea cauza prejudiciu semnificativ?

**Exemple:**
- ❌ Interzis: IA care folosește indicii audio/vizuale subliminale pentru a influența achizițiile
- ✅ Permis: Sisteme de recomandare transparente

---

#### Practica 2: Exploatarea Vulnerabilităților (Articolul 5(1)(b))

**Text Juridic:**
"Plasarea pe piață, punerea în serviciu în acest scop specific sau utilizarea unui sistem de IA care exploatează oricare dintre vulnerabilitățile unei persoane fizice sau ale unui grup specific de persoane datorită vârstei, dizabilității sau unei situații sociale sau economice specifice, cu obiectivul sau efectul de a distorsiona material comportamentul acelei persoane sau al unei persoane care aparține acelui grup, într-un mod care cauzează sau este rezonabil probabil să cauzeze acelei persoane sau altei persoane un prejudiciu semnificativ."

**Întrebări de Evaluare:**
- Sistemul țintește grupuri vulnerabile (copii, vârstnici, persoane cu dizabilități)?
- Exploatează vulnerabilități pentru a manipula comportamentul?
- Ar putea cauza prejudiciu semnificativ?

**Exemple:**
- ❌ Interzis: Jucării IA care exploatează credulitatea copiilor pentru a face achiziții
- ❌ Interzis: IA care țintește vârstnicii cu declin cognitiv pentru produse financiare
- ✅ Permis: IA asistivă cu măsuri de protecție adecvate

---

#### Practica 3: Scoring Social de către Autoritățile Publice (Articolul 5(1)(c))

**Text Juridic:**
"Plasarea pe piață, punerea în serviciu în acest scop specific sau utilizarea unui sistem de IA de către autoritățile publice sau în numele acestora pentru evaluarea sau clasificarea credibilității persoanelor fizice pe o anumită perioadă de timp pe baza comportamentului lor social sau a caracteristicilor personale sau de personalitate cunoscute, deduse sau prezise, scorul social conducând la oricare sau la ambele din următoarele:

(i) tratament dăunător sau nefavorabil al anumitor persoane fizice sau al unor grupuri întregi în contexte sociale care nu au legătură cu contextele în care datele au fost generate sau colectate inițial;

(ii) tratament dăunător sau nefavorabil al anumitor persoane fizice sau al unor grupuri întregi care este nejustificat sau disproporționat față de comportamentul lor social sau gravitatea acestuia."

**Întrebări de Evaluare:**
- Este folosit de sau pentru autoritățile publice?
- Evaluează credibilitatea pe baza comportamentului social?
- Conduce la tratament dăunător în contexte fără legătură?

**Exemple:**
- ❌ Interzis: Sistem de scor de credit social guvernamental
- ✅ Permis: Scoring de credit de către entități private (nu scoring social)

---

#### Practica 4: Identificare Biometrică la Distanță în Timp Real (Articolul 5(1)(d))

**Text Juridic:**
"Utilizarea sistemelor de identificare biometrică la distanță 'în timp real' în spații accesibile publicului în scopuri de aplicare a legii, cu excepția cazului în care și în măsura în care o astfel de utilizare este strict necesară pentru unul dintre următoarele obiective:

(i) căutarea țintită a unor potențiale victime specifice ale răpirii, traficului de persoane sau exploatării sexuale a ființelor umane, precum și căutarea persoanelor dispărute;

(ii) prevenirea unei amenințări specifice, substanțiale și iminente la adresa vieții sau siguranței fizice a persoanelor fizice sau a unei amenințări autentice și prezente sau autentice și previzibile a unui atac terorist;

(iii) localizarea sau identificarea unei persoane suspectate de a fi comis o infracțiune, în scopul desfășurării unei anchete penale sau urmăriri penale sau executării unei pedepse penale pentru infracțiunile menționate în Anexa II și pedepsibile în statul membru în cauză cu o pedeapsă privativă de libertate sau cu o măsură de deținere pentru o perioadă maximă de cel puțin patru ani."

**Întrebări de Evaluare:**
- Este identificare biometrică la distanță în timp real?
- Este folosită în spații accesibile publicului?
- Este pentru scopuri de aplicare a legii?
- Se aplică oricare dintre cele trei excepții?

**Excepțiile se Aplică Când:**
- Strict necesar pentru obiectivul declarat
- Autorizare prealabilă obținută (judiciară sau autoritate independentă)
- Măsuri de protecție adecvate implementate

**Exemple:**
- ❌ Interzis: Recunoaștere facială în timp real pentru supraveghere publică generală
- ✅ Permis (cu autorizare): Recunoaștere facială timp real pentru găsirea copilului dispărut
- ✅ Permis (cu autorizare): Recunoaștere facială timp real pentru prevenirea atacului terorist iminent

---

#### Practica 5: Categorizare Biometrică Deducând Atribute Sensibile (Articolul 5(1)(e))

**Text Juridic:**
"Plasarea pe piață, punerea în serviciu în acest scop specific sau utilizarea sistemelor de IA care creează sau extind baze de date de recunoaștere facială prin colectarea netarghetată a imaginilor faciale de pe internet sau din filmările CCTV."

**Întrebări de Evaluare:**
- Sistemul deduce atribute sensibile din date biometrice?
- Sunt atributele deduse: rasă, opinii politice, apartenență sindicală, credințe religioase/filosofice, viață sexuală sau orientare sexuală?
- Este folosit de aplicarea legii?

**Excepții:**
- Etichetarea sau filtrarea seturilor de date biometrice dobândite legal
- Categorizare de aplicare a legii pentru investigații specifice (cu măsuri de protecție)

**Exemple:**
- ❌ Interzis: IA care deduce rasa sau orientarea sexuală din imagini faciale pentru aplicarea legii
- ✅ Permis: Sisteme de verificare vârstă (vârsta nu este atribut sensibil)

---

#### Practica 6: Recunoaștere Emoțională la Locul de Muncă și în Instituțiile de Învățământ (Articolul 5(1)(f))

**Text Juridic:**
"Plasarea pe piață, punerea în serviciu în acest scop specific sau utilizarea sistemelor de IA pentru a deduce emoțiile unei persoane fizice în domeniile locului de muncă și instituțiilor de învățământ, cu excepția cazului în care utilizarea sistemului de IA este destinată să fie pusă în funcțiune sau introdusă pe piață din motive medicale sau de siguranță."

**Întrebări de Evaluare:**
- Sistemul recunoaște sau deduce emoții?
- Este folosit la locul de muncă sau în instituții de învățământ?
- Este pentru motive medicale sau de siguranță?

**Excepții Medicale/Siguranță:**
- Detectarea somnolență șofer pentru siguranță
- Diagnostic medical al condițiilor emoționale

**Exemple:**
- ❌ Interzis: Recunoaștere emoții pentru evaluarea performanței angajatului
- ❌ Interzis: Recunoaștere emoții pentru evaluarea implicării studentului în clasă
- ✅ Permis: Recunoaștere emoții pentru sisteme de siguranță șofer
- ✅ Permis: Recunoaștere emoții pentru diagnosticarea condițiilor de sănătate mentală

---

#### Practica 7: Colectarea Bazelor de Date de Recunoaștere Facială (Articolul 5(1)(g)) [CORECTAT]

**Text Juridic:**
"Plasarea pe piață, punerea în serviciu în acest scop specific sau utilizarea sistemelor de IA care creează sau extind baze de date de recunoaștere facială prin colectarea netarghetată a imaginilor faciale de pe internet sau din filmările CCTV."

**Întrebări de Evaluare:**
- Sistemul creează sau extinde baze de date de recunoaștere facială?
- Folosește colectare netarghetată de pe internet sau CCTV?
- Este colectarea targhetată sau netarghetată?

**Distincție Cheie:**
- **Colectare netarghetată:** Interzis (colectare în masă fără scop specific)
- **Colectare targhetată:** Permis (investigație specifică cu bază legală)

**Exemple:**
- ❌ Interzis: IA care colectează milioane de fețe de pe rețele sociale pentru a construi bază de date de recunoaștere facială
- ❌ Interzis: IA care colectează din filmări CCTV pentru a construi bază de date faciale
- ✅ Permis: Colectare targhetată a imaginilor suspectului specific cu mandat

---

#### Practica 8: Evaluarea Riscului pentru Infracțiuni Bazată pe Profilare (Articolul 5(1)(h))

**Text Juridic:**
"Plasarea pe piață, punerea în serviciu în acest scop specific sau utilizarea sistemelor de IA pentru a evalua riscul ca o persoană fizică să comită sau să recomită infracțiuni nu exclusiv pe baza profilării persoanelor fizice menționată în Articolul 3(4) al Directivei (UE) 2016/680 sau a evaluării trăsăturilor de personalitate și caracteristicilor sau a comportamentului criminal trecut al persoanelor fizice sau grupurilor."

**Întrebări de Evaluare:**
- Sistemul evaluează riscul de comitere/recomitere infracțiuni?
- Este bazat exclusiv pe profilare, trăsături de personalitate sau comportament trecut?
- Sau augmentează evaluarea umană cu factori suplimentari?

**Interzis Când:**
- Evaluarea este bazată **exclusiv** pe profilare automată
- Fără supraveghere umană sau factori suplimentari

**Permis Când:**
- IA augmentează evaluarea umană (nu bază exclusivă)
- Factori obiectivi suplimentari luați în considerare
- Capacitate de revizuire și anulare umană

**Exemple:**
- ❌ Interzis: Predicție recidivism complet automată bazată doar pe profilare
- ✅ Permis: Instrument de evaluare risc care furnizează informații suplimentare judecătorilor (factor de decizie uman)

---

**INSTRUCȚIUNI UTILIZARE LISTĂ VERIFICARE:**

Pentru fiecare sistem de IA, evaluați împotriva TUTUROR celor 8 practici interzise:

1. Citiți textul juridic exact
2. Răspundeți la întrebările de evaluare
3. Revizuiți exemplele pentru îndrumări
4. Documentați justificarea pentru determinare
5. Dacă ORICARE practică se aplică → clasificare INTERZIS
6. Dacă limită → Escaladați către CLO pentru opinie juridică obligatorie
7. Documentați opinia CLO în înregistrarea clasificării

**CRITIC:** Dacă se aplică orice practică interzisă, dezvoltarea și implementarea trebuie să înceteze imediat. Fără excepții.

---

**FINAL PROCEDURĂ PROC-AI-CLS-001**

---

## ISTORIC REVIZUIRI

| Versiune | Data | Autor | Modificări |
|---|---|---|---|
| 1.0 | [Data] | [Nume] | Dezvoltare procedură inițială |
| 2.0 | [Data] | [Nume] | Adăugat clasificare GPAI (Secțiunea 5); Corectat textul Articolului 5(1)(g); Adăugate Anexele A-E; Mecanisme control îmbunătățite; Adăugată bibliotecă indicatori |
| | | | |

---

## APROBARE ȘI AUTORIZARE

| Rol | Nume | Titlu | Semnătură | Data |
|---|---|---|---|---|
| **Pregătit De** | [Nume] | Manager Program Actul IA | __________ | ________ |
| **Revizuit De** | [Nume] | Director Juridic | __________ | ________ |
| **Revizuit De** | [Nume] | Responsabil Conformitate GPAI | __________ | ________ |
| **Aprobat De** | [Nume] | Președinte Comitet Guvernanță IA | __________ | ________ |

---

## CONTROL DOCUMENT

**Status Document:** [Ciornă/Aprobat]
**Clasificare:** [Public/Intern/Confidențial]
**Distribuție:** Manager Program Actul IA, Proprietari Sisteme IA, Comitet Guvernanță IA, Responsabil Conformitate GPAI, Conformitate, Audit Intern
**Păstrare:** 10 ani (conform Actului UE privind IA)
**Frecvență Revizuire:** Anual sau la modificare regulamentară
**Data Următoarei Revizuiri:** [Data]

---

**FINAL DOCUMENT**
