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
})