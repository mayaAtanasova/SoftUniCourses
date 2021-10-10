const { expect } = require('chai');
const { createCalculator } = require('../07addSubtract');

describe('The calculator is working since', () => {
    it('Returns an object', () => {
        expect(typeof createCalculator()).to.equal('object');
    });
    it('Has a property "add"', () => {
        expect(createCalculator().hasOwnProperty('add')).to.equal(true);
    });
    it('Has a property "subtract"', () => {
        expect(createCalculator().hasOwnProperty('subtract')).to.equal(true);
    });
    it('Has a property "get"', () => {
        expect(createCalculator().hasOwnProperty('get')).to.equal(true);
    });
    it('Can parse a number in add mode', () => {
        let newCalc = createCalculator();
        newCalc.add('1');
        expect(newCalc.get()).to.equal(1);
    });
    it('Can parse a number in subtract mode', () => {
        let newCalc = createCalculator();
        newCalc.subtract('1');
        expect(newCalc.get()).to.equal(-1);
    });
    it('Cannot be accessed from the outside', () => {
        let newCalc = createCalculator();
        expect(newCalc.value).to.equal(undefined);
    });
    it('Returns NaN trying to add string', () => {
        let newCalc = createCalculator();
        newCalc.add('1');
        expect(newCalc.get()).to.equal(1);
    });
});