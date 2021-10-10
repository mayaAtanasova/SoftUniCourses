const { expect } = require('chai');
const { lookupChar } = require('./03charLookup');

describe('The function finds a char in a string correctly when', () => {
    it('Returns undefined when not getting a string as first argument', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it('Returns undefined when not getting an integer as second argument', () => {
        expect(lookupChar('abc', 1.1)).to.equal(undefined);
    });
    it('Returns undefined for when index out of bounds', () => {
        expect(lookupChar('abc', 30)).to.equal('Incorrect index');
        expect(lookupChar('abc', -1)).to.equal('Incorrect index');

    });
    it('Returns the right character for correct input', () => {
        expect(lookupChar('abc', 1)).to.equal('b');
    });
});