// We start the game with a score of 0.
    var score = 0;
    var quesIndex =0;
    var questions = [
      {
          title: "Commonly used data types DO NOT include ___________",
          choices: ["strings", "booleans", "alerts", "numbers"],
          answer: "alerts"
      },
      {
          title: "The condition in an if / else statement is enclosed within ______.",
          choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
          answer: "parentheses"
      },
      {
          title: "This function writes a message to log on the debugging console.",
          choices: ["boolean", "method","log.console","console.log"],
          answer: "console.log"
      },
      {
          title: "When in the browser, what allows you to see what is happening behind the scenes?",
          choices: ["telescope", "x-ray vision", "developer tools", "none of these"],
          answer: "developer tools"
      },
      {
          title: "What is Github?",
          choices: ["Government Agency", "Online Food Delivery Service", "A Bank", "A repository hosting service"],
          answer: "A repository hosting service"
      }
  
  
  ];


// How do we transition from start screen to displaying questions???
$("#start").on("click",function(){
  clock();
  renderQuestion();
  $(".start-button").hide();
  $("#questions").show();
})

function renderQuestion(){
  // let q= questions [runningTitle];\
  console.log("Inside reender ques");
  $("#title").text(questions[quesIndex].title);

  for(var i=0;i<questions[quesIndex].choices.length;i++){
    var btn = $("<button>");
    btn.val(questions[quesIndex].choices[i]);
    btn.text(questions[quesIndex].choices[i]);
    btn.addClass("btn-options");
    $("#choices").append(btn);
  }
}
// This ensures timer will not begin until start button is clicked.
// document.getElementById("start").addEventListener("click", function(){
  function clock()
  {
  var timeleft = 15;

  var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + 
  "&nbsp"+"seconds remaining";

  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
  }
  }, 1000);

  console.log(countdown);
};




// this loop doesn't function yet, use it to loop through questions.
// for (var i = 0; i < questions.length; i++) {

    // Logic question 1
//     if ((answer === "alerts" && questions[i].questions === "Commonly used data types DO NOT include:")) {
//     // Increase score
//     score++;
//     alert("Correct!");
//   }
//   else {
//     alert("Wrong!");
//   }
//    // Logic question 2
//    if ((answer === "parentheses" && questions[i].questions === "The condition in an if / else statement is enclosed within ______.")) {
//     // Increase score
//     score++;
//     alert("Correct!");
//   }
//   else {
//     alert("Wrong!");
//   }
//    // Logic question 3
//    if ((answer === "console.log" && questions[i].questions === "This function writes a message to log on the debugging console.")) {
//     // Increase score
//     score++;
//     alert("Correct!");
//   }
//   else {
//     alert("Wrong!");
//   }
//    // Logic question 4
//    if ((answer === "developer tools" && questions[i].questions === "When in the browser, what allows you to see what is happening behind the scenes?")) {
//     // Increase score
//     score++;
//     alert("Correct!");
//   }
//   else {
//     alert("Wrong!");
//   }
//    // Logic question 5
//    if ((answer === "A repository hosting service" && questions[i].questions === "What is Github?")) {
//     // Increase score
//     score++;
//     alert("Correct!");
//   }
//   else {
//     alert("Wrong!");
//   }

// }
// Show total at end
// alert("You got " + score + "/" + questions.length);