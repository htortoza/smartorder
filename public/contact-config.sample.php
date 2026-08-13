<?php
/**
 * contact-config.sample.php — PLANTILLA. Copiar como contact-config.php y subir FUERA
 * del web root (a /home/smartord/contact-config.php, NO dentro de public_html).
 * contact.php lo carga con require dirname(__DIR__).'/contact-config.php'.
 * El archivo real con secretos NO se commitea (ver .gitignore).
 */
return [
    // ── Seguridad del form (validación server-side por Origin/Referer) ────────
    'ALLOWED_ORIGINS' => ['smart-order.io', 'www.smart-order.io'],

    // ── ClickUp ──────────────────────────────────────────────────────────────
    'CLICKUP_TOKEN'   => 'pk_XXXXXXXX',   // token personal o de app
    'CLICKUP_LIST_ID' => '901234567890',  // ID de la lista destino

    // Mapear campos del form a Custom Fields de ClickUp (dejar vacío para usar solo la descripción)
    'CLICKUP_CUSTOM_FIELDS' => [
        // 'nombre'  => 'field-uuid',  // short_text (nombre completo)
        // 'email'   => 'field-uuid',  // email
        // 'phone'   => 'field-uuid',  // phone (se normaliza a E.164; si no valida, se omite)
        // 'company' => 'field-uuid',  // short_text
    ],

    // Campos fijos/requeridos de la lista, enviados en cada tarea.
    // dropdown → value = option-uuid · users → value = ['add' => [userId]]
    'CLICKUP_EXTRA_FIELDS' => [
        // ['id' => 'field-uuid', 'value' => 'option-uuid'],
        // ['id' => 'field-uuid', 'value' => ['add' => [12345678]]],
    ],

    // ── SMTP (casilla del dominio) ───────────────────────────────────────────
    'SMTP_HOST'      => 'mail.smart-order.io',
    'SMTP_PORT'      => 465,               // 465 = SSL · 587 = STARTTLS
    'SMTP_USER'      => 'contacto@smart-order.io',
    'SMTP_PASS'      => 'XXXXXXXX',
    'SMTP_FROM'      => 'contacto@smart-order.io',
    'SMTP_FROM_NAME' => 'SmartOrder',

    // ── Destino de la notificación ───────────────────────────────────────────
    'ADMIN_TO'       => 'contacto@smart-order.io',
];
