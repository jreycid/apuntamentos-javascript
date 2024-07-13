/*
 * Imos ver exemplos de operacións que se
 * poden levar a cabo con cadeas de texto
 */
const xeolocalizacion = "Rúa calquera. 7. 1D";
console.log(xeolocalizacion.split("."));
// concatenar texto
let nome = "Olalla";
console.log("Ola " + nome);
// template literals
console.log(`Ola ${nome}`);
// typeof
console.log(typeof nome);
// .length
let concello = "Castrocaldelas";
console.log(concello);
console.log(concello.length);
// .includes() -> Devolve verdadeiro ou falso
console.log(concello.includes("z"));
// .slice(start, end) -> Corta a cadea. Os parámetros indican comezo e remate
console.log(concello.slice(0, 6));
// .replace(‘este texto', ‘por este outro’)
console.log(concello.replace("caldelas", " de arriba"));
// .trim() -> eliminar espazos iniciais e finais dunha cadea
const text = "   as dfas a asdfasd a    ";
console.log(text.trim());
// .split(‘,’) -> separa cadeas de texto cando atopa o caracter indicado. Devolve un array.
