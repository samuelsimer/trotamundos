<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/login.css">
    <title>Registro</title>
</head>

<body>

    <?php include('../plantillas/header.php'); ?>
    <div class="contenido">
        <div class="form">

            <ul class="tab-group">
                <li class="tab active"><a href="#registrarse" id="btnRegistrarse">Registrarse</a></li>
                <li class="tab"><a href="#entrar" id="btnEntrar">Loguearse</a></li>
            </ul>

            <div class="tab-content">
                <div id="registrarse">
                    <h1>Registrate!</h1>

                    <form action="/" method="post">

                        <div class="top-row">
                            <div class="field-wrap">
                                <input type="text" name="nombre" required autocomplete="off" placeholder="Nombre *" />
                            </div>

                            <div class="field-wrap">
                                <input type="text" name="apellidos" required autocomplete="off" placeholder="Apellidos *" />
                            </div>
                        </div>

                        <div class="field-wrap">
                            <input type="email" name="email" required autocomplete="off" placeholder="Email *" />
                        </div>

                        <div class="field-wrap">
                            <input type="password" name="contraseña" required autocomplete="off" placeholder="Contraseña *" />
                        </div>

                        <div class="field-wrap">
                            <input type="password" name="contraseña2" required autocomplete="off" placeholder="Repetir contraseña *" />
                        </div>

                        <div class="field-wrap">
                            <input type="text" name="estatura" required autocomplete="off" placeholder="Estatura *" />
                        </div>

                        <div class="field-wrap">
                            <input type="text" name="peso" required autocomplete="off" placeholder="Peso *" />
                        </div>

                        <div class="field-wrap">
                            <input type="date" name="fechaNac" required autocomplete="off" />
                        </div>

                        <div class="field-wrap">
                            <input type="text" name="favActividades" required autocomplete="off" placeholder="Actividades favoritas *" />
                        </div>

                        <button type="submit" class="button button-block" />Registrarse</button>

                    </form>

                </div>

                <div id="entrar">
                    <h1>Bienvenido!</h1>

                    <form action="/" method="post">

                        <div class="field-wrap">
                            <input type="email" required autocomplete="off" placeholder="Email *" />
                        </div>

                        <div class="field-wrap">
                            <input type="password" required autocomplete="off" placeholder="Contraseña *" />
                        </div>

                        <p class="forgot"><a href="#">Contraseña olvidada?</a></p>

                        <button class="button button-block" />Entrar</button>

                    </form>

                </div>

            </div><!-- tab-content -->

        </div> <!-- /form -->
    </div>


    <?php include('../plantillas/footer.php'); ?>

    <script src="../js/login.js"></script>

</body>

</html>