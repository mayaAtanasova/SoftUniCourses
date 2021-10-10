const { expect } = require('chai');
const { rgbToHexColor } = require('./06rgbToHex');

describe('The function RGB to HEX Color', () => {
    it('Correctly tests the RED color for being an integer', () =>{
        expect(rgbToHexColor(1.2, 3, 4)).to.equal(undefined);
    });
    it('Correctly tests the GREEN color for being an integer', () =>{
        expect(rgbToHexColor(1, 3.1, 4)).to.equal(undefined);
    });
    it('Correctly tests the BLUE color for being an integer', () =>{
        expect(rgbToHexColor(2, 3, 4.1)).to.equal(undefined);
    });
    it('Correctly tests the RED color is >0', () =>{
        expect(rgbToHexColor(-2, 3, 4)).to.equal(undefined);
    });
    it('Correctly tests the GREEN color is >0', () =>{
        expect(rgbToHexColor(3, -2, 4)).to.equal(undefined);
    });
    it('Correctly tests the BLUE color is >0', () =>{
        expect(rgbToHexColor(2, 3, -400)).to.equal(undefined);
    });
    it('Correctly tests the RED color is <=255', () =>{
        expect(rgbToHexColor(256, 3, 4)).to.equal(undefined);
    });
    it('Correctly tests the GREEN color is <=255', () =>{
        expect(rgbToHexColor(2, 2000, 4)).to.equal(undefined);
    });
    it('Correctly tests the BLUE color is <=255', () =>{
        expect(rgbToHexColor(2, 3, 400)).to.equal(undefined);
    });
    it('Returns the color in hex as a string', () =>{
        expect(typeof(rgbToHexColor(255, 255, 255))).to.equal('string');
    });
    it('Returns white for 255,255,255', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });
    it('Returns black for 0,0,0', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it('Returns a string beginning with a #', () => {
        expect(rgbToHexColor(0,0,0).charAt(0)).to.equal('#');
    });
});