/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

console.log("\n== EXERCICIO ==");

console.log("\n1. Función sen parámetros e nin retorno:");
function functionSinParametros() {
    console.log("Esta é unha función sen parámetros e sen retorno");
}
functionSinParametros();

console.log("\n2. Función sen parámetros e con retorno:");
function functionConRetorno() {
    console.log("Esta función retorna o valor do número PI.");
    return Math.PI;
}
console.log(functionConRetorno());

console.log("\n3. Función con parámetros e retorno:");
function functionConNumeros(num1, num2) {
    console.log(
        `Esta función retorna a suma dos parámetros: ${num1} y ${num2}`
    );
    return num1 + num2;
}
console.log(functionConNumeros(2, 5));

console.log("\n4. Función dentro doutra función:");
function operaDousNumeros(operacion, num1, num2) {
    function suma(num1, num2) {
        return num1 + num2;
    }
    function resta(num1, num2) {
        return num1 - num2;
    }
    if (operacion === "suma") {
        return suma(num1, num2);
    } else if (operacion === "resta") {
        return resta(num1, num2);
    } else {
        console.log("Operación non válida");
    }
    return operacion(num1, num2);
}
console.log(operaDousNumeros("suma", 2, 5));
console.log(operaDousNumeros("resta", 2, 5));

console.log("\n5. Funcións do sistema:");

let str = "cadea para pasar a maiúsculas";
console.log(str);
console.log(str.toUpperCase());

console.log("\n6. Variables locales e globales:");

function amosaVariableLocal() {
    let mensaxe = "Esta cadea é unha variable local!";
    return mensaxe;
}
console.log(amosaVariableLocal());

let mensaxe = "Esta cadea é unha variable global!";
function amosaVariableGlobal() {
    console.log(`${mensaxe} declarada de forma global.`);
}
amosaVariableGlobal();

console.log("\n== DIFICULTADE EXTRA ==");

function dificultadeExtra(str1, str2) {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(str1 + " " + str2);
        } else if (i % 3 === 0) {
            console.log(str1);
        } else if (i % 5 === 0) {
            console.log(str2);
        } else {
            count++;
            console.log(i);
        }
    }
    return count;
}
console.log(dificultadeExtra("Ola", "Mundo"));
