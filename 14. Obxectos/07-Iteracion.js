/*
    ITERAR OBXECTOS

        1. Iterar con for...in  (única forma de iterar obxectos antes de ES6)

        2. Iterar con for...of

        3. Transformar un objeto en un array

            3.1 Iterar con Object.keys()    (introducido en ES6)
            3.2 Iterar con Object.values()  (introducido en ES8)
            3.3 Iterar con Object.entries() (introducido en ES8)
 */

var persoa = { nome: "Olalla", idade: 30, direccion: { rua: "nova", num: 1 } };

/*
    1. Iterar con for...in

    A estrutura de control for...in permítenos crear un bucle que itera
    sobre todas as propiedades enumerables dun obxecto, nunha orde arbitraria.

    O problema de for...in é que tamén itera a través das propiedades da cadea de prototipos.
    Dado que os obxectos en JavaScript poden herdar propiedades dos seus prototipos,
    a instrución for...in tamén iterará esas propiedades.

    Para evitar iterar sobre as propiedades do prototipo ao realizar un bucle dun obxecto,
    compre comprobar de forma explícita se esta pertence ao obxecto usando o método hasOwnProperty()
*/
console.log("\n1. Iterar con for...in");
for (var propiedade in persoa)
    console.log("   ", propiedade, ":", persoa[propiedade]);

/*
    2. Iterar con for...of

    Non se pode iterar obxectos coa estructura de control for..of

    Esta estructura só serve para iterar sobre os elementos dun obxecto iterable,
    como por exemplo arrays.
*/
console.log("\n2. Iterar con for...of");
console.log("Non se pode iterar obxectos coa estructura de control for..of");

/*
    3.1 Iterar con Object.keys()

    Devolve un array coas chaves do obxecto
*/
console.log("\n3.1 Iterar con Object.keys()");
var keys = Object.keys(persoa);

keys.forEach((key) => {
    console.log("   ", key, ":", persoa[key]);
});

/*
    3.2 Iterar con Object.values()

    Devolve un array cos valores do obxecto
*/
console.log("\n3.2 Iterar con Object.values()");
var values = Object.values(persoa);

values.forEach((value) => {
    console.log("   ", value);
});

/*
    3.3 Iterar con Object.entries()

    Devolve un array de arrays, onde cada subarray
    é un par [propiedade, valor] do obxecto
*/
console.log("\n3.3 Iterar con Object.entries()");
var entradas = Object.entries(persoa);

entradas.forEach((propiedade) => {
    console.log("   ", propiedade);
});
console.log();
