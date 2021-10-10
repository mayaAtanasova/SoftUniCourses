const { expect } = require ('chai');
const { isOddOrEven } = require('./02evenOrOdd');

describe ('The function evaluates the string length', () => {
    it('Returns undefined for non-string input', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });
    it('Returns odd for odd-length strings', () =>{
        expect(isOddOrEven('a')).to.equal('odd');
    });
    it('Returns even for even-length strings', () =>{
        expect(isOddOrEven('ab')).to.equal('even');
    });
});