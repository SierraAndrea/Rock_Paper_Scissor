let playerScore = 0;
let computerScore = 0;

//creating buttons for the UI (implementing defer in the index.html is key to make this work)
let btnRock = document.createElement("button");
btnRock.textContent = "Rock";

let btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";

let btnScissor = document.createElement("button");
btnScissor.textContent = "Scissor";

document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissor);

let resultContainer = document.createElement('div');
document.body.appendChild(resultContainer);



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
  
    if (playerScore == 5 || computerScore ==  5){ return `GAME OVER! FINAL SCORE. PLAYER:  ${playerScore} COMPUTER: ${computerScore}`;}
    const winConditions = {  // this object is using string keys to represent different choices (e.g., 'PAPER', 'SCISSOR', 'ROCK') and assigning their corresponding winning choices as values.
        'PAPER': 'SCISSOR',
        'SCISSOR': 'ROCK',
        'ROCK': 'PAPER'
    };

    if (computerChoice === playerChoice) {
        return `TIES. REPLAY. | Player Score:  ${playerScore}  Computer Score:  ${computerScore}`;
    }

    if (winConditions[computerChoice] === playerChoice) {
        
        return ++playerScore,`YOU WIN! ${playerChoice} BEATS ${computerChoice} | Player Score:  ${playerScore}  Computer Score:  ${computerScore}`; }

    else { return ++computerScore, `YOU LOSE! ${computerChoice} BEATS ${playerChoice} | Player Score:  ${playerScore}  Computer Score:  ${computerScore}`;}
}
   


btnRock.addEventListener('click', function(){resultContainer.textContent=(playRound(getComputerChoice(), "ROCK"));});
btnPaper.addEventListener('click', function(){resultContainer.textContent=(playRound(getComputerChoice(), "PAPER"));});
btnScissor.addEventListener('click', function(){resultContainer.textContent=(playRound(getComputerChoice(), "SCISSOR"));});