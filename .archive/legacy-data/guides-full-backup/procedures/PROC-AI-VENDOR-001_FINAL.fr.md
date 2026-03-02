# PROC-AI-VENDOR-001 : Procédure de Gestion des Fournisseurs d'IA

**ID de Procédure :** PROC-AI-VENDOR-001
**Nom de la Procédure :** Procédure de Gestion des Fournisseurs d'IA
**Norme :** STD-AI-001 : Norme de Classification des Systèmes d'IA, STD-AI-002 : Norme de Gestion des Risques d'IA, STD-AI-009 : Norme du Système de Management de la Qualité
**Contrôles Couverts :** CLS-001, CLS-005, RM-001, RM-006, QMS-001, QMS-007
**Date d'Effet :** [À compléter]
**Dernière Mise à Jour :** [À compléter]
**Prochaine Date de Révision :** [À compléter]
**Statut d'Approbation :** [Brouillon/Approuvé]

---

## 1. OBJET ET CHAMP D'APPLICATION

### 1.1 Objet

Cette procédure établit les exigences pour la gestion des fournisseurs tiers de systèmes d'IA tout au long du cycle de vie du fournisseur, garantissant que les systèmes d'IA acquis sont conformes au Règlement sur l'IA de l'UE et aux exigences organisationnelles. Cela inclut la sélection des fournisseurs, la diligence raisonnable, la contractualisation, la gestion continue et la résiliation.

### 1.2 Champ d'Application

Cette procédure s'applique à :
- L'acquisition de systèmes et composants d'IA commerciaux
- Le développement de systèmes d'IA par des fournisseurs tiers
- Les abonnements IA en tant que Service (AIaaS)
- Les fournisseurs de modèles d'IA et d'API de modèles fondamentaux
- Les fournisseurs d'infrastructure et de plateformes d'IA
- Les consultants et intégrateurs d'IA fournissant des capacités d'IA
- Les sous-traitants des fournisseurs d'IA

Cette procédure ne s'applique pas :
- Aux systèmes d'IA développés en interne (voir PROC-AI-DEV-001)
- À l'acquisition de logiciels non-IA
- À l'acquisition de matériel sans composants d'IA

### 1.3 Propriétaire de la Procédure et Contacts

| Rôle | Nom | Titre | Contact |
|------|-----|-------|---------|
| **Propriétaire de la Procédure** | [Nom] | Responsable des Achats | [Email/Téléphone] |
| **Revue Technique** | [Nom] | Responsable Développement IA | [Email/Téléphone] |
| **Conformité** | [Nom] | Responsable Conformité | [Email/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles Clés

| Rôle | Responsabilité | Autorité |
|------|----------------|----------|
| **Responsable des Achats** | Gérer le cycle de vie du fournisseur ; négociation des contrats ; performance du fournisseur | Approuver la sélection des fournisseurs ; résilier les contrats |
| **Propriétaire du Système d'IA** | Définir les exigences ; accepter les systèmes d'IA du fournisseur ; être responsable de la conformité | Approuver la sélection des fournisseurs ; accepter les risques |
| **Gestionnaire des Risques IA** | Évaluer les risques fournisseur ; valider les contrôles de risques du fournisseur | Bloquer les fournisseurs à haut risque ; exiger des contrôles supplémentaires |
| **Responsable Conformité** | Vérifier la conformité du fournisseur au Règlement sur l'IA de l'UE ; valider les certifications | Rejeter les fournisseurs non conformes |
| **Architecte Sécurité** | Évaluation de la sécurité ; exigences de tests d'intrusion | Bloquer les fournisseurs présentant des problèmes de sécurité |
| **Délégué à la Protection des Données** | Conformité RGPD ; accords de traitement des données | Approuver les conditions de traitement des données |
| **Conseiller Juridique** | Révision des contrats ; conditions de responsabilité ; protection de la PI | Approuver les conditions contractuelles |
| **Comité de Gouvernance IA** | Supervision de la gouvernance ; décisions stratégiques concernant les fournisseurs | Approuver les relations avec les fournisseurs à haut risque |

### 2.2 Matrice RACI

| Activité | Achats | Propriétaire Système | Gest. Risques | Conformité | Sécurité | DPD | Juridique |
|----------|--------|----------------------|---------------|------------|----------|-----|-----------|
| Identification des fournisseurs | R | A | I | C | I | I | I |
| Définition des exigences | C | A | C | C | C | C | I |
| Diligence raisonnable | R | C | R | R | R | R | C |
| Évaluation des risques | C | C | A | C | C | C | I |
| Négociation des contrats | R | C | I | C | C | C | A |
| Sélection des fournisseurs | R | A | R | R | R | R | C |
| Surveillance continue | R | A | R | C | C | C | I |
| Revues de performance | R | A | C | C | C | C | I |
| Renouvellement/résiliation de contrat | R | A | C | C | C | C | R |

**Légende :** A=Approbateur, R=Responsable, C=Consulté, I=Informé

---

## 3. CADRE DE GESTION DES FOURNISSEURS D'IA

### 3.1 Aperçu du Cycle de Vie du Fournisseur

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              CYCLE DE VIE DE GESTION DES FOURNISSEURS D'IA                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐    │
│   │ IDENTIFIER │───►│  ÉVALUER   │───►│ CONTRACTER │───►│ INTÉGRER   │    │
│   │   ET AO    │    │ ET DILIG.  │    │   ET SLA   │    │ ET TESTER  │    │
│   │            │    │RAISONNABLE │    │            │    │            │    │
│   └────────────┘    └────────────┘    └────────────┘    └────────────┘    │
│                                                               │            │
│   ┌────────────────────────────────────────────────────────────┘           │
│   │                                                                        │
│   ▼                                                                        │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐                      │
│   │   GÉRER    │───►│   REVOIR   │───►│ RENOUVELER │                      │
│   │  EN COURS  │    │ PERFORMANCE│    │OU RÉSILIER │                      │
│   │            │    │            │    │            │                      │
│   └────────────┘    └────────────┘    └────────────┘                      │
│         ▲                │                                                 │
│         └────────────────┘ (Cycle continu pendant la relation)            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Niveaux de Risque des Fournisseurs

Les fournisseurs d'IA sont classés en niveaux de risque selon la criticité et le niveau de risque de leurs systèmes d'IA :

| Niveau | Critères | Niveau de Diligence Raisonnable | Fréquence de Revue |
|--------|----------|--------------------------------|---------------------|
| **Niveau 1 - Critique** | Systèmes d'IA à haut risque ; critiques pour la mission ; traitent des données sensibles | Exhaustive | Trimestrielle |
| **Niveau 2 - Significatif** | IA à risque limité ; processus métier importants ; sensibilité des données modérée | Standard | Semestrielle |
| **Niveau 3 - Standard** | IA à risque minimal ; non critique ; traitement des données limité | Basique | Annuelle |

---

## 4. PROCÉDURES DÉTAILLÉES DE GESTION DES FOURNISSEURS

### 4.1 Phase 1 : Identification du Fournisseur et Appel d'Offres

#### 4.1.1 Objectifs
- Identifier les fournisseurs d'IA potentiels
- Définir clairement les exigences
- Solliciter des propositions

#### 4.1.2 Activités

**Étape 1 : Définition des Exigences**
1. Documenter les exigences métier avec le Propriétaire du Système d'IA
2. Définir les exigences techniques incluant :
   - Spécifications fonctionnelles
   - Exigences de performance
   - Exigences d'intégration
   - Besoins de scalabilité
3. Définir les exigences de conformité au Règlement sur l'IA de l'UE :
   - Classification de risque attendue
   - Exigences de documentation
   - Exigences de transparence
   - Exigences de supervision humaine
4. Définir les exigences de sécurité et de protection des données
5. Compléter la Liste de Vérification des Exigences Fournisseurs d'IA (CHK-AI-VENDOR-001)

**Étape 2 : Étude de Marché**
1. Rechercher les fournisseurs potentiels
2. Examiner les références et certifications des fournisseurs
3. Vérifier l'historique des fournisseurs en matière de conformité au Règlement sur l'IA de l'UE
4. Identifier les fournisseurs avec une présence pertinente dans l'UE
5. Documenter les résultats de la recherche

**Étape 3 : Appel d'Offres (AO)**
1. Préparer l'AO incluant :
   - Exigences métier et techniques
   - Exigences de conformité au Règlement sur l'IA de l'UE
   - Questionnaire de sécurité
   - Exigences tarifaires
   - Critères d'évaluation
2. Inclure des questions spécifiques à l'IA :
   - Transparence et explicabilité du modèle
   - Gouvernance des données d'entraînement
   - Méthodologie de test des biais
   - Capacités de journalisation et d'audit
   - Fonctionnalités de supervision humaine
   - Procédures de réponse aux incidents
3. Distribuer l'AO aux fournisseurs qualifiés
4. Gérer le processus de questions-réponses
5. Collecter et enregistrer les propositions

#### 4.1.3 Livrables
- [ ] Liste de Vérification des Exigences Fournisseurs d'IA (CHK-AI-VENDOR-001)
- [ ] Document d'appel d'offres
- [ ] Propositions des fournisseurs reçues

---

### 4.2 Phase 2 : Évaluation du Fournisseur et Diligence Raisonnable

#### 4.2.1 Objectifs
- Évaluer les propositions des fournisseurs
- Mener une diligence raisonnable exhaustive
- Évaluer les risques

#### 4.2.2 Activités

**Étape 1 : Présélection Initiale**
1. Examiner les propositions par rapport aux exigences obligatoires
2. Éliminer les propositions non conformes
3. Noter les propositions restantes par rapport aux critères d'évaluation
4. Créer une liste restreinte de fournisseurs (généralement 2-4)

**Étape 2 : Évaluation Technique**
1. Évaluer l'architecture et la conception du système d'IA
2. Examiner la documentation et les spécifications du modèle
3. Évaluer les affirmations de précision et de performance
4. Examiner les résultats des tests de biais
5. Évaluer les capacités de supervision humaine
6. Évaluer les fonctionnalités de journalisation et de piste d'audit
7. Examiner les capacités d'intégration
8. Compléter le Formulaire d'Évaluation Technique (FORM-AI-VENDOR-001)

**Étape 3 : Évaluation de la Conformité au Règlement sur l'IA de l'UE**
1. Demander et examiner la documentation de conformité du fournisseur :
   - Documentation technique (format Annexe IV si haut risque)
   - Déclaration de Conformité UE (le cas échéant)
   - Preuve du marquage CE (le cas échéant)
   - Enregistrement dans la base de données de l'UE (si haut risque)
2. Vérifier la classification du système d'IA
3. Évaluer le SMQ du fournisseur pour l'IA (selon ISO/IEC 42001 ou équivalent)
4. Examiner les procédures de surveillance après commercialisation
5. Examiner les procédures de notification des incidents
6. Compléter le Formulaire d'Évaluation de Conformité IA (FORM-AI-VENDOR-002)

**Étape 4 : Évaluation de la Sécurité**
1. Examiner les certifications de sécurité du fournisseur (ISO 27001, SOC 2)
2. Effectuer l'examen du questionnaire de sécurité
3. Demander et examiner les résultats des tests d'intrusion
4. Évaluer la sécurité des données et le chiffrement
5. Examiner les contrôles d'accès et l'authentification
6. Compléter le Formulaire d'Évaluation de la Sécurité

**Étape 5 : Évaluation de la Protection des Données**
1. Examiner les activités de traitement des données
2. Évaluer les mesures de conformité au RGPD
3. Examiner les accords avec les sous-traitants
4. Évaluer les mécanismes de transfert de données (pour les fournisseurs hors UE)
5. Examiner les pratiques de conservation et de suppression des données
6. Compléter l'Analyse d'Impact sur la Protection des Données (si nécessaire)

**Étape 6 : Évaluation Financière et Opérationnelle**
1. Examiner la stabilité financière du fournisseur
2. Évaluer les plans de continuité d'activité
3. Examiner les capacités de SLA
4. Évaluer les services de support et de maintenance
5. Vérifier les références d'autres clients

**Étape 7 : Évaluation des Risques**
1. Compiler tous les résultats d'évaluation
2. Identifier les risques spécifiques au fournisseur
3. Évaluer la probabilité et l'impact des risques
4. Déterminer la classification du niveau de risque
5. Documenter les risques dans le Registre des Risques Fournisseurs (REC-AI-VENDOR-001)
6. Recommander des mesures d'atténuation des risques
7. Compléter le Formulaire d'Évaluation des Risques Fournisseur (FORM-AI-VENDOR-003)

**Étape 8 : Sélection du Fournisseur**
1. Compiler les scores d'évaluation et les évaluations des risques
2. Présenter les résultats au comité de sélection
3. Sélectionner le fournisseur préféré
4. Obtenir les approbations nécessaires :
   - Propriétaire du Système d'IA
   - Gestionnaire des Risques IA
   - Responsable Conformité
   - Comité de Gouvernance IA (pour les fournisseurs de Niveau 1)
5. Notifier les fournisseurs retenus et non retenus

#### 4.2.3 Livrables
- [ ] Formulaire d'Évaluation Technique (FORM-AI-VENDOR-001)
- [ ] Formulaire d'Évaluation de Conformité IA (FORM-AI-VENDOR-002)
- [ ] Formulaire d'Évaluation de la Sécurité
- [ ] Évaluation de la Protection des Données
- [ ] Formulaire d'Évaluation des Risques Fournisseur (FORM-AI-VENDOR-003)
- [ ] Entrée dans le Registre des Risques Fournisseurs (REC-AI-VENDOR-001)
- [ ] Documents d'approbation de la sélection du fournisseur

---

### 4.3 Phase 3 : Contrat et SLA

#### 4.3.1 Objectifs
- Négocier un contrat complet
- Établir des accords de niveau de service
- Définir les obligations de conformité

#### 4.3.2 Activités

**Étape 1 : Négociation du Contrat**
1. Négocier les conditions commerciales
2. Négocier les dispositions contractuelles spécifiques à l'IA :

**Clauses Contractuelles Standard pour l'IA (Obligatoires) :**

| Catégorie de Clause | Dispositions Requises |
|---------------------|----------------------|
| **Conformité au Règlement sur l'IA de l'UE** | Le fournisseur déclare être conforme aux exigences applicables du Règlement sur l'IA de l'UE ; maintient la conformité pendant toute la durée du contrat |
| **Documentation Technique** | Le fournisseur fournit et maintient une documentation conforme à l'Annexe IV ; fournit des mises à jour dans les [X] jours suivant les modifications |
| **Transparence** | Le fournisseur permet au déployeur de remplir ses obligations de transparence ; fournit les informations nécessaires aux utilisateurs en aval |
| **Gestion des Risques** | Le fournisseur maintient un système de gestion des risques ; notifie le déployeur des changements de risques ; soutient les évaluations des risques |
| **Supervision Humaine** | Le fournisseur fournit les capacités de supervision humaine telles que documentées ; soutient les exigences de supervision du déployeur |
| **Journalisation** | Le fournisseur fournit une journalisation automatique conformément à l'Article 12 ; conserve les journaux pendant [période] ; fournit l'accès aux journaux |
| **Gouvernance des Données** | Le fournisseur maintient la gouvernance des données conformément à STD-AI-003 ; documente la provenance des données ; signale les problèmes de qualité des données |
| **Notification des Incidents** | Le fournisseur signale les incidents graves dans les [24] heures ; coopère aux enquêtes ; met en œuvre des actions correctives |
| **Droits d'Audit** | Le déployeur a le droit d'auditer la conformité IA du fournisseur ; le fournisseur coopère aux audits réglementaires |
| **Sous-traitants** | Le fournisseur divulgue les sous-traitants IA ; exige une conformité équivalente ; notifie les changements de sous-traitants |
| **Notification des Modifications** | Le fournisseur notifie les modifications importantes [X] jours à l'avance ; fournit une évaluation de l'impact des modifications |
| **Résiliation** | Dispositions d'assistance à la transition ; restitution/suppression des données ; conformité continue pendant la transition |
| **Responsabilité** | Attribution claire de la responsabilité au titre du Règlement sur l'IA de l'UE ; indemnisation en cas de manquement à la conformité |

**Étape 2 : Accord de Niveau de Service**
1. Définir les SLA de performance :
   - Exigences de disponibilité et de temps de fonctionnement
   - Exigences de temps de réponse
   - Métriques de précision/performance
   - Temps de réponse du support
2. Définir les SLA de conformité :
   - Délais de mise à jour de la documentation
   - Délais de notification des incidents
   - Délais de coopération aux audits
3. Définir les recours et pénalités en cas de non-respect des SLA
4. Établir les exigences de reporting SLA

**Étape 3 : Accord de Traitement des Données**
1. Exécuter le DPA conformément à l'Article 28 du RGPD
2. Définir les activités et finalités de traitement
3. Spécifier les mesures techniques et organisationnelles
4. Définir les exigences relatives aux sous-traitants
5. Établir les mécanismes de transfert de données (CCT le cas échéant)

**Étape 4 : Finalisation du Contrat**
1. Revue juridique de tous les documents contractuels
2. Obtenir les approbations internes requises
3. Exécuter le contrat et toutes les annexes
4. Stocker les contrats exécutés dans le système de gestion des contrats
5. Documenter les dates clés et les obligations

#### 4.3.3 Livrables
- [ ] Accord-cadre exécuté
- [ ] Accord de Niveau de Service
- [ ] Accord de Traitement des Données
- [ ] Annexe/avenant spécifique à l'IA
- [ ] Résumé du contrat approuvé

---

### 4.4 Phase 4 : Intégration et Tests

#### 4.4.1 Objectifs
- Valider le système d'IA du fournisseur
- Intégrer aux systèmes organisationnels
- Établir les processus opérationnels

#### 4.4.2 Activités

**Étape 1 : Lancement et Planification**
1. Organiser la réunion de lancement avec le fournisseur
2. Établir la gouvernance du projet
3. Affecter les ressources internes
4. Créer le plan de mise en œuvre
5. Établir les canaux de communication

**Étape 2 : Intégration Technique**
1. Configurer l'accès et les identifiants du fournisseur
2. Configurer les intégrations
3. Établir la journalisation et la surveillance
4. Configurer les contrôles de sécurité
5. Configurer l'environnement de test

**Étape 3 : Validation de la Conformité**
1. Vérifier que la documentation reçue correspond aux exigences contractuelles
2. Valider l'exhaustivité de la documentation technique
3. Vérifier le statut d'enregistrement (si haut risque)
4. Valider les fonctionnalités de supervision humaine
5. Tester les capacités de journalisation
6. Documenter les résultats de validation

**Étape 4 : Tests d'Acceptation**
1. Exécuter le plan de tests d'acceptation
2. Tester les exigences fonctionnelles
3. Valider la performance par rapport aux SLA
4. Tester les contrôles de sécurité
5. Effectuer des tests de biais et d'équité
6. Tester les capacités de supervision humaine
7. Documenter les résultats des tests
8. Corriger les problèmes

**Étape 5 : Formation des Utilisateurs**
1. Former les administrateurs système
2. Former les utilisateurs finaux
3. Documenter l'achèvement de la formation
4. Établir les processus de support

**Étape 6 : Mise en Production**
1. Obtenir l'approbation de mise en production
2. Exécuter la bascule vers la production
3. Surveiller les opérations initiales
4. Documenter les leçons apprises
5. Clôturer le projet d'intégration

#### 4.4.3 Livrables
- [ ] Plan de mise en œuvre
- [ ] Documentation d'intégration
- [ ] Rapport de validation de conformité
- [ ] Résultats des tests d'acceptation
- [ ] Documents d'achèvement de formation
- [ ] Approbation de mise en production
- [ ] Document d'achèvement de l'intégration

---

### 4.5 Phase 5 : Gestion Continue

#### 4.5.1 Objectifs
- Surveiller la performance du fournisseur
- Maintenir la conformité
- Gérer les changements et les incidents

#### 4.5.2 Activités

**Étape 1 : Surveillance de la Performance**
1. Suivre les métriques SLA
2. Surveiller la disponibilité et la performance
3. Suivre les volumes d'incidents et leur résolution
4. Surveiller la satisfaction des utilisateurs
5. Générer des rapports de performance

**Étape 2 : Surveillance de la Conformité**
1. Suivre les attestations de conformité du fournisseur
2. Surveiller les mises à jour de la documentation
3. Examiner les rapports d'audit du fournisseur
4. Suivre les changements réglementaires affectant le fournisseur
5. Valider la conformité continue au Règlement sur l'IA de l'UE

**Étape 3 : Surveillance des Risques**
1. Surveiller les indicateurs de risque du fournisseur
2. Mettre à jour le Registre des Risques Fournisseurs
3. Suivre la santé financière du fournisseur
4. Surveiller la posture de sécurité du fournisseur
5. Escalader les risques émergents

**Étape 4 : Gestion des Changements**
1. Examiner les notifications de changements du fournisseur
2. Évaluer les impacts des changements
3. Approuver ou rejeter les changements
4. Reclassifier en cas de changements significatifs
5. Mettre à jour la documentation

**Étape 5 : Gestion des Incidents**
1. Enregistrer les incidents fournisseur
2. Suivre la résolution des incidents
3. Escalader les incidents non résolus
4. Documenter les leçons apprises

**Étape 6 : Gestion de la Relation**
1. Organiser des réunions régulières avec le fournisseur
2. Traiter les préoccupations et les retours
3. Planifier les besoins futurs
4. Gérer les modifications contractuelles

#### 4.5.3 Livrables (Continus)
- [ ] Rapports de performance (selon SLA)
- [ ] Documents de surveillance de la conformité
- [ ] Registre des Risques Fournisseurs mis à jour
- [ ] Documents de changements
- [ ] Journaux d'incidents et résolutions
- [ ] Comptes-rendus de réunions

---

### 4.6 Phase 6 : Revues de Performance

#### 4.6.1 Objectifs
- Évaluer la performance du fournisseur
- Évaluer le statut de conformité
- Déterminer la poursuite de la relation

#### 4.6.2 Activités

**Étape 1 : Préparer la Revue**
1. Compiler les données de performance
2. Compiler les documents de conformité
3. Compiler les données d'évaluation des risques
4. Recueillir les retours des parties prenantes
5. Préparer la présentation de revue

**Étape 2 : Effectuer la Revue**
1. Examiner la performance SLA
2. Examiner le statut de conformité
3. Examiner le statut des risques
4. Examiner l'historique des incidents
5. Évaluer la performance globale du fournisseur
6. Noter le fournisseur à l'aide de la Fiche d'Évaluation Fournisseur (FORM-AI-VENDOR-004)

**Étape 3 : Réunion de Revue**
1. Présenter les résultats au fournisseur
2. Discuter des domaines d'amélioration
3. Convenir des actions
4. Planifier la période suivante
5. Documenter les résultats de la réunion

**Étape 4 : Actions Post-Revue**
1. Mettre en œuvre les améliorations convenues
2. Mettre à jour les dossiers du fournisseur
3. Informer les parties prenantes
4. Planifier la prochaine revue

#### 4.6.3 Fréquence de Revue
| Niveau du Fournisseur | Fréquence de Revue |
|-----------------------|--------------------|
| Niveau 1 - Critique | Trimestrielle |
| Niveau 2 - Significatif | Semestrielle |
| Niveau 3 - Standard | Annuelle |

#### 4.6.4 Livrables
- [ ] Fiche d'Évaluation Fournisseur (FORM-AI-VENDOR-004)
- [ ] Rapport de Revue de Performance
- [ ] Actions et plan d'amélioration
- [ ] Dossiers fournisseur mis à jour

---

### 4.7 Phase 7 : Renouvellement ou Résiliation

#### 4.7.1 Processus de Renouvellement

**Étape 1 : Évaluation du Renouvellement**
1. Examiner la performance cumulée du fournisseur
2. Évaluer le besoin métier continu
3. Évaluer les alternatives du marché
4. Examiner les conditions contractuelles pour le renouvellement
5. Effectuer une évaluation des risques mise à jour

**Étape 2 : Décision de Renouvellement**
1. Recommander le renouvellement ou la résiliation
2. Obtenir les approbations
3. Négocier les conditions de renouvellement le cas échéant
4. Exécuter la documentation de renouvellement

#### 4.7.2 Processus de Résiliation

**Étape 1 : Planification de la Résiliation**
1. Documenter la justification de la résiliation
2. Examiner les dispositions contractuelles de résiliation
3. Évaluer les besoins de transition
4. Identifier la solution de remplacement (si nécessaire)
5. Créer le plan de résiliation

**Étape 2 : Exécution de la Transition**
1. Notifier le fournisseur selon les conditions contractuelles
2. Exécuter l'extraction des données
3. Migrer vers la solution de remplacement
4. Valider l'intégrité des données
5. Décommissionner le système du fournisseur

**Étape 3 : Départ du Fournisseur**
1. Révoquer l'accès du fournisseur
2. Confirmer la restitution/suppression des données
3. Régler les paiements finaux
4. Documenter les leçons apprises
5. Archiver les dossiers du fournisseur
6. Mettre à jour le Registre des Systèmes d'IA

#### 4.7.3 Livrables
- [ ] Document de décision de renouvellement ou résiliation
- [ ] Plan de transition (si résiliation)
- [ ] Confirmation de migration/suppression des données
- [ ] Documentation des leçons apprises
- [ ] Dossiers fournisseur archivés

---

## 5. DOCUMENTS ET ENREGISTREMENTS

### 5.1 Enregistrements Requis

| ID d'Enregistrement | Nom de l'Enregistrement | Durée de Conservation | Propriétaire |
|---------------------|------------------------|----------------------|--------------|
| REC-AI-VENDOR-001 | Registre des Risques Fournisseurs | Durée de la relation + 10 ans | Achats |
| REC-AI-VENDOR-002 | Documents de Diligence Raisonnable | Durée de la relation + 10 ans | Achats |
| REC-AI-VENDOR-003 | Documents de Performance | Durée de la relation + 10 ans | Achats |
| REC-AI-VENDOR-004 | Documents Contractuels | Durée de la relation + 10 ans | Juridique |

### 5.2 Formulaires Requis

| ID du Formulaire | Nom du Formulaire | Objectif |
|------------------|-------------------|----------|
| FORM-AI-VENDOR-001 | Formulaire d'Évaluation Technique | Évaluer les capacités techniques IA du fournisseur |
| FORM-AI-VENDOR-002 | Formulaire d'Évaluation de Conformité IA | Évaluer la conformité du fournisseur au Règlement sur l'IA de l'UE |
| FORM-AI-VENDOR-003 | Formulaire d'Évaluation des Risques Fournisseur | Documenter l'évaluation des risques du fournisseur |
| FORM-AI-VENDOR-004 | Fiche d'Évaluation Fournisseur | Noter la performance du fournisseur |

---

## 6. DOCUMENTS CONNEXES

### 6.1 Normes
- STD-AI-001 : Norme de Classification des Systèmes d'IA
- STD-AI-002 : Norme de Gestion des Risques d'IA
- STD-AI-003 : Norme de Gouvernance des Données d'IA
- STD-AI-009 : Norme du Système de Management de la Qualité

### 6.2 Procédures
- PROC-AI-CLS-001 : Procédure de Classification d'IA
- PROC-AI-RM-001 : Procédure de Gestion des Risques d'IA
- PROC-AI-DEV-001 : Procédure du Cycle de Vie de Développement d'IA
- PROC-AI-INC-001 : Procédure de Gestion des Incidents

### 6.3 Listes de Vérification
- CHK-AI-VENDOR-001 : Liste de Vérification des Exigences Fournisseurs d'IA

### 6.4 Références Externes
- Règlement sur l'IA de l'UE (Règlement 2024/1689)
- ISO/IEC 42001 : Système de Management de l'IA
- ISO 37500 : Guide sur l'externalisation

---

## 7. HISTORIQUE DES RÉVISIONS

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------------|
| 1.0 | [Date] | [Auteur] | Publication initiale |

---

## ANNEXE A : LISTE DE VÉRIFICATION DES EXIGENCES FOURNISSEURS D'IA (CHK-AI-VENDOR-001)

### A.1 Exigences Obligatoires du Règlement sur l'IA de l'UE

| # | Exigence | Requis pour Haut Risque | Requis pour Risque Limité | Preuve |
|---|----------|-------------------------|---------------------------|--------|
| 1 | Documentation technique selon Annexe IV | Oui | Recommandé | |
| 2 | Déclaration de Conformité UE | Oui | Non | |
| 3 | Marquage CE | Oui (le cas échéant) | Non | |
| 4 | Enregistrement base de données UE | Oui | Non | |
| 5 | Système de management de la qualité | Oui | Recommandé | |
| 6 | Système de gestion des risques | Oui | Recommandé | |
| 7 | Mesures de gouvernance des données | Oui | Recommandé | |
| 8 | Journalisation automatique | Oui | Non | |
| 9 | Dispositions de transparence | Oui | Oui | |
| 10 | Mesures de supervision humaine | Oui | Recommandé | |
| 11 | Mesures de précision et de robustesse | Oui | Recommandé | |
| 12 | Surveillance après commercialisation | Oui | Recommandé | |
| 13 | Notification des incidents graves | Oui | Oui | |

### A.2 Exigences Techniques

| # | Exigence | Priorité | Vérifié |
|---|----------|----------|---------|
| 1 | Répond aux spécifications fonctionnelles | Obligatoire | |
| 2 | Répond aux exigences de performance | Obligatoire | |
| 3 | Capacités d'intégration | Obligatoire | |
| 4 | Scalabilité | [Priorité] | |
| 5 | Documentation API | [Priorité] | |
| 6 | Documentation du modèle | [Priorité] | |

### A.3 Exigences de Sécurité

| # | Exigence | Priorité | Vérifié |
|---|----------|----------|---------|
| 1 | Certification de sécurité (ISO 27001, SOC 2) | [Priorité] | |
| 2 | Chiffrement au repos et en transit | Obligatoire | |
| 3 | Contrôles d'accès | Obligatoire | |
| 4 | Tests d'intrusion | [Priorité] | |
| 5 | Gestion des vulnérabilités | [Priorité] | |

---

## ANNEXE B : MODÈLE DE FICHE D'ÉVALUATION FOURNISSEUR (FORM-AI-VENDOR-004)

### B.1 Informations sur le Fournisseur
| Champ | Valeur |
|-------|--------|
| Nom du Fournisseur | |
| Référence du Contrat | |
| Période de Revue | |
| Évaluateur | |

### B.2 Scores de Performance

| Catégorie | Pondération | Score (1-5) | Score Pondéré | Commentaires |
|-----------|-------------|-------------|---------------|--------------|
| Performance SLA | 25% | | | |
| Conformité | 25% | | | |
| Sécurité | 15% | | | |
| Qualité du Support | 15% | | | |
| Innovation | 10% | | | |
| Relation | 10% | | | |
| **Total** | **100%** | | **[Total]** | |

### B.3 Guide de Notation
- 5 = Exceptionnel - Dépasse les exigences
- 4 = Bon - Répond à toutes les exigences
- 3 = Acceptable - Répond à la plupart des exigences
- 2 = En-dessous des Attentes - Amélioration nécessaire
- 1 = Inacceptable - Problèmes significatifs

### B.4 Évaluation Globale
| Champ | Valeur |
|-------|--------|
| Note Globale | |
| Recommandation | Poursuivre / Améliorer / Résilier |
| Points Forts Clés | |
| Domaines Clés d'Amélioration | |
| Actions | |

### B.5 Approbations
| Rôle | Nom | Signature | Date |
|------|-----|-----------|------|
| Évaluateur | | | |
| Responsable des Achats | | | |
| Propriétaire du Système d'IA | | | |
