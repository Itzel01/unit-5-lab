
document.addEventListener("DOMContentLoaded", () => {

//let gameActive = true;
let currentPlayer = "X";
let playerMoves = [];
let gameActive = true;
// const statusDisplay = document.querySelector('.game--status');


// if the currentPlayer is clicked change color to white : if currentPlayer is clicked change the color to red
// if td is pressed change the color
function clickedBlock(clicked){
    let clickedBlock = clicked.target;
    if (currentPlayer === 'X'){
        clickedBlock.style.backgroundColor = "white";
        playerMoves.push(clickedBlock);
        console.log("X:", playerMoves);
        currentPlayer = 'O';
    }
    else {
        clickedBlock.style.backgroundColor = "red";
        playerMoves.push(clickedBlock);
        console.log("O:", playerMoves);
        currentPlayer = 'X';
    }
}



let table = document.querySelectorAll("td");
table.forEach(block => block.addEventListener('click', clickedBlock));



// let resetSubmit = document.querySelector('#button-div')
// resetSubmit.addEventListener('submit', (e) => {
//     e.preventDefault();
//     resetSubmit.reset()
// })
function resetGame(){
    document.getElementById('#submit').reset();
}

// document.getElementById("reset").addEventListener("click", function() {
//       for (let i = 0; i < playerMoves.length; i++) {
//         playerMoves[i].innerHTML = "";
//       }
//       currentPlayer = " x";
//       document.getElementById("player").innerHTML = " x";
//     });































});