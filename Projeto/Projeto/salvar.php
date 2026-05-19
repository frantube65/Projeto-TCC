<?php

if(isset($_POST['texto'])){

    $texto = $_POST['texto'];

    file_put_contents(
        "storage/poema.txt",
        $texto
    );

    echo "salvo";
}

session_start();

include "conexao.php";

$id = $_SESSION['id'];

$texto = $_POST['texto'];

$conn->query("
    UPDATE usuarios
    SET poema='$texto'
    WHERE id='$id'
");