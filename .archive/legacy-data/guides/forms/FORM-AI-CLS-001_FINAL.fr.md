# FORM-AI-CLS-001 : Formulaire de Classification des Systèmes d'IA

**ID du formulaire :** FORM-AI-CLS-001
**Nom du formulaire :** Formulaire de Classification des Systèmes d'IA
**Version :** 1.0
**Date d'entrée en vigueur :** [À compléter]
**Norme associée :** STD-AI-001 : Norme de Classification des Systèmes d'IA
**Procédure associée :** PROC-AI-CLS-001 : Procédure de Classification de l'IA

---

## Objectif

Ce formulaire est utilisé pour documenter la classification des risques des systèmes d'IA selon le règlement IA de l'UE. Complétez ce formulaire pour tous les systèmes d'IA avant le développement ou le déploiement afin de déterminer les exigences réglementaires applicables.

## Instructions

1. Compléter toutes les sections dans l'ordre
2. Fournir des preuves à l'appui des décisions de classification
3. Obtenir les approbations requises en fonction du résultat de la classification
4. Conserver le formulaire complété pendant au moins 10 ans (systèmes à haut risque)

---

## SECTION 1 : IDENTIFICATION DU SYSTÈME D'IA

| Champ | Saisie |
|-------|--------|
| **Nom du système d'IA** | |
| **ID du système d'IA** | |
| **Version/Publication** | |
| **Date de l'évaluation** | |
| **Nom de l'évaluateur** | |
| **Rôle de l'évaluateur** | |
| **Propriétaire du système d'IA** | |
| **Unité commerciale** | |

---

## SECTION 2 : DESCRIPTION DU SYSTÈME D'IA

### 2.1 Finalité prévue
*Décrire la finalité prévue du système d'IA selon l'article 3(12) du règlement IA de l'UE*

| Champ | Saisie |
|-------|--------|
| **Fonction principale** | |
| **Problème résolu** | |
| **Résultats/Décisions clés** | |

### 2.2 Description technique
| Champ | Saisie |
|-------|--------|
| **Type de technologie d'IA** | [ ] Apprentissage automatique [ ] Apprentissage profond [ ] NLP [ ] Vision par ordinateur [ ] Système expert [ ] Autre : _____ |
| **Type de modèle** | [ ] Classification [ ] Régression [ ] Clustering [ ] Génératif [ ] Apprentissage par renforcement [ ] Autre : _____ |
| **Mode de déploiement** | [ ] Sur site [ ] Cloud [ ] Edge [ ] Hybride |

### 2.3 Utilisateurs et personnes concernées
| Champ | Saisie |
|-------|--------|
| **Utilisateurs cibles** | |
| **Personnes physiques concernées** | |
| **Nombre estimé de personnes concernées** | |
| **Portée géographique** | [ ] UE uniquement [ ] UE + Autre [ ] Mondiale |

---

## SECTION 3 : CONTRÔLE DES PRATIQUES INTERDITES (Article 5)

*Tous les systèmes d'IA doivent d'abord être contrôlés pour les pratiques interdites. Si UN élément ci-dessous est coché "Oui", le système d'IA est INTERDIT et ne peut pas continuer.*

### 3.1 Évaluation des pratiques interdites

| # | Pratique interdite | Oui | Non | Preuves/Notes |
|---|---------------------|-----|-----|----------------|
| 3.1.1 | Le système déploie-t-il des techniques subliminales, manipulatrices ou trompeuses pour fausser matériellement le comportement causant un préjudice important ? | [ ] | [ ] | |
| 3.1.2 | Le système exploite-t-il les vulnérabilités des personnes en raison de l'âge, du handicap ou de la situation sociale/économique ? | [ ] | [ ] | |
| 3.1.3 | Le système évalue-t-il ou classe-t-il les personnes physiques en fonction du comportement social ou des caractéristiques personnelles (notation sociale) conduisant à un traitement préjudiciable ? | [ ] | [ ] | |
| 3.1.4 | Le système évalue-t-il ou prédit-il le risque qu'une personne physique commette une infraction pénale uniquement sur la base du profilage ou des traits de personnalité ? | [ ] | [ ] | |
| 3.1.5 | Le système crée-t-il ou élargit-il des bases de données de reconnaissance faciale par scraping non ciblé ? | [ ] | [ ] | |
| 3.1.6 | Le système déduit-il les émotions dans les environnements de travail ou d'éducation (sauf médical ou sécurité) ? | [ ] | [ ] | |
| 3.1.7 | Le système catégorise-t-il les personnes physiques sur la base de données biométriques pour déduire la race, les opinions politiques, l'appartenance syndicale, les convictions religieuses, la vie sexuelle ou l'orientation sexuelle ? | [ ] | [ ] | |
| 3.1.8 | Le système permet-il l'identification biométrique à distance en temps réel dans des espaces accessibles au public à des fins répressives (sauf exceptions étroites) ? | [ ] | [ ] | |

### 3.2 Détermination des pratiques interdites

| Champ | Saisie |
|-------|--------|
| **Des réponses "Oui" ci-dessus ?** | [ ] Oui → **LE SYSTÈME EST INTERDIT** [ ] Non → Passer à la section 4 |
| **Si interdit, justification** | |
| **Signature du réviseur** | |
| **Date de révision** | |

**Si le système est INTERDIT, ne pas continuer. Documenter la décision et archiver.**

---

## SECTION 4 : ÉVALUATION HAUT RISQUE - ANNEXE I (Sécurité des produits)

*Évaluer si le système d'IA est un composant de sécurité de, ou est lui-même, un produit couvert par la législation d'harmonisation de l'UE énumérée à l'annexe I.*

### 4.1 Vérification de la législation de l'annexe I sur les produits

| # | Législation UE | Applicable ? | Si oui, décrire la pertinence |
|---|----------------|-------------|---------------------------|
| 4.1.1 | Règlement Machines (UE) 2023/1230 | [ ] Oui [ ] Non | |
| 4.1.2 | Directive Sécurité des jouets 2009/48/CE | [ ] Oui [ ] Non | |
| 4.1.3 | Directive Bateaux de plaisance 2013/53/UE | [ ] Oui [ ] Non | |
| 4.1.4 | Directive Ascenseurs 2014/33/UE | [ ] Oui [ ] Non | |
| 4.1.5 | Équipements pour utilisation dans les atmosphères explosibles (ATEX) 2014/34/UE | [ ] Oui [ ] Non | |
| 4.1.6 | Directive Équipements radioélectriques 2014/53/UE | [ ] Oui [ ] Non | |
| 4.1.7 | Directive Équipements sous pression 2014/68/UE | [ ] Oui [ ] Non | |
| 4.1.8 | Règlement Installations à câbles (UE) 2016/424 | [ ] Oui [ ] Non | |
| 4.1.9 | Règlement Équipements de protection individuelle (UE) 2016/425 | [ ] Oui [ ] Non | |
| 4.1.10 | Règlement Appareils à gaz (UE) 2016/426 | [ ] Oui [ ] Non | |
| 4.1.11 | Règlement Dispositifs médicaux (UE) 2017/745 | [ ] Oui [ ] Non | |
| 4.1.12 | Règlement Dispositifs médicaux de diagnostic in vitro (UE) 2017/746 | [ ] Oui [ ] Non | |
| 4.1.13 | Règlement Sécurité de l'aviation civile (UE) 2018/1139 | [ ] Oui [ ] Non | |
| 4.1.14 | Règlement Homologation des véhicules automobiles (UE) 2019/2144 | [ ] Oui [ ] Non | |
| 4.1.15 | Directive Interopérabilité ferroviaire (UE) 2016/797 | [ ] Oui [ ] Non | |
| 4.1.16 | Directive Équipements marins 2014/90/UE | [ ] Oui [ ] Non | |

### 4.2 Détermination annexe I

| Champ | Saisie |
|-------|--------|
| **Le système d'IA est-il couvert par la législation de l'annexe I ?** | [ ] Oui → **HAUT RISQUE** (nécessite une évaluation de conformité par un tiers) [ ] Non → Passer à la section 5 |
| **Législation applicable** | |
| **L'IA est-elle un composant de sécurité ?** | [ ] Oui [ ] Non |
| **Voie d'évaluation de conformité** | [ ] Tiers requis [ ] Auto-évaluation autorisée |

---

## SECTION 5 : ÉVALUATION HAUT RISQUE - ANNEXE III (Cas d'usage)

*Évaluer si le système d'IA relève de l'un des cas d'usage à haut risque énumérés à l'annexe III.*

### 5.1 Biométrie (Annexe III, point 1)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.1.1 | Systèmes d'identification biométrique à distance (hors vérification) | [ ] Oui [ ] Non | |
| 5.1.2 | Catégorisation biométrique par attributs sensibles | [ ] Oui [ ] Non | |
| 5.1.3 | Systèmes de reconnaissance des émotions | [ ] Oui [ ] Non | |

### 5.2 Infrastructures critiques (Annexe III, point 2)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.2.1 | Composant de sécurité dans la gestion/l'exploitation d'infrastructures numériques critiques | [ ] Oui [ ] Non | |
| 5.2.2 | Composant de sécurité dans la circulation routière | [ ] Oui [ ] Non | |
| 5.2.3 | Composant de sécurité dans l'approvisionnement en eau, gaz, chauffage, électricité | [ ] Oui [ ] Non | |

### 5.3 Éducation et formation professionnelle (Annexe III, point 3)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.3.1 | Détermination de l'accès ou de l'admission aux établissements d'enseignement | [ ] Oui [ ] Non | |
| 5.3.2 | Affectation de personnes à des établissements d'enseignement ou programmes | [ ] Oui [ ] Non | |
| 5.3.3 | Évaluation des étudiants dans les établissements d'enseignement | [ ] Oui [ ] Non | |
| 5.3.4 | Évaluation du niveau d'éducation approprié pour les individus | [ ] Oui [ ] Non | |
| 5.3.5 | Surveillance/détection de comportements interdits lors des examens | [ ] Oui [ ] Non | |

### 5.4 Emploi, gestion des travailleurs (Annexe III, point 4)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.4.1 | Recrutement ou sélection (publicité, filtrage, évaluation des candidats) | [ ] Oui [ ] Non | |
| 5.4.2 | Décisions sur promotion, licenciement, affectation de tâches, surveillance ou évaluation de la performance au travail | [ ] Oui [ ] Non | |

### 5.5 Accès aux services essentiels (Annexe III, point 5)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.5.1 | Évaluation de l'éligibilité aux prestations/services d'assistance publique | [ ] Oui [ ] Non | |
| 5.5.2 | Évaluation de la solvabilité (hors détection de fraude) | [ ] Oui [ ] Non | |
| 5.5.3 | Évaluation des risques et tarification en assurance vie/santé | [ ] Oui [ ] Non | |
| 5.5.4 | Évaluation et classification des appels d'urgence (911/112) | [ ] Oui [ ] Non | |
| 5.5.5 | Envoi de services de premiers secours d'urgence | [ ] Oui [ ] Non | |

### 5.6 Application de la loi (Annexe III, point 6)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.6.1 | Évaluation du risque individuel de commettre une infraction/récidive | [ ] Oui [ ] Non | |
| 5.6.2 | Polygraphes et outils similaires | [ ] Oui [ ] Non | |
| 5.6.3 | Évaluation de la fiabilité des preuves dans les enquêtes criminelles | [ ] Oui [ ] Non | |
| 5.6.4 | Prédiction de l'occurrence/récurrence d'une infraction pénale | [ ] Oui [ ] Non | |
| 5.6.5 | Profilage dans la détection/l'enquête/la poursuite des crimes | [ ] Oui [ ] Non | |
| 5.6.6 | Analyse criminelle pour la recherche dans de grandes bases de données | [ ] Oui [ ] Non | |

### 5.7 Migration, asile, contrôle des frontières (Annexe III, point 7)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.7.1 | Polygraphes et outils similaires à des fins migratoires | [ ] Oui [ ] Non | |
| 5.7.2 | Évaluation des risques de migration irrégulière | [ ] Oui [ ] Non | |
| 5.7.3 | Examen des demandes d'asile/visa/permis de séjour | [ ] Oui [ ] Non | |
| 5.7.4 | Détection/reconnaissance/identification de personnes dans un contexte migratoire | [ ] Oui [ ] Non | |

### 5.8 Administration de la justice (Annexe III, point 8)

| # | Cas d'usage | Applicable ? | Preuves/Notes |
|---|----------|-------------|----------------|
| 5.8.1 | Assistance aux autorités judiciaires dans la recherche/l'interprétation des faits et du droit | [ ] Oui [ ] Non | |
| 5.8.2 | Application de la loi à un ensemble concret de faits | [ ] Oui [ ] Non | |
| 5.8.3 | Règlement alternatif des différends | [ ] Oui [ ] Non | |
| 5.8.4 | Influence sur le résultat d'élections/référendums ou sur le comportement de vote | [ ] Oui [ ] Non | |

### 5.9 Détermination annexe III

| Champ | Saisie |
|-------|--------|
| **Des réponses "Oui" dans la section 5 ?** | [ ] Oui → **HAUT RISQUE** [ ] Non → Passer à la section 6 |
| **Catégorie haut risque applicable** | |

---

## SECTION 6 : ÉVALUATION RISQUE LIMITÉ (Obligations de transparence)

*Si pas à haut risque, évaluer les obligations de transparence à risque limité.*

### 6.1 Déclencheurs de risque limité (Article 50)

| # | Déclencheur | Applicable ? | Preuves/Notes |
|---|---------|-------------|----------------|
| 6.1.1 | Système conçu pour interagir directement avec des personnes physiques | [ ] Oui [ ] Non | |
| 6.1.2 | Système générant du contenu audio, image, vidéo ou texte synthétique | [ ] Oui [ ] Non | |
| 6.1.3 | Système effectuant de la reconnaissance des émotions | [ ] Oui [ ] Non | |
| 6.1.4 | Système effectuant de la catégorisation biométrique | [ ] Oui [ ] Non | |

### 6.2 Détermination du risque limité

| Champ | Saisie |
|-------|--------|
| **Des réponses "Oui" ?** | [ ] Oui → **RISQUE LIMITÉ** (Les obligations de transparence s'appliquent) [ ] Non → **RISQUE MINIMAL** |
| **Mesures de transparence requises** | |

---

## SECTION 7 : ÉVALUATION DU MODÈLE GPAI

*Compléter uniquement si le système d'IA incorpore ou est un modèle d'IA à usage général (GPAI).*

### 7.1 Détermination GPAI

| # | Question | Réponse | Preuves/Notes |
|---|----------|----------|----------------|
| 7.1.1 | Le système incorpore-t-il un modèle GPAI ? | [ ] Oui [ ] Non | |
| 7.1.2 | Le modèle GPAI est-il capable d'effectuer une large gamme de tâches ? | [ ] Oui [ ] Non | |
| 7.1.3 | Le modèle a-t-il été formé sur des données générales à grande échelle en utilisant l'auto-supervision ? | [ ] Oui [ ] Non | |
| 7.1.4 | Le modèle GPAI présente-t-il un risque systémique ? (>10^25 FLOP de calcul d'entraînement ou désignation de la Commission) | [ ] Oui [ ] Non | |

### 7.2 Classification GPAI

| Champ | Saisie |
|-------|--------|
| **Classification GPAI** | [ ] Pas GPAI [ ] GPAI sans risque systémique [ ] GPAI avec risque systémique |
| **Conformité du fournisseur GPAI confirmée ?** | [ ] Oui [ ] Non [ ] S/O |

---

## SECTION 8 : RÉSUMÉ DE LA CLASSIFICATION

### 8.1 Classification finale

| Classification | Sélectionné | Base |
|----------------|----------|-------|
| **INTERDIT** | [ ] | Section 3 - Pratique interdite identifiée |
| **HAUT RISQUE** | [ ] | Section 4 - Législation de sécurité des produits annexe I |
| **HAUT RISQUE** | [ ] | Section 5 - Cas d'usage à haut risque annexe III |
| **RISQUE LIMITÉ** | [ ] | Section 6 - Obligations de transparence applicables |
| **RISQUE MINIMAL** | [ ] | Aucune obligation spécifique (codes volontaires) |

### 8.2 Détails de la classification

| Champ | Saisie |
|-------|--------|
| **Classification finale** | |
| **Base principale de la classification** | |
| **Articles applicables du règlement IA de l'UE** | |
| **Évaluation de conformité requise** | [ ] Tiers [ ] Auto-évaluation [ ] Aucune |

### 8.3 Résumé des exigences applicables

| Catégorie d'exigence | Applicable ? | Notes |
|---------------------|-------------|-------|
| Système de gestion des risques | [ ] Oui [ ] Non | |
| Gouvernance des données | [ ] Oui [ ] Non | |
| Documentation technique | [ ] Oui [ ] Non | |
| Tenue de registres/Journalisation | [ ] Oui [ ] Non | |
| Transparence | [ ] Oui [ ] Non | |
| Surveillance humaine | [ ] Oui [ ] Non | |
| Exactitude, robustesse, cybersécurité | [ ] Oui [ ] Non | |
| Marquage CE | [ ] Oui [ ] Non | |
| Enregistrement dans la base de données UE | [ ] Oui [ ] Non | |
| Évaluation de conformité | [ ] Oui [ ] Non | |

---

## SECTION 9 : PREUVES ET DOCUMENTATION

### 9.1 Documentation justificative

| # | Document | Référence/Emplacement | Attaché |
|---|----------|-------------------|----------|
| 1 | Description/spécifications du système | | [ ] Oui [ ] Non |
| 2 | Architecture technique | | [ ] Oui [ ] Non |
| 3 | Déclaration de finalité prévue | | [ ] Oui [ ] Non |
| 4 | Analyse des utilisateurs/personnes concernées | | [ ] Oui [ ] Non |
| 5 | Analyse juridique/réglementaire | | [ ] Oui [ ] Non |
| 6 | Autre : | | [ ] Oui [ ] Non |

---

## SECTION 10 : APPROBATIONS

### 10.1 Approbation de l'évaluation

| Rôle | Nom | Signature | Date |
|------|------|-----------|------|
| **Évaluateur** | | | |
| **Responsable de la conformité IA** | | | |
| **Gestionnaire des risques IA** | | | |

### 10.2 Approbation de la classification (haut risque uniquement)

| Rôle | Nom | Signature | Date |
|------|------|-----------|------|
| **Représentant du comité de gouvernance IA** | | | |
| **Conseiller juridique** | | | |

---

## SECTION 11 : RÉVISION ET MISE À JOUR

### 11.1 Calendrier de révision de la classification

| Champ | Saisie |
|-------|--------|
| **Date de révision planifiée suivante** | |
| **Déclencheurs de révision** | [ ] Changement fonctionnel important [ ] Changement de finalité prévue [ ] Changement réglementaire [ ] Révision périodique |

### 11.2 Historique de classification

| Version | Date | Classification | Raison du changement | Approuvé par |
|---------|------|----------------|-------------------|-------------|
| 1.0 | | | Classification initiale | |
| | | | | |
| | | | | |

---

**Fin du formulaire**
