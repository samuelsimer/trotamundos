<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/destacados.css">
    <link rel="stylesheet" href="../css/barraBusqueda.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>

    <title>Inicio</title>
</head>

<body>

    <?php include('../plantillas/header.php'); ?>
    <!-- todo el contenido de la página -->
    <div class="contenido">
        <div class="buscarRuta">
            <div class="field" id="searchform">
                <input type="text" id="searchterm" placeholder="Escribe un lugar que visitar" />
                <button type="submit" id="search">Buscar</button>
            </div>
        </div>
        <!-- Fin buscar ruta -->

        <!-- Categorías para buscar rutas -->
        <div class="categoriasRuta">
            <a href="#">
                <div class="categoriaRuta">
                    <img src="../imgs/logos/categorias/caminar.png" alt="caminar">
                    <h2>CAMINAR</h2>
                </div>
            </a>

            <a href="#">
                <div class="categoriaRuta">
                    <img src="../imgs/logos/categorias/corriendo.png" alt="correr">
                    <h2>CORRER</h2>
                </div>
            </a>

            <a href="#">
                <div class="categoriaRuta">
                    <img src="../imgs/logos/categorias/bicicleta.png" alt="caminar">
                    <h2>BICICLETA</h2>
                </div>
            </a>

            <a href="#">
                <div class="categoriaRuta">
                    <img src="../imgs/logos/categorias/moto.png" alt="caminar">
                    <h2>MOTO</h2>
                </div>
            </a>

            <a href="#">
                <div class="categoriaRuta">
                    <img src="../imgs/logos/categorias/coche.png" alt="coche">
                    <h2>COCHE</h2>
                </div>
            </a>
        </div>
        <!-- Fin categorías -->

        <!-- Rutas recomendadas -->
        <div class="rutasRecomendadas">
            <!-- mapa -->
            <div id="iframeRuta">
                
            </div>
            <!-- Rutas generadas dinamicamente js -->
            <div id="recomendados">
                <div class="btnCambiarRuta" id="anteriorRuta">
                    <img src="../imgs/flechaAnterior.png" alt="anterior">
                </div>
                <div id="rutasRecomendadas">

                </div>
                <div class="btnCambiarRuta" id="siguienteRuta">
                    <img src="../imgs/flechaSiguiente.png" alt="siguiente">
                </div>
            </div>
        </div>
        <!-- Fin rutas recomendadas -->


    </div>


    <?php include('../plantillas/footer.php'); ?>

    <script src="../data/data.js"></script>
    <script src="../js/pantallaInicio.js"></script>
    <script src="../js/usuario.js"></script>

    

</body>

</html>