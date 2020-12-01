<?php
include 'db.php';
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$usuario = $_POST["usuario"];
$correo = $_POST["correo"];
$contraseña = $_POST["contraseña"];

$insertar = "INSERT INTO usuario (nombre,apellidos,usuario,correo,contraseña) VALUES ('$nombre','$apellidos','$usuario','$correo','$contraseña')";

$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuario WHERE usuario = '$usuario'");
if (mysqli_num_rows($verificar_usuario) >0 ) {
    echo  '<script>
            alert(" El usario ya esta registrado");
            window.history.go(-1);
            </script>;';
    exit;
}

$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuario WHERE correo = '$correo'");
if (mysqli_num_rows($verificar_correo) >0 ) {
    echo '<script>
        alert(" El correo ya esta registrado");
        window.history.go(-1);
        </script>;';
    exit;
}

$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
    echo '<script>
    alert(" Error al registrarse");
    window.history.go(-1);
    </script>;';
    exit;
}else{
    echo '<script>
    alert("Te has registrado correctamente");
    </script>;';
    header("Location:iniciarsesion.html");
}
mysqli_close($conexion);