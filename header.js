      $(document).ready(function(){
        //jquery for expand and collapse the sidebar
        $('.menu-btn').click(function(){
          $('.side-bar').addClass('active');
          $('.menu-btn').css("visibility", "hidden");
        });
    
        //for close button
        $('.close-btn').click(function(){
          $('.side-bar').removeClass('active');
          $('.menu-btn').css("visibility", "visible");
        });
    
        //jquery for toggle sub menus
        $('.sub-btn').click(function(){
          $(this).next('.sub-menu').slideToggle();
          $(this).find('.dropdown').toggleClass('rotate');
        });
      });

  // Llamar a la función al cargar la página para establecer la visibilidad del botón de menú
  checkSidebarStatus();

  // Cargar el header desde header.html
  $('#header-container').load('/header.html');
});
