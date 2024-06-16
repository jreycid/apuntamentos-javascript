/*
 * OPERACIONS:
 * typeof
 * NaN
 * isNaN()
 * toString()
 * toString()
 * .toFixed()
 */

// typeof
let num = 20;
console.log(typeof num);
// NaN
const notNumber = 2 + "asfda";
console.log(typeof notNumber);
// isNaN()
isNaN(NaN);
console.log(isNaN(NaN));
console.log(isNaN("whatever"));
console.log(isNaN("12"));
console.log(isNaN(12));
// toString()   para pasar de número a string
let number = 100.1164123412;
console.log(number.toString());
console.log(typeof number.toString());
// .toFixed()   para redondear ou recortar decimales dun número
console.log(number.toFixed);
console.log(number.toFixed(2));
