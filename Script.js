var stage = document.getElementById("Stage");
var menu = document.getElementById("Title");
var play = document.getElementById("Play");

// Default board
play.style.display = "none";

function onPlay()
{
	menu.style.display = "none";
	play.style.display = "block";
}

function onMenu()
{
	play.style.display = "none";
	menu.style.display = "block";
}