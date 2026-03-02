# PROC-AI-VENDOR-001: Procedimiento de Gestión de Proveedores de IA

**ID del Procedimiento:** PROC-AI-VENDOR-001
**Nombre del Procedimiento:** Procedimiento de Gestión de Proveedores de IA
**Estándar:** STD-AI-001: Estándar de Clasificación de Sistemas de IA, STD-AI-002: Estándar de Gestión de Riesgos de IA, STD-AI-009: Estándar de Sistema de Gestión de Calidad
**Controles Cubiertos:** CLS-001, CLS-005, RM-001, RM-006, QMS-001, QMS-007
**Fecha de Vigencia:** [Por completar]
**Última Actualización:** [Por completar]
**Próxima Fecha de Revisión:** [Por completar]
**Estado de Aprobación:** [Borrador/Aprobado]

---

## 1. PROPÓSITO Y ALCANCE

### 1.1 Propósito

Este procedimiento establece los requisitos para gestionar proveedores externos de sistemas de IA a lo largo del ciclo de vida del proveedor, asegurando que los sistemas de IA adquiridos cumplan con el Reglamento de IA de la UE y los requisitos organizacionales. Esto incluye selección de proveedores, debida diligencia, contratación, gestión continua y terminación.

### 1.2 Alcance

Este procedimiento aplica a:
- Adquisición de sistemas y componentes de IA comerciales
- Desarrollo de sistemas de IA por proveedores externos
- Suscripciones de IA como Servicio (AIaaS)
- Proveedores de modelos de IA y APIs de modelos fundacionales
- Proveedores de infraestructura y plataformas de IA
- Consultores e integradores de IA que proporcionan capacidades de IA
- Subprocesadores de proveedores de IA

Este procedimiento no aplica a:
- Sistemas de IA desarrollados internamente (ver PROC-AI-DEV-001)
- Adquisición de software sin IA
- Adquisición de hardware sin componentes de IA

### 1.3 Propietario del Procedimiento y Contactos

| Rol | Nombre | Cargo | Contacto |
|-----|--------|-------|----------|
| **Propietario del Procedimiento** | [Nombre] | Gerente de Adquisiciones | [Email/Teléfono] |
| **Revisión Técnica** | [Nombre] | Líder de Desarrollo de IA | [Email/Teléfono] |
| **Cumplimiento** | [Nombre] | Oficial de Cumplimiento | [Email/Teléfono] |

---

## 2. ROLES Y RESPONSABILIDADES

### 2.1 Roles Clave

| Rol | Responsabilidad | Autoridad |
|-----|-----------------|-----------|
| **Gerente de Adquisiciones** | Gestionar ciclo de vida del proveedor; negociación de contratos; desempeño del proveedor | Aprobar selección de proveedores; terminar contratos |
| **Propietario del Sistema de IA** | Definir requisitos; aceptar sistemas de IA del proveedor; ser responsable del cumplimiento | Aprobar selección de proveedores; aceptar riesgos |
| **Gestor de Riesgos de IA** | Evaluar riesgos del proveedor; validar controles de riesgo del proveedor | Bloquear proveedores de alto riesgo; requerir controles adicionales |
| **Oficial de Cumplimiento** | Verificar cumplimiento del proveedor con Reglamento de IA de la UE; validar certificaciones | Rechazar proveedores no conformes |
| **Arquitecto de Seguridad** | Evaluación de seguridad; requisitos de pruebas de penetración | Bloquear proveedores con problemas de seguridad |
| **Delegado de Protección de Datos** | Cumplimiento del RGPD; acuerdos de procesamiento de datos | Aprobar términos de procesamiento de datos |
| **Asesor Legal** | Revisión de contratos; términos de responsabilidad; protección de PI | Aprobar términos contractuales |
| **Comité de Gobernanza de IA** | Supervisión de gobernanza; decisiones estratégicas de proveedores | Aprobar relaciones con proveedores de alto riesgo |

### 2.2 Matriz RACI

| Actividad | Adquisiciones | Propietario Sistema | Gestor Riesgos | Cumplimiento | Seguridad | DPD | Legal |
|-----------|---------------|---------------------|----------------|--------------|-----------|-----|-------|
| Identificación de proveedores | R | A | I | C | I | I | I |
| Definición de requisitos | C | A | C | C | C | C | I |
| Debida diligencia | R | C | R | R | R | R | C |
| Evaluación de riesgos | C | C | A | C | C | C | I |
| Negociación de contratos | R | C | I | C | C | C | A |
| Selección de proveedores | R | A | R | R | R | R | C |
| Monitoreo continuo | R | A | R | C | C | C | I |
| Revisiones de desempeño | R | A | C | C | C | C | I |
| Renovación/terminación de contrato | R | A | C | C | C | C | R |

**Leyenda:** A=Aprobador, R=Responsable, C=Consultado, I=Informado

---

## 3. MARCO DE GESTIÓN DE PROVEEDORES DE IA

### 3.1 Visión General del Ciclo de Vida del Proveedor

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              CICLO DE VIDA DE GESTIÓN DE PROVEEDORES DE IA                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐    │
│   │ IDENTIFICAR│───►│  EVALUAR   │───►│ CONTRATAR  │───►│ INCORPORAR │    │
│   │   Y RFP    │    │   Y DEBIDA │    │   Y SLA    │    │  Y PROBAR  │    │
│   │            │    │ DILIGENCIA │    │            │    │            │    │
│   └────────────┘    └────────────┘    └────────────┘    └────────────┘    │
│                                                               │            │
│   ┌────────────────────────────────────────────────────────────┘           │
│   │                                                                        │
│   ▼                                                                        │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐                      │
│   │ GESTIONAR  │───►│  REVISAR   │───►│  RENOVAR O │                      │
│   │  CONTINUO  │    │ DESEMPEÑO  │    │  TERMINAR  │                      │
│   │            │    │            │    │            │                      │
│   └────────────┘    └────────────┘    └────────────┘                      │
│         ▲                │                                                 │
│         └────────────────┘ (Ciclo continuo durante la relación)           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Niveles de Riesgo del Proveedor

Los proveedores de IA se clasifican en niveles de riesgo según la criticidad y nivel de riesgo de sus sistemas de IA:

| Nivel | Criterios | Nivel de Debida Diligencia | Frecuencia de Revisión |
|-------|-----------|----------------------------|------------------------|
| **Nivel 1 - Crítico** | Sistemas de IA de alto riesgo; críticos para la misión; procesan datos sensibles | Exhaustiva | Trimestral |
| **Nivel 2 - Significativo** | IA de riesgo limitado; procesos de negocio importantes; sensibilidad de datos moderada | Estándar | Semestral |
| **Nivel 3 - Estándar** | IA de riesgo mínimo; no crítico; procesamiento de datos limitado | Básica | Anual |

---

## 4. PROCEDIMIENTOS DETALLADOS DE GESTIÓN DE PROVEEDORES

### 4.1 Fase 1: Identificación del Proveedor y RFP

#### 4.1.1 Objetivos
- Identificar proveedores potenciales de IA
- Definir requisitos claramente
- Solicitar propuestas

#### 4.1.2 Actividades

**Paso 1: Definición de Requisitos**
1. Documentar requisitos de negocio con el Propietario del Sistema de IA
2. Definir requisitos técnicos incluyendo:
   - Especificaciones funcionales
   - Requisitos de rendimiento
   - Requisitos de integración
   - Necesidades de escalabilidad
3. Definir requisitos de cumplimiento del Reglamento de IA de la UE:
   - Clasificación de riesgo esperada
   - Requisitos de documentación
   - Requisitos de transparencia
   - Requisitos de supervisión humana
4. Definir requisitos de seguridad y protección de datos
5. Completar Lista de Verificación de Requisitos de Proveedores de IA (CHK-AI-VENDOR-001)

**Paso 2: Investigación de Mercado**
1. Investigar proveedores potenciales
2. Revisar credenciales y certificaciones del proveedor
3. Verificar historial del proveedor con cumplimiento del Reglamento de IA de la UE
4. Identificar proveedores con presencia relevante en la UE
5. Documentar hallazgos de la investigación

**Paso 3: Solicitud de Propuesta (RFP)**
1. Preparar RFP incluyendo:
   - Requisitos de negocio y técnicos
   - Requisitos de cumplimiento del Reglamento de IA de la UE
   - Cuestionario de seguridad
   - Requisitos de precios
   - Criterios de evaluación
2. Incluir preguntas específicas de IA:
   - Transparencia y explicabilidad del modelo
   - Gobernanza de datos de entrenamiento
   - Metodología de pruebas de sesgo
   - Capacidades de registro y auditoría
   - Características de supervisión humana
   - Procedimientos de respuesta a incidentes
3. Distribuir RFP a proveedores calificados
4. Gestionar proceso de preguntas y respuestas
5. Recopilar y registrar propuestas

#### 4.1.3 Entregables
- [ ] Lista de Verificación de Requisitos de Proveedores de IA (CHK-AI-VENDOR-001)
- [ ] Documento RFP
- [ ] Propuestas de proveedores recibidas

---

### 4.2 Fase 2: Evaluación del Proveedor y Debida Diligencia

#### 4.2.1 Objetivos
- Evaluar propuestas de proveedores
- Realizar debida diligencia exhaustiva
- Evaluar riesgos

#### 4.2.2 Actividades

**Paso 1: Selección Inicial**
1. Revisar propuestas contra requisitos obligatorios
2. Eliminar propuestas no conformes
3. Puntuar propuestas restantes contra criterios de evaluación
4. Crear lista corta de proveedores (típicamente 2-4)

**Paso 2: Evaluación Técnica**
1. Evaluar arquitectura y diseño del sistema de IA
2. Revisar documentación y especificaciones del modelo
3. Evaluar afirmaciones de precisión y rendimiento
4. Revisar resultados de pruebas de sesgo
5. Evaluar capacidades de supervisión humana
6. Evaluar características de registro y pista de auditoría
7. Revisar capacidades de integración
8. Completar Formulario de Evaluación Técnica (FORM-AI-VENDOR-001)

**Paso 3: Evaluación de Cumplimiento del Reglamento de IA de la UE**
1. Solicitar y revisar documentación de cumplimiento del proveedor:
   - Documentación técnica (formato Anexo IV si es de alto riesgo)
   - Declaración de Conformidad de la UE (si aplica)
   - Evidencia de marcado CE (si aplica)
   - Registro en base de datos de la UE (si es de alto riesgo)
2. Verificar clasificación del sistema de IA
3. Evaluar SGC del proveedor para IA (según ISO/IEC 42001 o equivalente)
4. Revisar procedimientos de vigilancia post-comercialización
5. Revisar procedimientos de notificación de incidentes
6. Completar Formulario de Evaluación de Cumplimiento de IA (FORM-AI-VENDOR-002)

**Paso 4: Evaluación de Seguridad**
1. Revisar certificaciones de seguridad del proveedor (ISO 27001, SOC 2)
2. Realizar revisión del cuestionario de seguridad
3. Solicitar y revisar resultados de pruebas de penetración
4. Evaluar seguridad de datos y cifrado
5. Revisar controles de acceso y autenticación
6. Completar Formulario de Evaluación de Seguridad

**Paso 5: Evaluación de Protección de Datos**
1. Revisar actividades de procesamiento de datos
2. Evaluar medidas de cumplimiento del RGPD
3. Revisar acuerdos con subprocesadores
4. Evaluar mecanismos de transferencia de datos (para proveedores fuera de la UE)
5. Revisar prácticas de retención y eliminación de datos
6. Completar Evaluación de Impacto de Protección de Datos (si se requiere)

**Paso 6: Evaluación Financiera y Operativa**
1. Revisar estabilidad financiera del proveedor
2. Evaluar planes de continuidad del negocio
3. Revisar capacidades de SLA
4. Evaluar servicios de soporte y mantenimiento
5. Verificar referencias de otros clientes

**Paso 7: Evaluación de Riesgos**
1. Compilar todos los hallazgos de evaluación
2. Identificar riesgos específicos del proveedor
3. Evaluar probabilidad e impacto de los riesgos
4. Determinar clasificación de nivel de riesgo
5. Documentar riesgos en el Registro de Riesgos de Proveedores (REC-AI-VENDOR-001)
6. Recomendar medidas de mitigación de riesgos
7. Completar Formulario de Evaluación de Riesgos del Proveedor (FORM-AI-VENDOR-003)

**Paso 8: Selección del Proveedor**
1. Compilar puntuaciones de evaluación y evaluaciones de riesgos
2. Presentar hallazgos al comité de selección
3. Seleccionar proveedor preferido
4. Obtener aprobaciones necesarias:
   - Propietario del Sistema de IA
   - Gestor de Riesgos de IA
   - Oficial de Cumplimiento
   - Comité de Gobernanza de IA (para proveedores de Nivel 1)
5. Notificar a proveedores seleccionados y no seleccionados

#### 4.2.3 Entregables
- [ ] Formulario de Evaluación Técnica (FORM-AI-VENDOR-001)
- [ ] Formulario de Evaluación de Cumplimiento de IA (FORM-AI-VENDOR-002)
- [ ] Formulario de Evaluación de Seguridad
- [ ] Evaluación de Protección de Datos
- [ ] Formulario de Evaluación de Riesgos del Proveedor (FORM-AI-VENDOR-003)
- [ ] Entrada en Registro de Riesgos de Proveedores (REC-AI-VENDOR-001)
- [ ] Registros de aprobación de selección del proveedor

---

### 4.3 Fase 3: Contrato y SLA

#### 4.3.1 Objetivos
- Negociar contrato integral
- Establecer acuerdos de nivel de servicio
- Definir obligaciones de cumplimiento

#### 4.3.2 Actividades

**Paso 1: Negociación del Contrato**
1. Negociar términos comerciales
2. Negociar disposiciones contractuales específicas de IA:

**Cláusulas Contractuales Estándar de IA (Obligatorias):**

| Categoría de Cláusula | Disposiciones Requeridas |
|-----------------------|--------------------------|
| **Cumplimiento del Reglamento de IA de la UE** | El proveedor declara cumplimiento con los requisitos aplicables del Reglamento de IA de la UE; mantiene conformidad durante todo el contrato |
| **Documentación Técnica** | El proveedor proporciona y mantiene documentación conforme al Anexo IV; proporciona actualizaciones dentro de [X] días de los cambios |
| **Transparencia** | El proveedor permite obligaciones de transparencia del desplegador; proporciona información necesaria para usuarios posteriores |
| **Gestión de Riesgos** | El proveedor mantiene sistema de gestión de riesgos; notifica al desplegador de cambios en riesgos; apoya evaluaciones de riesgos |
| **Supervisión Humana** | El proveedor proporciona capacidades de supervisión humana según documentado; apoya requisitos de supervisión del desplegador |
| **Registro** | El proveedor proporciona registro automático según Artículo 12; retiene registros por [período]; proporciona acceso a registros |
| **Gobernanza de Datos** | El proveedor mantiene gobernanza de datos según STD-AI-003; documenta procedencia de datos; reporta problemas de calidad de datos |
| **Notificación de Incidentes** | El proveedor reporta incidentes graves dentro de [24] horas; coopera con investigaciones; implementa acciones correctivas |
| **Derechos de Auditoría** | El desplegador tiene derecho a auditar cumplimiento de IA del proveedor; el proveedor coopera con auditorías regulatorias |
| **Subprocesadores** | El proveedor divulga subprocesadores de IA; requiere cumplimiento equivalente; notifica cambios de subprocesadores |
| **Notificación de Cambios** | El proveedor notifica cambios materiales con [X] días de anticipación; proporciona evaluación de impacto del cambio |
| **Terminación** | Disposiciones de asistencia en transición; devolución/eliminación de datos; cumplimiento continuo durante transición |
| **Responsabilidad** | Asignación clara de responsabilidad del Reglamento de IA de la UE; indemnización por fallas de cumplimiento |

**Paso 2: Acuerdo de Nivel de Servicio**
1. Definir SLAs de rendimiento:
   - Requisitos de disponibilidad y tiempo de actividad
   - Requisitos de tiempo de respuesta
   - Métricas de precisión/rendimiento
   - Tiempos de respuesta de soporte
2. Definir SLAs de cumplimiento:
   - Plazos de actualización de documentación
   - Plazos de notificación de incidentes
   - Plazos de cooperación en auditorías
3. Definir remedios y penalidades por incumplimiento de SLA
4. Establecer requisitos de informes de SLA

**Paso 3: Acuerdo de Procesamiento de Datos**
1. Ejecutar DPA según Artículo 28 del RGPD
2. Definir actividades y propósitos de procesamiento
3. Especificar medidas técnicas y organizativas
4. Definir requisitos de subprocesadores
5. Establecer mecanismos de transferencia de datos (CCE si aplica)

**Paso 4: Finalización del Contrato**
1. Revisión legal de todos los documentos del contrato
2. Obtener aprobaciones internas requeridas
3. Ejecutar contrato y todos los anexos
4. Almacenar contratos ejecutados en sistema de gestión de contratos
5. Documentar fechas clave y obligaciones

#### 4.3.3 Entregables
- [ ] Acuerdo marco ejecutado
- [ ] Acuerdo de Nivel de Servicio
- [ ] Acuerdo de Procesamiento de Datos
- [ ] Anexo/adenda específico de IA
- [ ] Resumen de contrato aprobado

---

### 4.4 Fase 4: Incorporación y Pruebas

#### 4.4.1 Objetivos
- Validar sistema de IA del proveedor
- Integrar con sistemas organizacionales
- Establecer procesos operativos

#### 4.4.2 Actividades

**Paso 1: Inicio y Planificación**
1. Realizar reunión de inicio con el proveedor
2. Establecer gobernanza del proyecto
3. Asignar recursos internos
4. Crear plan de implementación
5. Establecer canales de comunicación

**Paso 2: Incorporación Técnica**
1. Configurar acceso y credenciales del proveedor
2. Configurar integraciones
3. Establecer registro y monitoreo
4. Configurar controles de seguridad
5. Configurar entorno de pruebas

**Paso 3: Validación de Cumplimiento**
1. Verificar que la documentación recibida coincide con los requisitos contratados
2. Validar completitud de documentación técnica
3. Verificar estado de registro (si es de alto riesgo)
4. Validar características de supervisión humana
5. Probar capacidades de registro
6. Documentar resultados de validación

**Paso 4: Pruebas de Aceptación**
1. Ejecutar plan de pruebas de aceptación
2. Probar requisitos funcionales
3. Validar rendimiento contra SLAs
4. Probar controles de seguridad
5. Realizar pruebas de sesgo y equidad
6. Probar capacidades de supervisión humana
7. Documentar resultados de pruebas
8. Remediar problemas

**Paso 5: Capacitación de Usuarios**
1. Capacitar administradores del sistema
2. Capacitar usuarios finales
3. Documentar completación de capacitación
4. Establecer procesos de soporte

**Paso 6: Puesta en Producción**
1. Obtener aprobación de puesta en producción
2. Ejecutar transición a producción
3. Monitorear operaciones iniciales
4. Documentar lecciones aprendidas
5. Cerrar proyecto de incorporación

#### 4.4.3 Entregables
- [ ] Plan de implementación
- [ ] Documentación de integración
- [ ] Informe de validación de cumplimiento
- [ ] Resultados de pruebas de aceptación
- [ ] Registros de completación de capacitación
- [ ] Aprobación de puesta en producción
- [ ] Registro de completación de incorporación

---

### 4.5 Fase 5: Gestión Continua

#### 4.5.1 Objetivos
- Monitorear desempeño del proveedor
- Mantener cumplimiento
- Gestionar cambios e incidencias

#### 4.5.2 Actividades

**Paso 1: Monitoreo de Desempeño**
1. Rastrear métricas de SLA
2. Monitorear disponibilidad y rendimiento
3. Rastrear volúmenes de incidentes y resolución
4. Monitorear satisfacción del usuario
5. Generar informes de desempeño

**Paso 2: Monitoreo de Cumplimiento**
1. Rastrear atestaciones de cumplimiento del proveedor
2. Monitorear actualizaciones de documentación
3. Revisar informes de auditoría del proveedor
4. Rastrear cambios regulatorios que afectan al proveedor
5. Validar cumplimiento continuo del Reglamento de IA de la UE

**Paso 3: Monitoreo de Riesgos**
1. Monitorear indicadores de riesgo del proveedor
2. Actualizar Registro de Riesgos de Proveedores
3. Rastrear salud financiera del proveedor
4. Monitorear postura de seguridad del proveedor
5. Escalar riesgos emergentes

**Paso 4: Gestión de Cambios**
1. Revisar notificaciones de cambios del proveedor
2. Evaluar impactos de cambios
3. Aprobar o rechazar cambios
4. Reclasificar si hay cambios significativos
5. Actualizar documentación

**Paso 5: Gestión de Incidencias**
1. Registrar incidencias del proveedor
2. Rastrear resolución de incidencias
3. Escalar incidencias no resueltas
4. Documentar lecciones aprendidas

**Paso 6: Gestión de Relaciones**
1. Realizar reuniones regulares con el proveedor
2. Abordar inquietudes y retroalimentación
3. Planificar requisitos futuros
4. Gestionar variaciones de contrato

#### 4.5.3 Entregables (Continuos)
- [ ] Informes de desempeño (según SLA)
- [ ] Registros de monitoreo de cumplimiento
- [ ] Registro de Riesgos de Proveedores actualizado
- [ ] Registros de cambios
- [ ] Registros de incidencias y resoluciones
- [ ] Minutas de reuniones

---

### 4.6 Fase 6: Revisiones de Desempeño

#### 4.6.1 Objetivos
- Evaluar desempeño del proveedor
- Evaluar estado de cumplimiento
- Determinar continuación de la relación

#### 4.6.2 Actividades

**Paso 1: Preparar Revisión**
1. Compilar datos de desempeño
2. Compilar registros de cumplimiento
3. Compilar datos de evaluación de riesgos
4. Recopilar retroalimentación de partes interesadas
5. Preparar presentación de revisión

**Paso 2: Realizar Revisión**
1. Revisar desempeño de SLA
2. Revisar estado de cumplimiento
3. Revisar estado de riesgos
4. Revisar historial de incidencias
5. Evaluar desempeño general del proveedor
6. Puntuar proveedor usando Tarjeta de Puntuación del Proveedor (FORM-AI-VENDOR-004)

**Paso 3: Reunión de Revisión**
1. Presentar hallazgos al proveedor
2. Discutir áreas de mejora
3. Acordar acciones
4. Planificar próximo período
5. Documentar resultados de la reunión

**Paso 4: Acciones Post-Revisión**
1. Implementar mejoras acordadas
2. Actualizar registros del proveedor
3. Informar a partes interesadas
4. Planificar próxima revisión

#### 4.6.3 Frecuencia de Revisión
| Nivel del Proveedor | Frecuencia de Revisión |
|---------------------|------------------------|
| Nivel 1 - Crítico | Trimestral |
| Nivel 2 - Significativo | Semestral |
| Nivel 3 - Estándar | Anual |

#### 4.6.4 Entregables
- [ ] Tarjeta de Puntuación del Proveedor (FORM-AI-VENDOR-004)
- [ ] Informe de Revisión de Desempeño
- [ ] Acciones y plan de mejora
- [ ] Registros del proveedor actualizados

---

### 4.7 Fase 7: Renovación o Terminación

#### 4.7.1 Proceso de Renovación

**Paso 1: Evaluación de Renovación**
1. Revisar desempeño acumulado del proveedor
2. Evaluar necesidad de negocio continua
3. Evaluar alternativas de mercado
4. Revisar términos del contrato para renovación
5. Realizar evaluación de riesgos actualizada

**Paso 2: Decisión de Renovación**
1. Recomendar renovación o terminación
2. Obtener aprobaciones
3. Negociar términos de renovación si aplica
4. Ejecutar documentación de renovación

#### 4.7.2 Proceso de Terminación

**Paso 1: Planificación de Terminación**
1. Documentar justificación de terminación
2. Revisar disposiciones contractuales de terminación
3. Evaluar requisitos de transición
4. Identificar solución de reemplazo (si es necesario)
5. Crear plan de terminación

**Paso 2: Ejecución de Transición**
1. Notificar al proveedor según términos del contrato
2. Ejecutar extracción de datos
3. Migrar a solución de reemplazo
4. Validar integridad de datos
5. Desmantelar sistema del proveedor

**Paso 3: Desvinculación del Proveedor**
1. Revocar acceso del proveedor
2. Confirmar devolución/eliminación de datos
3. Liquidar pagos finales
4. Documentar lecciones aprendidas
5. Archivar registros del proveedor
6. Actualizar Registro de Sistemas de IA

#### 4.7.3 Entregables
- [ ] Registro de decisión de renovación o terminación
- [ ] Plan de transición (si se termina)
- [ ] Confirmación de migración/eliminación de datos
- [ ] Documentación de lecciones aprendidas
- [ ] Registros del proveedor archivados

---

## 5. REGISTROS Y DOCUMENTACIÓN

### 5.1 Registros Requeridos

| ID de Registro | Nombre del Registro | Período de Retención | Propietario |
|----------------|---------------------|----------------------|-------------|
| REC-AI-VENDOR-001 | Registro de Riesgos de Proveedores | Vida de la relación + 10 años | Adquisiciones |
| REC-AI-VENDOR-002 | Registros de Debida Diligencia | Vida de la relación + 10 años | Adquisiciones |
| REC-AI-VENDOR-003 | Registros de Desempeño | Vida de la relación + 10 años | Adquisiciones |
| REC-AI-VENDOR-004 | Registros de Contratos | Vida de la relación + 10 años | Legal |

### 5.2 Formularios Requeridos

| ID de Formulario | Nombre del Formulario | Propósito |
|------------------|----------------------|-----------|
| FORM-AI-VENDOR-001 | Formulario de Evaluación Técnica | Evaluar capacidades técnicas de IA del proveedor |
| FORM-AI-VENDOR-002 | Formulario de Evaluación de Cumplimiento de IA | Evaluar cumplimiento del proveedor con Reglamento de IA de la UE |
| FORM-AI-VENDOR-003 | Formulario de Evaluación de Riesgos del Proveedor | Documentar evaluación de riesgos del proveedor |
| FORM-AI-VENDOR-004 | Tarjeta de Puntuación del Proveedor | Calificar desempeño del proveedor |

---

## 6. DOCUMENTOS RELACIONADOS

### 6.1 Estándares
- STD-AI-001: Estándar de Clasificación de Sistemas de IA
- STD-AI-002: Estándar de Gestión de Riesgos de IA
- STD-AI-003: Estándar de Gobernanza de Datos de IA
- STD-AI-009: Estándar de Sistema de Gestión de Calidad

### 6.2 Procedimientos
- PROC-AI-CLS-001: Procedimiento de Clasificación de IA
- PROC-AI-RM-001: Procedimiento de Gestión de Riesgos de IA
- PROC-AI-DEV-001: Procedimiento de Ciclo de Vida de Desarrollo de IA
- PROC-AI-INC-001: Procedimiento de Gestión de Incidentes

### 6.3 Listas de Verificación
- CHK-AI-VENDOR-001: Lista de Verificación de Requisitos de Proveedores de IA

### 6.4 Referencias Externas
- Reglamento de IA de la UE (Reglamento 2024/1689)
- ISO/IEC 42001: Sistema de Gestión de IA
- ISO 37500: Guía sobre externalización

---

## 7. HISTORIAL DE REVISIONES

| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | [Fecha] | [Autor] | Publicación inicial |

---

## APÉNDICE A: LISTA DE VERIFICACIÓN DE REQUISITOS DE PROVEEDORES DE IA (CHK-AI-VENDOR-001)

### A.1 Requisitos Obligatorios del Reglamento de IA de la UE

| # | Requisito | Requerido para Alto Riesgo | Requerido para Riesgo Limitado | Evidencia |
|---|-----------|----------------------------|--------------------------------|-----------|
| 1 | Documentación técnica según Anexo IV | Sí | Recomendado | |
| 2 | Declaración de Conformidad de la UE | Sí | No | |
| 3 | Marcado CE | Sí (si aplica) | No | |
| 4 | Registro en base de datos de la UE | Sí | No | |
| 5 | Sistema de gestión de calidad | Sí | Recomendado | |
| 6 | Sistema de gestión de riesgos | Sí | Recomendado | |
| 7 | Medidas de gobernanza de datos | Sí | Recomendado | |
| 8 | Registro automático | Sí | No | |
| 9 | Disposiciones de transparencia | Sí | Sí | |
| 10 | Medidas de supervisión humana | Sí | Recomendado | |
| 11 | Medidas de precisión y robustez | Sí | Recomendado | |
| 12 | Vigilancia post-comercialización | Sí | Recomendado | |
| 13 | Notificación de incidentes graves | Sí | Sí | |

### A.2 Requisitos Técnicos

| # | Requisito | Prioridad | Verificado |
|---|-----------|-----------|------------|
| 1 | Cumple especificaciones funcionales | Obligatorio | |
| 2 | Cumple requisitos de rendimiento | Obligatorio | |
| 3 | Capacidades de integración | Obligatorio | |
| 4 | Escalabilidad | [Prioridad] | |
| 5 | Documentación de API | [Prioridad] | |
| 6 | Documentación del modelo | [Prioridad] | |

### A.3 Requisitos de Seguridad

| # | Requisito | Prioridad | Verificado |
|---|-----------|-----------|------------|
| 1 | Certificación de seguridad (ISO 27001, SOC 2) | [Prioridad] | |
| 2 | Cifrado en reposo y en tránsito | Obligatorio | |
| 3 | Controles de acceso | Obligatorio | |
| 4 | Pruebas de penetración | [Prioridad] | |
| 5 | Gestión de vulnerabilidades | [Prioridad] | |

---

## APÉNDICE B: PLANTILLA DE TARJETA DE PUNTUACIÓN DEL PROVEEDOR (FORM-AI-VENDOR-004)

### B.1 Información del Proveedor
| Campo | Valor |
|-------|-------|
| Nombre del Proveedor | |
| Referencia del Contrato | |
| Período de Revisión | |
| Revisor | |

### B.2 Puntuaciones de Desempeño

| Categoría | Peso | Puntuación (1-5) | Puntuación Ponderada | Comentarios |
|-----------|------|------------------|----------------------|-------------|
| Desempeño de SLA | 25% | | | |
| Cumplimiento | 25% | | | |
| Seguridad | 15% | | | |
| Calidad de Soporte | 15% | | | |
| Innovación | 10% | | | |
| Relación | 10% | | | |
| **Total** | **100%** | | **[Total]** | |

### B.3 Guía de Puntuación
- 5 = Excepcional - Supera los requisitos
- 4 = Bueno - Cumple todos los requisitos
- 3 = Aceptable - Cumple la mayoría de los requisitos
- 2 = Por Debajo de Expectativas - Se necesita mejora
- 1 = Inaceptable - Problemas significativos

### B.4 Evaluación General
| Campo | Valor |
|-------|-------|
| Calificación General | |
| Recomendación | Continuar / Mejorar / Terminar |
| Fortalezas Clave | |
| Áreas Clave de Mejora | |
| Acciones | |

### B.5 Aprobaciones
| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Revisor | | | |
| Gerente de Adquisiciones | | | |
| Propietario del Sistema de IA | | | |
