let playerScore = 0;
let computerScore = 0;
let gameActive = true;

const statusEl = document.getElementById('status');
const scoreEl = document.getElementById('score');
const buttons = document.querySelectorAll('.buttons button');
const holdButton = document.getElementById('hold');

const choices = ['Tosh', 'Qog\oz', 'Qaychi'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Durang';
    } else if (
        (player === 'Tosh' && computer === 'Qaychi') ||
        (player === 'Qaychi' && computer === 'Qog\'oz') ||
        (player === 'Qog\oz' && computer === 'Tosh')
    ) {
        playerScore++;
        return 'Siz yutdingiz!';
    } else {
        computerScore++;
        return 'Kompyuter yutdi!';
    }
}

function updateScore() {
    scoreEl.textContent = `Hisob: O'yinchi ${playerScore} - ${computerScore} Kompyuter`;
}

function handleChoice(playerChoice) {
    if (!gameActive) return;
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    statusEl.textContent = `Siz tanladingiz: ${playerChoice}, Kompyuter tanladi: ${computerChoice}. ${result}`;
    updateScore();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.textContent;
        handleChoice(playerChoice);
    });
});

holdButton.addEventListener('click', () => {
    gameActive = false;
    statusEl.textContent = 'O\'yin to\'xtatildi. Qayta boshlash uchun sahifani yangilang.';
    holdButton.disabled = true;
});
