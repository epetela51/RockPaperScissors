//Array that holds values for either Rock, Paper or Scissors
const rockPaperScissors = ["rock", "paper", "scissors"];

//function that returns a randomly picked option between Rock, Paper & Scissors
function computerPlay() {
    let randomComputerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];

    return randomComputerChoice;
};

//Variable that holds computers choice
let computerChoice = computerPlay();

//variable that holds a players input and converts it to lowercase
let playerInput = prompt("Please choose either: Rock, paper or scissors");
let playerChoiceLowercase = playerInput.toLowerCase();

console.log("Player chose " + playerChoiceLowercase);














//function that plays a single round of Rock Paper Scisssors which takes two parameters - 1 from player and 1 from computer
function playRound(playerSelection, computerSelection) {

}