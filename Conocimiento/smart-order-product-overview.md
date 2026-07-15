# Smart Order — Resumen de Producto para Consultores

> **Smart Order** es un ERP de logística diseñado para gestionar el inventario de bodegas dentro de una cadena de tiendas. La jerarquía operativa es: **Empresa → Tiendas → Bodegas**.

---

## Módulos

### 1. Compras

Centraliza todo el flujo de abastecimiento. Soporta **tres tipos de solicitud**:

#### a) Solicitud a Proveedor

- El sistema sugiere automáticamente el proveedor según un **ranking configurado por producto** en cada tienda.
- Si un producto supera la cantidad máxima permitida, la solicitud requiere **aprobación manual** antes de continuar.
- Usuarios con permiso pueden **aprobar directamente** sin pasar por el flujo de aprobación.
- Al aprobarse, se generan **cotizaciones automáticas** — una por proveedor involucrado — y se envía un email al proveedor para que acepte o rechace los productos.
- El paso de validación del proveedor puede omitirse de dos formas:
  - Activando **"Aprobación automática de cotizaciones"** en la configuración del sistema.
  - Asignando a un usuario el permiso de **gestionar cotizaciones en nombre del proveedor**.
- Aprobadas las cotizaciones se generan las **órdenes de compra** y el pedido entra automáticamente en estado **"en camino"**.
- Se pueden registrar **múltiples recepciones parciales** hasta completar la cantidad o cerrar el proceso manualmente.

#### b) Solicitud a Tienda de la Misma Empresa

- Flujo similar al de proveedor, pero en lugar de una orden de compra se genera una **orden de tránsito**.
- El encargado de la tienda origen elige **desde qué bodega salen los productos**.
- Al completar ese formulario se genera la **Guía de Despacho** y el pedido pasa a "en camino".

#### c) Solicitud a Tienda de Otra Empresa

- Mismo flujo que la solicitud a proveedor en términos de aprobación y generación de documentos.
- El resultado es una **orden de compra** (no de tránsito), porque el abastecimiento viene de una empresa externa.

---

### 2. Inventario

#### Vista de Stock

- Tabla principal con el stock por bodega de cada producto.
- Muestra **salud de stock**, **rendimiento** y **costo promedio ponderado**.
- La salud de stock se configura manualmente por tienda.
- Accediendo al detalle de un producto se ven todos sus **movimientos históricos**.
- El sistema diferencia el **stock en tránsito** (entrante y saliente) del stock real; el stock en tránsito se aplica al inventario real una vez recepcionado.

#### Órdenes Externas

- Administración de pedidos originados en otras tiendas hacia las bodegas propias.
- Permite elegir desde qué bodega saldrán los productos antes de generar la guía de despacho.

#### Conteos de Inventario

- Se configuran conteos asignando una **persona responsable**, los productos a contar y la fecha de inicio.
- El asignado **no puede ver el stock registrado** en el sistema durante el conteo (evita sesgo).
- Al finalizar, un encargado puede: **aplicar el conteo**, **enviarlo a recontar** o **descartarlo**.
- El sistema calcula el **rendimiento** (Yield): porcentaje histórico de fidelidad del conteo por producto. Un rendimiento sano está por encima del 90%.

#### Movimientos Manuales

- Permite registrar entradas y salidas de productos de forma manual.
- Las salidas requieren una **razón válida** (actualmente: merma).

---

### 3. Reportes

El módulo de reportes permite construir vistas personalizadas del inventario en formato de **tabla dinámica**. El usuario decide qué datos quiere ver, cómo organizarlos, y puede guardar esa configuración para reutilizarla o compartirla.

#### ¿Qué se puede visualizar?

- Los datos reflejan el **estado actual del inventario** o un **snapshot de una fecha específica** seleccionada por el usuario.
- La información proviene del inventario real registrado en el sistema (stock, movimientos, productos, tiendas, bodegas, etc.).

#### Constructor de reporte

- El usuario selecciona las **dimensiones y métricas** que quiere visualizar mediante un panel lateral (constructor).
- El resultado se presenta como una tabla dinámica que se actualiza en tiempo real según la configuración elegida.
- En dispositivos móviles el constructor se abre como modal para no obstruir la visualización.

#### Guardar y exportar

- Las configuraciones de reporte se pueden **guardar** para reutilizarse en el futuro.
- Los datos visualizados se pueden exportar en dos formatos:
  - **PDF** — para distribución o impresión.
  - **Excel** — para análisis adicional fuera del sistema.

#### Integración con API Keys

- Un reporte guardado puede exponerse a través de una **API Key** configurada en el módulo de Sistema.
- Esto permite que sistemas externos consulten vía GET el resultado del reporte directamente, sin acceso a la interfaz.

---

### 4. Producción

- Permite fabricar stock de un **producto con receta**.
- Un producto con receta es aquel configurado con ingredientes en el catálogo maestro.
- Al registrar una producción, el sistema **descuenta automáticamente los ingredientes** utilizados y deja el movimiento registrado.

---

### 5. Mi Empresa

- Configuración de las **tiendas propias** y sus bodegas.
- Asignación de **proveedores** a la empresa.
- Configuración del **stock mínimo y máximo** por producto en cada tienda (que afecta la salud de stock y los flujos de aprobación de compras).
- Definición del **ranking de proveedores** por producto.

---

### 6. Sistema (Administración Global)

Configuración de parámetros sin scope de empresa. Incluye:


| Sección                | Qué permite configurar                                               |
| ---------------------- | -------------------------------------------------------------------- |
| **Usuarios**           | Crear usuarios y asignarles perfiles de permisos                     |
| **Perfiles**           | Definir roles y permisos granulares                                  |
| **Proveedores**        | Crear proveedores y configurar aprobación automática de cotizaciones |
| **Empresas**           | Alta y configuración de empresas en el sistema                       |
| **Productos Maestros** | Entidad base del producto, mapeada luego a tiendas y proveedores     |
| **Unidades de Medida** | Configuración de unidades usadas en el sistema                       |
| **Webhooks**           | Disparos automáticos a URLs externas ante eventos del sistema        |
| **API Keys**           | Claves de acceso para integraciones externas                         |


#### Productos Maestros

- Son la **entidad raíz** del catálogo. A partir de ellos se mapean los productos a tiendas, bodegas y proveedores.
- Permiten identificar un mismo producto aunque tenga nombre o SKU diferente en distintos contextos.
- Se pueden configurar con **recetas** (ingredientes) para habilitarlos en el módulo de Producción.

#### Webhooks (saliente)

- Actualmente configurados para dispararse ante eventos de: **orden de compra**, **orden de tránsito**, **guía de despacho** y **recepción**.

#### API Keys

- Permiten realizar **reducción de inventario** para N productos vía API externa.
- Con scope a empresa, tiendas y una bodega específica por tienda.
- Retorna error `400` si la solicitud no cumple con la configuración definida en la clave.
- También permiten **exponer reportes guardados** vía GET: una API Key puede configurarse a consultar por reportes guardados, de modo que sistemas externos puedan consultarlo directamente sin acceso a la interfaz.

---

## Lo que el sistema hace bien hoy

- Flujo completo de abastecimiento desde la solicitud hasta la recepción en bodega.
- Trazabilidad total de movimientos por producto.
- Control de stock con diferenciación de stock en tránsito y stock real.
- Conteos físicos con protección contra sesgo y métrica de rendimiento por producto.
- Gestión multi-empresa, multi-tienda y multi-bodega.
- Configuración de permisos granulares por usuario.
- Reportes dinámicos del inventario con snapshot histórico, exportación a PDF y Excel, y exposición vía API.
- Integración saliente vía Webhooks y API Keys.

## Limitaciones actuales conocidas

- Las salidas manuales de inventario solo admiten "merma" como razón.
- Los Webhooks son únicamente de salida (outbound); no existe integración entrante.
- Las API Keys cubren reducción de inventario y consulta de reportes guardados; no otros tipos de operación.
- La aprobación automática de cotizaciones es por empresa, no configurable por proveedor individual.
- Los reportes no incluyen datos predictivos ni análisis de tendencias; muestran el estado actual o snapshots puntuales.

