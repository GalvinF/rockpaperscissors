let randomNumber = 0;
$(".play").click(function () {
   // display user choice
  let userChoice = $(".input").val();
  $(".userChoice").text(userInput);
  $(".input").val("");
  
  // display computer choice
  let computerChoice = getRandomComputerChoice();
  $(".computerChoice").text(computerChoice);
  
  // display winner
  $(".result").text(chooseWinner(userInput, computerChoice));
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
  return computerChoice
}
    
function chooseWinner(userInput, computerChoice) {
  let winner;
  if (
    (userInput === "rock" && computerChoice === "paper") ||
    (userInput === "paper" && computerChoice === "scissors") ||
    (userInput === "scissors" && computerChoice === "rock")
  ) {
    winner = "Computer Wins!";
  } else if (
    (userInput === "rock" && computerChoice === "scissors") ||
    (userInput === "paper" && computerChoice === "rock") ||
    (userInput === "scissors" && computerChoice === "paper")
  ) {
    winner = "User Wins!";
  } else {
    winner = "No one Wins!";
  }
  return winner;
}