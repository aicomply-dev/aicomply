# Plantilla de Clasificación de Riesgo de Sistemas de IA

## Información del Documento

| Campo | Valor |
|-------|-------|
| **ID del Documento** | TOOL-CLS-001 |
| **Versión** | 1.0 |
| **Estado** | Listo para Usar |
| **Propietario** | Responsable del Programa de la Ley de IA |
| **Última Actualización** | 2024-12-01 |

## Propósito

Esta plantilla proporciona un enfoque estructurado para clasificar sistemas de IA de acuerdo con los niveles de riesgo de la Ley de IA de la UE. Utilice este árbol de decisión y plantilla de documentación para garantizar decisiones de clasificación consistentes y defendibles.

---

## Niveles de Riesgo de la Ley de IA de la UE

| Nivel de Riesgo | Descripción | Requisitos Clave |
|------------|-------------|------------------|
| **Prohibido** | Prácticas de IA que están prohibidas por completo | No puede ponerse en el mercado ni utilizarse |
| **Alto Riesgo** | Sistemas de IA en áreas del Anexo III o componentes de seguridad | Cumplimiento total del Capítulo 2 requerido |
| **Riesgo Limitado** | Sistemas de IA con obligaciones de transparencia | Requisitos de transparencia del Artículo 50 |
| **Riesgo Mínimo** | Todos los demás sistemas de IA | Códigos de conducta voluntarios |

---

## Árbol de Decisión de Clasificación

### Paso 1: Verificación de Prácticas Prohibidas (Artículo 5)

¿El sistema de IA involucra alguna de las siguientes prácticas?

| # | Práctica Prohibida | Verificación |
|---|---------------------|-------|
| 1.1 | Manipulación subliminal que causa daño | [ ] Sí [ ] No |
| 1.2 | Explotación de vulnerabilidades (edad, discapacidad, situación social) | [ ] Sí [ ] No |
| 1.3 | Puntuación social por autoridades públicas | [ ] Sí [ ] No |
| 1.4 | Identificación biométrica remota en tiempo real en espacios públicos (aplicación de la ley) | [ ] Sí [ ] No |
| 1.5 | Recopilación no dirigida para bases de datos de reconocimiento facial | [ ] Sí [ ] No |
| 1.6 | Reconocimiento de emociones en lugar de trabajo/educación (excepto seguridad/médico) | [ ] Sí [ ] No |
| 1.7 | Categorización biométrica infiriendo atributos sensibles | [ ] Sí [ ] No |
| 1.8 | Vigilancia predictiva individual basada únicamente en perfiles | [ ] Sí [ ] No |

**Si CUALQUIER casilla está marcada como SÍ** → **PROHIBIDO** (Detenerse aquí)
**Si TODAS las casillas son NO** → Proceder al Paso 2

---

### Paso 2: Verificación de Legislación de Productos del Anexo I

¿El sistema de IA es un componente de seguridad de, o es en sí mismo un producto cubierto por:

| # | Legislación de la UE | Verificación |
|---|----------------|-------|
| 2.1 | Reglamento de Máquinas (UE) 2023/1230 | [ ] Sí [ ] No |
| 2.2 | Directiva de Seguridad de Juguetes 2009/48/CE | [ ] Sí [ ] No |
| 2.3 | Reglamento de Productos Sanitarios (UE) 2017/745 | [ ] Sí [ ] No |
| 2.4 | Reglamento de Diagnóstico In Vitro (UE) 2017/746 | [ ] Sí [ ] No |
| 2.5 | Reglamento de Aviación Civil (UE) 2018/1139 | [ ] Sí [ ] No |
| 2.6 | Reglamento de Vehículos de Motor (UE) 2019/2144 | [ ] Sí [ ] No |
| 2.7 | Otra legislación del Anexo I | [ ] Sí [ ] No |

**Si CUALQUIER casilla está marcada como SÍ** → **ALTO RIESGO** (Se requiere evaluación de conformidad de terceros)
**Si TODAS las casillas son NO** → Proceder al Paso 3

---

### Paso 3: Verificación de Áreas de Alto Riesgo del Anexo III

¿El sistema de IA entra en alguna categoría del Anexo III?

#### 3.1 Biometría

| Caso de Uso | Verificación |
|----------|-------|
| Identificación biométrica remota | [ ] Sí [ ] No |
| Categorización biométrica por atributos sensibles | [ ] Sí [ ] No |
| Reconocimiento de emociones | [ ] Sí [ ] No |

#### 3.2 Infraestructura Crítica

| Caso de Uso | Verificación |
|----------|-------|
| Componente de seguridad en gestión de infraestructura crítica | [ ] Sí [ ] No |
| Gestión de tráfico vial | [ ] Sí [ ] No |
| Suministro de agua, gas, calefacción, electricidad | [ ] Sí [ ] No |

#### 3.3 Educación y Formación Profesional

| Caso de Uso | Verificación |
|----------|-------|
| Determinar acceso a educación | [ ] Sí [ ] No |
| Evaluar resultados de aprendizaje | [ ] Sí [ ] No |
| Evaluar nivel educativo apropiado | [ ] Sí [ ] No |
| Vigilar comportamiento prohibido durante exámenes | [ ] Sí [ ] No |

#### 3.4 Empleo y Gestión de Trabajadores

| Caso de Uso | Verificación |
|----------|-------|
| Reclutamiento o selección | [ ] Sí [ ] No |
| Decisiones sobre promoción o terminación | [ ] Sí [ ] No |
| Asignación de tareas basada en comportamiento/rasgos | [ ] Sí [ ] No |
| Monitoreo o evaluación de desempeño | [ ] Sí [ ] No |

#### 3.5 Acceso a Servicios Esenciales

| Caso de Uso | Verificación |
|----------|-------|
| Evaluación de solvencia crediticia | [ ] Sí [ ] No |
| Evaluación de riesgo para seguro de vida/salud | [ ] Sí [ ] No |
| Elegibilidad para beneficios públicos | [ ] Sí [ ] No |
| Despacho de servicios de emergencia | [ ] Sí [ ] No |

#### 3.6 Aplicación de la Ley

| Caso de Uso | Verificación |
|----------|-------|
| Evaluación de riesgo de personas naturales | [ ] Sí [ ] No |
| Polígrafos o herramientas similares | [ ] Sí [ ] No |
| Evaluación de fiabilidad de evidencia | [ ] Sí [ ] No |
| Perfilado durante investigación | [ ] Sí [ ] No |

#### 3.7 Migración, Asilo, Control Fronterizo

| Caso de Uso | Verificación |
|----------|-------|
| Polígrafos o herramientas similares | [ ] Sí [ ] No |
| Evaluación de riesgo (seguridad, salud, migración irregular) | [ ] Sí [ ] No |
| Examen de solicitudes | [ ] Sí [ ] No |
| Detección/identificación de personas | [ ] Sí [ ] No |

#### 3.8 Administración de Justicia

| Caso de Uso | Verificación |
|----------|-------|
| Investigar/interpretar hechos y derecho | [ ] Sí [ ] No |
| Aplicar derecho a hechos | [ ] Sí [ ] No |
| Resolución alternativa de disputas | [ ] Sí [ ] No |

**Si CUALQUIER casilla está marcada como SÍ** → **ALTO RIESGO**
**Si TODAS las casillas son NO** → Proceder al Paso 4

---

### Paso 4: Verificación de Riesgo Limitado (Transparencia) (Artículo 50)

¿El sistema de IA involucra alguno de los siguientes?

| # | Desencadenante de Transparencia | Verificación |
|---|---------------------|-------|
| 4.1 | Interacción directa con personas naturales (chatbots, asistentes virtuales) | [ ] Sí [ ] No |
| 4.2 | Generación de contenido sintético de audio, imagen, video o texto | [ ] Sí [ ] No |
| 4.3 | Reconocimiento de emociones o categorización biométrica | [ ] Sí [ ] No |
| 4.4 | Deepfakes o contenido manipulado | [ ] Sí [ ] No |

**Si CUALQUIER casilla está marcada como SÍ** → **RIESGO LIMITADO** (Se aplican obligaciones de transparencia del Artículo 50)
**Si TODAS las casillas son NO** → **RIESGO MÍNIMO**

---

## Plantilla de Documentación de Clasificación

### Información del Sistema

| Campo | Entrada |
|-------|-------|
| **Nombre del Sistema de IA** | |
| **ID del Sistema** | |
| **Versión** | |
| **Descripción** | |
| **Propósito Previsto** | |
| **Fecha de Clasificación** | |
| **Clasificador** | |

### Resultado de Clasificación

| Campo | Entrada |
|-------|-------|
| **Nivel de Riesgo** | [ ] Prohibido [ ] Alto Riesgo [ ] Limitado [ ] Mínimo |
| **Base de Clasificación** | |
| **Anexo I Aplicable** | [ ] Sí [ ] No |
| **Categoría del Anexo III** | |
| **Artículo 50 Aplicable** | [ ] Sí [ ] No |

### Evidencia de Apoyo

| Tipo de Evidencia | Referencia de Documento |
|---------------|-------------------|
| Descripción del sistema | |
| Documentación de uso previsto | |
| Especificaciones técnicas | |
| Revisión legal (si aplica) | |

### Aprobación

| Campo | Entrada |
|-------|-------|
| **Aprobado Por** | |
| **Fecha de Aprobación** | |
| **Próxima Fecha de Revisión** | |

---

## Desencadenantes de Revisión de Clasificación

Se debe considerar la reclasificación cuando:

- [ ] Cambia el propósito previsto
- [ ] Se agregan nuevos casos de uso
- [ ] Se realizan modificaciones sustanciales
- [ ] Se actualiza la orientación regulatoria
- [ ] Vence la revisión anual

---

## Documentos Relacionados

- [Procedimiento de Clasificación](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Formulario de Clasificación](../forms/FORM-AI-CLS-001_FINAL.md)
- [Proceso de Determinación de Roles](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Historial de Revisiones

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Responsable del Programa de la Ley de IA | Versión inicial |
