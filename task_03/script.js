let xTurn = true;
let gameOver = false;
let numberOfMoves = 0;

const board = [
    '', '', '',
    '', '', '',
    '', '', '',
];

const combinationsToCheck = {
    0 : [[1, 2], [3, 6], [4, 8]],
    1 : [[0, 2], [4, 7]],
    2 : [[0, 1], [5, 8], [4, 6]],
    3 : [[0, 6], [4, 5]],
    4 : [[3, 5], [1, 7], [0, 8], [2, 6]],
    5 : [[3, 4], [2, 8]],
    6 : [[0, 3], [7, 8], [2, 4]],
    7 : [[1, 4], [6, 8]],
    8 : [[6, 7], [2, 5], [0, 4]],
}

const boxes = document.querySelectorAll(".board__box");

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (this.innerHTML !== '' || gameOver || numberOfMoves === 9) {
            return;
        }

        let currentSymbol = xTurn ? 'X' : 'O';

        box.innerHTML = currentSymbol;

        let boxPosition = Number(this.className.split(' ')[1]);
        
        board[boxPosition] = currentSymbol;

        numberOfMoves++;

        checkBoard(boxPosition, currentSymbol);

        xTurn = !xTurn;
    });
});

function checkBoard(boxPosition, currentSymbol) {
    const combinations = combinationsToCheck[boxPosition];
    
    let won  = false;

    combinations.forEach((combination) => {
        if(board[combination[0]] === currentSymbol && board[combination[1]] === currentSymbol) {
            won = true;
            return;
        }
    });

    if (won) {
        console.log(currentSymbol + " won in " + numberOfMoves + " moves!");
        gameOver = true;
    } 
    
    if (numberOfMoves === 9) {
        console.log("Game over!");
    }
}


