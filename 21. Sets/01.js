/*
    Definición:

    Son estruturas de datos nativas (ao igual que os maps) que permiten almacenar datos (sen claves),
    de calquera tipo e non permiten valores repetidos. Nun set, cada valor só pode aparecer unha vez.
*/

/*
    Métodos e propiedades:
*/
console.log("\nMétodos e propiedades:");

// Os datos almacenados non teñen porqué ser do mesmo tipo
let provincias = new Set(["A Coruña", "Lugo", "Ourense", "Pontevedra"]);
let prefixos = new Set ([981, 986, 988, 982]);

// size: tamaño do set
console.log(provincias.size);

// has(clave): devolve true se a clave existe no map, false se non existe
console.log(provincias.has("Lugo"));
console.log(provincias.has("Asturias"));

// delete: elimina un elemento do set
provincias.delete("Pontevedra");
console.log(provincias.size);

// add: engade un elemento al set
provincias.add("Pontevedra"); // nova, polo tanto insértase
provincias.add("Lugo");  // pepetida, polo tanto non fai nada
console.log(provincias.size);

// clear(): elimina todos os elementos do set
provincias.clear();
console.log(provincias.size);

/*
    Iteración:
*/
console.log("Iteración:");

// keys(): devolve un iterable coas claves do set 
let itClaves = prefixos.keys();
for (let itClave of itClaves) {
    console.log(itClave);
}

// values(): devolve o mesmo que keys(), por compatibilidade con map
let itValores = prefixos.values();
for (let itValor of itValores) {
    console.log(itValor);
}

// entries(): devolve un iterable cos pares clave-valor, por compatibilidade con map
let itPares = prefixos.entries();
for (let itPar of itPares) {
    console.log(itPar);
}

console.log();