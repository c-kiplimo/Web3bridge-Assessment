let min = 1,
    max = 100,
    winningNum = getRandomNum(min, max),
    guessesLeft = 5;

let game, guessBtn, guessInput, message;
document.addEventListener('DOMContentLoaded', function () {
    game = document.querySelector('.container');
    guessBtn = document.querySelector('#guess-btn');
    guessInput = document.querySelector('#guess-input');
    message = document.querySelector('.message');

    guessBtn.addEventListener('click', function () {
        let guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
            return;
        }

        if (guess === winningNum) {
            gameOver(true, `${winningNum} is correct, YOU WIN!`);
        } else {
            guessesLeft -= 1;

            if (guessesLeft === 0) {
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            } else {
                let feedback = guess > winningNum ? 'too high' : 'too low';

                guessInput.style.borderColor = 'red';
                guessInput.value = '';
                setMessage(`${guess} is ${feedback}. You have ${guessesLeft} guesses left.`, 'red');
            }
        }
    });

    game.addEventListener('mousedown', function (e) {
        if (e.target.className === 'play-again') {
            window.location.reload();
        }
    });
});

function gameOver(won, msg) {
    let color = won ? 'green' : 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.classList.add('play-again');
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function checkGuess(winningNum, guess) {
    if (guess === winningNum) {
        return 'win';
    } else {
        return 'lose';
    }
}

module.exports = { checkGuess };
