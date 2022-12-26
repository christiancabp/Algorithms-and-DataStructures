const { expect } = require('chai');
const { twoNumberSum } = require('../TwoNumberSum/twoSum');

// As far as testing goes this will be a first attempt lol

// Two Sum algorithm.
describe('# TWO NUMBER SUM:', () => {
  context('When passed in an empty array', () => {
    it('Works for empty array', () => {
      expect(twoNumberSum([], 0)).to.deep.equal([]);
    });
  });
});
