# Ghid Registru Consolidat

## Informații despre Document

| Câmp | Valoare |
|-------|-------|
| **ID Document** | TOOL-WB-001 |
| **Versiune** | 1.0 |
| **Status** | Gata de Utilizare |
| **Proprietar** | Manager Program AI Act |
| **Ultima actualizare** | 2024-12-01 |

## Scop

Acest ghid explică cum să utilizați Registrul Consolidat AI Act pentru urmărirea progresului de conformitate, gestionarea cerințelor și generarea rapoartelor. Registrul oferă o vizualizare centralizată a statusului de conformitate EU AI Act al organizației dumneavoastră.

---

## Prezentare Generală Registru

Registrul Consolidat conține următoarele foi:

| Foaie | Scop | Frecvență Actualizare |
|-------|---------|------------------|
| **Dashboard** | Rezumat executiv și KPI-uri | Auto-calculat |
| **Inventar Sisteme IA** | Lista tuturor sistemelor IA | Pe măsură ce sistemele se modifică |
| **Matrice Cerințe** | Cerințe pe sistem | Săptămânal |
| **Urmărire Controale** | Status implementare controale | Săptămânal |
| **Jurnal Probe** | Documentare probe | Pe măsură ce probele sunt colectate |
| **Analiză Lacune** | Lacune de conformitate și remediere | Lunar |
| **Cronologie** | Pietre de hotar conformitate | Lunar |
| **Rapoarte** | Șabloane rapoarte pre-construite | Când este necesar |

---

## Începerea Utilizării

### Pasul 1: Configurare Inițială

1. Descărcați șablonul de registru
2. Activați macrourile dacă este solicitat
3. Configurați setările organizației pe foaia **Setări**:
   - Nume organizație
   - Contact principal
   - Perioadă de raportare
   - Praguri de toleranță la risc

### Pasul 2: Popularea Inventarului de Sisteme IA

Pentru fiecare sistem IA, introduceți:

| Câmp | Descriere | Exemplu |
|-------|-------------|---------|
| ID Sistem | Identificator unic | AI-SYS-001 |
| Nume Sistem | Nume descriptiv | Chatbot Asistență Clienți |
| Descriere | Descriere scurtă | Asistent serviciu clienți alimentat de IA |
| Nivel de Risc | Rezultat clasificare | Limitat |
| Rol Operator | Rolul dumneavoastră | Utilizator |
| Status | Status actual | Activ |
| Proprietar | Persoană responsabilă | Maria Popescu |
| Departament | Departament proprietar | Serviciu Clienți |
| Data Lansării | Când a fost implementat | 2024-01-15 |

### Pasul 3: Maparea Cerințelor

Pentru fiecare sistem IA:

1. Navigați la foaia **Matrice Cerințe**
2. Selectați sistemul din meniul derulant
3. Cerințele se vor auto-popula pe baza nivelului de risc și rolului
4. Actualizați statusul pentru fiecare cerință:
   - Nepornit
   - În Progres
   - Implementat
   - Verificat

---

## Ghid Foaie cu Foaie

### Foaia Dashboard

Dashboard-ul oferă vizibilitate rapidă asupra:

**Metrici Cheie:**
- Număr total sisteme IA
- Sisteme pe nivel de risc (diagramă circulară)
- Procent general de conformitate
- Rată de finalizare cerințe
- Rată de implementare controale
- Termene limită viitoare

**Indicatori Semafor:**
- 🟢 Verde: Pe drum (>80% complet)
- 🟡 Galben: Risc (50-80% complet)
- 🔴 Roșu: În afara traseului (<50% complet)

### Foaia Inventar Sisteme IA

**Coloane:**
| Coloană | Descriere |
|--------|-------------|
| A | ID Sistem |
| B | Nume Sistem |
| C | Descriere |
| D | Nivel de Risc |
| E | Rol Operator |
| F | Status |
| G | Proprietar |
| H | Departament |
| I | Furnizor (dacă aplicabil) |
| J | Data Lansării |
| K | Data Ultimei Evaluări |
| L | Data Următoarei Revizuiri |
| M | Note |

**Validare Date:**
- Nivel de Risc: Meniu derulant (Interzis, Înalt, Limitat, Minimal)
- Rol Operator: Meniu derulant (Furnizor, Utilizator, Importator, Distribuitor)
- Status: Meniu derulant (Planificare, Dezvoltare, Activ, Inactiv, Dezafectat)

### Foaia Matrice Cerințe

**Structură:**
- Rânduri: Cerințe individuale
- Coloane: Sisteme IA
- Celule: Indicatori de status

**Opțiuni Status:**
| Status | Cod | Culoare |
|--------|------|-------|
| Neaplicabil | N/A | Gri |
| Nepornit | NS | Roșu |
| În Progres | IP | Galben |
| Implementat | IM | Verde Deschis |
| Verificat | VE | Verde Închis |

**Filtrare:**
- Filtrare după Articol
- Filtrare după Categorie
- Filtrare după Status
- Filtrare după Sistem

### Foaia Urmărire Controale

Urmăriți implementarea fiecărui control:

| Coloană | Descriere |
|--------|-------------|
| ID Control | Identificator unic control |
| Nume Control | Nume descriptiv |
| Categorie | Categorie control |
| Articol | Articol EU AI Act conexat |
| Proprietar | Persoană responsabilă |
| Status | Status implementare |
| Data Țintă | Finalizare planificată |
| Data Efectivă | Finalizare efectivă |
| Probă | Link la probă |
| Note | Note adiționale |

### Foaia Jurnal Probe

Documentați toate probele de conformitate:

| Coloană | Descriere |
|--------|-------------|
| ID Probă | Identificator unic |
| Titlu | Titlu probă |
| Tip | Tip document |
| Sistem(e) | Sisteme IA conexate |
| Cerință(e) | Cerințe conexate |
| Control(e) | Controale conexate |
| Locație | Cale fișier sau URL |
| Data Creării | Când a fost creat |
| Data Revizuirii | Data ultimei revizuiri |
| Revizor | Cine a revizuit |
| Status | Curent/Arhivat |

### Foaia Analiză Lacune

Urmăriți și remediați lacunele de conformitate:

| Coloană | Descriere |
|--------|-------------|
| ID Lacună | Identificator unic |
| Sistem | Sistem IA afectat |
| Cerință | Cerință conexată |
| Descriere Lacună | Ce lipsește |
| Rating Risc | Impact dacă nu este adresat |
| Plan Remediere | Cum să închideți lacuna |
| Proprietar | Persoană responsabilă |
| Data Țintă | Închidere planificată |
| Status | Deschis/În Progres/Închis |
| Data Închiderii | Când a fost închis |

---

## Formule și Calcule

### Procent de Conformitate

```
=COUNTIF(RangStatus,"Verificat")/COUNTA(RangStatus)*100
```

### Zile până la Termen Limită

```
=DataȚintă-TODAY()
```

### Scor de Risc

```
=IF(NivelRisc="Înalt",3,IF(NivelRisc="Limitat",2,1))*IF(Status="Nepornit",3,IF(Status="În Progres",2,1))
```

---

## Raportare

### Rapoarte Pre-Construite

1. **Rezumat Executiv**: Status de conformitate de nivel înalt
2. **Raport Detaliu Sistem**: Defalcare conformitate per sistem
3. **Raport Lacune**: Toate lacunele deschise cu status de remediere
4. **Raport Probe**: Inventar probe pe sistem
5. **Raport Cronologie**: Urmărire pietre de hotar

### Generarea Rapoartelor

1. Navigați la foaia **Rapoarte**
2. Selectați tipul de raport din meniul derulant
3. Setați intervalul de date (dacă aplicabil)
4. Faceți clic pe butonul "Generează Raport"
5. Raportul se populează în zona desemnată
6. Exportați în PDF sau imprimați după cum este necesar

---

## Bune Practici

### Introducere Date

- ✅ Utilizați convenții de denumire consistente
- ✅ Actualizați statusul minim săptămânal
- ✅ Legați probele la cerințe specifice
- ✅ Adăugați note pentru context
- ❌ Nu lăsați câmpuri goale
- ❌ Nu utilizați text liber unde există meniuri derulante

### Întreținere

- Revizuiți Dashboard-ul săptămânal
- Actualizați Matricea Cerințelor pe măsură ce lucrarea avansează
- Arhivați probele finalizate lunar
- Faceți backup registrului înainte de actualizări majore
- Control versiuni: Salvați copii datate

### Colaborare

- Utilizați locație partajată în rețea sau SharePoint
- Stabiliți program de actualizare cu proprietarii
- Blocați celulele care nu ar trebui editate
- Utilizați comentarii pentru discuții
- Urmăriți modificările dacă sunt editori multipli

---

## Depanare

| Problemă | Soluție |
|-------|----------|
| Formulele nu calculează | Apăsați F9 pentru a recalcula |
| Meniurile derulante nu funcționează | Verificați setările Validare Date |
| Diagramele nu se actualizează | Reîmprospătați sursa de date |
| Performanță lentă | Reduceți formatarea condițională |
| Fișier prea mare | Arhivați datele vechi într-un fișier separat |

---

## Documente Conexe

- [Catalog Controale](./AI-ACT-CONTROLS-CATALOG.md)
- [Șablon Clasificare Risc](./AI-SYSTEM-RISK-CLASSIFICATION-TEMPLATE.md)
- [Proces Determinare Rol](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Istoric Revizii

| Versiune | Dată | Autor | Modificări |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Manager Program AI Act | Lansare inițială |
