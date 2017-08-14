var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Star');
  this.imgSrc = ko.observable('https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg');

  this.nicknames = ko.observableArray([
    { name: 'Barley'},
    { name: 'Starry Night'},
    { name: 'Constellation'}
  ]);

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
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };

  this.toggleForm = function() {
    this.showForm(!this.showForm());
  }
}

ko.applyBindings(new ViewModel());
