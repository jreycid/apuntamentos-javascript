/*
 * EXERCICIO:
 * - Crear exemplos de funcións básicas que representen as diferentes
 * posibilidades da linguaxe:
 * Sen parámetros nin retorno, con un ou varios parámetros, con retorno...
 * - Comproba se podes crear funcións dentro das funcións.
 * - Utiliza algún exemplo de funcións xa creadas na linguaxe.
 * - Comprobar o concepto de variable LOCAL e GLOBAL.
 * - Debes imprimir o resultado de todos os exemplos a través da consola.
 *
 * DIFICULTADE EXTRA (opcional):
 * Crea unha función que reciba dous parámetros de cadea de texto e devolva un número.
 * - A función imprime todos os números do 1 ao 100. Tendo en conta que:
 * - Se o número é múltiplo de 3, mostra a cadea de texto do primeiro parámetro.
 * - Se o número é múltiplo de 5, mostra a cadea de texto do segundo parámetro.
 * - Se o número é múltiplo de 3 e 5, mostra as dúas cadeas de texto concatenadas.
 * - A función devolve o número de veces que se imprimiu o número en lugar dos textos.
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
