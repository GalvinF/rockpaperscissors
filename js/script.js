let randomNumber = 0;
$(".play").click(function () {
  function getRandomComputerChoice() {
  // randomly generate computer's decision
  randomNumber = Math.random() * 3;
  randomNumber = Math.ceil(randomNumber);
  // assigning rock paper and scissors to rand gen numbers 1,2, or 3
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3)
    computerChoice = "scissors";
  return computerChoice
}
  
  // user choice
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);
  $(".input").val("");
  
  // computer choice
  let computerChoice = getRandomComputerChoice();
  $(".computerChoice").text(computerChoice);
   
  
  // deciding winner
  let winner;
  if (
    (userInput === "rock" && computerChoice === "paper") ||
    (userInput === "paper" && computerChoice === "scissors") ||
    (userInput === "scissors" && computerChoice === "rock")
  ) {
    winner = "Computer Wins!";
    $(".result").text(winner);
  } else if (
    (userInput === "rock" && computerChoice === "scissors") ||
    (userInput === "paper" && computerChoice === "rock") ||
    (userInput === "scissors" && computerChoice === "paper")
  ) {
    winner = "You Win!";
    $(".result").text(winner);
  } else if (
    (userInput === "rock" && computerChoice === "rock") ||
    (userInput === "paper" && computerChoice === "paper") ||
    (userInput === "scissors" && computerChoice === "scissors")
  ) {
    winner = "Tie Game!";
    $(".result").text(winner);
  } else {
    winner = "Error - Try Again!"
    $(".result").text(winner);
  }
});
