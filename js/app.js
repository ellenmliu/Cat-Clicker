var multiplecats = [
  {
    clickCount: 0,
    name: 'Star',
    imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    nicknames: [{ name: 'Barley'}, { name: 'Starry Night'}, { name: 'Constellation'}]
  },
  {
    clickCount: 0,
    name: 'Tom',
    imgSrc:'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    nicknames: [{ name: 'T'}, { name: 'Tomtom'}]
  },
  {
    clickCount: 0,
    name: 'Nemo',
    imgSrc:'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
    nicknames: [{ name: 'Finding Nemo'}, {  name: 'Ne'}]
  },
  {
    clickCount: 0,
    name: 'Fiesty',
    imgSrc: 'http://a.fod4.com/images/user_photos/1343865/335cd5249b648648fb0b086282cbaf32_original.jpg',
    nicknames: [{ name: 'Fiery'}, { name: 'Fire'}]
  },
  {
    clickCount: 0,
    name: 'Speckled',
    imgSrc: 'https://1.bp.blogspot.com/-xFD4Q4AUO-s/Ti_aZCcTfuI/AAAAAAAAAe8/bSx8P1ywqUc/s1600/wallpaper-gato-estirado.jpg',
    nicknames: [{ name: 'Specky'}, {  name: 'Specks'}]
  }
]

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    if (this.clickCount() > 200) {
      return 'Adult';
    }
    else if (this.clickCount() > 100) {
      return 'Teen';
    }
    else if (this.clickCount() > 50) {
      return 'Kid';
    }
    else if (this.clickCount() > 25) {
      return 'Toddler';
    }
    else if (this.clickCount() > 10) {
      return 'Infant';
    }
    else {
      return 'Newborn';
    }
  }, this);
}

var ViewModel = function() {
  var self = this;
  self.showForm = ko.observable(false);
  self.catlist = ko.observableArray([]);

  multiplecats.forEach(function(tempcat){
    self.catlist.push(new Cat(tempcat));
  });

  self.currentCat = ko.observable(self.catlist()[0]);

  self.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  self.toggleForm = function() {
    self.showForm(!self.showForm());
  };

  self.changeCurrentCat = function(thiscat) {
    self.currentCat(thiscat);
  };
}

ko.applyBindings(new ViewModel());
