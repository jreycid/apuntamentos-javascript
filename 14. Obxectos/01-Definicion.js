/*
    DEFINICIÓN DE OBXECTO

        Un obxecto é unha estrutura ou colección de propiedades
        relacionadas e non necesariamente do mesmo tipo.

        Cada liña representa unha propiedade (ou par chave-valor) do obxecto

        O valor dunha propiedade pode ser unha función,
        neste caso, a propiedade coñécese como método.

        Na última propiedade, a ',' é opcional pero conveniente para control de versións,
        xa que se engadimos unha nova propiedade, no commit só teremos que engadir unha liña
 */

let profesor = {}; // Obxecto baleiro

let nome = "Jose";
let modulo = "ASXBD";
let idade = 40;

let profesor1 = {
    nome: nome,
    modulo: modulo,
    idade: idade,
};

let profesor2 = {
    nome: "Amador",
    modulo: "PROG",
    idade: 58,
};

console.log("");
console.log(profesor);
console.log(profesor1);
console.log(profesor2, "\n");
