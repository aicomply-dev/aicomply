# CHK-AI-TRANS-001: Lista de Verificación de Requisitos de Transparencia

**ID de Lista de Verificación:** CHK-AI-TRANS-001
**Nombre de Lista de Verificación:** Lista de Verificación de Requisitos de Transparencia
**Versión:** 1.0
**Fecha de Vigencia:** [Por completar]
**Estándar Relacionado:** STD-AI-006: Estándar de Transparencia de IA
**Procedimiento Relacionado:** PROC-AI-TRANS-001: Procedimiento de Transparencia

---

## Propósito

Esta lista de verificación garantiza que los sistemas de IA cumplan con los requisitos de transparencia bajo la Ley de IA de la UE, incluyendo el Artículo 13 (IA de alto riesgo) y el Artículo 50 (sistemas de IA que interactúan con personas naturales, generan contenido, etc.). Utilice esta lista de verificación para verificar el cumplimiento de transparencia antes del despliegue y durante la operación.

## Instrucciones

1. Complete esta lista de verificación para todos los sistemas de IA que requieran medidas de transparencia
2. Marque cada requisito como Cumplido, Parcial, No Cumplido o No Aplicable
3. Documente la evidencia de cumplimiento
4. Atienda todas las brechas antes del despliegue
5. Revise anualmente o ante cambios significativos del sistema

---

## INFORMACIÓN DE LA LISTA DE VERIFICACIÓN

| Campo | Entrada |
|-------|-------|
| **Nombre del Sistema de IA** | |
| **ID del Sistema de IA** | |
| **Clasificación de Riesgo** | [ ] Alto Riesgo [ ] Riesgo Limitado [ ] Riesgo Mínimo |
| **Categoría de Transparencia** | [ ] Alto Riesgo (Art. 13) [ ] Interacción Directa (Art. 50.1) [ ] Reconocimiento de Emociones (Art. 50.2) [ ] Categorización Biométrica (Art. 50.3) [ ] Contenido Sintético (Art. 50.4) |
| **Fecha de Revisión** | |
| **Nombre del Revisor** | |

---

## SECCIÓN 1: DETERMINACIÓN DE APLICABILIDAD

### 1.1 Aplicabilidad de Obligaciones de Transparencia

| # | Pregunta | Respuesta | Notas |
|---|----------|----------|-------|
| 1.1.1 | ¿Es este un sistema de IA de alto riesgo? | [ ] Sí [ ] No | |
| 1.1.2 | ¿El sistema de IA interactúa directamente con personas naturales? | [ ] Sí [ ] No | |
| 1.1.3 | ¿El sistema de IA realiza reconocimiento de emociones? | [ ] Sí [ ] No | |
| 1.1.4 | ¿El sistema de IA realiza categorización biométrica? | [ ] Sí [ ] No | |
| 1.1.5 | ¿El sistema de IA genera o manipula contenido sintético (deepfakes, texto, audio, video)? | [ ] Sí [ ] No | |
| 1.1.6 | ¿Es el sistema de IA un modelo GPAI? | [ ] Sí [ ] No | |

### 1.2 Resumen de Requisitos Aplicables

| Conjunto de Requisitos | ¿Aplicable? |
|-----------------|-------------|
| Artículo 13 (Transparencia de Alto Riesgo) | [ ] Sí [ ] No |
| Artículo 50.1 (Divulgación de Interacción con IA) | [ ] Sí [ ] No |
| Artículo 50.2 (Divulgación de Reconocimiento de Emociones) | [ ] Sí [ ] No |
| Artículo 50.3 (Divulgación de Categorización Biométrica) | [ ] Sí [ ] No |
| Artículo 50.4 (Marcado de Contenido Sintético) | [ ] Sí [ ] No |

---

## SECCIÓN 2: TRANSPARENCIA DE IA DE ALTO RIESGO (Artículo 13)

*Complete esta sección si el sistema de IA está clasificado como ALTO RIESGO*

### 2.1 Diseño para la Transparencia

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 2.1.1 | Sistema diseñado para permitir a los desplegadores interpretar la salida | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 2.1.2 | Sistema diseñado para permitir a los desplegadores usar la salida apropiadamente | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 2.1.3 | Medidas de transparencia proporcionales al propósito previsto | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 2.1.4 | Salida comprensible para usuarios objetivo | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

### 2.2 Instrucciones de Uso - Requisitos Generales

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 2.2.1 | Instrucciones de uso proporcionadas | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 2.2.2 | Instrucciones en formato e idioma apropiados | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 2.2.3 | Instrucciones accesibles y comprensibles | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

### 2.3 Contenido de Instrucciones - Información del Proveedor

| # | Contenido Requerido | ¿Incluido? | Ubicación | Notas |
|---|------------------|-----------|----------|-------|
| 2.3.1 | Identidad del proveedor (nombre, nombre comercial registrado) | [ ] Sí [ ] No | | |
| 2.3.2 | Datos de contacto del proveedor | [ ] Sí [ ] No | | |
| 2.3.3 | Identidad del representante autorizado (si aplica) | [ ] Sí [ ] No [ ] N/A | | |

### 2.4 Contenido de Instrucciones - Información del Sistema

| # | Contenido Requerido | ¿Incluido? | Ubicación | Notas |
|---|------------------|-----------|----------|-------|
| 2.4.1 | Características y capacidades del sistema de IA | [ ] Sí [ ] No | | |
| 2.4.2 | Propósito previsto del sistema de IA | [ ] Sí [ ] No | | |
| 2.4.3 | Nivel de precisión y métricas relevantes | [ ] Sí [ ] No | | |
| 2.4.4 | Nivel de robustez | [ ] Sí [ ] No | | |
| 2.4.5 | Nivel de ciberseguridad | [ ] Sí [ ] No | | |
| 2.4.6 | Circunstancias conocidas que pueden impactar el rendimiento | [ ] Sí [ ] No | | |
| 2.4.7 | Capacidades y limitaciones técnicas | [ ] Sí [ ] No | | |
| 2.4.8 | Limitaciones del sistema | [ ] Sí [ ] No | | |

### 2.5 Contenido de Instrucciones - Detalles de Rendimiento

| # | Contenido Requerido | ¿Incluido? | Ubicación | Notas |
|---|------------------|-----------|----------|-------|
| 2.5.1 | Métricas de rendimiento para el propósito previsto | [ ] Sí [ ] No | | |
| 2.5.2 | Niveles de rendimiento para personas/grupos afectados | [ ] Sí [ ] No | | |
| 2.5.3 | Especificaciones para datos de entrada | [ ] Sí [ ] No | | |
| 2.5.4 | Cualquier cambio predeterminado y su impacto | [ ] Sí [ ] No [ ] N/A | | |

### 2.6 Contenido de Instrucciones - Supervisión Humana

| # | Contenido Requerido | ¿Incluido? | Ubicación | Notas |
|---|------------------|-----------|----------|-------|
| 2.6.1 | Medidas de supervisión humana descritas | [ ] Sí [ ] No | | |
| 2.6.2 | Medidas técnicas para supervisión documentadas | [ ] Sí [ ] No | | |
| 2.6.3 | Competencias humanas requeridas documentadas | [ ] Sí [ ] No | | |
| 2.6.4 | Instrucciones de intervención/anulación | [ ] Sí [ ] No | | |

### 2.7 Contenido de Instrucciones - Mantenimiento y Soporte

| # | Contenido Requerido | ¿Incluido? | Ubicación | Notas |
|---|------------------|-----------|----------|-------|
| 2.7.1 | Vida útil esperada del sistema de IA | [ ] Sí [ ] No | | |
| 2.7.2 | Medidas de mantenimiento y cuidado | [ ] Sí [ ] No | | |
| 2.7.3 | Información de instalación de actualizaciones | [ ] Sí [ ] No | | |

**Estado de Sección 2:** [ ] Completa [ ] Incompleta

---

## SECCIÓN 3: TRANSPARENCIA DE INTERACCIÓN CON IA (Artículo 50.1)

*Complete si el sistema de IA interactúa directamente con personas naturales*

### 3.1 Requisitos de Divulgación

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 3.1.1 | Personas naturales informadas de que están interactuando con IA | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 3.1.2 | Divulgación proporcionada de manera clara y distinguible | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 3.1.3 | Divulgación proporcionada en la primera interacción | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 3.1.4 | Divulgación en idioma comprensible para el usuario | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

### 3.2 Contenido de Divulgación

| # | Elemento | ¿Incluido? | Método de Implementación | Notas |
|---|---------|-----------|----------------------|-------|
| 3.2.1 | Declaración clara de que el usuario está interactuando con IA | [ ] Sí [ ] No | | |
| 3.2.2 | Divulgación visible/audible antes de la interacción | [ ] Sí [ ] No | | |
| 3.2.3 | Divulgación no puede ser fácilmente omitida | [ ] Sí [ ] No | | |

### 3.3 Excepciones Aplicadas (si corresponde)

| # | Excepción | ¿Aplicada? | Justificación |
|---|-----------|----------|---------------|
| 3.3.1 | IA obvia por las circunstancias | [ ] Sí [ ] No | |
| 3.3.2 | Autorizada por ley para prevención/detección de delitos | [ ] Sí [ ] No [ ] N/A | |

**Estado de Sección 3:** [ ] Completa [ ] Incompleta [ ] N/A

---

## SECCIÓN 4: TRANSPARENCIA DE RECONOCIMIENTO DE EMOCIONES (Artículo 50.2)

*Complete si el sistema de IA realiza reconocimiento de emociones*

### 4.1 Requisitos de Divulgación

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 4.1.1 | Personas naturales informadas del reconocimiento de emociones | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 4.1.2 | Divulgación proporcionada antes del procesamiento | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 4.1.3 | Divulgación de manera clara y distinguible | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 4.1.4 | Categorías de emociones detectadas divulgadas | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

### 4.2 Implementación de Divulgación

| # | Elemento | Estado | Notas |
|---|---------|--------|-------|
| 4.2.1 | Mecanismo de divulgación implementado | [ ] Sí [ ] No | |
| 4.2.2 | Divulgación documentada | [ ] Sí [ ] No | |
| 4.2.3 | Divulgación probada para claridad | [ ] Sí [ ] No | |

**Estado de Sección 4:** [ ] Completa [ ] Incompleta [ ] N/A

---

## SECCIÓN 5: TRANSPARENCIA DE CATEGORIZACIÓN BIOMÉTRICA (Artículo 50.3)

*Complete si el sistema de IA realiza categorización biométrica*

### 5.1 Requisitos de Divulgación

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 5.1.1 | Personas naturales informadas de la categorización biométrica | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 5.1.2 | Divulgación proporcionada antes del procesamiento | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 5.1.3 | Divulgación de manera clara y distinguible | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 5.1.4 | Categorías de atributos detectados divulgadas | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

### 5.2 Excepciones Aplicadas (si corresponde)

| # | Excepción | ¿Aplicada? | Justificación |
|---|-----------|----------|---------------|
| 5.2.1 | Autorizada por ley para prevención/detección de delitos | [ ] Sí [ ] No [ ] N/A | |

**Estado de Sección 5:** [ ] Completa [ ] Incompleta [ ] N/A

---

## SECCIÓN 6: TRANSPARENCIA DE CONTENIDO SINTÉTICO (Artículo 50.4)

*Complete si el sistema de IA genera o manipula contenido sintético*

### 6.1 Tipos de Contenido

| # | Tipo de Contenido | ¿Generado? | Marcado Requerido |
|---|--------------|------------|------------------|
| 6.1.1 | Audio sintético | [ ] Sí [ ] No | [ ] Sí [ ] N/A |
| 6.1.2 | Imagen sintética | [ ] Sí [ ] No | [ ] Sí [ ] N/A |
| 6.1.3 | Video sintético | [ ] Sí [ ] No | [ ] Sí [ ] N/A |
| 6.1.4 | Texto sintético (publicado para información pública) | [ ] Sí [ ] No | [ ] Sí [ ] N/A |
| 6.1.5 | Deep fakes | [ ] Sí [ ] No | [ ] Sí [ ] N/A |

### 6.2 Requisitos de Marcado

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 6.2.1 | Contenido sintético marcado como generado artificialmente | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 6.2.2 | Marcado legible por máquina cuando sea técnicamente factible | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 6.2.3 | Marcado interoperable | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 6.2.4 | Deep fakes divulgados como tales | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

### 6.3 Implementación de Marcado

| # | Elemento | Estado | Método Utilizado | Notas |
|---|---------|--------|-------------|-------|
| 6.3.1 | Marcado técnico implementado | [ ] Sí [ ] No | | |
| 6.3.2 | Estándar de marcado utilizado | [ ] Sí [ ] No | | |
| 6.3.3 | Marcado persistente a través de la distribución | [ ] Sí [ ] No | | |
| 6.3.4 | Marcado probado para efectividad | [ ] Sí [ ] No | | |

### 6.4 Excepciones Aplicadas (si corresponde)

| # | Excepción | ¿Aplicada? | Justificación |
|---|-----------|----------|---------------|
| 6.4.1 | Contenido que asiste en edición (sin alteración sustancial) | [ ] Sí [ ] No | |
| 6.4.2 | Contenido parte de trabajo artístico/creativo (claramente etiquetado) | [ ] Sí [ ] No | |
| 6.4.3 | Autorizada por ley para prevención/detección de delitos | [ ] Sí [ ] No [ ] N/A | |

**Estado de Sección 6:** [ ] Completa [ ] Incompleta [ ] N/A

---

## SECCIÓN 7: OBLIGACIONES DE TRANSPARENCIA DEL DESPLEGADOR

*Para desplegadores de sistemas de IA de alto riesgo*

### 7.1 Obligaciones del Desplegador

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 7.1.1 | Personas afectadas informadas del uso de IA de alto riesgo | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 7.1.2 | Notificación antes de la primera exposición | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 7.1.3 | Información en formato accesible | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 7.1.4 | Representantes del lugar de trabajo informados (si contexto laboral) | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

### 7.2 Obligaciones del Desplegador de Autoridad Pública

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 7.2.1 | Registro en base de datos de la UE completado | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 7.2.2 | FRIA completada y resumen publicado | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

**Estado de Sección 7:** [ ] Completa [ ] Incompleta [ ] N/A

---

## SECCIÓN 8: ACCESIBILIDAD

### 8.1 Requisitos de Accesibilidad

| # | Requisito | Estado | Evidencia | Notas |
|---|-------------|--------|----------|-------|
| 8.1.1 | Información de transparencia accesible para personas con discapacidades | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 8.1.2 | Múltiples formatos disponibles cuando sea apropiado | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |
| 8.1.3 | Versiones de idioma disponibles según sea requerido | [ ] Cumplido [ ] Parcial [ ] No Cumplido [ ] N/A | | |

**Estado de Sección 8:** [ ] Completa [ ] Incompleta

---

## SECCIÓN 9: DOCUMENTACIÓN Y REGISTROS

### 9.1 Documentación de Transparencia

| # | Documento | ¿Disponible? | Ubicación | ¿Actualizado? |
|---|----------|------------|----------|----------|
| 9.1.1 | Instrucciones de uso | [ ] Sí [ ] No | | [ ] Sí [ ] No |
| 9.1.2 | Scripts/texto de divulgación de transparencia | [ ] Sí [ ] No | | [ ] Sí [ ] No |
| 9.1.3 | Especificaciones de marcado | [ ] Sí [ ] No [ ] N/A | | [ ] Sí [ ] No |
| 9.1.4 | Registros de notificación de usuarios | [ ] Sí [ ] No | | [ ] Sí [ ] No |

**Estado de Sección 9:** [ ] Completa [ ] Incompleta

---

## SECCIÓN 10: RESUMEN DE LISTA DE VERIFICACIÓN

### 10.1 Resumen de Estado de Secciones

| Sección | Estado | Brechas Críticas |
|---------|--------|---------------|
| 1. Aplicabilidad | [ ] Completa [ ] Incompleta | |
| 2. Transparencia de Alto Riesgo | [ ] Completa [ ] Incompleta [ ] N/A | |
| 3. Interacción con IA | [ ] Completa [ ] Incompleta [ ] N/A | |
| 4. Reconocimiento de Emociones | [ ] Completa [ ] Incompleta [ ] N/A | |
| 5. Categorización Biométrica | [ ] Completa [ ] Incompleta [ ] N/A | |
| 6. Contenido Sintético | [ ] Completa [ ] Incompleta [ ] N/A | |
| 7. Obligaciones del Desplegador | [ ] Completa [ ] Incompleta [ ] N/A | |
| 8. Accesibilidad | [ ] Completa [ ] Incompleta | |
| 9. Documentación | [ ] Completa [ ] Incompleta | |

### 10.2 Evaluación General de Transparencia

| Campo | Entrada |
|-------|-------|
| **Estado General** | [ ] Cumplimiento [ ] Cumplimiento Parcial [ ] No Cumplimiento |
| **Brechas Críticas** | |
| **Recomendaciones** | |

---

## SECCIÓN 11: APROBACIÓN

| Rol | Nombre | Firma | Fecha |
|------|------|-----------|------|
| **Revisor** | | | |
| **Propietario del Sistema de IA** | | | |
| **Oficial de Cumplimiento** | | | |

---

**Próxima Revisión Programada:** _______________

---

**Fin de la Lista de Verificación**
