let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const lowOrHigh = document.querySelector('.lowOrHigh')
const guessesRemaining = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuesses = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Enter a valid number');
    } else if (guess < 1) {
        alert('Enter a number greater than 1');
    } else if (guess > 100) {
        alert('Enter a  number less than 100');
    } else {
        previousGuesses.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`EnteredNumber < NumberToGuess`);
    } else if (guess > randomNumber) {
        displayMessage(`EnteredNumber > NumberToGuess`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    // console.log(numGuess)
    if (numGuess == 10) {
        guessesRemaining.innerHTML += `${guess} `;
    }
    else {

        guessesRemaining.innerHTML += `${guess}, `;
    }
    remaining.innerHTML = `${10-numGuess } `;
    numGuess++;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessesRemaining.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}