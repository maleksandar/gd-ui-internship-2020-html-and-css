let numberOfMoves = 0;
let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMessage = () => `Player ${currentPlayer} has won in ${numberOfMoves} moves!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const statusDisplay = document.querySelector('.game--status');
const gameResult = document.querySelector('.game__result');
statusDisplay.innerHTML = currentPlayerTurn();

const COMBINATIONS = {
	0: [[1, 2], [3, 6], [4, 8]],
	1: [[0, 2], [4, 7]],
	2: [[0, 1], [5, 8], [4, 6]],
	3: [[0, 6], [4, 5]],
	4: [[3, 5], [1, 7], [0, 8], [2, 6]],
	5: [[3, 4], [2, 8]],
	6: [[0, 3], [7, 8], [2, 4]],
	7: [[1, 4], [6, 8]],
	8: [[6, 7], [2, 5], [0, 4]],
};

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
	gameState[clickedCellIndex] = currentPlayer;
	clickedCell.innerHTML = currentPlayer;
	numberOfMoves++;
};

const handlePlayerChange = () => {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	statusDisplay.innerHTML = currentPlayerTurn();
};

const handleResultValidation = (clickedCellIndex) => {
	let roundWon = false;
	const combinations = COMBINATIONS[clickedCellIndex];

	combinations.forEach(([first, second]) => {
		if (gameState[first] === currentPlayer && gameState[second] === currentPlayer) {
			roundWon = true;
		}
	});

	if (roundWon) {
		statusDisplay.innerHTML = winningMessage();
		gameResult.innerHTML = winningMessage();
		gameActive = false;
		return;
	}

	const roundDraw = !gameState.includes('');

	if (roundDraw) {
		statusDisplay.innerHTML = drawMessage();
		gameActive = false;
		return;
	}

	handlePlayerChange();
};

const handleCellClick = (event) => {
	const clickedCell = event.target;
	const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

	if (gameState[clickedCellIndex] !== '' || !gameActive || numberOfMoves === 9) {
		return;
	}

	handleCellPlayed(clickedCell, clickedCellIndex);
	handleResultValidation(clickedCellIndex);
};

const handleRestartGame = () => {
	gameActive = true;
	currentPlayer = 'X';
	gameState = ['', '', '', '', '', '', '', '', ''];
	statusDisplay.innerHTML = currentPlayerTurn();
	document.querySelectorAll('.board__box').forEach((cell) => cell.innerHTML = '');
};

document.querySelectorAll('.board__box').forEach((cell) => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
