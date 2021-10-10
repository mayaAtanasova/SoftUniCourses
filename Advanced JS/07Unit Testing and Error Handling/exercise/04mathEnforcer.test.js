const { expect } = require ('chai');
const { mathEnforcer } = require ('../04mathEnforcer');

describe('The mathenforcer function tests', () => {
    describe('The add5 func', () => {
        it('Works with positive nums', () => {
            expect(mathEnforcer.addFive(3)).to.equal(8);
        });
        it('Works with negative nums', () => {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        });
        it('Works with positive floats', () => {
            expect(mathEnforcer.addFive(3.3)).to.be.closeTo(8.3, 0.01);
        });
        it('Returns undefined for incorrect input', () => {
            expect(mathEnforcer.addFive('a')).to.be.equal(undefined);
        });
    });
    describe('The subtractTen func', () => {
        it('Works with positive nums', () => {
            expect(mathEnforcer.subtractTen(3)).to.equal(-7);
        });
        it('Works with negative nums', () => {
            expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
        });
        it('Works with positive floats', () => {
            expect(mathEnforcer.subtractTen(0.3)).to.be.closeTo(-9.7, 0.01);
        });
        it('Returns undefined for incorrect input', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.equal(undefined);
        });
    });
    describe('The sum func', () => {
        it('Works with positive nums', () => {
            expect(mathEnforcer.sum(3, 5)).to.equal(8);
        });
        it('Works with negative nums', () => {
            expect(mathEnforcer.sum(-3, -5)).to.equal(-8);
        });
        it('Works with positive floats', () => {
            expect(mathEnforcer.sum(0.3, 0.5)).to.be.closeTo(0.8, 0.01);
        });
        it('Returns undefined for incorrect input', () => {
            expect(mathEnforcer.sum('a', 2)).to.be.equal(undefined);
            expect(mathEnforcer.sum(2, 'b')).to.be.equal(undefined);

        });
    });
});
