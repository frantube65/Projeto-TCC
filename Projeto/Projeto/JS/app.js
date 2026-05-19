const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const versos = document.getElementById("versos");
const palavras = document.getElementById("palavras");
const temaBtn = document.getElementById("temaBtn");
const generoSelect = document.getElementById("genero");
const audio = document.getElementById("audioPlayer");
const musicBtn = document.getElementById("musicBtn");

let musicaAtiva = false;

const musicas = {
    romance: "audio/romance.mp3",
    terror: "audio/terror.mp3",
    triste: "audio/triste.mp3",
    inspiracao: "audio/inspiracao.mp3"
};

/* =========================
   APLICAR TEMA + GÊNERO
========================= */
function aplicarTudo(){

    let genero = localStorage.getItem("genero") || "normal";
    let tema = localStorage.getItem("tema") || "dark";

    document.body.classList.remove(
        "normal","romance","terror","triste","inspiracao"
    );

    document.body.classList.add(genero);

    document.body.setAttribute("data-theme", tema);
}

/* =========================
   TEXTO (CONTADOR FUNCIONANDO)
========================= */
function atualizarTexto(){

    let texto = editor.value || "";

    preview.innerText = texto;

    let linhas = texto.split("\n").filter(l => l.trim() !== "");
    let palavrasQtd = texto.trim()
        ? texto.trim().split(/\s+/).filter(Boolean).length
        : 0;

    versos.innerText = linhas.length + " versos";
    palavras.innerText = palavrasQtd + " palavras";

    localStorage.setItem("poema", texto);
}

editor.addEventListener("input", atualizarTexto);

/* =========================
   TEMA
========================= */
temaBtn.addEventListener("click", () => {

    let atual = localStorage.getItem("tema") || "dark";
    let novo = atual === "dark" ? "light" : "dark";

    localStorage.setItem("tema", novo);

    aplicarTudo();
});

/* =========================
   GÊNERO + MÚSICA
========================= */
generoSelect.addEventListener("change", () => {

    let genero = generoSelect.value;

    localStorage.setItem("genero", genero);

    aplicarTudo();

    if(musicaAtiva){
        tocarMusica(genero);
    }
});

/* =========================
   MÚSICA
========================= */
function tocarMusica(genero){

    if(!musicaAtiva) return;

    if(!musicas[genero]){
        audio.pause();
        return;
    }

    audio.src = musicas[genero];
    audio.volume = 0.4;

    audio.load();

    audio.play().catch(() => {
        console.log("Autoplay bloqueado");
    });
}

/* =========================
   BOTÃO MÚSICA
========================= */
musicBtn.addEventListener("click", () => {

    musicaAtiva = !musicaAtiva;

    if(musicaAtiva){

        musicBtn.innerText = "🔇 Desativar Música";

        let genero = localStorage.getItem("genero") || "normal";

        tocarMusica(genero);

    } else {

        musicBtn.innerText = "🔊 Ativar Música";

        audio.pause();
    }
});

/* =========================
   LOAD
========================= */
window.addEventListener("load", () => {

    let genero = localStorage.getItem("genero") || "normal";
    let texto = localStorage.getItem("poema") || "";

    generoSelect.value = genero;

    editor.value = texto;
    preview.innerText = texto;

    aplicarTudo();
    atualizarTexto();

    musicBtn.innerText = "🔊 Ativar Música";
});
const fonteSelect = document.getElementById("fonteSelect");
function aplicarFonte(){

    let fonte = localStorage.getItem("fonte") || "Arial";

    editor.style.fontFamily = fonte;
    preview.style.fontFamily = fonte;
    fonteSelect.value = localStorage.getItem("fonte") || "Arial";
aplicarFonte();
}
fonteSelect.addEventListener("change", () => {

    let fonte = fonteSelect.value;

    localStorage.setItem("fonte", fonte);

    aplicarFonte();
});
window.addEventListener("load", () => {

    let genero = localStorage.getItem("genero") || "normal";
    let texto = localStorage.getItem("poema") || "";

    generoSelect.value = genero;

    editor.value = texto;
    preview.innerText = texto;

    aplicarTudo();
    atualizarTexto();

    fonteSelect.value = localStorage.getItem("fonte") || "Arial";
    aplicarFonte();

    musicBtn.innerText = "🔊 Ativar Música";
});
