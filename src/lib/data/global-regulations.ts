// Multi-language support for global AI regulations
export type SupportedLocale = 'en' | 'fr' | 'es' | 'ro'

export interface LocalizedString {
  en: string
  fr: string
  es: string
  ro: string
}

export interface LocalizedStringArray {
  en: string[]
  fr: string[]
  es: string[]
  ro: string[]
}

export interface Regulation {
  id: string
  jurisdiction: LocalizedString
  name: LocalizedString
  shortName: LocalizedString
  status: "enacted" | "proposed" | "voluntary" | "rescinded"
  effectiveDate?: LocalizedString
  description: LocalizedString
  philosophy: LocalizedString
  keyFeatures: LocalizedStringArray
  penalties?: LocalizedString
  icon: string
  color: string
  links?: { label: LocalizedString; url: string }[]
}

export interface RegulationCategory {
  id: string
  title: LocalizedString
  description: LocalizedString
  regulations: Regulation[]
}

export const GLOBAL_REGULATIONS: RegulationCategory[] = [
  {
    id: "comprehensive",
    title: {
      en: "Comprehensive Safety Frameworks",
      fr: "Cadres de sécurité complets",
      es: "Marcos de seguridad integrales",
      ro: "Cadre de securitate comprehensive"
    },
    description: {
      en: "Jurisdictions with binding, risk-based AI legislation focused on fundamental rights and safety.",
      fr: "Juridictions dotées d'une législation contraignante sur l'IA basée sur les risques et axée sur les droits fondamentaux et la sécurité.",
      es: "Jurisdicciones con legislación vinculante sobre IA basada en riesgos, centrada en derechos fundamentales y seguridad.",
      ro: "Jurisdicții cu legislație obligatorie privind IA bazată pe riscuri, concentrată pe drepturile fundamentale și siguranță."
    },
    regulations: [
      {
        id: "eu-ai-act",
        jurisdiction: {
          en: "European Union",
          fr: "Union européenne",
          es: "Unión Europea",
          ro: "Uniunea Europeană"
        },
        name: {
          en: "Artificial Intelligence Act",
          fr: "Règlement sur l'intelligence artificielle",
          es: "Ley de Inteligencia Artificial",
          ro: "Actul privind inteligența artificială"
        },
        shortName: {
          en: "EU AI Act",
          fr: "Règlement européen sur l'IA",
          es: "Ley de IA de la UE",
          ro: "Actul UE privind IA"
        },
        status: "enacted",
        effectiveDate: {
          en: "August 2025 (phased)",
          fr: "Août 2025 (progressif)",
          es: "Agosto 2025 (gradual)",
          ro: "August 2025 (treptat)"
        },
        description: {
          en: "The world's first comprehensive AI regulation, establishing a risk-based framework for AI systems with strict requirements for high-risk applications.",
          fr: "Premier règlement complet au monde sur l'IA, établissant un cadre basé sur les risques pour les systèmes d'IA avec des exigences strictes pour les applications à haut risque.",
          es: "La primera regulación integral de IA del mundo, que establece un marco basado en riesgos para sistemas de IA con requisitos estrictos para aplicaciones de alto riesgo.",
          ro: "Prima reglementare cuprinzătoare a IA din lume, care stabilește un cadru bazat pe riscuri pentru sistemele de IA cu cerințe stricte pentru aplicațiile cu risc ridicat."
        },
        philosophy: {
          en: "Fundamental Rights & Safety",
          fr: "Droits fondamentaux et sécurité",
          es: "Derechos fundamentales y seguridad",
          ro: "Drepturi fundamentale și siguranță"
        },
        keyFeatures: {
          en: [
            "Risk-based classification (Prohibited, High-Risk, Limited, Minimal)",
            "Prohibited practices include social scoring, manipulative AI, real-time biometric ID",
            "High-risk systems require conformity assessments, technical documentation, human oversight",
            "GPAI models must provide training data summaries and comply with copyright law",
            "Systemic risk models require additional safety evaluations and incident reporting",
          ],
          fr: [
            "Classification basée sur les risques (Interdit, Risque élevé, Limité, Minimal)",
            "Pratiques interdites : notation sociale, IA manipulatrice, identification biométrique en temps réel",
            "Systèmes à haut risque : évaluations de conformité, documentation technique, surveillance humaine requises",
            "Modèles d'IAGP doivent fournir des résumés des données d'entraînement et respecter le droit d'auteur",
            "Modèles à risque systémique nécessitent des évaluations de sécurité supplémentaires et déclaration d'incidents",
          ],
          es: [
            "Clasificación basada en riesgos (Prohibido, Alto riesgo, Limitado, Mínimo)",
            "Prácticas prohibidas: puntuación social, IA manipuladora, identificación biométrica en tiempo real",
            "Sistemas de alto riesgo requieren evaluaciones de conformidad, documentación técnica, supervisión humana",
            "Modelos GPAI deben proporcionar resúmenes de datos de entrenamiento y cumplir con ley de derechos de autor",
            "Modelos de riesgo sistémico requieren evaluaciones de seguridad adicionales y reporte de incidentes",
          ],
          ro: [
            "Clasificare bazată pe riscuri (Interzis, Risc ridicat, Limitat, Minimal)",
            "Practici interzise: notare socială, IA manipulatoare, identificare biometrică în timp real",
            "Sistemele cu risc ridicat necesită evaluări de conformitate, documentație tehnică, supraveghere umană",
            "Modelele GPAI trebuie să furnizeze rezumate ale datelor de antrenament și să respecte legea drepturilor de autor",
            "Modelele cu risc sistemic necesită evaluări de securitate suplimentare și raportare a incidentelor",
          ]
        },
        penalties: {
          en: "Up to €35M or 7% of global annual turnover",
          fr: "Jusqu'à 35 M€ ou 7% du chiffre d'affaires annuel mondial",
          es: "Hasta 35 M€ o 7% de la facturación anual global",
          ro: "Până la 35 milioane EUR sau 7% din cifra de afaceri anuală globală"
        },
        icon: "eu",
        color: "blue",
        links: [
          {
            label: {
              en: "Full Text",
              fr: "Texte intégral",
              es: "Texto completo",
              ro: "Text integral"
            },
            url: "/resources/regulation"
          },
          {
            label: {
              en: "EUR-Lex",
              fr: "EUR-Lex",
              es: "EUR-Lex",
              ro: "EUR-Lex"
            },
            url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689"
          },
        ],
      },
      {
        id: "brazil-ai-act",
        jurisdiction: {
          en: "Brazil",
          fr: "Brésil",
          es: "Brasil",
          ro: "Brazilia"
        },
        name: {
          en: "AI Regulatory Framework (Bill 2338/2023)",
          fr: "Cadre réglementaire de l'IA (Projet de loi 2338/2023)",
          es: "Marco regulatorio de IA (Proyecto de Ley 2338/2023)",
          ro: "Cadrul de reglementare al IA (Proiect de lege 2338/2023)"
        },
        shortName: {
          en: "Brazil AI Act",
          fr: "Loi brésilienne sur l'IA",
          es: "Ley de IA de Brasil",
          ro: "Actul IA al Braziliei"
        },
        status: "proposed",
        effectiveDate: {
          en: "Expected 2025-2026",
          fr: "Prévu 2025-2026",
          es: "Previsto 2025-2026",
          ro: "Așteptat 2025-2026"
        },
        description: {
          en: "Latin America's first comprehensive AI law, heavily modeled on the EU AI Act with risk-based classification and algorithmic impact assessments.",
          fr: "Première loi complète sur l'IA en Amérique latine, largement inspirée du Règlement européen sur l'IA avec classification basée sur les risques et évaluations d'impact algorithmique.",
          es: "Primera ley integral de IA en América Latina, fuertemente basada en la Ley de IA de la UE con clasificación por riesgos y evaluaciones de impacto algorítmico.",
          ro: "Prima lege cuprinzătoare privind IA din America Latină, puternic modelată pe Actul UE privind IA cu clasificare bazată pe riscuri și evaluări de impact algoritmic."
        },
        philosophy: {
          en: "Fundamental Rights & Safety",
          fr: "Droits fondamentaux et sécurité",
          es: "Derechos fundamentales y seguridad",
          ro: "Drepturi fundamentale și siguranță"
        },
        keyFeatures: {
          en: [
            "Risk-based classification (Excessive Risk vs. High Risk)",
            "Mandatory algorithmic impact assessments",
            "Rights catalog: explanation, human review, contestation",
            "Sector-specific requirements for healthcare, finance, public services",
          ],
          fr: [
            "Classification basée sur les risques (Risque excessif vs. Risque élevé)",
            "Évaluations d'impact algorithmique obligatoires",
            "Catalogue de droits : explication, révision humaine, contestation",
            "Exigences sectorielles pour santé, finance, services publics",
          ],
          es: [
            "Clasificación basada en riesgos (Riesgo excesivo vs. Alto riesgo)",
            "Evaluaciones de impacto algorítmico obligatorias",
            "Catálogo de derechos: explicación, revisión humana, impugnación",
            "Requisitos específicos por sector para salud, finanzas, servicios públicos",
          ],
          ro: [
            "Clasificare bazată pe riscuri (Risc excesiv vs. Risc ridicat)",
            "Evaluări obligatorii de impact algoritmic",
            "Catalog de drepturi: explicație, revizuire umană, contestare",
            "Cerințe specifice pe sector pentru sănătate, finanțe, servicii publice",
          ]
        },
        penalties: {
          en: "TBD (expected to mirror EU approach)",
          fr: "À déterminer (devrait suivre l'approche de l'UE)",
          es: "Por determinar (se espera que refleje el enfoque de la UE)",
          ro: "De stabilit (se așteaptă să reflecte abordarea UE)"
        },
        icon: "brazil",
        color: "green",
        links: [
          {
            label: {
              en: "Bill Status",
              fr: "Statut du projet de loi",
              es: "Estado del proyecto de ley",
              ro: "Starea proiectului de lege"
            },
            url: "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2338"
          },
        ],
      },
    ],
  },
  {
    id: "us-federal",
    title: {
      en: "United States Federal",
      fr: "États-Unis (Fédéral)",
      es: "Estados Unidos Federal",
      ro: "Statele Unite Federal"
    },
    description: {
      en: "Federal policy shifted from safety mandates to innovation acceleration in 2025.",
      fr: "La politique fédérale est passée de mandats de sécurité à l'accélération de l'innovation en 2025.",
      es: "La política federal pasó de mandatos de seguridad a aceleración de la innovación en 2025.",
      ro: "Politica federală a trecut de la mandate de siguranță la accelerarea inovației în 2025."
    },
    regulations: [
      {
        id: "eo-14179",
        jurisdiction: {
          en: "United States (Federal)",
          fr: "États-Unis (Fédéral)",
          es: "Estados Unidos (Federal)",
          ro: "Statele Unite (Federal)"
        },
        name: {
          en: "Executive Order 14179: Removing Barriers to American Leadership in AI",
          fr: "Décret exécutif 14179 : Supprimer les obstacles au leadership américain en IA",
          es: "Orden Ejecutiva 14179: Eliminación de barreras al liderazgo estadounidense en IA",
          ro: "Ordin executiv 14179: Eliminarea barierelor în calea conducerii americane în IA"
        },
        shortName: {
          en: "EO 14179",
          fr: "DE 14179",
          es: "OE 14179",
          ro: "OE 14179"
        },
        status: "enacted",
        effectiveDate: {
          en: "January 23, 2025",
          fr: "23 janvier 2025",
          es: "23 de enero de 2025",
          ro: "23 ianuarie 2025"
        },
        description: {
          en: "Establishes federal policy focused on 'AI dominance' and removing regulatory barriers to innovation. Rescinded previous safety-focused EO 14110.",
          fr: "Établit une politique fédérale axée sur la 'domination de l'IA' et la suppression des obstacles réglementaires à l'innovation. A révoqué le précédent DE 14110 axé sur la sécurité.",
          es: "Establece una política federal centrada en 'dominio de IA' y eliminación de barreras regulatorias a la innovación. Revocó la anterior OE 14110 enfocada en seguridad.",
          ro: "Stabilește o politică federală concentrată pe 'dominația IA' și eliminarea barierelor de reglementare în calea inovației. A revocat precedentul OE 14110 axat pe securitate."
        },
        philosophy: {
          en: "Innovation & Dominance",
          fr: "Innovation et domination",
          es: "Innovación y dominio",
          ro: "Inovație și dominație"
        },
        keyFeatures: {
          en: [
            "Rescinded EO 14110 safety reporting requirements",
            "Directs agencies to remove regulatory barriers to AI innovation",
            "Accelerates AI infrastructure development (data centers, energy)",
            "Prohibits 'ideological' AI in government procurement",
            "Broad national security exemptions",
          ],
          fr: [
            "A révoqué les exigences de reporting de sécurité du DE 14110",
            "Ordonne aux agences de supprimer les obstacles réglementaires à l'innovation en IA",
            "Accélère le développement d'infrastructures IA (centres de données, énergie)",
            "Interdit l'IA 'idéologique' dans les achats gouvernementaux",
            "Larges exemptions de sécurité nationale",
          ],
          es: [
            "Revocó los requisitos de reporte de seguridad de la OE 14110",
            "Ordena a las agencias eliminar barreras regulatorias a la innovación en IA",
            "Acelera el desarrollo de infraestructura de IA (centros de datos, energía)",
            "Prohíbe IA 'ideológica' en adquisiciones gubernamentales",
            "Amplias exenciones de seguridad nacional",
          ],
          ro: [
            "A revocat cerințele de raportare a securității din OE 14110",
            "Îndrumă agențiile să elimine barierele de reglementare în calea inovației IA",
            "Accelerează dezvoltarea infrastructurii IA (centre de date, energie)",
            "Interzice IA 'ideologică' în achizițiile guvernamentale",
            "Excepții largi de securitate națională",
          ]
        },
        icon: "us",
        color: "red",
        links: [
          {
            label: {
              en: "White House",
              fr: "Maison Blanche",
              es: "Casa Blanca",
              ro: "Casa Albă"
            },
            url: "https://www.whitehouse.gov/presidential-actions/2025/01/removing-barriers-to-american-leadership-in-artificial-intelligence/"
          },
        ],
      },
      {
        id: "eo-14110",
        jurisdiction: {
          en: "United States (Federal)",
          fr: "États-Unis (Fédéral)",
          es: "Estados Unidos (Federal)",
          ro: "Statele Unite (Federal)"
        },
        name: {
          en: "Executive Order 14110: Safe, Secure, and Trustworthy AI",
          fr: "Décret exécutif 14110 : IA sûre, sécurisée et digne de confiance",
          es: "Orden Ejecutiva 14110: IA segura, protegida y confiable",
          ro: "Ordin executiv 14110: IA sigură, protejată și de încredere"
        },
        shortName: {
          en: "EO 14110 (Rescinded)",
          fr: "DE 14110 (Révoqué)",
          es: "OE 14110 (Revocada)",
          ro: "OE 14110 (Revocat)"
        },
        status: "rescinded",
        effectiveDate: {
          en: "Rescinded January 20, 2025",
          fr: "Révoqué le 20 janvier 2025",
          es: "Revocada el 20 de enero de 2025",
          ro: "Revocat la 20 ianuarie 2025"
        },
        description: {
          en: "Former executive order establishing safety reporting requirements for dual-use foundation models. Rescinded by the Trump administration.",
          fr: "Ancien décret exécutif établissant des exigences de reporting de sécurité pour les modèles de fondation à double usage. Révoqué par l'administration Trump.",
          es: "Antigua orden ejecutiva que establecía requisitos de reporte de seguridad para modelos fundacionales de doble uso. Revocada por la administración Trump.",
          ro: "Fost ordin executiv care stabilea cerințe de raportare a securității pentru modelele fundamentale cu dublă utilizare. Revocat de administrația Trump."
        },
        philosophy: {
          en: "Safety & Security (Former)",
          fr: "Sûreté et sécurité (Ancien)",
          es: "Seguridad y protección (Anterior)",
          ro: "Siguranță și securitate (Anterior)"
        },
        keyFeatures: {
          en: [
            "Required safety testing for large AI models",
            "Established AI Safety Institute",
            "Mandated reporting for dual-use foundation models",
            "Created federal AI governance framework",
          ],
          fr: [
            "Tests de sécurité requis pour grands modèles d'IA",
            "Création de l'Institut de sécurité de l'IA",
            "Déclaration obligatoire pour modèles de fondation à double usage",
            "Création d'un cadre fédéral de gouvernance de l'IA",
          ],
          es: [
            "Pruebas de seguridad requeridas para grandes modelos de IA",
            "Estableció el Instituto de Seguridad de IA",
            "Reporte obligatorio para modelos fundacionales de doble uso",
            "Creó marco federal de gobernanza de IA",
          ],
          ro: [
            "Teste de securitate necesare pentru modele mari de IA",
            "A înființat Institutul de Siguranță IA",
            "Raportare obligatorie pentru modele fundamentale cu dublă utilizare",
            "A creat cadrul federal de guvernanță IA",
          ]
        },
        icon: "us",
        color: "gray",
      },
    ],
  },
  {
    id: "us-states",
    title: {
      en: "United States State Laws",
      fr: "Lois des États américains",
      es: "Leyes estatales de Estados Unidos",
      ro: "Legile statelor americane"
    },
    description: {
      en: "In the absence of federal regulation, states have enacted their own AI laws with divergent liability standards.",
      fr: "En l'absence de réglementation fédérale, les États ont adopté leurs propres lois sur l'IA avec des normes de responsabilité divergentes.",
      es: "Ante la ausencia de regulación federal, los estados han promulgado sus propias leyes de IA con estándares de responsabilidad divergentes.",
      ro: "În absența reglementării federale, statele au adoptat propriile legi privind IA cu standarde de răspundere divergente."
    },
    regulations: [
      {
        id: "texas-traiga",
        jurisdiction: {
          en: "Texas",
          fr: "Texas",
          es: "Texas",
          ro: "Texas"
        },
        name: {
          en: "Texas Responsible AI Governance Act",
          fr: "Loi texane sur la gouvernance responsable de l'IA",
          es: "Ley de Gobernanza Responsable de IA de Texas",
          ro: "Legea texană privind guvernanța responsabilă a IA"
        },
        shortName: {
          en: "TRAIGA (HB 149)",
          fr: "TRAIGA (HB 149)",
          es: "TRAIGA (HB 149)",
          ro: "TRAIGA (HB 149)"
        },
        status: "enacted",
        effectiveDate: {
          en: "January 1, 2026",
          fr: "1er janvier 2026",
          es: "1 de enero de 2026",
          ro: "1 ianuarie 2026"
        },
        description: {
          en: "Business-friendly AI law with intent-based liability standard. Prohibits social scoring, manipulation, and CSAM. Provides safe harbor for NIST RMF/ISO 42001 compliance.",
          fr: "Loi favorable aux entreprises avec norme de responsabilité basée sur l'intention. Interdit la notation sociale, la manipulation et le CSAM. Offre un refuge sûr pour la conformité NIST RMF/ISO 42001.",
          es: "Ley favorable a empresas con estándar de responsabilidad basado en intención. Prohíbe puntuación social, manipulación y CSAM. Proporciona puerto seguro para cumplimiento NIST RMF/ISO 42001.",
          ro: "Lege favorabilă afacerilor cu standard de răspundere bazat pe intenție. Interzice notarea socială, manipularea și CSAM. Oferă port sigur pentru conformitatea NIST RMF/ISO 42001."
        },
        philosophy: {
          en: "Intent-Based Liability",
          fr: "Responsabilité basée sur l'intention",
          es: "Responsabilidad basada en intención",
          ro: "Răspundere bazată pe intenție"
        },
        keyFeatures: {
          en: [
            "Intent-based discrimination standard (not disparate impact)",
            "Prohibits social scoring, manipulation, CSAM generation",
            "Safe harbor for NIST AI RMF or ISO 42001 compliance",
            "36-month regulatory sandbox for testing",
            "AG-only enforcement, no private right of action",
          ],
          fr: [
            "Norme de discrimination basée sur l'intention (pas d'impact disparate)",
            "Interdit notation sociale, manipulation, génération de CSAM",
            "Refuge sûr pour conformité NIST AI RMF ou ISO 42001",
            "Bac à sable réglementaire de 36 mois pour tests",
            "Application par le procureur général uniquement, pas de droit d'action privé",
          ],
          es: [
            "Estándar de discriminación basado en intención (no impacto dispar)",
            "Prohíbe puntuación social, manipulación, generación de CSAM",
            "Puerto seguro para cumplimiento NIST AI RMF o ISO 42001",
            "Sandbox regulatorio de 36 meses para pruebas",
            "Aplicación solo por Fiscal General, sin derecho de acción privada",
          ],
          ro: [
            "Standard de discriminare bazat pe intenție (nu impact disproporționat)",
            "Interzice notarea socială, manipularea, generarea de CSAM",
            "Port sigur pentru conformitatea NIST AI RMF sau ISO 42001",
            "Sandbox de reglementare de 36 luni pentru testare",
            "Aplicare doar de către Procurorul General, fără drept de acțiune privată",
          ]
        },
        penalties: {
          en: "Civil penalties via Attorney General",
          fr: "Sanctions civiles via le procureur général",
          es: "Sanciones civiles mediante Fiscal General",
          ro: "Penalități civile prin Procurorul General"
        },
        icon: "texas",
        color: "orange",
      },
      {
        id: "colorado-sb205",
        jurisdiction: {
          en: "Colorado",
          fr: "Colorado",
          es: "Colorado",
          ro: "Colorado"
        },
        name: {
          en: "Colorado AI Act",
          fr: "Loi sur l'IA du Colorado",
          es: "Ley de IA de Colorado",
          ro: "Legea IA din Colorado"
        },
        shortName: {
          en: "SB 205",
          fr: "SB 205",
          es: "SB 205",
          ro: "SB 205"
        },
        status: "enacted",
        effectiveDate: {
          en: "June 30, 2026",
          fr: "30 juin 2026",
          es: "30 de junio de 2026",
          ro: "30 iunie 2026"
        },
        description: {
          en: "Establishes duty of reasonable care to protect consumers from algorithmic discrimination. Requires annual impact assessments for high-risk AI.",
          fr: "Établit un devoir de diligence raisonnable pour protéger les consommateurs contre la discrimination algorithmique. Exige des évaluations d'impact annuelles pour l'IA à haut risque.",
          es: "Establece deber de cuidado razonable para proteger consumidores de discriminación algorítmica. Requiere evaluaciones de impacto anuales para IA de alto riesgo.",
          ro: "Stabilește obligația de diligență rezonabilă pentru protejarea consumatorilor de discriminarea algoritmică. Necesită evaluări de impact anuale pentru IA cu risc ridicat."
        },
        philosophy: {
          en: "Duty of Care",
          fr: "Devoir de diligence",
          es: "Deber de cuidado",
          ro: "Obligația de diligenț"
        },
        keyFeatures: {
          en: [
            "Duty of reasonable care standard",
            "Applies to 'consequential decisions' (lending, housing, employment, healthcare)",
            "Developers must provide training data info to deployers",
            "Deployers must conduct annual impact assessments",
            "Consumer rights: notification and appeal of adverse decisions",
            "NIST AI RMF creates rebuttable presumption of compliance",
          ],
          fr: [
            "Norme de devoir de diligence raisonnable",
            "S'applique aux 'décisions conséquentes' (prêts, logement, emploi, santé)",
            "Développeurs doivent fournir infos sur données d'entraînement aux déployeurs",
            "Déployeurs doivent effectuer évaluations d'impact annuelles",
            "Droits des consommateurs : notification et recours contre décisions défavorables",
            "NIST AI RMF crée présomption réfutable de conformité",
          ],
          es: [
            "Estándar de deber de cuidado razonable",
            "Aplica a 'decisiones consecuentes' (préstamos, vivienda, empleo, salud)",
            "Desarrolladores deben proporcionar info de datos de entrenamiento a implementadores",
            "Implementadores deben realizar evaluaciones de impacto anuales",
            "Derechos del consumidor: notificación y apelación de decisiones adversas",
            "NIST AI RMF crea presunción refutable de cumplimiento",
          ],
          ro: [
            "Standard de obligație de diligenț rezonabilă",
            "Se aplică 'deciziilor cu consecințe' (credite, locuințe, angajare, sănătate)",
            "Dezvoltatorii trebuie să furnizeze informații despre datele de antrenament către implementatori",
            "Implementatorii trebuie să efectueze evaluări de impact anuale",
            "Drepturile consumatorilor: notificare și contestare a deciziilor adverse",
            "NIST AI RMF creează prezumție refutabilă de conformitate",
          ]
        },
        penalties: {
          en: "Enforcement by Attorney General under CCPA",
          fr: "Application par le procureur général sous CCPA",
          es: "Aplicación por Fiscal General bajo CCPA",
          ro: "Aplicare de către Procurorul General sub CCPA"
        },
        icon: "colorado",
        color: "purple",
      },
      {
        id: "california-ab2013",
        jurisdiction: {
          en: "California",
          fr: "Californie",
          es: "California",
          ro: "California"
        },
        name: {
          en: "California AI Transparency Laws",
          fr: "Lois californiennes sur la transparence de l'IA",
          es: "Leyes de transparencia de IA de California",
          ro: "Legile californiene privind transparența IA"
        },
        shortName: {
          en: "AB 2013 + Related",
          fr: "AB 2013 + Connexes",
          es: "AB 2013 + Relacionadas",
          ro: "AB 2013 + Conexe"
        },
        status: "enacted",
        effectiveDate: {
          en: "January 1, 2026",
          fr: "1er janvier 2026",
          es: "1 de enero de 2026",
          ro: "1 ianuarie 2026"
        },
        description: {
          en: "Suite of targeted laws requiring training data transparency, digital replica protections, and deepfake labeling.",
          fr: "Ensemble de lois ciblées exigeant transparence des données d'entraînement, protections des répliques numériques et étiquetage des deepfakes.",
          es: "Conjunto de leyes específicas que requieren transparencia de datos de entrenamiento, protecciones de réplicas digitales y etiquetado de deepfakes.",
          ro: "Set de legi țintite care necesită transparența datelor de antrenament, protecții pentru replicile digitale și etichetarea deepfake-urilor."
        },
        philosophy: {
          en: "Transparency & Specific Harms",
          fr: "Transparence et préjudices spécifiques",
          es: "Transparencia y daños específicos",
          ro: "Transparență și prejudicii specifice"
        },
        keyFeatures: {
          en: [
            "AB 2013: Training data summary disclosure (sources, personal data, copyrighted works)",
            "AB 1836: Digital replica protections for deceased personalities",
            "Deepfake labeling for election-related content",
            "Prohibition on materially deceptive election content",
          ],
          fr: [
            "AB 2013 : Divulgation de résumé des données d'entraînement (sources, données personnelles, œuvres protégées)",
            "AB 1836 : Protections des répliques numériques pour personnalités décédées",
            "Étiquetage des deepfakes pour contenu lié aux élections",
            "Interdiction de contenu électoral matériellement trompeur",
          ],
          es: [
            "AB 2013: Divulgación de resumen de datos de entrenamiento (fuentes, datos personales, obras con derechos de autor)",
            "AB 1836: Protecciones de réplicas digitales para personalidades fallecidas",
            "Etiquetado de deepfakes para contenido relacionado con elecciones",
            "Prohibición de contenido electoral materialmente engañoso",
          ],
          ro: [
            "AB 2013: Divulgarea rezumatului datelor de antrenament (surse, date personale, lucrări cu drepturi de autor)",
            "AB 1836: Protecții pentru replicile digitale ale personalităților decedate",
            "Etichetarea deepfake-urilor pentru conținut legat de alegeri",
            "Interdicție privind conținutul electoral material înșelător",
          ]
        },
        icon: "california",
        color: "yellow",
      },
    ],
  },
  {
    id: "china",
    title: {
      en: "China",
      fr: "Chine",
      es: "China",
      ro: "China"
    },
    description: {
      en: "Technical security model focused on information control, data purity, and supply chain security through mandatory national standards.",
      fr: "Modèle de sécurité technique axé sur le contrôle de l'information, la pureté des données et la sécurité de la chaîne d'approvisionnement via des normes nationales obligatoires.",
      es: "Modelo de seguridad técnica centrado en control de información, pureza de datos y seguridad de cadena de suministro mediante estándares nacionales obligatorios.",
      ro: "Model de securitate tehnică concentrat pe controlul informațiilor, puritatea datelor și securitatea lanțului de aprovizionare prin standarde naționale obligatorii."
    },
    regulations: [
      {
        id: "china-genai",
        jurisdiction: {
          en: "China",
          fr: "Chine",
          es: "China",
          ro: "China"
        },
        name: {
          en: "Generative AI Measures + National Standards",
          fr: "Mesures sur l'IA générative + Normes nationales",
          es: "Medidas de IA generativa + Estándares nacionales",
          ro: "Măsuri privind IA generativă + Standarde naționale"
        },
        shortName: {
          en: "GenAI Measures",
          fr: "Mesures IA générative",
          es: "Medidas IA Gen",
          ro: "Măsuri IA Gen"
        },
        status: "enacted",
        effectiveDate: {
          en: "November 1, 2025 (Standards)",
          fr: "1er novembre 2025 (Normes)",
          es: "1 de noviembre de 2025 (Estándares)",
          ro: "1 noiembrie 2025 (Standarde)"
        },
        description: {
          en: "Comprehensive framework regulating generative AI through the '3+N' system: three foundational regulations plus expanding mandatory technical standards.",
          fr: "Cadre complet régulant l'IA générative via le système '3+N' : trois règlements fondamentaux plus normes techniques obligatoires en expansion.",
          es: "Marco integral que regula la IA generativa mediante el sistema '3+N': tres regulaciones fundamentales más estándares técnicos obligatorios en expansión.",
          ro: "Cadru cuprinzător care reglementează IA generativă prin sistemul '3+N': trei reglementări fundamentale plus standarde tehnice obligatorii în expansiune."
        },
        philosophy: {
          en: "Information Control & Security",
          fr: "Contrôle de l'information et sécurité",
          es: "Control de información y seguridad",
          ro: "Control al informațiilor și securitate"
        },
        keyFeatures: {
          en: [
            "Algorithm Recommendation Provisions (content pushing)",
            "Deep Synthesis Provisions (deepfakes)",
            "Generative AI Measures (public-facing LLMs)",
            "'5% Rule': Training data must contain <5% harmful/illegal content",
            "Mandatory annotator vetting and security training",
            "Input filtering and output monitoring requirements",
            "Mandatory AI content labeling (visible + metadata)",
          ],
          fr: [
            "Dispositions sur recommandation algorithmique (diffusion de contenu)",
            "Dispositions sur synthèse profonde (deepfakes)",
            "Mesures sur l'IA générative (LLM publics)",
            "Règle des '5%' : données d'entraînement doivent contenir <5% contenu nuisible/illégal",
            "Vérification obligatoire des annotateurs et formation en sécurité",
            "Exigences de filtrage d'entrée et surveillance de sortie",
            "Étiquetage obligatoire du contenu IA (visible + métadonnées)",
          ],
          es: [
            "Disposiciones de recomendación algorítmica (difusión de contenido)",
            "Disposiciones de síntesis profunda (deepfakes)",
            "Medidas de IA generativa (LLMs públicos)",
            "Regla del '5%': datos de entrenamiento deben contener <5% contenido dañino/ilegal",
            "Verificación obligatoria de anotadores y capacitación en seguridad",
            "Requisitos de filtrado de entrada y monitoreo de salida",
            "Etiquetado obligatorio de contenido IA (visible + metadatos)",
          ],
          ro: [
            "Prevederi privind recomandările algoritmice (diseminare conținut)",
            "Prevederi privind sinteza profundă (deepfake-uri)",
            "Măsuri privind IA generativă (LLM-uri publice)",
            "Regula '5%': datele de antrenament trebuie să conțină <5% conținut dăunător/ilegal",
            "Verificare obligatorie a adnotatorilor și instruire în securitate",
            "Cerințe de filtrare a intrărilor și monitorizare a ieșirilor",
            "Etichetare obligatorie a conținutului IA (vizibilă + metadate)",
          ]
        },
        penalties: {
          en: "Criminal and civil liability",
          fr: "Responsabilité pénale et civile",
          es: "Responsabilidad penal y civil",
          ro: "Răspundere penală și civilă"
        },
        icon: "china",
        color: "red",
      },
    ],
  },
  {
    id: "soft-law",
    title: {
      en: "Voluntary & Soft Law Approaches",
      fr: "Approches volontaires et droit souple",
      es: "Enfoques voluntarios y derecho blando",
      ro: "Abordări voluntare și drept flexibil"
    },
    description: {
      en: "Jurisdictions relying on principles, guidelines, and sector-specific regulation rather than comprehensive AI legislation.",
      fr: "Juridictions s'appuyant sur des principes, lignes directrices et réglementations sectorielles plutôt que sur une législation complète sur l'IA.",
      es: "Jurisdicciones que dependen de principios, directrices y regulación específica por sector en lugar de legislación integral sobre IA.",
      ro: "Jurisdicții care se bazează pe principii, orientări și reglementare specifică sectorului în loc de legislație cuprinzătoare privind IA."
    },
    regulations: [
      {
        id: "uk-approach",
        jurisdiction: {
          en: "United Kingdom",
          fr: "Royaume-Uni",
          es: "Reino Unido",
          ro: "Regatul Unit"
        },
        name: {
          en: "Pro-Innovation AI Framework",
          fr: "Cadre pro-innovation pour l'IA",
          es: "Marco de IA pro-innovación",
          ro: "Cadru IA pro-inovație"
        },
        shortName: {
          en: "UK AI Framework",
          fr: "Cadre IA britannique",
          es: "Marco IA del RU",
          ro: "Cadrul IA al Regatului Unit"
        },
        status: "voluntary",
        effectiveDate: {
          en: "Ongoing",
          fr: "En cours",
          es: "En curso",
          ro: "În curs"
        },
        description: {
          en: "Sector-led approach empowering existing regulators (ICO, CMA, FCA) to apply context-specific rules based on five non-statutory principles.",
          fr: "Approche sectorielle habilitant les régulateurs existants (ICO, CMA, FCA) à appliquer des règles contextuelles basées sur cinq principes non statutaires.",
          es: "Enfoque liderado por sectores que capacita a reguladores existentes (ICO, CMA, FCA) para aplicar reglas específicas al contexto basadas en cinco principios no estatutarios.",
          ro: "Abordare condusă de sectoare care împuternicește reglementatorii existenți (ICO, CMA, FCA) să aplice reguli specifice contextului bazate pe cinci principii non-statutare."
        },
        philosophy: {
          en: "Innovation & Sector Regulation",
          fr: "Innovation et régulation sectorielle",
          es: "Innovación y regulación sectorial",
          ro: "Inovație și reglementare sectorială"
        },
        keyFeatures: {
          en: [
            "Five principles: Safety, Transparency, Fairness, Accountability, Contestability",
            "Principles are non-statutory (guidance only)",
            "Sector regulators interpret and apply principles",
            "Data Use and Access Act 2025 enables AI development",
            "Broader ADM permissions than EU (with safeguards)",
            "Expanded 'scientific research' definition includes commercial R&D",
          ],
          fr: [
            "Cinq principes : Sécurité, Transparence, Équité, Responsabilité, Contestabilité",
            "Principes non statutaires (orientation uniquement)",
            "Régulateurs sectoriels interprètent et appliquent les principes",
            "Loi sur l'utilisation et l'accès aux données 2025 facilite développement IA",
            "Autorisations ADM plus larges que l'UE (avec garanties)",
            "Définition élargie de 'recherche scientifique' inclut R&D commercial",
          ],
          es: [
            "Cinco principios: Seguridad, Transparencia, Equidad, Responsabilidad, Contestabilidad",
            "Principios no estatutarios (solo orientación)",
            "Reguladores sectoriales interpretan y aplican principios",
            "Ley de uso y acceso a datos 2025 habilita desarrollo de IA",
            "Permisos ADM más amplios que UE (con salvaguardas)",
            "Definición ampliada de 'investigación científica' incluye I+D comercial",
          ],
          ro: [
            "Cinci principii: Siguranță, Transparență, Echitate, Responsabilitate, Contestabilitate",
            "Principiile sunt non-statutare (doar orientare)",
            "Reglementatorii sectoriali interpretează și aplică principiile",
            "Legea privind utilizarea și accesul la date 2025 permite dezvoltarea IA",
            "Permisiuni ADM mai largi decât UE (cu protecții)",
            "Definiție extinsă a 'cercetării științifice' include cercetare și dezvoltare comercială",
          ]
        },
        icon: "uk",
        color: "blue",
      },
      {
        id: "japan-guidelines",
        jurisdiction: {
          en: "Japan",
          fr: "Japon",
          es: "Japón",
          ro: "Japonia"
        },
        name: {
          en: "AI Guidelines for Business Ver 1.1",
          fr: "Lignes directrices IA pour les entreprises Ver 1.1",
          es: "Directrices de IA para empresas Ver 1.1",
          ro: "Orientări IA pentru afaceri Ver 1.1"
        },
        shortName: {
          en: "Japan AI Guidelines",
          fr: "Lignes directrices IA Japon",
          es: "Directrices IA Japón",
          ro: "Orientări IA Japonia"
        },
        status: "voluntary",
        effectiveDate: {
          en: "April 2025",
          fr: "Avril 2025",
          es: "Abril 2025",
          ro: "Aprilie 2025"
        },
        description: {
          en: "Strictly voluntary guidelines focused on 'Human-Centric AI,' safety, and fairness. References G7 Hiroshima Process Code of Conduct.",
          fr: "Lignes directrices strictement volontaires axées sur 'IA centrée sur l'humain', sécurité et équité. Fait référence au Code de conduite du Processus d'Hiroshima du G7.",
          es: "Directrices estrictamente voluntarias centradas en 'IA centrada en el ser humano', seguridad y equidad. Referencias al Código de Conducta del Proceso de Hiroshima del G7.",
          ro: "Orientări strict voluntare concentrate pe 'IA centrată pe om', siguranță și echitate. Referințe la Codul de conduită al Procesului Hiroshima G7."
        },
        philosophy: {
          en: "Human-Centric AI (Voluntary)",
          fr: "IA centrée sur l'humain (Volontaire)",
          es: "IA centrada en el ser humano (Voluntaria)",
          ro: "IA centrată pe om (Voluntar)"
        },
        keyFeatures: {
          en: [
            "Voluntary compliance (no penalties)",
            "Focus on human-centric AI, safety, fairness",
            "References G7 Hiroshima Process",
            "Effectively mandatory for government procurement",
            "Social pressure mechanism via keiretsu relationships",
          ],
          fr: [
            "Conformité volontaire (pas de sanctions)",
            "Accent sur IA centrée sur l'humain, sécurité, équité",
            "Références au Processus d'Hiroshima du G7",
            "Effectivement obligatoire pour achats gouvernementaux",
            "Mécanisme de pression sociale via relations keiretsu",
          ],
          es: [
            "Cumplimiento voluntario (sin sanciones)",
            "Enfoque en IA centrada en el ser humano, seguridad, equidad",
            "Referencias al Proceso de Hiroshima del G7",
            "Efectivamente obligatorio para adquisiciones gubernamentales",
            "Mecanismo de presión social vía relaciones keiretsu",
          ],
          ro: [
            "Conformitate voluntară (fără penalități)",
            "Concentrare pe IA centrată pe om, siguranță, echitate",
            "Referințe la Procesul Hiroshima G7",
            "Efectiv obligatoriu pentru achizițiile guvernamentale",
            "Mecanism de presiune socială prin relații keiretsu",
          ]
        },
        icon: "japan",
        color: "red",
      },
      {
        id: "australia-vaiss",
        jurisdiction: {
          en: "Australia",
          fr: "Australie",
          es: "Australia",
          ro: "Australia"
        },
        name: {
          en: "Voluntary AI Safety Standards",
          fr: "Normes volontaires de sécurité de l'IA",
          es: "Estándares voluntarios de seguridad de IA",
          ro: "Standarde voluntare de siguranță IA"
        },
        shortName: {
          en: "VAISS",
          fr: "VAISS",
          es: "VAISS",
          ro: "VAISS"
        },
        status: "voluntary",
        effectiveDate: {
          en: "2025",
          fr: "2025",
          es: "2025",
          ro: "2025"
        },
        description: {
          en: "After abandoning mandatory guardrails, Australia released voluntary safety standards and a National AI Plan.",
          fr: "Après avoir abandonné les garde-fous obligatoires, l'Australie a publié des normes de sécurité volontaires et un Plan national pour l'IA.",
          es: "Después de abandonar las barreras obligatorias, Australia publicó estándares de seguridad voluntarios y un Plan Nacional de IA.",
          ro: "După abandonarea barierelor obligatorii, Australia a lansat standarde de siguranță voluntare și un Plan Național IA."
        },
        philosophy: {
          en: "Innovation & Voluntary Standards",
          fr: "Innovation et normes volontaires",
          es: "Innovación y estándares voluntarios",
          ro: "Inovație și standarde voluntare"
        },
        keyFeatures: {
          en: [
            "Rejected mandatory guardrails approach",
            "National AI Plan for strategic direction",
            "Voluntary AI Safety Standards (VAISS)",
            "Focus on reducing compliance burden for SMEs",
            "Aligns with UK/Japan soft law model",
          ],
          fr: [
            "Rejet de l'approche de garde-fous obligatoires",
            "Plan national pour l'IA pour orientation stratégique",
            "Normes volontaires de sécurité de l'IA (VAISS)",
            "Accent sur réduction du fardeau de conformité pour PME",
            "Aligné sur modèle de droit souple RU/Japon",
          ],
          es: [
            "Rechazó enfoque de barreras obligatorias",
            "Plan Nacional de IA para dirección estratégica",
            "Estándares voluntarios de seguridad de IA (VAISS)",
            "Enfoque en reducir carga de cumplimiento para PYMEs",
            "Se alinea con modelo de derecho blando RU/Japón",
          ],
          ro: [
            "A respins abordarea barierelor obligatorii",
            "Plan Național IA pentru direcție strategică",
            "Standarde voluntare de siguranță IA (VAISS)",
            "Concentrare pe reducerea poverii de conformitate pentru IMM-uri",
            "Aliniat cu modelul de drept flexibil RU/Japonia",
          ]
        },
        icon: "australia",
        color: "green",
      },
      {
        id: "canada-aida",
        jurisdiction: {
          en: "Canada",
          fr: "Canada",
          es: "Canadá",
          ro: "Canada"
        },
        name: {
          en: "Artificial Intelligence and Data Act",
          fr: "Loi sur l'intelligence artificielle et les données",
          es: "Ley de Inteligencia Artificial y Datos",
          ro: "Legea privind inteligența artificială și datele"
        },
        shortName: {
          en: "AIDA (Stalled)",
          fr: "AIDA (Bloqué)",
          es: "AIDA (Estancada)",
          ro: "AIDA (Blocată)"
        },
        status: "proposed",
        effectiveDate: {
          en: "Failed to pass (2025)",
          fr: "Échec de l'adoption (2025)",
          es: "No aprobada (2025)",
          ro: "Nu a trecut (2025)"
        },
        description: {
          en: "Part of Bill C-27, AIDA failed to pass before Parliament prorogued in January 2025. Quebec's Law 25 remains the primary constraint.",
          fr: "Partie du projet de loi C-27, AIDA n'a pas été adoptée avant la prorogation du Parlement en janvier 2025. La Loi 25 du Québec demeure la principale contrainte.",
          es: "Parte del Proyecto de Ley C-27, AIDA no logró aprobarse antes de que el Parlamento se prorrogara en enero de 2025. La Ley 25 de Quebec sigue siendo la restricción principal.",
          ro: "Parte a Proiectului de lege C-27, AIDA nu a reușit să treacă înainte ca Parlamentul să fie prorogat în ianuarie 2025. Legea 25 din Quebec rămâne principala restricție."
        },
        philosophy: {
          en: "Legislative Vacuum",
          fr: "Vide législatif",
          es: "Vacío legislativo",
          ro: "Vid legislativ"
        },
        keyFeatures: {
          en: [
            "Bill C-27 failed to pass",
            "No federal AI law as of late 2025",
            "Quebec Law 25 regulates ADM and data portability",
            "Provincial patchwork emerging",
          ],
          fr: [
            "Projet de loi C-27 n'a pas été adopté",
            "Aucune loi fédérale sur l'IA fin 2025",
            "Loi 25 du Québec réglemente ADM et portabilité des données",
            "Mosaïque provinciale émergente",
          ],
          es: [
            "Proyecto de Ley C-27 no aprobado",
            "Sin ley federal de IA a finales de 2025",
            "Ley 25 de Quebec regula ADM y portabilidad de datos",
            "Mosaico provincial emergente",
          ],
          ro: [
            "Proiectul de lege C-27 nu a trecut",
            "Nicio lege federală privind IA până la sfârșitul lui 2025",
            "Legea 25 din Quebec reglementează ADM și portabilitatea datelor",
            "Mozaic provincial emergent",
          ]
        },
        icon: "canada",
        color: "red",
      },
    ],
  },
  {
    id: "international",
    title: {
      en: "International Standards & Treaties",
      fr: "Normes et traités internationaux",
      es: "Normas y tratados internacionales",
      ro: "Standarde și tratate internaționale"
    },
    description: {
      en: "Global frameworks and technical standards serving as 'compliance passports' across jurisdictions.",
      fr: "Cadres mondiaux et normes techniques servant de 'passeports de conformité' à travers les juridictions.",
      es: "Marcos globales y estándares técnicos que sirven como 'pasaportes de cumplimiento' entre jurisdicciones.",
      ro: "Cadre globale și standarde tehnice care servesc drept 'pașapoarte de conformitate' între jurisdicții."
    },
    regulations: [
      {
        id: "iso-42001",
        jurisdiction: {
          en: "International",
          fr: "International",
          es: "Internacional",
          ro: "Internațional"
        },
        name: {
          en: "ISO/IEC 42001: AI Management System",
          fr: "ISO/IEC 42001 : Système de management de l'IA",
          es: "ISO/IEC 42001: Sistema de gestión de IA",
          ro: "ISO/IEC 42001: Sistem de management IA"
        },
        shortName: {
          en: "ISO 42001",
          fr: "ISO 42001",
          es: "ISO 42001",
          ro: "ISO 42001"
        },
        status: "enacted",
        effectiveDate: {
          en: "2023 (Updated 2025)",
          fr: "2023 (Mis à jour 2025)",
          es: "2023 (Actualizado 2025)",
          ro: "2023 (Actualizat 2025)"
        },
        description: {
          en: "The critical certifiable framework for AI governance. Provides legal safe harbor in Texas and Colorado, and demonstrates EU AI Act compliance.",
          fr: "Cadre certifiable essentiel pour la gouvernance de l'IA. Offre refuge juridique au Texas et Colorado, et démontre conformité au Règlement européen sur l'IA.",
          es: "Marco certificable crítico para gobernanza de IA. Proporciona puerto seguro legal en Texas y Colorado, y demuestra cumplimiento de la Ley de IA de la UE.",
          ro: "Cadrul certificabil esențial pentru guvernanța IA. Oferă port sigur legal în Texas și Colorado și demonstrează conformitatea cu Actul UE privind IA."
        },
        philosophy: {
          en: "Technical Governance Standard",
          fr: "Norme de gouvernance technique",
          es: "Estándar de gobernanza técnica",
          ro: "Standard de guvernanță tehnică"
        },
        keyFeatures: {
          en: [
            "Certifiable AI Management System (AIMS)",
            "Safe harbor defense in Texas (TRAIGA)",
            "Rebuttable presumption in Colorado (SB 205)",
            "Demonstrates EU AI Act Article 17 compliance",
            "Annex A controls for risk, data, transparency",
            "Serves as 'compliance passport' across jurisdictions",
          ],
          fr: [
            "Système de management de l'IA certifiable (AIMS)",
            "Défense de refuge sûr au Texas (TRAIGA)",
            "Présomption réfutable au Colorado (SB 205)",
            "Démontre conformité à l'Article 17 du Règlement européen sur l'IA",
            "Annexe A contrôles pour risque, données, transparence",
            "Sert de 'passeport de conformité' à travers juridictions",
          ],
          es: [
            "Sistema de gestión de IA certificable (AIMS)",
            "Defensa de puerto seguro en Texas (TRAIGA)",
            "Presunción refutable en Colorado (SB 205)",
            "Demuestra cumplimiento del Artículo 17 de la Ley de IA de la UE",
            "Anexo A controles para riesgo, datos, transparencia",
            "Sirve como 'pasaporte de cumplimiento' entre jurisdicciones",
          ],
          ro: [
            "Sistem de management IA certificabil (AIMS)",
            "Apărare de port sigur în Texas (TRAIGA)",
            "Prezumție refutabilă în Colorado (SB 205)",
            "Demonstrează conformitatea cu Articolul 17 din Actul UE privind IA",
            "Anexa A controale pentru risc, date, transparență",
            "Servește ca 'pașaport de conformitate' între jurisdicții",
          ]
        },
        icon: "iso",
        color: "blue",
        links: [
          {
            label: {
              en: "ISO Website",
              fr: "Site ISO",
              es: "Sitio web ISO",
              ro: "Site-ul ISO"
            },
            url: "https://www.iso.org/standard/81230.html"
          },
        ],
      },
      {
        id: "coe-convention",
        jurisdiction: {
          en: "International",
          fr: "International",
          es: "Internacional",
          ro: "Internațional"
        },
        name: {
          en: "Council of Europe Framework Convention on AI",
          fr: "Convention-cadre du Conseil de l'Europe sur l'IA",
          es: "Convención Marco del Consejo de Europa sobre IA",
          ro: "Convenția-cadru a Consiliului Europei privind IA"
        },
        shortName: {
          en: "CoE AI Convention",
          fr: "Convention IA CoE",
          es: "Convención IA CdE",
          ro: "Convenția IA CE"
        },
        status: "enacted",
        effectiveDate: {
          en: "2024 (Signed)",
          fr: "2024 (Signée)",
          es: "2024 (Firmada)",
          ro: "2024 (Semnată)"
        },
        description: {
          en: "First legally binding international treaty on AI, focusing on human rights, democracy, and rule of law. Signed by EU, UK, US, Japan, Canada.",
          fr: "Premier traité international juridiquement contraignant sur l'IA, axé sur droits humains, démocratie et État de droit. Signé par UE, RU, États-Unis, Japon, Canada.",
          es: "Primer tratado internacional legalmente vinculante sobre IA, centrado en derechos humanos, democracia y estado de derecho. Firmado por UE, RU, EE.UU., Japón, Canadá.",
          ro: "Primul tratat internațional obligatoriu din punct de vedere juridic privind IA, concentrat pe drepturile omului, democrație și statul de drept. Semnat de UE, Regatul Unit, SUA, Japonia, Canada."
        },
        philosophy: {
          en: "Human Rights & Democracy",
          fr: "Droits humains et démocratie",
          es: "Derechos humanos y democracia",
          ro: "Drepturile omului și democrație"
        },
        keyFeatures: {
          en: [
            "First binding international AI treaty",
            "Signatories: EU, UK, US, Japan, Canada, Switzerland",
            "Requires national implementation",
            "Focus on human rights, democracy, rule of law",
            "US signature largely symbolic without implementing legislation",
          ],
          fr: [
            "Premier traité international contraignant sur l'IA",
            "Signataires : UE, RU, États-Unis, Japon, Canada, Suisse",
            "Nécessite mise en œuvre nationale",
            "Accent sur droits humains, démocratie, État de droit",
            "Signature américaine largement symbolique sans législation d'application",
          ],
          es: [
            "Primer tratado internacional vinculante sobre IA",
            "Signatarios: UE, RU, EE.UU., Japón, Canadá, Suiza",
            "Requiere implementación nacional",
            "Enfoque en derechos humanos, democracia, estado de derecho",
            "Firma estadounidense mayormente simbólica sin legislación de implementación",
          ],
          ro: [
            "Primul tratat internațional obligatoriu privind IA",
            "Semnatari: UE, Regatul Unit, SUA, Japonia, Canada, Elveția",
            "Necesită implementare națională",
            "Concentrare pe drepturile omului, democrație, statul de drept",
            "Semnătura SUA în mare parte simbolică fără legislație de implementare",
          ]
        },
        icon: "coe",
        color: "purple",
        links: [
          {
            label: {
              en: "Council of Europe",
              fr: "Conseil de l'Europe",
              es: "Consejo de Europa",
              ro: "Consiliul Europei"
            },
            url: "https://www.coe.int/en/web/artificial-intelligence"
          },
        ],
      },
      {
        id: "g7-hiroshima",
        jurisdiction: {
          en: "G7",
          fr: "G7",
          es: "G7",
          ro: "G7"
        },
        name: {
          en: "Hiroshima Process International Code of Conduct",
          fr: "Code de conduite international du Processus d'Hiroshima",
          es: "Código de Conducta Internacional del Proceso de Hiroshima",
          ro: "Codul de conduită internațional al Procesului Hiroshima"
        },
        shortName: {
          en: "G7 Hiroshima Code",
          fr: "Code Hiroshima G7",
          es: "Código Hiroshima G7",
          ro: "Codul Hiroshima G7"
        },
        status: "voluntary",
        effectiveDate: {
          en: "2023",
          fr: "2023",
          es: "2023",
          ro: "2023"
        },
        description: {
          en: "High-level normative framework for advanced AI systems. Forms basis of safety testing commitments by major AI labs.",
          fr: "Cadre normatif de haut niveau pour systèmes d'IA avancés. Forme la base des engagements de tests de sécurité par les principaux laboratoires d'IA.",
          es: "Marco normativo de alto nivel para sistemas de IA avanzados. Forma la base de compromisos de pruebas de seguridad por los principales laboratorios de IA.",
          ro: "Cadru normativ de nivel înalt pentru sisteme IA avansate. Formează baza angajamentelor de testare a siguranței de către principalele laboratoare IA."
        },
        philosophy: {
          en: "Voluntary Safety Commitments",
          fr: "Engagements volontaires de sécurité",
          es: "Compromisos voluntarios de seguridad",
          ro: "Angajamente voluntare de siguranță"
        },
        keyFeatures: {
          en: [
            "Voluntary code for advanced AI developers",
            "Basis for AI lab safety commitments",
            "Monitored by OECD",
            "US withdrawal from mandatory reporting weakened enforcement",
            "Shifted to voluntary self-reporting regime",
          ],
          fr: [
            "Code volontaire pour développeurs d'IA avancée",
            "Base pour engagements de sécurité des laboratoires d'IA",
            "Surveillé par l'OCDE",
            "Retrait américain du reporting obligatoire a affaibli l'application",
            "Passage à un régime volontaire d'auto-déclaration",
          ],
          es: [
            "Código voluntario para desarrolladores de IA avanzada",
            "Base para compromisos de seguridad de laboratorios de IA",
            "Monitoreado por OCDE",
            "Retiro estadounidense del reporte obligatorio debilitó aplicación",
            "Cambio a régimen de auto-reporte voluntario",
          ],
          ro: [
            "Cod voluntar pentru dezvoltatorii de IA avansată",
            "Bază pentru angajamentele de siguranță ale laboratoarelor IA",
            "Monitorizat de OCDE",
            "Retragerea SUA din raportarea obligatorie a slăbit aplicarea",
            "Trecere la regim de auto-raportare voluntară",
          ]
        },
        icon: "g7",
        color: "blue",
      },
    ],
  },
]

export interface ComplianceRow {
  feature: LocalizedString
  eu: LocalizedString
  usFederal: LocalizedString
  usStates: LocalizedString
  china: LocalizedString
  uk: LocalizedString
}

export const COMPLIANCE_MATRIX = {
  headers: {
    en: ["Feature", "EU", "US Federal", "US States", "China", "UK"],
    fr: ["Caractéristique", "UE", "États-Unis fédéral", "États américains", "Chine", "RU"],
    es: ["Característica", "UE", "EE.UU. Federal", "Estados de EE.UU.", "China", "RU"],
    ro: ["Caracteristică", "UE", "SUA Federal", "State SUA", "China", "Regatul Unit"]
  },
  rows: [
    {
      feature: {
        en: "Core Philosophy",
        fr: "Philosophie de base",
        es: "Filosofía central",
        ro: "Filozofia de bază"
      },
      eu: {
        en: "Fundamental Rights & Safety",
        fr: "Droits fondamentaux et sécurité",
        es: "Derechos fundamentales y seguridad",
        ro: "Drepturi fundamentale și siguranță"
      },
      usFederal: {
        en: "Innovation & Dominance",
        fr: "Innovation et domination",
        es: "Innovación y dominio",
        ro: "Inovație și dominație"
      },
      usStates: {
        en: "Liability & Consumer Protection",
        fr: "Responsabilité et protection des consommateurs",
        es: "Responsabilidad y protección del consumidor",
        ro: "Răspundere și protecția consumatorilor"
      },
      china: {
        en: "Information Control & Security",
        fr: "Contrôle de l'information et sécurité",
        es: "Control de información y seguridad",
        ro: "Control al informațiilor și securitate"
      },
      uk: {
        en: "Innovation & Data Access",
        fr: "Innovation et accès aux données",
        es: "Innovación y acceso a datos",
        ro: "Inovație și acces la date"
      },
    },
    {
      feature: {
        en: "Legal Status",
        fr: "Statut juridique",
        es: "Estado legal",
        ro: "Statut juridic"
      },
      eu: {
        en: "Hard Law (AI Act)",
        fr: "Droit dur (Règlement IA)",
        es: "Derecho duro (Ley de IA)",
        ro: "Drept strict (Actul IA)"
      },
      usFederal: {
        en: "Deregulation (EO 14179)",
        fr: "Déréglementation (DE 14179)",
        es: "Desregulación (OE 14179)",
        ro: "Dereglementare (OE 14179)"
      },
      usStates: {
        en: "Hard Law (State Patchwork)",
        fr: "Droit dur (Mosaïque étatique)",
        es: "Derecho duro (Mosaico estatal)",
        ro: "Drept strict (Mozaic de state)"
      },
      china: {
        en: "Hard Law (Mandatory Standards)",
        fr: "Droit dur (Normes obligatoires)",
        es: "Derecho duro (Estándares obligatorios)",
        ro: "Drept strict (Standarde obligatorii)"
      },
      uk: {
        en: "Soft Law / Data Reform",
        fr: "Droit souple / Réforme des données",
        es: "Derecho blando / Reforma de datos",
        ro: "Drept flexibil / Reformă date"
      },
    },
    {
      feature: {
        en: "Liability Approach",
        fr: "Approche de responsabilité",
        es: "Enfoque de responsabilidad",
        ro: "Abordarea răspunderii"
      },
      eu: {
        en: "High (Admin Fines up to 7%)",
        fr: "Élevée (Amendes admin jusqu'à 7%)",
        es: "Alta (Multas admin hasta 7%)",
        ro: "Ridicată (Amenzi admin până la 7%)"
      },
      usFederal: {
        en: "Minimal (Contractual)",
        fr: "Minimale (Contractuelle)",
        es: "Mínima (Contractual)",
        ro: "Minimă (Contractuală)"
      },
      usStates: {
        en: "Variable (Intent vs. Duty of Care)",
        fr: "Variable (Intention vs. Devoir de diligence)",
        es: "Variable (Intención vs. Deber de cuidado)",
        ro: "Variabilă (Intenție vs. Obligație de diligenț)"
      },
      china: {
        en: "Criminal & Civil",
        fr: "Pénale et civile",
        es: "Penal y civil",
        ro: "Penală și civilă"
      },
      uk: {
        en: "Moderate (GDPR-based)",
        fr: "Modérée (Basée sur RGPD)",
        es: "Moderada (Basada en GDPR)",
        ro: "Moderată (Bazată pe GDPR)"
      },
    },
    {
      feature: {
        en: "Data Requirements",
        fr: "Exigences de données",
        es: "Requisitos de datos",
        ro: "Cerințe de date"
      },
      eu: {
        en: "Transparency / Copyright Summary",
        fr: "Transparence / Résumé droits d'auteur",
        es: "Transparencia / Resumen derechos de autor",
        ro: "Transparență / Rezumat drepturi de autor"
      },
      usFederal: {
        en: "None (Procurement preference)",
        fr: "Aucune (Préférence d'achat)",
        es: "Ninguno (Preferencia de adquisición)",
        ro: "Niciuna (Preferință de achiziție)"
      },
      usStates: {
        en: "Disclosure of Training Data (CA)",
        fr: "Divulgation données d'entraînement (CA)",
        es: "Divulgación de datos de entrenamiento (CA)",
        ro: "Divulgarea datelor de antrenament (CA)"
      },
      china: {
        en: "<5% Harmful Content / Security Review",
        fr: "<5% Contenu nuisible / Revue de sécurité",
        es: "<5% Contenido dañino / Revisión de seguridad",
        ro: "<5% Conținut dăunător / Revizuire de securitate"
      },
      uk: {
        en: "Broad Research Exemptions",
        fr: "Larges exemptions de recherche",
        es: "Amplias exenciones de investigación",
        ro: "Excepții largi de cercetare"
      },
    },
    {
      feature: {
        en: "Key 2025 Deadline",
        fr: "Date limite clé 2025",
        es: "Fecha límite clave 2025",
        ro: "Termen limită cheie 2025"
      },
      eu: {
        en: "Feb/Aug 2025 (Prohibitions/GPAI)",
        fr: "Fév/Août 2025 (Interdictions/IAGP)",
        es: "Feb/Ago 2025 (Prohibiciones/GPAI)",
        ro: "Feb/Aug 2025 (Interdicții/GPAI)"
      },
      usFederal: {
        en: "April 2025 (OMB Memos)",
        fr: "Avril 2025 (Mémos OMB)",
        es: "Abril 2025 (Memorandos OMB)",
        ro: "Aprilie 2025 (Memorii OMB)"
      },
      usStates: {
        en: "Jan/Jun 2026 (Effective Dates)",
        fr: "Jan/Juin 2026 (Dates d'entrée en vigueur)",
        es: "Ene/Jun 2026 (Fechas de vigencia)",
        ro: "Ian/Iun 2026 (Date de intrare în vigoare)"
      },
      china: {
        en: "November 2025 (Security Standards)",
        fr: "Novembre 2025 (Normes de sécurité)",
        es: "Noviembre 2025 (Estándares de seguridad)",
        ro: "Noiembrie 2025 (Standarde de securitate)"
      },
      uk: {
        en: "June 2025 (Data Act)",
        fr: "Juin 2025 (Loi sur les données)",
        es: "Junio 2025 (Ley de datos)",
        ro: "Iunie 2025 (Legea datelor)"
      },
    },
    {
      feature: {
        en: "Recommended Strategy",
        fr: "Stratégie recommandée",
        es: "Estrategia recomendada",
        ro: "Strategie recomandată"
      },
      eu: {
        en: "Strict Internal Control / Notified Bodies",
        fr: "Contrôle interne strict / Organismes notifiés",
        es: "Control interno estricto / Organismos notificados",
        ro: "Control intern strict / Organisme notificate"
      },
      usFederal: {
        en: "Alignment with NIST RMF",
        fr: "Alignement avec NIST RMF",
        es: "Alineación con NIST RMF",
        ro: "Aliniere cu NIST RMF"
      },
      usStates: {
        en: "ISO 42001 Certification",
        fr: "Certification ISO 42001",
        es: "Certificación ISO 42001",
        ro: "Certificare ISO 42001"
      },
      china: {
        en: "Localized Model Training",
        fr: "Formation de modèles localisés",
        es: "Entrenamiento de modelos localizados",
        ro: "Antrenare de modele localizate"
      },
      uk: {
        en: "GDPR Compliance",
        fr: "Conformité RGPD",
        es: "Cumplimiento GDPR",
        ro: "Conformitate GDPR"
      },
    },
  ] as ComplianceRow[],
}

export interface StrategicRecommendation {
  title: LocalizedString
  description: LocalizedString
  priority: "high" | "medium"
}

export const STRATEGIC_RECOMMENDATIONS: StrategicRecommendation[] = [
  {
    title: {
      en: "Forked Compliance Architectures",
      fr: "Architectures de conformité bifurquées",
      es: "Arquitecturas de cumplimiento bifurcadas",
      ro: "Arhitecturi de conformitate bifurcate"
    },
    description: {
      en: "Maintain separate model weights or fine-tuning pipelines for different markets. China's data purity requirements (<5% harmful content) are incompatible with broad web-scraping practices.",
      fr: "Maintenir des poids de modèle séparés ou des pipelines de fine-tuning pour différents marchés. Les exigences de pureté des données de la Chine (<5% contenu nuisible) sont incompatibles avec les pratiques de web-scraping large.",
      es: "Mantener pesos de modelo separados o pipelines de ajuste fino para diferentes mercados. Los requisitos de pureza de datos de China (<5% contenido dañino) son incompatibles con prácticas amplias de web scraping.",
      ro: "Mențineți ponderi de model separate sau pipeline-uri de ajustare fină pentru diferite piețe. Cerințele de puritate a datelor din China (<5% conținut dăunător) sunt incompatibile cu practicile largi de web scraping."
    },
    priority: "high",
  },
  {
    title: {
      en: "ISO 42001 as Keystone",
      fr: "ISO 42001 comme pierre angulaire",
      es: "ISO 42001 como piedra angular",
      ro: "ISO 42001 ca piatră de temelie"
    },
    description: {
      en: "Pursuing ISO 42001 certification provides the highest ROI. It creates legal shields in Texas and Colorado, aligns with EU requirements, and serves as a 'compliance passport' for the fragmented US market.",
      fr: "Poursuivre la certification ISO 42001 offre le meilleur ROI. Elle crée des boucliers juridiques au Texas et Colorado, s'aligne sur les exigences de l'UE et sert de 'passeport de conformité' pour le marché américain fragmenté.",
      es: "Obtener la certificación ISO 42001 proporciona el mayor ROI. Crea escudos legales en Texas y Colorado, se alinea con requisitos de la UE y sirve como 'pasaporte de cumplimiento' para el mercado estadounidense fragmentado.",
      ro: "Obținerea certificării ISO 42001 oferă cel mai mare ROI. Creează scuturi juridice în Texas și Colorado, se aliniază cu cerințele UE și servește ca 'pașaport de conformitate' pentru piața fragmentată din SUA."
    },
    priority: "high",
  },
  {
    title: {
      en: "Documentation Dualism",
      fr: "Dualisme documentaire",
      es: "Dualismo de documentación",
      ro: "Dualism documentar"
    },
    description: {
      en: "For Texas, document intent (benign purpose, lack of discriminatory intent). For Colorado/EU, document impact (testing results, bias auditing, risk mitigation). Maintain both types of records.",
      fr: "Pour le Texas, documenter l'intention (objectif bénin, absence d'intention discriminatoire). Pour Colorado/UE, documenter l'impact (résultats de tests, audit des biais, atténuation des risques). Maintenir les deux types d'enregistrements.",
      es: "Para Texas, documentar intención (propósito benigno, falta de intención discriminatoria). Para Colorado/UE, documentar impacto (resultados de pruebas, auditoría de sesgos, mitigación de riesgos). Mantener ambos tipos de registros.",
      ro: "Pentru Texas, documentați intenția (scop benign, lipsa intenției discriminatorii). Pentru Colorado/UE, documentați impactul (rezultate teste, audit prejudecăți, atenuarea riscurilor). Mențineți ambele tipuri de înregistrări."
    },
    priority: "medium",
  },
  {
    title: {
      en: "Brussels Effect Limits",
      fr: "Limites de l'effet Bruxelles",
      es: "Límites del efecto Bruselas",
      ro: "Limitele efectului Bruxelles"
    },
    description: {
      en: "The US Federal pivot has blunted EU extraterritorial power. Expect continued geopolitical friction over 'systemic risk' definitions and open-source exemptions.",
      fr: "Le pivot fédéral américain a émoussé le pouvoir extraterritorial de l'UE. Attendez-vous à une friction géopolitique continue sur les définitions de 'risque systémique' et les exemptions open-source.",
      es: "El giro federal estadounidense ha debilitado el poder extraterritorial de la UE. Espere fricción geopolítica continua sobre definiciones de 'riesgo sistémico' y exenciones de código abierto.",
      ro: "Pivotarea federală americană a atenuat puterea extrateritorială a UE. Așteptați-vă la fricțiuni geopolitice continue privind definițiile de 'risc sistemic' și excepțiile open-source."
    },
    priority: "medium",
  },
]
