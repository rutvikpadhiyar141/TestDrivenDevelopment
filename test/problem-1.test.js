const chai = require('chai');
const expect = chai.expect;
const lastElement = require('../problem-1');

describe('Testing lastElement function', () => {
    it('should return nothing when no list is passed', () => {
        let result = lastElement();
        expect(result).to.be.undefined;
    });
    it('should return nothing when list is empty', () => {
        let result = lastElement([]);
        expect(result).to.be.undefined;
    });
    it('Should return first element when list has 1 element', () => {
        let result = lastElement([3]);
        expect(result).to.be.eql(3);
    });
    it('Should return lat element when list has more than 1 element', () => {
        let result = lastElement([3, 4, 5]);
        expect(result).to.be.eql(5);
    });
});