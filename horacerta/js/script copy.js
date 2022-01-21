function formatDate(d) {
    weekDay = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(d);

    day = d.getDate();
    month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(d);
    year = d.getFullYear();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds(); 

    return `${weekDay}, ${zeroLeft(day)} de ${month} de ${year} ${zeroLeft(hour)}:${zeroLeft(minute)}:${zeroLeft(second)}`;
}

function zeroLeft(n) {
   return n >= 10 ? n : `0${n}`;
}

const header = document.querySelector('.container h1');
const agora = new Date();

header.innerHTML = formatDate(agora);