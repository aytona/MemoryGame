var stage = document.getElementById("Stage");
var menu = document.getElementById("Title");
var play = document.getElementById("Play");
var menuMusic = document.getElementById("MenuAudio");
var gameMusic = document.getElementById("GameAudio");
var deck = new Array();

deck[0] = new Image();
deck[0].src = 'Images/Ash.jpg';
deck[1] = new Image();
deck[1].src = 'Images/Banshee.jpg';
deck[2] = new Image();
deck[2].src = 'Images/Ember.jpg';
deck[3] = new Image();
deck[3].src = 'Images/Excalibur.jpg';
deck[4] = new Image();
deck[4].src = 'Images/Frost.jpg';
deck[5] = new Image();
deck[5].src = 'Images/Loki.jpg';
deck[6] = new Image();
deck[6].src = 'Images/Mag.jpg';
deck[7] = new Image();
deck[7].src = 'Images/Nekros.jpg';
deck[8] = new Image();
deck[8].src = 'Images/Nova.jpg';
deck[9] = new Image();
deck[9].src = 'Images/Nyx.jpg';
deck[10] = new Image();
deck[10].src = 'Images/Trinity.jpg';
deck[11] = new Image();
deck[11].src = 'Images/Valkyr.jpg';
deck[12] = new Image();
deck[12].src = 'Images/Ash.jpg';
deck[13] = new Image();
deck[13].src = 'Images/Banshee.jpg';
deck[14] = new Image();
deck[14].src = 'Images/Ember.jpg';
deck[15] = new Image();
deck[15].src = 'Images/Excalibur.jpg';
deck[16] = new Image();
deck[16].src = 'Images/Frost.jpg';
deck[17] = new Image();
deck[17].src = 'Images/Loki.jpg';
deck[18] = new Image();
deck[18].src = 'Images/Mag.jpg';
deck[19] = new Image();
deck[19].src = 'Images/Nekros.jpg';
deck[20] = new Image();
deck[20].src = 'Images/Nova.jpg';
deck[21] = new Image();
deck[21].src = 'Images/Nyx.jpg';
deck[22] = new Image();
deck[22].src = 'Images/Trinity.jpg';
deck[23] = new Image();
deck[23].src = 'Images/Valkyr.jpg';


// Default board (GLOBAL)
play.style.display = "none";
menuMusic.play();
gameMusic.pause();
shuffleDeck();
printDeck();

// Whenever the Play Button is pressed
function onPlay()
{
	menu.style.display = "none";
	play.style.display = "block";
	menuMusic.pause();
	gameMusic.play();
	shuffleDeck();
	printDeck();
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