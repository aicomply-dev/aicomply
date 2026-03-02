# Procesul de Determinare a Rolului AI Act

## Informații despre Document

| Câmp | Valoare |
|-------|-------|
| **ID Document** | TOOL-ROLE-001 |
| **Versiune** | 1.0 |
| **Status** | Gata de Utilizare |
| **Proprietar** | Guvernanța Controlului Enterprise |
| **Ultima actualizare** | 2024-12-01 |

## Scop

Acest ghid ajută organizațiile să determine ce roluri EU AI Act li se aplică pentru fiecare sistem IA. Înțelegerea rolului dumneavoastră este esențială deoarece determină obligațiile de conformitate.

---

## Prezentare Generală Roluri EU AI Act

EU AI Act definește patru roluri principale de operator, fiecare cu obligații distincte:

| Rol | Definiție | Obligații Cheie |
|------|------------|-----------------|
| **Furnizor** | Dezvoltă sau are sistemul IA dezvoltat și îl plasează pe piață/în serviciu sub nume propriu | Conformitate completă cu Capitolul 2 (risc înalt), QMS, evaluare de conformitate, marcaj CE |
| **Utilizator** | Utilizează sistemul IA sub autoritate proprie (cu excepția utilizării personale) | Supraveghere, monitorizare, raportare incidente, transparență către utilizatori |
| **Importator** | Stabilit în UE, plasează IA din țări terțe pe piața UE | Verificarea conformității, asigurarea documentației, menținerea înregistrărilor |
| **Distribuitor** | Face IA disponibilă pe piață (nu furnizor/importator) | Verificarea marcajului CE, asigurarea condițiilor adecvate de stocare/transport |

În plus:
- **Furnizor GPAI** | Furnizează modele IA cu scop general | Documentație model, transparență, evaluare risc sistemic (dacă aplicabil)

---

## Arbore de Decizie pentru Determinarea Rolului

### Pasul 1: A dezvoltat organizația dumneavoastră sistemul IA?

**DA** → Treceți la Pasul 2
**NU** → Treceți la Pasul 4

### Pasul 2: Este sistemul IA plasat pe piață sau pus în serviciu sub numele sau marca organizației dumneavoastră?

**DA** → Sunteți **FURNIZOR**
**NU** → Treceți la Pasul 3

### Pasul 3: Ați modificat substanțial sistemul IA?

**DA** → Sunteți **FURNIZOR** (pentru sistemul modificat)
**NU** → Puteți fi **Utilizator** dacă utilizați sistemul

### Pasul 4: Este organizația dumneavoastră stabilită în UE?

**DA** → Treceți la Pasul 5
**NU** → Treceți la Pasul 7

### Pasul 5: Plasați un sistem IA dintr-o țară terță pe piața UE?

**DA** → Sunteți **IMPORTATOR**
**NU** → Treceți la Pasul 6

### Pasul 6: Faceți sistemul IA disponibil pe piață fără a fi furnizor sau importator?

**DA** → Sunteți **DISTRIBUITOR**
**NU** → Treceți la Pasul 8

### Pasul 7: Este rezultatul sistemului IA utilizat în UE?

**DA** → EU AI Act se aplică ca și cum ați fi stabilit în UE
**NU** → EU AI Act poate să nu se aplice (verificați cu consilier juridic)

### Pasul 8: Utilizați sistemul IA sub autoritatea proprie?

**DA** → Sunteți **UTILIZATOR**
**NU** → Revizuiți relația cu sistemul IA

---

## Rezumat Obligații Specifice Rolului

### Obligații Furnizor (Articolul 16)

| Obligație | Articol | Descriere |
|------------|---------|-------------|
| Sistem de Management al Riscului | Art. 9 | Stabilirea și menținerea managementului riscului |
| Guvernanța Datelor | Art. 10 | Asigurarea calității și guvernanței datelor |
| Documentație Tehnică | Art. 11 | Crearea și menținerea documentației Anexa IV |
| Păstrarea Înregistrărilor | Art. 12 | Implementarea jurnalizării automate |
| Transparență | Art. 13 | Furnizarea instrucțiunilor de utilizare |
| Supraveghere Umană | Art. 14 | Design pentru supraveghere eficientă |
| Acuratețe și Robustețe | Art. 15 | Asigurarea acurateții, robusteții, securității cibernetice |
| Managementul Calității | Art. 17 | Stabilirea QMS |
| Evaluare de Conformitate | Art. 43 | Finalizare înainte de plasare pe piață |
| Declarație UE | Art. 47 | Întocmirea declarației de conformitate |
| Marcaj CE | Art. 48 | Aplicarea marcajului CE |
| Înregistrare | Art. 49 | Înregistrare în baza de date UE |
| Monitorizare Post-Comercializare | Art. 72 | Stabilirea sistemului de monitorizare |
| Raportarea Incidentelor | Art. 73 | Raportarea incidentelor grave |

### Obligații Utilizator (Articolul 26)

| Obligație | Articol | Descriere |
|------------|---------|-------------|
| Utilizare conform Instrucțiunilor | Art. 26(1) | Utilizarea sistemului conform instrucțiunilor |
| Supraveghere Umană | Art. 26(2) | Desemnarea persoanelor competente pentru supraveghere |
| Calitatea Datelor de Intrare | Art. 26(4) | Asigurarea relevanței datelor de intrare |
| Monitorizare | Art. 26(5) | Monitorizarea operării pe baza instrucțiunilor |
| Retenția Înregistrărilor | Art. 26(6) | Păstrarea jurnalelor pentru perioada minimă |
| Transparență către Utilizatori | Art. 26(7) | Informarea persoanelor afectate |
| DPIA | Art. 26(9) | Efectuarea evaluării impactului protecției datelor |
| Raportarea Incidentelor | Art. 26(5) | Raportarea incidentelor grave |

### Obligații Importator (Articolul 23)

| Obligație | Articol | Descriere |
|------------|---------|-------------|
| Verificarea Conformității | Art. 23(1) | Asigurarea finalizării evaluării de conformitate |
| Verificarea Documentației | Art. 23(2) | Asigurarea disponibilității documentației tehnice |
| Verificarea Marcajului CE | Art. 23(3) | Verificarea aplicării marcajului CE |
| Informații de Contact | Art. 23(4) | Indicarea numelui și contactului pe sistem |
| Condiții de Stocare | Art. 23(5) | Asigurarea stocare/transport adecvat |
| Furnizarea Documentației | Art. 23(6) | Furnizarea documentației către autorități |
| Cooperare | Art. 23(7) | Cooperarea cu autoritățile |

### Obligații Distribuitor (Articolul 24)

| Obligație | Articol | Descriere |
|------------|---------|-------------|
| Verificarea Marcajului CE | Art. 24(1) | Verificarea marcajului CE înainte de distribuție |
| Verificarea Documentației | Art. 24(2) | Verificarea incluzirii instrucțiunilor de utilizare |
| Condiții de Stocare | Art. 24(3) | Asigurarea stocare/transport adecvat |
| Cooperare | Art. 24(4) | Cooperarea cu autoritățile |

---

## Roluri Multiple

O organizație poate deține simultan roluri multiple:

**Scenarii Exemplu:**

1. **Furnizor + Utilizator**: Dezvoltați un sistem IA și îl utilizați intern
2. **Importator + Utilizator**: Importați un sistem IA dintr-o țară terță și îl implementați
3. **Furnizor (pentru modificări)**: Modificați substanțial un sistem terț

Când dețineți roluri multiple, trebuie să respectați obligațiile pentru TOATE rolurile aplicabile.

---

## Fișă de Lucru pentru Determinarea Rolului

Completați această fișă pentru fiecare sistem IA:

### Informații Sistem

| Câmp | Intrare |
|-------|-------|
| **Nume Sistem IA** | |
| **ID Sistem** | |
| **Data Evaluării** | |
| **Evaluator** | |

### Evaluarea Rolului

| Întrebare | Răspuns | Note |
|----------|--------|-------|
| Am dezvoltat acest sistem IA? | [ ] Da [ ] Nu | |
| Este comercializat sub numele/marca noastră? | [ ] Da [ ] Nu | |
| L-am modificat substanțial? | [ ] Da [ ] Nu | |
| Suntem stabiliți în UE? | [ ] Da [ ] Nu | |
| L-am importat din afara UE? | [ ] Da [ ] Nu | |
| Îl distribuim către alții? | [ ] Da [ ] Nu | |
| Îl utilizăm sub autoritatea noastră? | [ ] Da [ ] Nu | |

### Determinarea Rolului

| Rol | Aplicabil? | Justificare |
|------|-------------|---------------|
| Furnizor | [ ] Da [ ] Nu | |
| Utilizator | [ ] Da [ ] Nu | |
| Importator | [ ] Da [ ] Nu | |
| Distribuitor | [ ] Da [ ] Nu | |

### Aprobare

| Câmp | Intrare |
|-------|-------|
| **Rol(uri) Determinat(e)** | |
| **Aprobat de** | |
| **Data Aprobării** | |

---

## Documente Conexe

- [Procedură de Clasificare IA](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Procedură de Management al Riscului](../procedures/PROC-AI-RM-001_FINAL.md)
- [Procedură de Evaluare a Conformității](../procedures/PROC-AI-CA-001_FINAL.md)

---

## Istoric Revizii

| Versiune | Dată | Autor | Modificări |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Guvernanța Controlului Enterprise | Lansare inițială |
