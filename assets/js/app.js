const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})


const navslide = function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
    //Animate links
    navlinks.forEach(function (link, index) {
      console.log(link);
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navlinkfade 0.5s ease forwards' + (index / 7 + 0.3) + 's';
      }
    });
  });
};
navslide();


$(document).ready(function () {
  $('.js-anchor').on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');

    $('html').removeClass('menu-open');

    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      1500
    );
  });
});


$(function (){
  $(window).scroll(function(){
     if ($(this).scrollTop() > 650) {
      $('.navscroll').addClass("blanco").addClass("caja");
     } else {
      $(".navscroll").removeClass("blanco").removeClass("caja");
     }
  });
});