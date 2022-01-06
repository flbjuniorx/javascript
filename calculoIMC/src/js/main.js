// Seleciona o elemento id="formulario" e atribui a uma constante
const form = document.querySelector('#formulario');

// Capturar evento de submit do formulário
form.addEventListener('submit', function (e) { // Captura o evento 'submit' dentro do formulario
    e.preventDefault(); // Previne a execução default do 'submit' (envio do form mostra a pasta raiz do servidor)
    
    const peso = Number(e.target.querySelector('#peso').value);
    const altura = Number(e.target.querySelector('#altura').value);

    if (!peso) {
        setResultado('Peso inválido', false);
        console.log('Parâmetro "peso" incorreto')
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        console.log('Parâmetro "altura" incorreto')
        return;
    }

    const imc = calculaIMC(peso, altura);
    const nivel = getNivelImc (imc);

    const msg = `Seu IMC é ${imc} (${nivel})`
    setResultado(msg, true);
});

function calculaIMC(peso, altura) {
    const IMC = (peso / (altura ** 2));
    return IMC.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Ideal', 'Pré-obesidade', 'Obesidade classe 1', 'Obesidade classe 2', 'Obesidade classe 3']

    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >=25) return nivel[2];
    if (imc >=18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado'); // Busca o elemento id=resultado
    resultado.innerHTML = '';   // Limpa a div primeiramente

    const p = document.createElement('p');

    // Seta a classe de acordo com o resultado (válido/inválido)
    if (isValid) {
        p.classList.add('resultado-valido');
    } else { 
        p.classList.add('resultado-invalido');
    }

    p.innerHTML = msg;          // insere o texto no elemento
    resultado.appendChild(p);   // insere o parágrafo na div resultado dentro do HTML
}