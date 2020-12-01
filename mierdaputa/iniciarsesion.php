<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/formulario.css">
    <title>Inicio de Sesion</title>
</head>
<body>
    <form method="POST" action="login.php">
        <section class="form-register">
            <h3>Iniciar sesion</h3>
            <input class="controls" type="text" name="usuario" id="usuario" placeholder="Ingrese su nombre de usuario">
            <input class="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su contraseña">
            <p> Estoy de acuerdo con <a href="#">Terminos y Condiciones</a> </p>
            <input class="botons" type="submit" value="Iniciar Sesion" name="Register">
            <p><a href="registrarse.html">¿No tengo cuenta? Crea una!</a></p>
        </section>
    </form>
</body>
</html>