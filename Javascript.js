//Array that holds values for either Rock, Paper or Scissors
const rockPaperScissors = ["rock", "paper", "scissors"];

//function that returns a randomly picked option between Rock, Paper & Scissors
function computerPlay() {
    let randomComputerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];

    return randomComputerChoice;
};

//Variable that holds computers choice
let computerChoice = computerPlay();

console.log("The computers choice is " + computerChoice)

//variable that holds a players input and converts it to lowercase
let playerInput = prompt("Please choose either: Rock, paper or scissors");
let playerChoiceLowercase = playerInput.toLowerCase();

console.log("The players choice is " + playerChoiceLowercase);


//function that assigns numeric values to user input
function assignUserInputValue(input) {
    if (input == "rock") {
        return 3;
    } else if (input == "scissors") {
        return 2
    } else if (input == "paper") {
        return 1;
    } else {
        return "Please choose 'Rock, Paper or Scissors"
    }
}

console.log(`Player chose ${playerChoiceLowercase} which has a value assigned of ` + assignUserInputValue(playerChoiceLowercase));









//function that plays a single round of Rock Paper Scisssors which takes two parameters - 1 from player and 1 from computer
function playRound(playerSelection, computerSelection) {

}