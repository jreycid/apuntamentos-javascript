/*
    IMMEDIATELY INVOKED FUNCTION EXPRESSION

    Este patrón de deseño coñécese tamen co nome de funcións autoejecutables.
    Self-Executing Anonymous Function:

        (function () {
            statements
        })();
    
    As IIFE teñen algunhas vantaxes importantes:

        1. Ao asignar un nome a unha función sen necesidade, estamos ocupando o global namespace,
        aunmentando así a probabilidade de que ocorra unha colisión entre identificadores.

        2. As IIFE soamente se executan unha vez, inmediatamente despois da súa creación,
        desta forma aforramos que o darlle un nome, poida ser empregada máis dunha vez indebidamente.

        3. Nas IIFE non se pode acceder a variables definidas fora do seu alcance,
        co cal se evita contaminar el alcance (scope) global.
*/

//IIFE
(function () {
    console.log('Boas!');
})();

//IIFE con sintaxis de función frecha
(() => {
    console.log('Boas!');
})();

// E o seu equivalente máis habitual
var f = function () {
    console.log('Boas!');
};
f();

// En JQuery faríase así
// $(function(){
// });

// Outro exemplo.
var x = 5;

(function () {
    console.log("x:", x); // non obtemos '5' senón 'undefined'
    var x = 10;
    console.log("x:", x); // 10
})();


var y = 5;

function test() {
    console.log("y:", y); // non obtemos '5' senón 'undefined'
    var y = 10;
    console.log("y:", y); // 10
}
test()