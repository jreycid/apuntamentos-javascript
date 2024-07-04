/*
    Constrúe unha función que sexa quen de obter
    un elemento dun array dado un índice.

    Nota: validar que o indice recibido sexa válido
 */
function getbyIdx(arr, idx){
    if(idx < 0 || idx >= arr.length ){
        return 'Íncide non válido';
    }
    return arr[idx];
}

let array = [1, 2, 3, 4, 5, 6];
let resultado = getbyIdx(array, 2);
console.log(resultado);