$(document).ready(function () {
  //contador de imagenes
  var imgItems = $('.list-images li').length;
  var imgPos = 1;
  //ciclo for para agregar iconos de navegacion segun la cantidad de img
  for (i = 1; i <= imgItems; i++) {
    $('.navegation li:eq(0)').after('<li class="circle"><span class="fa fa-circle"></span></li>');
  }

  //ocultar todas las imagenes
  $('.list-images li').hide();
  //mostrar solo la primera imagen por defecto
  $('.list-images li:first').show();
  //agregar color distinto al icono que representa a la primera img en la navegación
  $('.navegation li span:eq(1)').css({
    'color': '#A901DB'
  });

  //funciones del carrusel
  $('.navegation .circle').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  //carrusel automatico
  setInterval(function () {
    nextSlider();
  }, 3000);
  //Que hace cada función
  function pagination() {
    var paginationPos = $(this).index();
    imgPos = paginationPos;
    $('.list-images li').hide();
    $('.list-images li:nth-child(' + paginationPos + ')').fadeIn();

    $('.navegation li .fa-circle').css({
      'color': '#A4A4A4'
    });
    $('.navegation li .fa-circle:eq(' + (paginationPos - 1) + ')').css({
      'color': '#A901DB'
    });
  }

  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }
    $('.navegation li .fa-circle').css({
      'color': '#A4A4A4'
    });
    $('.navegation li .fa-circle:eq(' + (imgPos - 1) + ')').css({
      'color': '#A901DB'
    });
    $('.list-images li').hide();
    $('.list-images li:nth-child(' + imgPos + ')').fadeIn();
  }

  function prevSlider() {
    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--;
    }
    $('.navegation li .fa-circle').css({
      'color': '#A4A4A4'
    });
    $('.navegation li .fa-circle:eq(' + (imgPos - 1) + ')').css({
      'color': '#A901DB'
    });
    $('.list-images li').hide();
    $('.list-images li:nth-child(' + imgPos + ')').fadeIn();
  }
});