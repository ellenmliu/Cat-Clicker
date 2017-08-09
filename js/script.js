var clicks = 0;

$('#cat').click(function(e) {
  clicks += 1;
  $('#numofclicks').text(clicks);
});

$('#cat').mousedown(function(e) {
  $('#cat').css({"width" : "+=5", "height":"+=5"})
});

$('#cat').mouseup(function(e) {
  $('#cat').css({"width" : "-=5", "height":"-=5"})
});
