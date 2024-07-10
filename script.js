// Datos de ejemplo para los turnos (pueden ser reemplazados por una base de datos)
let turnosReservados = [];

// Obtener elementos del DOM
const listaTurnos = document.getElementById('lista-turnos');
const modal = document.getElementById('modal-confirmacion');
const modalInfo = document.getElementById('modal-info');
const confirmarBtn = document.getElementById('confirmar-btn');
const cancelarBtn = document.getElementById('cancelar-btn');
const closeBtn = document.querySelector('.close');

// Función para mostrar los turnos reservados
function mostrarTurnos() {
    listaTurnos.innerHTML = ''; // Limpiar lista
    turnosReservados.forEach(turno => {
        const li = document.createElement('li');
        li.textContent = `${turno.fecha} - ${turno.hora} - ${turno.cliente}`;
        listaTurnos.appendChild(li);
    });
}

// Función para abrir modal de confirmación
function abrirModal(fecha, hora) {
    modalInfo.textContent = `¿Confirmar reserva para ${fecha} a las ${hora}?`;
    modal.style.display = 'block';
}

// Función para cerrar modal
function cerrarModal() {
    modal.style.display = 'none';
}

// Event listener para confirmar reserva
confirmarBtn.addEventListener('click', function() {
    // Aquí se puede implementar la lógica para guardar el turno en una base de datos
    // Por ahora, simularemos la reserva añadiendo el turno a la lista
    const fecha = modalInfo.textContent.split(' ')[3];
    const hora = modalInfo.textContent.split(' ')[5];
    const cliente = 'Nombre del cliente'; // Puedes implementar la lógica para capturar el nombre del cliente
    turnosReservados.push({ fecha, hora, cliente });
    mostrarTurnos();
    cerrarModal();
});

// Event listener para cancelar reserva
cancelarBtn.addEventListener('click', cerrarModal);

// Event listener para cerrar modal
closeBtn.addEventListener('click', cerrarModal);

// Función principal para inicializar la página
function inicializarPagina() {
    // Implementar aquí la lógica para el calendario interactivo y manejo de turnos
    mostrarTurnos(); // Mostrar los turnos al cargar la página
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', inicializarPagina);
