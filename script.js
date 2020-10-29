///////////////////////////////////////////////////////////////////////////////////
// Computer Picks Move
///////////////////////////////////////////////////////////////////////////////////
function getRandomNumber() {
  Math.floor(Math.random() * 3);
  return Math.floor(Math.random() * 3);
}

function selectComputer() {
  var randNumber = getRandomNumber();
  if (randNumber === 0) {
    randNumber = "rock";
    let computerSelection = 0
    return {
      first: computerSelection,
      second: randNumber
    };
  } else if (randNumber === 1) {
    randNumber = "paper";
    let computerSelection = 1
    return {
      first: computerSelection,
      second: randNumber
    };
  } else if (randNumber === 2) {
    randNumber = "scissors";
    let computerSelection = 2
    return {
      first: computerSelection,
      second: randNumber
    };
  }
}
///////////////////////////////////////////////////////////////////////////////////
// Listens for button click, determines moves, starts round
///////////////////////////////////////////////////////////////////////////////////
const rock = document.getElementsByClassName("rock");
rock[0].addEventListener("mousedown", selectRock);
function selectRock(e) {
  clearBoard();
  editComputerMessage(">You played rock.");
  let playerSelection = 0;
  let computerSelection = selectComputer();
  thinkingAnimation(addDot);
  keepScore(computerSelection, playerSelection);
  setTimeout(editSecondComputerMessage, 3000, ">The Computer picked " + computerSelection.second);
  return playerSelection;
}

const paper = document.getElementsByClassName("paper");
paper[0].addEventListener("mousedown", selectPaper);
function selectPaper(e) {
  clearBoard();
  editComputerMessage(">You played paper.")
  let playerSelection = 1;
  let computerSelection = selectComputer();
  thinkingAnimation(addDot);
  keepScore(computerSelection, playerSelection);
  setTimeout(editSecondComputerMessage, 3000, ">The Computer picked " + computerSelection.second);
  return playerSelection;
}

const scissors = document.getElementsByClassName("scissors");
scissors[0].addEventListener("mousedown", selectScissors);
function selectScissors(e) {
  clearBoard();
  editComputerMessage(">You played scissors.")
  let playerSelection = 2;
  let computerSelection = selectComputer();
  thinkingAnimation(addDot);
  keepScore(computerSelection, playerSelection);
  setTimeout(editSecondComputerMessage, 3000, ">The Computer picked " + computerSelection.second);
  return playerSelection;
}
///////////////////////////////////////////////////////////////////////////////////
// Updates Screen
///////////////////////////////////////////////////////////////////////////////////
function editComputerMessage(message) {
  const computerMessage = document.querySelector(".computer-message");
  computerMessage.textContent = message;
}
function editSecondComputerMessage(secondMessage) {
  const secondComputerMessage = document.querySelector(".second-computer-message");
  secondComputerMessage.textContent = secondMessage;
}
///////////////////////////////////////////////////////////////////////////////////
// Keeps Score
///////////////////////////////////////////////////////////////////////////////////
function keepScore(computerSelection, playerSelection) {
  let playerScore = document.querySelector(".player-score");

  let computerScore = document.querySelector(".computer-score");


  if ((computerSelection.first === 0 && playerSelection === 0) ||
    (computerSelection.first === 1 && playerSelection === 1) ||
    (computerSelection.first === 2 && playerSelection === 2)) {
      // add line
  } else if ((computerSelection.first === 0 && playerSelection === 1) ||
    (computerSelection.first === 1 && playerSelection === 2) ||
    (computerSelection.first === 2 && playerSelection === 0)) {
      setTimeout(changeScore, 3000, playerScore);
  } else if ((computerSelection.first === 0 && playerSelection === 2) ||
    (computerSelection.first === 1 && playerSelection === 0) ||
    (computerSelection.first === 2 && playerSelection === 1)) {
      setTimeout(changeScore, 3000, computerScore);
  }
}
///////////////////////////////////////////////////////////////////////////////////
// Animation
///////////////////////////////////////////////////////////////////////////////////
function addDot() {
  const computerMessage = document.querySelector(".computer-message");
  computerMessage.textContent = computerMessage.textContent + ".";
}

function thinkingAnimation(func, computerSelection) {
  for(i = 0; i <1; i++) {
    setTimeout(func, 1000);
  };
  for (i = 0; i < 1; i++) {
    setTimeout(func, 2000);
  };
}
///////////////////////////////////////////////////////////////////////////////////
// Clears Screen
///////////////////////////////////////////////////////////////////////////////////
function clearBoard() {
  const computerMessage = document.querySelector(".computer-message");
  computerMessage.textContent = "";

  const secondComputerMessage = document.querySelector(".second-computer-message");
  secondComputerMessage.textContent = "";
}
///////////////////////////////////////////////////////////////////////////////////
// Adds Number to Scoreboard
///////////////////////////////////////////////////////////////////////////////////
function changeScore(x) {
  let newX = parseInt(x.textContent, 10);
  let newScore = newX + 1;
  x.textContent = newScore;
};
//////////////////////////////////////////////////////////////////////, playerScore