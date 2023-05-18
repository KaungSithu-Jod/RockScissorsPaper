const choices = ["ROCK", "SCISSORS", "PAPER"];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer Chooses ${choice}`);
    return choice; 
}
function getPlayerChoice() {
    return prompt("Rock or Scissors or Paper", 0);
}

function playRound() {
    let playerSelection = getPlayerChoice().toUpperCase();
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        console.log("Draw!");
        return 0;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        console.log("You Lose! Paper Beats Rock");
        return 1;
    } else if (playerSelection == "PAPER" &&  computerSelection == "SCISSORS") {
        console.log("You Lose! Scissors Beats Paper");
        return 1;
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log("You Lose! Rock Beats Scissors");
        return 1;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("You Win! Paper Beats Rock");
        return -1;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("You Win! Scissors Beats Paper");
        return -1;
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("You Win! Rock Beats Scissors");
        return -1;
    } else {
        console.log("Not a choice");
        return 0;
    }
}

function play() {

     for ( let i = 0; i < 5; i ++){
        playRound();
     }

}

play();



