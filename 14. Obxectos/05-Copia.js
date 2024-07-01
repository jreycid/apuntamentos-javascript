/*
    COMO FACER COPIAS DE OBXECTOS

        1. Copia superficial (Object.assign)
        2. Copia superficial (Operador spread ...)
        3. Copia profunda (JSON.parse e JSON.stringify)
        4. Copia profunda (structuredClone)

 */

//Temos o seguinte obxecto, do cal queremos facer unha copia:
var persoa = { nome: "Olalla", idade: 30, direccion: { rua: "nova", num: 1 } };

/*
    O seguinte código non fai unha copia, senón que crea unha referencia
    chamada copia que apunta a mesma posición de memoria que persoa
    Calquera cambio no obxecto reflíctese en ambas as variables
*/
console.log("Copia* por asignación directa:");
let copia = persoa;
persoa.idade = 33;
console.log(persoa);
console.log(copia, "\n");

/*
    1. Copia superficial (Object.assign)
*/
console.log("Copia superficial con Object.assign:");
var persoa = { nome: "Alba", idade: 30, direccion: { rua: "vella", num: 1 } };
var copia_superficial = {};

Object.assign(copia_superficial, persoa);

copia_superficial.nome = "Iria";
console.log(persoa);
console.log(copia_superficial, "\n");

// Os valores dos obxectos internos non se copian
// Só se copia a súa referencia
// Polo tanto:
copia_superficial.direccion.rua = "nova";
console.log(persoa);
console.log(copia_superficial, "\n");

/*
    2. Copia superficial (Operador spread ...)

    É unha forma mais moderna ca anterior de facer unha copia superficial
*/
console.log("Copia superficial co operador de expansión:");
var persoa = { nome: "Alba", idade: 30, direccion: { rua: "vella", num: 1 } };
var copia_superficial = { ...persoa };

copia_superficial.nome = "Iria";
console.log(persoa);
console.log(copia_superficial, "\n");

// Os valores dos obxectos internos non se copian
// Só se copia a súa referencia.
// Polo tanto:
copia_superficial.direccion.rua = "nova";
console.log(persoa);
console.log(copia_superficial, "\n");

/*
    3. Copia profunda (JSON.parse e JSON.stringify)
*/
console.log("Copia profunda con JSON.parse e JSON.stringify:");
var persoa = { nome: "Alba", idade: 30, direccion: { rua: "vella", num: 1 } };
var copia_profunda = JSON.parse(JSON.stringify(persoa)); // deep copy (copia profunda)

copia_profunda.nome = "Iria";
console.log(persoa);
console.log(copia_profunda, "\n");

// Os valores dos obxectos internos si se copian
// Polo tanto:
copia_profunda.direccion.rua = "nova";
console.log(persoa);
console.log(copia_profunda, "\n");

/*
    4. Copia profunda (structuredClone)

    É unha forma mais moderna ca anterior de facer unha copia profunda
*/
console.log("Copia profunda con structuredClone:");
var persoa = { nome: "Alba", idade: 30, direccion: { rua: "vella", num: 1 } };
var copia_profunda = structuredClone(persoa); // deep copy (copia profunda)

copia_profunda.nome = "Iria";
console.log(persoa);
console.log(copia_profunda, "\n");

// Os valores dos obxectos internos si se copian
// Polo tanto:
copia_profunda.direccion.rua = "nova";
console.log(persoa);
console.log(copia_profunda, "\n");
