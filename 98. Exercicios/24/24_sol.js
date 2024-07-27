/*
    Recrea empregando JavaScript a páxina web da imaxe.

    Cando o usuario introducza unha cadea e pulse saudar,
    debes saudalo empregando o seu nome desde un alert
*/
const titulo = document.createElement('h1');
titulo.innerText = 'Saúdote desde JavaScript';
document.body.append(titulo);

const label = document.createElement('label');
label.innerText = 'Introduce o teu nome ';
document.body.append(label);

const input = document.createElement('input');
document.body.append(input);

const boton = document.createElement('button');
boton.innerText = 'Saudar';
document.body.append(boton);

boton.onclick = () => {
    const nome = input.value;
    if (nome.length !== 0)
        alert(`Hola ${nome}`)
}