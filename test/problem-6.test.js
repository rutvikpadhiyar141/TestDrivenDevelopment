const chai = require('chai');
const expect = chai.expect;
const isPelindrome = require('../problem-6');

describe('Testing isPelindrome function', () => {
    it('Should return nothing when list is not passed', () => {
        let result = isPelindrome();
        expect(result).to.be.undefined;
    });
    it('Should return true when list is empty', () => {
        let result = isPelindrome([]);
        expect(result).to.be.true;
    });
    it('Should return true when list has 1 element', () => {
        let result = isPelindrome([1]);
        expect(result).to.be.true;
    });
    it('Should return true if list is pelindrome when list has more than 1 elements', () => {
        let result = isPelindrome([1, 2, 3, 2, 1]);
        expect(result).to.be.true;
    });
    it('Should return false if list is not pelindrome when list has more than 1 elements', () => {
        let result = isPelindrome([1, 2, 3, 4, 5]);
        expect(result).to.be.false;
    });
});