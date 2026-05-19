<?php

$conn = new mysqli(
    "localhost",
    "root",
    "",
    "poesia"
);

if($conn->connect_error){
    die("Erro");
}