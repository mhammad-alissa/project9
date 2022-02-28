<?php 
$conn = new mysqli('localhost', 'root','','project9');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$sql= "SELECT * FROM posts " ;
$result= mysqli_query($conn, $sql);
$json_array= array();
while($row= mysqli_fetch_assoc($result)){
	$json_array[] = $row;
}
echo json_encode($json_array)
?>
