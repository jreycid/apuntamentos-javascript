/*
    Completa o código JavaScript proporcionado para que se engadan
    novos elementos á lista cada vez que se fai clic no botón.
*/

window.addEventListener("load", inicio);

function inicio() {
    document.getElementsByTagName("input")[0].addEventListener("click", engadir);
}

function engadir() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Novo elemento");
    elemento.appendChild(texto);

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
}
