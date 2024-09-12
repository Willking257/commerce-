$(document).ready(function() {
    $("#slider").lightSlider({
      item: 4, // Nombre par défaut d'éléments à afficher
      slideMove: 1, // Nombre d'éléments à faire défiler
      loop: false,
      auto: true,
      pause: 3000,
      controls: false,
      pager: false,
      responsive: [{
          breakpoint: 1024, // Tablettes
          settings: {
            item: 3,
            slideMove: 1,
            loop: false,
            auto: true,
            pause: 3000,
           
          }
        },
        {
          breakpoint: 768, // Téléphones
          settings: {
            item: 1,
            slideMove: 1,
            loop: false,
            auto: true,
            pause: 3000,
          
          }
        }
      ]
    });
  });