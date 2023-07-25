function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice (randomNumber) {
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
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR' ||
    playerSelection === 'PAPER' && computerSelection === 'ROCK' ||
    playerSelection === 'SCISSOR' && computerSelection === 'PAPER') {
        return "w"
    } else {
        return "l";
    }
}

function createResultLines(resultLine) {
    const divResults = document.querySelector('#results');
    const showResult = document.createElement('p');
    if (resultLine === "w") {
        showResult.textContent = "You won a round!";
    } else if (resultLine === "l") {
        showResult.textContent = "You lost this round.";
    }
    return divResults.appendChild(showResult);
}
const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => 
createResultLines(playRound('ROCK', getComputerChoice(getRandomNumber(1, 3)))));

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () =>
createResultLines(playRound('PAPER', getComputerChoice(getRandomNumber(1, 3)))));

const scissorButton = document.querySelector('#scissorButton');
scissorButton.addEventListener('click', () =>
createResultLines(playRound('SCISSOR', getComputerChoice(getRandomNumber(1, 3)))));




