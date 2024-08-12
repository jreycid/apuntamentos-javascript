/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

/*
    OPERADORES DE Asignación
*/

//Asignación
var x = 4;
var y = 3;
console.log("Asignación:", x, y);

//Asignación de suma
x = x + y;
console.log("suma 1:", x);

x += y;
console.log("suma 2:", x);

//Asignación de resta
x = x - y;
console.log("resta 1:", x);

x -= y;
console.log("resta 2:", x);

//Asignación de multiplicación
x = x * y;
console.log("multiplicación 1:", x);
x *= y;
console.log("multiplicación 2:", x);

//Asignación de división
x = x / y;
console.log("división 1:", x);
x /= y;
console.log("división 2:", x);

//Asignación de resto
let resto = x % y;
console.log("resto:", resto);

//Asignación de exponente
let potencia = Math.pow(x, y);
console.log(`${x} elevado a ${y} = ${potencia}`);

//Asignación AND lóxico
x = x && (x = y);
console.log("AND lóxico 1:", x);
x && (x = y);
console.log("AND lóxico 2:", x);

//Asignación OR lóxico
x = x || (x = y);
console.log("OR lóxico 1:", x);
x || (x = y);
console.log("OR lóxico 2:", x);

x !== null && x !== undefined ? x : (x = 0);
console.log("Anulación lóxico :", x);

/*
    OPERADORES DE COMPARACIóN
*/
var a = 4;
var b = 8;
//Igual
console.log("Igual: ", a == b);

//Non é igual
console.log("Non é igual: ", a != b);

//Igualdade estrita
console.log("Igualdade estrita: ", a === b);

//Desigualdade estrita
console.log("Desigualdade estrita: ", a !== b);

//Maior que
console.log("Maior que: ", a > b);

//Maior ou igual que
console.log("Maior ou igual que: ", a >= b);

//Menor que
console.log("Menor que: ", a < b);

//Menor ou igual que
console.log("Menor ou igual que: ", a <= b);

/*
    PERADORES ARITMÉTICOS
*/
var num1 = 10;
var num2 = 4;
//Resto
console.log("Resto: ", num1 % num2);

//Incremento
console.log("Incremento antes de imprimir: ", ++num1);
console.log("Incremento despois de imprimir: ", num1++);

//Decremento
console.log("Decremento antes de imprimir: ", --num1);
console.log("Decremento despois de imprimir: ", num1--);

//Negación unitaria
console.log("Negación unitaria: ", -num1);

//Positivo unitaria
console.log("Negación unitaria: ", +num1);

//Potencia
console.log("Exponenciación: ", Math.pow(num1, num2));

// *** OPERADORES BIT A BIT ***
var bit1 = 6;
var bit2 = 8;

//Desprazamento á esquerda
console.log("Desprazamento á esquerda:", bit1 << bit2);

//Desprazamento á dereita
console.log("Desprazamento á dereita:", bit1 >> bit2);

//AND
console.log("AND bit a bit:", bit1 & bit2);

//OR
console.log("AND bit a bit:", bit1 | bit2);

//XOR
console.log("AND bit a bit:", bit1 ^ bit2);

//NOT
console.log("AND bit a bit:", bit1, ~bit2);

// *** OPERADORES LÓXICOS ***
var exp1 = true;
var exp2 = false;

//AND lóxico
console.log("AND lóxico: ", exp1 && exp2);

//OR lóxico
console.log("OR lóxico: ", exp1 || exp2);

//NOT lóxico
console.log("NOT lóxico: ", !exp1);

/*
    OPERADORES DE CADEA
*/
console.log("unha " + "cadea");

/*
    OPERADOR CONDDICIONAL TERNARIO
*/
var result = true ? true : false;
console.log(result);
var user = {
    id: "1",
    name: "Jose",
    age: 39,
};

console.log('Existe "age" no obxecto user?: ', "age" in user);
console.log('Existe "country" no obxecto user?: ', "country" in user);

/*
    ESTRUCTURAS DE CONTROL
*/

// CONDICIONAL

var num = 25;
// IF-ELSE
if (num > 18) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}

// SWITCH
switch (num) {
    case 20:
        console.log("É 20");
        break;
    case 25:
        console.log("É 25");
        break;
    case 30:
        console.log("És 30");
        break;
    default:
        console.log("Default");
        break;
}

var i = 10;
var w = 15;

// WHILE
while (i < w) {
    i++;
    console.log("Novo valor de i:", i);
}

// DO-WHILE
i = 10;
do {
    i++;
    console.log("Novo valor de i:", i);
} while (i < w);

// FOR
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log("Novo valor de i:", i_1);
}

/*
    EXERCICIO EXTRA
*/
console.log("EJERCICIO EXTRA");

for (var i_2 = 10; i_2 <= 55; i_2++) {
    if (i_2 % 2 === 0) {
        if (i_2 === 16) {
            console.log("Ignorar");
        } else if (i_2 % 3 === 0) {
            console.log("Multiplo de 3");
        } else {
            console.log(i_2);
        }
    } else {
        console.log("Non és par");
    }
}
