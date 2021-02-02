
document.addEventListener("DOMContentLoaded", () => {

//let gameActive = true;
let currentPlayer = "X";
let playerMoves = [];

// if the currentPlayer is clicked change color to white : if currentPlayer is clicked change the color to red
// if td is pressed change the color
function clickedBlock(clicked){
    let clickedBlock = clicked.target
    if (currentPlayer === 'X'){
        clickedBlock.style.backgroundColor = "white";
        playerMoves.push(clickedBlock)
        console.log("X:", playerMoves)
        currentPlayer = 'O'
    }
    else {
        clickedBlock.style.backgroundColor = "red";
        playerMoves.push(clickedBlock)
        console.log("O:", playerMoves)
        currentPlayer = 'X'
    }
}



let table = document.querySelectorAll("td")
table.forEach(block => block.addEventListener('click', clickedBlock));


































});