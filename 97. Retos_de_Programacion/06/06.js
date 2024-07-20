/*
 * EXERCICIO:
 * Comprender o concepto de recursividade creando unha función recursiva
 * que imprima os números do 100 ao 0.
 *
 * DIFICULTADE EXTRA (opcional):
 * Utiliza o concepto de recursividade para:
 * - Calcular o factorial dun número específico (a función recibe ese número).
 * - Calcular o valor dun elemento específico (segundo a súa posición) na
 *   secuencia de Fibonacci (a función recibe a posición).
 */

/*
    EXERCICIO
*/
console.log("\nNúmeros do 100 ao 0:");

const mostrarNumeros = (n) => {
    if (n < 0) return;

    console.log(n);
    mostrarNumeros(n - 1);
};

mostrarNumeros(100);

/*
    DIFICULTADE EXTRA
*/
console.log("\nFactorial:");
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

let num = 5;
console.log("O factorial de", num, "é", factorial(num));

console.log("\nFibonacci:");
const fibonacci = (n) =>
    n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

let pos = 7;
console.log("O número de Fibonacci na posición", pos, "é", fibonacci(pos));

console.log();
