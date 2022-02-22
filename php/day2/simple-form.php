<?php
require_once 'config.php';
$vars = [
    'name' => '',
    'email' => '',
    'message' => ''
];
$errors = [];
$success = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $vars['name'] = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $vars['email'] = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $vars['message'] =  filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if (isset($vars['name']) && strlen($vars['name']) != 0) {
        if (strlen($vars['name']) > MAX_NAME_LENGTH) {
            $errors[] = "Name is too long, must be less than 100 characters";
        }
    } else {
        $errors[] = 'Name is required';
    }
    if (isset($vars['message']) && strlen($vars['message']) != 0) {
        if (strlen($vars['message']) > MAX_MESSAGE_LENGTH) {
            $errors[] = "Message is too long, must be less than 255 characters";
        }
    } else {
        $errors[] = 'Message is required';
    }
    if (isset($vars['email']) && strlen($vars['email']) != 0) {
        if (!filter_var($vars['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Please input a valid email";
        }
    } else {
        $errors[] = 'Email is required';
    }
    $success = count($errors) === 0;
    if ($success) {
        $date = date("F d Y h:m A");
        $ip = $_SERVER['REMOTE_ADDR'];
        $record = "$date,$ip,${vars['email']},${vars['name']}\n";
        $filePointer = fopen("log.txt", "a+");
        fwrite($filePointer, $record);
        fclose($filePointer);
    }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <div class="container">
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <?php
            if (count($errors) > 0) {
                echo "<ul>";
                foreach ($errors as $error) {
                    echo "<li class='error'> $error </li>";
                }
                echo "</ul>";
            }
            ?>
            <div class="form-group">
                <label for="name">Name</label>
                <input value="<?php echo $success ? '' : $vars['name']; ?>" type="text" id="name" name="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input value="<?php echo $success ? '' : $vars['email']; ?>" type="email" id="email" name="email" placeholder="Email@Domain.com">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="3" placeholder="Message"><?php echo $success ? '' : $vars['message']; ?></textarea>
            </div>
            <div>
                <button type="reset">Clear</button>
                <button type="submit">Submit</button>
            </div>

            <div class="success">
                <?php
                if ($success) {
                    echo "<hr />";
                    echo "<h2>Thank you For Contacting Us";
                    echo "<hr />";
                    foreach ($vars as $key => $value) {
                        echo "<div>";
                        echo "<span>$key&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                        echo "<span>$value</span>";
                        echo "</div>";
                    }
                }
                ?>
            </div>
        </form>
    </div>
</body>
</html>
