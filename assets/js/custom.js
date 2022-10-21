$(document).ready(function(){

    $(document).on('click', '.menu-icon', function() {
        $('.mobile-menu-drawer').toggleClass('active');
        $('body').toggleClass('opened-drawer');
        $('.menu-overlay').toggleClass('overlay-active');
    });

    $(document).on('click', '.close-menu', function() {
        $('.mobile-menu-drawer').removeClass('active');
        $('body').removeClass('opened-drawer');
        $('.menu-overlay').removeClass('overlay-active');
    });

    var heroSlider = new Swiper(".main-hero-slider", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        speed: 800,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
    }); 
    
    var artistsSlider = new Swiper(".main-artists-slider", {
        slidesPerView: 4,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 4000
        },
        breakpoints: {
          200: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          991: {
            slidesPerView: 4
          }
        }
      });

});