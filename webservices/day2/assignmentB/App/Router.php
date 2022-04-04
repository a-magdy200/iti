<?php

  namespace App;

  class Router
  {
    private $response;
    public function __construct($params)
    {
      $script = $params['script'];
      $uri = $params['uri'];
      $method = $params['method'];
      $body = $params['body'];
      $path = explode($script, $uri)[1];
      $uriParts = explode("/", $path);
      $resource = $uriParts[1];
      $id = isset($uriParts[2]) ? $uriParts[2] : "";
      header("Content-Type: application/json");
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: *");
      if ($resource == "items") {
        $controller = new ItemsController();
        if ($id === "") {
          switch ($method) {
            case "POST":
              $response = $controller->addItem($body);
              break;
            case "GET":
              $response = $controller->getAllItems();
              break;
            default:
              $response = Response::error("405 Unsupported method");
          }
        } else {
          switch ($method) {
            case "DELETE":
              $response = $controller->deleteItem($id);
              break;
            case "PUT":
            case "PATCH":
              $response = $controller->updateItem($id, $body);
              break;
            case "GET":
              $response = $controller->getItem($id);
              break;
            default:
              $response = Response::error("405 Unsupported method");
          }
        }
      } else {
        $response = Response::error("404 Not found");
      }
      $this->response = $response;
    }
    public function getResponse() {
      return $this->response;
    }
  }