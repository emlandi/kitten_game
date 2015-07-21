//This is our vote tracker!!!

var image = ['images/0.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 'images/11.jpg', 'images/12.jpg', 'images/13.jpg' ];

var Tracker = function() {
  this.image = image;
}

Tracker.prototype.randomNumber = function() {
  this.random = parseInt(Math.floor(Math.random() * (this.image.length)));
  return this.random;
}

Tracker.prototype.images = function() {
  this.leftImage, this.rightImage;
  this.leftImage = this.image[this.randomNumber()];
  this.rightImage = this.image[this.randomNumber()];
  while (this.leftImage == this.rightImage) {
    this.rightImage = this.image[this.randomNumber()];
  }
  return [this.leftImage, this.rightImage];
}

Tracker.prototype.display = function() {
  var left = document.getElementById('left');
  var right = document.getElementById('right');
  var imgs = this.images();
  left.src = imgs[0];
  right.src = imgs[1];
}

var test = new Tracker()
test.display();

var nextRound = document.getElementById('button');
nextRound.addEventListener('click', function() {
  test.display();
}, false);

// var Voting = function() {
//   this.votes = [];
// }

// Voting.prototype.vote = function () {
//   this.leftVote = document.getElementById('left');
//   this.leftVote.addEventListener('click', function() {
//     this.votes.push
//   }
//     )
// }




// Tracker **could** have 'photos' property that is an array of the photo instances, and methods such as isVoting(), declareWinner(), voting(), declaring(),  updateTally(), resetResults(), castVote(), and so on.
