/*
    A diferenza doutras linguaxes de programación,
    en JavaScript só hai un xeito de representar calquera tipo de número,
    ben sexa enteiro ou con decimais (tocaremos bigInt máis adiante)
*/
console.log(typeof 42);  // 'number'
console.log(typeof 12.2); // 'number'
console.log(typeof -24); // 'number'

// + Sumar
console.log(2 + 2);
// - Restar
console.log(3 - 1);
// * Multiplicar
console.log(3 * 2);
// / Dividir
console.log(4 / 2);
// < Menor que
console.log(10 < 20);
// > Maior que
console.log(40 > 20);
// <= Menor ou igual que
console.log(10 <= 20);
// >= Maior ou igual que
console.log(50 >= 40);
// == Igual que (Comproba os valores)
console.log(40 == 40); // TRUE
console.log(40 == "40"); // TRUE
// === Igual que (Comproba os valores e os tipos)
console.log(40 === 40); // TRUE
console.log(40 === "40"); // FALSE
// != Non é igual que
// !== O mesmo que ===, comproba valor e tipo
console.log(30 !== 30);

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