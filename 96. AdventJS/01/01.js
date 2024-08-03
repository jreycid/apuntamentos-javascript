/*
    En la fábrica de juguetes del Polo Norte,
    cada juguete tiene un número de identificación único.

    Sin embargo, debido a un error en la máquina de juguetes,
    algunos números se han asignado a más de un juguete.

    ¡Encuentra el primer número de identificación que se ha repetido,
    donde la segunda ocurrencia tenga el índice más pequeño!

    En otras palabras, si hay más de un número repetido,
    debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.
    Si no hay números repetidos, devuelve -1.

    [1, 2, 3, 4] -> -1
    [5, 1, 5, 1] -> 5
    [2, 1, 3, 5, 3, 2] -> 3

*/

function findFirstRepeated(gifts) {
    /*
        find: Devolve o valor do primeiro elemento do array que cumple coa función.

            gift: cada un dos elementos do array
            index: o indice de cada elemento do array
            arr: o array completo

        indexOf: Devolve o índice da última aparición do parámetro no array 
                ou -1 se non está presente.
    */
    return gifts.find((gift, index, arr) => arr.indexOf(gift) != index) ?? -1;
}

console.log(findFirstRepeated([1, 2, 3, 4]));
console.log(findFirstRepeated([5, 1, 5, 1]));
console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]));

function findFirstRepeatedV2(gifts) {
    const resultado = [-1, -1];

    for (let i = 0; i < gifts.length - 1; i++) {
        const elto_at_i = gifts[i];

        for (let j = i + 1; j < gifts.length; j++) {
            const elto_at_j = gifts[j];

            if (elto_at_i === elto_at_j) {
                if (
                    resultado[1] === -1 ||
                    (resultado[1] !== -1 && resultado[1] > j)
                ) {
                    resultado[0] = elto_at_j;
                    resultado[1] = j;
                    break;
                }
            }
        }
    }
    return resultado[0];
}

console.log(findFirstRepeatedV2([1, 2, 3, 4]));
console.log(findFirstRepeatedV2([5, 1, 5, 1]));
console.log(findFirstRepeatedV2([2, 1, 3, 5, 3, 2]));
