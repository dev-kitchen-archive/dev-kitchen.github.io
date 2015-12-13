$(function() {
  /******************
  *Opacity for title*
  ******************/
  var falgClick = true;
  $title = $('header .intro').css("opacity", 1);
  $space = $('.space');
  $flipper = $('.flip-container');

  /*opacity background*/
  var stopScrollingAfter = $(window).height() / 2;
  $(document).on('scroll touchmove', function(e) { 
    var scrollPosition = $(window).scrollTop();
    var percentage = Math.round( 100 / stopScrollingAfter * scrollPosition ) / 100;
    var forOpacity = 1 - percentage;
    var opacity = (forOpacity < 0 ? 0 : forOpacity);

    $title.css("opacity", opacity);
  });

  //on clik on empty page works only once
  $space.on( "click", function() {
    if (falgClick) {
      falgClick = false;
      var scrollDistance = ($('.welcome').outerHeight() > $(window).height() ? $(window).height() : $('.welcome').outerHeight());
      $('html, body').animate({
          scrollTop: scrollDistance
      }, 860);
    }
  });

  /******************
  *form confirmation*
  ******************/
  $('#submit-button').on('click', function(e){
    var name = $('#name').val()
    var email = $('#email').val()
    var message = $('#message').val()

    if( name != "" && email != "" && message != ""  ) {
      $('#contact-form').fadeOut('slow', function () {
        $('.contact-success').fadeIn();
      });
    }
  });

  /*color depending on day hour*/
  var d = new Date();
  var n = d.getHours();
  var p = window.location.search.replace("?", ""); //<- for debugging
  console.log(p)
  if ((n >= 5 && n < 7) || (p == 1)) {
    $('body').addClass('early-morning time');
  } else if ((n >= 7 && n < 9) || (p == 2)) {
    $('body').addClass('morning time');
  } else if ((n >= 9 && n < 11) || (p == 3)) {
    $('body').addClass('early-noon time');
  } else if ((n >= 11 && n < 14) || (p == 4)) {
    $('body').addClass('noon time');
  } else if ((n >= 14 && n < 16) || (p == 5)) {
    $('body').addClass('afternoon time');
  } else if ((n >= 16 && n < 18) || (p == 6)) {
    $('body').addClass('early-evening time');
  } else if ((n >= 18 && n < 20) || (p == 7)) {
    $('body').addClass('evening time');
  } else if ((n >= 20 || n < 5) || (p == 8)) {
    $('body').addClass('night time');
  }
  setTimeout(function(){
    $('.fade-out').fadeOut('slow');
  }, 1500);
})