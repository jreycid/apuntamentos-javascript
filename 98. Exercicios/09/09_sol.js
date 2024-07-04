/*
    Necesítase unha nova función para a lóxica dunha rede social
    Cada membro da rede social ten asociado un array de amigos.

    Pídese programar unha función que reciba dito array xunto
    con un string dun posible novo amigo.
    Se o amigo xa existe no array, debemos informar mediante unha mensaxe.
    Se o amigo non existe no array, engadímolo e informamos mediante mensaxe.

*/

function actualizaListaAmizades(amizades, amigo) {
    if (amizades.indexOf(amigo) === -1) {
        amizades.push(amigo);
        console.log(`Novo amizade engadida: ${amigo}`);
    } else {
        console.log(`${amigo} xa existía no listado.`);
    }
}

const amizades = ['Xoán', 'Nuria', 'Laura', 'Alex'];

actualizaListaAmizades(amizades, 'Laura');
actualizaListaAmizades(amizades, 'Nacho');