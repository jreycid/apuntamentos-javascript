/*
 * EXERCICIO:
 * - Mostra exemplos de creación de todas as estruturas admitidas por defecto en JS.
 * - Usa operacións de inserción, eliminación, actualización e ordenación.
 *
 * DIFICULTADE EXTRA (opcional):
 * Crea unha axenda de contactos por terminal.
 * - Debes implementar funcións de busca, inserción, actualización e eliminación de contactos.
 * - Cada contacto debe ter un nome e un número de teléfono.
 * - O programa pregunta primeiro que operación quere realizar, e despois
 *   os datos necesarios para levala a cabo.
 * - O programa non pode permitirche introducir números de teléfono non numéricos con máis de 11 díxitos.
 *   (ou o número de díxitos que queiras)
 * - Tamén se debe propoñer unha operación de terminación do programa.
 */

/*
    EXERCICIO
*/

// Arrays

const autos = ["Mercedes", "RedBull", "Mclaren"];
console.log(Object.keys(autos));

console.log(autos.length);
console.log(autos[1]);

let first = autos[0];
let end = autos[autos.length - 1];
console.log(first);
console.log(end);

autos.push("Williams", "Aston Martin");
console.log(autos);

autos.pop();
console.log(autos);

autos.shift();
console.log(autos);

let search = autos.indexOf("Williams");
console.log(search);

autos.splice(search, 1);
console.log(autos.splice(search, 1));
console.log(autos);

autos[1] = "HAAS";
console.log(autos);

console.log(autos.sort());

// Obxectos

const computadora = {
    procesador: "Intel-I7",
    teclado: "Dell",
    monitor: "HP",
    mouse: "Logitech",
    internet: true,
};

console.log(computadora);
console.log(computadora.monitor);

computadora.pulgadaMonitor = 18;
console.log(computadora);

computadora.teclado = "Generico";
computadora["mouse"] = "ElGato";
console.log(computadora);

delete computadora.teclado;
console.log(computadora);

//Función constructora dun Obxecto e instancias de obxectos
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
let mycar = new Car("Eagle", "Talon TSi", 1993);
console.log(mycar); //Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let rand = new Person("Rand McKinnon", 33, "M");
let ken = new Person("Ken Jones", 39, "M");

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);

console.log(car1);
console.log(car2.owner.name);

// Set

const setCreator = new Set([1, 2, 3, 4, 5]);

console.log(setCreator.has(1)); //true
console.log(setCreator.has(8)); //false

setCreator.add("Texto Libre");
const objectSet = {
    nombre: "JavaScript",
    version: "ECMAScript 6",
};
setCreator.add(10).add("Outro texto");
setCreator.add(objectSet);
console.log(setCreator);

console.log(setCreator.size);

console.log(setCreator.delete(1));

setCreator.clear();
console.log(setCreator.size);
console.log(setCreator);

// Map

let prefixos = new Map();

// set(clave, valor): almacena o valor asociado á claves
prefixos.set(981, "A Coruña");
prefixos.set(986, "Lugo");
prefixos.set(988, "Ourense");
prefixos.set(982, "Pontevedra");

// get(clave): devolve o valor asociado á clave ou undefined se a clave non existe no map
console.log(prefixos.get(986));

// size: tamaño do map
console.log(prefixos.size);

// has(clave): devolve true se a clave existe no map, false se non existe
console.log(prefixos.has(981));

// delete(clave): elimina o elemento indicado pola súa clave
prefixos.delete(982);
console.log(prefixos.has(982));

// clear(): elimina todos os elementos do map
prefixos.clear();
console.log(prefixos.size);


/*
    DIFICULTADE EXTRA
*/
const prompt = require("prompt-sync")();

const listContact = new Map([["Jose", "612612612"]]);

panelPrincipal();

function panelPrincipal() {
    let is_on = true;

    console.log("\nBenvido á axenda de contactos:\n");
    while (is_on) {
        console.log("0: Ver lista de contactos.");
        console.log("1: Buscar un contacto.");
        console.log("2: Agregar un nuevo contacto.");
        console.log("3: Actualizar un contacto.");
        console.log("4: Eliminar un contacto.");
        console.log("5: Salir da axenda.\n");

        let numberOption = prompt("Escolle unha opción ");

        let name = null;
        let phone = null;

        switch (numberOption) {
            case "0":
                console.log(`Hai ${listContact.size} contactos na axenda`);
                for (let [key, value] of listContact) {
                    console.log(`Nome: ${key} Teléfono: ${value}`);
                }
                console.log();
                break;
            case "1":
                name = prompt(`Introduce o nome do contacto que buscas: `);
                if (listContact.has(name)) {
                    let phoneNumber = listContact.get(name);
                    console.log(
                        `Contacto: ${name}, teléfono: ${phoneNumber}\n`
                    );
                } else {
                    console.log(`O contacto ${name} non existe.\n`);
                }
                break;
            case "2":
                name = prompt(`Escribe o nome do novo contacto: `);
                phone = parseInt(prompt(`Escribe o número do novo contacto: `));
                if (/^\d{9}$/.test(phone)) {
                    listContact.set(name, phone);
                    console.log(`O contacto ${name} foi agregado con éxito.\n`);
                } else {
                    console.log(
                        "O número de télefono ten que ter 9 díxitos.\n"
                    );
                }
                break;
            case "3":
                name = prompt(
                    `Introduce o nome do contacto que queres actualizar: `
                );
                if (listContact.has(name)) {
                    phone = parseInt(
                        prompt(`Escribe o novo número de ${name} `)
                    );
                    if (/^\d{9}$/.test(phone)) {
                        listContact.set(name, phone);
                        console.log(`O contacto ${name} foi actualizado.\n`);
                    } else {
                        console.log(
                            `No se puido actualizar o contacto ${name}`
                        );
                        console.log(
                            "O número de teléfono, debe ter 9 díxitos.\n"
                        );
                    }
                } else {
                    console.log(`O contacto ${name} non existe\n`);
                }
                break;
            case "4":
                name = prompt(
                    `Introduce o nome do contacto que queres eliminar: `
                );
                if (listContact.has(name)) {
                    listContact.delete(name);
                    console.log(`O contacto ${name} foi eliminado.\n`);
                } else {
                    console.log(`O contacto ${name} non existe.\n`);
                }
                break;
            case "5":
                console.log("Saíndo da axenda.");
                is_on = false;
                break;
            default:
                console.log(
                    "Opción incorrecta, selecciona unha opción do 0 ao 5.\n"
                );
                break;
        }
    }
}
