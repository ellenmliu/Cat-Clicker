var clicks = 0;

var cats = [
  {name: 'Star',
  img: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
  clicks: 0},
  {name: 'Tom',
  img:'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
  clicks: 0}
]

$(document).ready(function(){
  cats.forEach(function(cat){
    $('.container').append('<img id="'+cat.name+'" class="cat" src="'+cat.img+'"/>');
    $('#'+cat.name).click(function(e) {
      cat.click += 1;
    });

    $('#'+cat.name).mousedown(function(e) {
      $('#'+cat.name).css({"width" : "+=5", "height":"+=5"})
    });

    $('#'+cat.name).mouseup(function(e) {
      $('#'+cat.name).css({"width" : "-=5", "height":"-=5"})
    });
  })

})
