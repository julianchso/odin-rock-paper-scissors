function getComputerChoice() {
  let choice = Math.random();

  if (choice < 1 / 3) {
    return "rock";
  } else if (choice >= 1 / 3 && choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    console.log("improper input. Enter rock, paper, or scissors");
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
  }

  if (playerSelection == computerSelection) {
    console.log("draw");
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return "Player";
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return "Computer";
  }
}

function game(rounds) {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < rounds; i++) {
    if (playRound() == "Player") {
      playerScore += 1;
      console.log(`Player: ${playerScore}`)
      console.log(`Computer: ${computerScore}`)
    } else if (playRound() == "Computer") {
      computerScore += 1;
      console.log(`Player: ${playerScore}`)
      console.log(`Computer: ${computerScore}`)
    } else if (playRound() == "draw") {}
  }
  console.log(`Player: ${playerScore} — Computer: ${computerScore}`);
}

game(5);