<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fetch the data
$sql = "SELECT client_id, client_name, client_email FROM users";
$result = $conn->query($sql);

// Print the data
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row["client_id,"]. " - username: " . $row["Username"]. " - email" . $row["Email"]. "<br>";
    }
  } else {
    echo "0 results";
  }
$conn->close();