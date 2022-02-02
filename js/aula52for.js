/* Laço For classico
console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')
*/

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

/* Varredura de Array */

const frutas = ['Maçã', 'Melão', 'Melancia', 'Banana', 'Goiaba'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i+1}ª ${frutas[i]}`);
}

