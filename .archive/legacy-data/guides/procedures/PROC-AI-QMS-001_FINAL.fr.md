# PROC-AI-QMS-001 : Procédure du Système de Gestion de la Qualité selon le Règlement IA de l'UE

**ID de Procédure :** PROC-AI-QMS-001
**Nom de la Procédure :** Procédure du Système de Gestion de la Qualité
**Norme :** STD-AI-009 : Norme de Gestion de la Qualité
**Article du Règlement IA de l'UE :** Article 17 (Système de Gestion de la Qualité)
**Couvre les Contrôles :** QMS-001 à QMS-014
**Date d'Entrée en Vigueur :** [À compléter]
**Dernière Mise à Jour :** [À compléter]
**Date de Révision Suivante :** [À compléter]
**Statut d'Approbation :** [Brouillon/Approuvé]

---

## TABLE DES MATIÈRES

1. [Objectif et Portée](#1-objectif-et-portée)
2. [Rôles et Responsabilités](#2-rôles-et-responsabilités)
3. [Cadre du Système de Gestion de la Qualité](#3-cadre-du-système-de-gestion-de-la-qualité)
4. [Procédure Étape par Étape](#4-procédure-étape-par-étape)
   - Phase 1 : Établissement et Gouvernance du SGQ
   - Phase 2 : Contrôles de Conception et Développement
   - Phase 3 : Gestion de la Documentation et de la Configuration
   - Phase 4 : Gestion des Fournisseurs et de la Formation
   - Phase 5 : Actions Correctives et Préventives
   - Phase 6 : Surveillance, Audit et Revue
   - Phase 7 : Amélioration Continue
5. [Mécanismes de Contrôle](#5-mécanismes-de-contrôle)
6. [Indicateurs Clés de Performance et Métriques](#6-indicateurs-clés-de-performance-et-métriques)
7. [Exigences en Matière de Documentation](#7-exigences-en-matière-de-documentation)
8. [Assurance Qualité](#8-assurance-qualité)
9. [Gestion de la Non-Conformité](#9-gestion-de-la-non-conformité)
10. [Conformité et Audit](#10-conformité-et-audit)
11. [Historique des Révisions](#11-historique-des-révisions)
12. [Approbation et Autorisation](#12-approbation-et-autorisation)
13. [Contrôle des Documents](#13-contrôle-des-documents)

**Annexes :**
- [Annexe A : Bibliothèque d'ICP](#annexe-a-bibliothèque-dicp)
- [Annexe B : Glossaire](#annexe-b-glossaire)
- [Annexe C : Références Croisées](#annexe-c-références-croisées-aux-autres-procédures)
- [Annexe D : Carte de Référence Rapide](#annexe-d-carte-de-référence-rapide)
- [Annexe E : Diagramme d'Intégration](#annexe-e-diagramme-dintégration-du-sgq)

---

## 1. OBJECTIF ET PORTÉE

### 1.1 Objectif

Cette procédure établit un Système de Gestion de la Qualité (SGQ) complet pour les systèmes d'IA en conformité avec l'Article 17 du Règlement IA de l'UE, garantissant un contrôle qualité systématique tout au long du cycle de vie complet du système d'IA, de la conception au déploiement, à l'exploitation et au déclassement.

Le SGQ intègre toutes les exigences de conformité des Articles 8-15, fournissant un cadre unifié pour :
- Les contrôles qualité de conception, développement et tests
- L'exactitude et l'exhaustivité de la documentation technique
- La gouvernance et l'assurance qualité des données
- L'intégration de la gestion des risques
- La surveillance post-commercialisation et le signalement des incidents
- L'amélioration continue et l'action corrective

### 1.2 Portée

Cette procédure s'applique à :
- Tous les systèmes d'IA à haut risque tels que classifiés selon PROC-AI-CLS-001
- Toutes les activités de développement, déploiement et exploitation de systèmes d'IA
- Tous les fournisseurs et déployeurs de systèmes d'IA au sein de l'organisation
- Tous les fournisseurs tiers et prestataires soutenant les systèmes d'IA
- Tout le personnel impliqué dans les activités du cycle de vie des systèmes d'IA

Cette procédure ne s'applique pas à :
- Les systèmes d'IA à risque minimal (sauf désignation spécifique)
- Les prototypes de recherche et développement non destinés au déploiement
- Les systèmes d'IA tiers où le fournisseur maintient la responsabilité du SGQ (couvert par PROC-AI-VENDOR-001)

### 1.3 Base Réglementaire

Cette procédure met en œuvre :
- **Article 17 du Règlement IA de l'UE :** Exigences du système de gestion de la qualité
- **Articles 8-15 du Règlement IA de l'UE :** Exigences techniques intégrées au SGQ
- **ISO/IEC 42001:2023 :** Norme de système de gestion de l'IA
- **ISO 9001:2015 :** Principes du système de gestion de la qualité
- **ISO 13485:2016 :** Gestion de la qualité des dispositifs médicaux (le cas échéant)
- **IEC 62304 :** Processus du cycle de vie des logiciels de dispositifs médicaux (le cas échéant)

### 1.4 Propriétaire de la Procédure et Contacts

| Rôle | Nom | Titre | Contact |
|------|------|-------|---------|
| **Propriétaire de la Procédure** | [Nom] | Responsable Qualité | [Email/Téléphone] |
| **Escalade** | [Nom] | Directeur Qualité | [Email/Téléphone] |
| **Gouvernance** | [Nom] | Président du Comité de Gouvernance IA | [Email/Téléphone] |
| **Contact Technique** | [Nom] | Responsable Technique IA | [Email/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles Clés

| Rôle | Responsabilité | Autorité |
|------|----------------|-----------|
| **Responsable Qualité** | Posséder et exécuter le SGQ ; maintenir la documentation qualité ; effectuer les audits internes ; piloter l'amélioration continue | Approuver les procédures qualité ; escalader les non-conformités ; bloquer les déploiements |
| **Directeur Qualité** | Supervision du SGQ ; approuver les politiques qualité ; interface avec la direction ; assurer la conformité réglementaire | Escalader au Conseil ; approuver les changements majeurs du SGQ ; allouer les ressources |
| **Propriétaire du Système IA** | Assurer la conformité du système avec le SGQ ; mettre en œuvre les contrôles qualité ; maintenir la documentation du système | Accepter les risques qualité ; approuver les changements système ; allouer les ressources système |
| **Comité de Gouvernance IA** | Superviser l'efficacité du SGQ ; approuver les politiques qualité ; examiner les conclusions d'audit ; approuver les changements majeurs | Approuver le cadre SGQ ; mandater les améliorations ; bloquer les systèmes non conformes |
| **Autorité de Conception** | Approuver les spécifications de conception ; vérifier la conformité de conception ; contrôler les changements de conception | Signer les conceptions ; rejeter les conceptions inadéquates ; approuver les déviations de conception |
| **Contrôleur de Documents** | Maintenir le référentiel de documents ; contrôler les versions de documents ; assurer l'accessibilité des documents | Approuver les publications de documents ; faire respecter les normes de documentation ; auditer la documentation |
| **Responsable Qualité Fournisseurs** | Qualifier les fournisseurs ; auditer les performances des fournisseurs ; gérer les actions correctives des fournisseurs | Approuver/rejeter les fournisseurs ; mandater les améliorations des fournisseurs ; escalader les problèmes fournisseurs |
| **Responsable Formation** | Développer les programmes de formation ; maintenir les registres de formation ; évaluer l'efficacité de la formation | Approuver les matériels de formation ; certifier le personnel ; mandater la requalification |
| **Auditeur Interne** | Effectuer les audits internes ; vérifier l'efficacité des contrôles ; identifier les opportunités d'amélioration | Accéder à tous les systèmes et dossiers ; signaler les non-conformités ; recommander des améliorations |
| **Coordinateur CAPA** | Gérer les actions correctives et préventives ; suivre l'efficacité des CAPA ; clôturer les actions | Assigner les propriétaires de CAPA ; escalader les CAPA en retard ; vérifier l'efficacité des CAPA |

### 2.2 Matrice RACI

| Activité | Responsable Qualité | DQ | Propriétaire Système IA | Comité Gouv IA | Autorité Conception | Contrôleur Documents | Resp. Qual. Fourn. | Resp. Formation | Auditeur Interne | Coord. CAPA |
|----------|-------------------|-----|-------------------------|----------------|---------------------|----------------------|---------------------|----------------|------------------|------------|
| Établissement SGQ | A | R | C | A | C | I | C | C | C | I |
| Approbation politique qualité | C | R | I | A | I | I | I | I | I | I |
| Contrôle conception | C | I | R | C | A | C | I | I | I | I |
| Contrôle documents | C | I | R | I | C | A | I | I | I | I |
| Gestion configuration | A | I | R | C | C | C | I | I | I | I |
| Qualification fournisseurs | C | I | C | I | C | I | A | I | I | I |
| Dispensation formation | C | I | C | I | I | I | I | A | I | I |
| Gestion CAPA | C | I | R | C | I | I | C | I | I | A |
| Audit interne | A | C | I | C | I | I | I | I | R | I |
| Revue de direction | R | A | R | A | C | C | C | C | C | C |
| Amélioration continue | R | A | R | C | C | C | C | C | R | R |

**Légende :** A=Responsable (Accountable), R=Réalisateur (Responsible), C=Consulté, I=Informé

### 2.3 Exigences de Compétence

| Rôle | Compétences Requises | Méthode de Vérification |
|------|---------------------|------------------------|
| Responsable Qualité | Connaissance ISO 9001 ; compréhension des systèmes IA ; conformité réglementaire ; compétences d'audit | Certification + expérience |
| Autorité de Conception | Expertise technique IA/ML ; architecture système ; exigences Règlement IA de l'UE | Diplôme technique + formation |
| Auditeur Interne | Méthodologie d'audit ; connaissance systèmes IA ; compétences d'entretien ; exigences réglementaires | Formation auditeur + certification |
| Responsable Qualité Fournisseurs | Gestion fournisseurs ; normes qualité ; gestion contrats ; évaluation risques | Expérience + formation |

---

## 3. CADRE DU SYSTÈME DE GESTION DE LA QUALITÉ

### 3.1 Aperçu des Composants du SGQ

Le Système de Gestion de la Qualité IA se compose de sept piliers intégrés alignés avec l'Article 17 du Règlement IA de l'UE :

```
┌───────────────────────────────────────────────────────────────────────────────┐
│           SYSTÈME DE GESTION DE LA QUALITÉ DU RÈGLEMENT IA DE L'UE            │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  1. GOUVERNANCE ET POLITIQUE                                                   │
│     ├─ Politique et Objectifs Qualité                                          │
│     ├─ Comité de Gouvernance IA                                                │
│     ├─ Gestion des Ressources                                                  │
│     └─ Cadre de Responsabilité                                                 │
│                                                                                │
│  2. CONTRÔLE CONCEPTION ET DÉVELOPPEMENT                                       │
│     ├─ Planification et Contrôle de Conception                                 │
│     ├─ Entrées et Sorties de Conception                                        │
│     ├─ Vérification et Validation de Conception                                │
│     └─ Transfert et Revue de Conception                                        │
│                                                                                │
│  3. GESTION DOCUMENTATION ET CONFIGURATION                                     │
│     ├─ Documentation Technique (Article 11)                                    │
│     ├─ Contrôle Documents et Gestion Versions                                  │
│     ├─ Gestion Configuration                                                   │
│     └─ Gestion et Conservation Enregistrements                                 │
│                                                                                │
│  4. GESTION FOURNISSEURS ET FORMATION                                          │
│     ├─ Qualification et Contrôle Fournisseurs                                  │
│     ├─ Vérification Produits/Services Achetés                                  │
│     ├─ Exigences Compétence Personnel                                          │
│     └─ Gestion Programme Formation                                             │
│                                                                                │
│  5. CONTRÔLE ET VALIDATION PROCESSUS                                           │
│     ├─ Validation et Qualification Processus                                   │
│     ├─ Contrôle Production et Prestation Services                              │
│     ├─ Gestion Contrôle Changements                                            │
│     └─ Intégration Gestion Risques                                             │
│                                                                                │
│  6. SURVEILLANCE, MESURE ET AUDIT                                              │
│     ├─ Métriques et ICP Qualité                                                │
│     ├─ Programme Audit Interne                                                 │
│     ├─ Processus Revue Direction                                               │
│     └─ Intégration Surveillance Post-Commercialisation                         │
│                                                                                │
│  7. AMÉLIORATION ET ACTION CORRECTIVE                                          │
│     ├─ Processus Action Corrective (CAPA)                                      │
│     ├─ Processus Action Préventive                                             │
│     ├─ Cadre Amélioration Continue                                             │
│     └─ Leçons Apprises et Gestion Connaissances                                │
│                                                                                │
└───────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Intégration du SGQ dans le Cycle de Vie

Le SGQ intègre les contrôles qualité à chaque étape du cycle de vie du système d'IA :

| Phase du Cycle de Vie | Activités SGQ | Portes Qualité | Livrables |
|----------------------|---------------|----------------|-----------|
| **1. Planification** | Planification conception ; allocation ressources ; vérification compétences | Plan conception approuvé ; ressources allouées | Plan de Conception et Développement (DDP) |
| **2. Conception** | Entrées conception définies ; sorties conception documentées ; revue conception | Revue conception complétée ; entrées/sorties traçables | Spécification Conception ; Registres Revue Conception |
| **3. Développement** | Revue code ; tests ; gestion configuration ; contrôle changements | Revue code réussie ; tests réussis ; changements approuvés | Code source ; Résultats tests ; Registres changements |
| **4. Vérification** | Vérification conception ; planification validation ; vérification traçabilité | Vérification complète ; exigences satisfaites | Rapport Vérification ; Matrice Traçabilité |
| **5. Validation** | Validation clinique/opérationnelle ; acceptation utilisateur ; validation performance | Critères validation satisfaits ; système approuvé pour publication | Rapport Validation ; Métriques Performance |
| **6. Transfert** | Revue documentation ; achèvement formation ; préparation déploiement | Documentation complète ; personnel formé | Package Documentation Technique |
| **7. Production** | Surveillance post-commercialisation ; contrôle changements ; CAPA ; gestion configuration | Changements contrôlés ; CAPA clôturés ; surveillance active | Rapports Surveillance ; Registres CAPA |
| **8. Post-Commercialisation** | Surveillance continue ; revue périodique ; gestion incidents ; mises à jour | Revues complétées ; incidents gérés ; mises à jour validées | Rapports Revue ; Registres Incidents ; Registres Mise à Jour |

### 3.3 Correspondance avec l'Article 17 du Règlement IA de l'UE

Ce SGQ répond à toutes les exigences de l'Article 17 :

| Exigence Article 17 | Mise en Œuvre SGQ | Référence Section |
|---------------------|-------------------|-------------------|
| **(a)** Stratégie de conformité pour Articles 8-15 | Cadre SGQ intègre toutes exigences techniques | Section 3.1, 4.2 |
| **(b)** Techniques de conception, développement, test | Procédures contrôle conception ; protocoles validation | Section 4.2, 4.12 |
| **(c)** Spécifications et normes techniques | Entrées conception ; critères acceptation ; adhésion normes | Section 4.2.2 |
| **(d)** Procédures gestion données | Intégration gouvernance données ; assurance qualité | Section 4.2, Réf. croisée PROC-AI-DATA-001 |
| **(e)** Système gestion risques | Intégration gestion risques | Section 4.5, Réf. croisée PROC-AI-RM-001 |
| **(f)** Système surveillance post-commercialisation | Intégration surveillance ; suivi performance | Section 4.11, Réf. croisée PROC-AI-PMM-001 |
| **(g)** Procédures signalement incidents | Gestion incidents ; signalement incidents graves | Section 4.11, Réf. croisée PROC-AI-INC-001 |
| **(h)** Communication avec autorités | Interface autorités ; procédures notification | Section 4.11 |
| **(i)** Reporting et documentation systématiques | Revue direction ; reporting audit | Section 4.9, 4.10 |
| **(j)** Gestion ressources | Compétence ; formation ; allocation ressources | Section 4.4 |
| **(k)** Cadre de responsabilité | Rôles et responsabilités ; gouvernance | Section 2.1, 4.1 |

### 3.4 Déclaration de Politique Qualité

**Politique Qualité IA de [Nom Organisation]**

Nous nous engageons à développer, déployer et exploiter des systèmes d'IA qui :
- Satisfont ou dépassent toutes les exigences réglementaires applicables, y compris le Règlement IA de l'UE
- Protègent les droits fondamentaux, la santé, la sécurité et l'environnement
- Fonctionnent comme prévu tout au long de leur cycle de vie
- Sont continuellement améliorés sur la base des retours et de la surveillance
- Sont développés et maintenus par du personnel compétent et formé
- Sont soutenus par des processus, une documentation et des contrôles robustes

**Objectifs Qualité :**
1. **Conformité :** 100% de conformité avec les exigences du Règlement IA de l'UE pour tous les systèmes d'IA à haut risque
2. **Sécurité :** Zéro incident grave causé par des défaillances de systèmes d'IA
3. **Performance :** Tous les systèmes d'IA satisfont les critères de performance définis tout au long du cycle de vie
4. **Documentation :** 100% d'exhaustivité et d'exactitude de la documentation technique
5. **Amélioration :** Amélioration continue démontrée par les CAPA et les conclusions d'audit

**Engagement de la Direction :**
- Fournir des ressources adéquates pour la mise en œuvre et le maintien du SGQ
- Assurer la compétence du personnel par la formation et le développement
- Examiner l'efficacité du SGQ annuellement
- Soutenir une culture d'amélioration continue
- Assurer la conformité client et réglementaire

---

## 4. PROCÉDURE ÉTAPE PAR ÉTAPE

### PHASE 1 : ÉTABLISSEMENT ET GOUVERNANCE DU SGQ

#### Étape 1.1 : Établir le Cadre SGQ (Contrôle QMS-001)

**Quand :** Lors de la mise en œuvre initiale du SGQ ou d'une révision majeure

**Qui :** Responsable Qualité + Directeur Qualité + Comité de Gouvernance IA

**Comment :**

1. **Définir la Portée et les Limites du SGQ**
   - Identifier les systèmes d'IA couverts par le SGQ (tous les systèmes à haut risque)
   - Définir les unités organisationnelles incluses dans la portée
   - Identifier les exigences réglementaires applicables
   - Documenter les exclusions et la justification
   - Documenter dans la Déclaration de Portée SGQ (DOC-QMS-001)

2. **Établir la Politique Qualité**
   - Rédiger une politique qualité alignée avec la stratégie organisationnelle
   - Définir les objectifs qualité (SMART : Spécifiques, Mesurables, Atteignables, Pertinents, Temporellement définis)
   - Obtenir l'approbation de la direction générale
   - Communiquer à tout le personnel
   - Documenter dans la Politique Qualité (POL-QMS-001)

3. **Concevoir la Cartographie des Processus SGQ**
   - Identifier les processus SGQ de base
   - Définir les interactions et dépendances des processus
   - Établir les propriétaires de processus
   - Définir les entrées, sorties et contrôles des processus
   - Documenter dans la Cartographie Processus SGQ (DOC-QMS-002)

   **Processus SGQ de Base :**
   - Contrôle conception et développement
   - Gestion documents et configuration
   - Gestion fournisseurs
   - Formation et compétence
   - Validation processus
   - Contrôle changements
   - Audit interne
   - Revue direction
   - CAPA (Action Corrective et Préventive)
   - Amélioration continue

4. **Établir la Structure de Gouvernance**
   - Définir la charte du Comité de Gouvernance IA
   - Nommer les membres du comité
   - Définir la fréquence des réunions (minimum trimestriel)
   - Établir l'autorité décisionnelle
   - Documenter dans la Charte de Gouvernance (DOC-QMS-003)

5. **Allouer les Ressources**
   - Identifier les besoins en ressources (personnel, outils, infrastructure)
   - Assigner le Responsable Qualité et le personnel de soutien
   - Allouer le budget pour les activités SGQ
   - Fournir les outils nécessaires (gestion documents, outils audit, etc.)
   - Documenter dans le Plan d'Allocation Ressources (DOC-QMS-004)

6. **Intégrer avec la Gestion des Risques d'Entreprise (ERM)**
   - Cartographier les risques SGQ au registre des risques d'entreprise
   - Définir les seuils d'escalade
   - Établir le reporting au Conseil/Comité Exécutif
   - Aligner les déclarations d'appétit pour le risque
   - Documenter l'intégration dans la Carte d'Intégration ERM (DOC-QMS-005)

7. **Obtenir l'Approbation de la Direction**
   - Présenter le cadre SGQ à la direction générale
   - Obtenir l'approbation du Comité de Gouvernance IA
   - Sécuriser l'engagement budgétaire et des ressources
   - Documenter l'approbation dans les Registres d'Approbation SGQ (REC-QMS-001)

**Preuves Requises :**
- Déclaration Portée SGQ (DOC-QMS-001)
- Politique Qualité (POL-QMS-001)
- Cartographie Processus SGQ (DOC-QMS-002)
- Charte Gouvernance (DOC-QMS-003)
- Plan Allocation Ressources (DOC-QMS-004)
- Carte Intégration ERM (DOC-QMS-005)
- Registres Approbation SGQ (REC-QMS-001)

**Délai :** 4-8 semaines pour l'établissement initial

**Vérification Qualité :**
- Tous les systèmes d'IA à haut risque inclus dans la portée
- Les objectifs qualité sont SMART
- Ressources adéquates pour la portée
- Structure de gouvernance avec autorité appropriée
- Engagement direction générale documenté

---

#### Étape 1.2 : Établir le Cadre de Responsabilité (Contrôle QMS-001)

**Quand :** Durant l'établissement du SGQ ; revue annuelle

**Qui :** Responsable Qualité + Directeur Qualité

**Comment :**

1. **Définir les Rôles et Responsabilités**
   - Documenter tous les rôles SGQ (voir Section 2.1)
   - Définir les responsabilités pour chaque rôle
   - Définir les niveaux d'autorité et les chemins d'escalade
   - Assigner des individus aux rôles
   - Documenter dans la Matrice Rôles et Responsabilités (DOC-QMS-006)

2. **Établir l'Autorité Décisionnelle**

| Type de Décision | Niveau d'Autorité | Approbations Requises |
|-----------------|-------------------|----------------------|
| Changements politique SGQ | Comité Gouvernance IA | DQ + Président Comité |
| Approbation procédure qualité | Responsable Qualité | Revue DQ |
| Approbation conception | Autorité Conception | Accord Responsable Qualité |
| Qualification fournisseur | Responsable Qualité Fournisseurs | Approbation Responsable Qualité |
| Clôture CAPA | Coordinateur CAPA | Approbation Responsable Qualité |
| Disposition non-conformité | Responsable Qualité | DQ (pour non-conformités critiques) |
| Autorisation déploiement | Propriétaire Système IA | Responsable Qualité + Autorité Conception |

3. **Établir la Séparation des Fonctions**
   - Autorité Conception ≠ Implémenteur Conception (pour systèmes critiques)
   - Auditeur Interne ≠ Propriétaire Processus audité
   - Coordinateur CAPA ≠ Propriétaire CAPA (pour même CAPA)
   - Contrôleur Documents ≠ unique Auteur Document
   - Documenter dans la Matrice Séparation Fonctions (DOC-QMS-007)

4. **Définir les Procédures d'Escalade**

| Type de Problème | Déclencheur Escalade | Chemin Escalade | Délai |
|-----------------|---------------------|-----------------|-------|
| Non-conformité critique | Affecte sécurité, droits, conformité | Resp. Qualité → DQ → Comité Gouv IA | < 24 heures |
| Non-conformité majeure | Affecte performance système | Resp. Qualité → DQ | < 48 heures |
| Problème qualité fournisseur | Non-conformité fournisseur impacte livraison | Resp. Qual. Fourn. → Resp. Qualité → DQ | < 72 heures |
| CAPA en retard | CAPA > 30 jours en retard | Coord. CAPA → Resp. Qualité → DQ | Hebdomadaire |
| Constat audit | Constat critique audit interne/externe | Auditeur Interne → Resp. Qualité → DQ → Comité Gouv IA | < 48 heures |

5. **Communiquer le Cadre de Responsabilité**
   - Présenter le cadre à tout le personnel
   - Fournir formation sur rôles et responsabilités
   - Publier le cadre de responsabilité dans un endroit accessible
   - Obtenir l'accusé de réception des détenteurs de rôles
   - Documenter la formation dans les Registres Formation (REC-TRN-001)

**Preuves Requises :**
- Matrice Rôles et Responsabilités (DOC-QMS-006)
- Matrice Séparation Fonctions (DOC-QMS-007)
- Procédures Escalade (DOC-QMS-008)
- Registres Formation (REC-TRN-001)

**Délai :** 2-3 semaines

**Vérification Qualité :**
- Tous les rôles SGQ assignés
- Niveaux d'autorité appropriés pour types de décisions
- Séparation des fonctions prévient conflits d'intérêts
- Chemins d'escalade assurent attention direction opportune

---

### PHASE 2 : CONTRÔLE CONCEPTION ET DÉVELOPPEMENT

#### Étape 2.1 : Planifier la Conception et le Développement (Contrôle QMS-002)

**Quand :** Au début de chaque projet de développement de système IA

**Qui :** Propriétaire Système IA + Autorité Conception + Responsable Qualité

**Comment :**

1. **Créer le Plan de Conception et Développement (DDP)**
   - Définir les étapes et jalons de conception
   - Identifier les revues de conception et activités vérification/validation
   - Assigner les membres de l'équipe de conception et responsabilités
   - Définir les besoins en ressources
   - Établir le calendrier et l'échéancier
   - Utiliser le Modèle Plan Conception et Développement (TMP-QMS-002)

2. **Définir les Entrées de Conception**
   - Exigences fonctionnelles (ce que le système doit faire)
   - Exigences de performance (précision, vitesse, débit)
   - Exigences de sécurité (prévention dommages, sécurités intégrées)
   - Exigences réglementaires (Articles 8-15 Règlement IA UE)
   - Besoins utilisateurs et exigences cas d'usage
   - Exigences d'interface (API, intégrations)
   - Exigences données (données formation, données entrée)
   - Exigences gestion risques
   - Documenter dans Spécification Entrées Conception (SPEC-AI-DI-XXX)

   **Liste de Vérification Entrées Conception :**
   - ☐ Finalité prévue clairement définie
   - ☐ Population utilisateurs identifiée
   - ☐ Environnement opérationnel spécifié
   - ☐ Critères performance quantifiés
   - ☐ Exigences sécurité identifiées
   - ☐ Exigences Règlement IA UE cartographiées
   - ☐ Exigences données spécifiées
   - ☐ Exigences interface définies
   - ☐ Critères acceptation établis
   - ☐ Traçabilité besoins utilisateurs vérifiée

3. **Établir les Critères d'Acceptation de Conception**
   - Définir les critères réussite/échec pour vérification conception
   - Définir les critères de succès pour validation conception
   - Quantifier les seuils de performance
   - Définir les méthodologies de test
   - Documenter dans Critères Acceptation Conception (DOC-QMS-009)

4. **Planifier les Revues de Conception**
   - Planifier les revues de conception à chaque porte de phase
   - Identifier les participants aux revues (Autorité Conception, Qualité, Risque, Sécurité, etc.)
   - Définir l'ordre du jour de revue et critères entrée/sortie
   - Documenter dans le Calendrier Revues Conception (DOC-QMS-010)

   **Portes Revue Conception Typiques :**
   - Porte 1 : Revue Entrées Conception (entrées complètes et approuvées)
   - Porte 2 : Revue Conception Préliminaire (architecture et approche)
   - Porte 3 : Revue Conception Critique (conception détaillée complète)
   - Porte 4 : Revue Vérification Conception (tests complets, exigences satisfaites)
   - Porte 5 : Revue Validation Conception (validation complète, prêt pour publication)
   - Porte 6 : Revue Transfert Conception (documentation complète, prêt pour déploiement)

5. **Planifier la Vérification et Validation**
   - Définir les activités de vérification (répond-il aux exigences ?)
   - Définir les activités de validation (répond-il aux besoins utilisateurs ?)
   - Identifier les environnements de test et jeux de données
   - Planifier les tests de biais et évaluation équité
   - Planifier les tests de robustesse et sécurité
   - Documenter dans le Plan Vérification et Validation (PLAN-AI-VV-XXX)

6. **Obtenir l'Approbation**
   - L'Autorité Conception examine et approuve le DDP
   - Le Responsable Qualité examine et approuve le DDP
   - Le Propriétaire Système IA approuve l'engagement ressources
   - Documenter les approbations dans les Registres Approbation DDP (REC-QMS-002)

**Preuves Requises :**
- Plan Conception et Développement (PLAN-AI-DD-XXX)
- Spécification Entrées Conception (SPEC-AI-DI-XXX)
- Critères Acceptation Conception (DOC-QMS-009)
- Calendrier Revues Conception (DOC-QMS-010)
- Plan Vérification et Validation (PLAN-AI-VV-XXX)
- Registres Approbation DDP (REC-QMS-002)

**Délai :** 2-4 semaines au lancement du projet

**Vérification Qualité :**
- Les entrées de conception sont complètes, non ambiguës et vérifiables
- Les critères d'acceptation sont quantifiés et testables
- Les revues de conception sont programmées aux portes appropriées
- Les plans de vérification et validation sont complets
- Les ressources appropriées sont allouées et engagées

---

#### Étape 2.2 : Documenter les Sorties de Conception (Contrôle QMS-002)

**Quand :** Tout au long de la phase de conception et développement

**Qui :** Équipe Conception + Autorité Conception

**Comment :**

1. **Développer la Documentation Sorties Conception**

   Les sorties de conception doivent inclure :

   **a) Spécification Architecture Système**
   - Architecture système globale (composants, interfaces, flux données)
   - Architecture modèle IA (couches, activations, hyperparamètres)
   - Architecture infrastructure (calcul, stockage, réseau)
   - Architecture sécurité (authentification, autorisation, chiffrement)
   - Documenter dans Spécification Architecture Système (SPEC-AI-ARCH-XXX)

   **b) Spécification Conception Détaillée**
   - Conception algorithmique et formulations mathématiques
   - Prétraitement données et ingénierie caractéristiques
   - Procédure entraînement modèle et réglage hyperparamètres
   - Pipeline inférence et post-traitement
   - Gestion erreurs et exceptions
   - Documenter dans Spécification Conception Détaillée (SPEC-AI-DD-XXX)

   **c) Spécifications Interface**
   - Spécifications API (points terminaison, paramètres, réponses)
   - Spécifications interface données (formats, schémas, protocoles)
   - Spécifications interface utilisateur (écrans, flux travail, interactions)
   - Spécifications intégration systèmes externes
   - Documenter dans Documents Contrôle Interface (ICD-AI-XXX)

   **d) Spécifications Données**
   - Exigences et spécifications données formation
   - Exigences données entrée et règles validation
   - Spécifications et formats données sortie
   - Exigences qualité données
   - Documenter dans Spécification Données (SPEC-AI-DATA-XXX)

   **e) Spécifications Performance**
   - Objectifs précision, précision, rappel, F1
   - Exigences latence et débit
   - Spécifications évolutivité et capacité
   - Objectifs disponibilité et fiabilité
   - Documenter dans Spécification Performance (SPEC-AI-PERF-XXX)

   **f) Spécifications Sécurité et Contrôle Risques**
   - Exigences et contrôles sécurité
   - Contrôles atténuation risques (de PROC-AI-RM-001)
   - Mécanismes sécurité intégrée et secours
   - Spécifications surveillance et alerte
   - Documenter dans Spécification Sécurité (SPEC-AI-SAFE-XXX)

2. **Assurer la Qualité des Sorties de Conception**

   Toutes les sorties de conception doivent répondre à ces critères :
   - ✓ **Traçables :** Chaque sortie conception trace vers entrée(s) conception spécifique(s)
   - ✓ **Complètes :** Toutes les entrées conception adressées par sorties conception
   - ✓ **Non ambiguës :** Sorties conception claires et interprétables
   - ✓ **Vérifiables :** Sorties conception peuvent être testées et vérifiées
   - ✓ **Conformes :** Sorties conception satisfont exigences réglementaires
   - ✓ **Fabricables :** Conception peut être implémentée avec ressources disponibles
   - ✓ **Sûres :** Conception inclut contrôles sécurité nécessaires

3. **Établir la Traçabilité**
   - Créer Matrice Traçabilité Conception liant :
     - Besoins utilisateurs → Entrées conception → Sorties conception → Tests vérification → Tests validation
   - Assurer traçabilité bidirectionnelle (avant et arrière)
   - Documenter dans Matrice Traçabilité Conception (TRC-AI-XXX)

   **Exemple Traçabilité :**

   | Besoin Utilisateur | Entrée Conception | Sortie Conception | Test Vérification | Test Validation |
   |-------------------|-------------------|-------------------|-------------------|-----------------|
   | Recrutement non biaisé | DI-001 : Exigence équité | DO-023 : Implémentation contrainte équité | VT-045 : Test parité démographique | VAL-012 : Test acceptation utilisateur |

4. **Effectuer la Revue Sorties Conception**
   - L'Autorité Conception examine toutes les sorties conception
   - Le Responsable Qualité vérifie conformité avec normes
   - Le Responsable Risques vérifie inclusion contrôles sécurité
   - Documenter la revue dans Registres Revue Sorties Conception (REC-QMS-003)

5. **Approuver les Sorties de Conception**
   - L'Autorité Conception approuve les sorties conception pour implémentation
   - Les approbations sont documentées et maintenues
   - Les sorties conception sont placées sous contrôle configuration
   - Documenter dans Registres Approbation Conception (REC-QMS-004)

**Preuves Requises :**
- Spécification Architecture Système (SPEC-AI-ARCH-XXX)
- Spécification Conception Détaillée (SPEC-AI-DD-XXX)
- Documents Contrôle Interface (ICD-AI-XXX)
- Spécification Données (SPEC-AI-DATA-XXX)
- Spécification Performance (SPEC-AI-PERF-XXX)
- Spécification Sécurité (SPEC-AI-SAFE-XXX)
- Matrice Traçabilité Conception (TRC-AI-XXX)
- Registres Revue Sorties Conception (REC-QMS-003)
- Registres Approbation Conception (REC-QMS-004)

**Délai :** Tout au long de la phase conception ; 6-12 semaines typique

**Vérification Qualité :**
- Toutes les entrées conception adressées par sorties conception
- Les sorties conception satisfont critères qualité (traçables, complètes, non ambiguës, vérifiables)
- Matrice traçabilité complète et bidirectionnelle
- Approbation Autorité Conception documentée
- Sorties conception sous contrôle configuration

---

#### Étape 2.3 : Effectuer les Revues de Conception (Contrôle QMS-002)

**Quand :** À chaque porte de phase conception (selon Calendrier Revues Conception)

**Qui :** Autorité Conception + Responsable Qualité + Équipe interfonctionnelle

**Comment :**

1. **Préparer la Revue de Conception**
   - Planifier la réunion de revue (préavis minimum 2 semaines)
   - Distribuer la documentation conception aux réviseurs (minimum 1 semaine avant)
   - Préparer la liste de vérification revue conception (CHK-QMS-DR-001)
   - Identifier les participants à la revue :
     - Autorité Conception (Président)
     - Responsable Qualité
     - Responsable Risques
     - Expert Sécurité
     - Représentant Gouvernance Données
     - Propriétaire Système IA
     - Experts Matière (selon besoin)

2. **Effectuer la Réunion de Revue de Conception**

   **Ordre du Jour Revue Conception (réunion typique 2-3 heures) :**

   - **Ouverture (10 min)**
     - Examiner ordre du jour et objectifs
     - Confirmer présents et quorum
     - Examiner points d'action de revue précédente

   - **Présentation Conception (30 min)**
     - Présenter entrées et exigences conception
     - Présenter sorties conception et architecture
     - Présenter approche vérification et validation
     - Présenter évaluation risques et contrôles

   - **Revue Détaillée (90 min)**
     - Examiner conception par rapport aux entrées (traçabilité)
     - Examiner exhaustivité et qualité sorties conception
     - Examiner conformité avec exigences Règlement IA UE
     - Examiner contrôles sécurité et risques
     - Examiner gouvernance et qualité données
     - Identifier lacunes ou problèmes conception
     - Discuter alternatives conception si nécessaire

   - **Décision et Points d'Action (30 min)**
     - Identifier points d'action et propriétaires
     - Déterminer résultat revue :
       - **Approuvé :** Conception passe à phase suivante
       - **Approuvé avec Conditions :** Conception passe après modifications mineures
       - **Non Approuvé :** Conception nécessite retravail et nouvelle revue
     - Documenter décisions et justification

3. **Documenter la Revue de Conception**
   - Compléter Liste Vérification Revue Conception (CHK-QMS-DR-001)
   - Documenter présence à la revue
   - Documenter constats et problèmes identifiés
   - Documenter points d'action avec propriétaires et dates échéance
   - Documenter décision revue et justification
   - Tous les réviseurs signent Procès-Verbal Revue Conception (REC-QMS-005)

4. **Suivre les Points d'Action**
   - Assigner points d'action aux propriétaires
   - Définir dates échéance pour clôture
   - Suivre points d'action dans Tracker Actions Revue Conception (REC-QMS-006)
   - Vérifier clôture avant passage porte suivante

5. **Décision Porte**
   - L'Autorité Conception prend la décision finale de porte
   - "Approuvé" → Passer à phase suivante
   - "Approuvé avec Conditions" → Compléter points d'action, puis passer
   - "Non Approuvé" → Compléter retravail, programmer nouvelle revue
   - Documenter décision porte dans Registres Décision Porte (REC-QMS-007)

**Portes Revue Conception Typiques :**

| Porte | Nom Revue | Objectif | Questions Clés | Critères Sortie |
|-------|-----------|----------|----------------|-----------------|
| 1 | Revue Entrées Conception | Vérifier entrées complètes et correctes | Exigences claires, complètes, testables ? | Toutes entrées approuvées |
| 2 | Revue Conception Préliminaire | Évaluer architecture et approche | Approche solide ? Risques identifiés ? | Architecture approuvée |
| 3 | Revue Conception Critique | Vérifier conception détaillée | Conception satisfait toutes exigences ? | Conception détaillée approuvée |
| 4 | Revue Vérification Conception | Confirmer tests complets | Toutes exigences vérifiées ? | Tous tests réussis |
| 5 | Revue Validation Conception | Confirmer validation complète | Système satisfait besoins utilisateurs ? | Validation réussie |
| 6 | Revue Transfert Conception | Autoriser publication production | Documentation complète et correcte ? | Prêt pour déploiement |

**Preuves Requises :**
- Liste Vérification Revue Conception (CHK-QMS-DR-001) - complétée
- Procès-Verbal Revue Conception (REC-QMS-005)
- Tracker Actions Revue Conception (REC-QMS-006)
- Registres Décision Porte (REC-QMS-007)
- Package documentation conception (spécifications, plans, résultats tests)

**Délai :** 2-4 heures par revue ; revues multiples tout au long phase conception

**Vérification Qualité :**
- Tous les réviseurs requis présents (ou exceptions documentées)
- Liste vérification revue conception complétée
- Tous les constats documentés avec points d'action
- Décision porte documentée avec justification
- Points d'action suivis jusqu'à clôture

---

### PHASE 3 : GESTION DOCUMENTATION ET CONFIGURATION

#### Étape 3.1 : Établir le Système de Contrôle Documents (Contrôle QMS-003)

**Quand :** Lors de l'établissement SGQ ; maintenir en continu

**Qui :** Contrôleur Documents + Responsable Qualité

**Comment :**

1. **Implémenter le Système de Gestion Documents**
   - Sélectionner plateforme gestion documents (SharePoint, Confluence, logiciel SGQ dédié)
   - Configurer contrôles accès et permissions
   - Mettre en place flux travail approbation documents
   - Configurer contrôle versions
   - Activer pistes audit
   - Documenter dans Configuration Système Gestion Documents (DOC-QMS-011)

2. **Définir Catégories et Numérotation Documents**

| Catégorie Document | Préfixe | Exemples | Conservation |
|-------------------|---------|----------|--------------|
| Politiques | POL- | POL-AI-001 (Politique IA) | Permanent |
| Normes | STD- | STD-AI-009 (Norme SGQ) | 10 ans |
| Procédures | PROC- | PROC-AI-QMS-001 (ce document) | 10 ans |
| Spécifications | SPEC- | SPEC-AI-ARCH-001 (Architecture) | 10 ans |
| Plans | PLAN- | PLAN-AI-DD-001 (Plan Conception) | 10 ans |
| Registres | REC- | REC-QMS-001 (Registre Approbation) | 10 ans |
| Modèles | TMP- | TMP-QMS-001 (Modèle) | En cours + 2 ans |
| Formulaires | FORM- | FORM-QMS-001 (Formulaire) | En cours + 2 ans |
| Rapports | RPT- | RPT-QMS-001 (Rapport Audit) | 10 ans |
| Instructions Travail | WI- | WI-QMS-001 (Instruction Travail) | 10 ans |

3. **Définir États Cycle Vie Documents**

| État | Description | Qui Peut Éditer | Qui Peut Approuver |
|------|-------------|-----------------|-------------------|
| **Brouillon** | Document en développement | Auteur | N/A |
| **En Revue** | Document en cours de revue | Auteur (avec suivi modifications) | Réviseurs |
| **Approuvé** | Document approuvé et effectif | Personne (créer nouvelle version) | Contrôleur Documents |
| **Obsolète** | Document remplacé ou retiré | Personne | Contrôleur Documents |
| **Archivé** | Document conservé pour dossiers | Personne | N/A |

4. **Établir Normes Documents**

   Tous les documents contrôlés doivent inclure :
   - **En-tête :**
     - ID document
     - Titre document
     - Numéro version (ex., v1.0, v2.1)
     - Date effective
     - Auteur
     - Approbateur
     - Date revue suivante

   - **Corps :**
     - Objectif et portée
     - Procédure ou contenu
     - Références documents connexes

   - **Pied de page :**
     - Tableau historique révisions
     - Signatures approbation
     - Déclaration contrôle document

   **Documenter dans Normes et Modèles Documents (DOC-QMS-012)**

5. **Définir Exigences Approbation Documents**

| Type Document | Approbations Requises | Autorité Approbation |
|---------------|----------------------|----------------------|
| Politique Qualité | Comité Gouv IA + DQ | Président Comité Gouv IA |
| Procédures Qualité | Responsable Qualité + DQ | DQ |
| Spécifications Conception | Autorité Conception + Responsable Qualité | Autorité Conception |
| Documentation Technique | Propriétaire Système IA + Responsable Qualité | Responsable Qualité |
| Matériels Formation | Responsable Formation | Responsable Formation |
| Formulaires et Modèles | Propriétaire Processus | Responsable Qualité |

6. **Établir Règles Contrôle Versions**
   - **Changement version majeure (X.0) :** Changements significatifs, nouvelle approbation requise
   - **Changement version mineure (X.Y) :** Changements éditoriaux ou clarifications, approbation Responsable Qualité
   - Numérotation versions : v1.0, v1.1, v1.2, v2.0, etc.
   - Date effective = date approbation
   - Versions précédentes archivées automatiquement
   - Documenter dans Procédures Contrôle Versions (DOC-QMS-013)

7. **Configurer Contrôle Accès Documents**
   - Public : Accessible à tout le personnel
   - Interne : Accessible au personnel désigné uniquement
   - Confidentiel : Accès restreint (individus nommés)
   - Définir matrice contrôle accès
   - Documenter dans Matrice Contrôle Accès (DOC-QMS-014)

8. **Former le Personnel sur Contrôle Documents**
   - Former les auteurs sur normes documents
   - Former les approbateurs sur flux travail approbation
   - Former tout le personnel sur accès et utilisation documents
   - Documenter la formation dans Registres Formation (REC-TRN-001)

**Preuves Requises :**
- Configuration Système Gestion Documents (DOC-QMS-011)
- Normes et Modèles Documents (DOC-QMS-012)
- Procédures Contrôle Versions (DOC-QMS-013)
- Matrice Contrôle Accès (DOC-QMS-014)
- Registres Formation (REC-TRN-001)

**Délai :** 3-4 semaines pour configuration initiale

**Vérification Qualité :**
- Système gestion documents opérationnel
- Toutes catégories documents définies avec schéma numérotation
- Flux travail approbation configurés
- Contrôle versions opérationnel
- Personnel formé

---

