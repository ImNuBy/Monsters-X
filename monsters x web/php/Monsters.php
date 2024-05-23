<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servidor = $_POST['servidor'];
    $id_jugador = $_POST['id-jugador'];
    $rango = $_POST['rango'];
    $personajes = $_POST['personajes'];
    $roles = $_POST['roles'];

    $to = "contact@monsterxesports.com";
    $subject = "Nueva Postulación para Monster X";
    $message = "Servidor: $servidor\nID del jugador: $id_jugador\nRango: $rango\nPersonajes: $personajes\nRoles: $roles";
    $headers = "From: no-reply@monsterxesports.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "¡Postulación enviada con éxito!";
    } else {
        echo "Hubo un error al enviar tu postulación. Por favor, intenta de nuevo.";
    }
}
?>
