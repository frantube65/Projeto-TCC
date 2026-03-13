<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "site";

$conn = new mysqli($host, $user, $pass, $db);

if($conn->connect_error){
    echo ("Erro de conexão: " . $conn->connect_error);
}

?>