/*
    ENUNCIADO DO EXERCICIO:

    1 - Crea un script que rellene un elemento UL de HTML con un array de strings.
    2 - Modifica o teu script para que elimine un a un os li e deixe de novo o elemento UL baleiro.
*/

const tasks = [
    { title: "Lavar a roupa" },
    { title: "Preparar a cea" },
    { title: "Sacar o lixo" },
];

/*
    querySelector é un selector que recibe como parámetro un string,
    coa cadena do selector que queremos atopar no document
*/
let todoListElement = document.querySelector("#todo_list");

for (let i = 0; i < tasks.length; i += 1) {
    let task = tasks[i].title;
    // Creamos un novo elemento HTML con JS, neste caso será un li
    let li = document.createElement("li");
    li.textContent = task;
    li.id = "elemento_" + i;
    // Engadímolo como fillo do ul
    todoListElement.appendChild(li);
}
// Eliminamos os elementos un a un
// Sería mais elegante facelo con un for
let elementoAEliminar1 = document.getElementById("elemento_0");
let elementoAEliminar2 = document.getElementById("elemento_1");
let elementoAEliminar3 = document.getElementById("elemento_2");

todoListElement.removeChild(elementoAEliminar1);
todoListElement.removeChild(elementoAEliminar2);
todoListElement.removeChild(elementoAEliminar3);
