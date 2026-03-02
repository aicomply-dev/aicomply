# PROC-AI-DEV-001: Procedimiento del Ciclo de Vida de Desarrollo de Sistemas de IA

**ID del Procedimiento:** PROC-AI-DEV-001
**Nombre del Procedimiento:** Procedimiento del Ciclo de Vida de Desarrollo de Sistemas de IA
**Estándar:** STD-AI-001: Estándar de Clasificación de Sistemas de IA, STD-AI-002: Estándar de Gestión de Riesgos de IA
**Cubre Controles:** CLS-001, CLS-002, CLS-003, CLS-004, RM-001, RM-002, RM-003, RM-004
**Fecha de Vigencia:** [A completar]
**Última Actualización:** [A completar]
**Fecha de Próxima Revisión:** [A completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece el proceso estandarizado para desarrollar sistemas de IA en cumplimiento con el Reglamento de IA de la UE, garantizando que los requisitos de gestión de riesgos, documentación y cumplimiento se integren a lo largo de todo el ciclo de vida de desarrollo, desde el concepto hasta el despliegue y más allá.

### 1.2 Alcance

Este procedimiento se aplica a:
- Todos los proyectos de desarrollo de nuevos sistemas de IA
- Mejoras importantes a sistemas de IA existentes
- Sistemas de IA adquiridos de terceros que requieran personalización
- Sistemas de IA destinados al despliegue en el mercado de la UE
- Todas las categorías de riesgo de IA (prohibido, alto riesgo, riesgo limitado, riesgo mínimo)

Este procedimiento no se aplica a:
- Sistemas de IA comerciales sin personalización (ver PROC-AI-VENDOR-001)
- IA de investigación y experimental no destinada a producción
- Sistemas de IA explícitamente excluidos del alcance del Reglamento de IA de la UE

### 1.3 Propietario del Procedimiento y Contactos

| Rol | Nombre | Título | Contacto |
|------|------|-------|---------|
| **Propietario del Procedimiento** | [Nombre] | Responsable de Desarrollo de IA | [Email/Teléfono] |
| **Escalado** | [Nombre] | Director de Tecnología | [Email/Teléfono] |
| **Gobernanza** | [Nombre] | Presidente del Comité de Gobernanza de IA | [Email/Teléfono] |

---

## 2. ROLES Y RESPONSABILIDADES

### 2.1 Roles Clave

| Rol | Responsabilidad | Autoridad |
|------|----------------|-----------|
| **Gestor de Proyecto de IA** | Gestionar el ciclo de vida de desarrollo; garantizar el cumplimiento de las puertas de fase; coordinar equipos | Aprobar transiciones de fase; escalar bloqueos |
| **Propietario del Sistema de IA** | Definir requisitos de negocio; aceptar el sistema para despliegue; poseer el cumplimiento | Aprobar requisitos; aceptar riesgos residuales |
| **Responsable de Desarrollo de IA** | Liderazgo técnico; decisiones de arquitectura; calidad del código | Aprobar diseños técnicos; rechazar código no conforme |
| **Científico de Datos/Ingeniero de ML** | Desarrollo de modelos; entrenamiento; pruebas; validación | Ejecutar actividades de desarrollo |
| **Gestor de Riesgos de IA** | Evaluación de riesgos en cada fase; mantenimiento del registro de riesgos | Bloquear despliegue por riesgos inaceptables |
| **Responsable de Cumplimiento** | Verificación de cumplimiento normativo; alineación con el Reglamento de IA de la UE | Aprobar documentación de cumplimiento |
| **Aseguramiento de Calidad** | Actividades de pruebas; validación; verificación | Aprobar resultados de pruebas; rechazar sistemas fallidos |
| **Arquitecto de Seguridad** | Requisitos de seguridad; modelado de amenazas; pruebas de seguridad | Aprobar arquitectura de seguridad |
| **Delegado de Protección de Datos** | Cumplimiento RGPD; evaluaciones de impacto de protección de datos | Aprobar actividades de procesamiento de datos |

### 2.2 Matriz RACI

| Actividad | Gestor Proyecto | Propietario Sistema | Resp. Desarrollo | Científico Datos | Gestor Riesgos | Cumplimiento | QA |
|----------|-------------|--------------|----------|----------------|----------|------------|-----|
| Inicio del proyecto | A | R | C | I | C | C | I |
| Definición de requisitos | R | A | C | C | C | C | I |
| Clasificación de riesgos | C | R | C | I | A | C | I |
| Diseño de arquitectura | C | I | A | R | C | C | C |
| Desarrollo del modelo | C | I | C | A | I | I | C |
| Pruebas y validación | C | I | C | R | C | C | A |
| Revisión de cumplimiento | C | I | C | I | R | A | C |
| Aprobación de despliegue | A | R | C | I | R | R | R |
| Monitorización post-despliegue | C | A | C | R | R | C | C |

**Leyenda:** A=Responsable final (Accountable), R=Responsable de ejecución (Responsible), C=Consultado, I=Informado

---

## 3. MARCO DEL CICLO DE VIDA DE DESARROLLO DE IA

### 3.1 Descripción General de las Fases del Ciclo de Vida

El ciclo de vida de desarrollo de IA consta de siete fases obligatorias con puertas de fase:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               CICLO DE VIDA DE DESARROLLO DE SISTEMAS DE IA                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FASE 1           FASE 2          FASE 3          FASE 4                   │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐      ┌─────────┐           │
│  │ CONCEPTO│ ──►  │ DISEÑO  │ ──►  │DESARROLL│ ──►  │ PRUEBAS │           │
│  │ E INICIO│      │         │      │         │      │         │           │
│  └────┬────┘      └────┬────┘      └────┬────┘      └────┬────┘           │
│       │                │                │                │                 │
│   PUERTA 1          PUERTA 2         PUERTA 3         PUERTA 4            │
│  Clasificación    Revisión de      Revisión de      Finalización          │
│  y Revisión       Diseño           Desarrollo       de Pruebas            │
│  de Riesgos                                                                │
│                                                                             │
│  FASE 5           FASE 6          FASE 7                                   │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐                            │
│  │DESPLIEG │ ──►  │OPERACIÓN│ ──►  │ RETIRADA│                            │
│  │         │      │Y MONITOR│      │         │                            │
│  └────┬────┘      └────┬────┘      └────┬────┘                            │
│       │                │                │                                  │
│   PUERTA 5          PUERTA 6         PUERTA 7                             │
│  Aprobación de     Revisión          Aprobación de                        │
│  Despliegue        Operacional       Retirada                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Requisitos de las Puertas de Fase

Cada puerta de fase requiere aprobaciones específicas antes de proceder:

| Puerta | Aprobaciones Requeridas | Entregables Clave | Criterios Continuar/Detener |
|------|-------------------|------------------|-------------------|
| **Puerta 1** | Gestor de Riesgos de IA, Cumplimiento | Decisión de clasificación, Evaluación inicial de riesgos | Nivel de riesgo determinado, Ruta de cumplimiento clara |
| **Puerta 2** | Resp. Desarrollo, Seguridad, DPD | Documento de arquitectura, EIPD (si es necesario) | Diseño aprobado, Requisitos de seguridad cumplidos |
| **Puerta 3** | Resp. Desarrollo, QA | Modelo funcional, Pruebas unitarias superadas | Código completo, Estándares de calidad cumplidos |
| **Puerta 4** | QA, Gestor de Riesgos | Informes de pruebas, Resultados de validación | Todas las pruebas superadas, Riesgos mitigados |
| **Puerta 5** | Propietario Sistema, Cumplimiento, Riesgos | Evaluación de conformidad, Marcado CE (si es de alto riesgo) | Despliegue aprobado, Registro completado |
| **Puerta 6** | Propietario Sistema, Gestor de Riesgos | Plan PMM activo, Monitorización operacional | Sistema estable, Sin problemas críticos |
| **Puerta 7** | Propietario Sistema, Cumplimiento | Plan de desmantelamiento, Disposición de datos | Retirada segura, Registros archivados |

---

## 4. PROCEDIMIENTOS DETALLADOS POR FASE

### 4.1 Fase 1: Concepto e Inicio

#### 4.1.1 Objetivos
- Definir el propósito del sistema de IA y el uso previsto
- Realizar la clasificación inicial de riesgos
- Establecer la gobernanza del proyecto
- Asegurar aprobaciones iniciales y recursos

#### 4.1.2 Actividades

**Paso 1: Registro del Proyecto**
1. Completar el Formulario de Registro de Proyecto de IA (FORM-AI-DEV-001)
2. Asignar Propietario del Sistema de IA y Gestor de Proyecto
3. Registrar en el Inventario de Sistemas de IA
4. Obtener ID del proyecto y número de seguimiento

**Paso 2: Definición del Propósito**
1. Documentar el propósito previsto según el Artículo 3 del Reglamento de IA de la UE
2. Definir usuarios objetivo y personas afectadas
3. Identificar contexto y entorno de despliegue
4. Documentar salidas y decisiones esperadas

**Paso 3: Clasificación Inicial de Riesgos**
1. Completar el Cribado de Prácticas Prohibidas (según PROC-AI-CLS-001)
2. Evaluar contra el Anexo I (legislación de seguridad de productos)
3. Evaluar contra el Anexo III (casos de uso de alto riesgo)
4. Documentar la decisión de clasificación usando FORM-AI-CLS-001
5. Si es de alto riesgo: iniciar planificación de evaluación de conformidad

**Paso 4: Evaluación Inicial de Riesgos**
1. Identificar riesgos potenciales para la salud, seguridad, derechos fundamentales
2. Documentar riesgos en el Registro de Riesgos (REC-AI-RM-001)
3. Determinar requisitos de gestión de riesgos
4. Establecer criterios de aceptación de riesgos

#### 4.1.3 Entregables de la Puerta 1
- [ ] Formulario de Registro de Proyecto de IA completado
- [ ] Documento de Decisión de Clasificación (FORM-AI-CLS-001)
- [ ] Evaluación Inicial de Riesgos (REC-AI-RM-001)
- [ ] Acta Constitutiva del Proyecto aprobada
- [ ] Asignación de recursos confirmada

#### 4.1.4 Revisión de la Puerta 1
- **Revisores:** Gestor de Riesgos de IA, Responsable de Cumplimiento, Comité de Gobernanza de IA (para alto riesgo)
- **Decisión:** Proceder / Revisar / Rechazar
- **Documentación:** Registro de Revisión de Puerta 1 (REC-AI-DEV-001)

---

### 4.2 Fase 2: Diseño

#### 4.2.1 Objetivos
- Definir la arquitectura del sistema y los componentes
- Establecer requisitos y gobernanza de datos
- Diseñar controles y mitigaciones de riesgos
- Planificar requisitos de cumplimiento

#### 4.2.2 Actividades

**Paso 1: Especificación de Requisitos**
1. Documentar requisitos funcionales
2. Documentar requisitos no funcionales (rendimiento, seguridad, accesibilidad)
3. Definir requisitos de cumplimiento del Reglamento de IA de la UE según el nivel de riesgo
4. Establecer criterios de aceptación

**Paso 2: Diseño de Arquitectura**
1. Diseñar arquitectura del sistema
2. Definir arquitectura del modelo y algoritmos
3. Diseñar mecanismos de supervisión humana (según STD-AI-007)
4. Diseñar registro y trazabilidad (según STD-AI-005)
5. Diseñar características de transparencia (según STD-AI-006)

**Paso 3: Planificación de Gobernanza de Datos**
1. Identificar requisitos de datos de entrenamiento, validación y prueba
2. Evaluar requisitos de calidad de datos (según STD-AI-003)
3. Documentar proveniencia y linaje de datos
4. Completar EIPD si hay datos personales involucrados
5. Establecer controles de gobernanza de datos

**Paso 4: Diseño de Controles de Riesgos**
1. Diseñar controles para riesgos identificados
2. Planificar medidas de detección y mitigación de sesgos
3. Diseñar medidas de precisión y robustez (según STD-AI-008)
4. Documentar especificaciones de controles

**Paso 5: Planificación de Documentación Técnica**
1. Planificar documentación técnica (según STD-AI-004)
2. Establecer estándares y plantillas de documentación
3. Asignar responsabilidades de documentación

#### 4.2.3 Entregables de la Puerta 2
- [ ] Documento de Especificación de Requisitos
- [ ] Documento de Arquitectura del Sistema
- [ ] Plan de Gobernanza de Datos
- [ ] Documento de Diseño de Controles de Riesgos
- [ ] EIPD (si aplica)
- [ ] Plan de Documentación Técnica
- [ ] Evaluación de Riesgos Actualizada

#### 4.2.4 Revisión de la Puerta 2
- **Revisores:** Responsable de Desarrollo de IA, Arquitecto de Seguridad, DPD, Gestor de Riesgos de IA
- **Decisión:** Proceder / Revisar / Rechazar
- **Documentación:** Registro de Revisión de Puerta 2 (REC-AI-DEV-002)

---

### 4.3 Fase 3: Desarrollo

#### 4.3.1 Objetivos
- Implementar el sistema de IA según el diseño aprobado
- Desarrollar y entrenar modelos
- Implementar controles de riesgos
- Crear documentación técnica

#### 4.3.2 Actividades

**Paso 1: Configuración del Entorno de Desarrollo**
1. Establecer entorno de desarrollo seguro
2. Configurar control de versiones y pipelines CI/CD
3. Configurar infraestructura de registro y monitorización
4. Implementar controles de acceso

**Paso 2: Preparación de Datos**
1. Adquirir y validar datos de entrenamiento
2. Implementar controles de calidad de datos
3. Documentar pasos de preprocesamiento de datos
4. Validar datos contra requisitos de gobernanza

**Paso 3: Desarrollo del Modelo**
1. Implementar arquitectura del modelo
2. Entrenar modelo usando datos aprobados
3. Implementar mecanismos de detección de sesgos
4. Documentar metodología y parámetros de entrenamiento

**Paso 4: Implementación de Controles**
1. Implementar controles de riesgos diseñados
2. Implementar características de supervisión humana
3. Implementar registro y pistas de auditoría
4. Implementar mecanismos de transparencia

**Paso 5: Pruebas Unitarias**
1. Realizar pruebas unitarias para todos los componentes
2. Probar efectividad de controles de riesgos
3. Documentar resultados de pruebas
4. Remediar problemas identificados

**Paso 6: Documentación Técnica**
1. Crear documentación técnica según Anexo IV (si es de alto riesgo)
2. Documentar especificaciones del modelo
3. Documentar implementación de gobernanza de datos
4. Mantener registros de decisiones de diseño

#### 4.3.3 Entregables de la Puerta 3
- [ ] Sistema/modelo de IA funcional
- [ ] Resultados de pruebas unitarias
- [ ] Documentación técnica (conforme al Anexo IV si es de alto riesgo)
- [ ] Registros de gobernanza de datos
- [ ] Evidencia de implementación de controles
- [ ] Registro de Riesgos Actualizado

#### 4.3.4 Revisión de la Puerta 3
- **Revisores:** Responsable de Desarrollo de IA, Responsable de QA, Gestor de Riesgos de IA
- **Decisión:** Proceder / Revisar / Rechazar
- **Documentación:** Registro de Revisión de Puerta 3 (REC-AI-DEV-003)

---

### 4.4 Fase 4: Pruebas y Validación

#### 4.4.1 Objetivos
- Validar que el sistema cumple los requisitos
- Verificar cumplimiento con el Reglamento de IA de la UE
- Evaluar riesgos residuales
- Preparar para el despliegue

#### 4.4.2 Actividades

**Paso 1: Pruebas de Integración**
1. Probar integración del sistema con sistemas upstream/downstream
2. Probar flujos de datos e interfaces
3. Validar registro y monitorización
4. Documentar resultados de pruebas de integración

**Paso 2: Pruebas de Rendimiento**
1. Probar métricas de precisión contra requisitos
2. Probar robustez bajo diversas condiciones
3. Probar resiliencia de ciberseguridad
4. Comparar contra criterios de rendimiento

**Paso 3: Pruebas de Sesgos e Imparcialidad**
1. Realizar pruebas de sesgos en características protegidas
2. Probar resultados discriminatorios
3. Validar métricas de imparcialidad
4. Documentar resultados de pruebas de sesgos

**Paso 4: Pruebas de Supervisión Humana**
1. Probar capacidades de anulación humana
2. Validar características de interpretabilidad
3. Probar sistemas de alertas y notificaciones
4. Verificar que el humano puede comprender las salidas

**Paso 5: Validación de Cumplimiento**
1. Verificar que se cumplen todos los requisitos del Reglamento de IA de la UE
2. Validar completitud de documentación técnica
3. Realizar auditoría interna de cumplimiento
4. Abordar brechas de cumplimiento

**Paso 6: Pruebas de Aceptación de Usuario**
1. Realizar UAT con usuarios representativos
2. Validar usabilidad y transparencia
3. Recopilar y abordar retroalimentación de usuarios
4. Documentar resultados de UAT

**Paso 7: Evaluación de Riesgos Residuales**
1. Reevaluar riesgos después de las pruebas
2. Documentar riesgos residuales
3. Obtener aprobaciones de aceptación de riesgos
4. Actualizar Registro de Riesgos

#### 4.4.3 Entregables de la Puerta 4
- [ ] Informe de pruebas de integración
- [ ] Informe de pruebas de rendimiento
- [ ] Informe de pruebas de sesgos e imparcialidad
- [ ] Informe de validación de supervisión humana
- [ ] Informe de validación de cumplimiento
- [ ] Firma de UAT
- [ ] Evaluación de riesgos residuales
- [ ] Registros de aceptación de riesgos

#### 4.4.4 Revisión de la Puerta 4
- **Revisores:** Responsable de QA, Gestor de Riesgos de IA, Responsable de Cumplimiento, Propietario del Sistema de IA
- **Decisión:** Proceder / Revisar / Rechazar
- **Documentación:** Registro de Revisión de Puerta 4 (REC-AI-DEV-004)

---

### 4.5 Fase 5: Despliegue

#### 4.5.1 Objetivos
- Completar evaluación de conformidad (si es de alto riesgo)
- Obtener aprobaciones de despliegue
- Desplegar a producción
- Completar requisitos de registro

#### 4.5.2 Actividades

**Paso 1: Evaluación de Conformidad (Solo Alto Riesgo)**
1. Completar evaluación de conformidad interna o contratar organismo notificado
2. Preparar documentación de evaluación de conformidad
3. Abordar cualquier no conformidad
4. Obtener marcado CE (si aplica)

**Paso 2: Documentación Final**
1. Finalizar documentación técnica
2. Preparar Declaración de Conformidad UE (si es de alto riesgo)
3. Preparar instrucciones de uso
4. Completar documentación de transparencia

**Paso 3: Registro**
1. Registrar en base de datos UE (si es de alto riesgo) según PROC-AI-REG-001
2. Completar registro interno de sistemas de IA
3. Documentar detalles de registro

**Paso 4: Aprobación de Despliegue**
1. Presentar al Comité de Gobernanza de IA
2. Obtener firma del Propietario del Sistema
3. Obtener firma de Cumplimiento
4. Obtener firma de aceptación de Riesgos

**Paso 5: Despliegue en Producción**
1. Ejecutar plan de despliegue
2. Verificar configuración de producción
3. Activar monitorización y registro
4. Verificar capacidad de rollback

**Paso 6: Verificación Post-Despliegue**
1. Verificar sistema operacional en producción
2. Confirmar monitorización activa
3. Validar métricas iniciales de producción
4. Documentar finalización del despliegue

#### 4.5.3 Entregables de la Puerta 5
- [ ] Informe de evaluación de conformidad (si es de alto riesgo)
- [ ] Declaración de Conformidad UE (si es de alto riesgo)
- [ ] Evidencia de marcado CE (si aplica)
- [ ] Registro en base de datos UE (si es de alto riesgo)
- [ ] Registros de aprobación de despliegue
- [ ] Verificación de despliegue en producción
- [ ] Confirmación de activación de monitorización

#### 4.5.4 Revisión de la Puerta 5
- **Revisores:** Propietario del Sistema de IA, Responsable de Cumplimiento, Gestor de Riesgos de IA, Comité de Gobernanza de IA
- **Decisión:** Proceder / Revisar / Rechazar
- **Documentación:** Registro de Revisión de Puerta 5 (REC-AI-DEV-005)

---

### 4.6 Fase 6: Operación y Monitorización

#### 4.6.1 Objetivos
- Monitorizar rendimiento del sistema y riesgos
- Mantener cumplimiento
- Gestionar incidentes y cambios
- Apoyar mejora continua

#### 4.6.2 Actividades

**Paso 1: Monitorización Post-Mercado**
1. Implementar plan PMM según PROC-AI-PMM-001
2. Monitorizar métricas de rendimiento
3. Rastrear incidentes y anomalías
4. Recopilar retroalimentación de usuarios

**Paso 2: Monitorización de Riesgos**
1. Monitorizar continuamente indicadores de riesgo
2. Actualizar Registro de Riesgos según sea necesario
3. Reevaluar riesgos periódicamente
4. Reportar estado de riesgos a gobernanza

**Paso 3: Mantenimiento de Cumplimiento**
1. Monitorizar cambios normativos
2. Mantener vigencia de documentación
3. Realizar revisiones periódicas de cumplimiento
4. Actualizar registros según sea necesario

**Paso 4: Gestión de Incidentes**
1. Gestionar incidentes según PROC-AI-INC-001
2. Reportar incidentes graves a las autoridades
3. Realizar análisis de causa raíz
4. Implementar acciones correctivas

**Paso 5: Gestión de Cambios**
1. Evaluar cambios propuestos por impacto
2. Reevaluar clasificación si hay cambios significativos
3. Actualizar documentación para cambios
4. Mantener registros de cambios

**Paso 6: Revisión Periódica**
1. Realizar revisiones anuales del sistema
2. Revisar evaluaciones de riesgos anualmente
3. Revisar estado de cumplimiento
4. Planificar mejoras

#### 4.6.3 Entregables de la Puerta 6 (Periódicos)
- [ ] Informes PMM
- [ ] Registro de Riesgos Actualizado
- [ ] Registros de revisión de cumplimiento
- [ ] Informes de incidentes y resoluciones
- [ ] Registros de cambios
- [ ] Informe de revisión anual

#### 4.6.4 Revisión de la Puerta 6 (Anual)
- **Revisores:** Propietario del Sistema de IA, Gestor de Riesgos de IA, Responsable de Cumplimiento
- **Decisión:** Continuar / Remediar / Retirar
- **Documentación:** Registro de Revisión Operacional (REC-AI-DEV-006)

---

### 4.7 Fase 7: Retirada

#### 4.7.1 Objetivos
- Desmantelar el sistema de IA de forma segura
- Preservar registros requeridos
- Disponer de datos apropiadamente
- Actualizar registros

#### 4.7.2 Actividades

**Paso 1: Planificación de Retirada**
1. Documentar justificación de retirada
2. Identificar partes interesadas afectadas
3. Planificar transición/reemplazo
4. Establecer cronograma de retirada

**Paso 2: Disposición de Datos**
1. Identificar requisitos de retención de datos
2. Archivar datos y documentación requeridos
3. Eliminar de forma segura datos no requeridos
4. Documentar disposición de datos

**Paso 3: Desmantelamiento del Sistema**
1. Deshabilitar acceso al sistema
2. Eliminar del entorno de producción
3. Archivar artefactos del sistema
4. Documentar pasos de desmantelamiento

**Paso 4: Actualizaciones de Registro**
1. Actualizar estado de registro en base de datos UE
2. Actualizar registro interno de sistemas de IA
3. Notificar a partes interesadas relevantes
4. Documentar actualizaciones de registro

**Paso 5: Retención de Registros**
1. Archivar documentación técnica (10 años para alto riesgo)
2. Archivar registros de cumplimiento
3. Archivar registros de riesgos e incidentes
4. Mantener pista de auditoría

#### 4.7.3 Entregables de la Puerta 7
- [ ] Aprobación de retirada
- [ ] Registros de disposición de datos
- [ ] Registros de desmantelamiento
- [ ] Confirmación de actualización de registro
- [ ] Índice de documentación archivada
- [ ] Registro de finalización de retirada

#### 4.7.4 Revisión de la Puerta 7
- **Revisores:** Propietario del Sistema de IA, Responsable de Cumplimiento, Gestor de Registros
- **Decisión:** Retirada Completa / Acciones Adicionales Requeridas
- **Documentación:** Registro de Retirada (REC-AI-DEV-007)

---

## 5. REGISTROS Y DOCUMENTACIÓN

### 5.1 Registros Requeridos

| ID de Registro | Nombre del Registro | Período de Retención | Propietario |
|-----------|-------------|------------------|-------|
| REC-AI-DEV-001 | Registro de Revisión de Puerta 1 | 10 años | Gestor de Proyecto |
| REC-AI-DEV-002 | Registro de Revisión de Puerta 2 | 10 años | Gestor de Proyecto |
| REC-AI-DEV-003 | Registro de Revisión de Puerta 3 | 10 años | Gestor de Proyecto |
| REC-AI-DEV-004 | Registro de Revisión de Puerta 4 | 10 años | Gestor de Proyecto |
| REC-AI-DEV-005 | Registro de Revisión de Puerta 5 | 10 años | Gestor de Proyecto |
| REC-AI-DEV-006 | Registro de Revisión Operacional | 10 años | Propietario del Sistema |
| REC-AI-DEV-007 | Registro de Retirada | 10 años | Propietario del Sistema |

### 5.2 Formularios Requeridos

| ID de Formulario | Nombre del Formulario | Propósito |
|---------|-----------|---------|
| FORM-AI-DEV-001 | Formulario de Registro de Proyecto de IA | Registrar nuevos proyectos de IA |
| FORM-AI-DEV-002 | Formulario de Aprobación de Puerta de Fase | Documentar decisiones de puerta |
| FORM-AI-DEV-003 | Formulario de Solicitud de Cambio | Solicitar cambios al sistema de IA |

---

## 6. DOCUMENTOS RELACIONADOS

### 6.1 Estándares
- STD-AI-001: Estándar de Clasificación de Sistemas de IA
- STD-AI-002: Estándar de Gestión de Riesgos de IA
- STD-AI-003: Estándar de Gobernanza de Datos de IA
- STD-AI-004: Estándar de Documentación Técnica de IA
- STD-AI-005: Estándar de Registro y Mantenimiento de Registros de IA
- STD-AI-006: Estándar de Transparencia de IA
- STD-AI-007: Estándar de Supervisión Humana de IA
- STD-AI-008: Estándar de Precisión, Robustez y Seguridad de IA

### 6.2 Procedimientos
- PROC-AI-CLS-001: Procedimiento de Clasificación de IA
- PROC-AI-RM-001: Procedimiento de Gestión de Riesgos de IA
- PROC-AI-DATA-001: Procedimiento de Gobernanza de Datos
- PROC-AI-DOC-001: Procedimiento de Documentación Técnica
- PROC-AI-PMM-001: Procedimiento de Monitorización Post-Mercado
- PROC-AI-INC-001: Procedimiento de Gestión de Incidentes
- PROC-AI-REG-001: Procedimiento de Registro
- PROC-AI-VENDOR-001: Procedimiento de Gestión de Proveedores

### 6.3 Referencias Externas
- Reglamento de IA de la UE (Reglamento 2024/1689)
- ISO/IEC 42001: Sistema de Gestión de IA
- ISO/IEC 23894: Gestión de Riesgos de IA

---

## 7. HISTORIAL DE REVISIONES

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | [Fecha] | [Autor] | Versión inicial |

---

## APÉNDICE A: FORMULARIO DE REGISTRO DE PROYECTO DE IA (FORM-AI-DEV-001)

### Sección 1: Información del Proyecto
| Campo | Valor |
|-------|-------|
| Nombre del Proyecto | |
| ID del Proyecto | |
| Solicitado Por | |
| Fecha de Solicitud | |
| Fecha Objetivo de Puesta en Marcha | |

### Sección 2: Descripción del Sistema de IA
| Campo | Valor |
|-------|-------|
| Nombre del Sistema | |
| Propósito Previsto | |
| Usuarios Objetivo | |
| Contexto de Despliegue | |
| Salidas Esperadas | |

### Sección 3: Clasificación Inicial
| Pregunta | Respuesta |
|----------|----------|
| ¿Es una práctica prohibida según el Artículo 5? | Sí / No |
| ¿Corresponde al Anexo I (seguridad de productos)? | Sí / No |
| ¿Corresponde al Anexo III (casos de uso de alto riesgo)? | Sí / No |
| Clasificación Inicial de Riesgo | Prohibido / Alto / Limitado / Mínimo |

### Sección 4: Aprobaciones
| Rol | Nombre | Firma | Fecha |
|------|------|-----------|------|
| Solicitante | | | |
| Propietario del Sistema de IA | | | |
| Gestor de Riesgos de IA | | | |

---

## APÉNDICE B: FORMULARIO DE APROBACIÓN DE PUERTA DE FASE (FORM-AI-DEV-002)

### Sección 1: Información de la Puerta
| Campo | Valor |
|-------|-------|
| ID del Proyecto | |
| Nombre del Proyecto | |
| Número de Puerta | Puerta 1 / 2 / 3 / 4 / 5 / 6 / 7 |
| Fecha de la Puerta | |

### Sección 2: Lista de Verificación de Entregables
| Entregable | Completo | Ubicación de Evidencia |
|-------------|----------|-------------------|
| [Entregable 1] | Sí / No | |
| [Entregable 2] | Sí / No | |
| [Entregable 3] | Sí / No | |

### Sección 3: Estado de Riesgos
| Nivel de Riesgo | Cantidad | Mayor No Mitigado |
|------------|-------|---------------------|
| Crítico | | |
| Alto | | |
| Medio | | |
| Bajo | | |

### Sección 4: Decisión de Puerta
| Decisión | Proceder / Proceder Condicionalmente / Revisar / Rechazar |
|----------|------------------------------------------------|
| Condiciones (si las hay) | |
| Justificación | |

### Sección 5: Aprobaciones
| Rol | Nombre | Decisión | Firma | Fecha |
|------|------|----------|-----------|------|
| [Revisor 1] | | Aprobar/Rechazar | | |
| [Revisor 2] | | Aprobar/Rechazar | | |
| [Revisor 3] | | Aprobar/Rechazar | | |
