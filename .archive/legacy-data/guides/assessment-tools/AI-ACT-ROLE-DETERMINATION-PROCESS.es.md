# Proceso de Determinación de Roles de la Ley de IA

## Información del Documento

| Campo | Valor |
|-------|-------|
| **ID del Documento** | TOOL-ROLE-001 |
| **Versión** | 1.0 |
| **Estado** | Listo para Usar |
| **Propietario** | Gobernanza de Controles Empresariales |
| **Última Actualización** | 2024-12-01 |

## Propósito

Esta guía ayuda a las organizaciones a determinar qué roles de la Ley de IA de la UE se aplican a ellas para cada sistema de IA. Comprender su rol es fundamental ya que determina sus obligaciones de cumplimiento.

---

## Resumen de Roles de la Ley de IA de la UE

La Ley de IA de la UE define cuatro roles principales de operador, cada uno con obligaciones distintas:

| Rol | Definición | Obligaciones Clave |
|------|------------|-----------------|
| **Proveedor** | Desarrolla o encarga el desarrollo de un sistema de IA y lo pone en el mercado/servicio bajo su propio nombre | Cumplimiento total del Capítulo 2 (alto riesgo), SGC, evaluación de conformidad, marcado CE |
| **Desplegador** | Utiliza un sistema de IA bajo su propia autoridad (excepto uso personal) | Supervisión, vigilancia, notificación de incidentes, transparencia hacia los usuarios |
| **Importador** | Establecido en la UE, pone IA de terceros países en el mercado de la UE | Verificar conformidad, asegurar documentación, mantener registros |
| **Distribuidor** | Pone a disposición IA en el mercado (no es proveedor/importador) | Verificar marcado CE, asegurar condiciones adecuadas de almacenamiento/transporte |

Adicionalmente:
- **Proveedor de IA de Propósito General** | Proporciona modelos de IA de propósito general | Documentación del modelo, transparencia, evaluación de riesgo sistémico (si aplica)

---

## Árbol de Decisión para Determinación de Roles

### Paso 1: ¿Su organización desarrolló el sistema de IA?

**SÍ** → Proceder al Paso 2
**NO** → Proceder al Paso 4

### Paso 2: ¿El sistema de IA se pone en el mercado o se pone en servicio bajo el nombre o marca registrada de su organización?

**SÍ** → Usted es un **PROVEEDOR**
**NO** → Proceder al Paso 3

### Paso 3: ¿Modificó sustancialmente el sistema de IA?

**SÍ** → Usted es un **PROVEEDOR** (del sistema modificado)
**NO** → Puede ser un **Desplegador** si utiliza el sistema

### Paso 4: ¿Su organización está establecida en la UE?

**SÍ** → Proceder al Paso 5
**NO** → Proceder al Paso 7

### Paso 5: ¿Está poniendo un sistema de IA de un tercer país en el mercado de la UE?

**SÍ** → Usted es un **IMPORTADOR**
**NO** → Proceder al Paso 6

### Paso 6: ¿Está poniendo a disposición el sistema de IA en el mercado sin ser el proveedor o importador?

**SÍ** → Usted es un **DISTRIBUIDOR**
**NO** → Proceder al Paso 8

### Paso 7: ¿Los resultados de su sistema de IA se utilizan en la UE?

**SÍ** → La Ley de IA de la UE se le aplica como si estuviera establecido en la UE
**NO** → La Ley de IA de la UE puede no aplicarse (verificar con asesor legal)

### Paso 8: ¿Está utilizando el sistema de IA bajo su propia autoridad?

**SÍ** → Usted es un **DESPLEGADOR**
**NO** → Revisar su relación con el sistema de IA

---

## Resumen de Obligaciones Específicas por Rol

### Obligaciones del Proveedor (Artículo 16)

| Obligación | Artículo | Descripción |
|------------|---------|-------------|
| Sistema de Gestión de Riesgos | Art. 9 | Establecer y mantener gestión de riesgos |
| Gobernanza de Datos | Art. 10 | Garantizar calidad y gobernanza de datos |
| Documentación Técnica | Art. 11 | Crear y mantener documentación del Anexo IV |
| Mantenimiento de Registros | Art. 12 | Implementar registro automático |
| Transparencia | Art. 13 | Proporcionar instrucciones de uso |
| Supervisión Humana | Art. 14 | Diseñar para supervisión efectiva |
| Precisión y Robustez | Art. 15 | Garantizar precisión, robustez, ciberseguridad |
| Gestión de Calidad | Art. 17 | Establecer SGC |
| Evaluación de Conformidad | Art. 43 | Completar antes de poner en el mercado |
| Declaración UE | Art. 47 | Redactar declaración de conformidad |
| Marcado CE | Art. 48 | Colocar marcado CE |
| Registro | Art. 49 | Registrar en base de datos de la UE |
| Vigilancia Post-Comercialización | Art. 72 | Establecer sistema de vigilancia |
| Notificación de Incidentes | Art. 73 | Notificar incidentes graves |

### Obligaciones del Desplegador (Artículo 26)

| Obligación | Artículo | Descripción |
|------------|---------|-------------|
| Uso según Instrucciones | Art. 26(1) | Usar sistema según instrucciones |
| Supervisión Humana | Art. 26(2) | Asignar personas competentes para supervisión |
| Calidad de Datos de Entrada | Art. 26(4) | Garantizar que los datos de entrada sean relevantes |
| Vigilancia | Art. 26(5) | Vigilar operación según instrucciones |
| Retención de Registros | Art. 26(6) | Mantener registros durante período mínimo |
| Transparencia hacia Usuarios | Art. 26(7) | Informar a personas afectadas |
| EIPD | Art. 26(9) | Realizar evaluación de impacto en protección de datos |
| Notificación de Incidentes | Art. 26(5) | Notificar incidentes graves |

### Obligaciones del Importador (Artículo 23)

| Obligación | Artículo | Descripción |
|------------|---------|-------------|
| Verificar Conformidad | Art. 23(1) | Garantizar evaluación de conformidad completada |
| Verificar Documentación | Art. 23(2) | Garantizar documentación técnica disponible |
| Verificar Marcado CE | Art. 23(3) | Verificar marcado CE colocado |
| Información de Contacto | Art. 23(4) | Indicar nombre y contacto en el sistema |
| Condiciones de Almacenamiento | Art. 23(5) | Garantizar almacenamiento/transporte adecuado |
| Proporcionar Documentación | Art. 23(6) | Proporcionar documentación a autoridades |
| Cooperar | Art. 23(7) | Cooperar con autoridades |

### Obligaciones del Distribuidor (Artículo 24)

| Obligación | Artículo | Descripción |
|------------|---------|-------------|
| Verificar Marcado CE | Art. 24(1) | Verificar marcado CE antes de distribución |
| Verificar Documentación | Art. 24(2) | Verificar instrucciones de uso incluidas |
| Condiciones de Almacenamiento | Art. 24(3) | Garantizar almacenamiento/transporte adecuado |
| Cooperar | Art. 24(4) | Cooperar con autoridades |

---

## Roles Múltiples

Una organización puede desempeñar múltiples roles simultáneamente:

**Escenarios de Ejemplo:**

1. **Proveedor + Desplegador**: Desarrolla un sistema de IA y también lo utiliza internamente
2. **Importador + Desplegador**: Importa un sistema de IA de un tercer país y lo despliega
3. **Proveedor (por modificaciones)**: Modifica sustancialmente un sistema de terceros

Al desempeñar múltiples roles, debe cumplir con las obligaciones de TODOS los roles aplicables.

---

## Hoja de Trabajo para Determinación de Roles

Complete esta hoja de trabajo para cada sistema de IA:

### Información del Sistema

| Campo | Entrada |
|-------|-------|
| **Nombre del Sistema de IA** | |
| **ID del Sistema** | |
| **Fecha de Evaluación** | |
| **Evaluador** | |

### Evaluación de Roles

| Pregunta | Respuesta | Notas |
|----------|--------|-------|
| ¿Desarrollamos este sistema de IA? | [ ] Sí [ ] No | |
| ¿Se comercializa bajo nuestro nombre/marca registrada? | [ ] Sí [ ] No | |
| ¿Lo modificamos sustancialmente? | [ ] Sí [ ] No | |
| ¿Estamos establecidos en la UE? | [ ] Sí [ ] No | |
| ¿Lo importamos desde fuera de la UE? | [ ] Sí [ ] No | |
| ¿Lo distribuimos a terceros? | [ ] Sí [ ] No | |
| ¿Lo utilizamos bajo nuestra autoridad? | [ ] Sí [ ] No | |

### Determinación de Roles

| Rol | ¿Aplicable? | Justificación |
|------|-------------|---------------|
| Proveedor | [ ] Sí [ ] No | |
| Desplegador | [ ] Sí [ ] No | |
| Importador | [ ] Sí [ ] No | |
| Distribuidor | [ ] Sí [ ] No | |

### Aprobación

| Campo | Entrada |
|-------|-------|
| **Rol(es) Determinado(s)** | |
| **Aprobado Por** | |
| **Fecha de Aprobación** | |

---

## Documentos Relacionados

- [Procedimiento de Clasificación de IA](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Procedimiento de Gestión de Riesgos](../procedures/PROC-AI-RM-001_FINAL.md)
- [Procedimiento de Evaluación de Conformidad](../procedures/PROC-AI-CA-001_FINAL.md)

---

## Historial de Revisiones

| Versión | Fecha | Autor | Cambios |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Gobernanza de Controles Empresariales | Versión inicial |
