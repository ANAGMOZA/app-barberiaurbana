document.getElementById('barberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Traer inputs
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Limpiar errores previos
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    document.getElementById('form-success').classList.remove('visible');

    let isValid = true;

    // Validación Nombre
    if (nombre === '') {
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
        isValid = false;
    }

    // Validación Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('error-email').textContent = 'El correo electrónico es obligatorio.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('error-email').textContent = 'Ingresa un correo electrónico válido.';
        isValid = false;
    }

    // Validación Asunto
    if (asunto === '') {
        document.getElementById('error-asunto').textContent = 'El asunto es obligatorio.';
        isValid = false;
    }

    // Validación Mensaje
    if (mensaje === '') {
        document.getElementById('error-mensaje').textContent = 'El mensaje no puede estar vacío.';
        isValid = false;
    }

    // Mostrar éxito si todo pasa
    if (isValid) {
        document.getElementById('form-success').classList.add('visible');
        document.getElementById('barberForm').reset();
    }
});