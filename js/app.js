var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Star');
  this.imgSrc = ko.observable('https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg');
  this.showForm = ko.observable(false);
  this.nicknames = ko.observableArray([
    { name: 'Barley'},
    { name: 'Starry Night'},
    { name: 'Constellation'}
  ]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

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

  this.toggleForm = function() {
    this.showForm(!this.showForm());
  }
}

ko.applyBindings(new ViewModel());
