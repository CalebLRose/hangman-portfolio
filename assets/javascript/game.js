// Hangman game 
window.onload = function(){
	

// Misc variables
	var wins = 0;
	var losses = 0;
	var wrongGuess = 10;
	var userInput;
	var chosenWord;
	var underscore = [];
	var str = "";
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
	var correct;

	function clear(){
			underscore.length = 0;
			wrongGuess = 10;
			chosenWord;
			str = "";
			userInput;
			usedLetters.length=0;
			document.getElementById("lettersGuessed").innerHTML = ("Letters Used: " + usedLetters);

	};

	// Choose a word randomly
	function wordChoice(){
		x = Math.floor(Math.random() * wordList.length);
		chosenWord = wordList[x];
	};

	wordChoice();

	// Create underscores based on the length of word
	function generateUnderscore() {
		for (var i =0; i < chosenWord.length; i++) {
			underscore.push("_");
			str += "_";
			document.getElementById("answer").innerHTML = (underscore.join(" "));
		};
		return underscore;
	};

	// console.log(underscore.join(""));
	// console.log("chosen word "+chosenWord);
	// console.log(generateUnderscore(chosenWord));
	// console.log("str "+str);	
	// console.log("under "+underscore.join(""));
	
	

	generateUnderscore();

	document.onkeydown = function(event) {
		console.log(event.key);
		
		if (letters.indexOf(event.key) >= 0) {
			userInput = event.key.toLowerCase();
			console.log("userInput= " + userInput);


			if (wrongGuess >= 1){
				if ((chosenWord.indexOf(userInput) < 0) && (usedLetters.indexOf(userInput) === -1) ){
					wrongGuess--;
					document.getElementById("guesses").innerHTML = ("Guesses left: " + wrongGuess);
					usedLetters.push(userInput);
					document.getElementById("lettersGuessed").innerHTML = ("Letters Used: " + usedLetters.join(", "));
					console.log("used letters = " + usedLetters);
					console.log("guesses " + wrongGuess);
				} else { for (h = 0; h < chosenWord.length; h++){
							if (chosenWord[h] == userInput){
								underscore[h] = chosenWord[h];
								document.getElementById("answer").innerHTML = (underscore.join(" "));
								};
							}; 
						};
						correct = underscore.join("");
						console.log("var correct " + correct);
						console.log("check " + chosenWord);
						if(correct === chosenWord){
							wins++;
							console.log("wins " + wins);
							document.getElementById("wins").innerHTML = ("Wins:  " + wins);
							clear();
							wordChoice();
							generateUnderscore();
						};
			} else {
				losses++;
				document.getElementById("losses").innerHTML = ("Losses: " + losses);
				console.log("losses: " + losses);
				document.getElementById("gameOver").innerHTML = ("Try Again");
				document.getElementById("gameOver").style.visibility = "visible";
				clear();
				wordChoice();
				generateUnderscore();
			};
		};
	};

}
// // Check if the guess is correct
// // If guess is right take out of available choices and add show letter on screen. Take letter out of array of possible choices. 
// // If guess wrong: take out of list of possible choices 	

 

// if word completed add to win column and show picture of right answer

// if hangman show game over, add to losses.  