let _ = require('lodash');
let suits = ['spades', 'diamonds', 'clubs', 'hearts'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function getDeck() {
	let deck = [];

	for(let i = 0; i < suits.length; i++) {
		for(let x = 0; x < values.length; x++) {
			let card = { Value: values[x], Suit: suits[i] };
			deck.push(card);
		}
	}
  return deck;
}

function shuffleDeck() {
  return _.shuffle(getDeck());
}

let shuffledDeck = shuffleDeck();
let jackHand = shuffledDeck.splice(0, 26);
let jillHand = shuffledDeck.splice(0, 26);
let warCards = [];

function compareCards(jackCard, jillCard, round){
  if(jackCard.Value > jillCard.Value){
    
    console.log(`Jack Wins round ${round + 1} with ${jackCard.Value} of ${jackCard.Suit} over ${jillCard.Value} of ${jillCard.Suit}`);
    jackHand.push(jackCard, jillCard);
    jackHand.shift();
    jillHand.shift();

  } else if (jillCard.Value > jackCard.Value){
      
    console.log(`Jill Wins round ${round + 1} with ${jillCard.Value} of ${ jillCard.Suit} over ${jackCard.Value} of ${jackCard.Suit}`);
    jillHand.push(jillCard, jackCard);
    jillHand.shift();
    jackHand.shift();
      
  } else if (jillCard.Value == jackCard.Value){
      
    console.log(`WAR Round ${round + 1} ${jackCard.Value} of ${jackCard.Suit} vs ${jillCard.Value} of ${jillCard.Suit}`);
    warCards.push(jackCard, jillCard);
    jackHand.shift();
    jillHand.shift();
    console.log(warCards); 
    // at this point, need to draw and compare one extra card and combine the warCards with the winner
    // as of right now, a war results in both players losing the card and the cards going into a 'war pile'
    
  }
}

function playWar() {
  let i = 0;
  while(jackHand.length && jillHand.length){
    compareCards(jackHand[0], jillHand[0], i);
    i++
  }
  if(!jackHand.length){
    console.log(`Jill Wins on round ${i}!`);
  }
  if(!jillHand.length){
    console.log(`Jack Wins on round ${i}!`);
  }
}

playWar();