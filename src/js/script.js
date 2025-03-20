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
        alert('Tarea guardada correctamente');
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

    // Función para mostrar reservas en el modal
    const mostrarReservas = () => {
        const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        const modalReservas = document.getElementById('reservas-modal');
        const listaReservas = document.getElementById('reservas-list');
        
        listaReservas.innerHTML = '';
        reservas.forEach((reserva, index) => {
            const item = document.createElement('div');
            item.innerHTML = `
                <h3>Reserva ${index + 1}</h3>
                <p>Nombre: ${reserva.nombre}</p>
                <p>Telefono: ${reserva.telefono}</p>
                <p>Fecha: ${reserva.fecha}</p>
                <p>Personas: ${reserva.personas}</p>
                <hr>
            `;
            listaReservas.appendChild(item);
        });
        modalReservas.open = true;
    };

    // Función para mostrar tareas en el modal
    const mostrarTareas = () => {
        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        const modalTareas = document.getElementById('tareas-modal');
        const listaTareas = document.getElementById('tareas-list');
        
        listaTareas.innerHTML = '';
        tareas.forEach((tarea, index) => {
            const item = document.createElement('div');
            item.innerHTML = `
                <h3>Tarea ${index + 1}</h3>
                <p>Título: ${tarea.titulo}</p>
                <p>Descripción: ${tarea.descripcion}</p>
                <p>Fecha límite: ${tarea.fechaLimite}</p>
                <p>Prioridad: ${tarea.prioridad}</p>
                <hr>
            `;
            listaTareas.appendChild(item);
        });
        modalTareas.open = true;
    };

    // Event listeners para los botones de ver
    document.getElementById('ver-reservas-modal').addEventListener('click', mostrarReservas);
    document.getElementById('ver-tareas-modal').addEventListener('click', mostrarTareas);

    // Event listeners para cerrar los modales
    document.getElementById('close-reservas-modal').addEventListener('click', () => {
        document.getElementById('reservas-modal').open = false;
    });

    document.getElementById('close-tareas-modal').addEventListener('click', () => {
        document.getElementById('tareas-modal').open = false;
    });
});
