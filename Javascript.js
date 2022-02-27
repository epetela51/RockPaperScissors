//Array that holds values for either Rock, Paper or Scissors
const rockPaperScissors = ["rock", "paper", "scissors"];

//function that returns a randomly picked option between Rock, Paper & Scissors
function computerPlay() {
    let randomComputerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];

    return randomComputerChoice;
};

//Variable that holds computers choice
let computerChoice = computerPlay();

//function that assigns numeric values to computer choice
function assignComputerValue(choice) {
    if (choice == "rock") {
        return 3;
    } else if (choice == "scissors") {
        return 2
    } else if (choice == "paper") {
        return 1;
    } else {
        return "Something went wrong with computer choice";
    }
}

//variable that holds the value for the computer choice
let computerChoiceValue = assignComputerValue(computerChoice);

console.log(`Computer chose ${computerChoice} which has a value assigned of ` + assignComputerValue(computerChoice));





//variable that holds a players input
let playerInput = prompt("Please choose either: Rock, paper or scissors");
//variable that converts players choice to lowercase for easier comparison with computer choice
let playerChoiceLowercase = playerInput.toLowerCase();

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

//variable that holds the value for the players choice
let playerChoiceValue = assignUserInputValue(playerChoiceLowercase);

console.log(`Player chose ${playerChoiceLowercase} which has a value assigned of ` + assignUserInputValue(playerChoiceLowercase));









//function that plays a single round of Rock Paper Scisssors which takes two parameters - 1 from player and 1 from computer
function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) {
        return "You Win";
    } else {
        return "You Lose";
    }
}