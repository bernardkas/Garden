
<?php

    $name = $_POST['fullname'];
    $visitor_email = $_POST['emailaddress'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $mail_from = "berni.kastrati@hotmail.com";
    $email_subject = "From: Garden";
    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                            "User Phone: $tel.\n".
                                "User Message: $message.\n";


    $to = "berni.kastrati@hotmail.com";

    $headers = "From Garden";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>