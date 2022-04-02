<?php
namespace App;
  use Error;
  use mysqli;
  use PDOException;

  class DBService
  {
private $connection;
    public function __construct()
    {
      $servername = "localhost";
      $db = "store";
      $username = "root";
      $password = "";

      $this->connection = new mysqli($servername, $username, $password, $db);
      if ($this->connection->connect_error) {
        throw new Error("Connection failed: " . $this->connection->connect_error);
      }
    }
    public function getAllItems() {
      try {
        $query = "SELECT * FROM items";
        $statement = $this->connection->prepare($query);
        $statement->execute();
        $result = $statement->get_result();
        return $result->fetch_all(MYSQLI_ASSOC);
      } catch(PDOException $e) {
        throw new Error($e->getMessage());
      }
    }
    public function getItem($id) {
      try {
        $query = "SELECT * FROM items WHERE id=?";
        $statement = $this->connection->prepare($query);
        $statement->bind_param("i", $id);
        $statement->execute();
        $result = $statement->get_result();
        return $result->fetch_all(MYSQLI_ASSOC);
      } catch(PDOException $e) {
        throw new Error($e->getMessage());
      }
    }
    public function addItem($data) {
      try {
        $query = "INSERT INTO items (name, description, price) VALUES (?, ?, ?)";
        $statement = $this->connection->prepare($query);
        $statement->bind_param("ssi", $data['name'], $data['description'], $data['price']);
        $statement->execute();
      } catch(PDOException $e) {
        throw new Error($e->getMessage());
      }
    }
    public function updateItem($id, $data) {
      try {
        $query = "UPDATE items SET name=?, description=?, price=? WHERE id=?";
        $statement = $this->connection->prepare($query);
        $statement->bind_param("ssii", $data['name'], $data['description'], $data['price'], $id);
        $statement->execute();
      } catch(PDOException $e) {
        throw new Error($e->getMessage());
      }
    }
    public function deleteItem($id) {
      try {
        $query = "DELETE FROM items WHERE id=?";
        $statement = $this->connection->prepare($query);
        $statement->bind_param("i", $id);
        $statement->execute();
      } catch(PDOException $e) {
        throw new Error($e->getMessage());
      }
    }
  }