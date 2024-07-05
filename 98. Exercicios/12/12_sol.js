/*

Busca información sobre o obxecto Date na documentación de JavaScript

Escribe un script que imprima unha mensaxe coa data de hoxe co siguinte formato:

    Hola, hoxe é 22 de Abril de 2020
    
*/

var months = ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño",
    "xullo", "agosto", "septembro", "octubro", "novembro", "dicembro"];
var today = new Date();

//console.log(today);

var year = today.getFullYear();
//console.log(year);
var month = today.getMonth();
//console.log(month);
var day = today.getDate();
//console.log(day);

var message = "Ola, hoxe é " + day + " de " + months[month] + " do " + year;

console.log(message);