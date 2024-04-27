const ship = require ('./ship.js')


//to access square on board us me board.board[r][c]

//utility: converts column letter to number for lookUp
function colConvert (letter){
    const alphabet = [...Array(7)].map((_,i) => String.fromCharCode(i +97));
        const item = (el) => el === letter;
        const num = alphabet.findIndex(item);
        return num
};
//enter board as variablename.board, returns the value of the board
function lookUp (Let, Num, board){
    const c = Num;
    const r = colConvert(Let);
    const target = board.find((el) => board[c, r]);
    return target[c];
}

class gameboard {
    constructor (row, col) {
        this.row = row;
        this.col = col;
        this.board = this.createBoard();
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
    shipLocation(type, origin, dir) {
        let newShip = new ship(type);
        return newShip;
    }




}

let board1 = new gameboard(7, 7);
board1.board[0][6] = "X";

console.log(lookUp('a', 6, board1.board));


module.exports = gameboard