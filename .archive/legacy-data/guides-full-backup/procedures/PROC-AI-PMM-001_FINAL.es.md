# PROC-AI-PMM-001: Procedimiento de Vigilancia Post-Comercialización

**ID del Procedimiento:** PROC-AI-PMM-001
**Nombre del Procedimiento:** Procedimiento de Vigilancia Post-Comercialización
**Estándar:** STD-AI-012: Estándar de Vigilancia Post-Comercialización
**Artículo de la Ley de IA de la UE:** Artículo 72 (Vigilancia Post-Comercialización por Proveedores)
**Cubre Controles:** PMM-001, PMM-002, PMM-003, PMM-004, PMM-005
**Fecha de Entrada en Vigor:** [A completar]
**Última Actualización:** [A completar]
**Próxima Fecha de Revisión:** [A completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## TABLA DE CONTENIDOS

1. [Propósito y Alcance](#1-propósito-y-alcance)
2. [Definiciones](#2-definiciones)
3. [Base Regulatoria](#3-base-regulatoria)
4. [Roles y Responsabilidades](#4-roles-y-responsabilidades)
5. [Marco de Vigilancia Post-Comercialización](#5-marco-de-vigilancia-post-comercialización)
6. [Procedimiento Paso a Paso](#6-procedimiento-paso-a-paso)
   - Fase 1: Desarrollo del Plan de Vigilancia Post-Comercialización
   - Fase 2: Recopilación y Análisis de Datos
   - Fase 3: Evaluación del Desempeño
   - Fase 4: Acciones Correctivas
   - Fase 5: Reporte y Comunicación
   - Fase 6: Mejora Continua
7. [Mecanismos de Control](#7-mecanismos-de-control)
8. [KPIs y Métricas](#8-kpis-y-métricas)
9. [Requisitos de Documentación](#9-requisitos-de-documentación)
10. [Revisión y Auditoría](#10-revisión-y-auditoría)
11. [Manejo de No Conformidades](#11-manejo-de-no-conformidades)
12. [Documentos Relacionados](#12-documentos-relacionados)
13. [Apéndices](#13-apéndices)
14. [Historial de Revisiones](#14-historial-de-revisiones)
15. [Aprobación y Autorización](#15-aprobación-y-autorización)

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece un sistema integral, sistemático y proporcionado de vigilancia post-comercialización para sistemas de IA de alto riesgo con el fin de recopilar, documentar y analizar activa y continuamente datos sobre el desempeño de los sistemas de IA a lo largo de su ciclo de vida operacional, en cumplimiento con el Artículo 72 de la Ley de IA de la UE.

El sistema de vigilancia post-comercialización asegura:
- Verificación continua del cumplimiento del sistema de IA con los requisitos de la Ley de IA de la UE
- Detección temprana de degradación del desempeño, deriva de sesgos y problemas de seguridad
- Identificación proactiva de riesgos razonablemente previsibles no identificados durante la evaluación previa al despliegue
- Integración con sistemas de gestión de riesgos, gestión de calidad y reporte de incidentes
- Mejora continua basada en evidencia de los sistemas de IA

### 1.2 Alcance

Este procedimiento se aplica a:

**Dentro del Alcance:**
- Todos los sistemas de IA de alto riesgo puestos en el mercado o puestos en servicio (según la clasificación del Anexo III)
- Todos los sistemas de IA sujetos a evaluación de conformidad según el Artículo 43
- Todos los sistemas de IA desplegados en entornos de producción que sirven a usuarios finales
- Todos los sistemas de IA que procesan datos personales o toman decisiones que afectan derechos fundamentales
- Todos los sistemas de IA que han completado la fase de despliegue (posterior a la Fase 5 en el ciclo de vida)

**Fuera del Alcance:**
- Sistemas de IA en fases de desarrollo o prueba (cubiertos por PROC-AI-DEV-001)
- Sistemas de IA aún no desplegados en producción
- Sistemas de IA de riesgo mínimo (a menos que la organización aplique vigilancia voluntariamente)
- Sistemas de IA operados únicamente por desplegadores (obligaciones del desplegador según el Artículo 26)
- Prototipos de investigación y desarrollo no destinados a ser puestos en el mercado

### 1.3 Propietario del Procedimiento y Contactos

| Rol | Nombre | Título | Contacto |
|------|------|-------|---------|
| **Propietario del Procedimiento** | [Nombre] | Gerente de Vigilancia Post-Comercialización de IA | [Email/Teléfono] |
| **Escalamiento** | [Nombre] | Director de Producto | [Email/Teléfono] |
| **Gobernanza** | [Nombre] | Presidente del Comité de Gobernanza de IA | [Email/Teléfono] |
| **Integración de Calidad** | [Nombre] | Gerente del SGC | [Email/Teléfono] |
| **Integración de Gestión de Riesgos** | [Nombre] | Gerente de Riesgos de IA | [Email/Teléfono] |

---

## 2. DEFINICIONES

| Término | Definición |
|------|------------|
| **Vigilancia Post-Comercialización (PMM)** | Todas las actividades llevadas a cabo por proveedores para recopilar y revisar proactivamente la experiencia adquirida del uso de sistemas de IA que ponen en el mercado o ponen en servicio, con el propósito de identificar cualquier necesidad de aplicar inmediatamente las acciones correctivas o preventivas necesarias (Artículo 72 de la Ley de IA de la UE) |
| **Plan de Vigilancia Post-Comercialización (PMMP)** | Un plan documentado que describe la estrategia, métodos y procedimientos para recopilar, registrar y analizar activa y sistemáticamente datos relevantes sobre la calidad y el desempeño de un sistema de IA a lo largo de su vida útil |
| **Sistema de Vigilancia Post-Comercialización** | La estructura organizacional, procedimientos, procesos y recursos para recopilar, registrar y analizar datos sobre el desempeño del sistema de IA en uso operacional |
| **Datos de Desempeño** | Datos cuantitativos y cualitativos sobre la precisión, fiabilidad, robustez, seguridad y otras características operacionales del sistema de IA durante el uso en producción |
| **Retroalimentación** | Información recibida de desplegadores, usuarios, personas afectadas u otras partes interesadas respecto al desempeño del sistema de IA, incidentes o preocupaciones |
| **Deriva de Sesgo** | El fenómeno en el que las características de equidad de un sistema de IA cambian con el tiempo debido a cambios en las distribuciones de datos de entrada, comportamiento del usuario o contexto operacional |
| **Degradación del Desempeño** | Disminución medible en la precisión, exactitud, recall u otras métricas de desempeño del sistema de IA en comparación con los niveles de desempeño de línea base o previsto |
| **Acción Correctiva** | Acción tomada para eliminar la causa de una no conformidad detectada u otra situación indeseable (ISO 9000:2015) |
| **Acción Preventiva** | Acción tomada para eliminar la causa de una no conformidad potencial u otra situación potencial indeseable (ISO 9000:2015) |
| **Incidente Grave** | Cualquier incidente o mal funcionamiento de un sistema de IA que directa o indirectamente conduzca a muerte, daño grave a la salud, interrupción grave e irreversible de infraestructura crítica, o infracción grave de derechos fundamentales (Artículo 3(49) de la Ley de IA de la UE) |
| **Autoridad de Vigilancia del Mercado** | Autoridad nacional competente designada para llevar a cabo actividades de vigilancia del mercado en su territorio (Artículo 74 de la Ley de IA de la UE) |
| **Desplegador** | Cualquier persona física o jurídica, autoridad pública, agencia u otro organismo que utilice un sistema de IA bajo su autoridad (Artículo 3(4) de la Ley de IA de la UE) |
| **Proveedor** | Una persona física o jurídica, autoridad pública, agencia u otro organismo que desarrolle un sistema de IA o que haga desarrollar un sistema de IA y lo ponga en el mercado o lo ponga en servicio bajo su propio nombre o marca comercial (Artículo 3(3) de la Ley de IA de la UE) |

---

## 3. BASE REGULATORIA

### 3.1 Requisitos de la Ley de IA de la UE

Este procedimiento implementa los siguientes requisitos del Artículo 72 de la Ley de IA de la UE:

#### 3.1.1 Obligaciones Principales (Artículo 72(1))

**Requisito:** Los proveedores deberán establecer y documentar un sistema de vigilancia post-comercialización apropiado a la naturaleza y riesgos del sistema de IA de alto riesgo.

**Implementación:** Las Secciones 5 y 6 establecen el marco del sistema PMM con vigilancia proporcionada basada en la clasificación de riesgo.

#### 3.1.2 Recopilación Activa de Datos (Artículo 72(2))

**Requisito:** El sistema de vigilancia post-comercialización deberá recopilar, documentar y analizar activa y sistemáticamente datos relevantes proporcionados por desplegadores o recopilados a través de otras fuentes sobre el desempeño de sistemas de IA de alto riesgo a lo largo de su vida útil.

**Implementación:** La Fase 2 (Recopilación y Análisis de Datos) establece mecanismos de recopilación activa y procedimientos de análisis sistemático.

#### 3.1.3 Proporcionalidad (Artículo 72(3))

**Requisito:** El sistema de vigilancia post-comercialización deberá ser proporcional a la naturaleza de las tecnologías de IA y los riesgos del sistema de IA de alto riesgo.

**Implementación:** La Sección 5.2 define la intensidad de vigilancia basada en riesgo con diferentes frecuencias y profundidades según la clasificación de riesgo.

#### 3.1.4 Plan de Vigilancia Post-Comercialización (Artículo 72(4))

**Requisito:** El sistema de vigilancia post-comercialización deberá basarse en un plan de vigilancia post-comercialización.

**Implementación:** La Fase 1 establece un proceso integral de desarrollo del PMMP; el Apéndice A proporciona una plantilla de PMMP.

#### 3.1.5 Contenidos del Plan de Vigilancia Post-Comercialización (Artículo 72(5))

**Requisito:** El plan de vigilancia post-comercialización deberá ser parte de la documentación técnica y deberá incluir:

a) Una estrategia para la recopilación de datos proporcionados por desplegadores u otras fuentes relevantes
b) Una estrategia para el análisis de los datos proporcionados
c) Métodos para la evaluación del cumplimiento continuo del sistema de IA de alto riesgo
d) El procedimiento para la interacción con el sistema de gestión de riesgos
e) El procedimiento para el manejo y resolución de quejas de usuarios y la recopilación de retroalimentación
f) Mecanismos para establecer y mantener canales efectivos de comunicación con desplegadores y proveedores posteriores

**Implementación:** La Sección 6.1 (Pasos 1.1-1.6) aborda cada elemento requerido con procedimientos detallados.

#### 3.1.6 Integración de Resultados de Evaluación (Artículo 72(6))

**Requisito:** Los proveedores deberán utilizar la información y conclusiones extraídas del sistema de vigilancia post-comercialización para actualizar la evaluación de riesgos, implementar acciones correctivas necesarias y actualizar la documentación técnica.

**Implementación:** La Fase 4 (Acciones Correctivas) y la Fase 6 (Mejora Continua) establecen bucles de retroalimentación hacia los sistemas de gestión de riesgos y documentación.

#### 3.1.7 Acceso de Autoridades (Artículo 72(7))

**Requisito:** El plan y documentación de vigilancia post-comercialización deberán estar disponibles para autoridades nacionales competentes y organismos notificados a solicitud.

**Implementación:** La Sección 9 define requisitos de documentación y procedimientos de acceso de autoridades.

#### 3.1.8 Integración con Reporte de Incidentes (Artículo 72(8))

**Requisito:** El sistema de vigilancia post-comercialización deberá integrarse con el sistema de reporte de incidentes graves según el Artículo 73.

**Implementación:** La Sección 6.4 (Paso 4.3) establece procedimientos de integración de PMM con reporte de incidentes.

### 3.2 Disposiciones Relacionadas de la Ley de IA de la UE

| Artículo | Requisito | Implementación en Este Procedimiento |
|---------|-------------|-----------------------------------|
| Artículo 9 | Sistema de gestión de riesgos | La Fase 4 integra hallazgos de PMM con gestión de riesgos |
| Artículo 11 | Documentación técnica | La Sección 9 documenta registros de PMM en documentación técnica |
| Artículo 61 | Vigilancia post-comercialización para modificaciones sustanciales | La Sección 6.6 (Paso 6.2) aborda actualizaciones desencadenadas por evaluación |
| Artículo 73 | Reporte de incidentes graves | La Sección 6.4 (Paso 4.3) integra reporte de incidentes |
| Artículo 74-77 | Cooperación de vigilancia del mercado | La Sección 6.5 (Paso 5.2) aborda reporte a autoridades |

### 3.3 Estándares Armonizados

Este procedimiento se alinea con los siguientes estándares (cuando sean adoptados como estándares armonizados):

- **ISO 13485:2016** - Gestión de calidad de dispositivos médicos (Cláusula 8.2.1 Retroalimentación)
- **ISO 14971:2019** - Gestión de riesgos de dispositivos médicos (Cláusula 9 Información post-producción)
- **ISO/IEC 42001:2023** - Sistema de gestión de IA (Cláusula 8.2 Vigilancia post-despliegue)
- **IEC 62304:2006** - Ciclo de vida de software de dispositivos médicos (Cláusula 9 Actividades post-producción)

---

## 4. ROLES Y RESPONSABILIDADES

### 4.1 Roles Clave

| Rol | Responsabilidad | Autoridad |
|------|----------------|-----------|
| **Gerente de Vigilancia Post-Comercialización de IA** | Poseer y ejecutar el sistema PMM; mantener planes PMM; conducir análisis de desempeño; coordinar recopilación de retroalimentación | Aprobar planes PMM; iniciar acciones correctivas; escalar problemas críticos |
| **Propietario del Sistema de IA** | Proporcionar requisitos de vigilancia específicos del sistema; revisar informes de desempeño; implementar acciones correctivas | Aceptar hallazgos de PMM de baja severidad; aprobar actualizaciones del sistema |
| **Líder de Análisis de Datos** | Diseñar e implementar tableros de vigilancia; analizar tendencias de desempeño; desarrollar modelos predictivos | Definir metodologías de análisis; establecer umbrales de alerta |
| **Equipo de Operaciones de ML (MLOps)** | Implementar infraestructura de vigilancia; recopilar datos de desempeño; mantener tableros; responder a alertas | Ejecutar procedimientos de vigilancia; escalar violaciones de umbral |
| **Representante de Gestión de Calidad** | Integrar PMM con SGC; revisar efectividad de PMM; conducir auditorías internas | Aprobar cambios de procedimiento de PMM; iniciar mejora de calidad |
| **Gerente de Riesgos de IA** | Revisar hallazgos de PMM para implicaciones de riesgo; actualizar evaluaciones de riesgo; validar supuestos de riesgo residual | Desencadenar reevaluaciones de riesgo; aprobar actualizaciones de tratamiento de riesgo |
| **Líder de Soporte al Cliente** | Recopilar y documentar retroalimentación de usuarios; gestionar manejo de quejas; mantener base de datos de retroalimentación | Escalar retroalimentación crítica; aprobar resolución de retroalimentación |
| **Oficial de Cumplimiento** | Verificar cumplimiento regulatorio; preparar informes a autoridades; gestionar solicitudes de vigilancia del mercado | Aprobar presentaciones a autoridades; requerir acciones de cumplimiento |
| **Director de Producto** | Supervisión del sistema PMM; aprobar cambios significativos del producto; asignar recursos de PMM | Aprobar acciones correctivas mayores; escalar a liderazgo ejecutivo |
| **Comité de Gobernanza de IA** | Revisar informes trimestrales de PMM; aprobar cambios significativos; monitorear efectividad de PMM | Aprobar cambios de estrategia de PMM; bloquear despliegues si no cumplen |

### 4.2 Matriz RACI

| Actividad | Gerente PMM | Propietario Sistema IA | Líder Analytics | MLOps | Rep SGC | Ger Riesgos | Soporte | Cumplimiento | CPO | Com Gobernanza |
|----------|-------------|----------------|----------------|-------|---------|----------|---------|------------|-----|---------------|
| Desarrollo Plan PMM | A | R | C | C | C | C | I | C | I | I |
| Infraestructura Vigilancia | C | C | R | A | I | I | I | I | I | I |
| Recopilación Datos | A | C | C | R | I | I | R | I | I | I |
| Análisis Desempeño | R | C | A | C | C | C | C | I | I | I |
| Recopilación Retroalimentación | C | C | I | I | I | I | A | I | I | I |
| Detección Sesgo/Deriva | A | C | R | C | I | C | I | C | I | I |
| Inicio Acción Correctiva | A | R | C | C | C | C | C | C | C | I |
| Actualizaciones Evaluación Riesgo | C | C | I | I | I | A | I | C | I | C |
| Reporte a Autoridades | C | C | I | I | C | C | I | A | C | I |
| Revisión Trimestral PMM | R | C | C | C | C | C | C | C | A | A |
| Auditoría Sistema PMM | C | C | I | I | A | C | I | C | I | C |
| Escalamiento Incidente Grave | A | R | I | C | C | C | C | C | A | I |

**Leyenda:** A=Accountable (Responsable), R=Responsible (Ejecutor), C=Consulted (Consultado), I=Informed (Informado)

### 4.3 Requisitos de Competencia

#### 4.3.1 Gerente de Vigilancia Post-Comercialización de IA

**Competencias Requeridas:**
- Comprensión profunda de los requisitos de la Ley de IA de la UE (Artículos 9, 11, 61, 72, 73)
- Conocimiento de métricas de desempeño de IA/ML y técnicas de vigilancia
- Experiencia con sistemas de gestión de calidad (ISO 9001, ISO 13485)
- Comprensión de análisis estadístico y ciencia de datos
- Familiaridad con marcos de gestión de riesgos (ISO 14971, ISO 31000)
- Experiencia en vigilancia del mercado y reporte regulatorio

**Requisitos de Capacitación:**
- Capacitación integral en Ley de IA de la UE (40 horas)
- Capacitación en vigilancia post-comercialización (16 horas)
- Análisis estadístico para sistemas de IA (24 horas)
- Capacitación en sistemas de gestión de calidad (16 horas)

#### 4.3.2 Líder de Análisis de Datos

**Competencias Requeridas:**
- Análisis estadístico avanzado y ciencia de datos
- Evaluación de desempeño de modelos de IA/ML
- Diseño de tableros y visualización de datos
- Detección de sesgos y métricas de equidad
- Modelado predictivo y detección de anomalías

**Requisitos de Capacitación:**
- Equidad en IA y detección de sesgos (16 horas)
- Vigilancia de desempeño de modelos (16 horas)
- Control estadístico de procesos (8 horas)

#### 4.3.3 Equipo MLOps

**Competencias Requeridas:**
- Infraestructura y despliegue de ML
- Configuración de herramientas de vigilancia (Prometheus, Grafana, tableros personalizados)
- Agregación y análisis de logs
- Configuración de alertas y respuesta a incidentes
- Gestión de pipelines de datos

**Requisitos de Capacitación:**
- Mejores prácticas de MLOps (24 horas)
- Infraestructura de vigilancia (16 horas)
- Requisitos operacionales de la Ley de IA de la UE (8 horas)

---

## 5. MARCO DE VIGILANCIA POST-COMERCIALIZACIÓN

### 5.1 Arquitectura del Sistema PMM

El sistema de vigilancia post-comercialización consiste en seis componentes integrados que operan continuamente a lo largo del ciclo de vida operacional del sistema de IA:

```
┌─────────────────────────────────────────────────────────────────────┐
│          MARCO DEL SISTEMA DE VIGILANCIA POST-COMERCIALIZACIÓN      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. PLAN DE VIGILANCIA POST-COMERCIALIZACIÓN (PMMP)                │
│     ├─ Estrategia de recopilación de datos (activa y reactiva)    │
│     ├─ Metodologías y frecuencias de análisis                      │
│     ├─ Procedimientos de evaluación de cumplimiento                │
│     ├─ Integración de gestión de riesgos                           │
│     ├─ Manejo de retroalimentación y quejas                        │
│     └─ Asignación de recursos y responsabilidades                  │
│                                                                      │
│  2. MECANISMOS DE RECOPILACIÓN DE DATOS                            │
│     ├─ Métricas de desempeño automatizadas (vigilancia técnica)   │
│     ├─ Retroalimentación y quejas de usuarios (recopilación reactiva) │
│     ├─ Informes y comunicaciones de desplegadores (recopilación activa) │
│     ├─ Notificaciones de vigilancia del mercado                    │
│     ├─ Desarrollos científicos y técnicos                          │
│     └─ Informes de incidentes y cuasi-incidentes                   │
│                                                                      │
│  3. MOTOR DE ANÁLISIS DE DESEMPEÑO                                  │
│     ├─ Análisis estadístico de métricas de desempeño               │
│     ├─ Detección de deriva de sesgos y vigilancia de equidad       │
│     ├─ Análisis de tendencias y modelado predictivo                │
│     ├─ Verificaciones de cumplimiento                              │
│     ├─ Análisis de causa raíz para degradación                     │
│     └─ Análisis comparativo contra líneas base                     │
│                                                                      │
│  4. SISTEMA DE ACCIÓN CORRECTIVA                                    │
│     ├─ Detección y alertas de violación de umbral                  │
│     ├─ Inicio y seguimiento de acción correctiva                   │
│     ├─ Investigación de causa raíz                                 │
│     ├─ Implementación de acción preventiva                         │
│     ├─ Verificación de efectividad                                 │
│     └─ Documentación y cierre                                      │
│                                                                      │
│  5. REPORTE Y COMUNICACIÓN                                          │
│     ├─ Reporte interno (gobernanza, gestión)                       │
│     ├─ Comunicación con desplegadores                              │
│     ├─ Reporte a autoridad de vigilancia del mercado               │
│     ├─ Reporte de incidentes graves (Artículo 73)                  │
│     ├─ Comunicación con organismo notificado                       │
│     └─ Reporte de transparencia pública (si aplica)                │
│                                                                      │
│  6. MEJORA CONTINUA                                                 │
│     ├─ Revisión de efectividad de PMM                              │
│     ├─ Actualizaciones del sistema de gestión de riesgos           │
│     ├─ Actualizaciones de documentación técnica                    │
│     ├─ Integración de lecciones aprendidas                         │
│     ├─ Actualizaciones del plan PMM                                │
│     └─ Optimización de procesos                                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.2 Intensidad de Vigilancia Basada en Riesgo

La vigilancia post-comercialización deberá ser proporcional a la naturaleza y riesgos del sistema de IA. La intensidad de vigilancia se determina por la clasificación de riesgo del sistema de IA y el contexto operacional.

#### 5.2.1 Matriz de Clasificación de Riesgo

| Factor de Riesgo | Peso | Evaluación |
|-------------|--------|------------|
| **Impacto en Derechos Fundamentales** | 35% | Escala: 1 (Mínimo) - 5 (Posibles violaciones graves) |
| **Impacto de Seguridad** | 30% | Escala: 1 (Sin daño físico) - 5 (Potencialmente mortal) |
| **Escala de Despliegue** | 20% | Escala: 1 (<100 usuarios) - 5 (>1M usuarios) |
| **Nivel de Automatización** | 10% | Escala: 1 (Humano en el bucle) - 5 (Completamente autónomo) |
| **Reversibilidad de Decisiones** | 5% | Escala: 1 (Fácilmente reversible) - 5 (Irreversible) |

**Cálculo de Puntuación de Riesgo:** Suma ponderada de puntuaciones de factores (rango: 1.00 - 5.00)

#### 5.2.2 Intensidad de Vigilancia por Puntuación de Riesgo

| Puntuación Riesgo | Nivel Riesgo | Intensidad Vigilancia | Métricas Tiempo Real | Revisión Retroalimentación | Pruebas Sesgo | Informe Desempeño | Revisión Plan PMM |
|------------|-----------|---------------------|-------------------|-----------------|--------------|-------------------|-----------------|
| 4.0 - 5.0 | **Crítico** | Máxima | Continua (< 1 min latencia) | Diaria | Semanal | Semanal | Mensual |
| 3.0 - 3.9 | **Alto** | Mejorada | Casi tiempo real (< 15 min) | 2x por semana | Quincenal | Quincenal | Trimestral |
| 2.0 - 2.9 | **Medio** | Estándar | Agregación horaria | Semanal | Mensual | Mensual | Semestral |
| 1.0 - 1.9 | **Bajo** | Básica | Agregación diaria | Quincenal | Trimestral | Trimestral | Anual |

#### 5.2.3 Ejemplos de Asignación de Nivel de Riesgo

| Tipo de Sistema de IA | Nivel de Riesgo Típico | Justificación |
|----------------|-------------------|-----------|
| IA de diagnóstico médico | Crítico | Alto impacto de seguridad; derechos fundamentales (salud); decisiones irreversibles |
| IA de contratación/reclutamiento | Alto | Derechos fundamentales (igualdad); alta escala de despliegue; riesgo de discriminación |
| IA de calificación crediticia | Alto | Derechos fundamentales (participación económica); alta escala de despliegue |
| IA de moderación de contenido | Medio | Derechos fundamentales (expresión); reversible; revisión humana disponible |
| Chatbot para servicio al cliente | Bajo | Sin impacto en seguridad/derechos; reversible; escalamiento humano posible |

### 5.3 Integración con Sistema de Gestión de Calidad

El sistema PMM es un componente obligatorio del Sistema de Gestión de Calidad (SGC) de la organización según el Artículo 17.

#### 5.3.1 Puntos de Integración del SGC

```
┌──────────────────────────────────────────────────────────────────┐
│               SISTEMA DE GESTIÓN DE CALIDAD                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Proceso SGC               Integración PMM                        │
│  ────────────              ───────────────                        │
│                                                                   │
│  Controles de Diseño    →   Requisitos del Plan PMM              │
│  ├─ Entradas de diseño  →   Definición de métricas de vigilancia │
│  ├─ Salidas de diseño   →   Establecimiento de desempeño base    │
│  └─ Validación diseño   →   Validación de desempeño en mundo real│
│                                                                   │
│  Controles de Proceso   →   Procedimientos de Recopilación Datos │
│  ├─ Vigilancia proceso  →   Recopilación automatizada métricas   │
│  └─ Validación proceso  →   Validación metodología análisis      │
│                                                                   │
│  Acciones Correctivas   →   CAPA Desencadenada por PMM           │
│  ├─ No conformidades    →   Violaciones de umbral de desempeño   │
│  ├─ Análisis causa raíz →   Análisis de datos PMM                │
│  └─ Verificación efect. →   Vigilancia posterior a acción        │
│                                                                   │
│  Revisión de Gestión    →   Informes Trimestrales PMM            │
│  ├─ Desempeño sistema   →   Tablero de KPI de PMM                │
│  ├─ Retroalim. cliente  →   Resumen de análisis de retroalim.    │
│  └─ Acciones de mejora  →   Mejoras de efectividad de PMM        │
│                                                                   │
│  Auditoría Interna      →   Auditoría del Sistema PMM            │
│  ├─ Cumplimiento proceso→   Adherencia a procedimiento PMM       │
│  └─ Efectividad         →   Logro de objetivos PMM               │
│                                                                   │
│  Control Documentos     →   Gestión Documentación PMM            │
│  ├─ Documentos técnicos →   Plan e informes PMM                  │
│  └─ Control de registros→   Retención de datos de desempeño      │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

#### 5.3.2 Integración de Procedimientos del SGC

| Procedimiento SGC | Integración PMM | Referencia Cruzada |
|---------------|-----------------|-----------------|
| PROC-QMS-001: Control de Documentos | Planes e informes PMM controlados según este procedimiento | Sección 9.1 |
| PROC-QMS-002: Acción Correctiva | Hallazgos de PMM desencadenan proceso CAPA | Sección 6.4 |
| PROC-QMS-003: Revisión de Gestión | Informes trimestrales de PMM presentados a la gestión | Sección 10.2 |
| PROC-QMS-004: Auditoría Interna | Auditoría anual del sistema PMM | Sección 10.3 |
| PROC-QMS-005: Retroalimentación del Cliente | Recopilación de retroalimentación alimenta PMM | Sección 6.2.2 |

### 5.4 Integración con Sistema de Gestión de Riesgos

PMM proporciona retroalimentación continua al sistema de gestión de riesgos según el requisito del Artículo 9(6) para gestión de riesgos iterativa.

#### 5.4.1 Bucle de Retroalimentación de PMM a Gestión de Riesgos

```
     VIGILANCIA POST-COMERCIALIZACIÓN         SISTEMA DE GESTIÓN DE RIESGOS
     ──────────────────────────               ──────────────────────────────

  1. Datos de Desempeño         →    Valida supuestos de probabilidad/impacto
     - Tasas de incidentes reales
     - Frecuencias de error
     - Ocurrencias de cuasi-incidentes
                               ↓

  2. Detección Deriva Sesgo     →    Identificación de nuevo riesgo
     - Cambios métricas equidad       "Riesgo: Sesgo demográfico en
     - Impacto disparado              datos de producción"
     - Cambios de calibración
                               ↓

  3. Degradación Desempeño      →    Reevaluación riesgo residual
     - Disminución precisión          "Controles menos efectivos
     - Cambios precisión/recall       de lo predicho"
     - Aumentos de latencia
                               ↓

  4. Análisis Retroalim. Usuario→    Actualizaciones de uso indebido
     - Patrones novedosos uso indebido razonablemente previsible
     - Casos de uso inesperados       "Nuevo vector uso indebido:..."
     - Confusión de usuario
                               ↓

  5. Informes de Incidentes     →    Materialización de riesgo
     - Eventos de daño real           "Riesgo RM-AI-0042 ocurrió"
     - Mal funcionamiento sistema     Actualizar evaluación probabilidad
     - Cuasi-incidentes
                               ↓

  6. Cambios Ambientales        →    Identificación de nuevo riesgo
     - Actualizaciones regulatorias   "Riesgo: Incumplimiento con
     - Avances científicos            nuevos requisitos"
     - Panorama competitivo

           ↓                                ↓

     Informe Hallazgos PMM     →    Actualización Registro Riesgos
     (Mensual)                       (Desencadenado por PMM)

           ↓                                ↓

     Acciones Correctivas      ←    Plan Tratamiento Riesgos
     (Iniciadas por PMM)             (Impulsado por riesgo)
```

#### 5.4.2 Actividades de Riesgo Desencadenadas por PMM

| Hallazgo PMM | Acción de Gestión de Riesgos | Plazo | Responsabilidad |
|-------------|------------------------|----------|----------------|
| Violación crítica umbral desempeño | Reevaluación inmediata riesgo; consideración suspensión despliegue | Dentro de 24 horas | Gerente Riesgos IA + Gerente PMM |
| Deriva sesgo excede umbral equidad | Actualizar evaluación riesgo sesgo; implementar controles correctivos | Dentro de 5 días hábiles | Gerente Riesgos IA |
| Nuevo patrón uso indebido identificado | Actualizar análisis riesgo uso indebido; mejorar controles preventivos | Dentro de 10 días hábiles | Gerente Riesgos IA |
| Informe incidente recibido | Realizar evaluación riesgo incidente según PROC-AI-INC-001 | Según procedimiento incidente | Gerente Riesgos IA |
| Tendencia degradación desempeño | Reevaluar riesgo residual; validar efectividad control | Dentro de 15 días hábiles | Gerente Riesgos IA + Gerente PMM |

---

## 6. PROCEDIMIENTO PASO A PASO

### FASE 1: DESARROLLO DEL PLAN DE VIGILANCIA POST-COMERCIALIZACIÓN

#### Paso 1.1: Iniciar Plan de Vigilancia Post-Comercialización (Control PMM-001)

**Cuándo:** Durante la fase de diseño del sistema de IA, antes del despliegue a producción

**Quién:** Gerente de Vigilancia Post-Comercialización de IA + Propietario del Sistema de IA + Líder de MLOps

**Base Regulatoria:** Artículo 72(4) - El sistema PMM deberá basarse en un plan de vigilancia post-comercialización

**Cómo:**

1. **Verificar Clasificación del Sistema de IA**
   - Confirmar que el sistema de IA es de alto riesgo según clasificación STD-AI-001
   - Revisar documentación de clasificación de PROC-AI-CLS-001
   - Si no es de alto riesgo: Documentar justificación para PMM voluntario (si aplica)
   - Si es de alto riesgo: Proceder con desarrollo obligatorio de plan PMM

2. **Establecer Equipo de Planificación PMM**
   - Gerente de Vigilancia Post-Comercialización de IA (líder)
   - Propietario del Sistema de IA (conocimiento del sistema)
   - Líder de MLOps (capacidades de vigilancia técnica)
   - Líder de Análisis de Datos (metodologías de análisis)
   - Gerente de Riesgos de IA (integración de riesgo)
   - Representante de Gestión de Calidad (integración SGC)
   - Oficial de Cumplimiento (requisitos regulatorios)

   **Programar reunión de inicio** (4 horas) dentro de 2 semanas de aprobación de despliegue

3. **Reunir Contexto del Sistema y Requisitos**
   - Revisar propósito previsto y casos de uso del sistema de IA
   - Revisar documentación técnica (según Artículo 11)
   - Revisar evaluación de riesgos y registro de riesgos (PROC-AI-RM-001)
   - Revisar población de usuarios y escala de despliegue
   - Revisar documentación de gobernanza de datos (PROC-AI-DATA-001)
   - Identificar riesgos conocidos que requieran vigilancia
   - Documentar métricas de desempeño de línea base de la validación

4. **Determinar Intensidad de Vigilancia Basada en Riesgo**
   - Calcular puntuación de riesgo según Sección 5.2.1
   - Asignar nivel de riesgo (Crítico/Alto/Medio/Bajo)
   - Determinar requisitos de intensidad de vigilancia
   - Documentar en sección de evaluación de riesgo del PMMP

5. **Definir Alcance y Objetivos del Plan PMM**
   - **Alcance:** Qué versiones del sistema de IA, entornos de despliegue, poblaciones de usuarios
   - **Objetivos:** Qué busca lograr el plan PMM (ej., "Detectar degradación de precisión >5%", "Identificar deriva de sesgo >10% de línea base")
   - **Criterios de éxito:** Cómo se medirá la efectividad de PMM
   - **Requisitos de recursos:** Personal, infraestructura, presupuesto

6. **Crear Documento del Plan PMM**
   - Usar Plantilla de Plan PMM (Apéndice A)
   - Control de documentos según PROC-QMS-001
   - Asignar ID único de plan: PMMP-[AI-SYSTEM-ID]-v[VERSION]
   - Almacenar en repositorio de documentación técnica

**Evidencia Requerida:**
- Actas de Reunión de Inicio del Plan PMM (REC-AI-PMM-001)
- Documentación de Clasificación del Sistema de IA
- Hoja de Cálculo de Puntuación de Riesgo (FORM-AI-PMM-001)
- Borrador de Documento del Plan PMM (PMMP-[ID]-v0.1)

**Tiempo:** 2-3 semanas desde decisión de despliegue

**Verificación de Calidad:**
- Nivel de riesgo correctamente calculado y justificado
- Todos los miembros requeridos del equipo involucrados
- Contexto del sistema documentado integralmente
- Plantilla de plan PMM completamente poblada

---

#### Paso 1.2: Definir Estrategia de Recopilación de Datos (Control PMM-002)

**Cuándo:** Durante desarrollo del plan PMM

**Quién:** Líder de Análisis de Datos + Líder de MLOps + Propietario del Sistema de IA

**Base Regulatoria:** Artículo 72(5)(a) - Una estrategia para la recopilación de datos proporcionados por desplegadores o recopilados a través de otras fuentes

**Cómo:**

1. **Identificar Fuentes de Datos**

   **Recopilación Activa de Datos (Iniciada por el Proveedor):**
   - Métricas de desempeño automatizadas del sistema en producción
   - Cuestionarios/encuestas estructuradas a desplegadores
   - Entrevistas programadas con desplegadores
   - Logs y telemetría proactivos del sistema
   - Pruebas automatizadas de sesgo/equidad
   - Benchmarking de desempeño contra conjuntos de prueba

   **Recopilación Reactiva de Datos (Iniciada Externamente):**
   - Retroalimentación y quejas de usuarios
   - Informes de incidentes de desplegadores
   - Tickets de soporte al cliente
   - Notificaciones de vigilancia del mercado
   - Informes públicos y cobertura de medios
   - Publicaciones científicas sobre sistemas similares

   **Documentar todas las fuentes de datos planificadas en PMMP Sección 3: Estrategia de Recopilación de Datos**

2. **Definir Métricas de Desempeño Técnico**

   Para cada sistema de IA, identificar métricas relevantes de las siguientes categorías:

   **Métricas de Desempeño del Modelo:**
   - Precisión (Accuracy), Exactitud (Precision), Recall, Puntuación F1
   - AUC-ROC, AUC-PR
   - Estadísticas de matriz de confusión
   - Métricas de calibración (Puntuación Brier, Error de Calibración Esperado)
   - Distribución de confianza

   **Métricas Operacionales:**
   - Latencia de inferencia (p50, p95, p99)
   - Rendimiento (solicitudes/segundo)
   - Tasa de error (errores del sistema, no errores de predicción)
   - Disponibilidad/tiempo de actividad
   - Utilización de recursos (CPU, memoria, GPU)

   **Métricas de Calidad de Datos:**
   - Tasa de valores faltantes
   - Tasa de valores atípicos
   - Deriva de distribución de características (Índice de Estabilidad Poblacional)
   - Obsolescencia de datos
   - Tasa de fallo de validación de entrada

   **Métricas de Equidad:**
   - Ratio de paridad demográfica
   - Ratio de igualdad de oportunidades
   - Odds equalizadas
   - Paridad predictiva
   - Calibración por grupo

   **Usar Biblioteca de KPI (Apéndice B) como referencia**

3. **Especificar Métodos de Recopilación de Datos**

   Para cada fuente de datos y métrica, documentar:

   | Tipo de Datos | Método de Recopilación | Frecuencia | Almacenamiento | Responsable |
   |-----------|-------------------|-----------|---------|-------------|
   | Precisión | Registro automatizado de predicciones + comparación con verdad de campo | Lote diario | BD Desempeño | MLOps |
   | Latencia | Herramienta APM (ej., Datadog) | Tiempo real | BD Serie Temporal | MLOps |
   | Retroalim. usuario | Formulario en UI + recopilación email | Continua | Sistema CRM | Soporte |
   | Informes desplegador | Cuestionario estructurado trimestral | Trimestral | Gestión docs | Gerente PMM |
   | Métricas sesgo | Análisis lote semanal en predicciones muestreadas | Semanal | Almacén analytics | Líder Analytics |

   **Usar Matriz de Métodos de Recopilación de Datos (Apéndice C)**

4. **Establecer Estándares de Calidad de Datos**
   - Definir umbrales aceptables de completitud de datos (ej., >95% completitud)
   - Definir reglas de validación de datos
   - Definir procedimientos de manejo para datos faltantes o inválidos
   - Documentar en PMMP Sección 3.4: Estándares de Calidad de Datos

5. **Abordar Privacidad y Protección de Datos**
   - Verificar cumplimiento GDPR para recopilación de datos de desempeño
   - Documentar base legal para recopilación de datos (interés legítimo, contrato, consentimiento)
   - Definir enfoque de minimización de datos
   - Definir períodos de retención de datos (alinear con Artículo 12(2) - mínimo 10 años para logs)
   - Definir requisitos de pseudonimización/anonimización
   - Referencia cruzada PROC-AI-DATA-001 (Gobernanza de Datos)

6. **Documentar Mecanismos de Recopilación de Datos de Desplegadores**

   **El Artículo 72(5)(a) específicamente requiere estrategia para recopilar datos "proporcionados por desplegadores"**

   **Datos de Desplegador a Recopilar:**
   - Estadísticas de uso del sistema (volumen, frecuencia, demografía de usuarios)
   - Observaciones de desempeño (precisión en su contexto, casos límite)
   - Incidentes y cuasi-incidentes
   - Retroalimentación de usuarios recibida por el desplegador
   - Cambios en el entorno de despliegue
   - Problemas de integración

   **Mecanismos de Recopilación:**
   - **Obligación contractual:** Incluir obligaciones de reporte PMM en acuerdos con desplegadores
   - **Plantillas estructuradas:** Proporcionar plantillas de reporte a desplegadores
   - **Cadencia regular:** Encuestas/entrevistas trimestrales a desplegadores para sistemas Alto/Crítico
   - **Integración técnica:** APIs para presentación automatizada de datos de desplegadores (si factible)
   - **Portal de retroalimentación:** Portal web para que desplegadores envíen datos de desempeño

   **Documentar en PMMP Sección 3.2: Recopilación de Datos de Desplegador**

7. **Definir Requisitos de Infraestructura Técnica**
   - Infraestructura de registro (logs estructurados, agregación de logs)
   - Infraestructura de vigilancia (recopilación de métricas, tableros)
   - Infraestructura de almacenamiento de datos (bases de datos, data lakes)
   - Infraestructura de analytics (pipelines de datos, herramientas de análisis)
   - Infraestructura de alertas (vigilancia de umbrales, sistemas de notificación)

   **Identificar brechas:** Comparar infraestructura requerida vs. actual
   **Crear plan de implementación:** Para cualquier brecha de infraestructura

**Evidencia Requerida:**
- Documento de Estrategia de Recopilación de Datos (sección en PMMP)
- Matriz de Métodos de Recopilación de Datos (Apéndice C del PMMP)
- Evaluación de Impacto de Privacidad de Datos (si nueva recopilación de datos)
- Análisis de Brechas de Infraestructura
- Plantillas de Comunicación con Desplegador (FORM-AI-PMM-002)

**Tiempo:** 2-3 semanas

**Verificación de Calidad:**
- Todas las categorías de métricas requeridas cubiertas
- Métodos de recopilación activa y reactiva definidos
- Recopilación de datos de desplegador explícitamente abordada
- Cumplimiento de privacidad y protección de datos verificado
- Factibilidad técnica validada por MLOps

---

#### Paso 1.3: Definir Procedimientos de Análisis y Evaluación (Control PMM-003)

**Cuándo:** Durante desarrollo del plan PMM, después de definir estrategia de recopilación de datos

**Quién:** Líder de Análisis de Datos + Gerente de Riesgos de IA + Oficial de Cumplimiento

**Base Regulatoria:**
- Artículo 72(5)(b) - Una estrategia para el análisis de los datos proporcionados
- Artículo 72(5)(c) - Métodos para la evaluación del cumplimiento continuo

**Cómo:**

1. **Definir Procedimientos de Análisis de Desempeño**

   **Métodos de Análisis Estadístico:**
   - Estadísticas descriptivas (media, mediana, varianza a lo largo del tiempo)
   - Análisis de tendencias (promedios móviles, regresión lineal)
   - Análisis comparativo (actual vs. línea base, actual vs. período anterior)
   - Análisis de distribución (histogramas, gráficos KDE)
   - Detección de valores atípicos (métodos z-score, IQR)

   **Documentar en PMMP Sección 4.1: Análisis de Desempeño**

2. **Definir Procedimientos de Análisis de Sesgo y Equidad**

   **Procedimientos de Análisis:**

   a) **Cálculo de Métricas de Equidad**
      - Calcular paridad demográfica, igualdad de oportunidades, odds equalizadas
      - Frecuencia: Según nivel de intensidad de vigilancia (Semanal para Crítico/Alto, Mensual para Medio/Bajo)
      - Método: Muestreo estratificado de predicciones, agrupadas por características protegidas

   b) **Detección de Deriva de Sesgo**
      - Comparar métricas de equidad actuales con línea base (de validación)
      - Aplicar algoritmos de detección de deriva (ej., prueba Kolmogorov-Smirnov, prueba Chi-cuadrado)
      - Establecer umbral de deriva (ej., >10% de cambio en ratio de equidad)

   c) **Análisis de Impacto Disparado**
      - Calcular tasas de selección/aprobación por grupo protegido
      - Aplicar regla del 80% para detección de impacto adverso
      - Documentar hallazgos por grupo

   d) **Análisis de Sesgo Interseccional** (para sistemas de nivel Crítico/Alto)
      - Analizar equidad en intersecciones de características protegidas
      - Ejemplo: Género × Raza, Edad × Estado de Discapacidad

   **Documentar en PMMP Sección 4.2: Análisis de Sesgo y Equidad**

3. **Definir Procedimientos de Evaluación de Cumplimiento**

   **Verificación Continua de Cumplimiento - Requisito del Artículo 72(5)(c):**

   Según Artículo 72(5)(c), el plan PMM debe incluir "métodos para la evaluación del cumplimiento continuo del sistema de IA de alto riesgo."

   **Marco de Evaluación de Cumplimiento:**

   | Requisito Ley IA UE | Indicador de Cumplimiento | Método de Verificación | Frecuencia |
   |----------------------|---------------------|---------------------|-----------|
   | **Artículo 10: Gobernanza de Datos** | Representatividad de datos de entrenamiento mantenida | Comparar distribución entrada producción con distribución datos entrenamiento | Mensual |
   | **Artículo 10(3): Calidad Datos** | Calidad de datos de entrada mantenida | Vigilar valores faltantes, atípicos, fallos de validación | Semanal |
   | **Artículo 13: Transparencia** | Información de usuario proporcionada | Verificar visualización de información en UI; recopilar retroalimentación comprensión usuario | Trimestral |
   | **Artículo 14: Supervisión Humana** | Supervisión humana funcionando | Vigilar tasas de anulación, tiempos revisión humana, resultados anulación | Semanal |
   | **Artículo 15: Precisión** | Precisión dentro de rango aceptable | Vigilar métricas de precisión contra requisitos | Diario/Semanal |
   | **Artículo 15: Robustez** | Sistema resiliente a errores | Vigilar tasas de error, tiempos recuperación, caídas sistema | Continua |
   | **Artículo 15: Ciberseguridad** | Medidas de seguridad efectivas | Vigilar incidentes seguridad, escaneos vulnerabilidades, violaciones acceso | Continua |
   | **Artículo 9: Gestión Riesgos** | Riesgos permanecen mitigados | Verificar KRIs dentro umbrales; validar efectividad control | Semanal |

   **Proceso de Verificación de Cumplimiento:**

   1. **Verificación Mensual de Cumplimiento:**
      - Revisar todos los indicadores de cumplimiento
      - Documentar estado de cumplimiento (Conforme/No Conforme/Requiere Investigación)
      - Para no conformidad: Iniciar acción correctiva (Paso 4.1)

   2. **Informe Trimestral de Cumplimiento:**
      - Evaluación integral de cumplimiento
      - Análisis de tendencias (mejorando/estable/degradando)
      - Presentar a Comité de Gobernanza de IA

   3. **Auditoría Anual de Cumplimiento:**
      - Auditoría interna independiente del proceso de verificación de cumplimiento
      - Verificar que todos los indicadores se midan correctamente
      - Validar que las acciones correctivas sean efectivas

   **Documentar en PMMP Sección 4.3: Evaluación de Cumplimiento**

4. **Definir Procedimientos de Análisis de Causa Raíz**

   **Cuándo Realizar Análisis de Causa Raíz:**
   - Violación de umbral de desempeño
   - Deriva de sesgo detectada
   - No conformidad de cumplimiento
   - Patrones de quejas de usuarios
   - Ocurrencia de incidente

   **Método de Análisis de Causa Raíz (5 Porqués + Diagrama Espina de Pescado):**

   1. **Declaración del Problema:** Definir claramente el problema
   2. **Recopilación de Datos:** Reunir datos relevantes de PMM
   3. **Análisis 5 Porqués:** Preguntar "por qué" 5 veces para identificar causa raíz
   4. **Diagrama Espina de Pescado:** Categorizar causas potenciales
      - Factores del modelo (arquitectura, entrenamiento, hiperparámetros)
      - Factores de datos (cambio de distribución, calidad, etiquetado)
      - Factores de proceso (despliegue, vigilancia, actualizaciones)
      - Factores de personas (comportamiento usuario, acciones desplegador)
      - Factores ambientales (infraestructura, integraciones)
   5. **Identificación de Causa Raíz:** Documentar causa(s) raíz más probable(s)
   6. **Validación:** Probar hipótesis con análisis de datos

   **Documentar en PMMP Sección 4.4: Análisis de Causa Raíz**

5. **Definir Análisis Predictivo y Alerta Temprana**

   **Vigilancia Predictiva (para sistemas de nivel Crítico/Alto):**

   - **Extrapolación de Tendencias:** Predecir cuándo la métrica violará umbral basándose en tendencia actual
   - **Detección de Anomalías:** Detección basada en ML de patrones inusuales (Isolation Forest, Autoencoders)
   - **Predicción de Deriva:** Detección temprana de deriva de datos antes del impacto en desempeño
   - **Análisis de Estacionalidad:** Considerar variaciones esperadas (patrones diarios, semanales, estacionales)

   **Umbrales de Alerta Temprana:**
   - Umbral amarillo: Métrica acercándose a umbral rojo (ej., dentro del 20% de violación)
   - Umbral naranja: Tendencia indica probable violación dentro de X días
   - Umbral rojo: Violación de umbral real

   **Documentar en PMMP Sección 4.5: Análisis Predictivo**

6. **Definir Frecuencia de Análisis y Responsabilidades**

   | Tipo de Análisis | Nivel Crítico/Alto | Nivel Medio | Nivel Bajo | Responsable |
   |---------------|-------------------|-------------|----------|-------------|
   | Métricas desempeño | Diario | Semanal | Mensual | Líder Análisis Datos |
   | Métricas sesgo/equidad | Semanal | Mensual | Trimestral | Líder Análisis Datos |
   | Indicadores cumplimiento | Semanal | Mensual | Trimestral | Oficial Cumplimiento |
   | Causa raíz (cuando desencadenado) | Dentro 48 horas | Dentro 5 días | Dentro 10 días | Gerente PMM + Analytics |
   | Análisis tendencias | Semanal | Mensual | Trimestral | Líder Análisis Datos |
   | Análisis predictivo | Semanal | N/A | N/A | Líder Análisis Datos |

   **Documentar en PMMP Sección 4.6: Cronograma de Análisis**

7. **Definir Procedimientos de Reporte y Escalamiento**

   **Reporte Interno:**
   - **Diario:** Tablero automatizado para MLOps (nivel Crítico/Alto)
   - **Semanal:** Informe de estado PMM a Gerente PMM y Propietario Sistema IA
   - **Mensual:** Informe integral PMM a la gestión
   - **Trimestral:** Resumen ejecutivo a Comité de Gobernanza de IA

   **Criterios de Escalamiento:** (Ver Apéndice D: Matriz de Escalamiento)
   - Violación umbral crítico → Escalamiento inmediato a CPO + Comité Gobernanza IA
   - Violación umbral alto → Escalamiento a Gerente PMM + Propietario Sistema IA dentro de 4 horas
   - Deriva sesgo detectada → Escalamiento a Gerente Riesgos IA dentro de 24 horas
   - No conformidad cumplimiento → Escalamiento a Oficial Cumplimiento inmediatamente

   **Documentar en PMMP Sección 5: Reporte y Escalamiento**

**Evidencia Requerida:**
- Procedimientos de Análisis y Evaluación (sección en PMMP)
- Marco de Evaluación de Cumplimiento (tabla en PMMP)
- Plantilla de Análisis de Causa Raíz (FORM-AI-PMM-003)
- Matriz de Escalamiento (Apéndice D del PMMP)

**Tiempo:** 2 semanas

**Verificación de Calidad:**
- Todos los análisis requeridos definidos con metodologías claras
- Evaluación continua de cumplimiento explícitamente abordada según Artículo 72(5)(c)
- Frecuencias de análisis apropiadas al nivel de riesgo
- Criterios de escalamiento claramente definidos
- Partes responsables asignadas

---

#### Paso 1.4: Definir Integración con Gestión de Riesgos (Control PMM-001, PMM-004)

**Cuándo:** Durante desarrollo del plan PMM

**Quién:** Gerente de Riesgos de IA + Gerente PMM

**Base Regulatoria:** Artículo 72(5)(d) - El procedimiento para interacción con el sistema de gestión de riesgos

**Cómo:**

1. **Documentar Interfaz del Sistema de Gestión de Riesgos**

   **Puntos de Contacto PMM-a-Gestión de Riesgos:**

   | Actividad PMM | Actividad Gestión Riesgos | Criterios Desencadenantes | Plazo | Referencia Proceso |
   |--------------|-------------------------|------------------|----------|-------------------|
   | Violación umbral desempeño | Reevaluación probabilidad riesgo | Cualquier violación umbral rojo | Dentro 5 días hábiles | PROC-AI-RM-001 Paso 2.1 |
   | Detección deriva sesgo | Reevaluación riesgo sesgo | Ratio equidad <0.8 o >1.25 | Dentro 5 días hábiles | PROC-AI-RM-001 Paso 2.4 |
   | Nuevo patrón uso indebido identificado | Actualización riesgo uso indebido | Uso indebido novedoso observado | Dentro 10 días hábiles | PROC-AI-RM-001 Paso 1.3 |
   | Incidente reportado | Evaluación riesgo incidente | Cualquier incidente grave | Según PROC-AI-INC-001 | PROC-AI-INC-001 Sección 6 |
   | No conformidad cumplimiento | Evaluación riesgo cumplimiento | Cualquier indicador cumplimiento no conforme | Dentro 5 días hábiles | PROC-AI-RM-001 Paso 2.1 |
   | Validación efectividad control | Reevaluación riesgo residual | Trimestral (revisión planificada) | Trimestral | PROC-AI-RM-001 Paso 5.1 |
   | Cambio ambiental | Identificación nuevo riesgo | Cambio regulatorio/técnico/mercado | Dentro 15 días hábiles | PROC-AI-RM-001 Paso 1.2 |

   **Documentar en PMMP Sección 6: Integración Gestión Riesgos**

2. **Definir Procedimientos de Actualización del Registro de Riesgos**

   **Procedimiento para Actualizar Registro de Riesgos Basado en Hallazgos PMM:**

   1. **Gerente PMM identifica hallazgo relevante para riesgo** (ej., deriva sesgo, degradación desempeño)

   2. **Evaluar si es riesgo existente o nuevo riesgo:**
      - Si riesgo existente: Proceder a reevaluación
      - Si nuevo riesgo: Iniciar identificación de riesgo según PROC-AI-RM-001 Paso 1.2

   3. **Realizar reevaluación de riesgo** (con Gerente Riesgos IA):
      - Revisar datos PMM como evidencia
      - Reevaluar probabilidad (tasa de ocurrencia real informa evaluación)
      - Reevaluar impacto (impactos reales o de cuasi-incidentes informan evaluación)
      - Recalcular puntuación de riesgo
      - Actualizar registro de riesgos

   4. **Evaluar riesgo residual:**
      - ¿Los controles siguen siendo efectivos?
      - ¿El riesgo residual sigue siendo aceptable?
      - Si riesgo residual ahora inaceptable: Iniciar acción correctiva

   5. **Documentar actualización del registro de riesgos:**
      - Actualizar Registro de Riesgos (REC-AI-RM-003)
      - Completar Registro de Actualización del Registro de Riesgos (REC-AI-RM-004)
      - Vincular a hallazgo/informe PMM que desencadenó actualización

   6. **Escalar si es necesario:**
      - Si nivel de riesgo aumentó a Alto/Crítico: Escalar según PROC-AI-RM-001 Sección 8

   **Plazo:** Completar dentro de 10 días hábiles del hallazgo PMM

3. **Definir Integración de KRI**

   **Los Indicadores Clave de Riesgo (KRIs) son vigilados a través de PMM:**

   - Vincular cada riesgo significativo en registro de riesgos a una o más métricas PMM
   - La vigilancia PMM proporciona datos continuos de KRI
   - Los umbrales KRI alimentan alertas PMM

   **Ejemplo de Integración:**

   | ID Riesgo | Descripción Riesgo | Métrica(s) PMM Vinculada(s) | Umbral KRI | Nivel Alerta |
   |---------|------------------|---------------------|---------------|-------------|
   | RM-AI-0023 | Sesgo en decisiones de crédito | Ratio paridad demográfica | <0.8 o >1.25 | Rojo |
   | RM-AI-0045 | Degradación precisión | Precisión general | <90% de línea base | Rojo |
   | RM-AI-0067 | Deriva de datos | Índice Estabilidad Poblacional | >0.25 | Naranja |

   **Documentar en PMMP Sección 6.2: Vigilancia KRI**

4. **Definir Validación de Efectividad de Control**

   **PMM proporciona evidencia de efectividad de control:**

   Para cada control de riesgo implementado (según PROC-AI-RM-001 Paso 4.2), sistema PMM vigila efectividad de control:

   | Tipo de Control | Método Validación PMM | Frecuencia |
   |--------------|----------------------|-----------|
   | **Controles Preventivos** (ej., mitigación sesgo en entrenamiento) | Vigilar métricas equidad salida | Semanal |
   | **Controles Detectivos** (ej., detección anomalías) | Vigilar tasas detección, tasas falsos positivos/negativos | Semanal |
   | **Controles Correctivos** (ej., anulación humana) | Vigilar tasas anulación, resultados anulación | Semanal |

   **Criterios Efectividad Control:**
   - Control opera según diseño
   - Control logra reducción de riesgo prevista
   - No se detectan fallos o evasiones de control

   **Si control inefectivo:** Iniciar acción correctiva según Paso 4.1

5. **Documentar Flujo de Trabajo PMM-a-Gestión de Riesgos**

   **Crear diagrama de flujo de proceso en Plan PMM mostrando:**
   - Cómo hallazgos PMM desencadenan reevaluación de riesgo
   - Quién es responsable en cada paso
   - Qué documentación se requiere
   - Puntos de integración con PROC-AI-RM-001
   - Plazos para cada actividad

**Evidencia Requerida:**
- Sección de Integración Gestión Riesgos (en PMMP)
- Diagrama de Flujo Proceso PMM-a-Gestión Riesgos
- Tabla de Mapeo Métrica PMM-a-KRI
- Plan de Validación Efectividad Control

**Tiempo:** 1 semana

**Verificación de Calidad:**
- Todos los requisitos del Artículo 72(5)(d) abordados
- Procedimientos claros para cada punto de integración
- Plazos definidos y realistas
- Responsabilidades claramente asignadas
- Referencias cruzadas de documentación verificadas

---

#### Paso 1.5: Definir Manejo de Retroalimentación y Quejas (Control PMM-002, PMM-003)

**Cuándo:** Durante desarrollo del plan PMM

**Quién:** Líder de Soporte al Cliente + Gerente PMM + Oficial de Cumplimiento

**Base Regulatoria:** Artículo 72(5)(e) - El procedimiento para el manejo y resolución de quejas de usuarios y la recopilación de retroalimentación

**Cómo:**

1. **Establecer Canales de Recopilación de Retroalimentación**

   **Canales de Retroalimentación de Usuarios:**
   - Formulario de retroalimentación en aplicación (integrado en UI del sistema IA)
   - Dirección de email para retroalimentación: ai-feedback@[organización].com
   - Portal web dedicado: [organización].com/ai-feedback
   - Sistema de tickets de soporte al cliente
   - Portal de comunicación con desplegadores
   - Vigilancia de redes sociales (para retroalimentación pública)

   **Canales de Retroalimentación de Desplegadores:**
   - Portal dedicado para desplegadores
   - Email: deployer-support@[organización].com
   - Encuestas trimestrales a desplegadores
   - Llamadas regulares de seguimiento con desplegadores (para sistemas Alto/Crítico)

   **Documentar en PMMP Sección 7.1: Canales de Retroalimentación**

2. **Definir Categorización de Retroalimentación**

   **Categorías de Retroalimentación:**

   | Categoría | Descripción | Ejemplos | Severidad |
   |----------|-------------|----------|----------|
   | **Problema de Desempeño** | Sistema no desempeñándose según lo esperado | Predicciones inexactas, respuesta lenta, errores | Alto |
   | **Preocupación Sesgo/Equidad** | Sesgo o discriminación percibida | Trato disparado, resultados injustos | Crítico |
   | **Problema de Seguridad** | Potencial daño o salida peligrosa | Recomendaciones inseguras, vulnerabilidad seguridad | Crítico |
   | **Problema de Usabilidad** | Dificultad usando sistema | Interfaz confusa, salidas poco claras | Medio |
   | **Solicitud Característica** | Funcionalidad adicional deseada | Nuevas características, mejoras | Bajo |
   | **Retroalimentación Positiva** | Elogio o satisfacción | Sistema funcionando bien, salidas útiles | Info |
   | **Pregunta/Consulta** | Solicitud de información | Cómo funciona sistema, preguntas uso datos | Bajo |

   **Categorización Automatizada:** Implementar categorización basada en palabras clave o basada en ML

   **Revisión Manual:** Equipo de soporte revisa y confirma categorización

3. **Definir Proceso de Manejo de Quejas**

   **Recepción y Reconocimiento de Queja:**

   1. **Queja recibida** vía cualquier canal
   2. **Reconocimiento automático** enviado dentro de 24 horas
      - Agradecer al usuario por retroalimentación
      - Proporcionar número de referencia de queja: COMP-[SYSTEM-ID]-[YYYY-MM-DD]-[SEQ]
      - Establecer expectativa para plazo de respuesta
   3. **Queja registrada** en base de datos de quejas
   4. **Queja categorizada** por severidad y tipo

   **Investigación de Queja:**

   1. **Asignar a investigador:**
      - Severidad Crítica/Alta: Gerente PMM + Propietario Sistema IA
      - Severidad Media/Baja: Soporte Cliente + MLOps
   2. **Investigar queja:**
      - Revisar detalles de queja
      - Reunir datos PMM relevantes (logs, predicciones, contexto)
      - Intentar reproducir problema
      - Analizar causa raíz
      - Determinar si queja válida o falso positivo
   3. **Plazo de investigación:**
      - Severidad crítica: Dentro de 2 días hábiles
      - Severidad alta: Dentro de 5 días hábiles
      - Severidad media: Dentro de 10 días hábiles
      - Severidad baja: Dentro de 15 días hábiles

   **Resolución de Queja:**

   1. **Determinar resolución:**
      - Problema confirmado: Iniciar acción correctiva (Paso 4.1)
      - Problema no reproducible: Documentar hallazgos de investigación
      - Educación de usuario necesaria: Proporcionar aclaración/capacitación
      - Solicitud de característica: Registrar para consideración en hoja de ruta producto

   2. **Comunicar resolución al usuario:**
      - Explicar hallazgos
      - Describir acciones tomadas (si las hay)
      - Proporcionar contacto para seguimiento

   3. **Cerrar queja:**
      - Documentar resolución en base de datos de quejas
      - Actualizar estado de queja a "Resuelta" o "Cerrada"
      - Vincular a cualquier registro de acción correctiva

   **Escalamiento de Queja:**

   | Severidad | Criterios de Escalamiento | Escalar A | Plazo |
   |----------|---------------------|-------------|----------|
   | Crítico | Problema seguridad, preocupación sesgo, potencial incidente grave | CPO + Comité Gobernanza IA + Legal | Inmediato |
   | Alto | Problema desempeño afectando muchos usuarios, preocupación cumplimiento | Gerente PMM + Propietario Sistema IA | Dentro 4 horas |
   | Medio | Problema recurrente, patrón quejas similares | Gerente PMM | Dentro 24 horas |
   | Bajo | Quejas estándar | No se requiere escalamiento | N/A |

   **Documentar en PMMP Sección 7.2: Proceso de Manejo de Quejas**

4. **Definir Procedimientos de Análisis de Retroalimentación**

   **Actividades de Análisis de Retroalimentación:**

   a) **Análisis de Tendencias:**
      - Identificar patrones en retroalimentación (problemas recurrentes, temas comunes)
      - Frecuencia: Mensual
      - Método: Análisis de categorización, extracción de palabras clave, análisis de sentimiento

   b) **Análisis de Causa Raíz:**
      - Para patrones de quejas, realizar análisis de causa raíz
      - Usar 5 Porqués o diagrama Espina de Pescado
      - Frecuencia: Cuando se identifica patrón (>5 quejas similares dentro de 30 días)

   c) **Análisis de Satisfacción:**
      - Calcular Puntuación Neta del Promotor (NPS) o Puntuación de Satisfacción del Cliente (CSAT)
      - Frecuencia: Trimestral
      - Método: Encuesta estructurada a muestra de usuarios

   d) **Correlación Retroalimentación-a-Métrica PMM:**
      - Correlacionar retroalimentación subjetiva con métricas PMM objetivas
      - Ejemplo: Quejas sobre inexactitud vs. métricas de precisión medidas
      - Identificar brechas entre percepción usuario y desempeño medido

   **Documentar en PMMP Sección 7.3: Análisis de Retroalimentación**

5. **Definir Proceso Retroalimentación-a-Acción**

   **Cómo la Retroalimentación Desencadena Acciones:**

   ```
   Retroalimentación Recibida
         ↓
   Categorizada y Registrada
         ↓
   ┌─────────────────────┬──────────────────┬────────────────────┐
   │                     │                  │                    │
   Crítico/Alto       Medio             Bajo              Positiva
   Severidad          Severidad         Severidad         Retroalim.
   │                     │                  │                    │
   ↓                     ↓                  ↓                    ↓
   Inmediato          Estándar          Rutina            Registrar Solo
   Investigación      Investigación     Investigación     (para análisis)
   │                     │                  │
   ↓                     ↓                  ↓
   Causa Raíz         Causa Raíz        Causa Raíz
   Análisis           Análisis          Análisis
   (si justificado)   (si patrón)       (si patrón)
   │                     │                  │
   ↓                     ↓                  ↓
   Correctiva         Correctiva        Documentar
   Acción             Acción            Hallazgos
   (Paso 4.1)         (Paso 4.1)
   ```

6. **Definir Comunicación y Transparencia**

   **Transparencia de Retroalimentación:**
   - Publicar resumen trimestral de retroalimentación (anonimizado)
   - Reportar sobre problemas comunes y resoluciones
   - Demostrar capacidad de respuesta a preocupaciones de usuarios

   **Comunicación con Desplegador:**
   - Compartir patrones de retroalimentación relevantes con desplegadores
   - Resumen trimestral de retroalimentación enviado a todos los desplegadores
   - Habilita a desplegadores para anticipar preocupaciones de usuarios

7. **Definir Base de Datos de Retroalimentación y Registros**

   **Campos de Base de Datos de Quejas:**
   - ID de Queja (identificador único)
   - Fecha recibida
   - Canal fuente (email, formulario web, ticket soporte, etc.)
   - Información usuario (anonimizada si es necesario para privacidad)
   - Sistema IA y versión
   - Categoría y severidad de queja
   - Descripción (texto libre)
   - Hallazgos de investigación
   - Descripción de resolución
   - Acciones correctivas vinculadas (si las hay)
   - Estado (Abierta, Investigando, Resuelta, Cerrada)
   - Fechas (recibida, reconocida, investigada, resuelta, cerrada)

   **Retención:** Retener registros de quejas por 10 años según Artículo 12(2)

**Evidencia Requerida:**
- Sección Manejo de Retroalimentación y Quejas (en PMMP)
- Documentación Canales de Recopilación de Retroalimentación
- Esquema de Base de Datos de Quejas
- Diagrama de Flujo Proceso de Manejo de Quejas
- Plantillas de Análisis de Retroalimentación (FORM-AI-PMM-004)

**Tiempo:** 1-2 semanas

**Verificación de Calidad:**
- Todos los requisitos del Artículo 72(5)(e) abordados
- Múltiples canales de retroalimentación establecidos
- Proceso claro de manejo de quejas con plazos
- Criterios de escalamiento definidos
- Consideraciones de privacidad abordadas
- Integración con sistema de acción correctiva

---

#### Paso 1.6: Definir Estrategia de Comunicación con Desplegador (Control PMM-002)

**Cuándo:** Durante desarrollo del plan PMM

**Quién:** Gerente PMM + Éxito del Cliente/Gestión de Cuentas + Legal

**Base Regulatoria:** Artículo 72(5)(f) - Mecanismos para establecer y mantener canales efectivos de comunicación con desplegadores y proveedores posteriores

**Cómo:**

1. **Identificar Población de Desplegadores**
   - Listar todos los desplegadores del sistema de IA
   - Categorizar desplegadores:
     - Desplegadores directos (clientes directos de la organización)
     - Proveedores posteriores (desplegadores que redistribuyen)
     - Desplegadores internos (si sistema IA usado internamente)
   - Asignar nivel de riesgo de desplegador basado en:
     - Escala de despliegue (número de usuarios finales)
     - Criticidad del caso de uso
     - Capacidad técnica del desplegador

   **Documentar en PMMP Sección 8.1: Panorama de Desplegadores**

2. **Establecer Canales de Comunicación**

   **Canales Principales de Comunicación:**

   | Canal | Propósito | Frecuencia | Responsable |
   |---------|---------|-----------|-------------|
   | **Portal Desplegador** | Información autoservicio, envío retroalimentación, compartir datos desempeño | Acceso continuo | Éxito Cliente |
   | **Lista Distribución Email** | Comunicaciones seguridad, actualizaciones importantes | Según necesidad (actualizaciones críticas) | Gerente PMM |
   | **Revisión Trimestral Negocio (QBR)** | Desplegadores de alto contacto: revisión desempeño, discusión retroalimentación | Trimestral | Gerente Cuenta + Gerente PMM |
   | **Encuesta Desplegador** | Recopilación estructurada retroalimentación | Trimestral | Gerente PMM |
   | **Webinars Desplegador** | Capacitación, mejores prácticas, actualizaciones | Semestral | Gerente PMM + Producto |
   | **Canal Soporte Técnico** | Resolución problemas, asistencia técnica | Acceso continuo | Soporte Técnico |
   | **Línea Directa Emergencia** | Incidentes críticos, problemas urgentes | Disponibilidad 24/7 | Gerente PMM de guardia |

   **Documentar en PMMP Sección 8.2: Canales de Comunicación**

3. **Definir Protocolos de Comunicación**

   **Comunicaciones Proactivas (Iniciadas por Proveedor):**

   a) **Actualizaciones Regulares:**
      - Boletín trimestral con resumen PMM
      - Notas de versión para actualizaciones sistema IA
      - Mejores prácticas y consejos de uso
      - Actualizaciones regulatorias relevantes para desplegadores

   b) **Informes de Desempeño:**
      - Para desplegadores de alto contacto: Informe trimestral de desempeño específico a su despliegue
      - Incluye: métricas de precisión, resumen incidentes, recomendaciones

   c) **Comunicaciones de Seguridad:**
      - Avisos de Seguridad en Campo (FSN) para riesgos identificados
      - Notificaciones de acciones correctivas
      - Requisitos de actualización o retirada del sistema
      - Plazo: Dentro de 24-48 horas de identificación

   d) **Interrupciones/Mantenimiento Planificado:**
      - Aviso anticipado (mínimo 2 semanas para no emergencia)
      - Detalles ventana mantenimiento
      - Impacto esperado

   **Comunicaciones Reactivas (Iniciadas por Desplegador):**

   a) **Consultas de Desplegador:**
      - SLA de respuesta: Dentro de 2 días hábiles
      - Canal: deployer-support@[organización].com o portal

   b) **Informes de Incidentes de Desplegador:**
      - Reconocimiento: Dentro de 4 horas
      - Inicio investigación: Dentro de 24 horas
      - Canal: incident-report@[organización].com o portal

   c) **Retroalimentación de Desplegador:**
      - Reconocimiento: Dentro de 24 horas
      - Registrado en base de datos de retroalimentación PMM

   **Documentar en PMMP Sección 8.3: Protocolos de Comunicación**

4. **Definir Acuerdos de Compartición de Datos**

   **Requisitos de Compartición de Datos del Desplegador:**

   **El Artículo 72(5)(a) requiere estrategia para recopilar datos de desplegadores. Esto requiere establecer acuerdos de compartición de datos.**

   **Provisiones Contractuales:**
   - Obligación del desplegador de proporcionar datos de desempeño (especificar frecuencia, formato)
   - Obligación del desplegador de reportar incidentes y preocupaciones de seguridad
   - Obligación del desplegador de recopilar y compartir retroalimentación de usuarios
   - Especificaciones de formato y envío de datos
   - Provisiones de confidencialidad y protección de datos
   - Consecuencias de incumplimiento

   **Datos a Compartir por Desplegadores:**
   - Estadísticas de uso (volumen, frecuencia, demografía usuarios si permisible)
   - Observaciones de desempeño (precisión en su contexto, problemas observados)
   - Incidentes y cuasi-incidentes
   - Retroalimentación y quejas de usuarios recibidas por desplegador
   - Cambios en entorno de despliegue o caso de uso

   **Mecanismo de Compartición de Datos:**
   - Envío automatizado por API (preferido)
   - Carga archivo de datos estructurados a portal
   - Informe estructurado trimestral (plantilla proporcionada)

   **Revisión Legal:** Asegurar que provisiones de compartición de datos cumplan con GDPR y otras leyes aplicables

   **Documentar en PMMP Sección 8.4: Acuerdos de Compartición de Datos**

5. **Definir Comunicación con Proveedor Posterior**

   **Si sistema IA puede ser redistribuido (proveedor → proveedor posterior → usuarios finales):**

   - Establecer canal de comunicación con proveedores posteriores
   - Proveedores posteriores deben poder recibir y reenviar:
     - Comunicaciones de seguridad
     - Notificaciones de acciones correctivas
     - Solicitudes de datos PMM
   - Requisito contractual: Proveedores posteriores notifican al proveedor de sus desplegadores

   **Documentar en PMMP Sección 8.5: Comunicación con Proveedor Posterior**

6. **Definir Capacitación y Soporte para Desplegador**

   **Programas de Capacitación:**
   - Capacitación inicial de incorporación de desplegador (obligaciones PMM, compartición de datos, envío de retroalimentación)
   - Webinars de capacitación continua (trimestral)
   - Documentación y guías de usuario

   **Recursos de Soporte:**
   - Base de conocimiento para desplegadores
   - Preguntas frecuentes (FAQs)
   - Video tutoriales
   - Contacto de soporte técnico

   **Documentar en PMMP Sección 8.6: Capacitación de Desplegador**

7. **Definir Medición de Efectividad de Comunicación**

   **KPIs para Comunicación con Desplegador:**
   - Tasa de respuesta de desplegador a encuestas (objetivo: >70%)
   - Cumplimiento de envío de datos de desplegador (objetivo: >90% a tiempo)
   - Puntuación de satisfacción de desplegador (encuesta trimestral)
   - Alcance de comunicación (% desplegadores recibiendo comunicaciones)
   - Tiempo promedio para responder a consultas de desplegador

   **Revisión Trimestral:** Evaluar efectividad de comunicación y ajustar estrategia si es necesario

**Evidencia Requerida:**
- Estrategia de Comunicación con Desplegador (sección en PMMP)
- Lista de Contactos de Desplegador (mantenida por separado, referenciada en PMMP)
- Plantillas de Comunicación (emails, plantillas FSN, plantillas informes)
- Plantilla de Acuerdo de Compartición de Datos (FORM-AI-PMM-005)
- Materiales de Capacitación para Desplegador

**Tiempo:** 2 semanas

**Verificación de Calidad:**
- Todos los requisitos del Artículo 72(5)(f) abordados
- Múltiples canales de comunicación bidireccional establecidos
- Protocolos claros para comunicaciones proactivas y reactivas
- Obligaciones de compartición de datos claramente definidas
- Revisión legal de provisiones contractuales completada
- Comunicación con proveedor posterior abordada (si aplica)

---

#### Paso 1.7: Finalizar y Aprobar Plan PMM (Control PMM-001)

**Cuándo:** Después de desarrollar todas las secciones del plan PMM

**Quién:** Gerente PMM + Comité de Gobernanza de IA

**Cómo:**

1. **Compilar Plan PMM Completo**
   - Ensamblar todas las secciones según plantilla del Apéndice A
   - Asegurar que todos los requisitos del Artículo 72(5) estén abordados:
     ✓ (a) Estrategia de recopilación de datos
     ✓ (b) Estrategia de análisis de datos
     ✓ (c) Métodos de evaluación de cumplimiento
     ✓ (d) Integración de gestión de riesgos
     ✓ (e) Manejo de retroalimentación y quejas
     ✓ (f) Mecanismos de comunicación con desplegador
   - Incluir todos los apéndices (plantillas, formularios, matrices)
   - Aplicar control de documentos según PROC-QMS-001

2. **Revisión Interna**
   - **Revisión de Calidad:** Representante SGC revisa para integración SGC
   - **Revisión de Riesgo:** Gerente de Riesgos IA revisa para integración gestión riesgos
   - **Revisión de Cumplimiento:** Oficial de Cumplimiento revisa para completitud regulatoria
   - **Revisión Técnica:** Líder MLOps revisa para factibilidad técnica
   - **Revisión Legal:** Legal revisa provisiones contractuales y protección datos
   - Incorporar retroalimentación y revisar plan

3. **Obtener Aprobaciones**

   | Aprobador | Rol | Criterios de Aprobación | Plazo |
   |----------|------|-------------------|----------|
   | Propietario Sistema IA | Experto sistema | Plan apropiado para características sistema | 3 días hábiles |
   | Gerente PMM | Propietario procedimiento | Plan completo y ejecutable | Continuo |
   | Representante SGC | Supervisión calidad | Plan alineado con SGC | 3 días hábiles |
   | Gerente Riesgos IA | Supervisión riesgo | Integración riesgo adecuada | 3 días hábiles |
   | Oficial Cumplimiento | Supervisión regulatoria | Requisitos Ley IA UE cumplidos | 5 días hábiles |
   | Comité Gobernanza IA | Supervisión ejecutiva | Plan aprobado para implementación | 10 días hábiles |

   **Proceso de Aprobación:**
   - Circular PMMP para revisión (permitir 1 semana)
   - Recopilar aprobaciones escritas (email o firma)
   - Si se plantean preocupaciones: Abordar y re-enviar
   - Aprobación final por Comité de Gobernanza de IA

4. **Integrar en Documentación Técnica**
   - Agregar PMMP a documentación técnica del sistema IA según Artículo 11
   - Asegurar control de versiones del PMMP
   - Vincular PMMP a ID del sistema IA
   - Almacenar en sistema de gestión de documentos con controles de acceso

5. **Comunicar Plan PMM**
   - Compartir PMMP aprobado con todas las partes responsables
   - Realizar reunión de inicio del PMMP con equipo de implementación
   - Distribuir comunicaciones a desplegadores sobre sistema PMM
   - Publicar resumen para transparencia (si apropiado)

6. **Preparar para Implementación**
   - Crear plan de proyecto de implementación
   - Asignar tareas de implementación
   - Establecer cronograma de implementación (objetivo: 4-8 semanas antes de despliegue)
   - Preparar para configuración de infraestructura (Fase 2)

**Evidencia Requerida:**
- Plan PMM Completo (PMMP-[AI-SYSTEM-ID]-v1.0)
- Registro de Comentarios de Revisión y Resoluciones
- Registros de Aprobación (emails o formularios firmados) (REC-AI-PMM-002)
- Registro de Integración Documentación Técnica
- Lista de Distribución de Comunicación PMMP

**Tiempo:** 2 semanas para revisión y aprobación

**Verificación de Calidad:**
- Todas las aprobaciones requeridas obtenidas
- No hay comentarios de revisión sin resolver
- PMMP agregado a documentación técnica
- Control de versiones establecido
- Todas las partes responsables notificadas

---

### FASE 2: RECOPILACIÓN Y ANÁLISIS DE DATOS

#### Paso 2.1: Implementar Infraestructura de Vigilancia (Control PMM-002)

**Cuándo:** Después de aprobación del PMMP, antes del despliegue del sistema IA (o inmediatamente post-despliegue si PMM no se implementó pre-despliegue)

**Quién:** Líder MLOps + Ingeniería de Datos + DevOps

**Cómo:**

1. **Configurar Infraestructura de Registro**

   **Registro de Predicciones:**
   - Registrar cada predicción hecha por el sistema IA en producción
   - Datos mínimos registrados:
     - Marca de tiempo
     - ID de usuario/sesión (pseudonimizado si es necesario)
     - Versión del modelo
     - Características de entrada (o hash si PII)
     - Salida de predicción
     - Puntuación de confianza
     - Latencia de inferencia
   - Almacenamiento: Registro estructurado a base de datos o data lake
   - Retención: 10 años según Artículo 12(2)

   **Registro de Eventos del Sistema:**
   - Logs de aplicación (errores, advertencias, info)
   - Logs de solicitud/respuesta API
   - Eventos de autenticación/autorización
   - Métricas de salud del sistema (CPU, memoria, disco, red)

   **Infraestructura:**
   - Agregación centralizada de logs (ej., ELK Stack, Splunk, Datadog)
   - Formato de registro estructurado (JSON)
   - Rotación y archivado de logs

2. **Configurar Vigilancia de Desempeño**

   **Recopilación de Métricas en Tiempo Real:**
   - Herramienta de Vigilancia de Desempeño de Aplicaciones (APM) (ej., Datadog, New Relic, Prometheus)
   - Recopilar métricas según PMMP Sección 3 (Estrategia de Recopilación de Datos)
   - Base de datos de serie temporal para almacenamiento de métricas

   **Métricas a Vigilar:**
   - Desempeño del modelo (precisión, exactitud, recall - calculado en lote)
   - Métricas operacionales (latencia, rendimiento, tasa error, tiempo actividad)
   - Métricas de calidad de datos (valores faltantes, atípicos, deriva)
   - Utilización de recursos (CPU, memoria, utilización GPU)

   **Frecuencia de Vigilancia:**
   - Métricas en tiempo real: Streaming continuo
   - Métricas en lote (precisión, sesgo): Según PMMP (diario/semanal según nivel de riesgo)

3. **Configurar Recopilación de Verdad de Campo**

   **Para métricas que requieren verdad de campo (precisión, exactitud, recall):**

   - **Verdad de campo automatizada:** Si está disponible (ej., usuario confirma/rechaza predicción)
   - **Verdad de campo retrasada:** Recopilar resultados reales después de retraso temporal
   - **Verdad de campo muestreada:** Etiquetado humano de muestra de predicción (si automatizada no disponible)
   - **Frecuencia:** Según PMMP (diario para Crítico/Alto, semanal para Medio, mensual para Bajo)

   **Base de Datos de Verdad de Campo:**
   - Vincular predicciones a etiquetas de verdad de campo
   - Calcular métricas de desempeño en trabajos en lote
   - Almacenar métricas calculadas en base de datos de serie temporal

4. **Configurar Vigilancia de Sesgo y Equidad**

   **Requisitos de Datos:**
   - Recopilar características protegidas (si es legalmente permisible y cumple GDPR)
   - Si no es posible: Usar variables proxy o inferencia (con precaución)
   - Alternativa: Realizar auditorías de sesgo periódicas en muestras representativas

   **Pipeline de Cálculo de Equidad:**
   - Trabajo en lote para calcular métricas de equidad (semanal/mensual según PMMP)
   - Estratificar predicciones por grupo protegido
   - Calcular paridad demográfica, igualdad de oportunidades, odds equalizadas
   - Almacenar métricas de equidad en base de datos de serie temporal

   **Pipeline de Detección de Deriva:**
   - Calcular Índice de Estabilidad Poblacional (PSI) para características de entrada
   - Comparar distribución actual con línea base (datos de entrenamiento)
   - Marcar deriva significativa (PSI > 0.25)
   - Frecuencia: Semanal (según PMMP)

5. **Configurar Tableros y Visualización**

   **Tablero de Operaciones en Tiempo Real:**
   - Para equipo MLOps vigilando
   - Muestra: Latencia, rendimiento, tasa error, salud sistema
   - Indicadores de alerta para violaciones de umbral
   - Herramienta: Grafana, Datadog, o tablero personalizado

   **Tablero de Analytics de Desempeño:**
   - Para Gerente PMM y Líder de Analytics
   - Muestra: Tendencias de precisión, exactitud/recall a lo largo del tiempo, desempeño por segmento
   - Gráficos comparativos (actual vs. línea base, actual vs. período anterior)
   - Herramienta: Tableau, Looker, o plataforma de analytics personalizada

   **Tablero de Vigilancia de Equidad:**
   - Para Gerente PMM y Oficial de Cumplimiento
   - Muestra: Métricas de equidad a lo largo del tiempo, análisis de impacto disparado, indicadores de deriva de sesgo
   - Indicadores de alerta para violaciones de umbral de equidad

   **Tablero de Resumen Ejecutivo:**
   - Para Comité de Gobernanza de IA y gestión
   - KPIs de alto nivel: Salud del sistema, resumen de desempeño, conteo de incidentes, dirección de tendencia
   - Indicadores de estado rojo/amarillo/verde

6. **Configurar Sistema de Alertas**

   **Configuración de Alertas:**
   - Definir alertas según Matriz de Escalamiento (Apéndice D)
   - Configurar umbrales de alerta según PMMP
   - Alertas multicanal: Email, SMS, Slack/Teams, PagerDuty

   **Tipos de Alertas:**

   | Severidad Alerta | Criterios Desencadenantes | Destinatarios | Tiempo de Respuesta |
   |----------------|------------------|------------|---------------|
   | **Crítica (Rojo)** | Violación métrica seguridad, deriva crítica sesgo, fallo sistema | Gerente PMM, Propietario Sistema IA, CPO, Ingeniero de guardia | Inmediato (15 min) |
   | **Alta (Naranja)** | Violación umbral desempeño, deriva alta sesgo | Gerente PMM, Propietario Sistema IA, Líder MLOps | 4 horas |
   | **Media (Amarilla)** | Umbral advertencia, tendencia hacia violación | Líder MLOps, Gerente PMM | 24 horas |
   | **Baja (Azul)** | Informativa, aviso vigilancia | Líder MLOps | No se requiere respuesta |

   **Escalamiento de Alerta:**
   - Si no hay respuesta dentro del tiempo de respuesta: Auto-escalar a siguiente nivel
   - Alertas críticas: Escalar a CPO si no hay resolución dentro de 2 horas

7. **Implementar Formularios de Recopilación de Retroalimentación**

   **Retroalimentación en Aplicación:**
   - Integrar formulario de retroalimentación en UI del sistema IA
   - Campos: Tipo de retroalimentación, descripción, contacto usuario (opcional)
   - Enviar a API de retroalimentación

   **Portal Web:**
   - Portal de retroalimentación público
   - Formulario: Tipo de retroalimentación, sistema IA, descripción, info contacto
   - Enviar a base de datos de retroalimentación

   **Portal Desplegador:**
   - Inicio de sesión seguro para desplegadores
   - Formulario estructurado de envío de datos de desempeño
   - Formulario de reporte de incidentes
   - Envío de retroalimentación

   **Integración:**
   - Toda retroalimentación se dirige a base de datos centralizada de retroalimentación
   - Auto-categorización y enrutamiento a partes responsables

8. **Probar Infraestructura de Vigilancia**

   **Lista de Verificación de Pruebas:**
   - [ ] Registro de predicciones funcionando (verificar logs capturados)
   - [ ] Métricas de desempeño recopilándose (verificar tablero muestra datos)
   - [ ] Recopilación de verdad de campo funcional (verificar cálculo de precisión)
   - [ ] Métricas de sesgo calculándose (verificar tablero de equidad)
   - [ ] Tableros mostrando datos correctamente
   - [ ] Alertas desencadenándose correctamente (probar con violación simulada de umbral)
   - [ ] Formularios de retroalimentación enviando a base de datos
   - [ ] Retención de datos configurada según PMMP

   **Pruebas de Carga:**
   - Verificar que infraestructura de vigilancia pueda manejar carga de producción
   - Probar tasa de ingesta de datos
   - Probar desempeño de consulta de tablero

9. **Documentar Infraestructura**
   - Crear documentación de infraestructura
   - Documentar flujos de datos
   - Documentar acceso y uso de tableros
   - Documentar configuración de alertas
   - Capacitar a equipo MLOps en operaciones de vigilancia

**Evidencia Requerida:**
- Informe de Implementación de Infraestructura de Vigilancia (RPT-AI-PMM-001)
- Diagrama de Arquitectura de Infraestructura
- Capturas de Pantalla de Tableros (REC-AI-PMM-003)
- Documentación de Configuración de Alertas
- Resultados de Pruebas de Infraestructura
- Registros de Capacitación para Equipo MLOps

**Tiempo:** 4-6 semanas (puede ser paralelo al desarrollo del sistema IA)

**Verificación de Calidad:**
- Todas las métricas definidas en PMMP se están recopilando
- Tableros operacionales y mostrando datos
- Alertas configuradas según Matriz de Escalamiento
- Formularios de retroalimentación funcionales
- Pruebas completadas exitosamente
- Infraestructura documentada

---

(Continuará con Paso 2.2 y siguientes en el siguiente bloque debido a limitaciones de longitud...)
