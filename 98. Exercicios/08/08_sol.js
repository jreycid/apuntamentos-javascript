/**
 * Define unha función que cree un array da lonxitude recibida
 * como parámetro, onde os seus elementos sexan os numeros de 1 a lonxitude.
 */

function crearArray(l){
    if(l <= 0){
        return [];
    }
    let arr = [];
    for (let i = 0; i < l; i++){
        arr[i] = i +1;
    }

    return arr;
}

let lonxitude = 9;
let resultado = crearArray(lonxitude);

console.log(resultado);