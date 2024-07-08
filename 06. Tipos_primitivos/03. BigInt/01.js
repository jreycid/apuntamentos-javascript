/*
    Permítenos utilizar calquera número enteiro sen límite de tamaño.
    Isto significa que xa non temos a limitación que atopamos co tipo number.
*/

// Para declarar un valor de tipo bigint,
// necesitamos engadir un n ao final do número desexado:

const verylargenumber = 123456789n; // a "n" ao final é importante!

// En canto ás operacións matemáticas,
// non está permitido facelas entre distintos tipos de datos,
// só é posible se ambos os números son do tipo bigint:

const n1 = 67890987654323456789n
// tamén podemos crealos a partir do obxecto "BigInt"
const n2 = BigInt(42);

console.log(n1 + n2 ) // ✅ VÁLIDO
//console.log(n1 + 100) // 🚫 NON VÁLIDO