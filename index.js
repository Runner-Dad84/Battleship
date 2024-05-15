import { gameboard } from './gameboard.js'
import { ship } from './ship.js'
import { humanPlayer, compPlayer } from './player.js'

let player1 = new humanPlayer('Andrew');
let computer = new compPlayer('computer', 'easy');

player1.gb.placeNewShip('carrier', 0, 0, 'north');
player1.gb.placeNewShip('battleship', 4, 1, 'east');
player1.gb.placeNewShip('submarine', 1, 1, 'east');

let playCont = document.getElementById(playerContainer)
let compCont = document.getElementById(compContainer)
//compCont.textContent = 'test';
//playCont.textContent = player1.gb.board;
document.body.color = 'blue';


console.log(player1.gb.board);
