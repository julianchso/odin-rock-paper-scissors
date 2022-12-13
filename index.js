let computerSelection;
let playerScore = 0;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer Choice: ${choice}`);
  return choice;
}

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playerSelection = button.textContent.toLowerCase();
    console.log(playerSelection);

    playRound(playerSelection, computerSelection);

    if (playerScore == 5 || computerScore == 5) {
      declareWinner();
    }
  });
});

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    console.log("draw");
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    displayScore();
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    displayScore();
  }
}

function displayScore() {
  playerScoreDisplay = document.querySelector("#playerScore");
  playerScoreDisplay.textContent = playerScore;

  computerScoreDisplay = document.querySelector("#computerScore");
  computerScoreDisplay.textContent = computerScore;
}

function declareWinner() {
  console.log(
    `Final Score. Player: ${playerScore} — Computer: ${computerScore}`
  );
  playerScore = 0;
  computerScore = 0;
}
