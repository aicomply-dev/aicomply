# CHK-AI-TRANS-001: Lista de Verificare a Cerințelor de Transparență

**ID Listă de Verificare:** CHK-AI-TRANS-001
**Nume Listă de Verificare:** Lista de Verificare a Cerințelor de Transparență
**Versiune:** 1.0
**Data Intrării în Vigoare:** [De completat]
**Standard Asociat:** STD-AI-006: Standardul de Transparență AI
**Procedură Asociată:** PROC-AI-TRANS-001: Procedura de Transparență

---

## Scop

Această listă de verificare asigură că sistemele AI îndeplinesc cerințele de transparență conform Actului AI al UE, inclusiv Articolul 13 (AI cu risc ridicat) și Articolul 50 (sisteme AI care interacționează cu persoane fizice, generează conținut etc.). Folosiți această listă de verificare pentru a verifica conformitatea cu transparența înainte de implementare și în timpul funcționării.

## Instrucțiuni

1. Completați această listă de verificare pentru toate sistemele AI care necesită măsuri de transparență
2. Marcați fiecare cerință ca Îndeplinită, Parțială, Neîndeplinită sau Neaplicabilă
3. Documentați dovezile pentru conformitate
4. Abordați toate lacunele înainte de implementare
5. Revizuiți anual sau în urma modificărilor semnificative ale sistemului

---

## INFORMAȚII LISTĂ DE VERIFICARE

| Câmp | Intrare |
|-------|-------|
| **Nume Sistem AI** | |
| **ID Sistem AI** | |
| **Clasificare Risc** | [ ] Risc Ridicat [ ] Risc Limitat [ ] Risc Minim |
| **Categorie Transparență** | [ ] Risc Ridicat (Art. 13) [ ] Interacțiune Directă (Art. 50.1) [ ] Recunoașterea Emoțiilor (Art. 50.2) [ ] Categorizare Biometrică (Art. 50.3) [ ] Conținut Sintetic (Art. 50.4) |
| **Data Revizuirii** | |
| **Nume Evaluator** | |

---

## SECȚIUNEA 1: DETERMINAREA APLICABILITĂȚII

### 1.1 Aplicabilitatea Obligațiilor de Transparență

| # | Întrebare | Răspuns | Observații |
|---|----------|----------|-------|
| 1.1.1 | Este acesta un sistem AI cu risc ridicat? | [ ] Da [ ] Nu | |
| 1.1.2 | Sistemul AI interacționează direct cu persoane fizice? | [ ] Da [ ] Nu | |
| 1.1.3 | Sistemul AI efectuează recunoașterea emoțiilor? | [ ] Da [ ] Nu | |
| 1.1.4 | Sistemul AI efectuează categorizare biometrică? | [ ] Da [ ] Nu | |
| 1.1.5 | Sistemul AI generează sau manipulează conținut sintetic (deepfakes, text, audio, video)? | [ ] Da [ ] Nu | |
| 1.1.6 | Este sistemul AI un model GPAI? | [ ] Da [ ] Nu | |

### 1.2 Rezumatul Cerințelor Aplicabile

| Set de Cerințe | Aplicabil? |
|-----------------|-------------|
| Articolul 13 (Transparență pentru Risc Ridicat) | [ ] Da [ ] Nu |
| Articolul 50.1 (Divulgarea Interacțiunii AI) | [ ] Da [ ] Nu |
| Articolul 50.2 (Divulgarea Recunoașterii Emoțiilor) | [ ] Da [ ] Nu |
| Articolul 50.3 (Divulgarea Categorizării Biometrice) | [ ] Da [ ] Nu |
| Articolul 50.4 (Marcarea Conținutului Sintetic) | [ ] Da [ ] Nu |

---

## SECȚIUNEA 2: TRANSPARENȚĂ AI CU RISC RIDICAT (Articolul 13)

*Completați această secțiune dacă sistemul AI este clasificat ca RISC RIDICAT*

### 2.1 Design pentru Transparență

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 2.1.1 | Sistem conceput pentru a permite implementatorilor să interpreteze output-ul | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 2.1.2 | Sistem conceput pentru a permite implementatorilor să utilizeze output-ul în mod adecvat | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 2.1.3 | Măsurile de transparență sunt proporționale cu scopul destinat | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 2.1.4 | Output-ul este inteligibil pentru utilizatorii țintă | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

### 2.2 Instrucțiuni de Utilizare - Cerințe Generale

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 2.2.1 | Instrucțiunile de utilizare sunt furnizate | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 2.2.2 | Instrucțiunile sunt în format și limbă adecvate | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 2.2.3 | Instrucțiunile sunt accesibile și inteligibile | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

### 2.3 Conținutul Instrucțiunilor - Informații despre Furnizor

| # | Conținut Necesar | Inclus? | Locație | Observații |
|---|------------------|-----------|----------|-------|
| 2.3.1 | Identitatea furnizorului (nume, denumire comercială înregistrată) | [ ] Da [ ] Nu | | |
| 2.3.2 | Datele de contact ale furnizorului | [ ] Da [ ] Nu | | |
| 2.3.3 | Identitatea reprezentantului autorizat (dacă este cazul) | [ ] Da [ ] Nu [ ] N/A | | |

### 2.4 Conținutul Instrucțiunilor - Informații despre Sistem

| # | Conținut Necesar | Inclus? | Locație | Observații |
|---|------------------|-----------|----------|-------|
| 2.4.1 | Caracteristicile și capacitățile sistemului AI | [ ] Da [ ] Nu | | |
| 2.4.2 | Scopul destinat al sistemului AI | [ ] Da [ ] Nu | | |
| 2.4.3 | Nivelul de acuratețe și măsurători relevante | [ ] Da [ ] Nu | | |
| 2.4.4 | Nivelul de robustețe | [ ] Da [ ] Nu | | |
| 2.4.5 | Nivelul de securitate cibernetică | [ ] Da [ ] Nu | | |
| 2.4.6 | Circumstanțe cunoscute care pot impacta performanța | [ ] Da [ ] Nu | | |
| 2.4.7 | Capacități și limitări tehnice | [ ] Da [ ] Nu | | |
| 2.4.8 | Limitările sistemului | [ ] Da [ ] Nu | | |

### 2.5 Conținutul Instrucțiunilor - Detalii despre Performanță

| # | Conținut Necesar | Inclus? | Locație | Observații |
|---|------------------|-----------|----------|-------|
| 2.5.1 | Măsurători de performanță pentru scopul destinat | [ ] Da [ ] Nu | | |
| 2.5.2 | Niveluri de performanță pentru persoanele/grupurile afectate | [ ] Da [ ] Nu | | |
| 2.5.3 | Specificații pentru datele de intrare | [ ] Da [ ] Nu | | |
| 2.5.4 | Orice modificări predeterminate și impactul acestora | [ ] Da [ ] Nu [ ] N/A | | |

### 2.6 Conținutul Instrucțiunilor - Supravegherea Umană

| # | Conținut Necesar | Inclus? | Locație | Observații |
|---|------------------|-----------|----------|-------|
| 2.6.1 | Măsurile de supraveghere umană sunt descrise | [ ] Da [ ] Nu | | |
| 2.6.2 | Măsurile tehnice pentru supraveghere sunt documentate | [ ] Da [ ] Nu | | |
| 2.6.3 | Competențele umane necesare sunt documentate | [ ] Da [ ] Nu | | |
| 2.6.4 | Instrucțiuni de intervenție/anulare | [ ] Da [ ] Nu | | |

### 2.7 Conținutul Instrucțiunilor - Întreținere și Suport

| # | Conținut Necesar | Inclus? | Locație | Observații |
|---|------------------|-----------|----------|-------|
| 2.7.1 | Durata de viață așteptată a sistemului AI | [ ] Da [ ] Nu | | |
| 2.7.2 | Măsurile de întreținere și îngrijire | [ ] Da [ ] Nu | | |
| 2.7.3 | Informații despre instalarea actualizărilor | [ ] Da [ ] Nu | | |

**Status Secțiunea 2:** [ ] Completă [ ] Incompletă

---

## SECȚIUNEA 3: TRANSPARENȚA INTERACȚIUNII AI (Articolul 50.1)

*Completați dacă sistemul AI interacționează direct cu persoane fizice*

### 3.1 Cerințe de Divulgare

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 3.1.1 | Persoanele fizice sunt informate că interacționează cu AI | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 3.1.2 | Divulgarea este furnizată într-o manieră clară și distinctă | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 3.1.3 | Divulgarea este furnizată la prima interacțiune | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 3.1.4 | Divulgarea este într-o limbă inteligibilă pentru utilizator | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

### 3.2 Conținutul Divulgării

| # | Element | Inclus? | Metoda de Implementare | Observații |
|---|---------|-----------|----------------------|-------|
| 3.2.1 | Declarație clară că utilizatorul interacționează cu AI | [ ] Da [ ] Nu | | |
| 3.2.2 | Divulgarea este vizibilă/audibilă înainte de interacțiune | [ ] Da [ ] Nu | | |
| 3.2.3 | Divulgarea nu poate fi ratată cu ușurință | [ ] Da [ ] Nu | | |

### 3.3 Excepții Aplicate (dacă este cazul)

| # | Excepție | Aplicată? | Justificare |
|---|-----------|----------|---------------|
| 3.3.1 | AI evident din circumstanțe | [ ] Da [ ] Nu | |
| 3.3.2 | Autorizat prin lege pentru prevenirea/detectarea criminalității | [ ] Da [ ] Nu [ ] N/A | |

**Status Secțiunea 3:** [ ] Completă [ ] Incompletă [ ] N/A

---

## SECȚIUNEA 4: TRANSPARENȚA RECUNOAȘTERII EMOȚIILOR (Articolul 50.2)

*Completați dacă sistemul AI efectuează recunoașterea emoțiilor*

### 4.1 Cerințe de Divulgare

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 4.1.1 | Persoanele fizice sunt informate despre recunoașterea emoțiilor | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 4.1.2 | Divulgarea este furnizată înainte de procesare | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 4.1.3 | Divulgarea este într-o manieră clară și distinctă | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 4.1.4 | Categoriile de emoții detectate sunt divulgate | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

### 4.2 Implementarea Divulgării

| # | Element | Status | Observații |
|---|---------|--------|-------|
| 4.2.1 | Mecanismul de divulgare este implementat | [ ] Da [ ] Nu | |
| 4.2.2 | Divulgarea este documentată | [ ] Da [ ] Nu | |
| 4.2.3 | Divulgarea este testată pentru claritate | [ ] Da [ ] Nu | |

**Status Secțiunea 4:** [ ] Completă [ ] Incompletă [ ] N/A

---

## SECȚIUNEA 5: TRANSPARENȚA CATEGORIZĂRII BIOMETRICE (Articolul 50.3)

*Completați dacă sistemul AI efectuează categorizare biometrică*

### 5.1 Cerințe de Divulgare

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 5.1.1 | Persoanele fizice sunt informate despre categorizarea biometrică | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 5.1.2 | Divulgarea este furnizată înainte de procesare | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 5.1.3 | Divulgarea este într-o manieră clară și distinctă | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 5.1.4 | Categoriile de atribute detectate sunt divulgate | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

### 5.2 Excepții Aplicate (dacă este cazul)

| # | Excepție | Aplicată? | Justificare |
|---|-----------|----------|---------------|
| 5.2.1 | Autorizat prin lege pentru prevenirea/detectarea criminalității | [ ] Da [ ] Nu [ ] N/A | |

**Status Secțiunea 5:** [ ] Completă [ ] Incompletă [ ] N/A

---

## SECȚIUNEA 6: TRANSPARENȚA CONȚINUTULUI SINTETIC (Articolul 50.4)

*Completați dacă sistemul AI generează sau manipulează conținut sintetic*

### 6.1 Tipuri de Conținut

| # | Tip de Conținut | Generat? | Marcare Necesară |
|---|--------------|------------|------------------|
| 6.1.1 | Audio sintetic | [ ] Da [ ] Nu | [ ] Da [ ] N/A |
| 6.1.2 | Imagine sintetică | [ ] Da [ ] Nu | [ ] Da [ ] N/A |
| 6.1.3 | Video sintetic | [ ] Da [ ] Nu | [ ] Da [ ] N/A |
| 6.1.4 | Text sintetic (publicat pentru informare publică) | [ ] Da [ ] Nu | [ ] Da [ ] N/A |
| 6.1.5 | Deep fakes | [ ] Da [ ] Nu | [ ] Da [ ] N/A |

### 6.2 Cerințe de Marcare

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 6.2.1 | Conținutul sintetic este marcat ca generat artificial | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 6.2.2 | Marcarea este lizibilă automat unde este tehnic fezabil | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 6.2.3 | Marcarea este interoperabilă | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 6.2.4 | Deep fakes sunt divulgate ca atare | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

### 6.3 Implementarea Marcării

| # | Element | Status | Metoda Utilizată | Observații |
|---|---------|--------|-------------|-------|
| 6.3.1 | Marcarea tehnică este implementată | [ ] Da [ ] Nu | | |
| 6.3.2 | Standardul de marcare este utilizat | [ ] Da [ ] Nu | | |
| 6.3.3 | Marcarea persistă prin distribuție | [ ] Da [ ] Nu | | |
| 6.3.4 | Marcarea este testată pentru eficacitate | [ ] Da [ ] Nu | | |

### 6.4 Excepții Aplicate (dacă este cazul)

| # | Excepție | Aplicată? | Justificare |
|---|-----------|----------|---------------|
| 6.4.1 | Conținut care asistă editarea (fără alterare substanțială) | [ ] Da [ ] Nu | |
| 6.4.2 | Conținut parte a unei opere artistice/creative (clar etichetat) | [ ] Da [ ] Nu | |
| 6.4.3 | Autorizat prin lege pentru prevenirea/detectarea criminalității | [ ] Da [ ] Nu [ ] N/A | |

**Status Secțiunea 6:** [ ] Completă [ ] Incompletă [ ] N/A

---

## SECȚIUNEA 7: OBLIGAȚIILE DE TRANSPARENȚĂ ALE IMPLEMENTATORULUI

*Pentru implementatorii sistemelor AI cu risc ridicat*

### 7.1 Obligațiile Implementatorului

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 7.1.1 | Persoanele afectate sunt informate despre utilizarea AI cu risc ridicat | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 7.1.2 | Notificare înainte de prima expunere | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 7.1.3 | Informațiile sunt în format accesibil | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 7.1.4 | Reprezentanții locului de muncă sunt informați (dacă este context de angajare) | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

### 7.2 Obligațiile Implementatorului din Autoritatea Publică

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 7.2.1 | Înregistrarea în baza de date UE este completată | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 7.2.2 | FRIA este completată și rezumatul este publicat | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

**Status Secțiunea 7:** [ ] Completă [ ] Incompletă [ ] N/A

---

## SECȚIUNEA 8: ACCESIBILITATE

### 8.1 Cerințe de Accesibilitate

| # | Cerință | Status | Dovadă | Observații |
|---|-------------|--------|----------|-------|
| 8.1.1 | Informațiile de transparență sunt accesibile persoanelor cu dizabilități | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 8.1.2 | Multiple formate sunt disponibile unde este adecvat | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |
| 8.1.3 | Versiuni în diferite limbi sunt disponibile conform cerințelor | [ ] Îndeplinită [ ] Parțială [ ] Neîndeplinită [ ] N/A | | |

**Status Secțiunea 8:** [ ] Completă [ ] Incompletă

---

## SECȚIUNEA 9: DOCUMENTAȚIE ȘI ÎNREGISTRĂRI

### 9.1 Documentația de Transparență

| # | Document | Disponibil? | Locație | Actualizat? |
|---|----------|------------|----------|----------|
| 9.1.1 | Instrucțiuni de utilizare | [ ] Da [ ] Nu | | [ ] Da [ ] Nu |
| 9.1.2 | Scripturi/texte de divulgare a transparenței | [ ] Da [ ] Nu | | [ ] Da [ ] Nu |
| 9.1.3 | Specificații de marcare | [ ] Da [ ] Nu [ ] N/A | | [ ] Da [ ] Nu |
| 9.1.4 | Înregistrări de notificare a utilizatorilor | [ ] Da [ ] Nu | | [ ] Da [ ] Nu |

**Status Secțiunea 9:** [ ] Completă [ ] Incompletă

---

## SECȚIUNEA 10: REZUMATUL LISTEI DE VERIFICARE

### 10.1 Rezumatul Statusului Secțiunilor

| Secțiune | Status | Lacune Critice |
|---------|--------|---------------|
| 1. Aplicabilitate | [ ] Completă [ ] Incompletă | |
| 2. Transparență Risc Ridicat | [ ] Completă [ ] Incompletă [ ] N/A | |
| 3. Interacțiune AI | [ ] Completă [ ] Incompletă [ ] N/A | |
| 4. Recunoașterea Emoțiilor | [ ] Completă [ ] Incompletă [ ] N/A | |
| 5. Categorizare Biometrică | [ ] Completă [ ] Incompletă [ ] N/A | |
| 6. Conținut Sintetic | [ ] Completă [ ] Incompletă [ ] N/A | |
| 7. Obligațiile Implementatorului | [ ] Completă [ ] Incompletă [ ] N/A | |
| 8. Accesibilitate | [ ] Completă [ ] Incompletă | |
| 9. Documentație | [ ] Completă [ ] Incompletă | |

### 10.2 Evaluarea Generală a Transparenței

| Câmp | Intrare |
|-------|-------|
| **Status General** | [ ] Conformă [ ] Parțial Conformă [ ] Neconformă |
| **Lacune Critice** | |
| **Recomandări** | |

---

## SECȚIUNEA 11: APROBARE

| Rol | Nume | Semnătură | Data |
|------|------|-----------|------|
| **Evaluator** | | | |
| **Proprietar Sistem AI** | | | |
| **Ofițer de Conformitate** | | | |

---

**Următoarea Revizuire Scadentă:** _______________

---

**Sfârșitul Listei de Verificare**
