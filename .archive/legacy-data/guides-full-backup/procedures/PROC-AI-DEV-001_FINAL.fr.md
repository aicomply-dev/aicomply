# PROC-AI-DEV-001 : Procédure de Cycle de Développement de Système d'IA

**Identifiant de Procédure :** PROC-AI-DEV-001
**Nom de la Procédure :** Procédure de Cycle de Développement de Système d'IA
**Norme :** STD-AI-001 : Norme de Classification des Systèmes d'IA, STD-AI-002 : Norme de Gestion des Risques IA
**Couvre les Contrôles :** CLS-001, CLS-002, CLS-003, CLS-004, RM-001, RM-002, RM-003, RM-004
**Date d'Entrée en Vigueur :** [À compléter]
**Dernière Mise à Jour :** [À compléter]
**Date de Prochaine Révision :** [À compléter]
**Statut d'Approbation :** [Brouillon/Approuvé]

---

## 1. OBJET ET PÉRIMÈTRE

### 1.1 Objet

Cette procédure établit le processus standardisé pour le développement de systèmes d'IA conformément à la Loi sur l'IA de l'UE, garantissant que la gestion des risques, la documentation et les exigences de conformité sont intégrées tout au long du cycle de vie complet du développement, du concept au déploiement et au-delà.

### 1.2 Périmètre

Cette procédure s'applique à :
- Tous les nouveaux projets de développement de systèmes d'IA
- Les améliorations majeures de systèmes d'IA existants
- Les systèmes d'IA acquis auprès de tiers nécessitant une personnalisation
- Les systèmes d'IA destinés au déploiement sur le marché de l'UE
- Toutes les catégories de risque IA (interdites, à haut risque, à risque limité, à risque minimal)

Cette procédure ne s'applique pas à :
- Les systèmes d'IA prêts à l'emploi sans personnalisation (voir PROC-AI-VENDOR-001)
- La recherche et les IA expérimentales non destinées à la production
- Les systèmes d'IA explicitement exclus du champ d'application de la Loi sur l'IA de l'UE

### 1.3 Propriétaire de la Procédure et Contacts

| Rôle | Nom | Titre | Contact |
|------|------|-------|---------|
| **Propriétaire de la Procédure** | [Nom] | Responsable du Développement IA | [Email/Téléphone] |
| **Escalade** | [Nom] | Directeur Technique | [Email/Téléphone] |
| **Gouvernance** | [Nom] | Président du Comité de Gouvernance IA | [Email/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles Clés

| Rôle | Responsabilité | Autorité |
|------|----------------|-----------|
| **Chef de Projet IA** | Gérer le cycle de développement ; garantir la conformité aux jalons ; coordonner les équipes | Approuver les transitions de phase ; escalader les blocages |
| **Propriétaire du Système IA** | Définir les exigences métier ; accepter le système pour déploiement ; détenir la conformité | Approuver les exigences ; accepter les risques résiduels |
| **Responsable du Développement IA** | Leadership technique ; décisions d'architecture ; qualité du code | Approuver les conceptions techniques ; rejeter le code non conforme |
| **Data Scientist/Ingénieur ML** | Développement de modèle ; entraînement ; test ; validation | Exécuter les activités de développement |
| **Gestionnaire des Risques IA** | Évaluation des risques à chaque phase ; maintenance du registre des risques | Bloquer le déploiement pour risques inacceptables |
| **Responsable de la Conformité** | Vérification de la conformité réglementaire ; alignement avec la Loi sur l'IA de l'UE | Approuver la documentation de conformité |
| **Assurance Qualité** | Test ; validation ; activités de vérification | Approuver les résultats de test ; rejeter les systèmes défaillants |
| **Architecte Sécurité** | Exigences de sécurité ; modélisation des menaces ; test de sécurité | Approuver l'architecture de sécurité |
| **Délégué à la Protection des Données** | Conformité RGPD ; analyses d'impact sur la protection des données | Approuver les activités de traitement des données |

### 2.2 Matrice RACI

| Activité | Chef Projet | Propriétaire Système | Resp. Dév. | Data Scientist | Gest. Risques | Conformité | QA |
|----------|-------------|--------------|----------|----------------|----------|------------|-----|
| Initialisation du projet | A | R | C | I | C | C | I |
| Définition des exigences | R | A | C | C | C | C | I |
| Classification des risques | C | R | C | I | A | C | I |
| Conception d'architecture | C | I | A | R | C | C | C |
| Développement du modèle | C | I | C | A | I | I | C |
| Test et validation | C | I | C | R | C | C | A |
| Revue de conformité | C | I | C | I | R | A | C |
| Approbation de déploiement | A | R | C | I | R | R | R |
| Surveillance post-déploiement | C | A | C | R | R | C | C |

**Légende :** A=Responsable final, R=Réalisateur, C=Consulté, I=Informé

---

## 3. CADRE DU CYCLE DE DÉVELOPPEMENT IA

### 3.1 Vue d'Ensemble des Phases du Cycle de Vie

Le cycle de développement d'IA comprend sept phases obligatoires avec des jalons de validation :

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 CYCLE DE DÉVELOPPEMENT DE SYSTÈME D'IA                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1          PHASE 2          PHASE 3          PHASE 4                │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐      ┌─────────┐           │
│  │ CONCEPT │ ──►  │ CONCEPT.│ ──►  │DÉVELOPP.│ ──►  │  TEST   │           │
│  │ & INIT. │      │         │      │         │      │         │           │
│  └────┬────┘      └────┬────┘      └────┬────┘      └────┬────┘           │
│       │                │                │                │                 │
│    JALON 1         JALON 2         JALON 3         JALON 4                │
│  Classification    Revue de        Revue de        Achèvement             │
│  & Revue Risque    Conception      Développement   des Tests              │
│                                                                             │
│  PHASE 5          PHASE 6          PHASE 7                                │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐                            │
│  │DÉPLOIEM.│ ──►  │ EXPLOIT.│ ──►  │ RETRAIT │                            │
│  │         │      │& SURVEIL│      │         │                            │
│  └────┬────┘      └────┬────┘      └────┬────┘                            │
│       │                │                │                                  │
│    JALON 5         JALON 6         JALON 7                                │
│  Approbation       Revue           Approbation                            │
│  Déploiement       Opérationnelle  Retrait                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Exigences des Jalons de Validation

Chaque jalon de validation nécessite des approbations spécifiques avant de continuer :

| Jalon | Approbations Requises | Livrables Clés | Critères Go/No-Go |
|------|-------------------|------------------|-------------------|
| **Jalon 1** | Gestionnaire des Risques IA, Conformité | Décision de classification, Évaluation initiale des risques | Niveau de risque déterminé, Voie de conformité claire |
| **Jalon 2** | Resp. Dév., Sécurité, DPD | Document d'architecture, AIPD (si requis) | Conception approuvée, Exigences de sécurité satisfaites |
| **Jalon 3** | Resp. Dév., QA | Modèle fonctionnel, Tests unitaires réussis | Code complet, Normes de qualité satisfaites |
| **Jalon 4** | QA, Gestionnaire des Risques | Rapports de test, Résultats de validation | Tous tests réussis, Risques atténués |
| **Jalon 5** | Propriétaire Système, Conformité, Risques | Évaluation de conformité, Marquage CE (si haut risque) | Déploiement approuvé, Enregistrement complet |
| **Jalon 6** | Propriétaire Système, Gestionnaire des Risques | Plan de surveillance après commercialisation actif, Surveillance opérationnelle | Système stable, Aucun problème critique |
| **Jalon 7** | Propriétaire Système, Conformité | Plan de déclassement, Disposition des données | Retrait sûr, Dossiers archivés |

---

## 4. PROCÉDURES DÉTAILLÉES PAR PHASE

### 4.1 Phase 1 : Concept et Initialisation

#### 4.1.1 Objectifs
- Définir l'objet et l'utilisation prévue du système d'IA
- Effectuer la classification initiale des risques
- Établir la gouvernance du projet
- Obtenir les approbations et ressources initiales

#### 4.1.2 Activités

**Étape 1 : Enregistrement du Projet**
1. Compléter le Formulaire d'Enregistrement de Projet IA (FORM-AI-DEV-001)
2. Attribuer un Propriétaire du Système IA et un Chef de Projet
3. Enregistrer dans l'Inventaire des Systèmes IA
4. Obtenir un identifiant de projet et un numéro de suivi

**Étape 2 : Définition de l'Objet**
1. Documenter la finalité prévue selon l'Article 3 de la Loi sur l'IA de l'UE
2. Définir les utilisateurs cibles et les personnes concernées
3. Identifier le contexte et l'environnement de déploiement
4. Documenter les résultats et décisions attendus

**Étape 3 : Classification Initiale des Risques**
1. Effectuer le Contrôle des Pratiques Interdites (selon PROC-AI-CLS-001)
2. Évaluer par rapport à l'Annexe I (législation sur la sécurité des produits)
3. Évaluer par rapport à l'Annexe III (cas d'usage à haut risque)
4. Documenter la décision de classification à l'aide de FORM-AI-CLS-001
5. Si haut risque : initier la planification de l'évaluation de conformité

**Étape 4 : Évaluation Initiale des Risques**
1. Identifier les risques potentiels pour la santé, la sécurité, les droits fondamentaux
2. Documenter les risques dans le Registre des Risques (REC-AI-RM-001)
3. Déterminer les exigences de gestion des risques
4. Établir les critères d'acceptation des risques

#### 4.1.3 Livrables du Jalon 1
- [ ] Formulaire d'Enregistrement de Projet IA complété
- [ ] Document de Décision de Classification (FORM-AI-CLS-001)
- [ ] Évaluation Initiale des Risques (REC-AI-RM-001)
- [ ] Charte de Projet approuvée
- [ ] Allocation de ressources confirmée

#### 4.1.4 Revue du Jalon 1
- **Réviseurs :** Gestionnaire des Risques IA, Responsable de la Conformité, Comité de Gouvernance IA (pour haut risque)
- **Décision :** Poursuivre / Réviser / Rejeter
- **Documentation :** Compte Rendu de Revue du Jalon 1 (REC-AI-DEV-001)

---

### 4.2 Phase 2 : Conception

#### 4.2.1 Objectifs
- Définir l'architecture système et les composants
- Établir les exigences de données et la gouvernance
- Concevoir les contrôles et atténuations des risques
- Planifier les exigences de conformité

#### 4.2.2 Activités

**Étape 1 : Spécification des Exigences**
1. Documenter les exigences fonctionnelles
2. Documenter les exigences non fonctionnelles (performance, sécurité, accessibilité)
3. Définir les exigences de conformité à la Loi sur l'IA de l'UE selon le niveau de risque
4. Établir les critères d'acceptation

**Étape 2 : Conception de l'Architecture**
1. Concevoir l'architecture système
2. Définir l'architecture du modèle et les algorithmes
3. Concevoir les mécanismes de surveillance humaine (selon STD-AI-007)
4. Concevoir la journalisation et la traçabilité (selon STD-AI-005)
5. Concevoir les fonctionnalités de transparence (selon STD-AI-006)

**Étape 3 : Planification de la Gouvernance des Données**
1. Identifier les exigences de données d'entraînement, de validation et de test
2. Évaluer les exigences de qualité des données (selon STD-AI-003)
3. Documenter la provenance et la lignée des données
4. Compléter l'AIPD si des données personnelles sont impliquées
5. Établir les contrôles de gouvernance des données

**Étape 4 : Conception des Contrôles des Risques**
1. Concevoir les contrôles pour les risques identifiés
2. Planifier les mesures de détection et d'atténuation des biais
3. Concevoir les mesures de précision et de robustesse (selon STD-AI-008)
4. Documenter les spécifications des contrôles

**Étape 5 : Planification de la Documentation Technique**
1. Planifier la documentation technique (selon STD-AI-004)
2. Établir les normes et modèles de documentation
3. Attribuer les responsabilités de documentation

#### 4.2.3 Livrables du Jalon 2
- [ ] Document de Spécification des Exigences
- [ ] Document d'Architecture Système
- [ ] Plan de Gouvernance des Données
- [ ] Document de Conception des Contrôles des Risques
- [ ] AIPD (si applicable)
- [ ] Plan de Documentation Technique
- [ ] Évaluation des Risques Mise à Jour

#### 4.2.4 Revue du Jalon 2
- **Réviseurs :** Responsable du Développement IA, Architecte Sécurité, DPD, Gestionnaire des Risques IA
- **Décision :** Poursuivre / Réviser / Rejeter
- **Documentation :** Compte Rendu de Revue du Jalon 2 (REC-AI-DEV-002)

---

### 4.3 Phase 3 : Développement

#### 4.3.1 Objectifs
- Implémenter le système d'IA selon la conception approuvée
- Développer et entraîner les modèles
- Implémenter les contrôles des risques
- Créer la documentation technique

#### 4.3.2 Activités

**Étape 1 : Configuration de l'Environnement de Développement**
1. Établir un environnement de développement sécurisé
2. Configurer le contrôle de version et les pipelines CI/CD
3. Mettre en place l'infrastructure de journalisation et de surveillance
4. Implémenter les contrôles d'accès

**Étape 2 : Préparation des Données**
1. Acquérir et valider les données d'entraînement
2. Implémenter les contrôles de qualité des données
3. Documenter les étapes de prétraitement des données
4. Valider les données par rapport aux exigences de gouvernance

**Étape 3 : Développement du Modèle**
1. Implémenter l'architecture du modèle
2. Entraîner le modèle à l'aide des données approuvées
3. Implémenter les mécanismes de détection des biais
4. Documenter la méthodologie et les paramètres d'entraînement

**Étape 4 : Implémentation des Contrôles**
1. Implémenter les contrôles des risques conçus
2. Implémenter les fonctionnalités de surveillance humaine
3. Implémenter la journalisation et les pistes d'audit
4. Implémenter les mécanismes de transparence

**Étape 5 : Tests Unitaires**
1. Effectuer des tests unitaires pour tous les composants
2. Tester l'efficacité des contrôles des risques
3. Documenter les résultats des tests
4. Corriger les problèmes identifiés

**Étape 6 : Documentation Technique**
1. Créer la documentation technique selon l'Annexe IV (si haut risque)
2. Documenter les spécifications du modèle
3. Documenter l'implémentation de la gouvernance des données
4. Maintenir les dossiers de décisions de conception

#### 4.3.3 Livrables du Jalon 3
- [ ] Système/modèle d'IA fonctionnel
- [ ] Résultats des tests unitaires
- [ ] Documentation technique (conforme à l'Annexe IV si haut risque)
- [ ] Dossiers de gouvernance des données
- [ ] Preuves d'implémentation des contrôles
- [ ] Registre des Risques Mis à Jour

#### 4.3.4 Revue du Jalon 3
- **Réviseurs :** Responsable du Développement IA, Responsable QA, Gestionnaire des Risques IA
- **Décision :** Poursuivre / Réviser / Rejeter
- **Documentation :** Compte Rendu de Revue du Jalon 3 (REC-AI-DEV-003)

---

### 4.4 Phase 4 : Test et Validation

#### 4.4.1 Objectifs
- Valider que le système répond aux exigences
- Vérifier la conformité avec la Loi sur l'IA de l'UE
- Évaluer les risques résiduels
- Préparer le déploiement

#### 4.4.2 Activités

**Étape 1 : Tests d'Intégration**
1. Tester l'intégration du système avec les systèmes en aval/amont
2. Tester les flux de données et les interfaces
3. Valider la journalisation et la surveillance
4. Documenter les résultats des tests d'intégration

**Étape 2 : Tests de Performance**
1. Tester les métriques de précision par rapport aux exigences
2. Tester la robustesse dans diverses conditions
3. Tester la résilience en cybersécurité
4. Établir des références par rapport aux critères de performance

**Étape 3 : Tests de Biais et d'Équité**
1. Effectuer des tests de biais sur les caractéristiques protégées
2. Tester les résultats discriminatoires
3. Valider les métriques d'équité
4. Documenter les résultats des tests de biais

**Étape 4 : Tests de Surveillance Humaine**
1. Tester les capacités de remplacement humain
2. Valider les fonctionnalités d'interprétabilité
3. Tester les systèmes d'alerte et de notification
4. Vérifier que l'humain peut comprendre les résultats

**Étape 5 : Validation de Conformité**
1. Vérifier que toutes les exigences de la Loi sur l'IA de l'UE sont satisfaites
2. Valider l'exhaustivité de la documentation technique
3. Effectuer un audit de conformité interne
4. Corriger les lacunes de conformité

**Étape 6 : Tests d'Acceptation Utilisateur**
1. Effectuer des UAT avec des utilisateurs représentatifs
2. Valider l'utilisabilité et la transparence
3. Recueillir et traiter les retours utilisateurs
4. Documenter les résultats des UAT

**Étape 7 : Évaluation des Risques Résiduels**
1. Réévaluer les risques après les tests
2. Documenter les risques résiduels
3. Obtenir les approbations d'acceptation des risques
4. Mettre à jour le Registre des Risques

#### 4.4.3 Livrables du Jalon 4
- [ ] Rapport de tests d'intégration
- [ ] Rapport de tests de performance
- [ ] Rapport de tests de biais et d'équité
- [ ] Rapport de validation de la surveillance humaine
- [ ] Rapport de validation de conformité
- [ ] Approbation des UAT
- [ ] Évaluation des risques résiduels
- [ ] Dossiers d'acceptation des risques

#### 4.4.4 Revue du Jalon 4
- **Réviseurs :** Responsable QA, Gestionnaire des Risques IA, Responsable de la Conformité, Propriétaire du Système IA
- **Décision :** Poursuivre / Réviser / Rejeter
- **Documentation :** Compte Rendu de Revue du Jalon 4 (REC-AI-DEV-004)

---

### 4.5 Phase 5 : Déploiement

#### 4.5.1 Objectifs
- Compléter l'évaluation de conformité (si haut risque)
- Obtenir les approbations de déploiement
- Déployer en production
- Compléter les exigences d'enregistrement

#### 4.5.2 Activités

**Étape 1 : Évaluation de Conformité (Haut Risque Uniquement)**
1. Compléter l'évaluation de conformité interne ou engager un organisme notifié
2. Préparer la documentation d'évaluation de conformité
3. Corriger toute non-conformité
4. Obtenir le marquage CE (si applicable)

**Étape 2 : Documentation Finale**
1. Finaliser la documentation technique
2. Préparer la Déclaration UE de Conformité (si haut risque)
3. Préparer les instructions d'utilisation
4. Compléter la documentation de transparence

**Étape 3 : Enregistrement**
1. Enregistrer dans la base de données de l'UE (si haut risque) selon PROC-AI-REG-001
2. Compléter le registre interne des systèmes d'IA
3. Documenter les détails d'enregistrement

**Étape 4 : Approbation de Déploiement**
1. Présenter au Comité de Gouvernance IA
2. Obtenir l'approbation du Propriétaire du Système
3. Obtenir l'approbation de la Conformité
4. Obtenir l'approbation d'acceptation des Risques

**Étape 5 : Déploiement en Production**
1. Exécuter le plan de déploiement
2. Vérifier la configuration de production
3. Activer la surveillance et la journalisation
4. Vérifier la capacité de rollback

**Étape 6 : Vérification Post-Déploiement**
1. Vérifier que le système est opérationnel en production
2. Confirmer que la surveillance est active
3. Valider les métriques initiales de production
4. Documenter l'achèvement du déploiement

#### 4.5.3 Livrables du Jalon 5
- [ ] Rapport d'évaluation de conformité (si haut risque)
- [ ] Déclaration UE de Conformité (si haut risque)
- [ ] Preuve du marquage CE (si applicable)
- [ ] Enregistrement dans la base de données de l'UE (si haut risque)
- [ ] Dossiers d'approbation de déploiement
- [ ] Vérification du déploiement en production
- [ ] Confirmation d'activation de la surveillance

#### 4.5.4 Revue du Jalon 5
- **Réviseurs :** Propriétaire du Système IA, Responsable de la Conformité, Gestionnaire des Risques IA, Comité de Gouvernance IA
- **Décision :** Poursuivre / Réviser / Rejeter
- **Documentation :** Compte Rendu de Revue du Jalon 5 (REC-AI-DEV-005)

---

### 4.6 Phase 6 : Exploitation et Surveillance

#### 4.6.1 Objectifs
- Surveiller la performance du système et les risques
- Maintenir la conformité
- Gérer les incidents et les changements
- Soutenir l'amélioration continue

#### 4.6.2 Activités

**Étape 1 : Surveillance Après Commercialisation**
1. Implémenter le plan de surveillance après commercialisation selon PROC-AI-PMM-001
2. Surveiller les métriques de performance
3. Suivre les incidents et anomalies
4. Recueillir les retours utilisateurs

**Étape 2 : Surveillance des Risques**
1. Surveiller en continu les indicateurs de risque
2. Mettre à jour le Registre des Risques si nécessaire
3. Réévaluer les risques périodiquement
4. Rapporter l'état des risques à la gouvernance

**Étape 3 : Maintenance de la Conformité**
1. Surveiller les changements réglementaires
2. Maintenir la documentation à jour
3. Effectuer des revues périodiques de conformité
4. Mettre à jour les enregistrements si nécessaire

**Étape 4 : Gestion des Incidents**
1. Gérer les incidents selon PROC-AI-INC-001
2. Signaler les incidents graves aux autorités
3. Effectuer une analyse des causes profondes
4. Implémenter des actions correctives

**Étape 5 : Gestion des Changements**
1. Évaluer l'impact des changements proposés
2. Réévaluer la classification si changements significatifs
3. Mettre à jour la documentation pour les changements
4. Maintenir les dossiers de changements

**Étape 6 : Revue Périodique**
1. Effectuer des revues annuelles du système
2. Réviser annuellement les évaluations de risques
3. Réviser l'état de conformité
4. Planifier les améliorations

#### 4.6.3 Livrables du Jalon 6 (Périodiques)
- [ ] Rapports de surveillance après commercialisation
- [ ] Registre des Risques Mis à Jour
- [ ] Dossiers de revue de conformité
- [ ] Rapports d'incidents et résolutions
- [ ] Dossiers de changements
- [ ] Rapport de revue annuelle

#### 4.6.4 Revue du Jalon 6 (Annuelle)
- **Réviseurs :** Propriétaire du Système IA, Gestionnaire des Risques IA, Responsable de la Conformité
- **Décision :** Continuer / Remédier / Retirer
- **Documentation :** Compte Rendu de Revue Opérationnelle (REC-AI-DEV-006)

---

### 4.7 Phase 7 : Retrait

#### 4.7.1 Objectifs
- Déclasser en toute sécurité le système d'IA
- Préserver les dossiers requis
- Disposer des données de manière appropriée
- Mettre à jour les enregistrements

#### 4.7.2 Activités

**Étape 1 : Planification du Retrait**
1. Documenter la justification du retrait
2. Identifier les parties prenantes concernées
3. Planifier la transition/le remplacement
4. Établir le calendrier de retrait

**Étape 2 : Disposition des Données**
1. Identifier les exigences de conservation des données
2. Archiver les données et la documentation requises
3. Supprimer en toute sécurité les données non requises
4. Documenter la disposition des données

**Étape 3 : Déclassement du Système**
1. Désactiver l'accès au système
2. Retirer de l'environnement de production
3. Archiver les artefacts du système
4. Documenter les étapes de déclassement

**Étape 4 : Mises à Jour des Enregistrements**
1. Mettre à jour l'état d'enregistrement dans la base de données de l'UE
2. Mettre à jour le registre interne des systèmes d'IA
3. Notifier les parties prenantes concernées
4. Documenter les mises à jour d'enregistrement

**Étape 5 : Conservation des Dossiers**
1. Archiver la documentation technique (10 ans pour haut risque)
2. Archiver les dossiers de conformité
3. Archiver les dossiers de risques et d'incidents
4. Maintenir la piste d'audit

#### 4.7.3 Livrables du Jalon 7
- [ ] Approbation de retrait
- [ ] Dossiers de disposition des données
- [ ] Dossiers de déclassement
- [ ] Confirmation de mise à jour d'enregistrement
- [ ] Index de documentation archivée
- [ ] Dossier d'achèvement du retrait

#### 4.7.4 Revue du Jalon 7
- **Réviseurs :** Propriétaire du Système IA, Responsable de la Conformité, Gestionnaire des Dossiers
- **Décision :** Retrait Complet / Actions Supplémentaires Requises
- **Documentation :** Dossier de Retrait (REC-AI-DEV-007)

---

## 5. DOSSIERS ET DOCUMENTATION

### 5.1 Dossiers Requis

| Identifiant Dossier | Nom du Dossier | Période de Conservation | Propriétaire |
|-----------|-------------|------------------|-------|
| REC-AI-DEV-001 | Compte Rendu de Revue du Jalon 1 | 10 ans | Chef de Projet |
| REC-AI-DEV-002 | Compte Rendu de Revue du Jalon 2 | 10 ans | Chef de Projet |
| REC-AI-DEV-003 | Compte Rendu de Revue du Jalon 3 | 10 ans | Chef de Projet |
| REC-AI-DEV-004 | Compte Rendu de Revue du Jalon 4 | 10 ans | Chef de Projet |
| REC-AI-DEV-005 | Compte Rendu de Revue du Jalon 5 | 10 ans | Chef de Projet |
| REC-AI-DEV-006 | Compte Rendu de Revue Opérationnelle | 10 ans | Propriétaire Système |
| REC-AI-DEV-007 | Dossier de Retrait | 10 ans | Propriétaire Système |

### 5.2 Formulaires Requis

| Identifiant Formulaire | Nom du Formulaire | Objet |
|---------|-----------|---------|
| FORM-AI-DEV-001 | Formulaire d'Enregistrement de Projet IA | Enregistrer de nouveaux projets IA |
| FORM-AI-DEV-002 | Formulaire d'Approbation de Jalon | Documenter les décisions de jalon |
| FORM-AI-DEV-003 | Formulaire de Demande de Changement | Demander des changements au système d'IA |

---

## 6. DOCUMENTS ASSOCIÉS

### 6.1 Normes
- STD-AI-001 : Norme de Classification des Systèmes d'IA
- STD-AI-002 : Norme de Gestion des Risques IA
- STD-AI-003 : Norme de Gouvernance des Données IA
- STD-AI-004 : Norme de Documentation Technique IA
- STD-AI-005 : Norme de Journalisation et de Tenue de Dossiers IA
- STD-AI-006 : Norme de Transparence IA
- STD-AI-007 : Norme de Surveillance Humaine IA
- STD-AI-008 : Norme de Précision, Robustesse et Sécurité IA

### 6.2 Procédures
- PROC-AI-CLS-001 : Procédure de Classification IA
- PROC-AI-RM-001 : Procédure de Gestion des Risques IA
- PROC-AI-DATA-001 : Procédure de Gouvernance des Données
- PROC-AI-DOC-001 : Procédure de Documentation Technique
- PROC-AI-PMM-001 : Procédure de Surveillance Après Commercialisation
- PROC-AI-INC-001 : Procédure de Gestion des Incidents
- PROC-AI-REG-001 : Procédure d'Enregistrement
- PROC-AI-VENDOR-001 : Procédure de Gestion des Fournisseurs

### 6.3 Références Externes
- Loi sur l'IA de l'UE (Règlement 2024/1689)
- ISO/IEC 42001 : Système de Gestion de l'IA
- ISO/IEC 23894 : Gestion des Risques IA

---

## 7. HISTORIQUE DES RÉVISIONS

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------|
| 1.0 | [Date] | [Auteur] | Version initiale |

---

## ANNEXE A : FORMULAIRE D'ENREGISTREMENT DE PROJET IA (FORM-AI-DEV-001)

### Section 1 : Informations sur le Projet
| Champ | Valeur |
|-------|-------|
| Nom du Projet | |
| Identifiant du Projet | |
| Demandé Par | |
| Date de Demande | |
| Mise en Service Cible | |

### Section 2 : Description du Système d'IA
| Champ | Valeur |
|-------|-------|
| Nom du Système | |
| Finalité Prévue | |
| Utilisateurs Cibles | |
| Contexte de Déploiement | |
| Résultats Attendus | |

### Section 3 : Classification Initiale
| Question | Réponse |
|----------|----------|
| S'agit-il d'une pratique interdite selon l'Article 5 ? | Oui / Non |
| Cela relève-t-il de l'Annexe I (sécurité des produits) ? | Oui / Non |
| Cela relève-t-il de l'Annexe III (cas d'usage à haut risque) ? | Oui / Non |
| Classification Initiale des Risques | Interdit / Élevé / Limité / Minimal |

### Section 4 : Approbations
| Rôle | Nom | Signature | Date |
|------|------|-----------|------|
| Demandeur | | | |
| Propriétaire du Système IA | | | |
| Gestionnaire des Risques IA | | | |

---

## ANNEXE B : FORMULAIRE D'APPROBATION DE JALON (FORM-AI-DEV-002)

### Section 1 : Informations sur le Jalon
| Champ | Valeur |
|-------|-------|
| Identifiant du Projet | |
| Nom du Projet | |
| Numéro du Jalon | Jalon 1 / 2 / 3 / 4 / 5 / 6 / 7 |
| Date du Jalon | |

### Section 2 : Liste de Contrôle des Livrables
| Livrable | Complet | Emplacement de la Preuve |
|-------------|----------|-------------------|
| [Livrable 1] | Oui / Non | |
| [Livrable 2] | Oui / Non | |
| [Livrable 3] | Oui / Non | |

### Section 3 : État des Risques
| Niveau de Risque | Nombre | Plus Haut Non Atténué |
|------------|-------|---------------------|
| Critique | | |
| Élevé | | |
| Moyen | | |
| Faible | | |

### Section 4 : Décision du Jalon
| Décision | Poursuivre / Poursuivre sous Condition / Réviser / Rejeter |
|----------|------------------------------------------------|
| Conditions (le cas échéant) | |
| Justification | |

### Section 5 : Approbations
| Rôle | Nom | Décision | Signature | Date |
|------|------|----------|-----------|------|
| [Réviseur 1] | | Approuver/Rejeter | | |
| [Réviseur 2] | | Approuver/Rejeter | | |
| [Réviseur 3] | | Approuver/Rejeter | | |
