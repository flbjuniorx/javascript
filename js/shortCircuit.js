/* Short-circuit evaluation - forma de teste de valores alternativa ao uso de condicionais

Operadores lógicos:
&& - false se qualquer for falsy
|| - true se qualquer for truthy

São entendidos como falsy:
- false
- 0 (zero)
- null
- "" (empty string)
- undefined
- NaN (not a number)

Avaliação da esquerda para a direita, assim que encontra um valor true (||) ou false (&&) interrompe a 
execução e retorna o primeiro resultado. Caso não encontre nenhum, retorna o último.

Similar a teste condicional (if, then, else)
*/

console.log('Tabela verdade OR (||)')
console.log('primeira' || 'segunda') // primeira
console.log(true || false) // true
console.log(false || true) // true
console.log(false || null) // null
console.log('\nTabela verdade AND (&&)')
console.log('primeira' && 'segunda') // segunda
console.log(true && false) // false
console.log(false && true) // false
console.log(false && null) // false

console.log('\nTeste pessoa')
var person = {
    name: 'Jack',
    age: 34
}

// Se person.job falsy, retorna próximo valor
function personOut(person) {
    console.log('Name: %s', person.name)
    console.log('Age: %d', person.age)
    console.log('Job: %s', person.job || "unemployed" )
    console.log('\n')
}

personOut(person)

// Passou a existir / retorna o primeiro valor truthy
person.job = 'Lawyer'
//console.log(person.job || "unemployed")
personOut(person)

// Sequencia de testes - interrompe no primeiro truthy
var a
var b = null
var c = undefined
var d = (4 && "Variável d")    // Teste aninhado (retorna o último valor)
var e = 'five'

var f = a || b || c || d || e
console.log(f)

// Teste para executar uma função

function qualquer () {
    console.log("Executou a função")
}

let teste = 1 // Qualquer função que retorne falsy se não atendida

teste && qualquer() // Se teste = falsy, não executa

// Substituindo if-else (exemplo aula 42)
numero = 0
console.log((numero < 5 && "menor que 5") || 
(numero < 10 && "menor que 10") || 
(numero < 20 && "menor que 20") || 
'maior que 20')