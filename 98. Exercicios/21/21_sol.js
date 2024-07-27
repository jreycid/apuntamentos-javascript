/*
    Crea unha función que:

        - Reciba un obxecto como parámetro.
        - Devolva un array co nome das propiedades de tipo booleano.

        Por exemplo, para o obxecto: { a: true, b: 42, c: false }

        A función debe devolver ['a', 'c']
*/

function getKeysOfBooleanValues(obj) {

    const keys = Object.keys(obj);
    let booleans = [];

    keys.forEach((key) => {
        if ((typeof obj[key]) === 'boolean'){
            booleans.push(key);
        }
    });
    return booleans;
}

let whatever = { a: true, b: 42, c: false };
console.log(getKeysOfBooleanValues(whatever));
