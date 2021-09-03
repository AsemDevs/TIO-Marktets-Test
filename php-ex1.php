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

// a- Insert new record
$sql_insert = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql_insert) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql_insert . "<br>" . $conn->error;
  }
  

//b- Update Record
$sql_update = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

if ($conn->query($sql_update) === TRUE) {
    echo "Record updated successfully";
  } else {
    echo "Error updating record: " . $conn->error;
  }

//c- Delete Record
$sql_delete = "DELETE FROM MyGuests WHERE id=3";

if ($conn->query($sql_delete) === TRUE) {
    echo "Record deleted successfully";
  } else {
    echo "Error deleting record: " . $conn->error;
  }

$conn->close();