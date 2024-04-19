$(document).ready(function(){
  // Función para verificar si la barra lateral está activa al cargar la página
  function checkSidebarStatus() {
    if ($('.side-bar').hasClass('active')) {
      $('.menu-btn').css("visibility", "hidden");
    } else {
      $('.menu-btn').css("visibility", "visible");
    }
  }

  // jQuery para expandir y contraer la barra lateral
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $(this).css("visibility", "hidden");
  });

  // jQuery para el botón de cerrar
  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    // Restaurar la visibilidad del botón de menú
    $('.menu-btn').css("visibility", "visible");
  });

  // Llamar a la función al cargar la página para establecer la visibilidad del botón de menú
  checkSidebarStatus();

  // Cargar el header desde header.html
  $('#header-container').load('/header.html');
});
