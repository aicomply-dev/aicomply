# Processus de Détermination du Rôle selon l'AI Act

## Informations sur le Document

| Champ | Valeur |
|-------|-------|
| **ID du Document** | TOOL-ROLE-001 |
| **Version** | 1.0 |
| **Statut** | Prêt à l'Emploi |
| **Responsable** | Gouvernance des Contrôles d'Entreprise |
| **Dernière Mise à Jour** | 2024-12-01 |

## Objectif

Ce guide aide les organisations à déterminer quels rôles de l'AI Act de l'UE s'appliquent à elles pour chaque système d'IA. Comprendre votre rôle est essentiel car il détermine vos obligations de conformité.

---

## Aperçu des Rôles de l'AI Act de l'UE

L'AI Act de l'UE définit quatre rôles d'opérateur principaux, chacun avec des obligations distinctes :

| Rôle | Définition | Obligations Principales |
|------|------------|-----------------|
| **Fournisseur** | Développe ou fait développer un système d'IA et le met sur le marché/en service sous son propre nom | Conformité complète au Chapitre 2 (haut risque), SGQ, évaluation de conformité, marquage CE |
| **Déployeur** | Utilise un système d'IA sous sa propre autorité (sauf usage personnel) | Surveillance, monitoring, notification d'incidents, transparence envers les utilisateurs |
| **Importateur** | Établi dans l'UE, met une IA de pays tiers sur le marché de l'UE | Vérifier la conformité, assurer la documentation, conserver les registres |
| **Distributeur** | Met l'IA à disposition sur le marché (pas fournisseur/importateur) | Vérifier le marquage CE, assurer les conditions appropriées de stockage/transport |

De plus :
- **Fournisseur d'IAGP** | Fournit des modèles d'IA à usage général | Documentation du modèle, transparence, évaluation des risques systémiques (le cas échéant)

---

## Arbre de Décision pour la Détermination du Rôle

### Étape 1 : Votre organisation a-t-elle développé le système d'IA ?

**OUI** → Passer à l'Étape 2
**NON** → Passer à l'Étape 4

### Étape 2 : Le système d'IA est-il mis sur le marché ou mis en service sous le nom ou la marque de votre organisation ?

**OUI** → Vous êtes un **FOURNISSEUR**
**NON** → Passer à l'Étape 3

### Étape 3 : Avez-vous substantiellement modifié le système d'IA ?

**OUI** → Vous êtes un **FOURNISSEUR** (pour le système modifié)
**NON** → Vous pouvez être un **Déployeur** si vous utilisez le système

### Étape 4 : Votre organisation est-elle établie dans l'UE ?

**OUI** → Passer à l'Étape 5
**NON** → Passer à l'Étape 7

### Étape 5 : Mettez-vous un système d'IA de pays tiers sur le marché de l'UE ?

**OUI** → Vous êtes un **IMPORTATEUR**
**NON** → Passer à l'Étape 6

### Étape 6 : Mettez-vous le système d'IA à disposition sur le marché sans être le fournisseur ou l'importateur ?

**OUI** → Vous êtes un **DISTRIBUTEUR**
**NON** → Passer à l'Étape 8

### Étape 7 : Le résultat de votre système d'IA est-il utilisé dans l'UE ?

**OUI** → L'AI Act de l'UE s'applique à vous comme si vous étiez établi dans l'UE
**NON** → L'AI Act de l'UE peut ne pas s'appliquer (vérifier avec un conseiller juridique)

### Étape 8 : Utilisez-vous le système d'IA sous votre propre autorité ?

**OUI** → Vous êtes un **DÉPLOYEUR**
**NON** → Examiner votre relation avec le système d'IA

---

## Résumé des Obligations par Rôle

### Obligations du Fournisseur (Article 16)

| Obligation | Article | Description |
|------------|---------|-------------|
| Système de Gestion des Risques | Art. 9 | Établir et maintenir la gestion des risques |
| Gouvernance des Données | Art. 10 | Assurer la qualité et la gouvernance des données |
| Documentation Technique | Art. 11 | Créer et maintenir la documentation de l'Annexe IV |
| Tenue des Registres | Art. 12 | Mettre en œuvre la journalisation automatique |
| Transparence | Art. 13 | Fournir les instructions d'utilisation |
| Surveillance Humaine | Art. 14 | Concevoir pour une surveillance efficace |
| Exactitude et Robustesse | Art. 15 | Assurer l'exactitude, la robustesse, la cybersécurité |
| Gestion de la Qualité | Art. 17 | Établir un SGQ |
| Évaluation de Conformité | Art. 43 | Compléter avant la mise sur le marché |
| Déclaration UE | Art. 47 | Établir la déclaration de conformité |
| Marquage CE | Art. 48 | Apposer le marquage CE |
| Enregistrement | Art. 49 | S'enregistrer dans la base de données de l'UE |
| Surveillance Après Mise sur le Marché | Art. 72 | Établir un système de surveillance |
| Notification d'Incidents | Art. 73 | Notifier les incidents graves |

### Obligations du Déployeur (Article 26)

| Obligation | Article | Description |
|------------|---------|-------------|
| Utilisation selon Instructions | Art. 26(1) | Utiliser le système selon les instructions |
| Surveillance Humaine | Art. 26(2) | Affecter des personnes compétentes pour la surveillance |
| Qualité des Données d'Entrée | Art. 26(4) | Assurer la pertinence des données d'entrée |
| Surveillance | Art. 26(5) | Surveiller le fonctionnement selon les instructions |
| Conservation des Registres | Art. 26(6) | Conserver les journaux pour la période minimale |
| Transparence envers les Utilisateurs | Art. 26(7) | Informer les personnes concernées |
| AIPD | Art. 26(9) | Effectuer une analyse d'impact relative à la protection des données |
| Notification d'Incidents | Art. 26(5) | Notifier les incidents graves |

### Obligations de l'Importateur (Article 23)

| Obligation | Article | Description |
|------------|---------|-------------|
| Vérifier la Conformité | Art. 23(1) | Assurer que l'évaluation de conformité est complétée |
| Vérifier la Documentation | Art. 23(2) | Assurer la disponibilité de la documentation technique |
| Vérifier le Marquage CE | Art. 23(3) | Vérifier l'apposition du marquage CE |
| Informations de Contact | Art. 23(4) | Indiquer le nom et le contact sur le système |
| Conditions de Stockage | Art. 23(5) | Assurer le stockage/transport approprié |
| Fournir la Documentation | Art. 23(6) | Fournir la documentation aux autorités |
| Coopérer | Art. 23(7) | Coopérer avec les autorités |

### Obligations du Distributeur (Article 24)

| Obligation | Article | Description |
|------------|---------|-------------|
| Vérifier le Marquage CE | Art. 24(1) | Vérifier le marquage CE avant distribution |
| Vérifier la Documentation | Art. 24(2) | Vérifier l'inclusion des instructions d'utilisation |
| Conditions de Stockage | Art. 24(3) | Assurer le stockage/transport approprié |
| Coopérer | Art. 24(4) | Coopérer avec les autorités |

---

## Rôles Multiples

Une organisation peut détenir plusieurs rôles simultanément :

**Exemples de Scénarios :**

1. **Fournisseur + Déployeur** : Vous développez un système d'IA et l'utilisez également en interne
2. **Importateur + Déployeur** : Vous importez un système d'IA de pays tiers et le déployez
3. **Fournisseur (pour modifications)** : Vous modifiez substantiellement un système tiers

Lorsque vous détenez plusieurs rôles, vous devez vous conformer aux obligations de TOUS les rôles applicables.

---

## Feuille de Travail pour la Détermination du Rôle

Complétez cette feuille de travail pour chaque système d'IA :

### Informations sur le Système

| Champ | Saisie |
|-------|-------|
| **Nom du Système d'IA** | |
| **ID du Système** | |
| **Date d'Évaluation** | |
| **Évaluateur** | |

### Évaluation du Rôle

| Question | Réponse | Notes |
|----------|--------|-------|
| Avons-nous développé ce système d'IA ? | [ ] Oui [ ] Non | |
| Est-il commercialisé sous notre nom/marque ? | [ ] Oui [ ] Non | |
| L'avons-nous substantiellement modifié ? | [ ] Oui [ ] Non | |
| Sommes-nous établis dans l'UE ? | [ ] Oui [ ] Non | |
| L'avons-nous importé de l'extérieur de l'UE ? | [ ] Oui [ ] Non | |
| Le distribuons-nous à d'autres ? | [ ] Oui [ ] Non | |
| L'utilisons-nous sous notre autorité ? | [ ] Oui [ ] Non | |

### Détermination du Rôle

| Rôle | Applicable ? | Justification |
|------|-------------|---------------|
| Fournisseur | [ ] Oui [ ] Non | |
| Déployeur | [ ] Oui [ ] Non | |
| Importateur | [ ] Oui [ ] Non | |
| Distributeur | [ ] Oui [ ] Non | |

### Approbation

| Champ | Saisie |
|-------|-------|
| **Rôle(s) Déterminé(s)** | |
| **Approuvé Par** | |
| **Date d'Approbation** | |

---

## Documents Connexes

- [Procédure de Classification de l'IA](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Procédure de Gestion des Risques](../procedures/PROC-AI-RM-001_FINAL.md)
- [Procédure d'Évaluation de Conformité](../procedures/PROC-AI-CA-001_FINAL.md)

---

## Historique des Révisions

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Gouvernance des Contrôles d'Entreprise | Version initiale |
