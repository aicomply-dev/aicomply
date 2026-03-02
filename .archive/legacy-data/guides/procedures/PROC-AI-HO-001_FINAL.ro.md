# PROC-AI-HO-001: Procedura de Supraveghere Umană a IA

**ID Procedură:** PROC-AI-HO-001
**Nume Procedură:** Procedura de Supraveghere Umană a IA
**Standard:** STD-AI-003: Standardul de Supraveghere Umană a IA
**Acoperă Controalele:** HO-001, HO-002, HO-003, HO-004
**Data Intrării în Vigoare:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizuiri:** [De completat]
**Stare Aprobare:** [Ciornă/Aprobat]

---

## 1. SCOP ȘI DOMENIU DE APLICARE

### 1.1 Scop

Această procedură stabilește procesul pas cu pas pentru implementarea, operarea și îmbunătățirea continuă a măsurilor de supraveghere umană pentru sistemele de IA în conformitate cu Articolul 14 al Actului UE privind IA. Aceasta asigură că persoanele fizice desemnate să supravegheze sistemele de IA au competența, autoritatea și mijloacele necesare pentru a înțelege eficient capacitățile/limitările IA, pentru a interpreta corect rezultatele și pentru a interveni sau a opri operațiunile sistemului de IA atunci când este necesar.

### 1.2 Domeniu de Aplicare

Această procedură se aplică pentru:
- Toate sistemele de IA cu risc ridicat conform clasificării STD-AI-001
- Toate sistemele de IA clasificate ca necesitând supraveghere umană conform Articolului 14(3)
- Toate sistemele de identificare biometrică (care necesită verificare prin două persoane conform Articolului 14(5))
- Toate sistemele de IA utilizate în luarea deciziilor critice care afectează drepturile fundamentale
- Tot personalul de supraveghere desemnat să monitorizeze operațiunile sistemelor de IA

Această procedură nu se aplică pentru:
- Sisteme de IA cu risc minim (cu excepția cazului în care este cerut în mod explicit)
- Sisteme de IA fără capacitate de luare a deciziilor automate
- Sisteme de IA terțe în care supravegherea este atribuită contractual furnizorului

### 1.3 Proprietar Procedură și Contacte

| Rol | Nume | Titlu | Contact |
|------|------|-------|---------|
| **Proprietar Procedură** | [Nume] | Manager Supraveghere Umană | [Email/Telefon] |
| **Escaladare** | [Nume] | Director IA (Chief AI Officer) | [Email/Telefon] |
| **Guvernanță** | [Nume] | Președinte Comitet Guvernanță IA | [Email/Telefon] |

---

## 2. ROLURI ȘI RESPONSABILITĂȚI

### 2.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|------|---|---|
| **Manager Supraveghere Umană** | Deține și execută cadrul de supraveghere; definește cerințele de supraveghere; instruiește personalul de supraveghere | Aprobă planurile de supraveghere; certifică personalul de supraveghere |
| **Personal Supraveghere** | Monitorizează operațiunile IA; interpretează rezultatele; identifică problemele; intervine/suprascrie când este necesar | Oprește operațiunile IA; suprascrie deciziile; escaladează preocupările |
| **Proprietar Sistem IA** | Definește nevoile de supraveghere pentru sistemele lor; furnizează resurse; acceptă cerințele de supraveghere | Acceptă riscurile legate de supraveghere; aprobă planurile de supraveghere |
| **Director IA (Chief AI Officer)** | Supravegherea cadrului de supraveghere; aprobă planurile de supraveghere pentru sisteme cu risc ridicat; guvernanță | Escaladează către Consiliu; aprobă excepțiile de supraveghere |
| **Comitet Guvernanță IA** | Revizuiește și aprobă cadrele de supraveghere; monitorizează eficacitatea supravegherii; aprobă acceptarea supravegherii | Blochează implementările; necesită îmbunătățiri ale supravegherii |
| **Data Scientist/Inginer ML** | Implementează instrumente tehnice de supraveghere; furnizează documentația capacităților sistemului; sprijină personalul de supraveghere | Execută dezvoltarea instrumentelor de supraveghere |
| **Manager Formare** | Dezvoltă programe de formare pentru supraveghere; certifică competența personalului de supraveghere | Certifică finalizarea formării; revocă certificările |
| **Ofițer Conformitate** | Verifică conformitatea cu Articolul 14; auditează operațiunile de supraveghere | Contestă adecvarea supravegherii; recomandă îmbunătățiri |

### 2.2 Matricea RACI

| Activitate | Manager Supraveghere | Personal Supraveghere | Proprietar Sistem IA | CAO | Comitet Guvernanță IA | Data Scientist | Manager Formare | Conformitate |
|----------|---|---|---|---|---|---|---|---|
| Definirea cerințelor de supraveghere | A | C | R | I | C | C | I | C |
| Determinarea nivelului de supraveghere | A | I | R | C | C | C | I | C |
| Dezvoltarea planului de supraveghere | A | C | R | I | C | C | C | C |
| Dezvoltarea instrumentelor tehnice de supraveghere | C | I | C | I | I | A | I | I |
| Selectarea personalului de supraveghere | A | I | R | I | I | I | C | I |
| Livrarea formării pentru supraveghere | C | R | I | I | I | C | A | I |
| Certificarea competenței | C | I | C | I | I | I | A | C |
| Operațiunile zilnice de supraveghere | I | A | R | I | I | I | I | I |
| Decizii de intervenție/suprascriere | I | A | R | I | I | I | I | I |
| Evaluarea eficacității supravegherii | A | C | R | C | C | I | I | C |
| Escaladarea problemelor de supraveghere | C | R | A | A | C | I | I | C |
| Revizuirea cadrului de supraveghere | A | C | C | C | A | I | C | C |

**Legendă:** A=Responsabil (Accountable), R=Răspunde (Responsible), C=Consultat, I=Informat

---

## 3. CADRUL DE SUPRAVEGHERE UMANĂ

### 3.1 Componentele Sistemului de Supraveghere Umană

Sistemul de supraveghere umană a IA constă din șase componente integrate:

```
┌─────────────────────────────────────────────────────────────┐
│         CADRUL SISTEMULUI DE SUPRAVEGHERE UMANĂ A IA        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. CERINȚE ȘI PLANIFICARE SUPRAVEGHERE                     │
│     ├─ Determinarea Nivelului de Supraveghere Bazat pe Risc │
│     ├─ Selectarea Modului de Supraveghere (conform Art. 14(4))│
│     ├─ Planificarea Resurselor pentru Supraveghere          │
│     └─ Documentarea Planului de Supraveghere                │
│                                                              │
│  2. COMPETENȚA PERSONALULUI DE SUPRAVEGHERE                 │
│     ├─ Definirea Cerințelor de Competență                   │
│     ├─ Selectarea și Atribuirea Personalului                │
│     ├─ Livrarea Programului de Formare                      │
│     └─ Certificarea și Reînnoirea Competenței               │
│                                                              │
│  3. IMPLEMENTAREA MĂSURILOR DE SUPRAVEGHERE                 │
│     ├─ Dezvoltarea Instrumentelor Tehnice de Supraveghere   │
│     ├─ Implementarea Mecanismelor de Suprascriere           │
│     ├─ Sistemele de Alertă și Notificare                    │
│     └─ Sistemele de Documentare și Pistă de Audit           │
│                                                              │
│  4. OPERAȚIUNILE DE SUPRAVEGHERE                            │
│     ├─ Monitorizare și Revizuire Zilnică                    │
│     ├─ Interpretarea și Validarea Rezultatelor              │
│     ├─ Execuția Intervenției și Suprascrierii               │
│     └─ Escaladare și Raportare                              │
│                                                              │
│  5. EVALUAREA EFICACITĂȚII SUPRAVEGHERII                    │
│     ├─ Monitorizarea KPI-urilor de Supraveghere             │
│     ├─ Revizuiri Periodice de Eficacitate                   │
│     ├─ Analiza Incidentelor de Supraveghere                 │
│     └─ Îmbunătățire Continuă                                │
│                                                              │
│  6. GUVERNANȚĂ ȘI CONFORMITATE                              │
│     ├─ Verificarea Conformității cu Articolul 14            │
│     ├─ Audit și Asigurare Calitate Supraveghere             │
│     ├─ Raportare Reglementară                               │
│     └─ Actualizări și Îmbunătățiri ale Cadrului             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Moduri de Supraveghere conform Articolului 14(4)

Articolul 14(4) definește cinci capacități specifice de supraveghere pe care personalul de supraveghere trebuie să le posede. Fiecare sistem de IA trebuie să implementeze măsuri de supraveghere care să permită aceste capacități în funcție de nivelul de risc și context.

#### 3.2.1 Definițiile Modurilor de Supraveghere

| ID Mod | Capacitate Articol 14(4) | Descriere | Cerințe de Implementare |
|---------|-------------------------|-------------|---------------------------|
| **MOD-A** | **(a) Înțelegerea deplină a capacităților și limitărilor** | Personalul de supraveghere poate identifica când sistemul de IA operează în afara scopului sau limitelor capacității intenționate | Documentație tehnică; Formare privind capacitățile/limitările; Alerte pentru limite de operare |
| **MOD-B** | **(b) Conștientizarea prejudecății de automatizare** | Personalul de supraveghere înțelege tendința de a se baza excesiv pe rezultatele IA și se protejează activ împotriva acesteia | Formare privind prejudecata de automatizare; Instrumente de sprijin decizional; Puncte obligatorii de verificare umană |
| **MOD-C** | **(c) Interpretarea corectă a rezultatelor IA** | Personalul de supraveghere poate înțelege, contextualiza și valida rezultatele sistemului de IA având în vedere limitările cunoscute | Formare pentru interpretarea rezultatelor; Scoruri de încredere; Instrumente de explicabilitate; Proceduri de validare |
| **MOD-D** | **(d) Decizia de a nu utiliza sau amâna utilizarea** | Personalul de supraveghere are autoritatea și procedurile pentru a respinge recomandările IA sau a amâna implementarea | Definirea clară a autorității; Proceduri decizionale; Protocoale de escaladare |
| **MOD-E** | **(e) Intervenția sau întreruperea operațiunilor sistemului** | Personalul de supraveghere are mijloacele tehnice și autoritatea de a opri, suprascrie sau inversa deciziile IA | Mecanisme de oprire de urgență; Controale de suprascriere; Proceduri de revenire; Verificarea autorității |

#### 3.2.2 Maparea Modurilor de Supraveghere pe Nivel de Risc

| Nivel de Risc | Moduri Necesare | Frecvența Supravegherii | Autoritate Suprascriere | Cerințe Speciale |
|------------|---------------|--------------------|--------------------|---------------------|
| **Critic (20-25)** | A, B, C, D, E (toate) | Continuu în timp real | Imediat unilateral | Verificare prin două persoane; Acoperire 24/7 |
| **Ridicat (15-19)** | A, B, C, D, E (toate) | Continuu sau revizuire lot | Imediat unilateral | Certificare obligatorie formare |
| **Mediu (10-14)** | A, B, C, E | Revizuire periodică | Supus procesului de aprobare | Reîmprospătare formare anuală |
| **Scăzut (5-9)** | A, C, E | Revizuire bazată pe eșantion | Supus procesului de aprobare | Formare de bază necesară |
| **Foarte Scăzut (1-4)** | A, C | Revizuire bazată pe audit | Escaladare standard | Formare de conștientizare |

**Caz Special - Sisteme Biometrice (Articolul 14(5)):**
Toate sistemele de identificare biometrică trebuie să implementeze **verificare prin două persoane** indiferent de scorul de risc:
- Modurile A, B, C, D, E toate necesare
- Două persoane independente de supraveghere trebuie să verifice fiecare decizie de identificare
- Niciun verificator nu poate fi operatorul sistemului de IA
- Ambii verificatori trebuie să aibă certificare și autoritate completă

### 3.3 Cadrul Cerințelor de Competență

#### 3.3.1 Domenii de Competență de Bază

Tot personalul de supraveghere trebuie să demonstreze competență în cinci domenii:

| Domeniu | Cerințe de Cunoștințe | Cerințe de Abilități | Metodă de Evaluare |
|--------|----------------------|-------------------|------------------|
| **1. Înțelegerea Sistemului IA** | Arhitectura sistemului; Date de antrenament; Tipul modelului; Utilizare intenționată; Limitări cunoscute | Capacitatea de a identifica limitele sistemului; Recunoașterea utilizării neconforme; Înțelegerea modurilor de eșec | Examen scris + scenariu practic |
| **2. Conștientizarea Riscurilor** | Riscurile specifice ale sistemului IA; Impacturi asupra drepturilor fundamentale; Consecințele eșecului; Populații vulnerabile | Identificarea riscurilor; Evaluarea impactului; Judecată de escaladare | Analiza studiului de caz |
| **3. Interpretarea Rezultatelor** | Formatele rezultatelor; Scoruri de încredere; Indicatori de incertitudine; Factori contextuali; Metode de validare | Interpretare corectă; Contextualizare; Execuția validării; Identificarea false pozitive/negative | Evaluare practică |
| **4. Autoritate de Intervenție** | Proceduri de suprascriere; Protocoale de oprire de urgență; Căi de escaladare; Limite de autoritate; Cerințe de documentare | Execuția suprascrierii; Răspuns de urgență; Escaladare corespunzătoare; Păstrarea dovezilor | Exerciții de simulare |
| **5. Conformitate Reglementară** | Cerințele Articolului 14; Practici interzise (Articolul 5); Obligații de documentare; Raportarea incidentelor | Verificarea conformității; Documentare; Raportare; Sprijin pentru audit | Examen scris + revizuire audit |

#### 3.3.2 Niveluri de Competență pe Rol

| Rol | Nivel de Competență | Certificare Necesară | Frecvența Reînnoirii | Ore de Formare |
|------|-----------------|----------------------|------------------|----------------|
| **Lider Senior Supraveghere** | Expert (toate domeniile avansate) | Da - Certificare completă | Anual | 40 inițial + 16 anual |
| **Specialist Supraveghere** | Proficient (toate domeniile intermediare) | Da - Certificare completă | Anual | 32 inițial + 12 anual |
| **Operator Supraveghere** | Competent (domenii de bază nivelul de bază) | Da - Certificare de bază | Anual | 24 inițial + 8 anual |
| **Revizor Suport** | Conștientizare (specific domeniului) | Nu - Finalizare formare | Bianual | 8 inițial + 4 bianual |

#### 3.3.3 Niveluri de Autoritate

Personalul de supraveghere trebuie să aibă autoritate clar definită corespunzătoare nivelului lor de competență:

| Nivel de Autoritate | Competență Necesară | Puteri Acordate | Restricții |
|-----------------|--------------------|--------------|--------------|
| **Nivel 3 - Autoritate Completă** | Expert | Oprește sistemul; Suprascrie orice decizie; Blocare unilaterală implementare; Contact direct cu autoritatea de reglementare | Niciunul - Discreție completă |
| **Nivel 2 - Autoritate Operațională** | Proficient | Oprește operațiunile sistemului; Suprascrie decizii cu documentare; Escaladează către Nivel 3 | Trebuie să documenteze toate suprascierile; Deciziile de implementare necesită aprobare |
| **Nivel 1 - Autoritate Limitată** | Competent | Semnalează preocupări; Recomandă suprascrieri; Escaladează probleme | Nu poate opri sistemul; Necesită aprobare Nivel 2/3 pentru suprascrieri |
| **Nivel 0 - Fără Autoritate** | Conștientizare | Raportează observații; Documentează constatări | Nu poate interveni; Rol consultativ doar |

### 3.4 Mecanisme de Suprascriere și Intervenție

#### 3.4.1 Capacități Tehnice de Suprascriere

Fiecare sistem de IA trebuie să implementeze mecanisme tehnice care să permită intervenția umană:

| Tip Mecanism | Scop | Implementare | Timp de Răspuns | Documentare Necesară |
|---------------|---------|----------------|---------------|----------------------|
| **Oprire de Urgență** | Oprește imediat toate operațiunile IA | Buton fizic; Suprascriere linie de comandă; Endpoint API | < 5 secunde | Auto-înregistrat; Raport manual incident |
| **Suprascriere Decizie** | Inversează sau modifică decizia specifică IA | Flag suprascriere în sistem; Introducere manuală decizie | < 30 secunde | Motiv suprascriere; Decizie alternativă; Timestamp |
| **Blocare Implementare** | Previne implementarea sistemului IA în producție | Poartă de implementare; Workflow de aprobare | N/A (preventiv) | Motiv blocare; Remediere necesară; Aprobator |
| **Respingere Lot** | Respinge lot întreg de decizii IA | Flag invalidare lot; Procedură de revenire | < 5 minute | Decizii afectate; Motiv respingere; Plan remediere |
| **Degradare Grațioasă** | Comută la mod de siguranță de rezervă | Logică de rezervă; Configurare mod siguranță | < 60 secunde | Motiv declanșare; Mod de rezervă; Durată |

#### 3.4.2 Garanții Procedurale

Dincolo de mecanismele tehnice, garanțiile procedurale asigură supravegherea eficientă:

1. **Puncte de Control Umane Obligatorii:** Deciziile critice necesită verificare umană înainte de execuție
2. **Perioade de Răcire:** Deciziile cu miză mare au întârziere obligatorie permițând revizuirea
3. **Protocoale de Contestare:** Personalul desemnat trebuie să conteste activ recomandările IA
4. **Politici de Rotație:** Personalul de supraveghere se rotește pentru a preveni complacența și prejudecata de automatizare
5. **Autorizare Duală:** Suprascierile critice necesită două persoane independente de supraveghere

#### 3.4.3 Matricea de Escaladare a Suprascrierii

| Tip Decizie | Autoritate Primară Supraveghere | Escaladare Necesară | Termen | Autoritate Finală |
|--------------|---------------------------|---------------------|----------|-----------------|
| **Ajustare operațiune de rutină** | Operator Nivel 1 | Nu | Imediat | Nivel 1 |
| **Suprascriere decizie unică** | Specialist Nivel 2 | Doar documentare | < 1 oră | Nivel 2 |
| **Oprire de urgență** | Orice personal certificat | Notifică în 1 oră | Imediat | Nivel 3 (revizuire) |
| **Respingere lot** | Specialist Nivel 2 | Da - către Nivel 3 | < 4 ore | Nivel 3 |
| **Blocare implementare sistem** | Lider Nivel 3 | Da - către CAO | < 24 ore | Comitet Guvernanță IA |
| **Oprire permanentă sistem** | Lider Nivel 3 | Da - către Comitet Guvernanță IA | < 48 ore | Consiliu Administrație |

---

## 4. PROCEDURĂ PAS CU PAS

### FAZA 1: DEFINIREA CERINȚELOR DE SUPRAVEGHERE (Control HO-001)

#### Pasul 1.1: Determinarea Nivelului de Supraveghere Bazat pe Risc

**Când:** În timpul fazei de proiectare a sistemului de IA, după clasificarea riscurilor

**Cine:** Manager Supraveghere Umană + Proprietar Sistem IA + Manager Risc IA

**Cum:**

1. **Colectarea Informațiilor despre Riscul Sistemului**
   - Obțineți clasificarea riscurilor din PROC-AI-CLS-001
   - Revizuiți evaluarea riscurilor din PROC-AI-RM-001
   - Identificați nivelurile de risc inerent și rezidual
   - Documentați riscurile specifice care necesită supraveghere

2. **Aplicarea Arborelui Decizional al Nivelului de Supraveghere** (vezi Secțiunea 5.1)
   - Începeți cu nivelul de risc (Critic/Ridicat/Mediu/Scăzut/Foarte Scăzut)
   - Luați în considerare factorii de context:
     - Impact asupra drepturilor fundamentale (ridicat/mediu/scăzut)
     - Nivelul de autonomie (complet autonom/semi-autonom/asistiv)
     - Reversibilitatea deciziilor (ireversibil/dificil/ușor)
     - Expunerea populației vulnerabile (da/nu)
     - Sistem de identificare biometrică (da/nu - Articolul 14(5))
   - Determinați nivelul de supraveghere (1-5, unde 5 = cel mai intensiv)

3. **Documentarea Determinării Nivelului de Supraveghere**
   - Completați Formularul de Determinare a Nivelului de Supraveghere (FORM-HO-001)
   - Documentați factorii de risc considerați
   - Înregistrați decizia nivelului de supraveghere cu justificare
   - Identificați orice cerințe speciale (de ex., regula celor două persoane pentru biometric)

4. **Validarea conform Cerințelor Articolului 14(3)**
   - Verificați că supravegherea este "adecvată riscurilor"
   - Verificați că supravegherea corespunde "nivelului de autonomie"
   - Verificați că supravegherea se potrivește "contextului de utilizare"
   - Documentați validarea conformității

**Dovezi Necesare:**
- Documentația clasificării riscurilor (din PROC-AI-CLS-001)
- Rezumatul evaluării riscurilor (din PROC-AI-RM-001)
- Formularul de Determinare a Nivelului de Supraveghere (FORM-HO-001)
- Validarea conformității cu Articolul 14(3)

**Durată:** 1 săptămână

**Verificare Calitate:**
- Nivelul de supraveghere adecvat pentru nivelul de risc
- Toți factorii Articolului 14(3) considerați
- Cerințele speciale (biometrice) identificate
- Aprobarea Managerului de Supraveghere obținută

---

#### Pasul 1.2: Selectarea Modurilor de Supraveghere Necesare

**Când:** După determinarea nivelului de supraveghere

**Cine:** Manager Supraveghere Umană + Proprietar Sistem IA

**Cum:**

1. **Aplicarea Matricei Cerințelor de Moduri** (vezi Secțiunea 3.2.2)
   - Mapați nivelul de risc la modurile de supraveghere necesare (A, B, C, D, E)
   - Exemplu: Risc ridicat (15-19) necesită toate modurile A, B, C, D, E
   - Exemplu: Risc mediu (10-14) necesită modurile A, B, C, E

2. **Evaluarea Nevoilor de Implementare Specifice Modului**

   Pentru fiecare mod necesar, documentați cerințele de implementare:

   **MOD-A (Înțelegerea capacităților și limitărilor):**
   - Cerințe de documentație tehnică
   - Conținut de formare privind limitele sistemului
   - Sisteme de alertă pentru operare în afara domeniului
   - Materiale de referință pentru limitările capacităților

   **MOD-B (Conștient de prejudecata de automatizare):**
   - Formare pentru conștientizarea prejudecății de automatizare
   - Instrumente de sprijin decizional care previn dependența excesivă
   - Puncte de verificare obligatorii
   - Politici de rotație pentru a preveni complacența

   **MOD-C (Interpretarea corectă a rezultatelor):**
   - Formare pentru interpretarea rezultatelor
   - Disponibilitatea instrumentelor de explicabilitate
   - Prezentarea scorurilor de încredere
   - Definirea procedurii de validare

   **MOD-D (Decizia de a nu utiliza/amâna):**
   - Definirea și documentarea autorității
   - Proceduri decizionale
   - Protocoale de escaladare
   - Criterii de întârziere/respingere

   **MOD-E (Intervenirea/întreruperea operațiunii):**
   - Proiectarea mecanismului de oprire de urgență
   - Implementarea controlului de suprascriere
   - Definirea procedurii de revenire
   - Sistem de verificare a autorității

3. **Evaluarea Cerințelor Speciale**

   Dacă sistem de identificare biometrică (Articolul 14(5)):
   - Implementați cerința de verificare prin două persoane
   - Definiți criteriile de selectare a verificatorului independent
   - Documentați fluxul de lucru de verificare
   - Stabiliți verificarea independenței verificatorului

4. **Documentarea Selectării Modului**
   - Completați Foaia de Lucru pentru Selectarea Modului de Supraveghere (FORM-HO-002)
   - Documentați fiecare mod necesar
   - Înregistrați cerințele de implementare per mod
   - Identificați instrumentele/resursele specifice modului necesare

**Dovezi Necesare:**
- Foaia de Lucru pentru Selectarea Modului de Supraveghere (FORM-HO-002)
- Documentația cerințelor de implementare a modului
- Planul de verificare biometrică prin două persoane (dacă este aplicabil)
- Aprobarea Proprietarului Sistemului IA

**Durată:** 1 săptămână

**Verificare Calitate:**
- Toate modurile necesare conform Secțiunii 3.2.2 incluse
- Cerințele de implementare definite pentru fiecare mod
- Cerințele biometrice abordate (dacă este aplicabil)
- Selectarea modului aprobată de Managerul de Supraveghere

---

#### Pasul 1.3: Definirea Cerințelor pentru Personalul de Supraveghere

**Când:** După selectarea modului

**Cine:** Manager Supraveghere Umană + Manager Formare + Proprietar Sistem IA

**Cum:**

1. **Determinarea Cerințelor pentru Rolul de Supraveghere**
   - Identificați rolurile de supraveghere necesare (Lider/Specialist/Operator/Revizor)
   - Definiți numărul de personal pe rol bazat pe:
     - Orele de funcționare ale sistemului (24/7 vs. ore de lucru)
     - Volumul tranzacțiilor
     - Nivelul de risc (risc mai mare = mai mult personal)
     - Cerința biometrică (necesită 2x personal)
   - Documentați cerințele de acoperire pe schimburi

2. **Definirea Cerințelor de Competență pe Rol**
   - Mapați rolurile la nivelurile de competență (Expert/Proficient/Competent/Conștientizare)
   - Identificați domeniile de competență necesare (vezi Secțiunea 3.3.1)
   - Definiți metodele de evaluare per domeniu
   - Specificați cerințele de certificare

3. **Definirea Nivelurilor de Autoritate pe Rol**
   - Mapați rolurile la nivelurile de autoritate (Nivel 0-3, vezi Secțiunea 3.3.3)
   - Documentați puterile acordate pe rol
   - Identificați restricțiile de autoritate
   - Definiți căile de escaladare

4. **Calcularea Cerințelor de Capacitate de Supraveghere**

   **Exemplu de Calcul:**
   - Sistemul operează 24/7
   - Sistem cu risc ridicat care necesită monitorizare continuă
   - Medie 100 decizii/oră
   - Fiecare specialist de supraveghere poate monitoriza 50 decizii/oră
   - Necesar: 2 specialiști pe schimb × 3 schimburi = 6 specialiști
   - Plus: 1 lider senior (ore de lucru) + acoperire de rezervă = 8 total personal

5. **Documentarea Cerințelor de Personal**
   - Completați Formularul de Cerințe pentru Personalul de Supraveghere (FORM-HO-003)
   - Documentați rolurile, cantitățile, nivelurile de competență
   - Definiți nivelurile de autoritate pe rol
   - Specificați cerințele de schimb/acoperire
   - Calculați FTE total (echivalent cu normă întreagă) necesar

**Dovezi Necesare:**
- Formularul de Cerințe pentru Personalul de Supraveghere (FORM-HO-003)
- Matricea cerințelor de competență
- Definițiile nivelurilor de autoritate
- Foile de lucru pentru calcularea capacității
- Aprobarea Managerului de Formare

**Durată:** 1-2 săptămâni

**Verificare Calitate:**
- Cantitățile de personal suficiente pentru cerințele de acoperire
- Cerințele de competență adecvate pentru nivelul de risc
- Nivelurile de autoritate clar definite
- Cerința biometrică a celor două persoane abordată (dacă este aplicabil)

---

#### Pasul 1.4: Dezvoltarea Planului de Supraveghere

**Când:** După definirea cerințelor de personal

**Cine:** Manager Supraveghere Umană + Proprietar Sistem IA

**Cum:**

1. **Compilarea Documentului Planului de Supraveghere**

   Creați Planul de Supraveghere cuprinzător (PLAN-HO-001) conținând:

   **Secțiunea 1: Rezumat Executiv**
   - Identificarea și descrierea sistemului de IA
   - Clasificarea riscurilor și nivelul de supraveghere
   - Obiectivele supravegherii și criteriile de succes

   **Secțiunea 2: Cerințe de Supraveghere**
   - Modurile de supraveghere necesare (A, B, C, D, E)
   - Maparea conformității cu Articolul 14
   - Cerințe speciale (biometrice, etc.)

   **Secțiunea 3: Personalul de Supraveghere**
   - Roluri și cantități
   - Cerințe de competență pe rol
   - Niveluri de autoritate pe rol
   - Plan de acoperire schimburi

   **Secțiunea 4: Operațiunile de Supraveghere**
   - Frecvența și metodele de monitorizare
   - Proceduri de interpretare a rezultatelor
   - Proceduri de intervenție/suprascriere
   - Protocoale de escaladare
   - Cerințe de documentare

   **Secțiunea 5: Implementare Tehnică**
   - Instrumentele și tablourile de bord de supraveghere
   - Mecanisme de suprascriere
   - Sisteme de alertă/notificare
   - Sisteme de pistă de audit

   **Secțiunea 6: Formare și Certificare**
   - Prezentarea generală a programului de formare
   - Cerințe de certificare
   - Program de reînnoire
   - Metode de evaluare a competenței

   **Secțiunea 7: Măsurarea Eficacității**
   - KPI-uri de supraveghere și ținte
   - Programul de monitorizare și revizuire
   - Proces de îmbunătățire continuă

   **Secțiunea 8: Guvernanță și Conformitate**
   - Autoritatea de aprobare
   - Programul de audit și revizuire
   - Cerințe de raportare reglementară

2. **Validarea Completității Planului**
   - Verificați că toate cerințele Articolului 14 sunt abordate
   - Confirmați că toate modurile de supraveghere au detalii de implementare
   - Validați că capacitatea personalului este suficientă
   - Verificați că planurile de formare și certificare sunt complete

3. **Obținerea Revizuirii Părților Interesate**
   - Proprietarul Sistemului IA revizuiește și furnizează feedback
   - Managerul de Formare revizuiește secțiunile de formare
   - Data Scientist revizuiește implementarea tehnică
   - Ofițerul de Conformitate revizuiește conformitatea cu Articolul 14

4. **Obținerea Aprobărilor**
   - Managerul de Supraveghere Umană aprobă planul
   - Proprietarul Sistemului IA aprobă planul
   - Pentru risc ridicat/critic: Directorul IA aprobă planul
   - Documentați toate aprobările

**Dovezi Necesare:**
- Planul de Supraveghere (PLAN-HO-001) - document complet
- Feedback-ul revizuirii părților interesate
- Înregistrări de aprobare
- Verificarea conformității cu Articolul 14

**Durată:** 2-3 săptămâni

**Verificare Calitate:**
- Planul abordează toate modurile de supraveghere
- Cerințele de personal sunt adecvate
- Implementarea tehnică este fezabilă
- Planul de formare este cuprinzător
- Toate aprobările necesare obținute

---

### FAZA 2: COMPETENȚA PERSONALULUI DE SUPRAVEGHERE (Control HO-002)

#### Pasul 2.1: Dezvoltarea Programului de Formare pentru Supraveghere

**Când:** În timpul planificării supravegherii; înainte de selectarea personalului

**Cine:** Manager Formare + Manager Supraveghere Umană + Data Scientist

**Cum:**

1. **Definirea Curriculumului de Formare**

   Dezvoltați module de formare acoperind toate cele cinci domenii de competență (Secțiunea 3.3.1):

   **Modulul 1: Înțelegerea Sistemului IA (8-12 ore)**
   - Arhitectura și componentele sistemului
   - Caracteristicile și limitările datelor de antrenament
   - Tipul de model și abordarea luării deciziilor
   - Cazuri de utilizare intenționate și limite
   - Limitări cunoscute și moduri de eșec
   - Caracteristici și metrici de performanță
   - Integrarea cu alte sisteme

   **Modulul 2: Conștientizarea Riscurilor (4-8 ore)**
   - Riscurile specifice identificate pentru acest sistem IA
   - Impacturi și vulnerabilități ale drepturilor fundamentale
   - Consecințele eșecurilor sistemului
   - Considerații privind populațiile vulnerabile
   - Practici interzise (Articolul 5)
   - Proceduri de escaladare a riscurilor

   **Modulul 3: Interpretarea Rezultatelor (8-16 ore)**
   - Formatele și structurile de date ale rezultatelor
   - Scoruri de încredere și indicatori de incertitudine
   - Factori contextuali care afectează acuratețea
   - Metode și instrumente de validare
   - Identificarea falselor pozitive/negative
   - Utilizarea instrumentelor de explicabilitate
   - Erori comune de interpretare

   **Modulul 4: Autoritatea de Intervenție (4-8 ore)**
   - Proceduri de suprascriere și execuție tehnică
   - Protocoale de oprire de urgență
   - Căi de escaladare și limite de autoritate
   - Cerințe de documentare
   - Implicații legale și reglementare
   - Studii de caz și practică de scenarii

   **Modulul 5: Conformitate Reglementară (4-8 ore)**
   - Cerințele Articolului 14 din Actul UE privind IA
   - Practicile interzise conform Articolului 5
   - Obligații de documentare și audit
   - Cerințe de raportare a incidentelor (Articolul 73)
   - Pregătirea pentru inspecția reglementară
   - Proceduri de verificare a conformității

2. **Dezvoltarea Materialelor de Formare**
   - Prezentări slide și materiale distribuite
   - Documentație tehnică și ghiduri de referință
   - Demonstrații video și tutoriale
   - Studii de caz bazate pe scenarii
   - Exerciții de simulare și laboratoare practice
   - Teste de evaluare și examene practice

3. **Definirea Metodelor de Evaluare**

   | Domeniu de Competență | Metodă de Evaluare | Criterii de Promovare | Reevaluare |
   |------------------|------------------|--------------|--------------|
   | Înțelegerea Sistemului IA | Examen scris (40 întrebări) | ≥ 85% corect | La eșec |
   | Înțelegerea Sistemului IA | Scenariu practic (3 cazuri) | Identifică corect toate limitele sistemului | La eșec |
   | Conștientizarea Riscurilor | Analiza studiului de caz (5 scenarii) | Identifică corect toate riscurile ridicate; escaladare adecvată | La eșec |
   | Interpretarea Rezultatelor | Evaluare practică (10 rezultate) | ≥ 90% interpretare corectă | La eșec |
   | Autoritatea de Intervenție | Exercițiu de simulare (5 scenarii) | Execuție corectă; documentare corespunzătoare | La eșec |
   | Conformitate Reglementară | Examen scris (30 întrebări) | ≥ 90% corect | La eșec |

4. **Crearea Programului de Formare**
   - Definiți durata formării pe nivel de competență
   - Programați sesiunile inițiale de formare
   - Planificați examenele de certificare
   - Programați formarea de reîmprospătare anuală
   - Planificați evaluările de reînnoire a competenței

5. **Documentarea Programului de Formare**
   - Completați Planul Programului de Formare (PLAN-HO-002)
   - Documentați curriculumul și materialele
   - Definiți criteriile de evaluare
   - Specificați criteriile de promovare/nepromovare
   - Stabiliți procesul de remediere

**Dovezi Necesare:**
- Planul Programului de Formare (PLAN-HO-002)
- Materiale și curriculum de formare
- Instrumente de evaluare (examene, scenarii, simulări)
- Programul de formare
- Aprobarea Managerului de Formare

**Durată:** 4-6 săptămâni

**Verificare Calitate:**
- Toate cele cinci domenii de competență acoperite
- Orele de formare îndeplinesc cerințele Secțiunii 3.3.2
- Metodele de evaluare sunt riguroase și valide
- Materialele sunt specifice sistemului IA (nu generice)
- Aprobarea Ofițerului de Conformitate obținută

---

#### Pasul 2.2: Selectarea și Atribuirea Personalului de Supraveghere

**Când:** După dezvoltarea programului de formare; înainte de implementarea sistemului

**Cine:** Manager Supraveghere Umană + Proprietar Sistem IA + HR

**Cum:**

1. **Definirea Criteriilor de Selecție**

   Dezvoltați criterii obiective pentru personalul de supraveghere:

   **Cerințe Obligatorii:**
   - Pregătire tehnică (diplomă relevantă sau experiență echivalentă)
   - Expertiză în domeniul de aplicare al sistemului IA
   - Fără conflicte de interese (de ex., bonusuri de performanță legate de rata de aprobare IA)
   - Disponibilitate pentru acoperirea de schimburi necesară
   - Competență lingvistică (trebuie să înțeleagă rezultatele IA și documentația)

   **Calificări Preferate:**
   - Experiență anterioară cu sisteme IA
   - Experiență în managementul riscurilor
   - Experiență în conformitatea reglementară
   - Gândire critică și abilități decizionale
   - Abilități de comunicare și documentare

2. **Desfășurarea Selectării Personalului**
   - Publicați cerințele rolului intern/extern
   - Revizuiți calificările candidaților față de criterii
   - Desfășurați interviuri cu Managerul de Supraveghere Umană
   - Verificați competența tehnică prin evaluare practică
   - Efectuați verificări de conflict de interese
   - Documentați justificarea selecției

3. **Atribuirea Personalului la Roluri**
   - Mapați personalul selectat la rolurile de supraveghere (Lider/Specialist/Operator)
   - Atribuiți la schimburi asigurând acoperire adecvată
   - Desemnați personal de rezervă pentru roluri critice
   - Pentru sisteme biometrice: Atribuiți perechi asigurând independența

4. **Definirea Delegării de Autoritate**
   - Emiteți scrisori formale de delegare a autorității
   - Specificați puterile acordate pe nivel de autoritate (Secțiunea 3.3.3)
   - Documentați restricțiile și cerințele de escaladare
   - Obțineți semnături de confirmare

5. **Crearea Registrului Personalului de Supraveghere**
   - Documentați tot personalul de supraveghere cu roluri și niveluri de autoritate
   - Înregistrați informațiile de contact și atribuirile de schimburi
   - Urmăriți starea certificării și datele de expirare
   - Mențineți înregistrările evaluării competenței

**Dovezi Necesare:**
- Documentația criteriilor de selecție
- Înregistrări de evaluare a candidaților
- Scrisori de delegare a autorității (semnate)
- Registrul Personalului de Supraveghere (REG-HO-001)
- Declarații de conflict de interese

**Durată:** 4-8 săptămâni (în funcție de nevoile de angajare)

**Verificare Calitate:**
- Personal suficient pentru cerințele de acoperire
- Tot personalul îndeplinește criteriile obligatorii
- Nivelurile de autoritate adecvate pentru roluri
- Niciun conflict de interese identificat
- Independența biometrică verificată (dacă este aplicabil)

---

#### Pasul 2.3: Livrarea Formării și Certificarea Competenței

**Când:** După selectarea personalului; înainte de atribuirea operațională

**Cine:** Manager Formare + Manager Supraveghere Umană

**Cum:**

1. **Programarea Formării Inițiale**
   - Atribuiți personalul la cohorte de formare
   - Programați sesiunile de formare conform curriculumului
   - Furnizați materiale și lectură pre-formare
   - Confirmați prezența și disponibilitatea

2. **Livrarea Modulelor de Formare**
   - Desfășurați Modulul 1: Înțelegerea Sistemului IA (8-12 ore)
   - Desfășurați Modulul 2: Conștientizarea Riscurilor (4-8 ore)
   - Desfășurați Modulul 3: Interpretarea Rezultatelor (8-16 ore)
   - Desfășurați Modulul 4: Autoritatea de Intervenție (4-8 ore)
   - Desfășurați Modulul 5: Conformitate Reglementară (4-8 ore)
   - Furnizați acces practic la sistem și timp de practică
   - Facilitați sesiuni de întrebări și răspunsuri și discuții

3. **Administrarea Evaluărilor de Competență**

   Pentru fiecare domeniu de competență, administrați evaluarea conform Secțiunii 2.1:

   - **Examene Scrise:** Desfășurați examene supravegheate; acordați puncte conform criteriilor
   - **Scenarii Practice:** Observați performanța; evaluați conform rubricilor
   - **Studii de Caz:** Revizuiți analiza scrisă; verificați identificarea riscurilor
   - **Simulări:** Desfășurați exerciții practice; evaluați execuția
   - **Documentați Rezultatele:** Înregistrați scorurile și starea promovat/nepromovat

4. **Emiterea Certificărilor**

   Pentru personalul care promovează toate evaluările:
   - Emiteți Certificarea Personalului de Supraveghere (CERT-HO-001)
   - Documentați data certificării și expirarea (1 an)
   - Adăugați în Registrul Personalului de Supraveghere
   - Furnizați insignă de certificare/credențiale pentru acces la sistem

   Pentru personalul care eșuează la orice evaluare:
   - Furnizați feedback detaliat privind deficiențele
   - Atribuiți formare de remediere
   - Programați reevaluare
   - Documentați planul de remediere

5. **Acordarea Accesului la Sistem**
   - Furnizați credențiale de acces la sistem
   - Configurați nivelul de acces conform nivelului de autoritate
   - Activați controalele de suprascriere și intervenție
   - Verificați că accesul este operațional

**Dovezi Necesare:**
- Înregistrări de prezență la formare
- Rezultatele evaluării (scoruri și promovat/nepromovat)
- Certificarea Personalului de Supraveghere (CERT-HO-001) pentru fiecare persoană
- Registrul Personalului de Supraveghere actualizat (REG-HO-001)
- Înregistrări de furnizare a accesului la sistem

**Durată:** 4-8 săptămâni (în funcție de mărimea cohortei)

**Verificare Calitate:**
- Tot personalul promovează toate evaluările necesare
- Certificările emise înainte de atribuirea operațională
- Accesul la sistem corespunde nivelului de autoritate
- Documentarea completă și exactă
- Semnătura Managerului de Formare obținută

---

#### Pasul 2.4: Menținerea Competenței și Reînnoirea Certificărilor

**Când:** Continuu; anual pentru reînnoiri

**Cine:** Manager Formare + Manager Supraveghere Umană

**Cum:**

1. **Urmărirea Expirării Certificării**
   - Monitorizați Registrul Personalului de Supraveghere pentru expirări viitoare
   - Trimiteți notificări de reînnoire cu 90 de zile înainte de expirare
   - Programați sesiuni de formare pentru reînnoire
   - Preveniți certificările expirate să opereze

2. **Livrarea Formării Anuale de Reîmprospătare**

   Desfășurați reîmprospătare condensată acoperind:
   - Actualizări și modificări ale sistemului de la ultima formare
   - Riscuri sau limitări noi identificate
   - Proceduri și instrumente actualizate
   - Lecții învățate din incidentele de supraveghere
   - Actualizări reglementare (amendamente la Actul UE privind IA)
   - Durată: 8-16 ore (conform Secțiunii 3.3.2)

3. **Administrarea Evaluărilor de Reînnoire**
   - Examen scris (condensat, 20-30 întrebări)
   - Scenariu practic (2-3 cazuri actuale)
   - Interviu de competență cu Managerul de Formare
   - Revizuirea performanței de supraveghere din ultimul an

4. **Reînnoirea sau Revocarea Certificărilor**

   **Dacă evaluarea de reînnoire este promovată:**
   - Reînnoiți Certificarea Personalului de Supraveghere pentru 1 an
   - Actualizați Registrul Personalului de Supraveghere
   - Mențineți accesul la sistem

   **Dacă evaluarea de reînnoire eșuează:**
   - Suspendați îndatoririle de supraveghere imediat
   - Revocați accesul la sistem pentru controalele de supraveghere
   - Atribuiți formare de remediere
   - Programați reevaluare în 30 de zile
   - Dacă reevaluarea eșuează: Eliminați din rolul de supraveghere

5. **Monitorizarea Continuă a Competenței**
   - Revizuiți metricile de performanță a supravegherii trimestrial
   - Identificați lacunele de competență din datele de performanță
   - Furnizați formare vizată pentru lacunele identificate
   - Documentați dezvoltarea continuă a competenței

**Dovezi Necesare:**
- Înregistrări de prezență la formarea de reînnoire
- Rezultatele evaluării de reînnoire
- Certificări Reînnoite ale Personalului de Supraveghere (CERT-HO-001)
- Registrul Personalului de Supraveghere actualizat (REG-HO-001)
- Analiza lacunelor de competență (trimestrial)

**Durată:** Continuu (reînnoiri anuale conform datei certificării)

**Verificare Calitate:**
- Nicio certificare expirată în roluri operaționale
- Rata de promovare la reînnoire ≥ 90% (dacă mai mică, revizuiți calitatea formării)
- Lacunele de competență abordate în 30 de zile
- Metricile de performanță arată menținerea competenței

---

### FAZA 3: IMPLEMENTAREA MĂSURILOR DE SUPRAVEGHERE (Control HO-001)

#### Pasul 3.1: Dezvoltarea Instrumentelor Tehnice de Supraveghere

**Când:** În timpul dezvoltării sistemului de IA; înainte de implementare

**Cine:** Data Scientist/Inginer ML + Manager Supraveghere Umană

**Cum:**

1. **Proiectarea Tabloului de Bord de Supraveghere**

   Dezvoltați tabloul de bord centralizat de supraveghere furnizând:

   **Panoul de Monitorizare în Timp Real:**
   - Starea operațională a sistemului IA (funcționează/oprit/degradat)
   - Debit de decizii (decizii/oră)
   - Adâncimea cozii actuale
   - Starea alertei (normal/avertisment/critic)
   - Rata și tendința de suprascriere

   **Panoul de Revizuire a Rezultatelor:**
   - Decizii IA recente cu timestamp-uri
   - Scoruri de încredere și metrici de incertitudine
   - Rezumatul datelor de intrare
   - Informații de explicabilitate (importanța caracteristicilor, raționament)
   - Starea validării (validat/în așteptare/semnalat)

   **Panoul Indicatorilor de Risc:**
   - Indicatori Cheie de Risc (KRI) din PROC-AI-RM-001
   - Metrici de echitate (paritate demografică, oportunitate egală)
   - Metrici de performanță (acuratețe, precizie, reamintire)
   - Metrici de calitate a datelor (completitudine, prospețime, derivă)
   - Alerte de încălcare a pragurilor

   **Panoul de Control al Intervenției:**
   - Buton de oprire de urgență (mare, vizibil)
   - Controale de suprascriere a deciziilor
   - Controale de respingere lot
   - Controale de blocare a implementării
   - Istoricul suprascrierii și jurnalul de audit

2. **Implementarea Instrumentelor de Explicabilitate**

   Activați MOD-C (interpretează corect rezultatele):
   - Vizualizarea importanței caracteristicilor (SHAP, LIME, etc.)
   - Explicarea raționamentului deciziei
   - Analiza contrafactuală ("ce ar schimba decizia?")
   - Recuperarea cazurilor similare (arată decizii analogice anterioare)
   - Defalcarea încrederii pe componentă a deciziei

3. **Implementarea Sistemului de Alertă și Notificare**

   Configurați alerte automate pentru:
   - Încălcări de praguri (KRI, metrici de echitate)
   - Decizii anomale (valori atipice, modele neobișnuite)
   - Rezultate cu incertitudine ridicată (scoruri de încredere scăzute)
   - Degradarea sau erorile sistemului
   - Intrări în afara domeniului (încălcări ale limitelor capacității)

   Metode de livrare a alertelor:
   - Notificări pe tabloul de bord (vizuale și audio)
   - Alerte email (pentru non-urgent)
   - Alerte SMS/telefon (pentru critic)
   - Alerte de escaladare (dacă nu sunt confirmate în SLA)

4. **Dezvoltarea Instrumentelor de Validare a Deciziilor**

   Activați procedurile de validare MOD-C:
   - Verificări automate de validare (reguli de afaceri, calitatea datelor)
   - Fluxuri de lucru de revizuire bazate pe eșantion
   - Comparație A/B (decizie IA vs. linie de bază/umană)
   - Scanări de detectare a prejudecăților (analiză demografică)
   - Generarea pistei de audit

5. **Implementarea Contramăsurilor pentru Prejudecata de Automatizare**

   Activați MOD-B (rămâne conștient de prejudecata de automatizare):
   - Contestări aleatorii ale deciziilor (necesită justificare)
   - Exerciții obligatorii de dezacord (găsiți defecte în raționamentul IA)
   - Zile periodice "IA oprită" (decizii doar umane pentru calibrare)
   - Sugestii de contestare ("De ce ar putea fi greșită această decizie?")
   - Revizuiri oarbe (ascundeți recomandarea IA până când omul decide)

6. **Documentarea Specificațiilor Instrumentelor**
   - Creați Specificația Instrumentelor Tehnice de Supraveghere (SPEC-HO-001)
   - Documentați designul și caracteristicile tabloului de bord
   - Specificați pragurile de alertă și escaladarea
   - Definiți controalele de acces la instrumente
   - Furnizați manuale de utilizare și ghiduri de formare

**Dovezi Necesare:**
- Specificația Instrumentelor Tehnice de Supraveghere (SPEC-HO-001)
- Tabloul de bord de supraveghere (prototip funcțional sau producție)
- Documentația instrumentelor de explicabilitate
- Documentația configurației de alertă
- Manualele de utilizare ale instrumentelor

**Durată:** 6-12 săptămâni (paralel cu dezvoltarea sistemului IA)

**Verificare Calitate:**
- Tabloul de bord furnizează vizibilitate în timp real
- Instrumentele de explicabilitate sprijină interpretarea rezultatelor
- Alertele sunt acționabile și la timp
- Contramăsurile pentru prejudecata de automatizare sunt eficiente
- Instrumentele sunt ușor de utilizat pentru personalul de supraveghere

---

#### Pasul 3.2: Implementarea Mecanismelor de Suprascriere și Intervenție

**Când:** În timpul dezvoltării sistemului de IA; înainte de implementare

**Cine:** Data Scientist/Inginer ML + Manager Supraveghere Umană

**Cum:**

1. **Implementarea Mecanismului de Oprire de Urgență**

   Activați MOD-E (intervine/întrerupe operațiunea):

   **Implementare Tehnică:**
   - Buton fizic de oprire de urgență (dacă este aplicabil)
   - Control de oprire de urgență pe tabloul de bord (buton roșu mare)
   - Comandă de oprire de urgență în linia de comandă
   - Endpoint API pentru oprire programatică
   - Design fail-safe (oprirea persistă chiar dacă tabloul de bord eșuează)

   **Cerințe Funcționale:**
   - Timp de răspuns < 5 secunde
   - Oprire imediată a tuturor luării deciziilor IA
   - Tranziție în stare sigură (fără pierdere de date sau corupere)
   - Notificare automată către toate părțile interesate
   - Auto-înregistrare a evenimentului de oprire cu timestamp și utilizator

   **Cerințe de Testare:**
   - Testați oprirea de urgență lunar
   - Verificați că timpul de răspuns îndeplinește SLA
   - Confirmați tranziția în stare sigură
   - Validați livrarea notificării
   - Documentați rezultatele testului

2. **Implementarea Controalelor de Suprascriere a Deciziilor**

   Activați suprascrierea MOD-E a deciziilor specifice:

   **Flux de Lucru Suprascriere:**
   - Personalul de supraveghere selectează decizia de suprascris
   - Sistemul afișează detaliile deciziei și raționamentul IA
   - Personalul de supraveghere introduce motivul suprascrierii (obligatoriu)
   - Personalul de supraveghere introduce decizia alternativă (dacă este aplicabil)
   - Sistemul validează nivelul de autoritate al personalului de supraveghere
   - Sistemul înregistrează suprascrierea cu pistă de audit completă
   - Sistemul notifică Proprietarul Sistemului IA (pentru analiza modelelor)

   **Implementare Tehnică:**
   - Flag de suprascriere în înregistrarea deciziei (marchează ca suprascris)
   - Câmp motiv suprascriere (text liber + dropdown categorie)
   - Câmp decizie alternativă (date structurate)
   - Timestamp suprascriere și ID utilizator
   - Flux de lucru aprobare suprascriere (pentru autoritate Nivel 1 care necesită aprobare Nivel 2)

3. **Implementarea Controalelor de Respingere Lot**

   Activați respingerea mai multor decizii:
   - Interfață de selectare lot (filtrare după timp, tip, caracteristici)
   - Flag de invalidare lot
   - Procedură de revenire (inversare efecte ale deciziilor lot)
   - Notificare părți afectate (dacă deciziile au fost deja comunicate)
   - Înregistrare și pistă de audit pentru respingerea lotului

4. **Implementarea Controalelor de Blocare a Implementării**

   Activați MOD-D (decide să nu utilizeze/amâne):

   **Poarta de Implementare:**
   - Aprobarea supravegherii necesară înainte de implementarea în producție
   - Lista de verificare implementare (verificarea disponibilității supravegherii)
   - Mecanism de blocare (previne implementarea fără aprobare)
   - Documentarea motivului blocării
   - Specificarea remedierii necesare

   **Flux de Lucru:**
   - Sistemul IA solicită aprobarea implementării
   - Liderul de Supraveghere revizuiește lista de verificare implementare
   - Dacă există preocupări: Blochează cu motiv documentat
   - Dacă acceptabil: Aprobă implementarea
   - Înregistrează decizia de aprobare/blocare cu justificare

5. **Implementarea Controalelor de Degradare Grațioasă**

   Activați revenirea la modul de siguranță:
   - Configurare mod de siguranță (reguli de decizie conservative)
   - Condiții de declanșare automată (încălcări de praguri, erori)
   - Control de declanșare manuală (discreția personalului de supraveghere)
   - Notificare de revenire
   - Procedură de recuperare (revenire la operare normală)

6. **Documentarea Mecanismelor de Suprascriere**
   - Creați Specificația Mecanismelor de Suprascriere (SPEC-HO-002)
   - Documentați fiecare tip de suprascriere și procedură
   - Definiți cerințele de autoritate per tip de suprascriere
   - Specificați SLA-urile de timp de răspuns
   - Furnizați ghiduri de execuție a suprascrierii

**Dovezi Necesare:**
- Specificația Mecanismelor de Suprascriere (SPEC-HO-002)
- Rezultatele testului de oprire de urgență (lunar)
- Documentația fluxului de lucru de suprascriere
- Procedurile porții de implementare
- Ghidurile de execuție a suprascrierii

**Durată:** 4-8 săptămâni (paralel cu dezvoltarea sistemului IA)

**Verificare Calitate:**
- Timpul de răspuns oprire de urgență < 5 secunde
- Controalele de suprascriere sunt funcționale și testate
- Nivelurile de autoritate sunt aplicate
- Pistele de audit sunt complete
- Ghidurile de suprascriere sunt clare și acționabile

---

#### Pasul 3.3: Implementarea Sistemelor de Documentare și Pistă de Audit

**Când:** În timpul dezvoltării sistemului de IA; înainte de implementare

**Cine:** Data Scientist/Inginer ML + Ofițer Conformitate

**Cum:**

1. **Implementarea Pistei de Audit pentru Decizii**

   Pentru fiecare decizie IA, înregistrați:
   - ID decizie (identificator unic)
   - Timestamp (data/ora deciziei)
   - Date de intrare (rezumat sau hash pentru confidențialitate)
   - Rezultat IA (decizie, scor încredere, raționament)
   - Starea revizuirii supravegherii (revizuit/în așteptare/semnalat)
   - Starea suprascrierii (nesuprascris/suprascris + motiv)
   - ID personal supraveghere (cine a revizuit/suprascris)
   - Rezultatele validării (promovat/eșuat + detalii)

2. **Implementarea Pistei de Audit pentru Activitatea de Supraveghere**

   Pentru fiecare activitate de supraveghere, înregistrați:
   - ID activitate (identificator unic)
   - Timestamp (data/ora activității)
   - ID personal supraveghere (cine a efectuat activitatea)
   - Tip activitate (revizuire/suprascriere/escaladare/oprire)
   - Decizie(i) afectată(e) (dacă este aplicabil)
   - Motiv/justificare (text liber)
   - Rezultat (decizie susținută/suprascrisă/escaladată)

3. **Implementarea Pistei de Audit pentru Alertă și Incident**

   Pentru fiecare alertă sau incident, înregistrați:
   - ID alertă (identificator unic)
   - Timestamp (data/ora declanșare alertă)
   - Tip alertă (încălcare prag/anomalie/eroare)
   - Severitate (info/avertisment/critic)
   - Componentă sistem afectată
   - Răspuns supraveghere (confirmat/investigat/escaladat)
   - Rezoluție (rezolvat/în curs/escaladat)
   - Timp de răspuns (timp până la confirmare și rezoluție)

4. **Implementarea Înregistrărilor de Formare și Certificare**

   Mențineți înregistrări de:
   - Prezență la formare (cine a participat la ce sesiuni)
   - Rezultatele evaluării (scoruri, promovat/nepromovat, remediere)
   - Emiterea certificării (dată, expirare, istoric reînnoire)
   - Evaluări de competență (evaluări continue de performanță)

5. **Configurarea Retenției și Arhivării**

   Conform cerințelor Actului UE privind IA:
   - Păstrați toate jurnalele de audit pentru minimum 10 ani
   - Implementați stocare de arhivare securizată
   - Activați recuperarea eficientă pentru audituri și investigații
   - Protejați integritatea pistei de audit (jurnale rezistente la manipulare)
   - Implementați backup și recuperare după dezastre

6. **Implementarea Raportării și Analizei**

   Dezvoltați rapoarte pentru:
   - Rezumatul activității zilnice de supraveghere
   - Analiza săptămânală a suprascrierii
   - Evaluarea lunară a eficacității
   - Raportarea trimestrială de guvernanță
   - Verificarea anuală de audit și conformitate

**Dovezi Necesare:**
- Specificația sistemului de pistă de audit
- Mostre de jurnal de audit (decizii, supraveghere, alerte)
- Proceduri de retenție și arhivare
- Șabloane și mostre de rapoarte
- Verificarea protecției datelor și integrității

**Durată:** 4-6 săptămâni (paralel cu dezvoltarea sistemului IA)

**Verificare Calitate:**
- Toate elementele de date necesare înregistrate
- Jurnalele sunt rezistente la manipulare și sigure
- Retenția îndeplinește cerința de 10 ani a Actului UE privind IA
- Rapoartele sunt exacte și acționabile
- Aprobarea Ofițerului de Conformitate obținută

---

### FAZA 4: OPERAȚIUNILE DE SUPRAVEGHERE (Control HO-003)

#### Pasul 4.1: Desfășurarea Operațiunilor Zilnice de Supraveghere

**Când:** Continuu în timpul operării sistemului IA

**Cine:** Personal Supraveghere (Operator/Specialist/Lider)

**Cum:**

1. **Proceduri de Început de Schimb**

   Fiecare schimb începe cu:
   - Autentificare la tabloul de bord de supraveghere
   - Revizuirea notelor de predare de la schimbul anterior
   - Verificarea stării operaționale a sistemului
   - Verificarea stocului de alerte și problemelor în așteptare
   - Verificarea funcționalității tuturor sistemelor de monitorizare
   - Confirmarea responsabilității schimbului

2. **Activități de Monitorizare Continuă**

   Pe parcursul schimbului, personalul de supraveghere:

   **Monitorizează Panourile Tabloului de Bord (continuu):**
   - Urmărește debitul de decizii în timp real
   - Monitorizează starea și tendințele KRI
   - Observă notificările de alertă
   - Urmărește rata și modelele de suprascriere

   **Revizuiește Deciziile IA (conform frecvenței supravegherii):**
   - Pentru risc Critic/Ridicat: Revizuiește fiecare decizie (100%)
   - Pentru risc Mediu: Revizuiește eșantion (10-20% sau decizii semnalate)
   - Pentru risc Scăzut: Revizuiește eșantion (1-5% sau decizii semnalate)

   **Pentru fiecare decizie revizuită:**
   - Examinează datele de intrare și contextul
   - Revizuiește rezultatul IA și scorul de încredere
   - Analizează informațiile de explicabilitate (importanța caracteristicilor, raționament)
   - Aplică verificări de validare (reguli de afaceri, rezonabilitate)
   - Evaluează pentru potențială prejudecată sau discriminare
   - Fă decizia de validare: Susține / Suprascrie / Escaladează
   - Documentează revizuirea în pista de audit

3. **Răspunde la Alerte**

   Când alertă declanșată:
   - Confirmă alerta în SLA (de ex., < 15 minute)
   - Investighează cauza alertei
   - Evaluează severitatea și impactul
   - Întreprinde acțiunea corespunzătoare:
     - **Alertă info:** Documentează și monitorizează
     - **Alertă avertisment:** Investighează și escaladează dacă este necesar
     - **Alertă critică:** Intervenție imediată, posibilă oprire de urgență
   - Documentează investigația și rezoluția
   - Închide alerta când este rezolvată

4. **Execută Intervenții și Suprascrieri**

   Când intervenția este necesară:

   **Suprascriere Decizie:**
   - Selectează decizia de suprascris în tabloul de bord
   - Revizuiește detaliile deciziei și raționamentul IA
   - Introduce motivul suprascrierii (obligatoriu, detaliat)
   - Introduce decizia alternativă (dacă este aplicabil)
   - Confirmă nivelul de autoritate pentru suprascriere
   - Execută suprascrierea
   - Verifică suprascrierea înregistrată în pista de audit
   - Notifică Proprietarul Sistemului IA (dacă modelul este detectat)

   **Oprire de Urgență:**
   - Apasă butonul de oprire de urgență
   - Verifică sistemul oprit (< 5 secunde)
   - Notifică liderul de supraveghere și Proprietarul Sistemului IA imediat
   - Documentează motivul și circumstanțele opririi
   - Participă la investigația incidentului
   - Sprijină repornirea sistemului când este sigur

5. **Proceduri de Sfârșit de Schimb**

   Fiecare schimb se încheie cu:
   - Completează revizuirile în așteptare (sau predă la schimbul următor)
   - Documentează rezumatul schimbului (decizii revizuite, suprascrieri, alerte, incidente)
   - Pregătește notele de predare pentru schimbul următor
   - Actualizează jurnalul de schimb
   - Deautentificare de la tabloul de bord de supraveghere

**Dovezi Necesare:**
- Jurnale de schimb (zilnic)
- Înregistrări de revizuire a deciziilor (per decizie)
- Înregistrări de confirmare și rezoluție a alertelor
- Documentația suprascrierii
- Note de predare schimb

**Durată:** Continuu (operațiuni continue)

**Verificare Calitate:**
- Toate alertele confirmate în SLA
- Acoperirea revizuirii deciziilor îndeplinește planul (100% pentru critic, % eșantion pentru altele)
- Documentația suprascrierii este completă și detaliată
- Predările de schimb sunt amănunțite
- Niciun decalaj neaprobat în acoperire

---

#### Pasul 4.2: Interpretarea și Validarea Rezultatelor IA

**Când:** În timpul revizuirii deciziilor (operațiuni continue)

**Cine:** Personal Supraveghere (Operator/Specialist/Lider)

**Cum:**

1. **Adună Contextul Deciziei**

   Pentru fiecare decizie în curs de revizuire:
   - Recuperează datele de intrare (caracteristici, atribute)
   - Revizuiește informațiile subiectului deciziei (individ, entitate)
   - Înțelege contextul deciziei (situație, temporizare, dependențe)
   - Identifică deciziile istorice relevante (cazuri similare)

2. **Analizează Rezultatul IA**

   **Revizuiește Rezultatul Structurat:**
   - Valoarea deciziei (clasificare, scor, recomandare)
   - Scorul de încredere (probabilitate, metrică de incertitudine)
   - Categoria deciziei (aprobă/refuză, risc ridicat/mediu/scăzut, etc.)
   - Timestamp și ID decizie

   **Revizuiește Informațiile de Explicabilitate:**
   - Importanța caracteristicilor (ce intrări au condus decizia)
   - Rezumatul raționamentului (explicația IA)
   - Contrafactuale (ce ar schimba decizia)
   - Cazuri similare (decizii anterioare analogice)

3. **Aplică Verificările de Validare**

   **Validare Automată (sistemul efectuează, supravegherea revizuiește rezultatele):**
   - Conformitate cu regulile de afaceri (constrângeri dure)
   - Verificări de calitate a datelor (completitudine, validitate)
   - Verificări de interval (rezultate în limite așteptate)
   - Verificări de consistență (vs. modele istorice)

   **Validare Manuală (personalul de supraveghere efectuează):**
   - Verificare de rezonabilitate (are sens decizia?)
   - Potrivire contextuală (adecvată pentru circumstanțe?)
   - Verificare de prejudecată (dovezi de discriminare?)
   - Verificare de capacitate (decizie în utilizarea intenționată a sistemului?)

4. **Evaluează Riscul Prejudecății de Automatizare**

   Protejează-te activ împotriva dependenței excesive (MOD-B):
   - Întreabă: "Ce ar putea fi ratat de IA?"
   - Întreabă: "Aș lua aceeași decizie fără IA?"
   - Întreabă: "Care sunt interpretările alternative?"
   - Contestă raționamentul IA (găsește potențiale defecte)
   - Consideră rata de bază și probabilitatea prealabilă

5. **Fă Decizia de Validare**

   Pe baza analizei, personalul de supraveghere decide:

   **SUSȚINE (decizia este validă):**
   - Toate verificările de validare promovate
   - Rezultatul este rezonabil și adecvat
   - Nicio prejudecată sau discriminare detectată
   - Decizia se aliniază cu utilizarea intenționată
   - **Acțiune:** Marchează decizia ca validată; fără suprascriere

   **SUPRASCRIE (decizia este invalidă):**
   - Verificarea de validare eșuată
   - Rezultatul este nerezonabil sau necorespunzător
   - Prejudecată sau discriminare detectată
   - Decizie în afara utilizării intenționate sau capacității
   - **Acțiune:** Execută suprascrierea deciziei; documentează motivul; introduce decizia alternativă

   **ESCALADEAZĂ (incert sau cu miză mare):**
   - Validarea este neclară sau ambiguă
   - Decizia are impact ridicat și justifică revizuire suplimentară
   - Problemă sistemică potențială detectată (afectează mai multe decizii)
   - **Acțiune:** Escaladează către Specialist sau Lider de Supraveghere; semnalează pentru investigație

6. **Documentează Validarea**
   - Înregistrează decizia de validare (susține/suprascrie/escaladează)
   - Documentează justificarea și raționamentul
   - Înregistrează timestamp-ul validării și ID-ul revizorului
   - Actualizează pista de audit

**Dovezi Necesare:**
- Înregistrări de validare a deciziilor (per decizie)
- Documentația suprascrierii (pentru decizii suprascrise)
- Înregistrări de escaladare (pentru decizii escalate)
- Justificarea validării (documentată în pista de audit)

**Durată:** Continuu (per revizuire decizie)

**Verificare Calitate:**
- Justificarea validării este clară și detaliată
- Motivele suprascrierii sunt specifice și justificate
- Escaladările sunt adecvate (nu supra- sau sub-escalate)
- Deciziile de validare arată gândire critică activă (nu ștampilare automată)

---

#### Pasul 4.3: Executarea Procedurilor de Escaladare

**Când:** Când intervenția depășește autoritatea personalului de supraveghere

**Cine:** Personal Supraveghere → Specialist Supraveghere → Lider Supraveghere → Manager Supraveghere Umană → Director IA → Comitet Guvernanță IA

**Cum:**

1. **Identifică Declanșatorul de Escaladare**

   Escaladează când:
   - Validarea deciziei este incertă (rezultat ambiguu)
   - Suprascrierea depășește nivelul de autoritate (Nivel 1 încearcă să suprascrie decizie cu miză mare)
   - Problemă sistemică detectată (model de eșecuri, prejudecată, erori)
   - Oprire de urgență executată (escaladează întotdeauna)
   - Încălcarea pragului nu se rezolvă (KRI rămâne în zona roșie)
   - Preocupare etică sau legală (încălcare suspectată a drepturilor fundamentale)
   - Situație nouă (scenariu neacoperit în formare sau proceduri)

2. **Aplică Matricea de Escaladare**

   | Tip Problemă | Escaladare Inițială Către | Termen | Autoritate Finală |
   |------------|---------------------|----------|-----------------|
   | **Validare incertă** | Specialist Supraveghere (Nivel 2) | < 2 ore | Lider Supraveghere (Nivel 3) |
   | **Autoritate depășită** | Următorul nivel de autoritate | < 1 oră | Conform Secțiunii 3.4.3 |
   | **Problemă sistemică** | Lider Supraveghere (Nivel 3) | < 4 ore | Manager Supraveghere Umană |
   | **Oprire de urgență** | Lider Supraveghere + Proprietar Sistem IA | Imediat | Director IA |
   | **Încălcare prag** | Specialist Supraveghere (Nivel 2) | < 1 oră | Manager Supraveghere Umană |
   | **Preocupare drepturi fundamentale** | Lider Supraveghere + Ofițer Conformitate | Imediat | Comitet Guvernanță IA |
   | **Situație nouă** | Lider Supraveghere (Nivel 3) | < 4 ore | Manager Supraveghere Umană |

3. **Pregătește Documentația de Escaladare**

   **Raportul de Escaladare (FORM-HO-004) conține:**
   - ID escaladare și timestamp
   - Personal care escaladează (nume, rol, nivel autoritate)
   - Tip și descriere problemă
   - Decizii IA afectate (ID-uri, număr, impact)
   - Analiza și investigația efectuată
   - Acțiunea recomandată
   - Urgența și termenul
   - Destinatarul escaladării

4. **Execută Escaladarea**
   - Contactează destinatarul escaladării conform matricei
   - Furnizează Raportul de Escaladare (FORM-HO-004)
   - Instruiește destinatarul verbal (pentru escaladări urgente)
   - Furnizează acces la dovezile de sprijin (jurnale, decizii, analiză)
   - Așteaptă decizia de escaladare

5. **Implementează Decizia de Escaladare**

   Destinatarul escaladării decide:
   - **APROBĂ RECOMANDAREA:** Implementează acțiunea recomandată
   - **MODIFICĂ RECOMANDAREA:** Implementează acțiune alternativă
   - **ESCALADEAZĂ MAI DEPARTE:** Escaladează la nivelul următor
   - **AMÂNĂ DECIZIA:** Adună informații suplimentare; re-escaladează când este gata

   Personalul de supraveghere implementează decizia:
   - Execută acțiunea aprobată (suprascriere, oprire, blocare implementare, etc.)
   - Documentează rezultatul escaladării
   - Actualizează pista de audit
   - Comunică rezultatul către părțile interesate

6. **Închide Escaladarea**
   - Verifică acțiunea completată
   - Documentează rezultatul final
   - Actualizează jurnalul de escaladare
   - Desfășoară revizuirea post-escaladare (pentru probleme sistemice)

**Dovezi Necesare:**
- Raportul de Escaladare (FORM-HO-004)
- Documentația deciziei de escaladare
- Înregistrări de implementare a acțiunii
- Jurnalul de escaladare (urmărire toate escaladările)
- Revizuirea post-escaladare (pentru probleme sistemice)

**Durată:** Conform termenelor matricei de escaladare

**Verificare Calitate:**
- Escaladările sunt la timp (în termenele matricei)
- Documentația de escaladare este completă
- Deciziile sunt documentate și implementate
- Modelele din escaladări sunt analizate (indică probleme sistemice)

---

#### Pasul 4.4: Menținerea Documentației de Supraveghere

**Când:** Continuu (zilnic/săptămânal/lunar)

**Cine:** Personal Supraveghere + Manager Supraveghere Umană

**Cum:**

1. **Documentare Zilnică**

   Personalul de supraveghere documentează zilnic:
   - Jurnale de schimb (ore început/sfârșit, activități, predări)
   - Înregistrări de revizuire a deciziilor (decizii revizuite, rezultate validare)
   - Documentația suprascrierii (motiv, decizie alternativă)
   - Înregistrări de răspuns la alertă (confirmare, investigație, rezoluție)
   - Rapoarte de incident (dacă au avut loc incidente)

2. **Documentare Săptămânală**

   Liderul de Supraveghere compilează săptămânal:
   - Raportul Rezumativ Săptămânal de Supraveghere (RPT-HO-001)
     - Total decizii revizuite
     - Număr și rată suprascrieri (% din decizii)
     - Număr alerte pe tip și severitate
     - Număr escaladări și rezultate
     - Incidente și rezoluții
     - Note performanță personal
     - Probleme și preocupări identificate

3. **Documentare Lunară**

   Managerul de Supraveghere Umană pregătește lunar:
   - Raportul Lunar de Eficacitate a Supravegherii (RPT-HO-002)
     - KPI-uri de supraveghere și tendințe (vezi Secțiunea 6.1)
     - Analiza suprascrierii (modele, cauze rădăcină)
     - Starea formării și competenței
     - Verificarea completității pistei de audit
     - Evaluarea conformității
     - Recomandări de îmbunătățire

4. **Menținerea Depozitului de Înregistrări de Supraveghere**

   Organizați toată documentația de supraveghere:
   - Jurnale de schimb (organizate pe dată)
   - Înregistrări de revizuire a deciziilor (organizate pe ID decizie)
   - Documentația suprascrierii (organizată pe dată și tip)
   - Înregistrări de alertă și incident (organizate pe dată și severitate)
   - Înregistrări de escaladare (organizate pe dată)
   - Rapoarte săptămânale și lunare (organizate pe dată)
   - Exporturi pistă de audit (organizate pe lună)

5. **Asigurarea Conformității cu Retenția Înregistrărilor**
   - Păstrați toate înregistrările de supraveghere pentru 10 ani (cerință Actul UE privind IA)
   - Implementați arhivarea securizată după 2 ani de retenție activă
   - Activați recuperarea pentru audituri, investigații, inspecții reglementare
   - Protejați integritatea înregistrărilor (rezistente la manipulare, control acces)

**Dovezi Necesare:**
- Jurnale de schimb zilnice
- Rapoarte Rezumative Săptămânale de Supraveghere (RPT-HO-001)
- Rapoarte Lunare de Eficacitate a Supravegherii (RPT-HO-002)
- Depozitul înregistrărilor de supraveghere (organizat și accesibil)
- Verificarea conformității cu retenția

**Durată:** Zilnic/săptămânal/lunar conform programului

**Verificare Calitate:**
- Documentația este completă și la timp
- Rapoartele sunt exacte și perspicace
- Înregistrările sunt organizate și recuperabile
- Conformitatea cu retenția verificată
- Aprobarea Ofițerului de Conformitate (rapoarte lunare)

---

### FAZA 5: EVALUAREA EFICACITĂȚII SUPRAVEGHERII (Control HO-004)

#### Pasul 5.1: Monitorizarea Indicatorilor Cheie de Performanță (KPI) ai Supravegherii

**Când:** Monitorizare continuă; raportare săptămânală/lunară

**Cine:** Manager Supraveghere Umană + Lider Supraveghere

**Cum:**

1. **Definirea KPI-urilor de Supraveghere**

   Stabiliți KPI-uri măsurând eficacitatea supravegherii în cinci dimensiuni:

   **Dimensiunea 1: Acoperire și Receptivitate**
   - **KPI-HO-001:** Acoperirea Revizuirii Deciziilor (% decizii revizuite vs. țintă)
     - Țintă: 100% pentru Critic/Ridicat, conform % plan pentru Mediu/Scăzut
     - Măsurare: (Decizii revizuite / Total decizii) × 100%
     - Frecvență: Zilnic

   - **KPI-HO-002:** Timpul de Confirmare a Alertei (timp mediu confirmare alerte)
     - Țintă: < 15 minute
     - Măsurare: Medie (Timestamp alertă confirmată - Timestamp alertă declanșată)
     - Frecvență: Zilnic

   - **KPI-HO-003:** Timpul de Răspuns la Escaladare (timp mediu rezolvare escaladări)
     - Țintă: Conform matricei escaladare (1-4 ore în funcție de tip)
     - Măsurare: Medie (Timestamp escaladare rezolvată - Timestamp escaladare creată)
     - Frecvență: Săptămânal

   **Dimensiunea 2: Eficacitatea Intervenției**
   - **KPI-HO-004:** Rata de Suprascriere (% decizii suprascrise)
     - Țintă: 2-10% (prea scăzută = ștampilare automată; prea mare = sistem nepregătit)
     - Măsurare: (Decizii suprascrise / Decizii revizuite) × 100%
     - Frecvență: Săptămânal

   - **KPI-HO-005:** Acuratețea Suprascrierii (% suprascrieri care au fost corecte)
     - Țintă: > 95%
     - Măsurare: Analiză retrospectivă; (Suprascrieri corecte / Total suprascrieri) × 100%
     - Frecvență: Lunar

   - **KPI-HO-006:** Numărul de Opriri de Urgență (număr opriri de urgență executate)
     - Țintă: Minimizați (< 1/lună ideal; orice oprire necesită investigație)
     - Măsurare: Număr evenimente oprire de urgență
     - Frecvență: Lunar

   **Dimensiunea 3: Calitate și Acuratețe**
   - **KPI-HO-007:** Rata de Eroare de Validare (% validări găsite ulterior incorecte)
     - Țintă: < 2%
     - Măsurare: Analiză retrospectivă; (Erori validare / Total validări) × 100%
     - Frecvență: Lunar

   - **KPI-HO-008:** Rata de Suprascriere Fals Pozitivă (% suprascrieri inutile)
     - Țintă: < 5%
     - Măsurare: Analiză retrospectivă; (Suprascrieri inutile / Total suprascrieri) × 100%
     - Frecvență: Lunar

   - **KPI-HO-009:** Rata de Problemă Ratată (% decizii problematice neidentificate de supraveghere)
     - Țintă: < 1%
     - Măsurare: (Decizii problematice nesemnalate / Total decizii problematice) × 100%
     - Frecvență: Lunar

   **Dimensiunea 4: Competența Personalului**
   - **KPI-HO-010:** Actualitatea Certificării (% personal cu certificări actuale)
     - Țintă: 100%
     - Măsurare: (Personal cu certificare validă / Total personal supraveghere) × 100%
     - Frecvență: Săptămânal

   - **KPI-HO-011:** Rata de Finalizare a Formării (% formare necesară completată)
     - Țintă: 100%
     - Măsurare: (Ore formare completate / Ore formare necesare) × 100%
     - Frecvență: Lunar

   - **KPI-HO-012:** Rata de Promovare Evaluare Competență (% promovând reînnoiri anuale)
     - Țintă: ≥ 90%
     - Măsurare: (Personal promovând reînnoire / Total evaluări reînnoire) × 100%
     - Frecvență: Anual

   **Dimensiunea 5: Conformitate și Documentare**
   - **KPI-HO-013:** Completitudinea Pistei de Audit (% decizii cu pistă de audit completă)
     - Țintă: 100%
     - Măsurare: (Decizii cu audit complet / Total decizii) × 100%
     - Frecvență: Săptămânal

   - **KPI-HO-014:** Oportu