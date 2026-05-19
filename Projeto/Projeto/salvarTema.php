<?php

session_start();

include "conexao.php";

$id = $_SESSION['id'];

$tema = $_POST['tema'];

$conn->query("
    UPDATE usuarios
    SET tema='$tema'
    WHERE id='$id'
");