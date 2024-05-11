//const ship = require ('./ship.js')
import ship from './ship.js';

describe('generate a ship', ()=> {
    let newship;
    beforeEach(() => {
        newship = new ship('submarine');
    });
    
    test ('return sunk', () => {
        expect(newship.sunk).toBe(false);
    });

    test ('damage', ()=> {
        newship.hit();
        newship.hit();
        expect(newship.damage).toBe(2);
    });

    test ('ship sunk', ()=> {
        for (let i = 0; i < 3; i++){
            newship.hit();
        }
        newship.isSunk();
        expect(newship.sunk).toBe(true);
    });

    test ('ship type and length', ()=> {
        expect(newship.length).toBe(3);
    }); 
})









/*
jest.mock('./ship')
it('calls instance of ship', ()=> {
    expect(hits).not.toHaveBeenCalled();
    const patrol = new ship();
    expect(ship).toHaveBeenCalledTimes(1);
    
    const hits = 0;
    patrol.hits();

    const mockShipInstance = ship.mock.instance[0];
    const mockHits = mockShipInstance.hits();
    
    expect(mockHits).toHaveBeenCalledWith(hits);
    expect(mockHits).toHaveBeenCalledTimes(1);
});
*/