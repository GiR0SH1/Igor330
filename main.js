let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messageElement = document.getElementById('message');

submitButton.addEventListener('click', () => {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess === randomNumber) {
        messageElement.textContent = `Поздравляю! Вы угадали число ${randomNumber} с ${attempts} попыток!`;
        resetButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Слишком низкое число! Попробуйте снова.';
    } else {
        messageElement.textContent = 'Слишком высокое число! Попробуйте снова.';
    }
});

resetButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    messageElement.textContent = '';
    resetButton.style.display = 'none';
    document.getElementById('guess').value = '';
});
