
// GAME FUNCTION
// Player must guess a number between a min and max
// Player gets a certain number of guesses
// Notify the player of guesses remaining
// Notify the player of the correct answer if player loses
// Let player choose to play again

// Game values
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;


// UI Elements
const UI_game = document.querySelector('#game');
const UI_minNum = document.querySelector('.min-num');
const UI_maxNum = document.querySelector('.max-num');
const UI_guessBtn = document.querySelector('#guess-btn');
const UI_guessInput = document.querySelector('#guess-input');
const UI_message = document.querySelector('.message');

// Assign UI min and max
UI_minNum.textContent = min;
UI_maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
}); 

// Listen for guess
UI_guessBtn.addEventListener('click', function(){
    let guess = parseInt(UI_guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        // Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN`);
        
    } else {
        // Wrong number
        guessesLeft = guessesLeft - 1;

        if(guessesLeft === 0){
            // Game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } 
        else {
            // Game continues - answer wrong

            // Change border color
            UI_guessInput.style.borderColor = 'red';

            // Clear input
            UI_guessInput.value = '';

            // Tell user its the wrong answer
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input
    UI_guessInput.disabled = true;
    // Change border color
    UI_guessInput.style.borderColor = color;
    // Set text color
    UI_message.style.color = color;
    // Set message
    setMessage(msg);

    // Play again?
    UI_guessBtn.value = 'Play Again';
    UI_guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color){
    UI_message.style.color = color;
    UI_message.textContent = msg;
}