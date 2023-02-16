const player = (sign) => {
    //this.playerName = playerName;
    this.sign = sign;

    const getSign = () => { return sign };
    //const getName = () => { return playerName };

    return { getSign };
};


const gameBoard = (() => {
    const board = ["", "", "",
                   "", "", "",
                   "", "", ""];

    const setField = (position, playerSign) => {
        board[position] = playerSign;
    }

    const getField = (position) => {
        return board[position];
    };

    const getBoard = () => {
        return board;
    }

    return { getField, setField, getBoard };
})();


const displayController = (() => {
    const individualFields = document.querySelectorAll(".field");

    individualFields.forEach(
        (field) =>             
            field.addEventListener("click", (e) => 
                {
                    if (e.target.textContent !== "" || gameController.getGameOver()) return;
                    gameController.playRound(e.target.dataset.index);
                    updateGameboard();
                }
            )
    );

    const updateGameboard = () => {
        for (let i = 0; i < individualFields.length; i++) {
            playerSign = gameBoard.getField(i);

            if (playerSign === "X") {
                individualFields[i].innerHTML =  "<span class='red-color'>" +gameBoard.getField(i) +"</span>";
            } else {
                individualFields[i].innerHTML =  "<span class='blue-color'>" +gameBoard.getField(i) +"</span>";
            }
            
        }
      };       
      
})();

const gameController = (() => {
    const playerOne = player("X");
    const playerTwo = player("O");
    let round = 1;
    let gameOver = false;

    const playRound = (fieldPosition) => {
        gameBoard.setField(fieldPosition, getCurrentPlayerSign());

        console.log("Has someone won: " + checkWinner(fieldPosition));

        if (checkWinner(fieldPosition)) {
            // Winning
            gameOver = true;
            console.log("Winner is: " + getCurrentPlayerSign());
            return;
        } 
        if (round === 9) {
            // Tie
            gameOver = true;
            console.log("Tie!");
            return;
        }

        round++;
    }


    const getCurrentPlayerSign = () => {
        return round % 2 === 1 ? playerOne.getSign() : playerTwo.getSign();
    };

    const checkWinner = (fieldIndex) => {
        const winConditions = [
          ["0", "1", "2"],
          ["3", "4", "5"],
          ["6", "7", "8"],
          ["0", "3", "6"],
          ["1", "4", "7"],
          ["2", "5", "8"],
          ["0", "4", "8"],
          ["2", "4", "6"],
        ];
    
        return winConditions
        .filter((combination) => combination.includes(fieldIndex))
        .some((possibleCombination) =>
          possibleCombination.every(
            (index) => gameBoard.getField(index) === getCurrentPlayerSign()
          )
        );
      };

    const getGameOver = () => {return gameOver};


    return { playRound, getGameOver };
})();



