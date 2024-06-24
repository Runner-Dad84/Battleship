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

  //
  export let targetRow;
  export let targetCol;
  export function lastHit (user, row, col){
    if (user.gb.board[row][col].value === 'C' || 
        user.gb.board[row][col].value === 'B' || 
        user.gb.board[row][col].value === 'D' ||
        user.gb.board[row][col].value === 'S' ||
        user.gb.board[row][col].value === 'P'  
    ){
        let targetPoint = user.gb.board[row][col]; 
        targetRow = targetPoint.r
        targetCol = targetPoint.c
    } else {
        console.log('miss')}
  };
