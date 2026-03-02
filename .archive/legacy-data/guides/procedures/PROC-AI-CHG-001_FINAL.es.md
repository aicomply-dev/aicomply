# PROC-AI-CHG-001: Procedimiento de Gestión de Cambios en IA

**ID del Procedimiento:** PROC-AI-CHG-001
**Nombre del Procedimiento:** Procedimiento de Gestión de Cambios en IA
**Estándar:** STD-AI-009: Estándar de Gestión de Calidad, STD-AI-002: Estándar de Gestión de Riesgos
**Cubre Controles:** QMS-004, QMS-005, RM-010, RM-011
**Fecha de Vigencia:** [A completar]
**Última Actualización:** [A completar]
**Próxima Fecha de Revisión:** [A completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece los requisitos para gestionar cambios en los sistemas de IA durante todo su ciclo de vida, asegurando que las modificaciones no afecten negativamente el cumplimiento del Reglamento de IA de la UE, el rendimiento del sistema o los niveles de riesgo. Garantiza que todos los cambios sean adecuadamente evaluados, aprobados, implementados y documentados.

### 1.2 Alcance

Este procedimiento se aplica a:
- Todos los cambios en sistemas de IA desplegados (alto riesgo, riesgo limitado, riesgo mínimo)
- Actualizaciones de modelos, reentrenamiento y ajuste fino
- Cambios de datos (datos de entrenamiento, datos de validación, datos de referencia)
- Cambios de algoritmos y parámetros
- Cambios de infraestructura y configuración
- Cambios de integración e interfaces
- Cambios de documentación

### 1.3 Responsable del Procedimiento

| Rol | Nombre | Título | Contacto |
|------|------|-------|---------|
| **Responsable del Procedimiento** | [Nombre] | Gestor de Cambios en IA | [Email/Teléfono] |
| **Autoridad Técnica** | [Nombre] | Responsable de Desarrollo de IA | [Email/Teléfono] |
| **Cumplimiento** | [Nombre] | Responsable de Cumplimiento de IA | [Email/Teléfono] |

---

## 2. ROLES Y RESPONSABILIDADES

### 2.1 Roles Clave

| Rol | Responsabilidad | Autoridad |
|------|----------------|-----------|
| **Solicitante del Cambio** | Presentar solicitudes de cambio; proporcionar justificación | Iniciar solicitudes de cambio |
| **Responsable del Sistema de IA** | Aprobar cambios empresariales; aceptar riesgos residuales | Aprobar/rechazar cambios para sus sistemas |
| **Gestor de Cambios** | Coordinar proceso de cambios; facilitar reuniones del CAB | Programar cambios; escalar problemas |
| **Consejo Asesor de Cambios (CAB)** | Revisar y aprobar cambios significativos | Aprobar/diferir/rechazar solicitudes de cambio |
| **Gestor de Riesgos de IA** | Evaluar impacto del cambio en los riesgos | Bloquear cambios con riesgos inaceptables |
| **Responsable de Cumplimiento** | Evaluar impacto regulatorio | Bloquear cambios no conformes |
| **Responsable Técnico** | Evaluar viabilidad técnica e impacto | Aprobar implementación técnica |

### 2.2 Matriz RACI

| Actividad | Solicitante | Resp. Sistema | Gestor Cambios | CAB | Gestor Riesgos | Cumplimiento | Resp. Técnico |
|----------|-----------|--------------|------------|-----|----------|------------|-----------|
| Presentar solicitud | A | I | R | I | I | I | I |
| Evaluación inicial | C | C | A | I | R | R | R |
| Evaluación de impacto en riesgos | C | C | C | I | A | C | C |
| Evaluación de cumplimiento | C | C | C | I | C | A | C |
| Evaluación técnica | C | C | C | I | C | C | A |
| Aprobación del cambio | I | R | C | A | R | R | R |
| Implementación | R | A | C | I | I | I | R |
| Revisión post-implementación | R | A | R | I | R | R | R |

**Leyenda:** A=Accountable (Responsable final), R=Responsible (Ejecutor), C=Consulted (Consultado), I=Informed (Informado)

---

## 3. CLASIFICACIÓN DE CAMBIOS

### 3.1 Tipos de Cambios

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Cambio de Modelo** | Modificaciones al modelo de IA | Reentrenamiento, ajuste fino, cambio de arquitectura, actualización de parámetros |
| **Cambio de Datos** | Modificaciones a los datos | Nuevos datos de entrenamiento, cambio de esquema de datos, cambio de fuente de datos |
| **Cambio de Algoritmo** | Modificaciones de lógica o algoritmo | Nuevo algoritmo, cambio de optimización, ingeniería de características |
| **Cambio de Configuración** | Configuraciones y parámetros | Umbrales, hiperparámetros, indicadores de características |
| **Cambio de Infraestructura** | Plataforma o infraestructura | Actualización de hardware, migración a la nube, escalado |
| **Cambio de Integración** | Modificaciones de interfaces | Cambios de API, nuevas integraciones, cambios de protocolo |
| **Cambio de Documentación** | Actualizaciones de documentación | Documentación técnica, guías de usuario, documentación de cumplimiento |

### 3.2 Categorías de Cambios

| Categoría | Criterios | Nivel de Aprobación | Cronología |
|----------|----------|----------------|----------|
| **Estándar** | Pre-aprobado, bajo riesgo, rutinario | Pre-autorizado | Inmediato |
| **Normal** | Impacto moderado, sigue el proceso | CAB | 5-10 días hábiles |
| **Significativo** | Impacto material en comportamiento del sistema | CAB + Resp. Sistema + Cumplimiento | 10-20 días hábiles |
| **Sustancial** | Puede requerir nueva evaluación de conformidad | Comité de Gobernanza de IA | 20-40 días hábiles |
| **Emergencia** | Corrección urgente para problema crítico | CAB de Emergencia | Inmediato con revisión retrospectiva |

### 3.3 Criterios de Cambio Sustancial (Reglamento de IA de la UE)

Un cambio se considera **sustancial** si afecta:

| Criterio | Descripción | Desencadenante |
|----------|-------------|---------|
| **Finalidad Prevista** | Cambio en el uso previsto o dominio de aplicación | Cualquier cambio de finalidad |
| **Clasificación de Riesgo** | Puede cambiar el nivel de riesgo | Movimiento entre categorías de riesgo |
| **Arquitectura del Modelo** | Cambio fundamental en la estructura del modelo | Cambio de >30% de parámetros, nueva arquitectura |
| **Datos de Entrenamiento** | Cambios significativos en datos de entrenamiento | Cambio de >20% de datos, nuevas fuentes de datos |
| **Rendimiento** | Cambios materiales de rendimiento | Cambio de >10% en precisión, nuevos modos de fallo |
| **Impacto en Derechos Fundamentales** | Cambios que afectan derechos | Nuevas poblaciones afectadas, nuevos impactos en derechos |

**Los cambios sustanciales requieren nueva evaluación de conformidad para sistemas de IA de alto riesgo.**

---

## 4. PROCESO DE GESTIÓN DE CAMBIOS

### 4.1 Resumen del Proceso

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 PROCESO DE GESTIÓN DE CAMBIOS EN IA                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │SOLICITUD │───►│ EVALUAR  │───►│ APROBAR  │───►│IMPLEMENTAR│           │
│   │          │    │          │    │          │    │          │            │
│   └──────────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘            │
│                        │               │               │                   │
│                        ▼               ▼               ▼                   │
│                   ┌─────────┐    ┌─────────┐    ┌─────────┐               │
│                   │Análisis │    │ Revisión│    │Pruebas y│               │
│                   │Impacto  │    │   CAB   │    │Despliegue│              │
│                   └─────────┘    └─────────┘    └─────────┘               │
│                                                      │                     │
│                                                      ▼                     │
│                                              ┌──────────────┐             │
│                                              │   REVISAR    │             │
│                                              │   Y CERRAR   │             │
│                                              └──────────────┘             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Fase 1: Solicitud

**Paso 1: Presentar Solicitud de Cambio**
1. Completar el Formulario de Solicitud de Cambio (FORM-AI-CHG-001)
2. Proporcionar descripción detallada del cambio propuesto
3. Documentar justificación empresarial
4. Identificar sistema(s) de IA afectado(s)
5. Proponer enfoque de implementación
6. Enviar al Gestor de Cambios

**Paso 2: Clasificación Inicial**
1. El Gestor de Cambios revisa la completitud de la solicitud
2. Asignar ID de cambio y registrar en el registro de cambios
3. Determinar categoría inicial del cambio
4. Dirigir para la evaluación apropiada
5. Notificar a las partes interesadas

### 4.3 Fase 2: Evaluación

**Paso 3: Evaluación de Impacto Técnico**
1. El Responsable Técnico evalúa:
   - Viabilidad técnica
   - Alcance del impacto en el sistema
   - Impactos de integración
   - Requisitos de recursos
   - Complejidad de implementación
2. Documentar hallazgos en la sección de Evaluación de Impacto

**Paso 4: Evaluación de Impacto en Riesgos**
1. El Gestor de Riesgos de IA evalúa:
   - Impacto en riesgos existentes
   - Nuevos riesgos introducidos
   - Cambios en efectividad de controles
   - Cambios en nivel de riesgo
2. Determinar si se requiere re-evaluación de riesgos
3. Documentar en la sección de Impacto en Riesgos

**Paso 5: Evaluación de Impacto en Cumplimiento**
1. El Responsable de Cumplimiento evalúa:
   - Impacto en cumplimiento del Reglamento de IA de la UE
   - Determinación de cambio sustancial
   - Requisito de re-clasificación
   - Requisito de re-evaluación de conformidad
   - Requisitos de actualización de documentación
   - Requisitos de actualización de registro
2. Documentar en la sección de Impacto en Cumplimiento

**Paso 6: Determinación de Cambio Sustancial**
Si alguno de los siguientes es verdadero, el cambio es SUSTANCIAL:
- [ ] Cambia la finalidad prevista
- [ ] La clasificación de riesgo puede cambiar
- [ ] La arquitectura del modelo cambia fundamentalmente
- [ ] Los datos de entrenamiento cambian significativamente (>20%)
- [ ] Las métricas de rendimiento cambian materialmente (>10%)
- [ ] Se afectan nuevas poblaciones
- [ ] Nuevos impactos en derechos fundamentales

**Para cambios sustanciales en IA de alto riesgo:**
- Se requiere nueva evaluación de conformidad
- La documentación técnica debe actualizarse
- El registro en la base de datos de la UE debe actualizarse
- El marcado CE debe re-evaluarse

### 4.4 Fase 3: Aprobación

**Paso 7: Revisión del Consejo Asesor de Cambios**

| Categoría de Cambio | Composición del CAB |
|-----------------|-----------------|
| Estándar | Pre-aprobado, no se necesita CAB |
| Normal | Gestor de Cambios, Responsable Técnico, Gestor de Riesgos |
| Significativo | CAB completo + Resp. Sistema + Cumplimiento |
| Sustancial | Comité de Gobernanza de IA |
| Emergencia | CAB de Emergencia (miembros de guardia) |

**Proceso de Revisión del CAB:**
1. Presentar solicitud de cambio y evaluaciones de impacto
2. Revisar impactos en riesgos y cumplimiento
3. Discutir enfoque de implementación
4. Tomar decisión de aprobación:
   - **Aprobar** - Proceder con la implementación
   - **Aprobar con Condiciones** - Proceder con condiciones especificadas
   - **Diferir** - Se necesita más información
   - **Rechazar** - Cambio no aprobado
5. Documentar decisión y justificación

**Paso 8: Documentar Aprobación**
1. Registrar decisión del CAB en la Solicitud de Cambio
2. Documentar cualquier condición
3. Establecer cronograma de implementación
4. Notificar a las partes interesadas relevantes

### 4.5 Fase 4: Implementación

**Paso 9: Planificar Implementación**
1. Crear plan de implementación detallado
2. Identificar equipo de implementación
3. Definir procedimientos de reversión
4. Programar ventana de implementación
5. Preparar plan de pruebas

**Paso 10: Ejecutar Cambio**
1. Implementar cambio según plan aprobado
2. Ejecutar primero en entorno controlado
3. Ejecutar pruebas de validación
4. Documentar pasos de implementación
5. Verificar criterios de éxito

**Paso 11: Desplegar a Producción**
1. Ejecutar despliegue en producción
2. Monitorear problemas
3. Verificar funcionalidad del sistema
4. Confirmar métricas de rendimiento
5. Ejecutar reversión si es necesario

### 4.6 Fase 5: Revisión y Cierre

**Paso 12: Revisión Post-Implementación**
1. Verificar que se lograron los objetivos del cambio
2. Confirmar que no hay impactos inesperados
3. Validar que se cumplieron los requisitos de cumplimiento
4. Revisar cualquier problema encontrado
5. Documentar lecciones aprendidas

**Paso 13: Actualización de Documentación**
1. Actualizar documentación técnica
2. Actualizar evaluación de riesgos (si es necesario)
3. Actualizar registro en base de datos de la UE (si es necesario)
4. Archivar registros de cambios
5. Actualizar Inventario de Sistemas de IA

**Paso 14: Cerrar Cambio**
1. Obtener aprobación del Responsable del Sistema
2. Confirmar que todas las actividades están completas
3. Cerrar solicitud de cambio
4. Archivar documentación

---

## 5. PROCESO DE CAMBIO DE EMERGENCIA

### 5.1 Criterios de Cambio de Emergencia

Los cambios de emergencia se justifican solo para:
- Fallos críticos del sistema que afectan salud/seguridad
- Incidentes de seguridad activos
- Emergencias de cumplimiento regulatorio
- Impacto crítico en el negocio

### 5.2 Proceso de Emergencia

1. **Acciones Inmediatas**
   - Notificar a miembros del CAB de Emergencia
   - Documentar justificación de emergencia
   - Obtener aprobación verbal del Responsable del Sistema de IA

2. **Evaluación Expedita**
   - Evaluación rápida de riesgos
   - Verificación mínima de cumplimiento
   - Confirmación de viabilidad técnica

3. **Implementación**
   - Implementar con recursos disponibles
   - Monitoreo continuo
   - Documentar todas las acciones tomadas

4. **Revisión Retrospectiva** (dentro de 5 días hábiles)
   - Completar documentación completa del cambio
   - Realizar evaluaciones de impacto apropiadas
   - Revisión completa del CAB
   - Actualizar toda la documentación
   - Lecciones aprendidas

---

## 6. CONTROL DE CAMBIOS PARA IA DE ALTO RIESGO

### 6.1 Requisitos Adicionales

Para sistemas de IA de alto riesgo, se aplican controles adicionales:

| Requisito | Descripción |
|-------------|-------------|
| **Re-evaluación de Conformidad** | Los cambios sustanciales requieren nueva evaluación de conformidad |
| **Actualización de Documentación** | La documentación técnica (Anexo IV) debe actualizarse |
| **Actualización de Registro** | La base de datos de la UE debe actualizarse dentro de 3 meses |
| **Notificación** | El organismo notificado debe ser informado (si hay EC de terceros) |
| **Re-evaluación de Riesgos** | Se requiere evaluación completa de riesgos para cambios significativos |

### 6.2 Proceso de Cambio Sustancial

```
┌─────────────────────────────────────────────────────────────────────────────┐
│            PROCESO DE CAMBIO SUSTANCIAL (IA DE ALTO RIESGO)                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Proceso de Cambio Estándar                                                 │
│         │                                                                   │
│         ▼                                                                   │
│  ┌──────────────┐                                                          │
│  │   ¿Cambio    │──► Sí ────┐                                              │
│  │ Sustancial?  │           │                                              │
│  └──────────────┘           ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │   Nueva      │                                      │
│        No            │ Evaluación   │                                      │
│         │            │  de Riesgos  │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │ Actualizar   │                                      │
│         │            │ Doc. Técnica │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Evaluación  │                                      │
│         │            │     de       │                                      │
│         │            │ Conformidad  │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │ Actualizar   │                                      │
│         │            │ Base Datos   │                                      │
│         │            │     UE       │                                      │
│         │            └──────┬───────┘                                      │
│         │                   │                                              │
│         └────────────┬──────┘                                              │
│                      ▼                                                     │
│               ┌──────────────┐                                             │
│               │   Continuar  │                                             │
│               │Implementación│                                             │
│               └──────────────┘                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. REQUISITOS ESPECÍFICOS PARA CAMBIOS DE MODELO

### 7.1 Cambios de Reentrenamiento de Modelo

| Aspecto | Requisito |
|--------|-------------|
| **Validación de Datos** | Verificar que los nuevos datos de entrenamiento cumplan los requisitos de gobernanza |
| **Evaluación de Sesgo** | Re-ejecutar pruebas de sesgo en el nuevo modelo |
| **Pruebas de Rendimiento** | Comparar rendimiento contra línea base |
| **Pruebas de Validación** | Validación completa en conjunto de prueba retenido |
| **Documentación** | Actualizar documentación del modelo |

### 7.2 Control de Versiones de Modelo

1. Todas las versiones del modelo deben almacenarse y ser trazables
2. Las versiones de datos de entrenamiento deben vincularse a versiones del modelo
3. El linaje del modelo debe documentarse
4. Debe mantenerse capacidad de reversión
5. Pueden requerirse pruebas A/B para cambios significativos

---

## 8. REGISTROS Y DOCUMENTACIÓN

### 8.1 Registros Requeridos

| ID de Registro | Nombre del Registro | Período de Retención | Responsable |
|-----------|-------------|------------------|-------|
| REC-AI-CHG-001 | Registros de Solicitudes de Cambio | 10 años | Gestor de Cambios |
| REC-AI-CHG-002 | Actas de Reuniones del CAB | 10 años | Gestor de Cambios |
| REC-AI-CHG-003 | Registros de Evaluación de Impacto | 10 años | Gestor de Cambios |
| REC-AI-CHG-004 | Registros de Implementación | 10 años | Responsable Técnico |
| REC-AI-CHG-005 | Revisiones Post-Implementación | 10 años | Gestor de Cambios |

### 8.2 Formularios Requeridos

| ID de Formulario | Nombre del Formulario | Propósito |
|---------|-----------|---------|
| FORM-AI-CHG-001 | Formulario de Solicitud de Cambio | Presentar solicitudes de cambio |
| FORM-AI-CHG-002 | Formulario de Cambio de Emergencia | Cambios de emergencia |
| FORM-AI-CHG-003 | Registro de Decisión del CAB | Documentar decisiones del CAB |

---

## 9. DOCUMENTOS RELACIONADOS

### 9.1 Estándares
- STD-AI-002: Estándar de Gestión de Riesgos de IA
- STD-AI-009: Estándar de Gestión de Calidad
- STD-AI-010: Estándar de Evaluación de Conformidad

### 9.2 Procedimientos
- PROC-AI-DEV-001: Procedimiento de Ciclo de Vida de Desarrollo de IA
- PROC-AI-RM-001: Procedimiento de Gestión de Riesgos
- PROC-AI-CA-001: Procedimiento de Evaluación de Conformidad
- PROC-AI-DOC-001: Procedimiento de Documentación Técnica
- PROC-AI-REG-001: Procedimiento de Registro

---

## 10. HISTORIAL DE REVISIONES

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | [Fecha] | [Autor] | Lanzamiento inicial |

---

## APÉNDICE A: FORMULARIO DE SOLICITUD DE CAMBIO (FORM-AI-CHG-001)

### Sección 1: Información de la Solicitud

| Campo | Entrada |
|-------|-------|
| **ID de Cambio** | CHG-AI-[AAAA]-[####] |
| **Fecha de Solicitud** | |
| **Nombre del Solicitante** | |
| **Contacto del Solicitante** | |
| **Nombre del Sistema de IA** | |
| **ID del Sistema de IA** | |

### Sección 2: Descripción del Cambio

| Campo | Entrada |
|-------|-------|
| **Título del Cambio** | |
| **Tipo de Cambio** | [ ] Modelo [ ] Datos [ ] Algoritmo [ ] Configuración [ ] Infraestructura [ ] Integración [ ] Documentación |
| **Descripción del Cambio** | |
| **Justificación Empresarial** | |
| **Fecha de Implementación Propuesta** | |

### Sección 3: Resumen de Evaluación de Impacto

| Área | Nivel de Impacto | Descripción |
|------|--------------|-------------|
| Técnico | [ ] Alto [ ] Medio [ ] Bajo [ ] Ninguno | |
| Riesgo | [ ] Alto [ ] Medio [ ] Bajo [ ] Ninguno | |
| Cumplimiento | [ ] Alto [ ] Medio [ ] Bajo [ ] Ninguno | |
| Rendimiento | [ ] Alto [ ] Medio [ ] Bajo [ ] Ninguno | |

### Sección 4: Evaluación de Cambio Sustancial

| Criterio | Sí | No |
|-----------|-----|-----|
| ¿Este cambio modifica la finalidad prevista? | [ ] | [ ] |
| ¿Este cambio modifica la clasificación de riesgo? | [ ] | [ ] |
| ¿Es este un cambio fundamental de arquitectura del modelo? | [ ] | [ ] |
| ¿Cambian los datos de entrenamiento >20%? | [ ] | [ ] |
| ¿Cambian las métricas de rendimiento >10%? | [ ] | [ ] |
| ¿Se afectan nuevas poblaciones? | [ ] | [ ] |
| ¿Hay nuevos impactos en derechos fundamentales? | [ ] | [ ] |

**Determinación de Cambio Sustancial:** [ ] Sí [ ] No

### Sección 5: Aprobación

| Rol | Nombre | Decisión | Firma | Fecha |
|------|------|----------|-----------|------|
| Responsable del Sistema | | [ ] Aprobar [ ] Rechazar | | |
| Responsable Técnico | | [ ] Aprobar [ ] Rechazar | | |
| Gestor de Riesgos | | [ ] Aprobar [ ] Rechazar | | |
| Responsable de Cumplimiento | | [ ] Aprobar [ ] Rechazar | | |
| Decisión del CAB | | [ ] Aprobar [ ] Rechazar [ ] Diferir | | |

### Sección 6: Implementación

| Campo | Entrada |
|-------|-------|
| **Fecha de Implementación** | |
| **Implementado Por** | |
| **Notas de Implementación** | |
| **¿Se Ejecutó Reversión?** | [ ] Sí [ ] No |

### Sección 7: Cierre

| Campo | Entrada |
|-------|-------|
| **¿Cambio Exitoso?** | [ ] Sí [ ] No |
| **¿Documentación Actualizada?** | [ ] Sí [ ] No [ ] N/A |
| **Fecha de Cierre** | |
| **Cerrado Por** | |
