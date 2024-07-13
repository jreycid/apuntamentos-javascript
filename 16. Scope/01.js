/*
    O scope pódese definir como o alcance que terá unha variable no código.
    Determina a accesibilidade ou visibilidade da variable en cada parte do código.

    Ámbitos en JavaScript:

        1. Global: variables e funcións estarán dispoñibels en calquera parte do código.
                    É o ámbito predeterminado para as variables e funcións en JavaScript.
                    O uso de variables globales non é unha boa práctica.

        2. De función: refírese o contexto creado por unha función.
                        As variables e funcións definidas dentro deste contexto son locais
                        á función, e non poderán ser empregadas fora da mesma.

        3. De bloque: refírese o contexto creado por calquera par de chaves {}.


    É imprescindible ter en conta a diferencia que produce no scope
    dunha variable o modo de declaración da mesma:

        let e const: as variables declaradas con let teñen scope de bloque.

        var: as variables declaradas con var teñen scope de función ou global,
                dependendo do contexto actual de execución.

    NOTAS:
        Hoxe en día desaconséllase o uso de var.
        Con ES6 introduciuse o scope de módulo, que se verá na sección adicada a módulos.
*/

/*
    1. Scope global
*/
console.log("\n1. Scope global");

var saudoGlobal = "Hola Mundo!";

function scopeGlobal() {
    console.log("Dentro da función:", saudoGlobal);
}

scopeGlobal();
console.log("Fóra da función:", saudoGlobal);

/*
    2. Scope de función 
*/
console.log("\n2. Scope de función");

function scopeFuncion() {
    var saudoFuncion = "Hola Mundo!";
    console.log(saudoFuncion);
}

scopeFuncion();
// console.log(saudoFuncion);   // Erro

/*
    3. Scope de bloque
*/
console.log("\n3. Scope de bloque");

let animal = "gato";
if (true) {
    let animal = "can";
    console.log(animal);
}
console.log(animal, "\n");
