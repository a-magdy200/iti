<?php
// Router simple
  $path = explode($_SERVER['SCRIPT_NAME'], $_SERVER["REQUEST_URI"])[1];
  $uriParts = explode("/", $path);
  $resource = $uriParts[1];
  $id = isset($uriParts[2]) ? $uriParts[2] : "";
  $method = $_SERVER['REQUEST_METHOD'];
  header("Content-Type: application/json");
  if ($id === "") {
    switch ($method) {
      case "POST":
        $body['name'] = $_POST['name'];
        $success = 0;
        $response = [];
        try {
          addNew($body);
          $success = 1;
        } catch (Exception $exception) {
          $response['error'] = $exception->getMessage();
        }
        $response['success'] = $success;
        echo json_encode($response);
        break;
      case "GET":
        $success = 0;
        $response = [];
        try {
          $items = getAll();
          $success = 1;
          $response['data'] = $items;
        } catch (Exception $exception) {
          $response['error'] = $exception->getMessage();
        }
        $response['success'] = $success;
        echo json_encode($response);
        echo "get all"; // here should be a function
        break;
      default:
        echo "405 Unsupported method"; // here should be a function
    }
  } else {
    switch ($method) {
      case "DELETE":
        $success = 0;
        $response = [];
        try {
          $success = deleteOne($id);// return true | false
          $success = 1;
        } catch (Exception $exception) {
          $response['error'] = $exception->getMessage();
        }
        $response['success'] = $success;
        echo json_encode($response);
        echo "delete this item"; // here should be a function
        break;
      case "PUT":
      case "PATCH":
        $body['name'] = $_POST['name'];
        $success = 0;
        $response = [];
        try {
          $success = updateOne($id, $body);// return true | false
          $success = 1;
        } catch (Exception $exception) {
          $response['error'] = $exception->getMessage();
        }
        $response['success'] = $success;
        echo json_encode($response);
        echo "update this item"; // here should be a function
        break;
      case "GET":
        $success = 0;
        $response = [];
        try {
          $item = getOne($id);
          $success = 1;
          $response['data'] = $item;
        } catch (Exception $exception) {
          $response['error'] = $exception->getMessage();
        }
        $response['success'] = $success;
        echo json_encode($response);
        echo "get this item data"; // here should be a function
        break;
      default:
        echo "405 Unsupported method"; // here should be a function
    }
  }
  die;