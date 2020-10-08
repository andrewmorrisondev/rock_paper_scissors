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
  // formats playerSelction to ex. "Rock" not rock
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  if ((computerSelection === "Rock" && playerSelection === "Rock") ||
    (computerSelection === "Paper" && playerSelection === "Paper") ||
    (computerSelection === "Scissors" && playerSelection === "Scissors")) {
    console.log("You chose: " + playerSelection + ".");
    console.log("I chose: " + computerSelection + ".");
    console.log("It's a tie! Try again.");
    console.log("My Score: " + computerScore);
    console.log(("Your Score: " + playerScore));
  } else if ((computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Rock")) {
    console.log("You chose: " + playerSelection + ".");
    console.log("I chose: " + computerSelection + ".");
    console.log("It's only a flesh wound.");
    playerScore ++;
    console.log("My Score: " + computerScore);
    console.log(("Your Score: " + playerScore));
  } else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")) {
    console.log("You chose: " + playerSelection + ".");
    console.log("I chose: " + computerSelection + ".");
    console.log("You're losing your touch.");
    computerScore ++;
    console.log("My Score: " + computerScore);
    console.log(("Your Score: " + playerScore));
  } else {
    console.log("That's not a valid move.");
    console.log(playerSelection, computerSelection)
  }
}

function game() {
  for (gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
  playerSelection = prompt("What hand will you play?");
  playRound(playerSelection, computerSelection);
    if (playerScore === 3) {
      console.log("Oh no... You won. :(");
    } else if (computerScore === 3) {
      console.log("You insulent mortal! You thought you could beat me? At a game of chance? Not likley.")
    } else {
      console.log((4 - gamesPlayed) + " more games left.");
    }
  }
  if (computerScore > playerScore) {
    alert("I won. Mwahahahahaah.");
  } else if (computerScore < playerScore) {
    alert("Lose... To YOU?! This can't be possible...");
  } else {
    alert("I guess a tie is to be expected in a game of chance. Well played human.")
  }
  if (prompt("Do you want to play again?") === "Yes" || "yes" || "Sure" || "sure") {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    alert("Have a nice day.");
  }
}

let playerScore = 0;
let computerScore = 0;



let playerSelection = "SCISSORS";
const computerSelection = computerPlay();
game();

