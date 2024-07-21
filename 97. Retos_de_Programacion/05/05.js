/*
 * EXERCICIO:
 * - Mostra exemplos de asignación de variables por valor e por referencia,
 *   dependendo do tipo de dato.
 * - Mostra exemplos de funcións con variables que se pasan por valor e
 *  por referencia, e como se comportan en cada caso cando se modifican.
 *
 * DIFICULTADE EXTRA (opcional):
 * Crear dous programas que reciban cada un dous parámetros:
 * - Un programa recibe os parámetros por valor.
 * - O outro programa recibe os parámetros por referencia.
 * Os programas intercambian o valor dos parámetros recibidos.
 * Imprimir os valores das variables antes e despois das chamadas.
 * Explicar os resultados obtidos.
 */

/*
    1. Tipos por valor en JavaScript:

        - Todos os tipos primitivos.
        - Almacenan en memoria o valor real da variable.
        - Cando se pasa un tipo primitivo como argumento a unha función,
        pásase unha copia do valor, polo tanto, os cambios realizados
        no parámetro dentro da función non afectan ao valor orixinal fóra da función.
        - Un proceso análogo ocorre cando asignamos dúas variables primitivas.

    2. Tipos por referencia en JavaScript:

        - Arrays, obxectos e funcións.
        - Almacenan en memoria unha referencia á posición de memoria que contén a variable.

        - Cando se pasa unha variable dun destes tipo como argumento a unha función, estase
        a pasar unha referencia (dirección) ao espazo de memoria que ocupa a variable orixinal.
        Polo tanto, os cambios realizados no parámetro dentro da función,
        afectan ao valor orixinal fóra da función.
        - Un proceso análogo ocorre cando asignamos dúas variables dos tipos arriba indicados.
*/

/* 
    EXERCICIO
*/
console.log("\n1. Exercicio:");
// 1. Asignación de variables por valor
let a = 5;
let b = a;

a = 10;
console.log(a);
console.log(b);

// 2. Asignación de variables por referencia
let obx1 = { name: "Rosalía" };
let obx2 = obx1;

obx1.name = "Sabela";
console.log(obx1.name);
console.log(obx2.name);

// 3. Paso de variables a funcións por valor
function pasoPorValor(x) {
    x = 10;
}

let num = 5;
pasoPorValor(num);
console.log(num);

// 4. Paso de variables a funcións por referencia
function pasoPorReferencia(obj) {
    obj.nome = "Carlos";
}

let obxecto = { name: "Alicia" };
pasoPorReferencia(obxecto);
console.log(obxecto.nome);

/* 
    DIFICULTADE EXTRA
*/
console.log("\n2. Dificultade extra:");

let valor1 = 10;
let valor2 = 20;

console.log("2.a Paso de parámetros por valor:");

console.log("Orixinais antes da chamada á función:", valor1, valor2);
intercambioPorValor(valor1, valor2);
console.log("Orixinais despois da chamada á función:", valor1, valor2, "\n");

let obxA = { value: "Hola" };
let obxB = { value: "Mundo" };

console.log("2.b Paso de parámetros por referencia:");

console.log("Orixinais antes da chamada á función:", obxA, obxB);
intercambioPorReferencia(obxA, obxB);
console.log("Orixinais despois da chamada á función:", obxA, obxB, "\n");

function intercambioPorValor(x, y) {
    let temp = x;
    x = y;
    y = temp;
    console.log("Intercambiados na función:", x, y);
}

function intercambioPorReferencia(obx1, obx2) {
    let temp = obx1.value;
    obx1.value = obx2.value;
    obx2.value = temp;
    console.log("Intercambiados na función:", obx1, obx2);
}
