//to access square on board us me board.board[r][c]

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
                rows.push(0);
            }
            gameBoard.push(rows);
        }
        return gameBoard;
    }
    
}


module.exports = gameboard