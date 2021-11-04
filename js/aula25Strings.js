/*
Exercício com strings.
*/
// Entrada
const nome = prompt('Digite seu nome completo:');

// Escolhe uma letra aleatória no nome.
let letra = nome.trim().charAt(Math.random() * nome.length);

document.body.innerHTML += `Seu nome é: <b>${nome}</b><br />`;
document.body.innerHTML += `Seu nome tem <b>${nome.length}</b> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <b>${nome.charAt(1)}</b><br />`;
document.body.innerHTML += `Qual o primeiro índice da letra <b>${letra}</b> no seu nome? <b>${nome.indexOf(letra)}</b> <br />`;
document.body.innerHTML += `Qual o último índice da letra <b>${letra}</b> no seu nome? <b>${nome.lastIndexOf(letra)}</b> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <b>${nome.charAt(nome.length - 3)}</b> <br />`;
document.body.innerHTML += `As palavras do seu nome são: <b>${nome.split(" ")}</b><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <b>${nome.toUpperCase()}</b><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <b>${nome.toLowerCase()}</b><br />`;