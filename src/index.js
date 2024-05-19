import { gameboard } from './modules/gameboard.js'
import { ship } from './modules/ship.js'
import { humanPlayer, compPlayer } from './modules/player.js'
import { printBoard } from './modules/dom.js'

let player1 = new humanPlayer('Andrew');
let computer = new compPlayer('computer', 'easy');

player1.gb.placeNewShip('carrier', 0, 0, 'north');
player1.gb.placeNewShip('battleship', 4, 1, 'east');
player1.gb.placeNewShip('submarine', 1, 1, 'east');
/*
let containerP1 = document.getElementById('container-p1');
let containerP2 = document.getElementById('container-p2');
let testButton = document.getElementById('test');

function clickFn(){
    console.log('test button pressed');
};

containerP1.textContent = printBoard(player1.gb.board);
containerP2.textContent = player1.gb.board;
*/
console.log(player1.gb.board);
