<?php
$emailTo = 'info@itmatters3d.com';  //Recipient's E-mail
$subject = "Correo envíado desde la página web";
$name =  $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$message = 'Nombre : ' . $name . "<br/>";
$message .= 'Correo Electrónico : ' . $email . "<br/>";
$message .= 'Telénfono : ' . $phone;

if (@mail($emailTo, $subject, $message, $headers, "-r".$emailTo))
{
     // Transfer the value 'sent' to ajax function for showing success message.
     echo 'sent';
}
else
{
     // Transfer the value 'failed' to ajax function for showing error message.
     echo 'failed';
}
?>