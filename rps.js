/* Random computer choice of either rock, paper or scissors*/

function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice < 0.33) {
        return "rock";
    }   else if (computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
/*console.log(getComputerChoice())*/

/* Get input from user*/

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?")
    return humanChoice
}
/*console.log(getHumanChoice())*/

/* Keeping score of the game */
let humanScore = 0
let computerScore = 0

/* Single round of game */

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);