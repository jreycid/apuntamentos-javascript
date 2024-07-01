/*
    JSON: JavaScript Object Notation
    
        - É un formato de datos lixeiro e amplamente empregado na actualidade
        - Como o seu nome indica, JSON baséase na sintaxe que ten Javascript para crear obxectos.
        - Ten unha estrutura totalmente compatible de forma nativa con Javascript.
        - Pode empregarse, e de feito emprégase, de maneira independiente a JAvascript

        Un ficheiro JSON baleiro ten a seguinte sintaxe:
            {}

        Un exemplo con datos:
            {
                "traballadores": [
                    {
                        "nome": "Xoana",
                        "departamento": "informática"
                    },
                    {
                        "nome": "Alberto",
                        "departamento": "vendas"
                    },
                    {
                        "nome": "Alex",
                        "departamento": "administración"
                    }
                ]
            }

        Os JSON son cadeas, útiles cando se desexa transmitir datos a través dunha rede.
        Debe converterse nun obxecto JavaScript nativo cando sexa necesario acceder aos seus datos.
        Para facer as conversións entre string e Object, JavaScript dispón dun obxecto JSON,
        que ten dispoñibles os métodos necesarios para esta tarefa

        A conversión de cadea a obxeto denomínase parseado
        A conversión de obxecto a cadea denomínase stringficación

        Se comparamos un JSON cun obxecto Javascript, aparecen algunhas pequenas diferenzas:

            - Nos JSON as chaves das propiedades deben estar entre comiñas dobres
            - Nos JSON os tipos String deben ir entre comiñas dobres
            - Os JSON só poden almacenar os seguintes tipos de datos:
                - string
                - number
                - object
                - array
                - boolean
                - null
            - Os JSON non poden almacenar:
                - comentarios
                - métodos
                - Expresións regulares
                - Date
*/

const listaxeJSON = `{
                "traballadores": [
                    {
                        "nome": "Xoana",
                        "departamento": "informática"
                    },
                    {
                        "nome": "Alberto",
                        "departamento": "vendas"
                    },
                    {
                        "nome": "Alex",
                        "departamento": "administración"
                    }
                ]
            }`;

const listaxeParseada = JSON.parse(listaxeJSON);
console.log("\nlistaxeParseada: ", Object.entries(listaxeParseada));

const listaxe = {
    traballadores: [
        {
            nome: "Xoana",
            departamento: "informática",
        },
        {
            nome: "Alberto",
            departamento: "vendas",
        },
        {
            nome: "Alex",
            departamento: "administración",
        },
    ],
};

const listaxeStrinficada = JSON.stringify(listaxe);
console.log("\nlistaxeStrinficada: ", listaxeStrinficada, "\n");