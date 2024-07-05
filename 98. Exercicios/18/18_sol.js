const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
    output.textContent = acurtar(event.currentTarget.value);
});

/**
 * @param {string} texto
 *
 * Completar a función acurtar de xeito que devolva
 * os primeiros 10 caracteres do parámetro de texto que recibe.
 * Unha vez alcanzados, engadirlles "..."
 *
 */
function acurtar(texto) {
    let firstTen;

    if (texto.length <= 10) firstTen = texto;
    else firstTen = texto.slice(0, 10).concat("...");

    return firstTen;
}
