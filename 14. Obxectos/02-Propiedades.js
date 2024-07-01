/*
    ACCESO ÁS PROPIEDADES DUN OBXECTO

    Para acceder ás propiedades e métodos dun obxecto existen dúas opcións:
    
        - A notación con puntos: obxecto.propiedade ou obxecto.metodo
        - A notación con corchetes: obxeto["propiedade"] ou obxeto["metodo"]

    Pódense usar variables para acceder ás propiedades e métodos dun obxecto.
    Para iso, hai que usar a notificación de corchetes [].

    O acceder a unha propiedade ou método que non existe, obterase undefined.
*/
var usuario = {
    nome: "Jose",
    email: "jose@holamundo.io",
    direccion: {
        rua: "norte",
        numero: 15,
    },
    activo: true,
    recuperarPassword: function () {
        console.log("Recuperando password...");
    },
    /*
        O último parámetro do obxecto é unha FUNCIÓN ANÓNIMA,
        como vimos no apartado de funcións, caracterízanse por:
        
            - Non ter nome
            - Pódense asociar a vbles
    */
};

console.log("");

console.log(usuario.nome);
usuario["nome"] = "Jose Rey";
const key = "nome";
console.log(usuario[key], "\n");

console.log("Object.keys(usuario): ", Object.keys(usuario));
console.log("Object.values(usuario): ", Object.values(usuario));
console.log("Object.entries(usuario): ", Object.entries(usuario));

console.log("");

console.log("usuario.hasOwnProperty(nome):", usuario.hasOwnProperty("nome"));
console.log("usuario.hasOwnProperty(idade):", usuario.hasOwnProperty("idade"));

console.log("");

/*
    Entón, de onde vén hasOwnProperty?

    Vén do prototipo Object.
    Na sección de POO veremos conceptos tales como
    clases, prototipos ou herdanza.
 */
