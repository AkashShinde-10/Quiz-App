const arr = [
  {question: "HTML stands for?",
    answer : [ "HYPERTEXT MARKUP LANGUAGE",
     "HYPERTEXT LANGUAGE",
     "HYPERLOOP MARKUP LANGUAGE",
     "HIGH MARKUP LANGUAGE"],
     correct: "HYPERTEXT MARKUP LANGUAGE"
    },

    {question: "CSS stands for?",
    answer : [ "CLEAR STYLE SHEETS", "CASCADING STYLE SHEETS", "CONSOLE STYLE SHEETS", "CURRENT STYLE SHEETS"],
     correct: "CASCADING STYLE SHEETS"
  },

    {question: "JS stands for?",
    answer : [ "Java", "J Script", "JavaScript", "None of the above"],
    correct : "JavaScript"
  }

]

let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let result = document.querySelector(".result");
let container = document.querySelector(".main-container");
let start = document.querySelector(".start");
let displayScore = document.querySelector(".score");
let timeRemain = document.querySelector(".timer")


let questionIndex = 0;
let score = 0;
time = 15
let interval = setInterval(timer, 1000)

start.addEventListener("click", function(){
    questionIndex = 0;
    score = 0;
    time = 15;
    clearInterval(interval)
    displayQuestion()
    interval = setInterval(timer, 1000)
})


function displayQuestion(){
  if (questionIndex < arr.length){
    question.innerHTML = `${questionIndex + 1}. ${arr[questionIndex].question}`;
    answer.innerHTML = '';
    arr[questionIndex].answer.forEach((ans)=>{
      let btn = document.createElement("BUTTON");
      answer.appendChild(btn);
      btn.innerHTML = ans;
    })
    result.style.display = "none"
    container.style.display = "block"
  }
  else{
    result.style.display = "block"
    container.style.display = "none"
    displayScore.innerHTML = `${score >= 2? "Congratulations!": "OH!"} You Scored ${score} out of ${arr.length}.` ;
    clearInterval(interval)
  }
}

function nextQuestion(){
  questionIndex++;
  displayQuestion(); 
  time = 15;
  clearInterval(interval)
  interval = setInterval(timer, 1000)
 }


function checkAnswer(e){
  if(e.target.tagName === "BUTTON"){
    console.log(e.target.innerHTML);
    if(e.target.innerHTML === arr[questionIndex].correct){
      score += 1;
      e.target.style.backgroundColor = "green"
      e.target.style.color = "white"
    }
    else{
      score = score
      e.target.style.backgroundColor = "red"
      e.target.style.color = "white"
    }
    setTimeout(nextQuestion, 1000)
  }

}


function timer(){
   time -= 1;
   timeRemain.innerHTML = `Timer: ${time<10? '0'+ time: time}`;

   if (time <= 5){
    timeRemain.style.color = 'red'
  }
  else{
    timeRemain.style.color = 'green'
  }
  
  if (time === 0){
    time = 15
    nextQuestion()
  }
}



answer.addEventListener("click", checkAnswer)
displayQuestion()



