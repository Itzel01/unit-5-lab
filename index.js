
document.addEventListener("DOMContentLoaded", () => {

//let gameActive = true;
let currentPlayer = "X";
let playerMoves = [];
let gameActive = true;
function clickedBlock(clicked){
    let clickedBlock = clicked.target
    while(!(clickedBlock.style.backgroundColor)){
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



let table = document.querySelectorAll("td");
table.forEach(block => block.addEventListener('click', clickedBlock));

});





























});