# Catálogo de Controles de la Ley de IA

## Información del Documento

| Campo | Valor |
|-------|-------|
| **ID del Documento** | TOOL-CTRL-001 |
| **Versión** | 1.0 |
| **Estado** | Listo para Usar |
| **Propietario** | Responsable del Programa de la Ley de IA |
| **Última Actualización** | 2024-12-01 |

## Propósito

Este catálogo proporciona un mapeo integral de controles a los requisitos de la Ley de IA de la UE, organizados por artículo y categoría de control. Úselo como referencia para implementar controles de cumplimiento y recopilar evidencia.

---

## Resumen de Categorías de Control

| Categoría | Prefijo | Artículo(s) | Cantidad de Controles |
|----------|--------|------------|---------------|
| Gestión de Riesgos | RM | Artículo 9 | 15 |
| Gobernanza de Datos | DATA | Artículo 10 | 15 |
| Documentación | DOC | Artículo 11 | 10 |
| Registro | LOG | Artículo 12 | 5 |
| Transparencia | TRANS | Artículo 13, 50 | 10 |
| Supervisión Humana | HO | Artículo 14 | 8 |
| Precisión y Seguridad | ARS | Artículo 15 | 8 |
| Gestión de Calidad | QMS | Artículo 17 | 14 |
| Evaluación de Conformidad | CA | Artículo 43 | 10 |
| Registro | REG | Artículo 49 | 5 |
| Vigilancia Post-Comercialización | PMM | Artículo 72 | 8 |
| Gestión de Incidentes | INC | Artículo 73 | 6 |
| Alfabetización en IA | LIT | Artículo 4 | 4 |

---

## Artículo 9: Sistema de Gestión de Riesgos

### RM-001: Marco de Gestión de Riesgos
- **Objetivo**: Establecer un sistema de gestión de riesgos para sistemas de IA
- **Tipo**: Preventivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Política de gestión de riesgos
  - Metodología de evaluación de riesgos
  - Registro de riesgos

### RM-002: Identificación de Riesgos
- **Objetivo**: Identificar riesgos conocidos y previsibles
- **Tipo**: Detectivo
- **Frecuencia**: Por versión / Cambio importante
- **Evidencia Requerida**:
  - Registros de identificación de riesgos
  - Análisis de peligros
  - Análisis de casos de uso

### RM-003: Estimación de Riesgos
- **Objetivo**: Estimar y evaluar riesgos por uso previsto y uso indebido
- **Tipo**: Detectivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Metodología de estimación de riesgos
  - Evaluaciones de gravedad y probabilidad
  - Matrices de riesgo

### RM-004: Mitigación de Riesgos
- **Objetivo**: Adoptar medidas de gestión de riesgos
- **Tipo**: Preventivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Planes de mitigación
  - Registros de implementación de controles
  - Aceptación de riesgos residuales

### RM-005: Pruebas de Riesgos
- **Objetivo**: Realizar pruebas para garantizar un rendimiento consistente
- **Tipo**: Detectivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Planes y resultados de pruebas
  - Métricas de rendimiento
  - Informes de validación

---

## Artículo 10: Datos y Gobernanza de Datos

### DATA-001: Marco de Gobernanza de Datos
- **Objetivo**: Establecer gobernanza de datos para datos de entrenamiento, validación y prueba
- **Tipo**: Preventivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Política de gobernanza de datos
  - Estándares de calidad de datos
  - Procedimientos de gestión de datos

### DATA-002: Evaluación de Calidad de Datos
- **Objetivo**: Garantizar que los datos sean relevantes, representativos y sin errores
- **Tipo**: Detectivo
- **Frecuencia**: Por conjunto de datos
- **Evidencia Requerida**:
  - Informes de calidad de datos
  - Verificaciones de integridad
  - Validación de precisión

### DATA-003: Examen de Sesgos
- **Objetivo**: Examinar datos en busca de sesgos potenciales
- **Tipo**: Detectivo
- **Frecuencia**: Por conjunto de datos / Periódico
- **Evidencia Requerida**:
  - Informes de evaluación de sesgos
  - Análisis demográfico
  - Métricas de equidad

### DATA-004: Procedencia de Datos
- **Objetivo**: Documentar la procedencia y el linaje de datos
- **Tipo**: Preventivo
- **Frecuencia**: Por conjunto de datos
- **Evidencia Requerida**:
  - Documentación de linaje de datos
  - Registros de origen
  - Historial de procesamiento

---

## Artículo 11: Documentación Técnica

### DOC-001: Descripción del Sistema
- **Objetivo**: Documentar la descripción general del sistema de IA
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Documento de arquitectura del sistema
  - Declaración de propósito previsto
  - Descripción de capacidades

### DOC-002: Documentación del Proceso de Desarrollo
- **Objetivo**: Documentar elementos y proceso de desarrollo
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Especificaciones de diseño
  - Metodología de desarrollo
  - Procedimientos de entrenamiento

### DOC-003: Cumplimiento del Anexo IV
- **Objetivo**: Garantizar que la documentación cumpla con los requisitos del Anexo IV
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Lista de verificación del Anexo IV
  - Archivo técnico
  - Matriz de cumplimiento

---

## Artículo 12: Mantenimiento de Registros (Registro)

### LOG-001: Registro Automático
- **Objetivo**: Implementar registro automático de eventos
- **Tipo**: Detectivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Arquitectura de registro
  - Muestras de registros
  - Política de retención

### LOG-002: Retención de Registros
- **Objetivo**: Mantener registros durante un mínimo de 6 meses
- **Tipo**: Preventivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Política de retención
  - Configuración de almacenamiento
  - Procedimientos de respaldo

### LOG-003: Trazabilidad
- **Objetivo**: Habilitar la trazabilidad del funcionamiento de la IA
- **Tipo**: Detectivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Diseño de pista de auditoría
  - Capacidades de correlación
  - Procedimientos de investigación

---

## Artículo 13: Transparencia

### TRANS-001: Instrucciones de Uso
- **Objetivo**: Proporcionar instrucciones de uso en formato apropiado
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Manual de usuario
  - Guía de inicio rápido
  - Documentación de integración

### TRANS-002: Información del Proveedor
- **Objetivo**: Incluir identidad y datos de contacto del proveedor
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Etiquetado del producto
  - Información de contacto
  - Canales de soporte

### TRANS-003: Divulgación de Rendimiento
- **Objetivo**: Divulgar características, capacidades y limitaciones
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Especificaciones de rendimiento
  - Limitaciones conocidas
  - Límites de casos de uso

---

## Artículo 14: Supervisión Humana

### HO-001: Diseño de Supervisión
- **Objetivo**: Diseñar el sistema para permitir una supervisión humana efectiva
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Arquitectura de supervisión
  - Diseño de interfaz
  - Mecanismos de control

### HO-002: Capacidad de Intervención
- **Objetivo**: Permitir la capacidad de intervenir o detener la operación
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Mecanismos de parada
  - Procedimientos de anulación
  - Protocolos de emergencia

### HO-003: Interpretación de Resultados
- **Objetivo**: Permitir la interpretación de resultados de IA
- **Tipo**: Preventivo
- **Frecuencia**: Por versión
- **Evidencia Requerida**:
  - Funciones de explicabilidad
  - Indicadores de confianza
  - Justificación de decisiones

---

## Artículo 50: Obligaciones de Transparencia (Riesgo Limitado)

### TRANS-101: Notificación a Usuarios
- **Objetivo**: Informar a los usuarios de que están interactuando con IA
- **Tipo**: Preventivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Diseño de notificación
  - Capturas de pantalla de interfaz de usuario
  - Texto de divulgación

### TRANS-102: Etiquetado de Contenido
- **Objetivo**: Marcar apropiadamente el contenido generado por IA
- **Tipo**: Preventivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Implementación de etiquetado
  - Marca de agua (si aplica)
  - Etiquetado de metadatos

---

## Artículo 72: Vigilancia Post-Comercialización

### PMM-001: Sistema de Vigilancia
- **Objetivo**: Establecer sistema de vigilancia post-comercialización
- **Tipo**: Detectivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Plan de vigilancia
  - Procedimientos de recopilación de datos
  - Metodología de análisis

### PMM-002: Seguimiento del Rendimiento
- **Objetivo**: Seguir el rendimiento del sistema de IA a lo largo del tiempo
- **Tipo**: Detectivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Paneles de rendimiento
  - Análisis de tendencias
  - Alertas de degradación

### PMM-003: Integración de Retroalimentación
- **Objetivo**: Integrar retroalimentación en mejoras
- **Tipo**: Correctivo
- **Frecuencia**: Periódico
- **Evidencia Requerida**:
  - Recopilación de retroalimentación
  - Registros de mejoras
  - Historial de actualizaciones

---

## Artículo 73: Notificación de Incidentes Graves

### INC-001: Detección de Incidentes
- **Objetivo**: Detectar incidentes graves de manera oportuna
- **Tipo**: Detectivo
- **Frecuencia**: Continuo
- **Evidencia Requerida**:
  - Mecanismos de detección
  - Configuraciones de alerta
  - Procedimientos de escalamiento

### INC-002: Notificación de Incidentes
- **Objetivo**: Notificar incidentes graves a las autoridades dentro de 15 días
- **Tipo**: Correctivo
- **Frecuencia**: Por incidente
- **Evidencia Requerida**:
  - Plantilla de informe de incidentes
  - Lista de contactos de autoridades
  - Registros de presentación

### INC-003: Análisis de Causa Raíz
- **Objetivo**: Investigar y documentar causas raíz
- **Tipo**: Correctivo
- **Frecuencia**: Por incidente
- **Evidencia Requerida**:
  - Informes de investigación
  - Análisis de causa raíz
  - Acciones correctivas

---

## Uso de Este Catálogo

### Para Evaluación de Cumplimiento
1. Identificar artículos aplicables según nivel de riesgo y rol
2. Revisar controles requeridos para cada artículo
3. Evaluar el estado de implementación actual
4. Documentar brechas y planes de remediación

### Para Recopilación de Evidencia
1. Usar los requisitos de evidencia como lista de verificación
2. Recopilar documentación para cada control implementado
3. Mantener evidencia en carpetas organizadas
4. Actualizar evidencia después de cada versión o cambio

### Para Preparación de Auditoría
1. Mapear controles al alcance de la auditoría
2. Preparar paquetes de evidencia por control
3. Documentar la efectividad del control
4. Identificar cualquier no conformidad

---

## Documentos Relacionados

- [Procedimiento de Gestión de Riesgos](../procedures/PROC-AI-RM-001_FINAL.md)
- [Lista de Verificación de Documentación Técnica](../checklists/CHK-AI-DOC-001_FINAL.md)
- [Procedimiento de Gestión de Incidentes](../procedures/PROC-AI-INC-001_FINAL.md)
- [Procedimiento de Vigilancia Post-Comercialización](../procedures/PROC-AI-PMM-001_FINAL.md)

---

## Historial de Revisiones

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Responsable del Programa de la Ley de IA | Versión inicial |
