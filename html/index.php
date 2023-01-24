<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/styleDestacados.css">
    <title>Inicio</title>
</head>
<body>
    
    <?php include('../plantillas/header.php'); ?>
    <div class="contenido">
        <div id="iframeRuta">
            <iframe frameBorder="0" scrolling="no" src="https://es.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=12718712&measures=off&title=on&near=off&images=on&maptype=H" width="500" height="400"></iframe><div style="color:#777;font-size:11px;line-height:16px;">Powered by <a style="color:#06d;font-size:11px;line-height:16px;" target="_blank" href="https://es.wikiloc.com">Wikiloc</a></div>
        </div>
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
    
     
    <?php    include('../plantillas/footer.php'); ?>
    
    <script src="../data/data.js"></script>
    <script src="../js/pantallaInicio.js"></script>
    
</body>
</html>