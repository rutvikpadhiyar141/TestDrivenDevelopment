const chai = require('chai');
const expect = chai.expect;
const elementAtIndexK = require('../problem-3');

describe('Testing elementAtIndexK function', () => {
    it('Should return nothing when list is not passed', () => {
        let result = elementAtIndexK();
        expect(result).to.be.undefined;
    });
    it('Should return nothing when list is empty', () => {
        let result = elementAtIndexK([]);
        expect(result).to.be.undefined;
    });
    it('Should return nothing k is greater than list max index', () => {
        let result = elementAtIndexK([2, 3, 4], 4);
        expect(result).to.be.undefined;
    });
    it('Should return nothing k is negative', () => {
        let result = elementAtIndexK([2, 3, 4], -4);
        expect(result).to.be.undefined;
    });
    it('Should return Kth element otherwise', () => {
        let result = elementAtIndexK([2, 3, 4, 5, 6, 7], 4);
        expect(result).to.be.eql(6);
    });

});