let playerScore = 0;
let computerScore = 0;

// function to get a random value from rock, paper or scissor
function getComputerChoice() {
    const randomValue = Math.random() * 3;
    let result = "";

    if (randomValue <= 1) {
        result = "ROCK";
    } else if (randomValue <= 2) {
        result = "PAPER";
    } else {
        result = "SCISSOR";
    }

    return result;
}

// function to play a round 
function playRound(computerChoice, playerChoice) {
    
    const winConditions = {  // this object is using string keys to represent different choices (e.g., 'CARTA', 'FORBICE', 'SASSO') and assigning their corresponding winning choices as values.
        'PAPER': 'SCISSOR',
        'SCISSOR': 'ROCK',
        'ROCK': 'PAPER'
    };

    playerChoice = playerChoice.toUpperCase();

    if (computerChoice === playerChoice) {
        return "TIES. REPLAY";
    }

    if (winConditions[computerChoice] === playerChoice) {
        return ++playerScore,`YOU WIN! ${playerChoice} BEATS ${computerChoice}`; }

    else {return ++computerScore, `YOU LOSE! ${computerChoice} BEATS ${playerChoice}`;}
}

//funchtion to play a game best of five that keeps the score and reports the winner and loser at the end
function game(){
    let roundCounter = 1;
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];

   while(playerScore < 3 && computerScore < 3){
    
    console.log("Round :" + roundCounter);

    let playerSelection = window.prompt(`Choose one:\n${choices.join('\n')}`);
    let computerSelection = getComputerChoice();

    console.log("YOU CHOOSE: " + playerSelection);
    console.log("COMPUTER CHOOSES: " + computerSelection);
    console.log(playRound(computerSelection, playerSelection));
    console.log("COMPUTER SCORE: " + computerScore + " | " + "PLAYER SCORE: " + playerScore);
    roundCounter++;
   }
}
    
game();
