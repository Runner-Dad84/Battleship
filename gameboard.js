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
    updateBoardSqVal (co, ro, val) {
        return this.board[co][ro] = val;
    }

  

}


let board1 = new gameboard(7, 7);
board1.board[1][0] = "Z"
//console.log(board1.board);
console.log(board1.board[1][0]);
console.log((lookUp('b', 0, board1)));





//module.exports = gameboard;