/*
    OLLO
        A sintaxe Spread pode ser aplicada soamente a obxectos iterables:

            var obj = {'key1': 'value1'};
            var array = [...obj]; // TypeError: obj is not iterable
*/

/*
    Parámetros REST

    Unha función pode invocarse con calquera número de argumentos,
    sin importar o número de parámetros da súa definición,
    tal como se amosa no seguinte exemplo:
*/
console.log("\n1. Parámetros REST: ");

function suma(a, b) {
    return a + b;
}

console.log(suma()); // imprime NaN
console.log(suma(1, 2, 3, 4, 5)); // imprime 3, o resto de parámetros non se usa

// Empregando parámetros rest, pódese reescribir a función anterior
// para indicar que pode recibir un número inteterminado de párametros,
// que serán almacenados nun array:

function sumaAll(...args) {
    let sum = 0;

    args.forEach((arg) => (sum += arg));

    return sum;
}

console.log(sumaAll(1, 2, 3, 4, 5)); // imprime 15

// tamén e posible definir unha función que reciba parámetros de forma mixta,
// nese caso, o último párametro ten que ser sempre o parámetro rest:
function sumaAllMix(a, b, ...args) {
    let sum = a + b;

    args.forEach((arg) => (sum += arg));

    return sum;
}

console.log(sumaAllMix(1, 2, 3, 4, 5)); // imprime 15

/*
    Operador Spread
*/
console.log("\n2. Operador Spread: ");

console.log("\n2.1 new Object():");
/*
    Cando se chama a un constructor con new, no é posibel pasarlle directamente un arary,
    sen embargo, empregando o operador spread, podemos pasarlle un array "esparcido"
 */
let camposData = [1970, 0, 1];
let data = new Date(...camposData);
console.log(data);

console.log("\n2.2 Facer unha copia dun array");
var arr = [1, 2, 3];
var arr2 = [...arr]; // equivalente a arr.slice()
console.log(arr2);

console.log("\n2.3 Creación un array partindo doutro");
var arr = [1, 2, 3];
var arr2 = [0, ...arr, 4, 5]; // sen empregar push, splice, concat, etc
console.log(arr2);

console.log("\n2.4 Concatenación de arrays");
// Sen a sintaxe spread
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = arr1.concat(arr2);

// Coa sintaxe spread:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr2);

console.log("\n2.5 Copia superficial dun obxecto");
var persoa = { nome: "Olalla", idade: 30 };
// sintaxe mais curta que Object.assign()
var persoaClonada = { ...persoa };
console.log(persoaClonada, "\n");
