/*
    Unha expresión de función frecha é unha alternativa 
    mais compacta a unha expresión de función tradicional:

        function [name]([param1, param2, ..., paramN]) {
        statements
        }

    As arrow functions teñen algunhas limitación que podes consultar no seguinte enlace:
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions

*/

/* Función tradicional  */
function test (a){
    return a + 100;
}

/* Desglose da función frecha equivalente: */

// 1. Elimina a palabra "function" e coloca a frecha entre o argumento e o corchete de apertura.
(a) => {
    return a + 100;
}

// 2. Quita os corchetes do cuerpo e a palabra "return" — elo return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis dos argumentos
a => a + 100;

/* 
    Exemplo 1 
*/

// Función tradicional
function bob (a){
    return a + 100;
}

// Función flecha
bob = a => a + 100;

/* 
    Exemplo 2 
*/
const materiais = [
    'Hidróxeno',
    'Uranio',
    'Litio',
    'Carbono'
];

console.log(materiais.map(materiais => materiais.length));

/* 
    Exemplo 3 
*/

//En ES5:
['a', 2, 'c', 4].forEach(function(v) {
    return console.log(v);
});
//A partir de ES6, coa chegada das funcións frecha:
['a', 2, 'c', 4].forEach(v => console.log(v));

/* 
    Exemplo 4 

    Se a función que se vai representar coa sintaxe de función frecha, 
    non recibe argumentos ou recibe varios, entón e preciso empregar () arredor dos argumentos
*/

// Función tradicional con varios argumentos
function bob (a, b){
    return a + b + 100;
}
// Función flecha con varios argumentos
(a, b) => a + b + 100;

// Función tradicional sen argumentos
let a = 4;
let b = 2;
function bob (){
    return a + b + 100;
}
// Función flecha sen argumentos
a = 4;
b = 2;
() => a + b + 100;

/* 
    Exemplo 5

    No caso de que o corpo da función esté composto por varias liñas,
    será preciso rodealo de corchetes e emprgar return
*/

// Función tradicional
function bob (a, b){
    let chuck = 42;
    return a + b + chuck;
}

// Función frecha
(a, b) => {
    let chuck = 42;
    return a + b + chuck;
}

/* 
    Exemplo 6
*/
// Función tradicional
const concatenarTradicional = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(concatenarTradicional([1, 2], [3, 4, 5]));

// Función frecha
const concatenarFrecha = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarFrecha([1, 2], [3, 4, 5]));