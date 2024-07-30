/*
    ENUNCIADO DO EXERCICIO:

    - Crea un script que rellene un documento HTML para obter o resultado da imaxe.
    - As funcionalidades da páxina son as seguintes:
        - Engadir elementos á lista.
        - Eliminar elementos da lista.
        - Filtrar elementos da lista.

    Nota: revisar capturas para ver imaxes das funcionalidades
*/

/*
    Engadir h1
*/

// crear h1
let titulo = document.createElement("h1");
let texto = document.createTextNode("Lista de tarefas");
titulo.appendChild(texto);
// con prepend insértase como primeiro fillo do pai
document.body.prepend(titulo);

/*
    Engadir imaxe
*/

// engadir a imaxe nun div
let divImxaxe = document.createElement("div");
document.body.appendChild(divImxaxe);
// crear img
let imaxe = document.createElement("img");
// engadir atributos
imaxe.setAttribute("src", "img/todo_img.png");
imaxe.setAttribute("alt", "imaxe todo list");
// engadir elemento
divImxaxe.appendChild(imaxe);
document.body.appendChild(divImxaxe);

/*
    Engadir lista
*/

// engadir a lista nun div
let divLista = document.createElement("div");
document.body.appendChild(divLista);
// crear input
let inputLista = document.createElement("input");
inputLista.setAttribute("type", "text");
inputLista.setAttribute("placeholder", "exemplo: comprar pan");
divLista.appendChild(inputLista);
// crear boton engadir
let botonEngadir = document.createElement("button");
botonEngadir.setAttribute("id", "botonEngadir");
botonEngadir.innerHTML = "Engadir";
// crear boton eliminar
let botonEliminar = document.createElement("button");
botonEliminar.setAttribute("id", "botonEliminar");
botonEliminar.innerHTML = "Eliminar";
// engadir botons
divLista.appendChild(botonEngadir);
divLista.appendChild(botonEliminar);
// crear lista
let lista = document.createElement("ul");
divLista.appendChild(lista);
// input filtrado items lista
let inputFiltrado = document.createElement("input");
inputFiltrado.setAttribute("id", "inputFiltrado");
inputFiltrado.setAttribute("type", "text");
inputFiltrado.setAttribute("placeholder", "Filtrar items...");
divLista.appendChild(inputFiltrado);

/*
    Xa está creada a páxina,
    falta engadir as funcionalidades
*/
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("botonEngadir").addEventListener("click", engadir);
    document
        .getElementById("botonEliminar")
        .addEventListener("click", eliminar);
    document.getElementById("inputFiltrado").addEventListener("keyup", filtrar);
}

function engadir() {
    const input = document.getElementsByTagName("input")[0];
    if (input.value.trim() !== "") {
        const elemento = document.createElement("li");
        const texto = document.createTextNode(input.value);
        elemento.appendChild(texto);
        const lista = document.getElementsByTagName("ul")[0];
        lista.appendChild(elemento);
        input.value = "";
    }
}

function eliminar() {
    const input = document.getElementsByTagName("input")[0];
    if (input.value.trim() !== "") {
        const items = document.getElementsByTagName("li");
        const numItems = items.length;

        for (let i = 0; i < numItems; i++) {
            if (items[i].innerHTML === input.value.trim()) {
                const ul = document.getElementsByTagName("ul")[0];
                ul.removeChild(items[i]);
                input.value = "";
            }
        }
    }
}

function filtrar() {
    const inputFiltrado = document.getElementById("inputFiltrado");
    const items = document.getElementsByTagName("li");

    const itemBuscado = inputFiltrado.value.toLowerCase();

    Array.from(items).forEach(function (item) {
        if (item.textContent.toLowerCase().indexOf(itemBuscado) !== -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
