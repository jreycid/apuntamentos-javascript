/**
 * Crear unha función que devolva, nun array,
 * o número menor e o maior do array de entrada
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMaior(arr) {
    let menor = arr[0];
    let maior = arr[0];

    for (let numero of arr) {
        menor = menor < numero ? menor : numero;
        maior = maior > numero ? maior : numero;
    }

    return [menor, maior];
}

let numeros = getMenorMaior(array);
console.log(numeros);
