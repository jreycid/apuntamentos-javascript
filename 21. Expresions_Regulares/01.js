/*

1. INTRODUCCIÓN AS EXPRESIÓNS REGULARES
---------------------------------------
    Que son
        Describen patróns en cadéas de texto. Poden incluir bandeiras de forma opcional.
        Atópanse incluidas na maioría de linguaxes de programación.

    Uso
        Empréganse para buscar, ler e reemplazar información de cadeas de texto.
        Estrutura: /expresión-regular/[parámetros]

    Ejemplo:  (busca 3 a seguidas. g indica que es global. i indica que no diferencia may y min).
        /(aaa)/gi (Coincidencia: caaandy, cAAAndy, caAAndy)

2. MÉTODOS EMPREGADOS CON EXPRESIÓNS REGULARES
----------------------------------------------
    search regexObj.test(cadea)

        Permítenos saber se o devandito patrón está presente nunha cadea ou non.
        Devolve o índice da primeira coincidencia e, se non o hai, devolve -1.
        Similar ao método indexOf de Strings.

    exec regexObj.exec(cadea)

        Realiza unha busca das coincidencias da expresións regular
        nunha cadea e devolve un array ou null.

    test regexObj.test(cadea)

        Realiza unha busca dunha ocorrencia da expresión regular
        na cadea e devolve un booleano.

    match cadena.match(regexp)

        Obtén todas as ocorrencias dunha expresión regular nun string.

3. REGRAS DAS EXPRESIONES REGULARES
-----------------------------------
    Punto “.”
        Interprétase como calquera carácter

    Contra barra “\”
        Úsase para facer que o seguinte carácter da expresión adquira un
        significado ou deixe de telo.
        Por exemplo, cando se usa antes dun punto, xa non ten o seu
        significado orixinal e tómao de forma literal.

            \t: Representa un tabulador.

            \r: Representa  "retorno un de carro".

            \n: Representa  "nova unha liña".

            \d: representa un díxito do 0 o 9.

            \w: representa calquera carácter alfanumérico (incluidos os guións baixos _).

            \s: representa un espacio en branco

    ()   Agrupación de parte dunha expresión

    []    Úsase para crear grupos de caracteres

    |   Utilízase para indicar varias opciones

    ^    Indica o principio dunha cadea

    $    Indica o final dunha cadea

    .    Calquera carácter excepto salto de liña

    ?    0-1 ocurrencias da expresión

    +    1-n ocurrencias da expresión

    *    0-n ocurrencias da expresión

*/

/*
    Exemplo 1. Buscar o caracter / na cadena "AC/DC"
*/
var banda = "AC/DC";
var expReg = /\//g; //ignore case global multiline

console.log("Exemplo 1: ");
console.log(banda.search(expReg)); // o 2 da saida de consola corresponde o índice da / na cadena.

/*
    Exemplo 2. Comprobar se o texto contén minúsculas
*/
var texto = "ola mundo";
var expReg = /[a-z]$/g;

console.log("Exemplo 2: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 3. Comprobar se o texto contén minúsculas
*/
var texto = "Ola mundo";
var expReg = /[a-z]$/g;

console.log("Exemplo 3: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 4. Que fai?
*/
var texto = "Ola mundo";
var expReg = /^[a-z]$/g;

console.log("Exemplo 4: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 5.
*/
var texto = "Ola";
var expReg = /Ola/;

console.log("Exemplo 5: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 6.
*/
var texto = "Ola";
var expReg = /Oli/;

console.log("Exemplo 6: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 7.
*/
var texto = "Ola";
var expReg = /Ol./;

console.log("Exemplo 7: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 8.
*/
var texto = "Olaaaaaaa!";
var expReg = /Ol./;

console.log("Exemplo 8: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 9.
*/
var texto = "Ola.";
var expReg = /Ola./;

console.log("Exemplo 9: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 10. 
*/
var texto = "Ola.";
var expReg = /Ola\./;

console.log("Exemplo 10: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 11. Comproba se a palabra remata en s
*/
var texto = "Benvido";
var expReg = /s+$/;

console.log("Exemplo 11: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    Exemplo 12
*/
var texto = "Benvidos";
var expReg = /s+$/;

console.log("Exemplo 12: ");
console.log(texto.search(expReg));
console.log(expReg.test(texto));

/*
    OUTROS EXEMPLOS
 */
// Exemplo de validación de teléfono:
let telefono = /^[6789][0-9]{8}$/;

telefono.test ('123456789');  // false
telefono.test ( '95566622');  // false
telefono.test ('95566622a');  // false
telefono.test ('609123456');  // true

// Exemplo de validación de código postal:
let codigoPostal = /^[0-9]{4,5}$/;

codigoPostal.test ( '14500');  // true
codigoPostal.test (  '9500');  // true
codigoPostal.test ('A11450');  // false
codigoPostal.test (     '1');  // false

// Exemplo de validación de URLs:
let url = /^(http|ftp|https)\:\/\/[a-z0-9\_-]+(\.[a-z0-9\_-]+)*$/

url.test ('https://google.es');             // true
url.test ('ftp://ftp.rediris.es');          // true
url.test ('file:///bin/bash');              // false
url.test ('https://google.es/index.html');  // false

// Exemplo de validación de e-mail:
let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

email.test ('jose@gmail.com');            // true
email.test ('pepe_lopez@ventas.tienda.com');  // true
email.test ('pepe#lopez@tienda.com');         // false
email.test ('pepe_lopez@ventas/tienda.com');  // false

/*
    Exercicios propostos:

        1. Aceptaría de A a Z, de a a z e de 0 a 9
        2. Só aceptaría entre 6 e 12 valores
        3. Unha letra entre A e C (maiúsculas ou minúsculas)
        4. Tres díxitos numéricos
        5. Ningún, un ou varios díxitos numéricos seguidos dunha a
        6. Comeza con a
        7. Remata con a
        8. Calquera carácter que non sexa a
        9. Calquera carácter seguido dunha a ou b ou c ou d

    Solucións:

        1. [A-Za-z0-9]
        2. {6,12}
        3. [ABCabc]{1}
        4. [0-9]{3}
        5. \d*a
        6. ^a
        7. a$
        8. [^a]
        9. .[abcd]
*/
