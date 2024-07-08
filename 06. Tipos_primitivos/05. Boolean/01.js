/*
 * Este tipo de datos só permite dous valores: verdadeiro ou falso.
 * Son comúns cando facemos comparacións ou expresións nos nosos programas.
 * Dentro de calquera avaliación (por exemplo, dentro dun if),
 * JavaScript converte o resultado da avaliación en booleano.
 */

console.log(Boolean(1));
console.log(Boolean("Whatever"));
console.log(Boolean(3.14));
console.log(Boolean(100 > 5));
console.log(Boolean(1 < 100));
console.log(Boolean("1" == 1)); // compara o valor das variables

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("1" === 1)); // compara o valor e tipo das variables
