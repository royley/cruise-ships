const Ship = require('../src/cruiseships.js');
const Port = require('../src/port.js')

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
        newShip.assignCaptain('Birdseye')
        expect(newShip.captain).toBe('Birdseye');
    });
    it('Set a starting port', () => {
        const newPort = new Port('Dover')
        const newShip = new Ship(newPort)
        expect(newShip.currentPort).toBe(newPort);
    });
    it('can set sail', () => {
        const newPort = new Port('Dover')
        const newShip = new Ship(newPort);
        newShip.setSail();
        expect(newShip.currentPort).toBeFalsy();
    })
    it('can dock at a new port', () => {
        const dover = new Port('Dover')
        const ship = new Ship(dover)
        const calais = new Port('Calais')
        ship.dock(calais)
        expect(ship.currentPort).toBe(calais)
    })
});