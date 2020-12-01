<?php
include 'db.php';

$usuario = $_POST["usuario"];
$contraseña = $_POST["contraseña"];

$consulta = "SELECT * FROM usuario WHERE usuario='$usuario' and contraseña='$contraseña'";
$resultado = mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);

if ($filas>0) {
    header("Location:inicio.html");
} else {
    echo '<script>
    alert(" Datos Incorrectos");
    window.history.go(-1);
    </script>;';
    exit;
}
mysqli_free_result($resultado);
mysqli_close($conexion);