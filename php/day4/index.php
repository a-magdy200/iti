<?php
// Create connection
$conn = new mysqli(__HOST__, __USER__, __PASSWORD__, __DB_NAME__);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";