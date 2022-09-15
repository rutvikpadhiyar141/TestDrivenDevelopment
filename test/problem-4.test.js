const chai = require('chai');
const expect = chai.expect;
const ElementsInList = require('../problem-4');

describe('Testing ElementsInList function', () => {
    it('Should return nothing when list is not passed', () => {
        let result = ElementsInList();
        expect(result).to.be.undefined;
    });
    it('Should return 0 when list is empty', () => {
        let result = ElementsInList([]);
        expect(result).to.be.eql(0);
    });
    it('Should return number of elements when list has elements', () => {
        let result = ElementsInList([1, 2, 3]);
        expect(result).to.be.eql(3);
    });


});