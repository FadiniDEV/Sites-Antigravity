<?php
// env.php - Arquivo de configuração de variáveis de ambiente
// IMPORTANTE: Este arquivo não deve ser acessível publicamente.
// Ele contém informações sensíveis do servidor.

// Prevenir acesso direto ao arquivo
if (basename($_SERVER['SCRIPT_FILENAME']) === basename(__FILE__)) {
    header("HTTP/1.1 403 Forbidden");
    exit;
}

return [
    // Chaves de Teste do Cloudflare Turnstile (Sempre aprovam a verificação)
    // Depois você deve substituir pelas chaves reais geradas no painel da Cloudflare.
    'TURNSTILE_SITE_KEY' => '0x4AAAAAAEfKyZ7TgugGM8U3',
    'TURNSTILE_SECRET_KEY' => '0x4AAAAAAEfKyYerzrgFIxUQK5NEzSkrToI',
];
