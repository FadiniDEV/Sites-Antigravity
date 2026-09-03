<?php
ini_set('display_errors', 0);
error_reporting(E_ALL);
session_start();
header('Content-Type: application/json');

// --- RATE LIMITING ---
$limit = 5; // Máximo de requisições
$timeframe = 15 * 60; // 15 minutos em segundos

if (!isset($_SESSION['rate_limit'])) {
    $_SESSION['rate_limit'] = [];
}

// Limpa requisições antigas
$_SESSION['rate_limit'] = array_filter($_SESSION['rate_limit'], function($timestamp) use ($timeframe) {
    return ($timestamp > time() - $timeframe);
});

if (count($_SESSION['rate_limit']) >= $limit) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Muitas requisições. Tente novamente mais tarde.']);
    exit;
}
$_SESSION['rate_limit'][] = time();

// --- RECEBENDO DADOS ---
// Lê o corpo da requisição JSON (pois usaremos fetch com application/json)
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Dados inválidos.']);
    exit;
}

// --- HONEYPOT ---
// Se o campo _gotcha estiver preenchido, é um bot. Retorna sucesso silenciosamente.
if (!empty($input['_gotcha'])) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
    exit;
}

// --- VALIDAÇÃO TURNSTILE ---
$turnstileResponse = $input['cf-turnstile-response'] ?? '';
if (empty($turnstileResponse)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Verificação de segurança falhou (Token ausente).']);
    exit;
}

$env = require __DIR__ . '/../env.php';
$secretKey = $env['TURNSTILE_SECRET_KEY'];

// Função auxiliar para fazer requisições POST com cURL
function curlPost($url, $data, $isJson = false, $extraHeaders = []) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    
    $headers = $extraHeaders;
    
    if ($isJson) {
        $payload = json_encode($data);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        $headers[] = 'Content-Type: application/json';
        $headers[] = 'Accept: application/json';
        $headers[] = 'Content-Length: ' . strlen($payload);
    } else {
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    }
    
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    // Ignorar verificação de certificado SSL se houver problemas na hospedagem
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    return ['body' => $result, 'code' => $httpCode];
}

// Faz a requisição de validação para a Cloudflare
$verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
$verifyData = [
    'secret' => $secretKey,
    'response' => $turnstileResponse,
    'remoteip' => $_SERVER['REMOTE_ADDR']
];

$verifyResponse = curlPost($verifyUrl, $verifyData, false);
$verifyResult = $verifyResponse['body'];

if ($verifyResult === false || empty($verifyResult)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro interno de rede ao validar CAPTCHA.']);
    exit;
}

$verifyJson = json_decode($verifyResult, true);
if (!$verifyJson || empty($verifyJson['success'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Verificação de segurança falhou (Token inválido ou expirado).']);
    exit;
}

// --- SANITIZAÇÃO ---
$nome = htmlspecialchars(strip_tags($input['nome'] ?? ''));
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$telefone = htmlspecialchars(strip_tags($input['telefone'] ?? ''));
$empresa = htmlspecialchars(strip_tags($input['empresa'] ?? ''));
$mensagem = htmlspecialchars(strip_tags($input['mensagem'] ?? ''));
$subject = htmlspecialchars(strip_tags($input['_subject'] ?? 'Novo contato pelo site - Duplo Impacto'));

if (empty($nome) || empty($email) || empty($mensagem)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Preencha os campos obrigatórios.']);
    exit;
}

// --- ENCAMINHAMENTO PARA O FORMSUBMIT ---
// Lê o email de destino do config.js
$configJs = @file_get_contents(__DIR__ . '/../config.js');
$targetEmail = 'consultoria@duploimpactogp.com.br'; // fallback
if ($configJs && preg_match('/email:\s*["\']([^"\']+)["\']/', $configJs, $matches)) {
    $targetEmail = $matches[1];
}

$formSubmitUrl = "https://formsubmit.co/ajax/" . $targetEmail;
$formData = [
    'nome' => $nome,
    'email' => $email,
    'telefone' => $telefone,
    'empresa' => $empresa,
    'mensagem' => $mensagem,
    '_subject' => $subject,
    '_captcha' => 'false'
];

$host = $_SERVER['HTTP_HOST'] ?? 'duploimpactogp.com.br';
$scheme = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://';
$origin = $scheme . $host;

$fsHeaders = [
    'Origin: ' . $origin,
    'Referer: ' . $origin . '/'
];

$fsResponse = curlPost($formSubmitUrl, $formData, true, $fsHeaders);
$fsResult = $fsResponse['body'];
$fsCode = $fsResponse['code'];

if ($fsResult === false || empty($fsResult)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar a mensagem para o servidor destino (Sem resposta).']);
    exit;
}

$fsJson = json_decode($fsResult, true);
if (isset($fsJson['success']) && $fsJson['success'] == 'true') {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.']);
} else {
    http_response_code(400);
    $erroApi = $fsJson['message'] ?? 'Erro desconhecido da API';
    echo json_encode(['success' => false, 'message' => 'Erro no FormSubmit: ' . $erroApi]);
}

