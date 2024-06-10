import { gameboard,  } from './modules/gameboard.js'
import { ship } from './modules/ship.js'
import { humanPlayer, compPlayer } from './modules/player.js'
import { printBoard } from './modules/dom.js'
import './styles/gameboard.style.css';
import './styles/shipform.style.css';

//create players
let player1 = new humanPlayer('Andrew');
let computer = new compPlayer('computer', 'easy');

//set computer ships randomly
//Utility function, random row/col
const randomNum = {
    get value (){
        return Math.floor(Math.random() * 7);
    }
};

(function placeCarrier () {
  function tryAgain (){
    let length = computer.gb.ships.length;
    computer.gb.placeNewShip('Carrier', randomNum.value, randomNum.value, 'Up');
    if (computer.gb.ships.length === length){
        tryAgain();
    };
 }
 tryAgain();    
})();

(function placeBattleShip (){
    function tryAgain (){
        let length = computer.gb.ships.length;
        computer.gb.placeNewShip('Battleship', randomNum.value, randomNum.value, 'Up');
        if (computer.gb.ships.length === length){
            tryAgain();
        };
     }
     tryAgain();
})();

(function placeDestroyer (){
    function tryAgain (){
        let length = computer.gb.ships.length;
        computer.gb.placeNewShip('Destroyer', randomNum.value, randomNum.value, 'Right');
        if (computer.gb.ships.length === length){
            tryAgain();
        };
     }
     tryAgain();
})();

(function placeSubmarine (){
    function tryAgain (){
        let length = computer.gb.ships.length;
        computer.gb.placeNewShip('Submarine', randomNum.value, randomNum.value, 'Up');
        if (computer.gb.ships.length === length){
            tryAgain();
        };
     }
     tryAgain();
})();

(function placePatrol (){
    function tryAgain (){
        let length = computer.gb.ships.length;
        computer.gb.placeNewShip('Patrol Boat', randomNum.value, randomNum.value, 'Up');
        if (computer.gb.ships.length === length){
            tryAgain();
        };
     }
     tryAgain();
})();

globalThis.boardTest = player1.gb.board;

printBoard(computer.gb.board, 'container-p2', computer.gb);
printBoard(player1.gb.board, 'container-p1', player1.gb);

//console.log(computer.gb.ships);

/*
console.log(boardTest[0][0].value);
console.log(boardTest[3][4].c);
console.log(boardTest[3][4].r);
*/
//attacks
/*
player1.gb.receiveAttack(0, 1);
player1.gb.receiveAttack(1, 0);

computer.gb.receiveAttack(0, 0);
computer.gb.receiveAttack(6, 4);
*/
//update game board



//how to print ships
/*console.log(boardTest);
console.log(player1.gb.ships);
console.log(player1.gb.ships[0]);
*/

//player place ships on board
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById('placement')
    form.addEventListener ('submit', function (event) {
        event.preventDefault();
        const row = document.getElementById('shipRow').value;
        const col = document.getElementById('shipCol').value;
        let shipType = document.getElementById('formTitle').innerText;
        const direction = document.getElementById('direction').value;
        player1.gb.placeNewShip(shipType, row, col, direction);
        printBoard(player1.gb.board, 'container-p1', player1.gb);
    })})

//listen for player turn
let playerContainer = document.getElementById('container-p1');
let compContainer = document.getElementById('container-p2');

//Listen for player click on computer board to log attack
document.addEventListener('DOMContentLoaded', ()=> {
    compContainer.addEventListener ('click', ()=> {
        console.log('player moves');
        printBoard(computer.gb.board, 'container-p2', computer.gb);
    })

}
);
//Listen for computer board click by player, handler is computer attack
compContainer.addEventListener ('click', function RandomMove () {
    setTimeout(function RandomMove (){
        //check if square is open, if not generate new numbers and check again
        function findOpen (){
            if (player1.gb.checkOpenBoard(randomRow, randomCol) === false) {
                randomRow = Math.floor(Math.random() * 7);
                randomCol = Math.floor(Math.random() * 7);
                findOpen(randomRow, randomCol)
            };
        }
        let randomRow = Math.floor(Math.random() * 7);
        let randomCol = Math.floor(Math.random() * 7);
        findOpen();
        player1.gb.receiveAttack(randomRow, randomCol);
        printBoard(player1.gb.board, 'container-p1', player1.gb);
        console.log('computer moves');
    }, 1000);
});
