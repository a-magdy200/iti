<?php
session_start();
$counter = isset($_SESSION['counter']) ? $_SESSION['counter'] : 0;
$counter++;
$_SESSION['counter'] = $counter;

$fileContents = file_get_contents("log.txt");
$records = explode("\n", $fileContents);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css"/>
    <title>Document</title>
</head>
<body>
<?php echo "<h2>Number of visits: $counter</h2>"; ?>
<?php
    if (count($records) === 0) {
        echo "<div class='empty'>No records yet</div>";
    } else {
        foreach ($records as $record) {
            if (empty(trim($record))) {
                continue;
            }
            $vars = explode(",", $record);
            echo "<div class='message'>";
            echo "<p><span>Date: </span><span>$vars[0], $vars[1]</span></p>";
            echo "<p><span>IP: </span><span>$vars[2]</span></p>";
            echo "<p><span>Email: </span><span>$vars[3]</span></p>";
            echo "<p><span>Name: </span><span>$vars[4]</span></p>";
            echo "</div>";
        }
    }
?>
</body>
</html>
