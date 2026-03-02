# PROC-AI-CAPA-001: Procedimiento de Acción Correctiva y Preventiva

**ID del Procedimiento:** PROC-AI-CAPA-001
**Nombre del Procedimiento:** Procedimiento de Acción Correctiva y Preventiva (CAPA)
**Estándar:** STD-AI-009: Estándar de Gestión de Calidad, STD-AI-013: Estándar de Gestión de Incidentes
**Cubre Controles:** QMS-006, QMS-007, QMS-008, INC-005, INC-006
**Fecha de Vigencia:** [A completar]
**Última Actualización:** [A completar]
**Próxima Fecha de Revisión:** [A completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece el proceso para identificar, documentar, implementar y verificar acciones correctivas y preventivas (CAPA) para sistemas de IA. Asegura que los problemas se aborden sistemáticamente en su causa raíz y que se implementen medidas para prevenir la recurrencia u ocurrencia de problemas similares.

### 1.2 Alcance

Este procedimiento aplica a:
- No conformidades identificadas en sistemas de IA
- Incidentes y casi accidentes relacionados con sistemas de IA
- Hallazgos de auditoría relacionados con cumplimiento de IA
- Quejas de clientes relacionadas con rendimiento de sistemas de IA
- Fallos de control de riesgos
- Desviaciones de rendimiento
- Observaciones regulatorias

### 1.3 Definiciones

| Término | Definición |
|------|------------|
| **Acción Correctiva** | Acción para eliminar la causa de una no conformidad detectada u otra situación indeseable para prevenir su recurrencia |
| **Acción Preventiva** | Acción para eliminar la causa de una no conformidad potencial u otra situación potencial indeseable para prevenir su ocurrencia |
| **No Conformidad** | Incumplimiento de un requisito |
| **Causa Raíz** | La razón fundamental de la ocurrencia de un problema |
| **Verificación de Efectividad** | Confirmación de que el CAPA logró los resultados previstos |

### 1.4 Propietario del Procedimiento

| Rol | Nombre | Título | Contacto |
|------|------|-------|---------|
| **Propietario del Procedimiento** | [Nombre] | Gestor de Calidad | [Email/Teléfono] |
| **Autoridad Técnica** | [Nombre] | Líder de Desarrollo de IA | [Email/Teléfono] |
| **Cumplimiento** | [Nombre] | Oficial de Cumplimiento de IA | [Email/Teléfono] |

---

## 2. ROLES Y RESPONSABILIDADES

### 2.1 Roles Clave

| Rol | Responsabilidad | Autoridad |
|------|----------------|-----------|
| **Iniciador de CAPA** | Identificar y reportar problemas; iniciar CAPA | Enviar solicitudes de CAPA |
| **Propietario de CAPA** | Ser dueño del CAPA; asegurar finalización | Asignar recursos; aprobar cierre |
| **Gestor de Calidad** | Supervisar proceso CAPA; asegurar efectividad | Aprobar CAPAs; rechazar acciones inadecuadas |
| **Investigador de Causa Raíz** | Realizar análisis de causa raíz | Determinar causa raíz |
| **Implementador de Acción** | Implementar acciones correctivas/preventivas | Ejecutar acciones asignadas |
| **Oficial de Verificación** | Verificar efectividad de acciones | Aprobar o requerir acciones adicionales |
| **Propietario del Sistema de IA** | Aprobar CAPAs para sus sistemas | Aceptar riesgo residual |

### 2.2 Matriz RACI

| Actividad | Iniciador | Propietario CAPA | Gestor Calidad | Investigador | Implementador | Verificador |
|----------|-----------|------------|-------------|--------------|-------------|----------|
| Identificar problema | A | I | I | I | I | I |
| Iniciar CAPA | R | A | C | I | I | I |
| Análisis causa raíz | C | A | C | R | I | I |
| Definir acciones | C | A | C | C | R | I |
| Aprobar plan CAPA | I | R | A | I | I | I |
| Implementar acciones | I | A | I | C | R | I |
| Verificar efectividad | I | C | C | I | I | A |
| Cerrar CAPA | I | R | A | I | I | C |

**Leyenda:** A=Responsable Final, R=Responsable, C=Consultado, I=Informado

---

## 3. DESCRIPCIÓN GENERAL DEL PROCESO CAPA

### 3.1 Flujo del Proceso

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO DEL PROCESO CAPA                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │IDENTIFICAR│───►│ INICIAR  │───►│INVESTIGAR│───►│PLANIFICAR│            │
│   │ PROBLEMA │    │   CAPA   │    │CAUSA RAÍZ│    │ ACCIONES │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│                                                         │                   │
│                                                         ▼                   │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │  CERRAR  │◄───│ VERIFICAR│◄───│IMPLEMENTAR│◄───│ APROBAR  │            │
│   │   CAPA   │    │EFECTIVIDAD│   │ ACCIONES │    │   PLAN   │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                LECCIONES APRENDIDAS Y MEJORA                        │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Categorías de CAPA

| Categoría | Descripción | Prioridad | Cierre Objetivo |
|----------|-------------|----------|----------------|
| **Crítico** | Impacto en vida/seguridad, incumplimiento regulatorio mayor, violación de derechos fundamentales | Inmediata | 30 días |
| **Mayor** | Problema de cumplimiento significativo, desviación de rendimiento mayor, problemas repetidos | Alta | 60 días |
| **Menor** | Impacto limitado, problema aislado, brecha de documentación | Normal | 90 días |
| **Mejora** | Mejora proactiva, oportunidad de optimización | Baja | 120 días |

---

## 4. PROCEDIMIENTOS DETALLADOS DE CAPA

### 4.1 Fase 1: Identificación

#### 4.1.1 Fuentes de CAPA

Los CAPAs pueden iniciarse desde:

| Fuente | Ejemplos |
|--------|----------|
| **Incidentes** | Mal funcionamiento de sistemas de IA, errores, fallos |
| **Auditorías** | Auditorías internas, auditorías externas, inspecciones regulatorias |
| **Evaluaciones de Riesgo** | Riesgos identificados, fallos de control |
| **Quejas** | Quejas de clientes, retroalimentación de usuarios |
| **No Conformidades** | Desviación de requisitos, especificaciones |
| **Monitoreo Post-Mercado** | Tendencias de rendimiento, problemas de campo |
| **Casi Accidentes** | Incidentes potenciales que fueron evitados |
| **Revisión de Gestión** | Oportunidades de mejora identificadas |

#### 4.1.2 Documentación del Problema

Para cada problema identificado, documentar:
1. Descripción del problema
2. Cuándo y cómo fue descubierto
3. Quién lo reportó
4. Evaluación de impacto (real y potencial)
5. Acciones de contención inmediatas tomadas
6. Evidencia recopilada

### 4.2 Fase 2: Iniciación

**Paso 1: Crear Registro CAPA**
1. Completar Formulario de Solicitud CAPA (FORM-AI-CAPA-001)
2. Asignar ID de CAPA
3. Determinar categoría CAPA (Crítico/Mayor/Menor/Mejora)
4. Asignar Propietario de CAPA
5. Establecer fecha de finalización objetivo

**Paso 2: Contención Inmediata**
1. Evaluar necesidad de contención inmediata
2. Implementar acciones de contención para limitar impacto
3. Documentar acciones de contención
4. Verificar efectividad de contención
5. Comunicar a partes interesadas afectadas

**Paso 3: Evaluación de Impacto**
1. Evaluar impacto en:
   - Salud y seguridad
   - Derechos fundamentales
   - Estado de cumplimiento
   - Rendimiento del sistema
   - Otros sistemas de IA
2. Determinar si se requiere notificación regulatoria
3. Escalar si es Crítico o Mayor

### 4.3 Fase 3: Investigación

**Paso 4: Análisis de Causa Raíz**

Seleccionar método de análisis apropiado según complejidad:

| Método | Cuándo Usar | Descripción |
|--------|-------------|-------------|
| **5 Porqués** | Problemas simples | Preguntar "por qué" repetidamente hasta encontrar la causa raíz |
| **Espina de Pescado (Ishikawa)** | Múltiples causas potenciales | Categorizar causas (Personas, Proceso, Tecnología, Datos, Entorno) |
| **Análisis de Árbol de Fallos** | Complejo, crítico para seguridad | Análisis deductivo sistemático |
| **Análisis de Modos de Fallo** | Fallos técnicos | Analizar modos y efectos de fallo |

**Categorías de Causa Raíz para Sistemas de IA:**

| Categoría | Ejemplos |
|----------|----------|
| **Datos** | Calidad de datos, sesgo de datos, deriva de datos, errores de etiquetado |
| **Modelo** | Arquitectura del modelo, entrenamiento, sobreajuste, subajuste |
| **Algoritmo** | Errores lógicos, casos límite, problemas de optimización |
| **Proceso** | Procedimientos inadecuados, proceso no seguido |
| **Personas** | Brechas de capacitación, competencia, error humano |
| **Tecnología** | Infraestructura, integración, dependencias |
| **Entorno** | Condiciones operativas, cambios de contexto |

**Paso 5: Documentar Causa Raíz**
1. Documentar metodología de investigación
2. Registrar evidencia analizada
3. Establecer causa(s) raíz claramente
4. Distinguir causa raíz de factores contribuyentes
5. Obtener acuerdo de partes interesadas

### 4.4 Fase 4: Planificación de Acciones

**Paso 6: Definir Acciones Correctivas**
1. Para cada causa raíz, definir acción(es) para eliminarla
2. Asegurar que las acciones aborden la causa raíz, no los síntomas
3. Considerar implicaciones sistémicas
4. Asignar propietario de acción y fecha de vencimiento
5. Definir criterios de éxito

**Paso 7: Definir Acciones Preventivas**
1. Identificar escenarios de recurrencia potencial
2. Identificar sistemas/procesos similares en riesgo
3. Definir acciones para prevenir ocurrencia en otros lugares
4. Extender acciones horizontalmente donde sea aplicable

**Paso 8: Análisis de Riesgo-Beneficio**
1. Evaluar reducción de riesgo de las acciones propuestas
2. Evaluar costo y esfuerzo requerido
3. Evaluar consecuencias no intencionadas potenciales
4. Priorizar acciones según análisis

**Paso 9: Crear Plan de Acción**
Documentar para cada acción:
- Descripción de la acción
- Tipo de acción (Correctiva/Preventiva)
- Propietario
- Fecha de vencimiento
- Recursos requeridos
- Criterios de éxito
- Método de verificación

### 4.5 Fase 5: Aprobación

**Paso 10: Revisión del Plan CAPA**
1. Gestor de Calidad revisa plan CAPA
2. Verificar que la causa raíz está adecuadamente abordada
3. Verificar que las acciones son apropiadas y suficientes
4. Verificar que los plazos son realistas
5. Aprobar o devolver para revisión

**Paso 11: Aprobación de Partes Interesadas**
Según categoría CAPA:

| Categoría | Aprobación Requerida |
|----------|-------------------|
| Crítico | Gestor de Calidad + Propietario del Sistema de IA + Cumplimiento + Comité de Gobernanza de IA |
| Mayor | Gestor de Calidad + Propietario del Sistema de IA |
| Menor | Gestor de Calidad |
| Mejora | Propietario de CAPA |

### 4.6 Fase 6: Implementación

**Paso 12: Ejecutar Acciones**
1. Implementar acciones según plan aprobado
2. Documentar actividades de implementación
3. Rastrear progreso contra hitos
4. Escalar retrasos o bloqueos
5. Recopilar evidencia de implementación

**Paso 13: Actualizar Documentación**
1. Actualizar procedimientos según sea requerido
2. Actualizar documentación técnica
3. Actualizar materiales de capacitación
4. Actualizar evaluaciones de riesgo
5. Comunicar cambios a partes interesadas

### 4.7 Fase 7: Verificación

**Paso 14: Verificar Implementación**
1. Confirmar que todas las acciones están completadas
2. Revisar evidencia de implementación
3. Verificar que la documentación está actualizada

**Paso 15: Verificar Efectividad**
1. Definir método de verificación:
   - Prueba/validación
   - Auditoría
   - Revisión de datos de monitoreo
   - Observación de proceso
2. Ejecutar verificación después de período apropiado
3. Comparar contra criterios de éxito
4. Documentar resultados de verificación

**Paso 16: Determinación de Efectividad**

| Resultado | Acción |
|--------|--------|
| **Efectivo** | Proceder al cierre |
| **Parcialmente Efectivo** | Implementar acciones adicionales |
| **No Efectivo** | Re-investigar; puede requerirse nuevo CAPA |

### 4.8 Fase 8: Cierre

**Paso 17: Cerrar CAPA**
1. Compilar toda la documentación CAPA
2. Obtener aprobaciones de cierre
3. Documentar lecciones aprendidas
4. Cerrar registro CAPA
5. Archivar documentación

**Paso 18: Lecciones Aprendidas**
1. Documentar aprendizajes clave
2. Compartir con equipos relevantes
3. Actualizar capacitación si es aplicable
4. Considerar mejoras de proceso
5. Incorporar en revisión de gestión

---

## 5. NOTIFICACIÓN REGULATORIA

### 5.1 Desencadenantes de Notificación

La notificación regulatoria puede ser requerida si CAPA se relaciona con:
- Incidente grave según Reglamento de IA de la UE
- Fallo de cumplimiento para IA de alto riesgo
- Violación de derechos fundamentales
- Problema de seguridad

### 5.2 Proceso de Notificación

1. Evaluar requisito de notificación con Oficial de Cumplimiento
2. Seguir PROC-AI-INC-001 para incidentes graves
3. Documentar notificación y respuesta de autoridad
4. Incluir retroalimentación regulatoria en CAPA

---

## 6. MONITOREO Y MÉTRICAS

### 6.1 Métricas de CAPA

| Métrica | Descripción | Objetivo |
|--------|-------------|--------|
| Antigüedad de CAPA | CAPAs abiertos más allá de fecha objetivo | <10% |
| Efectividad de CAPA | CAPAs verificados como efectivos | >90% |
| Recurrencia de CAPA | Mismo problema recurrente dentro de 12 meses | <5% |
| Tiempo de Ciclo de CAPA | Días promedio desde iniciación hasta cierre | <60 días |
| Calidad de Causa Raíz | CAPAs que abordan causa raíz vs. síntomas | >95% |

### 6.2 Reportes

| Reporte | Frecuencia | Audiencia |
|--------|-----------|----------|
| Reporte de Estado de CAPA | Mensual | Comité de Gobernanza de IA |
| Análisis de Tendencias de CAPA | Trimestral | Revisión de Gestión |
| Resumen de Efectividad de CAPA | Anual | Equipo Ejecutivo |

---

## 7. REGISTROS

### 7.1 Registros Requeridos

| ID de Registro | Nombre del Registro | Período de Retención | Propietario |
|-----------|-------------|------------------|-------|
| REC-AI-CAPA-001 | Registros CAPA | 10 años | Gestor de Calidad |
| REC-AI-CAPA-002 | Registros de Análisis de Causa Raíz | 10 años | Gestor de Calidad |
| REC-AI-CAPA-003 | Registros de Verificación | 10 años | Gestor de Calidad |
| REC-AI-CAPA-004 | Registros de Lecciones Aprendidas | 10 años | Gestor de Calidad |

### 7.2 Formularios Requeridos

| ID de Formulario | Nombre del Formulario | Propósito |
|---------|-----------|---------|
| FORM-AI-CAPA-001 | Formulario de Solicitud CAPA | Iniciar CAPA |
| FORM-AI-CAPA-002 | Formulario de Análisis de Causa Raíz | Documentar ACR |
| FORM-AI-CAPA-003 | Formulario de Verificación de Efectividad | Verificar efectividad de CAPA |

---

## 8. DOCUMENTOS RELACIONADOS

### 8.1 Estándares
- STD-AI-009: Estándar de Gestión de Calidad
- STD-AI-013: Estándar de Gestión de Incidentes

### 8.2 Procedimientos
- PROC-AI-INC-001: Procedimiento de Gestión de Incidentes
- PROC-AI-CHG-001: Procedimiento de Gestión de Cambios
- PROC-AI-QMS-001: Procedimiento de Sistema de Gestión de Calidad
- PROC-AI-RM-001: Procedimiento de Gestión de Riesgos

---

## 9. HISTORIAL DE REVISIONES

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | [Fecha] | [Autor] | Lanzamiento inicial |

---

## APÉNDICE A: FORMULARIO DE SOLICITUD CAPA (FORM-AI-CAPA-001)

### Sección 1: Identificación de CAPA

| Campo | Entrada |
|-------|-------|
| **ID de CAPA** | CAPA-AI-[AAAA]-[####] |
| **Fecha de Iniciación** | |
| **Nombre del Iniciador** | |
| **Categoría CAPA** | [ ] Crítico [ ] Mayor [ ] Menor [ ] Mejora |
| **Fecha de Cierre Objetivo** | |

### Sección 2: Detalles del Problema

| Campo | Entrada |
|-------|-------|
| **Nombre del Sistema de IA** | |
| **ID del Sistema de IA** | |
| **Fuente del Problema** | [ ] Incidente [ ] Auditoría [ ] Queja [ ] Riesgo [ ] PMM [ ] Otro: |
| **Referencia de Fuente** | |
| **Descripción del Problema** | |
| **Fecha de Descubrimiento** | |
| **Evaluación de Impacto** | |

### Sección 3: Acciones de Contención

| # | Acción de Contención | Propietario | Fecha | Estado |
|---|-------------------|-------|------|--------|
| 1 | | | | [ ] Completo [ ] En Progreso |
| 2 | | | | [ ] Completo [ ] En Progreso |

### Sección 4: Análisis de Causa Raíz

| Campo | Entrada |
|-------|-------|
| **Método de Análisis** | [ ] 5 Porqués [ ] Espina de Pescado [ ] Árbol de Fallos [ ] Otro: |
| **Causa(s) Raíz** | |
| **Factores Contribuyentes** | |
| **Evidencia Revisada** | |

### Sección 5: Acciones Correctivas

| # | Acción | Tipo | Propietario | Fecha Vencimiento | Estado |
|---|--------|------|-------|----------|--------|
| 1 | | [ ] C [ ] P | | | [ ] Abierto [ ] Completo |
| 2 | | [ ] C [ ] P | | | [ ] Abierto [ ] Completo |
| 3 | | [ ] C [ ] P | | | [ ] Abierto [ ] Completo |

(C=Correctiva, P=Preventiva)

### Sección 6: Verificación

| Campo | Entrada |
|-------|-------|
| **Método de Verificación** | |
| **Fecha de Verificación** | |
| **Verificado Por** | |
| **Resultado de Efectividad** | [ ] Efectivo [ ] Parcialmente Efectivo [ ] No Efectivo |
| **Evidencia de Verificación** | |

### Sección 7: Aprobaciones

| Rol | Nombre | Firma | Fecha |
|------|------|-----------|------|
| **Propietario de CAPA** | | | |
| **Gestor de Calidad** | | | |
| **Propietario del Sistema de IA** (si es requerido) | | | |

### Sección 8: Cierre

| Campo | Entrada |
|-------|-------|
| **Fecha de Cierre** | |
| **Cerrado Por** | |
| **Lecciones Aprendidas** | |
