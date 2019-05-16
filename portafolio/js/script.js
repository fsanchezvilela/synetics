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
  var statsTopOffset = $('.statsSection').offset().top;
  var countUpFinished = false;

  $(window).scroll(function() {
    // easyPieChart Event Scroll Up Animation
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
      //init easyPieChart
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
    //CountUp Event Scroll Up animation
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 300
    ) {
      //init countUp
      $('.counter').each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal);
      });
      countUpFinished = true;
    }
  });

  //Init Fancybox 3
  $('[data-fancybox]').fancybox();

  //Init isotope
  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
  // init filters
  $('#filters a').click(function() {
    $('#filters .current').removeClass('current');
    $(this).addClass('current');
    var selector = $(this).attr('data-filter');
    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    //stop event
    return false;
  });

  //navigation fix teleport

  //brand teleport
  $('#navigation .navbar-brand').click(function() {
    //prevent default behaviour teleport a tag
    event.preventDefault();
    //target the element on the attr href
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    var barPosition = $('#navigation').offset().top;
    console.log(barPosition);
    //scroll to the section to the top of the target
    $('html, body').animate({ scrollTop: targetPosition }, 'slow');
  });

  $('#navigation li a').click(function() {
    //prevent default behaviour teleport a tag

    event.preventDefault();
    //target the element on the attr href
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    //scroll to the section to the top of the target
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });

  //stick nav bar menu
  const nav = $('#navigation');
  const navTop = nav.offset().top;
  $(window).on('scroll', stickyNavigation);
  //funcion para el stick nav
  function stickyNavigation() {
    const body = $('body');
    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px');
      body.addClass('fixedNav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixedNav');
    }
  }
});
