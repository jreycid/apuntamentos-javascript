/*
    Destructuring:

    É unha característica incorporada a JavaScript na versión ES6,
    que permite tomar valores de arrays ou propiedades de obxectos
    e almacenalos en variabes individuais empregando unha única expresión.
*/
console.log("\nDestructuring de arrays:\n");
const coches = ["León", "A3", "Golf"];

// Sen empregar destructuring
var seat = coches[0];
var audi = coches[1];
var vw = coches[2];
console.log(seat, audi, vw);

// empregando destructuring
var [seat, audi, vw] = coches;
console.log(seat, audi, vw, "\n");

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var [cero, un, dous, tres, ...resto] = numeros;
console.log(cero, un, dous, tres, resto);

var [cero, , dous, , catro, , seis, , oito] = numeros;
console.log(cero, dous, catro, seis, oito);

console.log("\nDestructuring de obxectos:\n");
var coche = {
    marca: "Seat",
    modelo: "León",
    cor: "branco",
    ano: 2022,
};
// Sen empregar destructuring
var marca = coche.marca;
var modelo = coche.modelo;
var cor = coche.cor;
var ano = coche.ano;
console.log(marca, modelo, cor, ano);

// empregando destructuring
var { marca, modelo, ano, cor } = coche;
console.log(marca, modelo, cor, ano, "\n");

var coche = {
    marca: "Seat",
    modelo: "León",
    cor: "branco",
    ano: undefined,
};

// podense estabelecer valores por defecto para o caso de que
// algunha propiedade non teña valor. Non funciona con null
var { marca, modelo, cor, ano = "ano descoñecido" } = coche;
console.log(marca, modelo, cor, ano);

var coche = {
    marca: "Seat",
    modelo: "León",
    cor: "branco",
    ano: 2022,
};

// pódense renomear as variables que almacenarán
// os valores das chaves do obxecto
var { marca, modelo, cor, ano: anoMatriculacion } = coche;
console.log(marca, modelo, cor, anoMatriculacion);

// Podémolo empregar para descompoñer obxectos noutros
var { marca, modelo, ...restoCoche } = coche;
console.log(marca, modelo, restoCoche, "\n");

// O destructuring tamén é moi cómodo no paso de parámetros a funcións
const usuario = { nome: "Jose", apelido: "Rey" };

function saudar({ nome, apelido }) {
    console.log(`Hola ${nome} ${apelido}!`);
}
saudar(usuario);

console.log("\nDestructuring de obxectos aniñados:\n");

var persoa = { nome: "Olalla", idade: 30, direccion: { rua: "nova", num: 1 } };
var { nome, idade, direccion } = persoa;
console.log(nome, idade, direccion);

// Para facer destructuring do obxecto aniñado, unha opción sería:
var { rua, num } = direccion;
console.log(nome, idade, rua, num);

// A outra opción, empregando unha única expresión:
var {
    nome,
    idade,
    direccion: { rua, num },
} = persoa;
console.log(nome, idade, rua, num);
