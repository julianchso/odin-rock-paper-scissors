let computerSelection;
let playerSelection;
let playerScore = 4;
let computerScore = 4;

let choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playerSelection = button.textContent.toLowerCase();

    playRound(playerSelection, computerSelection);

    if (playerScore == 5 || computerScore == 5) {
      declareWinner();
    }
  });
});

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  let moves = document.querySelector(".displayMoves");
  
  moves.textContent = `You picked ${playerSelection} and computer picked ${computerSelection}`;

  if (playerSelection == computerSelection) {
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore++;
    displayScore();
  } else {
    computerScore++;
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
  let winnerDiv = document.querySelector(".winnerText");
  let scoreBoard = document.querySelector(".scoreContainer");
  if (playerScore == 5) {
    winnerDiv.textContent = "You Win! Congratulations!";
  } else if (computerScore == 5) {
    winnerDiv.textContent = "You lose! Goodbye world...";
  }

  console.log(
    `Final Score. Player: ${playerScore} — Computer: ${computerScore}`
  );
  playerScore = 0;
  computerScore = 0;
}
