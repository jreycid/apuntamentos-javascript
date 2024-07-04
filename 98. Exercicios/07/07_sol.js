/**
 * Crear unha función que ordene
 *  unha frase en orden alfabético
 */

const frase = 'estas son as palabras que desexo ordenar ';
// console.log(typeof frase);

const palabras = frase.split(' ');
// console.log(typeof palabras);

const palabrasOrdenadas = palabras.sort();
console.log(palabrasOrdenadas);
for (const palabra of palabrasOrdenadas) {
    console.log(palabra);
}