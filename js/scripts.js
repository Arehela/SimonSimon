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