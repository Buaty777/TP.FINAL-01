const piano = new Tone.Synth().toDestination();
const violin = new Tone.Synth().toDestination();
const pianoNotas = ["C4", "E4", "G4", "B4"];
const violinNotas = ["G3", "B3", "D4", "F4"];
let index = 0;

Tone.Transport.scheduleRepeat(time => {
    piano.triggerAttackRelease(pianoNotas[index % pianoNotas.length], "8n", time);
    violin.triggerAttackRelease(violinNotas[index % violinNotas.length], "8n", time + 0.5);
    index++;
}, "1n");
Tone.Transport.bpm.value = 80;

function cambiarVolumen(valor) {
    Tone.Master.volume.value = -30 + (valor / 3.3);
}

function activarPlay() {
    Tone.start().then(() => {
        Tone.Transport.start();
    });
}

function activarPausa() {
    Tone.Transport.stop();
}

function toggleCalculadora() {
    const calculadora = document.getElementById("calculadora");
    calculadora.style.display = calculadora.style.display === "block" ? "none" : "block";
}

function togglePrecios() {
    const lista = document.getElementById("lista-precios");
    lista.style.display = lista.style.display === "block" ? "none" : "block";
}

function togglePanelSonido() {
    const panel = document.getElementById("menu-sonido");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function agregarNumero(numero) {
    document.getElementById("resultado").value += numero;
}

function agregarOperacion(operacion) {
    document.getElementById("resultado").value += operacion;
}

function limpiar() {
    document.getElementById("resultado").value = "";
}

function calcular() {
    try {
        const resultado = eval(document.getElementById("resultado").value);
        document.getElementById("resultado").value = resultado;
        mostrarMensajeSegunResultado(resultado);
    } catch (error) {
        document.getElementById("resultado").value = "Error";
    }
}

function mostrarMensajeSegunResultado(resultado) {
    const mensaje = document.getElementById("mensaje");
    if (resultado === 7300) {
        mensaje.textContent = "¡Ayyy muchas gracias!";
    } else if (resultado > 7300) {
        mensaje.textContent = "¡Oye! Esto es una estafa...";
    } else if (resultado < 7300) {
        mensaje.textContent = "¡Oh! Una ganga...";
    } else {
        mensaje.textContent = "";
    }
}
