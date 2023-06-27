
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "MebliRivne";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$name=$_POST['nameReview'];
$email=$_POST['emailReview'];
$comment=$_POST['textReview'];
$rating=$_POST['rating'];
$today = date("m.d.y");   

$query = "INSERT INTO Reviews (name, email, comment, rating, date)
VALUES ('$name', '$email', '$comment', '$rating',   NOW())";

if (mysqli_query($conn, $query)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $query . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>


