//const ship = require ('./ship.js')
import { ship } from '../modules/ship.js'

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
    
    /*
    checkOnBoard (x, y){
        if ((x < 0) || (y < 0) || (x > 6) || (y > 6)) {
            return false
        }
    }
    */
    //utility function
    checkOpenBoard (r, c){
        if (this.board[r][c].value === 'X' ||
        this.board[r][c].value === '!') {
            console.log('You already fired here!')
            return false
        }
    }

    placeNewShip(type, r, c, dir) {
        const row = r;
        const col = c;
        
        /*if (this.checkOnBoard(col, row) === false){
            return TypeError;
        */
        const newShip = new ship(type);
        this.ships.push(newShip);

        

        if (dir === 'Down'){
            try {
                if ((r-1) + newShip.length > 6) throw "Off board! Redepoy ship"
            }
            catch (err) {
                return console.log(err)
            }
            for (let i = 0; (r + i) < (r + newShip.length); i++) {
                this.board[r++][c].value = newShip.id;
            }
        };
        if (dir === 'Up'){
            for (let i = 0; (r - i) > (r - newShip.length); i++) {
                this.board[r--][c].value = newShip.id;
            }
        };
        if (dir === 'Right'){
            for (let i = 0; (c + i) < (c + newShip.length); i++) {
                this.board[r][c++].value = newShip.id;
            }
        };
        if (dir === 'Left'){
            for (let i = 0; (c - i) > (c - newShip.length); i++) {
                this.board[r][c--].value = newShip.id;
            }
        };
    }
    receiveAttack (r, c) {

        //if water record miss
        if (this.board[r][c].value === 0){
            return this.board[r][c].value = 'X';
        }
        //if hit carrier record hit
        if (this.board[r][c].value === 'C'){
            this.ships[0].hit();
        }
        //if hit batteship record hit
        if (this.board[r][c].value === 'B'){
            this.ships[1].hit();
        }
        //if hit destoryer record hit
        if (this.board[r][c].value === 'D'){
            this.ships[2].hit();
        }
        //if hit submarine record hit
        if (this.board[r][c].value === 'S'){
            this.ships[3].hit();
        }
        //if hit submarine record hit
        if (this.board[r][c].value === 'P'){
            this.ships[4].hit();
        }
        //record hit to board
        return this.board[r][c].value = '!';
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

