const rockLogo = document.getElementById("rock");
const paperLogo = document.getElementById("paper");
const scissorsLogo = document.getElementById("scissors");
const selectedLogo = document.getElementById("selectedLogo");
const computerLogo = document.getElementById("computerLogo");
const computerChoices = [
    "./assets/rock-hand.png",
    "./assets/paper-hand.png",
    "./assets/scissors-hand.png",
];

const scoreElement = document.getElementById("scores");
let gameOverMsg = document.querySelector('.gameOverMessage');
let playAgainBtn = document.querySelector('.playAgainButton');

const scoresText = scoreElement.textContent;
const scoresArray = scoresText.split('-');

var playerScore = parseInt(scoresArray[0].trim());
var computerScore = parseInt(scoresArray[1].trim());

var selectedLogoName = selectedLogo.src.split('/').pop();
var computerLogoName = computerLogo.src.split('/').pop();

function updateScores(selectedLogo, computerLogo) {
    var selectedLogoName = selectedLogo.src.split('/').pop();
    var computerLogoName = computerLogo.src.split('/').pop();

    if (selectedLogoName == "rock-hand.png" && computerLogoName == "scissors-hand.png") {
        playerScore += 1;
    } else if (selectedLogoName == "rock-hand.png" && computerLogoName == "paper-hand.png") {
        computerScore += 1;
    } else if (selectedLogoName == "paper-hand.png" && computerLogoName == "rock-hand.png") {
        playerScore += 1;
    } else if (selectedLogoName == "paper-hand.png" && computerLogoName == "scissors-hand.png") {
        computerScore += 1;
    } else if (selectedLogoName == "scissors-hand.png" && computerLogoName == "paper-hand.png") {
        playerScore += 1;
    } else if (selectedLogoName == "scissors-hand.png" && computerLogoName == "rock-hand.png") {
        computerScore += 1;
    } else {
    }

    scoreElement.textContent = playerScore + " - " + computerScore;

    if (playerScore === 5 || computerScore === 5) {
        var winner = playerScore === 5 ? 'You won the game!' : 'Computer won the game!';
        gameOver = true;

        rockLogo.style.display = 'none';
        paperLogo.style.display = 'none';
        scissorsLogo.style.display = 'none';

        gameOverMsg.textContent = winner;
        playAgainBtn.style.display = 'block';
        playAgainBtn.onclick = playAgainHandler;
    }
}

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        var winner = playerScore === 5 ? 'You won the game!' : 'Computer won the game!';
        gameOver = true;

        rockLogo.style.display = 'none';
        paperLogo.style.display = 'none';
        scissorsLogo.style.display = 'none';

        gameOverMsg.textContent = winner;
        playAgainBtn.style.display = 'block';
        playAgainBtn.onclick = playAgainHandler;
    }
}

rockLogo.onclick = function () {
    selectedLogo.src = "./assets/rock-hand.png ";
    selectedLogo.style.display = "block";

    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display = 'block';
    updateScores(selectedLogo, computerLogo);
    checkGameOver();
};

paperLogo.onclick = function () {
    selectedLogo.src = './assets/paper-hand.png';
    selectedLogo.style.display = "block";
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display = 'block';
    updateScores(selectedLogo, computerLogo);
    checkGameOver();
};

scissorsLogo.onclick = function () {
    selectedLogo.src = './assets/scissors-hand.png';
    selectedLogo.style.display = "block";
    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display = 'block';
    updateScores(selectedLogo, computerLogo);
    checkGameOver();
};

function playAgainHandler() {
    playerScore = 0;
    computerScore = 0;
    scoreElement.textContent = "0 - 0";

    rockLogo.style.display = 'block';
    paperLogo.style.display = 'block';
    scissorsLogo.style.display = 'block';

    gameOverMsg.textContent = '';
    playAgainBtn.style.display = 'none';

    selectedLogo.style.display = 'none';
    computerLogo.style.display = 'none';
    gameOver = false;
}

document.getElementsByClassName("playAgainBtn").onclick = () => {
    window.location.href = "./game.html";
}
