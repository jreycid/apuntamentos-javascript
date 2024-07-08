/*
    COMPARACIÓN ENTRE OBXECTOS

    Poedríase pensar que dous obxectos coas mesmas propiedades e
    propiedades cos mesmos valores serían considerados iguais

    A razón de que non sexa así ten que ver coa forma en que JavaScript
    trata a comparación en tipos primitivos e en tipos non primitivos:

        Os tipos de datos primitivos compáranse por valor.
        Os tipos de datos non primitivos compáranse por referencia.
*/

var usuario1 = { id: 1 };
var usuario2 = { id: 1 };
var usuario3 = usuario1;

console.log("");
console.log("usuario1:", usuario1);
console.log("usuario2:", usuario2);
console.log("usuario3:", usuario3);

console.log("\nComparación por referencia:");
console.log("usuario1 == usuario2:", usuario1 == usuario2);
// Ambos obxectos teñen claves e valores idénticos, pero o resultado é falso porque son instancias diferentes
console.log("usuario1 == usuario3:", usuario1 == usuario3);
// Ambos obxectos conteñen a mesma referencia, e dicir, apuntan a mesma posición de memoria.

/*
    JavaScript non ten integrada ningunha función que realice unha
    comparación profunda entre dous obxectos.

    Para comparar obxectos por valor (tamén se lle chama igualdade profunda) podemos:

        1. Algúns frameworks de JavaScript, como Angular e Nodejs,
            proporcionan funcionalidades integradas para comparar dous obxectos
    
        2. Empregar a función JSON.stringify()

            JavaScript non ten unha solución lista para comparar dous obxectos,
            pero non ten ningún problema para comparar dúas cadeas.
            Con este método, convertemos os dous obxectos a comparar en cadeas
            
            É importante ter en conta que:

                Este método usa estrita igualdade (===) nos atributos,
                polo tanto, ter idades como 35 e "35" non será igual

                A orde das propiedades inflúe no resultado

        3. Empregar o método _.isEqual() da biblioteca Lodash:

            _.isEqual(usuario1, usuario2);

        4. A biblioteca deep-equal é un módulo NPM moi popular, (npm install deep-equal)
            e ofrece o método deepEqual() para determinar a igualdade profunda entre dous obxectos.

            O método deepEqual() recibe tres parámetros:
            
                Os dous primeiros son os operandos que se van comparar.
                O terceiro parámetro é un parámetro de opcións opcional.
                Coa opción, podemos especificar
                    se se usa a igualdade estrita (===)
                    se se usa a igualdade coercitiva (==), que é a opción por defecto
*/
console.log("\nComparación por valor:");
var assert = require("assert");

try {
    assert.deepStrictEqual(usuario1, usuario2);
    console.log("deepStrictEqual: usuario1 e usuario2 son iguais");
} catch (error) {
    console.log("deepStrictEqual: usuario1 e usuario2 son distintos");
}

console.log(
    "JSON.stringify: usuario1 === usuario2: ",
    JSON.stringify(usuario1) === JSON.stringify(usuario2)
);

console.log();
