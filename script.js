var timeEl= document.querySelector("#time-display");
var Highscore = document.querySelector("#highscore-display");
var titleEl = document.querySelector("#title");
var currentIndex = 0;


var quizQuestions = 
[
    {
    title: "Commonly used data types DO NOT include:",
    
    choices: ["strings", "booleans", "alerts", "numbers"],

    answer: "alerts"
    },

    {
    title: "The condition in an if/else statement is enclosed within _____",
    
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],

    answer:"parenthesis"

    },

    {
    title:"Arrays in javaScript can be used to store _______",

    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],

    answer: "all of the above"
    },

    {
    title:"String values must be enclosed within ______ when being assigned to variables.",

    choices:["commas", "curly brackets", "quotes", "parenthesis"],

    answer:"quotes"
    },

    {
    title:"A very useful tool used during development and debugging for printing content to the debugger is:",

    choices:["JavaScript", "terminal/bash", "for loops", "console.log"],

    answer:"console.log"
    }
];

console.log(timeEl);
// starting time at 75 seconds 
var secondsLeft = 75; 
// creating an empty variable for the highscore to be put into
var highscoreEl; 

// setting timer interval here 
function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft --; 
        timeEl.textContent = "time:" + secondsLeft; 

        if (secondsLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);

   
};

// creating on click function for the start button in my HTML that is supposed to trigger the quiz to begin

$("#start").on("click", function (){

    setTime();
    createQuiz(); 
   
}); 

function createQuiz (){

    // creating a variable that will take the title property out of the current index 

    var loopQuestions = quizQuestions[currentIndex].title;

    // creating a variable that is selecting my question-display div from the HTML; and then setting the text content to my loopQuestions variable
    var optionsEl = document.querySelector("#question-display");
    optionsEl.textContent= loopQuestions; 

    
    // creating a variable that will take the choices property out of the current index 
    var loopAnswers= quizQuestions[currentIndex].choices; 
    // grabbing the options display div from my HTML and setting it to an empty string each time the function is run 
    var choicesEl = document.querySelector("#options-display");
    choicesEl.textContent="";

    // starting a loop that will append the current array item with it's properties to the page 

    for (i=0; i<loopAnswers.length; i++){

       
        // creating 4 buttons for my 4 choices in each object and setting the text content to the relevant info based on the index 
        var choiceButtons = document.createElement("button");
        choiceButtons.textContent = loopAnswers[i]; 
        // adding a class to my buttons so that I can style them in the CSS 
        choiceButtons.classList.add("buttonStyle");
        

        // adding event listeners to all buttons 
        choiceButtons.addEventListener("click", function (event){
            
        //   if statement that will tell if the button clicked = answer. Else, deduct 10 seconds from the timer and display a "wrong!"" message
            if(quizQuestions[currentIndex].answer === event.target.textContent){
                console.log("you are right!");
            }else{
                secondsLeft-=10;
            }
          
        // if statement that will end the quiz after the index has reached the end.
            if (currentIndex === quizQuestions.length-1) {
                console.log("quiz end");

              
                
               var gameOver = choicesEl.textContent= "Game Over!";
               choicesEl.appendChild(gameOver);

               

            } else{
                currentIndex++ 
            };

        // at the end of this we create the quiz again! 

            createQuiz();
        
        });

        choicesEl.appendChild(choiceButtons);

    }


}

