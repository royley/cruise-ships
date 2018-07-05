const Port = require('../src/port.js');

describe('Port', () => {
    it('Creates a new instance of port', () => {
      expect(new Port).toBeInstanceOf(Object);
    });

    it('Checks that the new Port object has a name property', () => {
        const newPort = new Port()
        expect(newPort.name).toBeTruthy
    })
})