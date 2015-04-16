var stage = document.getElementById("Stage");
var menu = document.getElementById("Title");
var play = document.getElementById("Play");
var menuMusic = document.getElementById("MenuAudio");
var gameMusic = document.getElementById("GameAudio");
var deck = new Array();
var cardID = [];
var cardsFlipped = 0;




// Default board (GLOBAL)
play.style.display = "none";
menuMusic.play();
gameMusic.pause();
shuffleDeck();
printDeck();
window.addEventListener(

// Whenever the Play Button is pressed
function onPlay()
{
	menu.style.display = "none";
	play.style.display = "block";
	menuMusic.pause();
	gameMusic.play();
	shuffleDeck();
	printDeck();
	showTime();
	cardsFlipped = 0;
}

// Whenever the Menu Button is pressed
function onMenu()
{
	play.style.display = "none";
	menu.style.display = "block";
	menuMusic.play();
	gameMusic.pause();
	shuffleDeck();
	printDeck();
}

// Shuffles the deck whenever this function is called
function shuffleDeck()
{
	var tempIndex;
	var tempCard;
	
	for (var j = 0; j < deck.length; j++) 
	{
		do
		{	 
			tempIndex = Math.floor(Math.random() * deck.length);
		} while ( tempIndex == j);
		tempCard = deck[j];
		deck[j] = deck[tempIndex];
		deck[tempIndex] = tempCard;
	}
}

// Prints deck on tiles
function printDeck()
{
	for (var i = 0; i < 24; i++)
	{
		document.getElementById("card"+(i+1)).appendChild(deck[i]);
	}
}

// Records current date in minutes and seconds
// Then calculate the difference from the start of the recording to the current time
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

// Prints the countdown timer
function showTime() {
    var duration = 60 * 2;
    var display = document.querySelector(".time");
    startTimer(duration, display);
};