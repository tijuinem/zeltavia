<?php
header('Content-Type: application/json');

// Ruta absoluta a la carpeta 'textos'
$dirTextos = __DIR__ . '/textos';

if (!is_dir($dirTextos)) {
    echo json_encode(["error" => "No se encontró la carpeta 'textos' en la raíz."]);
    exit;
}

$archivos = glob($dirTextos . '/*.txt');

if (empty($archivos)) {
    echo json_encode(["error" => "No hay archivos .txt dentro de la carpeta 'textos'."]);
    exit;
}

$nombres = array_map('basename', $archivos);
natsort($nombres); // Ordena los archivos correctamente (0000, 1000, etc.)

echo json_encode(array_values($nombres));
?>