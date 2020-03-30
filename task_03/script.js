const X_CLASS = "x";
const O_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Board
const board = document.getElementById("board");
const cellElements = document.querySelectorAll(".board__cell");

const winningMessageElement = document.getElementById("winning-message");
const winningMessageTextElement = document.getElementById("winning-message-text");
const winnerNameInput = document.getElementById("winner-name");
const winnerList = document.getElementById("sidebar-winner-list");

let circleTurn = false;
let movesCount = 0;

// Start Game
function startGame() {
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS, O_CLASS);
    cell.addEventListener("click", handleOnCellClick, { once: true });
  });

  setBoardClass();
}

// Restart Game
function onGameRestart() {
  if (!winnerNameInput.value) {
    alert("You must enter your name!");
  } else if (winnerNameInput.value.length > 12) {
    alert("Your name must be between 1 and 12 characters");
  } else {
    const winner = {
      id: Math.floor(Math.random() * 100000),
      name: winnerNameInput.value,
      symbol: circleTurn ? "O" : "X",
      moves: movesCount
    };

    setWinnerToLocalStorage(winner)
    renderWinnerListItem(winner);

    winningMessageElement.classList.remove("show");
    winnerNameInput.value = "";
    movesCount = 0;

    startGame();
  }
}

// End game
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn
        ? `O's win within ${movesCount} moves`
        : `X's win within ${movesCount} moves`
      }`;
  }
  winningMessageElement.classList.add("show");
}

// Set field
function handleOnCellClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? O_CLASS : X_CLASS;

  cell.classList.add(currentClass);
  movesCount += 1;

  if (isWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    circleTurn = !circleTurn;

    setBoardClass();
  }
}

// Render Winners List
function renderListOfWinnersOnInit() {
  const localStorageKeys = Object.keys(localStorage);

  for (let i = 0; i < localStorageKeys.length; i++) {
    renderWinnerListItem(JSON.parse(localStorage.getItem(localStorageKeys[i])))
  }
}

function renderWinnerListItem(winner) {
  let winnerListItem = document.createElement("div");

  winnerListItem.className = "winner";
  winnerListItem.innerHTML += `Winner: ${winner.name},`
  winnerListItem.innerHTML += `symbol: ${winner.symbol},`
  winnerListItem.innerHTML += `moves: ${winner.moves}`;

  winnerList.appendChild(winnerListItem);
}

// Set winner to local storage
function setWinnerToLocalStorage(winner) {
  localStorage.setItem(winner.id, JSON.stringify(winner));
}

// Check game status
function isDraw() {
  return [...cellElements].every(cell =>
    cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
  );
}

function isWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

// Set border cell classes
function setBoardClass() {
  board.classList.remove(X_CLASS, O_CLASS);

  if (circleTurn) {
    board.classList.add(O_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

// Init game
startGame();
renderListOfWinnersOnInit();