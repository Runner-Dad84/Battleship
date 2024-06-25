import { gameboard } from '../modules/gameboard.js'
import { ship } from '../modules/ship.js'
import { boardSize } from '../index.js'

//Utility function, random row/col
const randomNum = {
    get value (){
        return Math.floor(Math.random() * boardSize);
    }
};
//Utility function, random direction
function randomDir (){
    let value = Math.floor(Math.random() * 4);
        if (value === 0){ return 'Up' } 
        if (value === 1){ return 'Down' }
        if (value === 2){ return 'Right' }
        if (value === 3){ return 'Left' }
};

//randomly place ship
export function placeShip (ship, cpu) {
    function tryAgain (){
      let length = cpu.gb.ships.length;
      cpu.gb.placeNewShip(ship, randomNum.value, randomNum.value, randomDir ());
      //if the ship fails to place on the board run again
      if (cpu.gb.ships.length === length){
          tryAgain();
      };
   }
   tryAgain();    
};

//computer attack random move
export let randomRow;
export let randomCol;
export function randomAttack (user){
    randomRow = Math.floor(Math.random() * boardSize);
    randomCol = Math.floor(Math.random() * boardSize);
    if (user.gb.checkOpenBoard(randomRow, randomCol) === false) {
        randomRow = Math.floor(Math.random() * boardSize);
        randomCol = Math.floor(Math.random() * boardSize);
        randomAttack(user);
    };
}

  //utility function & variables to store last hit
  export let targetRow;
  export let targetCol;
  export function lastHit (player, row, col){
    if (player.gb.board[row][col].value === 'C' || 
        player.gb.board[row][col].value === 'B' || 
        player.gb.board[row][col].value === 'D' ||
        player.gb.board[row][col].value === 'S' ||
        player.gb.board[row][col].value === 'P'  
    ){
        let targetPoint = user.gb.board[row][col]; 
        targetRow = targetPoint.r
        targetCol = targetPoint.c
    } else {
        console.log('miss')}
  };

  export function targetedAttack (player, row, col){
    switch (true){
        case player.gb.checkOpenBoard(row + 1, col):
            randomRow = row + 1;
            randomCol = col;
            break;
        case player.gb.checkOpenBoard(row -1 , col):
            randomRow = row - 1;
            randomCol = col;
            break;
        case player.gb.checkOpenBoard(row, col + 1):
            randomRow = row;
            randomCol = col + 1;
            break;
        case player.gb.checkOpenBoard(row, col - 1):
            randomRow = row;
            randomCol = col - 1;
            break;
        default:
            randomAttack (player);
    }
    
};
