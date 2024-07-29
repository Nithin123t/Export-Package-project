<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "nithinreddythimmareddy18@gmail.com"; // Change this to your email
    $subject = "New Shipping Form Submission";
    $message = "";

    foreach ($_POST as $key => $value) {
        $message .= ucfirst($key) . ": " . $value . "\n";
    }

    $headers = "From: nithinreddythimmareddy18@gmail.com"; // Change this to your email or set up proper headers
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Form details sent successfully!";
    } else {
        echo "Failed to send form details!";
    }
} else {
    echo "Invalid request method!";
}
?>
