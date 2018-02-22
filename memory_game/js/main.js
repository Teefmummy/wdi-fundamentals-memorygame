console.log('up and running');

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
// var cardOne = cards[0];
// var cardTwo = cards[2];
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a Match!");
	} else {
		console.log("Sorry, Try Again");
	}
}

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();

	// if (cardsInPlay.length === 2){
	// 	if (cardsInPlay[0] === cardsInPlay[1]){
	// 		alert('You Found a Match!');
	// }
	// else {
	// 	alert('Sorry, try again');
	// }
}

flipCard(0);
flipCard(2);


