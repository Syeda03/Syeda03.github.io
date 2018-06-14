
$( document ).ready(function(){

//Setting up random number and updating in html
    var targetNumber= Math.floor(Math.random() * 120) + 18; 
    $("#targetNumber").text(targetNumber);
    console.log(targetNumber);

//Declaring and initilaizing variables and updating html.
    var randomNumbers=[];
    var winCounter=0;
    var lossCounter=0;
    var totalScore=0;
    $("#winCounter").text(winCounter);
    $("#lossCounter").text(lossCounter);
    $("#totalScore").text(totalScore);


    //function to set up random numbers for each crystal.will work on call.
    function fourRandomNumbers(){
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random()*12)+1;
            randomNumbers.push(num);
            console.log(randomNumbers)
        }
    }
    // Calling function to select random numbers for crystals.    
        fourRandomNumbers();
        

    //resets the game
    function reset(){
        targetNumber=Math.floor(Math.random()*120)+18;
        console.log(targetNumber)
        $('#number').text(targetNumber);
        randomNumbers = [];
        fourRandomNumbers();
        totalScore= 0;
        $('#totalScore').text(totalScore);
        } 
    //function to be called when user wins.
        function win(){
        alert("You won!");
        winCounter++;
        $("#winCounter").text(winCounter)
        reset();
    }
    //function to be called when user lost.
    function lost(){
            alert("you lost");
            lossCounter++;
            $("#lossCounter").text(lossCounter);
            reset();
    }
    //collecting user input on click,adding it to totalscore and displaying on html.
    $("#numberOne").click(function(){
        totalScore= totalScore + randomNumbers[0];
        console.log("new total:" +totalScore);
        $("#totalScore").text(totalScore)

            if(totalScore==targetNumber){
            win();
            }
            else if (totalScore > targetNumber){
                lost();
            
        }
    });
        
    $("#numberTwo").click(function(){
        totalScore= totalScore + randomNumbers[1];
        console.log("new total:" +totalScore);
        $("#totalScore").text(totalScore)

            if(totalScore==targetNumber){
            win();
            }
            else if (totalScore > targetNumber){
                lost();
            }
    });
        

    $("#numberThree").click(function(){
        totalScore= totalScore + randomNumbers[2];
        console.log("new total:" +totalScore);
        $("#totalScore").text(totalScore)

            if(totalScore==targetNumber){
            win();
            }
            else if (totalScore > targetNumber){
                lost();
            }
    });

    $("#numberFour").click(function(){
        totalScore= totalScore + randomNumbers[3];
        console.log("new total:" +totalScore);
        $("#totalScore").text(totalScore)

            if(totalScore==targetNumber){
            win();
            }
            else if (totalScore> targetNumber){
                lost();
            }
        });
    })
