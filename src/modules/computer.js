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
    if (user.gb.checkOpenBoard(randomRow, randomCol) === 'invalid') {
        randomRow = Math.floor(Math.random() * boardSize);
        randomCol = Math.floor(Math.random() * boardSize);
        randomAttack(user);
    };
}

  //utility function & variables to store last hit
  export let targetRow;
  export let targetCol;
  export function lastHit (enemy, row, col){
    if (enemy.gb.board[row][col].value === 'C' || 'B' || 'D' || 'S' || 'P'){
          targetRow = row;
          targetCol = col;
        console.log(targetRow);
        console.log(targetCol);
    } else {
        console.log('no data for hit')}
  };

  export function targetedAttack (enemy){
    //first move
    if (randomRow  === undefined) {
        return randomAttack (enemy)  
    };
    let rowPlus =  randomRow + 1;
    let rowMinus = randomRow -1;
    let colPlus = randomCol + 1;
    let colMinus = randomCol -1;

    if (enemy.gb.board[randomRow][randomCol].value === '!') {
        
        if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid'){
            return ++randomRow;
        };
        if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid'){
            return --randomRow;
        };
        if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid'){
            return ++randomCol;
        }; 
        if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid'){
            return --randomCol;
        } else { 
            randomAttack (enemy) };
}
randomAttack (enemy);
};
