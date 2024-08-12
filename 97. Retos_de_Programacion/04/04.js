/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

/*
    EXERCICIO
*/

// Operacións con cadeas
let string = "Ola mundo!";
console.log("\nA cadea escollida para probas é:", string);

// 1. Lonxitude da cadea: *.length
console.log("\n1. Lonxitude da cadea:");
console.log(string.length);

// 2. Extraer un caracter da cadea: *.[n]
console.log("\n2. Extraer un caracter da cadea:");
console.log(string[0]);
console.log(string[string.length - 1]);

// 3. Encontrar una subcadea dentro dunha cadea e extraerla *.indexOf()
console.log("\n3. Encontrar una subcadea dentro dunha cadea e extraerla:");
console.log(string.indexOf("world")); // Devolve -1
console.log(string.indexOf("mundo")); // Devolve 4
console.log(string[4]); // Devolve "m"
console.log(string.slice(4, string.length - 1)); // Devolve "mundo"
// O segundo parametro é opcional, si non se engade córtese ao final da cadea
console.log(string.slice(4)); // Devolve "mundo!"

// 4. Pasar a cadea a maiúculas ou a minusculas *.toLowerCase() e *.toUpperCase()
console.log("\n4. Pasar a cadea a maiúculas ou a minusculas");
console.log(string.toLowerCase()); // Devolve "Ola mundo!"
console.log(string.toUpperCase()); // Devolve "OLA MUNDO!"

// 5. Actualizar partes dunha cadea *.replace()
console.log("\n5. Actualizar partes dunha cadea");
console.log(string.replace("Ola", "Hello")); // Devolve "Hello mundo!"

// 6. Combinar cadeas *.concat()
console.log("\n6. Combinar cadeas");
console.log(string.concat(", ", "Hello")); // Devolve "Hola mundo!, Hello"

// 7. Dividir cadeas *.split()
console.log("\n7. Dividir cadeas");
console.log(string.split(" ")); // Devolve [ 'Hola', 'mundo!' ]
console.log(string.split("")); // Devolve [  'H', 'o', 'l', 'a',' ', 'm', 'u', 'n','d', 'o', '!']
console.log(string.split("-")); // Devolve [ 'Hola mundo!' ]

// 8. Buscar un valor dentro da cadea *.includes()
console.log("\n8. Buscar un valor dentro da cadea");
console.log(string.includes("mundo")); // Devolve true
console.log(string.includes("world")); // Devolve false

// 9. Eliminar os espazos en branco o principio e final duhna cadea
console.log(
    "\n9. Eliminar os espazos en branco o principio e final duhna cadea"
);
let string2 = "        Hello  World!    ";
console.log(string2.trim()); // Devolve "Hello  World!"

/*
    DIFICULTADE EXTRA
*/
const isPalindromo = (string) => {
    let element1 = string.toLowerCase().trim().split(" ").join("");
    let element2 = element1.split("").slice().reverse().join("");

    if (element1 === element2) {
        console.log(`${string} é palíndromo.`);
    } else {
        console.log(`${string} non é palíndromo.`);
    }
};
console.log("\nPalíndromos:");
isPalindromo("as$sa");
isPalindromo("12jeja85");


const isAnagrama = (string1, string2) => {
    let element1 = string1.toLowerCase().trim();
    let element2 = string2.toLowerCase().trim();
    if (element1.length === element2.length) {
        let element3 = element1.split("").sort().join("");
        let element4 = element2.split("").sort().join("");
        if (element3 === element4) {
            console.log(`${element1} e ${element2} son anagramas.`);
        } else {
            console.log(`${element1} e ${element2} non son anagramas.`);
        }
    } else {
        console.log(`${element1} e ${element2} non son anagramas.`);
    }
};
console.log("\nAnagramas:");
isAnagrama("Nacionalista", "Altisonancia");
isAnagrama("Seudo", "Sesudo");


const isIsograma = (string) => {
    let element1 = string.toLowerCase().trim();
    let set1 = new Set();

    for (let letra of element1) {
        if (set1.has(letra)) {
            return console.log(`${string}, non é un isograma.`);
        } else {
            set1.add(letra);
        }
    }
    return console.log(`${string} é un isograma.`);
};
console.log("\nIsogramas:");
isIsograma("dicionario");
isIsograma("castrexo");
console.log();