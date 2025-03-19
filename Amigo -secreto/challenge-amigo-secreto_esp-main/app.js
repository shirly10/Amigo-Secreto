// 🏆 Desafío para mejorar la lógica de programación: Implementar un sorteo de "Amigo Secreto".
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const inputAmigo = document.getElementById('amigo');

let amigos = [];

// 📌 Función para añadir un nuevo participante a la lista
function agregarAmigo() {
    const nombreIngresado = inputAmigo.value.trim(); // Elimina espacios extras

    if (!nombreIngresado || !isNaN(nombreIngresado)) {
        alert('⚠️ Por favor, introduce un nombre válido.');
        return;
    }

    if (amigos.length === 10) {
        alert('🚫 Has alcanzado el número máximo de 10 participantes.');
        return;
    }

    amigos.push(nombreIngresado); // Agrega el participante
    actualizarListaAmigos(); // Refresca la vista
    inputAmigo.value = ''; // Limpia el input
    inputAmigo.focus(); // Enfoca de nuevo
}

// 🔄 Función para mostrar la lista de participantes
function actualizarListaAmigos() {
    listaAmigos.innerHTML = ''; // Limpia antes de actualizar
    amigos.forEach((persona, indice) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `🎈 Participante ${indice + 1}: ${persona}`;
        listaAmigos.appendChild(itemLista);
    });
}

// 🎲 Función para seleccionar al amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('⚠️ Se necesitan al menos 2 jugadores para sortear.');
        return;
    }

    const seleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    listaAmigos.innerHTML = ''; // Borra la lista visual
    resultado.innerHTML = `<li>🎊 ¡El amigo secreto es: <strong>${seleccionado}</strong>! 🎊</li>`;

    // Reiniciar después de mostrar el resultado
    setTimeout(() => {
        amigos = []; // Reinicia la lista
        actualizarListaAmigos(); // Refresca la pantalla
        resultado.innerHTML = ''; // Borra mensaje
        alert('🔄 Juego reiniciado. ¡Añade nuevos jugadores!');
    }, 5000);
}
