const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
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
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const getPlayerNamesElement = document.getElementById("playerNames");
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winnerNameField = document.getElementById("winnerName");
const restartButton = document.getElementById("restartButton");

let circleTurn;
let circleMoves;
let xMoves;
let winnerId;

let WINNER_NAME = "";

allStorage();
startGame();
restartButton.addEventListener("click", saveAndRestart);

function startGame() {
  circleTurn = false;
  circleMoves = 0;
  xMoves = 0;
  allMoves = 0;
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
}

function saveName() {
  WINNER_NAME = document.getElementById("winnerName").value;
}

function saveAndRestart() {
  if (!document.getElementById("winnerName").value) {
    alert("You must enter your name!");
  } else if (document.getElementById("winnerName").value.length > 12) {
    alert("Your name must be between 1 and 12 charachters");
  } else {
    winner = {
      winnerName: WINNER_NAME,
      symbol: circleTurn ? "O" : "X",
      moves: allMoves
    };

    winnerId = Math.floor(Math.random() * 100000);
    localStorage.setItem(winnerId, JSON.stringify(winner));

    let newWinner = document.createElement("div");
    newWinner.className = "winner";
    newWinner.innerHTML = `Winner: ${winner.winnerName}, symbol: ${winner.symbol}, moves: ${winner.moves}`;
    document.getElementById("list-of-winners").appendChild(newWinner);

    document.getElementById("winnerName").value = "";
    startGame();
  }
}

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  for (let i = 0; i < values.length; i++) {
    values[i] = JSON.parse(values[i]);
    let divs = document.createElement("div");
    divs.className = "winner";
    divs.innerHTML = `Winner: ${values[i].winnerName}, symbol: ${values[i].symbol}, moves: ${values[i].moves}`;
    document.getElementById("list-of-winners").appendChild(divs);
  }
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn
        ? `O's win within ${allMoves} moves`
        : `X's win within ${allMoves} moves`
      }`;
  }
  winningMessageElement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every(cell => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
    allMoves += 1;
  } else {
    board.classList.add(X_CLASS);
    allMoves += 1;
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
