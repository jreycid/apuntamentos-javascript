/*
    A coacción é a conversión automática ou implícita de valores dun tipo de datos a outro.
    Exemplo: cadea de texto en número.
    A conversión é semellante á coacción porque ambos converten os valores dun tipo de datos a outro,
    pero cunha diferenza fundamental:
        a coerción está implícita
        a conversión pode ser implícita ou explícita.
*/

const valor1 = '5';
const valor2 = 9;
let suma = valor1 + valor2;

console.log(suma);

/*
    No exemplo anterior, JavaScript forzou o 9 de número a cadea de texto e,
    a continuación, concatenou os dous valores dando como resultado unha cadea de texto de 59.
    JavaScript tiña a opción de forzar a cadea de texto ou o número e decidiu usar o número.

    O compilador podería ter forzado o 5 nun número e devolver o valor de 14, pero non o fixo.
    Para devolver ese resultado, terías que facer unha conversion da cadea '5' nun número usando o método Number()
*/

suma = Number(valor1) + valor2;
console.log(suma);