var myFullpage = new fullpage('#fullpage', {
  //Navigation
  anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',
  css3: false,

  //Scrolling
  scrollingSpeed: 700,
  fitToSection: true,
  fitToSectionDelay: 200,
  scrollBar: true,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: true,
  loopTop: true,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 300,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,

  //Design
  verticalCentered: false,
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,

  //Custom selectors
  lazyLoading: true,

  //events
  onLeave: function(origin, destination, direction){},
  afterLoad: function(origin, destination, direction){},
  afterResize: function(width, height){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction){},
  onSlideLeave: function(section, origin, destination, direction){},

  afterRender: function(){

  }
});

// $(document).ready(function() {
//   $("#project1").mouseover(function() {
//     $("#project1-img").fadeIn(600);
//   });
//   $("#project1").mouseout(function() {
//     $("#project1-img").fadeOut(600);
//   });
//   $("#project2").mouseover(function() {
//     $("#project2-img").fadeIn(600);
//   });
//   $("#project2").mouseout(function() {
//     $("#project2-img").fadeOut(600);
//   });
//   $("#project3").mouseover(function() {
//     $("#project3-img").fadeIn(600);
//   });
//   $("#project3").mouseout(function() {
//     $("#project3-img").fadeOut(600);
//   });
//   $("#msgbutton").click(function() {
//     $("#contact-form").fadeIn(600);
//   });
//   $(".close").on("click", function() {
//     $("#contact-form").fadeOut(600);
//   });
// });
$( document ).ready(function() {
  $( ".cross" ).hide();
  $( ".nav-mobile" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".nav-mobile" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".nav-mobile" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });
  $( ".nav-mobile a").click(function() {
    $( ".nav-mobile" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });
});
particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#282828"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#282828"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": .3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
});
