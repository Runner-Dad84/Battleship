const gameboard = require ('./gameboard.js')

describe('gameboard', ()=> {
    let newboard;
    
    //testing on a 3x3 board
    beforeEach(() => {
        newboard = new gameboard(3,3);
    });

    test ('check value', () => {
        expect(newboard.board[0][0]).toBe(0);
    });
    test ('check value', () => {
        newboard.board[2][3] = 'X';
        expect(newboard.board[2][3]).toBe('X');
    });

})