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

  export function targetedAttack (enemy){
    //first move
    if (randomRow  === undefined) {
        return randomAttack (enemy)  
    };

    if (enemy.gb.board[randomRow][randomCol].value === '!') {
        console.log('it was a hit');
        let rowPlus = randomRow + 1;
        let rowMinus = randomRow - 1;
        let colPlus = randomCol + 1;
        let colMinus = randomCol - 1;
        console.log(rowPlus);
        console.log(rowMinus);
        console.log(colPlus);
        console.log(colMinus);
        
        if (enemy.gb.checkOpenBoard(++randomRow, randomCol) === 'valid'){
            console.log('test condition 1')
            randomRow = rowPlus;
            return
        };
        if (enemy.gb.checkOpenBoard(--randomRow, randomCol) === 'valid'){
            console.log('test condition 2');
            randomRow = rowMinus;
            return
        };
        if (enemy.gb.checkOpenBoard(randomRow, ++randomCol) === 'valid'){
            console.log('test condition 3');
            randomCol = colPlus;
            return
        }; 
        if (enemy.gb.checkOpenBoard(randomRow, --randomCol) === 'valid'){
            console.log('test condition 4');
            randomCol = colMinus;
            return;
        } else { 
            console.log('Didnt work again!')
            randomAttack (enemy) };
}
randomAttack (enemy);
};
