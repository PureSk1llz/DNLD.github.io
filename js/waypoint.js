var $facts = $('.facts .row');

$facts.waypoint(function() {
  $facts.addClass('facts row-js');
}, { offset: '60%'});
