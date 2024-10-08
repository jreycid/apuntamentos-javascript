/*
    Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer,
    en una carretera del Polo Norte. La carretera se representa con una
    cadena de caracteres, donde:

    . = Carretera
    S = Trineo de Santa
    * = Barrera abierta
    | = Barrera cerrada

    Ejemplo de carretera: S...|....|.....

    Cada unidad de tiempo, el trineo avanza una posición a la derecha.
    Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra.
    Si está abierta, la atraviesa directamente.

    Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo,
    se abren todas para siempre.

    Crea una función que simule el movimiento del trineo durante un tiempo dado
    y devuelva un array de cadenas representando el estado de la carretera
    en cada unidad de tiempo:

    Ejemplo:

    const road = 'S..|...|..'
    const time = 10 // unidades de tiempo
    const result = cyberReindeer(road, time)

    Resultado:
    [
    'S..|...|..', // estado inicial
    '.S.|...|..', // avanza el trineo la carretera
    '..S|...|..', // avanza el trineo la carretera
    '..S|...|..', // el trineo para en la barrera
    '..S|...|..', // el trineo para en la barrera
    '...S...*..', // se abre la barrera, el trineo avanza
    '...*S..*..', // avanza el trineo la carretera
    '...*.S.*..', // avanza el trineo la carretera
    '...*..S*..', // avanza el trineo la carretera
    '...*...S..', // avanza por la barrera abierta
    ]

*/
function cyberReindeer(road, time) {
    const snapshots = [road];

    let sledIdx = road.indexOf("S");
    let sledChar = ".";
    let auxRoad = road;

    for (let i = 1; i < time; i++) {
        if (i === 5) {
            road = road.replaceAll("|", "*");
            auxRoad = auxRoad.replaceAll("|", "*");
            sledChar = sledChar.replaceAll("|", "*");
        }
        if (auxRoad.charAt(sledIdx + 1) === "|") {
            snapshots.push(auxRoad);
            continue;
        }
        auxRoad =
            auxRoad.substring(0, sledIdx) +
            sledChar +
            "S" +
            auxRoad.substring(sledIdx + 2);
        sledIdx++;
        sledChar = road.charAt(sledIdx);
        snapshots.push(auxRoad);
    }
    return snapshots;
}

const road = "S..|...|..";
const time = 10;
console.log(cyberReindeer(road, time));
