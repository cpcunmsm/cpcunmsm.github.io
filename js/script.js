document.addEventListener('DOMContentLoaded', function () {
    // Actualizar el año en el pie de páginas
    document.getElementById('year').textContent = new Date().getFullYear();

    // Manejo del menú desplegable en dispositivos móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('close');
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
            dropdown.classList.toggle('active');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('close');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});
