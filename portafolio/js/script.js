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
});
