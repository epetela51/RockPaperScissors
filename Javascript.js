//Array that holds values for either Rock, Paper or Scissors
const rockPaperScissors = ["rock", "paper", "scissors"];

//function that returns a randomly picked option between Rock, Paper & Scissors
function computerPlay() {
    let randomComputerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];

    return randomComputerChoice;
};

//Variable that holds computers choice
let computerChoice = computerPlay();



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

console.log(playerRock, playerPaper, playerScissors)

playerRock.addEventListener('click', () => console.log('you clicked rock'))
playerPaper.addEventListener('click', () => console.log('you clicked paper'))
playerScissors.addEventListener('click', () => console.log('you clicked scissors'))