// src/data/help.js — Fuente única del Centro de ayuda (SmartOrder).
// Contenido verbatim de Conocimiento/smart-order-product-overview.md.
// Un bullet es string o { t, sub: [...] }. `blurb` = resumen fiel para la tarjeta del índice.

export const modules = [
  {
    id: 'compras', num: '01', title: 'Compras',
    blurb: 'Solicitudes a proveedor y entre tiendas, cotizaciones, órdenes de compra, y logística de despachos y recepciones parciales.',
    intro: 'Centraliza todo el flujo de abastecimiento. Soporta tres tipos de solicitud:',
    subs: [
      {
        id: 'compras-proveedor', title: 'a) Solicitud a Proveedor',
        bullets: [
          'El sistema sugiere automáticamente el proveedor según un ranking configurado por producto en cada tienda: prioriza primero a los proveedores preconfigurados y, si no hay respuesta, evalúa el resto de las opciones automáticamente en orden ascendente por precio.',
          'Si un producto supera la cantidad máxima permitida, la solicitud requiere aprobación manual antes de continuar.',
          'Usuarios con permiso pueden aprobar directamente sin pasar por el flujo de aprobación.',
          'Los botones para elegir el tipo de solicitud (cotización, orden de compra, etc.) muestran un indicador visual cuando se recomienda un modo especial de compra, guiando al usuario hacia el flujo más eficiente.',
          'Al aprobarse, se generan cotizaciones automáticas — una por proveedor involucrado — y se envía un email al proveedor para que acepte o rechace los productos.',
          { t: 'El paso de validación del proveedor puede omitirse de dos formas:', sub: [
            'Activando “Aprobación automática de cotizaciones” en la configuración del sistema.',
            'Asignando a un usuario el permiso de gestionar cotizaciones en nombre del proveedor.',
          ]},
          'Durante la revisión de una cotización, el equipo de compras puede ajustar o rechazar cantidades de forma granular, sin necesidad de rechazar la cotización completa.',
          'Aprobadas las cotizaciones se generan las órdenes de compra y el pedido entra automáticamente en estado “en camino”.',
          'En cotización, orden de compra y recepción se muestra con iconos y etiquetas el tipo de solicitud, para identificar el flujo de la operación de un vistazo.',
          'Se pueden registrar múltiples recepciones parciales cuando un despacho llega incompleto: se registra lo recibido y el faltante se gestiona por separado, hasta completar la cantidad o cerrar el proceso manualmente.',
        ],
      },
      {
        id: 'compras-tienda-misma', title: 'b) Solicitud a Tienda de la Misma Empresa (Traspaso)',
        bullets: [
          'Flujo similar al de proveedor, pero en lugar de una orden de compra se genera una orden de tránsito, identificada en pantalla como “Solicitud de Traspaso”.',
          'El encargado de la tienda origen elige desde qué bodega salen los productos.',
          'Al completar ese formulario se genera la Guía de Despacho y el pedido pasa a “en camino”.',
          'Una misma solicitud de traspaso puede generar múltiples guías de despacho.',
        ],
      },
      {
        id: 'compras-tienda-otra', title: 'c) Solicitud a Tienda de Otra Empresa',
        bullets: [
          'Mismo flujo que la solicitud a proveedor en términos de aprobación y generación de documentos.',
          'El resultado es una orden de compra (no de tránsito), porque el abastecimiento viene de una empresa externa.',
          'También admite múltiples guías de despacho hacia la tienda de la otra razón social.',
        ],
      },
      {
        id: 'compras-logistica', title: 'd) Logística de Despachos y Recepciones',
        bullets: [
          'Se pueden asignar y gestionar conductores y vehículos directamente desde el detalle de una orden de compra externa, centralizando la información del transporte.',
          'La Configuración de la compañía permite definir plazos máximos de llegada y vencimiento esperados para las órdenes, estandarizando y midiendo el cumplimiento de los proveedores.',
          'El detalle de una orden externa muestra una línea de tiempo unificada del envío y su condición de recepción (por recibir, en tránsito, etc.) para una trazabilidad completa.',
          'Las imágenes que se suben durante la recepción de una orden se comprimen automáticamente, agilizando la carga y ahorrando espacio de almacenamiento.',
        ],
      },
    ],
  },
  {
    id: 'compra-centralizada', num: '02', title: 'Compra Centralizada',
    blurb: 'Consolida la demanda de todas las tiendas o bodegas en una sola negociación con el proveedor, con visibilidad y control centralizado del abastecimiento.',
    bullets: [
      'Gestiona las compras desde un hub central, consolidando la demanda de distintas tiendas o bodegas en una sola negociación.',
      'La consolidación de órdenes permite optimizar costos de compra y de negociación con el proveedor al agrupar volumen.',
      'Da a empresas con múltiples puntos de venta visibilidad y control centralizado sobre su abastecimiento.',
    ],
  },
  {
    id: 'inventario', num: '03', title: 'Inventario',
    blurb: 'Stock por bodega con salud, Infra Stock/Sobrestock y costo promedio, conteos con protección de sesgo, movimientos manuales y órdenes externas.',
    subs: [
      {
        id: 'inventario-stock', title: 'Vista de Stock',
        bullets: [
          'Tabla principal con el stock por bodega de cada producto.',
          'Muestra salud de stock, rendimiento y costo promedio ponderado.',
          'La salud de stock se configura manualmente por tienda usando los niveles de Infra Stock (stock mínimo) y Sobrestock (stock máximo).',
          'Accediendo al detalle de un producto se ven todos sus movimientos históricos.',
          'El sistema diferencia el stock en tránsito (entrante y saliente) del stock real; el stock en tránsito se aplica al inventario real una vez recepcionado.',
        ],
      },
      {
        id: 'inventario-externas', title: 'Órdenes Externas',
        bullets: [
          'Administración de pedidos originados en otras tiendas hacia las bodegas propias.',
          'Permite elegir desde qué bodega saldrán los productos antes de generar la guía de despacho.',
          'Muestra una línea de tiempo unificada del envío y su condición de recepción para seguir el estado de cada pedido de un vistazo.',
        ],
      },
      {
        id: 'inventario-conteos', title: 'Conteos de Inventario',
        bullets: [
          'Se configuran conteos asignando una persona responsable, los productos a contar y la fecha de inicio.',
          'El asignado no puede ver el stock registrado en el sistema durante el conteo (evita sesgo).',
          'Al finalizar, un encargado puede: aplicar el conteo, enviarlo a recontar o descartarlo.',
          'El sistema calcula el rendimiento (Yield): porcentaje histórico de fidelidad del conteo por producto. Un rendimiento sano está por encima del 90%.',
        ],
      },
      {
        id: 'inventario-movimientos', title: 'Movimientos Manuales',
        bullets: [
          'Permite registrar entradas y salidas de productos de forma manual.',
          'Las salidas requieren una razón válida (actualmente: merma).',
        ],
      },
    ],
  },
  {
    id: 'reportes', num: '04', title: 'Reportes',
    blurb: 'Tablas dinámicas del inventario con espectro visual de salud de stock, snapshot histórico, guardado, exportación a PDF/Excel y exposición vía API Key.',
    intro: 'El módulo de reportes permite construir vistas personalizadas del inventario en formato de tabla dinámica. El usuario decide qué datos quiere ver, cómo organizarlos, y puede guardar esa configuración para reutilizarla o compartirla.',
    subs: [
      {
        id: 'reportes-visualizar', title: '¿Qué se puede visualizar?',
        bullets: [
          'Los datos reflejan el estado actual del inventario o un snapshot de una fecha específica seleccionada por el usuario.',
          'La información proviene del inventario real registrado en el sistema (stock, movimientos, productos, tiendas, bodegas, etc.).',
          'Un espectro visual (gráfico de barras con colores) muestra de forma intuitiva qué productos están por debajo, dentro o por encima de sus niveles ideales de stock, agilizando la identificación de riesgos de desabastecimiento o sobrestock sin analizar tablas numéricas.',
        ],
      },
      {
        id: 'reportes-constructor', title: 'Constructor de reporte',
        bullets: [
          'El usuario selecciona las dimensiones y métricas que quiere visualizar mediante un panel lateral (constructor).',
          'El resultado se presenta como una tabla dinámica que se actualiza en tiempo real según la configuración elegida.',
          'En dispositivos móviles el constructor se abre como modal para no obstruir la visualización.',
        ],
      },
      {
        id: 'reportes-exportar', title: 'Guardar y exportar',
        bullets: [
          'Las configuraciones de reporte se pueden guardar para reutilizarse en el futuro.',
          { t: 'Los datos visualizados se pueden exportar en dos formatos:', sub: [
            'PDF — para distribución o impresión.',
            'Excel — para análisis adicional fuera del sistema.',
          ]},
        ],
      },
      {
        id: 'reportes-api', title: 'Integración con API Keys',
        bullets: [
          'Un reporte guardado puede exponerse a través de una API Key configurada en el módulo de Sistema.',
          'Esto permite que sistemas externos consulten vía GET el resultado del reporte directamente, sin acceso a la interfaz.',
        ],
      },
    ],
  },
  {
    id: 'produccion', num: '05', title: 'Producción',
    blurb: 'Fabrica stock de productos con receta descontando automáticamente los ingredientes utilizados, o registra la salida automática cuando una venta descuenta un producto con receta.',
    intro: 'Toda producción nace Manual (un usuario la crea en el dashboard) o Automática (la dispara una venta). Comparten folio PROD-XXXXXX, pero se comportan distinto:',
    subs: [
      {
        id: 'produccion-manual', title: 'Crear una producción manual',
        bullets: [
          'Wizard de 3 pasos: 1) elegir el producto de tienda con receta —sin receta no hay producción Manual—, 2) configurar esta orden (unidades a producir, bodega de origen, bodega de destino) y 3) revisar y ejecutar.',
          'La receta base no se modifica: los ajustes son exclusivos de esta orden. El teórico informa, pero la cantidad orden es lo que realmente se descuenta.',
          { t: 'Cada línea del BOM de la orden puede quedar en uno de estos estados:', sub: [
            'Ajustado — mismo insumo, otra cantidad (p. ej. +15% sobre el teórico).',
            'Sustituido — se cambia el producto; el original queda como “reemplazado por”, con motivo consultable.',
            'Extra — insumo que no venía en la receta y se agrega solo a esta orden.',
            'Eliminado — no se consume esa línea; puede afectar la masa o el rendimiento final del producto.',
          ]},
          'El pie del wizard muestra el costo estimado de la orden. Si una línea queda inconsistente, el sistema exige revisión antes de continuar.',
        ],
      },
      {
        id: 'produccion-resultados', title: 'Qué pasa al ejecutar',
        bullets: [
          'Completada — alcanza todo lo pedido. Parcial — alcanza una parte y queda pendiente, con los insumos bloqueantes marcados. Sin log — si no cabe producir ni una unidad, no se crea registro.',
          'Reanudar abre un nuevo intento sobre el pendiente (la receta maestra sigue intacta). Finalizar cierra el pendiente sin producir el resto y sin devolver stock; ese log no se puede reanudar.',
          'Cada ejecución con cantidad producida > 0 deja Kardex: un CONSUMO por cada insumo de la orden y una ENTRADA del terminado en destino, ambos con folio PROD.',
          'El costo promedio del terminado sale del costo de los insumos de esa orden dividido las unidades producidas, y se mezcla con el cost_avg ya existente en destino. Ese ingreso puede saldar deuda de stock abierta del mismo producto.',
        ],
      },
      {
        id: 'produccion-automatica', title: 'Producción automática por venta',
        bullets: [
          'Se dispara sola cuando el POS o una API key descuentan un producto con receta. No es dinámica: no hay editor de insumos ni sustituciones en esa pantalla.',
          { t: 'Orden de descuento:', sub: [
            'Primero el stock propio del terminado, si lo hay.',
            'Lo que falte se cubre explotando la receta (en sub-recetas, primero el stock del intermedio).',
            'Si tampoco alcanzan las hojas de la receta, se registra deuda de stock en esas hojas.',
          ]},
        ],
      },
      {
        id: 'produccion-limites', title: 'Qué no hace este módulo',
        bullets: [
          'No edita la receta maestra: cualquier desvío es siempre por orden, no por catálogo.',
          'No anula ni borra una producción ya ejecutada — el stock ya se movió — ni permite editar un log cerrado; reanudar es un intento nuevo, no una edición.',
          'No produce productos sin receta ni crea un log si no alcanza ni una unidad con los insumos de la orden.',
          'No hay cancelación de venta desde Producción: la vía Automática solo audita una reducción de inventario que ya ocurrió.',
        ],
      },
    ],
  },
  {
    id: 'mi-empresa', num: '06', title: 'Mi Empresa',
    blurb: 'Configura tiendas y bodegas propias, proveedores asignados, plazos de entrega, Infra Stock/Sobrestock por producto y ranking de proveedores.',
    bullets: [
      'Configuración de las tiendas propias y sus bodegas.',
      'Asignación de proveedores a la empresa, con selección y gestión masiva de productos directamente desde el formulario de un proveedor o una tienda para asignar o actualizar muchos artículos a la vez.',
      'Configuración de Infra Stock (mínimo) y Sobrestock (máximo) por producto en cada tienda (que afecta la salud de stock y los flujos de aprobación de compras).',
      'Definición del ranking de proveedores por producto, usado por el sistema para priorizar automáticamente a quién solicitar primero.',
      'Definición de plazos máximos de llegada y vencimiento esperados para las órdenes, para estandarizar y medir el cumplimiento de los proveedores.',
    ],
  },
  {
    id: 'dashboard', num: '07', title: 'Dashboard y Notificaciones',
    blurb: 'Panel de inicio configurable con widgets en tiempo real y notificaciones instantáneas sobre eventos críticos de la operación.',
    subs: [
      {
        id: 'dashboard-widgets', title: 'Dashboard Personalizable',
        bullets: [
          'Cada usuario puede añadir, organizar y redimensionar widgets (módulos de información) mediante arrastrar y soltar, adaptando su espacio de trabajo a los KPIs y accesos directos más relevantes para su día a día.',
          'Los widgets de acceso rápido y de datos críticos se actualizan automáticamente, ofreciendo una vista centralizada y en tiempo real del estado de la operación.',
          'El dashboard es totalmente responsivo: se adapta a tablets y teléfonos sin perder funcionalidad.',
        ],
      },
      {
        id: 'dashboard-notificaciones', title: 'Notificaciones en Vivo',
        bullets: [
          'Un servicio central de notificaciones alerta a los usuarios en tiempo real sobre eventos importantes, como cambios de estado en órdenes o despachos.',
          'No es necesario refrescar la página para estar al tanto de actualizaciones críticas de la operación logística.',
        ],
      },
    ],
  },
  {
    id: 'sistema', num: '08', title: 'Sistema (Administración Global)',
    blurb: 'Administración sin scope de empresa: usuarios, perfiles, proveedores, productos maestros, unidades, webhooks y API Keys.',
    intro: 'Configuración de parámetros sin scope de empresa. Incluye:',
    table: [
      ['Usuarios', 'Crear usuarios y asignarles perfiles de permisos'],
      ['Perfiles', 'Definir roles y permisos granulares, organizados según la jerarquía del producto para facilitar la asignación visual de accesos'],
      ['Proveedores', 'Crear, editar y eliminar proveedores; gestionar múltiples contactos y configurar aprobación automática de cotizaciones'],
      ['Empresas', 'Alta y configuración de empresas en el sistema'],
      ['Productos Maestros', 'Entidad base del producto, con códigos universales (EAN/UPC), mapeada luego a tiendas y proveedores'],
      ['Unidades de Medida', 'Configuración de unidades usadas en el sistema'],
      ['Webhooks', 'Disparos automáticos a URLs externas ante eventos del sistema'],
      ['API Keys', 'Claves de acceso para integraciones externas'],
    ],
    subs: [
      {
        id: 'sistema-productos', title: 'Productos Maestros',
        bullets: [
          'Son la entidad raíz del catálogo. A partir de ellos se mapean los productos a tiendas, bodegas y proveedores.',
          'Permiten identificar un mismo artículo aunque tenga nombre o Código Externo diferente en distintos contextos.',
          'Admiten códigos universales (EAN/UPC), facilitando la estandarización global del inventario y la compatibilidad con sistemas de escaneo internacionales.',
          'Se pueden configurar con recetas (ingredientes) para habilitarlos en el módulo de Producción.',
          'El Código Externo (antes “SKU”) vive en el Producto Tienda, de modo que un mismo producto maestro puede identificarse con códigos distintos según la sucursal o canal donde se distribuya.',
          'Es posible registrar y editar múltiples productos de forma simultánea en el catálogo de la tienda, además de editar en línea y en bloque los límites de stock de varios artículos a la vez.',
          'Un listado dinámico de proveedores en la ficha del producto muestra de inmediato qué proveedores lo surten, agilizando la decisión de compra.',
          'Todo Producto Tienda es vendible de forma automática, simplificando el flujo de creación de artículos.',
        ],
      },
      {
        id: 'sistema-proveedores', title: 'Proveedores',
        bullets: [
          'Alta, edición y eliminación controlada de proveedores para mantener el directorio siempre actualizado.',
          'Gestión de múltiples contactos por proveedor, para centralizar la comunicación con distintas áreas (ventas, cobranza, logística).',
          'Los documentos generados a partir de una orden (como órdenes de compra) incluyen el campo externalId del proveedor, facilitando una integración precisa y trazable con sistemas externos de contabilidad o ERP.',
          'El filtro por categorías se renovó con una versión más rápida e intuitiva, disponible también en los formularios de productos, movimientos de inventario y tipos de solicitud de stock.',
        ],
      },
      {
        id: 'sistema-webhooks', title: 'Webhooks (saliente)',
        bullets: [
          'Actualmente configurados para dispararse ante eventos de: orden de compra, orden de tránsito, guía de despacho y recepción.',
        ],
      },
      {
        id: 'sistema-apikeys', title: 'API Keys',
        bullets: [
          'Permiten realizar reducción de inventario para N productos vía API externa.',
          'Con scope a empresa, tiendas y una bodega específica por tienda.',
          'Retorna error 400 si la solicitud no cumple con la configuración definida en la clave.',
          'También permiten exponer reportes guardados vía GET: una API Key puede configurarse a consultar por reportes guardados, de modo que sistemas externos puedan consultarlo directamente sin acceso a la interfaz.',
        ],
      },
    ],
  },
];

export const highlights = [
  'Flujo completo de abastecimiento desde la solicitud hasta la recepción en bodega, con modo de Compra Centralizada para consolidar demanda multi-tienda.',
  'Trazabilidad total de movimientos por producto, incluida línea de tiempo unificada de envíos y recepciones parciales.',
  'Control de stock con diferenciación de stock en tránsito y stock real, con nomenclatura estándar de Infra Stock y Sobrestock.',
  'Conteos físicos con protección contra sesgo y métrica de rendimiento por producto.',
  'Gestión multi-empresa, multi-tienda y multi-bodega, con gestión masiva de productos, proveedores y stock desde una sola pantalla.',
  'Configuración de permisos granulares por usuario, organizados según la jerarquía del producto.',
  'Reportes dinámicos del inventario con espectro visual de salud de stock, snapshot histórico, exportación a PDF y Excel, y exposición vía API.',
  'Dashboard personalizable con widgets en tiempo real y notificaciones instantáneas de eventos críticos de la operación.',
  'Integración saliente vía Webhooks y API Keys, y trazabilidad contable con externalId en documentos de proveedor.',
];

// Roadmap = las "limitaciones conocidas" reencuadradas como mejoras futuras.
export const roadmap = [
  { t: 'Más razones para salidas manuales de inventario.', now: 'Hoy las salidas manuales solo admiten “merma” como razón.' },
  { t: 'Integración entrante vía Webhooks.', now: 'Hoy los Webhooks son únicamente de salida (outbound).' },
  { t: 'Ampliar las operaciones disponibles vía API Keys.', now: 'Hoy cubren reducción de inventario y consulta de reportes guardados.' },
  { t: 'Aprobación automática de cotizaciones configurable por proveedor individual.', now: 'Hoy la aprobación automática es por empresa.' },
  { t: 'Datos predictivos y análisis de tendencias en reportes.', now: 'Hoy los reportes muestran el estado actual o snapshots puntuales.' },
];

// Nº de features por módulo (para las tarjetas del índice).
export const featureCount = (m) => (m.subs?.length ?? (m.bullets ? 1 : 0));
