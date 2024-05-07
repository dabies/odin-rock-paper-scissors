let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random() * 1000;
    if (choice <= 333) {
        choice = 'rock';
    } else if (choice > 333 && choice <= 666) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

function getHumanChoice() {
    let hChoice = prompt("Do you choose Rock, Paper or Scissors?");
    hChoice = hChoice.toLowerCase();
    switch(hChoice){
        case 'rock':
            return hChoice;
        case 'paper':
            return hChoice;
        case 'scissors':
            return hChoice;
        default:
            return 'Invalid answer.';
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock') {
        switch(humanChoice){
            case 'rock':
                return "It's a draw.";
            case 'paper':
                humanScore++;
                return 'You win! Paper beats Rock.';
            case 'scissors':
                computerScore++;
                return 'You lose. Scissors loses to Rock.';
        }

    } else if (computerChoice === 'paper') {
        switch(humanChoice){
            case 'rock':
                computerScore++;
                return 'You lose. Rock is defeated by Paper.';
            case 'paper':
                return "It's a draw."
            case 'scissors':
                humanScore++;
                return 'You win! Scissors beats Paper.'
        }
    } else {
        switch(humanChoice){
            case 'rock':
                humanScore++;
                return 'You Win! Rock beats Scissors.';
            case 'paper':
                computerScore++;
                return 'You lose. Paper is defeated by Scissors.'
            case 'scissors':
                return "It's a draw."
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(computerSelection, humanSelection));
console.log('You: '+humanScore);
console.log('Computer: '+computerScore);
