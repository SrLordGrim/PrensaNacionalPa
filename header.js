$(document).ready(function(){
  // jQuery para expandir y contraer la barra lateral
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $(this).css("visibility", "hidden");
  });

  // jQuery para el botón de cerrar
  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });

  // Cargar el header desde header.html
  $('#header-container').load('/header.html');
});
