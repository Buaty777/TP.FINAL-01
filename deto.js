const piano = new Tone.Synth().toDestination();
const violin = new Tone.Synth().toDestination();
const pianoNotas = ["C4", "E4", "G4", "B4"];
const violinNotas = ["G3", "B3", "D4", "F4"];
let index = 0;

Tone.Transport.scheduleRepeat((time) => {
    piano.triggerAttackRelease(pianoNotas[index], "8n", time);
    violin.triggerAttackRelease(violinNotas[index], "8n", time);
    index = (index + 1) % pianoNotas.length;
}, "4n");

function iniciarMusica() {
    Tone.start().then(() => {
        Tone.Transport.start();
    });
}

function activarPlay() {
    iniciarMusica();
}

function activarPausa() {
    Tone.Transport.pause();
}

function cambiarVolumen(valor) {
    Tone.Master.volume.value = valor - 100;
}

function togglePanelSonido() {
    const panel = document.getElementById('menu-sonido');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

let resultado = "";

function agregarNumero(numero) {
    resultado += numero;
    document.getElementById('resultado').value = resultado;
}

function agregarOperacion(operacion) {
    resultado += operacion;
    document.getElementById('resultado').value = resultado;
}

function limpiar() {
    resultado = "";
    document.getElementById('resultado').value = resultado;
}

function calcular() {
    try {
        const total = eval(resultado);
        mostrarMensaje(total);
        resultado = "";
        document.getElementById('resultado').value = resultado;
    } catch (e) {
        alert("Error en la operación");
    }
}

function mostrarMensaje(total) {
    let mensaje = document.getElementById('mensaje');
    let npcDialogo = document.getElementById('texto-dialogo');
    const dialogoNPC = [
        "Ay Holis!!!! Me dices cuanto sería el jabón y dos refrescos tres chetos y un queso plis?",
        "ayyy muchas gracias!!!",
        "oye!!! Esto es una estafa...",
        "oh!!! Una ganga!!!"
    ];

    mensaje.innerHTML = `Total: ${total}`;
    npcDialogo.innerHTML = dialogoNPC[0];
    
    if (total === 4600) {
        npcDialogo.innerHTML = dialogoNPC[1];
    } else if (total > 4600) {
        npcDialogo.innerHTML = dialogoNPC[2];
    } else if (total < 4600) {
        npcDialogo.innerHTML = dialogoNPC[3];
    }
}

function toggleCalculadora() {
    const calculadora = document.getElementById('calculadora');
    calculadora.style.display = calculadora.style.display === 'none' ? 'block' : 'none';
}

function togglePrecios() {
    const listaPrecios = document.getElementById('lista-precios');
    listaPrecios.style.display = listaPrecios.style.display === 'none' ? 'block' : 'none';
}


function mostrarNPC() {
    const npc = document.getElementById('npc');
    npc.classList.add('mostrar-npc');
}

document.addEventListener('DOMContentLoaded', mostrarNPC);
