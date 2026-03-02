# FORM-AI-CLS-001: Formulario de Clasificación de Sistemas de IA

**ID del Formulario:** FORM-AI-CLS-001
**Nombre del Formulario:** Formulario de Clasificación de Sistemas de IA
**Versión:** 1.0
**Fecha de Vigencia:** [Por completar]
**Estándar Relacionado:** STD-AI-001: Estándar de Clasificación de Sistemas de IA
**Procedimiento Relacionado:** PROC-AI-CLS-001: Procedimiento de Clasificación de IA

---

## Propósito

Este formulario se utiliza para documentar la clasificación de riesgo de los sistemas de IA según la Ley de IA de la UE. Complete este formulario para todos los sistemas de IA antes del desarrollo o despliegue para determinar los requisitos regulatorios aplicables.

## Instrucciones

1. Complete todas las secciones en orden
2. Proporcione evidencia de apoyo para las decisiones de clasificación
3. Obtenga las aprobaciones requeridas según el resultado de la clasificación
4. Conserve el formulario completado durante un mínimo de 10 años (sistemas de alto riesgo)

---

## SECCIÓN 1: IDENTIFICACIÓN DEL SISTEMA DE IA

| Campo | Entrada |
|-------|-------|
| **Nombre del Sistema de IA** | |
| **ID del Sistema de IA** | |
| **Versión/Lanzamiento** | |
| **Fecha de Evaluación** | |
| **Nombre del Evaluador** | |
| **Rol del Evaluador** | |
| **Propietario del Sistema de IA** | |
| **Unidad de Negocio** | |

---

## SECCIÓN 2: DESCRIPCIÓN DEL SISTEMA DE IA

### 2.1 Finalidad Prevista
*Describa la finalidad prevista del sistema de IA según el Artículo 3(12) de la Ley de IA de la UE*

| Campo | Entrada |
|-------|-------|
| **Función Principal** | |
| **Problema a Resolver** | |
| **Salidas/Decisiones Clave** | |

### 2.2 Descripción Técnica
| Campo | Entrada |
|-------|-------|
| **Tipo de Tecnología de IA** | [ ] Aprendizaje Automático [ ] Aprendizaje Profundo [ ] PLN [ ] Visión por Computadora [ ] Sistema Experto [ ] Otro: _____ |
| **Tipo de Modelo** | [ ] Clasificación [ ] Regresión [ ] Agrupamiento [ ] Generativo [ ] Aprendizaje por Refuerzo [ ] Otro: _____ |
| **Modo de Despliegue** | [ ] Local [ ] Nube [ ] Edge [ ] Híbrido |

### 2.3 Usuarios y Personas Afectadas
| Campo | Entrada |
|-------|-------|
| **Usuarios Objetivo** | |
| **Personas Físicas Afectadas** | |
| **Número Estimado de Afectados** | |
| **Alcance Geográfico** | [ ] Solo UE [ ] UE + Otros [ ] Global |

---

## SECCIÓN 3: EVALUACIÓN DE PRÁCTICAS PROHIBIDAS (Artículo 5)

*Todos los sistemas de IA deben ser evaluados primero en cuanto a prácticas prohibidas. Si CUALQUIER elemento a continuación se marca como "Sí", el sistema de IA está PROHIBIDO y no puede continuar.*

### 3.1 Evaluación de Prácticas Prohibidas

| # | Práctica Prohibida | Sí | No | Evidencia/Notas |
|---|---------------------|-----|-----|----------------|
| 3.1.1 | ¿El sistema despliega técnicas subliminales, manipuladoras o engañosas para distorsionar materialmente el comportamiento causando daño significativo? | [ ] | [ ] | |
| 3.1.2 | ¿El sistema explota vulnerabilidades de personas debido a edad, discapacidad o situación social/económica? | [ ] | [ ] | |
| 3.1.3 | ¿El sistema evalúa o clasifica a personas físicas basándose en comportamiento social o características personales (puntuación social) conduciendo a trato perjudicial? | [ ] | [ ] | |
| 3.1.4 | ¿El sistema evalúa o predice el riesgo de que una persona física cometa un delito basándose únicamente en perfiles o rasgos de personalidad? | [ ] | [ ] | |
| 3.1.5 | ¿El sistema crea o expande bases de datos de reconocimiento facial mediante recopilación no dirigida? | [ ] | [ ] | |
| 3.1.6 | ¿El sistema infiere emociones en entornos laborales o educativos (excepto médicos o de seguridad)? | [ ] | [ ] | |
| 3.1.7 | ¿El sistema categoriza a personas físicas basándose en datos biométricos para deducir raza, opiniones políticas, afiliación sindical, creencias religiosas, vida sexual u orientación sexual? | [ ] | [ ] | |
| 3.1.8 | ¿El sistema permite la identificación biométrica remota en tiempo real en espacios de acceso público para aplicación de la ley (excepto excepciones limitadas)? | [ ] | [ ] | |

### 3.2 Determinación de Práctica Prohibida

| Campo | Entrada |
|-------|-------|
| **¿Alguna respuesta "Sí" anterior?** | [ ] Sí → **EL SISTEMA ESTÁ PROHIBIDO** [ ] No → Continúe a la Sección 4 |
| **Si está Prohibido, Justificación** | |
| **Firma del Revisor** | |
| **Fecha de Revisión** | |

**Si el sistema está PROHIBIDO, no continúe. Documente la decisión y archive.**

---

## SECCIÓN 4: EVALUACIÓN DE ALTO RIESGO - ANEXO I (Seguridad de Productos)

*Evalúe si el sistema de IA es un componente de seguridad de, o es en sí mismo, un producto cubierto por la legislación de armonización de la UE listada en el Anexo I.*

### 4.1 Verificación de Legislación de Productos del Anexo I

| # | Legislación de la UE | ¿Aplicable? | Si es Sí, Describa la Relevancia |
|---|----------------|-------------|---------------------------|
| 4.1.1 | Reglamento de Maquinaria (UE) 2023/1230 | [ ] Sí [ ] No | |
| 4.1.2 | Directiva de Seguridad de Juguetes 2009/48/CE | [ ] Sí [ ] No | |
| 4.1.3 | Directiva de Embarcaciones de Recreo 2013/53/UE | [ ] Sí [ ] No | |
| 4.1.4 | Directiva de Ascensores 2014/33/UE | [ ] Sí [ ] No | |
| 4.1.5 | Equipos para Uso en Atmósferas Potencialmente Explosivas (ATEX) 2014/34/UE | [ ] Sí [ ] No | |
| 4.1.6 | Directiva de Equipos de Radio 2014/53/UE | [ ] Sí [ ] No | |
| 4.1.7 | Directiva de Equipos a Presión 2014/68/UE | [ ] Sí [ ] No | |
| 4.1.8 | Reglamento de Instalaciones de Cables Aéreos (UE) 2016/424 | [ ] Sí [ ] No | |
| 4.1.9 | Reglamento de Equipos de Protección Individual (UE) 2016/425 | [ ] Sí [ ] No | |
| 4.1.10 | Reglamento de Aparatos de Gas (UE) 2016/426 | [ ] Sí [ ] No | |
| 4.1.11 | Reglamento de Productos Sanitarios (UE) 2017/745 | [ ] Sí [ ] No | |
| 4.1.12 | Reglamento de Productos Sanitarios para Diagnóstico In Vitro (UE) 2017/746 | [ ] Sí [ ] No | |
| 4.1.13 | Reglamento de Seguridad de la Aviación Civil (UE) 2018/1139 | [ ] Sí [ ] No | |
| 4.1.14 | Reglamento de Homologación de Vehículos de Motor (UE) 2019/2144 | [ ] Sí [ ] No | |
| 4.1.15 | Directiva de Interoperabilidad Ferroviaria (UE) 2016/797 | [ ] Sí [ ] No | |
| 4.1.16 | Directiva de Equipos Marinos 2014/90/UE | [ ] Sí [ ] No | |

### 4.2 Determinación del Anexo I

| Campo | Entrada |
|-------|-------|
| **¿El sistema de IA está cubierto por la legislación del Anexo I?** | [ ] Sí → **ALTO RIESGO** (requiere evaluación de conformidad por terceros) [ ] No → Continúe a la Sección 5 |
| **Legislación Aplicable** | |
| **¿La IA es un componente de seguridad?** | [ ] Sí [ ] No |
| **Vía de Evaluación de Conformidad** | [ ] Se requiere tercero [ ] Se permite autoevaluación |

---

## SECCIÓN 5: EVALUACIÓN DE ALTO RIESGO - ANEXO III (Casos de Uso)

*Evalúe si el sistema de IA cae dentro de alguno de los casos de uso de alto riesgo listados en el Anexo III.*

### 5.1 Biometría (Anexo III, Punto 1)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.1.1 | Sistemas de identificación biométrica remota (excluyendo verificación) | [ ] Sí [ ] No | |
| 5.1.2 | Categorización biométrica por atributos sensibles | [ ] Sí [ ] No | |
| 5.1.3 | Sistemas de reconocimiento de emociones | [ ] Sí [ ] No | |

### 5.2 Infraestructura Crítica (Anexo III, Punto 2)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.2.1 | Componente de seguridad en gestión/operación de infraestructura digital crítica | [ ] Sí [ ] No | |
| 5.2.2 | Componente de seguridad en tráfico vial | [ ] Sí [ ] No | |
| 5.2.3 | Componente de seguridad en suministro de agua, gas, calefacción, electricidad | [ ] Sí [ ] No | |

### 5.3 Educación y Formación Profesional (Anexo III, Punto 3)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.3.1 | Determinación de acceso o admisión a instituciones educativas | [ ] Sí [ ] No | |
| 5.3.2 | Asignación de personas a instituciones educativas o programas | [ ] Sí [ ] No | |
| 5.3.3 | Evaluación de estudiantes en instituciones educativas | [ ] Sí [ ] No | |
| 5.3.4 | Evaluación del nivel educativo apropiado para individuos | [ ] Sí [ ] No | |
| 5.3.5 | Monitoreo/detección de comportamiento prohibido durante exámenes | [ ] Sí [ ] No | |

### 5.4 Empleo, Gestión de Trabajadores (Anexo III, Punto 4)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.4.1 | Reclutamiento o selección (publicidad, filtrado, evaluación de candidatos) | [ ] Sí [ ] No | |
| 5.4.2 | Decisiones sobre promoción, terminación, asignación de tareas, monitoreo o evaluación del desempeño laboral | [ ] Sí [ ] No | |

### 5.5 Acceso a Servicios Esenciales (Anexo III, Punto 5)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.5.1 | Evaluación de elegibilidad para beneficios/servicios de asistencia pública | [ ] Sí [ ] No | |
| 5.5.2 | Evaluación de solvencia crediticia (excluyendo detección de fraude) | [ ] Sí [ ] No | |
| 5.5.3 | Evaluación de riesgos y fijación de precios en seguros de vida/salud | [ ] Sí [ ] No | |
| 5.5.4 | Evaluación y clasificación de llamadas de emergencia (911/112) | [ ] Sí [ ] No | |
| 5.5.5 | Despacho de servicios de respuesta de emergencia | [ ] Sí [ ] No | |

### 5.6 Aplicación de la Ley (Anexo III, Punto 6)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.6.1 | Evaluación de riesgo individual para delinquir/reincidir | [ ] Sí [ ] No | |
| 5.6.2 | Polígrafos y herramientas similares | [ ] Sí [ ] No | |
| 5.6.3 | Evaluación de fiabilidad de evidencia en investigaciones criminales | [ ] Sí [ ] No | |
| 5.6.4 | Predicción de ocurrencia/reincidencia de delito | [ ] Sí [ ] No | |
| 5.6.5 | Perfilado en detección/investigación/enjuiciamiento de delitos | [ ] Sí [ ] No | |
| 5.6.6 | Análisis de delitos para búsqueda en grandes conjuntos de datos | [ ] Sí [ ] No | |

### 5.7 Migración, Asilo, Control Fronterizo (Anexo III, Punto 7)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.7.1 | Polígrafos y herramientas similares para fines migratorios | [ ] Sí [ ] No | |
| 5.7.2 | Evaluación de riesgos de migración irregular | [ ] Sí [ ] No | |
| 5.7.3 | Examen de solicitudes de asilo/visa/permisos de residencia | [ ] Sí [ ] No | |
| 5.7.4 | Detección/reconocimiento/identificación de personas en contexto migratorio | [ ] Sí [ ] No | |

### 5.8 Administración de Justicia (Anexo III, Punto 8)

| # | Caso de Uso | ¿Aplicable? | Evidencia/Notas |
|---|----------|-------------|----------------|
| 5.8.1 | Asistencia a autoridades judiciales en investigación/interpretación de hechos y derecho | [ ] Sí [ ] No | |
| 5.8.2 | Aplicación de la ley a conjunto concreto de hechos | [ ] Sí [ ] No | |
| 5.8.3 | Resolución alternativa de disputas | [ ] Sí [ ] No | |
| 5.8.4 | Influencia en resultado de elecciones/referéndums o comportamiento de votación | [ ] Sí [ ] No | |

### 5.9 Determinación del Anexo III

| Campo | Entrada |
|-------|-------|
| **¿Alguna respuesta "Sí" en la Sección 5?** | [ ] Sí → **ALTO RIESGO** [ ] No → Continúe a la Sección 6 |
| **Categoría de Alto Riesgo Aplicable** | |

---

## SECCIÓN 6: EVALUACIÓN DE RIESGO LIMITADO (Obligaciones de Transparencia)

*Si no es de alto riesgo, evalúe las obligaciones de transparencia de riesgo limitado.*

### 6.1 Desencadenantes de Riesgo Limitado (Artículo 50)

| # | Desencadenante | ¿Aplicable? | Evidencia/Notas |
|---|---------|-------------|----------------|
| 6.1.1 | Sistema diseñado para interactuar directamente con personas físicas | [ ] Sí [ ] No | |
| 6.1.2 | Sistema genera contenido sintético de audio, imagen, video o texto | [ ] Sí [ ] No | |
| 6.1.3 | Sistema realiza reconocimiento de emociones | [ ] Sí [ ] No | |
| 6.1.4 | Sistema realiza categorización biométrica | [ ] Sí [ ] No | |

### 6.2 Determinación de Riesgo Limitado

| Campo | Entrada |
|-------|-------|
| **¿Alguna respuesta "Sí"?** | [ ] Sí → **RIESGO LIMITADO** (Se aplican obligaciones de transparencia) [ ] No → **RIESGO MÍNIMO** |
| **Medidas de Transparencia Requeridas** | |

---

## SECCIÓN 7: EVALUACIÓN DE MODELO GPAI

*Complete solo si el sistema de IA incorpora o es un modelo de IA de Propósito General (GPAI).*

### 7.1 Determinación de GPAI

| # | Pregunta | Respuesta | Evidencia/Notas |
|---|----------|----------|----------------|
| 7.1.1 | ¿El sistema incorpora un modelo GPAI? | [ ] Sí [ ] No | |
| 7.1.2 | ¿El modelo GPAI es capaz de realizar una amplia gama de tareas? | [ ] Sí [ ] No | |
| 7.1.3 | ¿El modelo fue entrenado con datos amplios a escala usando autosupervisión? | [ ] Sí [ ] No | |
| 7.1.4 | ¿El modelo GPAI tiene riesgo sistémico? (>10^25 FLOP cómputo de entrenamiento o designación de la Comisión) | [ ] Sí [ ] No | |

### 7.2 Clasificación GPAI

| Campo | Entrada |
|-------|-------|
| **Clasificación GPAI** | [ ] No es GPAI [ ] GPAI sin riesgo sistémico [ ] GPAI con riesgo sistémico |
| **¿Cumplimiento del Proveedor GPAI Confirmado?** | [ ] Sí [ ] No [ ] N/A |

---

## SECCIÓN 8: RESUMEN DE CLASIFICACIÓN

### 8.1 Clasificación Final

| Clasificación | Seleccionada | Base |
|----------------|----------|-------|
| **PROHIBIDO** | [ ] | Sección 3 - Práctica prohibida identificada |
| **ALTO RIESGO** | [ ] | Sección 4 - Legislación de seguridad de productos del Anexo I |
| **ALTO RIESGO** | [ ] | Sección 5 - Caso de uso de alto riesgo del Anexo III |
| **RIESGO LIMITADO** | [ ] | Sección 6 - Se aplican obligaciones de transparencia |
| **RIESGO MÍNIMO** | [ ] | Sin obligaciones específicas (códigos voluntarios) |

### 8.2 Detalles de Clasificación

| Campo | Entrada |
|-------|-------|
| **Clasificación Final** | |
| **Base Principal para la Clasificación** | |
| **Artículos de la Ley de IA de la UE Aplicables** | |
| **Evaluación de Conformidad Requerida** | [ ] Tercero [ ] Autoevaluación [ ] Ninguna |

### 8.3 Resumen de Requisitos Aplicables

| Categoría de Requisito | ¿Aplicable? | Notas |
|---------------------|-------------|-------|
| Sistema de Gestión de Riesgos | [ ] Sí [ ] No | |
| Gobernanza de Datos | [ ] Sí [ ] No | |
| Documentación Técnica | [ ] Sí [ ] No | |
| Mantenimiento de Registros/Registro | [ ] Sí [ ] No | |
| Transparencia | [ ] Sí [ ] No | |
| Supervisión Humana | [ ] Sí [ ] No | |
| Precisión, Robustez, Ciberseguridad | [ ] Sí [ ] No | |
| Marcado CE | [ ] Sí [ ] No | |
| Registro en Base de Datos de la UE | [ ] Sí [ ] No | |
| Evaluación de Conformidad | [ ] Sí [ ] No | |

---

## SECCIÓN 9: EVIDENCIA Y DOCUMENTACIÓN

### 9.1 Documentación de Apoyo

| # | Documento | Referencia/Ubicación | Adjunto |
|---|----------|-------------------|----------|
| 1 | Descripción/especificaciones del sistema | | [ ] Sí [ ] No |
| 2 | Arquitectura técnica | | [ ] Sí [ ] No |
| 3 | Declaración de finalidad prevista | | [ ] Sí [ ] No |
| 4 | Análisis de usuarios/personas afectadas | | [ ] Sí [ ] No |
| 5 | Análisis legal/regulatorio | | [ ] Sí [ ] No |
| 6 | Otro: | | [ ] Sí [ ] No |

---

## SECCIÓN 10: APROBACIONES

### 10.1 Aprobación de la Evaluación

| Rol | Nombre | Firma | Fecha |
|------|------|-----------|------|
| **Evaluador** | | | |
| **Oficial de Cumplimiento de IA** | | | |
| **Gestor de Riesgos de IA** | | | |

### 10.2 Aprobación de Clasificación (Solo Alto Riesgo)

| Rol | Nombre | Firma | Fecha |
|------|------|-----------|------|
| **Representante del Comité de Gobernanza de IA** | | | |
| **Asesor Legal** | | | |

---

## SECCIÓN 11: REVISIÓN Y ACTUALIZACIÓN

### 11.1 Calendario de Revisión de Clasificación

| Campo | Entrada |
|-------|-------|
| **Próxima Fecha de Revisión Programada** | |
| **Desencadenantes de Revisión** | [ ] Cambio significativo de funcionalidad [ ] Cambio de finalidad prevista [ ] Cambio regulatorio [ ] Revisión periódica |

### 11.2 Historial de Clasificación

| Versión | Fecha | Clasificación | Razón del Cambio | Aprobado Por |
|---------|------|----------------|-------------------|-------------|
| 1.0 | | | Clasificación inicial | |
| | | | | |
| | | | | |

---

**Fin del Formulario**
