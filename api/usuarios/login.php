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
    $sql = "SELECT * FROM usuario WHERE 1 ";

    $uriAlumnos = 'php://input';
    $json = file_get_contents($uriAlumnos);
    $usuario = json_decode($json);

    $username = $usuario->username;
    $pass = $usuario->pass;

    $sql = $sql . "AND username = '$username' AND pass = '$pass'";
    

    try {
        $result = $con->query($sql);
        if ($result->num_rows  > 0) {
            $usuarioBBDD = $result->fetch_all(MYSQLI_ASSOC);

            $payload = [
                'username' => $usuarioBBDD[0]['username'],
            ];
        
            $jwt = JWT::encode($payload, $key, 'HS256');

            $datos = [
                'token' => $jwt,
                'id' => $usuarioBBDD[0]['id'],
                'fullname' => $usuarioBBDD[0]['fullname'],
                'username' => $usuarioBBDD[0]['username'],
                'email' => $usuarioBBDD[0]['email'],
                'pass' => $usuarioBBDD[0]['pass'],
                'height' => $usuarioBBDD[0]['height'],
                'weight' => $usuarioBBDD[0]['weight'],
                'birthday' => $usuarioBBDD[0]['birthday'],
                'activities' => $usuarioBBDD[0]['activities'],
            ];
            header("HTTP/1.1 200 OK");
            echo json_encode($datos);
        } else {
            header("HTTP/1.1 200 OK");
        }
    } catch (mysqli_sql_exception $e) {
        header("HTTP/1.1 404 Not Found");
    }
    exit;
}

?>