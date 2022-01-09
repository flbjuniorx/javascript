const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById('numero');
const text = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
text.innerHTML = (`<p>É número mesmo? ${!isNaN(numero)}</p>`);
if (isNaN(numero)) { 
    text.innerHTML = ('Digite um valor numérico.') 
} else {
    text.innerHTML += (`<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`);
    text.innerHTML += (`<p>É inteiro? ${Number.isInteger(numero)}</p>`);
    if (Number.isInteger(numero) == false) {
        text.innerHTML += (`<p>Arredondado para cima: ${Math.ceil(numero)}</p>`)
        text.innerHTML += (`<p>Arredondado para baixo: ${Math.floor(numero)}</p>`);
        text.innerHTML += (`<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`);
    }
}



