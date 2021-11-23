
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
    let gameboard = [];
    const getGameBoard = () => gameboard;
    const clearGameBoard = () => {
        gameboard = [];
    };
    return {getGameBoard,clearGameBoard}
})();

//Display Controller Object Creates Display
const displayController = (() => {
    const container = document.querySelector('.container');
    const createBoard = (gameboard) => {
        for (let i = 0; i < 9; i++)
        {
            let cell = document.createElement('div');
            cell.setAttribute('id', i);
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    };
    return {createBoard};
})();

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

displayController.createBoard(gameBoard.getGameBoard());
console.log(gameBoard.getGameBoard());