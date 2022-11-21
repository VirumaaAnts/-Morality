<?php
$to      = 'maksim.dzjubenko@ivkhk.ee';
$subject = 'Molarity+';
$message = "Name: ".$_POST["name"]. "\r\n"."Age: ".$_POST["age"]. "\r\n" ."Sex: ".$_POST["sex"]. "\r\n"."Description: ".$_POST["description"];
$headers = array(
    'From' => $_POST["email"]
);

// mail($to, $subject, $message, $headers);
echo 1;
?>