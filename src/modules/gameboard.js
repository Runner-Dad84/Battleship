//const ship = require ('./ship.js')
import { ship } from '../modules/ship.js'
import { boardSize } from '../index.js'
import { AudioEventFn } from '../modules/audio.js'
//import { shipsDOM } from '../modules/dom.js'


//to access square on board us me board.board[r][c]

//Never used utility: converts column letter to number for lookUp
function colConvert (letter){
    const alphabet = [...Array(boardSize)].map((_,i) => String.fromCharCode(i +97));
        const item = (el) => el === letter;
        const num = alphabet.findIndex(item);
        return num
};


//Never used utility: board as variablename.board, only works for first row
function lookUp (Let, Num, array){
    const c = colConvert(Let);
    const r = Num;
    const target = array.board[c][r];
    return target;
}

export class gameboard {
    constructor (col, row) {
        this.col = col;
        this.row = row;
        this.board = this.createBoard();
        this.ships = [];
    }
    createBoard() {
        let gameBoard = [];
        for (let r = 0; r < this.row; r++){
            let rows = [];
            for (let c = 0; c < this.col; c++){
                let value = 0;
                rows.push({ value, r, c });
            }
            gameBoard.push(rows);
        }
        return gameBoard;
    }
    
    //utility function
    checkOpenBoard (row, col){
        if ((row < 0 ) || (row >= boardSize )) { return 'invalid' }
        if ((col < 0 ) || (col >= boardSize )) { return 'invalid' }
        if (this.board[row][col].value === 'X' || 
            this.board[row][col].value === 'C-HIT' ||
            this.board[row][col].value === 'B-HIT' ||
            this.board[row][col].value === 'D-HIT' ||
            this.board[row][col].value === 'S-HIT' ||
            this.board[row][col].value === 'P-HIT'
        ){
            return 'invalid';
        } else {
            return 'valid'}
    }

    placeNewShip(type, r, c, dir) {
        let row = r;
        let col = c;
        
        const newShip = new ship(type);

        if (dir === 'Down'){
            //check if ship on board
            try {
                if ((r-1) + newShip.length > (boardSize-1)) {throw new Error("You've gone off course! Redeploy ship.")
                }
            } catch (error) {
                console.error('The token is placed off the board:', error.message);
                return
            }
            //check if spaces are available
            try {
                for (let i = 0; (row + i) < (row + newShip.length); i++){
                    if ((this.board[row++][c]).value !== 0) {throw new Error('Near collison! Move that ship.')
                    }
                }
            } catch (error) {
                console.error('Spaces are occupied:', error.message);
                return 
            }
            //if no errors place ship
            for (let i = 0; (r + i) < (r + newShip.length); i++) {
                this.board[r++][c].value = newShip.id;
            }
            this.ships.push(newShip);
        }
        if (dir === 'Up'){
            //check if ship on board
            try {
                if (r - (newShip.length-1) < 0) {throw new Error("You've gone off course! Redeploy ship.");
            }
            } catch (error) {
                console.error('The token is placed off the board:', error.message);
                return
            }
            //check if spaces are available
            try {
                for (let i = 0; (row - i) > (row - newShip.length); i++){
                    if (this.board[row--][c].value !== 0) {throw new Error('Near collison! Move that ship')
                    }
                }
            } catch (error) {
                console.error('Spaces are occupied:', error.message);
                return
            }
            //if no errors place ship
            for (let i = 0; (r - i) > (r - newShip.length); i++) {
                this.board[r--][c].value = newShip.id;
            }
            this.ships.push(newShip);
        }
        if (dir === 'Right'){
            //check if ship on board
            try {
                if ((c-1) + newShip.length > (boardSize-1)) {throw new Error ("You've gone off course! Redeploy ship.")}
            } catch(error){
                return console.error('The token is placed off the board:', error.message);
            }
            //check if spaces are available
            try {
                for (let i = 0; (col + i) < (col + newShip.length); i++) {
                   if (this.board[r][col++].value !== 0){throw new Error ('Near collison! Move that ship');
                   }
                } 
            } catch (error) {
                console.error('Spaces are occupied:', error.message);
                return
            }
            //if no errors place ship
            for (let i = 0; (c + i) < (c + newShip.length); i++) {
                this.board[r][c++].value = newShip.id;
            }
            this.ships.push(newShip);
        };
        if (dir === 'Left'){
            //check if ship on board
            try {
                if (c - (newShip.length + 1) < 0) {throw new Error ("You've gone off course! Redeploy ship.")}
            } catch(error){
                console.error('The token is placed off the board:', error.message);
                return
            }
            //check if spaces are available
            try {
                for (let i = 0; (col - i) > (col - newShip.length); i++) {
                    if (this.board[r][col--].value !== 0){throw new Error ('Near collison! Move that ship');
                    }
                }
                } catch(error) {
                    console.error('Spaces are occupied:', error.message);
                    return
                }
            //if no errors place ship
            for (let i = 0; (c - i) > (c - newShip.length); i++) {
                this.board[r][c--].value = newShip.id;
            }
            this.ships.push(newShip);
        };
        
    }
    receiveAttack (r, c) {
        let fleet = this.ships;
        let thisShip;
        //Missile fired audio event create and dispatched
        let missileSound = AudioEventFn ('Missile');
        document.dispatchEvent(missileSound);
        //if already miss record another miss
        if (this.board[r][c].value === 'X'){
            return this.board[r][c].value = 'X';
        }
        //if water record miss
        if (this.board[r][c].value === 0){
            return this.board[r][c].value = 'X';
        }
        //if hit carrier record hit
        if (this.board[r][c].value === 'C'){
            thisShip = fleet.find(target => target.id === 'C');
            let index = (fleet.indexOf(thisShip));
            this.ships[index].hit();
        }
        //if hit batteship record hit
        if (this.board[r][c].value === 'B'){
            thisShip = fleet.find(target => target.id === 'B');
            let index = (fleet.indexOf(thisShip));
            this.ships[index].hit();
        }
        //if hit destoryer record hit
        if (this.board[r][c].value === 'D'){
            thisShip = fleet.find(target => target.id === 'D');
            let index = (fleet.indexOf(thisShip));
            this.ships[index].hit();
        }
        //if hit submarine record hit
        if (this.board[r][c].value === 'S'){
            thisShip = fleet.find(target => target.id === 'S');
            let index = (fleet.indexOf(thisShip));
            this.ships[index].hit();
        }
        //if hit patrol boat record hit
        if (this.board[r][c].value === 'P'){
            thisShip = fleet.find(target => target.id === 'P');
            let index = (fleet.indexOf(thisShip));
            this.ships[index].hit();
        }
        //custom sound event explosion
        let boardhit = AudioEventFn ('explosion');
        document.dispatchEvent(boardhit);
        //record hit to board
        let shipHit = this.board[r][c].value;
        return this.board[r][c].value = `${shipHit}-HIT`;
    }
    checkSunk (){
        let status = [];
        status.push(this.ships[0].isSunk());
        status.push(this.ships[1].isSunk());
        status.push(this.ships[2].isSunk());
        status.push(this.ships[3].isSunk());
        status.push(this.ships[4].isSunk());
        return status.every(item => item === true)
    }
}

