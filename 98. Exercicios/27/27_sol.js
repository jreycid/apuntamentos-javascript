/*
    Partindo da páxina web proporcionada e usando as funcións DOM,
    mostra a seguinte información no div informacion do html:

    1. Número de ligazóns na páxina
    2. Enderezo ao que enlaza a penúltima ligazón
    3. Número de ligazóns que enlazan a http://proba
    4. Número de ligazóns no terceiro parágrafo
*/
window.onload = function () {
    var info = document.getElementById("informacion");

    // 1. Número de ligazóns na páxina
    var enlaces = document.getElementsByTagName("a");
    console.log(enlaces);
    info.innerHTML = "Número de ligazóns = " + enlaces.length;

    // 2. Enderezo ao que enlaza a penúltima ligazón
    var mensaje =
        "A penultima ligazón apunta a: " + enlaces[enlaces.length - 2].href;
    info.innerHTML = info.innerHTML + "<br/>" + mensaje;

    // 3. Número de ligazóns que enlazan a http://proba
    var contador = 0;
    for (var i = 0; i < enlaces.length; i++) {
        // É necesario comprobar as ligazóns http://proba e
        // http://proba/ polas diferenzas entre navegadores
        if (
            enlaces[i].href == "http://proba" ||
            enlaces[i].href == "http://proba/"
        ) {
            contador++;
        }
    }
    info.innerHTML =
        info.innerHTML +
        "<br/>" +
        contador +
        " ligazóns apuntan a http://proba";

    // 4. Número de ligazóns no terceiro parágrafo
    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");
    info.innerHTML =
        info.innerHTML +
        "<br/>" +
        "Número de ligazóns no terceiro parágrafo = " +
        enlaces.length;
};
