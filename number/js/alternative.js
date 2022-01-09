/*
Versão alternativa
- separação texto HTML e lógica Javascript
- uso de classe
*/

const numero = Number(prompt("Digite um número:")); // Recebe o número do usuário
const numeroTitulo = document.getElementById('numero'); // Seleciona o elemento id=numero no título h2
numeroTitulo.innerHTML = numero; // Insere o número no título h2

let text = document.getElementsByClassName('texto'); // Seleciona todos os elementos com a classe texto (array)
text[0].innerHTML = (`${!isNaN(numero)}`); // text[0] = 1ª pergunta (É NaN?)
if (isNaN(numero)) {    // Se não for numérico, retorna a mensagem e encerra a renderização do HTML
    text[0].innerHTML += ('<p>Digite um valor numérico.</p>');
    const numerico = document.getElementById('numerico');
    numerico.innerHTML = "";
} else {
    text[1].innerHTML = (`${Math.sqrt(numero)}`);
    text[2].innerHTML += (`${Number.isInteger(numero)}`);
    if (!Number.isInteger(numero)) {      // Se não for fração, encerra a renderização do HTML
        text[3].innerHTML += (`${Math.ceil(numero)}`)
        text[4].innerHTML += (`${Math.floor(numero)}`);
        text[5].innerHTML += (` ${numero.toFixed(2)}`);
    } else {
        const fracao = document.getElementById("fracao");
        fracao.innerHTML = "";
    }
}