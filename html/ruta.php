<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/checkbox.css">

    <title>Nueva Ruta</title>
</head>

<body>

    <?php include('../plantillas/header.php'); ?>
    <div class="contenido">
        <div class="form">

            <div class="tab-content">

                <!-- Apartado registro -->
                <div id="registrarse">
                    <h1>Nueva ruta: </h1>

                    <form action="/" id="registro" method="post">

                        <div class="field-wrap">
                            <label for="nombre">Nombre:</label>
                            <input type="text" name="nombre" class="nombre" required autocomplete="off" />
                            <div class="vNombre"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="descripción">Descripción:</label>
                            <input type="text" name="descripción" class="descripción" required autocomplete="off" />
                            <div class="vUsuario"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="gpx">gpx:</label>
                            <input type="file" id="gpxfile" name="gpx" class="gpx" required" />
                            <div class="vEmail"></div>
                        </div>
                        <button type="submit" id="enviar" class="button button-block" />Crear</button>

                    </form>

                </div>

                <!-- Apartado Iniciar sesion -->
    

            </div><!-- tab-content -->

        </div> <!-- /form -->
    </div>


    <?php include('../plantillas/footer.php'); ?>

    <script src="../js/nuevaRuta.js"></script>

</body>

</html>