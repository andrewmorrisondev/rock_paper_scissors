function getRandomNumber() {
  Math.floor(Math.random() * 3);
  return Math.floor(Math.random() * 3);
}

function computerPlay() {
  let randNumber = getRandomNumber();
  if (randNumber === 0) {
    return "Rock";
  } else if (randNumber === 1) {
    return "Paper";
  } else  if (randNumber === 2) {
    return "Scissors";
  } else  if (randNumber !== 0 || 1 || 2) {
    return "Error";
  }
}

function playRound(playerSelection, computerSelection) {
  // format playerSelction to ex. "Rock" not rock
  if ((computerSelection === "Rock" && playerSelection === "Rock") ||
    (computerSelection === "Paper" && playerSelection === "Paper") ||
    (computerSelection === "Scissors" && playerSelection === "Scissors")) {
    console.log("You chose: " + playerSelection + ".");
    console.log("I chose: " + computerSelection + ".");
    console.log("It's a tie! Try again.");
  } else if ((computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Rock")) {
    console.log("You chose: " + playerSelection + ".");
    console.log("I chose: " + computerSelection + ".");
    console.log("Congratulations, you beat me!");
  } else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")) {
    console.log("You chose: " + playerSelection + ".");
    console.log("I chose: " + computerSelection + ".");
    console.log("Mwahaha. I won.");
  } else {
    console.log("That's not a valid move.");
  }
}

  





const playerSelection = "Rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);