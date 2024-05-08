import { humanPlayer, compPlayer } from './player.js'

describe('create players', ()=> {
    const dave = new compPlayer('Dave', 'easy')
    const eddie = new humanPlayer('Eddie', 'easy')
    
        
    test ('make human player', () => {
        expect(dave.name).toBe('Dave');
        expect(dave.level).toBe('easy');
    });
    test ('make computer player', () => {
        expect(eddie.name).toBe('Eddie');
        expect(eddie.level).toBe('easy');
        expect(eddie.board.length).toBe(49);
    });

})