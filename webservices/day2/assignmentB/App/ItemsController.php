<?php
namespace App;

  use Exception;

  class ItemsController
  {
private $dbService;
    public function __construct()
    {
      $this->dbService = new DBService();
    }

    public function getItem($id){
  try {
    $item = $this->dbService->getItem($id);
    if (count($item) > 0) {
      $response = Response::success($item[0]);
    } else {
      $response = Response::error("Item not found");
    }
  } catch (Exception $exception) {
    $response = Response::error($exception->getMessage());
  }
  return $response;
}
public function getAllItems(){
  try {
    $items = $this->dbService->getAllItems();;
    $response = Response::success($items);
  } catch (Exception $exception) {
    $response = Response::error($exception->getMessage());
  }
  return $response;
}
public function addItem($data){
  try {
    $this->dbService->addItem($data);
    $response = Response::success();
  } catch (Exception $exception) {
    $response = Response::error($exception->getMessage());
  }
  return $response;
}
public function updateItem($id, $data){
  try {
    $this->dbService->updateItem($id, $data);
    $response = Response::success();
  } catch (Exception $exception) {
    $response = Response::error($exception->getMessage());
  }
  return $response;
}
public function deleteItem($id){
  try {
    $this->dbService->deleteItem($id);
    $response = Response::success();
  } catch (Exception $exception) {
    $response = Response::error($exception->getMessage());
  }
  return $response;
}
  }