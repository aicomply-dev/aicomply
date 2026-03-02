# FORM-AI-CLS-001: Formular de Clasificare a Sistemului de IA

**ID Formular:** FORM-AI-CLS-001
**Nume Formular:** Formular de Clasificare a Sistemului de IA
**Versiune:** 1.0
**Data Efectivă:** [De completat]
**Standard Asociat:** STD-AI-001: Standard de Clasificare a Sistemelor de IA
**Procedură Asociată:** PROC-AI-CLS-001: Procedură de Clasificare IA

---

## Scop

Acest formular este utilizat pentru a documenta clasificarea riscului sistemelor de IA conform Actului UE privind IA. Completați acest formular pentru toate sistemele de IA înainte de dezvoltare sau implementare pentru a determina cerințele de reglementare aplicabile.

## Instrucțiuni

1. Completați toate secțiunile în ordine
2. Furnizați dovezi suport pentru deciziile de clasificare
3. Obțineți aprobările necesare pe baza rezultatului clasificării
4. Păstrați formularul completat pentru minimum 10 ani (sisteme cu risc ridicat)

---

## SECȚIUNEA 1: IDENTIFICAREA SISTEMULUI DE IA

| Câmp | Înregistrare |
|-------|-------|
| **Nume Sistem IA** | |
| **ID Sistem IA** | |
| **Versiune/Lansare** | |
| **Data Evaluării** | |
| **Nume Evaluator** | |
| **Rol Evaluator** | |
| **Proprietar Sistem IA** | |
| **Unitate de Afaceri** | |

---

## SECȚIUNEA 2: DESCRIEREA SISTEMULUI DE IA

### 2.1 Scop Intenționat
*Descrieți scopul intenționat al sistemului de IA conform Articolului 3(12) al Actului UE privind IA*

| Câmp | Înregistrare |
|-------|-------|
| **Funcție Primară** | |
| **Problemă Rezolvată** | |
| **Ieșiri/Decizii Cheie** | |

### 2.2 Descriere Tehnică
| Câmp | Înregistrare |
|-------|-------|
| **Tip Tehnologie IA** | [ ] Învățare Automată [ ] Învățare Profundă [ ] NLP [ ] Viziune Computerizată [ ] Sistem Expert [ ] Altele: _____ |
| **Tip Model** | [ ] Clasificare [ ] Regresie [ ] Grupare [ ] Generativ [ ] Învățare prin Întărire [ ] Altele: _____ |
| **Mod Implementare** | [ ] Local [ ] Cloud [ ] Edge [ ] Hibrid |

### 2.3 Utilizatori și Persoane Afectate
| Câmp | Înregistrare |
|-------|-------|
| **Utilizatori Țintă** | |
| **Persoane Fizice Afectate** | |
| **Număr Estimat de Afectați** | |
| **Acoperire Geografică** | [ ] Doar UE [ ] UE + Altele [ ] Global |

---

## SECȚIUNEA 3: VERIFICAREA PRACTICILOR INTERZISE (Articolul 5)

*Toate sistemele de IA trebuie mai întâi verificate pentru practici interzise. Dacă ORICARE element de mai jos este bifat "Da", sistemul de IA este INTERZIS și nu poate continua.*

### 3.1 Evaluarea Practicilor Interzise

| # | Practică Interzisă | Da | Nu | Dovezi/Note |
|---|---------------------|-----|-----|----------------|
| 3.1.1 | Sistemul utilizează tehnici subliminale, manipulative sau înșelătoare pentru a distorsiona semnificativ comportamentul cauzând daune importante? | [ ] | [ ] | |
| 3.1.2 | Sistemul exploatează vulnerabilitățile persoanelor din cauza vârstei, dizabilității sau situației sociale/economice? | [ ] | [ ] | |
| 3.1.3 | Sistemul evaluează sau clasifică persoanele fizice pe baza comportamentului social sau caracteristicilor personale (scoring social) conducând la tratament detrimental? | [ ] | [ ] | |
| 3.1.4 | Sistemul evaluează sau prezice riscul ca o persoană fizică să comită o infracțiune exclusiv pe baza profilării sau trăsăturilor de personalitate? | [ ] | [ ] | |
| 3.1.5 | Sistemul creează sau extinde baze de date de recunoaștere facială prin colectare neorientată? | [ ] | [ ] | |
| 3.1.6 | Sistemul inferă emoții în locul de muncă sau educație (cu excepția medicală sau de siguranță)? | [ ] | [ ] | |
| 3.1.7 | Sistemul clasifică persoanele fizice pe baza datelor biometrice pentru a deduce rasa, opiniile politice, apartenența la sindicat, credințele religioase, viața sexuală sau orientarea sexuală? | [ ] | [ ] | |
| 3.1.8 | Sistemul permite identificarea biometrică la distanță în timp real în spații accesibile publicului pentru aplicarea legii (cu excepția excepțiilor limitate)? | [ ] | [ ] | |

### 3.2 Determinarea Practicii Interzise

| Câmp | Înregistrare |
|-------|-------|
| **Vreun răspuns "Da" mai sus?** | [ ] Da → **SISTEMUL ESTE INTERZIS** [ ] Nu → Continuați la Secțiunea 4 |
| **Dacă Interzis, Argumentare** | |
| **Semnătura Revizorului** | |
| **Data Revizuirii** | |

**Dacă sistemul este INTERZIS, nu continuați. Documentați decizia și arhivați.**

---

## SECȚIUNEA 4: EVALUAREA RISCULUI RIDICAT - ANEXA I (Siguranța Produselor)

*Evaluați dacă sistemul de IA este o componentă de siguranță a, sau este el însuși, un produs acoperit de legislația de armonizare UE listată în Anexa I.*

### 4.1 Verificarea Legislației Produselor Anexa I

| # | Legislație UE | Aplicabil? | Dacă Da, Descrieți Relevanța |
|---|----------------|-------------|---------------------------|
| 4.1.1 | Regulamentul Mașini (UE) 2023/1230 | [ ] Da [ ] Nu | |
| 4.1.2 | Directiva Siguranța Jucăriilor 2009/48/CE | [ ] Da [ ] Nu | |
| 4.1.3 | Directiva Ambarcațiuni de Agrement 2013/53/UE | [ ] Da [ ] Nu | |
| 4.1.4 | Directiva Lifturi 2014/33/UE | [ ] Da [ ] Nu | |
| 4.1.5 | Echipamente pentru Utilizare în Atmosfere Potențial Explozive (ATEX) 2014/34/UE | [ ] Da [ ] Nu | |
| 4.1.6 | Directiva Echipamente Radio 2014/53/UE | [ ] Da [ ] Nu | |
| 4.1.7 | Directiva Echipamente sub Presiune 2014/68/UE | [ ] Da [ ] Nu | |
| 4.1.8 | Regulamentul Instalații cu Cablu 2016/424 | [ ] Da [ ] Nu | |
| 4.1.9 | Regulamentul Echipamente de Protecție Individuală (UE) 2016/425 | [ ] Da [ ] Nu | |
| 4.1.10 | Regulamentul Aparate pe Gaz (UE) 2016/426 | [ ] Da [ ] Nu | |
| 4.1.11 | Regulamentul Dispozitive Medicale (UE) 2017/745 | [ ] Da [ ] Nu | |
| 4.1.12 | Regulamentul Dispozitive Medicale de Diagnostic In Vitro (UE) 2017/746 | [ ] Da [ ] Nu | |
| 4.1.13 | Regulamentul Siguranța Aviației Civile (UE) 2018/1139 | [ ] Da [ ] Nu | |
| 4.1.14 | Regulamentul Omologare Vehicule Automotoare (UE) 2019/2144 | [ ] Da [ ] Nu | |
| 4.1.15 | Directiva Interoperabilitate Feroviară (UE) 2016/797 | [ ] Da [ ] Nu | |
| 4.1.16 | Directiva Echipamente Marine 2014/90/UE | [ ] Da [ ] Nu | |

### 4.2 Determinarea Anexei I

| Câmp | Înregistrare |
|-------|-------|
| **Sistemul de IA este acoperit de legislația Anexei I?** | [ ] Da → **RISC RIDICAT** (necesită evaluare de conformitate de către terți) [ ] Nu → Continuați la Secțiunea 5 |
| **Legislație Aplicabilă** | |
| **IA este o componentă de siguranță?** | [ ] Da [ ] Nu |
| **Cale de Evaluare a Conformității** | [ ] Terță parte necesară [ ] Auto-evaluare permisă |

---

## SECȚIUNEA 5: EVALUAREA RISCULUI RIDICAT - ANEXA III (Cazuri de Utilizare)

*Evaluați dacă sistemul de IA se încadrează în vreunul dintre cazurile de utilizare cu risc ridicat listate în Anexa III.*

### 5.1 Biometrie (Anexa III, Punctul 1)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.1.1 | Sisteme de identificare biometrică la distanță (excluzând verificarea) | [ ] Da [ ] Nu | |
| 5.1.2 | Clasificare biometrică după atribute sensibile | [ ] Da [ ] Nu | |
| 5.1.3 | Sisteme de recunoaștere a emoțiilor | [ ] Da [ ] Nu | |

### 5.2 Infrastructură Critică (Anexa III, Punctul 2)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.2.1 | Componentă de siguranță în managementul/operarea infrastructurii digitale critice | [ ] Da [ ] Nu | |
| 5.2.2 | Componentă de siguranță în traficul rutier | [ ] Da [ ] Nu | |
| 5.2.3 | Componentă de siguranță în aprovizionarea cu apă, gaz, încălzire, electricitate | [ ] Da [ ] Nu | |

### 5.3 Educație și Formare Profesională (Anexa III, Punctul 3)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.3.1 | Determinarea accesului sau admiterii la instituții educaționale | [ ] Da [ ] Nu | |
| 5.3.2 | Atribuirea persoanelor la instituții sau programe educaționale | [ ] Da [ ] Nu | |
| 5.3.3 | Evaluarea studenților în instituții educaționale | [ ] Da [ ] Nu | |
| 5.3.4 | Evaluarea nivelului adecvat de educație pentru indivizi | [ ] Da [ ] Nu | |
| 5.3.5 | Monitorizarea/detectarea comportamentului interzis în timpul testelor | [ ] Da [ ] Nu | |

### 5.4 Angajare, Managementul Lucrătorilor (Anexa III, Punctul 4)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.4.1 | Recrutare sau selecție (publicitate, filtrare, evaluare candidați) | [ ] Da [ ] Nu | |
| 5.4.2 | Decizii privind promovarea, încetarea contractului, alocarea sarcinilor, monitorizarea sau evaluarea performanței la locul de muncă | [ ] Da [ ] Nu | |

### 5.5 Acces la Servicii Esențiale (Anexa III, Punctul 5)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.5.1 | Evaluarea eligibilității pentru beneficii/servicii de asistență publică | [ ] Da [ ] Nu | |
| 5.5.2 | Evaluarea bonității de credit (excluzând detectarea fraudelor) | [ ] Da [ ] Nu | |
| 5.5.3 | Evaluarea riscului și stabilirea prețurilor în asigurări de viață/sănătate | [ ] Da [ ] Nu | |
| 5.5.4 | Evaluarea și clasificarea apelurilor de urgență (911/112) | [ ] Da [ ] Nu | |
| 5.5.5 | Dispecerizarea serviciilor de prim-răspuns la urgență | [ ] Da [ ] Nu | |

### 5.6 Aplicarea Legii (Anexa III, Punctul 6)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.6.1 | Evaluarea riscului individual de comitere/recomitere a infracțiunilor | [ ] Da [ ] Nu | |
| 5.6.2 | Poligrafe și instrumente similare | [ ] Da [ ] Nu | |
| 5.6.3 | Evaluarea fiabilității probelor în investigații penale | [ ] Da [ ] Nu | |
| 5.6.4 | Predicția apariției/reapariției unei infracțiuni penale | [ ] Da [ ] Nu | |
| 5.6.5 | Profilare în detectarea/investigarea/urmărirea penală a crimelor | [ ] Da [ ] Nu | |
| 5.6.6 | Analiză criminalistică pentru căutarea în seturi mari de date | [ ] Da [ ] Nu | |

### 5.7 Migrație, Azil, Control Frontieră (Anexa III, Punctul 7)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.7.1 | Poligrafe și instrumente similare pentru scopuri de migrație | [ ] Da [ ] Nu | |
| 5.7.2 | Evaluarea riscurilor de migrație neregulată | [ ] Da [ ] Nu | |
| 5.7.3 | Examinarea cererilor de azil/viză/permise de ședere | [ ] Da [ ] Nu | |
| 5.7.4 | Detectarea/recunoașterea/identificarea persoanelor în context de migrație | [ ] Da [ ] Nu | |

### 5.8 Administrarea Justiției (Anexa III, Punctul 8)

| # | Caz de Utilizare | Aplicabil? | Dovezi/Note |
|---|----------|-------------|----------------|
| 5.8.1 | Asistarea autorităților judiciare în cercetarea/interpretarea faptelor și legii | [ ] Da [ ] Nu | |
| 5.8.2 | Aplicarea legii la un set concret de fapte | [ ] Da [ ] Nu | |
| 5.8.3 | Soluționarea alternativă a litigiilor | [ ] Da [ ] Nu | |
| 5.8.4 | Influențarea rezultatului alegerilor/referendumurilor sau a comportamentului de vot | [ ] Da [ ] Nu | |

### 5.9 Determinarea Anexei III

| Câmp | Înregistrare |
|-------|-------|
| **Vreun răspuns "Da" în Secțiunea 5?** | [ ] Da → **RISC RIDICAT** [ ] Nu → Continuați la Secțiunea 6 |
| **Categorie Risc Ridicat Aplicabilă** | |

---

## SECȚIUNEA 6: EVALUAREA RISCULUI LIMITAT (Obligații de Transparență)

*Dacă nu este cu risc ridicat, evaluați pentru obligații de transparență cu risc limitat.*

### 6.1 Declanșatori Risc Limitat (Articolul 50)

| # | Declanșator | Aplicabil? | Dovezi/Note |
|---|---------|-------------|----------------|
| 6.1.1 | Sistem proiectat să interacționeze direct cu persoane fizice | [ ] Da [ ] Nu | |
| 6.1.2 | Sistem generează conținut audio, imagine, video sau text sintetic | [ ] Da [ ] Nu | |
| 6.1.3 | Sistem efectuează recunoașterea emoțiilor | [ ] Da [ ] Nu | |
| 6.1.4 | Sistem efectuează clasificare biometrică | [ ] Da [ ] Nu | |

### 6.2 Determinarea Riscului Limitat

| Câmp | Înregistrare |
|-------|-------|
| **Vreun răspuns "Da"?** | [ ] Da → **RISC LIMITAT** (Se aplică obligații de transparență) [ ] Nu → **RISC MINIMAL** |
| **Măsuri de Transparență Necesare** | |

---

## SECȚIUNEA 7: EVALUAREA MODELULUI GPAI

*Completați doar dacă sistemul de IA incorporează sau este un model IA cu Scop General (GPAI).*

### 7.1 Determinarea GPAI

| # | Întrebare | Răspuns | Dovezi/Note |
|---|----------|----------|----------------|
| 7.1.1 | Sistemul incorporează un model GPAI? | [ ] Da [ ] Nu | |
| 7.1.2 | Modelul GPAI este capabil să efectueze o gamă largă de sarcini? | [ ] Da [ ] Nu | |
| 7.1.3 | Modelul a fost antrenat pe date largi la scară folosind auto-supraveghere? | [ ] Da [ ] Nu | |
| 7.1.4 | Modelul GPAI are risc sistemic? (>10^25 FLOP calcul antrenament sau desemnare Comisie) | [ ] Da [ ] Nu | |

### 7.2 Clasificarea GPAI

| Câmp | Înregistrare |
|-------|-------|
| **Clasificare GPAI** | [ ] Nu este GPAI [ ] GPAI fără risc sistemic [ ] GPAI cu risc sistemic |
| **Conformitatea Furnizorului GPAI Confirmată?** | [ ] Da [ ] Nu [ ] N/A |

---

## SECȚIUNEA 8: REZUMATUL CLASIFICĂRII

### 8.1 Clasificare Finală

| Clasificare | Selectat | Bază |
|----------------|----------|-------|
| **INTERZIS** | [ ] | Secțiunea 3 - Practică interzisă identificată |
| **RISC RIDICAT** | [ ] | Secțiunea 4 - Legislație de siguranță a produselor Anexa I |
| **RISC RIDICAT** | [ ] | Secțiunea 5 - Caz de utilizare cu risc ridicat Anexa III |
| **RISC LIMITAT** | [ ] | Secțiunea 6 - Se aplică obligații de transparență |
| **RISC MINIMAL** | [ ] | Fără obligații specifice (coduri voluntare) |

### 8.2 Detalii Clasificare

| Câmp | Înregistrare |
|-------|-------|
| **Clasificare Finală** | |
| **Bază Primară pentru Clasificare** | |
| **Articole Aplicabile din Actul UE privind IA** | |
| **Evaluare de Conformitate Necesară** | [ ] Terță parte [ ] Auto-evaluare [ ] Niciuna |

### 8.3 Rezumatul Cerințelor Aplicabile

| Categorie Cerință | Aplicabil? | Note |
|---------------------|-------------|-------|
| Sistem de Management al Riscului | [ ] Da [ ] Nu | |
| Guvernanța Datelor | [ ] Da [ ] Nu | |
| Documentație Tehnică | [ ] Da [ ] Nu | |
| Păstrarea Înregistrărilor/Jurnalizare | [ ] Da [ ] Nu | |
| Transparență | [ ] Da [ ] Nu | |
| Supraveghere Umană | [ ] Da [ ] Nu | |
| Acuratețe, Robustețe, Securitate Cibernetică | [ ] Da [ ] Nu | |
| Marcare CE | [ ] Da [ ] Nu | |
| Înregistrare în Baza de Date UE | [ ] Da [ ] Nu | |
| Evaluare de Conformitate | [ ] Da [ ] Nu | |

---

## SECȚIUNEA 9: DOVEZI ȘI DOCUMENTAȚIE

### 9.1 Documentație Suport

| # | Document | Referință/Locație | Atașat |
|---|----------|-------------------|----------|
| 1 | Descriere/specificații sistem | | [ ] Da [ ] Nu |
| 2 | Arhitectură tehnică | | [ ] Da [ ] Nu |
| 3 | Declarație scop intenționat | | [ ] Da [ ] Nu |
| 4 | Analiză utilizatori/persoane afectate | | [ ] Da [ ] Nu |
| 5 | Analiză legală/reglementare | | [ ] Da [ ] Nu |
| 6 | Altele: | | [ ] Da [ ] Nu |

---

## SECȚIUNEA 10: APROBĂRI

### 10.1 Aprobarea Evaluării

| Rol | Nume | Semnătură | Data |
|------|------|-----------|------|
| **Evaluator** | | | |
| **Ofițer Conformitate IA** | | | |
| **Manager Risc IA** | | | |

### 10.2 Aprobarea Clasificării (Doar Risc Ridicat)

| Rol | Nume | Semnătură | Data |
|------|------|-----------|------|
| **Reprezentant Comitet Guvernanță IA** | | | |
| **Consilier Juridic** | | | |

---

## SECȚIUNEA 11: REVIZUIRE ȘI ACTUALIZARE

### 11.1 Program Revizuire Clasificare

| Câmp | Înregistrare |
|-------|-------|
| **Data Următoarei Revizuiri Programate** | |
| **Declanșatori Revizuire** | [ ] Modificare semnificativă funcționalitate [ ] Modificare scop intenționat [ ] Modificare reglementare [ ] Revizuire periodică |

### 11.2 Istoric Clasificare

| Versiune | Data | Clasificare | Motiv Modificare | Aprobat De |
|---------|------|----------------|-------------------|-------------|
| 1.0 | | | Clasificare inițială | |
| | | | | |
| | | | | |

---

**Sfârșit Formular**
