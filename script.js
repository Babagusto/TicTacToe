const Gameboard = ['','','','','','','','',''];


const Players = [];

let currentPlayer
const makePlayer = (name, sign) => {
    const player = {};
    player.name = name;
    player.sign = sign;
    Players.push(player)  
    return {player}  
};

const Jimmie = makePlayer("jim", "X")
const Bobby = makePlayer("bob", "O")

const showGameboard = (() => {
    const gameGrid = document.getElementById("gameboard_container")
    gameGrid.style.setProperty('--grid-rows', 3);
    gameGrid.style.setProperty('--grid-cols', 3)
    for (var i = 0; i < (3 * 3); i++){
    let cell = document.createElement("div")
    cell.addEventListener("click", addMark)
    gameGrid.appendChild(cell).className = "grid-item"
        function addMark() {
            if (cell.innerText === ""){
            switchPlayer()
            cell.innerText = currentPlayer.sign
            }
        } 
    }
    function switchPlayer () {
        if (currentPlayer === Players[0]) {
        currentPlayer = Players[1]
        } else {
            currentPlayer = Players[0]
        }
        return currentPlayer
    }
    function checkScore() {

    }
})();
