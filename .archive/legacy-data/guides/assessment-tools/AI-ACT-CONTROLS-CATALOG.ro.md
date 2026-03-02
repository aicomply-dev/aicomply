# Catalogul Controalelor AI Act

## Informații despre Document

| Câmp | Valoare |
|-------|-------|
| **ID Document** | TOOL-CTRL-001 |
| **Versiune** | 1.0 |
| **Status** | Gata de Utilizare |
| **Proprietar** | Manager Program AI Act |
| **Ultima actualizare** | 2024-12-01 |

## Scop

Acest catalog oferă o mapare cuprinzătoare a controalelor la cerințele EU AI Act, organizate pe articole și categorii de control. Utilizați-l ca referință pentru implementarea controalelor de conformitate și colectarea probelor.

---

## Prezentare Generală Categorii de Control

| Categorie | Prefix | Articol(e) | Număr Controale |
|----------|--------|------------|---------------|
| Managementul Riscului | RM | Articolul 9 | 15 |
| Guvernanța Datelor | DATA | Articolul 10 | 15 |
| Documentație | DOC | Articolul 11 | 10 |
| Jurnalizare | LOG | Articolul 12 | 5 |
| Transparență | TRANS | Articolul 13, 50 | 10 |
| Supraveghere Umană | HO | Articolul 14 | 8 |
| Acuratețe și Securitate | ARS | Articolul 15 | 8 |
| Managementul Calității | QMS | Articolul 17 | 14 |
| Evaluare de Conformitate | CA | Articolul 43 | 10 |
| Înregistrare | REG | Articolul 49 | 5 |
| Monitorizare Post-Comercializare | PMM | Articolul 72 | 8 |
| Managementul Incidentelor | INC | Articolul 73 | 6 |
| Alfabetizare IA | LIT | Articolul 4 | 4 |

---

## Articolul 9: Sistem de Management al Riscului

### RM-001: Cadru de Management al Riscului
- **Obiectiv**: Stabilirea unui sistem de management al riscului pentru sistemele IA
- **Tip**: Preventiv
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Politică de management al riscului
  - Metodologie de evaluare a riscului
  - Registru de riscuri

### RM-002: Identificarea Riscului
- **Obiectiv**: Identificarea riscurilor cunoscute și previzibile
- **Tip**: Detective
- **Frecvență**: Per lansare / Modificare majoră
- **Probe Necesare**:
  - Înregistrări de identificare a riscurilor
  - Analiză de pericol
  - Analiză de cazuri de utilizare

### RM-003: Estimarea Riscului
- **Obiectiv**: Estimarea și evaluarea riscurilor din utilizarea intenționată și utilizarea abuzivă
- **Tip**: Detective
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Metodologie de estimare a riscului
  - Evaluări de severitate și probabilitate
  - Matrici de risc

### RM-004: Atenuarea Riscului
- **Obiectiv**: Adoptarea măsurilor de management al riscului
- **Tip**: Preventiv
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Planuri de atenuare
  - Înregistrări de implementare a controalelor
  - Acceptare risc rezidual

### RM-005: Testarea Riscului
- **Obiectiv**: Testarea pentru asigurarea performanței consistente
- **Tip**: Detective
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Planuri și rezultate de testare
  - Metrici de performanță
  - Rapoarte de validare

---

## Articolul 10: Date și Guvernanța Datelor

### DATA-001: Cadru de Guvernanță a Datelor
- **Obiectiv**: Stabilirea guvernanței datelor pentru antrenare, validare și date de testare
- **Tip**: Preventiv
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Politică de guvernanță a datelor
  - Standarde de calitate a datelor
  - Proceduri de management al datelor

### DATA-002: Evaluarea Calității Datelor
- **Obiectiv**: Asigurarea că datele sunt relevante, reprezentative și fără erori
- **Tip**: Detective
- **Frecvență**: Per set de date
- **Probe Necesare**:
  - Rapoarte de calitate a datelor
  - Verificări de completitudine
  - Validare de acuratețe

### DATA-003: Examinarea Biasului
- **Obiectiv**: Examinarea datelor pentru potențiale distorsiuni
- **Tip**: Detective
- **Frecvență**: Per set de date / Periodic
- **Probe Necesare**:
  - Rapoarte de evaluare a biasului
  - Analiză demografică
  - Metrici de echitate

### DATA-004: Proveniența Datelor
- **Obiectiv**: Documentarea provenienței și genealogiei datelor
- **Tip**: Preventiv
- **Frecvență**: Per set de date
- **Probe Necesare**:
  - Documentație genealogie date
  - Înregistrări sursă
  - Istoric de procesare

---

## Articolul 11: Documentație Tehnică

### DOC-001: Descrierea Sistemului
- **Obiectiv**: Documentarea descrierii generale a sistemului IA
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Document arhitectură sistem
  - Declarație scop intenționat
  - Descriere capabilități

### DOC-002: Documentația Procesului de Dezvoltare
- **Obiectiv**: Documentarea elementelor și procesului de dezvoltare
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Specificații de design
  - Metodologie de dezvoltare
  - Proceduri de antrenare

### DOC-003: Conformitate Anexa IV
- **Obiectiv**: Asigurarea că documentația îndeplinește cerințele Anexei IV
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Lista de verificare Anexa IV
  - Fișier tehnic
  - Matrice de conformitate

---

## Articolul 12: Păstrarea Înregistrărilor (Jurnalizare)

### LOG-001: Jurnalizare Automată
- **Obiectiv**: Implementarea înregistrării automate a evenimentelor
- **Tip**: Detective
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Arhitectură de jurnalizare
  - Mostre de jurnale
  - Politică de retenție

### LOG-002: Retenția Jurnalelor
- **Obiectiv**: Menținerea jurnalelor pentru minim 6 luni
- **Tip**: Preventiv
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Politică de retenție
  - Configurare stocare
  - Proceduri de backup

### LOG-003: Trasabilitate
- **Obiectiv**: Activarea trasabilității funcționării IA
- **Tip**: Detective
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Design pistă audit
  - Capabilități de corelare
  - Proceduri de investigație

---

## Articolul 13: Transparență

### TRANS-001: Instrucțiuni de Utilizare
- **Obiectiv**: Furnizarea instrucțiunilor de utilizare în format adecvat
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Manual utilizator
  - Ghid de pornire rapidă
  - Documentație de integrare

### TRANS-002: Informații Furnizor
- **Obiectiv**: Includerea identității și detaliilor de contact ale furnizorului
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Etichetare produs
  - Informații de contact
  - Canale de asistență

### TRANS-003: Dezvăluirea Performanței
- **Obiectiv**: Dezvăluirea caracteristicilor, capacităților și limitărilor
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Specificații de performanță
  - Limitări cunoscute
  - Limite cazuri de utilizare

---

## Articolul 14: Supraveghere Umană

### HO-001: Design Supraveghere
- **Obiectiv**: Proiectarea sistemului pentru a permite supravegherea umană eficientă
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Arhitectură supraveghere
  - Design interfață
  - Mecanisme de control

### HO-002: Capacitate de Intervenție
- **Obiectiv**: Activarea capacității de a interveni sau opri operațiunea
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Mecanisme de oprire
  - Proceduri de suprascriere
  - Protocoale de urgență

### HO-003: Interpretarea Rezultatului
- **Obiectiv**: Activarea interpretării rezultatului IA
- **Tip**: Preventiv
- **Frecvență**: Per lansare
- **Probe Necesare**:
  - Caracteristici de explicabilitate
  - Indicatori de încredere
  - Rațiune decizie

---

## Articolul 50: Obligații de Transparență (Risc Limitat)

### TRANS-101: Notificare Utilizatori
- **Obiectiv**: Informarea utilizatorilor că interacționează cu IA
- **Tip**: Preventiv
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Design notificare
  - Capturi ecran interfață utilizator
  - Text dezvăluire

### TRANS-102: Etichetarea Conținutului
- **Obiectiv**: Marcarea adecvată a conținutului generat de IA
- **Tip**: Preventiv
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Implementare etichetare
  - Marcaj digital (dacă aplicabil)
  - Etichetare metadate

---

## Articolul 72: Monitorizare Post-Comercializare

### PMM-001: Sistem de Monitorizare
- **Obiectiv**: Stabilirea sistemului de monitorizare post-comercializare
- **Tip**: Detective
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Plan de monitorizare
  - Proceduri de colectare date
  - Metodologie de analiză

### PMM-002: Urmărirea Performanței
- **Obiectiv**: Urmărirea performanței sistemului IA în timp
- **Tip**: Detective
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Dashboard-uri de performanță
  - Analiză de tendințe
  - Alerte de degradare

### PMM-003: Integrarea Feedback-ului
- **Obiectiv**: Integrarea feedback-ului în îmbunătățiri
- **Tip**: Corectiv
- **Frecvență**: Periodic
- **Probe Necesare**:
  - Colectare feedback
  - Înregistrări de îmbunătățire
  - Istoric actualizări

---

## Articolul 73: Raportarea Incidentelor Grave

### INC-001: Detectarea Incidentelor
- **Obiectiv**: Detectarea promptă a incidentelor grave
- **Tip**: Detective
- **Frecvență**: Continuu
- **Probe Necesare**:
  - Mecanisme de detectare
  - Configurări de alertă
  - Proceduri de escaladare

### INC-002: Raportarea Incidentelor
- **Obiectiv**: Raportarea incidentelor grave către autorități în 15 zile
- **Tip**: Corectiv
- **Frecvență**: Per incident
- **Probe Necesare**:
  - Șablon raport incident
  - Listă contacte autorități
  - Înregistrări de trimitere

### INC-003: Analiza Cauzelor Fundamentale
- **Obiectiv**: Investigarea și documentarea cauzelor fundamentale
- **Tip**: Corectiv
- **Frecvență**: Per incident
- **Probe Necesare**:
  - Rapoarte de investigație
  - Analiză cauze fundamentale
  - Acțiuni corective

---

## Utilizarea acestui Catalog

### Pentru Evaluarea Conformității
1. Identificați articolele aplicabile pe baza nivelului de risc și rolului
2. Revizuiți controalele necesare pentru fiecare articol
3. Evaluați statusul actual de implementare
4. Documentați lacunele și planurile de remediere

### Pentru Colectarea Probelor
1. Utilizați cerințele de probe ca listă de verificare
2. Adunați documentația pentru fiecare control implementat
3. Mențineți probele în dosare organizate
4. Actualizați probele după fiecare lansare sau modificare

### Pentru Pregătirea Auditului
1. Mapați controalele la domeniul de audit
2. Pregătiți pachete de probe per control
3. Documentați eficacitatea controalelor
4. Identificați orice neconformități

---

## Documente Conexe

- [Procedură de Management al Riscului](../procedures/PROC-AI-RM-001_FINAL.md)
- [Listă de Verificare Documentație Tehnică](../checklists/CHK-AI-DOC-001_FINAL.md)
- [Procedură de Management al Incidentelor](../procedures/PROC-AI-INC-001_FINAL.md)
- [Procedură de Monitorizare Post-Comercializare](../procedures/PROC-AI-PMM-001_FINAL.md)

---

## Istoric Revizii

| Versiune | Dată | Autor | Modificări |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Manager Program AI Act | Lansare inițială |
