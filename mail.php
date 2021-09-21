<?php
//get data from form  
$name = $_POST['name'];
$name = $_POST['lastname'];
$email= $_POST['emailaddress'];
$number = $_POST['tel'];
$message= $_POST['message'];

$to = "berni.kastrati@gmail.com";

$subject = "Mail From Garden";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message ."
    \r\n Lastname =". $name ." \r\n Number =" . $number;
$headers = "From: noreply@garden.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("<Location:website>index.html");
?>