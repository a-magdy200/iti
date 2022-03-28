<?php
  require_once "vendor/autoload.php";
  use Model\WeatherAPI;
  if (isset($_GET['lat']) && isset($_GET['lon'])) {
    echo WeatherAPI::get_weather($_GET['lat'], $_GET['lon']);
  } else {
    echo json_encode([
      'status' => 401,
      'message' => "Invalid Request"
    ]);
  }