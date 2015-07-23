$(document).ready(function(){

var photo = function (path, number) {
  this.path = path;
  this.number = number;
  this.votes = 0;
}

var cats = [];
var left = undefined;
var right = undefined;

for (var i=0; i<=13; i++) {
  cats.push(new photo("images/" + i + ".jpg", i));
}

console.log(cats);

function randomNum(min, max){
  return Math.floor(Math.random() * (max-min+1) + min);
}

function display(){
  $('#pic1').attr("src", cats[left].path);
  $('#pic2').attr("src", cats[right].path);
}
newDisplay();
display();

function newDisplay(){
  left = randomNum(0, 13);
  right = randomNum(0,13);
  while (left == right) {
    right = randomNum(0, 13);
  }
console.log(left, right);
}

$('#pic1').click(function(){
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic2').attr("class", "");
  cats[left].votes++;
  console.log(cats[left].votes);
  myChart.segments[0].value += 1;
  myChart.update();
});

$('#pic2').click(function(){
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic1').attr("class", "");
  cats[right].votes++;
  console.log(cats[right].votes);
  myChart.segments[1].value += 1;
  myChart.update();
});

$('#reroll').click(function(){
  $('#pic1').attr("src", "").attr("class", "");
  $('#pic2').attr("src", "").attr("class", "");
  newDisplay();
  display();
});

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
}

var canvas = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(canvas).Pie(pieData,pieOptions);

});







