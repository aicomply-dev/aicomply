# PROC-AI-CA-001: Procedimiento de Evaluación de Conformidad

**ID del Procedimiento:** PROC-AI-CA-001
**Nombre del Procedimiento:** Procedimiento de Evaluación de Conformidad de la Ley de IA de la UE
**Estándar:** STD-AI-010: Estándar de Evaluación de Conformidad
**Cubre Controles:** CA-001, CA-002, CA-003, CA-004, CA-005, CA-006, CA-007, CA-008, CA-009, CA-010, CA-011, CA-012, CA-013
**Fecha de Vigencia:** [A completar]
**Última Actualización:** [A completar]
**Próxima Fecha de Revisión:** [A completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## TABLA DE CONTENIDOS

1. [Propósito y Alcance](#1-propósito-y-alcance)
2. [Roles y Responsabilidades](#2-roles-y-responsabilidades)
3. [Marco Regulatorio](#3-marco-regulatorio)
4. [Vías de Evaluación de Conformidad](#4-vías-de-evaluación-de-conformidad)
5. [Procedimiento Paso a Paso](#5-procedimiento-paso-a-paso)
   - [Fase 1: Planificación de la Evaluación](#fase-1-planificación-de-la-evaluación)
   - [Fase 2: Selección del Organismo Notificado](#fase-2-selección-del-organismo-notificado)
   - [Fase 3: Revisión de la Documentación Técnica](#fase-3-revisión-de-la-documentación-técnica)
   - [Fase 4: Evaluación del SGC](#fase-4-evaluación-del-sgc)
   - [Fase 5: Pruebas y Validación](#fase-5-pruebas-y-validación)
   - [Fase 6: Declaración de Conformidad](#fase-6-declaración-de-conformidad)
   - [Fase 7: Marcado CE](#fase-7-marcado-ce)
   - [Fase 8: Mantenimiento de la Conformidad Post-Comercialización](#fase-8-mantenimiento-de-la-conformidad-post-comercialización)
6. [Mecanismos de Control](#6-mecanismos-de-control)
7. [Indicadores Clave de Rendimiento](#7-indicadores-clave-de-rendimiento)
8. [Requisitos de Documentación](#8-requisitos-de-documentación)
9. [Revisión y Auditoría](#9-revisión-y-auditoría)
10. [Gestión de No Cumplimiento](#10-gestión-de-no-cumplimiento)
11. [Documentos Relacionados](#11-documentos-relacionados)
12. [Apéndices](#12-apéndices)

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece el proceso paso a paso para realizar evaluaciones de conformidad de sistemas de IA de alto riesgo en cumplimiento de los Artículos 43 (Evaluación de Conformidad), 47 (Declaración de Conformidad de la UE) y 48 (Marcado CE) de la Ley de IA de la UE. El procedimiento garantiza que los sistemas de IA cumplan con todos los requisitos aplicables antes de ser comercializados o puestos en servicio.

La evaluación de conformidad demuestra que el sistema de IA:
- Cumple con todos los requisitos obligatorios de la Ley de IA de la UE
- Ha sido sometido a una evaluación técnica y del sistema de gestión de calidad apropiada
- Es seguro y respeta los derechos fundamentales
- Puede ser comercializado legalmente en el mercado de la UE con el marcado CE

### 1.2 Alcance

Este procedimiento se aplica a:
- Todos los sistemas de IA de alto riesgo según se define en el Anexo III de la Ley de IA de la UE
- Sistemas de IA destinados a ser utilizados como componentes de seguridad de productos cubiertos por la legislación de armonización de la UE
- Sistemas de IA que requieren evaluación de conformidad por terceros según el Artículo 43(1)
- Sistemas de identificación biométrica (evaluación obligatoria por terceros)
- Proveedores que comercializan sistemas de IA de alto riesgo en el mercado de la UE
- Proveedores que ponen en servicio sistemas de IA de alto riesgo bajo su propio nombre o marca comercial

Este procedimiento no se aplica a:
- Sistemas de IA de riesgo mínimo (no se requiere evaluación de conformidad)
- Sistemas de IA de riesgo limitado (solo obligaciones de transparencia, cubiertas por PROC-AI-TRANS-001)
- Sistemas de IA sujetos solo a control interno (Anexo VI) sin participación de organismo notificado
- Sistemas de IA de terceros adquiridos tal cual (obligaciones del desplegador cubiertas por PROC-AI-DEPLOY-001)

### 1.3 Propietario del Procedimiento y Contactos

| Rol | Nombre | Título | Contacto |
|------|------|-------|---------|
| **Propietario del Procedimiento** | [Nombre] | Responsable de Evaluación de Conformidad | [Email/Teléfono] |
| **Escalamiento** | [Nombre] | Director de Cumplimiento | [Email/Teléfono] |
| **Gobernanza** | [Nombre] | Presidente del Comité de Gobernanza de IA | [Email/Teléfono] |

---

## 2. ROLES Y RESPONSABILIDADES

### 2.1 Roles Clave

| Rol | Responsabilidad | Autoridad |
|------|---|---|
| **Responsable de Evaluación de Conformidad** | Gestionar y ejecutar el proceso de evaluación de conformidad; coordinar con organismo notificado; mantener documentación de evaluación | Aprobar planes de evaluación; dar visto bueno a la preparación para conformidad |
| **Propietario del Sistema de IA / Proveedor** | Asegurar que el sistema de IA cumple requisitos; proporcionar documentación técnica; implementar acciones correctivas | Aceptar no conformidades residuales (solo baja gravedad) |
| **Director de Cumplimiento** | Supervisión de la evaluación de conformidad; aprobar Declaración de Conformidad; firmar documentos legales | Firmar Declaración de Conformidad de la UE; escalar a Directorio |
| **Responsable del Sistema de Gestión de Calidad** | Asegurar que el SGC cumple requisitos del Anexo IX; facilitar evaluación del SGC; implementar acciones correctivas del SGC | Aprobar documentación del SGC; autorizar cambios del SGC |
| **Responsable de Documentación Técnica** | Preparar y mantener documentación técnica según Anexo IV; asegurar completitud y precisión | Aprobar paquetes de documentación técnica |
| **Responsable de Pruebas y Validación** | Realizar pruebas de conformidad; validar rendimiento del sistema de IA; documentar resultados de pruebas | Aprobar planes y resultados de pruebas |
| **Representante del Organismo Notificado** | Realizar evaluación por terceros (si aplica); revisar documentación técnica; evaluar SGC; emitir certificados | Emitir certificados de conformidad; realizar auditorías de vigilancia |
| **Asesor Legal** | Revisar Declaración de Conformidad; asegurar cumplimiento legal; asesorar sobre requisitos de marcado CE | Aprobar declaraciones legales; asesorar sobre responsabilidad |
| **Comité de Gobernanza de IA** | Revisar y aprobar decisiones de conformidad; monitorear progreso de evaluación; aprobar comercialización | Aprobar/rechazar comercialización; bloquear sistemas no conformes |

### 2.2 Matriz RACI

| Actividad | Resp. CA | Propietario IA | DCC | Resp. SGC | Resp. Doc Téc | Resp. Pruebas | Org. Notif. | Legal | Gob. IA |
|----------|---|---|---|---|---|---|---|---|---|
| Planificación de evaluación | A | R | C | C | C | C | I | C | I |
| Determinación de vía | A | C | C | I | I | I | C | C | C |
| Selección organismo notificado | A | C | C | I | I | I | R | C | C |
| Revisión doc técnica | C | R | I | C | A | C | R* | I | I |
| Evaluación SGC | C | C | I | A | I | I | R* | I | C |
| Pruebas y validación | C | R | I | C | C | A | R* | I | I |
| Resolución no conformidades | A | R | C | R | R | R | C | C | C |
| Declaración de Conformidad | A | C | R | C | C | C | C | R | C |
| Aplicación marcado CE | A | R | C | I | I | I | C | C | I |
| Monitoreo post-comercialización | C | R | I | C | C | C | C | I | C |
| Activadores re-evaluación | A | R | C | C | C | C | C | I | C |

**Leyenda:** A=Responsable (Accountable), R=Ejecutor (Responsible), C=Consultado, I=Informado
**Nota:** R* = Responsable solo si se requiere evaluación por terceros

---

## 3. MARCO REGULATORIO

### 3.1 Requisitos de la Ley de IA de la UE

Este procedimiento implementa las siguientes disposiciones de la Ley de IA de la UE:

#### Artículo 43: Evaluación de Conformidad

**Artículo 43(1) - Procedimientos de Evaluación:**
- Sistemas de IA de alto riesgo en Anexo III Sección 1 (identificación biométrica) → **Evaluación obligatoria por terceros (Anexo VII)**
- Otros sistemas de IA de alto riesgo en Anexo III → **Control interno (Anexo VI)** O **Evaluación por terceros (Anexo VII)** a elección del proveedor
- La evaluación cubre ambos:
  - **Sistema de Gestión de Calidad (SGC)** según Artículo 17 y Anexo IX
  - **Documentación Técnica** según Artículo 11 y Anexo IV

**Artículo 43(2) - Normas Armonizadas:**
- El cumplimiento de normas armonizadas confiere **presunción de conformidad**
- Reduce la necesidad de evaluación detallada de elementos conformes
- Debe publicarse en el Diario Oficial de la Unión Europea
- Voluntario pero muy recomendado

**Artículo 43(3) - Especificaciones Comunes:**
- Cuando no existan normas armonizadas o sean insuficientes
- El cumplimiento de especificaciones comunes confiere presunción de conformidad
- Establecidas por actos de ejecución de la Comisión

**Artículo 43(4) - Documentación Técnica:**
- El proveedor demuestra cumplimiento mediante documentación técnica
- La documentación debe estar disponible durante 10 años después de que el sistema se comercialice
- Debe mantenerse actualizada durante todo el ciclo de vida del sistema

**Artículo 43(5) - Finalización de la Evaluación:**
- La evaluación de conformidad demuestra cumplimiento con Capítulo III Sección 2
- La evaluación exitosa permite la emisión de la Declaración de Conformidad

#### Artículo 47: Declaración de Conformidad de la UE

**Artículo 47(1) - Contenido de la Declaración:**
- El proveedor redacta una Declaración de Conformidad escrita según **Anexo V**
- La Declaración certifica que el sistema de IA cumple todos los requisitos del Capítulo III Sección 2
- El proveedor mantiene la Declaración disponible durante 10 años

**Artículo 47(2) - Actualizaciones de la Declaración:**
- El proveedor debe mantener la Declaración actualizada
- Actualizar cuando ocurran modificaciones sustanciales
- Actualizar cuando cambien normas armonizadas o especificaciones comunes
- Actualizar cuando cambien las capacidades del sistema

**Artículo 47(3) - Persona Responsable Única:**
- La Declaración debe identificar una única persona natural o jurídica responsable
- Si el proveedor no está establecido en la UE: representante autorizado o importador

**Artículo 47(4) - Requisitos de Idioma:**
- Declaración en idioma aceptado por el organismo notificado (si aplica)
- Traducción al(los) idioma(s) oficial(es) del Estado miembro donde se comercializa el sistema

**Artículo 47(5) - Traducciones:**
- El proveedor es responsable de la precisión de las traducciones
- La versión en idioma original prevalece en caso de discrepancia

#### Artículo 48: Marcado CE

**Artículo 48(1) - Requisito de Marcado CE:**
- Sistemas de IA de alto riesgo que cumplen → se fijan con marcado CE
- El marcado CE indica conformidad con la Ley de IA de la UE

**Artículo 48(2) - Principios Generales:**
- Marcado CE regido por Reglamento (CE) N.º 765/2008, Artículo 30
- Visible, legible e indeleble
- Fijado antes de que el sistema sea comercializado o puesto en servicio

**Artículo 48(3) - Número del Organismo Notificado:**
- Si el organismo notificado intervino en la evaluación de conformidad → el número de identificación aparece junto al marcado CE

**Artículo 48(4) - Marcado Digital:**
- Sistemas de IA sin interfaz física → Marcado CE en documentación acompañante o interfaz digital
- Accesible por desplegadores y autoridades

**Artículo 48(5) - Prohibición de Marcados Engañosos:**
- Se permiten otros marcados si no reducen visibilidad/legibilidad del marcado CE
- No deben crear confusión con el marcado CE

### 3.2 Regulaciones de Apoyo

| Regulación | Relevancia | Disposiciones Clave |
|------------|-----------|----------------|
| **Reglamento (CE) N.º 765/2008** | Acreditación y vigilancia del mercado | Reglas de marcado CE; marco de organismos notificados |
| **Decisión N.º 768/2008/CE** | Marco común para comercialización de productos | Módulos de evaluación de conformidad; requisitos de declaración |
| **Reglamento (UE) 2019/1020** | Vigilancia del mercado y cumplimiento de productos | Poderes de las autoridades; procedimientos de incumplimiento |
| **RGPD (UE 2016/679)** | Protección de datos | Si la IA procesa datos personales; privacidad por diseño |

### 3.3 Anexos de Evaluación de Conformidad

| Anexo | Título | Propósito |
|-------|-------|---------|
| **Anexo IV** | Documentación Técnica | Especifica contenido del paquete de documentación técnica |
| **Anexo V** | Declaración de Conformidad de la UE | Plantilla y contenido requerido para la Declaración |
| **Anexo VI** | Procedimiento de Control Interno | Evaluación basada solo en control interno (sin organismo notificado) |
| **Anexo VII** | Evaluación de Conformidad con Organismo Notificado | Requisitos del procedimiento de evaluación por terceros |
| **Anexo IX** | Sistema de Gestión de Calidad | Requisitos para SGC que cubre el ciclo de vida del sistema de IA |

---

## 4. VÍAS DE EVALUACIÓN DE CONFORMIDAD

### 4.1 Árbol de Decisión: ¿Qué Vía se Aplica?

```
INICIO: Sistema de IA de Alto Riesgo Identificado
│
├─ ¿Es el sistema un sistema de identificación biométrica (Anexo III Sección 1)?
│  │
│  ├─ SÍ → VÍA OBLIGATORIA: Anexo VII (Evaluación por Terceros)
│  │        - Participación del organismo notificado requerida
│  │        - Evaluación SGC + Revisión documentación técnica
│  │        - Certificado emitido por organismo notificado
│  │        - Marcado CE con número del organismo notificado
│  │        → Continuar a Sección 4.2
│  │
│  └─ NO → Continuar
│
├─ ¿Está el sistema en otras categorías del Anexo III (Secciones 2-8)?
│  │
│  ├─ SÍ → ELECCIÓN DEL PROVEEDOR:
│  │        │
│  │        ├─ OPCIÓN A: Anexo VI (Control Interno)
│  │        │   - El proveedor realiza su propia evaluación
│  │        │   - No se requiere organismo notificado
│  │        │   - El proveedor prepara documentación técnica
│  │        │   - El proveedor emite Declaración de Conformidad
│  │        │   - Marcado CE sin número de organismo notificado
│  │        │   → Continuar a Sección 4.3
│  │        │
│  │        └─ OPCIÓN B: Anexo VII (Evaluación por Terceros)
│  │            - El proveedor elige participación voluntaria de organismo notificado
│  │            - Igual que vía de sistemas biométricos
│  │            - Mayor confianza del mercado
│  │            → Continuar a Sección 4.2
│  │
│  └─ NO → No es alto riesgo; este procedimiento no aplica
│
└─ FIN: Vía Determinada
```

### 4.2 Vía Anexo VII: Evaluación por Terceros con Organismo Notificado

**Cuándo se Requiere:**
- **Obligatorio:** Sistemas de identificación y categorización biométrica (Anexo III Sección 1)
- **Opcional:** Cualquier otro sistema de IA de alto riesgo (elección del proveedor)

**Visión General del Proceso:**

```
┌────────────────────────────────────────────────────────────────┐
│          ANEXO VII: EVALUACIÓN DE CONFORMIDAD POR TERCEROS     │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ETAPA 1: EVALUACIÓN SGC (Artículo 17 + Anexo IX)             │
│  ├─ El proveedor establece SGC                                 │
│  ├─ Organismo notificado revisa documentación SGC              │
│  ├─ Organismo notificado realiza auditoría in situ (si necesario)│
│  ├─ El proveedor aborda no conformidades                       │
│  └─ Organismo notificado emite Certificado SGC (válido 5 años)│
│                                                                 │
│  ETAPA 2: EVALUACIÓN DOCUMENTACIÓN TÉCNICA (Anexo IV)         │
│  ├─ El proveedor prepara documentación técnica                 │
│  ├─ Organismo notificado revisa completitud documentación      │
│  ├─ Organismo notificado evalúa cumplimiento con requisitos   │
│  ├─ El proveedor aborda hallazgos                              │
│  └─ Organismo notificado aprueba documentación técnica        │
│                                                                 │
│  ETAPA 3: CERTIFICADO DE CONFORMIDAD                          │
│  ├─ Organismo notificado emite Certificado Documentación Técnica UE│
│  ├─ Válido para sistema IA y modificaciones sustanciales      │
│  ├─ Número de certificado registrado                           │
│  └─ Certificado mantenido durante 10 años                     │
│                                                                 │
│  ETAPA 4: DECLARACIÓN Y MARCADO CE                            │
│  ├─ Proveedor redacta Declaración de Conformidad UE (Anexo V)│
│  ├─ Proveedor fija marcado CE                                  │
│  ├─ Marcado CE incluye número identificación organismo notif. │
│  └─ Sistema puede comercializarse                              │
│                                                                 │
│  CONTINUO: VIGILANCIA                                          │
│  ├─ Organismo notificado realiza vigilancia periódica (anual) │
│  ├─ Proveedor notifica modificaciones sustanciales            │
│  ├─ Proveedor mantiene efectividad SGC                        │
│  └─ Certificado puede suspenderse/retirarse por incumplimiento│
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Características Clave:**
- **Duración:** 6-12 meses típico
- **Costo:** €50,000-€200,000 (depende de complejidad del sistema y organismo notificado)
- **Continuo:** Auditorías de vigilancia anuales requeridas
- **Validez del Certificado:** 5 años (certificado SGC)
- **Confianza del Mercado:** Alta (verificado por terceros)

### 4.3 Vía Anexo VI: Control Interno

**Cuándo se Permite:**
- Sistemas de IA de alto riesgo **distintos de** identificación biométrica (Anexo III Secciones 2-8)
- Elección del proveedor (alternativa al Anexo VII)

**Visión General del Proceso:**

```
┌────────────────────────────────────────────────────────────────┐
│            ANEXO VI: PROCEDIMIENTO DE CONTROL INTERNO          │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ETAPA 1: ESTABLECIMIENTO SGC (Artículo 17 + Anexo IX)        │
│  ├─ El proveedor establece y documenta SGC                     │
│  ├─ El proveedor realiza auditoría interna SGC                 │
│  ├─ El proveedor asegura efectividad SGC                       │
│  └─ SIN EVALUACIÓN DE ORGANISMO NOTIFICADO                     │
│                                                                 │
│  ETAPA 2: PREPARACIÓN DOCUMENTACIÓN TÉCNICA (Anexo IV)        │
│  ├─ El proveedor prepara documentación técnica completa       │
│  ├─ El proveedor realiza revisión técnica interna             │
│  ├─ El proveedor verifica cumplimiento con todos los requisitos│
│  └─ SIN REVISIÓN DE ORGANISMO NOTIFICADO                       │
│                                                                 │
│  ETAPA 3: VERIFICACIÓN DE CONFORMIDAD                         │
│  ├─ El proveedor verifica que sistema IA cumple                │
│  ├─ El proveedor realiza pruebas y validación                  │
│  ├─ El proveedor documenta evidencia de conformidad           │
│  └─ Solo verificación interna                                  │
│                                                                 │
│  ETAPA 4: DECLARACIÓN Y MARCADO CE                            │
│  ├─ Proveedor redacta Declaración de Conformidad UE (Anexo V)│
│  ├─ Proveedor fija marcado CE                                  │
│  ├─ Marcado CE SIN número de organismo notificado             │
│  └─ Sistema puede comercializarse                              │
│                                                                 │
│  CONTINUO: MANTENIMIENTO                                       │
│  ├─ Proveedor mantiene documentación técnica (10 años)        │
│  ├─ Proveedor mantiene efectividad SGC                        │
│  ├─ Proveedor actualiza por modificaciones sustanciales       │
│  └─ Sujeto a vigilancia del mercado por autoridades           │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Características Clave:**
- **Duración:** 3-6 meses típico
- **Costo:** Solo costos internos (€10,000-€50,000 estimado)
- **Continuo:** Sin auditorías de vigilancia (pero posible vigilancia del mercado)
- **Certificado:** Ninguno (auto-declaración)
- **Confianza del Mercado:** Menor (auto-evaluado)

### 4.4 Factores de Decisión para Selección de Vía

| Factor | Anexo VI (Interno) | Anexo VII (Organismo Notificado) |
|--------|---------------------|---------------------------|
| **Requisito Legal** | Opcional (excepto Anexo III-1) | Obligatorio para Anexo III-1; opcional de otro modo |
| **Confianza del Mercado** | Menor (auto-certificado) | Mayor (verificado por terceros) |
| **Tiempo al Mercado** | Más rápido (3-6 meses) | Más lento (6-12 meses) |
| **Costo** | Menor (€10K-€50K) | Mayor (€50K-€200K+) |
| **Escrutinio Regulatorio** | Mayor (vigilancia del mercado) | Menor (pre-certificado) |
| **Ventaja Competitiva** | Menor | Mayor (diferenciación) |
| **Riesgo de Responsabilidad** | Mayor (responsabilidad única) | Menor (compartida con organismo notificado) |
| **Preferencia del Cliente** | Varía | A menudo preferido para sistemas críticos |
| **Reconocimiento Internacional** | Menor | Mayor (organismo notificado conocido) |

### 4.5 Matriz de Recomendación para Selección de Vía

| Características del Sistema de IA | Vía Recomendada | Justificación |
|---------------------------|---------------------|-----------|
| Identificación biométrica | **Anexo VII (Obligatorio)** | Requisito legal |
| Alta criticidad de seguridad | **Anexo VII** | Confianza del mercado; reducción de responsabilidad |
| Clientes empresariales B2B | **Anexo VII** | Preferencia del cliente; requisitos de adquisición |
| Despliegue sector público | **Anexo VII** | Expectativas regulatorias; transparencia |
| Mercados internacionales | **Anexo VII** | Reconocimiento más amplio |
| Startup con presupuesto limitado | **Anexo VI** | Restricciones de costo; tiempo al mercado más rápido |
| Sistema de baja complejidad | **Anexo VI** | Suficiente para cumplimiento |
| SGC interno establecido | **Anexo VI** | Aprovechar capacidades existentes |

---

## 5. PROCEDIMIENTO PASO A PASO

### FASE 1: PLANIFICACIÓN DE LA EVALUACIÓN

#### Paso 1.1: Iniciar Planificación de Evaluación de Conformidad (Control CA-001)

**Cuándo:** Después de que el sistema de IA esté clasificado como alto riesgo y listo para evaluación de conformidad

**Quién:** Responsable de Evaluación de Conformidad + Propietario del Sistema de IA

**Base Regulatoria:** Artículo 43 (evaluación de conformidad requerida); Anexo VI/VII (requisitos del proceso)

**Cómo:**

1. **Verificar Prerrequisitos**
   - Confirmar que el sistema de IA está clasificado como alto riesgo (según PROC-AI-CLS-001)
   - Verificar que la clasificación esté documentada y aprobada
   - Confirmar que el desarrollo del sistema de IA está suficientemente maduro para evaluación
   - Verificar que el sistema de gestión de calidad esté operativo (según PROC-AI-QMS-001)
   - Verificar que la preparación de documentación técnica haya comenzado (según PROC-AI-DOC-001)

   **Criterios de Puerta:**
   - ✅ Clasificación de alto riesgo documentada y aprobada
   - ✅ Sistema de IA al menos 80% completo en desarrollo
   - ✅ SGC operativo y documentado
   - ✅ Documentación técnica 50% completa o más
   - ✅ Gestión de riesgos completada (según PROC-AI-RM-001)

2. **Determinar Vía de Evaluación de Conformidad**
   - Usar Árbol de Decisión en Sección 4.1
   - Verificar si el sistema está en Anexo III Sección 1 (identificación biométrica)
     - Si SÍ → **Anexo VII obligatorio**
     - Si NO → Elección del proveedor entre **Anexo VI** o **Anexo VII**
   - Documentar selección de vía con justificación
   - Usar Factores de Decisión para Selección de Vía (Sección 4.4)
   - Considerar matriz de recomendación (Sección 4.5)

   **Documentación:**
   - Completar Formulario de Selección de Vía de Evaluación de Conformidad (FORM-CA-001)
   - Documentar factores de decisión y justificación
   - Obtener aprobación del Director de Cumplimiento
   - Si se selecciona Anexo VII: Documentar criterios de selección de organismo notificado

3. **Establecer Cronograma de Evaluación**
   - Crear cronograma detallado del proyecto con hitos
   - Cronogramas típicos:
     - **Anexo VI:** 12-24 semanas
     - **Anexo VII:** 24-48 semanas (incluye cronogramas de organismo notificado)
   - Hitos clave:
     - Finalización documentación técnica
     - Revisión de preparación SGC
     - Finalización pruebas y validación
     - Compromiso organismo notificado (si Anexo VII)
     - Fecha límite resolución no conformidades
     - Fecha objetivo Declaración de Conformidad
     - Fecha objetivo comercialización

4. **Asignar Recursos**
   - Identificar miembros del equipo de evaluación
   - Asignar roles y responsabilidades
   - Asignar presupuesto:
     - **Anexo VI:** Costos internos (personal, pruebas, documentación)
     - **Anexo VII:** Agregar honorarios organismo notificado (€50K-€200K+)
   - Reservar presupuesto para consultor externo si es necesario
   - Asignar recursos y entornos de prueba

5. **Realizar Evaluación de Preparación**
   - Evaluar estado actual vs. requisitos de conformidad
   - Identificar brechas en:
     - Documentación técnica (lista de verificación Anexo IV)
     - Implementación SGC (requisitos Anexo IX)
     - Pruebas y validación (requisitos Artículo 15)
     - Gestión de riesgos (requisitos Artículo 9)
     - Gobernanza de datos (requisitos Artículo 10)
     - Transparencia (requisitos Artículo 13)
   - Estimar esfuerzo para cerrar brechas
   - Priorizar actividades de cierre de brechas

6. **Crear Plan de Evaluación de Conformidad**
   - Documentar plan de evaluación integral
   - Incluir:
     - Selección de vía y justificación
     - Alcance y objetivos de evaluación
     - Cronograma e hitos
     - Asignación de recursos
     - Plan de acción para cierre de brechas
     - Registro de riesgos para proyecto de evaluación
     - Plan de comunicación
     - Procedimientos de escalamiento
   - Usar plantilla: Plan de Evaluación de Conformidad (FORM-CA-002)

7. **Obtener Aprobación**
   - Presentar plan de evaluación al Comité de Gobernanza de IA
   - Revisar requisitos de presupuesto y recursos
   - Confirmar selección de vía
   - Obtener aprobación formal para proceder
   - Documentar aprobación y comunicar al equipo

**Evidencia Requerida:**
- Formulario de Selección de Vía de Evaluación de Conformidad (FORM-CA-001)
- Informe de Preparación para Evaluación de Conformidad (RPT-CA-001)
- Plan de Evaluación de Conformidad (FORM-CA-002)
- Informe de Análisis de Brechas (RPT-CA-002)
- Aprobación Comité de Gobernanza de IA (actas de reunión)

**Tiempo:** 2-4 semanas

**Verificación de Calidad:**
- ✅ Selección de vía documentada con justificación clara
- ✅ Cronograma realista e incluye margen para retrasos inesperados
- ✅ Presupuesto aprobado y asignado
- ✅ Todos los prerrequisitos cumplidos
- ✅ Análisis de brechas completo y plan de acción definido

---

#### Paso 1.2: Establecer Gobernanza de Evaluación (Control CA-001)

**Cuándo:** Inmediatamente después de aprobación del plan de evaluación

**Quién:** Responsable de Evaluación de Conformidad

**Cómo:**

1. **Crear Estructura de Gobernanza de Evaluación**
   - Establecer Comité Directivo de Evaluación de Conformidad
   - Miembros:
     - Responsable de Evaluación de Conformidad (Presidente)
     - Propietario del Sistema de IA
     - Responsable SGC
     - Responsable de Documentación Técnica
     - Responsable de Pruebas y Validación
     - Asesor Legal
     - Director de Cumplimiento
   - Frecuencia de reuniones: Semanal durante evaluación activa; quincenal durante revisión de organismo notificado

2. **Definir Protocolos de Comunicación**
   - Informes de estado semanales al Comité de Gobernanza de IA
   - Procedimientos de escalamiento para:
     - Retrasos de cronograma > 2 semanas
     - Sobrecostos presupuestarios > 10%
     - No conformidades críticas identificadas
     - Problemas con organismo notificado (si aplica)
   - Plan de comunicación con partes interesadas
   - Responsable de comunicación con organismo notificado (si Anexo VII)

3. **Establecer Seguimiento de Problemas**
   - Configurar rastreador de problemas de evaluación de conformidad
   - Categorías de problemas:
     - Brechas en documentación técnica
     - Deficiencias SGC
     - Fallos en pruebas
     - No conformidades identificadas
     - Hallazgos de organismo notificado
   - Asignar niveles de gravedad:
     - **Crítico:** Bloquea evaluación de conformidad
     - **Alto:** Riesgo significativo de retraso
     - **Medio:** Posible retraso menor
     - **Bajo:** Sin impacto en cronograma
   - Rastrear resolución y cierre de problemas

4. **Crear Panel de Evaluación**
   - Visibilidad en tiempo real del progreso de evaluación
   - Métricas clave:
     - % Documentación técnica completa
     - % Requisitos SGC cumplidos
     - % Pruebas completas
     - Problemas abiertos por gravedad
     - Estado del cronograma (en curso / en riesgo / retrasado)
     - Utilización del presupuesto
   - Actualizar semanalmente

**Evidencia Requerida:**
- Carta de Gobernanza de Evaluación (DOC-CA-001)
- Plan de Comunicación (DOC-CA-002)
- Configuración Sistema de Seguimiento de Problemas
- Configuración Panel de Evaluación

**Tiempo:** 1 semana

---

### FASE 2: SELECCIÓN DEL ORGANISMO NOTIFICADO

**Nota:** Esta fase aplica **solo si se selecciona vía Anexo VII**. Saltar a Fase 3 si vía Anexo VI.

#### Paso 2.1: Identificar Organismos Notificados Candidatos (Control CA-002)

**Cuándo:** Inmediatamente después de confirmar vía Anexo VII

**Quién:** Responsable de Evaluación de Conformidad + Adquisiciones

**Base Regulatoria:** Artículo 43 (participación organismo notificado); Reglamento (CE) N.º 765/2008 (marco organismos notificados)

**Cómo:**

1. **Acceder a Base de Datos de Organismos Notificados**
   - La Comisión UE mantiene base de datos oficial NANDO: https://ec.europa.eu/growth/tools-databases/nando/
   - Filtrar por organismos notificados acreditados para:
     - **Ley de IA de la UE (Reglamento (UE) 2024/1689)**
     - Procedimientos de evaluación de conformidad según Anexo VII
   - Exportar lista de organismos notificados acreditados

2. **Definir Criterios de Selección**

   | Criterio | Peso | Método de Puntuación |
   |-----------|--------|----------------|
   | **Acreditación Ley IA** | 25% | Binario (acreditado=5, no=0) |
   | **Experiencia en Dominio** | 20% | Escala 1-5 (coincidencia dominio con sector sistema IA) |
   | **Presencia Geográfica** | 10% | Escala 1-5 (presencia local ventajosa) |
   | **Capacidad de Cronograma** | 15% | Escala 1-5 (puede cumplir fechas objetivo) |
   | **Costo** | 15% | Escala 1-5 (dentro del presupuesto) |
   | **Reputación** | 10% | Escala 1-5 (referencias, historial) |
   | **Capacidad de Idioma** | 5% | Escala 1-5 (soporta idiomas requeridos) |

   **Puntuación Ponderada** = Suma de (Puntuación Criterio × Peso)

3. **Crear Lista Corta de Candidatos**
   - Mínimo 3 candidatos para comparación
   - Máximo 5 candidatos (más allá rendimientos decrecientes)
   - Usar Matriz de Puntuación de Criterios de Selección (FORM-CA-003)
   - Calcular puntuaciones ponderadas
   - Clasificar candidatos

4. **Realizar Contacto Preliminar**
   - Contactar top 3 candidatos
   - Solicitar:
     - Confirmación alcance acreditación Ley IA
     - Disponibilidad y estimaciones de cronograma
     - Estimación preliminar de costos (no vinculante)
     - Clientes de referencia (sistemas IA similares)
     - Credenciales auditor principal
   - Programar llamadas introductorias

5. **Realizar Diligencia Debida**
   - Verificar estado de acreditación en base de datos NANDO
   - Verificar que alcance de acreditación cubre su tipo de sistema IA
   - Verificar si hay suspensiones o restricciones
   - Contactar referencias:
     - Calidad de evaluación
     - Adherencia a cronogramas
     - Efectividad de comunicación
     - Transparencia de costos
     - Soporte post-certificado
   - Revisar documentos de orientación publicados del organismo notificado

**Evidencia Requerida:**
- Lista de Candidatos Organismos Notificados (RPT-CA-003)
- Matriz de Puntuación Criterios de Selección (FORM-CA-003)
- Informe de Diligencia Debida (RPT-CA-004)
- Registros de Verificación de Referencias (REC-CA-001)

**Tiempo:** 2-3 semanas

---

#### Paso 2.2: Seleccionar y Contratar Organismo Notificado (Control CA-002)

**Cuándo:** Después de completar evaluación de candidatos

**Quién:** Responsable de Evaluación de Conformidad + Adquisiciones + Asesor Legal

**Cómo:**

1. **Solicitar Propuestas Formales**
   - Enviar Solicitud de Propuesta (RFP) a top 3 candidatos
   - RFP debe incluir:
     - Descripción y clasificación del sistema IA
     - Esquema documentación técnica (Anexo IV)
     - Evaluación madurez SGC
     - Cronograma objetivo e hitos
     - Alcance de evaluación (SGC + documentación técnica)
     - Solicitud de desglose detallado de costos
     - Requisitos términos contractuales
   - Establecer fecha límite propuesta (2-3 semanas)

2. **Evaluar Propuestas**
   - Revisar propuestas contra criterios de selección
   - Factores clave de evaluación:
     - **Cronograma:** ¿Pueden cumplir objetivo de comercialización?
     - **Costo:** Costo total de propiedad (evaluación + vigilancia)
     - **Enfoque:** Metodología y rigor de evaluación
     - **Equipo:** Calificaciones y experiencia del equipo de evaluación
     - **Soporte:** Soporte continuo post-certificado
   - Realizar reuniones de aclaración de propuestas si es necesario
   - Actualizar matriz de puntuación con datos de propuestas

3. **Tomar Decisión de Selección**
   - Presentar análisis comparativo al Director de Cumplimiento
   - Recomendar organismo notificado basado en puntuación ponderada
   - Obtener aprobación para selección
   - Documentar justificación de selección
   - Notificar a candidatos seleccionados y no seleccionados

4. **Negociar Contrato**
   - Términos contractuales clave:
     - **Alcance:** Evaluación SGC + revisión documentación técnica
     - **Cronograma:** Hitos y entregables con fechas
     - **Costo:** Tarifa fija vs. tiempo y materiales; términos de pago
     - **Responsabilidades:** Obligaciones proveedor vs. organismo notificado
     - **Confidencialidad:** NDA para información técnica sensible
     - **Responsabilidad:** Limitaciones e indemnización
     - **Terminación:** Condiciones y períodos de aviso
     - **Vigilancia:** Frecuencia y costo auditoría vigilancia post-certificado
   - Asesor Legal revisa y aprueba contrato
   - Ambas partes firman

5. **Iniciar Compromiso**
   - Reunión de lanzamiento con organismo notificado
   - Agenda:
     - Presentación de equipos
     - Revisar alcance y cronograma de evaluación
     - Discutir metodología de evaluación
     - Aclarar requisitos de documentación
     - Establecer protocolos de comunicación
     - Programar auditoría SGC preliminar (si está listo)
     - Abordar preguntas e inquietudes
   - Asignar puntos de contacto primarios
   - Establecer mecanismo para compartir documentos (portal seguro)

6. **Registrar Compromiso**
   - Documentar selección y compromiso de organismo notificado
   - Registrar número de identificación de organismo notificado (para marcado CE)
   - Actualizar plan de evaluación de conformidad con cronograma de organismo notificado
   - Comunicar compromiso al equipo de evaluación
   - Actualizar panel de evaluación

**Evidencia Requerida:**
- Propuestas de Organismos Notificados (propuestas recibidas)
- Informe de Selección de Organismo Notificado (RPT-CA-005)
- Contrato de Organismo Notificado (acuerdo firmado)
- Actas Reunión de Lanzamiento (REC-CA-002)
- Número de Identificación de Organismo Notificado (para marcado CE)

**Tiempo:** 4-6 semanas

**Verificación de Calidad:**
- ✅ Mínimo 3 propuestas evaluadas
- ✅ Criterios de selección aplicados objetivamente
- ✅ Contrato revisado y aprobado por Asesor Legal
- ✅ Acreditación organismo notificado verificada en NANDO
- ✅ Reunión de lanzamiento realizada y documentada

---

#### Paso 2.3: Planificar Cronograma de Evaluación del Organismo Notificado (Control CA-011)

**Cuándo:** Después del compromiso con organismo notificado

**Quién:** Responsable de Evaluación de Conformidad + Auditor Principal Organismo Notificado

**Cómo:**

1. **Desarrollar Cronograma de Evaluación Conjunto**
   - Colaborar con organismo notificado para crear cronograma detallado
   - Actividades clave:
     - **Revisión Documentación SGC** (2-4 semanas)
     - **Auditoría In Situ SGC** (3-5 días)
     - **Resolución No Conformidades SGC** (2-6 semanas)
     - **Emisión Certificado SGC** (1-2 semanas)
     - **Presentación Documentación Técnica** (1 semana)
     - **Revisión Documentación Técnica** (4-8 semanas)
     - **Aclaraciones Documentación Técnica** (2-4 semanas)
     - **Informe Evaluación Final** (2 semanas)
     - **Emisión de Certificado** (1 semana)
   - Duración total: 16-30 semanas típico

2. **Identificar Puertas de Preparación para Evaluación**
   - Puerta preparación SGC: SGC debe estar operativo antes de auditoría
   - Puerta preparación documentación técnica: Completa antes de presentación
   - Puerta finalización pruebas: Todas las pruebas de validación completas
   - Puerta resolución no conformidades: Todos problemas críticos/altos resueltos

3. **Establecer Cadencia de Comunicación**
   - Llamadas de estado semanales con organismo notificado
   - Informes de progreso quincenales del organismo notificado
   - Protocolo de escalamiento para problemas
   - Puntos de contacto primarios en ambos lados

**Evidencia Requerida:**
- Cronograma de Evaluación del Organismo Notificado (DOC-CA-003)
- Puertas de Preparación para Evaluación (lista de verificación)
- Protocolo de Comunicación (DOC-CA-004)

**Tiempo:** 1-2 semanas

---

### FASE 3: REVISIÓN DE LA DOCUMENTACIÓN TÉCNICA

#### Paso 3.1: Completar Paquete de Documentación Técnica (Control CA-003, CA-012)

**Cuándo:** Durante preparación de evaluación (antes de presentación a organismo notificado si Anexo VII)

**Quién:** Responsable de Documentación Técnica + Propietario del Sistema de IA

**Base Regulatoria:** Artículo 11 (requisito documentación técnica); Anexo IV (contenido documentación)

**Cómo:**

1. **Revisar Requisitos del Anexo IV**

   El Anexo IV especifica que la documentación técnica debe contener:

   **Sección 1: Descripción General**
   - 1.a) Nombre, tipo, identificación única del sistema IA
   - 1.b) Nombre, dirección, información de contacto del proveedor
   - 1.c) Representante autorizado (si aplica)
   - 1.d) Finalidad prevista del sistema IA
   - 1.e) Requisitos de hardware
   - 1.f) Dependencias de software y versiones
   - 1.g) Fecha de versión/lanzamiento del sistema IA

   **Sección 2: Descripción Detallada**
   - 2.a) Métodos y pasos del sistema IA para desarrollo
   - 2.b) Especificaciones de diseño y arquitectura
   - 2.c) Componentes, cómo interactúan
   - 2.d) Recursos computacionales utilizados
   - 2.e) Cambios relevantes realizados durante ciclo de vida
   - 2.f) Descripción de cómo opera sistema IA y proporciona salidas
   - 2.g) Medidas de supervisión humana (Artículo 14)
   - 2.h) Medidas de ciberseguridad (Artículo 15)

   **Sección 3: Descripción Detallada de Datos**
   - 3.a) Conjuntos de datos de entrenamiento, validación, prueba
   - 3.b) Fuentes de datos y metodología de recopilación
   - 3.c) Procedimientos de preparación, filtrado, etiquetado de datos
   - 3.d) Evaluación de representatividad de datos
   - 3.e) Sesgos identificados en datos
   - 3.f) Procedimientos de gobernanza y gestión de datos (Artículo 10)

   **Sección 4: Evaluación del Sistema IA**
   - 4.a) Documentación de gestión de riesgos (Artículo 9)
   - 4.b) Procedimientos y resultados de pruebas (Artículo 15)
   - 4.c) Métricas utilizadas para medir rendimiento (Artículo 15)
   - 4.d) Resultados de validación en conjunto de datos de prueba
   - 4.e) Evaluación de sesgo y discriminación (Artículo 10(5))
   - 4.f) Evaluación de robustez, seguridad, ciberseguridad

   **Sección 5: Sistema de Gestión de Calidad**
   - 5.a) Documentación SGC según Anexo IX
   - 5.b) Procedimientos de monitoreo post-comercialización (Artículo 72)
   - 5.c) Procedimientos de reporte de incidentes (Artículo 73)

   **Sección 6: Declaración y Normas Armonizadas**
   - 6.a) Declaración de Conformidad UE (una vez emitida)
   - 6.b) Normas armonizadas o especificaciones comunes aplicadas
   - 6.c) Justificación si normas armonizadas no aplicadas

2. **Usar Lista de Verificación de Documentación Técnica**
   - Completar Lista de Verificación de Cumplimiento Anexo IV (CHK-CA-001)
   - Para cada requisito:
     - ✅ Completo: Documentación existe y es integral
     - 🟡 Parcial: Documentación existe pero tiene brechas
     - ❌ Faltante: Documentación no existe
     - N/A: Requisito no aplicable a este sistema IA
   - Calcular completitud: % de requisitos aplicables marcados como completos

3. **Compilar Paquete de Documentación**
   - Organizar documentación según estructura Anexo IV
   - Crear índice maestro de documentos
   - Asegurar que referencias cruzadas internas sean correctas
   - Control de versiones: Identificar claramente versiones de documentos
   - Agregar página de portada con:
     - Identificación del sistema IA
     - Versión y fecha de documentación
     - Información del proveedor
     - Aviso de confidencialidad
   - Usar plantilla: Plantilla de Paquete de Documentación Técnica (TMP-CA-001)

4. **Realizar Revisión Técnica Interna**
   - Reunir equipo de revisión:
     - Responsable de Documentación Técnica (presidente)
     - Propietario del Sistema de IA
     - Científico de Datos / Ingeniero ML
     - Responsable SGC
     - Oficial de Cumplimiento
     - Asesor Legal (para secciones sensibles)
   - Criterios de revisión:
     - **Completitud:** Todos los requisitos del Anexo IV abordados
     - **Precisión:** Información correcta y actualizada
     - **Claridad:** Documentación clara y comprensible
     - **Consistencia:** Sin contradicciones o discrepancias
     - **Suficiencia:** Detalle adecuado para evaluación de conformidad
   - Documentar hallazgos de revisión
   - Identificar brechas y asignar responsables para abordarlas

5. **Abordar Brechas de Documentación**
   - Priorizar brechas:
     - **Crítico:** Requerido para conformidad; problema bloqueante
     - **Alto:** Importante para evaluación; puede causar retraso
     - **Medio:** Deseable; mejora calidad de documentación
     - **Bajo:** Agradable de tener; mejoras cosméticas
   - Asignar responsables y fechas objetivo para cierre de brechas
   - Rastrear progreso en rastreador de problemas
   - Realizar revisión de seguimiento cuando se aborden brechas

6. **Obtener Aprobación Interna**
   - Responsable de Documentación Técnica revisa paquete final
   - Director de Cumplimiento revisa para completitud regulatoria
   - Asesor Legal revisa para consideraciones de responsabilidad y PI
   - Propietario del Sistema de IA firma precisión técnica
   - Documentar aprobación con firmas

7. **Preparar para Presentación (Anexo VII) o Archivo (Anexo VI)**
   - **Si Anexo VII (organismo notificado):**
     - Cargar a portal seguro de documentos del organismo notificado
     - Confirmar recepción y completitud
     - Proporcionar cualquier información adicional solicitada
     - Programar lanzamiento revisión documentación técnica
   - **Si Anexo VI (control interno):**
     - Archivar en sistema seguro de gestión de documentos
     - Asegurar capacidad de retención de 10 años
     - Hacer disponible para autoridades de vigilancia del mercado bajo solicitud

**Evidencia Requerida:**
- Paquete de Documentación Técnica (según estructura Anexo IV)
- Lista de Verificación de Cumplimiento Anexo IV (CHK-CA-001)
- Índice de Documentación Técnica (lista maestra de documentos)
- Informe de Revisión Técnica Interna (RPT-CA-006)
- Aprobación de Documentación Técnica (firmas)
- Confirmación de Presentación (si Anexo VII)

**Tiempo:** 8-12 semanas (puede hacerse en paralelo con evaluación SGC)

**Verificación de Calidad:**
- ✅ Lista de verificación Anexo IV 100% completa (todos requisitos aplicables)
- ✅ Revisión interna realizada con hallazgos documentados
- ✅ Todas las brechas críticas y altas abordadas
- ✅ Firmas de aprobación obtenidas
- ✅ Control de versión de documentos claro y correcto
- ✅ Capacidad de retención de 10 años confirmada

---

#### Paso 3.2: Evaluación de Documentación Técnica por Organismo Notificado (Control CA-003)

**Nota:** Este paso aplica **solo a vía Anexo VII**. Saltar si Anexo VI.

**Cuándo:** Después de presentar documentación técnica a organismo notificado

**Quién:** Organismo Notificado + Responsable de Documentación Técnica

**Base Regulatoria:** Anexo VII (procedimiento de evaluación de organismo notificado)

**Cómo:**

1. **Organismo Notificado Realiza Revisión de Escritorio**
   - Organismo notificado revisa documentación contra requisitos Anexo IV
   - Duración típica de revisión: 4-8 semanas
   - Organismo notificado evalúa:
     - Completitud (todas las secciones requeridas presentes)
     - Adecuación (detalle y evidencia suficientes)
     - Cumplimiento (sistema IA cumple requisitos Ley IA UE)
     - Consistencia (documentación alineada con SGC)
   - Organismo notificado puede solicitar aclaraciones o información adicional

2. **Responder a Solicitudes del Organismo Notificado**
   - Organismo notificado emite Lista de Solicitudes de Información
   - Priorizar respuestas:
     - Solicitudes de información crítica respondidas dentro de 5 días hábiles
     - Solicitudes estándar respondidas dentro de 10 días hábiles
   - Proporcionar respuestas claras, completas, referenciadas
   - Rastrear todas las solicitudes de información en rastreador de problemas
   - Documentar todas las comunicaciones

3. **Abordar Hallazgos de Documentación Técnica**
   - Organismo notificado emite Informe de Evaluación Preliminar
   - Hallazgos categorizados:
     - **No Conformidad (NC):** Requisito no cumplido; debe resolverse
     - **Observación:** Problema potencial; mejora recomendada
     - **Hallazgo Positivo:** Buena práctica señalada
   - Para cada no conformidad:
     - Análisis de causa raíz
     - Plan de acción correctiva con responsable y fecha objetivo
     - Implementar acción correctiva
     - Documentar evidencia de resolución
     - Presentar evidencia de resolución al organismo notificado

4. **Participar en Reuniones de Evaluación**
   - Organismo notificado puede solicitar reuniones de aclaración
   - Preparar exhaustivamente:
     - Revisar preguntas/temas con anticipación
     - Traer expertos en la materia
     - Preparar materiales de apoyo
   - Documentar discusiones de reuniones y compromisos

5. **Recibir Aprobación de Documentación Técnica**
   - Después de resolver todas las no conformidades, organismo notificado emite Aprobación de Documentación Técnica
   - La aprobación incluye:
     - Declaración de cumplimiento con Anexo IV
     - Lista de normas armonizadas aplicadas (si las hay)
     - Cualquier condición o limitación
   - La aprobación de documentación técnica es entrada para emisión de certificado

**Evidencia Requerida:**
- Lista de Solicitudes de Información del organismo notificado
- Respuestas del Proveedor a Solicitudes de Información (REC-CA-003)
- Informe de Evaluación Preliminar del organismo notificado
- Evidencia de Resolución de No Conformidades (REC-CA-004)
- Aprobación de Documentación Técnica del organismo notificado
- Todas las comunicaciones con organismo notificado (archivo de email)

**Tiempo:** 6-10 semanas (incluyendo aclaraciones y resoluciones)

---

### FASE 4: EVALUACIÓN DEL SGC

#### Paso 4.1: Revisión de Preparación del SGC (Control CA-004)

**Cuándo:** Antes de evaluación SGC (interna o de organismo notificado)

**Quién:** Responsable SGC + Responsable de Evaluación de Conformidad

**Base Regulatoria:** Artículo 17 (requisito SGC); Anexo IX (elementos SGC)

**Cómo:**

1. **Revisar Requisitos del SGC del Anexo IX**

   El Anexo IX especifica que el SGC debe abordar:

   **Sección 1: Estrategia para Cumplimiento Regulatorio**
   - 1.a) Política y objetivos de cumplimiento
   - 1.b) Procedimientos para asegurar conciencia de cumplimiento
   - 1.c) Procedimientos para examinar cumplimiento con Ley IA UE
   - 1.d) Procedimientos para mantener cumplimiento

   **Sección 2: Diseño, Control y Documentación**
   - 2.a) Estrategia para diseño y desarrollo de sistemas IA
   - 2.b) Técnicas, procedimientos, acciones sistemáticas para diseño IA
   - 2.c) Procedimientos para verificación y validación de diseño
   - 2.d) Especificaciones técnicas incluyendo normas armonizadas
   - 2.e) Procedimientos de control y aseguramiento de calidad
   - 2.f) Procedimientos para cambios de diseño y aprobaciones
   - 2.g) Procedimientos para identificar y rastrear versiones de sistemas IA
   - 2.h) Sistema de monitoreo post-comercialización (Artículo 72)

   **Sección 3: Documentación y Mantenimiento de Registros**
   - 3.a) Procedimientos para mantener documentación técnica (10 años)
   - 3.b) Procedimientos para mantener Declaración de Conformidad UE (10 años)
   - 3.c) Procedimientos para mantener registros generados por sistema IA
   - 3.d) Procedimientos de control y retención de documentos

   **Sección 4: Gestión de Recursos**
   - 4.a) Procedimientos para asegurar recursos adecuados
   - 4.b) Requisitos de competencia del personal
   - 4.c) Procedimientos de capacitación

   **Sección 5: Gestión de Riesgos**
   - 5.a) Sistema de gestión de riesgos según Artículo 9
   - 5.b) Procedimientos para identificar, analizar, evaluar riesgos
   - 5.c) Procedimientos para tratamiento y monitoreo de riesgos

   **Sección 6: Monitoreo Post-Comercialización**
   - 6.a) Plan de monitoreo post-comercialización según Artículo 72
   - 6.b) Procedimientos para recopilar y analizar datos de sistemas desplegados
   - 6.c) Procedimientos para identificar y abordar problemas
   - 6.d) Reporte de incidentes graves según Artículo 73

   **Sección 7: Comunicación**
   - 7.a) Procedimientos para comunicarse con autoridades
   - 7.b) Procedimientos para comunicarse con clientes y desplegadores
   - 7.c) Procedimientos para manejar quejas

2. **Realizar Auto-Evaluación de Preparación del SGC**
   - Completar Lista de Verificación de Cumplimiento Anexo IX (CHK-CA-002)
   - Para cada requisito:
     - ✅ Implementado: Procedimiento existe, documentado, operativo, evidencia disponible
     - 🟡 Parcial: Procedimiento existe pero tiene brechas o evidencia limitada
     - ❌ No Implementado: Procedimiento faltante o no operativo
     - N/A: No aplicable a esta organización/sistema
   - Calcular madurez SGC: % de requisitos aplicables marcados como implementados

3. **Realizar Auditoría Interna del SGC**
   - Seleccionar auditores internos (independientes del área auditada)
   - Desarrollar plan de auditoría cubriendo todas las secciones del Anexo IX
   - Realizar auditoría:
     - Revisar documentación SGC
     - Entrevistar propietarios de procesos
     - Revisar evidencia objetiva (registros, productos de trabajo)
     - Probar efectividad del proceso
   - Documentar hallazgos de auditoría:
     - **No Conformidad Mayor:** Requisito no cumplido; brecha crítica
     - **No Conformidad Menor:** Implementación parcial; mejora necesaria
     - **Observación:** Oportunidad de mejora
   - Reportar a Responsable SGC y gerencia

4. **Abordar Hallazgos de Auditoría Interna**
   - Para cada no conformidad:
     - Análisis de causa raíz
     - Plan de acción correctiva
     - Implementación con fechas objetivo
     - Verificación de efectividad
   - Cerrar todas las no conformidades mayores antes de evaluación externa
   - Documentar acciones correctivas

5. **Preparar Paquete de Documentación del SGC**
   - Compilar documentación SGC:
     - Manual SGC (visión general de alto nivel)
     - Procedimientos (instrucciones de trabajo detalladas por sección Anexo IX)
     - Formularios y plantillas
     - Registros (evidencia de operación SGC)
   - Organizar según estructura Anexo IX
   - Crear índice de documentación SGC
   - Asegurar que el control de versiones sea claro

6. **Realizar Revisión Gerencial**
   - Gerencia revisa preparación del SGC
   - Revisar:
     - Resultados de auditoría interna
     - Métricas de efectividad del SGC
     - Estado de acciones correctivas
     - Adecuación de recursos
     - Preparación para evaluación externa
   - Gerencia aprueba paquete de documentación SGC
   - Documentar reunión de revisión gerencial

**Evidencia Requerida:**
- Lista de Verificación de Cumplimiento Anexo IX (CHK-CA-002)
- Informe de Auditoría Interna del SGC (RPT-CA-007)
- Hallazgos de Auditoría Interna y Acciones Correctivas (REC-CA-005)
- Paquete de Documentación del SGC (organizado según Anexo IX)
- Índice de Documentación del SGC
- Actas de Reunión de Revisión Gerencial (REC-CA-006)

**Tiempo:** 4-6 semanas

**Verificación de Calidad:**
- ✅ Lista de verificación Anexo IX ≥90% implementado
- ✅ Auditoría interna realizada por auditores independientes
- ✅ Todas las no conformidades mayores cerradas
- ✅ Documentación SGC completa y organizada
- ✅ Revisión gerencial realizada y documentada

---

[CONTINÚA EN PARTE 2 - Debido al límite de caracteres, el documento continúa con las secciones restantes: Paso 4.2 hasta el final del Apéndice B, manteniendo la misma calidad de traducción y preservando toda la estructura, tablas, diagramas ASCII y formato markdown]