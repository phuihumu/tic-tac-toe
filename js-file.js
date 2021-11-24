const container = document.querySelector('.container');

//Gameboard Object
const gameBoard = (() => {
    let gameboard = [];
    const getGameBoard = () => gameboard;
    const clearGameBoard = () => {
        gameboard = [];
    };
    const addSymbol = (event, symbol) => {
        let cell = event.target;
        if (cell.innerHTML === "") {
            cell.innerHTML = symbol;
        }
    };
    const createBoard = () => {
        for (let i = 0; i < 9; i++)
        {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            gameBoard.getGameBoard
            container.appendChild(cell);
            gameboard[i] = cell;
        }
    };
    return {getGameBoard,clearGameBoard, createBoard, addSymbol}
})();

//Display Controller Object Creates Display
/*const displayController = (() => {

    return {createBoard, addSymbol};
})();*/

//Player Object
const Player = (symbol) => {
    let playerSymbol = symbol;
    let wins = 0;
    const victory = () => {
        wins++;
    };
    return {symbol, victory}
};

//Game Object
const gameStart = (() => {
    const playerOne = Player("X");
    const playerTwo = Player("O");
    let playerOneTurn = 1;
    let playerTwoTurn = 0;
    const play = (event) => {
        if (playerOneTurn) {
            playerOneTurn--;
            playerTwoTurn++;
            gameBoard.addSymbol(event, playerOne.symbol);
        }
        else {
            playerTwoTurn--;
            playerOneTurn++;
            gameBoard.addSymbol(event, playerTwo.symbol);
        }
    }
    return {play}
})();

gameBoard.createBoard(gameBoard.getGameBoard());
console.log(gameBoard.getGameBoard());
console.log(gameBoard.getGameBoard()[0]);

container.addEventListener("click", gameStart.play);

