const { expect } = require('chai');
const { twoNumberSum } = require('../TwoNumberSum/twoSum');

// As far as testing goes this will be a first attempt lol

// Two Sum algorithm.
describe('# TWO NUMBER SUM:\n', () => {
  context('1. When passed in an empty array', () => {
    it('Returns []', () => {
      expect(twoNumberSum([], 0)).to.deep.equal([]);
    });
  });

  context('2. When passed in an array of length 1, [8]', () => {
    it('Returns []', () => {
      expect(twoNumberSum([8], 0)).to.deep.equal([]);
    });
  });

  context('3. When passed in an int array [3,1,5,8,6] and taget sum 9', () => {
    it('returns [8,1] or [1,8]', () => {
      expect(twoNumberSum([3, 1, 5, 8, 6], 9)).to.deep.equal([8, 1].sort());
    });
  });

  context('4. When passed in an int array [3,1,5,8,6] and taget sum 10', () => {
    it('returns empty array []', () => {
      expect(twoNumberSum([3, 1, 5, 8, 6], 10)).to.deep.equal([]);
    });
  });
});
