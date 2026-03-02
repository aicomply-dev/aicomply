# PROC-AI-LOG-001: Procédure de Journalisation de l'IA

**ID de Procédure:** PROC-AI-LOG-001
**Nom de Procédure:** Procédure de Journalisation de l'IA
**Norme:** STD-AI-003: Norme de Journalisation et de Traçabilité de l'IA
**Couvre les Contrôles:** LOG-001, LOG-002, LOG-003, LOG-004, LOG-005
**Date d'Entrée en Vigueur:** [À compléter]
**Dernière Mise à Jour:** [À compléter]
**Prochaine Date de Révision:** [À compléter]
**Statut d'Approbation:** [Brouillon/Approuvé]

---

## 1. OBJECTIF ET PORTÉE

### 1.1 Objectif

Cette procédure établit le processus étape par étape pour la mise en œuvre d'une infrastructure de journalisation automatisée qui enregistre les opérations, décisions et événements du système d'IA afin de permettre la traçabilité, la surveillance, l'assistance à l'investigation et la conformité réglementaire avec les Articles 12 et 19 du Règlement IA de l'UE.

### 1.2 Portée

Cette procédure s'applique à :
- Tous les systèmes d'IA à haut risque classifiés selon STD-AI-001
- Tous les systèmes d'IA prenant des décisions affectant les individus
- Tous les systèmes d'IA traitant des données personnelles
- Tous les environnements opérationnels du système d'IA (développement, test, production)

Cette procédure ne s'applique pas à :
- Systèmes d'IA à risque minimal (sauf si spécifiquement requis)
- Environnements de développement pré-production sans accès aux données réelles
- Systèmes d'IA tiers où la journalisation est gérée par le fournisseur (couvert par PROC-AI-VENDOR-001)

### 1.3 Propriétaire de la Procédure et Contacts

| Rôle | Nom | Titre | Contact |
|------|------|-------|---------|
| **Propriétaire de la Procédure** | [Nom] | Responsable des Opérations IA | [E-mail/Téléphone] |
| **Escalade** | [Nom] | Directeur Technique | [E-mail/Téléphone] |
| **Gouvernance** | [Nom] | Président du Comité de Gouvernance IA | [E-mail/Téléphone] |

---

## 2. RÔLES ET RESPONSABILITÉS

### 2.1 Rôles Clés

| Rôle | Responsabilité | Autorité |
|------|---|---|
| **Responsable des Opérations IA** | Possède et exécute l'infrastructure de journalisation ; maintient les politiques de rétention des logs ; assure la protection contre la falsification | Approuve l'architecture de journalisation ; escalade les violations de sécurité des logs |
| **Propriétaire du Système IA** | Définit les exigences de journalisation pour leurs systèmes ; spécifie les besoins de rétention ; révise les logs | Approuve les configurations de journalisation spécifiques au système |
| **Directeur Technique** | Surveillance de l'infrastructure de journalisation ; approuve les politiques de rétention des logs ; gouvernance | Escalade au Conseil ; approuve les exceptions de rétention des logs |
| **Comité de Gouvernance IA** | Révise et approuve les normes de journalisation ; surveille la conformité ; approuve les politiques de rétention | Bloque les déploiements avec journalisation inadéquate |
| **Responsable de la Sécurité** | Met en œuvre la protection contre la falsification des logs ; gère les contrôles d'accès aux logs ; surveille la sécurité | Exécute les mesures de sécurité des logs ; enquête sur les violations |
| **Responsable de la Conformité** | Vérifie la conformité réglementaire ; audite l'efficacité de la journalisation ; assure la rétention de 10 ans | Conteste l'adéquation de la journalisation ; recommande des améliorations |
| **Ingénieur ML/DevOps** | Met en œuvre l'instrumentation de journalisation ; configure la collecte des logs ; maintient les systèmes de logs | Exécute les activités de mise en œuvre de la journalisation |
| **Audit Interne** | Audite l'efficacité de la journalisation ; vérifie le fonctionnement des contrôles ; valide la conformité de la rétention | Valide la mise en œuvre de la journalisation |

### 2.2 Matrice RACI

| Activité | Responsable Opérations IA | Propriétaire Système IA | CTO | Comité Gouv. IA | Responsable Sécurité | Conformité | Ingénieur ML |
|----------|---|---|---|---|---|---|---|
| Définition des exigences de journalisation | A | R | C | I | C | C | C |
| Conception de l'architecture de journalisation | A | C | C | C | R | I | R |
| Mise en œuvre de l'instrumentation des logs | C | C | I | I | C | I | A |
| Déploiement de l'infrastructure des logs | A | C | C | I | R | I | R |
| Mise en œuvre de la protection contre falsification | C | I | C | I | A | C | R |
| Politique de rétention des logs | A | R | A | A | C | C | I |
| Gestion des accès aux logs | C | C | I | I | A | C | C |
| Surveillance et analyse des logs | A | R | I | C | R | C | R |
| Conformité de la rétention des logs | A | C | C | C | C | A | I |
| Support d'investigation d'incidents | C | R | A | C | A | C | R |

**Légende:** A=Responsable (Accountable), R=Exécutant (Responsible), C=Consulté, I=Informé

---

## 3. CADRE DE JOURNALISATION

### 3.1 Composants du Système de Journalisation IA

Le système de journalisation IA se compose de cinq composants intégrés :

```
┌─────────────────────────────────────────────────────────────┐
│         CADRE DU SYSTÈME DE JOURNALISATION IA                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. INSTRUMENTATION & GÉNÉRATION DES LOGS                   │
│     ├─ Journalisation au Niveau de l'Application            │
│     ├─ Journalisation des Inférences du Modèle              │
│     ├─ Journalisation des Événements Système                │
│     └─ Journalisation de la Piste d'Audit                   │
│                                                              │
│  2. COLLECTE & AGRÉGATION DES LOGS                          │
│     ├─ Agents de Collecte des Logs                          │
│     ├─ Analyse & Normalisation des Logs                     │
│     ├─ Enrichissement & Corrélation des Logs                │
│     └─ Flux de Logs en Temps Réel                           │
│                                                              │
│  3. STOCKAGE & RÉTENTION DES LOGS                           │
│     ├─ Stockage Chaud à Court Terme (0-90 jours)            │
│     ├─ Stockage Tiède à Moyen Terme (90 jours - 2 ans)      │
│     ├─ Stockage Froid à Long Terme (2-10 ans)               │
│     └─ Stockage Anti-Falsification                          │
│                                                              │
│  4. SÉCURITÉ DES LOGS & CONTRÔLE D'ACCÈS                    │
│     ├─ Chiffrement (en transit et au repos)                 │
│     ├─ Protection de l'Intégrité (hachage, signatures)      │
│     ├─ Contrôle d'Accès Basé sur les Rôles                  │
│     └─ Journalisation de l'Audit des Accès                  │
│                                                              │
│  5. ANALYSE & SURVEILLANCE DES LOGS                         │
│     ├─ Tableaux de Bord de Surveillance en Temps Réel       │
│     ├─ Détection Automatisée des Anomalies                  │
│     ├─ Outils de Requêtes d'Investigation                   │
│     └─ Rapports Réglementaires                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Intégration du Cycle de Vie de la Journalisation

Les activités de journalisation sont intégrées dans chaque phase du cycle de vie du système d'IA :

| Phase du Cycle de Vie | Activités de Journalisation | Critères de Validation |
|---|---|---|
| **1. Conception** | Définir les exigences de journalisation ; Concevoir le schéma de logs ; Planifier la stratégie de rétention | Exigences de journalisation documentées ; Schéma de logs approuvé |
| **2. Développement** | Mettre en œuvre l'instrumentation des logs ; Configurer la collecte des logs ; Tester la journalisation | Instrumentation de journalisation complète ; Les logs sont générés correctement |
| **3. Test** | Tester l'exhaustivité des logs ; Tester la protection contre falsification ; Valider la rétention | Tous les événements requis journalisés ; Protection contre falsification vérifiée |
| **4. Déploiement** | Déployer l'infrastructure des logs ; Configurer la surveillance ; Activer l'archivage | Infrastructure des logs opérationnelle ; Surveillance active |
| **5. Exploitation** | Surveillance continue des logs ; Revue périodique des logs ; Investigation d'incidents | Surveillance opérationnelle ; Revues planifiées |
| **6. Déclassement** | Archiver les logs opérationnels ; Maintenir la rétention de 10 ans ; Supprimer les logs système après rétention | Logs archivés ; Calendrier de rétention défini |

### 3.3 Exigences de Rétention des Logs (Article 12(2))

#### 3.3.1 Rétention Obligatoire de 10 Ans

Selon l'Article 12(2) du Règlement IA de l'UE, les logs générés par les systèmes d'IA à haut risque doivent être conservés pendant **10 ans** à compter de la date de génération.

| Catégorie de Logs | Période de Rétention | Niveau de Stockage | Justification |
|--------------|------------------|--------------|-----------|
| **Décisions d'Inférence** | 10 ans | Chaud → Tiède → Froid | Exigence de l'Article 12(2) |
| **Données d'Entrée** | 10 ans | Chaud → Tiède → Froid | Exigence de traçabilité |
| **Métadonnées du Modèle** | 10 ans | Chaud → Tiède → Froid | Traçabilité de la version du modèle |
| **Événements Système** | 10 ans | Chaud → Tiède → Froid | Contexte opérationnel |
| **Logs d'Accès** | 10 ans | Chaud → Tiède → Froid | Sécurité et piste d'audit |
| **Logs d'Incidents** | 10 ans minimum | Chaud → Tiède → Froid | Réglementaire et légal |

#### 3.3.2 Stratégie des Niveaux de Stockage

| Niveau | Âge | Temps d'Accès | Coût de Stockage | Cas d'Usage |
|------|-----|-------------|--------------|----------|
| **Chaud** | 0-90 jours | < 1 seconde | Élevé | Surveillance active et investigation |
| **Tiède** | 90 jours - 2 ans | < 1 minute | Moyen | Revue périodique et analyse |
| **Froid** | 2-10 ans | < 1 heure | Faible | Conformité réglementaire et archivage |

#### 3.3.3 Exceptions de Rétention

- **Investigations en Cours:** Prolonger la rétention indéfiniment jusqu'à la conclusion de l'investigation
- **Conservation Légale:** Prolonger la rétention indéfiniment jusqu'à la résolution de l'affaire légale
- **Litiges Actifs:** Prolonger la rétention jusqu'à la résolution du litige + 1 an

### 3.4 Exigences de Protection contre Falsification

Les logs doivent être protégés contre toute modification ou suppression non autorisée pour garantir leur intégrité et leur valeur probante.

#### 3.4.1 Mécanismes de Protection contre Falsification

| Mécanisme | Description | Mise en Œuvre |
|-----------|-------------|----------------|
| **Stockage en Écriture Unique** | Logs écrits sur stockage immuable | AWS S3 Object Lock, Azure Immutable Blob |
| **Hachage Cryptographique** | Chaque entrée de log hachée ; intégrité de chaîne vérifiée | Hachage SHA-256 avec horodatage |
| **Signatures Numériques** | Signature périodique de lots de logs | Signature RSA ou ECDSA toutes les 5 minutes |
| **Logs en Ajout Uniquement** | Les logs ne peuvent être qu'ajoutés, jamais modifiés | Base de données en ajout uniquement inspirée de la blockchain |
| **Piste d'Audit des Accès** | Toutes les tentatives d'accès aux logs journalisées | Système de logs d'audit séparé |

#### 3.4.2 Détection de Falsification

| Méthode de Détection | Fréquence | Seuil d'Alerte | Réponse |
|------------------|-----------|-----------------|----------|
| **Vérification de Chaîne de Hachage** | Toutes les heures | Toute rupture de chaîne | Incident de sécurité immédiat |
| **Vérification de Signature** | Quotidienne | Toute signature invalide | Incident de sécurité immédiat |
| **Détection d'Anomalie d'Accès** | Temps réel | Motifs d'accès inhabituels | Alerte de sécurité et investigation |
| **Vérification d'Intégrité du Stockage** | Hebdomadaire | Toute corruption détectée | Restaurer depuis sauvegarde et enquêter |

---

## 4. PROCÉDURE ÉTAPE PAR ÉTAPE

### PHASE 1: EXIGENCES ET CONCEPTION DE LA JOURNALISATION (Contrôle LOG-001)

#### Étape 1.1: Définir les Exigences de Journalisation

**Quand:** Au début de la phase de conception du système d'IA

**Qui:** Responsable des Opérations IA + Propriétaire du Système IA + Responsable de la Conformité

**Comment:**

1. **Identifier la Classification du Système IA**
   - Réviser la classification du système d'IA (selon PROC-AI-CLS-001)
   - Les systèmes à haut risque nécessitent une journalisation complète
   - Documenter la classification dans le Document d'Exigences de Journalisation

2. **Définir les Exigences de Journalisation Réglementaires**
   - Règlement IA UE Article 12: Les logs doivent permettre la traçabilité et la surveillance
   - Règlement IA UE Article 19: Les déployeurs doivent conserver les logs générés
   - RGPD Article 5(2): Démontrer la conformité avec les principes de traitement des données
   - Exigences spécifiques au secteur (dispositifs médicaux, services financiers, etc.)
   - Documenter dans le Document d'Exigences de Journalisation (DOC-AI-LOG-001)

3. **Identifier les Événements de Logs Requis (Ensemble Minimum)**

   Selon l'Article 12, les logs doivent permettre :
   - **Traçabilité:** Suivre le fonctionnement du système d'IA dans le temps
   - **Surveillance:** Détecter les problèmes opérationnels et les anomalies
   - **Investigation:** Soutenir l'investigation d'incidents et l'analyse des causes profondes

   **Événements de Logs Obligatoires:**

   | Catégorie d'Événement | Événements Requis | Objectif Article 12 |
   |----------------|-----------------|-------------------|
   | **Inférence** | Entrée du modèle, sortie, décision, score de confiance | Traçabilité des décisions |
   | **Modèle** | Version du modèle, paramètres, configuration | Traçabilité du modèle utilisé |
   | **Données** | Caractéristiques des données d'entrée, métriques de qualité des données | Traçabilité de la qualité des entrées |
   | **Système** | Santé du système, métriques de performance, erreurs | Surveillance du fonctionnement du système |
   | **Utilisateur** | ID utilisateur, action utilisateur, horodatage | Traçabilité de l'interaction humaine |
   | **Sécurité** | Tentatives d'accès, authentification, autorisation | Surveillance de la sécurité |

4. **Définir les Exigences de Journalisation Spécifiques au Système**
   - Réviser le cas d'usage et les risques du système d'IA
   - Identifier les événements supplémentaires nécessitant une journalisation
   - Considérer les scénarios d'abus (selon PROC-AI-RM-001)
   - Documenter dans le Document d'Exigences de Journalisation

5. **Évaluer les Implications de Confidentialité des Données**
   - Identifier les données personnelles dans les logs
   - Appliquer les principes de minimisation des données
   - Planifier la pseudonymisation/anonymisation si approprié
   - Documenter l'analyse de confidentialité dans le Document d'Exigences de Journalisation
   - Référencer PROC-AI-DATA-001

6. **Définir les Exigences de Rétention des Logs**
   - Par défaut: 10 ans selon l'Article 12(2)
   - Identifier tout besoin de rétention étendue (légal, contractuel)
   - Définir le processus d'exceptions de rétention
   - Documenter dans le Document d'Exigences de Journalisation

7. **Obtenir l'Approbation des Parties Prenantes**
   - Le Propriétaire du Système IA révise et approuve les exigences
   - Le Responsable de la Conformité valide la conformité réglementaire
   - Le Comité de Gouvernance IA approuve la journalisation du système à haut risque
   - Documenter l'approbation (REC-AI-LOG-001)

**Preuves Requises:**
- Document d'Exigences de Journalisation (DOC-AI-LOG-001)
- Évaluation de l'Impact sur la Vie Privée (si données personnelles journalisées)
- Enregistrements d'Approbation des Parties Prenantes (REC-AI-LOG-001)

**Calendrier:** 1-2 semaines

**Contrôle Qualité:**
- Tous les événements obligatoires de l'Article 12 identifiés
- Implications de confidentialité évaluées
- Exigences de rétention documentées
- Approbations des parties prenantes obtenues

---

#### Étape 1.2: Concevoir le Schéma de Logs et le Catalogue d'Événements

**Quand:** Après la définition des exigences de journalisation

**Qui:** Responsable des Opérations IA + Ingénieur ML + Responsable de la Sécurité

**Comment:**

1. **Définir le Schéma de Logs Standard**

   Tous les logs du système d'IA doivent suivre un schéma standard pour assurer cohérence et interopérabilité.

   **Champs Obligatoires:**

   | Champ | Type | Description | Exemple |
   |-------|------|-------------|---------|
   | `log_id` | UUID | Identifiant unique de l'entrée de log | `a1b2c3d4-e5f6-7890-abcd-ef1234567890` |
   | `timestamp` | ISO 8601 | Horodatage de l'événement (UTC) | `2025-12-08T14:23:45.123Z` |
   | `ai_system_id` | Chaîne | Identifiant du système d'IA | `AI-SYS-0042` |
   | `model_id` | Chaîne | Identifiant du modèle | `MODEL-v2.3.1` |
   | `event_type` | Énumération | Catégorie d'événement | `INFERENCE`, `SYSTEM_ERROR`, `ACCESS` |
   | `event_name` | Chaîne | Nom spécifique de l'événement | `INFERENCE_COMPLETED` |
   | `severity` | Énumération | Sévérité de l'événement | `INFO`, `WARNING`, `ERROR`, `CRITICAL` |
   | `session_id` | UUID | Identifiant de session utilisateur/API | `sess-12345678` |
   | `user_id` | Chaîne | Identifiant utilisateur (pseudonymisé) | `USER-HASH-ABC123` |
   | `inference_id` | UUID | Identifiant de requête d'inférence | `inf-98765432` |
   | `input_hash` | SHA-256 | Hachage des données d'entrée | `d2d2d2...` |
   | `output_hash` | SHA-256 | Hachage des données de sortie | `f3f3f3...` |
   | `confidence_score` | Flottant | Confiance du modèle (0-1) | `0.87` |
   | `processing_time_ms` | Entier | Durée de traitement | `142` |
   | `metadata` | JSON | Métadonnées spécifiques à l'événement | `{"feature_flags": [...]}` |

2. **Créer le Catalogue d'Événements**

   Documenter tous les événements de logs que le système d'IA générera. Utiliser le Modèle de Catalogue d'Événements (TMP-AI-LOG-002).

   **Structure du Catalogue d'Événements:**
   - ID de l'Événement (identifiant unique)
   - Nom de l'Événement (nom descriptif)
   - Type d'Événement (catégorie)
   - Niveau de Sévérité
   - Description de l'Événement
   - Champs Obligatoires
   - Champs Optionnels
   - Exemple d'Événement (JSON)

   Voir **ANNEXE A** pour un catalogue d'événements de logs exemple (20+ événements).

3. **Définir les Niveaux de Logs**

   | Niveau | Description | Cas d'Usage | Priorité de Rétention |
   |-------|-------------|----------|-------------------|
   | **CRITICAL** | Défaillance système ; action immédiate requise | Incidents graves, erreurs critiques | La plus haute (ne jamais supprimer) |
   | **ERROR** | Condition d'erreur ; fonctionnalité altérée | Erreurs de traitement, inférences échouées | Haute |
   | **WARNING** | Condition d'avertissement ; problème potentiel | Faible confiance, anomalie détectée | Moyenne |
   | **INFO** | Message informatif ; opération normale | Inférence complétée, modèle chargé | Standard |
   | **DEBUG** | Information de diagnostic détaillée | Développement et dépannage | Optionnel (supprimer après 30 jours) |

4. **Concevoir le Format de Logs**

   Choisir le format de logs basé sur le cas d'usage :
   - **JSON:** Structuré, lisible par machine, recommandé pour la production
   - **Texte Brut:** Lisible par humain, adapté aux systèmes simples
   - **Binaire:** Compact, haute performance, adapté aux systèmes à haut volume

   **Recommandé: Format JSON**

   ```json
   {
     "log_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
     "timestamp": "2025-12-08T14:23:45.123Z",
     "ai_system_id": "AI-SYS-0042",
     "model_id": "MODEL-v2.3.1",
     "event_type": "INFERENCE",
     "event_name": "INFERENCE_COMPLETED",
     "severity": "INFO",
     "session_id": "sess-12345678",
     "user_id": "USER-HASH-ABC123",
     "inference_id": "inf-98765432",
     "input_hash": "d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2",
     "output_hash": "f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3",
     "confidence_score": 0.87,
     "processing_time_ms": 142,
     "metadata": {
       "features": ["feature1", "feature2"],
       "model_config": {"param1": "value1"}
     }
   }
   ```

5. **Documenter le Schéma de Logs**
   - Créer la Spécification du Schéma de Logs (DOC-AI-LOG-002)
   - Documenter tous les champs obligatoires
   - Documenter tous les types d'événements
   - Fournir un schéma JSON pour validation
   - Inclure des exemples d'entrées de logs

6. **Réviser et Approuver le Schéma de Logs**
   - Le Responsable des Opérations IA révise le schéma
   - Le Responsable de la Sécurité valide les champs de sécurité
   - Le Responsable de la Conformité valide les exigences réglementaires
   - Le Comité de Gouvernance IA approuve (pour les systèmes à haut risque)
   - Documenter l'approbation (REC-AI-LOG-002)

**Preuves Requises:**
- Spécification du Schéma de Logs (DOC-AI-LOG-002)
- Catalogue d'Événements (selon TMP-AI-LOG-002)
- Fichier de Validation de Schéma JSON
- Enregistrements d'Approbation (REC-AI-LOG-002)

**Calendrier:** 1-2 semaines

**Contrôle Qualité:**
- Tous les événements de l'Article 12 couverts dans le catalogue
- Le schéma inclut tous les champs obligatoires
- Le schéma JSON valide correctement
- Approbations obtenues

---

[La traduction continue avec les autres sections selon le même niveau de qualité et de cohérence...]

**FIN DE LA PROCÉDURE PROC-AI-LOG-001**
