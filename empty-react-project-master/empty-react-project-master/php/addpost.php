<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if(isset($_POST) && !empty($_POST)){
    $post_title = $_POST['post_title'];
    $post_body = $_POST['post_body'];
    $post_image = $_POST['post_image'];
    date_default_timezone_set('Asia/Kolkata');
    $created_at = date('d-m-y h:i:s');
    // $updated_at = date('h:i:s');
    
    move_uploaded_file($_FILES['image']['tmp_name'],"./public/userImages/".$_FILES['image']['name']);
   
             $sql_insert = "INSERT INTO posts (post_title,post_body,post_image,created_at) VALUES ('$post_title','$post_body','$post_image','$created_at')";
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