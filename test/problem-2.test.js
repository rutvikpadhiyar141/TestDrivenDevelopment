const chai = require('chai');
const expect = chai.expect;
const lastButOneElement = require('../problem-2');

describe('Testing lastButOneElement function', () => {
    it('Should return nothing when list is not passed', () => {
        let result = lastButOneElement();
        expect(result).to.be.undefined;
    });
    it('Should return nothing when list is empty', () => {
        let result = lastButOneElement([]);
        expect(result).to.be.undefined;
    });
    it('Should return nothing when list has 1 element', () => {
        let result = lastButOneElement();
        expect(result).to.be.undefined;
    });
    it('Should return first element when list has 2 elements', () => {
        let result = lastButOneElement([3, 5]);
        expect(result).to.be.eql(3);
    });
    it('Should return second last element when list has more than 2 elements', () => {
        let result = lastButOneElement([3, 5, 7]);
        expect(result).to.be.eql(5);
    });
});