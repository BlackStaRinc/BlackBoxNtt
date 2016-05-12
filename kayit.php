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
		$ad = $_POST['ad'];
		$yorum = $_POST['yorum'];
		$oneri = $_POST['oneri'];
		$deger = 5;
	$kayit="INSERT INTO yorumlar(Id,Ad,Yorum,Oneri,Degerlendirme)VALUES('','$ad','$yorum','$oneri','$deger')";
	if (mysqli_multi_query($conn, $kayit)) {
    echo "New records created successfully";
} else {
    echo "Error: " . $kayit . "<br>" . mysqli_error($conn);
}
header('Refresh:0; url=Iletisim.php');
mysqli_close($conn);
?> 
