<?php
require_once '../conexion.php';

require_once '../../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$con = new Conexion();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $uriAlumnos = 'php://input';
    $json = file_get_contents($uriAlumnos);
    $usuario = json_decode($json);

    var_dump($usuario->activities);

    $activities = "";
    foreach ($usuario->activities as $actividad) {
        $activities = $activities . $actividad . "-";
    }

    $fullname = $usuario->fullname;
    $username = $usuario->username;
    $email = $usuario->email;
    $pass = $usuario->pass;
    $height = $usuario->height;
    $weight = $usuario->weight;
    $birthday = $usuario->birthday;

    $sql = "INSERT INTO usuario (fullname, username, email, pass,
        height, weight, birthday, activities) VALUES ('$fullname', '$username', '$email',
        '$pass', '$height', '$weight', '$birthday', '$activities')";
    try {
        $con->query($sql);
        header("HTTP/1.1 201 Created");

        echo json_encode($con->insert_id);
    } catch (mysqli_sql_exception $e) {
        header("HTTP/1.1 400 Bad Request");
    }

    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

    //obtener token de header
    // $headers = getallheaders();
    // if(isset($headers['token'])){
    //     $token = $headers['token'];
    // }

    $uriAlumnos = 'php://input';
    $json = file_get_contents($uriAlumnos);
    $usuario = json_decode($json);

    // $activities = "";
    // foreach ($usuario->activities as $actividad) {
    //     $activities = $activities . $actividad . "-";
    // }

    $id = $usuario->id;
    $fullname = $usuario->fullname;
    $username = $usuario->username;
    $email = $usuario->email;
    $pass = $usuario->pass;
    $height = $usuario->height;
    $weight = $usuario->weight;
    $birthday = $usuario->birthday;

    $sql = "UPDATE usuario SET fullname='$fullname', username='$username',
        email='$email', pass='$pass', height='$height',
        weight='$weight', birthday='$birthday' WHERE id='$id'";
    try {
        $con->query($sql);
        header("HTTP/1.1 200 OK");
        echo json_encode($id);
    } catch (mysqli_sql_exception $e) {
        header("HTTP/1.1 400 Bad Request");
    }
    exit;
}



    // if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    //     if (isset($_GET['Curso'])) {
    //         $sql = "DELETE FROM alumnos WHERE 1 ";
    //         if (isset($_GET['Curso'])) {
    //             $Curso = $_GET['Curso'];
    //             $sql .= "AND Curso='$Curso' ";
    //         }
    //         // $id = $_GET['id'];
            
    //         try {
    //             $con->query($sql);
    //             header("HTTP/1.1 200 OK");
    //             echo json_encode($Curso);
    //         } catch (mysqli_sql_exception $e) {
    //             header("HTTP/1.1 400 Bad Request");
    //         }
    //     } else {
    //         header("HTTP/1.1 400 Bad Request");
    //     }
    //     exit;
    //    } 
