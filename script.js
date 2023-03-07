const winGame = [
        [0,1,2], 
        [3,4,5],  
        [6,7,8], 
        [0,3,6],
        [1,4,7],      
        [2,5,8],
        [0,4,8],
        [2,4,6] 
];

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
const Computer = makePlayer("AI","" )

const showGameboard = (() => {
    const restart = document.getElementById('reset')

    restart.addEventListener('click', reset)
    
    let Gameboard = ['','','','','','','','',''];
    const gameGrid = document.getElementById("gameboard_container")
    const gameStatus = document.getElementById("status")
    
    gameGrid.style.setProperty('--grid-rows', 3);
    gameGrid.style.setProperty('--grid-cols', 3)

    

    for (var i = 0; i < Gameboard.length; i++){
    let cell = document.createElement("div")
    cell.setAttribute("id", [i])
    cell.innerText = Gameboard[i]
    cell.addEventListener("click", addMark)
    gameGrid.appendChild(cell).className = "grid-item"
        function addMark() {
            if (cell.innerText === ""){
            switchPlayer()
            cell.innerText = currentPlayer.sign
            updateArray()
            checkScore(Gameboard)
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
        gameStatus.innerText = "In Progress!"
        let roundWon = false;
        for (let i = 0; winGame.length; i++){
            const condition = winGame[i];
            const cellA = Gameboard[condition[0]];
            const cellB = Gameboard[condition[1]];
            const cellC = Gameboard[condition[2]];
            
                if(cellA == "" || cellB == "" || cellC == ""){
                    roundWon = false;
                }
                else if(cellA == cellB && cellB == cellC){
                    gameStatus.innerText = currentPlayer.name + " is Winner Winner"
                    roundWon = true;
                }

        }       
    }

    function updateArray() {
    let arrayNum = event.srcElement.id
    Gameboard[arrayNum] = currentPlayer.sign
    }

    function reset() {
        Gameboard = ['','','','','','','','',''];
        let cell = document.getElementsByClassName("grid-item")
        for (let i = 0; i < cell.length; i++){
                cell[i].innerText = ''
        } 
    }
})();


