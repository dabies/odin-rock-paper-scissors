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
const header = document.querySelector('h1');
const resultPara = document.querySelector('.result');
const scorePara = document.querySelector('.score');
scorePara.textContent = `Human: ${humanScore} Machine: ${computerScore}`;
const btnDiv = document.querySelector('.buttons');
btnDiv.addEventListener('click', event => {
    let hChoice = event.target.className;
    let comp = getComputerChoice();
    playRound(comp, hChoice);
    scorePara.textContent = `Human: ${humanScore} Machine: ${computerScore}`;
    announceWinner();
});

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock') {
        switch(humanChoice){
            case 'rock':
                return resultPara.textContent = ("It's a draw. You think like a computer.");
            case 'paper':
                humanScore++;
                return resultPara.textContent = ('You win! Paper beats Rock.');
            case 'scissors':
                computerScore++;
                return resultPara.textContent = ('You lose. Scissors loses to Rock.');
        }

    } else if (computerChoice === 'paper') {
        switch(humanChoice){
            case 'rock':
                computerScore++;
                return resultPara.textContent = ('You lose. Rock is defeated by Paper.');
            case 'paper':
                return resultPara.textContent = ("It's a draw. You think like a computer.");
            case 'scissors':
                humanScore++;
                return resultPara.textContent = ('You win! Scissors beats Paper.');
        }
    } else {
        switch(humanChoice){
            case 'rock':
                humanScore++;
                return resultPara.textContent = ('You Win! Rock beats Scissors.');
            case 'paper':
                computerScore++;
                return resultPara.textContent = ('You lose. Paper is defeated by Scissors.');
            case 'scissors':
                return resultPara.textContent = ("It's a draw. You just scissored a computer.");
        }
    }
}

/* now defunct function from console version
function playGame() {
    while(humanScore < 5 && computerScore < 5) {
        let human = hChoice;
        let comp = getComputerChoice();
        playRound(comp, human);
    }
}*/

function announceWinner() {
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            header.style.backgroundColor = 'green';
            return header.textContent = (`Congratulations! You defeated the computer by a 
            score of ${humanScore} to ${computerScore}. Looks like humanity stands a chance.`);
        } else {
            header.style.backgroundColor = 'red';
            return header.textContent = (`You were defeated by our computer overlords by a 
            score of ${humanScore} to ${computerScore}. Humanity is doomed.`);
        }
    }
}
