const quiz = [
  {
    question: "Hva måles i Ohm (Ω)?",
    choices: [
      { id: 1, label: "Strøm" },
      { id: 2, label: "Motstand" },
      { id: 3, label: "Spenning" },
      { id: 4, label: "Effekt" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Hva er normal kroppstemperatur?",
    choices: [
      { id: 1, label: "35°C" },
      { id: 2, label: "37°C" },
      { id: 3, label: "39°C" },
      { id: 4, label: "40°C" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Hva er kroppens viktigste energikilde?",
    choices: [
      { id: 1, label: "Protein" },
      { id: 2, label: "Karbohydrater" },
      { id: 3, label: "Vann" },
      { id: 4, label: "Vitaminer" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Hva betyr RGB?",
    choices: [
      { id: 1, label: "Red, Green, Blue" },
      { id: 2, label: "Rapid Graphic Build" },
      { id: 3, label: "Render Graphic Base" },
      { id: 4, label: "Red Gradient Blend" },
    ],
    correctAnswer: 1,
  },
  {
    question: "Hva er demokrati?",
    choices: [
      { id: 1, label: "Kongedømme" },
      { id: 2, label: "Folkestyre" },
      { id: 3, label: "Diktatur" },
      { id: 4, label: "Militærstyre" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Hva er god kundeservice?",
    choices: [
      { id: 1, label: "Ignorere kunder" },
      { id: 2, label: "Hjelpe kunder profesjonelt" },
      { id: 3, label: "Selge mest mulig" },
      { id: 4, label: "Snakke lite" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Hva betyr HTML?",
    choices: [
      { id: 1, label: "HyperText Markup Language" },
      { id: 2, label: "HighText Machine Language" },
      { id: 3, label: "Hyper Transfer Media Link" },
      { id: 4, label: "Home Tool Markup Language" },
    ],
    correctAnswer: 1,
  },
  {
    question: "Hva er sveising?",
    choices: [
      { id: 1, label: "Kutte metall" },
      { id: 2, label: "Smelte sammen materialer" },
      { id: 3, label: "Male metall" },
      { id: 4, label: "Polere metall" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Hva betyr inkludering?",
    choices: [
      { id: 1, label: "Holde noen utenfor" },
      { id: 2, label: "La alle få være med" },
      { id: 3, label: "Konkurrere" },
      { id: 4, label: "Jobbe alene" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Se videoen og velg riktig svar",
    video: "../video/tverrfagliginnslagspikerv2.mp4",
    choices: [
      { id: 1, label: "Skrue" },
      { id: 2, label: "Plug" },
      { id: 3, label: "Spiker" },
    ],
    correctAnswer: 2,
  },
];

let h2 = document.getElementById("question");
let buttonsContainer = document.getElementById("buttons");
let count = 0;
let chosenAnswer = false;

let totalScore = 0;

function loadQuiz() {
  let firstElement = quiz[count];

  let h2 = document.getElementById("question");
  let buttonsContainer = document.getElementById("buttons");

  h2.textContent = `${firstElement.question}`;

  let buttons = firstElement.choices;

  buttonsContainer.innerHTML = "";

  buttons.forEach((button) => {
    buttonsContainer.innerHTML += `<button id="${button.id}" onclick="checkAnswer(${button.id}, ${firstElement.correctAnswer})">${button.label}</button>`;
  });
}

function checkAnswer(buttonId, correctAnswer) {
  let feedback = document.getElementById("feedback");

  let isCorrect = buttonId === correctAnswer;

  if (isCorrect) {
    chosenAnswer = true;
    document.getElementById(buttonId).classList.add("correct");
    feedback.textContent = "Du hadde riktig!";
    totalScore++;
  } else {
    chosenAnswer = true;
    document.getElementById(buttonId).classList.add("wrong");
    feedback.textContent = "Du tok feil!";
  }

  if (chosenAnswer) {
    let nextButton = document.getElementById("next");
    nextButton.innerHTML = `<button onClick="nextQuestion()">Next</button>`;
  }
}

function nextQuestion() {
  count++;
  let nextElement = quiz[count];
  let h2 = document.getElementById("question");
  let buttonsContainer = document.getElementById("buttons");
  let nextButton = document.getElementById("next");

  nextButton.innerHTML = "";

  let quizLength = quiz.length;

  chosenAnswer = false;

  if (count < quizLength) {
    feedback.textContent = "";
    h2.textContent = ``;
    buttonsContainer.innerHTML = "";

    h2.textContent = `${nextElement.question}`;

    let isVideo = nextElement.video;

    let videoContainer = document.getElementById("video");
    videoContainer.style.display = "none";
    videoContainer.innerHTML = "";

    if (isVideo) {
      videoContainer.style.display = "flex";
      videoContainer.innerHTML = `
        <video width="500" controls>
          <source src="${nextElement.video}" type="video/mp4">
        </video>`;
    }

    let buttons = nextElement.choices;

    buttons.forEach((button) => {
      buttonsContainer.innerHTML += `<button id="${button.id}" onclick="checkAnswer(${button.id},${nextElement.correctAnswer})">${button.label}</button>`;
    });
  } else {
    let summaryContainer = document.getElementById("summary");
    let questionContainer = document.getElementById("questionContainer");
    let totalScoreContainer = document.getElementById("totalScore");

    summaryContainer.style.display = "flex";
    questionContainer.style.display = "none";

    totalScoreContainer.textContent = `Din totalscore: ${totalScore} av ${quiz.length}`;
  }
}

loadQuiz();
