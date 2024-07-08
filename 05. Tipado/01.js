/*
    JavaScript é unha linguaxe con un tipado débil e dinámico.
*/

/* 
    TIPADO ESTÁTICO VS DINÁMICO

    Na definición da variable non indicamos o tipo
    JavaScript asigna o tipo en tempo de execución
    O tipo está ligado o valor da variable
    */

let nome = 'Jose'; 
let numero = 5;

/*
    Se imprimimos o tipo das variables, vemos que si teñen tipo.
 */
console.log('Tipado dinámico: ');
console.log('   Tipo da variable:', typeof nome);
console.log('   Tipo da variable:', typeof numero);

/*
    En contraposición, por exemplo Java
    sería unha linguaxe con tipado estático:

    String cadena = "Jose";
    int contador = 5;
*/

/*
	Operador JavaScript instanceof:

	Úsase para comprobar o tipo dun obxecto en tempo de execución.
	Devolve un valor booleano.
	Se o valor devolto é verdadeiro, indica que o obxecto é unha instancia dunha clase particular
	Se o valor devolto é falso, non o é.
*/
cor1 = new String("verde");
cor1 instanceof String; // devolve verdadeiro (true)
cor2 = "azul";
cor2 instanceof String; // devolve falso (color2 non é un obxecto String)

// TIPADO DÉBIL VS FORTE
/*
    As linguaxes de tipado débil, como JavaScript, permiten cambiar
    o tipo dunha variable ao longo da execución do programa.
    Pola contra as linguaxes de tipado forte, como Java, non
*/
console.log('Tipado débil: ');
let a = 'Ola';
console.log('   Variable:', Object.keys({a})[0], '| Valor:', a, '| Tipo:', typeof a);
a = 5;
console.log('   Variable:', Object.keys({a})[0], '| Valor:', a, '| Tipo:', typeof a);
a = false;
console.log('   Variable:', Object.keys({a})[0], '| Valor:', a, '| Tipo:', typeof a);