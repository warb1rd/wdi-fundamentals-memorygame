var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},

	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	},
	];

//array to store cards in play
var cardsInPlay = [];

//check for match function
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

//function to show user flipping card
var flipCard = function() {	
cardId = this.getAttribute('data-id');
//display flipped card in console	
	console.log("User flipped" + " " + cards[cardId].rank);

//display card image
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2])
		{ console.log("You found a match!");
	}
	else { console.log("Sorry, try again.")
	
	};

	cardsInPlay.push(cards[cardId].rank);

	//image path
	console.log(cards[cardId].cardImage);

	//suit
	console.log(cards[cardId].suit);

	if(cardsInPlay.length === 2){
	
	checkForMatch();

	}
};


var createBoard = function() {
	//loops through the array
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');

	//set src to show back img of card
	cardElement.setAttribute('src', 'images/back.png');

	//index of current element
	cardElement.setAttribute('data-id', i);

	//user click event
    cardElement.addEventListener('click', flipCard);

    //append card to board
    document.getElementById('game-board').appendChild(cardElement);
	}
}
 
//call createBoard
createBoard();


