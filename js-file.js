
//Game Object
const gameStart = (() => {
    let playerOneTurn = 1;
    let playerTwoTurn = 0;
    const turn = () => {
        if (playerOneTurn) {
            playerOneTurn--;
            playerTwoTurn++;
        }
        else {
            playerTwoTurn--;
            playerOneTurn++;
        }
    }
    return {turn}
})();

//Gameboard Object
const gameBoard = (() => {
    const container = document.querySelector('.container');
    let gameboard = [];
    const getGameBoard = () => gameboard;
    const clearGameBoard = () => {
        gameboard = [];
    };
    const addSymbol = (cell) => {
        if (cell.innerHTML == null) {
            cell.innerHTML = "O";
            console.log(2);
            console.log(cell.innerHTML);
        }
    };
    const createBoard = () => {
        for (let i = 0; i < 9; i++)
        {
            let cell = document.createElement('div');
            cell.setAttribute('id', i);
            cell.classList.add('cell');
            gameBoard.getGameBoard
            container.appendChild(cell);
            gameboard[i] = cell;
        }
    };
    return {getGameBoard,clearGameBoard, createBoard}
})();

//Display Controller Object Creates Display
/*const displayController = (() => {

    return {createBoard, addSymbol};
})();*/

//Player Object
const Player = (symbol) => {
    let playerSymbol = symbol;
    let wins = 0;
    const getSymbol = () => playerSymbol;
    const victory = () => {
        wins++;
    };
    return {getSymbol, victory}
};

gameBoard.createBoard(gameBoard.getGameBoard());
console.log(gameBoard.getGameBoard());
console.log(gameBoard.getGameBoard[0]);