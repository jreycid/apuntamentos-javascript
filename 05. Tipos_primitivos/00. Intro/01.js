/*
    O estándar ECMAScript máis recente define nove tipos:

        Seis tipos de datos primitivos:

            1. Número: typeof instance === "number"
            2. Cadena: typeof instance === "string"
            3. BigInt: typeof instance === "bigint"
            4. Símbolo: typeof instance === "symbol"
            5. Booleano: typeof instance === "boolean"
            6. Indefinido: typeof instance === "undefined"

        Existe un tipo adicional, que se podería considerar primitivo:

            7. Nulo: typeof instance === "object".
                
        Un tipo primitivo é aquel que non é un obxecto, 
        polo que non ten métodos nin propiedades.
        As variables de calquera tipo primitivo son inmutables,
        é dicir, non se poden modificar. Cando a unha variable ou constante
        de tipo primitivo que xa ten asignado un valor, se lle intenta 
        asignar outro valor, o que fai javascript é crear unha nova instancia da variable.
            
        En Javascript, toda variable ou constante quee non pertence a un tipo primitivo,
        é un obxecto, incluso as funcións son obxectos e como tal poden tratarse.

            8. Obxecto: typeof instance === "object". (Exemplo: Array, Map, Date, etc.)

            9. Función: unha estrutura sen datos, typeof instance === "function".
                        As funcións en Javascript son obxectos de tipo Function.

    O único propósito valioso de usar o operador typeof é comprobar o tipo de datos.
    Se queremos comprobar calquera tipo estrutural derivado de Object,
    non ten sentido usar typeof para iso, xa que sempre recibiremos "obxecto".
    A forma correcta de comprobar que tipo de obxecto estamos a usar é a palabra clave instanceof.
    
    IMPORTANTE:
        As variables de tipo primitivo, almacenan na súa ubicación de memoria, o valor da variable.
        Os resto, obxectos, almacenan na súa ubicación a posición de memoria que aloxa ao obxecto.
*/

/*
    Autoboxing ou Object wrapper

    O feito de que poidamos chamar funcións desde tipos de datos primitivos
    non é porque estes datos teñan acceso a esas funcións, senón por "Autoboxing".

    O Autoboxing ou Object Wrapper prodúcese cando chamamos a un método
    definido no prototipo relacionado co primitivo en cuestión.

*/
    let saudo = 'Ola frontenders!';

    console.log(saudo);
    console.log(saudo.toUpperCase);

// No exemplo anterior, o método toUpperCase defínese no prototipo String,
// que está relacionado co valor primitivo 'saúdo'.
// No momento en que chamas ao método prototipo, o motor JavaScript encapsula o valor do primitivo,
// executa a función e destrúe este obxecto usado.
