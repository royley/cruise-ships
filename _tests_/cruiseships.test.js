const Ship = require('../src/cruiseships.js');
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('Ship', () => {
    it('Creates a new instance of ship', () => {
        const newPort = new Port('Dover');
        const newItinerary = new Itinerary([newPort]);
        const newShip = new Ship(newItinerary);
        expect(newShip).toBeInstanceOf(Object);
    });

    it('Set a starting port', () => {
        const newPort = new Port('Dover');
        const newItinerary = new Itinerary([newPort]);
        const newShip = new Ship(newItinerary)
        expect(newShip.currentPort).toBe(newPort);
    });
    it('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const newItinerary = new Itinerary([dover, calais]);
        const newShip = new Ship(newItinerary);
        newShip.setSail();
        expect(newShip.currentPort).toBeFalsy();
        expect(newShip.previousPort).toBe(newShip.currentPort)
    })
    it('can dock at a new port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const newItinerary = new Itinerary([dover, calais]);
        const newShip = new Ship(newItinerary)
        newShip.setSail();
        newShip.dock()
        expect(newShip.currentPort).toEqual(calais)
    })

    it('cannot sail further than the its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary');
    });
});