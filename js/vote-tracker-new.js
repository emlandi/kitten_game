$(document).ready(function(){

var pics;

$.ajax({
  url: "https://api.imgur.com/3/album/DDoWy.json",
  method: "GET",
  headers: {
   "Authorization": "Client-ID 393d12fc38d1599"
  }
})

.done(function(res) {
  pics = res.data.images;
  console.log("Pictures have loaded.");

var cats = [];
var left = undefined;
var right = undefined;

//checks for local storage
if(!localStorage.getItem("key")){
  populateStorage();
  console.log("populateStorage");

} else {
  retrieveStorage();
  console.log("retrieveStorage");
}

function populateStorage() {
  localStorage.setItem("key", JSON.stringify(cats));
};

//if local storage exists, that info is retrieved
function retrieveStorage() {
  JSON.parse(localStorage.getItem("key"));
};

var photo = function (path, number) {
  this.path = path;
  this.number = number;
  this.votes = 0;
};

//adds instances to cat array
for (var i=0; i<14; i++) {
  cats.push(new photo(pics[i].link));
};
//console.log(cats);

//generates random number
function randomNum(min, max){
  return Math.floor(Math.random() * (max-min+1) + min);
};

//gets random images
function newDisplay(){
  left = randomNum(0, 13);
  right = randomNum(0,13);
  while (left == right) {
    right = randomNum(0, 13);
  }
console.log("cat#: " + left, "cat#: " +right);
};

//displays random pictures
function display(){
  $('#pic1').attr("src", cats[left].path);
  $('#pic2').attr("src", cats[right].path);
};
newDisplay();
display();

//highlights left photo when clicked and adds 1 to vote tracker
$('#pic1').click(function(){
  //console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic2').attr("class", "");
  cats[left].votes++;
  populateStorage();
  console.log("cat#: " + left, "votes: " + cats[left].votes);
  myChart.segments[0].value += 1; //This needs to be based on cats[left].votes++, not just clicking on the left side.
  myChart.update();
});

//highlights right photo when clicked and adds 1 to vote tracker
$('#pic2').click(function(){
  //console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic1').attr("class", "");
  cats[right].votes++;
  populateStorage();
  console.log("cat#: " + right, "votes: " + cats[right].votes);
  myChart.segments[1].value += 1; //This needs to be based on cats[right].votes++, not just clicking on the left right.
  myChart.update();
});

//more kittens button removes images and classes, re-runs display functions
$('#reroll').click(function(){
  $('#pic1').attr("src", "").attr("class", "");
  $('#pic2').attr("src", "").attr("class", "");
  newDisplay();
  display();
});

//pie chart info
var pieData = [
  {
    value: 1,
    color:"#878BB6"
  },
  {
    value : 1,
    color : "#4ACAB4"
  },
];

var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
};

//displays chart to page
var canvas = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(canvas).Pie(pieData,pieOptions);

})

.fail(function(error) {
  console.log("error");
});

});

