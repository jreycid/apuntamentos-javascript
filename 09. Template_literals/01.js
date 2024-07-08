/*
    TEMPLATE STRINGS - TEMPLATE LITERALS
*/

// En JavaScript, existen 3 maneiras de expresar un literal de texto:
let literal1 = "O crepúsculo e as formigas";
let literal2 = "O crepúsculo e as formigas";
let literal3 = `O crepúsculo e as formigas`;

console.log();
console.log(literal1);
console.log(literal2);
console.log(literal3, "\n");

// As dúas primeiras son equivalentes, e dicir, en JavaScript
// pódense empregar comiñas simples ou dobres indistintamente.

// A terceira forma coñécese como template strings e foi introducida con ECMAScript 6 (ES6).
// Permiten o uso de expresións incrustadas e o uso de cadeas de caracteres de máis dunha liña.
// O uso de expresións incrustadas coñéceselle tamén como interpolación. Basicamente significa
// que podes escribir unha variable na cadea e obter o seu valor.

let titulo = "O crepúsculo e as formigas";
let autor = "Xosé Luís Méndez Ferrín";
let editorial = "Galaxia";
let ano = 1961;

console.log(`${titulo} é un libro de relatos de ${autor}, publicado en ${ano} pola editorial ${editorial}.
O libro está formado por dez historias e é un clásico da literatura galega.
`);

// Antes da existencia das template strings, faríase da seguinte maneira:
console.log(
    titulo,
    "é un libro de relatos de", autor + ", publicado en", ano, "pola editorial", editorial +
    ".\nO libro está formado por dez historias e é un clásico da literatura galega.\n");

// Polo tanto, os template strings fan que as cadeas sexan máis limpas e lexibles.