/*
    Podes pensar nunha variable/constante, coma nun "almacén cun nome" para gardar datos

    Para declarar constantes e variables en JavaScript existen varias palabras reservadas:

    const   Para declarar unha variable constante (inmutable)
            Unha vez que lle demos un valor, non o poderemos modificar
            É obrigatorio asignarlle un valor no momento da súa definición

    let     Forma recomendada de declarar unha variable que poderá cambiar de valor
            As variables definidas con let:
                1. Poderanse empregar sempre e cando se lles teña asociado un valor previamente
                2. Non se poden empregar fora do scope no que foron definidas

    var     Forma non recomendada de declarar unha variable que poderá cambiar de valor
            As variables definidas con var:
                1. Pódense empregar antes de de ser inicializadas e incluso definidas
                2. Pódense empregar fora do scope no que foron definidas

    Convencións e nomenclatura:

    En JavaScript, hai diferentes nomenclaturas para nomear variables:

        1. camelCase

            É a forma máis común de nomear variables en JavaScript
            Consiste en escribir a primeira palabra en minúscula e
            as seguintes palabras coa súa primeira letra en maiúscula

            Por exemplo: let camelCase = 1

        2. snake_case

            Consiste en escribir todas as palabras en minúsculas e
            separalas con guións baixos.

            Por exemplo: let snake_case = 1

        3. SCREAMING_CASE.

            Consiste en escribir todas as palabras en maiúscula e
            separalas con guións baixos.
            
            Por exemplo: const SCREAMING_CASE = 1

        NOTAS:

            1. É moi común empregar camelCase para variables,
                SCREAMING_CASE para constantes e
                snake_case para nomes de arquivos.

            2. const e let introducíronse con ES6 (ES2015), antes
                soamente existía var. Hoxe en día o uso de var está desaconsellado.
 */

// CONST
const mensaxe1 = "Ola Mundo!";
console.log(mensaxe1);

/* O seguinte codigo produciria un erro */
// mensaxe1 = 'Adeus Mundo!'
// console.log(mensaxe1)

//LET
let mensaxe2 = "Ola Mundo!";
console.log(mensaxe1);

mensaxe2 = "Adeus Mundo!";
console.log(mensaxe2);

// LET vs VAR
console.log(texto);
var texto = "texto";

/* O seguinte codigo produciria un erro */
// console.log(texto);
// let texto = "texto";

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

/*
    const e let: scope de bloque
    var: scope de función

    Verase o scope en próximos apartados
 */

/*
    Responde as seguintes cuestións:

 * Que é camelCase?
 * Que é lowerCase?
 * Que é snake_case?
 * Cal é o estarndar a hora de definir constantes?
 * Que é o scope ou entorno de execución dunha variable?
 * Cal é a diferenza entre scope local e global?
 */
