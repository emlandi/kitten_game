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
  if (left == right) {
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
});

$('#pic2').click(function(){
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic1').attr("class", "");
  cats[right].votes++;
  console.log(cats[right].votes);
});

$('#reroll').click(function(){
  $('#pic1').attr("src", "");
  $('#pic2').attr("src", "");
  newDisplay();
  display();
});

// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var myNewChart = new Chart(ctx);
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options);

var data = [
    {
        value: cats[left].votes,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: cats[right].votes,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
]
