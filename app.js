
// GAME FUNCTION
// Player must guess a number between a min and max
// Player gets a certain number of guesses
// Notify the player of guesses remaining
// Notify the player of the correct answer if player loses
// Let player choose to play again

// Game values
let min = 1;
let max = 10;
let winningNum = 2;
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
        // Disable input
        UI_guessInput.disabled = true;
        // Change border color
        UI_guessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    } else {
        // Wrong number
        guessesLeft = guessesLeft - 1;

        if(guessesLeft === 0){
            // Game over - lost
            UI_guessInput.disabled = true;
            // Change border color
            UI_guessInput.style.borderColor = 'red'
            // Set message
            setMessage(`${guessesLeft} guesses left, YOU LOSE!`, 'red');
        } 
        else if(guessesLeft < 0) {
            // Game continues - answer wrong
            // guessesLeft = 0;
        }

        else {
            // Game continues - answer wrong
            setMessage(`${guessesLeft} guesses left`, 'grey');
        }
    }
});

// Set message
function setMessage(msg, color){
    UI_message.style.color = color;
    UI_message.textContent = msg;
}