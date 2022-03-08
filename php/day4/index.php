<?php
  require_once "vendor/autoload.php";
  require_once "autoload.php";
  $dbConnection = new DBConnect();
  $currentPage = $_SERVER['PHP_SELF'];
  if (isset($_GET['product'])) {
    $item = $dbConnection->get_record_by_id(intval($_GET['product']));
    echo "<table><tbody>";
    foreach ($item as $key=>$value) {
      if (strtolower($key) === 'photo') {
        $imagePath = str_replace("index.php", "images/$value", $currentPage);
        echo "<tr><td>$key</td><td><img height='100' src=\"$imagePath\"  alt=\"Product Image\"/></td></tr>";
      } else {
        echo "<tr><td>$key</td><td>$value</td></tr>";
      }
    }
    echo "</tbody></table>";
  } else {
    $items = $dbConnection->get_data();
    $currentPage = substr($currentPage, 0, strlen($currentPage) - 1);
    echo "<table><thead>";
    echo "<tr><th>ID</th><th>Name</th><th>Details</th></tr>";
    echo "</thead>";
    echo "<tbody>";
    foreach ($items as $item) {
      echo "<tr><td>$item->id</td><td>$item->product_name</td><td><a href=\"$currentPage?product=$item->id\">Details</a></td></tr>";
    }
    echo "</tbody></table>";
    echo "<div><a href=\"". $currentPage . $items->previousPageUrl()."\">Prev</a><a href=\"". $currentPage . $items->nextPageUrl()."\">Next</a></div>";
  }
