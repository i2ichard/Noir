<?php

// Put your email here
$EmailTo = "hello.mianoir@gmail.com";

$errorMSG = "";

// prepare email body text
$Body = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required.";
} else {
    $Body .= "Name: ";
    $Body = $_POST["name"];
    $Body .= "\n";
}

// EMAIL
if (empty($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    $errorMSG .= "A valid email is required.";
} else {
    $Body .= "Email: ";
    $Body .= $_POST["email"];
    $Body .= "\n";
}

// subject
if (empty($_POST["subject"])) {
    $subject .= "Subject is required.";
} else {
    $subject = $_POST["subject"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required.";
} else {
    $Body .= "Message: ";
    $Body .= $_POST["message"];
    $Body .= "\n";
}
 




// send email
$success = mail($EmailTo, $subject, $Body, "From:".$_POST["email"]);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Success!";
}else{
    if($errorMSG == ""){
        echo "Uh Oh! Something went wrong... :(";
    } else {
        echo $errorMSG;
    }
}

?>