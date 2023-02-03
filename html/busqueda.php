<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/busqueda.css">
    <link rel="stylesheet" href="../css/barraBusqueda.css">
    <link rel="stylesheet" href="../css/checkbox.css">
    <title>Busqueda</title>
</head>

<body>

    <?php include('../plantillas/header.php'); ?>
    <!-- todo el contenido de la página -->
    <div class="contenido">
        <div class="colDerecha">
            <div class="buscarRuta">
                <div class="field" id="searchform">
                    <input type="text" id="searchterm" placeholder="Escribe un lugar que visitar" />
                    <button type="button" id="search">Buscar</button>
                    <button type="button" id="filtros">Filtros</button>
                </div>

            </div>
            <!-- Fin buscar ruta -->

            <div class="filtros">
                <!-- Categorías para buscar rutas -->
                <div class="label">
                    <label for="categorias">Categorías:</label>
                </div>
                
                <div class="categoriasRuta">
                    <div class="categoriaRuta">
                        <img src="../imgs/logos/categorias/caminar.png" alt="caminar" title="CAMINAR">
                    </div>

                    <div class="categoriaRuta">
                        <img src="../imgs/logos/categorias/corriendo.png" alt="correr" title="CORRER">
                    </div>

                    <div class="categoriaRuta">
                        <img src="../imgs/logos/categorias/bicicleta.png" alt="bicicleta" title="BICICLETA">
                    </div>

                    <div class="categoriaRuta">
                        <img src="../imgs/logos/categorias/moto.png" alt="moto" title="MOTO">
                    </div>

                    <div class="categoriaRuta">
                        <img src="../imgs/logos/categorias/coche.png" alt="coche" title="COCHE">
                    </div>
                </div>
                
                <!-- Fin categorías -->

                <div class="label">
                    <label for="provincias">Provincias:</label>
                </div>                
                <div class="provinciasRuta">
                    <div class="container">
                        <ul class="ks-cboxtags">
                            <li><input type="checkbox" id="checkboxOne" value="leon">
                                <label for="checkboxOne">León</label>
                            </li>
                            <li><input type="checkbox" id="checkboxTwo" value="madrid">
                                <label for="checkboxTwo">Madrid</label>
                            </li>
                            <li><input type="checkbox" id="checkboxThree" value="almeria">
                                <label for="checkboxThree">Almería</label>
                            </li>
                            <li><input type="checkbox" id="checkboxFour" value="badajoz">
                                <label for="checkboxFour">Badajoz</label>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


            <!-- Rutas recomendadas -->
            <div class="rutasRecomendadas">
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
        <div class="colIzquierda">
            <!-- mapa -->
            <div id="iframeRuta">
                <iframe frameBorder="0" scrolling="no" src="https://es.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=12718712&measures=off&title=on&near=off&images=on&maptype=H"></iframe>
                <div style="color:#777;font-size:11px;line-height:16px;">Powered by <a style="color:#06d;font-size:11px;line-height:16px;" target="_blank" href="https://es.wikiloc.com">Wikiloc</a></div>
            </div>
        </div>

    </div>


    <?php include('../plantillas/footer.php'); ?>

    <script src="../data/data.js"></script>
    <script src="../js/pantallaInicio.js"></script>
    <script src="../js/busqueda.js"></script>

</body>

</html>