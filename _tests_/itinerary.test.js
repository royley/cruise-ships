const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('Itinerary', () => {
    it('Creates a new instance of itinerary', () => {
      expect(new Itinerary).toBeInstanceOf(Object);
    });

    it('can have multiple ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        
        expect(itinerary.ports).toEqual([dover, calais]);
    })
})
