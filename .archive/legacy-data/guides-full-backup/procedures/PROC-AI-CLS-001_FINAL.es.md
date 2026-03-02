# PROC-AI-CLS-001: Procedimiento de Clasificación de Sistemas de IA

**ID del Procedimiento:** PROC-AI-CLS-001
**Nombre del Procedimiento:** Procedimiento de Clasificación de Sistemas de IA
**Estándar:** STD-AI-001: Estándar de Clasificación de Sistemas de IA
**Cubre Controles:** CLS-001, CLS-002, CLS-003, CLS-004, CLS-005, CLS-006, CLS-007
**Fecha de Vigencia:** [A completar]
**Última Actualización:** [A completar]
**Fecha de Próxima Revisión:** [A completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## ÍNDICE

1. [Propósito y Alcance](#1-propósito-y-alcance)
2. [Roles y Responsabilidades](#2-roles-y-responsabilidades)
3. [Marco de Clasificación](#3-marco-de-clasificación)
4. [Procedimiento Paso a Paso](#4-procedimiento-paso-a-paso)
5. [Clasificación de IA de Propósito General (GPAI)](#5-clasificación-de-ia-de-propósito-general-gpai)
6. [Mecanismos de Control](#6-mecanismos-de-control)
7. [KPIs y Métricas](#7-kpis-y-métricas)
8. [Requisitos de Documentación](#8-requisitos-de-documentación)
9. [Revisión y Auditoría](#9-revisión-y-auditoría)
10. [Manejo de Incumplimientos](#10-manejo-de-incumplimientos)
11. [Documentos Relacionados](#11-documentos-relacionados)
12. [Apéndices](#12-apéndices)

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece el proceso obligatorio, paso a paso, para clasificar todos los sistemas de IA según las categorías de riesgo del Reglamento de IA de la UE (prohibidos, alto riesgo, riesgo limitado, riesgo mínimo e IA de Propósito General). Su propósito es garantizar que cada sistema de IA sea clasificado con precisión antes de que comience el desarrollo y sea reevaluado a lo largo de su ciclo de vida, garantizando que las obligaciones de cumplimiento apropiadas se apliquen de manera consistente y correcta.

### 1.2 Alcance

Este procedimiento se aplica a:
- Todos los sistemas que cumplan con la definición de "sistema de IA" del Reglamento de IA de la UE
- Todos los modelos de IA de Propósito General (GPAI) según los Artículos 51-56
- Todos los sistemas de IA en cualquier etapa del ciclo de vida (diseño, desarrollo, implementación, operación)
- Todos los sistemas de IA desarrollados internamente o por terceros en nombre de la organización
- Todos los sistemas de IA integrados de proveedores GPAI upstream

Este procedimiento no se aplica a:
- Sistemas de IA utilizados exclusivamente para actividades personales, no profesionales
- Sistemas de IA utilizados exclusivamente para fines militares, de defensa o de seguridad nacional

### 1.3 Base Regulatoria

Este procedimiento implementa:
- **Artículos 5, 6, 7, 50 del Reglamento de IA de la UE:** Prácticas prohibidas, clasificación de alto riesgo, transparencia de riesgo limitado
- **Artículos 51-56 del Reglamento de IA de la UE:** Requisitos de modelos de IA de Propósito General
- **Anexo I:** Productos cubiertos por la legislación de armonización de la Unión
- **Anexo III:** Casos de uso de sistemas de IA de alto riesgo

### 1.4 Propietario del Procedimiento y Contactos

| Rol | Nombre | Cargo | Contacto |
|---|---|---|---|
| **Propietario del Procedimiento** | [Nombre] | Gestor del Programa del Reglamento de IA | [Email/Teléfono] |
| **Escalamiento** | [Nombre] | Director Legal | [Email/Teléfono] |
| **Gobernanza** | [Nombre] | Presidente del Comité de Gobernanza de IA | [Email/Teléfono] |

---

## 2. ROLES Y RESPONSABILIDADES

### 2.1 Roles Clave

| Rol | Responsabilidad | Autoridad |
|---|---|---|
| **Gestor del Programa del Reglamento de IA** | Posee y ejecuta el proceso de clasificación; mantiene el Registro de Sistemas de IA; proporciona aprobación final sobre las clasificaciones | Aprobar clasificaciones finales; escalar casos limítrofes al Comité de Gobernanza de IA |
| **Propietario del Sistema de IA** | Inicia solicitudes de clasificación; proporciona toda la información necesaria; implementa los controles requeridos según la clasificación | Proponer clasificación inicial; cuestionar decisiones de clasificación |
| **Director Legal (CLO)** | Proporciona interpretación legal vinculante del Reglamento de IA, especialmente para prácticas prohibidas y definiciones de alto riesgo | Vetar una clasificación propuesta por motivos legales; ordenar reclasificación |
| **Comité de Gobernanza de IA** | Revisa y aprueba todas las clasificaciones de alto riesgo; resuelve clasificaciones escaladas o disputadas | Aprobar clasificaciones de alto riesgo; bloquear implementación de sistemas clasificados incorrectamente |
| **Oficial de Cumplimiento GPAI** | Evalúa el riesgo sistémico de modelos GPAI; gestiona obligaciones específicas de GPAI | Clasificar modelos GPAI; aprobar documentación de cumplimiento GPAI |

### 2.2 Matriz RACI

| Actividad | Gestor Programa IA | Propietario Sistema IA | CLO | Comité Gobernanza IA | Oficial GPAI |
|---|---|---|---|---|---|
| Evaluación de Prácticas Prohibidas | A | R | C | I | I |
| Evaluación Anexo I Alto Riesgo | A | R | C | I | I |
| Evaluación Anexo III Alto Riesgo | A | R | C | I | I |
| Clasificación Modelo GPAI | C | R | I | I | A |
| Decisión Final de Clasificación | R | C | C | A (para Alto Riesgo) | C |
| Mantenimiento Registro Sistemas IA | R | C | I | I | C |
| Evaluación de Reclasificación | A | R | C | C | C |

**Leyenda:** A=Responsable (Accountable), R=Ejecutor (Responsible), C=Consultado, I=Informado

---

## 3. MARCO DE CLASIFICACIÓN

### 3.1 Flujo de Decisión de Clasificación

El proceso de clasificación sigue un árbol de decisión estricto y secuencial para determinar el nivel de riesgo de un sistema de IA.

```
┌────────────────────────────────────────────────────────────────────┐
│         ÁRBOL DE DECISIÓN DE CLASIFICACIÓN DE SISTEMAS DE IA       │
└────────────────────────────────────────────────────────────────────┘

INICIO: Nuevo Sistema de IA o Modelo GPAI
│
├─ Paso 1: ¿Es un modelo GPAI? (Artículos 51-56)
│  ├─ SÍ → Proceder a Sección 5 (Clasificación GPAI)
│  └─ NO → Continuar al Paso 2
│
├─ Paso 2: Evaluación de Prácticas Prohibidas (Artículo 5)
│  ├─ SÍ → DETENER - PROHIBIDO (No se puede desarrollar/implementar)
│  └─ NO → Continuar al Paso 3
│
├─ Paso 3: ¿Alto Riesgo Anexo I? (Artículo 6)
│  ├─ SÍ → CLASIFICADO: ALTO RIESGO
│  └─ NO → Continuar al Paso 4
│
├─ Paso 4: ¿Alto Riesgo Anexo III? (Artículo 7)
│  ├─ SÍ → Continuar al Paso 5
│  └─ NO → Continuar al Paso 6
│
├─ Paso 5: Evaluación de Riesgo Significativo de Daño
│  ├─ SÍ → CLASIFICADO: ALTO RIESGO
│  └─ NO → Continuar al Paso 6
│
├─ Paso 6: ¿Obligaciones de Transparencia de Riesgo Limitado? (Artículo 50)
│  ├─ SÍ → CLASIFICADO: RIESGO LIMITADO
│  └─ NO → CLASIFICADO: RIESGO MÍNIMO
│
FIN: Aplicar Controles Específicos de Clasificación
```

### 3.2 Integración del Ciclo de Vida

La clasificación no es un evento único. Está integrada en el ciclo de vida del sistema de IA.

| Fase del Ciclo de Vida | Actividades de Clasificación | Criterios de Paso |
|---|---|---|
| **1. Diseño** | Se realiza evaluación inicial de clasificación; se evalúan obligaciones del proveedor GPAI | Clasificación aprobada antes de que comience el desarrollo |
| **2. Desarrollo** | Monitorear cambios que puedan impactar la clasificación | Sin cambios que activen reclasificación |
| **3. Implementación** | Verificación final de clasificación antes de la implementación | Clasificación final confirmada y documentada |
| **4. Operación** | Revisión anual de reclasificación; reclasificación basada en activadores ante modificación sustancial | Revisión anual completada; reclasificación realizada si es necesario |

### 3.3 Categorías de Riesgo y Obligaciones

| Clasificación | Nivel de Riesgo | Obligaciones de Cumplimiento | Controles Requeridos | Monitoreo |
|---|---|---|---|---|
| **Prohibido** | Extremo | El proyecto debe detenerse; no se permite implementación | Ninguno - el sistema no puede desarrollarse | N/A |
| **Alto Riesgo** | Alto | Cumplimiento total del Reglamento de IA de la UE; documentación técnica; evaluación de conformidad; registro | Todos los controles en STD-AI-002 hasta STD-AI-014 | Monitoreo continuo; revisión anual |
| **Riesgo Limitado** | Medio | Obligaciones de transparencia; requisitos de divulgación | Controles de transparencia; notificación al usuario | Revisión periódica (anual) |
| **Riesgo Mínimo** | Bajo | Cumplimiento general; mejores prácticas recomendadas | Gobernanza básica; documentación | Según sea necesario |
| **GPAI (Estándar)** | Variable | Transparencia; documentación técnica; cumplimiento de derechos de autor | Fichas de modelo; documentación; instrucciones | Revisión periódica |
| **GPAI (Riesgo Sistémico)** | Alto | Obligaciones mejoradas; evaluación de riesgo sistémico; pruebas adversarias | Todos los controles GPAI estándar + pruebas mejoradas | Monitoreo continuo |

---

## 4. PROCEDIMIENTO PASO A PASO

### FASE 1: CLASIFICACIÓN INICIAL

#### **Paso 1.1: Evaluación de Prácticas Prohibidas (Control CLS-001)**

**Cuándo:** Antes de que comience cualquier trabajo de desarrollo en una nueva propuesta de sistema de IA

**Quién:** Propietario del Sistema de IA, con revisión obligatoria del Gestor del Programa del Reglamento de IA y el CLO

**Cómo:**

1. **Iniciar Solicitud de Clasificación**
   - El Propietario del Sistema de IA envía una solicitud de clasificación mediante el Formulario de Solicitud de Clasificación de Sistemas de IA (TMP-AI-CLS-001)
   - El formulario incluye: nombre del sistema, propósito previsto, descripción del caso de uso, usuarios objetivo y contexto de implementación
   - El Gestor del Programa del Reglamento de IA asigna un ID único de clasificación (ej., CLS-2025-001)
   - La solicitud de clasificación se registra en el Registro de Sistemas de IA

2. **Evaluar Prácticas Prohibidas**
   - El Propietario del Sistema de IA completa el **Formulario de Evaluación de Prácticas Prohibidas** (parte de TMP-AI-CLS-001)
   - El formulario requiere una evaluación detallada contra las 8 prácticas prohibidas definidas en el Artículo 5(1) del Reglamento:

   **Prácticas de IA Prohibidas según Artículo 5(1):**

   a) **Técnicas subliminales:** Sistemas de IA que despliegan técnicas subliminales más allá de la conciencia de una persona para distorsionar materialmente el comportamiento de manera que cause o probablemente cause daño

   b) **Explotación de vulnerabilidades:** Sistemas de IA que explotan vulnerabilidades de grupos específicos (edad, discapacidad) para distorsionar materialmente el comportamiento de manera que cause o probablemente cause daño

   c) **Puntuación social por autoridades públicas:** Sistemas de IA utilizados por autoridades públicas o en su nombre con fines de puntuación social

   d) **Identificación biométrica remota en tiempo real en espacios públicamente accesibles:** Con fines policiales, excepto en casos estrictamente limitados (prevención de amenaza inmediata, identificación de víctimas, delitos graves)

   e) **Sistemas de categorización biométrica que infieren atributos sensibles:** Sistemas de IA que infieren raza, opiniones políticas, afiliación sindical, creencias religiosas o filosóficas, vida sexual u orientación sexual (con excepciones para aplicación de la ley)

   f) **Reconocimiento de emociones en el lugar de trabajo/educación:** Sistemas de IA para reconocimiento de emociones en lugares de trabajo e instituciones educativas (con excepciones por razones médicas o de seguridad)

   g) **Scraping de bases de datos de reconocimiento facial:** Sistemas de IA que crean o expanden bases de datos de reconocimiento facial mediante scraping no dirigido de imágenes faciales de internet o grabaciones CCTV

   h) **Evaluación de riesgo de delitos:** Sistemas de IA que evalúan el riesgo de que personas naturales cometan delitos basándose únicamente en perfilado o rasgos de personalidad (con excepciones para aumentar la evaluación humana)

   - Para cada práctica prohibida, el Propietario del Sistema de IA proporciona: si el sistema utiliza esta práctica, justificación si no está claro y evidencia de respaldo

3. **Revisar Evaluación**
   - El Gestor del Programa del Reglamento de IA revisa el formulario completado para verificar exactitud, completitud y calidad de la justificación
   - **Punto de Decisión:** Si el sistema potencialmente cae bajo cualquier práctica prohibida, el CLO debe ser involucrado para una opinión legal vinculante. El proyecto se pausa pendiente de esta opinión
   - Si el CLO confirma que el sistema es una práctica prohibida, todo el trabajo en el proyecto se **detiene inmediata y permanentemente**
   - La decisión y su base legal se registran en el Registro de Sistemas de IA con estado de clasificación "PROHIBIDO - NO DESARROLLAR"

4. **Documentar Resultados de la Evaluación**
   - Completar el Informe de Evaluación de Prácticas Prohibidas (REC-AI-CLS-001)
   - Si el sistema pasa la evaluación, proceder al Paso 1.2
   - Si el sistema no pasa la evaluación, documentar la prohibición y notificar a todas las partes interesadas

**Evidencia Requerida:**
- Formulario de Evaluación de Prácticas Prohibidas completado y firmado
- Opinión legal vinculante del CLO para cualquier caso limítrofe o confirmado
- Entrada en el Registro de Sistemas de IA con determinación final y justificación
- Informe de Evaluación de Prácticas Prohibidas (REC-AI-CLS-001)

**Tiempo:** 1 semana desde la propuesta del nuevo sistema

**Control de Calidad:**
- 100% de los nuevos sistemas de IA son evaluados antes de que se asignen recursos de desarrollo
- Se obtiene la aprobación del CLO para todos los casos que no están clara e inequívocamente fuera de las categorías prohibidas
- La documentación está completa y es defendible en una auditoría

---

#### **Paso 1.2: Evaluación de Alto Riesgo Anexo I (Control CLS-002)**

**Cuándo:** Inmediatamente después de pasar la evaluación de prácticas prohibidas

**Quién:** Propietario del Sistema de IA, revisado por el Gestor del Programa del Reglamento de IA

**Cómo:**

1. **Evaluar Clasificación del Producto**
   - El Propietario del Sistema de IA completa el **Formulario de Evaluación del Anexo I** (parte de TMP-AI-CLS-001)
   - Esto requiere realizar la prueba de tres partes para la clasificación del Anexo I:
     1. ¿El sistema de IA está destinado a ser utilizado como componente de seguridad de un producto, o es en sí mismo un producto, cubierto por la legislación de armonización de la Unión enumerada en el Anexo I (ej., maquinaria, juguetes, dispositivos médicos)?
     2. ¿El producto está sujeto a evaluación de conformidad por terceros relacionada con riesgos de salud y seguridad bajo la legislación enumerada en el Anexo I?
     3. ¿La operación del sistema de IA afecta directamente la seguridad del producto?

2. **Determinar Estado de Componente de Seguridad**
   - Revisar las especificaciones técnicas del producto y los requisitos de seguridad
   - Evaluar si el sistema de IA es un "componente de seguridad" (es decir, su fallo podría causar daño directo)
   - Documentar el razonamiento con referencias específicas a las especificaciones del producto
   - Obtener confirmación del Gestor de Producto y el Líder de Ingeniería

3. **Verificar Legislación Aplicable**
   - Identificar la legislación relevante del Anexo I (ej., Directiva de Maquinaria 2006/42/EC, Reglamento de Dispositivos Médicos 2017/745)
   - Confirmar que el producto está sujeto a evaluación de conformidad por terceros
   - Documentar la legislación aplicable y los requisitos de evaluación de conformidad

4. **Tomar Decisión de Clasificación**
   - **Punto de Decisión:** Si la respuesta a las tres preguntas es SÍ, el sistema se clasifica como **Alto Riesgo (Anexo I)**
   - El proceso se detiene aquí, la clasificación se registra y se notifica al Comité de Gobernanza de IA
   - Si alguna respuesta es NO, proceder al Paso 1.3 (Evaluación Anexo III)

5. **Documentar Evaluación**
   - Completar el Informe de Evaluación del Anexo I (REC-AI-CLS-002)
   - Incluir los resultados de la prueba de tres partes, evidencia de respaldo y la decisión final de clasificación

**Evidencia Requerida:**
- Formulario de Evaluación del Anexo I completado y firmado
- Identificación clara de la legislación relevante del Anexo I
- Especificaciones técnicas del producto y documentación de seguridad
- Justificación para la determinación de "componente de seguridad" si aplica
- Informe de Evaluación del Anexo I (REC-AI-CLS-002)

**Tiempo:** 1-2 días

**Control de Calidad:**
- La determinación de "componente de seguridad" está bien documentada y es defendible, con referencia a las especificaciones técnicas del producto
- Las tres partes de la prueba están claramente respondidas con evidencia de respaldo

---

#### **Paso 1.3: Evaluación de Alto Riesgo Anexo III (Control CLS-003)**

**Cuándo:** Si el sistema no se clasifica como alto riesgo bajo el Anexo I

**Quién:** Propietario del Sistema de IA, revisado por el Gestor del Programa del Reglamento de IA

**Cómo:**

1. **Evaluar Clasificación del Caso de Uso**
   - El Propietario del Sistema de IA completa el **Formulario de Evaluación del Anexo III** (parte de TMP-AI-CLS-001)
   - Esto requiere evaluar si el propósito previsto del sistema de IA cae en uno de los 8 casos de uso de alto riesgo definidos en el Anexo III:

   **Casos de Uso de Alto Riesgo del Anexo III:**

   1. **Identificación biométrica y categorización de personas naturales**
      - Sistemas de identificación biométrica remota
      - Sistemas de categorización biométrica

   2. **Gestión y operación de infraestructura crítica**
      - Sistemas de IA para gestión de tráfico y suministro de agua/gas/calefacción/electricidad

   3. **Educación y formación profesional**
      - Sistemas de IA para admisión, evaluación, valoración de resultados de aprendizaje
      - Sistemas de IA para monitoreo y detección de comportamiento prohibido durante pruebas

   4. **Empleo, gestión de trabajadores y acceso al autoempleo**
      - Sistemas de IA para reclutamiento, selección, filtrado, evaluación
      - Sistemas de IA para asignación de tareas, monitoreo, evaluación del desempeño

   5. **Acceso y disfrute de servicios privados esenciales y servicios y beneficios públicos**
      - Sistemas de IA para evaluación de solvencia crediticia
      - Sistemas de IA para evaluación de riesgos y fijación de precios de seguros de vida/salud
      - Sistemas de IA para elegibilidad para asistencia o servicios públicos
      - Sistemas de IA para despacho y priorización de servicios de respuesta de emergencia

   6. **Aplicación de la ley**
      - Sistemas de IA para evaluación de riesgo de víctimas potenciales de delitos
      - Sistemas de IA para polígrafo y herramientas similares
      - Sistemas de IA para evaluación de fiabilidad de evidencia
      - Sistemas de IA para análisis, detección, investigación, enjuiciamiento de delitos
      - Sistemas de IA para gestión de migración, asilo, control fronterizo

   7. **Gestión de migración, asilo y control fronterizo**
      - Sistemas de IA para polígrafo y herramientas similares
      - Sistemas de IA para evaluación de riesgo de inmigración irregular o riesgos de seguridad/salud
      - Sistemas de IA para examen de solicitudes de asilo
      - Sistemas de IA para detección de personas con fines policiales

   8. **Administración de justicia y procesos democráticos**
      - Sistemas de IA para asistir a autoridades judiciales en investigar e interpretar hechos y derecho

2. **Mapear a Categoría del Anexo III**
   - Para cada categoría del Anexo III, evaluar si el propósito previsto del sistema de IA cae dentro de esa categoría
   - Documentar el mapeo con referencia específica al propósito previsto y caso de uso del sistema
   - Obtener confirmación del Gestor de Producto y expertos en la materia relevantes

3. **Tomar Decisión de Clasificación**
   - **Punto de Decisión:** Si el propósito previsto del sistema claramente cae en una de estas categorías, proceder al Paso 1.4 (Evaluación de Riesgo Significativo de Daño)
   - Si no, proceder al Paso 1.5 (Evaluación de Riesgo Limitado)

4. **Documentar Evaluación**
   - Completar el Informe de Evaluación del Anexo III (REC-AI-CLS-003)
   - Incluir el mapeo a categorías del Anexo III, evidencia de respaldo y la decisión de proceder

**Evidencia Requerida:**
- Formulario de Evaluación del Anexo III completado y firmado
- Mapeo claro del propósito previsto del sistema de IA a una categoría y subcategoría específica del Anexo III
- Informe de Evaluación del Anexo III (REC-AI-CLS-003)

**Tiempo:** 1-2 días

**Control de Calidad:**
- El mapeo a una categoría del Anexo III es preciso, específico y justificable basado en la declaración de propósito previsto del sistema
- La evaluación es exhaustiva y considera todos los aspectos relevantes del caso de uso

---

#### **Paso 1.4: Evaluación de Riesgo Significativo de Daño (Control CLS-004)**

**Cuándo:** Solo para sistemas que caen bajo una categoría del Anexo III

**Quién:** Propietario del Sistema de IA, revisado por el Gestor del Programa del Reglamento de IA

**Cómo:**

1. **Evaluar Potencial de Daño**
   - Para un sistema del Anexo III, debe realizarse una evaluación formal para determinar si representa un **riesgo significativo de daño** a la salud, seguridad o derechos fundamentales de personas naturales
   - El Propietario del Sistema de IA completa el **Formulario de Evaluación de Riesgo Significativo de Daño** (parte de TMP-AI-CLS-001)

2. **Evaluar Factores de Riesgo**
   - La evaluación debe considerar:
     - **Intensidad:** La gravedad del daño potencial (ej., lesión física, pérdida financiera, discriminación)
     - **Alcance:** El número de personas que podrían verse afectadas
     - **Vulnerabilidad:** La vulnerabilidad de las personas o grupos que probablemente se vean afectados (ej., niños, ancianos, personas con discapacidades)
     - **Reversibilidad:** Si el daño es reversible o permanente
     - **Probabilidad:** La probabilidad de que ocurra el daño

3. **Realizar Análisis de Riesgo**
   - Documentar escenarios específicos donde el sistema podría causar daño
   - Evaluar la probabilidad y gravedad de cada escenario
   - Considerar daños tanto directos como indirectos
   - Evaluar el diseño del sistema y las salvaguardas que podrían mitigar el daño

4. **Tomar Decisión de Clasificación**
   - **Punto de Decisión:** Si la evaluación concluye que el sistema *sí* representa un riesgo significativo de daño, se clasifica como **Alto Riesgo (Anexo III)**
   - El proceso se detiene aquí, la clasificación se registra y se notifica al Comité de Gobernanza de IA
   - Si *no* representa un riesgo significativo, el proveedor debe documentar esta evaluación y registrar el sistema en la base de datos de la UE
   - El proceso entonces procede a la Evaluación de Riesgo Limitado (Paso 1.5)

5. **Documentar Evaluación**
   - Completar el Informe de Evaluación de Riesgo Significativo de Daño (REC-AI-CLS-004)
   - Incluir el análisis de riesgo, evidencia de respaldo y la decisión final de clasificación

**Evidencia Requerida:**
- Evaluación de Riesgo Significativo de Daño completada con justificación detallada y evidencia de respaldo
- Aprobación de la evaluación por el Gestor del Programa del Reglamento de IA
- Para sistemas considerados sin riesgo significativo, prueba de registro en la base de datos de la UE
- Informe de Evaluación de Riesgo Significativo de Daño (REC-AI-CLS-004)

**Tiempo:** 3-5 días

**Control de Calidad:**
- La evaluación de "riesgo significativo" es exhaustiva, basada en evidencia y bien documentada
- Se consideran todos los factores de riesgo relevantes
- El razonamiento es defendible en una auditoría o revisión regulatoria

---

#### **Paso 1.5: Clasificación de Riesgo Limitado y Riesgo Mínimo (Controles CLS-005, CLS-006)**

**Cuándo:** Si un sistema no se clasifica como alto riesgo

**Quién:** Gestor del Programa del Reglamento de IA

**Cómo:**

1. **Evaluar Obligaciones de Transparencia**
   - Evaluar si el sistema tiene obligaciones específicas de transparencia bajo el Artículo 50:
     - Sistemas que interactúan directamente con personas naturales (chatbots, asistentes virtuales)
     - Sistemas de reconocimiento de emociones
     - Sistemas de categorización biométrica
     - Sistemas de IA que generan o manipulan contenido de imagen, audio o video (deepfakes)
   - Completar el **Formulario de Evaluación de Riesgo Limitado** (parte de TMP-AI-CLS-001)

2. **Tomar Decisión de Clasificación**
   - **Punto de Decisión:** Si el sistema está sujeto a estas obligaciones de transparencia, se clasifica como **Riesgo Limitado**
   - Si el sistema no es de alto riesgo y no tiene obligaciones específicas de transparencia, se clasifica como **Riesgo Mínimo**

3. **Registrar Clasificación**
   - La clasificación final se registra en el Registro de Sistemas de IA con la fecha y justificación
   - Para sistemas de Riesgo Limitado, documentar las obligaciones específicas de transparencia que aplican

4. **Notificar a las Partes Interesadas**
   - Notificar al Propietario del Sistema de IA sobre la clasificación final
   - Proporcionar orientación sobre las obligaciones de cumplimiento aplicables

**Evidencia Requerida:**
- Decisión final de clasificación documentada en el Registro de Sistemas de IA
- Para sistemas de Riesgo Limitado, registro de las obligaciones específicas de transparencia que aplican
- Formulario de Evaluación de Riesgo Limitado (REC-AI-CLS-005)

**Tiempo:** 1 día

---

### FASE 2: GESTIÓN CONTINUA

#### **Paso 2.1: Mantener Registro de Sistemas de IA (Control CLS-007)**

**Cuándo:** Continuamente

**Quién:** Gestor del Programa del Reglamento de IA

**Cómo:**

1. **Mantener Registro Central**
   - Mantener un **Registro de Sistemas de IA** centralizado (TMP-AI-CLS-002) para todos los sistemas de IA en la organización
   - El registro debe incluir, como mínimo:
     - Nombre del sistema e ID único
     - Propietario del sistema e información de contacto
     - Breve descripción del propósito previsto
     - Clasificación (Prohibido, Alto Riesgo, Riesgo Limitado, Riesgo Mínimo, GPAI)
     - Fecha de clasificación
     - Justificación de la clasificación
     - Estado (En Desarrollo, Implementado, Dado de Baja)
     - Para GPAI: Tipo de proveedor (upstream/downstream), designación de riesgo sistémico

2. **Actualizar Registro**
   - Actualizar el registro cuando se clasifica un nuevo sistema
   - Actualizar el registro cuando cambia la clasificación de un sistema
   - Actualizar el registro cuando cambia el estado de un sistema

3. **Revisión y Gobernanza**
   - El registro es la fuente única de verdad para las clasificaciones de sistemas de IA
   - El registro se revisa trimestralmente por el Comité de Gobernanza de IA
   - Cualquier discrepancia o pregunta se escala al Gestor del Programa del Reglamento de IA

**Evidencia Requerida:**
- Un Registro de Sistemas de IA actualizado
- Actas de revisión trimestral del Comité de Gobernanza de IA

**Tiempo:** Continuo

---

#### **Paso 2.2: Reclasificación por Modificación Sustancial (Control CLS-008)**

**Cuándo:** Cuando se propone una modificación sustancial para un sistema de IA existente

**Quién:** Propietario del Sistema de IA

**Cómo:**

1. **Identificar Modificación Sustancial**
   - Una modificación sustancial se define como cualquier cambio que podría afectar la clasificación del sistema, incluyendo:
     - Cambio en el propósito previsto
     - Cambio significativo en la arquitectura del modelo
     - Cambio en los datos utilizados que podría alterar su perfil de riesgo
     - Cambio en el contexto de implementación del sistema o usuarios objetivo

2. **Iniciar Reclasificación**
   - El Propietario del Sistema de IA notifica al Gestor del Programa del Reglamento de IA sobre la modificación propuesta
   - El Gestor del Programa del Reglamento de IA inicia un proceso completo de reclasificación, comenzando desde **Paso 1.1: Evaluación de Prácticas Prohibidas**

3. **Realizar Evaluación Completa**
   - El sistema se trata como un sistema nuevo, y se repiten todos los pasos de clasificación
   - No puede comenzarse trabajo de desarrollo en la modificación sustancial hasta que se complete y apruebe la reclasificación

4. **Actualizar Registro**
   - Al completarse la reclasificación, el Registro de Sistemas de IA se actualiza con la nueva clasificación (si cambió) y la fecha de la modificación

**Evidencia Requerida:**
- Una evaluación de clasificación nueva y completa para el sistema modificado
- Entrada actualizada en el Registro de Sistemas de IA
- Documentación de la modificación sustancial y su justificación

**Tiempo:** Antes de que se implemente la modificación

---

#### **Paso 2.3: Revisión Anual de Clasificación (Control CLS-009)**

**Cuándo:** Anualmente para todos los sistemas de IA implementados

**Quién:** Gestor del Programa del Reglamento de IA

**Cómo:**

1. **Programar Revisión Anual**
   - Programar una revisión anual de todos los sistemas de IA implementados, típicamente en el primer trimestre de cada año
   - Notificar a todos los Propietarios de Sistemas de IA sobre el calendario de revisión

2. **Realizar Revisión**
   - Para cada sistema de IA implementado, revisar:
     - Si la clasificación del sistema permanece precisa basada en la implementación y uso actual
     - Si ha habido cambios en el Reglamento de IA o sus actos de implementación que podrían afectar la clasificación
     - Si ha habido incidentes o problemas que podrían afectar la clasificación
   - Completar el **Formulario de Revisión Anual de Clasificación** (parte de TMP-AI-CLS-001)

3. **Actualizar Clasificaciones**
   - Si la revisión identifica que la clasificación de un sistema debe cambiar, iniciar un proceso formal de reclasificación
   - Actualizar el Registro de Sistemas de IA con los resultados de la revisión

4. **Informar Resultados**
   - Preparar el **Informe de Revisión Anual de Clasificación** (REC-AI-CLS-006)
   - Presentar los resultados al Comité de Gobernanza de IA
   - Resaltar sistemas con clasificaciones cambiadas o áreas de preocupación

**Evidencia Requerida:**
- Registro de la revisión anual de clasificación, incluyendo lista de todos los sistemas revisados y el resultado
- Formulario de Revisión Anual de Clasificación (parte de TMP-AI-CLS-001)
- Actas de la reunión del Comité de Gobernanza de IA donde se presentó la revisión
- Informe de Revisión Anual de Clasificación (REC-AI-CLS-006)

**Tiempo:** Anualmente

---

## 5. CLASIFICACIÓN DE IA DE PROPÓSITO GENERAL (GPAI)

### 5.1 Identificación de Modelo GPAI

**Cuándo:** Al evaluar cualquier modelo de IA que podría ser un modelo GPAI

**Quién:** Oficial de Cumplimiento GPAI + Propietario del Sistema de IA

**Base Regulatoria:** Artículos 51-56 del Reglamento de IA de la UE

**Cómo:**

1. **Evaluar Criterios GPAI**

   Un modelo de IA de Propósito General se define como un modelo de IA que:
   - Muestra generalidad significativa
   - Es capaz de realizar competentemente una amplia gama de tareas distintas
   - Puede integrarse en una variedad de sistemas o aplicaciones downstream (excepto herramientas para I+D antes de lanzamiento al mercado)

   Completar la **Evaluación de Identificación de Modelo GPAI** (parte de TMP-AI-CLS-003)

2. **Determinar Tipo de Proveedor**

   | Tipo de Proveedor | Definición | Obligaciones |
   |---------------|------------|-------------|
   | **Proveedor de Modelo GPAI** | Desarrolla o hace desarrollar un modelo GPAI y lo lanza al mercado bajo su propio nombre/marca | Obligaciones de Artículos 53-54; documentación técnica; fichas de modelo; cumplimiento de derechos de autor |
   | **Proveedor Downstream** | Utiliza modelo GPAI para desarrollar/implementar sistema de IA | Cumplimiento de requisitos a nivel de sistema; diligencia debida sobre proveedor upstream |

3. **Evaluar Colocación en el Mercado**
   - ¿Se lanza el modelo bajo una licencia libre y de código abierto?
   - ¿Están el código fuente, parámetros del modelo y datos de entrenamiento disponibles públicamente?
   - ¿Cumple el modelo con las exenciones de código abierto según el Artículo 51(2)?

4. **Documentar Determinación GPAI**
   - Completar Informe de Identificación de Modelo GPAI (REC-AI-GPAI-001)
   - Registrar tipo de proveedor y estado de exención
   - Añadir al Registro de Sistemas de IA con designación GPAI

**Evidencia Requerida:**
- Evaluación de Identificación de Modelo GPAI (parte de TMP-AI-CLS-003)
- Informe de Identificación de Modelo GPAI (REC-AI-GPAI-001)
- Registro de Sistemas de IA actualizado

**Tiempo:** 2-3 días

---

### 5.2 Evaluación de Riesgo Sistémico

**Cuándo:** Para todos los modelos GPAI identificados en el Paso 5.1

**Quién:** Oficial de Cumplimiento GPAI + Equipo Técnico

**Base Regulatoria:** El Artículo 51(1)(b) define modelos GPAI con riesgo sistémico

**Cómo:**

1. **Aplicar Prueba de Umbral Computacional**

   **Prueba Principal:** ¿El modelo GPAI tiene capacidades de alto impacto, determinado por:
   - ¿Computación de entrenamiento utilizada para el entrenamiento del modelo ≥ **10²⁵ operaciones de punto flotante (FLOPs)**?

   | Nivel de Computación | Clasificación | Obligaciones |
   |---------------|---------------|-------------|
   | < 10²⁵ FLOPs | GPAI Estándar | Artículos 53-54 |
   | ≥ 10²⁵ FLOPs | GPAI con Riesgo Sistémico | Artículos 53-55 (mejorados) |

2. **Aplicar Prueba de Designación Alternativa**

   Incluso si está por debajo del umbral de FLOP, la Oficina Europea de IA puede designar un modelo como de riesgo sistémico basándose en:
   - Capacidades o impacto equivalentes a modelos en/sobre el umbral de FLOP
   - Razonamiento basado en criterios del Anexo XIII:
     - Número de parámetros
     - Calidad o tamaño del conjunto de datos de entrenamiento
     - Modalidades (texto, imagen, audio, video)
     - Herramientas y nivel de autonomía
     - Riesgo específico planteado por el modelo
     - Alcance (número de usuarios, ingresos)
     - Cuota de mercado

3. **Documentar Determinación de Riesgo Sistémico**

   Completar **Evaluación de Riesgo Sistémico GPAI** (parte de TMP-AI-CLS-003):
   - Cálculo y documentación de computación de entrenamiento
   - Evaluación de criterios del Anexo XIII
   - Estado de designación de la Oficina Europea de IA (si aplica)
   - Justificación para la determinación de riesgo sistémico

4. **Aplicar Obligaciones Mejoradas (si Riesgo Sistémico)**

   Si se clasifica como GPAI con riesgo sistémico, aplican las siguientes obligaciones **adicionales**:

   | Obligación | Artículo | Descripción |
   |------------|---------|-------------|
   | Evaluación del Modelo | 55(1)(a) | Realizar y documentar evaluación del modelo según protocolos estandarizados |
   | Pruebas Adversarias | 55(1)(b) | Evaluar y mitigar riesgos sistémicos (red teaming, pruebas adversarias) |
   | Seguimiento de Incidentes | 55(1)(c) | Rastrear, documentar e informar incidentes graves |
   | Ciberseguridad | 55(1)(d) | Asegurar nivel adecuado de protección de ciberseguridad |
   | Códigos de Práctica | 56 | Seguir códigos de práctica o estándares armonizados |

5. **Registrar Determinación de Riesgo Sistémico**
   - Actualizar Registro de Sistemas de IA con designación de riesgo sistémico
   - Notificar al Comité de Gobernanza de IA sobre clasificación de riesgo sistémico
   - Implementar monitoreo y controles mejorados

**Evidencia Requerida:**
- Evaluación de Riesgo Sistémico GPAI (parte de TMP-AI-CLS-003)
- Cálculos y documentación de computación de entrenamiento
- Evaluación de criterios del Anexo XIII
- Documentación de designación de la Oficina Europea de IA (si aplica)
- Registro de Sistemas de IA actualizado
- Notificación al Comité de Gobernanza de IA

**Tiempo:** 1-2 semanas

**Control de Calidad:**
- Los cálculos de computación de entrenamiento son precisos y verificables
- Los criterios del Anexo XIII están exhaustivamente documentados
- Las obligaciones mejoradas están identificadas y asignadas

---

### 5.3 Matriz de Obligaciones del Proveedor GPAI

| Obligación | GPAI Estándar (Art. 53) | GPAI Riesgo Sistémico (Art. 55) |
|------------|------------------------|------------------------------|
| **Documentación Técnica** | ✅ Requerida | ✅ Requerida + Mejorada |
| **Información a Proveedores Downstream** | ✅ Requerida | ✅ Requerida |
| **Política de Cumplimiento de Derechos de Autor** | ✅ Requerida | ✅ Requerida |
| **Resumen Públicamente Disponible** | ✅ Requerida | ✅ Requerida |
| **Protocolo de Evaluación del Modelo** | ❌ No Requerido | ✅ Requerido |
| **Evaluación de Riesgo Sistémico** | ❌ No Requerido | ✅ Requerido |
| **Pruebas Adversarias** | ❌ No Requerido | ✅ Requerido |
| **Seguimiento de Incidentes Graves** | ❌ No Requerido | ✅ Requerido |
| **Medidas de Ciberseguridad** | ❌ No Requerido | ✅ Requerido |

### 5.4 Exenciones de Código Abierto y Libre

**Criterios de Exención del Artículo 51(2):**

Los modelos GPAI lanzados bajo una licencia libre y de código abierto están exentos de ciertas obligaciones si:

1. **Tipo de Licencia:**
   - Modelo lanzado bajo licencia libre y de código abierto
   - La licencia permite acceso, uso, modificación y distribución

2. **Disponibilidad Pública:**
   - Parámetros del modelo (incluyendo pesos, sesgos, arquitectura)
   - Información sobre datos de entrenamiento (características del conjunto de datos, procedencia, metodologías)
   - Código de entrenamiento (si es técnicamente factible)

3. **Exclusiones de la Exención:**
   - La exención **NO** aplica si:
     - El modelo califica como GPAI con riesgo sistémico según Artículo 51(1)(b)
     - El proveedor aplica restricciones downstream que contradicen la licencia libre/abierta

**Requisitos de Documentación para la Exención:**
- Verificar que la licencia es una licencia de código abierto aprobada (aprobada por OSI, Creative Commons, etc.)
- Documentar disponibilidad pública del modelo, parámetros, información de datos de entrenamiento
- Confirmar que no aplica designación de riesgo sistémico
- Registrar exención en el Registro de Sistemas de IA

---

### 5.5 Diligencia Debida del Proveedor Downstream GPAI

**Cuándo:** Al integrar modelos GPAI de proveedores upstream en sistemas de IA

**Quién:** Propietario del Sistema de IA + Oficial de Cumplimiento GPAI

**Cómo:**

1. **Verificar Cumplimiento del Proveedor Upstream**
   - Solicitar y revisar documentación del modelo GPAI (cumplimiento del Artículo 53)
   - Verificar que el proveedor upstream está en el registro de cumplimiento de la UE
   - Solicitar ficha del modelo y documentación técnica
   - Evaluar la postura de cumplimiento del Reglamento de IA de la UE del proveedor upstream

2. **Evaluar Clasificación a Nivel de Sistema**
   - Incluso al usar un modelo GPAI conforme, evaluar la clasificación del sistema downstream
   - Aplicar proceso estándar de clasificación (Pasos 1.1-1.5)
   - Documentar cómo se integra y utiliza el modelo GPAI

3. **Documentar Diligencia Debida**
   - Completar **Evaluación de Proveedor Downstream GPAI** (parte de TMP-AI-CLS-003)
   - Registrar verificación de cumplimiento del proveedor upstream
   - Documentar clasificación a nivel de sistema
   - Añadir al Registro de Sistemas de IA

**Evidencia Requerida:**
- Evaluación de Proveedor Downstream GPAI (parte de TMP-AI-CLS-003)
- Documentación del proveedor upstream (ficha de modelo, documentos técnicos)
- Verificación de cumplimiento del proveedor upstream
- Documentación de clasificación a nivel de sistema

**Tiempo:** 1 semana

---

## 6. MECANISMOS DE CONTROL

Esta sección documenta los 7 controles de clasificación que aseguran una clasificación precisa, completa y auditable de sistemas de IA.

### 6.1 Control CLS-001: Categorización del Sistema (Preventivo, Crítico)

**Objetivo del Control:** Asegurar que todos los sistemas de IA sean identificados y categorizados para evaluación de clasificación

**Descripción del Control:**
- Todos los sistemas de IA y modelos GPAI se registran en el Registro de Sistemas de IA al iniciarse
- Se asignan IDs únicos de clasificación (formato CLS-YYYY-NNN)
- Se asignan roles de propietario del sistema y partes interesadas
- La categorización inicial determina la ruta de clasificación (sistema de IA estándar vs. modelo GPAI)

**Actividades del Control:**
- Proceso de admisión para propuestas de nuevos sistemas de IA
- Asignación y seguimiento de ID de clasificación
- Asignación de roles (Propietario del Sistema, Líder Técnico, etc.)
- Determinación inicial GPAI vs. IA estándar

**Propietario del Control:** Gestor del Programa del Reglamento de IA

**Frecuencia del Control:** Al iniciarse cada nuevo sistema/modelo de IA

**Enfoque de Prueba:**
- Muestrear 20 sistemas de IA del registro
- Verificar que todos tienen IDs de clasificación y propietarios asignados
- Verificar que todos se sometieron a evaluación de categorización inicial
- Verificar 100% de completitud de documentación de admisión

**KPI:** % de nuevos sistemas de IA registrados dentro de 1 semana de inicio (Meta: 100%)

---

### 6.2 Control CLS-002: Aplicación de Criterios de Riesgo (Preventivo, Crítico)

**Objetivo del Control:** Asegurar que los criterios de clasificación se apliquen de manera precisa y consistente según los requisitos del Reglamento de IA de la UE

**Descripción del Control:**
- La evaluación de prácticas prohibidas es obligatoria para todos los sistemas
- Los criterios del Anexo I y Anexo III se aplican sistemáticamente
- Los umbrales de riesgo sistémico GPAI se calculan y documentan
- Se obtiene revisión legal para casos limítrofes

**Actividades del Control:**
- Completar lista de verificación de prácticas prohibidas (Artículo 5)
- Aplicación de prueba de tres partes del Anexo I
- Aplicación de mapeo de casos de uso del Anexo III
- Cálculo de umbral de FLOP de GPAI
- Revisión legal del CLO para prácticas prohibidas

**Propietario del Control:** Gestor del Programa del Reglamento de IA (con CLO para revisión legal)

**Frecuencia del Control:** Para cada evaluación de clasificación

**Enfoque de Prueba:**
- Muestrear 20 evaluaciones de clasificación
- Verificar que se completaron todos los pasos del árbol de decisión
- Verificar que se obtuvo aprobación del CLO para evaluaciones de prácticas prohibidas
- Verificar que los criterios del Anexo I/III se aplicaron correctamente
- Verificar que los cálculos de FLOP de GPAI son precisos

**KPI:** % de clasificaciones con aplicación completa de criterios (Meta: 100%)

---

### 6.3 Control CLS-003: Documentación de Clasificación (Preventivo, Alto)

**Objetivo del Control:** Asegurar que las decisiones de clasificación estén completamente documentadas con evidencia y justificación

**Descripción del Control:**
- Todas las evaluaciones de clasificación se documentan en plantillas estandarizadas
- La evidencia que respalda las decisiones de clasificación se recopila y conserva
- La justificación para clasificaciones limítrofes o complejas se documenta
- La documentación se revisa y aprueba antes de la finalización

**Actividades del Control:**
- Completar formularios de evaluación de clasificación
- Recopilación de evidencia de respaldo (especificaciones técnicas, descripciones de casos de uso)
- Documentación de justificación de clasificación
- Revisión y aprobación por el Gestor del Programa del Reglamento de IA
- Archivo en repositorio de clasificación

**Propietario del Control:** Propietario del Sistema de IA (ejecución), Gestor del Programa del Reglamento de IA (aprobación)

**Frecuencia del Control:** Para cada clasificación

**Enfoque de Prueba:**
- Muestrear 20 decisiones de clasificación
- Verificar que toda la documentación obligatoria está completa
- Verificar que la evidencia respalda la conclusión de clasificación
- Verificar que se obtuvieron firmas de aprobación
- Verificar que la documentación se almacena según política de retención

**KPI:** % de clasificaciones con documentación completa (Meta: 100%)

---

### 6.4 Control CLS-004: Revisión de Clasificación (Detectivo, Alto)

**Objetivo del Control:** Asegurar que las decisiones de clasificación sean revisadas y validadas por la autoridad apropiada

**Descripción del Control:**
- Todas las clasificaciones de alto riesgo son revisadas y aprobadas por el Comité de Gobernanza de IA
- Las determinaciones de prácticas prohibidas son revisadas y aprobadas por el CLO
- Las clasificaciones de riesgo sistémico GPAI son revisadas por el Oficial de Cumplimiento GPAI
- Las decisiones de clasificación son cuestionadas y validadas mediante revisión por pares

**Actividades del Control:**
- Reuniones de revisión del Comité de Gobernanza de IA para clasificaciones de alto riesgo
- Revisión legal del CLO para prácticas prohibidas
- Revisión del Oficial de Cumplimiento GPAI para modelos de riesgo sistémico
- Revisión por pares de justificación de clasificación
- Proceso de escalamiento para clasificaciones disputadas

**Propietario del Control:** Comité de Gobernanza de IA (alto riesgo), CLO (prohibido), Oficial GPAI (GPAI)

**Frecuencia del Control:** Para cada clasificación de alto riesgo, prohibida o GPAI de riesgo sistémico

**Enfoque de Prueba:**
- Muestrear 20 clasificaciones de alto riesgo
- Verificar que se obtuvo aprobación del Comité de Gobernanza de IA
- Verificar aprobación del CLO en evaluaciones de prácticas prohibidas
- Verificar aprobación del Oficial GPAI en determinaciones de riesgo sistémico
- Revisar actas de reuniones para evidencia de cuestionamiento y validación

**KPI:** % de clasificaciones de alto riesgo con aprobación de gobernanza (Meta: 100%)

---

### 6.5 Control CLS-005: Gestión de Cambios de Clasificación (Preventivo, Alto)

**Objetivo del Control:** Asegurar que los cambios de clasificación sean identificados, evaluados y aprobados antes de la implementación

**Descripción del Control:**
- Las modificaciones sustanciales activan evaluación de reclasificación
- Las revisiones anuales identifican cambios que requieren reclasificación
- La reclasificación sigue el mismo proceso que la clasificación inicial
- Los cambios de clasificación se documentan y comunican a las partes interesadas

**Actividades del Control:**
- Identificación y notificación de modificación sustancial
- Ejecución de evaluación de reclasificación
- Proceso de revisión anual de clasificación
- Aprobación y comunicación de cambio de clasificación
- Actualización del Registro de Sistemas de IA

**Propietario del Control:** Gestor del Programa del Reglamento de IA

**Frecuencia del Control:** Ante modificación sustancial, anualmente

**Enfoque de Prueba:**
- Muestrear 10 modificaciones sustanciales
- Verificar que se activó reclasificación
- Verificar que la reclasificación siguió el proceso completo
- Verificar que los cambios de clasificación fueron aprobados
- Verificar que se actualizó el Registro de Sistemas de IA

**KPI:** % de modificaciones sustanciales que activan reclasificación (Meta: 100%)

---

### 6.6 Control CLS-006: Monitoreo Regulatorio (Detectivo, Medio)

**Objetivo del Control:** Asegurar que los cambios en el Reglamento de IA de la UE y actos de implementación sean monitoreados e incorporados al proceso de clasificación

**Descripción del Control:**
- Se monitorean el Reglamento de IA de la UE y actos de implementación para identificar cambios
- Se identifican cambios que afectan criterios de clasificación
- Se actualizan procedimientos y plantillas de clasificación
- Se reclasifican sistemas de IA afectados si es necesario

**Actividades del Control:**
- Revisión trimestral de monitoreo regulatorio
- Evaluación de impacto de cambios
- Actualizaciones de procedimientos y plantillas
- Comunicación a partes interesadas
- Reclasificación dirigida de sistemas afectados

**Propietario del Control:** Gestor del Programa del Reglamento de IA

**Frecuencia del Control:** Trimestral

**Enfoque de Prueba:**
- Revisar registros de monitoreo regulatorio
- Verificar que se realizaron revisiones trimestrales
- Verificar que se evaluó el impacto de cambios identificados
- Verificar que se actualizaron procedimientos dentro de 30 días del cambio regulatorio
- Verificar que se reclasificaron sistemas afectados

**KPI:** Días desde cambio regulatorio hasta actualización de procedimiento (Meta: < 30 días)

---

### 6.7 Control CLS-007: Pista de Auditoría de Clasificación (Detectivo, Alto)

**Objetivo del Control:** Asegurar pista de auditoría completa y a prueba de manipulaciones de todas las decisiones y cambios de clasificación

**Descripción del Control:**
- Todas las actividades de clasificación se registran con marcas de tiempo e IDs de usuario
- Se mantiene historial de clasificación para cada sistema de IA
- Los cambios en clasificaciones se registran con justificación
- La pista de auditoría se conserva durante 10 años según requisitos del Reglamento de IA de la UE

**Actividades del Control:**
- Registro automatizado de actividades de clasificación
- Control de versiones para documentos de clasificación
- Mantenimiento de registro de cambios en el Registro de Sistemas de IA
- Revisión anual de pista de auditoría
- Archivo y retención segura

**Propietario del Control:** Gestor del Programa del Reglamento de IA

**Frecuencia del Control:** Continuo (registro automatizado), revisión anual

**Enfoque de Prueba:**
- Muestrear 20 sistemas de IA
- Verificar que el historial completo de clasificación está disponible
- Verificar que todos los cambios están registrados con justificación
- Verificar integridad de pista de auditoría (sin brechas ni manipulación)
- Verificar cumplimiento de política de retención

**KPI:** % de sistemas de IA con pista de auditoría completa (Meta: 100%)

---

## 7. KPIS Y MÉTRICAS

### 7.1 KPIs del Proceso de Clasificación

| ID KPI | Nombre del KPI | Definición | Meta | Frecuencia | Propietario |
|--------|----------|------------|--------|-----------|-------|
| **KPI-CLS-001** | Tiempo de Completitud de Clasificación | Días desde inicio hasta clasificación final | ≤ 14 días | Por clasificación | Gestor Programa IA |
| **KPI-CLS-002** | Cobertura de Clasificación | % de sistemas de IA con clasificación documentada | 100% | Mensual | Gestor Programa IA |
| **KPI-CLS-003** | Tasa de Evaluación de Prácticas Prohibidas | % de nuevos sistemas evaluados para prácticas prohibidas | 100% | Mensual | Gestor Programa IA |
| **KPI-CLS-004** | Completitud de Revisión CLO | % de casos limítrofes con aprobación del CLO | 100% | Mensual | Director Legal |
| **KPI-CLS-005** | Aprobación de Gobernanza de Alto Riesgo | % de clasificaciones de alto riesgo con aprobación del Comité de Gobernanza IA | 100% | Trimestral | Comité Gobernanza IA |
| **KPI-CLS-006** | Tasa de Activación de Reclasificación | % de modificaciones sustanciales que activan reclasificación | 100% | Trimestral | Gestor Programa IA |
| **KPI-CLS-007** | Completitud de Revisión Anual | % de sistemas implementados revisados anualmente | 100% | Anual | Gestor Programa IA |
| **KPI-CLS-008** | Completitud de Documentación de Clasificación | % de clasificaciones con toda la documentación obligatoria | 100% | Trimestral | Gestor Programa IA |
| **KPI-CLS-009** | Tasa de Precisión de Clasificación | % de clasificaciones confirmadas precisas en auditoría/revisión | ≥ 95% | Anual | Auditoría Interna |
| **KPI-CLS-010** | Tasa de Identificación de Modelos GPAI | % de modelos GPAI correctamente identificados | 100% | Trimestral | Oficial Cumplimiento GPAI |

### 7.2 KPIs Específicos de GPAI

| ID KPI | Nombre del KPI | Definición | Meta | Frecuencia | Propietario |
|--------|----------|------------|--------|-----------|-------|
| **KPI-GPAI-001** | Tiempo de Evaluación de Riesgo Sistémico | Días desde identificación GPAI hasta determinación de riesgo sistémico | ≤ 10 días | Por modelo GPAI | Oficial Cumplimiento GPAI |
| **KPI-GPAI-002** | Precisión de Cálculo de FLOP | % de cálculos de FLOP verificados y precisos | 100% | Por modelo GPAI | Oficial Cumplimiento GPAI |
| **KPI-GPAI-003** | Diligencia Debida de Proveedor Upstream | % de proveedores GPAI upstream con diligencia debida completada | 100% | Trimestral | Oficial Cumplimiento GPAI |
| **KPI-GPAI-004** | Verificación de Exención Código Abierto/Libre | % de exenciones FOSS con verificación completa | 100% | Por modelo GPAI | Oficial Cumplimiento GPAI |

### 7.3 Informes de KPIs y Escalamiento

**Informes Mensuales:**
- Tendencias de tiempo de completitud de clasificación
- Estado de cobertura de clasificación
- Tasa de evaluación de prácticas prohibidas
- Completitud de revisión CLO

**Informes Trimestrales al Comité de Gobernanza de IA:**
- Todos los KPIs mensuales
- Tasa de aprobación de gobernanza de alto riesgo
- Tasa de activación de reclasificación
- KPIs específicos de GPAI
- Análisis de tendencias y recomendaciones

**Informes Anuales:**
- Todos los KPIs trimestrales
- Completitud de revisión anual
- Tasa de precisión de clasificación (resultados de auditoría)
- Tendencias año tras año
- Recomendaciones de mejora de procesos

**Umbrales de Escalamiento:**
- Cualquier KPI por debajo de la meta → Escalar al Gestor del Programa del Reglamento de IA
- Cobertura de clasificación < 95% → Escalar al Comité de Gobernanza de IA
- Precisión de clasificación < 95% → Escalar al Director Legal

---

## 8. REQUISITOS DE DOCUMENTACIÓN

### 8.1 Plantillas y Formularios de Clasificación

**TMP-AI-CLS-001: Libro de Trabajo de Clasificación de Sistemas de IA**
- Hoja 1: Formulario de Solicitud de Clasificación
- Hoja 2: Formulario de Evaluación de Prácticas Prohibidas (con texto exacto del Artículo 5(1))
- Hoja 3: Formulario de Evaluación del Anexo I
- Hoja 4: Formulario de Evaluación del Anexo III
- Hoja 5: Formulario de Evaluación de Riesgo Significativo de Daño
- Hoja 6: Formulario de Evaluación de Riesgo Limitado
- Hoja 7: Formulario de Revisión Anual de Clasificación

**TMP-AI-CLS-002: Registro de Sistemas de IA**
- Base de datos central de todos los sistemas de IA y sus clasificaciones
- Campos: ID de Sistema, Nombre, Propietario, Descripción, Clasificación, Justificación, Estado, Fechas

**TMP-AI-CLS-003: Libro de Trabajo de Clasificación GPAI**
- Hoja 1: Evaluación de Identificación de Modelo GPAI
- Hoja 2: Evaluación de Riesgo Sistémico GPAI (cálculo de FLOP, Anexo XIII)
- Hoja 3: Evaluación de Proveedor Downstream GPAI
- Hoja 4: Verificación de Exención de Código Abierto/Libre

### 8.2 Registros de Clasificación

| ID de Registro | Nombre del Registro | Contenido | Retención |
|-----------|-------------|---------|-----------|
| REC-AI-CLS-001 | Informe de Evaluación de Prácticas Prohibidas | Resultados de evaluación, opinión CLO, decisión | 10 años |
| REC-AI-CLS-002 | Informe de Evaluación del Anexo I | Resultados de prueba de tres partes, evidencia, decisión | 10 años |
| REC-AI-CLS-003 | Informe de Evaluación del Anexo III | Mapeo de casos de uso, evidencia, decisión | 10 años |
| REC-AI-CLS-004 | Informe de Evaluación de Riesgo Significativo de Daño | Factores de riesgo, escenarios, análisis, decisión | 10 años |
| REC-AI-CLS-005 | Formulario de Evaluación de Riesgo Limitado | Evaluación de obligaciones de transparencia | 10 años |
| REC-AI-CLS-006 | Informe de Revisión Anual de Clasificación | Resultados de revisión anual, cambios, recomendaciones | 10 años |
| REC-AI-GPAI-001 | Informe de Identificación de Modelo GPAI | Determinación GPAI, tipo de proveedor, exenciones | 10 años |
| REC-AI-GPAI-002 | Informe de Riesgo Sistémico GPAI | Cálculo de FLOP, criterios Anexo XIII, determinación | 10 años |

### 8.3 Registros de Gobernanza

| ID de Registro | Nombre del Registro | Retención |
|-----------|-------------|-----------|
| REC-AI-CLS-GOVMIN-001 | Actas de Reuniones del Comité de Gobernanza de IA | 10 años |
| REC-AI-CLS-CLOREVIEW-001 | Registros de Opinión Legal del CLO | 10 años |
| REC-AI-CLS-ESCALATION-001 | Registros de Escalamiento de Clasificación | 10 años |

---

## 9. REVISIÓN Y AUDITORÍA

### 9.1 Controles de Calidad

| Paso | Control de Calidad | Método de Verificación |
|---|---|---|
| 1.1 | 100% de nuevos sistemas evaluados para prácticas prohibidas | Auditoría del Registro de Sistemas de IA |
| 1.1 | Aprobación CLO obtenida para casos limítrofes | Revisión de registros de aprobación CLO |
| 1.2 | Evaluación Anexo I completa y documentada | Revisión de formularios de evaluación |
| 1.3 | Mapeo Anexo III preciso y justificado | Revisión de formularios de evaluación |
| 1.4 | Evaluación de riesgo exhaustiva y basada en evidencia | Revisión de informes de evaluación |
| 2.1 | Registro mantenido y actualizado | Revisión trimestral del registro |
| 2.2 | Reclasificación activada para modificaciones sustanciales | Auditoría de registros de modificación |
| 2.3 | Revisión anual completada para todos los sistemas | Revisión de informe de revisión anual |
| 5.1 | Modelos GPAI correctamente identificados | Revisión de evaluaciones de identificación GPAI |
| 5.2 | Cálculos de FLOP precisos y documentados | Revisión técnica de cálculos |

### 9.2 Procedimientos de Verificación de Auditoría

Los auditores internos verificarán:

1. **Completitud:** Todos los sistemas de IA han sido clasificados
2. **Precisión:** Las clasificaciones son precisas según los criterios de evaluación
3. **Documentación:** Toda la documentación requerida está completa y firmada
4. **Puntualidad:** Las clasificaciones se completan dentro de los plazos requeridos
5. **Gobernanza:** Las clasificaciones de alto riesgo han sido aprobadas por el Comité de Gobernanza de IA
6. **Actualizaciones:** El Registro de Sistemas de IA se mantiene y está actualizado
7. **Cumplimiento GPAI:** Los modelos GPAI están correctamente identificados y se evaluó el riesgo sistémico
8. **Efectividad de Controles:** Los 7 controles de clasificación están operando efectivamente

### 9.3 Calendario Anual de Auditoría

| Actividad de Auditoría | Alcance | Frecuencia | Auditor |
|----------------|-------|-----------|---------|
| Auditoría del Proceso de Clasificación | Todas las clasificaciones del año anterior | Anual | Auditoría Interna |
| Auditoría de Cumplimiento GPAI | Todos los modelos y evaluaciones GPAI | Anual | Auditoría Interna + Oficial GPAI |
| Prueba de Controles | Probar 7 controles de clasificación | Anual | Auditoría Interna |
| Revisión de Precisión del Registro | Verificar registro vs. sistemas reales | Anual | Gestor Programa IA |
| Completitud de Documentación | Muestra de 20 clasificaciones | Trimestral | Oficial de Cumplimiento |

---

## 10. MANEJO DE INCUMPLIMIENTOS

### 10.1 Activadores de Incumplimiento

| Activador | Gravedad | Acción Requerida |
|---------|----------|-----------------|
| **Sistema prohibido implementado** | Crítico | Detención inmediata de implementación; escalamiento CLO; notificación a autoridades |
| **Sistema de alto riesgo implementado sin clasificación** | Alto | Detención inmediata de implementación; clasificación expedita; revisión de gobernanza |
| **Documentación de clasificación faltante** | Medio | Revisión de clasificación; remediación de documentación; plazo de 30 días |
| **Reclasificación no activada** | Medio | Reclasificación inmediata; análisis de causa raíz |
| **Revisión anual no completada** | Bajo | Completar dentro de 30 días; mejora de procesos |

### 10.2 Proceso de Escalamiento de Incumplimientos

1. **Identificar Incumplimiento**
   - Mediante auditoría, revisión o incidente
   - Documentar el hallazgo de incumplimiento

2. **Evaluar Gravedad**
   - Aplicar criterios de gravedad (Crítico, Alto, Medio, Bajo)
   - Determinar acciones inmediatas requeridas

3. **Escalar según Gravedad**
   - Crítico → Comité de Gobernanza de IA + CLO (inmediato)
   - Alto → Gestor del Programa del Reglamento de IA + Director de Producto (dentro de 24 horas)
   - Medio → Gestor del Programa del Reglamento de IA (dentro de 3 días hábiles)
   - Bajo → Propietario del Sistema de IA (dentro de 1 semana)

4. **Remediar Incumplimiento**
   - Ejecutar acciones requeridas según gravedad
   - Documentar actividades de remediación
   - Verificar efectividad de remediación

5. **Análisis de Causa Raíz**
   - Identificar por qué ocurrió el incumplimiento
   - Implementar acciones correctivas
   - Actualizar procedimientos si es necesario

6. **Cerrar Incumplimiento**
   - Verificar que todas las acciones se completaron
   - Documentar cierre y lecciones aprendidas
   - Informar al Comité de Gobernanza de IA

### 10.3 Notificación a Autoridades

Si se ha desarrollado o implementado un sistema de IA prohibido, debe notificarse a la autoridad nacional competente según el Artículo 73:
- Notificación dentro de 15 días del descubrimiento
- Incluir descripción, evaluación de clasificación, acciones de remediación
- Cooperar con investigación de la autoridad
- Documentar todas las comunicaciones

---

## 11. DOCUMENTOS RELACIONADOS

### 11.1 Políticas y Estándares

- POL-AI-001: Política de Gobernanza de IA
- STD-AI-001: Estándar de Clasificación de Sistemas de IA
- STD-AI-002: Estándar de Gestión de Riesgos de IA

### 11.2 Procedimientos

- PROC-AI-RM-001: Procedimiento de Gestión de Riesgos de IA
- PROC-AI-DATA-001: Procedimiento de Gobernanza de Datos de IA
- PROC-AI-QMS-001: Procedimiento de Gestión de Calidad de IA
- PROC-AI-DOC-001: Procedimiento de Documentación Técnica de IA
- PROC-AI-INC-001: Procedimiento de Respuesta a Incidentes de IA
- PROC-AI-VENDOR-001: Procedimiento de Gestión de Proveedores de IA

### 11.3 Referencias Regulatorias

- **Reglamento de IA de la UE (Reglamento (UE) 2024/1689):**
  - Artículo 5: Prácticas de IA Prohibidas
  - Artículo 6: Reglas de Clasificación para Sistemas de IA de Alto Riesgo (Anexo I)
  - Artículo 7: Modificaciones a la Lista de Sistemas de IA de Alto Riesgo (Anexo III)
  - Artículo 50: Obligaciones de Transparencia para Ciertos Sistemas de IA
  - Artículos 51-56: Modelos de IA de Propósito General
  - Artículo 73: Notificación de Incidentes Graves
  - Anexo I: Lista de Legislación de Armonización de la Unión
  - Anexo III: Sistemas de IA de Alto Riesgo
  - Anexo XIII: Criterios para Clasificación como GPAI con Riesgo Sistémico

---

## 12. APÉNDICES

### APÉNDICE A: ÁRBOL DE DECISIÓN DE CLASIFICACIÓN (DIAGRAMA DE FLUJO VISUAL)

```
┌─────────────────────────────────────────────────────────────────────┐
│      ÁRBOL DE DECISIÓN DE CLASIFICACIÓN DE SISTEMAS DE IA (DETALLADO)│
└─────────────────────────────────────────────────────────────────────┘

INICIO: Nuevo Sistema de IA o Modelo
│
▼
┌─────────────────────────────────────┐
│ PASO 1: IDENTIFICACIÓN MODELO GPAI  │
│ (Sección 5.1)                       │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  SÍ: Modelo GPAI           NO: Sistema de IA Estándar
     │                         │
     ▼                         │
┌──────────────────────────┐  │
│ Prueba Riesgo Sistémico  │  │
│ GPAI (Sección 5.2)       │  │
│ - FLOP ≥ 10^25?          │  │
│ - Criterios Anexo XIII?  │  │
└────────┬────────┬────────┘  │
         │        │            │
    SÍ   │        │ NO         │
         │        │            │
         ▼        ▼            │
    GPAI con     GPAI          │
    Riesgo       (Estándar)    │
    Sistémico                  │
         │        │            │
         └────┬───┘            │
              │                │
              ▼                │
    Obligaciones Mejoradas     │
    (Artículos 53-55)          │
                               │
                               │
    ┌──────────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│ PASO 2: EVALUACIÓN PRÁCTICAS        │
│ PROHIBIDAS (Artículo 5)             │
│ (Paso 1.1)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  SÍ: Prohibido            NO: Proceder
     │
     ▼
┌──────────────────────────┐
│ PRÁCTICA PROHIBIDA       │
│ Artículo 5(1)(a-h):      │
│ - Técnicas subliminales  │
│ - Explotación vulnerab.  │
│ - Puntuación social      │
│ - ID biométrica tiempo real│
│ - Reconocimiento emociones│
│ - Emociones lugar trabajo/edu│
│ - Scraping facial (g)    │
│ - Perfilado criminal     │
└────────┬─────────────────┘
         │
         ▼
    DETENER: No Puede Desarrollarse
    Revisión CLO Requerida
    Detener Proyecto
         │
         └─→ FIN

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ PASO 3: ALTO RIESGO ANEXO I         │
│ (Artículo 6)                        │
│ (Paso 1.2)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  SÍ: Componente Seguridad NO: Continuar
     │
     ▼
┌──────────────────────────┐
│ PRUEBA DE TRES PARTES:   │
│ 1. ¿Producto Anexo I?    │
│ 2. ¿Evaluación 3ros?     │
│ 3. ¿Crítico seguridad?   │
│ ¿Todo SÍ?                │
└────────┬─────────────────┘
         │
         ▼
    ALTO RIESGO (Anexo I)
    Cumplimiento Total Requerido
         │
         └─→ FIN: Aplicar Controles Alto Riesgo

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ PASO 4: ALTO RIESGO ANEXO III       │
│ (Artículo 7)                        │
│ (Paso 1.3)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  SÍ: Caso Uso Anexo III   NO: Continuar
     │
     ▼
┌──────────────────────────┐
│ CATEGORÍAS ANEXO III:    │
│ 1. ID biométrica         │
│ 2. Infraestr. crítica    │
│ 3. Educación             │
│ 4. Empleo                │
│ 5. Servicios esenciales  │
│ 6. Aplicación de ley     │
│ 7. Migración/asilo       │
│ 8. Justicia/democracia   │
└────────┬─────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ PASO 5: EVALUACIÓN RIESGO          │
│ SIGNIFICATIVO DE DAÑO (Paso 1.4)    │
│ Factores:                           │
│ - Intensidad de daño                │
│ - Alcance (# afectados)             │
│ - Vulnerabilidad de personas        │
│ - Reversibilidad                    │
│ - Probabilidad                      │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  SÍ: Riesgo Significativo NO: Bajo Riesgo
     │                         │
     ▼                         │
ALTO RIESGO (Anexo III)        │
Cumplimiento Total Requerido   │
     │                         │
     └─→ FIN: Aplicar Controles│
                               │
                  ┌────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│ PASO 6: TRANSPARENCIA RIESGO       │
│ LIMITADO (Artículo 50)              │
│ (Paso 1.5)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  SÍ: Obligs Transparencia NO: Mínimo
     │                         │
     ▼                         ▼
RIESGO LIMITADO             RIESGO MÍNIMO
- Chatbots                  - Sin obligaciones específicas
- Reconocimiento emociones  - Mejores prácticas
- Deepfakes                 - Códigos voluntarios
- Categorización biométrica
     │                         │
     └────────┬────────────────┘
              │
              ▼
         FIN: Aplicar Controles Específicos de Clasificación
```

---

### APÉNDICE B: GLOSARIO DE TÉRMINOS

| Término | Definición |
|------|------------|
| **Sistema de IA** | Un sistema basado en máquinas diseñado para operar con niveles variables de autonomía y que puede exhibir adaptabilidad después de la implementación y que, para objetivos explícitos o implícitos, infiere, a partir de la entrada que recibe, cómo generar salidas como predicciones, contenido, recomendaciones o decisiones que pueden influir en entornos físicos o virtuales (Reglamento de IA de la UE Art. 3(1)) |
| **Anexo I** | Lista de legislación de armonización de la Unión donde los sistemas de IA utilizados como componentes de seguridad se consideran de alto riesgo (maquinaria, juguetes, dispositivos médicos, etc.) |
| **Anexo III** | Lista de 8 casos de uso de sistemas de IA de alto riesgo (ID biométrica, infraestructura crítica, empleo, servicios esenciales, aplicación de la ley, migración, justicia, educación) |
| **Anexo XIII** | Criterios para clasificación de modelos GPAI con riesgo sistémico (parámetros, computación, conjunto de datos, modalidades, alcance, cuota de mercado) |
| **Desplegador** | Cualquier persona natural o jurídica, autoridad pública, agencia u otro organismo que utilice un sistema de IA bajo su autoridad (Reglamento de IA de la UE Art. 3(4)) |
| **Proveedor Downstream** | Proveedor que utiliza un modelo de IA de Propósito General para desarrollar un sistema de IA para colocación en el mercado o puesta en servicio |
| **FLOP (Operación de Punto Flotante)** | Unidad de trabajo computacional; 10^25 FLOPs es el umbral para designación de riesgo sistémico GPAI |
| **Modelo de IA Libre y de Código Abierto** | Modelo de IA lanzado bajo una licencia libre y de código abierto que permite acceso, uso, modificación y distribución, con parámetros del modelo e información de entrenamiento disponibles públicamente |
| **Derechos Fundamentales** | Derechos reconocidos por la Carta de Derechos Fundamentales de la UE, incluyendo dignidad, libertades, igualdad, solidaridad, derechos de los ciudadanos y justicia |
| **Modelo de IA de Propósito General (GPAI)** | Un modelo de IA que muestra generalidad significativa y es capaz de realizar competentemente una amplia gama de tareas distintas independientemente de la forma en que se coloque el modelo en el mercado y que puede integrarse en una variedad de sistemas o aplicaciones downstream (Reglamento de IA de la UE Art. 3(63)) |
| **GPAI con Riesgo Sistémico** | Un modelo GPAI que tiene capacidades de alto impacto evaluadas sobre la base de herramientas y metodologías técnicas apropiadas, o que ha sido designado como tal por la Oficina Europea de IA |
| **Sistema de IA de Alto Riesgo** | Un sistema de IA que es: (1) utilizado como componente de seguridad de un producto cubierto por legislación de armonización de la Unión (Anexo I), o (2) cae en una de las 8 categorías de casos de uso en el Anexo III y representa un riesgo significativo de daño |
| **Sistema de IA de Riesgo Limitado** | Un sistema de IA no clasificado como alto riesgo pero sujeto a obligaciones específicas de transparencia bajo el Artículo 50 (chatbots, reconocimiento de emociones, deepfakes, categorización biométrica) |
| **Sistema de IA de Riesgo Mínimo** | Un sistema de IA que no está prohibido, es de alto riesgo o de riesgo limitado; sujeto solo a códigos de conducta voluntarios y cumplimiento general |
| **Colocación en el Mercado** | La primera puesta a disposición de un sistema de IA o modelo de IA de propósito general en el mercado de la Unión |
| **Práctica Prohibida** | Una práctica de IA explícitamente prohibida bajo el Artículo 5 del Reglamento de IA de la UE (8 prácticas específicas) |
| **Proveedor** | Cualquier persona natural o jurídica, autoridad pública, agencia u otro organismo que desarrolle un sistema de IA o modelo de IA de propósito general, o haga desarrollar un sistema de IA, y lo coloque en el mercado o lo ponga en servicio bajo su propio nombre o marca (Reglamento de IA de la UE Art. 3(3)) |
| **Puesta en Servicio** | El suministro de un sistema de IA para primer uso directamente al desplegador o para uso propio en la Unión para su propósito previsto |
| **Componente de Seguridad** | Un componente de un producto que cumple una función de seguridad para ese producto o cuyo fallo o mal funcionamiento pone en peligro la salud y seguridad de personas o propiedad |
| **Incidente Grave** | Cualquier incidente o mal funcionamiento de un sistema de IA que directa o indirectamente conduzca a muerte, daño grave a la salud, interrupción grave e irreversible de infraestructura crítica, o infracción de derechos fundamentales (Reglamento de IA de la UE Art. 3(49)) |
| **Riesgo Significativo de Daño** | Riesgo que cumple criterios de umbral para intensidad, alcance, vulnerabilidad, reversibilidad y probabilidad de daño a la salud, seguridad o derechos fundamentales |
| **Modificación Sustancial** | Un cambio a un sistema de IA después de su colocación en el mercado o puesta en servicio que no está previsto o planificado en la evaluación de conformidad inicial y afecta el cumplimiento de los requisitos o resulta en una modificación al propósito previsto |
| **Riesgo Sistémico** | Riesgo que es específico de las capacidades de alto impacto de modelos de IA de propósito general, teniendo un impacto significativo en el mercado de la Unión debido a su alcance, o debido a efectos negativos reales o razonablemente previsibles sobre la salud pública, seguridad, derechos fundamentales o la sociedad en su conjunto |
| **Obligaciones de Transparencia** | Requisitos bajo el Artículo 50 para informar a personas naturales que están interactuando con un sistema de IA (chatbots, deepfakes, etc.) |
| **Legislación de Armonización de la Unión** | Legislación de la UE enumerada en el Anexo I que armoniza condiciones para comercialización de productos (maquinaria, juguetes, dispositivos médicos, aviación, automotriz, etc.) |
| **Proveedor Upstream** | Proveedor de un modelo de IA de Propósito General que es utilizado por proveedores downstream para desarrollar sistemas de IA |

---

### APÉNDICE C: REFERENCIAS CRUZADAS A OTROS PROCEDIMIENTOS

Este apéndice mapea relaciones entre este procedimiento y otros procedimientos de cumplimiento de IA.

#### C.1 Dependencias de Procedimientos

```
                    ┌─────────────────────────────┐
                    │  POL-AI-001                 │
                    │  Política de Gobernanza IA  │
                    │  (Política Padre)           │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ PROC-AI-CLS-001   │   │ PROC-AI-RM-001    │   │ PROC-AI-DATA-001  │
│ Clasificación     │──▶│ Gestión Riesgos   │◀──│ Gobernanza Datos  │
│ (ESTE PROCEDIM.)  │   │                   │   │                   │
└───────────────────┘   └─────────┬─────────┘   └───────────────────┘
        │                         │                         │
        │                         ▼                         │
        │               ┌───────────────────┐               │
        └──────────────▶│ PROC-AI-DOC-001   │◀──────────────┘
                        │ Documentación     │
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-INC-001   │
                        │ Respuesta Incidentes│
                        └───────────────────┘
```

#### C.2 Matriz de Interfaz de Procedimientos

| Desde Este Procedimiento | A Procedimiento | Interfaz | Cuándo |
|---------------------|--------------|-----------|------|
| Paso 1.1-1.5 | PROC-AI-RM-001 | La clasificación informa el alcance de evaluación inicial de riesgos | Después de clasificación completa |
| Paso 2.1 (Registro) | PROC-AI-DOC-001 | El registro alimenta requisitos de documentación técnica | Continuo |
| Paso 5.2 (Riesgo Sistémico GPAI) | PROC-AI-RM-001 | Riesgos sistémicos GPAI añadidos al registro de riesgos | Al clasificar GPAI |
| Paso 10.3 (Notificación Autoridades) | PROC-AI-INC-001 | Implementación de sistema prohibido activa incidente | Al descubrir incumplimiento |
| Clasificación Alto Riesgo | PROC-AI-QMS-001 | Designación de alto riesgo activa requisitos QMS | Después de clasificación |
| Clasificación GPAI | PROC-AI-VENDOR-001 | Diligencia debida de proveedor upstream GPAI | Al usar GPAI de terceros |

#### C.3 Referencia Cruzada de Plantillas

| Plantilla de Este Procedimiento | Utilizada Por | Propósito |
|------------------------------|---------|---------|
| TMP-AI-CLS-002 (Registro Sistemas IA) | PROC-AI-RM-001 | Registro de riesgos vincula a registro de clasificación |
| TMP-AI-CLS-002 (Registro Sistemas IA) | PROC-AI-DOC-001 | Alcance de documentación técnica basado en clasificación |
| TMP-AI-CLS-003 (Libro GPAI) | PROC-AI-VENDOR-001 | Evaluación de proveedores para proveedores GPAI |

---

### APÉNDICE D: TARJETA DE REFERENCIA RÁPIDA

#### Referencia Rápida de Clasificación

**PRÁCTICAS PROHIBIDAS (Artículo 5) - DETENER INMEDIATAMENTE:**

1. ❌ Manipulación subliminal
2. ❌ Explotación de vulnerabilidades
3. ❌ Puntuación social por autoridades
4. ❌ ID biométrica en tiempo real (con excepciones)
5. ❌ Reconocimiento de emociones en lugar de trabajo/educación
6. ❌ Categorización biométrica (atributos sensibles)
7. ❌ **Scraping de bases de datos de reconocimiento facial (internet/CCTV)**
8. ❌ Perfilado criminal sin supervisión humana

**CLASIFICACIÓN DE ALTO RIESGO:**

- Anexo I: Componente de seguridad + evaluación terceros + producto Anexo I = ALTO RIESGO
- Anexo III: Coincidencia de caso de uso + riesgo significativo de daño = ALTO RIESGO

**CASOS DE USO ANEXO III:**

1. Identificación biométrica
2. Infraestructura crítica
3. Educación
4. Empleo
5. Servicios esenciales
6. Aplicación de la ley
7. Migración/asilo
8. Justicia/democracia

**CLASIFICACIÓN GPAI:**

- GPAI Estándar: Obligaciones Artículos 53-54
- GPAI Riesgo Sistémico: Computación de entrenamiento ≥ 10^25 FLOPs O designación Anexo XIII
- Libre/Código Abierto: Exenciones si es verdaderamente abierto + sin riesgo sistémico

**CONTACTOS CLAVE:**

| Necesidad | Contacto | Para |
|------|---------|-----|
| Preguntas de clasificación | Gestor Programa Reglamento IA | [Email] |
| Opinión legal práctica prohibida | Director Legal | [Email] |
| Aprobación alto riesgo | Comité Gobernanza IA | [Lista Distribución] |
| Clasificación GPAI | Oficial Cumplimiento GPAI | [Email] |

**PLAZOS CLAVE:**

| Actividad | Plazo |
|----------|----------|
| Evaluación prácticas prohibidas | 1 semana desde inicio |
| Clasificación completa | ≤ 14 días desde inicio |
| Reclasificación (modificación sustancial) | Antes de implementación |
| Revisión anual | Anualmente para todos los sistemas implementados |

**ESCALAMIENTO:**

- Práctica prohibida → CLO + Comité Gobernanza IA (inmediato)
- Clasificación alto riesgo → Comité Gobernanza IA (antes de implementación)
- Caso limítrofe → Gestor Programa Reglamento IA (dentro de 3 días)

---

### APÉNDICE E: LISTA DE VERIFICACIÓN DE PRÁCTICAS PROHIBIDAS ARTÍCULO 5

Este apéndice proporciona el texto legal completo y exacto de todas las 8 prácticas prohibidas del Artículo 5(1) del Reglamento de IA de la UE, con orientación de evaluación.

#### Práctica 1: Técnicas Subliminales (Artículo 5(1)(a))

**Texto Legal:**
"La colocación en el mercado, la puesta en servicio para este propósito específico, o el uso de un sistema de IA que despliegue técnicas subliminales más allá de la conciencia de una persona con el objetivo de o el efecto de distorsionar materialmente el comportamiento de una persona o grupo de personas menoscabando apreciablemente su capacidad de tomar una decisión informada, causando así que tomen una decisión que de otro modo no habrían tomado de manera que cause o sea razonablemente probable que cause a esa persona, otra persona o grupo de personas un daño significativo."

**Preguntas de Evaluación:**
- ¿Opera el sistema de IA por debajo de la conciencia?
- ¿Manipula la toma de decisiones sin conocimiento del usuario?
- ¿Podría causar daño significativo?

**Ejemplos:**
- ❌ Prohibido: IA que utiliza señales audio/visuales subliminales para influir en compras
- ✅ Permitido: Sistemas de recomendación transparentes

---

#### Práctica 2: Explotación de Vulnerabilidades (Artículo 5(1)(b))

**Texto Legal:**
"La colocación en el mercado, la puesta en servicio para este propósito específico, o el uso de un sistema de IA que explote cualquiera de las vulnerabilidades de una persona natural o grupo específico de personas debido a su edad, discapacidad o situación social o económica específica, con el objetivo de o el efecto de distorsionar materialmente el comportamiento de esa persona o una persona perteneciente a ese grupo de manera que cause o sea razonablemente probable que cause a esa persona u otra persona un daño significativo."

**Preguntas de Evaluación:**
- ¿El sistema se dirige a grupos vulnerables (niños, ancianos, discapacitados)?
- ¿Explota vulnerabilidades para manipular el comportamiento?
- ¿Podría causar daño significativo?

**Ejemplos:**
- ❌ Prohibido: Juguetes de IA que explotan la credulidad de niños para hacer compras
- ❌ Prohibido: IA dirigida a ancianos con deterioro cognitivo para productos financieros
- ✅ Permitido: IA asistiva con salvaguardas apropiadas

---

#### Práctica 3: Puntuación Social por Autoridades Públicas (Artículo 5(1)(c))

**Texto Legal:**
"La colocación en el mercado, la puesta en servicio para este propósito específico, o el uso de un sistema de IA por autoridades públicas o en su nombre para la evaluación o clasificación de la confiabilidad de personas naturales durante un cierto período de tiempo basado en su comportamiento social o características personales o de personalidad conocidas, inferidas o predichas, con la puntuación social conduciendo a uno o ambos de lo siguiente:

(i) tratamiento perjudicial o desfavorable de ciertas personas naturales o grupos enteros de ellas en contextos sociales que no están relacionados con los contextos en los que se generaron o recopilaron originalmente los datos;

(ii) tratamiento perjudicial o desfavorable de ciertas personas naturales o grupos enteros de ellas que es injustificado o desproporcionado a su comportamiento social o su gravedad."

**Preguntas de Evaluación:**
- ¿Es utilizado por o para autoridades públicas?
- ¿Evalúa confiabilidad basada en comportamiento social?
- ¿Conduce a tratamiento perjudicial en contextos no relacionados?

**Ejemplos:**
- ❌ Prohibido: Sistema de puntuación de crédito social gubernamental
- ✅ Permitido: Puntuación crediticia por entidades privadas (no es puntuación social)

---

#### Práctica 4: Identificación Biométrica Remota en Tiempo Real (Artículo 5(1)(d))

**Texto Legal:**
"El uso de sistemas de identificación biométrica remota 'en tiempo real' en espacios públicamente accesibles con el propósito de aplicación de la ley, a menos que y en la medida en que dicho uso sea estrictamente necesario para uno de los siguientes objetivos:

(i) la búsqueda dirigida de víctimas potenciales específicas de secuestro, trata de seres humanos o explotación sexual de seres humanos, así como la búsqueda de personas desaparecidas;

(ii) la prevención de una amenaza específica, sustancial e inminente a la vida o seguridad física de personas naturales o una amenaza genuina y presente o genuina y previsible de ataque terrorista;

(iii) la localización o identificación de una persona sospechosa de haber cometido un delito, con el propósito de realizar una investigación o enjuiciamiento penal o ejecutar una pena penal por delitos referidos en el Anexo II y punibles en el Estado miembro concerniente con una pena de prisión o una orden de detención por un período máximo de al menos cuatro años."

**Preguntas de Evaluación:**
- ¿Es identificación biométrica remota en tiempo real?
- ¿Se utiliza en espacios públicamente accesibles?
- ¿Es con fines de aplicación de la ley?
- ¿Aplica alguna de las tres excepciones?

**Se Aplican Excepciones Cuando:**
- Estrictamente necesario para el objetivo declarado
- Autorización previa obtenida (judicial o autoridad independiente)
- Salvaguardas apropiadas implementadas

**Ejemplos:**
- ❌ Prohibido: Reconocimiento facial en tiempo real para vigilancia pública general
- ✅ Permitido (con autorización): Reconocimiento facial en tiempo real para encontrar niño desaparecido
- ✅ Permitido (con autorización): Reconocimiento facial en tiempo real para prevenir ataque terrorista inminente

---

#### Práctica 5: Categorización Biométrica que Infiere Atributos Sensibles (Artículo 5(1)(e))

**Texto Legal:**
"La colocación en el mercado, la puesta en servicio para este propósito específico, o el uso de sistemas de IA que creen o expandan bases de datos de reconocimiento facial mediante el scraping no dirigido de imágenes faciales de internet o grabaciones CCTV."

**Preguntas de Evaluación:**
- ¿El sistema infiere atributos sensibles de datos biométricos?
- ¿Son los atributos inferidos: raza, opiniones políticas, afiliación sindical, creencias religiosas/filosóficas, vida sexual u orientación sexual?
- ¿Es utilizado por aplicación de la ley?

**Excepciones:**
- Etiquetado o filtrado de conjuntos de datos biométricos legalmente adquiridos
- Categorización de aplicación de la ley para investigaciones específicas (con salvaguardas)

**Ejemplos:**
- ❌ Prohibido: IA que infiere raza u orientación sexual de imágenes faciales para aplicación de la ley
- ✅ Permitido: Sistemas de verificación de edad (la edad no es atributo sensible)

---

#### Práctica 6: Reconocimiento de Emociones en Lugar de Trabajo e Instituciones Educativas (Artículo 5(1)(f))

**Texto Legal:**
"La colocación en el mercado, la puesta en servicio para este propósito específico, o el uso de sistemas de IA para inferir emociones de una persona natural en las áreas de lugar de trabajo e instituciones educativas, excepto cuando el uso del sistema de IA esté destinado a ser implementado o puesto en el mercado por razones médicas o de seguridad."

**Preguntas de Evaluación:**
- ¿El sistema reconoce o infiere emociones?
- ¿Se utiliza en lugar de trabajo o instituciones educativas?
- ¿Es por razones médicas o de seguridad?

**Excepciones Médicas/de Seguridad:**
- Detección de somnolencia del conductor por seguridad
- Diagnóstico médico de condiciones emocionales

**Ejemplos:**
- ❌ Prohibido: Reconocimiento de emociones para evaluar desempeño de empleados
- ❌ Prohibido: Reconocimiento de emociones para evaluar compromiso de estudiantes en aula
- ✅ Permitido: Reconocimiento de emociones para sistemas de seguridad del conductor
- ✅ Permitido: Reconocimiento de emociones para diagnosticar condiciones de salud mental

---

#### Práctica 7: Scraping de Bases de Datos de Reconocimiento Facial (Artículo 5(1)(g)) [CORREGIDO]

**Texto Legal:**
"La colocación en el mercado, la puesta en servicio para este propósito específico, o el uso de sistemas de IA que creen o expandan bases de datos de reconocimiento facial mediante el scraping no dirigido de imágenes faciales de internet o grabaciones CCTV."

**Preguntas de Evaluación:**
- ¿El sistema crea o expande bases de datos de reconocimiento facial?
- ¿Utiliza scraping no dirigido de internet o CCTV?
- ¿Es el scraping dirigido o no dirigido?

**Distinción Clave:**
- **Scraping no dirigido:** Prohibido (recolección masiva sin propósito específico)
- **Recolección dirigida:** Permitido (investigación específica con base legal)

**Ejemplos:**
- ❌ Prohibido: IA recopilando millones de rostros de redes sociales para construir base de datos de reconocimiento facial
- ❌ Prohibido: IA recopilando grabaciones CCTV para construir base de datos facial
- ✅ Permitido: Recolección dirigida de imágenes de sospechoso específico con orden judicial

---

#### Práctica 8: Evaluación de Riesgo de Delitos Basada en Perfilado (Artículo 5(1)(h))

**Texto Legal:**
"La colocación en el mercado, la puesta en servicio para este propósito específico, o el uso de sistemas de IA para evaluar el riesgo de que una persona natural cometa delitos o reincida no basándose únicamente en el perfilado de personas naturales como se refiere en el Artículo 3(4) de la Directiva (UE) 2016/680 o la evaluación de rasgos y características de personalidad o el comportamiento criminal pasado de personas naturales o grupos."

**Preguntas de Evaluación:**
- ¿El sistema evalúa riesgo de comisión de delitos/reincidencia?
- ¿Se basa únicamente en perfilado, rasgos de personalidad o comportamiento pasado?
- ¿O aumenta la evaluación humana con factores adicionales?

**Prohibido Cuando:**
- La evaluación se basa **únicamente** en perfilado automatizado
- Sin supervisión humana o factores adicionales

**Permitido Cuando:**
- La IA aumenta la evaluación humana (no es base única)
- Se consideran factores objetivos adicionales
- Capacidad de revisión y anulación humana

**Ejemplos:**
- ❌ Prohibido: Predicción de reincidencia completamente automatizada basada solo en perfilado
- ✅ Permitido: Herramienta de evaluación de riesgo que proporciona información adicional a jueces (tomador de decisiones humano)

---

**INSTRUCCIONES DE USO DE LA LISTA DE VERIFICACIÓN:**

Para cada sistema de IA, evaluar contra TODAS las 8 prácticas prohibidas:

1. Leer el texto legal exacto
2. Responder las preguntas de evaluación
3. Revisar ejemplos para orientación
4. Documentar justificación para determinación
5. Si aplica CUALQUIER práctica → clasificación PROHIBIDA
6. Si es limítrofe → Escalar al CLO para opinión legal vinculante
7. Documentar opinión del CLO en registro de clasificación

**CRÍTICO:** Si aplica cualquier práctica prohibida, el desarrollo e implementación deben cesar inmediatamente. Sin excepciones.

---

**FIN DEL PROCEDIMIENTO PROC-AI-CLS-001**

---

## HISTORIAL DE REVISIONES

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 1.0 | [Fecha] | [Nombre] | Desarrollo inicial del procedimiento |
| 2.0 | [Fecha] | [Nombre] | Añadida clasificación GPAI (Sección 5); Corregido texto Artículo 5(1)(g); Añadidos Apéndices A-E; Mejorados mecanismos de control; Añadida biblioteca KPI |
| | | | |

---

## APROBACIÓN Y AUTORIZACIÓN

| Rol | Nombre | Cargo | Firma | Fecha |
|---|---|---|---|---|
| **Preparado Por** | [Nombre] | Gestor del Programa del Reglamento de IA | __________ | ________ |
| **Revisado Por** | [Nombre] | Director Legal | __________ | ________ |
| **Revisado Por** | [Nombre] | Oficial de Cumplimiento GPAI | __________ | ________ |
| **Aprobado Por** | [Nombre] | Presidente del Comité de Gobernanza de IA | __________ | ________ |

---

## CONTROL DEL DOCUMENTO

**Estado del Documento:** [Borrador/Aprobado]
**Clasificación:** [Público/Interno/Confidencial]
**Distribución:** Gestor del Programa del Reglamento de IA, Propietarios de Sistemas de IA, Comité de Gobernanza de IA, Oficial de Cumplimiento GPAI, Cumplimiento, Auditoría Interna
**Retención:** 10 años (según Reglamento de IA de la UE)
**Frecuencia de Revisión:** Anualmente o ante cambio regulatorio
**Fecha de Próxima Revisión:** [Fecha]

---

**FIN DEL DOCUMENTO**
