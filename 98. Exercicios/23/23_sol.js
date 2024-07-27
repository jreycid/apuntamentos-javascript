/*
    DADO O SEGUINTE ARRAY DE OBXECTOS,
    RESPODE AS SEGUINTES PREGUNTAS
 */
const modulos = [
    {
        id: 1,
        titulo: "PROG",
        tags: ["programación", "Java"],
    },
    {
        id: 2,
        titulo: "DWCS",
        imaxe: "https://img.com/2",
        tags: ["programación", "PHP"],
    },
    {
        id: 3,
        titulo: "DWCC",
        imaxe: "https://img.com/3",
        tags: ["programación", "JavaScript"],
    },
];

var resultado;

// Obtén o obxecto que leva por título DWCC
resultado = modulos.find((modulo) => modulo.titulo == "DWCC");
console.log(resultado, "\n");

// Obtén o obxecto con id=2
resultado = modulos.find((modulo) => modulo.id === 2);
console.log(resultado, "\n");

// Existe no array algún elemento con id == 4?
resultado = modulos.some((modulo) => modulo.id === 4);
console.log(resultado, "\n");

// Existe no array algún elemento que inclúa JQuery entre os tags?
resultado = modulos.some((modulo) => modulo.tags.includes("JQuery"));
console.log(resultado, "\n");

// Existe no array algún elemento que inclúa Java entre os tags?
resultado = modulos.some((modulo) => modulo.tags.includes("Java"));
console.log(resultado, "\n");

// Inclúen programación todos os elementos do array entre os seus tags?
resultado = modulos.every((modulo) => modulo.tags.includes("programación"));
console.log(resultado, "\n");

// Obtén un array formado unicamente polos títulos dos elementos do array
resultado = modulos.map((modulo) => modulo.titulo);
console.log(resultado, "\n");

// Obtén un array formado polos obxectos que inclúen programación entre os seus tags
resultado = modulos.filter((modulo) => modulo.tags.includes("programación"));
console.log(resultado, "\n");

// Obtén un array formado polos obxectos que inclúen JavaScript entre os seus tags
resultado = modulos.filter((modulo) => modulo.tags.includes("JavaScript"));
console.log(resultado, "\n");

// Obtén un array formado polos elementos que non teñan imaxe
resultado = modulos.filter((modulo) => modulo.imaxe === undefined);
console.log(resultado, "\n");

// Obtén un array formado polos elementos que teñan imaxe
resultado = modulos.filter((modulo) => modulo?.imaxe);
console.log(resultado, "\n");

// Obtén un array formado por todas as etiquetas
resultado = modulos.reduce((allTags, modulo) => {
    return [...allTags, ...modulo.tags];
}, []);
console.log(resultado, "\n");
