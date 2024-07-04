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

//Randomly place ship
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

//Computer attack random move
export let randomRow;
export let randomCol;
export function randomAttack (user){
    console.log('randomAttack fn')
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
    if (enemy.gb.board[row][col].value === 'C' || 
        enemy.gb.board[row][col].value === 'B' ||
        enemy.gb.board[row][col].value === 'D' ||
        enemy.gb.board[row][col].value === 'S' ||
        enemy.gb.board[row][col].value === 'P')
    {
        console.log(' lasthit fn - store hit');

          targetRow = row;
          targetCol = col;
    } else {
        console.log('lasthit fn - no data for hit')}
  };

  //
  function targetLine (enemy) {
    if (savedRow === undefined) {
        return
    };
    if ((enemy.gb.board[randomRow][randomCol].value === '!') && (enemy.gb.board[savedRow][savedCol].value === '!')) {
        let rowVal = Math.abs(randomRow - savedRow);
        let colVal = Math.abs(randomCol- savedCol);
        if (rowVal === 1){
            console.log('pick rows');
        }
        if (colVal === 1){
            console.log('pick cols');
        }
    };
  }


  //utility fn - if a ship was sunk last turn go to random attack
  let lastCount = 0;
  function postSunkAtt (enemy) {
    let carSunk = enemy.gb.ships[0].isSunk();
    let batSunk = enemy.gb.ships[1].isSunk();
    let disSunk = enemy.gb.ships[2].isSunk();
    let subSunk = enemy.gb.ships[3].isSunk();
    let patSunk = enemy.gb.ships[4].isSunk();
    let ships = [carSunk, batSunk, disSunk, subSunk, patSunk];
    let countTrue = ships.filter(value => value === true).length

    if (lastCount < countTrue) { 
        ++lastCount
        randomAttack (enemy);
    };
};

  export let savedRow;
  export let savedCol;

  export function targetedAttack (enemy){
   
    //console.log(targetRow);
    //console.log(targetCol);
    //console.log(typeof targetRow)
   
    //first move
    if (randomRow  === undefined) {
        return randomAttack (enemy)  
    };
    //check if a ship was sunk last turn
    postSunkAtt(enemy);

    targetLine(enemy);

    //possible adjacent moves from a hit
    let rowPlus;
    let rowMinus;
    let colPlus;
    let colMinus;

    //If last attack was a hit check adjacent moves and pick the first that is open for next move
    if ( (enemy.gb.board[randomRow][randomCol].value === '!') ) {
        savedRow = randomRow;
        savedCol = randomCol;

        rowPlus =  randomRow + 1;
        rowMinus = randomRow -1;
        colPlus = randomCol + 1;
        colMinus = randomCol - 1;
        
        if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid'){
            console.log('condition 1');
            return ++randomRow;
        };
        if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid'){
            console.log('condition 2');
            return --randomRow;
        };
        if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid'){
            console.log('condition 3');
            return ++randomCol;
        }; 
        if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid'){
            console.log('condition 4');
            return --randomCol;
        };
    };
    
    

    //if there is a stored hit and last move is a miss rerun adjacent checks
    if ( (enemy.gb.board[randomRow][randomCol].value === 'X') && (typeof targetRow === 'number') ) {
            console.log('target att - miss, go back to last hit');

            randomRow = targetRow;
            randomCol = targetCol;

            rowPlus =  randomRow + 1;
            rowMinus = randomRow -1;
            colPlus = randomCol + 1;
            colMinus = randomCol - 1;

            if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid'){
                console.log('condition 1');
                return ++randomRow;
            };
            if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid'){
                console.log('condition 2');
                return --randomRow;
            };
            if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid'){
                console.log('condition 3');
                return ++randomCol;
            }; 
            if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid'){
                console.log('condition 4');
                return --randomCol;
            } 
    }
    
  console.log('target att - default random ')
  targetRow = "";
  targetCol = "";
  randomAttack (enemy);
};
