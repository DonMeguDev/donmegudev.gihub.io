const textarea              = document.getElementById('textarea');
const botonAlAgua           = document.getElementById('botonAlAgua');
const botonGanador          = document.getElementById('botonGanador');
const lista                 = document.getElementById('lista');
const tituloGanador         = document.getElementById('ganador');
const numeroParticipantes   = document.getElementById('participantes');

let nombres = '';

textarea.addEventListener('keyup', (e) => {
    replaceText(e.target.value);
});

function replaceText(input) {
    textarea.value = input.replace(/\n/g,',');
    const participantes = textarea.value.split(',').filter(participante => participante.trim()!== '').map(participante => participante.trim());
    contarParticipantes(participantes.length);
    nombres = participantes;
}

function contarParticipantes(cantidad) {
    numeroParticipantes.innerHTML = cantidad + ' participantes';
}

botonAlAgua.addEventListener('click', () => {
    tituloGanador.innerHTML = 'Al Agua';
    tituloGanador.style.visibility = "visible";
    realizarSorteo();
});

botonGanador.addEventListener('click', () => {
    tituloGanador.innerHTML = 'Ganador';
    tituloGanador.style.visibility = "visible";
    realizarSorteo();
});

function sortear() {
    return Math.floor(Math.random() * nombres.length);
}

function realizarSorteo() {
    if(nombres.length > 0){
        const timerId = setInterval(() => {
            const ganador = sortear();
            lista.innerHTML = nombres[ganador];
        }, 50);
        setTimeout(() => {
            clearInterval(timerId);
        }, 3000);
    } else {
        lista.innerHTML = 'No participantes';
    }
}