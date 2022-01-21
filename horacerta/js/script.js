const header = document.querySelector('.container h1');
const moment = new Date();
const options = {
    dateStyle: 'full',
    timeStyle: 'medium'
};

header.innerHTML = moment.toLocaleString('pt-BR', options);