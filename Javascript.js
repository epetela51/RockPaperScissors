//Array that holds values for either Rock, Paper or Scissors
const rockPaperScissors = ["Rock", "Paper", "Scissors"];

//function that returns a randomly picked option between Rock, Paper & Scissors
function computerPlay() {
    let randomComputerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];

    return randomComputerChoice;
};


//function that takes a players choice and compares it to a computers choice to determine a winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return `You Win!  ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "Paper") {
            return `You Lose!  ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection == playerSelection) {
            return "Tie, try again!"
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            return `You Win!  ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "Rock") {
            return `You Lose!  ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection == playerSelection) {
            return "Tie, try again!"
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return `You Win!  ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "Scissors") {
            return `You Lose!  ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection == playerSelection) {
            return "Tie, try again!"
        }
    } else {
        return alert("ERROR");
    }
}

let playerScore = 0;
let computerScore = 0;


function game(e) {    
    
    let playerChoice = e.target.innerText
    displayPlayerChoice.textContent = playerChoice;

    //gets th e computers choice by running the function and storing it in a variable to use later
    let computerChoice = computerPlay()

    displayComputerChoice.textContent = computerChoice


    //store the winner of the individual round
    let roundResult = playRound(playerChoice, computerChoice);

    //Adds to the players score depending on who wins
    if (roundResult.search("Win") > 0) {
        playerScore++;
        playerCurrentScore.textContent = playerScore
    } else if (roundResult.search("Lose") > 0) {
        computerScore++;
        computerCurrentScore.textContent = computerScore
    }

    roundWinner.textContent = roundResult

    //Puts the final message up to declare a winner
    if (playerScore == 5) {
        return gameWinner.textContent = "CONGRATS! You are the winner!"
    } else if (computerScore == 5) {
        return gameWinner.textContent = "OOPS! Computer is the winner try again LOSER"
    } 
}


//buttons
let playerRock = document.querySelector('#rock');
let playerPaper = document.querySelector('#paper');
let playerScissors = document.querySelector('#scissors');

//display output
let displayPlayerChoice = document.querySelector('#playerChoice')
let displayComputerChoice = document.querySelector('#computerChoice')
let roundWinner = document.querySelector('#roundWinner')
let playerCurrentScore = document.querySelector('#playerScore');
let computerCurrentScore = document.querySelector('#computerScore');
let gameWinner = document.querySelector('#gameWinner')

//on page load show 0 score at game start
playerCurrentScore.textContent = 0;
computerCurrentScore.textContent = 0;


//on button click, get button text & display player vs. computer
playerRock.addEventListener('click', game)
playerPaper.addEventListener('click', game)
playerScissors.addEventListener('click', game)