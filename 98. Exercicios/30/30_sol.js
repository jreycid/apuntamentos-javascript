/*
    ENUNCIADO DO EXERCICIO:

        Partindo deste array de obxectos compor o documento html da captura
*/

let receitas = [
    {
        nombre: "Polo a cervexa",
        dificultad: "Baixa",
        duracion: "2 horas",
        ingredientes: ["pollo", "cervexa", "sal", "pimenta", "cebola"],
        categoria: "carnes",
        autor: {
            nombre: "Carlos Arguiñano",
            restaurante: "o seu",
            estrellas: 1,
        },
    },
    {
        nombre: "Sorbete de limón",
        dificultad: "Baixa",
        duracion: "0.5 horas",
        ingredientes: [
            "4 limóns",
            "1 litro de auga",
            "1 kg de azucre",
            "xeo",
        ],
        categoria: "postres",
        autor: {
            nombre: "Juan Mari Arzak",
            restaurante: "sorbetilandia",
            estrellas: 1,
        },
    },
];

const listado = document.getElementById("listado");
for (let i = 0; i < receitas.length; i++) {
    const encabezado = document.createElement("h2");
    encabezado.innerHTML = receitas[i].nombre;

    const dificultade = document.createElement("p");
    dificultade.innerHTML = "Dificultade " + receitas[i].dificultad;

    const listaIngredientes = document.createElement("ul");
    for (let j = 0; j < receitas[i].ingredientes.length; j++) {
        const ingrediente = document.createElement("li");
        ingrediente.innerHTML = receitas[i].ingredientes[j];
        listaIngredientes.appendChild(ingrediente);
    }
    listado.appendChild(encabezado);
    listado.appendChild(dificultade);
    listado.appendChild(listaIngredientes);
}
