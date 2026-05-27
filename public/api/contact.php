<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Vary: Origin');

$allowedOrigins = [
    'https://nalinsharma.co.in',
    'https://www.nalinsharma.co.in',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    'http://127.0.0.1:3002',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    $data = $_POST;
}

function clean_text($value): string
{
    $text = trim((string) $value);
    $text = preg_replace('/[\r\n]+/', ' ', $text) ?? '';
    return strip_tags($text);
}

$company = clean_text($data['company'] ?? '');

if ($company !== '') {
    echo json_encode(['ok' => true, 'message' => 'Message accepted.']);
    exit;
}

$name = clean_text($data['name'] ?? '');
$email = trim((string) ($data['email'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please complete all fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

if (strlen($message) < 10 || strlen($message) > 4000) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Message must be between 10 and 4000 characters.']);
    exit;
}

$to = '2005nalinsharma@gmail.com';
$domain = $_SERVER['SERVER_NAME'] ?? 'nalinsharma.co.in';
$safeName = clean_text($name);
$safeSubjectName = substr($safeName, 0, 80);
$subject = 'Portfolio inquiry from ' . $safeSubjectName;

$bodyLines = [
    'New portfolio inquiry',
    '',
    'Name: ' . $safeName,
    'Email: ' . $email,
    'Phone: +91 9310827546',
    'Source: https://nalinsharma.co.in',
    '',
    'Message:',
    $message,
];

$headers = [
    'From: Nalin Sharma Portfolio <no-reply@' . $domain . '>',
    'Reply-To: ' . $safeName . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, $subject, implode("\n", $bodyLines), implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Email service is not available on this server. Please try again later.',
    ]);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Message sent successfully.']);
