/*
    CREACIÓN DE OBXECTOS
 */

/*
    1. Creación de obxectos con notación literal,
        tamén coñecida como iniciador de obxectos
*/
console.log("\n1. Empregando notación literal: ");

let persoa1 = {
    nome: "Olalla",
    idade: 30,
    // Cando a unha propiedade dun obxecto se lle asigna unha función,
    // deixa de chamárselle función e chámaselle método
    saudar: function () {
        console.log("Ola " + this.nome);
    },
};

console.log(persoa1);

/* 
    2. Empregando new Object
*/
console.log("\n2. Empregando new Object: ");

let persoa2 = new Object({
    nome: "Olalla",
    idade: 30,
    saudar: function () {
        console.log("Ola " + this.nome);
    },
});

console.log(persoa2);

/* 
    3. Empregando o método Object.create()
*/
console.log("\n3. Empregando o método Object.create(): ");

const persoa3 = {
    nome: "Olalla",
    idade: 30,
    saudar: function () {
        console.log("Ola " + this.nome);
    },
};
var olalla = Object.create(persoa3);
olalla.nome = "Olalla";
olalla.idade = 30;

console.log(olalla);

/*
    4. Función Factoría

        Por convención, empregan camelCase na sua definición

        Comezan por 'crear', 'create', 'factory, 'factoria'

        Son funcións que devolven un obxecto

        Os obxectos creados desta maneira non herdan
        propiedades nin métodos
*/
console.log("\n4. Empregando función factoría: ");

function factoriaPersoa4(nome, idade) {
    return {
        nome, // cando a chave coincide co valor pode escribirse así
        idade: idade,
        saudar: function saudar() {
            console.log("Ola " + nome);
        },
    };
}

let persoa4 = factoriaPersoa4("Olalla", 30);
console.log(persoa4);

/*
    5. Función Constructora

        Por convención, empregan UpperCamelCase na sua definición

        O nome da función ten que ser o nome do recurso que imos construir

        Empregan o operador new() para instanciar obxectos do tipo

        Os obxectos creados desta maneira herdan
        propiedades e métodos do seu prototipo
*/
console.log("\n5. Empregando función constructora: ");

function Persoa5(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.saudar = function saudar() {
        console.log("Ola " + this.nome);
    };
}

let persoa5 = new Persoa5("Olalla", 30);
console.log(persoa5);

/*
    6. Empregando ES6 Class

    As clases son principalmente azucre sintáctico,
    xa que o modelo de herdanza en JavaScript está baseado en prototipos.
*/
console.log("\n6. Empregando ES6 Class: ");

class Persoa6 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudar() {
        console.log("Ola " + this.nome);
    }
}

let persoa6 = new Persoa6("Olalla", 30);
console.log(persoa6, "\n");
