//Inicializando Documento
$(document).ready(function() {
  // init SuperSlider 0.6.3
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });
  // init  typed
  var typed = new Typed('.typed', {
    strings: [
      'Software Developer.',
      'Web Developer.',
      'Barista.',
      'Musician.',
      'Gamer.',
      'Student.'
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1400,
    showCursor: false
  });
  //init owl-carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $('.skillsSection').offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }
  });
});
