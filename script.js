let playerCount = 0;
let computerCount = 0;

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
    let playerPoints = document.querySelector('#playerPoints');
    let computerPoints = document.querySelector('#computerPoints');
    let finalResult = document.querySelector('#finalResult');
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR' ||
    playerSelection === 'PAPER' && computerSelection === 'ROCK' ||
    playerSelection === 'SCISSOR' && computerSelection === 'PAPER') {
        playerCount++;
        playerPoints.textContent = playerCount;
        if (playerCount === 5) {
            finalResult.textContent = "You won! Congratulations!";
            document.querySelector('#tryAgain').style.cssText = "display: block";
            document.querySelector('#rockButton').disabled = true;
            document.querySelector('#paperButton').disabled = true;
            document.querySelector('#scissorButton').disabled = true;
        }
    } else {
        computerCount++;
        computerPoints.textContent = computerCount;
        if (computerCount === 5) {
            finalResult.textContent = "You lose, try again.";
            document.querySelector('#tryAgain').style.cssText = "display: block";
            document.querySelector('#rockButton').disabled = true;
            document.querySelector('#paperButton').disabled = true;
            document.querySelector('#scissorButton').disabled = true;
        }
    }
}



const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => 
playRound('ROCK', getComputerChoice(getRandomNumber(1, 3))));

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => 
playRound('PAPER', getComputerChoice(getRandomNumber(1, 3))));

const scissorButton = document.querySelector('#scissorButton');
scissorButton.addEventListener('click', () =>
playRound('SCISSOR', getComputerChoice(getRandomNumber(1, 3))));



