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
  this.showForm = ko.observable(false);
  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Star',
    imgSrc: 'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
    nicknames: [{ name: 'Barley'},
    { name: 'Starry Night'},
    { name: 'Constellation'}]}));

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.toggleForm = function() {
    this.showForm(!this.showForm());
  }
}

ko.applyBindings(new ViewModel());
