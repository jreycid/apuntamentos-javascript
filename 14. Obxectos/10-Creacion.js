/*
    CREACIÓN DE OBXECTOS
 */

/*
    Creación de obxectos con notación literal,
    tamén coñecida como iniciador de obxectos
*/
var persoa = {
    nome: "Olalla",
    idade: 30,
    saudar: function () {
        console.log("Ola " + this.nome);
    },
};
console.log(persoa);

/*
    Función Constructora
*/
function Persoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.saudar = function saudar() {
        console.log("Ola " + this.nome);
    };
}
var persoa = new Persoa("Olalla", 30);
console.log(persoa);

// Empregando new Object
var persoa = new Object({
    nome: "Olalla",
    idade: 30,
    saudar: function () {
        console.log("Ola " + this.nome);
    },
});
console.log(persoa);
