import { gameboard } from '../modules/gameboard.js'
import { ship } from '../modules/ship.js'
import { arrayShips } from '../modules/dom.js'
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

export function placeComputer (user) {
    placeShip ('Carrier', user);
    placeShip ('Battleship', user);
    placeShip ('Destroyer', user);
    placeShip ('Submarine', user);
    placeShip ('Patrol Boat', user);
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
  export let targetRow = undefined;
  export let targetCol = undefined;
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

  export let savedRow = undefined;
  export let savedCol = undefined;
  export function storedHit (row, col) {
    if (typeof targetRow === 'number'){
        savedRow = row;
        savedCol = col;
        return
    } else {
        savedRow = undefined;
        savedCol = undefined;
    };
  };

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
        targetCol = undefined;
        targetRow = undefined;
        savedRow = undefined;
        savedCol = undefined;
        randomAttack (enemy);
    };
};

//utility fn - check space adjacent to attack for next attack
function adjacent (enemy, row, col) {
    if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid'){
        return ++randomRow;
    }
};

  //possible adjacent moves from a hit
  let rowPlus;
  let rowMinus;
  let colPlus;
  let colMinus;

  export function targetedAttack (enemy){
   
    //first move
    if (randomRow  === undefined) {
        return randomAttack (enemy)  
    };
    //check if a ship was sunk last turn
    postSunkAtt(enemy);

    //If last attack was a hit
    if (enemy.gb.board[randomRow][randomCol].value === 'C-HIT' ||
        enemy.gb.board[randomRow][randomCol].value === 'B-HIT' ||
        enemy.gb.board[randomRow][randomCol].value === 'D-HIT' ||
        enemy.gb.board[randomRow][randomCol].value === 'S-HIT' ||
        enemy.gb.board[randomRow][randomCol].value === 'P-HIT'
    ) {
        
        rowPlus =  randomRow + 1;
        rowMinus = randomRow -1;
        colPlus = randomCol + 1;
        colMinus = randomCol - 1;
        
        //if there is not a saved hit check each of the adjacent spots
        if (savedRow === undefined) {
            
            if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid'){
            storedHit(targetRow, targetCol);
            console.log('condition 1');
            return ++randomRow;
            };
            if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid'){
            storedHit(targetRow, targetCol);
            console.log('condition 2');
            return --randomRow;
            };
            if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid'){
            storedHit(targetRow, targetCol);
            console.log('condition 3');
            return ++randomCol;
            }; 
            if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid'){
            storedHit(targetRow, targetCol);
            console.log('condition 4');
            return --randomCol;
        };
        //if there are two hits check to see if adjacent spot on the co/row is open
       } else {
            let rowVal = Math.abs(randomRow - savedRow);
            let colVal = Math.abs(randomCol- savedCol);
    
            console.log('stored and random value');
            
            rowPlus =  randomRow + 1;
            rowMinus = randomRow -1;
            colPlus = randomCol + 1;
            colMinus = randomCol - 1;
            
            if (rowVal > 0){
                console.log('pick rows');
                if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid'){
                    console.log('condition 1b');
                    return ++randomRow;
                };
                if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid'){
                    console.log('condition 2b');
                    return --randomRow;
                };
            }
            if (colVal > 0){
                if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid'){
                    console.log('condition 3b');
                    return ++randomCol;
                }; 
                if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid'){
                    console.log('condition 4b');
                    return --randomCol;
                };
            }
        }
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
  targetRow = undefined;
  targetCol = undefined;
  randomAttack (enemy);
};
