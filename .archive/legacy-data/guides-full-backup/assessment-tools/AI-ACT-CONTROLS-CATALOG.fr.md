# Catalogue des Contrôles de l'AI Act

## Informations sur le Document

| Champ | Valeur |
|-------|-------|
| **ID du Document** | TOOL-CTRL-001 |
| **Version** | 1.0 |
| **Statut** | Prêt à l'Emploi |
| **Responsable** | Responsable du Programme AI Act |
| **Dernière Mise à Jour** | 2024-12-01 |

## Objectif

Ce catalogue fournit une cartographie complète des contrôles aux exigences de l'AI Act de l'UE, organisée par article et catégorie de contrôle. Utilisez-le comme référence pour la mise en œuvre des contrôles de conformité et la collecte de preuves.

---

## Aperçu des Catégories de Contrôles

| Catégorie | Préfixe | Article(s) | Nombre de Contrôles |
|----------|--------|------------|---------------|
| Gestion des Risques | RM | Article 9 | 15 |
| Gouvernance des Données | DATA | Article 10 | 15 |
| Documentation | DOC | Article 11 | 10 |
| Journalisation | LOG | Article 12 | 5 |
| Transparence | TRANS | Article 13, 50 | 10 |
| Surveillance Humaine | HO | Article 14 | 8 |
| Exactitude et Sécurité | ARS | Article 15 | 8 |
| Gestion de la Qualité | QMS | Article 17 | 14 |
| Évaluation de Conformité | CA | Article 43 | 10 |
| Enregistrement | REG | Article 49 | 5 |
| Surveillance Après Mise sur le Marché | PMM | Article 72 | 8 |
| Gestion des Incidents | INC | Article 73 | 6 |
| Littératie en IA | LIT | Article 4 | 4 |

---

## Article 9 : Système de Gestion des Risques

### RM-001 : Cadre de Gestion des Risques
- **Objectif** : Établir un système de gestion des risques pour les systèmes d'IA
- **Type** : Préventif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Politique de gestion des risques
  - Méthodologie d'évaluation des risques
  - Registre des risques

### RM-002 : Identification des Risques
- **Objectif** : Identifier les risques connus et prévisibles
- **Type** : Détectif
- **Fréquence** : Par version / Changement majeur
- **Preuves Requises** :
  - Dossiers d'identification des risques
  - Analyse des dangers
  - Analyse des cas d'usage

### RM-003 : Estimation des Risques
- **Objectif** : Estimer et évaluer les risques liés à l'utilisation prévue et aux abus
- **Type** : Détectif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Méthodologie d'estimation des risques
  - Évaluations de gravité et de probabilité
  - Matrices de risques

### RM-004 : Atténuation des Risques
- **Objectif** : Adopter des mesures de gestion des risques
- **Type** : Préventif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Plans d'atténuation
  - Dossiers de mise en œuvre des contrôles
  - Acceptation des risques résiduels

### RM-005 : Tests de Risques
- **Objectif** : Tester pour assurer des performances constantes
- **Type** : Détectif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Plans et résultats de tests
  - Métriques de performance
  - Rapports de validation

---

## Article 10 : Données et Gouvernance des Données

### DATA-001 : Cadre de Gouvernance des Données
- **Objectif** : Établir la gouvernance des données pour les données d'entraînement, de validation et de test
- **Type** : Préventif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Politique de gouvernance des données
  - Normes de qualité des données
  - Procédures de gestion des données

### DATA-002 : Évaluation de la Qualité des Données
- **Objectif** : Garantir que les données sont pertinentes, représentatives et sans erreur
- **Type** : Détectif
- **Fréquence** : Par ensemble de données
- **Preuves Requises** :
  - Rapports de qualité des données
  - Vérifications de complétude
  - Validation de l'exactitude

### DATA-003 : Examen des Biais
- **Objectif** : Examiner les données pour détecter les biais potentiels
- **Type** : Détectif
- **Fréquence** : Par ensemble de données / Périodique
- **Preuves Requises** :
  - Rapports d'évaluation des biais
  - Analyse démographique
  - Métriques d'équité

### DATA-004 : Provenance des Données
- **Objectif** : Documenter la provenance et la lignée des données
- **Type** : Préventif
- **Fréquence** : Par ensemble de données
- **Preuves Requises** :
  - Documentation de lignée des données
  - Dossiers de source
  - Historique de traitement

---

## Article 11 : Documentation Technique

### DOC-001 : Description du Système
- **Objectif** : Documenter la description générale du système d'IA
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Document d'architecture du système
  - Déclaration d'usage prévu
  - Description des capacités

### DOC-002 : Documentation du Processus de Développement
- **Objectif** : Documenter les éléments et le processus de développement
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Spécifications de conception
  - Méthodologie de développement
  - Procédures d'entraînement

### DOC-003 : Conformité à l'Annexe IV
- **Objectif** : Garantir que la documentation répond aux exigences de l'Annexe IV
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Liste de contrôle de l'Annexe IV
  - Dossier technique
  - Matrice de conformité

---

## Article 12 : Tenue des Registres (Journalisation)

### LOG-001 : Journalisation Automatique
- **Objectif** : Mettre en œuvre l'enregistrement automatique des événements
- **Type** : Détectif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Architecture de journalisation
  - Échantillons de journaux
  - Politique de conservation

### LOG-002 : Conservation des Journaux
- **Objectif** : Conserver les journaux pendant au minimum 6 mois
- **Type** : Préventif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Politique de conservation
  - Configuration du stockage
  - Procédures de sauvegarde

### LOG-003 : Traçabilité
- **Objectif** : Permettre la traçabilité du fonctionnement de l'IA
- **Type** : Détectif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Conception de la piste d'audit
  - Capacités de corrélation
  - Procédures d'enquête

---

## Article 13 : Transparence

### TRANS-001 : Instructions d'Utilisation
- **Objectif** : Fournir les instructions d'utilisation dans un format approprié
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Manuel d'utilisation
  - Guide de démarrage rapide
  - Documentation d'intégration

### TRANS-002 : Informations sur le Fournisseur
- **Objectif** : Inclure l'identité et les coordonnées du fournisseur
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Étiquetage du produit
  - Informations de contact
  - Canaux de support

### TRANS-003 : Divulgation des Performances
- **Objectif** : Divulguer les caractéristiques, capacités et limitations
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Spécifications de performance
  - Limitations connues
  - Limites des cas d'usage

---

## Article 14 : Surveillance Humaine

### HO-001 : Conception de la Surveillance
- **Objectif** : Concevoir le système pour permettre une surveillance humaine efficace
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Architecture de surveillance
  - Conception de l'interface
  - Mécanismes de contrôle

### HO-002 : Capacité d'Intervention
- **Objectif** : Permettre la capacité d'intervenir ou d'arrêter le fonctionnement
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Mécanismes d'arrêt
  - Procédures de remplacement
  - Protocoles d'urgence

### HO-003 : Interprétation des Résultats
- **Objectif** : Permettre l'interprétation des résultats de l'IA
- **Type** : Préventif
- **Fréquence** : Par version
- **Preuves Requises** :
  - Fonctionnalités d'explicabilité
  - Indicateurs de confiance
  - Justification des décisions

---

## Article 50 : Obligations de Transparence (Risque Limité)

### TRANS-101 : Notification à l'Utilisateur
- **Objectif** : Informer les utilisateurs qu'ils interagissent avec une IA
- **Type** : Préventif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Conception de la notification
  - Captures d'écran de l'interface utilisateur
  - Texte de divulgation

### TRANS-102 : Étiquetage du Contenu
- **Objectif** : Marquer le contenu généré par l'IA de manière appropriée
- **Type** : Préventif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Mise en œuvre de l'étiquetage
  - Filigrane (le cas échéant)
  - Balisage des métadonnées

---

## Article 72 : Surveillance Après Mise sur le Marché

### PMM-001 : Système de Surveillance
- **Objectif** : Établir un système de surveillance après mise sur le marché
- **Type** : Détectif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Plan de surveillance
  - Procédures de collecte de données
  - Méthodologie d'analyse

### PMM-002 : Suivi des Performances
- **Objectif** : Suivre les performances du système d'IA au fil du temps
- **Type** : Détectif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Tableaux de bord de performance
  - Analyse des tendances
  - Alertes de dégradation

### PMM-003 : Intégration des Retours
- **Objectif** : Intégrer les retours dans les améliorations
- **Type** : Correctif
- **Fréquence** : Périodique
- **Preuves Requises** :
  - Collecte des retours
  - Dossiers d'amélioration
  - Historique des mises à jour

---

## Article 73 : Notification des Incidents Graves

### INC-001 : Détection des Incidents
- **Objectif** : Détecter rapidement les incidents graves
- **Type** : Détectif
- **Fréquence** : Continu
- **Preuves Requises** :
  - Mécanismes de détection
  - Configurations d'alerte
  - Procédures d'escalade

### INC-002 : Notification des Incidents
- **Objectif** : Notifier les incidents graves aux autorités dans les 15 jours
- **Type** : Correctif
- **Fréquence** : Par incident
- **Preuves Requises** :
  - Modèle de rapport d'incident
  - Liste de contacts des autorités
  - Dossiers de soumission

### INC-003 : Analyse des Causes Racines
- **Objectif** : Enquêter et documenter les causes racines
- **Type** : Correctif
- **Fréquence** : Par incident
- **Preuves Requises** :
  - Rapports d'enquête
  - Analyse des causes racines
  - Actions correctives

---

## Utilisation de ce Catalogue

### Pour l'Évaluation de la Conformité
1. Identifier les articles applicables en fonction du niveau de risque et du rôle
2. Examiner les contrôles requis pour chaque article
3. Évaluer l'état actuel de la mise en œuvre
4. Documenter les lacunes et les plans de remédiation

### Pour la Collecte de Preuves
1. Utiliser les exigences de preuve comme liste de contrôle
2. Rassembler la documentation pour chaque contrôle mis en œuvre
3. Maintenir les preuves dans des dossiers organisés
4. Mettre à jour les preuves après chaque version ou changement

### Pour la Préparation de l'Audit
1. Associer les contrôles au périmètre de l'audit
2. Préparer des dossiers de preuves par contrôle
3. Documenter l'efficacité des contrôles
4. Identifier toute non-conformité

---

## Documents Connexes

- [Procédure de Gestion des Risques](../procedures/PROC-AI-RM-001_FINAL.md)
- [Liste de Contrôle de Documentation Technique](../checklists/CHK-AI-DOC-001_FINAL.md)
- [Procédure de Gestion des Incidents](../procedures/PROC-AI-INC-001_FINAL.md)
- [Procédure de Surveillance Après Mise sur le Marché](../procedures/PROC-AI-PMM-001_FINAL.md)

---

## Historique des Révisions

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Responsable du Programme AI Act | Version initiale |
