/*------MODEL------*/

var model = {
  currentCat: null,
  cats : [
    {
      name: 'Star',
      img: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      clicks: 0
    },
    {
      name: 'Tom',
      img:'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
      clicks: 0
    },
    {
      name: 'Nemo',
      img:'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
      clicks: 0
    },
    {
      name: 'Fiesty',
      img: 'http://a.fod4.com/images/user_photos/1343865/335cd5249b648648fb0b086282cbaf32_original.jpg',
      clicks: 0
    },
    {
      name: 'Speckled',
      img: 'https://1.bp.blogspot.com/-xFD4Q4AUO-s/Ti_aZCcTfuI/AAAAAAAAAe8/bSx8P1ywqUc/s1600/wallpaper-gato-estirado.jpg',
      clicks: 0
    }
  ]
};

/*------OCTOPUS------*/
var octopus = {
  init: function() {
    this.setCurrentCat(model.cats[0]);
    listview.init();
    displayview.init();
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  getCurrentCat: function(cat) {
    return model.currentCat;
  },

  increaseClick: function() {
    model.currentCat.clicks++;
    displayview.render();
  }
}

/*------VIEW------*/
var listview = {
  init: function() {
    this.render();
  },

  render: function() {
    var cats = octopus.getCats();

    $('.listofcats').html('');

    cats.forEach(function(cat) {
      $('.listofcats').append('<li id="show'+cat.name+'" class="catbutton">'+cat.name+'</li>');

      $('#show'+cat.name).click(function(e) {
        octopus.setCurrentCat(cat);
        displayview.render();
      });
    })
  }
};

var displayview = {
  init: function() {
    var cat = octopus.getCurrentCat();
    $('.numofclicks').html('<h2 id="'+cat.name+'clicks">'+cat.name+': '+cat.clicks+'</h2>');
    this.render();
  },

  render: function() {
    var cat = octopus.getCurrentCat();
    $('.container').html('<img id="'+cat.name+'" class="cat" src="'+cat.img+'"/>');
    $('.numofclicks').text(cat.name+': '+cat.clicks);

    $('#'+cat.name).click(function(e) {
      octopus.increaseClick();
    });

    this.animate();
  },

  animate: function() {
    var cat = octopus.getCurrentCat();
    $('#'+cat.name).mousedown(function(e) {
      $('#'+cat.name).css({"width" : "+=5", "height":"+=5"});
    });

    $('#'+cat.name).mouseup(function(e) {
      $('#'+cat.name).css({"width" : "-=5", "height":"-=5"});
    });
  }
}

octopus.init();
