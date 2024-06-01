import { gameboard } from './modules/gameboard.js'
import { ship } from './modules/ship.js'
import { humanPlayer, compPlayer } from './modules/player.js'
import { printBoard } from './modules/dom.js'
import './styles/gameboard.style.css';
import './styles/shipform.style.css';

//create players
let player1 = new humanPlayer('Andrew');
let computer = new compPlayer('computer', 'easy');

//set ships
player1.gb.placeNewShip('carrier', 0, 0, 'south');
player1.gb.placeNewShip('battleship', 4, 1, 'east');
player1.gb.placeNewShip('submarine', 1, 1, 'east');
player1.gb.placeNewShip('destroyer', 6, 0, 'east');
player1.gb.placeNewShip('patrol', 0, 4, 'south');

computer.gb.placeNewShip('carrier', 5, 2, 'north');
computer.gb.placeNewShip('battleship', 0, 0, 'east');
computer.gb.placeNewShip('submarine', 0, 6, 'west');
computer.gb.placeNewShip('destroyer', 6, 4, 'east');
computer.gb.placeNewShip('patrol', 4, 6, 'north');


globalThis.boardTest = player1.gb.board;
/*
console.log(boardTest[0][0].value);
console.log(boardTest[3][4].c);
console.log(boardTest[3][4].r);
*/
//attacks
player1.gb.receiveAttack(0, 1);
player1.gb.receiveAttack(1, 0);

computer.gb.receiveAttack(0, 0);
computer.gb.receiveAttack(6, 4);

//update game board
printBoard(player1.gb.board, 'container-p1', player1.gb);
printBoard(computer.gb.board, 'container-p2', computer.gb);

//how to print ships
/*console.log(boardTest);
console.log(player1.gb.ships);
console.log(player1.gb.ships[0]);
*/

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



