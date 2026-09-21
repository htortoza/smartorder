# **Módulo de Producción — Smart Order**

Producción convierte **una receta \+ stock** en **producto terminado en una bodega**, o deja constancia de una **salida automática por venta** cuando el POS/API descuenta un producto con receta.

Hay **dos orígenes** de un mismo `PROD-XXXXXX`:

|  | Manual (`Crear producción`) | Automática (`Automática por venta`) |
| :---- | :---- | :---- |
| Quién la dispara | Un usuario en el dashboard | Una venta / reducción de inventario (API key) |
| Lista de insumos | **Dinámica por orden**: se parte de la receta y se puede ajustar, sustituir, agregar o quitar insumos **solo para esa producción** | Fija: stock del terminado primero, luego explosión de la receta |
| Qué hace al stock | Consume los **insumos de la orden** (no necesariamente el teórico) e **ingresa** el terminado | Primero sale el producto si hay stock; si no alcanza, explota la receta |
| Bodega destino | Obligatoria (puede ser la misma que origen) | No hay (no se fabrica, se descuenta) |
| Intentos | Sí (parcial → reanudar / finalizar) | No |

---

## **1\. Viaje Manual — “Nueva producción”**

Ejemplo de listado/detalle ya visto: **PROD-000009 Lomo Salteado con Risotto** (50 pedidas, 2 intentos, origen y destino distintos).

Ejemplo del alta: **Pechuga de pollo 1kg**, 12 unidades, origen y destino *Bodega Central Santiago*, wizard de 3 pasos.

### **1.1 Paso 1 — Producto**

Se elige el **producto de tienda con receta** que se va a producir. Sin receta no hay producción Manual.

### **1.2 Paso 2 — Configuración e insumos (un solo paso)**

Aquí se define **esta orden**, no la receta de catálogo.

Cabecera:

* Unidades a producir (p. ej. 12).  
* Bodega de origen (stock que se consulta y, por defecto, de donde salen insumos).  
* Bodega de destino (donde entra el terminado). Pueden coincidir.  
* Aviso: **la receta base no se modifica**; los cambios son exclusivos de esta orden.

Tabla **Insumos y consumo proyectado** (cantidades calculadas para las unidades pedidas):

| Columna | Para qué |
| :---- | :---- |
| Ingrediente | Producto (imagen, nombre, Código externo) |
| Teórico | Lo que pediría la receta para esas unidades |
| Cantidad orden | Lo que **esta producción** va a consumir (editable) |
| Stock bodega | Existencia en la bodega de origen |
| Estado | Tipo de desvío respecto al teórico |
| Acciones | Sustituir, eliminar, deshacer, ver motivo |

Estados de línea:

* **Ajustado** — mismo insumo, otra cantidad (Longaniza 1.680 g teórico → 1.932 g, \+15%).  
* **Sustituido / Reemplazo** — se cambia el producto. El original queda anidado (“Reemplazado por…”) y el reemplazo es el que se descuenta (Yogurt natural 500 ml → Yogurt griego 1 L, con motivo consultable).  
* **Extra** — insumo que **no** venía en la receta y se agrega a esta orden (Sal marina 120 g).  
* **Eliminado** — línea de la receta con cantidad orden 0; no se consume. Puede advertir que **afecta la masa final** (Pimienta negra). Se puede deshacer.

También se puede **\+ Agregar ingrediente alternativo o extra**.

El pie muestra **costo estimado** de la orden (en el ejemplo $64.830) y una leyenda de estados. Si una línea queda inconsistente, el flujo pide **revisión antes de continuar** (no se sigue a Revisión con insumos en conflicto).

Al cambiar las unidades a producir, el teórico se recalcula; la cantidad orden de cada línea es lo que manda el descuento.

### **1.3 Paso 3 — Revisión**

Confirmación de producto, bodegas, unidades e insumos de la orden, y ejecución.

### **1.4 Ejecutar**

El sistema consume las **cantidades orden** (ajustadas / reemplazos / extras; omitiendo eliminados) en las bodegas de origen, y acredita las unidades del terminado en destino.

* **Alcanza todo lo de la orden** → Completada.  
* **Alcanza una parte** → Parcial; queda pendiente; se marcan insumos bloqueantes.  
* **No cabe producir nada** → no se crea el log.

El detalle (PROD-000009) sigue mostrando resumen, historial de intentos e ingredientes **de lo que realmente se ejecutó** (snapshot histórico, no el stock de hoy).

### **1.5 Kardex y costo**

Cada ejecución con cantidad producida \> 0:

1. **"CONSUMO"** de cada insumo de la orden (observación de consumo por producción), folio `PROD`.  
2. **"ENTRADA"** del terminado en destino.  
3. El **costo promedio** del terminado sale del costo de los insumos **de esa orden** / unidades producidas (luego se mezcla con el `cost_avg` ya existente en destino).  
4. Ese ingreso **puede saldar deuda de stock** abierta del mismo producto en la bodega destino.

### **1.6 Reanudar o finalizar (solo parciales Manuales)**

* **Reanudar**: nuevo intento por el pendiente. Es otra ejecución: otra vez se arma la lista de insumos de **ese** intento (la receta maestra sigue intacta).  
* **Finalizar**: cierra el pendiente **sin producir el resto y sin devolver stock**. No se puede reanudar ese log.

El listado agrupa la cadena (50/50 con historial de intentos).

---

## **2\. Viaje Automática — “por venta”**

Sin cambios de producto: **no es dinámica**. No hay editor de insumos.

Ejemplo: **PROD-000017 Fideos espagueti**, 5/5, *Producción automática*, `VENTA-98231894`.

Orden de descuento:

1. Stock propio del terminado en la bodega de depleción.  
2. Lo que falte, explosión de receta (en sub-recetas: stock del intermedio primero).  
3. Si tampoco alcanzan las hojas, **deuda de stock** en esas hojas.

---

## **3\. Catálogo por pantalla**

### **Listado (`/production`)**

* Una **tienda**.  
* Tabs **Todas / Manuales / Automáticas**, filtros Completadas / Parciales, búsqueda, paginación.  
* Columnas: `PROD-00000N`, estado, origen (Manual vs Automática por venta), producto, progreso X/Y, fecha.  
* Cadenas reanudadas: un renglón agregado \+ versiones.  
* **Crear producción** → wizard Nueva producción.

### **Nueva producción (wizard)**

1. **Producto** — qué se fabrica.  
2. **Configuración e insumos** — unidades, bodegas, BOM de **esta orden** (teórico vs orden, estados, stock, costo estimado, altas/bajas/sustituciones).  
3. **Revisión** — confirmar y ejecutar.

### **Detalle Manual**

* Completada/Parcial \+ número de intento.  
* Qty de este intento vs total de la cadena.  
* Bodegas origen / destino.  
* Historial de intentos.  
* Ingredientes ejecutados (pedido / consumido / pendiente, valores históricos).

### **Detalle Automática**

* Badge *Producción automática*.  
* Salida desde stock **o** explosión a ingredientes.  
* Ficha de integración.  
* Sin destino, sin editor, sin reanudar/finalizar.

---

## **4\. Reglas de negocio**

* **Receta \= plantilla; orden \= instancia.** Ajustar Longaniza \+15% o cambiar yogurt no reescribe la receta de Pechuga de pollo.  
* **El teórico informa; la cantidad orden manda** el descuento.  
* **Sustitución** cambia qué producto sale de bodega; el original queda como trazabilidad (“reemplazado por”) y puede llevar motivo.  
* **Extra** suma consumo que la receta no pedía. **Eliminado** no consume esa línea y puede afectar masa/rendimiento percibido del terminado.  
* **Tope de unidades**: lo producible lo limita el stock de los insumos **vigentes de la orden** (el más escaso manda).  
* **Aplanado Manual vs Automática**: Manual parte de materia prima de la receta y luego el usuario la altera. Automática no ofrece esa alteración; respeta stock por nivel.  
* **Estados del log**: `completed` / `partial` / `finished`. El listado de una cadena muestra el último intento y cantidades acumuladas.  
* **Kardex Manual**: movimientos `PRODUCTION` según la orden ejecutada, no según el teórico.  
* **Filtros del listado** (tabs, búsqueda): sobre el universo de la tienda en el front.

---

## **5\. Lo que el módulo no hace**

* **No edita la receta maestra** desde Producción. El desvío es por orden.  
* **No anula ni borra** una producción ya ejecutada. El stock ya se movió.  
* **No edita** un log cerrado: no se cambia cantidad ni insumos de un intento ya corrido. Reanudar \= intento nuevo.  
* **No crea** un log si no cabe al menos una unidad con los insumos de la orden.  
* **No produce** productos sin receta.  
* **Automática no es dinámica**: no se sustituye ni se ajusta BOM en esa pantalla.  
* **No hay cancelación de venta** desde Producción: Automática es auditoría de una reducción que ya ocurrió.

