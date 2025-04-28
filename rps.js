/* Random computer choice of either rock, paper or scissors*/

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    }   else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice())

/* Get input from user*/

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?")
    return humanChoice
}
console.log(getHumanChoice())