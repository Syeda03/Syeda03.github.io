

var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Declaring and initializing variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar=[];
    var userGuess = null;


    // When the user presses a key, 
        document.onkeyup = function(event) {

    //changing user input to lowercase
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //storing user input into userGuess array  
        //userGuess = event.key;
        console.log("userGuess:"+ userGuess)
    
    //letting Computer makes its random choice
        var computerChoice =alphabets[Math.floor(Math.random() * alphabets.length)];
        console.log("computerChoice:"+computerChoice)

    //Making sure user didnot pick same alphabet twice and also user is picking an alphabet and nothing else eg randon symbol or number
    if (guessesSoFar.indexOf(userGuess) < 0 && alphabets.indexOf(userGuess) >= 0) {
    
    //Storing user input in guessessofar array
        guessesSoFar[guessesSoFar.length]=userGuess;
        guessesLeft--;
        console.log("guessesLeft:" +guessesLeft);

        if (computerChoice == userGuess) {
            wins++;
            alert("You won!");
            $(".img-winner").animate({opacity:"1"});
        


    //Resetting all values to start fresh
            
            $(".img-winner").animate({opacity:"0"});
            guessesLeft = 10;
            guessesSoFar = [];
            computerChoice = alphabets[Math.floor(Math.random() * alphabets.length)];
            
    }
    
    if (guessesLeft == 0) {
		losses++;
        alert("Better luck next time");
        $(".img-sorry").animate({opacity:"1"});


        
      //Resetting all values to start fresh
        $(".img-sorry").animate({opacity:"0"});

        guessesLeft = 10;
		guessesSoFar = [];
		computerChoice = alphabets[Math.floor(Math.random() * alphabets.length)];
	}

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;

}
}
