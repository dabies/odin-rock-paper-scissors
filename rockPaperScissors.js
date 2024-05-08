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
            alert('Invalid answer.');
            return console.log('Invalid answer.');
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock') {
        switch(humanChoice){
            case 'rock':
                alert('Draw. You think like a computer.');
                return console.log("It's a draw.");
            case 'paper':
                humanScore++;
                alert('You won that round!');
                return console.log('You win! Paper beats Rock.');
            case 'scissors':
                computerScore++;
                alert('You lost that round.');
                return console.log('You lose. Scissors loses to Rock.');
        }

    } else if (computerChoice === 'paper') {
        switch(humanChoice){
            case 'rock':
                computerScore++;
                alert('You lost that round.');
                return console.log('You lose. Rock is defeated by Paper.');
            case 'paper':
                alert('Draw. You think like a computer.');
                return console.log("It's a draw.");
            case 'scissors':
                humanScore++;
                alert('You won that round!');
                return console.log('You win! Scissors beats Paper.');
        }
    } else {
        switch(humanChoice){
            case 'rock':
                humanScore++;
                alert('You won this round!');
                return console.log('You Win! Rock beats Scissors.');
            case 'paper':
                computerScore++;
                alert('You lost that round.');
                return console.log('You lose. Paper is defeated by Scissors.');
            case 'scissors':
                alert('Draw. You think like a computer.');
                return console.log("It's a draw.");
        }
    }
}

function playGame() {
    while(humanScore < 3 && computerScore < 3) {
        let human = getHumanChoice();
        let comp = getComputerChoice();
        playRound(comp, human);
    }
}

playGame();
if (humanScore > computerScore) {
    console.log(`Congratulations! You defeated the computer by a score of ${humanScore} to ${computerScore}.`)
} else {
    console.log(`You were defeated by our computer overlords by a score of ${humanScore} to ${computerScore}.`)
}

