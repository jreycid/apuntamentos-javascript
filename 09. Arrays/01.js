/* 
    Un array é un conxunto de datos ordenados e non necesariamente do mesmo tipo
    O índice da primeira posición é o 0

    Os arrays en JavaScript son obxectos
    JavaScript, ofrece un bo número de métodos para o seu manexo.
*/

/*
    1. Declaración de arrays
*/
// Podemos dotalos de contino no momento da declaración:
var arrayProba = [
    "Primer elemento",
    "Segundo elemento",
    11,
    true,
    { key: "Este é o quinto elemento" },
    null,
];

console.log("\n1. Declaración de arrays:");
var cores = new Array("vermello", "azul", "verde");
console.log(cores);

// Ou podemos declaralos baleiros e despois enchelos
var cores = new Array(3);
cores[0] = "vermello";
cores[1] = "azul";
cores[2] = "verde";
console.log(cores);

/*
    2. Acceso os elementos dun array:
*/
console.log("\n2. Acceso os elementos dun array:");
console.log("cores[0]: " + cores[0]);
console.log("cores[1]: " + cores[1]);
console.log("cores[2]: " + cores[2]);
console.log("cores[3]: " + cores[3]); // undefined

/*  
    3. Os Arrays en JavaScript son obxectos: 
*/
console.log(
    "\n3. Os Arrays en JavaScript son variables de tipo:",
    typeof cores
);

/*
    4. Métodos dos obxectos Array en JavaScript:
 */
console.log("\n4. Métodos dos obxectos Array en JavaScript:");
console.log(cores);

// 4.1 Método push()
// Engadir un elemento o final dun array:
console.log("\n4.1 push():");
cores.push("amarelo");
console.log(cores);

// 4.2 Método unshift()
// Engadir un elemento o principio dun array:
console.log("\n4.2 unshift():");
cores.unshift("laranxa");
console.log(cores);

// 4.3 Método pop()
// Eliminar un elemento o final dun array:
console.log("\n4.3 pop():");
cores.pop("amarelo");
console.log(cores);

// 4.4 Método shift()
// Eliminar un elemento o principio dun array:
console.log("\n4.4 shift():");
cores.shift("laranxa");
console.log(cores);

// 4.5 Método splice()
// Eliminar un elemento nunha posición intermedia dun array:
console.log("\n4.5 splice():");
let coresEliminadas = cores.splice(1, 1);
console.log(cores);
console.log(coresEliminadas);

// 4.6 Método concat()
// Combinar dous array nun novo array, sen modificar os arrays de partida
console.log("\n4.6 concat():");
var novasCores = cores.concat(coresEliminadas);
console.log(novasCores);

// 4.7 Método indexOf()
// Obter o índice dun elemento dun array:
console.log("\n4.7 indexOf():");
console.log("O azul atópase na posición:", novasCores.indexOf("azul"));
console.log("O amarelo atópase na posición:", novasCores.indexOf("amarelo"));

// 4.8 Método includes()
// Obter todos os elementos dun array nun único string
console.log("\n4.8 includes():");
console.log("azul:", novasCores.includes("azul"));
console.log("amarelo:", novasCores.includes("amarelo"));

// 4.9 Método join()
// Obter todos os elementos dun array nun único string
console.log("\n4.9 join():");
console.log(novasCores.join());

// 4.10 Método reverse()
// Dar a volta os elementos dun array:
console.log("\n4.10 reverse():");
console.log(novasCores.reverse());

// 4.11 Método slice()
// Devolve unha parte do array orixinal nun novo array,
// empezando por inicio e rematando en fin (sen incluílo)
console.log("\n4.11 slice():");
console.log(novasCores.slice(0, 1));

// 4.12 Método map()
// É un método iterativo
// É dicir, executa a función proporcionada unha vez por cada elemento do array.
// Devolve un novo array cos resultados da chamada á función proporcionada,
// que é aplicada a cada un dos elementos do array orixinal.

var numeros = [1, 4, 9, 16, 25];

console.log("\n4.12 map():");
let raices = numeros.map((num) => Math.sqrt(num));
console.log("numeros", numeros);
console.log("raices:", raices);

// 4.13 Método forEach()
// É un método iterativo
// É dicir, executa a función proporcionada unha vez por cada elemento do array.
// Non modifica o array orixinal
// A diferencia de map() non devolve un novo array

console.log("\n4.13 forEach():");
raices = numeros.forEach((num) => Math.sqrt(num));
numeros.forEach((num) => Math.sqrt(num));
console.log("numeros", numeros);
console.log("raices:", raices);
numeros.forEach((num) => console.log(Math.sqrt(num)));

/*
    Aclaracións sobre foreach e map:

    Ainda que hai formas de facelo, nunca, nunca,
    se debe modificar a variable orixinal sobre a cal
    se está a iterar.

    Se se necesita facer unha transformación sobre os datos
    da variable orixinal, entón empregarase map(), en caso
    contrario, débese empregar forEach(), tanto por motivos
    de lóxica como de rendemento.
*/

// 4.14 Método filter()
// É un método iterativo
// Crea un novo array con todos os elementos que cumpren
// a condición implementada pola función dada.
console.log("\n4.14 filter():");
const multiplosDous = numeros.filter((num) => num % 2 === 0);
console.log("numeros", numeros);
console.log("multiplosDous:", multiplosDous);

// 4.15 Método every()
// Comproba se todos os elementos do array pasan a proba implementada pola función proporcionada.
// Devolve un valor booleano
console.log("\n4.15 every():");
let every = numeros.every((num) => num > 0);
console.log("Todos os números son maiores que 0?", every);
every = numeros.every((num) => num > 10);
console.log("Todos os números son maiores que 10?", every);

// 4.16 Método some()
// Comproba se algún dos elementos do array pasa a proba implementada pola función proporcionada.
// Devolve un valor booleano
console.log("\n4.16 some():");
let some = numeros.some((num) => num % 3 === 0);
console.log("Hai algún número múltiplo de 3?", some);
some = numeros.some((num) => num % 7 === 0);
console.log("Hai algún número múltiplo de 7?", some);

// 4.17 Método find()
// Devolve o primeiro elemento do array pasa a proba implementada pola función proporcionada.
console.log("\n4.17 find():");
let find = numeros.find((num) => num % 3 === 0);
console.log("Primeiro número múltiplo de 2:", find);
find = numeros.find((num) => num % 7 === 0);
console.log("Primeiro número múltiplo de 7:", find);

// 4.18 Método findIndex()
// Devolve o primeiro elemento do array pasa a proba implementada pola función proporcionada.
console.log("\n4.18 findIndex():");
let findIndex = numeros.findIndex((num) => num % 3 === 0);
console.log("Primeiro número múltiplo de 2:", findIndex);
findIndex = numeros.findIndex((num) => num % 7 === 0);
console.log("Primeiro número múltiplo de 7:", findIndex);

// 4.19 Método sort()
// Ordena los elementos dun array e devolve ese mesmo array ordenado.
// A ordenación por defecto corresponde coa posición do valor do string
// dacordo ao seu valor Unicode
console.log("\n4.19 sort():");
console.log(numeros);
console.log("ordenación por defecto:", numeros.sort());
numeros = [1, 4, 9, 16, 25];
console.log(
    "ordenación descendente:",
    numeros.sort((a, b) => (a > b ? -1 : 1))
);

// 4.20 Método reduce()
// Executa unha función reductora sobre cada elemento do array.
// O valor devolto polo método, é un único elemento,
// que pode ser un array, un numero, un string, un obxecto, etc.
console.log("\n4.20 reduce():");
let reduced = numeros.reduce((acumulador, num) => acumulador + num);
console.log("A suma dos números do array é:", reduced, "\n");
