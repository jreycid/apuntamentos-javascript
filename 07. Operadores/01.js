// OPERADORES ARITMETICOS
let a = 2;
let b = 4;

console.log("Operadores aritmeticos");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // operador modulo
console.log(a ** b); // operador potencia

// INCREMENTOS E DECREMENTOS
console.log(++a); // incrementa en un e despois amosao por consola
console.log(a++); //  amosao por consola e despois incrementa en un

console.log(--a); // decrementa a en un e despois amosa a por consola
console.log(a--); //  amosa a por consola e despois decrementa a en un

// OPERADOR DE ASIGNACION
let c = 5;

// OPERADORES ABREVIADPS
c = c + 5;
c += 5;
c -= 5;
c *= 5;
c /= 5;
c %= 5;
c **= 5;

// OPERADORES DE COMPARACION -> devolven un tipo boolean
let d = 5;

console.log("Operadores de comparacion");
console.log(d > 5); // false
console.log(d >= 5); // true
console.log(d < 5); // false
console.log(d <= 5); // true

console.log(d == 5); // true
console.log(d != 5); // false

console.log(d == "5"); // true, xa == solamente compara valores
console.log(d === "5"); // false, xa === compara valores e tipo de dato
console.log(d != "5"); // false
console.log(d !== "5"); // true

// OPERADORES LÓXICOS
console.log("Operadores loxicos");
console.log(true && true);
console.log(true || false);
console.log(!true);

// VALORES FALSY -> aqueles valores que devolven false cando se atopan nun contexto booleano

if (false) {
    // Not reachable
}

if (null) {
    // Not reachable
}

if (undefined) {
    // Not reachable
}

if (NaN) {
    // Not reachable
}

if ("") {
    // Not reachable
}

if ("") {
    // Not reachable
}

if (0) {
    // Not reachable
}

if (-0) {
    // Not reachable
}

if (0n) {
    // cero de tipo BigInt
    // Not reachable
}

/*
    O comportamento antes descrito é posible grazas ao mecanismo de coacción.
    Basicamente, cando o que se espera é un booleano, JS obriga o valor a escribir booleano,
    nunha operación equivalente a chamar a función booleana global nel.

    Polo tanto, o resto dos valores en JavaScript, que non son FALSY, son TRUTHLY.
 */

// OPERADORES BITWISE, operan a nivel de bit
//  0 -> 00000000
//  1 -> 00000001
//  2 -> 00000010
//  3 -> 00000011
//  4 -> 00000100
//  5 -> 00000101
//  6 -> 00000110
//  7 -> 00000111
console.log("Operadores bitwise");
console.log("1 | 4 =", 1 | 4); // devolve 5 -> 00000101
console.log("3 | 5 =", 3 | 5); // devolve 7 -> 00000111

console.log("1 & 4 =", 1 & 4); // devolve 5 -> 00000101
console.log("3 & 5 =", 3 & 5); // devolve 7 -> 00000111

// OPERADOR TERNARIO -> expresion ? 'si é true' : 'si é false'

console.log("Operador ternario");
let idade = 15;
let acceso = idade > 17 ? "Permitir ingreso" : "Non permitir ingreso";
console.log(acceso);

/*
    OPERADOR COALESCENCIA NULA
    
    Devolve o operando da dereita cando o da esquerda é null ou undefined
*/