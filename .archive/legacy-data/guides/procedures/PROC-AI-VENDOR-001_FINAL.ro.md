# PROC-AI-VENDOR-001: Procedura de Management al Furnizorilor de IA

**ID Procedură:** PROC-AI-VENDOR-001
**Denumire Procedură:** Procedura de Management al Furnizorilor de IA
**Standard:** STD-AI-001: Standard de Clasificare a Sistemelor de IA, STD-AI-002: Standard de Management al Riscurilor de IA, STD-AI-009: Standard al Sistemului de Management al Calității
**Controale Acoperite:** CLS-001, CLS-005, RM-001, RM-006, QMS-001, QMS-007
**Data Intrării în Vigoare:** [De completat]
**Ultima Actualizare:** [De completat]
**Data Următoarei Revizuiri:** [De completat]
**Status Aprobare:** [Ciornă/Aprobat]

---

## 1. SCOP ȘI DOMENIU DE APLICARE

### 1.1 Scop

Această procedură stabilește cerințele pentru gestionarea furnizorilor terți de sisteme de IA pe tot parcursul ciclului de viață al furnizorului, asigurând că sistemele de IA achiziționate respectă Regulamentul UE privind IA și cerințele organizaționale. Aceasta include selecția furnizorilor, due diligence, contractare, management continuu și încetare.

### 1.2 Domeniu de Aplicare

Această procedură se aplică pentru:
- Achiziția de sisteme și componente de IA comerciale
- Dezvoltarea de sisteme de IA de către furnizori terți
- Abonamente IA ca Serviciu (AIaaS)
- Furnizori de modele de IA și API-uri pentru modele fundamentale
- Furnizori de infrastructură și platforme de IA
- Consultanți și integratori de IA care furnizează capabilități de IA
- Sub-procesatori ai furnizorilor de IA

Această procedură nu se aplică pentru:
- Sisteme de IA dezvoltate intern (vezi PROC-AI-DEV-001)
- Achiziția de software fără IA
- Achiziția de hardware fără componente de IA

### 1.3 Proprietar al Procedurii și Contacte

| Rol | Nume | Titlu | Contact |
|-----|------|-------|---------|
| **Proprietar Procedură** | [Nume] | Manager Achiziții | [Email/Telefon] |
| **Revizuire Tehnică** | [Nume] | Lider Dezvoltare IA | [Email/Telefon] |
| **Conformitate** | [Nume] | Responsabil Conformitate | [Email/Telefon] |

---

## 2. ROLURI ȘI RESPONSABILITĂȚI

### 2.1 Roluri Cheie

| Rol | Responsabilitate | Autoritate |
|-----|------------------|------------|
| **Manager Achiziții** | Gestionează ciclul de viață al furnizorului; negocierea contractelor; performanța furnizorului | Aprobă selecția furnizorilor; încetează contractele |
| **Proprietar Sistem de IA** | Definește cerințele; acceptă sistemele de IA ale furnizorului; este responsabil pentru conformitate | Aprobă selecția furnizorilor; acceptă riscurile |
| **Manager Riscuri IA** | Evaluează riscurile furnizorului; validează controalele de risc ale furnizorului | Blochează furnizorii cu risc ridicat; solicită controale suplimentare |
| **Responsabil Conformitate** | Verifică conformitatea furnizorului cu Regulamentul UE privind IA; validează certificările | Respinge furnizorii neconformi |
| **Arhitect Securitate** | Evaluarea securității; cerințe pentru teste de penetrare | Blochează furnizorii cu probleme de securitate |
| **Responsabil Protecția Datelor** | Conformitate GDPR; acorduri de prelucrare a datelor | Aprobă termenii de prelucrare a datelor |
| **Consilier Juridic** | Revizuirea contractelor; termeni de răspundere; protecția PI | Aprobă termenii contractuali |
| **Comitetul de Guvernanță IA** | Supravegherea guvernanței; decizii strategice privind furnizorii | Aprobă relațiile cu furnizorii cu risc ridicat |

### 2.2 Matricea RACI

| Activitate | Achiziții | Proprietar Sistem | Manager Riscuri | Conformitate | Securitate | RPD | Juridic |
|------------|-----------|-------------------|-----------------|--------------|------------|-----|---------|
| Identificarea furnizorilor | R | A | I | C | I | I | I |
| Definirea cerințelor | C | A | C | C | C | C | I |
| Due diligence | R | C | R | R | R | R | C |
| Evaluarea riscurilor | C | C | A | C | C | C | I |
| Negocierea contractului | R | C | I | C | C | C | A |
| Selecția furnizorului | R | A | R | R | R | R | C |
| Monitorizare continuă | R | A | R | C | C | C | I |
| Revizuiri de performanță | R | A | C | C | C | C | I |
| Reînnoire/încetare contract | R | A | C | C | C | C | R |

**Legendă:** A=Aprobator, R=Responsabil, C=Consultat, I=Informat

---

## 3. CADRUL DE MANAGEMENT AL FURNIZORILOR DE IA

### 3.1 Prezentare Generală a Ciclului de Viață al Furnizorului

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              CICLUL DE VIAȚĂ AL MANAGEMENTULUI FURNIZORILOR DE IA           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐    │
│   │ IDENTIFICA │───►│  EVALUEAZĂ │───►│ CONTRACTA  │───►│  INTEGREAZĂ│    │
│   │   ȘI RFP   │    │  ȘI DUE    │    │   ȘI SLA   │    │  ȘI TESTEAZĂ│   │
│   │            │    │ DILIGENCE  │    │            │    │            │    │
│   └────────────┘    └────────────┘    └────────────┘    └────────────┘    │
│                                                               │            │
│   ┌────────────────────────────────────────────────────────────┘           │
│   │                                                                        │
│   ▼                                                                        │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐                      │
│   │ GESTIONEAZĂ│───►│  REVIZUIE  │───►│ REÎNNOIEȘTE│                      │
│   │   CONTINUU │    │ PERFORMANȚA│    │SAU ÎNCETEAZĂ│                     │
│   │            │    │            │    │            │                      │
│   └────────────┘    └────────────┘    └────────────┘                      │
│         ▲                │                                                 │
│         └────────────────┘ (Ciclu continuu pe durata relației)            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Niveluri de Risc ale Furnizorilor

Furnizorii de IA sunt clasificați în niveluri de risc pe baza criticității și nivelului de risc al sistemelor lor de IA:

| Nivel | Criterii | Nivel Due Diligence | Frecvența Revizuirii |
|-------|----------|---------------------|----------------------|
| **Nivelul 1 - Critic** | Sisteme de IA cu risc ridicat; critice pentru misiune; procesează date sensibile | Exhaustiv | Trimestrial |
| **Nivelul 2 - Semnificativ** | IA cu risc limitat; procese de afaceri importante; sensibilitate moderată a datelor | Standard | Semestrial |
| **Nivelul 3 - Standard** | IA cu risc minimal; necritice; procesare limitată a datelor | De bază | Anual |

---

## 4. PROCEDURI DETALIATE DE MANAGEMENT AL FURNIZORILOR

### 4.1 Faza 1: Identificarea Furnizorului și RFP

#### 4.1.1 Obiective
- Identificarea furnizorilor potențiali de IA
- Definirea clară a cerințelor
- Solicitarea de propuneri

#### 4.1.2 Activități

**Pasul 1: Definirea Cerințelor**
1. Documentarea cerințelor de afaceri cu Proprietarul Sistemului de IA
2. Definirea cerințelor tehnice incluzând:
   - Specificații funcționale
   - Cerințe de performanță
   - Cerințe de integrare
   - Necesități de scalabilitate
3. Definirea cerințelor de conformitate cu Regulamentul UE privind IA:
   - Clasificarea de risc așteptată
   - Cerințe de documentație
   - Cerințe de transparență
   - Cerințe de supraveghere umană
4. Definirea cerințelor de securitate și protecție a datelor
5. Completarea Listei de Verificare a Cerințelor pentru Furnizorii de IA (CHK-AI-VENDOR-001)

**Pasul 2: Cercetarea Pieței**
1. Cercetarea furnizorilor potențiali
2. Revizuirea credențialelor și certificărilor furnizorului
3. Verificarea istoricului furnizorului privind conformitatea cu Regulamentul UE privind IA
4. Identificarea furnizorilor cu prezență relevantă în UE
5. Documentarea constatărilor cercetării

**Pasul 3: Cerere de Propunere (RFP)**
1. Pregătirea RFP incluzând:
   - Cerințe de afaceri și tehnice
   - Cerințe de conformitate cu Regulamentul UE privind IA
   - Chestionar de securitate
   - Cerințe de preț
   - Criterii de evaluare
2. Includerea întrebărilor specifice IA:
   - Transparența și explicabilitatea modelului
   - Guvernanța datelor de antrenament
   - Metodologia de testare a părtinirii
   - Capabilități de înregistrare și audit
   - Funcționalități de supraveghere umană
   - Proceduri de răspuns la incidente
3. Distribuirea RFP către furnizorii calificați
4. Gestionarea procesului de întrebări și răspunsuri
5. Colectarea și înregistrarea propunerilor

#### 4.1.3 Livrabile
- [ ] Lista de Verificare a Cerințelor pentru Furnizorii de IA (CHK-AI-VENDOR-001)
- [ ] Document RFP
- [ ] Propuneri ale furnizorilor primite

---

### 4.2 Faza 2: Evaluarea Furnizorului și Due Diligence

#### 4.2.1 Obiective
- Evaluarea propunerilor furnizorilor
- Efectuarea due diligence exhaustiv
- Evaluarea riscurilor

#### 4.2.2 Activități

**Pasul 1: Selecția Inițială**
1. Revizuirea propunerilor în raport cu cerințele obligatorii
2. Eliminarea propunerilor neconforme
3. Punctarea propunerilor rămase în raport cu criteriile de evaluare
4. Crearea listei scurte de furnizori (de obicei 2-4)

**Pasul 2: Evaluarea Tehnică**
1. Evaluarea arhitecturii și designului sistemului de IA
2. Revizuirea documentației și specificațiilor modelului
3. Evaluarea afirmațiilor de acuratețe și performanță
4. Revizuirea rezultatelor testelor de părtinire
5. Evaluarea capabilităților de supraveghere umană
6. Evaluarea funcționalităților de înregistrare și audit trail
7. Revizuirea capabilităților de integrare
8. Completarea Formularului de Evaluare Tehnică (FORM-AI-VENDOR-001)

**Pasul 3: Evaluarea Conformității cu Regulamentul UE privind IA**
1. Solicitarea și revizuirea documentației de conformitate a furnizorului:
   - Documentație tehnică (format Anexa IV dacă este cu risc ridicat)
   - Declarația de Conformitate UE (dacă este cazul)
   - Dovada marcajului CE (dacă este cazul)
   - Înregistrarea în baza de date UE (dacă este cu risc ridicat)
2. Verificarea clasificării sistemului de IA
3. Evaluarea SMC al furnizorului pentru IA (conform ISO/IEC 42001 sau echivalent)
4. Revizuirea procedurilor de supraveghere post-comercializare
5. Revizuirea procedurilor de raportare a incidentelor
6. Completarea Formularului de Evaluare a Conformității IA (FORM-AI-VENDOR-002)

**Pasul 4: Evaluarea Securității**
1. Revizuirea certificărilor de securitate ale furnizorului (ISO 27001, SOC 2)
2. Efectuarea revizuirii chestionarului de securitate
3. Solicitarea și revizuirea rezultatelor testelor de penetrare
4. Evaluarea securității datelor și a criptării
5. Revizuirea controalelor de acces și autentificare
6. Completarea Formularului de Evaluare a Securității

**Pasul 5: Evaluarea Protecției Datelor**
1. Revizuirea activităților de prelucrare a datelor
2. Evaluarea măsurilor de conformitate GDPR
3. Revizuirea acordurilor cu sub-procesatorii
4. Evaluarea mecanismelor de transfer al datelor (pentru furnizorii din afara UE)
5. Revizuirea practicilor de păstrare și ștergere a datelor
6. Completarea Evaluării de Impact asupra Protecției Datelor (dacă este necesar)

**Pasul 6: Evaluarea Financiară și Operațională**
1. Revizuirea stabilității financiare a furnizorului
2. Evaluarea planurilor de continuitate a afacerii
3. Revizuirea capabilităților SLA
4. Evaluarea serviciilor de suport și mentenanță
5. Verificarea referințelor de la alți clienți

**Pasul 7: Evaluarea Riscurilor**
1. Compilarea tuturor constatărilor evaluării
2. Identificarea riscurilor specifice furnizorului
3. Evaluarea probabilității și impactului riscurilor
4. Determinarea clasificării nivelului de risc
5. Documentarea riscurilor în Registrul Riscurilor Furnizorilor (REC-AI-VENDOR-001)
6. Recomandarea măsurilor de atenuare a riscurilor
7. Completarea Formularului de Evaluare a Riscurilor Furnizorului (FORM-AI-VENDOR-003)

**Pasul 8: Selecția Furnizorului**
1. Compilarea scorurilor de evaluare și a evaluărilor de risc
2. Prezentarea constatărilor comitetului de selecție
3. Selectarea furnizorului preferat
4. Obținerea aprobărilor necesare:
   - Proprietarul Sistemului de IA
   - Managerul Riscurilor IA
   - Responsabilul Conformitate
   - Comitetul de Guvernanță IA (pentru furnizorii de Nivelul 1)
5. Notificarea furnizorilor selectați și neselectați

#### 4.2.3 Livrabile
- [ ] Formularul de Evaluare Tehnică (FORM-AI-VENDOR-001)
- [ ] Formularul de Evaluare a Conformității IA (FORM-AI-VENDOR-002)
- [ ] Formularul de Evaluare a Securității
- [ ] Evaluarea Protecției Datelor
- [ ] Formularul de Evaluare a Riscurilor Furnizorului (FORM-AI-VENDOR-003)
- [ ] Înregistrare în Registrul Riscurilor Furnizorilor (REC-AI-VENDOR-001)
- [ ] Documente de aprobare a selecției furnizorului

---

### 4.3 Faza 3: Contract și SLA

#### 4.3.1 Obiective
- Negocierea unui contract cuprinzător
- Stabilirea acordurilor de nivel de serviciu
- Definirea obligațiilor de conformitate

#### 4.3.2 Activități

**Pasul 1: Negocierea Contractului**
1. Negocierea termenilor comerciali
2. Negocierea prevederilor contractuale specifice IA:

**Clauze Contractuale Standard pentru IA (Obligatorii):**

| Categoria Clauzei | Prevederi Necesare |
|-------------------|-------------------|
| **Conformitatea cu Regulamentul UE privind IA** | Furnizorul declară conformitatea cu cerințele aplicabile ale Regulamentului UE privind IA; menține conformitatea pe toată durata contractului |
| **Documentație Tehnică** | Furnizorul furnizează și menține documentație conformă cu Anexa IV; furnizează actualizări în termen de [X] zile de la modificări |
| **Transparență** | Furnizorul permite implementatorului să îndeplinească obligațiile de transparență; furnizează informațiile necesare utilizatorilor din aval |
| **Managementul Riscurilor** | Furnizorul menține un sistem de management al riscurilor; notifică implementatorul despre modificările riscurilor; sprijină evaluările riscurilor |
| **Supraveghere Umană** | Furnizorul furnizează capabilități de supraveghere umană conform documentației; sprijină cerințele de supraveghere ale implementatorului |
| **Înregistrare** | Furnizorul furnizează înregistrare automată conform Articolului 12; păstrează înregistrările pentru [perioadă]; furnizează acces la înregistrări |
| **Guvernanța Datelor** | Furnizorul menține guvernanța datelor conform STD-AI-003; documentează proveniența datelor; raportează problemele de calitate a datelor |
| **Raportarea Incidentelor** | Furnizorul raportează incidentele grave în termen de [24] ore; cooperează la investigații; implementează acțiuni corective |
| **Drepturi de Audit** | Implementatorul are dreptul de a audita conformitatea IA a furnizorului; furnizorul cooperează la auditurile de reglementare |
| **Sub-procesatori** | Furnizorul divulgă sub-procesatorii IA; solicită conformitate echivalentă; notifică modificările sub-procesatorilor |
| **Notificarea Modificărilor** | Furnizorul notifică modificările materiale cu [X] zile în avans; furnizează evaluarea impactului modificărilor |
| **Încetare** | Prevederi de asistență la tranziție; returnarea/ștergerea datelor; conformitate continuă în timpul tranziției |
| **Răspundere** | Alocarea clară a răspunderii în temeiul Regulamentului UE privind IA; despăgubire pentru nerespectarea conformității |

**Pasul 2: Acordul de Nivel de Serviciu**
1. Definirea SLA-urilor de performanță:
   - Cerințe de disponibilitate și uptime
   - Cerințe de timp de răspuns
   - Metrici de acuratețe/performanță
   - Timpii de răspuns ai suportului
2. Definirea SLA-urilor de conformitate:
   - Termene de actualizare a documentației
   - Termene de raportare a incidentelor
   - Termene de cooperare la audit
3. Definirea remediilor și penalităților pentru nerespectarea SLA
4. Stabilirea cerințelor de raportare SLA

**Pasul 3: Acordul de Prelucrare a Datelor**
1. Executarea DPA conform Articolului 28 GDPR
2. Definirea activităților și scopurilor de prelucrare
3. Specificarea măsurilor tehnice și organizatorice
4. Definirea cerințelor pentru sub-procesatori
5. Stabilirea mecanismelor de transfer al datelor (CCT dacă este cazul)

**Pasul 4: Finalizarea Contractului**
1. Revizuirea juridică a tuturor documentelor contractuale
2. Obținerea aprobărilor interne necesare
3. Executarea contractului și a tuturor anexelor
4. Stocarea contractelor executate în sistemul de management al contractelor
5. Documentarea datelor cheie și a obligațiilor

#### 4.3.3 Livrabile
- [ ] Acordul-cadru executat
- [ ] Acordul de Nivel de Serviciu
- [ ] Acordul de Prelucrare a Datelor
- [ ] Anexă/addendum specific IA
- [ ] Rezumatul contractului aprobat

---

### 4.4 Faza 4: Integrare și Testare

#### 4.4.1 Obiective
- Validarea sistemului de IA al furnizorului
- Integrarea cu sistemele organizaționale
- Stabilirea proceselor operaționale

#### 4.4.2 Activități

**Pasul 1: Lansare și Planificare**
1. Organizarea întâlnirii de lansare cu furnizorul
2. Stabilirea guvernanței proiectului
3. Alocarea resurselor interne
4. Crearea planului de implementare
5. Stabilirea canalelor de comunicare

**Pasul 2: Integrare Tehnică**
1. Configurarea accesului și credențialelor furnizorului
2. Configurarea integrărilor
3. Stabilirea înregistrării și monitorizării
4. Configurarea controalelor de securitate
5. Configurarea mediului de test

**Pasul 3: Validarea Conformității**
1. Verificarea că documentația primită corespunde cerințelor contractuale
2. Validarea completitudinii documentației tehnice
3. Verificarea stării înregistrării (dacă este cu risc ridicat)
4. Validarea funcționalităților de supraveghere umană
5. Testarea capabilităților de înregistrare
6. Documentarea rezultatelor validării

**Pasul 4: Testare de Acceptanță**
1. Executarea planului de testare de acceptanță
2. Testarea cerințelor funcționale
3. Validarea performanței în raport cu SLA-urile
4. Testarea controalelor de securitate
5. Efectuarea testelor de părtinire și echitate
6. Testarea capabilităților de supraveghere umană
7. Documentarea rezultatelor testelor
8. Remedierea problemelor

**Pasul 5: Instruirea Utilizatorilor**
1. Instruirea administratorilor de sistem
2. Instruirea utilizatorilor finali
3. Documentarea finalizării instruirii
4. Stabilirea proceselor de suport

**Pasul 6: Punerea în Producție**
1. Obținerea aprobării pentru punerea în producție
2. Executarea trecerii în producție
3. Monitorizarea operațiunilor inițiale
4. Documentarea lecțiilor învățate
5. Închiderea proiectului de integrare

#### 4.4.3 Livrabile
- [ ] Planul de implementare
- [ ] Documentația de integrare
- [ ] Raportul de validare a conformității
- [ ] Rezultatele testelor de acceptanță
- [ ] Documente de finalizare a instruirii
- [ ] Aprobarea punerii în producție
- [ ] Document de finalizare a integrării

---

### 4.5 Faza 5: Management Continuu

#### 4.5.1 Obiective
- Monitorizarea performanței furnizorului
- Menținerea conformității
- Gestionarea modificărilor și incidentelor

#### 4.5.2 Activități

**Pasul 1: Monitorizarea Performanței**
1. Urmărirea metricilor SLA
2. Monitorizarea disponibilității și performanței
3. Urmărirea volumelor de incidente și a rezolvării
4. Monitorizarea satisfacției utilizatorilor
5. Generarea rapoartelor de performanță

**Pasul 2: Monitorizarea Conformității**
1. Urmărirea atestărilor de conformitate ale furnizorului
2. Monitorizarea actualizărilor documentației
3. Revizuirea rapoartelor de audit ale furnizorului
4. Urmărirea modificărilor de reglementare care afectează furnizorul
5. Validarea conformității continue cu Regulamentul UE privind IA

**Pasul 3: Monitorizarea Riscurilor**
1. Monitorizarea indicatorilor de risc ai furnizorului
2. Actualizarea Registrului Riscurilor Furnizorilor
3. Urmărirea sănătății financiare a furnizorului
4. Monitorizarea posturii de securitate a furnizorului
5. Escaladarea riscurilor emergente

**Pasul 4: Managementul Modificărilor**
1. Revizuirea notificărilor de modificări ale furnizorului
2. Evaluarea impacturilor modificărilor
3. Aprobarea sau respingerea modificărilor
4. Reclasificarea în cazul modificărilor semnificative
5. Actualizarea documentației

**Pasul 5: Managementul Incidentelor**
1. Înregistrarea incidentelor furnizorului
2. Urmărirea rezolvării incidentelor
3. Escaladarea incidentelor nerezolvate
4. Documentarea lecțiilor învățate

**Pasul 6: Managementul Relației**
1. Organizarea întâlnirilor regulate cu furnizorul
2. Abordarea preocupărilor și feedback-ului
3. Planificarea cerințelor viitoare
4. Gestionarea variațiilor contractuale

#### 4.5.3 Livrabile (Continue)
- [ ] Rapoarte de performanță (conform SLA)
- [ ] Documente de monitorizare a conformității
- [ ] Registrul Riscurilor Furnizorilor actualizat
- [ ] Documente de modificări
- [ ] Jurnale de incidente și rezoluții
- [ ] Minute ale întâlnirilor

---

### 4.6 Faza 6: Revizuiri de Performanță

#### 4.6.1 Obiective
- Evaluarea performanței furnizorului
- Evaluarea stării conformității
- Determinarea continuării relației

#### 4.6.2 Activități

**Pasul 1: Pregătirea Revizuirii**
1. Compilarea datelor de performanță
2. Compilarea documentelor de conformitate
3. Compilarea datelor de evaluare a riscurilor
4. Colectarea feedback-ului părților interesate
5. Pregătirea prezentării de revizuire

**Pasul 2: Efectuarea Revizuirii**
1. Revizuirea performanței SLA
2. Revizuirea stării conformității
3. Revizuirea stării riscurilor
4. Revizuirea istoricului incidentelor
5. Evaluarea performanței generale a furnizorului
6. Punctarea furnizorului folosind Fișa de Evaluare a Furnizorului (FORM-AI-VENDOR-004)

**Pasul 3: Întâlnirea de Revizuire**
1. Prezentarea constatărilor furnizorului
2. Discutarea domeniilor de îmbunătățire
3. Convenirea asupra acțiunilor
4. Planificarea perioadei următoare
5. Documentarea rezultatelor întâlnirii

**Pasul 4: Acțiuni Post-Revizuire**
1. Implementarea îmbunătățirilor convenite
2. Actualizarea dosarelor furnizorului
3. Informarea părților interesate
4. Planificarea următoarei revizuiri

#### 4.6.3 Frecvența Revizuirii
| Nivelul Furnizorului | Frecvența Revizuirii |
|----------------------|----------------------|
| Nivelul 1 - Critic | Trimestrial |
| Nivelul 2 - Semnificativ | Semestrial |
| Nivelul 3 - Standard | Anual |

#### 4.6.4 Livrabile
- [ ] Fișa de Evaluare a Furnizorului (FORM-AI-VENDOR-004)
- [ ] Raportul de Revizuire a Performanței
- [ ] Acțiuni și plan de îmbunătățire
- [ ] Dosare ale furnizorului actualizate

---

### 4.7 Faza 7: Reînnoire sau Încetare

#### 4.7.1 Procesul de Reînnoire

**Pasul 1: Evaluarea Reînnoirii**
1. Revizuirea performanței cumulative a furnizorului
2. Evaluarea nevoii continue de afaceri
3. Evaluarea alternativelor de piață
4. Revizuirea termenilor contractuali pentru reînnoire
5. Efectuarea evaluării actualizate a riscurilor

**Pasul 2: Decizia de Reînnoire**
1. Recomandarea reînnoirii sau încetării
2. Obținerea aprobărilor
3. Negocierea termenilor de reînnoire dacă este cazul
4. Executarea documentației de reînnoire

#### 4.7.2 Procesul de Încetare

**Pasul 1: Planificarea Încetării**
1. Documentarea justificării încetării
2. Revizuirea prevederilor contractuale de încetare
3. Evaluarea cerințelor de tranziție
4. Identificarea soluției de înlocuire (dacă este necesar)
5. Crearea planului de încetare

**Pasul 2: Executarea Tranziției**
1. Notificarea furnizorului conform termenilor contractuali
2. Executarea extragerii datelor
3. Migrarea către soluția de înlocuire
4. Validarea integrității datelor
5. Dezafectarea sistemului furnizorului

**Pasul 3: Dezangajarea Furnizorului**
1. Revocarea accesului furnizorului
2. Confirmarea returnării/ștergerii datelor
3. Regularizarea plăților finale
4. Documentarea lecțiilor învățate
5. Arhivarea dosarelor furnizorului
6. Actualizarea Registrului Sistemelor de IA

#### 4.7.3 Livrabile
- [ ] Document de decizie de reînnoire sau încetare
- [ ] Planul de tranziție (dacă se încetează)
- [ ] Confirmarea migrării/ștergerii datelor
- [ ] Documentația lecțiilor învățate
- [ ] Dosarele furnizorului arhivate

---

## 5. ÎNREGISTRĂRI ȘI DOCUMENTAȚIE

### 5.1 Înregistrări Necesare

| ID Înregistrare | Denumire Înregistrare | Perioada de Păstrare | Proprietar |
|-----------------|----------------------|----------------------|------------|
| REC-AI-VENDOR-001 | Registrul Riscurilor Furnizorilor | Durata relației + 10 ani | Achiziții |
| REC-AI-VENDOR-002 | Documente Due Diligence | Durata relației + 10 ani | Achiziții |
| REC-AI-VENDOR-003 | Documente de Performanță | Durata relației + 10 ani | Achiziții |
| REC-AI-VENDOR-004 | Documente Contractuale | Durata relației + 10 ani | Juridic |

### 5.2 Formulare Necesare

| ID Formular | Denumire Formular | Scop |
|-------------|-------------------|------|
| FORM-AI-VENDOR-001 | Formularul de Evaluare Tehnică | Evaluarea capabilităților tehnice IA ale furnizorului |
| FORM-AI-VENDOR-002 | Formularul de Evaluare a Conformității IA | Evaluarea conformității furnizorului cu Regulamentul UE privind IA |
| FORM-AI-VENDOR-003 | Formularul de Evaluare a Riscurilor Furnizorului | Documentarea evaluării riscurilor furnizorului |
| FORM-AI-VENDOR-004 | Fișa de Evaluare a Furnizorului | Evaluarea performanței furnizorului |

---

## 6. DOCUMENTE CONEXE

### 6.1 Standarde
- STD-AI-001: Standard de Clasificare a Sistemelor de IA
- STD-AI-002: Standard de Management al Riscurilor de IA
- STD-AI-003: Standard de Guvernanță a Datelor de IA
- STD-AI-009: Standard al Sistemului de Management al Calității

### 6.2 Proceduri
- PROC-AI-CLS-001: Procedura de Clasificare IA
- PROC-AI-RM-001: Procedura de Management al Riscurilor de IA
- PROC-AI-DEV-001: Procedura Ciclului de Viață al Dezvoltării IA
- PROC-AI-INC-001: Procedura de Management al Incidentelor

### 6.3 Liste de Verificare
- CHK-AI-VENDOR-001: Lista de Verificare a Cerințelor pentru Furnizorii de IA

### 6.4 Referințe Externe
- Regulamentul UE privind IA (Regulamentul 2024/1689)
- ISO/IEC 42001: Sistem de Management al IA
- ISO 37500: Ghid privind externalizarea

---

## 7. ISTORICUL REVIZUIRILOR

| Versiune | Data | Autor | Modificări |
|----------|------|-------|------------|
| 1.0 | [Data] | [Autor] | Publicare inițială |

---

## ANEXA A: LISTA DE VERIFICARE A CERINȚELOR PENTRU FURNIZORII DE IA (CHK-AI-VENDOR-001)

### A.1 Cerințe Obligatorii ale Regulamentului UE privind IA

| # | Cerință | Necesar pentru Risc Ridicat | Necesar pentru Risc Limitat | Dovadă |
|---|---------|-----------------------------|-----------------------------|--------|
| 1 | Documentație tehnică conform Anexei IV | Da | Recomandat | |
| 2 | Declarația de Conformitate UE | Da | Nu | |
| 3 | Marcaj CE | Da (dacă este cazul) | Nu | |
| 4 | Înregistrare în baza de date UE | Da | Nu | |
| 5 | Sistem de management al calității | Da | Recomandat | |
| 6 | Sistem de management al riscurilor | Da | Recomandat | |
| 7 | Măsuri de guvernanță a datelor | Da | Recomandat | |
| 8 | Înregistrare automată | Da | Nu | |
| 9 | Prevederi de transparență | Da | Da | |
| 10 | Măsuri de supraveghere umană | Da | Recomandat | |
| 11 | Măsuri de acuratețe și robustețe | Da | Recomandat | |
| 12 | Supraveghere post-comercializare | Da | Recomandat | |
| 13 | Raportarea incidentelor grave | Da | Da | |

### A.2 Cerințe Tehnice

| # | Cerință | Prioritate | Verificat |
|---|---------|------------|-----------|
| 1 | Îndeplinește specificațiile funcționale | Obligatoriu | |
| 2 | Îndeplinește cerințele de performanță | Obligatoriu | |
| 3 | Capabilități de integrare | Obligatoriu | |
| 4 | Scalabilitate | [Prioritate] | |
| 5 | Documentație API | [Prioritate] | |
| 6 | Documentația modelului | [Prioritate] | |

### A.3 Cerințe de Securitate

| # | Cerință | Prioritate | Verificat |
|---|---------|------------|-----------|
| 1 | Certificare de securitate (ISO 27001, SOC 2) | [Prioritate] | |
| 2 | Criptare în repaus și în tranzit | Obligatoriu | |
| 3 | Controale de acces | Obligatoriu | |
| 4 | Teste de penetrare | [Prioritate] | |
| 5 | Managementul vulnerabilităților | [Prioritate] | |

---

## ANEXA B: ȘABLONUL FIȘEI DE EVALUARE A FURNIZORULUI (FORM-AI-VENDOR-004)

### B.1 Informații despre Furnizor
| Câmp | Valoare |
|------|---------|
| Numele Furnizorului | |
| Referința Contractului | |
| Perioada de Revizuire | |
| Evaluator | |

### B.2 Scoruri de Performanță

| Categorie | Pondere | Scor (1-5) | Scor Ponderat | Comentarii |
|-----------|---------|------------|---------------|------------|
| Performanța SLA | 25% | | | |
| Conformitate | 25% | | | |
| Securitate | 15% | | | |
| Calitatea Suportului | 15% | | | |
| Inovație | 10% | | | |
| Relație | 10% | | | |
| **Total** | **100%** | | **[Total]** | |

### B.3 Ghid de Punctare
- 5 = Excepțional - Depășește cerințele
- 4 = Bun - Îndeplinește toate cerințele
- 3 = Acceptabil - Îndeplinește majoritatea cerințelor
- 2 = Sub Așteptări - Este necesară îmbunătățirea
- 1 = Inacceptabil - Probleme semnificative

### B.4 Evaluare Generală
| Câmp | Valoare |
|------|---------|
| Evaluare Generală | |
| Recomandare | Continuare / Îmbunătățire / Încetare |
| Puncte Forte Cheie | |
| Domenii Cheie de Îmbunătățire | |
| Acțiuni | |

### B.5 Aprobări
| Rol | Nume | Semnătură | Data |
|-----|------|-----------|------|
| Evaluator | | | |
| Manager Achiziții | | | |
| Proprietar Sistem de IA | | | |
