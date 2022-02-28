<?php
require('connect.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
// header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Headers: Content-Type, Authorization,Origin, X-Requested-With, Content");
header('Content-Type: application/json; charset=utf-8');
// $json = file_get_contents('php://input');
// $obj = json_decode($json,true);
// $id = $obj['id'];
// $sql = "SELECT * FROM users where id = $id;";
// $result = mysqli_query($db,$sql);
// $row = mysqli_fetch_assoc($result);
//   // output data of each row
//     // print_r($rows);
//     // echo "DATA1: " . $row["coffee_name"]. " - DATA2: " . $row["coffee_name"]. "<br>";
$sql =  "SELECT * ,comments.comment_id as comm_id
FROM comments,posts
WHERE comments.postid = posts.post_id
;";

$rows = [];
$result = mysqli_query($db,$sql);
while($row = mysqli_fetch_assoc($result)){
  array_push($rows,$row);
}
 print json_encode($rows);