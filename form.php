<?php
$to      = 'maksim.dzjubenko@ivkhk.ee';
$subject = 'Molarity+';
$message = "Name: ".$_POST["name"]. "\r\n" ."Description: ".$_POST["description"];
$headers = array(
    'From' => $_POST["email"]
);

mail($to, $subject, $message, $headers);
?>