<?php
session_start();
require_once "vendor/autoload.php";
if (!isset($_SESSION['visited'])) {
    $_SESSION['visited'] = true;
    Counter::addVisit();
}
$count = Counter::getCount();
echo "<h1>Current visits count: $count</h1>";
