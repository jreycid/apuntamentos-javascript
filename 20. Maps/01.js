/*
    Definición:

    Os mapas almacenan un conxunto de datos identificados por claves, ao igual que os obxectos.
    E dicir, os maps almacenan información mediante pares clave-valor.

    Ata este punto, explicáronse as seguintes estruturas de datos:

        1. Arrays: conxunto de datos ordenados e non necesariamente do mesmo tipo.
        2. Obxectos: conxunto de datos relacionados e non necesariamente do mesmo tipo.

    Sen embargo os maps presentan algunhas diferencias con respecto os obxectos:
        1. Os maps permiten que as claves sexan de calquera tipo de dato (primitivo ou obxecto),
            mentres que nos obxectos soamente poden ser de tipo String ou Symbol.
        2. Os maps non permiten valores duplicados.
        3. Os maps son iterables, mentres que para iterar obxectos primeiro necesítanse as claves.
        4. Os maps dispoñen da propiedade size para calcular o seu tamaño,
            mentres que nos obxectos hai que calcular o tamaño a man.
*/

/*
    Métodos e propiedades:
*/
console.log("\nMétodos e propiedades:");
let prefixos = new Map();

// set(clave, valor): almacena o valor asociado á claves
prefixos.set(981, "A Coruña");
prefixos.set(986, "Lugo");
prefixos.set(988, "Ourense");
prefixos.set(982, "Pontevedra");

// get(clave): devolve o valor asociado á clave ou undefined se a clave non existe no map
console.log(prefixos.get(986));

// size: tamaño do map
console.log(prefixos.size);

// has(clave): devolve true se a clave existe no map, false se non existe
console.log(prefixos.has(981));

// delete(clave): elimina o elemento indicado pola súa clave
prefixos.delete(982);
console.log(prefixos.has(982));

// clear(): elimina todos os elementos do map
prefixos.clear();
console.log(prefixos.size);

/*
    Iteración:
*/
console.log("Iteración:");
prefixos.set(981, "A Coruña");
prefixos.set(986, "Lugo");
prefixos.set(988, "Ourense");
prefixos.set(982, "Pontevedra");

// keys(): devolve un iterable coas claves do mapa ordenadas
let itClaves = prefixos.keys();
for (let itClave of itClaves) {
    console.log(itClave);
}

// values(): devolve un iterable cos valores do mapa ordenados
let itValores = prefixos.values();
for (let itValor of itValores) {
    console.log(itValor);
}

// entries(): devolve un iterable cos pares clave-valor do mapa ordenadas
let itPares = prefixos.entries();
for (let itPar of itPares) {
    console.log(itPar);
}

console.log();