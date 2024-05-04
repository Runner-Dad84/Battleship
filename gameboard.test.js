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

    test('set submarine east', () => {
        board3.placeNewShip('submarine', 1, 1, 'east')
        expect(board3.board[1][1]).toBe('S');
        expect(board3.board[1][2]).toBe('S');
        expect(board3.board[1][3]).toBe('S');
        expect(board3.board[1][4]).toBe(0);
    });

    test('set battleship north', () => {
        board3.placeNewShip('battleship', 0, 0, 'north')
        expect(board3.board[0][0]).toBe('B');
        expect(board3.board[1][0]).toBe('B');
        expect(board3.board[2][0]).toBe('B');
        expect(board3.board[3][0]).toBe('B');
        expect(board3.board[4][0]).toBe(0);
    });

    test('set carrier west', () => {
        board3.placeNewShip('carrier', 2, 6, 'west')
        expect(board3.board[2][6]).toBe('C');
        expect(board3.board[2][5]).toBe('C');
        expect(board3.board[2][4]).toBe('C');
        expect(board3.board[2][3]).toBe('C');
        expect(board3.board[2][2]).toBe('C');
        expect(board3.board[2][1]).toBe(0);
    });

    test('set destroyer south', () => {
        board3.placeNewShip('destroyer', 5, 2, 'south')
        expect(board3.board[6][2]).toBe(0);
        expect(board3.board[5][2]).toBe('D');
        expect(board3.board[4][2]).toBe('D');
        expect(board3.board[3][2]).toBe('D');
        expect(board3.board[2][2]).toBe(0);
    });

    test('attempt to start off board', () => {
        expect(board3.placeNewShip('destroyer', 7, 2, 'south')).toBe(TypeError);
    });
    test('attempt to start off board', () => {
        expect(board3.placeNewShip('destroyer', 5, 1, 'north')).toBe(TypeError);
    });

    test('attempt place ship on ship', () => {
        board3.placeNewShip('carrier', 1, 1, 'north')
        expect(board3.placeNewShip('destroyer', 1, 1, 'north')).toBe(TypeError);
    });

    test('fire on board', () => {
        board3.receiveAttack(3,3)
        expect(board3.board[3][3]).toBe('!');
    });

    test('fire off board', () => {
        expect(board3.receiveAttack(8,9)).toBe(TypeError);
    });

    test('fire on a ship', () => {
        board3.placeNewShip('carrier', 1, 1, 'north')
        expect(board3.receiveAttack(3,3)).toBe('!');
    });
})

describe('gameboard', ()=> {
    let newBoard1;
    
    beforeEach(() => {
        newBoard1 = new gameboard(7,7);
    });

    test('gameboard stores ship', () => {

        newBoard1.placeNewShip('submarine', 1, 1, 'east')
        newBoard1.placeNewShip('patrol', 2, 2, 'north')
        expect(newBoard1.ships.length = 2);
        expect(newBoard1.ships[0].type = 'submarine');
      
    });
})