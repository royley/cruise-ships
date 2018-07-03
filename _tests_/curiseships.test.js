const Ship = require('../src/cruiseships.js');

describe('Ship', () => {
    it('Creates a new instance of ship', () => {
      expect(new Ship).toBeInstanceOf(Object);
    });

    it('Adds passengers waiting to number of passengers aboard', () => {
        const newShip = new Ship()
        newShip.boarding(5)
        expect(newShip.noOfPassengersAboard).toBe(5);
    });
    it('Assigns captain to ship', () => {
        const newShip = new Ship()
        newShip.assignCaptain("Birdseye")
        expect(newShip.captain).toBe("Birdseye");
    });
    it('Set a starting port', () => {
        const newShip = new Ship("Dover")
        expect(newShip.startingPort).toBe("Dover");
    });
    it('can set sail', () => {
        const newShip = new Ship('Dover');
        newShip.setSail();
        expect(newShip.startingPort).toBeFalsy();
    })
});