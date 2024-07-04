/**
 * Crear unha función que devolva a cantidade
 * de números positivos dun array
 */
let array = [2, -5, 15, -5, -100, 55, -50];

function contaPositivos(arr) {
    let numPositivos = 0;
    for (elemento of arr){
        if (elemento > 0){
            numPositivos++;
        }
    }
    return numPositivos;
}

let resultado = contaPositivos(array);
console.log(resultado);