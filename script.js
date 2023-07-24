function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(1, 3);

function getComputerChoice () {
    if (randomNumber === 1) {
        return 'ROCK';
    }
    if (randomNumber === 2) {
        return 'PAPER';
    }
    if (randomNumber === 3) {
        return 'SCISSOR';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSOR' ||
    playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK' ||
    playerSelection.toUpperCase() === 'SCISSOR' && computerSelection === 'PAPER') {
        return 'You won';
    } else {
        return 'You lose';
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerPrompt = prompt("Choose rock, paper or scissor");
        const computerChoice = getComputerChoice();
        console.log(playRound(playerPrompt, computerChoice));
    }
}

game();







