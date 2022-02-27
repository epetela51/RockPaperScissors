//Array that holds values for either Rock, Paper or Scissors
const rockPaperScissors = ["rock", "paper", "scissors"];

//function that returns a randomly picked option between Rock, Paper & Scissors
function computerPlay() {
    let randomComputerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];

    return randomComputerChoice;
};

//Variable that holds computers choice
let computerChoice = computerPlay();

//variable that holds a players input
let playerInput = prompt("Please choose either: Rock, paper or scissors");

//variable that converts players choice to lowercase for easier comparison with computer choice
let playerChoice = playerInput.toLowerCase();


//function that takes a players choice and compares it to a computers choice to determine a winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return `You Win!  ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "paper") {
            return `You Lose!  ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection == playerSelection) {
            return "Tie, try again!"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return `You Win!  ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "rock") {
            return `You Lose!  ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection == playerSelection) {
            return "Tie, try again!"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return `You Win!  ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "scissors") {
            return `You Lose!  ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection == playerSelection) {
            return "Tie, try again!"
        }
    } else {
        return "Please enter either 'Rock, paper or scissors'";
    }
}

console.log(`Player chose ${playerChoice} and computer chose ${computerChoice}`)

console.log(playRound(playerChoice, computerChoice))