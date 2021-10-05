
<?php

if (isset($_POST['submit'])) {
    $name = $_POST['fullname'];
    $email = $_POST['emailaddress'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $mailto = "berni.kastrati@hotmail.com";
    $headers = "From: Garden";
    $txt = "You have recived an e-mail from ".$email.".\n\n".$message;

    mail($mailto, $email, $txt, $headers);
    header("Location: index.html");
}

?>