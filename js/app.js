var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Star');
  this.imgSrc = ko.observable('https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg');
  this.level = ko.observable('Newborn');
  this.showForm = ko.observable(false);
  this.nicknames = ko.observableArray([
    { name: 'Barley'},
    { name: 'Starry Night'},
    { name: 'Constellation'}
  ]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);

    if (this.clickCount() > 200) {
      this.level('Adult');
    }
    else if (this.clickCount() > 100) {
      this.level('Teen');
    }
    else if (this.clickCount() > 50) {
      this.level('Kid');
    }
    else if (this.clickCount() > 25) {
      this.level('Toddler');
    }
    else if (this.clickCount() > 10) {
      this.level('Infant');
    }
  };

  this.toggleForm = function() {
    this.showForm(!this.showForm());
  }
}

ko.applyBindings(new ViewModel());
