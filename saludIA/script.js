// Contador de visitas (ejemplo básico, usar una base de datos en producción)
let contadorVisitas = document.getElementById('contadorVisitas');
let visitas = localStorage.getItem('visitas');
visitas = visitas ? parseInt(visitas) + 1 : 1;
contadorVisitas.textContent = visitas;
localStorage.setItem('visitas', visitas);

// Envío del formulario (ejemplo básico, implementar validación y envío de datos)
const formulario = document.querySelector('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí implementarías el envío de los datos del formulario a un servidor
    alert('¡Gracias por suscribirte!');
});