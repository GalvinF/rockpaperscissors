let randomNumber = 0;
$(".play").click(function () {
  // display user choice
  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);
  $(".input").val("");

  // display computer choice
  let computerChoice = getRandomComputerChoice();
  $(".computerChoice").text(computerChoice);

  // display winner
  let winner = chooseWinner(userChoice, computerChoice);
  $(".result").text(winner);
  $(".input").text();

  // computer choice
  function getRandomComputerChoice() {
    randomNumber = Math.random() * 3;
    randomNumber = Math.ceil(randomNumber);
    // assigning rock paper and scissors to rand gen numbers 1,2, or 3
    let computerChoice;
    if (randomNumber === 1) {
      computerChoice = "rock";
    } else if (randomNumber === 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice;
  }

  // choose winner of game
  function chooseWinner(userChoice, computerChoice) {
    let winner;
    if (
      (userChoice === "rock" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "rock")
    ) {
      winner = "Computer Wins!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      winner = "User Wins!";
    } else if (
      (userChoice === "rock" && computerChoice === "rock") ||
      (userChoice === "paper" && computerChoice === "paper") ||
      (userChoice === "scissors" && computerChoice === "scissors")
    ) {
      winner = "Tie Game!";
    } else winner = "Error, Try Again";
  }
});
