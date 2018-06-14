$(document).ready(function(){
 
       // show start screen with start button
        $('.main-section').append($('<button/>',{
            text:'Start',
            id: 'startButton',
            click:showQuiz
        }).css({
                    'background':'#474545',
                    'height':'100px',
                    'width':'55%',
                    'border-radius':'10px',
                    'color':'lightgrey',
                    'font-size':'40px',

                }));
        var time = 60;
        var intervalID;
        function runTimer(){
            intervalID= setInterval(timer,500);
        }
        function timer(){
            $('.timer').html('<h2>Time Remaining : '+time+' secs.</h2>');
            time--;
            if(time===-1){	
                stopTimer();
                $('.showDiv').hide();
                checkAnswers();
                $('.timer').hide();
            }
        }
        function stopTimer(){
            clearInterval(intervalID);
        }

        function showQuiz(){
            runTimer();
            $('#startButton').hide();
            var questions=[];
            var options;
            var optionNumber;
            var display=[];
            var answer;
            var showDiv=('<div class="showDiv"></div>');
            $('.main-section').append(showDiv);
            
            for(var i=0; i< quiz.length; i++){
                
                option=Object.values(quiz[i].options); // get the sub-object options like an array
                optionNumber= Object.keys(quiz[i].options);//get the sub-object options' key values
                
                answer=[]; // empty array to store all the answer choices
                

                //fro every question, Display answer option as radio button
                for(var k=0;k<option.length;k++){
                    answer.push('<input type="radio" name="question'+(i+1)+'" value="'+optionNumber[k]+'">'+optionNumber[k]+'. '+option[k]+'</input><br>');
                }
                // store the question and answer to display array
            
                display.push('<div class="question'+(i+1)+'"> <h4>'+(i+1)+'. '+quiz[i].question+'</h4> </div>'+'<div class="answers">'+answer.join('')+'</div><br>');	
                //display the display array on html
            }
                $('.showDiv').html(display);
            
            //add the chek answer button
                $('.showDiv').append($('<button/>',{
                    text:"Check Answers",
                    id:"checkButton",
                    click: checkAnswers
                }).css({
                    'background':'#474545',
                    'height':'45px',
                    'width':'200px',
                    'border-radius':'10px',
                    'color':'lightgrey',
                    'font-size':'20px',
                }));
            }

        function checkAnswers(){
            stopTimer();
            $('.showDiv').hide();
            $('.timer').hide();
            var answerChoices= document.querySelectorAll('.answers');
            var userAnswer='';
            var correct=0;
            var incorrect=0;
            var unanswered=0;
            for(var x=0;x<quiz.length;x++){
                userAnswer=(answerChoices[x].querySelector('input[name=question'+(x+1)+']:checked')||{}).value;
                console.log('Correct answer: '+quiz[x].answer)
                console.log('User Selected:'+userAnswer)
                if(userAnswer===quiz[x].answer){
                    correct++;
                    
                }else if(!userAnswer){
                    unanswered++;
                
                }else{
                    incorrect++;
                    
                }

            }
                $('.main-section').append('<h3>Correct Answers = '+ correct+'</h3>');
                $('.main-section').append('<h3>Incorrect Answers = '+ incorrect+'</h3>');
                $('.main-section').append('<h3>Unanswered = '+ unanswered+'</h3>');
        }
});