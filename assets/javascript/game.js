// Hangman game 
window.onload = function(){

// Misc variables
var wins = 0;
document.getElementById("wins").innerHTML = ("Wins: " + wins);
var losses = 0;
document.getElementById("losses").innerHTML = ("Losses: " + losses);
var wrongGuess = 10;


// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Create an array of words
var wordList = ["Rick Deckard", 
				"Gaff", 
				"Rachel", 
				"Roy Batty", 
				"Pris Stratton", 
				"Replicant", 
				"Tyrell Corporation", 
				"Blush Response", 
				"Vangelis", 
				"Ridley Scott"
			];

// begin game
document.onkeydown = function(event) {

// Choose a word randomly 
var choice = Math.floor(Math.random() * wordList.length);
var chosenWord = wordList[choice].toLowerCase();

// Create underscores based on the length of word
var underscore = [];
var str = "";
function generateUnderscore(chosenWord) {
	for (var i =0; i < chosenWord.length; i++) {
		underscore.push("_");
		str += "_";
	}
	return underscore;
};
// console.log(underscore.join(""));
console.log("chosen word "+chosenWord);
console.log(generateUnderscore(chosenWord));
console.log("str "+str);	
console.log("under "+underscore.join(""));
document.getElementById("answer").innerHTML = (underscore.join(" ")) ;	

// array of alphabet for user’s input 
// Check users guess
// Check if the guess is correct
// If guess is right take out of available choices and add show letter on screen. Take letter out of array of possible choices. 
// If guess wrong: take out of list of possible choices and animate hangman progressively.

		// var userInput = event.key.toLowerCase();
		// console.log(userInput);
	

	if (chosenWord.indexOf(userInput) != -1) {
		for (j = 0; j<chosenWord.length; j++){
			if (chosenWord[j] == userInput){
				underscore[j] = chosenWord[j];
				document.getElementById("answer").innerHTML = (underscore.join(" "));
				}
			};
		} else {
			wrongGuess--;
			console.log(wrongGuess);
			document.getElementById("guesses").innerHTML = ("Guesses left: " + wrongGuess);
		};
	};
}



 

// if word completed add to win column and show picture of right answer

// if hangman show game over, add to losses.  