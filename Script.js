var stage = document.getElementById("Stage");
var menu = document.getElementById("Title");
var menuMusic = document.getElementById("MenuAudio");
var gameMusic = document.getElementById("GameAudio");

// Default board (GLOBAL)
shuffleDeck();
printDeck();

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