<?php 
if(isset($_POST['submit'])) { 
$to = "maximthehedgehog@yandex.com"; 
$subject = "Контактная форма"; 
 
$name_field = filter_var($_POST['name'], FILTER_SANITIZE_STRING); 
$email_field = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$phone_field = filter_var($_POST['phone'], FILTER_SANITIZE_STRING); 
$comment = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);
 
$body = " From: $name_field\n\n E-Mail: $email_field\n\n Phone: $phone_field\n\n Message:\n\n $comment";
 
$send = mail($to, $subject, $body);

if ($send) {
    echo "<br>";
    echo "Большое спасибо! Скоро мы свяжемся с Вами!";
} else {
    echo "Ошибка!";
}
 
} 
?>