<?php
// Define recipient email
$recipient_email = "c04jason@gmail.com";

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate inputs
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "<h2>Error: All fields are required.</h2>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<h2>Error: Invalid email address.</h2>";
        exit;
    }

    // Prepare the email content
    $email_body = "Name: $name [$email]\n\n$message";

    // Send the email
    if (mail($recipient_email, $subject, $email_body)) {
        echo "<h2>Thank you! Your message has been sent successfully.</h2>";
    } else {
        echo "<h2>Error: Unable to send your message. Please try again later.</h2>";
    }
} else {
    echo "<h2>Error: Invalid request method.</h2>";
}
?>