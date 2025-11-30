<?php
$nombre=$_POST['user'];
$email=$_POST['email'];
$mensaje=$_POST['message'];

$cuerpo="Ha recibido un mensaje de: $nombre
Email: $email
Mensaje: $mensaje";

if (mail('franciscorafaelcastrorojo@gmail.com', $nombre, $cuerpo)){
    echo "Su mensaje ha sido enviado<br><a href='../index.html'>Volver";
}else{
    echo "Su mensaje no pudo ser enviado<br><a href='../index.html'>Volver";
}
?>