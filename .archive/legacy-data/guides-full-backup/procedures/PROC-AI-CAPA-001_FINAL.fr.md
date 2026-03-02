# PROC-AI-CAPA-001 : Procédure d'Actions Correctives et Préventives

**ID de Procédure :** PROC-AI-CAPA-001
**Nom de Procédure :** Procédure d'Actions Correctives et Préventives (CAPA)
**Norme :** STD-AI-009 : Norme de Gestion de la Qualité, STD-AI-013 : Norme de Gestion des Incidents
**Couvre les Contrôles :** QMS-006, QMS-007, QMS-008, INC-005, INC-006
**Date d'Entrée en Vigueur :** [À compléter]
**Dernière Mise à Jour :** [À compléter]
**Date de Prochaine Révision :** [À compléter]
**Statut d'Approbation :** [Projet/Approuvé]

---

## 1. OBJECTIF ET PÉRIMÈTRE

### 1.1 Objectif

Cette procédure établit le processus d'identification, de documentation, de mise en œuvre et de vérification des actions correctives et préventives (CAPA) pour les systèmes d'IA. Elle garantit que les problèmes sont traités systématiquement à leur cause racine et que des mesures sont mises en œuvre pour prévenir leur récurrence ou l'occurrence de problèmes similaires.

### 1.2 Périmètre

Cette procédure s'applique à :
- Les non-conformités identifiées dans les systèmes d'IA
- Les incidents et quasi-accidents impliquant des systèmes d'IA
- Les constats d'audit relatifs à la conformité IA
- Les réclamations clients liées aux performances des systèmes d'IA
- Les défaillances des contrôles de risque
- Les écarts de performance
- Les observations réglementaires

### 1.3 Définitions

| Terme | Définition |
|------|------------|
| **Action Corrective** | Action visant à éliminer la cause d'une non-conformité détectée ou d'une autre situation indésirable afin d'empêcher sa récurrence |
| **Action Préventive** | Action visant à éliminer la cause d'une non-conformité potentielle ou d'une autre situation potentiellement indésirable afin d'empêcher son occurrence |
| **Non-Conformité** | Non-satisfaction d'une exigence |
| **Cause Racine** | Raison fondamentale de l'occurrence d'un problème |
| **Vérification d'Efficacité** | Confirmation que le CAPA a atteint les résultats escomptés |

### 1.4 Responsable de la Procédure

| Rôle | Nom | Titre | Contact |
|------|------|-------|---------|
| **Responsable de la Procédure** | [Nom] | Responsable Qualité | [Email/Téléphone] |
| **Autorité Technique** | [Nom] | Responsable du Développement IA | [Email/Téléphone] |
| **Conformité** | [Nom] | Responsable de la Conformité IA | [Email/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles Clés

| Rôle | Responsabilité | Autorité |
|------|----------------|-----------|
| **Initiateur CAPA** | Identifier et signaler les problèmes ; initier le CAPA | Soumettre des demandes CAPA |
| **Propriétaire CAPA** | Posséder le CAPA ; assurer son achèvement | Attribuer des ressources ; approuver la clôture |
| **Responsable Qualité** | Superviser le processus CAPA ; assurer l'efficacité | Approuver les CAPA ; rejeter les actions inadéquates |
| **Enquêteur Cause Racine** | Mener l'analyse de cause racine | Déterminer la cause racine |
| **Exécutant des Actions** | Mettre en œuvre les actions correctives/préventives | Exécuter les actions assignées |
| **Responsable Vérification** | Vérifier l'efficacité des actions | Approuver ou exiger des actions supplémentaires |
| **Propriétaire Système IA** | Approuver les CAPA pour leurs systèmes | Accepter le risque résiduel |

### 2.2 Matrice RACI

| Activité | Initiateur | Propriétaire CAPA | Resp. Qualité | Enquêteur | Exécutant | Vérificateur |
|----------|-----------|-------------------|---------------|-----------|-----------|--------------|
| Identifier le problème | A | I | I | I | I | I |
| Initier le CAPA | R | A | C | I | I | I |
| Analyse cause racine | C | A | C | R | I | I |
| Définir les actions | C | A | C | C | R | I |
| Approuver le plan CAPA | I | R | A | I | I | I |
| Mettre en œuvre les actions | I | A | I | C | R | I |
| Vérifier l'efficacité | I | C | C | I | I | A |
| Clôturer le CAPA | I | R | A | I | I | C |

**Légende :** A=Responsable Final, R=Réalisateur, C=Consulté, I=Informé

---

## 3. APERÇU DU PROCESSUS CAPA

### 3.1 Flux de Processus

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FLUX DE PROCESSUS CAPA                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │IDENTIFIER│───►│ INITIER  │───►│ ENQUÊTER │───►│PLANIFIER │            │
│   │ PROBLÈME │    │   CAPA   │    │CAUSE RACINE│  │ ACTIONS  │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│                                                         │                   │
│                                                         ▼                   │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │ CLÔTURER │◄───│ VÉRIFIER │◄───│METTRE EN │◄───│ APPROUVER│            │
│   │   CAPA   │    │EFFICACITÉ│    │  ŒUVRE   │    │   PLAN   │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │               LEÇONS APPRISES & AMÉLIORATION                        │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Catégories CAPA

| Catégorie | Description | Priorité | Clôture Cible |
|----------|-------------|----------|---------------|
| **Critique** | Impact vie/sécurité, non-conformité réglementaire majeure, violation droits fondamentaux | Immédiate | 30 jours |
| **Majeure** | Problème de conformité significatif, écart de performance majeur, problèmes répétés | Élevée | 60 jours |
| **Mineure** | Impact limité, problème isolé, lacune documentaire | Normale | 90 jours |
| **Amélioration** | Amélioration proactive, opportunité d'optimisation | Faible | 120 jours |

---

## 4. PROCÉDURES DÉTAILLÉES CAPA

### 4.1 Phase 1 : Identification

#### 4.1.1 Sources CAPA

Les CAPA peuvent être initiés à partir de :

| Source | Exemples |
|--------|----------|
| **Incidents** | Dysfonctionnements de système IA, erreurs, défaillances |
| **Audits** | Audits internes, audits externes, inspections réglementaires |
| **Évaluations des Risques** | Risques identifiés, défaillances de contrôles |
| **Réclamations** | Réclamations clients, retours utilisateurs |
| **Non-Conformités** | Écart par rapport aux exigences, spécifications |
| **Surveillance Post-Mise sur Marché** | Tendances de performance, problèmes sur le terrain |
| **Quasi-Accidents** | Incidents potentiels évités |
| **Revue de Direction** | Opportunités d'amélioration identifiées |

#### 4.1.2 Documentation du Problème

Pour chaque problème identifié, documenter :
1. Description du problème
2. Quand et comment il a été découvert
3. Qui l'a signalé
4. Évaluation de l'impact (réel et potentiel)
5. Actions de confinement immédiates prises
6. Preuves collectées

### 4.2 Phase 2 : Initiation

**Étape 1 : Créer l'Enregistrement CAPA**
1. Compléter le Formulaire de Demande CAPA (FORM-AI-CAPA-001)
2. Attribuer un ID CAPA
3. Déterminer la catégorie CAPA (Critique/Majeure/Mineure/Amélioration)
4. Attribuer un Propriétaire CAPA
5. Fixer la date d'achèvement cible

**Étape 2 : Confinement Immédiat**
1. Évaluer le besoin de confinement immédiat
2. Mettre en œuvre des actions de confinement pour limiter l'impact
3. Documenter les actions de confinement
4. Vérifier l'efficacité du confinement
5. Communiquer aux parties prenantes affectées

**Étape 3 : Évaluation de l'Impact**
1. Évaluer l'impact sur :
   - La santé et la sécurité
   - Les droits fondamentaux
   - Le statut de conformité
   - Les performances du système
   - Les autres systèmes IA
2. Déterminer si une notification réglementaire est requise
3. Escalader si Critique ou Majeur

### 4.3 Phase 3 : Enquête

**Étape 4 : Analyse de Cause Racine**

Sélectionner la méthode d'analyse appropriée selon la complexité :

| Méthode | Quand l'Utiliser | Description |
|---------|------------------|-------------|
| **5 Pourquoi** | Problèmes simples | Demander "pourquoi" de façon répétée jusqu'à trouver la cause racine |
| **Diagramme d'Ishikawa** | Multiples causes potentielles | Catégoriser les causes (Personnel, Processus, Technologie, Données, Environnement) |
| **Analyse par Arbre de Défaillance** | Complexe, critique pour la sécurité | Analyse déductive systématique |
| **Analyse des Modes de Défaillance** | Défaillances techniques | Analyser les modes et effets de défaillance |

**Catégories de Cause Racine pour les Systèmes IA :**

| Catégorie | Exemples |
|----------|----------|
| **Données** | Qualité des données, biais des données, dérive des données, erreurs d'étiquetage |
| **Modèle** | Architecture du modèle, entraînement, surapprentissage, sous-apprentissage |
| **Algorithme** | Erreurs logiques, cas limites, problèmes d'optimisation |
| **Processus** | Procédures inadéquates, processus non suivi |
| **Personnel** | Lacunes de formation, compétence, erreur humaine |
| **Technologie** | Infrastructure, intégration, dépendances |
| **Environnement** | Conditions d'exploitation, changements de contexte |

**Étape 5 : Documenter la Cause Racine**
1. Documenter la méthodologie d'enquête
2. Enregistrer les preuves analysées
3. Énoncer clairement la ou les causes racines
4. Distinguer la cause racine des facteurs contributifs
5. Obtenir l'accord des parties prenantes

### 4.4 Phase 4 : Planification des Actions

**Étape 6 : Définir les Actions Correctives**
1. Pour chaque cause racine, définir la ou les actions pour l'éliminer
2. S'assurer que les actions traitent la cause racine, pas les symptômes
3. Considérer les implications systémiques
4. Attribuer un propriétaire d'action et une date d'échéance
5. Définir les critères de succès

**Étape 7 : Définir les Actions Préventives**
1. Identifier les scénarios de récurrence potentiels
2. Identifier les systèmes/processus similaires à risque
3. Définir les actions pour prévenir l'occurrence ailleurs
4. Étendre les actions horizontalement le cas échéant

**Étape 8 : Analyse Risques-Bénéfices**
1. Évaluer la réduction des risques des actions proposées
2. Évaluer le coût et l'effort requis
3. Évaluer les conséquences imprévues potentielles
4. Prioriser les actions selon l'analyse

**Étape 9 : Créer le Plan d'Action**
Documenter pour chaque action :
- Description de l'action
- Type d'action (Corrective/Préventive)
- Propriétaire
- Date d'échéance
- Ressources requises
- Critères de succès
- Méthode de vérification

### 4.5 Phase 5 : Approbation

**Étape 10 : Examen du Plan CAPA**
1. Le Responsable Qualité examine le plan CAPA
2. Vérifier que la cause racine est adéquatement traitée
3. Vérifier que les actions sont appropriées et suffisantes
4. Vérifier que les délais sont réalistes
5. Approuver ou retourner pour révision

**Étape 11 : Approbation des Parties Prenantes**
Selon la catégorie CAPA :

| Catégorie | Approbation Requise |
|----------|---------------------|
| Critique | Responsable Qualité + Propriétaire Système IA + Conformité + Comité Gouvernance IA |
| Majeure | Responsable Qualité + Propriétaire Système IA |
| Mineure | Responsable Qualité |
| Amélioration | Propriétaire CAPA |

### 4.6 Phase 6 : Mise en Œuvre

**Étape 12 : Exécuter les Actions**
1. Mettre en œuvre les actions selon le plan approuvé
2. Documenter les activités de mise en œuvre
3. Suivre les progrès par rapport aux jalons
4. Escalader les retards ou obstacles
5. Collecter les preuves de mise en œuvre

**Étape 13 : Mettre à Jour la Documentation**
1. Mettre à jour les procédures si nécessaire
2. Mettre à jour la documentation technique
3. Mettre à jour les supports de formation
4. Mettre à jour les évaluations des risques
5. Communiquer les changements aux parties prenantes

### 4.7 Phase 7 : Vérification

**Étape 14 : Vérifier la Mise en Œuvre**
1. Confirmer que toutes les actions sont terminées
2. Examiner les preuves de mise en œuvre
3. Vérifier que la documentation est mise à jour

**Étape 15 : Vérifier l'Efficacité**
1. Définir la méthode de vérification :
   - Tests/validation
   - Audit
   - Examen des données de surveillance
   - Observation du processus
2. Exécuter la vérification après une période appropriée
3. Comparer aux critères de succès
4. Documenter les résultats de vérification

**Étape 16 : Détermination de l'Efficacité**

| Résultat | Action |
|--------|--------|
| **Efficace** | Procéder à la clôture |
| **Partiellement Efficace** | Mettre en œuvre des actions supplémentaires |
| **Non Efficace** | Réenquêter ; un nouveau CAPA peut être requis |

### 4.8 Phase 8 : Clôture

**Étape 17 : Clôturer le CAPA**
1. Compiler toute la documentation CAPA
2. Obtenir les approbations de clôture
3. Documenter les leçons apprises
4. Clôturer l'enregistrement CAPA
5. Archiver la documentation

**Étape 18 : Leçons Apprises**
1. Documenter les apprentissages clés
2. Partager avec les équipes pertinentes
3. Mettre à jour la formation si applicable
4. Considérer les améliorations de processus
5. Intégrer à la revue de direction

---

## 5. NOTIFICATION RÉGLEMENTAIRE

### 5.1 Déclencheurs de Notification

Une notification réglementaire peut être requise si le CAPA concerne :
- Un incident grave selon le Règlement européen sur l'IA
- Une défaillance de conformité pour une IA à haut risque
- Une violation des droits fondamentaux
- Un problème de sécurité

### 5.2 Processus de Notification

1. Évaluer l'exigence de notification avec le Responsable de la Conformité
2. Suivre PROC-AI-INC-001 pour les incidents graves
3. Documenter la notification et la réponse de l'autorité
4. Inclure les retours réglementaires dans le CAPA

---

## 6. SURVEILLANCE ET MÉTRIQUES

### 6.1 Métriques CAPA

| Métrique | Description | Cible |
|--------|-------------|--------|
| Vieillissement CAPA | CAPA ouverts au-delà de la date cible | <10% |
| Efficacité CAPA | CAPA vérifiés comme efficaces | >90% |
| Récurrence CAPA | Même problème récurrent dans les 12 mois | <5% |
| Temps de Cycle CAPA | Jours moyens de l'initiation à la clôture | <60 jours |
| Qualité Cause Racine | CAPA traitant la cause racine vs. symptômes | >95% |

### 6.2 Rapports

| Rapport | Fréquence | Audience |
|--------|-----------|----------|
| Rapport de Statut CAPA | Mensuel | Comité de Gouvernance IA |
| Analyse de Tendances CAPA | Trimestriel | Revue de Direction |
| Résumé d'Efficacité CAPA | Annuel | Équipe Exécutive |

---

## 7. ENREGISTREMENTS

### 7.1 Enregistrements Requis

| ID Enregistrement | Nom Enregistrement | Période de Rétention | Propriétaire |
|-------------------|-------------------|---------------------|--------------|
| REC-AI-CAPA-001 | Enregistrements CAPA | 10 ans | Responsable Qualité |
| REC-AI-CAPA-002 | Enregistrements Analyse Cause Racine | 10 ans | Responsable Qualité |
| REC-AI-CAPA-003 | Enregistrements de Vérification | 10 ans | Responsable Qualité |
| REC-AI-CAPA-004 | Enregistrements Leçons Apprises | 10 ans | Responsable Qualité |

### 7.2 Formulaires Requis

| ID Formulaire | Nom Formulaire | Objectif |
|---------------|----------------|----------|
| FORM-AI-CAPA-001 | Formulaire de Demande CAPA | Initier un CAPA |
| FORM-AI-CAPA-002 | Formulaire Analyse Cause Racine | Documenter l'ACR |
| FORM-AI-CAPA-003 | Formulaire Vérification d'Efficacité | Vérifier l'efficacité du CAPA |

---

## 8. DOCUMENTS ASSOCIÉS

### 8.1 Normes
- STD-AI-009 : Norme de Gestion de la Qualité
- STD-AI-013 : Norme de Gestion des Incidents

### 8.2 Procédures
- PROC-AI-INC-001 : Procédure de Gestion des Incidents
- PROC-AI-CHG-001 : Procédure de Gestion du Changement
- PROC-AI-QMS-001 : Procédure de Système de Management de la Qualité
- PROC-AI-RM-001 : Procédure de Gestion des Risques

---

## 9. HISTORIQUE DES RÉVISIONS

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------------|
| 1.0 | [Date] | [Auteur] | Publication initiale |

---

## ANNEXE A : FORMULAIRE DE DEMANDE CAPA (FORM-AI-CAPA-001)

### Section 1 : Identification CAPA

| Champ | Entrée |
|-------|--------|
| **ID CAPA** | CAPA-AI-[AAAA]-[####] |
| **Date d'Initiation** | |
| **Nom de l'Initiateur** | |
| **Catégorie CAPA** | [ ] Critique [ ] Majeure [ ] Mineure [ ] Amélioration |
| **Date de Clôture Cible** | |

### Section 2 : Détails du Problème

| Champ | Entrée |
|-------|--------|
| **Nom du Système IA** | |
| **ID du Système IA** | |
| **Source du Problème** | [ ] Incident [ ] Audit [ ] Réclamation [ ] Risque [ ] PMM [ ] Autre : |
| **Référence Source** | |
| **Description du Problème** | |
| **Date de Découverte** | |
| **Évaluation de l'Impact** | |

### Section 3 : Actions de Confinement

| # | Action de Confinement | Propriétaire | Date | Statut |
|---|----------------------|--------------|------|--------|
| 1 | | | | [ ] Terminé [ ] En Cours |
| 2 | | | | [ ] Terminé [ ] En Cours |

### Section 4 : Analyse de Cause Racine

| Champ | Entrée |
|-------|--------|
| **Méthode d'Analyse** | [ ] 5 Pourquoi [ ] Ishikawa [ ] Arbre de Défaillance [ ] Autre : |
| **Cause(s) Racine** | |
| **Facteurs Contributifs** | |
| **Preuves Examinées** | |

### Section 5 : Actions Correctives

| # | Action | Type | Propriétaire | Date d'Échéance | Statut |
|---|--------|------|--------------|-----------------|--------|
| 1 | | [ ] C [ ] P | | | [ ] Ouvert [ ] Terminé |
| 2 | | [ ] C [ ] P | | | [ ] Ouvert [ ] Terminé |
| 3 | | [ ] C [ ] P | | | [ ] Ouvert [ ] Terminé |

(C=Correctif, P=Préventif)

### Section 6 : Vérification

| Champ | Entrée |
|-------|--------|
| **Méthode de Vérification** | |
| **Date de Vérification** | |
| **Vérifié Par** | |
| **Résultat d'Efficacité** | [ ] Efficace [ ] Partiellement Efficace [ ] Non Efficace |
| **Preuve de Vérification** | |

### Section 7 : Approbations

| Rôle | Nom | Signature | Date |
|------|------|-----------|------|
| **Propriétaire CAPA** | | | |
| **Responsable Qualité** | | | |
| **Propriétaire Système IA** (si requis) | | | |

### Section 8 : Clôture

| Champ | Entrée |
|-------|--------|
| **Date de Clôture** | |
| **Clôturé Par** | |
| **Leçons Apprises** | |
