/*
    EXEMPLOS ESTRUTURAS DE CONTROL DE FLUXO
*/

//if simple
let numero = 4;
if (numero > 3) {
    console.log("\né mayor que 3");
}

//if -else
if (numero >= 3) {
    console.log("\né maior ou igual que 3");
} else {
    console.log("\né menor que 3");
}

//if else if
if (numero == 3) {
    console.log("\né igual que 3");
} else if (numero > 3) {
    console.log("\né maior que 3");
}

// Operador ternario: (condición ? verdadero : falso)
let nota = 7;

let calificacion = nota < 5 ? "suspenso" : "aprobado";
console.log("\nO resultado do exame é:", calificacion);

let notaFinal =
    nota < 5
        ? "Insuficiente"
        : nota < 6
        ? "Suficiente"
        : nota < 8
        ? "Ben"
        : nota <= 9
        ? "Notable"
        : "Sobresaiente";

console.log("A nota final é:", notaFinal);

//sentencia switch
let idade = 20;
switch (idade) {
    case 10:
        console.log("\nten 10 anos");
        break;
    case 18:
        console.log("\né maior de idade");
        break;
    case 30:
        console.log("\né un adulto");
        break;
    default:
        console.log("\nten " + idade + " anos");
        break;
}

//bucle while
console.log("\nbucle while: ");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//bucle for
console.log("\nbucle for: ");
for (i = 0; i < 10; i++) {
    console.log(i);
}

//bucle do-while
i = 0;
console.log("\nbucle do-while: ");
do {
    console.log(i);
    i++;
} while (i < 10);

//bucle for in
console.log("\nbucle for in sobre array modulos: ");
let modulos = ["FOL", "SINF", "CD", "PROG", "BD", "LIMA"];
for (let modulo in modulos) {
    console.log(modulo);
    //console.log('modulos[' ,modulo ,'] = ', modulos[modulo]);
}

//bucle for of
console.log("\nbucle for of sobre array modulos: ");
for (modulo of modulos) {
    console.log(modulo);
}

/*
    for-in vs for-of

    Simplificando podemos dicir que:

        for in -> itera sobre chaves
        for of -> itera sobre valores
*/

modulos = [
    {
        nome: "PROG",
        horas: 240,
        profesor: "Amador",
    },
    {
        nome: "BD",
        horas: 180,
        profesor: "Jose",
    },
    {
        nome: "LIMA",
        horas: 120,
        profesor: "Luis",
    },
];

console.log("\nbucle for in sobre obxecto modulos: ");
for (modulo in modulos) {
    console.log(modulo);
}

console.log("\nbucle for of sobr obxecto modulos: ");
for (modulo of modulos) {
    console.log(modulo);
}

//try-catch-finnaly
console.log("\nbloque try-catch: ");
try {
    funcion_que_non_existe();
} catch (ex) {
    console.log("Erro detectado: " + ex.description);
} finally {
    console.log("faino de todas formas");
}
