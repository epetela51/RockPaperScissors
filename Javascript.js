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
        return "Please enter either 'Rock, paper or scissors'";
    }
}

let playerScore = 0;
let computerScore = 0;


//Function that plays multiple rounds
function game() {
    // use a Do While loop so that the game can be played until either the player or computer hit 5 wins first
    do {
        //variable that holds a players input
        let playerInput = prompt("Please choose either: Rock, paper or scissors");

        //variable that converts players choice to lowercase for easier comparison with computer choice
        let playerChoice = playerInput.toLowerCase();
        
        //this allows a new random choice to be made for the computer on each loop
        let computerTurn = computerPlay()

        //store the winner of the individual round
        let roundResult = playRound(playerChoice, computerTurn);

        //console.log(roundResult);

        //Adds to the players score depending on who wins
        if (roundResult.search("Win") > 0) {
            playerScore++;
        } else if (roundResult.search("Lose") > 0) {
            computerScore++;
        }

        console.log(`${roundResult} | Player Score is ${playerScore} and Computer Score is ${computerScore}`)

        //Puts the final message up to declare a winner
        if (playerScore == 5) {
            return console.log("CONGRATS! You are the winner!")
        } else if (computerScore == 5) {
            return console.log("OOPS! Computer is the winner try again LOSER")
        } 
    } while (playerScore <= 5 || computerScore <= 5);
}

//game();


//buttons
let playerRock = document.querySelector('#rock');
let playerPaper = document.querySelector('#paper');
let playerScissors = document.querySelector('#scissors');

//display choices
let displayPlayerChoice = document.querySelector('#playerChoice')

let displayComputerChoice = document.querySelector('#computerChoice')

let roundWinner = document.querySelector('#roundWinner')

function getAndDisplayText(e) {
    let playerChoice = e.target.innerText
    displayPlayerChoice.textContent = playerChoice;

    let computerChoice = computerPlay()
   
    displayComputerChoice.textContent = computerChoice

    let roundResult = playRound(playerChoice, computerChoice)

    roundWinner.textContent = roundResult;
}

//on button click, get button text & display player vs. computer
playerRock.addEventListener('click', getAndDisplayText)
playerPaper.addEventListener('click', getAndDisplayText)
playerScissors.addEventListener('click', getAndDisplayText)