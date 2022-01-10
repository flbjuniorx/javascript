function meuEscopo() {

    // Assign constants to form and table in HTML page
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('#resultado');

    // This array will store the person's data
    const pessoas = [];

    function recebeEventoForm (evento) {
        // For now, we don't want to submit the form. If so, this will refresh the page and lose form's data
        evento.preventDefault();

        // Get form data and set to list
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");
        const pessoa = {nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value};

        // Pushes person object to father array
        pessoas.push(pessoa);

        // Logs array for debugging
        console.log(pessoas);

        // Appends row in table
        resultado.innerHTML += `<tr><td>${pessoa.nome}</td><td>${pessoa.sobrenome}</td><td>${pessoa.peso}</td><td>${pessoa.altura}</td></tr>`;

        // Clean form        
        form.reset();

        // Get cursor back to "Nome"
        nome.focus();
    }

    // Listener for 'submit' event and calls 'recebeEventoForm' function
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();