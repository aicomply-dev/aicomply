# PROC-AI-CHG-001 : Procédure de gestion des changements IA

**ID de la procédure :** PROC-AI-CHG-001
**Nom de la procédure :** Procédure de gestion des changements IA
**Norme :** STD-AI-009 : Norme de gestion de la qualité, STD-AI-002 : Norme de gestion des risques
**Couvre les contrôles :** QMS-004, QMS-005, RM-010, RM-011
**Date d'entrée en vigueur :** [À remplir]
**Dernière mise à jour :** [À remplir]
**Date de prochaine révision :** [À remplir]
**Statut d'approbation :** [Brouillon/Approuvé]

---

## 1. OBJET ET PÉRIMÈTRE

### 1.1 Objet

Cette procédure établit les exigences pour gérer les changements apportés aux systèmes d'IA tout au long de leur cycle de vie, en garantissant que les modifications n'affectent pas négativement la conformité avec le Règlement européen sur l'IA, les performances du système ou les niveaux de risque. Elle garantit que tous les changements sont correctement évalués, approuvés, mis en œuvre et documentés.

### 1.2 Périmètre

Cette procédure s'applique à :
- Tous les changements apportés aux systèmes d'IA déployés (à risque élevé, à risque limité, à risque minimal)
- Mises à jour, réentraînement et ajustement fin du modèle
- Modifications des données (données d'entraînement, données de validation, données de référence)
- Modifications d'algorithmes et de paramètres
- Modifications d'infrastructure et de configuration
- Modifications d'intégration et d'interface
- Modifications de documentation

### 1.3 Propriétaire de la procédure

| Rôle | Nom | Titre | Contact |
|------|------|-------|---------|
| **Propriétaire de la procédure** | [Nom] | Responsable de la gestion des changements IA | [Email/Téléphone] |
| **Autorité technique** | [Nom] | Responsable du développement IA | [Email/Téléphone] |
| **Conformité** | [Nom] | Responsable de la conformité IA | [Email/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles clés

| Rôle | Responsabilité | Autorité |
|------|----------------|-----------|
| **Demandeur de changement** | Soumettre les demandes de changement ; fournir une justification | Initier les demandes de changement |
| **Propriétaire du système d'IA** | Approuver les changements métier ; accepter les risques résiduels | Approuver/rejeter les changements pour leurs systèmes |
| **Gestionnaire de changement** | Coordonner le processus de changement ; animer les réunions du CAB | Planifier les changements ; remonter les problèmes |
| **Comité consultatif des changements (CAB)** | Examiner et approuver les changements importants | Approuver/reporter/rejeter les demandes de changement |
| **Responsable des risques IA** | Évaluer l'impact du changement sur les risques | Bloquer les changements présentant des risques inacceptables |
| **Responsable de la conformité** | Évaluer l'impact réglementaire | Bloquer les changements non conformes |
| **Responsable technique** | Évaluer la faisabilité technique et l'impact | Approuver la mise en œuvre technique |

### 2.2 Matrice RACI

| Activité | Demandeur | Propriétaire système | Gest. chang. | CAB | Gest. risques | Conformité | Resp. tech. |
|----------|-----------|--------------|------------|-----|----------|------------|-----------|
| Soumettre la demande | A | I | R | I | I | I | I |
| Évaluation initiale | C | C | A | I | R | R | R |
| Évaluation impact risques | C | C | C | I | A | C | C |
| Évaluation conformité | C | C | C | I | C | A | C |
| Évaluation technique | C | C | C | I | C | C | A |
| Approbation changement | I | R | C | A | R | R | R |
| Mise en œuvre | R | A | C | I | I | I | R |
| Revue post-mise en œuvre | R | A | R | I | R | R | R |

**Légende :** A=Autorité (Accountable), R=Responsable (Responsible), C=Consulté, I=Informé

---

## 3. CLASSIFICATION DES CHANGEMENTS

### 3.1 Types de changements

| Type | Description | Exemples |
|------|-------------|----------|
| **Changement de modèle** | Modifications du modèle d'IA | Réentraînement, ajustement fin, changement d'architecture, mise à jour de paramètres |
| **Changement de données** | Modifications des données | Nouvelles données d'entraînement, changement de schéma de données, changement de source de données |
| **Changement d'algorithme** | Modifications de logique ou d'algorithme | Nouvel algorithme, changement d'optimisation, ingénierie des caractéristiques |
| **Changement de configuration** | Paramètres et réglages | Seuils, hyperparamètres, feature flags |
| **Changement d'infrastructure** | Plateforme ou infrastructure | Mise à niveau matérielle, migration cloud, dimensionnement |
| **Changement d'intégration** | Modifications d'interface | Changements d'API, nouvelles intégrations, changements de protocole |
| **Changement de documentation** | Mises à jour de documentation | Documents techniques, guides utilisateur, documents de conformité |

### 3.2 Catégories de changements

| Catégorie | Critères | Niveau d'approbation | Délai |
|----------|----------|----------------|----------|
| **Standard** | Pré-approuvé, faible risque, routine | Pré-autorisé | Immédiat |
| **Normal** | Impact modéré, suit le processus | CAB | 5-10 jours ouvrables |
| **Significatif** | Impact matériel sur le comportement du système | CAB + Propriétaire système + Conformité | 10-20 jours ouvrables |
| **Substantiel** | Peut nécessiter une nouvelle évaluation de conformité | Comité de gouvernance IA | 20-40 jours ouvrables |
| **Urgence** | Correction urgente pour problème critique | CAB d'urgence | Immédiat avec révision rétrospective |

### 3.3 Critères de changement substantiel (Règlement européen sur l'IA)

Un changement est considéré comme **substantiel** s'il affecte :

| Critère | Description | Déclencheur |
|----------|-------------|---------|
| **Finalité prévue** | Changement d'utilisation prévue ou de domaine d'application | Tout changement de finalité |
| **Classification des risques** | Peut modifier le niveau de risque | Passage entre catégories de risques |
| **Architecture du modèle** | Changement fondamental de la structure du modèle | >30% changement de paramètres, nouvelle architecture |
| **Données d'entraînement** | Changements importants des données d'entraînement | >20% changement de données, nouvelles sources de données |
| **Performance** | Changements matériels de performance | >10% changement de précision, nouveaux modes de défaillance |
| **Impact sur les droits fondamentaux** | Changements affectant les droits | Nouvelles populations affectées, nouveaux impacts sur les droits |

**Les changements substantiels nécessitent une nouvelle évaluation de conformité pour les systèmes d'IA à risque élevé.**

---

## 4. PROCESSUS DE GESTION DES CHANGEMENTS

### 4.1 Vue d'ensemble du processus

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                PROCESSUS DE GESTION DES CHANGEMENTS IA                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │ DEMANDE  │───►│ ÉVALUATION│───►│APPROBATION│───►│MISE EN   │            │
│   │          │    │          │    │          │    │  ŒUVRE   │            │
│   └──────────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘            │
│                        │               │               │                   │
│                        ▼               ▼               ▼                   │
│                   ┌─────────┐    ┌─────────┐    ┌─────────┐               │
│                   │ Analyse │    │ Révision│    │  Test   │               │
│                   │ d'impact│    │   CAB   │    │& Déploi.│               │
│                   └─────────┘    └─────────┘    └─────────┘               │
│                                                      │                     │
│                                                      ▼                     │
│                                              ┌──────────────┐             │
│                                              │   RÉVISION   │             │
│                                              │  & CLÔTURE   │             │
│                                              └──────────────┘             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Phase 1 : Demande

**Étape 1 : Soumettre une demande de changement**
1. Remplir le formulaire de demande de changement (FORM-AI-CHG-001)
2. Fournir une description détaillée du changement proposé
3. Documenter la justification métier
4. Identifier le(s) système(s) d'IA affecté(s)
5. Proposer une approche de mise en œuvre
6. Soumettre au gestionnaire de changement

**Étape 2 : Triage initial**
1. Le gestionnaire de changement examine l'exhaustivité de la demande
2. Attribuer un ID de changement et enregistrer dans le registre des changements
3. Déterminer la catégorie initiale du changement
4. Acheminer pour évaluation appropriée
5. Notifier les parties prenantes

### 4.3 Phase 2 : Évaluation

**Étape 3 : Évaluation de l'impact technique**
1. Le responsable technique évalue :
   - Faisabilité technique
   - Périmètre d'impact système
   - Impacts d'intégration
   - Besoins en ressources
   - Complexité de mise en œuvre
2. Documenter les conclusions dans la section Évaluation d'impact

**Étape 4 : Évaluation de l'impact sur les risques**
1. Le responsable des risques IA évalue :
   - Impact sur les risques existants
   - Nouveaux risques introduits
   - Changements d'efficacité des contrôles
   - Changements de niveau de risque
2. Déterminer si une réévaluation des risques est nécessaire
3. Documenter dans la section Impact sur les risques

**Étape 5 : Évaluation de l'impact sur la conformité**
1. Le responsable de la conformité évalue :
   - Impact sur la conformité au Règlement européen sur l'IA
   - Détermination de changement substantiel
   - Exigence de reclassification
   - Exigence de réévaluation de conformité
   - Exigences de mise à jour de la documentation
   - Exigences de mise à jour de l'enregistrement
2. Documenter dans la section Impact sur la conformité

**Étape 6 : Détermination de changement substantiel**
Si l'un des éléments suivants est vrai, le changement est SUBSTANTIEL :
- [ ] La finalité prévue change
- [ ] La classification des risques peut changer
- [ ] L'architecture du modèle change fondamentalement
- [ ] Les données d'entraînement changent de manière significative (>20%)
- [ ] Les métriques de performance changent de manière matérielle (>10%)
- [ ] De nouvelles populations sont affectées
- [ ] De nouveaux impacts sur les droits fondamentaux apparaissent

**Pour les changements substantiels aux systèmes d'IA à risque élevé :**
- Nouvelle évaluation de conformité requise
- La documentation technique doit être mise à jour
- L'enregistrement dans la base de données européenne doit être mis à jour
- Le marquage CE doit être réévalué

### 4.4 Phase 3 : Approbation

**Étape 7 : Révision par le Comité consultatif des changements**

| Catégorie de changement | Composition du CAB |
|-----------------|-----------------|
| Standard | Pré-approuvé, pas de CAB nécessaire |
| Normal | Gestionnaire de changement, Responsable technique, Gestionnaire des risques |
| Significatif | CAB complet + Propriétaire système + Conformité |
| Substantiel | Comité de gouvernance IA |
| Urgence | CAB d'urgence (membres d'astreinte) |

**Processus de révision du CAB :**
1. Présenter la demande de changement et les évaluations d'impact
2. Examiner les impacts sur les risques et la conformité
3. Discuter de l'approche de mise en œuvre
4. Prendre une décision d'approbation :
   - **Approuver** - Poursuivre la mise en œuvre
   - **Approuver avec conditions** - Poursuivre avec conditions spécifiées
   - **Reporter** - Plus d'informations nécessaires
   - **Rejeter** - Changement non approuvé
5. Documenter la décision et la justification

**Étape 8 : Documenter l'approbation**
1. Enregistrer la décision du CAB dans la demande de changement
2. Documenter toutes les conditions
3. Définir le calendrier de mise en œuvre
4. Notifier les parties prenantes concernées

### 4.5 Phase 4 : Mise en œuvre

**Étape 9 : Planifier la mise en œuvre**
1. Créer un plan de mise en œuvre détaillé
2. Identifier l'équipe de mise en œuvre
3. Définir les procédures de retour arrière
4. Planifier la fenêtre de mise en œuvre
5. Préparer le plan de test

**Étape 10 : Exécuter le changement**
1. Mettre en œuvre le changement selon le plan approuvé
2. Exécuter d'abord dans un environnement contrôlé
3. Exécuter les tests de validation
4. Documenter les étapes de mise en œuvre
5. Vérifier les critères de succès

**Étape 11 : Déployer en production**
1. Exécuter le déploiement en production
2. Surveiller les problèmes
3. Vérifier la fonctionnalité du système
4. Confirmer les métriques de performance
5. Exécuter le retour arrière si nécessaire

### 4.6 Phase 5 : Révision et clôture

**Étape 12 : Revue post-mise en œuvre**
1. Vérifier que les objectifs du changement sont atteints
2. Confirmer l'absence d'impacts inattendus
3. Valider que les exigences de conformité sont satisfaites
4. Examiner tous les problèmes rencontrés
5. Documenter les leçons apprises

**Étape 13 : Mise à jour de la documentation**
1. Mettre à jour la documentation technique
2. Mettre à jour l'évaluation des risques (si nécessaire)
3. Mettre à jour l'enregistrement dans la base de données européenne (si nécessaire)
4. Archiver les enregistrements de changement
5. Mettre à jour l'inventaire des systèmes d'IA

**Étape 14 : Clôturer le changement**
1. Obtenir la validation du propriétaire du système
2. Confirmer que toutes les activités sont terminées
3. Clôturer la demande de changement
4. Archiver la documentation

---

## 5. PROCESSUS DE CHANGEMENT D'URGENCE

### 5.1 Critères de changement d'urgence

Les changements d'urgence sont justifiés uniquement pour :
- Défaillances système critiques affectant la santé/sécurité
- Incidents de sécurité actifs
- Urgences de conformité réglementaire
- Impact critique sur l'activité

### 5.2 Processus d'urgence

1. **Actions immédiates**
   - Notifier les membres du CAB d'urgence
   - Documenter la justification de l'urgence
   - Obtenir l'approbation verbale du propriétaire du système d'IA

2. **Évaluation accélérée**
   - Évaluation rapide des risques
   - Vérification minimale de conformité
   - Confirmation de faisabilité technique

3. **Mise en œuvre**
   - Mettre en œuvre avec les ressources disponibles
   - Surveillance continue
   - Documenter toutes les actions entreprises

4. **Revue rétrospective** (dans les 5 jours ouvrables)
   - Compléter la documentation complète du changement
   - Effectuer les évaluations d'impact appropriées
   - Révision complète du CAB
   - Mettre à jour toute la documentation
   - Leçons apprises

---

## 6. CONTRÔLE DES CHANGEMENTS POUR L'IA À RISQUE ÉLEVÉ

### 6.1 Exigences supplémentaires

Pour les systèmes d'IA à risque élevé, des contrôles supplémentaires s'appliquent :

| Exigence | Description |
|-------------|-------------|
| **Réévaluation de conformité** | Les changements substantiels nécessitent une nouvelle évaluation de conformité |
| **Mise à jour de la documentation** | La documentation technique (Annexe IV) doit être mise à jour |
| **Mise à jour de l'enregistrement** | La base de données européenne doit être mise à jour dans les 3 mois |
| **Notification** | L'organisme notifié doit être informé (si évaluation de conformité par tiers) |
| **Réévaluation des risques** | Évaluation complète des risques requise pour les changements significatifs |

### 6.2 Processus de changement substantiel

```
┌─────────────────────────────────────────────────────────────────────────────┐
│          PROCESSUS DE CHANGEMENT SUBSTANTIEL (IA À RISQUE ÉLEVÉ)            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Processus standard de changement                                           │
│         │                                                                   │
│         ▼                                                                   │
│  ┌──────────────┐                                                          │
│  │ Changement   │──► Oui ───┐                                              │
│  │ substantiel? │           │                                              │
│  └──────────────┘           ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Nouvelle    │                                      │
│         │            │ évaluation   │                                      │
│        Non           │ des risques  │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Mise à jour │                                      │
│         │            │  doc. tech.  │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Évaluation  │                                      │
│         │            │ de conformité│                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Mise à jour │                                      │
│         │            │  base de     │                                      │
│         │            │  données UE  │                                      │
│         │            └──────┬───────┘                                      │
│         │                   │                                              │
│         └────────────┬──────┘                                              │
│                      ▼                                                     │
│               ┌──────────────┐                                             │
│               │  Poursuivre  │                                             │
│               │    mise en   │                                             │
│               │    œuvre     │                                             │
│               └──────────────┘                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. EXIGENCES SPÉCIFIQUES AUX CHANGEMENTS DE MODÈLE

### 7.1 Changements de réentraînement du modèle

| Aspect | Exigence |
|--------|-------------|
| **Validation des données** | Vérifier que les nouvelles données d'entraînement répondent aux exigences de gouvernance |
| **Évaluation des biais** | Réexécuter les tests de biais sur le nouveau modèle |
| **Test de performance** | Comparer les performances par rapport à la référence |
| **Test de validation** | Validation complète sur un ensemble de test séparé |
| **Documentation** | Mettre à jour la documentation du modèle |

### 7.2 Contrôle de version du modèle

1. Toutes les versions du modèle doivent être stockées et traçables
2. Les versions des données d'entraînement doivent être liées aux versions du modèle
3. La lignée du modèle doit être documentée
4. La capacité de retour arrière doit être maintenue
5. Des tests A/B peuvent être requis pour les changements significatifs

---

## 8. ENREGISTREMENTS ET DOCUMENTATION

### 8.1 Enregistrements requis

| ID d'enregistrement | Nom de l'enregistrement | Période de conservation | Propriétaire |
|-----------|-------------|------------------|-------|
| REC-AI-CHG-001 | Enregistrements de demande de changement | 10 ans | Gestionnaire de changement |
| REC-AI-CHG-002 | Procès-verbaux des réunions du CAB | 10 ans | Gestionnaire de changement |
| REC-AI-CHG-003 | Enregistrements d'évaluation d'impact | 10 ans | Gestionnaire de changement |
| REC-AI-CHG-004 | Enregistrements de mise en œuvre | 10 ans | Responsable technique |
| REC-AI-CHG-005 | Revues post-mise en œuvre | 10 ans | Gestionnaire de changement |

### 8.2 Formulaires requis

| ID de formulaire | Nom du formulaire | Objectif |
|---------|-----------|---------|
| FORM-AI-CHG-001 | Formulaire de demande de changement | Soumettre des demandes de changement |
| FORM-AI-CHG-002 | Formulaire de changement d'urgence | Changements d'urgence |
| FORM-AI-CHG-003 | Enregistrement de décision du CAB | Documenter les décisions du CAB |

---

## 9. DOCUMENTS CONNEXES

### 9.1 Normes
- STD-AI-002 : Norme de gestion des risques IA
- STD-AI-009 : Norme de gestion de la qualité
- STD-AI-010 : Norme d'évaluation de conformité

### 9.2 Procédures
- PROC-AI-DEV-001 : Procédure du cycle de vie de développement IA
- PROC-AI-RM-001 : Procédure de gestion des risques
- PROC-AI-CA-001 : Procédure d'évaluation de conformité
- PROC-AI-DOC-001 : Procédure de documentation technique
- PROC-AI-REG-001 : Procédure d'enregistrement

---

## 10. HISTORIQUE DES RÉVISIONS

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------|
| 1.0 | [Date] | [Auteur] | Version initiale |

---

## ANNEXE A : FORMULAIRE DE DEMANDE DE CHANGEMENT (FORM-AI-CHG-001)

### Section 1 : Informations sur la demande

| Champ | Saisie |
|-------|-------|
| **ID de changement** | CHG-AI-[AAAA]-[####] |
| **Date de la demande** | |
| **Nom du demandeur** | |
| **Contact du demandeur** | |
| **Nom du système d'IA** | |
| **ID du système d'IA** | |

### Section 2 : Description du changement

| Champ | Saisie |
|-------|-------|
| **Titre du changement** | |
| **Type de changement** | [ ] Modèle [ ] Données [ ] Algorithme [ ] Config [ ] Infrastructure [ ] Intégration [ ] Documentation |
| **Description du changement** | |
| **Justification métier** | |
| **Date de mise en œuvre proposée** | |

### Section 3 : Résumé de l'évaluation d'impact

| Domaine | Niveau d'impact | Description |
|------|--------------|-------------|
| Technique | [ ] Élevé [ ] Moyen [ ] Faible [ ] Aucun | |
| Risque | [ ] Élevé [ ] Moyen [ ] Faible [ ] Aucun | |
| Conformité | [ ] Élevé [ ] Moyen [ ] Faible [ ] Aucun | |
| Performance | [ ] Élevé [ ] Moyen [ ] Faible [ ] Aucun | |

### Section 4 : Évaluation de changement substantiel

| Critère | Oui | Non |
|-----------|-----|-----|
| Cela change-t-il la finalité prévue ? | [ ] | [ ] |
| Cela change-t-il la classification des risques ? | [ ] | [ ] |
| S'agit-il d'un changement fondamental de l'architecture du modèle ? | [ ] | [ ] |
| Les données d'entraînement changent-elles de >20% ? | [ ] | [ ] |
| Les métriques de performance changent-elles de >10% ? | [ ] | [ ] |
| De nouvelles populations sont-elles affectées ? | [ ] | [ ] |
| Y a-t-il de nouveaux impacts sur les droits fondamentaux ? | [ ] | [ ] |

**Détermination de changement substantiel :** [ ] Oui [ ] Non

### Section 5 : Approbation

| Rôle | Nom | Décision | Signature | Date |
|------|------|----------|-----------|------|
| Propriétaire système | | [ ] Approuver [ ] Rejeter | | |
| Responsable technique | | [ ] Approuver [ ] Rejeter | | |
| Gestionnaire des risques | | [ ] Approuver [ ] Rejeter | | |
| Responsable conformité | | [ ] Approuver [ ] Rejeter | | |
| Décision du CAB | | [ ] Approuver [ ] Rejeter [ ] Reporter | | |

### Section 6 : Mise en œuvre

| Champ | Saisie |
|-------|-------|
| **Date de mise en œuvre** | |
| **Mis en œuvre par** | |
| **Notes de mise en œuvre** | |
| **Retour arrière exécuté ?** | [ ] Oui [ ] Non |

### Section 7 : Clôture

| Champ | Saisie |
|-------|-------|
| **Changement réussi ?** | [ ] Oui [ ] Non |
| **Documentation mise à jour ?** | [ ] Oui [ ] Non [ ] S/O |
| **Date de clôture** | |
| **Clôturé par** | |
