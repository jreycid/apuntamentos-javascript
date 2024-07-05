/* 
    Imaginemos que vamos a desarrollar un juego,
    y debemos crear un objeto "Jugador" que tenga una propiedad "fuerza"
    que inicialmente tenga el valor 1, un método "incrementarFuerza" que
    nos permita incrementar en 1 la fuerza del jugador y un método
    "consultarFuerza" que nos muestre un mensaje con la fuerza del jugador.
 */

/*
    Imaxinemos que imos desenvolver un xogo,
    e debemos crear un obxecto "Xogador" coas seguintes propiedades:
        forza:  inicialmente ten o valor 1
        aumentarForza: método que nos permite aumentar a forza do xogador en 1
        consultarForza: método que amosa unha mensaxe coa forza do xogador.
*/

function Xogador() {
    this.forza = 1;

    this.consultarForza = function() {
        console.log("A túa forza é de " + this.forza);
    }

    this.aumentarForza = function () {
        this.forza += 1;
    }
}

var xogoador1 = new Xogador();
xogoador1.consultarForza();  // A túa forza é de 1
xogoador1.aumentarForza();
xogoador1.consultarForza();  // A túa forza é de 2
