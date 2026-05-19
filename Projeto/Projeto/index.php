<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Editor de Poemas</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body data-theme="dark">

<div class="container">

    <div class="topbar">

        <h1>✍ Meu Poema</h1>

        <select id="genero">
            <option value="normal">Normal</option>
            <option value="romance">Romance 💖</option>
            <option value="terror">Terror 👻</option>
            <option value="triste">Triste 😢</option>
            <option value="inspiracao">Inspiração ✨</option>
        </select>
        
        <select id="fonteSelect">
    <option value="Arial">Arial</option>
    <option value="Georgia">Georgia</option>
    <option value="Courier New">Courier New</option>
    <option value="Times New Roman">Times</option>
    <option value="Verdana">Verdana</option>
</select>

        <button id="temaBtn">Alternar Tema</button>

    </div>

    <div class="editor-area">

        <div class="editor-box">
            <textarea id="editor"></textarea>

            <div class="info">
                <span id="versos">0 versos</span>
                <span id="palavras">0 palavras</span>
            </div>
        </div>

        <div class="preview-box">
            <h2>Preview</h2>
            <div id="preview"></div>
        </div>

    </div>

</div>

<audio id="audioPlayer" loop></audio>
<button id="musicBtn">🔊 Ativar Música</button>

<script src="js/app.js"></script>

</body>
</html>