document.addEventListener('DOMContentLoaded', function () {
    // Calendario
    var elementCalendar = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(elementCalendar, {
        buttonText: {today: 'Hoy'},
        initialView: 'dayGridMonth',
        events: 'data/data.json'
    });
    calendar.setOption('locale', 'es');
    calendar.render();

    // Actualizar el año en el pie de página
    document.getElementById('year').textContent = new Date().getFullYear();

    // Manejo del menú desplegable en dispositivos móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('close');
    });

    // Cerrar el menú al hacer clic en un enlace y ajustar el desplazamiento
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado

            // Obtener el ID de la sección a la que se quiere desplazar
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Calcular la posición ajustada teniendo en cuenta la altura del header
            const offsetTop = targetSection.offsetTop - headerHeight;

            // Desplazarse a la posición ajustada
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Cerrar el menú móvil
            navMenu.classList.remove('active');
            menuToggle.classList.remove('close');
        });
    });
});
