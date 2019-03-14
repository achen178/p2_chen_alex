var myFullpage = new fullpage('#fullpage', {
  //Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  navigation: false,
  navigationPosition: 'right',
  navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 1000,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: true,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: false,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
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
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor : ['#ccc', '#fff'],
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',
  lazyLoading: true,

  //events
  onLeave: function(origin, destination, direction){},
  afterLoad: function(origin, destination, direction){},
  afterRender: function(){},
  afterResize: function(width, height){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction){},
  onSlideLeave: function(section, origin, destination, direction){}
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
