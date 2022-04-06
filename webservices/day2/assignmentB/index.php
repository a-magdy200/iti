<?php
  spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
  });
  use App\Router;

  $method = $_SERVER['REQUEST_METHOD'];
  $script = $_SERVER['SCRIPT_NAME'];
  $uri = $_SERVER["REQUEST_URI"];
  $body = [];
  switch ($method) {
    case "POST":
      $body = $_POST;
      break;
    case "PUT":
    case "PATCH":
      parse_str(file_get_contents('php://input'), $body);
      break;
  }
  $params = [
    'uri' => $uri,
    'method' => $method,
    'script' => $script,
    'body' => $body
  ];
  $router = new Router($params);
  echo $router->getResponse();
  die;