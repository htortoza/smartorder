// src/data/help.js — Fuente única del Centro de ayuda (SmartOrder).
// Contenido verbatim de Conocimiento/smart-order-product-overview.md.
// Un bullet es string o { t, sub: [...] }. `blurb` = resumen fiel para la tarjeta del índice.

export const modules = [
  {
    id: 'compras', num: '01', title: 'Compras',
    blurb: 'Centraliza el abastecimiento: solicitudes a proveedor y entre tiendas, cotizaciones, órdenes y recepciones parciales.',
    intro: 'Centraliza todo el flujo de abastecimiento. Soporta tres tipos de solicitud:',
    subs: [
      {
        id: 'compras-proveedor', title: 'a) Solicitud a Proveedor',
        bullets: [
          'El sistema sugiere automáticamente el proveedor según un ranking configurado por producto en cada tienda.',
          'Si un producto supera la cantidad máxima permitida, la solicitud requiere aprobación manual antes de continuar.',
          'Usuarios con permiso pueden aprobar directamente sin pasar por el flujo de aprobación.',
          'Al aprobarse, se generan cotizaciones automáticas — una por proveedor involucrado — y se envía un email al proveedor para que acepte o rechace los productos.',
          { t: 'El paso de validación del proveedor puede omitirse de dos formas:', sub: [
            'Activando “Aprobación automática de cotizaciones” en la configuración del sistema.',
            'Asignando a un usuario el permiso de gestionar cotizaciones en nombre del proveedor.',
          ]},
          'Aprobadas las cotizaciones se generan las órdenes de compra y el pedido entra automáticamente en estado “en camino”.',
          'Se pueden registrar múltiples recepciones parciales hasta completar la cantidad o cerrar el proceso manualmente.',
        ],
      },
      {
        id: 'compras-tienda-misma', title: 'b) Solicitud a Tienda de la Misma Empresa',
        bullets: [
          'Flujo similar al de proveedor, pero en lugar de una orden de compra se genera una orden de tránsito.',
          'El encargado de la tienda origen elige desde qué bodega salen los productos.',
          'Al completar ese formulario se genera la Guía de Despacho y el pedido pasa a “en camino”.',
        ],
      },
      {
        id: 'compras-tienda-otra', title: 'c) Solicitud a Tienda de Otra Empresa',
        bullets: [
          'Mismo flujo que la solicitud a proveedor en términos de aprobación y generación de documentos.',
          'El resultado es una orden de compra (no de tránsito), porque el abastecimiento viene de una empresa externa.',
        ],
      },
    ],
  },
  {
    id: 'inventario', num: '02', title: 'Inventario',
    blurb: 'Stock por bodega con salud y costo promedio, conteos con protección de sesgo, movimientos manuales y órdenes externas.',
    subs: [
      {
        id: 'inventario-stock', title: 'Vista de Stock',
        bullets: [
          'Tabla principal con el stock por bodega de cada producto.',
          'Muestra salud de stock, rendimiento y costo promedio ponderado.',
          'La salud de stock se configura manualmente por tienda.',
          'Accediendo al detalle de un producto se ven todos sus movimientos históricos.',
          'El sistema diferencia el stock en tránsito (entrante y saliente) del stock real; el stock en tránsito se aplica al inventario real una vez recepcionado.',
        ],
      },
      {
        id: 'inventario-externas', title: 'Órdenes Externas',
        bullets: [
          'Administración de pedidos originados en otras tiendas hacia las bodegas propias.',
          'Permite elegir desde qué bodega saldrán los productos antes de generar la guía de despacho.',
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
    id: 'reportes', num: '03', title: 'Reportes',
    blurb: 'Tablas dinámicas del inventario con snapshot histórico, guardado y exportación a PDF/Excel, y exposición vía API Key.',
    intro: 'El módulo de reportes permite construir vistas personalizadas del inventario en formato de tabla dinámica. El usuario decide qué datos quiere ver, cómo organizarlos, y puede guardar esa configuración para reutilizarla o compartirla.',
    subs: [
      {
        id: 'reportes-visualizar', title: '¿Qué se puede visualizar?',
        bullets: [
          'Los datos reflejan el estado actual del inventario o un snapshot de una fecha específica seleccionada por el usuario.',
          'La información proviene del inventario real registrado en el sistema (stock, movimientos, productos, tiendas, bodegas, etc.).',
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
    id: 'produccion', num: '04', title: 'Producción',
    blurb: 'Fabrica stock de productos con receta descontando automáticamente los ingredientes utilizados.',
    bullets: [
      'Permite fabricar stock de un producto con receta.',
      'Un producto con receta es aquel configurado con ingredientes en el catálogo maestro.',
      'Al registrar una producción, el sistema descuenta automáticamente los ingredientes utilizados y deja el movimiento registrado.',
    ],
  },
  {
    id: 'mi-empresa', num: '05', title: 'Mi Empresa',
    blurb: 'Configura tiendas y bodegas propias, proveedores asignados, stock mín/máx por producto y ranking de proveedores.',
    bullets: [
      'Configuración de las tiendas propias y sus bodegas.',
      'Asignación de proveedores a la empresa.',
      'Configuración del stock mínimo y máximo por producto en cada tienda (que afecta la salud de stock y los flujos de aprobación de compras).',
      'Definición del ranking de proveedores por producto.',
    ],
  },
  {
    id: 'sistema', num: '06', title: 'Sistema (Administración Global)',
    blurb: 'Administración sin scope de empresa: usuarios, perfiles, proveedores, productos maestros, unidades, webhooks y API Keys.',
    intro: 'Configuración de parámetros sin scope de empresa. Incluye:',
    table: [
      ['Usuarios', 'Crear usuarios y asignarles perfiles de permisos'],
      ['Perfiles', 'Definir roles y permisos granulares'],
      ['Proveedores', 'Crear proveedores y configurar aprobación automática de cotizaciones'],
      ['Empresas', 'Alta y configuración de empresas en el sistema'],
      ['Productos Maestros', 'Entidad base del producto, mapeada luego a tiendas y proveedores'],
      ['Unidades de Medida', 'Configuración de unidades usadas en el sistema'],
      ['Webhooks', 'Disparos automáticos a URLs externas ante eventos del sistema'],
      ['API Keys', 'Claves de acceso para integraciones externas'],
    ],
    subs: [
      {
        id: 'sistema-productos', title: 'Productos Maestros',
        bullets: [
          'Son la entidad raíz del catálogo. A partir de ellos se mapean los productos a tiendas, bodegas y proveedores.',
          'Permiten identificar un mismo producto aunque tenga nombre o SKU diferente en distintos contextos.',
          'Se pueden configurar con recetas (ingredientes) para habilitarlos en el módulo de Producción.',
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
  'Flujo completo de abastecimiento desde la solicitud hasta la recepción en bodega.',
  'Trazabilidad total de movimientos por producto.',
  'Control de stock con diferenciación de stock en tránsito y stock real.',
  'Conteos físicos con protección contra sesgo y métrica de rendimiento por producto.',
  'Gestión multi-empresa, multi-tienda y multi-bodega.',
  'Configuración de permisos granulares por usuario.',
  'Reportes dinámicos del inventario con snapshot histórico, exportación a PDF y Excel, y exposición vía API.',
  'Integración saliente vía Webhooks y API Keys.',
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
