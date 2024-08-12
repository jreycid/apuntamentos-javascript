/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la 
 *   sucesión de Fibonacci (la función recibe la posición).
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
