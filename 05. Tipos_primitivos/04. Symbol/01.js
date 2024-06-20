/*
    O tipo Symbol é un tipo de datos primitivo introducido na versión ES6 da linguaxe.
    Utilízanse para representar valores únicos que se poden usar como identificadores ou claves en obxectos.

    De feito, segundo a especificación de Javascript, só dous dos tipos primitivos,
    string e symbol, poden servir como claves de propiedade de obxectos.
 */

// O valor de "Symbol" representa un identificador único.
// Un valor deste tipo pódese crear usando Symbol():
let id = Symbol();

// Ao crealo, podemos engadir unha descrición, que será útil na depuración de código:
id = Symbol('id');

// Javascript garánte que cada saymbol é único.
// A descrición é só unha etiqueta que non afecta a outra cousa.
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2); // false
console.log(id1 == id2); // false

