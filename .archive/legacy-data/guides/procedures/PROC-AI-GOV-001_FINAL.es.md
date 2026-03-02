# PROC-AI-GOV-001: Procedimiento de Gobernanza de IA

**ID del Procedimiento:** PROC-AI-GOV-001
**Nombre del Procedimiento:** Procedimiento de Gobernanza de IA
**Estándar:** STD-AI-009: Estándar de Gestión de Calidad, STD-AI-002: Estándar de Gestión de Riesgos de IA
**Cubre Controles:** QMS-001, QMS-002, QMS-003, QMS-012, QMS-013, RM-001, RM-013, RM-014
**Fecha de Entrada en Vigor:** [Por completar]
**Última Actualización:** [Por completar]
**Próxima Fecha de Revisión:** [Por completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece el marco de gobernanza organizacional para los sistemas de IA, definiendo las estructuras, roles, procesos y controles necesarios para garantizar el desarrollo, despliegue y operación responsables de IA en cumplimiento con el Reglamento de IA de la UE y las políticas organizacionales. Este procedimiento garantiza la rendición de cuentas, transparencia y supervisión efectiva de todas las actividades de IA.

### 1.2 Alcance

Este procedimiento se aplica a:
- Todos los sistemas de IA desarrollados, desplegados u operados por la organización
- Todas las decisiones, políticas y actividades relacionadas con IA
- Todo el personal involucrado en el desarrollo, despliegue u operación de IA
- Todos los órganos y comités de gobernanza de IA
- Sistemas de IA de terceros adquiridos o integrados

Este procedimiento no se aplica a:
- Sistemas de información y aplicaciones que no son de IA
- Investigación experimental de IA puramente no destinada a producción

### 1.3 Responsable del Procedimiento y Contactos

| Rol | Nombre | Título | Contacto |
|------|------|-------|---------|
| **Responsable del Procedimiento** | [Nombre] | Director de IA / Responsable de Gobernanza de IA | [Email/Teléfono] |
| **Patrocinador Ejecutivo** | [Nombre] | Director Ejecutivo | [Email/Teléfono] |
| **Cumplimiento** | [Nombre] | Responsable de Cumplimiento | [Email/Teléfono] |

---

## 2. ESTRUCTURA DE GOBERNANZA DE IA

### 2.1 Órganos de Gobernanza

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              ESTRUCTURA ORGANIZACIONAL DE GOBERNANZA DE IA                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         ┌─────────────────────┐                            │
│                         │   CONSEJO DE        │                            │
│                         │   ADMINISTRACIÓN    │                            │
│                         │   (Supervisión IA)  │                            │
│                         └─────────┬───────────┘                            │
│                                   │                                        │
│                         ┌─────────▼───────────┐                            │
│                         │   COMITÉ            │                            │
│                         │   EJECUTIVO         │                            │
│                         │   (Estrategia IA)   │                            │
│                         └─────────┬───────────┘                            │
│                                   │                                        │
│                         ┌─────────▼───────────┐                            │
│                         │   COMITÉ DE         │                            │
│                         │   GOBERNANZA IA     │                            │
│                         │   (Decisiones IA)   │                            │
│                         └─────────┬───────────┘                            │
│                                   │                                        │
│            ┌──────────────────────┼──────────────────────┐                │
│            │                      │                      │                │
│  ┌─────────▼────────┐  ┌─────────▼────────┐  ┌─────────▼────────┐        │
│  │  JUNTA DE ÉTICA  │  │  COMITÉ DE       │  │  JUNTA DE REVISIÓN│        │
│  │  DE IA           │  │  RIESGOS DE IA   │  │  TÉCNICA DE IA    │        │
│  │  (Ética/Derechos)│  │  (Gestión Riesgo)│  │  (Técnica)        │        │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘        │
│                                                                             │
│                         NIVEL OPERACIONAL                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  Titulares de Sistemas IA │ Equipos de Proyectos IA │ Operaciones IA │ │
│  │ Cumplimiento IA │                                                      │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Responsabilidades de los Órganos de Gobernanza

#### 2.2.1 Consejo de Administración / Supervisión de IA
| Aspecto | Descripción |
|--------|-------------|
| **Rol** | Responsabilidad última de la gobernanza de IA |
| **Responsabilidades** | Aprobar la política y estrategia de IA; supervisar los riesgos materiales de IA; garantizar recursos adecuados |
| **Miembros** | Miembros del consejo con experiencia apropiada en IA |
| **Frecuencia** | Actualizaciones trimestrales sobre IA; revisión anual de la estrategia de IA |
| **Quórum** | Según estatutos del consejo |

#### 2.2.2 Comité Ejecutivo
| Aspecto | Descripción |
|--------|-------------|
| **Rol** | Dirección estratégica y asignación de recursos para IA |
| **Responsabilidades** | Establecer estrategia de IA; asignar presupuestos de IA; aprobar despliegues de IA de alto riesgo; resolver escaladas |
| **Miembros** | CEO, CTO, CFO, COO, CLO, CISO |
| **Frecuencia** | Mensual |
| **Quórum** | Mayoría de miembros |

#### 2.2.3 Comité de Gobernanza de IA
| Aspecto | Descripción |
|--------|-------------|
| **Rol** | Gobernanza operacional de todas las actividades de IA |
| **Responsabilidades** | Revisar y aprobar proyectos de IA; supervisar el cumplimiento; gestionar la cartera de IA; aprobar estándares |
| **Miembros** | Director de IA (Presidente), Gestor de Riesgos de IA, Responsable de Cumplimiento, DPD, Legal, Seguridad IT, Representantes del Negocio |
| **Frecuencia** | Quincenal |
| **Quórum** | Presidente + 3 miembros |

#### 2.2.4 Junta de Ética de IA
| Aspecto | Descripción |
|--------|-------------|
| **Rol** | Revisión ética y protección de derechos fundamentales |
| **Responsabilidades** | Revisar sistemas de IA para preocupaciones éticas; evaluar impactos en derechos fundamentales; asesorar sobre dilemas éticos |
| **Miembros** | Responsable de Ética (Presidente), Legal, RRHH, Experto Externo en Ética, Representante de Usuarios |
| **Frecuencia** | Según necesidad para revisiones; reunión ordinaria mensual |
| **Quórum** | Presidente + 2 miembros |

#### 2.2.5 Comité de Riesgos de IA
| Aspecto | Descripción |
|--------|-------------|
| **Rol** | Supervisión de riesgos específicos de IA |
| **Responsabilidades** | Revisar evaluaciones de riesgos de IA; monitorear el registro de riesgos de IA; aprobar la aceptación de riesgos; supervisar la mitigación de riesgos |
| **Miembros** | Gestor de Riesgos de IA (Presidente), Cumplimiento, Seguridad, Operaciones, Riesgo del Negocio |
| **Frecuencia** | Mensual |
| **Quórum** | Presidente + 2 miembros |

#### 2.2.6 Junta de Revisión Técnica de IA
| Aspecto | Descripción |
|--------|-------------|
| **Rol** | Gobernanza técnica y estándares |
| **Responsabilidades** | Revisar arquitecturas técnicas; aprobar estándares tecnológicos; evaluar riesgos técnicos; validar cumplimiento |
| **Miembros** | CTO/Responsable de IA (Presidente), Ingenieros Senior, Científicos de Datos, Arquitecto de Seguridad |
| **Frecuencia** | Quincenal |
| **Quórum** | Presidente + 2 miembros |

---

## 3. ROLES Y RESPONSABILIDADES

### 3.1 Roles Clave de Gobernanza

| Rol | Responsabilidad | Autoridad | Reporta a |
|------|----------------|-----------|------------|
| **Director de IA** | Gobernanza general de IA; ejecución de estrategia; garantía de cumplimiento | Aprobar iniciativas de IA; detener sistemas no conformes | CEO |
| **Gestor de Riesgos de IA** | Identificación, evaluación y monitoreo de riesgos de IA | Bloquear despliegues de alto riesgo; requerir remediación | Director de IA |
| **Responsable de Cumplimiento de IA** | Cumplimiento del Reglamento de IA de la UE; enlace regulatorio | Emitir directivas de cumplimiento; escalar violaciones | Director de IA |
| **Titular del Sistema de IA** | Cumplimiento y rendimiento de sistemas de IA individuales | Aprobar cambios en el sistema; aceptar riesgos residuales | Jefe de Unidad de Negocio |
| **Responsable de Desarrollo de IA** | Implementación técnica; garantía de calidad | Aprobar diseños técnicos; rechazar código no conforme | CTO |
| **Delegado de Protección de Datos** | Cumplimiento del RGPD para sistemas de IA | Aprobar procesamiento de datos; requerir EIPD | Independiente |
| **Responsable de Ética de IA** | Uso ético de IA; prevención de sesgos; protección de derechos | Recomendar revisiones éticas; escalar preocupaciones | Director de IA |

### 3.2 Matriz RACI - Actividades de Gobernanza

| Actividad | Consejo | ComEjec | ComGobIA | Ética | Riesgo | Técn | Titular Sistema |
|----------|-------|------|-----------|--------|------|------|--------------|
| Estrategia de IA | A | R | C | C | C | C | I |
| Política de IA | A | R | C | C | C | C | I |
| Aprobación IA Alto Riesgo | I | A | R | R | R | R | C |
| Aceptación de Riesgos | I | A | R | C | R | C | R |
| Aprobación de Estándares | I | I | A | C | C | R | I |
| Monitoreo de Cumplimiento | I | I | A | I | R | C | R |
| Escalada de Incidentes | I | A | R | C | R | C | R |
| Revisión Ética | I | I | C | A | C | C | R |

**Leyenda:** A=Responsable (Accountable), R=Ejecutor (Responsible), C=Consultado, I=Informado

---

## 4. PROCESOS DE GOBERNANZA

### 4.1 Proceso de Aprobación de Iniciativas de IA

#### 4.1.1 Propósito
Garantizar que todas las iniciativas de IA se evalúen, aprueben y registren adecuadamente antes de proceder.

#### 4.1.2 Flujo del Proceso

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 PROCESO DE APROBACIÓN DE INICIATIVAS DE IA                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐             │
│  │ SOLICITUD│───►│ CLASIFICAR│───►│ EVALUAR  │───►│ REVISAR  │             │
│  │          │    │          │    │          │    │          │             │
│  └──────────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘             │
│                       │               │               │                    │
│                       ▼               ▼               ▼                    │
│               ┌──────────────────────────────────────────────┐            │
│               │              ENRUTAMIENTO DE APROBACIÓN      │            │
│               ├──────────────────────────────────────────────┤            │
│               │ Prohibido  → RECHAZAR (Sin Excepciones)      │            │
│               │ Alto Riesgo→ Comité de Gobernanza de IA     │            │
│               │             → Junta de Ética                │            │
│               │             → Comité Ejecutivo              │            │
│               │ Riesgo Lim.→ Comité de Gobernanza de IA     │            │
│               │ Riesgo Mín.→ Junta de Revisión Técnica IA   │            │
│               └──────────────────────────────────────────────┘            │
│                                      │                                     │
│                                      ▼                                     │
│                             ┌──────────────┐                              │
│                             │   APROBAR    │                              │
│                             │      O       │                              │
│                             │   RECHAZAR   │                              │
│                             └──────┬───────┘                              │
│                                    │                                       │
│                                    ▼                                       │
│                             ┌──────────────┐                              │
│                             │  REGISTRAR & │                              │
│                             │  PROCEDER    │                              │
│                             └──────────────┘                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### 4.1.3 Procedimiento

**Paso 1: Solicitud de Iniciativa**
1. El solicitante completa el Formulario de Solicitud de Iniciativa de IA (FORM-AI-GOV-001)
2. Documentar la justificación del negocio
3. Describir la funcionalidad de IA prevista
4. Identificar a las personas afectadas y partes interesadas
5. Enviar al equipo de Gobernanza de IA

**Paso 2: Clasificación Inicial**
1. El Responsable de Cumplimiento de IA revisa la solicitud
2. Realizar cribado de prácticas prohibidas
3. Evaluar contra los criterios de alto riesgo del Anexo III
4. Determinar la clasificación de riesgo inicial
5. Documentar la justificación de la clasificación

**Paso 3: Evaluación de Riesgos**
1. El Gestor de Riesgos de IA realiza una evaluación preliminar de riesgos
2. Identificar riesgos potenciales para la salud, seguridad y derechos fundamentales
3. Evaluar la probabilidad y el impacto
4. Recomendar el nivel de riesgo
5. Documentar los hallazgos de la evaluación

**Paso 4: Revisión y Aprobación**
Según la clasificación, enrutar para la aprobación apropiada:

| Clasificación | Revisión Requerida | Aprobación Requerida |
|----------------|-----------------|-------------------|
| Prohibido | Responsable de Cumplimiento | Rechazo Automático |
| Alto Riesgo | ComGobIA + Ética + Riesgo | Comité Ejecutivo |
| Riesgo Limitado | ComGobIA | Comité de Gobernanza de IA |
| Riesgo Mínimo | Revisión Técnica | Junta de Revisión Técnica de IA |

**Paso 5: Registro**
1. Tras la aprobación, registrar en el Inventario de Sistemas de IA
2. Asignar ID de Sistema y Titular del Sistema
3. Crear registro del proyecto
4. Iniciar el ciclo de vida de desarrollo (PROC-AI-DEV-001)

#### 4.1.4 Objetivos de Tiempo

| Clasificación | Tiempo Objetivo de Decisión |
|----------------|---------------------|
| Prohibido | 5 días laborables |
| Alto Riesgo | 20 días laborables |
| Riesgo Limitado | 10 días laborables |
| Riesgo Mínimo | 5 días laborables |

---

### 4.2 Proceso de Gestión de Políticas de IA

#### 4.2.1 Propósito
Garantizar que las políticas y estándares de IA estén actualizados, comunicados y aplicados.

#### 4.2.2 Ciclo de Vida de Políticas

**Paso 1: Desarrollo de Políticas**
1. Identificar la necesidad de política (cambio regulatorio, brecha, mejora)
2. Redactar la política con aportaciones de las partes interesadas
3. Revisar con las partes afectadas
4. Obtener revisión legal

**Paso 2: Aprobación de Políticas**
1. Presentar al Comité de Gobernanza de IA
2. Abordar comentarios y revisiones
3. Escalar al Comité Ejecutivo si es material
4. Obtener aprobación final

**Paso 3: Comunicación de Políticas**
1. Publicar en el sistema de gestión de políticas
2. Comunicar al personal afectado
3. Proporcionar formación si es necesario
4. Obtener confirmaciones

**Paso 4: Cumplimiento de Políticas**
1. Monitorear el cumplimiento de la política
2. Reportar violaciones a la gobernanza
3. Tomar acciones correctivas
4. Revisar la efectividad

**Paso 5: Revisión de Políticas**
1. Revisar todas las políticas de IA anualmente
2. Revisar ante cambios regulatorios significativos
3. Actualizar según sea necesario
4. Retirar políticas obsoletas

#### 4.2.3 Inventario de Políticas de IA

| ID de Política | Nombre de Política | Responsable | Fecha de Revisión |
|-----------|-------------|-------|-------------|
| POL-AI-001 | Política de Gobernanza de IA | Director de IA | [Fecha] |
| POL-AI-002 | Política de Ética de IA | Responsable de Ética de IA | [Fecha] |
| POL-AI-003 | Política de Gestión de Riesgos de IA | Gestor de Riesgos de IA | [Fecha] |
| POL-AI-004 | Política de Gobernanza de Datos de IA | DPD | [Fecha] |

---

### 4.3 Proceso de Monitoreo de Cumplimiento de IA

#### 4.3.1 Propósito
Garantizar el cumplimiento continuo con el Reglamento de IA de la UE y los requisitos organizacionales.

#### 4.3.2 Actividades de Monitoreo

**Monitoreo Continuo:**
1. Verificaciones automáticas de cumplimiento mediante herramientas de monitoreo
2. Seguimiento de métricas de rendimiento
3. Monitoreo de incidentes
4. Recopilación de comentarios de usuarios
5. Seguimiento de cambios regulatorios

**Revisiones Periódicas:**

| Tipo de Revisión | Frecuencia | Alcance | Responsable |
|-------------|-----------|-------|-------|
| Revisión de Cumplimiento del Sistema | Trimestral (Alto Riesgo), Anual (Otros) | Cumplimiento de sistemas de IA individuales | Titular del Sistema de IA |
| Revisión de Cartera | Trimestral | Riesgo de toda la cartera de sistemas de IA | Gestor de Riesgos de IA |
| Revisión de Estándares | Anual | Todos los estándares y procedimientos | Responsable de Cumplimiento de IA |
| Auditoría | Anual | Auditoría completa de cumplimiento | Auditoría Interna |

#### 4.3.3 Informes de Cumplimiento

**Informe Mensual al Comité de Gobernanza de IA:**
- Estado general de cumplimiento
- No conformidades y acciones correctivas
- Actualizaciones regulatorias
- Métricas clave e indicadores

**Informe Trimestral al Comité Ejecutivo:**
- Resumen de cumplimiento de la cartera
- Riesgos y problemas materiales
- Necesidades de recursos
- Recomendaciones estratégicas

**Informe Anual al Consejo:**
- Resumen anual de cumplimiento
- Tendencias interanuales
- Incidentes materiales
- Perspectiva estratégica

---

### 4.4 Proceso de Escalada de Riesgos de IA

#### 4.4.1 Desencadenantes de Escalada

| Desencadenante | Responsable Inicial | Ruta de Escalada |
|---------|---------------|-----------------|
| Riesgo crítico identificado | Titular del Sistema de IA | → Gestor Riesgo → ComGobIA → ComEjec |
| Violación de cumplimiento | Cumplimiento de IA | → ComGobIA → ComEjec → Consejo |
| Incidente grave | Gestor de Incidentes | → ComGobIA → ComEjec → Regulador |
| Preocupación ética | Responsable de Ética | → Junta Ética → ComGobIA → ComEjec |
| Impacto derechos fundamentales | DPD | → Junta Ética → ComGobIA → ComEjec |

#### 4.4.2 Plazos de Escalada

| Gravedad | Tiempo de Escalada | Decisión Requerida |
|----------|-----------------|-------------------|
| Crítica | 4 horas | Acción inmediata |
| Alta | 24 horas | Mismo día |
| Media | 72 horas | Dentro de 3 días |
| Baja | 1 semana | Dentro de 5 días |

---

### 4.5 Calendario de Reuniones de Gobernanza de IA

| Reunión | Frecuencia | Duración | Presidente | Asistentes Clave |
|---------|-----------|----------|-------|---------------|
| Actualización IA al Consejo | Trimestral | 30 min | CEO | Consejo, Director IA |
| Revisión Ejecutiva de IA | Mensual | 60 min | CEO | ComEjec, Director IA |
| Comité de Gobernanza de IA | Quincenal | 90 min | Director IA | Todos los miembros |
| Comité de Riesgos de IA | Mensual | 60 min | Gestor Riesgo | Miembros de riesgo |
| Revisión de Ética de IA | Según necesidad | 60 min | Responsable Ética | Miembros de ética |
| Revisión Técnica de IA | Quincenal | 60 min | CTO | Miembros técnicos |
| Foro de Titulares de Sistemas IA | Mensual | 60 min | Director IA | Todos los titulares |

---

## 5. MÉTRICAS E INFORMES DE GOBERNANZA

### 5.1 Indicadores Clave de Rendimiento

| Indicador | Descripción | Objetivo | Responsable |
|-----|-------------|--------|-------|
| Tasa de Cumplimiento de Sistemas IA | % de sistemas de IA totalmente conformes | ≥95% | Cumplimiento |
| Sistemas Alto Riesgo con Conformidad Vigente | % con evaluación de conformidad válida | 100% | Cumplimiento |
| Atraso de Aceptación de Riesgos | Riesgos pendientes de decisión de aceptación | <5 | Riesgo |
| Tiempo Medio de Aprobación de Iniciativas | Promedio de días desde solicitud a decisión | <15 días | Gobernanza |
| No Conformidades Abiertas | Recuento de problemas de cumplimiento no resueltos | <10 | Cumplimiento |
| Tasa de Finalización de Formación | % de personal con formación vigente en IA | ≥90% | RRHH |
| Actualidad de Documentación | % de sistemas con documentación actualizada | ≥95% | Cumplimiento |
| Tiempo de Respuesta a Incidentes | Tiempo promedio hasta respuesta inicial | <4 horas | Operaciones |

### 5.2 Panel de Control de Informes

El Panel de Gobernanza de IA debe mostrar:
- Estado de riesgo general de la cartera
- Estado de cumplimiento por sistema
- Pipeline de iniciativas activas
- Problemas y acciones abiertos
- Tendencias de métricas clave
- Próximas revisiones y plazos

---

## 6. REGISTROS DE GOBERNANZA

### 6.1 Registros Requeridos

| ID de Registro | Nombre de Registro | Período de Retención | Responsable |
|-----------|-------------|------------------|-------|
| REC-AI-GOV-001 | Registros de Solicitud de Iniciativa de IA | 10 años | Gobernanza |
| REC-AI-GOV-002 | Actas de Reuniones de Gobernanza | 10 años | Gobernanza |
| REC-AI-GOV-003 | Registros de Decisiones de Aprobación | 10 años | Gobernanza |
| REC-AI-GOV-004 | Informes de Cumplimiento | 10 años | Cumplimiento |
| REC-AI-GOV-005 | Registros de Escalada | 10 años | Riesgo |
| REC-AI-GOV-006 | Registros de Políticas | Vida + 10 años | Gobernanza |

### 6.2 Formularios Requeridos

| ID de Formulario | Nombre de Formulario | Propósito |
|---------|-----------|---------|
| FORM-AI-GOV-001 | Formulario de Solicitud de Iniciativa de IA | Solicitar nueva iniciativa de IA |
| FORM-AI-GOV-002 | Registro de Decisión de Gobernanza | Documentar decisiones de gobernanza |
| FORM-AI-GOV-003 | Formulario de Escalada | Documentar escaladas de riesgo |

---

## 7. DOCUMENTOS RELACIONADOS

### 7.1 Políticas
- POL-AI-001: Política de Gobernanza de IA

### 7.2 Estándares
- STD-AI-001: Estándar de Clasificación de Sistemas de IA
- STD-AI-002: Estándar de Gestión de Riesgos de IA
- STD-AI-009: Estándar de Gestión de Calidad

### 7.3 Procedimientos
- PROC-AI-DEV-001: Procedimiento de Ciclo de Vida de Desarrollo de IA
- PROC-AI-RM-001: Procedimiento de Gestión de Riesgos de IA
- PROC-AI-CLS-001: Procedimiento de Clasificación de IA
- PROC-AI-INC-001: Procedimiento de Gestión de Incidentes

### 7.4 Referencias Externas
- Reglamento de IA de la UE (Reglamento 2024/1689)
- ISO/IEC 42001: Sistema de Gestión de IA
- ISO/IEC 38500: Gobernanza de TI

---

## 8. HISTORIAL DE REVISIONES

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | [Fecha] | [Autor] | Versión inicial |

---

## APÉNDICE A: FORMULARIO DE SOLICITUD DE INICIATIVA DE IA (FORM-AI-GOV-001)

### Sección 1: Información del Solicitante
| Campo | Valor |
|-------|-------|
| Nombre del Solicitante | |
| Departamento | |
| Contacto | |
| Fecha de Solicitud | |

### Sección 2: Descripción de la Iniciativa
| Campo | Valor |
|-------|-------|
| Nombre de la Iniciativa | |
| Problema/Oportunidad del Negocio | |
| Solución de IA Propuesta | |
| Finalidad Prevista | |
| Usuarios Objetivo | |
| Personas Afectadas | |
| Cronograma de Despliegue | |

### Sección 3: Preguntas de Evaluación Inicial
| Pregunta | Respuesta |
|----------|----------|
| ¿El sistema de IA tomará decisiones o influirá significativamente en decisiones sobre personas físicas? | Sí / No |
| ¿El sistema de IA procesará datos biométricos? | Sí / No |
| ¿El sistema de IA se utilizará en alguna de las áreas de alto riesgo enumeradas en el Anexo III? | Sí / No / No estoy seguro |
| ¿El sistema de IA estará incorporado en un producto cubierto por el Anexo I? | Sí / No / No estoy seguro |
| ¿Se procesarán datos personales? | Sí / No |
| Rango de presupuesto estimado | |

### Sección 4: Aprobaciones
| Rol | Nombre | Firma | Fecha |
|------|------|-----------|------|
| Solicitante | | | |
| Jefe de Departamento | | | |

---

## APÉNDICE B: REGISTRO DE DECISIÓN DE GOBERNANZA (FORM-AI-GOV-002)

### Sección 1: Información de la Decisión
| Campo | Valor |
|-------|-------|
| Referencia de la Decisión | |
| Fecha de la Decisión | |
| Órgano de Decisión | |
| Punto del Orden del Día | |

### Sección 2: Asunto
| Campo | Valor |
|-------|-------|
| Asunto | |
| Antecedentes | |
| Opciones Consideradas | |
| Recomendación | |

### Sección 3: Decisión
| Campo | Valor |
|-------|-------|
| Decisión | Aprobar / Aprobar con Condiciones / Diferir / Rechazar |
| Condiciones (si las hay) | |
| Justificación | |
| Opiniones Disidentes | |

### Sección 4: Acciones
| Acción | Responsable | Fecha de Vencimiento | Estado |
|--------|-------|----------|--------|
| | | | |

### Sección 5: Aprobación
| Rol | Nombre | Voto | Firma |
|------|------|------|-----------|
| Presidente | | | |
| Miembro 1 | | | |
| Miembro 2 | | | |
| Miembro 3 | | | |
