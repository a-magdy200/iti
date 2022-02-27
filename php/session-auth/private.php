<?php
session_start();
$email = isset($_SESSION['email']) ? $_SESSION['email'] : null;
if (!isset($email)) {
    header("Location: login.php");
    die;
}
$name = $_SESSION['name'];
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
        <h1>Welcome <?php echo $name; ?></h1>
        <h2><?php echo $email; ?></h2>
        <form action="logout.php">
            <button type="submit">Logout</button>
        </form>
    </div>
</body>
</html>
