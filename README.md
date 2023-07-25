# jokenpo
A basic jokenpo game using html, css and vanilla js;
onclick="console.log(playRound('ROCK', computerChosenAction))";

const rockButton = document.querySelector('#rockButton').
addEventListener('click', playRound('ROCK', computerChosenAction));
const paperButton = document.querySelector('#paperButton').
addEventListener('click', playRound('PAPER', computerChosenAction));
const scissorButton = document.querySelector('#scissorButton').
addEventListener('click', playRound('SCISSOR', computerChosenAction));
