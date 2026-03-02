# Șablon de Clasificare a Riscului Sistemelor IA

## Informații despre Document

| Câmp | Valoare |
|-------|-------|
| **ID Document** | TOOL-CLS-001 |
| **Versiune** | 1.0 |
| **Status** | Gata de Utilizare |
| **Proprietar** | Manager Program AI Act |
| **Ultima actualizare** | 2024-12-01 |

## Scop

Acest șablon oferă o abordare structurată pentru clasificarea sistemelor IA conform nivelurilor de risc EU AI Act. Utilizați acest arbore de decizie și șablon de documentare pentru a asigura decizii de clasificare consistente și justificabile.

---

## Niveluri de Risc EU AI Act

| Nivel de Risc | Descriere | Cerințe Cheie |
|------------|-------------|------------------|
| **Interzis** | Practici IA care sunt interzise complet | Nu pot fi plasate pe piață sau utilizate |
| **Risc Înalt** | Sisteme IA în zonele Anexei III sau componente de siguranță | Conformitate completă Capitolul 2 necesară |
| **Risc Limitat** | Sisteme IA cu obligații de transparență | Cerințe de transparență Articolul 50 |
| **Risc Minimal** | Toate celelalte sisteme IA | Coduri voluntare de conduită |

---

## Arbore de Decizie pentru Clasificare

### Pasul 1: Verificarea Practicilor Interzise (Articolul 5)

Sistemul IA implică oricare dintre următoarele?

| # | Practică Interzisă | Verificare |
|---|---------------------|-------|
| 1.1 | Manipulare subliminală cauzând prejudiciu | [ ] Da [ ] Nu |
| 1.2 | Exploatarea vulnerabilităților (vârstă, dizabilitate, situație socială) | [ ] Da [ ] Nu |
| 1.3 | Scoring social de către autorități publice | [ ] Da [ ] Nu |
| 1.4 | Identificare biometrică la distanță în timp real în spații publice (aplicare legii) | [ ] Da [ ] Nu |
| 1.5 | Colectare netintită pentru baze de date recunoaștere facială | [ ] Da [ ] Nu |
| 1.6 | Recunoaștere emoții la locul de muncă/educație (cu excepția siguranței/medicale) | [ ] Da [ ] Nu |
| 1.7 | Categorizare biometrică inferând atribute sensibile | [ ] Da [ ] Nu |
| 1.8 | Aplicare predictivă individuală bazată exclusiv pe profilare | [ ] Da [ ] Nu |

**Dacă ORICARE căsuță este bifată DA** → **INTERZIS** (Opriți aici)
**Dacă TOATE căsuțele sunt NU** → Treceți la Pasul 2

---

### Pasul 2: Verificarea Legislației de Produs Anexa I

Este sistemul IA o componentă de siguranță sau în sine un produs acoperit de:

| # | Legislație UE | Verificare |
|---|----------------|-------|
| 2.1 | Regulamentul Mașinilor (UE) 2023/1230 | [ ] Da [ ] Nu |
| 2.2 | Directiva Siguranță Jucării 2009/48/CE | [ ] Da [ ] Nu |
| 2.3 | Regulamentul Dispozitive Medicale (UE) 2017/745 | [ ] Da [ ] Nu |
| 2.4 | Regulamentul Diagnostice In Vitro (UE) 2017/746 | [ ] Da [ ] Nu |
| 2.5 | Regulamentul Aviație Civilă (UE) 2018/1139 | [ ] Da [ ] Nu |
| 2.6 | Regulamentul Vehicule Motorizate (UE) 2019/2144 | [ ] Da [ ] Nu |
| 2.7 | Altă legislație Anexa I | [ ] Da [ ] Nu |

**Dacă ORICARE căsuță este bifată DA** → **RISC ÎNALT** (Evaluare de conformitate terță parte necesară)
**Dacă TOATE căsuțele sunt NU** → Treceți la Pasul 3

---

### Pasul 3: Verificarea Zonelor de Risc Înalt Anexa III

Sistemul IA se încadrează în oricare categorie din Anexa III?

#### 3.1 Biometrie

| Caz de Utilizare | Verificare |
|----------|-------|
| Identificare biometrică la distanță | [ ] Da [ ] Nu |
| Categorizare biometrică pe atribute sensibile | [ ] Da [ ] Nu |
| Recunoaștere emoții | [ ] Da [ ] Nu |

#### 3.2 Infrastructură Critică

| Caz de Utilizare | Verificare |
|----------|-------|
| Componentă de siguranță în managementul infrastructurii critice | [ ] Da [ ] Nu |
| Managementul traficului rutier | [ ] Da [ ] Nu |
| Furnizare apă, gaz, încălzire, electricitate | [ ] Da [ ] Nu |

#### 3.3 Educație și Formare Vocațională

| Caz de Utilizare | Verificare |
|----------|-------|
| Determinarea accesului la educație | [ ] Da [ ] Nu |
| Evaluarea rezultatelor învățării | [ ] Da [ ] Nu |
| Evaluarea nivelului adecvat de educație | [ ] Da [ ] Nu |
| Monitorizarea comportamentului interzis în timpul testelor | [ ] Da [ ] Nu |

#### 3.4 Angajare și Managementul Lucrătorilor

| Caz de Utilizare | Verificare |
|----------|-------|
| Recrutare sau selecție | [ ] Da [ ] Nu |
| Decizii privind promovarea sau concedierea | [ ] Da [ ] Nu |
| Alocarea sarcinilor pe baza comportamentului/trăsăturilor | [ ] Da [ ] Nu |
| Monitorizarea sau evaluarea performanței | [ ] Da [ ] Nu |

#### 3.5 Acces la Servicii Esențiale

| Caz de Utilizare | Verificare |
|----------|-------|
| Evaluarea bonității de credit | [ ] Da [ ] Nu |
| Evaluarea riscului pentru asigurări de viață/sănătate | [ ] Da [ ] Nu |
| Eligibilitate pentru beneficii publice | [ ] Da [ ] Nu |
| Expedierea serviciilor de urgență | [ ] Da [ ] Nu |

#### 3.6 Aplicarea Legii

| Caz de Utilizare | Verificare |
|----------|-------|
| Evaluarea riscului persoanelor fizice | [ ] Da [ ] Nu |
| Poligrafe sau instrumente similare | [ ] Da [ ] Nu |
| Evaluarea fiabilității probelor | [ ] Da [ ] Nu |
| Profilare în timpul investigației | [ ] Da [ ] Nu |

#### 3.7 Migrație, Azil, Control Frontieră

| Caz de Utilizare | Verificare |
|----------|-------|
| Poligrafe sau instrumente similare | [ ] Da [ ] Nu |
| Evaluarea riscului (securitate, sănătate, migrație neregulată) | [ ] Da [ ] Nu |
| Examinarea cererilor | [ ] Da [ ] Nu |
| Detectarea/identificarea persoanelor | [ ] Da [ ] Nu |

#### 3.8 Administrarea Justiției

| Caz de Utilizare | Verificare |
|----------|-------|
| Cercetarea/interpretarea faptelor și legii | [ ] Da [ ] Nu |
| Aplicarea legii la fapte | [ ] Da [ ] Nu |
| Rezolvarea alternativă a disputelor | [ ] Da [ ] Nu |

**Dacă ORICARE căsuță este bifată DA** → **RISC ÎNALT**
**Dacă TOATE căsuțele sunt NU** → Treceți la Pasul 4

---

### Pasul 4: Verificarea Riscului Limitat (Transparență) (Articolul 50)

Sistemul IA implică oricare dintre următoarele?

| # | Declanșator Transparență | Verificare |
|---|---------------------|-------|
| 4.1 | Interacțiune directă cu persoane fizice (chatbot-uri, asistenți virtuali) | [ ] Da [ ] Nu |
| 4.2 | Generarea de conținut audio, imagine, video sau text sintetic | [ ] Da [ ] Nu |
| 4.3 | Recunoaștere emoții sau categorizare biometrică | [ ] Da [ ] Nu |
| 4.4 | Deep fake-uri sau conținut manipulat | [ ] Da [ ] Nu |

**Dacă ORICARE căsuță este bifată DA** → **RISC LIMITAT** (Obligații de transparență Articolul 50 se aplică)
**Dacă TOATE căsuțele sunt NU** → **RISC MINIMAL**

---

## Șablon de Documentare a Clasificării

### Informații Sistem

| Câmp | Intrare |
|-------|-------|
| **Nume Sistem IA** | |
| **ID Sistem** | |
| **Versiune** | |
| **Descriere** | |
| **Scop Intenționat** | |
| **Data Clasificării** | |
| **Clasificator** | |

### Rezultat Clasificare

| Câmp | Intrare |
|-------|-------|
| **Nivel de Risc** | [ ] Interzis [ ] Risc Înalt [ ] Limitat [ ] Minimal |
| **Bază Clasificare** | |
| **Anexa I Aplicabilă** | [ ] Da [ ] Nu |
| **Categorie Anexa III** | |
| **Articolul 50 Aplicabil** | [ ] Da [ ] Nu |

### Probe de Susținere

| Tip Probă | Referință Document |
|---------------|-------------------|
| Descriere sistem | |
| Documentație utilizare intenționată | |
| Specificații tehnice | |
| Revizuire juridică (dacă aplicabil) | |

### Aprobare

| Câmp | Intrare |
|-------|-------|
| **Aprobat de** | |
| **Data Aprobării** | |
| **Data Următoarei Revizuiri** | |

---

## Declanșatori de Revizuire a Clasificării

Reclasificarea ar trebui luată în considerare când:

- [ ] Scopul intenționat se schimbă
- [ ] Sunt adăugate noi cazuri de utilizare
- [ ] Sunt efectuate modificări substanțiale
- [ ] Ghidurile de reglementare sunt actualizate
- [ ] Revizuirea anuală este scadentă

---

## Documente Conexe

- [Procedură de Clasificare](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Formular de Clasificare](../forms/FORM-AI-CLS-001_FINAL.md)
- [Proces de Determinare a Rolului](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Istoric Revizii

| Versiune | Dată | Autor | Modificări |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Manager Program AI Act | Lansare inițială |
