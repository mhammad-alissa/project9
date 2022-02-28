<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if(isset($_POST) && !empty($_POST)){
    $comment = $_POST['comment'];
    $pos = $_POST['post_id'];
  
  
    
   
             $sql_insert = "INSERT INTO comments (comment,postid) VALUES ('$comment','$pos')";
             if(mysqli_query($db,$sql_insert)){
             $result = mysqli_query($db,$sql);
             $row = mysqli_fetch_assoc($result);
             http_response_code(201);
             print json_encode($row);
           }

             else{
                http_response_code(422); 
             }
  
}


?> 