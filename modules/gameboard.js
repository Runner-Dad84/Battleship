//const ship = require ('./ship.js')
import { ship } from './ship.js'

//to access square on board us me board.board[r][c]

//utility: converts column letter to number for lookUp
function colConvert (letter){
    const alphabet = [...Array(7)].map((_,i) => String.fromCharCode(i +97));
        const item = (el) => el === letter;
        const num = alphabet.findIndex(item);
        return num
};
//utility: board as variablename.board, only works for first row
export function lookUp (Let, Num, array){
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
        for (let i = 0; i < this.row; i++){
            let rows = [];
            for (let j = 0; j < this.col; j++){
                let value = 0;
                rows.push(value);
            }
            gameBoard.push(rows);
        }
        return gameBoard;
    }
    
    //utility function
    checkOnBoard (x, y){
        if ((x < 0) || (y < 0) || (x > 6) || (y > 6)) {
            return false
        }
    }
    //utility function
    checkOpenBoard (x, y){
        if (this.board[x][y] !== 0) {
            return false
        }
    }

    placeNewShip(type, col, row, dir) {
        if (this.checkOnBoard(col, row) === false){
            return TypeError;
        }
        const newShip = new ship(type);
        this.ships.push(newShip);
    
        let c = col;
        let r = row;
        
        if (dir === 'north'){
            for (let i = col; i < (c + newShip.length); i++) {
                if (this.checkOnBoard(col, row) === false){
                    return TypeError;
                }
                if (this.checkOpenBoard(col, row) === false){
                    return TypeError;
                }
                this.board[col++][row] = newShip.id;
            }
        }
        if (dir === 'south'){
            for (let i = col; i > (c - newShip.length); i--) {
                if (this.checkOnBoard(col, row) === false){
                    return TypeError;
                }
                if (this.checkOpenBoard(col, row) === false){
                    return TypeError;
                }
                this.board[col--][row] = newShip.id;
            }
        }
        if (dir === 'east'){
            for (let i = row; i < (r + newShip.length); i++) {
                if (this.checkOnBoard(col, row) === false){
                    return TypeError;
                }
                if (this.checkOpenBoard(col, row) === false){
                    return TypeError;
                }
                this.board[col][row++] = newShip.id;
            }
        }
        if (dir === 'west'){
            for (let i = row; i > (r - newShip.length); i--) {
                if (this.checkOnBoard(col, row) === false){
                    return TypeError;
                }
                if (this.checkOpenBoard(col, row) === false){
                    return TypeError;
                }
                this.board[col][row--] = newShip.id;
            }
        }
    }
    
    receiveAttack (col, row) {
        let c = col;
        let r = row;
        //if water record miss
        if (this.board[c][r] === 0){
            return this.board[c][r] = 'X';
        }
        //if hit carrier record hit
        if (this.board[c][r] === 'C'){
            this.ships[0].hit();
        }
        //if hit batteship record hit
        if (this.board[c][r] === 'B'){
            this.ships[1].hit();
        }
        //if hit destoryer record hit
        if (this.board[c][r] === 'D'){
            this.ships[2].hit();
        }
        //if hit submarine record hit
        if (this.board[c][r] === 'S'){
            this.ships[3].hit();
        }
        //if hit submarine record hit
        if (this.board[c][r] === 'P'){
            this.ships[4].hit();
        }
        //record hit to board
        return this.board[c][r] = '!';
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
