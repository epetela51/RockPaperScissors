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

    //gets the computers choice by running the function and storing it in a variable to use later
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
        stopGame();
        gameOver.textContent = "GAME OVER"
        return gameWinner.textContent = "CONGRATS! You are the winner!"
    } else if (computerScore == 5) {
        stopGame();
        gameOver.textContent = "GAME OVER"
        return gameWinner.textContent = "OOPS! Computer is the winner try again LOSER"
    } 
}

function stopGame() {
    playerRock.removeEventListener('click', game);
    playerPaper.removeEventListener('click', game);
    playerScissors.removeEventListener('click', game);

    resetButton.appendChild(resetBtn)

    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    
    //resets score for game and on screen
    playerScore = 0;
    playerCurrentScore.textContent = playerScore;
    computerScore = 0;
    computerCurrentScore.textContent = computerScore;

    //resets choices, round & game winner display
    displayPlayerChoice.textContent = '';
    displayComputerChoice.textContent = '';
    roundWinner.textContent = '';
    gameWinner.textContent = '';
    gameOver.textContent = '';
    
    resetBtn.remove();

    playerRock.addEventListener('click', game)
    playerPaper.addEventListener('click', game)
    playerScissors.addEventListener('click', game)
}


//buttons
let playerRock = document.querySelector('#rock');
let playerPaper = document.querySelector('#paper');
let playerScissors = document.querySelector('#scissors');

let resetBtn = document.createElement('button')
resetBtn.innerText = 'Play Again';

//display output
let displayPlayerChoice = document.querySelector('#playerChoice');
let displayComputerChoice = document.querySelector('#computerChoice');
let roundWinner = document.querySelector('#roundWinner');
let playerCurrentScore = document.querySelector('#playerScore');
let computerCurrentScore = document.querySelector('#computerScore');
let gameWinner = document.querySelector('#gameWinner');
let gameOver = document.querySelector('#gameOver');
let resetButton = document.querySelector('#resetBtn');

//on page load show 0 score at game start
playerCurrentScore.textContent = playerScore;
computerCurrentScore.textContent = computerScore;


//on button click, get button text & display player vs. computer
playerRock.addEventListener('click', game)
playerPaper.addEventListener('click', game)
playerScissors.addEventListener('click', game)