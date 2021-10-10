const { expect } = require ('chai');
const { sum } = require ('./04sumOfNrs');

describe('The sum function', () => {
    it('Sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('Sums two numbers', () => {
        expect(sum([1, 5])).to.equal(6);
    });
    it('Cannot sum other symbols', () => {
        expect(sum(['a', 'b'])).to.be.NaN;
    });
});