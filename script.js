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

console.log(computerPlay());