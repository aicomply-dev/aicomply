# Guide du Classeur Consolidé

## Informations sur le Document

| Champ | Valeur |
|-------|-------|
| **ID du Document** | TOOL-WB-001 |
| **Version** | 1.0 |
| **Statut** | Prêt à l'Emploi |
| **Responsable** | Responsable du Programme AI Act |
| **Dernière Mise à Jour** | 2024-12-01 |

## Objectif

Ce guide explique comment utiliser le Classeur Consolidé de l'AI Act pour suivre les progrès de conformité, gérer les exigences et générer des rapports. Le classeur fournit une vue centralisée de l'état de conformité de votre organisation à l'AI Act de l'UE.

---

## Aperçu du Classeur

Le Classeur Consolidé contient les feuilles suivantes :

| Feuille | Objectif | Fréquence de Mise à Jour |
|-------|---------|------------------|
| **Tableau de Bord** | Résumé exécutif et ICP | Auto-calculé |
| **Inventaire des Systèmes d'IA** | Liste de tous les systèmes d'IA | Au changement des systèmes |
| **Matrice des Exigences** | Exigences par système | Hebdomadaire |
| **Suivi des Contrôles** | État de mise en œuvre des contrôles | Hebdomadaire |
| **Journal des Preuves** | Documentation des preuves | À la collecte des preuves |
| **Analyse des Écarts** | Lacunes de conformité et remédiation | Mensuel |
| **Calendrier** | Jalons de conformité | Mensuel |
| **Rapports** | Modèles de rapport préconstruits | Au besoin |

---

## Pour Commencer

### Étape 1 : Configuration Initiale

1. Télécharger le modèle de classeur
2. Activer les macros si demandé
3. Configurer les paramètres d'organisation sur la feuille **Paramètres** :
   - Nom de l'organisation
   - Contact principal
   - Période de rapport
   - Seuils de tolérance au risque

### Étape 2 : Remplir l'Inventaire des Systèmes d'IA

Pour chaque système d'IA, saisir :

| Champ | Description | Exemple |
|-------|-------------|---------|
| ID du Système | Identifiant unique | AI-SYS-001 |
| Nom du Système | Nom descriptif | Chatbot d'Assistance Client |
| Description | Brève description | Assistant de service client alimenté par IA |
| Niveau de Risque | Résultat de classification | Limité |
| Rôle d'Opérateur | Votre rôle | Déployeur |
| Statut | État actuel | Actif |
| Responsable | Personne responsable | Jane Dupont |
| Département | Département propriétaire | Service Client |
| Date de Mise en Service | Quand déployé | 2024-01-15 |

### Étape 3 : Cartographier les Exigences

Pour chaque système d'IA :

1. Naviguer vers la feuille **Matrice des Exigences**
2. Sélectionner le système dans le menu déroulant
3. Les exigences se remplissent automatiquement selon le niveau de risque et le rôle
4. Mettre à jour le statut pour chaque exigence :
   - Non Commencé
   - En Cours
   - Mis en Œuvre
   - Vérifié

---

## Guide Feuille par Feuille

### Feuille Tableau de Bord

Le Tableau de Bord fournit une visibilité instantanée sur :

**Métriques Clés :**
- Nombre total de systèmes d'IA
- Systèmes par niveau de risque (graphique circulaire)
- Pourcentage global de conformité
- Taux de complétion des exigences
- Taux de mise en œuvre des contrôles
- Échéances à venir

**Indicateurs de Feu Tricolore :**
- 🟢 Vert : Sur la bonne voie (>80% complété)
- 🟡 Jaune : À risque (50-80% complété)
- 🔴 Rouge : Hors trajectoire (<50% complété)

### Feuille Inventaire des Systèmes d'IA

**Colonnes :**
| Colonne | Description |
|--------|-------------|
| A | ID du Système |
| B | Nom du Système |
| C | Description |
| D | Niveau de Risque |
| E | Rôle d'Opérateur |
| F | Statut |
| G | Responsable |
| H | Département |
| I | Fournisseur (le cas échéant) |
| J | Date de Mise en Service |
| K | Dernière Date d'Évaluation |
| L | Prochaine Date de Révision |
| M | Notes |

**Validation des Données :**
- Niveau de Risque : Menu déroulant (Interdit, Haut, Limité, Minimal)
- Rôle d'Opérateur : Menu déroulant (Fournisseur, Déployeur, Importateur, Distributeur)
- Statut : Menu déroulant (Planification, Développement, Actif, Inactif, Déclassé)

### Feuille Matrice des Exigences

**Structure :**
- Lignes : Exigences individuelles
- Colonnes : Systèmes d'IA
- Cellules : Indicateurs de statut

**Options de Statut :**
| Statut | Code | Couleur |
|--------|------|-------|
| Non Applicable | N/A | Gris |
| Non Commencé | NC | Rouge |
| En Cours | EC | Jaune |
| Mis en Œuvre | MO | Vert Clair |
| Vérifié | VE | Vert Foncé |

**Filtrage :**
- Filtrer par Article
- Filtrer par Catégorie
- Filtrer par Statut
- Filtrer par Système

### Feuille Suivi des Contrôles

Suivre la mise en œuvre de chaque contrôle :

| Colonne | Description |
|--------|-------------|
| ID du Contrôle | Identifiant unique du contrôle |
| Nom du Contrôle | Nom descriptif |
| Catégorie | Catégorie du contrôle |
| Article | Article de l'AI Act de l'UE associé |
| Responsable | Personne responsable |
| Statut | État de mise en œuvre |
| Date Cible | Complétion planifiée |
| Date Réelle | Complétion effective |
| Preuve | Lien vers la preuve |
| Notes | Notes supplémentaires |

### Feuille Journal des Preuves

Documenter toutes les preuves de conformité :

| Colonne | Description |
|--------|-------------|
| ID de Preuve | Identifiant unique |
| Titre | Titre de la preuve |
| Type | Type de document |
| Système(s) | Systèmes d'IA associés |
| Exigence(s) | Exigences associées |
| Contrôle(s) | Contrôles associés |
| Emplacement | Chemin de fichier ou URL |
| Date de Création | Quand créé |
| Date de Révision | Dernière date de révision |
| Réviseur | Qui a révisé |
| Statut | Actuel/Archivé |

### Feuille Analyse des Écarts

Suivre et remédier les lacunes de conformité :

| Colonne | Description |
|--------|-------------|
| ID de Lacune | Identifiant unique |
| Système | Système d'IA affecté |
| Exigence | Exigence associée |
| Description de la Lacune | Ce qui manque |
| Cotation de Risque | Impact si non traité |
| Plan de Remédiation | Comment combler la lacune |
| Responsable | Personne responsable |
| Date Cible | Fermeture planifiée |
| Statut | Ouvert/En Cours/Fermé |
| Date de Fermeture | Quand fermé |

---

## Formules et Calculs

### Pourcentage de Conformité

```
=NB.SI(PlageStatut,"Vérifié")/NBVAL(PlageStatut)*100
```

### Jours Avant Échéance

```
=DateCible-AUJOURDHUI()
```

### Score de Risque

```
=SI(NiveauRisque="Haut",3,SI(NiveauRisque="Limité",2,1))*SI(Statut="Non Commencé",3,SI(Statut="En Cours",2,1))
```

---

## Rapports

### Rapports Préconstruits

1. **Résumé Exécutif** : État de conformité de haut niveau
2. **Rapport Détaillé par Système** : Répartition de la conformité par système
3. **Rapport des Écarts** : Toutes les lacunes ouvertes avec état de remédiation
4. **Rapport des Preuves** : Inventaire des preuves par système
5. **Rapport de Calendrier** : Suivi des jalons

### Génération de Rapports

1. Naviguer vers la feuille **Rapports**
2. Sélectionner le type de rapport dans le menu déroulant
3. Définir la plage de dates (le cas échéant)
4. Cliquer sur le bouton "Générer le Rapport"
5. Le rapport se remplit dans la zone désignée
6. Exporter en PDF ou imprimer au besoin

---

## Bonnes Pratiques

### Saisie de Données

- ✅ Utiliser des conventions de nommage cohérentes
- ✅ Mettre à jour le statut au minimum hebdomadairement
- ✅ Lier les preuves aux exigences spécifiques
- ✅ Ajouter des notes pour le contexte
- ❌ Ne pas laisser de champs vides
- ❌ Ne pas utiliser de texte libre là où des menus déroulants existent

### Maintenance

- Réviser le Tableau de Bord hebdomadairement
- Mettre à jour la Matrice des Exigences au fur et à mesure de l'avancement des travaux
- Archiver les preuves complétées mensuellement
- Sauvegarder le classeur avant les mises à jour majeures
- Contrôle de version : Sauvegarder des copies datées

### Collaboration

- Utiliser un emplacement réseau partagé ou SharePoint
- Établir un calendrier de mise à jour avec les responsables
- Verrouiller les cellules qui ne doivent pas être modifiées
- Utiliser les commentaires pour les discussions
- Suivre les modifications si plusieurs éditeurs

---

## Dépannage

| Problème | Solution |
|-------|----------|
| Les formules ne calculent pas | Appuyer sur F9 pour recalculer |
| Les menus déroulants ne fonctionnent pas | Vérifier les paramètres de Validation des Données |
| Les graphiques ne se mettent pas à jour | Actualiser la source de données |
| Performance lente | Réduire la mise en forme conditionnelle |
| Fichier trop volumineux | Archiver les anciennes données dans un fichier séparé |

---

## Documents Connexes

- [Catalogue des Contrôles](./AI-ACT-CONTROLS-CATALOG.md)
- [Modèle de Classification des Risques](./AI-SYSTEM-RISK-CLASSIFICATION-TEMPLATE.md)
- [Processus de Détermination du Rôle](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Historique des Révisions

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Responsable du Programme AI Act | Version initiale |
