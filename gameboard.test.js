//const gameboard = require ('./gameboard.js')
import { gameboard, lookUp } from './gameboard.js'


describe('gameboard', ()=> {
    let newboard;
    
    //testing on a 3x3 board
    beforeEach(() => {
        newboard = new gameboard(3,3);
    });

    test ('check value 1', () => {
        expect(newboard.board[0][0]).toBe(0);
    });
    test ('check value 2', () => {
        newboard.board[2][3] = 'X';
        expect(newboard.board[2][3]).toBe('X');
    });

})

describe('gameboard 2', ()=> {
    let testBoard;
    
    beforeEach(() => {
        testBoard = new gameboard(7,7);
    });
    test ('look up value Y', () => {
        testBoard.board[0][0] = 'Y';
        expect(lookUp('a', 0, testBoard)).toBe('Y');
    });

    test ('look up value Z', () => {
        testBoard.board[1][3] = 'Z';
        expect(lookUp('b', 3, testBoard)).toBe('Z');
       
    });
})

describe('gameboard', ()=> {
    let board3;
    
    beforeEach(() => {
        board3 = new gameboard(7,7);
    });

    test ('change value', () => {
        board3.updateBoardSqVal(2, 4, 'X');
        expect(board3.board[2][4]).toBe('X');
    });
})