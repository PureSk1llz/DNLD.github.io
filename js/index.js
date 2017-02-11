$('.counter').each(function() {

  var $this = $(this);
  var $facts = $('.facts .row');
  $facts.waypoint(function() {
    console.log('hello');
    countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
      },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });
}, { offset: '50%'});

});



/* Smoothscrolling */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
