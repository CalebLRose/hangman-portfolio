// Hangman game 
window.onload = function(){

// Misc variables
var wins = 0;
document.getElementById("wins").innerHTML = ("Wins: " + wins);
var losses = 0;
document.getElementById("losses").innerHTML = ("Losses: " + losses);
var wrongGuess = 10;
var userInput;
var chosenWord;
var underscore = [];
// Create an array of words
var wordList = ["mike", 
				"dustin", 
				"will", 
				"lucas", 
				"eleven", 
				"hopper",
				"joyce", 
				"steve", 
				"nancy", 
				"jonathan", 
				"barb",
			];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
				"n","o","p","q","r","s","t","u","v","w","x","y","z"];

var usedLetters = [];
			

	// Choose a word randomly 
var choice = Math.floor(Math.random() * wordList.length);
chosenWord = wordList[choice];
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
console.log(underscore.join(""));
console.log("chosen word "+chosenWord);
console.log(generateUnderscore(chosenWord));
console.log("str "+str);	
console.log("under "+underscore.join(""));
document.getElementById("answer").innerHTML = (underscore.join(" "));


// Check users guess
// Check if the guess is correct
// If guess is right take out of available choices and add show letter on screen. Take letter out of array of possible choices. 
// If guess wrong: take out of list of possible choices 
	
document.onkeyup = function (event){
	var input = event.key.toLowerCase();
	if (letters.indexOf(input) > -1){
		userInput = input;
		console.log(userInput);
		if (wrongGuess === 0){
			document.getElementById("gameOver").innerHTML = ("Game Over");
			document.getElementById("gameOver").style.visibility = "visible";
		} else if (chosenWord.indexOf(userInput) < 0){
			// for (j = 0; j < usedLetters.length; j++){
				if(userInput != usedLetters){
				usedLetters.push(userInput);
				document.getElementById("lettersGuessed").innerHTML = ("Letters guessed: " + usedLetters);
			};
			wrongGuess--;				
			document.getElementById("guesses").innerHTML = ("Guesses left: " + wrongGuess);
			console.log(wrongGuess);
		} else if (chosenWord.indexOf(userInput) >= 0){
			for (h = 0; h<chosenWord.length; h++){
				if (chosenWord[h] == userInput){
					underscore[h] = chosenWord[h];
					document.getElementById("answer").innerHTML = (underscore.join(" "));
				}
			}
		}
	}
}

				
		
			
	


} 

// if word completed add to win column and show picture of right answer

// if hangman show game over, add to losses.  