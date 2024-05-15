//const humanPlayer = require ('./player.js')
//const compPlayer = require ('./player.js')
import { humanPlayer, compPlayer } from '../modules/player.js'

describe('create players', ()=> {
    const dave = new compPlayer('Dave', 'easy')
    const eddie = new humanPlayer('Eddie', 'easy')
    
        
    test ('make computer player', () => {
        expect(dave.name).toBe('Dave');
        expect(dave.level).toBe('easy');
    });
    test ('make human player', () => {
        expect(eddie.name).toBe('Eddie');
        expect(eddie.wins).toBe(0);
    });

    test ('set board value on computer', () => {
        dave.comp.board[4][6] = '!';
        expect(dave.comp.board[4][6]).toBe('!');
        
    })

})