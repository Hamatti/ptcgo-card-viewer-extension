const  assert = require('assert');
const { getSubsettedNumber } = require('../setmap');

describe('Subsets', function () {
  describe('#getSubsettedNumber', function () {
    it('should return number as-is when it belongs to a regular set', () => {
      assert.equal(getSubsettedNumber('ROS', 12), '12');
    });

    it('should return number as-is when it belongs to the main set of a set with subset', () => {
        assert.equal(getSubsettedNumber('BRS', 10), '10')
    })

    it('should return a prefix and adjusted number for LTR RC', () => {
        assert.equal(getSubsettedNumber('LTR', 120), 'RC5')
    })
  });
});
