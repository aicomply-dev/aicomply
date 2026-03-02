# PROC-AI-CA-001 : Procédure d'Évaluation de la Conformité

**ID de Procédure :** PROC-AI-CA-001
**Nom de Procédure :** Procédure d'Évaluation de la Conformité selon le Règlement IA de l'UE
**Norme :** STD-AI-010 : Norme d'Évaluation de la Conformité
**Couvre les Contrôles :** CA-001, CA-002, CA-003, CA-004, CA-005, CA-006, CA-007, CA-008, CA-009, CA-010, CA-011, CA-012, CA-013
**Date d'Effet :** [À compléter]
**Dernière Mise à Jour :** [À compléter]
**Prochaine Date de Révision :** [À compléter]
**Statut d'Approbation :** [Brouillon/Approuvé]

---

## TABLE DES MATIÈRES

1. [Objectif et Portée](#1-objectif-et-portée)
2. [Rôles et Responsabilités](#2-rôles-et-responsabilités)
3. [Cadre Réglementaire](#3-cadre-réglementaire)
4. [Parcours d'Évaluation de la Conformité](#4-parcours-dévaluation-de-la-conformité)
5. [Procédure Étape par Étape](#5-procédure-étape-par-étape)
   - [Phase 1 : Planification de l'Évaluation](#phase-1-planification-de-lévaluation)
   - [Phase 2 : Sélection de l'Organisme Notifié](#phase-2-sélection-de-lorganisme-notifié)
   - [Phase 3 : Examen de la Documentation Technique](#phase-3-examen-de-la-documentation-technique)
   - [Phase 4 : Évaluation du SGQ](#phase-4-évaluation-du-sgq)
   - [Phase 5 : Tests et Validation](#phase-5-tests-et-validation)
   - [Phase 6 : Déclaration de Conformité](#phase-6-déclaration-de-conformité)
   - [Phase 7 : Marquage CE](#phase-7-marquage-ce)
   - [Phase 8 : Maintien de la Conformité après la Mise sur le Marché](#phase-8-maintien-de-la-conformité-après-la-mise-sur-le-marché)
6. [Mécanismes de Contrôle](#6-mécanismes-de-contrôle)
7. [Indicateurs Clés de Performance](#7-indicateurs-clés-de-performance)
8. [Exigences Documentaires](#8-exigences-documentaires)
9. [Révision et Audit](#9-révision-et-audit)
10. [Traitement des Non-Conformités](#10-traitement-des-non-conformités)
11. [Documents Connexes](#11-documents-connexes)
12. [Annexes](#12-annexes)

---

## 1. OBJECTIF ET PORTÉE

### 1.1 Objectif

Cette procédure établit le processus étape par étape pour la conduite des évaluations de conformité des systèmes d'IA à haut risque conformément aux articles 43 (Évaluation de la Conformité), 47 (Déclaration de Conformité UE) et 48 (Marquage CE) du Règlement IA de l'UE. La procédure garantit que les systèmes d'IA satisfont à toutes les exigences applicables avant d'être mis sur le marché ou mis en service.

L'évaluation de la conformité démontre que le système d'IA :
- Est conforme à toutes les exigences obligatoires du Règlement IA de l'UE
- A fait l'objet d'une évaluation technique et du système de gestion de la qualité appropriée
- Est sûr et respecte les droits fondamentaux
- Peut être légalement mis sur le marché de l'UE avec le marquage CE

### 1.2 Portée

Cette procédure s'applique à :
- Tous les systèmes d'IA à haut risque tels que définis dans l'Annexe III du Règlement IA de l'UE
- Les systèmes d'IA destinés à être utilisés comme composants de sécurité de produits couverts par la législation d'harmonisation de l'UE
- Les systèmes d'IA nécessitant une évaluation de conformité par un tiers conformément à l'article 43(1)
- Les systèmes d'identification biométrique (évaluation par un tiers obligatoire)
- Les fournisseurs mettant des systèmes d'IA à haut risque sur le marché de l'UE
- Les fournisseurs mettant des systèmes d'IA à haut risque en service sous leur propre nom ou marque

Cette procédure ne s'applique pas à :
- Les systèmes d'IA à risque minimal (aucune évaluation de conformité requise)
- Les systèmes d'IA à risque limité (obligations de transparence uniquement, couvertes par PROC-AI-TRANS-001)
- Les systèmes d'IA soumis uniquement au contrôle interne (Annexe VI) sans intervention d'organisme notifié
- Les systèmes d'IA tiers achetés en l'état (obligations du déployeur couvertes par PROC-AI-DEPLOY-001)

### 1.3 Responsable de la Procédure et Contacts

| Rôle | Nom | Titre | Contact |
|------|------|-------|---------|
| **Responsable de la Procédure** | [Nom] | Responsable de l'Évaluation de la Conformité | [Email/Téléphone] |
| **Escalade** | [Nom] | Directeur de la Conformité | [Email/Téléphone] |
| **Gouvernance** | [Nom] | Président du Comité de Gouvernance IA | [Email/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles Clés

| Rôle | Responsabilité | Autorité |
|------|---|---|
| **Responsable de l'Évaluation de la Conformité** | Détenir et exécuter le processus d'évaluation de la conformité ; coordonner avec l'organisme notifié ; maintenir la documentation d'évaluation | Approuver les plans d'évaluation ; valider la préparation à la conformité |
| **Propriétaire du Système d'IA / Fournisseur** | S'assurer que le système d'IA répond aux exigences ; fournir la documentation technique ; mettre en œuvre les actions correctives | Accepter les non-conformités résiduelles (faible gravité uniquement) |
| **Directeur de la Conformité** | Supervision de l'évaluation de la conformité ; approuver la Déclaration de Conformité ; signer les documents juridiques | Signer la Déclaration de Conformité UE ; remonter au Conseil d'Administration |
| **Responsable du Système de Gestion de la Qualité** | S'assurer que le SGQ répond aux exigences de l'Annexe IX ; faciliter l'évaluation du SGQ ; mettre en œuvre les actions correctives du SGQ | Approuver la documentation du SGQ ; autoriser les modifications du SGQ |
| **Responsable de la Documentation Technique** | Préparer et maintenir la documentation technique selon l'Annexe IV ; garantir l'exhaustivité et l'exactitude | Approuver les dossiers de documentation technique |
| **Responsable des Tests et de la Validation** | Effectuer les tests de conformité ; valider les performances du système d'IA ; documenter les résultats des tests | Approuver les plans et résultats de tests |
| **Représentant de l'Organisme Notifié** | Effectuer l'évaluation par un tiers (le cas échéant) ; examiner la documentation technique ; évaluer le SGQ ; délivrer les certificats | Délivrer les certificats de conformité ; effectuer les audits de surveillance |
| **Conseil Juridique** | Examiner la Déclaration de Conformité ; assurer la conformité juridique ; conseiller sur les exigences de marquage CE | Approuver les déclarations juridiques ; conseiller sur la responsabilité |
| **Comité de Gouvernance IA** | Examiner et approuver les décisions de conformité ; suivre l'avancement de l'évaluation ; approuver la mise sur le marché | Approuver/rejeter la mise sur le marché ; bloquer les systèmes non conformes |

### 2.2 Matrice RACI

| Activité | Resp. CA | Propriétaire IA | DCC | Resp. SGQ | Resp. Doc Tech | Resp. Tests | Organisme Notifié | Juridique | Gouv. IA |
|----------|---|---|---|---|---|---|---|---|---|
| Planification de l'évaluation | A | R | C | C | C | C | I | C | I |
| Détermination du parcours | A | C | C | I | I | I | C | C | C |
| Sélection de l'organisme notifié | A | C | C | I | I | I | R | C | C |
| Examen de la doc technique | C | R | I | C | A | C | R* | I | I |
| Évaluation du SGQ | C | C | I | A | I | I | R* | I | C |
| Tests et validation | C | R | I | C | C | A | R* | I | I |
| Résolution des non-conformités | A | R | C | R | R | R | C | C | C |
| Déclaration de Conformité | A | C | R | C | C | C | C | R | C |
| Application du marquage CE | A | R | C | I | I | I | C | C | I |
| Surveillance post-marché | C | R | I | C | C | C | C | I | C |
| Déclencheurs de réévaluation | A | R | C | C | C | C | C | I | C |

**Légende :** A=Approbateur, R=Responsable, C=Consulté, I=Informé
**Note :** R* = Responsable uniquement si évaluation par un tiers requise

---

## 3. CADRE RÉGLEMENTAIRE

### 3.1 Exigences du Règlement IA de l'UE

Cette procédure met en œuvre les dispositions suivantes du Règlement IA de l'UE :

#### Article 43 : Évaluation de la Conformité

**Article 43(1) - Procédures d'Évaluation :**
- Systèmes d'IA à haut risque de l'Annexe III Section 1 (identification biométrique) → **Évaluation par un tiers obligatoire (Annexe VII)**
- Autres systèmes d'IA à haut risque de l'Annexe III → **Contrôle interne (Annexe VI)** OU **Évaluation par un tiers (Annexe VII)** au choix du fournisseur
- L'évaluation couvre à la fois :
  - **Système de Gestion de la Qualité (SGQ)** selon l'article 17 et l'Annexe IX
  - **Documentation Technique** selon l'article 11 et l'Annexe IV

**Article 43(2) - Normes Harmonisées :**
- La conformité aux normes harmonisées confère une **présomption de conformité**
- Réduit le besoin d'évaluation détaillée des éléments conformes
- Doivent être publiées au Journal officiel de l'Union européenne
- Volontaires mais fortement recommandées

**Article 43(3) - Spécifications Communes :**
- Lorsqu'aucune norme harmonisée n'existe ou est insuffisante
- La conformité aux spécifications communes confère une présomption de conformité
- Établies par des actes d'exécution de la Commission

**Article 43(4) - Documentation Technique :**
- Le fournisseur démontre la conformité par la documentation technique
- La documentation doit être disponible pendant 10 ans après la mise sur le marché du système
- Doit être tenue à jour tout au long du cycle de vie du système

**Article 43(5) - Achèvement de l'Évaluation :**
- L'évaluation de la conformité démontre la conformité au Chapitre III Section 2
- Une évaluation réussie permet la délivrance de la Déclaration de Conformité

#### Article 47 : Déclaration de Conformité UE

**Article 47(1) - Contenu de la Déclaration :**
- Le fournisseur établit une Déclaration de Conformité écrite selon l'**Annexe V**
- La Déclaration certifie que le système d'IA répond à toutes les exigences du Chapitre III Section 2
- Le fournisseur conserve la Déclaration disponible pendant 10 ans

**Article 47(2) - Mises à Jour de la Déclaration :**
- Le fournisseur doit tenir la Déclaration à jour
- Mise à jour en cas de modifications substantielles
- Mise à jour en cas de changement des normes harmonisées ou spécifications communes
- Mise à jour en cas de changement des capacités du système

**Article 47(3) - Personne Responsable Unique :**
- La Déclaration doit identifier une seule personne physique ou morale responsable
- Si le fournisseur n'est pas établi dans l'UE : représentant autorisé ou importateur

**Article 47(4) - Exigences Linguistiques :**
- Déclaration dans une langue acceptée par l'organisme notifié (le cas échéant)
- Traduction dans la/les langue(s) officielle(s) de l'État membre où le système est mis sur le marché

**Article 47(5) - Traductions :**
- Le fournisseur est responsable de l'exactitude des traductions
- La version en langue originale prévaut en cas de divergence

#### Article 48 : Marquage CE

**Article 48(1) - Exigence de Marquage CE :**
- Les systèmes d'IA à haut risque conformes → apposition du marquage CE
- Le marquage CE indique la conformité au Règlement IA de l'UE

**Article 48(2) - Principes Généraux :**
- Le marquage CE est régi par le Règlement (CE) n° 765/2008, article 30
- Visible, lisible et indélébile
- Apposé avant la mise sur le marché ou la mise en service du système

**Article 48(3) - Numéro de l'Organisme Notifié :**
- Si un organisme notifié est impliqué dans l'évaluation de conformité → le numéro d'identification apparaît à côté du marquage CE

**Article 48(4) - Marquage Numérique :**
- Systèmes d'IA sans interface physique → marquage CE dans la documentation accompagnante ou l'interface numérique
- Accessible aux déployeurs et aux autorités

**Article 48(5) - Interdiction de Marquages Trompeurs :**
- D'autres marquages sont autorisés s'ils ne réduisent pas la visibilité/lisibilité du marquage CE
- Ne doivent pas créer de confusion avec le marquage CE

### 3.2 Règlements Complémentaires

| Règlement | Pertinence | Dispositions Clés |
|------------|-----------|----------------|
| **Règlement (CE) n° 765/2008** | Accréditation et surveillance du marché | Règles de marquage CE ; cadre des organismes notifiés |
| **Décision n° 768/2008/CE** | Cadre commun pour la commercialisation des produits | Modules d'évaluation de la conformité ; exigences de déclaration |
| **Règlement (UE) 2019/1020** | Surveillance du marché et conformité des produits | Pouvoirs des autorités ; procédures de non-conformité |
| **RGPD (UE 2016/679)** | Protection des données | Si l'IA traite des données personnelles ; protection de la vie privée dès la conception |

### 3.3 Annexes d'Évaluation de la Conformité

| Annexe | Titre | Objectif |
|-------|-------|---------|
| **Annexe IV** | Documentation Technique | Spécifie le contenu du dossier de documentation technique |
| **Annexe V** | Déclaration de Conformité UE | Modèle et contenu requis pour la Déclaration |
| **Annexe VI** | Procédure de Contrôle Interne | Évaluation basée sur le contrôle interne uniquement (sans organisme notifié) |
| **Annexe VII** | Évaluation de la Conformité avec Organisme Notifié | Exigences de la procédure d'évaluation par un tiers |
| **Annexe IX** | Système de Gestion de la Qualité | Exigences du SGQ couvrant le cycle de vie du système d'IA |

---

## 4. PARCOURS D'ÉVALUATION DE LA CONFORMITÉ

### 4.1 Arbre de Décision : Quel Parcours S'applique ?

```
DÉBUT : Système d'IA à Haut Risque Identifié
│
├─ Le système est-il un système d'identification biométrique (Annexe III Section 1) ?
│  │
│  ├─ OUI → PARCOURS OBLIGATOIRE : Annexe VII (Évaluation par un Tiers)
│  │        - Intervention d'un organisme notifié requise
│  │        - Évaluation du SGQ + Examen de la documentation technique
│  │        - Certificat de l'organisme notifié délivré
│  │        - Marquage CE avec numéro de l'organisme notifié
│  │        → Passer à la Section 4.2
│  │
│  └─ NON → Continuer
│
├─ Le système se trouve-t-il dans d'autres catégories de l'Annexe III (Sections 2-8) ?
│  │
│  ├─ OUI → CHOIX DU FOURNISSEUR :
│  │        │
│  │        ├─ OPTION A : Annexe VI (Contrôle Interne)
│  │        │   - Le fournisseur effectue sa propre évaluation
│  │        │   - Aucun organisme notifié requis
│  │        │   - Le fournisseur prépare la documentation technique
│  │        │   - Le fournisseur délivre la Déclaration de Conformité
│  │        │   - Marquage CE sans numéro d'organisme notifié
│  │        │   → Passer à la Section 4.3
│  │        │
│  │        └─ OPTION B : Annexe VII (Évaluation par un Tiers)
│  │            - Le fournisseur choisit volontairement l'intervention d'un organisme notifié
│  │            - Identique au parcours des systèmes biométriques
│  │            - Confiance accrue du marché
│  │            → Passer à la Section 4.2
│  │
│  └─ NON → Pas à haut risque ; cette procédure ne s'applique pas
│
└─ FIN : Parcours Déterminé
```

### 4.2 Parcours Annexe VII : Évaluation par un Tiers avec Organisme Notifié

**Quand Requis :**
- **Obligatoire :** Systèmes d'identification et de catégorisation biométriques (Annexe III Section 1)
- **Facultatif :** Tout autre système d'IA à haut risque (choix du fournisseur)

**Aperçu du Processus :**

```
┌────────────────────────────────────────────────────────────────┐
│      ANNEXE VII : ÉVALUATION DE CONFORMITÉ PAR UN TIERS        │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ÉTAPE 1 : ÉVALUATION DU SGQ (Article 17 + Annexe IX)         │
│  ├─ Le fournisseur établit le SGQ                              │
│  ├─ L'organisme notifié examine la documentation du SGQ        │
│  ├─ L'organisme notifié effectue un audit sur site (si nécessaire) │
│  ├─ Le fournisseur traite les non-conformités                  │
│  └─ L'organisme notifié délivre le Certificat SGQ (validité 5 ans) │
│                                                                 │
│  ÉTAPE 2 : ÉVALUATION DE LA DOCUMENTATION TECHNIQUE (Annexe IV) │
│  ├─ Le fournisseur prépare la documentation technique          │
│  ├─ L'organisme notifié examine l'exhaustivité de la documentation │
│  ├─ L'organisme notifié évalue la conformité aux exigences     │
│  ├─ Le fournisseur traite les constatations                    │
│  └─ L'organisme notifié approuve la documentation technique    │
│                                                                 │
│  ÉTAPE 3 : CERTIFICAT DE CONFORMITÉ                            │
│  ├─ L'organisme notifié délivre le Certificat de Documentation Technique UE │
│  ├─ Valable pour le système d'IA et toute modification substantielle │
│  ├─ Numéro de certificat enregistré                            │
│  └─ Certificat conservé pendant 10 ans                         │
│                                                                 │
│  ÉTAPE 4 : DÉCLARATION ET MARQUAGE CE                          │
│  ├─ Le fournisseur établit la Déclaration de Conformité UE (Annexe V) │
│  ├─ Le fournisseur appose le marquage CE                       │
│  ├─ Le marquage CE inclut le numéro d'identification de l'organisme notifié │
│  └─ Le système peut être mis sur le marché                     │
│                                                                 │
│  EN CONTINU : SURVEILLANCE                                      │
│  ├─ L'organisme notifié effectue une surveillance périodique (annuelle) │
│  ├─ Le fournisseur notifie les modifications substantielles    │
│  ├─ Le fournisseur maintient l'efficacité du SGQ               │
│  └─ Le certificat peut être suspendu/retiré en cas de non-conformité │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Caractéristiques Clés :**
- **Durée :** 6-12 mois typique
- **Coût :** 50 000-200 000 € (dépend de la complexité du système et de l'organisme notifié)
- **En Continu :** Audits de surveillance annuels requis
- **Validité du Certificat :** 5 ans (certificat SGQ)
- **Confiance du Marché :** Élevée (vérifiée par un tiers)

### 4.3 Parcours Annexe VI : Contrôle Interne

**Quand Autorisé :**
- Systèmes d'IA à haut risque **autres que** l'identification biométrique (Annexe III Sections 2-8)
- Choix du fournisseur (alternative à l'Annexe VII)

**Aperçu du Processus :**

```
┌────────────────────────────────────────────────────────────────┐
│            ANNEXE VI : PROCÉDURE DE CONTRÔLE INTERNE           │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ÉTAPE 1 : ÉTABLISSEMENT DU SGQ (Article 17 + Annexe IX)      │
│  ├─ Le fournisseur établit et documente le SGQ                 │
│  ├─ Le fournisseur effectue un audit interne du SGQ            │
│  ├─ Le fournisseur assure l'efficacité du SGQ                  │
│  └─ AUCUNE ÉVALUATION PAR UN ORGANISME NOTIFIÉ                 │
│                                                                 │
│  ÉTAPE 2 : PRÉPARATION DE LA DOCUMENTATION TECHNIQUE (Annexe IV) │
│  ├─ Le fournisseur prépare la documentation technique complète │
│  ├─ Le fournisseur effectue un examen technique interne        │
│  ├─ Le fournisseur vérifie la conformité à toutes les exigences │
│  └─ AUCUN EXAMEN PAR UN ORGANISME NOTIFIÉ                      │
│                                                                 │
│  ÉTAPE 3 : VÉRIFICATION DE LA CONFORMITÉ                       │
│  ├─ Le fournisseur vérifie que le système d'IA est conforme    │
│  ├─ Le fournisseur effectue les tests et la validation         │
│  ├─ Le fournisseur documente les preuves de conformité         │
│  └─ Vérification interne uniquement                            │
│                                                                 │
│  ÉTAPE 4 : DÉCLARATION ET MARQUAGE CE                          │
│  ├─ Le fournisseur établit la Déclaration de Conformité UE (Annexe V) │
│  ├─ Le fournisseur appose le marquage CE                       │
│  ├─ Marquage CE SANS numéro d'organisme notifié                │
│  └─ Le système peut être mis sur le marché                     │
│                                                                 │
│  EN CONTINU : MAINTENANCE                                       │
│  ├─ Le fournisseur maintient la documentation technique (10 ans) │
│  ├─ Le fournisseur maintient l'efficacité du SGQ               │
│  ├─ Le fournisseur met à jour en cas de modifications substantielles │
│  └─ Soumis à la surveillance du marché par les autorités       │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Caractéristiques Clés :**
- **Durée :** 3-6 mois typique
- **Coût :** Coûts internes uniquement (10 000-50 000 € estimés)
- **En Continu :** Pas d'audits de surveillance (mais surveillance du marché possible)
- **Certificat :** Aucun (auto-déclaration)
- **Confiance du Marché :** Plus faible (auto-évaluée)

### 4.4 Facteurs de Décision pour la Sélection du Parcours

| Facteur | Annexe VI (Interne) | Annexe VII (Organisme Notifié) |
|--------|---------------------|---------------------------|
| **Exigence Légale** | Facultatif (sauf Annexe III-1) | Obligatoire pour Annexe III-1 ; facultatif sinon |
| **Confiance du Marché** | Plus faible (auto-certifié) | Plus élevée (vérifiée par un tiers) |
| **Délai de Mise sur le Marché** | Plus rapide (3-6 mois) | Plus lent (6-12 mois) |
| **Coût** | Plus faible (10K-50K €) | Plus élevé (50K-200K+ €) |
| **Examen Réglementaire** | Plus élevé (surveillance du marché) | Plus faible (pré-certifié) |
| **Avantage Concurrentiel** | Plus faible | Plus élevé (différenciation) |
| **Risque de Responsabilité** | Plus élevé (responsabilité unique) | Plus faible (partagé avec l'organisme notifié) |
| **Préférence Client** | Variable | Souvent préférée pour les systèmes critiques |
| **Reconnaissance Internationale** | Plus faible | Plus élevée (organisme notifié connu) |

### 4.5 Matrice de Recommandation pour la Sélection du Parcours

| Caractéristiques du Système d'IA | Parcours Recommandé | Justification |
|---------------------------|---------------------|-----------|
| Identification biométrique | **Annexe VII (Obligatoire)** | Exigence légale |
| Criticité de sécurité élevée | **Annexe VII** | Confiance du marché ; réduction de la responsabilité |
| Clients entreprises B2B | **Annexe VII** | Préférence client ; exigences d'achat |
| Déploiement secteur public | **Annexe VII** | Attentes réglementaires ; transparence |
| Marchés internationaux | **Annexe VII** | Reconnaissance plus large |
| Startup avec budget limité | **Annexe VI** | Contraintes de coût ; délai de mise sur le marché plus rapide |
| Système de faible complexité | **Annexe VI** | Suffisant pour la conformité |
| SGQ interne établi | **Annexe VI** | Tirer parti des capacités existantes |

---

## 5. PROCÉDURE ÉTAPE PAR ÉTAPE

### PHASE 1 : PLANIFICATION DE L'ÉVALUATION

#### Étape 1.1 : Lancer la Planification de l'Évaluation de la Conformité (Contrôle CA-001)

**Quand :** Après que le système d'IA a été classifié comme à haut risque et est prêt pour l'évaluation de la conformité

**Qui :** Responsable de l'Évaluation de la Conformité + Propriétaire du Système d'IA

**Base Réglementaire :** Article 43 (évaluation de conformité requise) ; Annexe VI/VII (exigences de processus)

**Comment :**

1. **Vérifier les Prérequis**
   - Confirmer que le système d'IA est classifié comme à haut risque (selon PROC-AI-CLS-001)
   - Vérifier que la classification est documentée et approuvée
   - Confirmer que le développement du système d'IA est suffisamment mature pour l'évaluation
   - Vérifier que le système de gestion de la qualité est opérationnel (selon PROC-AI-QMS-001)
   - Vérifier que la préparation de la documentation technique a commencé (selon PROC-AI-DOC-001)

   **Critères de Passage :**
   - ✅ Classification à haut risque documentée et approuvée
   - ✅ Système d'IA au minimum 80% développé
   - ✅ SGQ opérationnel et documenté
   - ✅ Documentation technique complète à 50% ou plus
   - ✅ Gestion des risques terminée (selon PROC-AI-RM-001)

2. **Déterminer le Parcours d'Évaluation de la Conformité**
   - Utiliser l'Arbre de Décision de la Section 4.1
   - Vérifier si le système se trouve dans l'Annexe III Section 1 (identification biométrique)
     - Si OUI → **Annexe VII obligatoire**
     - Si NON → Choix du fournisseur entre **Annexe VI** ou **Annexe VII**
   - Documenter la sélection du parcours avec justification
   - Utiliser les Facteurs de Décision pour la Sélection du Parcours (Section 4.4)
   - Considérer la matrice de recommandation (Section 4.5)

   **Documentation :**
   - Compléter le Formulaire de Sélection du Parcours d'Évaluation de la Conformité (FORM-CA-001)
   - Documenter les facteurs de décision et la justification
   - Obtenir l'approbation du Directeur de la Conformité
   - Si Annexe VII sélectionnée : Documenter les critères de sélection de l'organisme notifié

3. **Établir le Calendrier d'Évaluation**
   - Créer un calendrier de projet détaillé avec jalons
   - Calendriers typiques :
     - **Annexe VI :** 12-24 semaines
     - **Annexe VII :** 24-48 semaines (inclut les délais de l'organisme notifié)
   - Jalons clés :
     - Achèvement de la documentation technique
     - Examen de préparation du SGQ
     - Achèvement des tests et de la validation
     - Engagement de l'organisme notifié (si Annexe VII)
     - Date limite de résolution des non-conformités
     - Date cible de la Déclaration de Conformité
     - Date cible de mise sur le marché

4. **Allouer les Ressources**
   - Identifier les membres de l'équipe d'évaluation
   - Attribuer les rôles et responsabilités
   - Allouer le budget :
     - **Annexe VI :** Coûts internes (personnel, tests, documentation)
     - **Annexe VII :** Ajouter les frais de l'organisme notifié (50K-200K+ €)
   - Réserver le budget de consultant externe si nécessaire
   - Allouer les ressources et environnements de test

5. **Effectuer l'Évaluation de Préparation**
   - Évaluer l'état actuel par rapport aux exigences de conformité
   - Identifier les lacunes dans :
     - Documentation technique (liste de contrôle Annexe IV)
     - Mise en œuvre du SGQ (exigences Annexe IX)
     - Tests et validation (exigences Article 15)
     - Gestion des risques (exigences Article 9)
     - Gouvernance des données (exigences Article 10)
     - Transparence (exigences Article 13)
   - Estimer l'effort pour combler les lacunes
   - Prioriser les activités de comblement des lacunes

6. **Créer le Plan d'Évaluation de la Conformité**
   - Documenter le plan d'évaluation complet
   - Inclure :
     - Sélection du parcours et justification
     - Portée et objectifs de l'évaluation
     - Calendrier et jalons
     - Allocation des ressources
     - Plan d'action de comblement des lacunes
     - Registre des risques pour le projet d'évaluation
     - Plan de communication
     - Procédures d'escalade
   - Utiliser le modèle : Plan d'Évaluation de la Conformité (FORM-CA-002)

7. **Obtenir l'Approbation**
   - Présenter le plan d'évaluation au Comité de Gouvernance IA
   - Examiner le budget et les exigences de ressources
   - Confirmer la sélection du parcours
   - Obtenir l'approbation formelle pour procéder
   - Documenter l'approbation et communiquer à l'équipe

**Preuves Requises :**
- Formulaire de Sélection du Parcours d'Évaluation de la Conformité (FORM-CA-001)
- Rapport de Préparation à l'Évaluation de la Conformité (RPT-CA-001)
- Plan d'Évaluation de la Conformité (FORM-CA-002)
- Rapport d'Analyse des Lacunes (RPT-CA-002)
- Approbation du Comité de Gouvernance IA (procès-verbal de réunion)

**Timing :** 2-4 semaines

**Vérification de Qualité :**
- ✅ Sélection du parcours documentée avec justification claire
- ✅ Calendrier réaliste et inclut une marge pour les retards imprévus
- ✅ Budget approuvé et alloué
- ✅ Tous les prérequis satisfaits
- ✅ Analyse des lacunes complète et plan d'action défini

---

#### Étape 1.2 : Établir la Gouvernance de l'Évaluation (Contrôle CA-001)

**Quand :** Immédiatement après l'approbation du plan d'évaluation

**Qui :** Responsable de l'Évaluation de la Conformité

**Comment :**

1. **Créer la Structure de Gouvernance de l'Évaluation**
   - Établir le Comité de Pilotage de l'Évaluation de la Conformité
   - Membres :
     - Responsable de l'Évaluation de la Conformité (Président)
     - Propriétaire du Système d'IA
     - Responsable du SGQ
     - Responsable de la Documentation Technique
     - Responsable des Tests et de la Validation
     - Conseil Juridique
     - Directeur de la Conformité
   - Fréquence des réunions : Hebdomadaire pendant l'évaluation active ; bihebdomadaire pendant l'examen de l'organisme notifié

2. **Définir les Protocoles de Communication**
   - Rapports d'état hebdomadaires au Comité de Gouvernance IA
   - Procédures d'escalade pour :
     - Retards de calendrier > 2 semaines
     - Dépassements budgétaires > 10%
     - Non-conformités critiques identifiées
     - Problèmes avec l'organisme notifié (le cas échéant)
   - Plan de communication avec les parties prenantes
   - Responsable de la communication avec l'organisme notifié (si Annexe VII)

3. **Établir le Suivi des Problèmes**
   - Mettre en place un système de suivi des problèmes d'évaluation de la conformité
   - Catégories de problèmes :
     - Lacunes de documentation technique
     - Déficiences du SGQ
     - Échecs de tests
     - Non-conformités identifiées
     - Constatations de l'organisme notifié
   - Attribuer les niveaux de gravité :
     - **Critique :** Bloque l'évaluation de conformité
     - **Élevée :** Risque de retard significatif
     - **Moyenne :** Retard mineur possible
     - **Faible :** Aucun impact sur le calendrier
   - Suivre la résolution et la clôture des problèmes

4. **Créer le Tableau de Bord d'Évaluation**
   - Visibilité en temps réel de l'avancement de l'évaluation
   - Métriques clés :
     - % Documentation technique complète
     - % Exigences du SGQ satisfaites
     - % Tests terminés
     - Problèmes ouverts par gravité
     - Statut du calendrier (sur la bonne voie / à risque / retardé)
     - Utilisation du budget
   - Mise à jour hebdomadaire

**Preuves Requises :**
- Charte de Gouvernance de l'Évaluation (DOC-CA-001)
- Plan de Communication (DOC-CA-002)
- Configuration du Système de Suivi des Problèmes
- Configuration du Tableau de Bord d'Évaluation

**Timing :** 1 semaine

---

### PHASE 2 : SÉLECTION DE L'ORGANISME NOTIFIÉ

**Note :** Cette phase s'applique **uniquement si le parcours Annexe VII est sélectionné**. Passer à la Phase 3 si parcours Annexe VI.

#### Étape 2.1 : Identifier les Organismes Notifiés Candidats (Contrôle CA-002)

**Quand :** Immédiatement après confirmation du parcours Annexe VII

**Qui :** Responsable de l'Évaluation de la Conformité + Achats

**Base Réglementaire :** Article 43 (intervention de l'organisme notifié) ; Règlement (CE) n° 765/2008 (cadre des organismes notifiés)

**Comment :**

1. **Accéder à la Base de Données des Organismes Notifiés**
   - La Commission européenne maintient la base de données officielle NANDO : https://ec.europa.eu/growth/tools-databases/nando/
   - Filtrer pour les organismes notifiés accrédités pour :
     - **Règlement IA de l'UE (Règlement (UE) 2024/1689)**
     - Procédures d'évaluation de la conformité selon l'Annexe VII
   - Exporter la liste des organismes notifiés accrédités

2. **Définir les Critères de Sélection**

   | Critère | Poids | Méthode de Notation |
   |-----------|--------|----------------|
   | **Accréditation Règlement IA** | 25% | Binaire (accrédité=5, non=0) |
   | **Expertise de Domaine** | 20% | Échelle 1-5 (correspondance du domaine au secteur du système d'IA) |
   | **Présence Géographique** | 10% | Échelle 1-5 (présence locale avantageuse) |
   | **Capacité de Calendrier** | 15% | Échelle 1-5 (peut respecter les dates cibles) |
   | **Coût** | 15% | Échelle 1-5 (dans le budget) |
   | **Réputation** | 10% | Échelle 1-5 (références, historique) |
   | **Capacité Linguistique** | 5% | Échelle 1-5 (supporte les langues requises) |

   **Score Pondéré** = Somme de (Score du Critère × Poids)

3. **Créer la Liste Restreinte de Candidats**
   - Minimum 3 candidats pour comparaison
   - Maximum 5 candidats (au-delà, rendements décroissants)
   - Utiliser la Matrice de Notation des Critères de Sélection (FORM-CA-003)
   - Calculer les scores pondérés
   - Classer les candidats

4. **Effectuer un Contact Préliminaire**
   - Contacter les 3 meilleurs candidats
   - Demander :
     - Confirmation de la portée d'accréditation au Règlement IA
     - Disponibilité et estimations de calendrier
     - Estimation préliminaire des coûts (non contraignante)
     - Clients de référence (systèmes d'IA similaires)
     - Qualifications de l'auditeur principal
   - Planifier des appels d'introduction

5. **Effectuer la Diligence Raisonnable**
   - Vérifier le statut d'accréditation dans la base de données NANDO
   - Vérifier que la portée d'accréditation couvre votre type de système d'IA
   - Vérifier les suspensions ou restrictions éventuelles
   - Contacter les références :
     - Qualité de l'évaluation
     - Respect du calendrier
     - Efficacité de la communication
     - Transparence des coûts
     - Support post-certificat
   - Examiner les documents d'orientation publiés par l'organisme notifié

**Preuves Requises :**
- Liste des Organismes Notifiés Candidats (RPT-CA-003)
- Matrice de Notation des Critères de Sélection (FORM-CA-003)
- Rapport de Diligence Raisonnable (RPT-CA-004)
- Enregistrements de Vérification des Références (REC-CA-001)

**Timing :** 2-3 semaines

---

#### Étape 2.2 : Sélectionner et Engager l'Organisme Notifié (Contrôle CA-002)

**Quand :** Après achèvement de l'évaluation des candidats

**Qui :** Responsable de l'Évaluation de la Conformité + Achats + Conseil Juridique

**Comment :**

1. **Demander des Propositions Formelles**
   - Envoyer un Appel d'Offres (AO) aux 3 meilleurs candidats
   - L'AO doit inclure :
     - Description et classification du système d'IA
     - Aperçu de la documentation technique (Annexe IV)
     - Évaluation de la maturité du SGQ
     - Calendrier et jalons cibles
     - Portée de l'évaluation (SGQ + examen de la documentation technique)
     - Demande de ventilation détaillée des coûts
     - Exigences de conditions contractuelles
   - Fixer la date limite de proposition (2-3 semaines)

2. **Évaluer les Propositions**
   - Examiner les propositions par rapport aux critères de sélection
   - Facteurs d'évaluation clés :
     - **Calendrier :** Peuvent-ils respecter la date cible de mise sur le marché ?
     - **Coût :** Coût total de possession (évaluation + surveillance)
     - **Approche :** Méthodologie et rigueur de l'évaluation
     - **Équipe :** Qualifications et expérience de l'équipe d'évaluation
     - **Support :** Support continu après le certificat
   - Organiser des réunions de clarification des propositions si nécessaire
   - Mettre à jour la matrice de notation avec les données des propositions

3. **Prendre la Décision de Sélection**
   - Présenter l'analyse comparative au Directeur de la Conformité
   - Recommander l'organisme notifié sur la base de la notation pondérée
   - Obtenir l'approbation de la sélection
   - Documenter la justification de la sélection
   - Notifier les candidats sélectionnés et non sélectionnés

4. **Négocier le Contrat**
   - Conditions contractuelles clés :
     - **Portée :** Évaluation du SGQ + examen de la documentation technique
     - **Calendrier :** Jalons et livrables avec dates
     - **Coût :** Tarif fixe vs. temps et moyens ; conditions de paiement
     - **Responsabilités :** Obligations du fournisseur vs. organisme notifié
     - **Confidentialité :** NDA pour les informations techniques sensibles
     - **Responsabilité :** Limitations et indemnisation
     - **Résiliation :** Conditions et préavis
     - **Surveillance :** Fréquence et coût de l'audit de surveillance post-certificat
   - Le Conseil Juridique examine et approuve le contrat
   - Les deux parties signent

5. **Lancer l'Engagement**
   - Réunion de lancement avec l'organisme notifié
   - Ordre du jour :
     - Présentation des équipes
     - Examen de la portée et du calendrier de l'évaluation
     - Discussion de la méthodologie d'évaluation
     - Clarification des exigences documentaires
     - Établissement des protocoles de communication
     - Planification de l'audit préliminaire du SGQ (si prêt)
     - Traitement des questions et préoccupations
   - Désigner les points de contact principaux
   - Établir un mécanisme de partage de documents (portail sécurisé)

6. **Enregistrer l'Engagement**
   - Documenter la sélection et l'engagement de l'organisme notifié
   - Enregistrer le numéro d'identification de l'organisme notifié (pour le marquage CE)
   - Mettre à jour le plan d'évaluation de la conformité avec le calendrier de l'organisme notifié
   - Communiquer l'engagement à l'équipe d'évaluation
   - Mettre à jour le tableau de bord d'évaluation

**Preuves Requises :**
- Propositions des Organismes Notifiés (propositions reçues)
- Rapport de Sélection de l'Organisme Notifié (RPT-CA-005)
- Contrat de l'Organisme Notifié (accord signé)
- Procès-Verbal de Réunion de Lancement (REC-CA-002)
- Numéro d'Identification de l'Organisme Notifié (pour le marquage CE)

**Timing :** 4-6 semaines

**Vérification de Qualité :**
- ✅ Minimum 3 propositions évaluées
- ✅ Critères de sélection appliqués objectivement
- ✅ Contrat examiné et approuvé par le Conseil Juridique
- ✅ Accréditation de l'organisme notifié vérifiée dans NANDO
- ✅ Réunion de lancement effectuée et documentée

---

#### Étape 2.3 : Planifier le Calendrier d'Évaluation de l'Organisme Notifié (Contrôle CA-011)

**Quand :** Après engagement de l'organisme notifié

**Qui :** Responsable de l'Évaluation de la Conformité + Auditeur Principal de l'Organisme Notifié

**Comment :**

1. **Élaborer le Calendrier d'Évaluation Conjoint**
   - Collaborer avec l'organisme notifié pour créer un calendrier détaillé
   - Activités clés :
     - **Examen de la Documentation du SGQ** (2-4 semaines)
     - **Audit Sur Site du SGQ** (3-5 jours)
     - **Résolution des Non-Conformités du SGQ** (2-6 semaines)
     - **Délivrance du Certificat SGQ** (1-2 semaines)
     - **Soumission de la Documentation Technique** (1 semaine)
     - **Examen de la Documentation Technique** (4-8 semaines)
     - **Clarifications de la Documentation Technique** (2-4 semaines)
     - **Rapport d'Évaluation Final** (2 semaines)
     - **Délivrance du Certificat** (1 semaine)
   - Durée totale : 16-30 semaines typique

2. **Identifier les Portes de Préparation à l'Évaluation**
   - Porte de préparation du SGQ : le SGQ doit être opérationnel avant l'audit
   - Porte de préparation de la documentation technique : Complète avant soumission
   - Porte d'achèvement des tests : Tous les tests de validation terminés
   - Porte de résolution des non-conformités : Tous les problèmes critiques/élevés résolus

3. **Établir la Cadence de Communication**
   - Appels d'état hebdomadaires avec l'organisme notifié
   - Rapports d'avancement bihebdomadaires de l'organisme notifié
   - Protocole d'escalade pour les problèmes
   - Points de contact principaux des deux côtés

**Preuves Requises :**
- Calendrier d'Évaluation de l'Organisme Notifié (DOC-CA-003)
- Portes de Préparation à l'Évaluation (liste de contrôle)
- Protocole de Communication (DOC-CA-004)

**Timing :** 1-2 semaines

---

### PHASE 3 : EXAMEN DE LA DOCUMENTATION TECHNIQUE

#### Étape 3.1 : Compléter le Dossier de Documentation Technique (Contrôle CA-003, CA-012)

**Quand :** Pendant la préparation de l'évaluation (avant soumission à l'organisme notifié si Annexe VII)

**Qui :** Responsable de la Documentation Technique + Propriétaire du Système d'IA

**Base Réglementaire :** Article 11 (exigence de documentation technique) ; Annexe IV (contenu de la documentation)

**Comment :**

1. **Examiner les Exigences de l'Annexe IV**

   L'Annexe IV spécifie que la documentation technique doit contenir :

   **Section 1 : Description Générale**
   - 1.a) Nom, type, identification unique du système d'IA
   - 1.b) Nom, adresse, coordonnées du fournisseur
   - 1.c) Représentant autorisé (le cas échéant)
   - 1.d) Usage prévu du système d'IA
   - 1.e) Exigences matérielles
   - 1.f) Dépendances logicielles et versions
   - 1.g) Date de la version / publication du système d'IA

   **Section 2 : Description Détaillée**
   - 2.a) Méthodes et étapes de développement du système d'IA
   - 2.b) Spécifications de conception et architecture
   - 2.c) Composants, comment ils interagissent
   - 2.d) Ressources de calcul utilisées
   - 2.e) Modifications pertinentes apportées tout au long du cycle de vie
   - 2.f) Description du fonctionnement du système d'IA et fourniture des sorties
   - 2.g) Mesures de surveillance humaine (Article 14)
   - 2.h) Mesures de cybersécurité (Article 15)

   **Section 3 : Description Détaillée des Données**
   - 3.a) Ensembles de données d'entraînement, validation, test
   - 3.b) Sources de données et méthodologie de collecte
   - 3.c) Procédures de préparation, filtrage, étiquetage des données
   - 3.d) Évaluation de la représentativité des données
   - 3.e) Biais identifiés dans les données
   - 3.f) Procédures de gouvernance et de gestion des données (Article 10)

   **Section 4 : Évaluation du Système d'IA**
   - 4.a) Documentation de gestion des risques (Article 9)
   - 4.b) Procédures et résultats des tests (Article 15)
   - 4.c) Métriques utilisées pour mesurer les performances (Article 15)
   - 4.d) Résultats de validation sur l'ensemble de données de test
   - 4.e) Évaluation des biais et de la discrimination (Article 10(5))
   - 4.f) Évaluation de la robustesse, sécurité, cybersécurité

   **Section 5 : Système de Gestion de la Qualité**
   - 5.a) Documentation du SGQ selon l'Annexe IX
   - 5.b) Procédures de surveillance post-marché (Article 72)
   - 5.c) Procédures de signalement des incidents (Article 73)

   **Section 6 : Déclaration et Normes Harmonisées**
   - 6.a) Déclaration de Conformité UE (une fois délivrée)
   - 6.b) Normes harmonisées ou spécifications communes appliquées
   - 6.c) Justification si les normes harmonisées ne sont pas appliquées

2. **Utiliser la Liste de Contrôle de la Documentation Technique**
   - Compléter la Liste de Contrôle de Conformité à l'Annexe IV (CHK-CA-001)
   - Pour chaque exigence :
     - ✅ Complète : La documentation existe et est exhaustive
     - 🟡 Partielle : La documentation existe mais présente des lacunes
     - ❌ Manquante : La documentation n'existe pas
     - N/A : Exigence non applicable à ce système d'IA
   - Calculer l'exhaustivité : % des exigences applicables marquées comme complètes

3. **Compiler le Dossier de Documentation**
   - Organiser la documentation selon la structure de l'Annexe IV
   - Créer un index des documents maître
   - S'assurer que les renvois internes sont corrects
   - Contrôle de version : Identifier clairement les versions des documents
   - Ajouter une page de garde avec :
     - Identification du système d'IA
     - Version et date de la documentation
     - Informations sur le fournisseur
     - Avis de confidentialité
   - Utiliser le modèle : Modèle de Dossier de Documentation Technique (TMP-CA-001)

4. **Effectuer l'Examen Technique Interne**
   - Assembler l'équipe d'examen :
     - Responsable de la Documentation Technique (président)
     - Propriétaire du Système d'IA
     - Data Scientist / Ingénieur ML
     - Responsable du SGQ
     - Responsable de la Conformité
     - Conseil Juridique (pour les sections sensibles)
   - Critères d'examen :
     - **Exhaustivité :** Toutes les exigences de l'Annexe IV traitées
     - **Exactitude :** Les informations sont correctes et à jour
     - **Clarté :** La documentation est claire et compréhensible
     - **Cohérence :** Pas de contradictions ou divergences
     - **Suffisance :** Détail adéquat pour l'évaluation de conformité
   - Documenter les constatations de l'examen
   - Identifier les lacunes et attribuer les responsables pour y remédier

5. **Traiter les Lacunes de Documentation**
   - Prioriser les lacunes :
     - **Critique :** Requise pour la conformité ; problème bloquant
     - **Élevée :** Importante pour l'évaluation ; peut causer un retard
     - **Moyenne :** Souhaitable ; améliore la qualité de la documentation
     - **Faible :** Nice-to-have ; améliorations cosmétiques
   - Attribuer les responsables et dates cibles pour la résolution des lacunes
   - Suivre l'avancement dans le système de suivi des problèmes
   - Effectuer un examen de suivi lorsque les lacunes sont traitées

6. **Obtenir l'Approbation Interne**
   - Le Responsable de la Documentation Technique examine le dossier final
   - Le Directeur de la Conformité examine l'exhaustivité réglementaire
   - Le Conseil Juridique examine les aspects de responsabilité et de PI
   - Le Propriétaire du Système d'IA valide l'exactitude technique
   - Documenter l'approbation avec signatures

7. **Préparer pour la Soumission (Annexe VII) ou l'Archivage (Annexe VI)**
   - **Si Annexe VII (organisme notifié) :**
     - Télécharger sur le portail de documents sécurisé de l'organisme notifié
     - Confirmer la réception et l'exhaustivité
     - Fournir toute information supplémentaire demandée
     - Planifier le lancement de l'examen de la documentation technique
   - **Si Annexe VI (contrôle interne) :**
     - Archiver dans un système de gestion documentaire sécurisé
     - Assurer une capacité de rétention de 10 ans
     - Rendre disponible aux autorités de surveillance du marché sur demande

**Preuves Requises :**
- Dossier de Documentation Technique (selon la structure de l'Annexe IV)
- Liste de Contrôle de Conformité à l'Annexe IV (CHK-CA-001)
- Index de la Documentation Technique (liste de documents maître)
- Rapport d'Examen Technique Interne (RPT-CA-006)
- Approbation de la Documentation Technique (signatures)
- Confirmation de Soumission (si Annexe VII)

**Timing :** 8-12 semaines (peut être effectué en parallèle avec l'évaluation du SGQ)

**Vérification de Qualité :**
- ✅ Liste de contrôle Annexe IV 100% complète (toutes les exigences applicables)
- ✅ Examen interne effectué avec constatations documentées
- ✅ Toutes les lacunes critiques et élevées traitées
- ✅ Signatures d'approbation obtenues
- ✅ Contrôle de version clair et correct
- ✅ Capacité de rétention de 10 ans confirmée

---

