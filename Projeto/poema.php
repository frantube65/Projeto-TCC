<?php
$poema = $_GET['poema'];
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Poema</title>
<link rel="stylesheet" href="CSS/poema.css">
</head>

<body>

<a href="index.php">⬅ Voltar</a>

<div class="poema">

<?php
if ($poema == "drummond"){
    echo "<h1>No Meio do Caminho</h1>";
    echo "<p>No meio do caminho tinha uma pedra...</p>";
    echo "<h3>Carlos Drummond de Andrade</h3>";
}

elseif($poema == "motivo"){
    echo "<h1>Motivo</h1>";
    echo "<p>Aprendi com as primaveras a deixar-me cortar...</p>";
    echo "<h3>Cecília Meireles</h3>";
}

elseif($poema == "reflexo"){
    echo "<h1>Reflexo</h1>";
    echo "<p>Amor é feito espelho...</p>";
    echo "<h3>Pablo Neruda</h3>";
}

else{
    echo "<h1>Poema não encontrado</h1>";
}
?>

</div>

</body>
</html>