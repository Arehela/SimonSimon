var IMAGES = ["clockwise.png", "counter-clockwise.png","down.png", "up.png", "left.png", "right.png"];
var patron = [];

$(document).on("swipeleft",function(){
    $("#direction").html("You swiped left!");
    $("#content").css("background-color", "red");
});

$(document).on("swiperight",function(){
    $("#direction").html("You swiped right!");
    $("#content").css("background-color", "yellow");
});

$(document).on('swipedown', function () {
    $("#direction").html("You swiped down!");
    $("#content").css("background-color", "blue");
});

$(document).on('swipeup', function () {
    $("#direction").html("You swiped up!");
    $("#content").css("background-color", "green");
});

document.addEventListener("rotarydetent", function(event){
	if (event.detail.direction === "CW") {
		$("#direction").html("You swiped clockwise!");
	    $("#content").css("background-color", "white");
	} else {
		$("#direction").html("You swiped counter-clockwise!");
	    $("#content").css("background-color", "black");
	}
}, false);

function getRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function getRandomImage() {
  return IMAGES[getRandom(0, 5)];
}

function changeBackgroundColour () {
  var r = getRandom(0, 255);
  var g = getRandom(0, 255);
  var b = getRandom(0, 255);
  $("#content").css("background-color", "rgb("+r+","+g+","+b+")");
}

function changeBackgroundImage() {
  var image = getRandomImage();
  var src = "images/"+image;
  $("#directionImage").attr("src", src);
  return src;
}

function changeBackground(){
  changeBackgroundColour();
  changeBackgroundImage();
}

function setPatron(maxIterator, iterator) {
  if(iterator < maxIterator) {
    changeBackground();
    iterator++;
    setTimeout(function(){
       setPatron(maxIterator, iterator);
    }, 1000);
  }
}

function imagePosition(patron){
  for(index in IMAGES){
    if(IMAGES[index] === patron)
      return index;
  }
  return -1;
}
