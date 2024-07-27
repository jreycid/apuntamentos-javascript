/*
    Completar o código JavaScript proporcionado para que cando faga clic na ligazón,
    se mostre o contido de texto completo.
    Ademais, a ligazón debería deixar de mostrarse despois de facer clic nela por primeira vez.
*/

window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("ligazon").addEventListener("click", mostra);
}

function mostra() {
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";

    var ligazon = document.getElementById("ligazon");
    ligazon.className = "oculto";
}
