const chai = require('chai');
const expect = chai.expect;
const reverseList = require('../problem-5');

describe.only('Testing reverseList function', () => {
    it('Should return nothing when list is not passed', () => {
        let result = reverseList();
        expect(result).to.be.undefined;
    });
    it('Should return empty list when list empty', () => {
        let result = reverseList([]);
        expect(result).to.be.eql([]);
    });
    it('Should return same list when list has 1 element', () => {
        let result = reverseList([1]);
        expect(result).to.be.eql([1]);
    });
    it('Should return reverse of list when list has more than 1 element', () => {
        let result = reverseList([1, 2, 3]);
        expect(result).to.be.eql([3, 2, 1]);
    });

});