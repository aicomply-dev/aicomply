# Guía del Libro de Trabajo Consolidado

## Información del Documento

| Campo | Valor |
|-------|-------|
| **ID del Documento** | TOOL-WB-001 |
| **Versión** | 1.0 |
| **Estado** | Listo para Usar |
| **Propietario** | Responsable del Programa de la Ley de IA |
| **Última Actualización** | 2024-12-01 |

## Propósito

Esta guía explica cómo utilizar el Libro de Trabajo Consolidado de la Ley de IA para rastrear el progreso de cumplimiento, gestionar requisitos y generar informes. El libro de trabajo proporciona una vista centralizada del estado de cumplimiento de la Ley de IA de la UE de su organización.

---

## Resumen del Libro de Trabajo

El Libro de Trabajo Consolidado contiene las siguientes hojas:

| Hoja | Propósito | Frecuencia de Actualización |
|-------|---------|------------------|
| **Panel de Control** | Resumen ejecutivo e indicadores clave | Auto-calculado |
| **Inventario de Sistemas de IA** | Lista de todos los sistemas de IA | Según cambien los sistemas |
| **Matriz de Requisitos** | Requisitos por sistema | Semanal |
| **Rastreador de Controles** | Estado de implementación de controles | Semanal |
| **Registro de Evidencia** | Documentación de evidencia | Al recopilar evidencia |
| **Análisis de Brechas** | Brechas de cumplimiento y remediación | Mensual |
| **Cronograma** | Hitos de cumplimiento | Mensual |
| **Informes** | Plantillas de informes predefinidos | Según sea necesario |

---

## Primeros Pasos

### Paso 1: Configuración Inicial

1. Descargar la plantilla del libro de trabajo
2. Habilitar macros si se solicita
3. Configurar ajustes de la organización en la hoja **Configuración**:
   - Nombre de la organización
   - Contacto principal
   - Período de reporte
   - Umbrales de tolerancia al riesgo

### Paso 2: Poblar el Inventario de Sistemas de IA

Para cada sistema de IA, ingresar:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| ID del Sistema | Identificador único | AI-SYS-001 |
| Nombre del Sistema | Nombre descriptivo | Chatbot de Atención al Cliente |
| Descripción | Breve descripción | Asistente de servicio al cliente con IA |
| Nivel de Riesgo | Resultado de clasificación | Limitado |
| Rol de Operador | Su rol | Desplegador |
| Estado | Estado actual | Activo |
| Propietario | Persona responsable | María García |
| Departamento | Departamento propietario | Servicio al Cliente |
| Fecha de Entrada en Operación | Cuando se desplegó | 2024-01-15 |

### Paso 3: Mapear Requisitos

Para cada sistema de IA:

1. Navegar a la hoja **Matriz de Requisitos**
2. Seleccionar el sistema del menú desplegable
3. Los requisitos se poblarán automáticamente según el nivel de riesgo y rol
4. Actualizar estado para cada requisito:
   - No Iniciado
   - En Progreso
   - Implementado
   - Verificado

---

## Guía Hoja por Hoja

### Hoja del Panel de Control

El Panel de Control proporciona visibilidad inmediata de:

**Métricas Clave:**
- Recuento total de sistemas de IA
- Sistemas por nivel de riesgo (gráfico circular)
- Porcentaje general de cumplimiento
- Tasa de finalización de requisitos
- Tasa de implementación de controles
- Plazos próximos

**Indicadores de Semáforo:**
- 🟢 Verde: En camino (>80% completo)
- 🟡 Amarillo: En riesgo (50-80% completo)
- 🔴 Rojo: Fuera de camino (<50% completo)

### Hoja de Inventario de Sistemas de IA

**Columnas:**
| Columna | Descripción |
|--------|-------------|
| A | ID del Sistema |
| B | Nombre del Sistema |
| C | Descripción |
| D | Nivel de Riesgo |
| E | Rol de Operador |
| F | Estado |
| G | Propietario |
| H | Departamento |
| I | Proveedor (si aplica) |
| J | Fecha de Entrada en Operación |
| K | Última Fecha de Evaluación |
| L | Próxima Fecha de Revisión |
| M | Notas |

**Validación de Datos:**
- Nivel de Riesgo: Menú desplegable (Prohibido, Alto, Limitado, Mínimo)
- Rol de Operador: Menú desplegable (Proveedor, Desplegador, Importador, Distribuidor)
- Estado: Menú desplegable (Planificación, Desarrollo, Activo, Inactivo, Desmantelado)

### Hoja de Matriz de Requisitos

**Estructura:**
- Filas: Requisitos individuales
- Columnas: Sistemas de IA
- Celdas: Indicadores de estado

**Opciones de Estado:**
| Estado | Código | Color |
|--------|------|-------|
| No Aplicable | N/A | Gris |
| No Iniciado | NS | Rojo |
| En Progreso | IP | Amarillo |
| Implementado | IM | Verde Claro |
| Verificado | VE | Verde Oscuro |

**Filtrado:**
- Filtrar por Artículo
- Filtrar por Categoría
- Filtrar por Estado
- Filtrar por Sistema

### Hoja de Rastreador de Controles

Rastrear la implementación de cada control:

| Columna | Descripción |
|--------|-------------|
| ID de Control | Identificador único del control |
| Nombre de Control | Nombre descriptivo |
| Categoría | Categoría de control |
| Artículo | Artículo relacionado de la Ley de IA de la UE |
| Propietario | Persona responsable |
| Estado | Estado de implementación |
| Fecha Objetivo | Finalización planificada |
| Fecha Real | Finalización real |
| Evidencia | Enlace a evidencia |
| Notas | Notas adicionales |

### Hoja de Registro de Evidencia

Documentar toda la evidencia de cumplimiento:

| Columna | Descripción |
|--------|-------------|
| ID de Evidencia | Identificador único |
| Título | Título de evidencia |
| Tipo | Tipo de documento |
| Sistema(s) | Sistemas de IA relacionados |
| Requisito(s) | Requisitos relacionados |
| Control(es) | Controles relacionados |
| Ubicación | Ruta de archivo o URL |
| Fecha de Creación | Cuando se creó |
| Fecha de Revisión | Última fecha de revisión |
| Revisor | Quién revisó |
| Estado | Actual/Archivado |

### Hoja de Análisis de Brechas

Rastrear y remediar brechas de cumplimiento:

| Columna | Descripción |
|--------|-------------|
| ID de Brecha | Identificador único |
| Sistema | Sistema de IA afectado |
| Requisito | Requisito relacionado |
| Descripción de Brecha | Qué falta |
| Calificación de Riesgo | Impacto si no se aborda |
| Plan de Remediación | Cómo cerrar la brecha |
| Propietario | Persona responsable |
| Fecha Objetivo | Cierre planificado |
| Estado | Abierto/En Progreso/Cerrado |
| Fecha de Cierre | Cuando se cerró |

---

## Fórmulas y Cálculos

### Porcentaje de Cumplimiento

```
=CONTAR.SI(RangoEstado,"Verificado")/CONTARA(RangoEstado)*100
```

### Días Hasta el Plazo

```
=FechaObjetivo-HOY()
```

### Puntuación de Riesgo

```
=SI(NivelRiesgo="Alto",3,SI(NivelRiesgo="Limitado",2,1))*SI(Estado="No Iniciado",3,SI(Estado="En Progreso",2,1))
```

---

## Reportes

### Informes Predefinidos

1. **Resumen Ejecutivo**: Estado de cumplimiento de alto nivel
2. **Informe de Detalle de Sistema**: Desglose de cumplimiento por sistema
3. **Informe de Brechas**: Todas las brechas abiertas con estado de remediación
4. **Informe de Evidencia**: Inventario de evidencia por sistema
5. **Informe de Cronograma**: Seguimiento de hitos

### Generación de Informes

1. Navegar a la hoja **Informes**
2. Seleccionar tipo de informe del menú desplegable
3. Establecer rango de fechas (si aplica)
4. Hacer clic en el botón "Generar Informe"
5. El informe se puebla en el área designada
6. Exportar a PDF o imprimir según sea necesario

---

## Mejores Prácticas

### Entrada de Datos

- ✅ Usar convenciones de nomenclatura consistentes
- ✅ Actualizar estado semanalmente como mínimo
- ✅ Vincular evidencia a requisitos específicos
- ✅ Agregar notas para contexto
- ❌ No dejar campos en blanco
- ❌ No usar texto libre donde existen menús desplegables

### Mantenimiento

- Revisar Panel de Control semanalmente
- Actualizar Matriz de Requisitos conforme avanza el trabajo
- Archivar evidencia completada mensualmente
- Respaldar libro de trabajo antes de actualizaciones importantes
- Control de versiones: Guardar copias con fecha

### Colaboración

- Usar ubicación de red compartida o SharePoint
- Establecer cronograma de actualización con propietarios
- Bloquear celdas que no deban editarse
- Usar comentarios para discusiones
- Rastrear cambios si hay múltiples editores

---

## Solución de Problemas

| Problema | Solución |
|-------|----------|
| Las fórmulas no calculan | Presionar F9 para recalcular |
| Los menús desplegables no funcionan | Verificar configuración de Validación de Datos |
| Los gráficos no actualizan | Actualizar fuente de datos |
| Rendimiento lento | Reducir formato condicional |
| Archivo demasiado grande | Archivar datos antiguos en archivo separado |

---

## Documentos Relacionados

- [Catálogo de Controles](./AI-ACT-CONTROLS-CATALOG.md)
- [Plantilla de Clasificación de Riesgo](./AI-SYSTEM-RISK-CLASSIFICATION-TEMPLATE.md)
- [Proceso de Determinación de Roles](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Historial de Revisiones

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Responsable del Programa de la Ley de IA | Versión inicial |
