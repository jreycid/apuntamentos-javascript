/*
    Podes pensar nunha variable/constante, coma nun "almacén cun nome" para gardar datos

    Para declarar constantes e variables en JavaScript existen varias palabras reservadas:

    const   Para declarar unha variable constante (inmutable)
            Unha vez que lle demos un valor, non o poderemos modificar

    let     Forma recomendada de declarar unha variable que poderá cambiar de valor
            As variables definidas con let:
                1. Poderanse empregar sempre e cando se lles teña asociado un valor previamente
                2. Non se poden empregar fora do scope no que foron definidas

    var     Forma non recomendada de declarar unha variable que poderá cambiar de valor
            As variables definidas con var:
                1. Pódense empregar antes de de ser inicializadas e incluso definidas
                2.  Pódense empregar fora do scope no que foron definidas
 */

// CONST
const message1 = "Ola Mundo!";
console.log(message1);

/* O seguinte codigo produciria un erro */
// message1 = 'Adeus Mundo!'
// console.log(message1)

//LET
let message2 = "Ola Mundo!";
console.log(message2);

message = "Adeus Mundo!";
console.log(message);

// LET vs VAR
console.log(text1);
var text1 = "Texto 1";

/* O seguinte codigo produciria un erro */
// console.log(text2);
// let text2 = "Texto 2";

/*
    Responde as seguintes cuestións:

 * Que é camelCase?
 * Que é lowerCase?
 * Que é snake_case?
 * Cal é o estarndar a hora de definir constantes?
 * Que é o scope ou entorno de execución dunha variable?
 * Cal é a diferenza entre scope local e global?
 */
