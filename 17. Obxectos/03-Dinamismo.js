/*
    DINAMISMO DOS OBXECTOS

    En JavaScript os obxectos son dinámicos,
    esto significa que podemos:

        - Engadir ou eliminar propiedades
        - Cambiar o valor das chaves
*/

var usuario = {}; // Obxecto usuario baleiro
console.log("\nusuario orixinal: ", usuario);
console.log("nome in usuario:", "nome" in usuario);

usuario.nome = "Victor";
usuario.gardar = function () {
    console.log("Gardando", usuario.nome);
};

console.log("\nusuario con propiedades engadidas: ", usuario);
console.log("nome in usuario:", "nome" in usuario);

delete usuario.nome;
delete usuario.gardar;

console.log("\nusuario eliminas as propiedades engadidas: ", usuario);
console.log("nome in usuario:", "nome" in usuario, "\n");

var usuario1 = { id: 1 };
var usuario2 = { id: 1 };
/*
    Object.freeze(obx) impide que sobre un obxecto se poida:

        - Engadir propiedades novas
        - Modificar ningunha das súas propiedas
*/
Object.freeze(usuario1);
usuario1.id = 2;
usuario1.nome = "Victor";
console.log("freeze", usuario1);

/*
    Object.seal(obx) impide que sobre un obxecto se poida:

        - Engadir propiedades novas
*/
Object.seal(usuario2);
usuario2.nome = "Manuel";
usuario2.id = 2;
console.log("seal", usuario2);
// Non se poden desfacer os efectos de freeze e seal

console.log();

