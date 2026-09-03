<?php
ini_set('display_errors', 0);
error_reporting(E_ALL);
header('Content-Type: application/json');

// Carrega as variáveis de ambiente
$env = require __DIR__ . '/../env.php';

// Retorna apenas a Site Key, mantendo a Secret Key segura no backend
echo json_encode([
    'siteKey' => $env['TURNSTILE_SITE_KEY']
]);
