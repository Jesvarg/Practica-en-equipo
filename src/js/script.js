document.addEventListener('DOMContentLoaded', (event) => {
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    const tareaForm = document.getElementById('tarea-form');
    tareaForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        const fechaLimite = document.getElementById('fecha-limite').value;
        const prioridad = document.getElementById('prioridad').value;

        const tarea = {
            titulo,
            descripcion,
            fechaLimite,
            prioridad
        };

        let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));

        tareaForm.reset();
        alert('Tarea guardada en correctamente');
    });

    const reservaForm = document.getElementById('reserva-form');
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        const now = new Date().toISOString().slice(0, 16);
        fechaInput.setAttribute('min', now);
    }

    reservaForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value;
        const personas = document.getElementById('personas').value;

        const reserva = {
            nombre,
            telefono,
            fecha,
            personas
        };

        let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        reservas.push(reserva);
        localStorage.setItem('reservas', JSON.stringify(reservas));

        reservaForm.reset();
        alert('Reserva guardada correctamente');
    });

});