/* 
Criação dinâmica de elementos HTML com uso do laço 'for'
*/

const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'},
];

// Cria o elemento 'div' dinamicamente
const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);

/* Solução 1 - uso de innerHTML - cria o elemento como texto
for ( let i = 0; i < elements.length; i++ ) {
    // console.log(elements[i]);
    let { tag, text } = elements[i];
    console.log(tag);
    container.innerHTML += (`<${tag}>${text}</${tag}>`);
}
*/

/* Solução 2 - FOR padrão, uso de createElement
for ( let i = 0; i < elements.length; i++ ) {   // Classic FOR
    // console.log(elements[i]);    // Debug
    let { tag, text } = elements[i];    // Attribution by destructuring
    let createdTag = document.createElement(tag);   // Cria um elemento com a tag e atribui a uma variável
    createdTag.innerText = text;    // Como sabemos que o conteúdo é texto, pode usar esse método.
    div.appendChild(createdTag);    // Inclui o elemento na div HTML
}
*/

/* Solução 3 - FOR .. OF */
for (const element of elements) {
    let { tag, text } = element;
    let createdTag = document.createElement(tag);
    createdTag.innerText = text;
    div.appendChild(createdTag);
}



