var Image = function(path) {
  this.path = path;
  this.votes = 0;
}

var cat0 = new Image ('images/0.jpg');
var cat1 = new Image ('images/1.jpg');
var cat2 = new Image ('images/2.jpg');
var cat3 = new Image('images/3.jpg');
var cat4 = new Image ('images/4.jpg');
var cat5 = new Image('images/5.jpg');
var cat6 = new Image ('images/6.jpg');
var cat7 = new Image ('images/7.jpg');
var cat8 = new Image ('images/8.jpg');
var cat9 = new Image ('images/9.jpg');
var cat10 = new Image ('images/10.jpg');
var cat11 = new Image ('images/11.jpg');
var cat12 = new Image ('images/12.jpg');
var cat13 = new Image ('images/13.jpg');

var catArray = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13];

var Tracker = function() {
  this.catArray = catArray;
  this.left = document.getElementById('left');
  this.right = document.getElementById('right');
  //console.log(catArray);
}

Tracker.prototype.randomNumber = function () {
  this.random = parseInt(Math.floor(Math.random() * this.catArray.length));
  //console.log("random number generated is " + this.random);
  return this.random;
}

Tracker.prototype.images = function() {
  this.leftImage, this.rightImage;

  this.leftImageRandom = this.randomNumber();
  this.leftImage = this.catArray[this.leftImageRandom].path;

  this.rightImageRandom = this.randomNumber();
  this.rightImage = this.catArray[this.rightImageRandom].path;

  while (this.leftImageRandom == this.rightImageRandom) {
    this.rightImageRandom = this.randomNumber();
    this.rightImage = this.catArray[this.rightImageRandom].path;
  }

  console.log(this.leftImage, this.rightImage, this.leftImageRandom, this.rightImageRandom);

  return [this.leftImage, this.rightImage, this.leftImageRandom, this.rightImageRandom];
}

Tracker.prototype.display = function() {
  // var left = document.getElementById('left');
  // var right = document.getElementById('right');
  var imgs = this.images();

  this.left.src = imgs[0];
  this.right.src = imgs[1];

  console.log(this.left.src, this.right.src, this.leftImageRandom, this.rightImageRandom);

  this.left.addEventListener('click', function() {
    console.log("this is the index number of the left image: " + imgs[2]);
    catArray[imgs[2]].votes += 1;
    console.log("this is the vote count of the image at index " + imgs[2] + ": " + catArray[imgs[2]].votes);
  }, false);

  this.right.addEventListener('click', function() {
    console.log("this is the index number of the right image: " + imgs[3]);
    catArray[imgs[3]].votes += 1;
    console.log("this is the vote count of the image at index " + imgs[3] + ": " + catArray[imgs[3]].votes);
  }, false);

  var nextRound = document.getElementById('button');
  nextRound.addEventListener('click', function() {
    render.display();
  }, false);
}

var render = new Tracker()
render.display();
