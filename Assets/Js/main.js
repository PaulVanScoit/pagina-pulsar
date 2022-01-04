
/*Botón de hamburguesa del nav*/
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => { child.classList.toggle('animado') });
    ham.classList.toggle('girar');
});

// Botón de scroll hacia arriba del nav 
$document.ready(function () {
    var altura = $('.menu').offset().top; //altura del menu
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fijado');
        } else {
            $('.menu').removeClass('menu-fijado');
        }
    });
}); //al hacer scroll, si el scroll es mayor que la altura del menu, se agrega la clase menu-fijado