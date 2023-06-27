
<?
        $servername = "localhost";
        $username   = "dev2_test_user";
        $password   = "3A1z3S5l";
        $dbname     = "dev2_test_db";

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        if (!$conn) {
          die("Connection failed: " . mysqli_connect_error());
        }

        ?>

