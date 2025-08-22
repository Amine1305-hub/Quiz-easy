const questions = [
  {
    question: "What is the capital city of Morocco?",
    answers: [
      { text: "Rabat", correct: true },
      { text: "Casablanca", correct: false },
      { text: "Fez", correct: false },
      { text: "Marrakesh", correct: false }
    ]
  },
  {
    question: "Which is the largest country in the world by land area?",
    answers: [
      { text: "Canada", correct: false },
      { text: "China", correct: false },
      { text: "Russia", correct: true },
      { text: "USA", correct: false }
    ]
  },
  {
    question: "The Great Barrier Reef is located in which country?",
    answers: [
      { text: "South Africa", correct: false },
      { text: "Australia", correct: true },
      { text: "Brazil", correct: false },
      { text: "India", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Diamond", correct: true },
      { text: "Iron", correct:false },
      { text: "Quartz", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O2", correct: false },
      { text: "CO2", correct:false },
      { text: "H2O", correct:true },
      { text: "HO2", correct: false }
    ]
  },
  {
    question: "Which planet is known as ther RED PLANET?",
    answers: [
      { text: "Venus", correct: false },
      { text: "juptier", correct:false },
      { text: "Mars", correct:true },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "France", correct:true },
      { text: "Germany", correct:false },
      { text: "Argentina", correct: false }
    ]
  },
   {
    question: "In basketball, how many points is a free throw worth?",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct:false },
      { text: "3", correct:false },
      { text: "4", correct: false }
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.style.background = "#28a745";
    score++;
  } else {
    selectedBtn.style.background = "#dc3545";
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.style.background = "#28a745";
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}! 🎉`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

