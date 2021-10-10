const { expect }  = require('chai');
const { isSymmetric } = require('../05checkForSymmetry');

describe ('The isSymmetric fn', () => {
    it('Returns "false" for incorrect input', () =>{
        expect(isSymmetric('aif')).to.equal(false);
    });
    it('Returns "true" if the array is symmetric', () => {
        expect(isSymmetric([1,1])).to.equal(true);
    });
    it('Returns "false" if the array is non-symmetric', () => {
        expect(isSymmetric([1,2])).to.equal(false);
    });
    it('Returns "false" for mismatched input', () =>{
        expect(isSymmetric([1,'1'])).to.equal(false);
    });
    it('Returns "true" for empty array', () => {
        expect(isSymmetric([])).to.equal(true);
    });
});