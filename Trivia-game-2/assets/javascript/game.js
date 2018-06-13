$(document).ready(function(){
    $("#startBtn").click(function(){
        $(this).hide();
        newGame();
        
    });
    
    function newGame(){
        runTimer();
        $('#finalMessage').empty();
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        newQuestion();
    }

    var finalMessage;
    var correctAnswer;
    var incorrectAnswer;
    var currentQuestion; 
    var seconds; 
    var userSelect;

        var time = 5;
        var intervalID;
        function runTimer(){
            intervalID= setInterval(timer,1000);
        }
        function timer(){
            $('.timer').html('<h5>Time Left: '+time+' secs</h5>');
            time--;
            if(time===-1 || userSelect== true){	
                stopTimer();
                incorrectAnswer++;
                newQuestion();
            }
        }
        function stopTimer(){
            clearInterval(intervalID);
        }
    

    function newQuestion(){
        if(currentQuestion<triviaQuestions.length){
            stopTimer();
             time=5;
             runTimer();
             $('#message').empty();
             $("#answerList").empty();
             var question = triviaQuestions[currentQuestion];
             var questionImage = $("<img>");
             questionImage.attr('src', question.image);
             questionImage.attr('class', 'question-img');
             $(".image").html(questionImage);
             $(".question").text(question.question);
     
             for(var i = 0;i<4; i++){
                 var optionDiv = $('<div class="selection">');
                 var option = $('<input type="radio" name="choice" value="new button" />');
                 var optionLabel = $('<label>');
                 optionLabel.text(question.answerList[i]);
                 optionDiv.append(option);
                 optionDiv.append(optionLabel)
                 $("#answerList").append(optionDiv);
                 console.log(option)
     
                 option.click(function(){
                    stopTimer();
                     if(question.answerList.indexOf(answerList) == question.answer){
                         $("#message").text(messages.correct)
                         correctAnswer++;
                     }else{
                         $("#message").text(messages.incorrect);
                         incorrectAnswer++;
                     }
                     setTimeout(newQuestion, 2000);
                     // newQuestion();
                 });
             }
     
             currentQuestion++;
        } else {
           
            scoreboard();
         
            //alert('results\nCorrect: ' + correctAnswer + "\nIncorrect: " + incorrectAnswer);
        }
            // $(this).append(question.answerList[i]);
            
    }
        var messages = {
            correct: "Yes, that's right!",
            incorrect: "No, that's not it.",
            endTime: "Out of time!",
            finished: "Alright! Let's see how well you did."
        }
    
           
        
        function scoreboard(){
            $('#timeLeft').empty();
            $('#message').empty();
            $('#correctedAnswer').empty();
            $('#finalMessage').html(messages.finished);
            $('#correctAnswers').html("Correct Answers: " + correctAnswer);
            $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
           
        }
    });
    



















