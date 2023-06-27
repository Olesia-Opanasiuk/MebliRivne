<?php
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "MebliRivne";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
 die("Connection failed: " . mysqli_connect_error());
}

// try {
//   $connection = new PDO('mysql:host=$servername;dbname=$dbname', $username, $password);
//   echo 'Connection successfully';
// } catch (PDOException $e) {
//   echo 'Connection failed: ' . $->getMessage();
// }
?>