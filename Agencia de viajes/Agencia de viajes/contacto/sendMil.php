<?php
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$ciudad=$_POST['ciudad'];
$celular=$_POST['celular'];
$mensaje=$_POST['mensaje'];

$cuerpo= "Ha recibido un mensaje de $nombre 
Datos enviados:
Email: $email
Telefono: $telefono
Ciudad: $ciudad
Celular: $celular
Mensaje: $mensaje";

if (mail(   to: 'yopsa000@gmail.com',  subject: $nombre,  message: $cuerpo)) {
    echo "su mensaje ha sido enviado <br><a href='contacto.html'>Volver</a>";
}
else {
    echo "Su mensaje no pudo ser enviado<br><a href='contacto.html'>Volver</a>";
}
?>