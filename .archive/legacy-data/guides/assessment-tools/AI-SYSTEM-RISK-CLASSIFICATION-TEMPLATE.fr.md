# Modèle de Classification des Risques du Système d'IA

## Informations sur le Document

| Champ | Valeur |
|-------|-------|
| **ID du Document** | TOOL-CLS-001 |
| **Version** | 1.0 |
| **Statut** | Prêt à l'Emploi |
| **Responsable** | Responsable du Programme AI Act |
| **Dernière Mise à Jour** | 2024-12-01 |

## Objectif

Ce modèle fournit une approche structurée pour classifier les systèmes d'IA selon les niveaux de risque de l'AI Act de l'UE. Utilisez cet arbre de décision et ce modèle de documentation pour garantir des décisions de classification cohérentes et défendables.

---

## Niveaux de Risque de l'AI Act de l'UE

| Niveau de Risque | Description | Exigences Principales |
|------------|-------------|------------------|
| **Interdit** | Pratiques d'IA interdites purement et simplement | Ne peut être mis sur le marché ou utilisé |
| **Haut Risque** | Systèmes d'IA dans les domaines de l'Annexe III ou composants de sécurité | Conformité complète au Chapitre 2 requise |
| **Risque Limité** | Systèmes d'IA avec obligations de transparence | Exigences de transparence de l'Article 50 |
| **Risque Minimal** | Tous les autres systèmes d'IA | Codes de conduite volontaires |

---

## Arbre de Décision de Classification

### Étape 1 : Vérification des Pratiques Interdites (Article 5)

Le système d'IA implique-t-il l'un des éléments suivants ?

| # | Pratique Interdite | Vérification |
|---|---------------------|-------|
| 1.1 | Manipulation subliminale causant un préjudice | [ ] Oui [ ] Non |
| 1.2 | Exploitation de vulnérabilités (âge, handicap, situation sociale) | [ ] Oui [ ] Non |
| 1.3 | Notation sociale par les autorités publiques | [ ] Oui [ ] Non |
| 1.4 | Identification biométrique à distance en temps réel dans les espaces publics (application de la loi) | [ ] Oui [ ] Non |
| 1.5 | Collecte non ciblée pour des bases de données de reconnaissance faciale | [ ] Oui [ ] Non |
| 1.6 | Reconnaissance des émotions sur le lieu de travail/dans l'éducation (sauf sécurité/médical) | [ ] Oui [ ] Non |
| 1.7 | Catégorisation biométrique inférant des attributs sensibles | [ ] Oui [ ] Non |
| 1.8 | Profilage prédictif individuel basé uniquement sur le profilage | [ ] Oui [ ] Non |

**Si UNE case est cochée OUI** → **INTERDIT** (Arrêtez ici)
**Si TOUTES les cases sont NON** → Passer à l'Étape 2

---

### Étape 2 : Vérification de la Législation Produit de l'Annexe I

Le système d'IA est-il un composant de sécurité de, ou lui-même un produit couvert par :

| # | Législation UE | Vérification |
|---|----------------|-------|
| 2.1 | Règlement Machines (UE) 2023/1230 | [ ] Oui [ ] Non |
| 2.2 | Directive Sécurité des Jouets 2009/48/CE | [ ] Oui [ ] Non |
| 2.3 | Règlement Dispositifs Médicaux (UE) 2017/745 | [ ] Oui [ ] Non |
| 2.4 | Règlement Diagnostic In Vitro (UE) 2017/746 | [ ] Oui [ ] Non |
| 2.5 | Règlement Aviation Civile (UE) 2018/1139 | [ ] Oui [ ] Non |
| 2.6 | Règlement Véhicules Automobiles (UE) 2019/2144 | [ ] Oui [ ] Non |
| 2.7 | Autre législation de l'Annexe I | [ ] Oui [ ] Non |

**Si UNE case est cochée OUI** → **HAUT RISQUE** (Évaluation de conformité par tiers requise)
**Si TOUTES les cases sont NON** → Passer à l'Étape 3

---

### Étape 3 : Vérification des Domaines à Haut Risque de l'Annexe III

Le système d'IA entre-t-il dans une catégorie de l'Annexe III ?

#### 3.1 Biométrie

| Cas d'Usage | Vérification |
|----------|-------|
| Identification biométrique à distance | [ ] Oui [ ] Non |
| Catégorisation biométrique par attributs sensibles | [ ] Oui [ ] Non |
| Reconnaissance des émotions | [ ] Oui [ ] Non |

#### 3.2 Infrastructure Critique

| Cas d'Usage | Vérification |
|----------|-------|
| Composant de sécurité dans la gestion d'infrastructure critique | [ ] Oui [ ] Non |
| Gestion du trafic routier | [ ] Oui [ ] Non |
| Approvisionnement en eau, gaz, chauffage, électricité | [ ] Oui [ ] Non |

#### 3.3 Éducation et Formation Professionnelle

| Cas d'Usage | Vérification |
|----------|-------|
| Détermination de l'accès à l'éducation | [ ] Oui [ ] Non |
| Évaluation des résultats d'apprentissage | [ ] Oui [ ] Non |
| Évaluation du niveau approprié d'éducation | [ ] Oui [ ] Non |
| Surveillance des comportements interdits pendant les tests | [ ] Oui [ ] Non |

#### 3.4 Emploi et Gestion des Travailleurs

| Cas d'Usage | Vérification |
|----------|-------|
| Recrutement ou sélection | [ ] Oui [ ] Non |
| Décisions de promotion ou de licenciement | [ ] Oui [ ] Non |
| Attribution de tâches basée sur le comportement/les traits | [ ] Oui [ ] Non |
| Surveillance ou évaluation de la performance | [ ] Oui [ ] Non |

#### 3.5 Accès aux Services Essentiels

| Cas d'Usage | Vérification |
|----------|-------|
| Évaluation de la solvabilité | [ ] Oui [ ] Non |
| Évaluation des risques pour l'assurance vie/santé | [ ] Oui [ ] Non |
| Admissibilité aux prestations publiques | [ ] Oui [ ] Non |
| Répartition des services d'urgence | [ ] Oui [ ] Non |

#### 3.6 Application de la Loi

| Cas d'Usage | Vérification |
|----------|-------|
| Évaluation des risques de personnes physiques | [ ] Oui [ ] Non |
| Polygraphes ou outils similaires | [ ] Oui [ ] Non |
| Évaluation de la fiabilité des preuves | [ ] Oui [ ] Non |
| Profilage lors d'enquête | [ ] Oui [ ] Non |

#### 3.7 Migration, Asile, Contrôle des Frontières

| Cas d'Usage | Vérification |
|----------|-------|
| Polygraphes ou outils similaires | [ ] Oui [ ] Non |
| Évaluation des risques (sécurité, santé, migration irrégulière) | [ ] Oui [ ] Non |
| Examen des demandes | [ ] Oui [ ] Non |
| Détection/identification de personnes | [ ] Oui [ ] Non |

#### 3.8 Administration de la Justice

| Cas d'Usage | Vérification |
|----------|-------|
| Recherche/interprétation des faits et du droit | [ ] Oui [ ] Non |
| Application du droit aux faits | [ ] Oui [ ] Non |
| Résolution alternative des litiges | [ ] Oui [ ] Non |

**Si UNE case est cochée OUI** → **HAUT RISQUE**
**Si TOUTES les cases sont NON** → Passer à l'Étape 4

---

### Étape 4 : Vérification du Risque Limité (Transparence) (Article 50)

Le système d'IA implique-t-il l'un des éléments suivants ?

| # | Déclencheur de Transparence | Vérification |
|---|---------------------|-------|
| 4.1 | Interaction directe avec des personnes physiques (chatbots, assistants virtuels) | [ ] Oui [ ] Non |
| 4.2 | Génération de contenu audio, image, vidéo ou texte synthétique | [ ] Oui [ ] Non |
| 4.3 | Reconnaissance des émotions ou catégorisation biométrique | [ ] Oui [ ] Non |
| 4.4 | Deepfakes ou contenu manipulé | [ ] Oui [ ] Non |

**Si UNE case est cochée OUI** → **RISQUE LIMITÉ** (Obligations de transparence de l'Article 50 applicables)
**Si TOUTES les cases sont NON** → **RISQUE MINIMAL**

---

## Modèle de Documentation de Classification

### Informations sur le Système

| Champ | Saisie |
|-------|-------|
| **Nom du Système d'IA** | |
| **ID du Système** | |
| **Version** | |
| **Description** | |
| **Usage Prévu** | |
| **Date de Classification** | |
| **Classificateur** | |

### Résultat de Classification

| Champ | Saisie |
|-------|-------|
| **Niveau de Risque** | [ ] Interdit [ ] Haut Risque [ ] Limité [ ] Minimal |
| **Base de Classification** | |
| **Annexe I Applicable** | [ ] Oui [ ] Non |
| **Catégorie Annexe III** | |
| **Article 50 Applicable** | [ ] Oui [ ] Non |

### Preuves à l'Appui

| Type de Preuve | Référence du Document |
|---------------|-------------------|
| Description du système | |
| Documentation d'usage prévu | |
| Spécifications techniques | |
| Examen juridique (le cas échéant) | |

### Approbation

| Champ | Saisie |
|-------|-------|
| **Approuvé Par** | |
| **Date d'Approbation** | |
| **Prochaine Date de Révision** | |

---

## Déclencheurs de Révision de Classification

La reclassification doit être envisagée lorsque :

- [ ] L'usage prévu change
- [ ] De nouveaux cas d'usage sont ajoutés
- [ ] Des modifications substantielles sont apportées
- [ ] Les orientations réglementaires sont mises à jour
- [ ] La révision annuelle est due

---

## Documents Connexes

- [Procédure de Classification](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Formulaire de Classification](../forms/FORM-AI-CLS-001_FINAL.md)
- [Processus de Détermination du Rôle](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Historique des Révisions

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Responsable du Programme AI Act | Version initiale |
