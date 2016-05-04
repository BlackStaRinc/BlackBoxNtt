<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cet302";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

	$oku="SELECT Id,Ad,Yorum,Oneri,Degerlendirme FROM yorumlar";
	$result = $conn->query($oku);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["Id"]. " Name: " . $row["Ad"]. " Yorum: " . $row["Yorum"]. " Oneri: " . $row["Oneri"]." Degerlendirme: " . $row["Degerlendirme"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?> 