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

/* this function was made to get user input via an alert message which is now obsolete
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
} */
const displayDiv = document.querySelector('.display');
const btnDiv = document.querySelector('.buttons');
btnDiv.addEventListener('click', event => {
    let hChoice = event.target.className;
    let comp = getComputerChoice();
    playRound(comp, hChoice);
    displayDiv.textContent = `Human: ${humanScore} Machine: ${computerScore}`;

});

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock') {
        switch(humanChoice){
            case 'rock':
                return console.log("It's a draw. You think like a computer.");
            case 'paper':
                humanScore++;
                return console.log('You win! Paper beats Rock.');
            case 'scissors':
                computerScore++;
                return console.log('You lose. Scissors loses to Rock.');
        }

    } else if (computerChoice === 'paper') {
        switch(humanChoice){
            case 'rock':
                computerScore++;
                return console.log('You lose. Rock is defeated by Paper.');
            case 'paper':
                return console.log("It's a draw.");
            case 'scissors':
                humanScore++;
                return console.log('You win! Scissors beats Paper.');
        }
    } else {
        switch(humanChoice){
            case 'rock':
                humanScore++;
                return console.log('You Win! Rock beats Scissors.');
            case 'paper':
                computerScore++;
                return console.log('You lose. Paper is defeated by Scissors.');
            case 'scissors':
                return console.log("It's a draw.");
        }
    }
}

function playGame() {
    while(humanScore < 5 && computerScore < 5) {
        let human = hChoice;
        let comp = getComputerChoice();
        playRound(comp, human);
    }
}

if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
        console.log(`Congratulations! You defeated the computer by a score of ${humanScore} to ${computerScore}.`)
    } else {
        console.log(`You were defeated by our computer overlords by a score of ${humanScore} to ${computerScore}.`)
    }
}
