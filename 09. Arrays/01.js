/* 
    Un array é un conxunto de datos ordenados por posicións
    Os datos que conten poden ser de calquera tipo, non necesariamente o mesmo
    O índice da primeira posición é o 0

*/

// PODEMOS DARLLE CONTIDO O ARRAY NO MOMENTO DA DECLARACIÓN
var arrayProba = [
    "Primer elemento",
    "Segundo elemento",
    11,
    true,
    { key: "Este é o quinto elemento" },
    null,
];

console.log("");
console.log("Contido de arrayProba: ");
console.log(arrayProba);
console.log("");

var persoa = ["Xoan", 30, true];
console.log("Contido de persoa: " + persoa);
console.log("");

// OU PODEMOS DECLARALO PRIMEIRO E ENCHELO DESPOIS
var cores = new Array(3);
cores[0] = "vermello";
cores[1] = "azul";
cores[2] = "verde";

// PODEMOS MOSTRAR O CONTIDO DO NOSO ARRAY DA SEGUINTE MANEIRA:
console.log("Contido de cores:  ");
console.log("cores[0]: " + cores[0]);
console.log("cores[1]: " + cores[1]);
console.log("cores[2]: " + cores[2]);
console.log("");
// Descomenta a seguinte liña e comproba o que pasa
//console.log('cores[3]: ' + cores[3])

// OU TAMÉN:
var cores = new Array("vermello", "azul", "verde");
console.log("Contido de cores:  ");
console.log(cores);
console.log("");

/*  
    En JavaScript case todo son obxectos
*/
console.log("Cal é o tipo do array cores?");
console.log(typeof cores);
console.log("");
/*
    Os obxectos encapsulan métodos.
    Como xa vimos en exemplos anteriores.
    Por este motivo podemos facer cousas como a seguinte:
 */

console.log("Operación sobre o array cores: " + cores);
// Engadir un elemento o final dun array:
cores.push("amarelo");
console.log(cores);
// Engadir un elemento o principio dun array:
cores.unshift("laranxa");
console.log(cores);
// Eliminar un elemento o final dun array:
cores.pop("amarelo");
console.log(cores);
// Eliminar un elemento o principio dun array:
cores.shift("laranxa");
console.log(cores);
// PARA ENGADIR E ELIMINAR ELEMENTOS DUN ARRAY EN POSICIÓNS
// INTERMEDIAS, EMPRÉGASE O MÉTODO .SPLICE
// INVESTIGA POLA TÚA CONTA COMO SE EMPREGA.

//Obter o índice dun elemento dun Array:
froitas = ["Mazá", "Plátano", "Fresa"];

console.log("");
console.log(froitas);
console.log("O Plátano atópase na posición:", froitas.indexOf("Plátano"));

/*
    Método map()

    Crea un novo array cos resultados da chamada á función indicada,
    aplicada a cada un dos elementos do array orixinal.
*/
let numeros = [1, 4, 9, 16, 25];

console.log("\nMétodo map() executado sobre o array numeros: ");
let raices = numeros.map((num) => Math.sqrt(num));
console.log("numeros", numeros);
console.log("raices:", raices, "\n");

/*
    Método forEach()

    Ao igual que map(), é un método iterativo, e dicir,
    executa a función proporcionada unha vez por cada elemento do array.
    Sin embargo a diferencia de map() non devolve un novo array
    
*/
console.log("Método forEach() executado sobre o array numeros: ");

raices = numeros.forEach((num) => Math.sqrt(num));
numeros.forEach((num) => Math.sqrt(num));
console.log("numeros", numeros);
console.log("raices:", raices);

/*
    Sobre foreach e map:

    Ainda que hai formas de facelo, nunca, nunca, 
    se debe modificar a variable orixinal sobre a cal
    se está a iterar.

    Se se necesita facer unha transformación sobre os datos
    da variable orixinal, entón empregarase map(), en caso
    contrario, débese empregar forEach(), tanto por motivos
    de lóxica como de rendemento.
*/

/*
    Método reduce()

    Executa unha transformación sobre un array de orixe, ao igual que map().
    A diferencia é que a variable de saída non ten que ser un array co mesmo
    número de elementos co de orixe.
    No caso de reduce(), o valor devolto polo método, é un único elemento,
    que pode ser un array, un numero, un string, un obxecto, etc.

    Exemplo de caso de uso: sumar os importes dunha lista da compra.

    const transformacion = (acumulador, eltoActual) => acumulador + eltoActual)
    array.reduce(transformacion, valorInicial)
 */
console.log("Exemplos de uso de reduce:\n");

console.log("1. Sumar os elementos do array numeros:");
let resultado = numeros.reduce((sum, val) => sum + val, 0);
console.log(resultado, "\n");

console.log("2. Obter o valor mais recente dun array de datas:");
const datas = [
    "2019/06/01",
    "2018/06/01",
    "2019/09/01", // Esta é a data mais recente
    "2018/09/01",
].map((v) => new Date(v));

const dataRecente = datas.reduce((max, d) => (d > max ? d : max), datas[0]);
console.log(dataRecente, "\n");

console.log("3. Sumar os valores dunha propiedade concreta dun array:");
const Items = [
    { descripcion: "Ovos", cantidade: 1, prezo: 3, total: 3 },
    { descripcion: "Queixo", cantidade: 0.5, prezo: 5, total: 2.5 },
    { descripcion: "Xamón", cantidade: 2, prezo: 6, total: 12 },
];
const total = Items.reduce((sum, li) => sum + li.total, 0);
console.log(total, "\n");