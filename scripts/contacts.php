<?php
$reciever_email = "c04jason@gmail.com";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and collect data
    $name = htmlspecialchars(trim($_POST['name']));
    $sender_email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate inputs
    $errors = [];
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    if (empty($sender_email) || !filter_var($sender_email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "A valid email address is required.";
    }

    if (empty($subject)) {
        $errors[] = "Subject is required.";
    }

    if (empty($message)) {
        $errors[] = "Message cannot be empty.";
    }

    if (!empty($errors)) {
        echo "<h2>Error:</h2><ul>";
        foreach ($errors as $error) {
            echo "<li>" . htmlspecialchars($error) . "</li>";
        }
        echo "</ul>";
        exit;
    }

    // Prepare the email content
    $email_body = "$message\n\nFrom:\n$name\n$sender_email";
    $headers = "From: $sender_email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($reciever_email, $subject, $email_body, $headers)) {
        echo "<h2>Thank you! Your message has been sent successfully.</h2>";
    } else {
        echo "<h2>Error: Unable to send your message. Please try again later.</h2>";
    }
} else {
    echo "<h2>Error: Invalid request method.</h2>";
}
?>
