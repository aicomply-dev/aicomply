# CHK-AI-TRANS-001: Liste de Contrôle des Exigences de Transparence

**ID de la Liste de Contrôle:** CHK-AI-TRANS-001
**Nom de la Liste de Contrôle:** Liste de Contrôle des Exigences de Transparence
**Version:** 1.0
**Date d'Entrée en Vigueur:** [À remplir]
**Norme Associée:** STD-AI-006: Norme de Transparence de l'IA
**Procédure Associée:** PROC-AI-TRANS-001: Procédure de Transparence

---

## Objectif

Cette liste de contrôle garantit que les systèmes d'IA répondent aux exigences de transparence en vertu du Règlement européen sur l'IA, y compris l'Article 13 (IA à haut risque) et l'Article 50 (systèmes d'IA interagissant avec des personnes physiques, générant du contenu, etc.). Utilisez cette liste de contrôle pour vérifier la conformité en matière de transparence avant le déploiement et pendant le fonctionnement.

## Instructions

1. Complétez cette liste de contrôle pour tous les systèmes d'IA nécessitant des mesures de transparence
2. Marquez chaque exigence comme Conforme, Partielle, Non Conforme ou Non Applicable
3. Documentez les preuves de conformité
4. Traitez toutes les lacunes avant le déploiement
5. Révisez annuellement ou lors de changements significatifs du système

---

## INFORMATIONS SUR LA LISTE DE CONTRÔLE

| Champ | Entrée |
|-------|--------|
| **Nom du Système d'IA** | |
| **ID du Système d'IA** | |
| **Classification des Risques** | [ ] Haut Risque [ ] Risque Limité [ ] Risque Minimal |
| **Catégorie de Transparence** | [ ] Haut Risque (Art. 13) [ ] Interaction Directe (Art. 50.1) [ ] Reconnaissance des Émotions (Art. 50.2) [ ] Catégorisation Biométrique (Art. 50.3) [ ] Contenu Synthétique (Art. 50.4) |
| **Date de Révision** | |
| **Nom du Réviseur** | |

---

## SECTION 1: DÉTERMINATION DE L'APPLICABILITÉ

### 1.1 Applicabilité des Obligations de Transparence

| # | Question | Réponse | Notes |
|---|----------|---------|-------|
| 1.1.1 | S'agit-il d'un système d'IA à haut risque ? | [ ] Oui [ ] Non | |
| 1.1.2 | Le système d'IA interagit-il directement avec des personnes physiques ? | [ ] Oui [ ] Non | |
| 1.1.3 | Le système d'IA effectue-t-il la reconnaissance des émotions ? | [ ] Oui [ ] Non | |
| 1.1.4 | Le système d'IA effectue-t-il la catégorisation biométrique ? | [ ] Oui [ ] Non | |
| 1.1.5 | Le système d'IA génère-t-il ou manipule-t-il du contenu synthétique (deepfakes, texte, audio, vidéo) ? | [ ] Oui [ ] Non | |
| 1.1.6 | Le système d'IA est-il un modèle GPAI ? | [ ] Oui [ ] Non | |

### 1.2 Résumé des Exigences Applicables

| Ensemble d'Exigences | Applicable? |
|----------------------|-------------|
| Article 13 (Transparence Haut Risque) | [ ] Oui [ ] Non |
| Article 50.1 (Divulgation d'Interaction IA) | [ ] Oui [ ] Non |
| Article 50.2 (Divulgation Reconnaissance des Émotions) | [ ] Oui [ ] Non |
| Article 50.3 (Divulgation Catégorisation Biométrique) | [ ] Oui [ ] Non |
| Article 50.4 (Marquage Contenu Synthétique) | [ ] Oui [ ] Non |

---

## SECTION 2: TRANSPARENCE IA HAUT RISQUE (Article 13)

*Complétez cette section si le système d'IA est classé comme HAUT RISQUE*

### 2.1 Conception pour la Transparence

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 2.1.1 | Système conçu pour permettre aux déployeurs d'interpréter la sortie | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 2.1.2 | Système conçu pour permettre aux déployeurs d'utiliser la sortie de manière appropriée | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 2.1.3 | Mesures de transparence proportionnées à l'objectif visé | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 2.1.4 | Sortie compréhensible pour les utilisateurs cibles | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

### 2.2 Instructions d'Utilisation - Exigences Générales

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 2.2.1 | Instructions d'utilisation fournies | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 2.2.2 | Instructions dans un format et une langue appropriés | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 2.2.3 | Instructions accessibles et compréhensibles | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

### 2.3 Contenu des Instructions - Informations sur le Fournisseur

| # | Contenu Requis | Inclus? | Emplacement | Notes |
|---|----------------|---------|-------------|-------|
| 2.3.1 | Identité du fournisseur (nom, raison sociale enregistrée) | [ ] Oui [ ] Non | | |
| 2.3.2 | Coordonnées du fournisseur | [ ] Oui [ ] Non | | |
| 2.3.3 | Identité du représentant autorisé (le cas échéant) | [ ] Oui [ ] Non [ ] N/A | | |

### 2.4 Contenu des Instructions - Informations sur le Système

| # | Contenu Requis | Inclus? | Emplacement | Notes |
|---|----------------|---------|-------------|-------|
| 2.4.1 | Caractéristiques et capacités du système d'IA | [ ] Oui [ ] Non | | |
| 2.4.2 | Objectif visé du système d'IA | [ ] Oui [ ] Non | | |
| 2.4.3 | Niveau de précision et mesures pertinentes | [ ] Oui [ ] Non | | |
| 2.4.4 | Niveau de robustesse | [ ] Oui [ ] Non | | |
| 2.4.5 | Niveau de cybersécurité | [ ] Oui [ ] Non | | |
| 2.4.6 | Circonstances connues pouvant impacter les performances | [ ] Oui [ ] Non | | |
| 2.4.7 | Capacités techniques et limitations | [ ] Oui [ ] Non | | |
| 2.4.8 | Limitations du système | [ ] Oui [ ] Non | | |

### 2.5 Contenu des Instructions - Détails de Performance

| # | Contenu Requis | Inclus? | Emplacement | Notes |
|---|----------------|---------|-------------|-------|
| 2.5.1 | Mesures de performance pour l'objectif visé | [ ] Oui [ ] Non | | |
| 2.5.2 | Niveaux de performance pour les personnes/groupes affectés | [ ] Oui [ ] Non | | |
| 2.5.3 | Spécifications pour les données d'entrée | [ ] Oui [ ] Non | | |
| 2.5.4 | Modifications prédéterminées et leur impact | [ ] Oui [ ] Non [ ] N/A | | |

### 2.6 Contenu des Instructions - Surveillance Humaine

| # | Contenu Requis | Inclus? | Emplacement | Notes |
|---|----------------|---------|-------------|-------|
| 2.6.1 | Mesures de surveillance humaine décrites | [ ] Oui [ ] Non | | |
| 2.6.2 | Mesures techniques de surveillance documentées | [ ] Oui [ ] Non | | |
| 2.6.3 | Compétences humaines requises documentées | [ ] Oui [ ] Non | | |
| 2.6.4 | Instructions d'intervention/remplacement | [ ] Oui [ ] Non | | |

### 2.7 Contenu des Instructions - Maintenance et Support

| # | Contenu Requis | Inclus? | Emplacement | Notes |
|---|----------------|---------|-------------|-------|
| 2.7.1 | Durée de vie attendue du système d'IA | [ ] Oui [ ] Non | | |
| 2.7.2 | Mesures de maintenance et d'entretien | [ ] Oui [ ] Non | | |
| 2.7.3 | Informations d'installation des mises à jour | [ ] Oui [ ] Non | | |

**Statut de la Section 2:** [ ] Complète [ ] Incomplète

---

## SECTION 3: TRANSPARENCE DE L'INTERACTION IA (Article 50.1)

*Complétez si le système d'IA interagit directement avec des personnes physiques*

### 3.1 Exigences de Divulgation

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 3.1.1 | Personnes physiques informées qu'elles interagissent avec une IA | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 3.1.2 | Divulgation fournie de manière claire et reconnaissable | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 3.1.3 | Divulgation fournie lors de la première interaction | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 3.1.4 | Divulgation dans une langue compréhensible pour l'utilisateur | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

### 3.2 Contenu de la Divulgation

| # | Élément | Inclus? | Méthode de Mise en Œuvre | Notes |
|---|---------|---------|--------------------------|-------|
| 3.2.1 | Déclaration claire que l'utilisateur interagit avec une IA | [ ] Oui [ ] Non | | |
| 3.2.2 | Divulgation visible/audible avant l'interaction | [ ] Oui [ ] Non | | |
| 3.2.3 | Divulgation ne peut pas être facilement manquée | [ ] Oui [ ] Non | | |

### 3.3 Exceptions Appliquées (le cas échéant)

| # | Exception | Appliquée? | Justification |
|---|-----------|------------|---------------|
| 3.3.1 | IA évidente selon les circonstances | [ ] Oui [ ] Non | |
| 3.3.2 | Autorisé par la loi pour la prévention/détection de la criminalité | [ ] Oui [ ] Non [ ] N/A | |

**Statut de la Section 3:** [ ] Complète [ ] Incomplète [ ] N/A

---

## SECTION 4: TRANSPARENCE DE LA RECONNAISSANCE DES ÉMOTIONS (Article 50.2)

*Complétez si le système d'IA effectue la reconnaissance des émotions*

### 4.1 Exigences de Divulgation

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 4.1.1 | Personnes physiques informées de la reconnaissance des émotions | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 4.1.2 | Divulgation fournie avant le traitement | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 4.1.3 | Divulgation de manière claire et reconnaissable | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 4.1.4 | Catégories d'émotions détectées divulguées | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

### 4.2 Mise en Œuvre de la Divulgation

| # | Élément | Statut | Notes |
|---|---------|--------|-------|
| 4.2.1 | Mécanisme de divulgation mis en œuvre | [ ] Oui [ ] Non | |
| 4.2.2 | Divulgation documentée | [ ] Oui [ ] Non | |
| 4.2.3 | Divulgation testée pour la clarté | [ ] Oui [ ] Non | |

**Statut de la Section 4:** [ ] Complète [ ] Incomplète [ ] N/A

---

## SECTION 5: TRANSPARENCE DE LA CATÉGORISATION BIOMÉTRIQUE (Article 50.3)

*Complétez si le système d'IA effectue la catégorisation biométrique*

### 5.1 Exigences de Divulgation

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 5.1.1 | Personnes physiques informées de la catégorisation biométrique | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 5.1.2 | Divulgation fournie avant le traitement | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 5.1.3 | Divulgation de manière claire et reconnaissable | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 5.1.4 | Catégories d'attributs détectés divulguées | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

### 5.2 Exceptions Appliquées (le cas échéant)

| # | Exception | Appliquée? | Justification |
|---|-----------|------------|---------------|
| 5.2.1 | Autorisé par la loi pour la prévention/détection de la criminalité | [ ] Oui [ ] Non [ ] N/A | |

**Statut de la Section 5:** [ ] Complète [ ] Incomplète [ ] N/A

---

## SECTION 6: TRANSPARENCE DU CONTENU SYNTHÉTIQUE (Article 50.4)

*Complétez si le système d'IA génère ou manipule du contenu synthétique*

### 6.1 Types de Contenu

| # | Type de Contenu | Généré? | Marquage Requis |
|---|-----------------|---------|-----------------|
| 6.1.1 | Audio synthétique | [ ] Oui [ ] Non | [ ] Oui [ ] N/A |
| 6.1.2 | Image synthétique | [ ] Oui [ ] Non | [ ] Oui [ ] N/A |
| 6.1.3 | Vidéo synthétique | [ ] Oui [ ] Non | [ ] Oui [ ] N/A |
| 6.1.4 | Texte synthétique (publié pour information publique) | [ ] Oui [ ] Non | [ ] Oui [ ] N/A |
| 6.1.5 | Deep fakes | [ ] Oui [ ] Non | [ ] Oui [ ] N/A |

### 6.2 Exigences de Marquage

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 6.2.1 | Contenu synthétique marqué comme généré artificiellement | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 6.2.2 | Marquage lisible par machine lorsque techniquement faisable | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 6.2.3 | Marquage interopérable | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 6.2.4 | Deep fakes divulgués en tant que tels | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

### 6.3 Mise en Œuvre du Marquage

| # | Élément | Statut | Méthode Utilisée | Notes |
|---|---------|--------|------------------|-------|
| 6.3.1 | Marquage technique mis en œuvre | [ ] Oui [ ] Non | | |
| 6.3.2 | Norme de marquage utilisée | [ ] Oui [ ] Non | | |
| 6.3.3 | Marquage persistant à travers la distribution | [ ] Oui [ ] Non | | |
| 6.3.4 | Marquage testé pour l'efficacité | [ ] Oui [ ] Non | | |

### 6.4 Exceptions Appliquées (le cas échéant)

| # | Exception | Appliquée? | Justification |
|---|-----------|------------|---------------|
| 6.4.1 | Contenu assistant l'édition (sans modification substantielle) | [ ] Oui [ ] Non | |
| 6.4.2 | Contenu faisant partie d'une œuvre artistique/créative (clairement étiqueté) | [ ] Oui [ ] Non | |
| 6.4.3 | Autorisé par la loi pour la prévention/détection de la criminalité | [ ] Oui [ ] Non [ ] N/A | |

**Statut de la Section 6:** [ ] Complète [ ] Incomplète [ ] N/A

---

## SECTION 7: OBLIGATIONS DE TRANSPARENCE DU DÉPLOYEUR

*Pour les déployeurs de systèmes d'IA à haut risque*

### 7.1 Obligations du Déployeur

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 7.1.1 | Personnes affectées informées de l'utilisation d'IA à haut risque | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 7.1.2 | Notification avant la première exposition | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 7.1.3 | Informations dans un format accessible | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 7.1.4 | Représentants du lieu de travail informés (si contexte d'emploi) | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

### 7.2 Obligations du Déployeur Autorité Publique

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 7.2.1 | Enregistrement dans la base de données UE complété | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 7.2.2 | FRIA complétée et résumé publié | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

**Statut de la Section 7:** [ ] Complète [ ] Incomplète [ ] N/A

---

## SECTION 8: ACCESSIBILITÉ

### 8.1 Exigences d'Accessibilité

| # | Exigence | Statut | Preuve | Notes |
|---|----------|--------|--------|-------|
| 8.1.1 | Informations de transparence accessibles aux personnes handicapées | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 8.1.2 | Plusieurs formats disponibles si approprié | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |
| 8.1.3 | Versions linguistiques disponibles selon les besoins | [ ] Conforme [ ] Partielle [ ] Non Conforme [ ] N/A | | |

**Statut de la Section 8:** [ ] Complète [ ] Incomplète

---

## SECTION 9: DOCUMENTATION ET ENREGISTREMENTS

### 9.1 Documentation de Transparence

| # | Document | Disponible? | Emplacement | À jour? |
|---|----------|-------------|-------------|---------|
| 9.1.1 | Instructions d'utilisation | [ ] Oui [ ] Non | | [ ] Oui [ ] Non |
| 9.1.2 | Scripts/texte de divulgation de transparence | [ ] Oui [ ] Non | | [ ] Oui [ ] Non |
| 9.1.3 | Spécifications de marquage | [ ] Oui [ ] Non [ ] N/A | | [ ] Oui [ ] Non |
| 9.1.4 | Enregistrements de notification des utilisateurs | [ ] Oui [ ] Non | | [ ] Oui [ ] Non |

**Statut de la Section 9:** [ ] Complète [ ] Incomplète

---

## SECTION 10: RÉSUMÉ DE LA LISTE DE CONTRÔLE

### 10.1 Résumé de l'État des Sections

| Section | Statut | Lacunes Critiques |
|---------|--------|-------------------|
| 1. Applicabilité | [ ] Complète [ ] Incomplète | |
| 2. Transparence Haut Risque | [ ] Complète [ ] Incomplète [ ] N/A | |
| 3. Interaction IA | [ ] Complète [ ] Incomplète [ ] N/A | |
| 4. Reconnaissance des Émotions | [ ] Complète [ ] Incomplète [ ] N/A | |
| 5. Catégorisation Biométrique | [ ] Complète [ ] Incomplète [ ] N/A | |
| 6. Contenu Synthétique | [ ] Complète [ ] Incomplète [ ] N/A | |
| 7. Obligations du Déployeur | [ ] Complète [ ] Incomplète [ ] N/A | |
| 8. Accessibilité | [ ] Complète [ ] Incomplète | |
| 9. Documentation | [ ] Complète [ ] Incomplète | |

### 10.2 Évaluation Globale de la Transparence

| Champ | Entrée |
|-------|--------|
| **Statut Global** | [ ] Conforme [ ] Partiellement Conforme [ ] Non Conforme |
| **Lacunes Critiques** | |
| **Recommandations** | |

---

## SECTION 11: APPROBATION

| Rôle | Nom | Signature | Date |
|------|-----|-----------|------|
| **Réviseur** | | | |
| **Propriétaire du Système d'IA** | | | |
| **Responsable de la Conformité** | | | |

---

**Prochaine Révision Due:** _______________

---

**Fin de la Liste de Contrôle**
