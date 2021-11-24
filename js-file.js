
//Gameboard Object
const gameBoard = (() => {
    const container = document.querySelector('.container');
    let gameboard = [];
    const getGameBoard = () => gameboard;
    const clearGameBoard = () => {
        while (container.firstChild) container.removeChild(container.firstChild);
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
            container.appendChild(cell);
            gameboard[i] = cell;
        }
        container.addEventListener("click", gameStart.play);
    };
    return {getGameBoard,clearGameBoard, createBoard, addSymbol}
})();

//Player Object
const Player = (symbol) => {
    let playerName;
    let playerSymbol = symbol;
    let wins = 0;
    const getPlayerName = () => playerName;
    const getPlayerSymbol = () => playerSymbol;
    const setPlayerName = (input, player) => {
        if (input === "")
        {
            playerName = "Player " + player;
        }
        else {
            playerName = input;
        }
    }
    const getWins = () => wins;
    const victory = () => {
        wins++;
    };
    return {getPlayerName,getPlayerSymbol,setPlayerName,victory,getWins}
};

//Display Winner Object
const displayWinner = (() => {
    const modal = document.querySelector(".modal");
    const winnerText = document.querySelector(".winner-text");
    const span = document.querySelector(".close");
    span.addEventListener("click", () => {
        modal.style.display = "none";
    })
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
    const showWinner = (player) => {
        winnerText.innerHTML = "Winner is " + player.getPlayerName() + "!";
        modal.style.display = "block";
    }
    return {showWinner};
})();

//Game Object
const gameStart = (() => {
    const playerOneName = document.querySelector("#playerOne");
    const playerTwoName = document.querySelector("#playerTwo");
    const playerOneWins = document.querySelector("#playerOneWins");
    const playerTwoWins = document.querySelector("#playerTwoWins");
    const playerOne = Player("X");
    const playerTwo = Player("O");
    let playerOneTurn = 1;
    let playerTwoTurn = 0;
    let moves;
    let result;
    const play = (event) => {
        playerOne.setPlayerName(playerOneName.value, "One");
        playerTwo.setPlayerName(playerTwoName.value, "Two");
        if (event.target.classList.contains("cell"))
        {
            if (result != null)
            {
                alert("Clear Board to Start a New Game!");
            }
            else if (playerOneTurn) {
                playerOneTurn--;
                playerTwoTurn++;
                gameBoard.addSymbol(event, playerOne.getPlayerSymbol());
                moves++;
                winCheck(event);
                if (result != null)
                {
                    playerOne.victory();
                    playerOneWins.innerHTML = "Wins: " + playerOne.getWins();
                    displayWinner.showWinner(playerOne);
                }
            }
            else {
                playerTwoTurn--;
                playerOneTurn++;
                gameBoard.addSymbol(event, playerTwo.getPlayerSymbol());
                moves++;
                winCheck(event);
                if (result != null)
                {
                    playerTwo.victory();
                    playerTwoWins.innerHTML = "Wins: " + playerTwo.getWins();
                    displayWinner.showWinner(playerTwo);
                }
            }
        }
    };
    const winCheck = (event) => {
        board = gameBoard.getGameBoard();
        let cell = board.indexOf(event.target);
        let rowMatch = 0;
        let columnMatch = 0;
        //Check 
        for (let i = 0; i < 9; i++) {
            if (board[i].innerHTML === board[cell].innerHTML)
            {
                rowMatch++;
            }
            if (rowMatch === 3)    //Row Win Found
            {
                result = "row";
            }
            if (i === 2 || i === 5 || i === 8)
            {
                rowMatch = 0;
            }
            if (i < 3)
            {
                if (board[i].innerHTML === board[cell].innerHTML 
                    && board[i + 3].innerHTML === board[cell].innerHTML
                    && board[i + 6].innerHTML === board[cell].innerHTML)   //Column Win Found
                {
                    result = "col"
                } else {
                    columnMatch = 0;
                }
            }
        }
        if (board[0].innerHTML === board[cell].innerHTML
            && board[4].innerHTML === board[cell].innerHTML
            && board[8].innerHTML === board[cell].innerHTML)  //Diagonal Win One Found
        {
            result = "dia";
        }
        if (board[2].innerHTML === board[cell].innerHTML
            && board[4].innerHTML === board[cell].innerHTML
            && board[6].innerHTML === board[cell].innerHTML)  //Diagonal Win Two Found
        {
            result = "dia";
        }
        if (moves === 9)
        {
            result = "tie";
        }
    };
    const clearGame = () => {
        playerOneTurn = 1;
        playerTwoTurn = 0;
        moves = 0;
        result = null;
        gameBoard.clearGameBoard();
    }
    return {play, clearGame}
})();

const start = document.querySelector('.clear');
start.addEventListener("click", () => {
    if (start.innerHTML === "Start Game") {
        console.log("start")
        gameBoard.createBoard();
        start.innerHTML = "Clear Board";
    }
    else {
        console.log("clear")
        gameStart.clearGame();
        start.innerHTML = "Start Game"
    }
});


