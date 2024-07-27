/*
    Jacques Cousteau está explorando o fondo mariño coa axuda dun robot,
    que funciona mediaante un programa que recibe tres parámetros:

        - Un obxecto con información do fondo mariño
        - Unha cadea de texto co nome do lugar que queremos explorar
        - Unha cadea de texto co nome do obxecto que queremos atopar

    Exemplo:

        @param ( { deep: { treasure: "oro" }}, "deep", "treasure" )
        @result true

        Co obxecto do ocean que recibimos como primeiro parámetro,
        podemos explorar o lugar deep e buscar o obxecto treasure.
        Así que tentaríamos acceder a ocean.deep.treasure.

    Se o atopamos, o robot devolve verdadeiro e se non o atopa, devolve falso.
    Só necesitamos saber se o atopamos ou non, non necesitamos coñecer o seu valor.
 */

function searchInOcean(ocean, section, item) {
    if (typeof ocean?.[section]?.[item] !== "undefined") {
        return true;
    } else {
        return false;
    }
}

console.log(searchInOcean({ deep: { treasure: "oro" } }, "deep", "treasure"));
