//Array that holds values for either Rock, Paper or Scissors
const rockPaperScissors = ["Rock", "Paper", "Scissors"];

//buttons
let playerRock = document.querySelector('#rock');
let playerPaper = document.querySelector('#paper');
let playerScissors = document.querySelector('#scissors');

let resetBtn = document.createElement('button')
resetBtn.innerText = 'Play Again';
//Add bootstrap class to reset button
resetBtn.setAttribute('class', 'btn btn-primary mt-5 btn-lg');

let playerScore = 4;
let computerScore = 4;

//display output
let displayPlayerChoice = document.querySelector('#playerChoice');
let displayComputerChoice = document.querySelector('#computerChoice');
let roundWinner = document.querySelector('#roundWinner');
let playerCurrentScore = document.querySelector('#playerScore');
let computerCurrentScore = document.querySelector('#computerScore');
let gameWinner = document.querySelector('#gameWinner');
let gameOver = document.querySelector('#gameOver');
let resetButton = document.querySelector('#resetBtn');

//Returns a randomly picked option between Rock, Paper & Scissors
function computerPlay() {
    let randomComputerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];

    return randomComputerChoice;
};

//Takes a players choice and compares it to a computers choice to determine a winner
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

//runs the game on each button click
function game(e) {    
    
    //stores players choice based on which button the click
    let playerChoice = e.target.innerText
    displayPlayerChoice.textContent = `${playerChoice} vs: `;

    //gets the computers choice by running the function and storing it in a variable to use later
    let computerChoice = computerPlay()
    displayComputerChoice.textContent = computerChoice


    //store the winner of the individual round
    let roundResult = playRound(playerChoice, computerChoice);

    //Adds to the score
    if (roundResult.search("Win") > 0) {
        playerScore++;
        playerCurrentScore.textContent = playerScore
    } else if (roundResult.search("Lose") > 0) {
        computerScore++;
        computerCurrentScore.textContent = computerScore
    }

    roundWinner.textContent = roundResult

    //Puts the final message up to declare a winner and stops game
    if (playerScore == 5) {
        stopGame();
        gameOver.textContent = "GAME OVER"
        gameWinner.textContent = "CONGRATS! You are the winner!"
    } else if (computerScore == 5) {
        stopGame();
        gameOver.textContent = "GAME OVER"
        gameWinner.textContent = "Sorry! Computer is the winner try again"
    } 
}

//stops game from playing when score = 5 and adds reset button
function stopGame() {
    //stops game from playing on btn click when score = 5
    playerRock.removeEventListener('click', game);
    playerPaper.removeEventListener('click', game);
    playerScissors.removeEventListener('click', game);

    resetButton.appendChild(resetBtn);

    //Makes buttons look disabled and grayed out/not clickable
    playerRock.classList.add('disabled');
    playerPaper.classList.add('disabled');
    playerScissors.classList.add('disabled');

    resetButton.addEventListener('click', resetGame)
}

//resets game to play again
function resetGame() {
    
    //resets score
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

    //Makes the buttons look clickable again
    playerRock.classList.remove('disabled');
    playerPaper.classList.remove('disabled');
    playerScissors.classList.remove('disabled');

    playerRock.addEventListener('click', game)
    playerPaper.addEventListener('click', game)
    playerScissors.addEventListener('click', game)
}

//on page load show 0 score at game start
playerCurrentScore.textContent = playerScore;
computerCurrentScore.textContent = computerScore;

//runs game on btn click
playerRock.addEventListener('click', game)
playerPaper.addEventListener('click', game)
playerScissors.addEventListener('click', game)