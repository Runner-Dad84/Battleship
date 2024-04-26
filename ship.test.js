const ship = require ('./ship.js')

describe('generate a ship', ()=> {
    let newship;
    beforeEach(() => {
        newship = new ship;
    });

    test ('set length', () => {
        newship.length = 3;
        expect(newship.length).toBe(3);
    });
    
    test ('return sunk', () => {
        expect(newship.sunk).toBe(false);
    });

    test ('damage', ()=> {
        newship.hit();
        newship.hit();
        expect(newship.damage).toBe(2);
    });

    test ('damage', ()=> {
        newship.hit();
        newship.isSunk();
        expect(newship.sunk).toBe(true);
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