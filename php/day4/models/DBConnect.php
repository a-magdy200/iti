<?php

  use Illuminate\Container\Container;
  use Illuminate\Database\Capsule\Manager as DB;
  use Illuminate\Events\Dispatcher;

  class DBConnect implements DbHandler
  {

    private $connection;

    public function __construct()
    {
      return $this->connect();
    }

    public function connect()
    {
      $this->connection = new DB;
      $this->connection->addConnection([
        'driver' => 'mysql',
        'host' => __HOST__,
        'database' => __DB_NAME__,
        'username' => __USER__,
        'password' => __PASSWORD__,
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => '',
      ]);

      $this->connection->setEventDispatcher(new Dispatcher(new Container));

// Make this Capsule instance available globally via static methods... (optional)
      $this->connection->setAsGlobal();

// Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
      $this->connection->bootEloquent();
      // Create connection

      // Check connection
      if ($this->connection->getConnection()) {
        return true;
      }
      return false;
    }

    public function get_data($fields = array(), $start = 0)
    {
      $page = isset($_GET['page']) ? intval($_GET['page']) : 1;
      $queryBuilder = $this->connection->table("items")->paginate(__RECORDS_PER_PAGE__,["id", 'product_name'], "page", $page);
      if (__DEBUG_MODE__ === 1) {
        echo "SQL: {$queryBuilder->toSql()}<br/><br/>";
      }
      return $queryBuilder;
    }

    public function disconnect()
    {
      if ($this->connection->getConnection() !== null) {
        $this->connection->getConnection()->disconnect();
        unset($this->connection);
      }
    }

    public function get_record_by_id($id)
    {
      return $this->connection->table("items")->find($id);
    }
  }