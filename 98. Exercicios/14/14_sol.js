/**
 * Crear un algoritmo que devolva un
 * array de obxetos en base a pares
 * 
 * Notas: operación inversa o exercicio 13
 *        javascript non garante a orde das propiedades
 */

let pairs = [
    [1, { name: "Nicolas"}],
    [2, { name: "Felipe"}],
    [3, { name: "Chanchito"}],
];

function toCollection (arr) {
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] =  elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);