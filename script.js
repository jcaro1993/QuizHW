// var contentEl = document.getElementById("content");
// var startBtnEL = document.getElementById("start-button");
// var reStartBtnEL = document.getElementById("reStartBtn");
// var questionEL = document.getElementById("myQuestion");
// var finalScore = document.getElementById("finalScore");
// var highScoresEl = document.getElementById("highScores");
// var resultsEl = document.getElementById("results");
// var choicesEl = document.getElementById("choices");
// var timeEl = document.querySelector("#time");
// var buttonEl = document.querySelector(".choice-Btn")
// var firstBtn = document.getElementById("button-1")
// var secondBtn = document.getElementById("button-2")
// var thirdBtn = document.getElementById("button-3")
// var fourthBtn = document.getElementById("button-4")

// var score = 0;
// var secondsLeft = 15 * myQuestion.length;
// var currentQuestionIndex = 0;
// var currentQuestion = myQuestions[currentQuestionIndex];



// function begin(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     webkitCancelAnimationFrame.style.display = "none";
//     askQuestions();
// }

// function startquiz()
// startBtnEL.addEventListener("click", startquiz); {}

// var myQuestions = [{
//         question1: "What is the name of Thor's hammer",
//         choices1: ["Vanir", "Mjolnir", "Aesir", "Norn"],
//         correct1: "Mjolnir"

//     },

//     {
//         question2: "What is Captain America's shield made of ?",
//         choices2: ["Adamantuim", "Vibranium", "Promethium", "Carbonadium"],
//         correct2: "Vibranium"
//     },
//     {
//         question3: "Who wears the Infinity Stones and snaps out Thanos and his army ?",
//         choices3: ["Hulk", "Thor", "Iron Man", "Captain America"],
//         correct3: "Iron Man;"
//     },
//     {
//         question4: "Where is the Black Panther from ",
//         choices4: ["Skull Island", "Wakanda", "Asgard", "Savage land"],
//         correct4: "Wakanda"
//     },

// ];

//     var allQuestions = [question1, question2, question3, question4];
//     var theChoices = [choices1, choices2, choices3, choices4];
//     var allcorrect = [correct1, correct2, correct3, correct4]

//     var myQuestion = document.createElement("p")
//     myQuestion.textContent = myQuestions[0].questionEL
//     questionEL.appendChild(myQuestion)

//     var mychoice = document.createElement("p")
//     mychoice.textContent = myQuestions[0].choices[0]
//     questionEL.appendChild(mychoice)



// }

// startBtnEL.addEventListener("click", startquiz)

// function correct() {
//     outcome.textcontent = "correct"
//     reveal(outcome);
//     score += 25;
// };

// function incorrect() {
//     outcome.textcontent = "Wrong";
//     reveal(outcome);
//     counter -= 10;
//     score -= 3;


//     document.getElementById("form1").onsubmit = function() {
//         hammer = parseInt(document.querySelector('input[id = "hammer"]:checked').value);
//         shield = parseInt(document.querySelector('input[id = "shield"]:checked').value);
//         stones = parseInt(document.querySelector('input[id = "stones"]:checked').value);
//         from = parseInt(document.querySelector('input[id = "from"]:checked').value);


//         result = hammer + shield + stines + from;

//         document.getElementById("grade").innerHTML = result;



//         return false;
//     }
// }