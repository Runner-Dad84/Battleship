import { gameboard } from './modules/gameboard.js'
import { ship } from './modules/ship.js'
import { humanPlayer, compPlayer } from './modules/player.js'
import { printBoard } from './modules/dom.js'
import './styles/gameboard.style.css';

let player1 = new humanPlayer('Andrew');
let computer = new compPlayer('computer', 'easy');

player1.gb.placeNewShip('carrier', 0, 0, 'north');
player1.gb.placeNewShip('battleship', 4, 1, 'east');
player1.gb.placeNewShip('submarine', 1, 1, 'east');

let containerP2 = document.getElementById('container-p2');
printBoard(player1.gb.board, 'container-p1');
