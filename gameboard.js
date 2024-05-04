const ship = require ('./ship.js')


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
        if (this.checkOnBoard(col, row) === false){
            return TypeError;
        }
        //logic to change ship hit
        if (this.board[col][row] === 'C'){
            
        }


        return this.board[col][row] = '!';
    }
}



/*
let board1 = new gameboard(7, 7);
board1.placeNewShip('patrol', 3, 1, 'north');
board1.placeNewShip('submarine', 0, 0, 'east');

board1.board[0][1] = 'A';
board1.board[0][2] = 'A';
board1.board[0][3] = 'A';

board1.board[2][1] = 'B';
board1.board[3][1] = 'B';
board1.board[4][1] = 'B';

console.log(board1.board);

//console.log(board1.board[1][0]);
//console.log((lookUp('b', 0, board1)));
*/




// don't use -- module.exports = gameboard;