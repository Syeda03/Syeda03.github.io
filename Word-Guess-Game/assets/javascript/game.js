
//Establishing word bank
var wordBank = ["new","old","intuition"];

// Declaring and initializing variables
    // holds count wins,losses,no of attempt left.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    //Holds computer selected word.
    var computerChoice="";
    //Holds computer chosen word as an array
    var lettersinCompChoice=[];
    //Displaying underscores
    var underScores=0;
    //Holds an array with hits n misses from user
    var hitsAndMisses=[];
    //Holds wrong guesses
    var missesSoFar=[];
    //Holds User inputted Guess
    var userGuess=[];

// letting Computer makes its random choice
var computerChoice =wordBank[Math.floor(Math.random() * wordBank.length)];
console.log("computerChoice:"+computerChoice)
//storing computerchoice as an array
lettersinCompChoice = computerChoice.split("");

//Displaying underscores= length of computer choice
underScores = lettersinCompChoice.length;
console.log(computerChoice);

//Reset
hitsAndMisses = [];
missesSoFar = [];
// Fill up the underscores

for (var i=0;i < underScores; i++) {
    hitsAndMisses.push("_");

}
//print the initial blanks
console.log(hitsAndMisses);

//// Reprints the guessesLeft to 9.
document.getElementById("GuessesLeft").innerHTML = guessesLeft;

// Prints the blanks at the beginning of each round in the HTML.
document.getElementById("word-blanks").innerHTML = hitsAndMisses.join(" ");

// Clears the wrong guesses from the previous round.
document.getElementById("Wrong Guesses").innerHTML = missesSoFar.join(" ");


//checkLetters() function
//comparisons to match

function checkLetters(letter) {

    var lettersinCompChoice = false;

//check if a letter exists inside the array at all.
 
 for (var i=0; i < underScores; i++){

    if(computerChoice[i]=== letter) {
    //If letter exists then toggle boolean to true
    lettersinCompChoice= true;
    }
}
 if (lettersinCompChoice) {

    //loop through the word
    for(var j=0; j< underScores; j++){

        if(computerChoice[j]=== letter){

            hitsAndMisses[j] = letter;

        }
    }

    console.log(hitsAndMisses);

 }
  else{
      missesSoFar.push(letter);
      guessesLeft--;
  }

}
 
 function roundComplete(){
    console.log("Wins: " + wins + " | Losses: " + losses + " | guessesLeft: " + guessesLeft);


 }
 


    

    
    
