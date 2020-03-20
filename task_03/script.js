const gameResult = document.querySelector('.game__result');
const gameForm = document.querySelector('.game__form');
const formField = document.querySelector('.form__field');
const buttonSubmit = document.querySelector('.button--submit');
const sidebarList = document.querySelector('.sidebar-list');
const tableCells = document.querySelectorAll('.board__box');
const userInput = document.getElementById('username');
const formErrorMessage = document.getElementById('form-error-message');

let numberOfMoves = 0;
let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const handlePlayerChange = () => currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
const clearUserInput = () => userInput.value = '';
const winningMessage = () => `Player ${currentPlayer} has won in ${numberOfMoves} moves!`;
const drawMessage = () => `Game ended in a draw!`;

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

const handleResultValidation = (clickedCellIndex) => {
	let roundWon = false;
	const combinations = COMBINATIONS[clickedCellIndex];

	combinations.forEach(([first, second]) => {
		if (gameState[first] === currentPlayer && gameState[second] === currentPlayer) {
			roundWon = true;
		}
	});

	if (roundWon) {
		formErrorMessage.style.display = 'none';
		formField.style.borderBottom = '1px solid #d2d2d2';
		gameResult.innerHTML = winningMessage();
		// gameResult.style.display = 'block';
		// gameForm.style.display = 'flex';
		gameResult.classList.toggle('hide');
		gameForm.classList.toggle('hide');
		gameActive = false;
		handlePointerEvents('none');
		return;
	}

	const roundDraw = !gameState.includes('');

	if (roundDraw) {
		formErrorMessage.style.display = 'none';
		formField.style.borderBottom = '1px solid #d2d2d2';
		gameResult.innerHTML = drawMessage();
		gameResult.classList.toggle('hide');
		gameActive = false;
		handlePointerEvents('none');
		return;
	}

	handlePlayerChange();
};

const handlePointerEvents = (pointerEvent) => {
	tableCells.forEach((cell) => {
		cell.style.pointerEvents = pointerEvent;
		cell.style.opacity = '0.87';
	});
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
	numberOfMoves = 0;
	currentPlayer = 'X';
	gameState = ['', '', '', '', '', '', '', '', ''];
	formErrorMessage.style.display = 'none';
	formField.style.borderBottom = '1px solid #d2d2d2';
	// gameResult.style.display = 'none';
	// gameForm.style.display = 'none';

	if (!gameForm.classList.contains('hide')) {
		gameResult.classList.add('hide');
		gameForm.classList.add('hide');
	}

	clearUserInput();
	buttonSubmit.disabled = false;
	userInput.disabled = false;
	tableCells.forEach((cell) => {
		cell.innerHTML = '';
		cell.style.pointerEvents = 'initial';
		cell.style.opacity = '1';
	});
};

const handleUsernameInput = (event) => {
	event.preventDefault();
	const username = new FormData(event.target).get('username');
	formErrorMessage.style.display = 'none';
	formField.style.borderBottom = '1px solid #d2d2d2';

	const inputLength = checkInputLength(username);

	if (inputLength === false) {
		formField.style.borderBottom = '2px solid var(--error-color)';
		formErrorMessage.innerHTML = 'Enter an username of length between 3 and 12 characters';
		formErrorMessage.style.display = 'block';
		clearUserInput();
		return;
	}

	const inputValidity = checkInputValidity(username);

	if (inputValidity === false) {
		formField.style.borderBottom = '2px solid var(--error-color)';
		formErrorMessage.innerHTML = 'Enter a valid username (alphanumeric only)';
		formErrorMessage.style.display = 'block';
		clearUserInput();
		return;
	}

	addWinner(username);
	appendWinnerToSidebar(username, currentPlayer, numberOfMoves);
};

const addWinner = (username) => {
	let winners = JSON.parse(localStorage.getItem('winners'));

	const winner = {
		username: username,
		symbol: currentPlayer,
		numberOfMoves: numberOfMoves,
	};

	if (winners) {
		winners.push(winner);
	} else {
		winners = [winner];
	}

	localStorage.setItem('winners', JSON.stringify(winners));
	buttonSubmit.disabled = true;
	userInput.disabled = true;
	clearUserInput();
};

const appendWinnerToSidebar = (username, symbol, numOfMoves) => {
	sidebarList.insertAdjacentHTML(
		'beforeend',
		`<aside class="sidebar-list-item">
						 <span class="sidebar-list-item__text">
						   Winner: ${username}, Symbol: ${symbol}, Moves: ${numOfMoves}
						 </span>
					 </aside>`
	);
};

const showWinnersInSidebar = () => {
	const winners = JSON.parse(localStorage.getItem('winners'));

	if (winners) {
		winners.forEach((winner) => {
			const {username, symbol, numberOfMoves} = winner;

			if (checkInputLength(username) && checkInputValidity(username)) {
				appendWinnerToSidebar(username, symbol, numberOfMoves);
			}
		})
	}
};

const checkInputLength = (input) => {
	return !(input === '' || input.length < 3 || input.length > 12);
};

const checkInputValidity = (input) => {
	const alphanumericRegex = /^[a-zA-Z0-9]+$/g;
	return alphanumericRegex.test(input);
};

tableCells.forEach((cell) => cell.addEventListener('click', handleCellClick));
document.querySelector('.button--restart').addEventListener('click', handleRestartGame);
document.querySelector('.game__form').addEventListener('submit', handleUsernameInput);
showWinnersInSidebar();
