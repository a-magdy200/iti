<?php
session_start();
$email = isset($_SESSION['email']) ? $_SESSION['email'] : null;
if (isset($email)) {
    header("Location: private.php");
    die;
}
require_once 'config.php';
$email = '';
$password = '';
$errors = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];
    if ($email) {
        if ($email === EMAIL && $password === PASSWORD ) {
            $_SESSION['name'] = NAME;
            $_SESSION['email'] = $email;
            header("Location: private.php");
        } else {
            $errors[] = "Invalid Credentials";
        }
    } else {
        $errors[] = 'Email is required';
    }
    if (empty($password)) {
        $errors[] = 'Password is required';
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
            <label for="email">Email</label>
            <input value="<?php echo $email; ?>" type="email" id="email" name="email" placeholder="Email@Domain.com">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********">
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
</div>
</body>
</html>
