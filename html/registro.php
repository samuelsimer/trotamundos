<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/checkbox.css">

    <title>Registro</title>
</head>

<body>

    <?php include('../plantillas/header.php'); ?>
    <div class="contenido">
        <div class="form">

            <ul class="tab-group">
                <li class="tab active"><a id="btnRegistrarse">Registrarse</a></li>
                <li class="tab"><a id="btnEntrar">Entrar</a></li>
            </ul>

            <div class="tab-content">

                <!-- Apartado registro -->
                <div id="registrarse">
                    <h1>┬íRegistrate!</h1>

                    <form action="/" id="registro" method="post">

                        <div class="field-wrap">
                            <label for="nombre">Nombre:</label>
                            <input type="text" name="nombre" class="nombre" required autocomplete="off" />
                            <div class="vNombre"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="nUsuario">Nombre Usuario:</label>
                            <input type="text" name="nUsuario" class="nUsuario" required autocomplete="off" />
                            <div class="vUsuario"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="email">Email:</label>
                            <input type="email" name="email" class="email" required autocomplete="off" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" />
                            <div class="vEmail"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="contrase├▒a">Contrase├▒a:</label>
                            <input type="password" name="contrase├▒a" class="contrase├▒a" required autocomplete="off" />
                            <div class="nvlContrase├▒a"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="contrase├▒a2">Repetir contrase├▒a:</label>
                            <input type="password" name="contrase├▒a2" class="contrase├▒a2" required autocomplete="off" />
                            <div class="vContrase├▒a2"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="estatura">Estura(cm):</label>
                            <input type="number" name="estatura" class="estatura" required autocomplete="off" min="0" max="300" />
                            <div class="vEstatura"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="peso">Peso(kg):</label>
                            <input type="number" name="peso" class="peso" required autocomplete="off" min="0" max="300" />
                            <div class="vPeso"></div>
                        </div>

                        <div class="field-wrap">
                            <label for="fechaNac">Cumplea├▒os:</label>
                            <input type="date" name="fechaNac" class="fechaNac" required autocomplete="off" />
                        </div>

                        <!-- Filtro actividades -->
                        <div class="container">
                            <label for="actividades">Actividades favoritas:</label>
                            <ul class="ks-cboxtags">
                                <li><input type="checkbox" name="cbCaminar" id="checkboxOne" value="caminar">
                                    <label for="checkboxOne">caminar</label>
                                </li>
                                <li><input type="checkbox" name="cbCorrer" id="checkboxTwo" value="correr">
                                    <label for="checkboxTwo">correr</label>
                                </li>
                                <li><input type="checkbox" name="cbBicicleta" id="checkboxThree" value="bicicleta">
                                    <label for="checkboxThree">bicicleta</label>
                                </li>
                                <li><input type="checkbox" name="cbMoto" id="checkboxFour" value="moto">
                                    <label for="checkboxFour">moto</label>
                                </li>
                                <li><input type="checkbox" name="cbCoche" id="checkboxFive" value="coche">
                                    <label for="checkboxFour">coche</label>
                                </li>
                            </ul>
                        </div>


                        <button type="submit" class="button button-block" />Registrarse</button>

                    </form>

                </div>

                <!-- Apartado Iniciar sesion -->
                <div id="entrar">
                    <h1>┬íBienvenido!</h1>

                    <form action="#" id="inicioSesion" method="post">

                        <div class="field-wrap">
                            <label for="contrase├▒a">Usuario:</label>
                            <input type="text" name="usuario" class="usuario" required autocomplete="off" />
                        </div>

                        <div class="field-wrap">
                            <label for="contrase├▒a">Contrase├▒a:</label>
                            <input type="password" name="contrase├▒a" class="contrase├▒a" required autocomplete="off"" />
                        </div>

                        <p class="forgot"><a href="#">Contrase├▒a olvidada?</a></p>

                        <button class="button button-block" />Entrar</button>

                    </form>

                </div>

            </div><!-- tab-content -->

        </div> <!-- /form -->
    </div>


    <?php include('../plantillas/footer.php'); ?>

    <script src="../js/login.js"></script>
    <script src="../js/validacionRegistro.js"></script>
    <script src="../js/usuario.js"></script>
    <script src="../js/restringir.js"></script>

</body>

</html>