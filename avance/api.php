<?php
declare(strict_types=1);

/* API privada del plan TCF. No depende ni modifica state.json ni media heredados. */
const TCF_VERSION = '2026-10-22';
const TCF_START_DATE = '2026-10-22';
const TCF_END_DATE = '2027-01-24';
const TCF_MAX_BODY_BYTES = 262144;
const TCF_MAX_BATCH = 200;
const TCF_MAX_PROCESSED_IDS = 30000;
const TCF_MAX_PLAN_BYTES = 16777216;
const TCF_MAX_RES_BYTES = 8000;
const TCF_MAX_NOTE_BYTES = 80000;

const TCF_COUNT_ITEMS = [
    'co_b1', 'co_b2', 'co_c1',
    'ce_a1', 'ce_a2', 'ce_b1', 'ce_b2', 'ce_c1',
    'ee_1', 'ee_2', 'ee_3', 'eo_1', 'eo_2', 'eo_3',
];
const TCF_AREAS = ['co', 'ce', 'ee', 'eo'];

const TCF_DATA_HTACCESS = <<<'HTACCESS'
Options -Indexes

<IfModule mod_authz_core.c>
    Require all denied
</IfModule>
<IfModule !mod_authz_core.c>
    Order allow,deny
    Deny from all
</IfModule>
HTACCESS;

ini_set('display_errors', '0');
ini_set('html_errors', '0');

function tcfDataDir(): string
{
    return __DIR__ . '/data';
}

function tcfPlanPath(): string
{
    return tcfDataDir() . '/plan-20261022.json';
}

function tcfLockPath(): string
{
    return tcfDataDir() . '/.plan-20261022.lock';
}

function tcfHeaders(): void
{
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store, max-age=0, must-revalidate');
    header('Pragma: no-cache');
    header('X-Content-Type-Options: nosniff');
}

function tcfError(int $status, ?string $allow = null): void
{
    tcfHeaders();
    if ($allow !== null) {
        header('Allow: ' . $allow);
    }
    http_response_code($status);
    // Respuesta deliberadamente fija: nunca incluye estado, rutas ni detalles internos.
    echo '{"error":"request_failed"}';
    exit;
}

function tcfJson(array $payload): void
{
    tcfHeaders();
    try {
        $json = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
    } catch (Throwable $exception) {
        tcfError(500);
    }
    http_response_code(200);
    echo $json;
    exit;
}

function tcfIsList(array $value): bool
{
    $expected = 0;
    foreach ($value as $key => $_) {
        if ($key !== $expected) {
            return false;
        }
        $expected++;
    }
    return true;
}

function tcfHasExactKeys(array $value, array $keys): bool
{
    if (count($value) !== count($keys)) {
        return false;
    }
    foreach ($keys as $key) {
        if (!array_key_exists($key, $value)) {
            return false;
        }
    }
    return true;
}

function tcfValidDate($date): bool
{
    if (!is_string($date) || !preg_match('/\A\d{4}-\d{2}-\d{2}\z/D', $date)) {
        return false;
    }
    $parsed = DateTimeImmutable::createFromFormat('!Y-m-d', $date);
    $errors = DateTimeImmutable::getLastErrors();
    if ($parsed === false || ($errors !== false && ($errors['warning_count'] !== 0 || $errors['error_count'] !== 0)) || $parsed->format('Y-m-d') !== $date) {
        return false;
    }
    return $date >= TCF_START_DATE && $date <= TCF_END_DATE;
}

function tcfValidId($id): bool
{
    if (!is_string($id) || strlen($id) < 10 || strlen($id) > 100) {
        return false;
    }
    // JSON ya garantiza UTF-8; se rechazan controles para que los identificadores sean portables.
    return preg_match('/[\x00-\x1F\x7F]/', $id) !== 1;
}

function tcfValidText($value, int $maximumBytes): bool
{
    return is_string($value) && strlen($value) <= $maximumBytes;
}

function tcfDefaultDay(): array
{
    return [
        'c' => array_fill_keys(TCF_COUNT_ITEMS, 0),
        'sim' => array_fill_keys(TCF_AREAS, false),
        'res' => array_fill_keys(TCF_AREAS, ''),
        'note' => '',
    ];
}

function tcfEmptyPlan(): array
{
    return ['days' => [], 'revision' => 0, 'processed' => []];
}

function tcfEnsureDataProtection(): bool
{
    $dataDir = tcfDataDir();
    if (is_link($dataDir)) {
        return false;
    }
    if (!is_dir($dataDir) && !@mkdir($dataDir, 0750, true)) {
        return false;
    }
    if (!is_dir($dataDir) || !is_readable($dataDir) || !is_writable($dataDir)) {
        return false;
    }

    $protectionPath = $dataDir . '/.htaccess';
    if (is_link($protectionPath)) {
        return false;
    }
    $requiredProtection = TCF_DATA_HTACCESS . "\n";
    if (!file_exists($protectionPath)) {
        $written = @file_put_contents($protectionPath, $requiredProtection, LOCK_EX);
        if ($written !== strlen($requiredProtection)) {
            return false;
        }
        @chmod($protectionPath, 0640);
    }

    $protection = @file_get_contents($protectionPath);
    // No se reemplaza una protección modificada: se falla cerrado antes de tocar el plan.
    return is_string($protection) && hash_equals($requiredProtection, $protection);
}

function tcfAssertStoredDay($day): void
{
    if (!is_array($day) || !tcfHasExactKeys($day, ['c', 'sim', 'res', 'note']) || !is_array($day['c']) || !is_array($day['sim']) || !is_array($day['res']) || !tcfValidText($day['note'], TCF_MAX_NOTE_BYTES)) {
        throw new RuntimeException('Invalid stored day');
    }
    if (!tcfHasExactKeys($day['c'], TCF_COUNT_ITEMS) || !tcfHasExactKeys($day['sim'], TCF_AREAS) || !tcfHasExactKeys($day['res'], TCF_AREAS)) {
        throw new RuntimeException('Invalid stored day fields');
    }
    foreach (TCF_COUNT_ITEMS as $item) {
        if (!is_int($day['c'][$item]) || $day['c'][$item] < 0) {
            throw new RuntimeException('Invalid stored counter');
        }
    }
    foreach (TCF_AREAS as $area) {
        if (!is_bool($day['sim'][$area]) || !tcfValidText($day['res'][$area], TCF_MAX_RES_BYTES)) {
            throw new RuntimeException('Invalid stored area');
        }
    }
}

function tcfValidateStoredPlan($plan): array
{
    if (!is_array($plan) || !tcfHasExactKeys($plan, ['days', 'revision', 'processed']) || !is_array($plan['days']) || !is_int($plan['revision']) || $plan['revision'] < 0 || !is_array($plan['processed']) || !tcfIsList($plan['processed'])) {
        throw new RuntimeException('Invalid stored plan');
    }
    if (count($plan['processed']) > TCF_MAX_PROCESSED_IDS) {
        throw new RuntimeException('Stored id limit exceeded');
    }

    $knownIds = [];
    foreach ($plan['processed'] as $id) {
        if (!tcfValidId($id)) {
            throw new RuntimeException('Invalid stored id');
        }
        $idKey = 'id:' . $id;
        if (isset($knownIds[$idKey])) {
            throw new RuntimeException('Duplicate stored id');
        }
        $knownIds[$idKey] = true;
    }
    foreach ($plan['days'] as $date => $day) {
        if (!tcfValidDate($date)) {
            throw new RuntimeException('Invalid stored date');
        }
        tcfAssertStoredDay($day);
    }
    return $plan;
}

function tcfLoadPlan(): array
{
    $planPath = tcfPlanPath();
    clearstatcache(true, $planPath);
    if (is_link($planPath)) {
        throw new RuntimeException('Refusing symlink plan');
    }
    if (!file_exists($planPath)) {
        return tcfEmptyPlan();
    }
    if (!is_file($planPath)) {
        throw new RuntimeException('Plan is not a regular file');
    }
    $size = @filesize($planPath);
    if (!is_int($size) || $size < 0 || $size > TCF_MAX_PLAN_BYTES) {
        throw new RuntimeException('Unreadable plan size');
    }
    $raw = @file_get_contents($planPath);
    if (!is_string($raw)) {
        throw new RuntimeException('Unreadable plan');
    }
    try {
        $decoded = json_decode($raw, true, 512, JSON_THROW_ON_ERROR);
    } catch (Throwable $exception) {
        // Jamás se sustituye ni reinicializa un JSON existente que no se puede interpretar.
        throw new RuntimeException('Invalid plan JSON');
    }
    return tcfValidateStoredPlan($decoded);
}

function tcfReadJsonBody(): array
{
    $contentLength = $_SERVER['CONTENT_LENGTH'] ?? null;
    if ($contentLength !== null && (!is_string($contentLength) || !preg_match('/\A\d+\z/D', $contentLength))) {
        tcfError(400);
    }
    if (is_string($contentLength) && (int) $contentLength > TCF_MAX_BODY_BYTES) {
        tcfError(413);
    }

    $stream = @fopen('php://input', 'rb');
    if ($stream === false) {
        tcfError(400);
    }
    $body = '';
    while (!feof($stream)) {
        $chunk = fread($stream, 8192);
        if ($chunk === false) {
            fclose($stream);
            tcfError(400);
        }
        $body .= $chunk;
        if (strlen($body) > TCF_MAX_BODY_BYTES) {
            fclose($stream);
            tcfError(413);
        }
    }
    fclose($stream);

    try {
        $decoded = json_decode($body, true, 512, JSON_THROW_ON_ERROR);
    } catch (Throwable $exception) {
        tcfError(400);
    }
    if (!is_array($decoded)) {
        tcfError(400);
    }
    return $decoded;
}

function tcfValidateOperations(array $request): array
{
    if (!tcfHasExactKeys($request, ['operations']) || !is_array($request['operations']) || !tcfIsList($request['operations']) || count($request['operations']) > TCF_MAX_BATCH) {
        tcfError(422);
    }

    $validated = [];
    $batchIds = [];
    foreach ($request['operations'] as $operation) {
        if (!is_array($operation) || !isset($operation['type']) || !is_string($operation['type'])) {
            tcfError(422);
        }
        $type = $operation['type'];
        $keys = $type === 'note'
            ? ['id', 'date', 'type', 'value']
            : ['id', 'date', 'type', 'item', 'value'];
        if (!tcfHasExactKeys($operation, $keys) || !tcfValidId($operation['id']) || !tcfValidDate($operation['date'])) {
            tcfError(422);
        }
        $idKey = 'id:' . $operation['id'];
        if (isset($batchIds[$idKey])) {
            tcfError(422);
        }
        $batchIds[$idKey] = true;

        if ($type === 'count') {
            if (!in_array($operation['item'], TCF_COUNT_ITEMS, true) || !is_int($operation['value']) || $operation['value'] < -10000 || $operation['value'] > 10000) {
                tcfError(422);
            }
        } elseif ($type === 'sim') {
            if (!in_array($operation['item'], TCF_AREAS, true) || !is_bool($operation['value'])) {
                tcfError(422);
            }
        } elseif ($type === 'res') {
            if (!in_array($operation['item'], TCF_AREAS, true) || !tcfValidText($operation['value'], TCF_MAX_RES_BYTES)) {
                tcfError(422);
            }
        } elseif ($type === 'note') {
            if (!tcfValidText($operation['value'], TCF_MAX_NOTE_BYTES)) {
                tcfError(422);
            }
        } else {
            tcfError(422);
        }
        $validated[] = $operation;
    }
    return $validated;
}

function tcfApplyOperations(array &$plan, array $operations): bool
{
    $knownIds = [];
    foreach ($plan['processed'] as $id) {
        $knownIds['id:' . $id] = true;
    }

    $newCount = 0;
    foreach ($operations as $operation) {
        if (!isset($knownIds['id:' . $operation['id']])) {
            $newCount++;
        }
    }
    if (count($plan['processed']) + $newCount > TCF_MAX_PROCESSED_IDS) {
        // No se elimina historia para conservar la garantía de idempotencia dentro del plan.
        throw new OverflowException('Processed id limit reached');
    }
    if ($newCount === 0) {
        return false;
    }
    if ($plan['revision'] === PHP_INT_MAX) {
        throw new OverflowException('Revision overflow');
    }

    foreach ($operations as $operation) {
        $idKey = 'id:' . $operation['id'];
        if (isset($knownIds[$idKey])) {
            continue;
        }
        $date = $operation['date'];
        if (!array_key_exists($date, $plan['days'])) {
            $plan['days'][$date] = tcfDefaultDay();
        }
        if ($operation['type'] === 'count') {
            $current = $plan['days'][$date]['c'][$operation['item']];
            $delta = $operation['value'];
            if ($delta > 0 && $current > PHP_INT_MAX - $delta) {
                throw new OverflowException('Counter overflow');
            }
            $plan['days'][$date]['c'][$operation['item']] = max(0, $current + $delta);
        } elseif ($operation['type'] === 'sim') {
            $plan['days'][$date]['sim'][$operation['item']] = $operation['value'];
        } elseif ($operation['type'] === 'res') {
            $plan['days'][$date]['res'][$operation['item']] = $operation['value'];
        } else { // note
            $plan['days'][$date]['note'] = $operation['value'];
        }
        $plan['processed'][] = $operation['id'];
        $knownIds[$idKey] = true;
    }
    $plan['revision']++;
    return true;
}

function tcfAtomicWritePlan(array $plan): bool
{
    try {
        $encoded = json_encode($plan, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n";
    } catch (Throwable $exception) {
        return false;
    }

    $temporary = @tempnam(tcfDataDir(), '.plan-tcf-');
    if ($temporary === false) {
        return false;
    }
    $handle = null;
    $success = false;
    try {
        $handle = @fopen($temporary, 'wb');
        if ($handle === false) {
            return false;
        }
        $offset = 0;
        $length = strlen($encoded);
        while ($offset < $length) {
            $written = @fwrite($handle, substr($encoded, $offset));
            if ($written === false || $written === 0) {
                return false;
            }
            $offset += $written;
        }
        if (!@fflush($handle)) {
            return false;
        }
        if (function_exists('fsync') && !@fsync($handle)) {
            return false;
        }
        @chmod($temporary, 0600);
        fclose($handle);
        $handle = null;
        if (!@rename($temporary, tcfPlanPath())) {
            return false;
        }
        $success = true;
        return true;
    } finally {
        if (is_resource($handle)) {
            fclose($handle);
        }
        if (!$success && is_file($temporary)) {
            @unlink($temporary);
        }
    }
}

function tcfPublicState(array $plan): array
{
    return [
        // Un objeto vacío conserva el contrato {days:{}} en vez de serializarse como [].
        'days' => (object) $plan['days'],
        'revision' => $plan['revision'],
        'appliedIds' => $plan['processed'],
    ];
}

function tcfReadState(): array
{
    if (!tcfEnsureDataProtection()) {
        throw new RuntimeException('Storage protection unavailable');
    }
    $lock = @fopen(tcfLockPath(), 'c');
    if ($lock === false) {
        throw new RuntimeException('Lock unavailable');
    }
    try {
        if (!@flock($lock, LOCK_SH)) {
            throw new RuntimeException('Lock unavailable');
        }
        $plan = tcfLoadPlan();
        @flock($lock, LOCK_UN);
        return tcfPublicState($plan);
    } finally {
        fclose($lock);
    }
}

function tcfSaveState(array $operations): array
{
    if (!tcfEnsureDataProtection()) {
        throw new RuntimeException('Storage protection unavailable');
    }
    $lock = @fopen(tcfLockPath(), 'c');
    if ($lock === false) {
        throw new RuntimeException('Lock unavailable');
    }
    try {
        if (!@flock($lock, LOCK_EX)) {
            throw new RuntimeException('Lock unavailable');
        }
        // Lectura, fusión y sustitución atómica suceden bajo el mismo lock exclusivo.
        $plan = tcfLoadPlan();
        $changed = tcfApplyOperations($plan, $operations);
        if ($changed && !tcfAtomicWritePlan($plan)) {
            throw new RuntimeException('Atomic write failed');
        }
        @flock($lock, LOCK_UN);
        return tcfPublicState($plan);
    } finally {
        fclose($lock);
    }
}

function tcfAuthorized(array $config): bool
{
    $provided = $_SERVER['HTTP_X_TCF_KEY'] ?? '';
    if (!is_string($provided) || !isset($config['tcf_key_sha256']) || !is_string($config['tcf_key_sha256'])) {
        return false;
    }
    return hash_equals($config['tcf_key_sha256'], hash('sha256', $provided));
}

try {
    tcfHeaders();
    $config = @include __DIR__ . '/config.php';
    if (!is_array($config) || !isset($config['tcf_key_sha256']) || !is_string($config['tcf_key_sha256']) || !preg_match('/\A[0-9a-f]{64}\z/D', $config['tcf_key_sha256'])) {
        tcfError(500);
    }

    $action = $_GET['a'] ?? '';
    $method = strtoupper((string) ($_SERVER['REQUEST_METHOD'] ?? 'GET'));
    if (!is_string($action)) {
        tcfError(404);
    }

    if ($action === 'health') {
        if ($method !== 'GET') {
            tcfError(405, 'GET');
        }
        tcfJson(['ok' => true, 'version' => TCF_VERSION]);
    }
    if ($action !== 'state' && $action !== 'save') {
        tcfError(404);
    }
    if (!tcfAuthorized($config)) {
        header('WWW-Authenticate: TCF');
        tcfError(401);
    }

    if ($action === 'state') {
        if ($method !== 'GET') {
            tcfError(405, 'GET');
        }
        tcfJson(tcfReadState());
    }

    if ($method !== 'POST') {
        tcfError(405, 'POST');
    }
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (!is_string($contentType) || !preg_match('/\Aapplication\/json(?:\s*;|\s*\z)/i', $contentType)) {
        tcfError(415);
    }
    $operations = tcfValidateOperations(tcfReadJsonBody());
    tcfJson(tcfSaveState($operations));
} catch (OverflowException $exception) {
    tcfError(409);
} catch (Throwable $exception) {
    tcfError(503);
}
