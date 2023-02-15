<?php
require_once '../conexion.php';

require_once '../../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$key = 'example_key';

// $decoded = JWT::decode($jwt, new Key($key, 'HS256'));

// print_r($decoded);

$con = new Conexion();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {


    $xmlContent = file_get_contents('php://input');
    echo json_encode($xmlContent['file']);
// Procesar contenido del archivo GPX
    $xmlReader = new XMLReader();
    $xmlReader->XML($xmlContent);

    while ($xmlReader->read()) {
        // Si se encuentra un elemento <trkpt>, extraer información de la ubicación
        if ($xmlReader->name === 'trkpt' && $xmlReader->nodeType === XMLReader::ELEMENT) {
            $lat = $xmlReader->getAttribute('lat');
            $lon = $xmlReader->getAttribute('lon');

            $datos = [
                $lat,
                $lon,
            ];
            
            header("HTTP/1.1 200 OK");
            echo json_encode($datos);
        }
    }

    // Cerrar archivo GPX
    $xmlReader->close();

//$usuario = json_decode($json);


}

?>