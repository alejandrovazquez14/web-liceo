// Contador de visitas
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCounter').innerText = visitCount;

// Función para mostrar/ocultar contenido
function toggleContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Función para cambiar el tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Guardar la preferencia en localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Al cargar la página, aplicar el tema guardado en localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    // Si hay un tema guardado, aplicamos el modo correspondiente
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
    }
});


// Función para resaltar el enlace seleccionado
function highlightLink(link) {
    const links = document.querySelectorAll('nav a');
    links.forEach(l => l.classList.remove('highlight'));
    link.classList.add('highlight');
}