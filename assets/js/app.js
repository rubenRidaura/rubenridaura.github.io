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
