/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84.0;
const altura = 1.8;
let imc;
let anoNascimento;
let anoCorrente = new Date().getFullYear;

imc = peso / (altura ^ 2);
anoNascimento = anoCorrente - idade;

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} e hoje (${anoCorrente}) tem ${idade} anos de idade.`);
console.log(`Pesa ${peso} kg e mede ${altura} m de altura, logo seu IMC é ${parseFloat(imc).toPrecision(3)}.`);