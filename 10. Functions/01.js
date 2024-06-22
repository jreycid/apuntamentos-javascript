/*
    Unha función e ún bloque de código que leva a cabo unha tarefa.
    As vbles definidas dentro dunha función, teñen como scope a dita función.

    Dentro dunha función poderemos acceder a vbles globales.

    Poden recibir parámetros, ainda que non é obrigatorio
    Poden retornar valores, ainda que non é obrigatorio

    Deben levar a cabo unha única tarefa

    Necesitan ser invocadas para executarse

    Poden ser anónimas (non ter nome)
 */

// Definición
function holaMundo() {
    console.log('\nOla Mundo!');
}
// Chamada
holaMundo();

/*
    Si non lle pasamos un parámetro a función no
    momento da chamada, colle o valor co que
    iniciamos a vble na cabeceira da función.
 */
function saudar(nome = 'Xavier') {
    return `Ola ${nome}`;
}

console.log(saudar());
console.log(saudar('Xoan'));

/*
    Parámetros vs argumentos
 */
console.log('\nParámetros vs argumentos: ');

function sumaTresNum(a, b, c) { // <-- Parametros
    console.log(arguments);
    return a + b + c;
}

let resultado = sumaTresNum(5, 6, 1); // <-- Argumentos
console.log(resultado);
console.log('En JavaScrip as funcións son de tipo:', typeof sumaTresNum);

console.log('\nSuma sen parámetros: ');

function sumaSenParam() {
    let a = 1,
        b = 2;
    console.log(a + b);
}
sumaSenParam();

/*
    Os argumentos pásanse ás funcións por valor.
    Se a función cambia o valor dun argumento, este cambio non se reflicte globalmente.
    Isto tamén se aplica cando se pasa un obxecto como argumento a unha función.
    Non obstante, se a función cambia as propiedades do obxecto,
    ese cambio é visible fóra da función, como se mostra no seguinte exemplo:
 */

let a = 1,
    b = 2;
console.log('\nSuma con parámetros: ', a, b);

function sumaConParam(a, b) {
    console.log(a + b);
    a = 4;
    b = 5;
}
sumaConParam(a, b);
console.log(a, b);

let obx = {
    a: 1,
    b: 2,
};
console.log('\nSuma con obxecto: ', obx.a, obx.b);

function sumaObx(obx) {
    console.log(obx.a + obx.b);
    obx.a = 4;
    obx.b = 5;
}
sumaObx(obx);
console.log(obx.a, obx.b);

/*
    En JavaScript, as funcións son obxectos, e polo tanto,
    pódense manipular e transmitir como calquera outro obxecto.
    En concreto, son obxectos Function.

    Tamén se poden definir función sen nome, chamadas función anónimas
 */
let saudoFuncAnonima = function (name = 'Mundo!') {
    return `Ola ${name}`;
};
console.log('\nFunción anónimas:');
console.log(saudoFuncAnonima());
console.log(saudoFuncAnonima('Cristina'));

/*
    FUNCIÓNS FRECHA / ARROW FUNCTIONS

    Non teñen nome
    Sintáxis reducida e mantemento do scope
    Non empregan (obrigatoriamente) corchetes nin a palabra reservada return
    Empregan this

    Mais exemplos na sección adicada as Arrow functions
 */
let saudoFuncFrecha1 = (name) => `Ola ${name}`;
let saudoFuncFrecha2 = (name) => {
    return `Bye ${name}`;
};
console.log('\nFunción frecha:');
console.log(saudoFuncFrecha1('Uxío'));
console.log(saudoFuncFrecha2('Olalla'));

/*
    Estes son conceptos básicos sobre funcións en JavaScript.
    Quedan cuestións mais avanzadas que se irán vendo en seccións posteriores.
 */