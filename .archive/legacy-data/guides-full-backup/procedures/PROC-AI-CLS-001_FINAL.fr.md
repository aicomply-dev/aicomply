# PROC-AI-CLS-001: Procédure de Classification des Systèmes d'IA

**ID de Procédure:** PROC-AI-CLS-001
**Nom de la Procédure:** Procédure de Classification des Systèmes d'IA
**Norme:** STD-AI-001: Norme de Classification des Systèmes d'IA
**Couvre les Contrôles:** CLS-001, CLS-002, CLS-003, CLS-004, CLS-005, CLS-006, CLS-007
**Date d'Entrée en Vigueur:** [À compléter]
**Dernière Mise à Jour:** [À compléter]
**Date de Révision Suivante:** [À compléter]
**Statut d'Approbation:** [Brouillon/Approuvé]

---

## TABLE DES MATIÈRES

1. [Objectif et Portée](#1-objectif-et-portée)
2. [Rôles et Responsabilités](#2-rôles-et-responsabilités)
3. [Cadre de Classification](#3-cadre-de-classification)
4. [Procédure Étape par Étape](#4-procédure-étape-par-étape)
5. [Classification de l'IA à Usage Général (IAUG)](#5-classification-de-lia-à-usage-général-iaug)
6. [Mécanismes de Contrôle](#6-mécanismes-de-contrôle)
7. [ICP et Indicateurs](#7-icp-et-indicateurs)
8. [Exigences en Matière de Documentation](#8-exigences-en-matière-de-documentation)
9. [Examen et Audit](#9-examen-et-audit)
10. [Gestion de la Non-Conformité](#10-gestion-de-la-non-conformité)
11. [Documents Associés](#11-documents-associés)
12. [Annexes](#12-annexes)

---

## 1. OBJECTIF ET PORTÉE

### 1.1 Objectif

Cette procédure établit le processus obligatoire, étape par étape, pour classer tous les systèmes d'IA selon les catégories de risque du Règlement sur l'IA de l'UE (interdites, à haut risque, à risque limité, à risque minimal, et IA à Usage Général). Son objectif est de garantir que chaque système d'IA est classé avec précision avant le début du développement et réévalué tout au long de son cycle de vie, garantissant que les obligations de conformité appropriées sont appliquées de manière cohérente et correcte.

### 1.2 Portée

Cette procédure s'applique à:
- Tous les systèmes répondant à la définition d'un "système d'IA" selon le Règlement sur l'IA de l'UE
- Tous les modèles d'IA à Usage Général (IAUG) selon les articles 51-56
- Tous les systèmes d'IA à n'importe quelle étape du cycle de vie (conception, développement, déploiement, exploitation)
- Tous les systèmes d'IA développés en interne ou par des tiers au nom de l'organisation
- Tous les systèmes d'IA intégrés à partir de fournisseurs d'IAUG en amont

Cette procédure ne s'applique pas à:
- Les systèmes d'IA utilisés exclusivement pour une activité personnelle et non professionnelle
- Les systèmes d'IA utilisés exclusivement à des fins militaires, de défense ou de sécurité nationale

### 1.3 Base Réglementaire

Cette procédure met en œuvre:
- **Articles 5, 6, 7, 50 du Règlement sur l'IA de l'UE:** Pratiques interdites, classification à haut risque, transparence à risque limité
- **Articles 51-56 du Règlement sur l'IA de l'UE:** Exigences relatives aux modèles d'IA à Usage Général
- **Annexe I:** Produits couverts par la législation d'harmonisation de l'Union
- **Annexe III:** Cas d'usage de systèmes d'IA à haut risque

### 1.4 Propriétaire de la Procédure et Contacts

| Rôle | Nom | Titre | Contact |
|---|---|---|---|
| **Propriétaire de la Procédure** | [Nom] | Responsable du Programme Règlement sur l'IA | [Email/Téléphone] |
| **Escalade** | [Nom] | Directeur Juridique | [Email/Téléphone] |
| **Gouvernance** | [Nom] | Président du Comité de Gouvernance de l'IA | [Email/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles Clés

| Rôle | Responsabilité | Autorité |
|---|---|---|
| **Responsable du Programme Règlement sur l'IA** | Détient et exécute le processus de classification; maintient le Registre des Systèmes d'IA; fournit l'approbation finale des classifications | Approuver les classifications finales; escalader les cas limites au Comité de Gouvernance de l'IA |
| **Propriétaire du Système d'IA** | Lance les demandes de classification; fournit toutes les informations nécessaires; met en œuvre les contrôles requis en fonction de la classification | Proposer la classification initiale; contester les décisions de classification |
| **Directeur Juridique (DJ)** | Fournit une interprétation juridique contraignante du Règlement sur l'IA, en particulier pour les pratiques interdites et les définitions à haut risque | Opposer un veto à une classification proposée pour des raisons juridiques; imposer une reclassification |
| **Comité de Gouvernance de l'IA** | Examine et approuve toutes les classifications à haut risque; résout les classifications escaladées ou contestées | Approuver les classifications à haut risque; bloquer le déploiement de systèmes mal classés |
| **Responsable de Conformité IAUG** | Évalue le risque systémique des modèles IAUG; gère les obligations spécifiques à l'IAUG | Classer les modèles IAUG; approuver la documentation de conformité IAUG |

### 2.2 Matrice RACI

| Activité | Responsable du Programme IA | Propriétaire du Système IA | DJ | Comité de Gouv. IA | Responsable IAUG |
|---|---|---|---|---|---|
| Filtrage des Pratiques Interdites | A | R | C | I | I |
| Évaluation Annexe I à Haut Risque | A | R | C | I | I |
| Évaluation Annexe III à Haut Risque | A | R | C | I | I |
| Classification des Modèles IAUG | C | R | I | I | A |
| Décision de Classification Finale | R | C | C | A (pour Haut Risque) | C |
| Maintenance du Registre des Systèmes IA | R | C | I | I | C |
| Évaluation de Reclassification | A | R | C | C | C |

**Légende:** A=Responsable (Accountable), R=Réalisateur (Responsible), C=Consulté, I=Informé

---

## 3. CADRE DE CLASSIFICATION

### 3.1 Flux de Décision de Classification

Le processus de classification suit un arbre de décision strict et séquentiel pour déterminer le niveau de risque d'un système d'IA.

```
┌────────────────────────────────────────────────────────────────────┐
│           ARBRE DE DÉCISION DE CLASSIFICATION DES SYSTÈMES D'IA    │
└────────────────────────────────────────────────────────────────────┘

DÉBUT: Nouveau Système d'IA ou Modèle IAUG
│
├─ Étape 1: S'agit-il d'un modèle IAUG? (Articles 51-56)
│  ├─ OUI → Passer à la Section 5 (Classification IAUG)
│  └─ NON → Continuer à l'Étape 2
│
├─ Étape 2: Filtrage des Pratiques Interdites (Article 5)
│  ├─ OUI → ARRÊT - INTERDIT (Ne peut pas développer/déployer)
│  └─ NON → Continuer à l'Étape 3
│
├─ Étape 3: Haut Risque Annexe I? (Article 6)
│  ├─ OUI → CLASSÉ: HAUT RISQUE
│  └─ NON → Continuer à l'Étape 4
│
├─ Étape 4: Haut Risque Annexe III? (Article 7)
│  ├─ OUI → Continuer à l'Étape 5
│  └─ NON → Continuer à l'Étape 6
│
├─ Étape 5: Évaluation du Risque Significatif de Préjudice
│  ├─ OUI → CLASSÉ: HAUT RISQUE
│  └─ NON → Continuer à l'Étape 6
│
├─ Étape 6: Obligations de Transparence à Risque Limité? (Article 50)
│  ├─ OUI → CLASSÉ: RISQUE LIMITÉ
│  └─ NON → CLASSÉ: RISQUE MINIMAL
│
FIN: Appliquer les Contrôles Spécifiques à la Classification
```

### 3.2 Intégration dans le Cycle de Vie

La classification n'est pas un événement ponctuel. Elle est intégrée dans le cycle de vie du système d'IA.

| Phase du Cycle de Vie | Activités de Classification | Critères de Validation |
|---|---|---|
| **1. Conception** | Évaluation de classification initiale effectuée; obligations des fournisseurs IAUG évaluées | Classification approuvée avant le début du développement |
| **2. Développement** | Surveillance des changements pouvant impacter la classification | Aucun changement déclenchant une reclassification |
| **3. Déploiement** | Vérification finale de la classification avant le déploiement | Classification finale confirmée et documentée |
| **4. Exploitation** | Examen annuel de reclassification; reclassification basée sur des déclencheurs en cas de modification substantielle | Examen annuel terminé; reclassification effectuée si nécessaire |

### 3.3 Catégories de Risque et Obligations

| Classification | Niveau de Risque | Obligations de Conformité | Contrôles Requis | Surveillance |
|---|---|---|---|---|
| **Interdite** | Extrême | Le projet doit être arrêté; aucun déploiement autorisé | Aucun - le système ne peut pas être développé | N/A |
| **Haut Risque** | Élevé | Conformité complète au Règlement sur l'IA de l'UE; documentation technique; évaluation de conformité; enregistrement | Tous les contrôles dans STD-AI-002 à STD-AI-014 | Surveillance continue; examen annuel |
| **Risque Limité** | Moyen | Obligations de transparence; exigences de divulgation | Contrôles de transparence; notification des utilisateurs | Examen périodique (annuel) |
| **Risque Minimal** | Faible | Conformité générale; bonnes pratiques recommandées | Gouvernance de base; documentation | Selon les besoins |
| **IAUG (Standard)** | Variable | Transparence; documentation technique; conformité au droit d'auteur | Fiches de modèle; documentation; instructions | Examen périodique |
| **IAUG (Risque Systémique)** | Élevé | Obligations renforcées; évaluation des risques systémiques; tests contradictoires | Tous les contrôles IAUG standard + tests renforcés | Surveillance continue |

---

## 4. PROCÉDURE ÉTAPE PAR ÉTAPE

### PHASE 1: CLASSIFICATION INITIALE

#### **Étape 1.1: Filtrage des Pratiques Interdites (Contrôle CLS-001)**

**Quand:** Avant le début de tout travail de développement sur une nouvelle proposition de système d'IA

**Qui:** Propriétaire du Système d'IA, avec examen obligatoire par le Responsable du Programme Règlement sur l'IA et le DJ

**Comment:**

1. **Initier la Demande de Classification**
   - Le Propriétaire du Système d'IA soumet une demande de classification via le Formulaire de Demande de Classification de Système d'IA (TMP-AI-CLS-001)
   - Le formulaire comprend: nom du système, objectif prévu, description du cas d'usage, utilisateurs cibles et contexte de déploiement
   - Le Responsable du Programme Règlement sur l'IA attribue un ID de classification unique (par ex., CLS-2025-001)
   - La demande de classification est enregistrée dans le Registre des Systèmes d'IA

2. **Filtrer les Pratiques Interdites**
   - Le Propriétaire du Système d'IA complète le **Formulaire d'Évaluation des Pratiques Interdites** (partie de TMP-AI-CLS-001)
   - Le formulaire nécessite une évaluation détaillée par rapport aux 8 pratiques interdites définies à l'article 5(1) du Règlement:

   **Pratiques d'IA Interdites selon l'Article 5(1):**

   a) **Techniques subliminales:** Systèmes d'IA qui déploient des techniques subliminales au-delà de la conscience d'une personne pour déformer matériellement le comportement d'une manière qui cause ou est susceptible de causer un préjudice

   b) **Exploitation de vulnérabilités:** Systèmes d'IA qui exploitent les vulnérabilités de groupes spécifiques (âge, handicap) pour déformer matériellement le comportement d'une manière qui cause ou est susceptible de causer un préjudice

   c) **Notation sociale par les autorités publiques:** Systèmes d'IA utilisés par les autorités publiques ou en leur nom à des fins de notation sociale

   d) **Identification biométrique à distance en temps réel dans des espaces accessibles au public:** À des fins répressives, sauf dans des cas strictement limités (prévention d'une menace immédiate, identification de victimes, infractions pénales graves)

   e) **Systèmes de catégorisation biométrique déduisant des attributs sensibles:** Systèmes d'IA qui déduisent la race, les opinions politiques, l'appartenance syndicale, les convictions religieuses ou philosophiques, la vie sexuelle ou l'orientation sexuelle (avec exceptions pour les forces de l'ordre)

   f) **Reconnaissance des émotions sur le lieu de travail/dans l'éducation:** Systèmes d'IA de reconnaissance des émotions sur les lieux de travail et dans les établissements d'enseignement (avec exceptions pour des raisons médicales ou de sécurité)

   g) **Collecte de bases de données de reconnaissance faciale:** Systèmes d'IA qui créent ou étendent des bases de données de reconnaissance faciale par la collecte non ciblée d'images faciales sur Internet ou à partir de séquences de vidéosurveillance

   h) **Évaluation des risques d'infractions pénales:** Systèmes d'IA qui évaluent le risque que des personnes physiques commettent des infractions pénales uniquement sur la base du profilage ou de traits de personnalité (avec exceptions pour l'augmentation de l'évaluation humaine)

   - Pour chaque pratique interdite, le Propriétaire du Système d'IA fournit: si le système utilise cette pratique, justification en cas d'incertitude, et preuves à l'appui

3. **Examiner l'Évaluation**
   - Le Responsable du Programme Règlement sur l'IA examine le formulaire complété pour l'exactitude, l'exhaustivité et la qualité de la justification
   - **Point de Décision:** Si le système relève potentiellement d'une pratique interdite, le DJ doit être sollicité pour un avis juridique contraignant. Le projet est mis en pause dans l'attente de cet avis
   - Si le DJ confirme que le système est une pratique interdite, tous les travaux sur le projet sont **immédiatement et définitivement arrêtés**
   - La décision et sa base juridique sont enregistrées dans le Registre des Systèmes d'IA avec le statut de classification "INTERDIT - NE PAS DÉVELOPPER"

4. **Documenter les Résultats du Filtrage**
   - Compléter le Rapport de Filtrage des Pratiques Interdites (REC-AI-CLS-001)
   - Si le système passe le filtrage, passer à l'Étape 1.2
   - Si le système échoue au filtrage, documenter l'interdiction et notifier toutes les parties prenantes

**Preuves Requises:**
- Formulaire d'Évaluation des Pratiques Interdites complété et signé
- Avis juridique contraignant du DJ pour tout cas limite ou confirmé
- Entrée dans le Registre des Systèmes d'IA avec détermination finale et justification
- Rapport de Filtrage des Pratiques Interdites (REC-AI-CLS-001)

**Délai:** 1 semaine à partir de la nouvelle proposition de système

**Contrôle Qualité:**
- 100% des nouveaux systèmes d'IA sont filtrés avant l'allocation de toute ressource de développement
- L'approbation du DJ est obtenue pour tous les cas qui ne sont pas clairement et sans ambiguïté en dehors des catégories interdites
- La documentation est complète et défendable lors d'un audit

---

#### **Étape 1.2: Évaluation Annexe I à Haut Risque (Contrôle CLS-002)**

**Quand:** Immédiatement après avoir passé le filtrage des pratiques interdites

**Qui:** Propriétaire du Système d'IA, examiné par le Responsable du Programme Règlement sur l'IA

**Comment:**

1. **Évaluer la Classification du Produit**
   - Le Propriétaire du Système d'IA complète le **Formulaire d'Évaluation Annexe I** (partie de TMP-AI-CLS-001)
   - Cela nécessite d'effectuer le test en trois parties pour la classification Annexe I:
     1. Le système d'IA est-il destiné à être utilisé comme composant de sécurité d'un produit, ou est-il lui-même un produit, couvert par la législation d'harmonisation de l'Union énumérée à l'Annexe I (par ex., machines, jouets, dispositifs médicaux)?
     2. Le produit est-il soumis à une évaluation de conformité par un tiers relative aux risques pour la santé et la sécurité en vertu de la législation énumérée à l'Annexe I?
     3. Le fonctionnement du système d'IA affecte-t-il directement la sécurité du produit?

2. **Déterminer le Statut de Composant de Sécurité**
   - Examiner les spécifications techniques et les exigences de sécurité du produit
   - Évaluer si le système d'IA est un "composant de sécurité" (c'est-à-dire que sa défaillance pourrait directement causer un préjudice)
   - Documenter le raisonnement avec des références spécifiques aux spécifications du produit
   - Obtenir la confirmation du Responsable de Produit et du Responsable Technique

3. **Vérifier la Législation Applicable**
   - Identifier la législation Annexe I pertinente (par ex., Directive Machines 2006/42/CE, Règlement Dispositifs Médicaux 2017/745)
   - Confirmer que le produit est soumis à une évaluation de conformité par un tiers
   - Documenter la législation applicable et les exigences d'évaluation de conformité

4. **Prendre la Décision de Classification**
   - **Point de Décision:** Si la réponse aux trois questions est OUI, le système est classé comme **Haut Risque (Annexe I)**
   - Le processus s'arrête ici, la classification est enregistrée, et le Comité de Gouvernance de l'IA est notifié
   - Si une réponse est NON, passer à l'Étape 1.3 (Évaluation Annexe III)

5. **Documenter l'Évaluation**
   - Compléter le Rapport d'Évaluation Annexe I (REC-AI-CLS-002)
   - Inclure les résultats du test en trois parties, les preuves à l'appui et la décision de classification finale

**Preuves Requises:**
- Formulaire d'Évaluation Annexe I complété et signé
- Identification claire de la législation Annexe I pertinente
- Spécifications techniques du produit et documentation de sécurité
- Justification de la détermination de "composant de sécurité" le cas échéant
- Rapport d'Évaluation Annexe I (REC-AI-CLS-002)

**Délai:** 1-2 jours

**Contrôle Qualité:**
- La détermination de "composant de sécurité" est bien documentée et défendable, avec référence aux spécifications techniques du produit
- Les trois parties du test sont clairement répondues avec des preuves à l'appui

---

#### **Étape 1.3: Évaluation Annexe III à Haut Risque (Contrôle CLS-003)**

**Quand:** Si le système n'est pas classé comme haut risque selon l'Annexe I

**Qui:** Propriétaire du Système d'IA, examiné par le Responsable du Programme Règlement sur l'IA

**Comment:**

1. **Évaluer la Classification du Cas d'Usage**
   - Le Propriétaire du Système d'IA complète le **Formulaire d'Évaluation Annexe III** (partie de TMP-AI-CLS-001)
   - Cela nécessite d'évaluer si l'objectif prévu du système d'IA relève de l'un des 8 cas d'usage à haut risque définis à l'Annexe III:

   **Cas d'Usage à Haut Risque Annexe III:**

   1. **Identification et catégorisation biométriques de personnes physiques**
      - Systèmes d'identification biométrique à distance
      - Systèmes de catégorisation biométrique

   2. **Gestion et exploitation d'infrastructures critiques**
      - Systèmes d'IA pour la gestion du trafic et de l'approvisionnement en eau/gaz/chauffage/électricité

   3. **Éducation et formation professionnelle**
      - Systèmes d'IA pour l'admission, l'évaluation des résultats d'apprentissage
      - Systèmes d'IA pour la surveillance et la détection de comportements interdits pendant les examens

   4. **Emploi, gestion des travailleurs et accès au travail indépendant**
      - Systèmes d'IA pour le recrutement, le tri, le filtrage, l'évaluation
      - Systèmes d'IA pour l'attribution des tâches, la surveillance, l'évaluation des performances

   5. **Accès aux services privés et publics essentiels et aux prestations**
      - Systèmes d'IA pour l'évaluation de la solvabilité
      - Systèmes d'IA pour l'évaluation des risques et la tarification de l'assurance vie/santé
      - Systèmes d'IA pour l'admissibilité aux prestations/services d'aide publique
      - Systèmes d'IA pour la répartition et la priorisation des services d'urgence

   6. **Forces de l'ordre**
      - Systèmes d'IA pour l'évaluation des risques de victimes potentielles d'infractions pénales
      - Systèmes d'IA de polygraphe et outils similaires
      - Systèmes d'IA pour l'évaluation de la fiabilité des preuves
      - Systèmes d'IA pour l'analyse, la détection, l'enquête, la poursuite criminelle
      - Systèmes d'IA pour la gestion de l'immigration, de l'asile, du contrôle aux frontières

   7. **Gestion de l'immigration, de l'asile et du contrôle aux frontières**
      - Systèmes d'IA de polygraphe et outils similaires
      - Systèmes d'IA pour l'évaluation des risques d'immigration irrégulière ou de risques pour la sécurité/santé
      - Systèmes d'IA pour l'examen des demandes d'asile
      - Systèmes d'IA pour la détection de personnes à des fins répressives

   8. **Administration de la justice et processus démocratiques**
      - Systèmes d'IA pour assister les autorités judiciaires dans la recherche et l'interprétation des faits et du droit

2. **Correspondre à la Catégorie Annexe III**
   - Pour chaque catégorie Annexe III, évaluer si l'objectif prévu du système d'IA relève de cette catégorie
   - Documenter la correspondance avec référence spécifique à l'objectif prévu et au cas d'usage du système
   - Obtenir la confirmation du Responsable de Produit et des experts en la matière pertinents

3. **Prendre la Décision de Classification**
   - **Point de Décision:** Si l'objectif prévu du système relève clairement de l'une de ces catégories, passer à l'Étape 1.4 (Évaluation du Risque Significatif de Préjudice)
   - Sinon, passer à l'Étape 1.5 (Évaluation à Risque Limité)

4. **Documenter l'Évaluation**
   - Compléter le Rapport d'Évaluation Annexe III (REC-AI-CLS-003)
   - Inclure la correspondance avec les catégories Annexe III, les preuves à l'appui et la décision de procéder

**Preuves Requises:**
- Formulaire d'Évaluation Annexe III complété et signé
- Correspondance claire de l'objectif prévu du système d'IA à une catégorie et sous-catégorie Annexe III spécifique
- Rapport d'Évaluation Annexe III (REC-AI-CLS-003)

**Délai:** 1-2 jours

**Contrôle Qualité:**
- La correspondance avec une catégorie Annexe III est précise, spécifique et justifiable en fonction de la déclaration d'objectif prévu du système
- L'évaluation est approfondie et prend en compte tous les aspects pertinents du cas d'usage

---

#### **Étape 1.4: Évaluation du Risque Significatif de Préjudice (Contrôle CLS-004)**

**Quand:** Uniquement pour les systèmes qui relèvent d'une catégorie Annexe III

**Qui:** Propriétaire du Système d'IA, examiné par le Responsable du Programme Règlement sur l'IA

**Comment:**

1. **Évaluer le Potentiel de Préjudice**
   - Pour un système Annexe III, une évaluation formelle doit être menée pour déterminer s'il présente un **risque significatif de préjudice** pour la santé, la sécurité ou les droits fondamentaux des personnes physiques
   - Le Propriétaire du Système d'IA complète le **Formulaire d'Évaluation du Risque Significatif de Préjudice** (partie de TMP-AI-CLS-001)

2. **Évaluer les Facteurs de Risque**
   - L'évaluation doit prendre en compte:
     - **Intensité:** La gravité du préjudice potentiel (par ex., blessure physique, perte financière, discrimination)
     - **Portée:** Le nombre de personnes qui pourraient être affectées
     - **Vulnérabilité:** La vulnérabilité des personnes ou groupes susceptibles d'être affectés (par ex., enfants, personnes âgées, personnes handicapées)
     - **Réversibilité:** Si le préjudice est réversible ou permanent
     - **Probabilité:** La probabilité que le préjudice se produise

3. **Effectuer l'Analyse de Risque**
   - Documenter des scénarios spécifiques où le système pourrait causer un préjudice
   - Évaluer la probabilité et la gravité de chaque scénario
   - Considérer les préjudices directs et indirects
   - Évaluer la conception du système et les mesures de protection qui pourraient atténuer le préjudice

4. **Prendre la Décision de Classification**
   - **Point de Décision:** Si l'évaluation conclut que le système *présente* un risque significatif de préjudice, il est classé comme **Haut Risque (Annexe III)**
   - Le processus s'arrête ici, la classification est enregistrée, et le Comité de Gouvernance de l'IA est notifié
   - S'il *ne présente pas* de risque significatif, le fournisseur doit documenter cette évaluation et enregistrer le système dans la base de données de l'UE
   - Le processus passe ensuite à l'Évaluation à Risque Limité (Étape 1.5)

5. **Documenter l'Évaluation**
   - Compléter le Rapport d'Évaluation du Risque Significatif de Préjudice (REC-AI-CLS-004)
   - Inclure l'analyse de risque, les preuves à l'appui et la décision de classification finale

**Preuves Requises:**
- Évaluation du Risque Significatif de Préjudice complétée avec justification détaillée et preuves à l'appui
- Approbation de l'évaluation par le Responsable du Programme Règlement sur l'IA
- Pour les systèmes jugés ne pas présenter de risque significatif, preuve d'enregistrement dans la base de données de l'UE
- Rapport d'Évaluation du Risque Significatif de Préjudice (REC-AI-CLS-004)

**Délai:** 3-5 jours

**Contrôle Qualité:**
- L'évaluation du "risque significatif" est approfondie, fondée sur des preuves et bien documentée
- Tous les facteurs de risque pertinents sont pris en compte
- Le raisonnement est défendable lors d'un audit ou d'un examen réglementaire

---

#### **Étape 1.5: Classification à Risque Limité et à Risque Minimal (Contrôles CLS-005, CLS-006)**

**Quand:** Si un système n'est pas classé comme haut risque

**Qui:** Responsable du Programme Règlement sur l'IA

**Comment:**

1. **Évaluer les Obligations de Transparence**
   - Évaluer si le système a des obligations de transparence spécifiques en vertu de l'article 50:
     - Systèmes qui interagissent directement avec les personnes physiques (chatbots, assistants virtuels)
     - Systèmes de reconnaissance des émotions
     - Systèmes de catégorisation biométrique
     - Systèmes d'IA qui génèrent ou manipulent du contenu image, audio ou vidéo (deepfakes)
   - Compléter le **Formulaire d'Évaluation à Risque Limité** (partie de TMP-AI-CLS-001)

2. **Prendre la Décision de Classification**
   - **Point de Décision:** Si le système est soumis à ces obligations de transparence, il est classé comme **Risque Limité**
   - Si le système n'est pas à haut risque et n'a pas d'obligations de transparence spécifiques, il est classé comme **Risque Minimal**

3. **Enregistrer la Classification**
   - La classification finale est enregistrée dans le Registre des Systèmes d'IA avec la date et la justification
   - Pour les systèmes à Risque Limité, documenter les obligations de transparence spécifiques qui s'appliquent

4. **Notifier les Parties Prenantes**
   - Notifier le Propriétaire du Système d'IA de la classification finale
   - Fournir des orientations sur les obligations de conformité applicables

**Preuves Requises:**
- Décision de classification finale documentée dans le Registre des Systèmes d'IA
- Pour les systèmes à Risque Limité, un enregistrement des obligations de transparence spécifiques qui s'appliquent
- Formulaire d'Évaluation à Risque Limité (REC-AI-CLS-005)

**Délai:** 1 jour

---

### PHASE 2: GESTION CONTINUE

#### **Étape 2.1: Maintenir le Registre des Systèmes d'IA (Contrôle CLS-007)**

**Quand:** En continu

**Qui:** Responsable du Programme Règlement sur l'IA

**Comment:**

1. **Maintenir le Registre Central**
   - Maintenir un **Registre des Systèmes d'IA** centralisé (TMP-AI-CLS-002) pour tous les systèmes d'IA de l'organisation
   - Le registre doit inclure, au minimum:
     - Nom du système et ID unique
     - Propriétaire du système et coordonnées
     - Brève description de l'objectif prévu
     - Classification (Interdite, Haut Risque, Risque Limité, Risque Minimal, IAUG)
     - Date de classification
     - Justification de la classification
     - Statut (En Développement, Déployé, Déclassé)
     - Pour l'IAUG: Type de fournisseur (amont/aval), désignation de risque systémique

2. **Mettre à Jour le Registre**
   - Mettre à jour le registre chaque fois qu'un nouveau système est classé
   - Mettre à jour le registre chaque fois que la classification d'un système change
   - Mettre à jour le registre chaque fois que le statut d'un système change

3. **Examen et Gouvernance**
   - Le registre est la source unique de vérité pour les classifications des systèmes d'IA
   - Le registre est examiné trimestriellement par le Comité de Gouvernance de l'IA
   - Toute divergence ou question est escaladée au Responsable du Programme Règlement sur l'IA

**Preuves Requises:**
- Un Registre des Systèmes d'IA à jour
- Procès-verbaux d'examen trimestriel du Comité de Gouvernance de l'IA

**Délai:** Continu

---

#### **Étape 2.2: Reclassification en cas de Modification Substantielle (Contrôle CLS-008)**

**Quand:** Chaque fois qu'une modification substantielle est proposée pour un système d'IA existant

**Qui:** Propriétaire du Système d'IA

**Comment:**

1. **Identifier la Modification Substantielle**
   - Une modification substantielle est définie comme tout changement qui pourrait affecter la classification du système, y compris:
     - Changement d'objectif prévu
     - Changement significatif de l'architecture du modèle
     - Changement dans les données utilisées qui pourrait modifier son profil de risque
     - Changement du contexte de déploiement ou des utilisateurs cibles du système

2. **Initier la Reclassification**
   - Le Propriétaire du Système d'IA notifie le Responsable du Programme Règlement sur l'IA de la modification proposée
   - Le Responsable du Programme Règlement sur l'IA initie un processus complet de reclassification, en commençant par **l'Étape 1.1: Filtrage des Pratiques Interdites**

3. **Effectuer l'Évaluation Complète**
   - Le système est traité comme un nouveau système, et toutes les étapes de classification sont répétées
   - Aucun travail de développement sur la modification substantielle ne peut commencer tant que la reclassification n'est pas terminée et approuvée

4. **Mettre à Jour le Registre**
   - À la fin de la reclassification, le Registre des Systèmes d'IA est mis à jour avec la nouvelle classification (si changée) et la date de la modification

**Preuves Requises:**
- Une nouvelle évaluation de classification complète pour le système modifié
- Entrée mise à jour dans le Registre des Systèmes d'IA
- Documentation de la modification substantielle et de sa justification

**Délai:** Avant le déploiement de la modification

---

#### **Étape 2.3: Examen Annuel de Classification (Contrôle CLS-009)**

**Quand:** Annuellement pour tous les systèmes d'IA déployés

**Qui:** Responsable du Programme Règlement sur l'IA

**Comment:**

1. **Planifier l'Examen Annuel**
   - Planifier un examen annuel de tous les systèmes d'IA déployés, généralement au T1 de chaque année
   - Notifier tous les Propriétaires de Systèmes d'IA du calendrier d'examen

2. **Effectuer l'Examen**
   - Pour chaque système d'IA déployé, examiner:
     - Si la classification du système reste précise en fonction du déploiement et de l'utilisation actuels
     - S'il y a eu des changements au Règlement sur l'IA ou à ses actes d'exécution qui pourraient affecter la classification
     - S'il y a eu des incidents ou problèmes qui pourraient affecter la classification
   - Compléter le **Formulaire d'Examen Annuel de Classification** (partie de TMP-AI-CLS-001)

3. **Mettre à Jour les Classifications**
   - Si l'examen identifie qu'une classification de système devrait changer, initier un processus formel de reclassification
   - Mettre à jour le Registre des Systèmes d'IA avec les résultats de l'examen

4. **Rapporter les Résultats**
   - Préparer le **Rapport d'Examen Annuel de Classification** (REC-AI-CLS-006)
   - Présenter les résultats au Comité de Gouvernance de l'IA
   - Mettre en évidence tout système avec des classifications modifiées ou tout domaine de préoccupation

**Preuves Requises:**
- Enregistrement de l'examen annuel de classification, incluant une liste de tous les systèmes examinés et le résultat
- Formulaire d'Examen Annuel de Classification (partie de TMP-AI-CLS-001)
- Procès-verbaux de la réunion du Comité de Gouvernance de l'IA où l'examen a été présenté
- Rapport d'Examen Annuel de Classification (REC-AI-CLS-006)

**Délai:** Annuellement

---

## 5. CLASSIFICATION DE L'IA À USAGE GÉNÉRAL (IAUG)

### 5.1 Identification des Modèles IAUG

**Quand:** Lors de l'évaluation de tout modèle d'IA qui pourrait être un modèle IAUG

**Qui:** Responsable de Conformité IAUG + Propriétaire du Système d'IA

**Base Réglementaire:** Articles 51-56 du Règlement sur l'IA de l'UE

**Comment:**

1. **Évaluer les Critères IAUG**

   Un modèle d'IA à Usage Général est défini comme un modèle d'IA qui:
   - Présente une généralité significative
   - Est capable d'effectuer de manière compétente un large éventail de tâches distinctes
   - Peut être intégré dans divers systèmes ou applications en aval (sauf outils pour R&D avant mise sur le marché)

   Compléter l'**Évaluation d'Identification de Modèle IAUG** (partie de TMP-AI-CLS-003)

2. **Déterminer le Type de Fournisseur**

   | Type de Fournisseur | Définition | Obligations |
   |---------------|------------|-------------|
   | **Fournisseur de Modèle IAUG** | Développe ou fait développer un modèle IAUG et le met sur le marché sous son propre nom/marque | Obligations des articles 53-54; documentation technique; fiches de modèle; conformité au droit d'auteur |
   | **Fournisseur en Aval** | Utilise un modèle IAUG pour développer/déployer un système d'IA | Conformité aux exigences au niveau du système; diligence raisonnable sur le fournisseur en amont |

3. **Évaluer la Mise sur le Marché**
   - Le modèle est-il publié sous une licence libre et open source?
   - Le code source, les paramètres du modèle et les données d'entraînement sont-ils accessibles au public?
   - Le modèle répond-il aux exemptions libre et open source selon l'article 51(2)?

4. **Documenter la Détermination IAUG**
   - Compléter le Rapport d'Identification de Modèle IAUG (REC-AI-GPAI-001)
   - Enregistrer le type de fournisseur et le statut d'exemption
   - Ajouter au Registre des Systèmes d'IA avec la désignation IAUG

**Preuves Requises:**
- Évaluation d'Identification de Modèle IAUG (partie de TMP-AI-CLS-003)
- Rapport d'Identification de Modèle IAUG (REC-AI-GPAI-001)
- Registre des Systèmes d'IA mis à jour

**Délai:** 2-3 jours

---

### 5.2 Évaluation du Risque Systémique

**Quand:** Pour tous les modèles IAUG identifiés à l'Étape 5.1

**Qui:** Responsable de Conformité IAUG + Équipe Technique

**Base Réglementaire:** L'article 51(1)(b) définit les modèles IAUG à risque systémique

**Comment:**

1. **Appliquer le Test de Seuil de Calcul**

   **Test Principal:** Le modèle IAUG a-t-il des capacités à fort impact, déterminées par:
   - Calcul d'entraînement utilisé pour l'entraînement du modèle ≥ **10²⁵ opérations en virgule flottante (FLOP)**?

   | Niveau de Calcul | Classification | Obligations |
   |---------------|---------------|-------------|
   | < 10²⁵ FLOP | IAUG Standard | Articles 53-54 |
   | ≥ 10²⁵ FLOP | IAUG à Risque Systémique | Articles 53-55 (renforcés) |

2. **Appliquer le Test de Désignation Alternative**

   Même si en dessous du seuil FLOP, le Bureau européen de l'IA peut désigner un modèle comme ayant un risque systémique en fonction de:
   - Capacités ou impact équivalents aux modèles au/au-dessus du seuil FLOP
   - Raisonnement basé sur les critères de l'Annexe XIII:
     - Nombre de paramètres
     - Qualité ou taille de l'ensemble de données d'entraînement
     - Modalités (texte, image, audio, vidéo)
     - Outils et niveau d'autonomie
     - Risque spécifique posé par le modèle
     - Portée (nombre d'utilisateurs, revenus)
     - Part de marché

3. **Documenter la Détermination du Risque Systémique**

   Compléter l'**Évaluation du Risque Systémique IAUG** (partie de TMP-AI-CLS-003):
   - Calcul et documentation du calcul d'entraînement
   - Évaluation des critères de l'Annexe XIII
   - Statut de désignation du Bureau européen de l'IA (le cas échéant)
   - Justification de la détermination du risque systémique

4. **Appliquer les Obligations Renforcées (en cas de Risque Systémique)**

   S'il est classé comme IAUG à risque systémique, les obligations **supplémentaires** suivantes s'appliquent:

   | Obligation | Article | Description |
   |------------|---------|-------------|
   | Évaluation du Modèle | 55(1)(a) | Effectuer et documenter l'évaluation du modèle selon des protocoles standardisés |
   | Tests Contradictoires | 55(1)(b) | Évaluer et atténuer les risques systémiques (red teaming, tests contradictoires) |
   | Suivi des Incidents | 55(1)(c) | Suivre, documenter et signaler les incidents graves |
   | Cybersécurité | 55(1)(d) | Garantir un niveau adéquat de protection de la cybersécurité |
   | Codes de Pratique | 56 | Suivre les codes de pratique ou normes harmonisées |

5. **Enregistrer la Détermination du Risque Systémique**
   - Mettre à jour le Registre des Systèmes d'IA avec la désignation de risque systémique
   - Notifier le Comité de Gouvernance de l'IA de la classification de risque systémique
   - Mettre en œuvre une surveillance et des contrôles renforcés

**Preuves Requises:**
- Évaluation du Risque Systémique IAUG (partie de TMP-AI-CLS-003)
- Calculs et documentation du calcul d'entraînement
- Évaluation des critères de l'Annexe XIII
- Documentation de désignation du Bureau européen de l'IA (le cas échéant)
- Registre des Systèmes d'IA mis à jour
- Notification du Comité de Gouvernance de l'IA

**Délai:** 1-2 semaines

**Contrôle Qualité:**
- Les calculs de calcul d'entraînement sont précis et vérifiables
- Les critères de l'Annexe XIII sont documentés de manière approfondie
- Les obligations renforcées sont identifiées et attribuées

---

### 5.3 Matrice des Obligations des Fournisseurs IAUG

| Obligation | IAUG Standard (Art. 53) | IAUG à Risque Systémique (Art. 55) |
|------------|------------------------|------------------------------|
| **Documentation Technique** | ✅ Requise | ✅ Requise + Renforcée |
| **Informations aux Fournisseurs en Aval** | ✅ Requise | ✅ Requise |
| **Politique sur la Conformité au Droit d'Auteur** | ✅ Requise | ✅ Requise |
| **Résumé Accessible au Public** | ✅ Requise | ✅ Requise |
| **Protocole d'Évaluation du Modèle** | ❌ Non Requise | ✅ Requise |
| **Évaluation du Risque Systémique** | ❌ Non Requise | ✅ Requise |
| **Tests Contradictoires** | ❌ Non Requis | ✅ Requis |
| **Suivi des Incidents Graves** | ❌ Non Requis | ✅ Requis |
| **Mesures de Cybersécurité** | ❌ Non Requises | ✅ Requises |

### 5.4 Exemptions Libre et Open Source

**Critères d'Exemption de l'Article 51(2):**

Les modèles IAUG publiés sous une licence libre et open source sont exemptés de certaines obligations si:

1. **Type de Licence:**
   - Modèle publié sous licence libre et open source
   - La licence permet l'accès, l'utilisation, la modification et la distribution

2. **Disponibilité Publique:**
   - Paramètres du modèle (y compris poids, biais, architecture)
   - Informations sur les données d'entraînement (caractéristiques de l'ensemble de données, provenance, méthodologies)
   - Code d'entraînement (si techniquement faisable)

3. **Exclusions de l'Exemption:**
   - L'exemption ne s'applique **PAS** si:
     - Le modèle est qualifié d'IAUG à risque systémique selon l'article 51(1)(b)
     - Le fournisseur applique des restrictions en aval qui contredisent la licence libre/ouverte

**Exigences de Documentation pour l'Exemption:**
- Vérifier que la licence est une licence open source approuvée (approuvée OSI, Creative Commons, etc.)
- Documenter la disponibilité publique du modèle, des paramètres, des informations sur les données d'entraînement
- Confirmer qu'aucune désignation de risque systémique ne s'applique
- Enregistrer l'exemption dans le Registre des Systèmes d'IA

---

### 5.5 Diligence Raisonnable du Fournisseur IAUG en Aval

**Quand:** Lors de l'intégration de modèles IAUG de fournisseurs en amont dans des systèmes d'IA

**Qui:** Propriétaire du Système d'IA + Responsable de Conformité IAUG

**Comment:**

1. **Vérifier la Conformité du Fournisseur en Amont**
   - Demander et examiner la documentation du modèle IAUG (conformité à l'article 53)
   - Vérifier que le fournisseur en amont est sur le registre de conformité de l'UE
   - Demander la fiche de modèle et la documentation technique
   - Évaluer la posture de conformité au Règlement sur l'IA de l'UE du fournisseur en amont

2. **Évaluer la Classification au Niveau du Système**
   - Même en utilisant un modèle IAUG conforme, évaluer la classification du système en aval
   - Appliquer le processus de classification standard (Étapes 1.1-1.5)
   - Documenter comment le modèle IAUG est intégré et utilisé

3. **Documenter la Diligence Raisonnable**
   - Compléter l'**Évaluation du Fournisseur IAUG en Aval** (partie de TMP-AI-CLS-003)
   - Enregistrer la vérification de conformité du fournisseur en amont
   - Documenter la classification au niveau du système
   - Ajouter au Registre des Systèmes d'IA

**Preuves Requises:**
- Évaluation du Fournisseur IAUG en Aval (partie de TMP-AI-CLS-003)
- Documentation du fournisseur en amont (fiche de modèle, docs techniques)
- Vérification de conformité du fournisseur en amont
- Documentation de classification au niveau du système

**Délai:** 1 semaine

---

## 6. MÉCANISMES DE CONTRÔLE

Cette section documente les 7 contrôles de classification qui garantissent une classification précise, complète et auditable des systèmes d'IA.

### 6.1 Contrôle CLS-001: Catégorisation des Systèmes (Préventif, Critique)

**Objectif du Contrôle:** Garantir que tous les systèmes d'IA sont identifiés et catégorisés pour l'évaluation de classification

**Description du Contrôle:**
- Tous les systèmes d'IA et modèles IAUG sont enregistrés dans le Registre des Systèmes d'IA dès l'initiation
- Des ID de classification uniques sont attribués (format CLS-AAAA-NNN)
- Les rôles de propriétaire de système et de parties prenantes sont attribués
- La catégorisation initiale détermine le parcours de classification (système d'IA standard vs. modèle IAUG)

**Activités de Contrôle:**
- Processus d'accueil pour les nouvelles propositions de systèmes d'IA
- Attribution et suivi des ID de classification
- Attribution de rôles (Propriétaire du Système, Responsable Technique, etc.)
- Détermination initiale IAUG vs. IA standard

**Propriétaire du Contrôle:** Responsable du Programme Règlement sur l'IA

**Fréquence du Contrôle:** Lors de l'initiation de chaque nouveau système/modèle d'IA

**Approche de Test:**
- Échantillonner 20 systèmes d'IA du registre
- Vérifier que tous ont des ID de classification et des propriétaires attribués
- Vérifier que tous ont subi une évaluation de catégorisation initiale
- Vérifier l'exhaustivité à 100% de la documentation d'accueil

**ICP:** % de nouveaux systèmes d'IA enregistrés dans la semaine suivant l'initiation (Cible: 100%)

---

### 6.2 Contrôle CLS-002: Application des Critères de Risque (Préventif, Critique)

**Objectif du Contrôle:** Garantir que les critères de classification sont appliqués avec précision et cohérence selon les exigences du Règlement sur l'IA de l'UE

**Description du Contrôle:**
- Le filtrage des pratiques interdites est obligatoire pour tous les systèmes
- Les critères des Annexes I et III sont appliqués systématiquement
- Les seuils de risque systémique IAUG sont calculés et documentés
- Un examen juridique est obtenu pour les cas limites

**Activités de Contrôle:**
- Complétion de la liste de vérification des pratiques interdites (Article 5)
- Application du test en trois parties de l'Annexe I
- Application de la correspondance des cas d'usage de l'Annexe III
- Calcul du seuil FLOP IAUG
- Examen juridique du DJ pour les pratiques interdites

**Propriétaire du Contrôle:** Responsable du Programme Règlement sur l'IA (avec le DJ pour l'examen juridique)

**Fréquence du Contrôle:** Pour chaque évaluation de classification

**Approche de Test:**
- Échantillonner 20 évaluations de classification
- Vérifier que toutes les étapes de l'arbre de décision ont été complétées
- Vérifier l'approbation du DJ obtenue pour les évaluations de pratiques interdites
- Vérifier que les critères des Annexes I/III ont été appliqués correctement
- Vérifier que les calculs FLOP IAUG sont précis

**ICP:** % de classifications avec application complète des critères (Cible: 100%)

---

### 6.3 Contrôle CLS-003: Documentation de Classification (Préventif, Élevé)

**Objectif du Contrôle:** Garantir que les décisions de classification sont entièrement documentées avec preuves et justification

**Description du Contrôle:**
- Toutes les évaluations de classification sont documentées dans des modèles standardisés
- Les preuves soutenant les décisions de classification sont collectées et conservées
- La justification pour les classifications limites ou complexes est documentée
- La documentation est examinée et approuvée avant finalisation

**Activités de Contrôle:**
- Complétion des formulaires d'évaluation de classification
- Collecte de preuves à l'appui (spécifications techniques, descriptions de cas d'usage)
- Documentation de la justification de classification
- Examen et approbation par le Responsable du Programme Règlement sur l'IA
- Archivage dans le référentiel de classification

**Propriétaire du Contrôle:** Propriétaire du Système d'IA (exécution), Responsable du Programme Règlement sur l'IA (approbation)

**Fréquence du Contrôle:** Pour chaque classification

**Approche de Test:**
- Échantillonner 20 décisions de classification
- Vérifier que toute la documentation obligatoire est complète
- Vérifier que les preuves soutiennent la conclusion de classification
- Vérifier que les signatures d'approbation sont obtenues
- Vérifier que la documentation est stockée selon la politique de conservation

**ICP:** % de classifications avec documentation complète (Cible: 100%)

---

### 6.4 Contrôle CLS-004: Examen de Classification (Détectif, Élevé)

**Objectif du Contrôle:** Garantir que les décisions de classification sont examinées et validées par l'autorité appropriée

**Description du Contrôle:**
- Toutes les classifications à haut risque sont examinées et approuvées par le Comité de Gouvernance de l'IA
- Les déterminations de pratiques interdites sont examinées et approuvées par le DJ
- Les classifications de risque systémique IAUG sont examinées par le Responsable de Conformité IAUG
- Les décisions de classification sont contestées et validées par examen par les pairs

**Activités de Contrôle:**
- Réunions d'examen du Comité de Gouvernance de l'IA pour les classifications à haut risque
- Examen juridique du DJ pour les pratiques interdites
- Examen du Responsable de Conformité IAUG pour les modèles à risque systémique
- Examen par les pairs de la justification de classification
- Processus d'escalade pour les classifications contestées

**Propriétaire du Contrôle:** Comité de Gouvernance de l'IA (haut risque), DJ (interdit), Responsable IAUG (IAUG)

**Fréquence du Contrôle:** Pour chaque classification à haut risque, interdite ou IAUG à risque systémique

**Approche de Test:**
- Échantillonner 20 classifications à haut risque
- Vérifier l'approbation du Comité de Gouvernance de l'IA obtenue
- Vérifier l'approbation du DJ sur les évaluations de pratiques interdites
- Vérifier l'approbation du Responsable IAUG sur les déterminations de risque systémique
- Examiner les procès-verbaux de réunion pour des preuves de contestation et validation

**ICP:** % de classifications à haut risque avec approbation de gouvernance (Cible: 100%)

---

### 6.5 Contrôle CLS-005: Gestion des Changements de Classification (Préventif, Élevé)

**Objectif du Contrôle:** Garantir que les changements de classification sont identifiés, évalués et approuvés avant mise en œuvre

**Description du Contrôle:**
- Les modifications substantielles déclenchent une évaluation de reclassification
- Les examens annuels identifient les changements nécessitant une reclassification
- La reclassification suit le même processus que la classification initiale
- Les changements de classification sont documentés et communiqués aux parties prenantes

**Activités de Contrôle:**
- Identification et notification de modification substantielle
- Exécution de l'évaluation de reclassification
- Processus d'examen annuel de classification
- Approbation et communication du changement de classification
- Mise à jour du Registre des Systèmes d'IA

**Propriétaire du Contrôle:** Responsable du Programme Règlement sur l'IA

**Fréquence du Contrôle:** Lors de modification substantielle, annuellement

**Approche de Test:**
- Échantillonner 10 modifications substantielles
- Vérifier que la reclassification a été déclenchée
- Vérifier que la reclassification a suivi le processus complet
- Vérifier que les changements de classification ont été approuvés
- Vérifier que le Registre des Systèmes d'IA a été mis à jour

**ICP:** % de modifications substantielles déclenchant une reclassification (Cible: 100%)

---

### 6.6 Contrôle CLS-006: Surveillance Réglementaire (Détectif, Moyen)

**Objectif du Contrôle:** Garantir que les changements au Règlement sur l'IA de l'UE et aux actes d'exécution sont surveillés et intégrés dans le processus de classification

**Description du Contrôle:**
- Le Règlement sur l'IA de l'UE et les actes d'exécution sont surveillés pour les changements
- Les changements affectant les critères de classification sont identifiés
- Les procédures et modèles de classification sont mis à jour
- Les systèmes d'IA affectés sont reclassés si nécessaire

**Activités de Contrôle:**
- Examen trimestriel de surveillance réglementaire
- Évaluation de l'impact des changements
- Mise à jour des procédures et modèles
- Communication aux parties prenantes
- Reclassification ciblée des systèmes affectés

**Propriétaire du Contrôle:** Responsable du Programme Règlement sur l'IA

**Fréquence du Contrôle:** Trimestriel

**Approche de Test:**
- Examiner les journaux de surveillance réglementaire
- Vérifier que les examens trimestriels ont été effectués
- Vérifier que les changements identifiés ont été évalués pour leur impact
- Vérifier que les procédures ont été mises à jour dans les 30 jours suivant un changement réglementaire
- Vérifier que les systèmes affectés ont été reclassés

**ICP:** Jours entre le changement réglementaire et la mise à jour de procédure (Cible: < 30 jours)

---

### 6.7 Contrôle CLS-007: Piste d'Audit de Classification (Détectif, Élevé)

**Objectif du Contrôle:** Garantir une piste d'audit complète et inviolable de toutes les décisions et changements de classification

**Description du Contrôle:**
- Toutes les activités de classification sont enregistrées avec horodatages et ID utilisateur
- L'historique de classification est maintenu pour chaque système d'IA
- Les changements aux classifications sont enregistrés avec justification
- La piste d'audit est conservée pendant 10 ans selon les exigences du Règlement sur l'IA de l'UE

**Activités de Contrôle:**
- Enregistrement automatisé des activités de classification
- Contrôle de version pour les documents de classification
- Maintenance du journal des changements dans le Registre des Systèmes d'IA
- Examen annuel de la piste d'audit
- Archivage et conservation sécurisés

**Propriétaire du Contrôle:** Responsable du Programme Règlement sur l'IA

**Fréquence du Contrôle:** Continu (enregistrement automatisé), examen annuel

**Approche de Test:**
- Échantillonner 20 systèmes d'IA
- Vérifier que l'historique de classification complet est disponible
- Vérifier que tous les changements sont enregistrés avec justification
- Vérifier l'intégrité de la piste d'audit (pas de lacunes ou de falsification)
- Vérifier la conformité à la politique de conservation

**ICP:** % de systèmes d'IA avec piste d'audit complète (Cible: 100%)

---

## 7. ICP ET INDICATEURS

### 7.1 ICP du Processus de Classification

| ID ICP | Nom de l'ICP | Définition | Cible | Fréquence | Propriétaire |
|--------|----------|------------|--------|-----------|-------|
| **ICP-CLS-001** | Temps de Complétion de Classification | Jours de l'initiation à la classification finale | ≤ 14 jours | Par classification | Responsable du Programme IA |
| **ICP-CLS-002** | Couverture de Classification | % de systèmes d'IA avec classification documentée | 100% | Mensuel | Responsable du Programme IA |
| **ICP-CLS-003** | Taux de Filtrage des Pratiques Interdites | % de nouveaux systèmes filtrés pour pratiques interdites | 100% | Mensuel | Responsable du Programme IA |
| **ICP-CLS-004** | Complétion Examen DJ | % de cas limites avec approbation DJ | 100% | Mensuel | Directeur Juridique |
| **ICP-CLS-005** | Approbation Gouvernance Haut Risque | % de classifications à haut risque avec approbation Comité Gouv. IA | 100% | Trimestriel | Comité de Gouvernance IA |
| **ICP-CLS-006** | Taux de Déclenchement de Reclassification | % de modifications substantielles déclenchant reclassification | 100% | Trimestriel | Responsable du Programme IA |
| **ICP-CLS-007** | Complétion Examen Annuel | % de systèmes déployés examinés annuellement | 100% | Annuel | Responsable du Programme IA |
| **ICP-CLS-008** | Exhaustivité Documentation Classification | % de classifications avec toute la documentation obligatoire | 100% | Trimestriel | Responsable du Programme IA |
| **ICP-CLS-009** | Taux de Précision de Classification | % de classifications confirmées précises lors d'audit/examen | ≥ 95% | Annuel | Audit Interne |
| **ICP-CLS-010** | Taux d'Identification Modèles IAUG | % de modèles IAUG correctement identifiés | 100% | Trimestriel | Responsable Conformité IAUG |

### 7.2 ICP Spécifiques à l'IAUG

| ID ICP | Nom de l'ICP | Définition | Cible | Fréquence | Propriétaire |
|--------|----------|------------|--------|-----------|-------|
| **ICP-IAUG-001** | Temps d'Évaluation Risque Systémique | Jours de l'identification IAUG à la détermination du risque systémique | ≤ 10 jours | Par modèle IAUG | Responsable Conformité IAUG |
| **ICP-IAUG-002** | Précision Calcul FLOP | % de calculs FLOP vérifiés et précis | 100% | Par modèle IAUG | Responsable Conformité IAUG |
| **ICP-IAUG-003** | Diligence Raisonnable Fournisseur Amont | % de fournisseurs IAUG amont avec diligence raisonnable complétée | 100% | Trimestriel | Responsable Conformité IAUG |
| **ICP-IAUG-004** | Vérification Exemption Libre/Open Source | % d'exemptions FOSS avec vérification complète | 100% | Par modèle IAUG | Responsable Conformité IAUG |

### 7.3 Reporting des ICP et Escalade

**Reporting Mensuel:**
- Tendances du temps de complétion de classification
- Statut de couverture de classification
- Taux de filtrage des pratiques interdites
- Complétion de l'examen DJ

**Reporting Trimestriel au Comité de Gouvernance de l'IA:**
- Tous les ICP mensuels
- Taux d'approbation de gouvernance haut risque
- Taux de déclenchement de reclassification
- ICP spécifiques à l'IAUG
- Analyse des tendances et recommandations

**Reporting Annuel:**
- Tous les ICP trimestriels
- Complétion de l'examen annuel
- Taux de précision de classification (résultats d'audit)
- Tendances d'une année sur l'autre
- Recommandations d'amélioration des processus

**Seuils d'Escalade:**
- Tout ICP en dessous de la cible → Escalader au Responsable du Programme Règlement sur l'IA
- Couverture de classification < 95% → Escalader au Comité de Gouvernance de l'IA
- Précision de classification < 95% → Escalader au Directeur Juridique

---

## 8. EXIGENCES EN MATIÈRE DE DOCUMENTATION

### 8.1 Modèles et Formulaires de Classification

**TMP-AI-CLS-001: Classeur de Classification de Système d'IA**
- Feuille 1: Formulaire de Demande de Classification
- Feuille 2: Formulaire d'Évaluation des Pratiques Interdites (avec texte exact de l'article 5(1))
- Feuille 3: Formulaire d'Évaluation Annexe I
- Feuille 4: Formulaire d'Évaluation Annexe III
- Feuille 5: Formulaire d'Évaluation du Risque Significatif de Préjudice
- Feuille 6: Formulaire d'Évaluation à Risque Limité
- Feuille 7: Formulaire d'Examen Annuel de Classification

**TMP-AI-CLS-002: Registre des Systèmes d'IA**
- Base de données centrale de tous les systèmes d'IA et de leurs classifications
- Champs: ID Système, Nom, Propriétaire, Description, Classification, Justification, Statut, Dates

**TMP-AI-CLS-003: Classeur de Classification IAUG**
- Feuille 1: Évaluation d'Identification de Modèle IAUG
- Feuille 2: Évaluation du Risque Systémique IAUG (calcul FLOP, Annexe XIII)
- Feuille 3: Évaluation du Fournisseur IAUG en Aval
- Feuille 4: Vérification d'Exemption Libre/Open Source

### 8.2 Enregistrements de Classification

| ID Enregistrement | Nom de l'Enregistrement | Contenu | Conservation |
|-----------|-------------|---------|-----------|
| REC-AI-CLS-001 | Rapport de Filtrage des Pratiques Interdites | Résultats de l'évaluation, avis DJ, décision | 10 ans |
| REC-AI-CLS-002 | Rapport d'Évaluation Annexe I | Résultats du test en trois parties, preuves, décision | 10 ans |
| REC-AI-CLS-003 | Rapport d'Évaluation Annexe III | Correspondance de cas d'usage, preuves, décision | 10 ans |
| REC-AI-CLS-004 | Rapport d'Évaluation du Risque Significatif de Préjudice | Facteurs de risque, scénarios, analyse, décision | 10 ans |
| REC-AI-CLS-005 | Formulaire d'Évaluation à Risque Limité | Évaluation des obligations de transparence | 10 ans |
| REC-AI-CLS-006 | Rapport d'Examen Annuel de Classification | Résultats de l'examen annuel, changements, recommandations | 10 ans |
| REC-AI-GPAI-001 | Rapport d'Identification de Modèle IAUG | Détermination IAUG, type de fournisseur, exemptions | 10 ans |
| REC-AI-GPAI-002 | Rapport de Risque Systémique IAUG | Calcul FLOP, critères Annexe XIII, détermination | 10 ans |

### 8.3 Enregistrements de Gouvernance

| ID Enregistrement | Nom de l'Enregistrement | Conservation |
|-----------|-------------|-----------|
| REC-AI-CLS-GOVMIN-001 | Procès-verbaux Réunions Comité de Gouvernance IA | 10 ans |
| REC-AI-CLS-CLOREVIEW-001 | Enregistrements Avis Juridiques DJ | 10 ans |
| REC-AI-CLS-ESCALATION-001 | Enregistrements d'Escalade de Classification | 10 ans |

---

## 9. EXAMEN ET AUDIT

### 9.1 Contrôles Qualité

| Étape | Contrôle Qualité | Méthode de Vérification |
|---|---|---|
| 1.1 | 100% des nouveaux systèmes filtrés pour pratiques interdites | Audit du Registre des Systèmes IA |
| 1.1 | Approbation DJ obtenue pour cas limites | Examen des enregistrements d'approbation DJ |
| 1.2 | Évaluation Annexe I complète et documentée | Examen des formulaires d'évaluation |
| 1.3 | Correspondance Annexe III précise et justifiée | Examen des formulaires d'évaluation |
| 1.4 | Évaluation de risque approfondie et fondée sur preuves | Examen des rapports d'évaluation |
| 2.1 | Registre maintenu et à jour | Examen trimestriel du registre |
| 2.2 | Reclassification déclenchée pour modifications substantielles | Audit des enregistrements de modification |
| 2.3 | Examen annuel complété pour tous les systèmes | Examen du rapport d'examen annuel |
| 5.1 | Modèles IAUG correctement identifiés | Examen des évaluations d'identification IAUG |
| 5.2 | Calculs FLOP précis et documentés | Examen technique des calculs |

### 9.2 Procédures de Vérification d'Audit

Les auditeurs internes vérifieront:

1. **Exhaustivité:** Tous les systèmes d'IA ont été classés
2. **Précision:** Les classifications sont précises en fonction des critères d'évaluation
3. **Documentation:** Toute la documentation requise est complète et signée
4. **Ponctualité:** Les classifications sont complétées dans les délais requis
5. **Gouvernance:** Les classifications à haut risque ont été approuvées par le Comité de Gouvernance de l'IA
6. **Mises à Jour:** Le Registre des Systèmes d'IA est maintenu et à jour
7. **Conformité IAUG:** Les modèles IAUG sont correctement identifiés et le risque systémique évalué
8. **Efficacité des Contrôles:** Les 7 contrôles de classification fonctionnent efficacement

### 9.3 Calendrier d'Audit Annuel

| Activité d'Audit | Portée | Fréquence | Auditeur |
|----------------|-------|-----------|---------|
| Audit du Processus de Classification | Toutes les classifications de l'année précédente | Annuel | Audit Interne |
| Audit de Conformité IAUG | Tous les modèles IAUG et évaluations | Annuel | Audit Interne + Responsable IAUG |
| Test des Contrôles | Tester les 7 contrôles de classification | Annuel | Audit Interne |
| Examen de Précision du Registre | Vérifier registre vs. systèmes réels | Annuel | Responsable du Programme IA |
| Exhaustivité de la Documentation | Échantillonner 20 classifications | Trimestriel | Responsable de Conformité |

---

## 10. GESTION DE LA NON-CONFORMITÉ

### 10.1 Déclencheurs de Non-Conformité

| Déclencheur | Gravité | Action Requise |
|---------|----------|-----------------|
| **Système interdit déployé** | Critique | Arrêt immédiat du déploiement; escalade DJ; notification aux autorités |
| **Système à haut risque déployé sans classification** | Élevée | Arrêt immédiat du déploiement; classification accélérée; examen de gouvernance |
| **Documentation de classification manquante** | Moyenne | Examen de classification; remédiation de documentation; délai de 30 jours |
| **Reclassification non déclenchée** | Moyenne | Reclassification immédiate; analyse de cause racine |
| **Examen annuel non complété** | Faible | Compléter dans les 30 jours; amélioration du processus |

### 10.2 Processus d'Escalade de Non-Conformité

1. **Identifier la Non-Conformité**
   - Par audit, examen ou incident
   - Documenter la constatation de non-conformité

2. **Évaluer la Gravité**
   - Appliquer les critères de gravité (Critique, Élevée, Moyenne, Faible)
   - Déterminer les actions immédiates requises

3. **Escalader selon la Gravité**
   - Critique → Comité de Gouvernance IA + DJ (immédiat)
   - Élevée → Responsable du Programme IA + Directeur de Produit (dans les 24 heures)
   - Moyenne → Responsable du Programme IA (dans les 3 jours ouvrables)
   - Faible → Propriétaire du Système IA (dans la semaine)

4. **Remédier à la Non-Conformité**
   - Exécuter les actions requises selon la gravité
   - Documenter les activités de remédiation
   - Vérifier l'efficacité de la remédiation

5. **Analyse de Cause Racine**
   - Identifier pourquoi la non-conformité s'est produite
   - Mettre en œuvre des actions correctives
   - Mettre à jour les procédures si nécessaire

6. **Clôturer la Non-Conformité**
   - Vérifier que toutes les actions sont complétées
   - Documenter la clôture et les leçons apprises
   - Rapporter au Comité de Gouvernance de l'IA

### 10.3 Notification aux Autorités

Si un système d'IA interdit a été développé ou déployé, l'autorité nationale compétente doit être notifiée selon l'article 73:
- Notification dans les 15 jours suivant la découverte
- Inclure la description, l'évaluation de classification, les actions de remédiation
- Coopérer avec l'enquête de l'autorité
- Documenter toutes les communications

---

## 11. DOCUMENTS ASSOCIÉS

### 11.1 Politiques et Normes

- POL-AI-001: Politique de Gouvernance de l'IA
- STD-AI-001: Norme de Classification des Systèmes d'IA
- STD-AI-002: Norme de Gestion des Risques de l'IA

### 11.2 Procédures

- PROC-AI-RM-001: Procédure de Gestion des Risques de l'IA
- PROC-AI-DATA-001: Procédure de Gouvernance des Données IA
- PROC-AI-QMS-001: Procédure de Gestion de la Qualité IA
- PROC-AI-DOC-001: Procédure de Documentation Technique IA
- PROC-AI-INC-001: Procédure de Réponse aux Incidents IA
- PROC-AI-VENDOR-001: Procédure de Gestion des Fournisseurs IA

### 11.3 Références Réglementaires

- **Règlement sur l'IA de l'UE (Règlement (UE) 2024/1689):**
  - Article 5: Pratiques d'IA Interdites
  - Article 6: Règles de Classification pour Systèmes d'IA à Haut Risque (Annexe I)
  - Article 7: Modifications à la Liste des Systèmes d'IA à Haut Risque (Annexe III)
  - Article 50: Obligations de Transparence pour Certains Systèmes d'IA
  - Articles 51-56: Modèles d'IA à Usage Général
  - Article 73: Signalement des Incidents Graves
  - Annexe I: Liste de la Législation d'Harmonisation de l'Union
  - Annexe III: Systèmes d'IA à Haut Risque
  - Annexe XIII: Critères de Classification comme IAUG à Risque Systémique

---

## 12. ANNEXES

### ANNEXE A: ARBRE DE DÉCISION DE CLASSIFICATION (ORGANIGRAMME VISUEL)

```
┌─────────────────────────────────────────────────────────────────────┐
│      ARBRE DE DÉCISION DE CLASSIFICATION DES SYSTÈMES D'IA          │
│                         (DÉTAILLÉ)                                  │
└─────────────────────────────────────────────────────────────────────┘

DÉBUT: Nouveau Système d'IA ou Modèle
│
▼
┌─────────────────────────────────────┐
│ ÉTAPE 1: IDENTIFICATION MODÈLE IAUG│
│ (Section 5.1)                       │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  OUI: Modèle IAUG         NON: Système IA Standard
     │                         │
     ▼                         │
┌──────────────────────────┐  │
│ Test Risque Systémique   │  │
│ IAUG (Section 5.2)       │  │
│ - FLOP ≥ 10^25?          │  │
│ - Critères Annexe XIII?  │  │
└────────┬────────┬────────┘  │
         │        │            │
    OUI  │        │ NON        │
         │        │            │
         ▼        ▼            │
    IAUG avec    IAUG          │
    Risque       (Standard)    │
    Systémique                 │
         │        │            │
         └────┬───┘            │
              │                │
              ▼                │
    Obligations Renforcées     │
    (Articles 53-55)           │
                               │
                               │
    ┌──────────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│ ÉTAPE 2: FILTRAGE PRATIQUES         │
│ INTERDITES (Article 5)              │
│ (Étape 1.1)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  OUI: Interdite           NON: Continuer
     │
     ▼
┌──────────────────────────┐
│ PRATIQUE INTERDITE       │
│ Article 5(1)(a-h):       │
│ - Techniques subliminales│
│ - Exploit. vulnérabilités│
│ - Notation sociale       │
│ - ID biométrique temps   │
│   réel                   │
│ - Reconnaissance émotions│
│ - Émotions travail/éduc. │
│ - Collecte reconnaissance│
│   faciale (g)            │
│ - Profilage criminel     │
└────────┬─────────────────┘
         │
         ▼
    ARRÊT: Ne Peut Pas Développer
    Examen DJ Requis
    Arrêter le Projet
         │
         └─→ FIN

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ ÉTAPE 3: HAUT RISQUE ANNEXE I       │
│ (Article 6)                         │
│ (Étape 1.2)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  OUI: Composant Sécurité  NON: Continuer
     │
     ▼
┌──────────────────────────┐
│ TEST EN TROIS PARTIES:   │
│ 1. Produit Annexe I?     │
│ 2. Évaluation tiers?     │
│ 3. Critique sécurité?    │
│ Tous OUI?                │
└────────┬─────────────────┘
         │
         ▼
    HAUT RISQUE (Annexe I)
    Conformité Complète Requise
         │
         └─→ FIN: Appliquer Contrôles Haut Risque

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ ÉTAPE 4: HAUT RISQUE ANNEXE III     │
│ (Article 7)                         │
│ (Étape 1.3)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  OUI: Cas Usage Annexe III NON: Continuer
     │
     ▼
┌──────────────────────────┐
│ CATÉGORIES ANNEXE III:   │
│ 1. ID biométrique        │
│ 2. Infra. critique       │
│ 3. Éducation             │
│ 4. Emploi                │
│ 5. Services essentiels   │
│ 6. Forces de l'ordre     │
│ 7. Migration/asile       │
│ 8. Justice/démocratie    │
└────────┬─────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ ÉTAPE 5: ÉVALUATION RISQUE          │
│ SIGNIFICATIF DE PRÉJUDICE (Étape 1.4)│
│ Facteurs:                           │
│ - Intensité du préjudice            │
│ - Portée (# affectés)               │
│ - Vulnérabilité des personnes       │
│ - Réversibilité                     │
│ - Probabilité                       │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  OUI: Risque Significatif NON: Risque Faible
     │                         │
     ▼                         │
HAUT RISQUE (Annexe III)       │
Conformité Complète Requise    │
     │                         │
     └─→ FIN: Appliquer Contrôles
                               │
                  ┌────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│ ÉTAPE 6: TRANSPARENCE               │
│ RISQUE LIMITÉ (Article 50)          │
│ (Étape 1.5)                         │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  OUI: Obligs Transparence NON: Minimal
     │                         │
     ▼                         ▼
RISQUE LIMITÉ               RISQUE MINIMAL
- Chatbots                  - Pas d'obligations spécifiques
- Reconnaissance émotions   - Bonnes pratiques
- Deepfakes                 - Codes volontaires
- Catégorisation biométrique
     │                         │
     └────────┬────────────────┘
              │
              ▼
         FIN: Appliquer Contrôles Spécifiques à la Classification
```

---

### ANNEXE B: GLOSSAIRE DES TERMES

| Terme | Définition |
|------|------------|
| **Système d'IA** | Système automatisé conçu pour fonctionner avec différents niveaux d'autonomie et qui peut faire preuve d'adaptabilité après le déploiement et qui, pour des objectifs explicites ou implicites, déduit, à partir des données qu'il reçoit, la manière de générer des résultats tels que des prédictions, du contenu, des recommandations ou des décisions pouvant influencer des environnements physiques ou virtuels (Règlement sur l'IA UE Art. 3(1)) |
| **Annexe I** | Liste de la législation d'harmonisation de l'Union où les systèmes d'IA utilisés comme composants de sécurité sont considérés à haut risque (machines, jouets, dispositifs médicaux, etc.) |
| **Annexe III** | Liste de 8 cas d'usage de systèmes d'IA à haut risque (identification biométrique, infrastructure critique, emploi, services essentiels, forces de l'ordre, migration, justice, éducation) |
| **Annexe XIII** | Critères de classification des modèles IAUG à risque systémique (paramètres, calcul, ensemble de données, modalités, portée, part de marché) |
| **Déployeur** | Toute personne physique ou morale, autorité publique, agence ou autre organisme utilisant un système d'IA sous son autorité (Règlement sur l'IA UE Art. 3(4)) |
| **Fournisseur en Aval** | Fournisseur qui utilise un modèle d'IA à Usage Général pour développer un système d'IA en vue de sa mise sur le marché ou de sa mise en service |
| **FLOP (Opération en Virgule Flottante)** | Unité de travail de calcul; 10^25 FLOP est le seuil de désignation de risque systémique IAUG |
| **Modèle d'IA Libre et Open Source** | Modèle d'IA publié sous licence libre et open source permettant l'accès, l'utilisation, la modification et la distribution, avec paramètres de modèle et informations d'entraînement accessibles au public |
| **Droits Fondamentaux** | Droits reconnus par la Charte des Droits Fondamentaux de l'UE, notamment la dignité, les libertés, l'égalité, la solidarité, les droits des citoyens et la justice |
| **Modèle d'IA à Usage Général (IAUG)** | Modèle d'IA qui présente une généralité significative et est capable d'effectuer de manière compétente un large éventail de tâches distinctes, indépendamment de la manière dont le modèle est mis sur le marché, et qui peut être intégré dans divers systèmes ou applications en aval (Règlement sur l'IA UE Art. 3(63)) |
| **IAUG à Risque Systémique** | Modèle IAUG ayant des capacités à fort impact évaluées sur la base d'outils et méthodologies techniques appropriés, ou qui a été désigné comme tel par le Bureau européen de l'IA |
| **Système d'IA à Haut Risque** | Système d'IA qui est soit: (1) utilisé comme composant de sécurité d'un produit couvert par la législation d'harmonisation de l'Union (Annexe I), ou (2) relève de l'une des 8 catégories de cas d'usage de l'Annexe III et présente un risque significatif de préjudice |
| **Système d'IA à Risque Limité** | Système d'IA non classé comme haut risque mais soumis à des obligations de transparence spécifiques en vertu de l'article 50 (chatbots, reconnaissance des émotions, deepfakes, catégorisation biométrique) |
| **Système d'IA à Risque Minimal** | Système d'IA qui n'est ni interdit, ni à haut risque, ni à risque limité; soumis uniquement à des codes de conduite volontaires et à la conformité générale |
| **Mise sur le Marché** | Première mise à disposition d'un système d'IA ou d'un modèle d'IA à usage général sur le marché de l'Union |
| **Pratique Interdite** | Pratique d'IA explicitement interdite en vertu de l'article 5 du Règlement sur l'IA de l'UE (8 pratiques spécifiques) |
| **Fournisseur** | Toute personne physique ou morale, autorité publique, agence ou autre organisme qui développe un système d'IA ou un modèle d'IA à usage général, ou fait développer un système d'IA, et le met sur le marché ou le met en service sous son propre nom ou sa propre marque (Règlement sur l'IA UE Art. 3(3)) |
| **Mise en Service** | Fourniture d'un système d'IA pour première utilisation directement au déployeur ou pour propre usage dans l'Union pour son objectif prévu |
| **Composant de Sécurité** | Composant d'un produit qui remplit une fonction de sécurité pour ce produit ou dont la défaillance ou le dysfonctionnement met en danger la santé et la sécurité des personnes ou des biens |
| **Incident Grave** | Tout incident ou dysfonctionnement d'un système d'IA qui conduit directement ou indirectement à la mort, à des dommages graves pour la santé, à une perturbation grave et irréversible d'infrastructures critiques, ou à une violation des droits fondamentaux (Règlement sur l'IA UE Art. 3(49)) |
| **Risque Significatif de Préjudice** | Risque qui répond aux critères de seuil d'intensité, de portée, de vulnérabilité, de réversibilité et de probabilité de préjudice pour la santé, la sécurité ou les droits fondamentaux |
| **Modification Substantielle** | Modification d'un système d'IA après sa mise sur le marché ou sa mise en service qui n'est pas prévue ou planifiée dans l'évaluation de conformité initiale et affecte la conformité aux exigences ou entraîne une modification de l'objectif prévu |
| **Risque Systémique** | Risque spécifique aux capacités à fort impact des modèles d'IA à usage général, ayant un impact significatif sur le marché de l'Union en raison de leur portée, ou en raison d'effets négatifs réels ou raisonnablement prévisibles sur la santé publique, la sécurité, les droits fondamentaux ou la société dans son ensemble |
| **Obligations de Transparence** | Exigences en vertu de l'article 50 d'informer les personnes physiques qu'elles interagissent avec un système d'IA (chatbots, deepfakes, etc.) |
| **Législation d'Harmonisation de l'Union** | Législation de l'UE énumérée à l'Annexe I qui harmonise les conditions de commercialisation de produits (machines, jouets, dispositifs médicaux, aviation, automobile, etc.) |
| **Fournisseur en Amont** | Fournisseur d'un modèle d'IA à Usage Général utilisé par des fournisseurs en aval pour développer des systèmes d'IA |

---

### ANNEXE C: RÉFÉRENCES CROISÉES AUX AUTRES PROCÉDURES

Cette annexe établit les relations entre cette procédure et les autres procédures de conformité à l'IA.

#### C.1 Dépendances des Procédures

```
                    ┌─────────────────────────────┐
                    │  POL-AI-001                 │
                    │  Politique de Gouvernance   │
                    │  de l'IA                    │
                    │  (Politique Parent)         │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ PROC-AI-CLS-001   │   │ PROC-AI-RM-001    │   │ PROC-AI-DATA-001  │
│ Classification    │──▶│ Gestion des       │◀──│ Gouvernance des   │
│ (CETTE PROCÉDURE) │   │ Risques           │   │ Données           │
└───────────────────┘   └─────────┬─────────┘   └───────────────────┘
        │                         │                         │
        │                         ▼                         │
        │               ┌───────────────────┐               │
        └──────────────▶│ PROC-AI-DOC-001   │◀──────────────┘
                        │ Documentation     │
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-INC-001   │
                        │ Réponse aux       │
                        │ Incidents         │
                        └───────────────────┘
```

#### C.2 Matrice d'Interface des Procédures

| De Cette Procédure | Vers Procédure | Interface | Quand |
|---------------------|--------------|-----------|------|
| Étapes 1.1-1.5 | PROC-AI-RM-001 | La classification informe la portée initiale de l'évaluation des risques | Après la classification terminée |
| Étape 2.1 (Registre) | PROC-AI-DOC-001 | Le registre alimente les exigences de documentation technique | Continu |
| Étape 5.2 (Risque Systémique IAUG) | PROC-AI-RM-001 | Les risques systémiques IAUG ajoutés au registre des risques | Lors de la classification IAUG |
| Étape 10.3 (Notification Autorités) | PROC-AI-INC-001 | Le déploiement de système interdit déclenche un incident | Lors de la découverte de non-conformité |
| Classification Haut Risque | PROC-AI-QMS-001 | La désignation haut risque déclenche les exigences SMQ | Après classification |
| Classification IAUG | PROC-AI-VENDOR-001 | Diligence raisonnable fournisseur IAUG amont | Lors de l'utilisation d'IAUG tiers |

#### C.3 Référence Croisée des Modèles

| Modèle de Cette Procédure | Utilisé Par | Objectif |
|------------------------------|---------|---------|
| TMP-AI-CLS-002 (Registre Systèmes IA) | PROC-AI-RM-001 | Le registre des risques est lié au registre de classification |
| TMP-AI-CLS-002 (Registre Systèmes IA) | PROC-AI-DOC-001 | La portée de la documentation technique basée sur la classification |
| TMP-AI-CLS-003 (Classeur IAUG) | PROC-AI-VENDOR-001 | Évaluation de fournisseurs pour fournisseurs IAUG |

---

### ANNEXE D: CARTE DE RÉFÉRENCE RAPIDE

#### Référence Rapide de Classification

**PRATIQUES INTERDITES (Article 5) - ARRÊT IMMÉDIAT:**

1. ❌ Manipulation subliminale
2. ❌ Exploitation de vulnérabilités
3. ❌ Notation sociale par autorités
4. ❌ Identification biométrique en temps réel (avec exceptions)
5. ❌ Reconnaissance des émotions au travail/dans l'éducation
6. ❌ Catégorisation biométrique (attributs sensibles)
7. ❌ **Collecte de bases de données de reconnaissance faciale (internet/vidéosurveillance)**
8. ❌ Profilage criminel sans supervision humaine

**CLASSIFICATION HAUT RISQUE:**

- Annexe I: Composant de sécurité + évaluation par tiers + produit Annexe I = HAUT RISQUE
- Annexe III: Correspondance de cas d'usage + risque significatif de préjudice = HAUT RISQUE

**CAS D'USAGE ANNEXE III:**

1. Identification biométrique
2. Infrastructure critique
3. Éducation
4. Emploi
5. Services essentiels
6. Forces de l'ordre
7. Migration/asile
8. Justice/démocratie

**CLASSIFICATION IAUG:**

- IAUG Standard: Obligations articles 53-54
- IAUG à Risque Systémique: Calcul d'entraînement ≥ 10^25 FLOP OU désignation Annexe XIII
- Libre/Open Source: Exemptions si vraiment ouvert + pas de risque systémique

**CONTACTS CLÉS:**

| Besoin | Contact | Pour |
|------|---------|-----|
| Questions de classification | Responsable du Programme IA | [Email] |
| Avis juridique pratiques interdites | Directeur Juridique | [Email] |
| Approbation haut risque | Comité de Gouvernance IA | [Liste de Distribution] |
| Classification IAUG | Responsable Conformité IAUG | [Email] |

**DÉLAIS CLÉS:**

| Activité | Délai |
|----------|----------|
| Filtrage pratiques interdites | 1 semaine dès l'initiation |
| Classification complète | ≤ 14 jours dès l'initiation |
| Reclassification (modification substantielle) | Avant le déploiement |
| Examen annuel | Annuellement pour tous les systèmes déployés |

**ESCALADE:**

- Pratique interdite → DJ + Comité Gouv. IA (immédiat)
- Classification haut risque → Comité Gouv. IA (avant déploiement)
- Cas limite → Responsable du Programme IA (dans les 3 jours)

---

### ANNEXE E: LISTE DE VÉRIFICATION DES PRATIQUES INTERDITES ARTICLE 5

Cette annexe fournit le texte juridique complet et exact des 8 pratiques interdites de l'article 5(1) du Règlement sur l'IA de l'UE, avec des orientations d'évaluation.

#### Pratique 1: Techniques Subliminales (Article 5(1)(a))

**Texte Juridique:**
"La mise sur le marché, la mise en service à cette fin spécifique, ou l'utilisation d'un système d'IA qui déploie des techniques subliminales au-delà de la conscience d'une personne dans le but de ou avec l'effet de déformer matériellement le comportement d'une personne ou d'un groupe de personnes en altérant de manière appréciable leur capacité à prendre une décision éclairée, les amenant ainsi à prendre une décision qu'elles n'auraient pas prise autrement d'une manière qui cause ou est raisonnablement susceptible de causer à cette personne, à une autre personne ou à un groupe de personnes un préjudice significatif."

**Questions d'Évaluation:**
- Le système d'IA fonctionne-t-il en dessous de la conscience?
- Manipule-t-il la prise de décision sans que l'utilisateur le sache?
- Pourrait-il causer un préjudice significatif?

**Exemples:**
- ❌ Interdit: IA utilisant des signaux audio/visuels subliminaux pour influencer les achats
- ✅ Autorisé: Systèmes de recommandation transparents

---

#### Pratique 2: Exploitation de Vulnérabilités (Article 5(1)(b))

**Texte Juridique:**
"La mise sur le marché, la mise en service à cette fin spécifique, ou l'utilisation d'un système d'IA qui exploite l'une des vulnérabilités d'une personne physique ou d'un groupe spécifique de personnes en raison de leur âge, de leur handicap ou d'une situation sociale ou économique spécifique, dans le but de ou avec l'effet de déformer matériellement le comportement de cette personne ou d'une personne appartenant à ce groupe d'une manière qui cause ou est raisonnablement susceptible de causer à cette personne ou à une autre personne un préjudice significatif."

**Questions d'Évaluation:**
- Le système cible-t-il des groupes vulnérables (enfants, personnes âgées, personnes handicapées)?
- Exploite-t-il des vulnérabilités pour manipuler le comportement?
- Pourrait-il causer un préjudice significatif?

**Exemples:**
- ❌ Interdit: Jouets IA exploitant la crédulité des enfants pour effectuer des achats
- ❌ Interdit: IA ciblant les personnes âgées ayant un déclin cognitif pour des produits financiers
- ✅ Autorisé: IA d'assistance avec mesures de protection appropriées

---

#### Pratique 3: Notation Sociale par les Autorités Publiques (Article 5(1)(c))

**Texte Juridique:**
"La mise sur le marché, la mise en service à cette fin spécifique, ou l'utilisation d'un système d'IA par les autorités publiques ou en leur nom pour l'évaluation ou la classification de la fiabilité des personnes physiques sur une certaine période en fonction de leur comportement social ou de caractéristiques personnelles ou de personnalité connues, déduites ou prédites, la notation sociale conduisant à l'un ou l'autre des éléments suivants ou aux deux:

(i) un traitement préjudiciable ou défavorable de certaines personnes physiques ou de groupes entiers dans des contextes sociaux sans rapport avec les contextes dans lesquels les données ont été générées ou collectées à l'origine;

(ii) un traitement préjudiciable ou défavorable de certaines personnes physiques ou de groupes entiers qui est injustifié ou disproportionné par rapport à leur comportement social ou à sa gravité."

**Questions d'Évaluation:**
- Est-ce utilisé par ou pour des autorités publiques?
- Évalue-t-il la fiabilité en fonction du comportement social?
- Conduit-il à un traitement préjudiciable dans des contextes non liés?

**Exemples:**
- ❌ Interdit: Système de crédit social gouvernemental
- ✅ Autorisé: Notation de crédit par des entités privées (pas de notation sociale)

---

#### Pratique 4: Identification Biométrique à Distance en Temps Réel (Article 5(1)(d))

**Texte Juridique:**
"L'utilisation de systèmes d'identification biométrique à distance «en temps réel» dans des espaces accessibles au public à des fins répressives, sauf si et dans la mesure où cette utilisation est strictement nécessaire pour l'un des objectifs suivants:

(i) la recherche ciblée de victimes potentielles spécifiques d'enlèvement, de traite des êtres humains ou d'exploitation sexuelle, ainsi que la recherche de personnes disparues;

(ii) la prévention d'une menace spécifique, substantielle et imminente pour la vie ou la sécurité physique de personnes physiques ou d'une menace authentique et présente ou authentique et prévisible d'une attaque terroriste;

(iii) la localisation ou l'identification d'une personne soupçonnée d'avoir commis une infraction pénale, aux fins de mener une enquête ou des poursuites pénales ou d'exécuter une peine privative de liberté pour les infractions visées à l'annexe II et punissables dans l'État membre concerné d'une peine privative de liberté ou d'une mesure de détention d'une durée maximale d'au moins quatre ans."

**Questions d'Évaluation:**
- S'agit-il d'identification biométrique à distance en temps réel?
- Est-elle utilisée dans des espaces accessibles au public?
- Est-elle à des fins répressives?
- L'une des trois exceptions s'applique-t-elle?

**Les Exceptions S'Appliquent Lorsque:**
- Strictement nécessaire pour l'objectif déclaré
- Autorisation préalable obtenue (judiciaire ou autorité indépendante)
- Mesures de protection appropriées en place

**Exemples:**
- ❌ Interdit: Reconnaissance faciale en temps réel pour surveillance publique générale
- ✅ Autorisé (avec autorisation): Reconnaissance faciale en temps réel pour retrouver un enfant disparu
- ✅ Autorisé (avec autorisation): Reconnaissance faciale en temps réel pour prévenir une attaque terroriste imminente

---

#### Pratique 5: Catégorisation Biométrique Déduisant des Attributs Sensibles (Article 5(1)(e))

**Texte Juridique:**
"La mise sur le marché, la mise en service à cette fin spécifique, ou l'utilisation de systèmes d'IA qui créent ou étendent des bases de données de reconnaissance faciale par la collecte non ciblée d'images faciales sur Internet ou à partir de séquences de vidéosurveillance."

**Questions d'Évaluation:**
- Le système déduit-il des attributs sensibles à partir de données biométriques?
- Les attributs déduits sont-ils: race, opinions politiques, appartenance syndicale, convictions religieuses/philosophiques, vie sexuelle ou orientation sexuelle?
- Est-il utilisé par les forces de l'ordre?

**Exceptions:**
- Étiquetage ou filtrage d'ensembles de données biométriques légalement acquis
- Catégorisation par les forces de l'ordre pour des enquêtes spécifiques (avec mesures de protection)

**Exemples:**
- ❌ Interdit: IA déduisant la race ou l'orientation sexuelle à partir d'images faciales pour les forces de l'ordre
- ✅ Autorisé: Systèmes de vérification d'âge (l'âge n'est pas un attribut sensible)

---

#### Pratique 6: Reconnaissance des Émotions sur le Lieu de Travail et dans les Établissements d'Enseignement (Article 5(1)(f))

**Texte Juridique:**
"La mise sur le marché, la mise en service à cette fin spécifique, ou l'utilisation de systèmes d'IA pour déduire les émotions d'une personne physique dans les domaines du lieu de travail et des établissements d'enseignement, sauf lorsque l'utilisation du système d'IA est destinée à être mise en place ou sur le marché pour des raisons médicales ou de sécurité."

**Questions d'Évaluation:**
- Le système reconnaît-il ou déduit-il des émotions?
- Est-il utilisé sur le lieu de travail ou dans des établissements d'enseignement?
- Est-ce pour des raisons médicales ou de sécurité?

**Exceptions Médicales/Sécurité:**
- Détection de somnolence du conducteur pour la sécurité
- Diagnostic médical de conditions émotionnelles

**Exemples:**
- ❌ Interdit: Reconnaissance des émotions pour évaluer les performances des employés
- ❌ Interdit: Reconnaissance des émotions pour évaluer l'engagement des étudiants en classe
- ✅ Autorisé: Reconnaissance des émotions pour systèmes de sécurité du conducteur
- ✅ Autorisé: Reconnaissance des émotions pour diagnostiquer des problèmes de santé mentale

---

#### Pratique 7: Collecte de Bases de Données de Reconnaissance Faciale (Article 5(1)(g)) [CORRIGÉ]

**Texte Juridique:**
"La mise sur le marché, la mise en service à cette fin spécifique, ou l'utilisation de systèmes d'IA qui créent ou étendent des bases de données de reconnaissance faciale par la collecte non ciblée d'images faciales sur Internet ou à partir de séquences de vidéosurveillance."

**Questions d'Évaluation:**
- Le système crée-t-il ou étend-il des bases de données de reconnaissance faciale?
- Utilise-t-il la collecte non ciblée sur Internet ou vidéosurveillance?
- La collecte est-elle ciblée ou non ciblée?

**Distinction Clé:**
- **Collecte non ciblée:** Interdite (collecte massive sans objectif spécifique)
- **Collecte ciblée:** Autorisée (enquête spécifique avec base légale)

**Exemples:**
- ❌ Interdit: IA collectant des millions de visages sur les réseaux sociaux pour construire une base de données de reconnaissance faciale
- ❌ Interdit: IA collectant des séquences de vidéosurveillance pour construire une base de données faciale
- ✅ Autorisé: Collecte ciblée d'images d'un suspect spécifique avec mandat

---

#### Pratique 8: Évaluation du Risque d'Infractions Pénales Basée sur le Profilage (Article 5(1)(h))

**Texte Juridique:**
"La mise sur le marché, la mise en service à cette fin spécifique, ou l'utilisation de systèmes d'IA pour évaluer le risque qu'une personne physique commette ou récidive une infraction pénale, qui n'est pas uniquement basée sur le profilage de personnes physiques tel que visé à l'article 3(4) de la directive (UE) 2016/680 ou l'évaluation de traits et caractéristiques de personnalité ou le comportement criminel passé de personnes physiques ou de groupes."

**Questions d'Évaluation:**
- Le système évalue-t-il le risque de commission/récidive d'infractions pénales?
- Est-il basé uniquement sur le profilage, les traits de personnalité ou le comportement passé?
- Ou augmente-t-il l'évaluation humaine avec des facteurs supplémentaires?

**Interdit Lorsque:**
- L'évaluation est basée **uniquement** sur le profilage automatisé
- Pas de supervision humaine ou de facteurs supplémentaires

**Autorisé Lorsque:**
- L'IA augmente l'évaluation humaine (pas la seule base)
- Des facteurs objectifs supplémentaires sont pris en compte
- Capacité d'examen et de veto humain

**Exemples:**
- ❌ Interdit: Prédiction de récidive entièrement automatisée basée uniquement sur le profilage
- ✅ Autorisé: Outil d'évaluation des risques qui fournit des informations supplémentaires aux juges (décideur humain)

---

**INSTRUCTIONS D'UTILISATION DE LA LISTE DE VÉRIFICATION:**

Pour chaque système d'IA, évaluer par rapport aux 8 pratiques interdites:

1. Lire le texte juridique exact
2. Répondre aux questions d'évaluation
3. Examiner les exemples pour orientation
4. Documenter la justification de la détermination
5. Si UNE pratique s'applique → classification INTERDITE
6. Si cas limite → Escalader au DJ pour avis juridique contraignant
7. Documenter l'avis du DJ dans l'enregistrement de classification

**CRITIQUE:** Si une pratique interdite s'applique, le développement et le déploiement doivent cesser immédiatement. Aucune exception.

---

**FIN DE LA PROCÉDURE PROC-AI-CLS-001**

---

## HISTORIQUE DES RÉVISIONS

| Version | Date | Auteur | Modifications |
|---|---|---|---|
| 1.0 | [Date] | [Nom] | Développement initial de la procédure |
| 2.0 | [Date] | [Nom] | Ajout de la classification IAUG (Section 5); Correction du texte de l'article 5(1)(g); Ajout des Annexes A-E; Renforcement des mécanismes de contrôle; Ajout de la bibliothèque d'ICP |
| | | | |

---

## APPROBATION ET AUTORISATION

| Rôle | Nom | Titre | Signature | Date |
|---|---|---|---|---|
| **Préparé Par** | [Nom] | Responsable du Programme Règlement sur l'IA | __________ | ________ |
| **Examiné Par** | [Nom] | Directeur Juridique | __________ | ________ |
| **Examiné Par** | [Nom] | Responsable de Conformité IAUG | __________ | ________ |
| **Approuvé Par** | [Nom] | Président du Comité de Gouvernance de l'IA | __________ | ________ |

---

## CONTRÔLE DU DOCUMENT

**Statut du Document:** [Brouillon/Approuvé]
**Classification:** [Public/Interne/Confidentiel]
**Distribution:** Responsable du Programme Règlement sur l'IA, Propriétaires de Systèmes IA, Comité de Gouvernance de l'IA, Responsable de Conformité IAUG, Conformité, Audit Interne
**Conservation:** 10 ans (selon le Règlement sur l'IA de l'UE)
**Fréquence d'Examen:** Annuelle ou lors de changement réglementaire
**Date d'Examen Suivante:** [Date]

---

**FIN DU DOCUMENT**
