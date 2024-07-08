/*
    HOISTING

    Incorpórase con ECMAScript 2015

    Adoíta interpretarse como que as variables e as funcións son
    físicamente movidas o comezo do código, se ben non é a realidade.

    O que ocorre é que as declaracións de variables e as funcións
    son asignadas en memoria durante a compilación,
    pero a nivel de código mantéñense donde se escribiron.

    Fai referencia a cómo funcionan os contextos de execución en JavaScript,
    específicamente as fases de creación e execución:

        1. Na fase de creación cárganse en memoria as definicións das funcións
        e as definicións das variables declaradas con var.

        2. Na fase de execución o código execútase liña por liña,
        esto inclúe asignación de valor as variables e execución das funcións.
*/

/* 
    Hoisting de funcións

    O Hoisting permite empregar unha función antes de declarala no código
    Esto ocorre pola maneira na que funcion o contexto de execución en JavaScript.

*/
console.log("\nExemplo 1 - Hoisting de funcións: ");
function exemplo1() {
    console.log("Ola!");
}
exemplo1();

function exemplo1() {
    console.log("Ola!");
}
exemplo1();

/* 
    Hoisting de variables

    O Hoisting de variables afecta a súa declaranción,
    pero non afecta a súa inicialización

    No caso de empregar unha variable despois de declarala,
    pero antes de inicializala, obterase o valor undefined

    Javascript asigna valor as variables exactamente cando
    se alcanza a sentencia de asginación
*/
console.log("\nExemplo 2 - Hoisting de variables declaradas con var: ");
var a = 1;
console.log(a + " " + b);
var b = 2;
/*
    O proceso que leva a cabo JavaScript co código anterior é o seguinte:

    var a = 1;  Inicializa a
    var b;  Elévase a declaración de b
    console.log(a + " " + b);   '1 undefined'
    b = 2;  Inicializa b
*/

console.log("\nExemplo 3 - Hoisting de variables declaradas con let: ");
console.log("ReferenceError: Cannot access variable d before initialization");
/*
let c = 1;
console.log(c + " " + d);
let d = 2;
*/

console.log("\nExemplo 4 - Hoisting de variables declaradas con const: ");
console.log("ReferenceError: Cannot access variable f before initialization");
/*
let e = 1;
console.log(e + " " + f);    // erro en execución
let f = 2;
*/

/*
    O comportamento estrano que ocorre co hoisting con var,
    non ocorre con let e const.

    Se se observan con detalle as mensaxes de erro, compróbase que
    se segue a facer hoisting ás variables definidas con let e const,
    (o compilador en ningún momento di que non estén definidas)
    a diferencia é que non devolven undefined cando se usan antes da 
    inicialización.
    E dicir, let e const non permiten empregar variables sen inicializar.
 */

/* 
    Hoisting en scope de bloque
*/
console.log("\nExemplo 5 - Hoisting en scope de bloque: ");

if (true) {
    var saudo1 = "Ola!";
    let despedida1 = "Adeus!";
}
console.log(saudo1);
//console.log(despedida1);    // ReferenceError: despedida is not defined
console.log("ReferenceError: despedida1 is not defined");

/*
    O código anterior e o seguinte devolven exactamente o mesmo:
*/
var saludo2 = undefined;
if (true) {
    saudo2 = "Ola!";
    let despedida2 = "Adeus!";
}
console.log(saudo2);
//console.log(despedida2);    // ReferenceError: despedida is not defined
console.log("ReferenceError: despedida2 is not defined\n");
/*
    Como se observa no exemplo anterior, var non ten scope de bloque,
    e hai que ter coidado porque pode causar erros no código.
 */