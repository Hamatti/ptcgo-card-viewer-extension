const assert = require('assert');
const { getSubsettedNumber } = require('../subset');

describe('Subsets', function () {
  describe('#getSubsettedNumber', () => {
    it('should return number as-is when it belongs to a regular set', () => {
      assert.equal(getSubsettedNumber('ROS', 12), '12');
    });

    describe('Lgendary Treasures (LTR)', () => {
      it('should return number as-is if not part of RC', () => {
        assert.equal(getSubsettedNumber('LTR', 15), '15');
      });

      it('should return a prefix and adjusted number for LTR RC', () => {
        assert.equal(getSubsettedNumber('LTR', 120), 'RC5');
      });
    })

    describe('Generations (GEN)', () => {
      it('should return number as-is if not part of RC', () => {
        assert.equal(getSubsettedNumber('GEN', 65), '65');
      });

      it('should return a prefix and adjusted number for GEN RC', () => {
        assert.equal(getSubsettedNumber('GEN', 120), 'RC20');
      });
    })

    describe('Shining Fates (SHF)', () => {
      it('should return number as-is if not part of Shiny Vault', () => {
        assert.equal(getSubsettedNumber('SHF', 70), '70');
      });

      it('should return a prefix and adjusted number for SHF SV', () => {
        assert.equal(getSubsettedNumber('SHF', 90), 'SV017');
      });

      it('should left pad to three digits with single-digit Shiny Vault', () => {
        assert.equal(getSubsettedNumber('SHF', 75), 'SV002');
      });
    })

    describe('Burning Shadows (BSR)', () => {
      it('should return number as-is if not part of Trainer gallery', () => {
        assert.equal(getSubsettedNumber('BRS', 70), '70');
      });

      it('should return a prefix and adjusted number for BRS TG', () => {
        assert.equal(getSubsettedNumber('BRS', 205), 'TG19');
      });

      it('should left pad to two digits with single-digit Trainer Gallery', () => {
        assert.equal(getSubsettedNumber('BRS', 190), 'TG04');
      });
    })

    describe('Astral Radiance (ASR)', () => {
      it('should return number as-is if not part of Trainer gallery', () => {
        assert.equal(getSubsettedNumber('ASR', 70), '70');
      });

      it('should return a prefix and adjusted number for BRS TG', () => {
        assert.equal(getSubsettedNumber('ASR', 230), 'TG14');
      });

      it('should left pad to two digits with single-digit Trainer Gallery', () => {
        assert.equal(getSubsettedNumber('ASR', 220), 'TG04');
      });
    })

    describe('Lost Origins (LOR)', () => {
      it('should return number as-is if not part of Trainer gallery', () => {
        assert.equal(getSubsettedNumber('LOR', 70), '70');
      });

      it('should return a prefix and adjusted number for BRS TG', () => {
        assert.equal(getSubsettedNumber('LOR', 231), 'TG14');
      });

      it('should left pad to two digits with single-digit Trainer Gallery', () => {
        assert.equal(getSubsettedNumber('LOR', 221), 'TG04');
      });
    })

    describe('Silver Tempest (SIT)', () => {
      it('should return number as-is if not part of Trainer gallery', () => {
        assert.equal(getSubsettedNumber('SIT', 70), '70');
      });

      it('should return a prefix and adjusted number for BRS TG', () => {
        assert.equal(getSubsettedNumber('SIT', 229), 'TG14');
      });

      it('should left pad to two digits with single-digit Trainer Gallery', () => {
        assert.equal(getSubsettedNumber('SIT', 219), 'TG04');
      });
    })

    describe('Sword and Shield Promos (PR-SW)', () => {
      it('should prefix correctly with the promo', () => {
        assert.equal(getSubsettedNumber('PR-SW', 70), 'SWSH070');
      });
      it('should prefix correctly with the promo, using three digit left pad', () => {
        assert.equal(getSubsettedNumber('PR-SW', 3), 'SWSH003');
      });
    })

    describe('Sun and Moon Promos (PR-SM)', () => {
      it('should prefix correctly with the promo', () => {
        assert.equal(getSubsettedNumber('PR-SM', 70), 'SM70');
      });
      it('should prefix correctly with the promo, using no left pad', () => {
        assert.equal(getSubsettedNumber('PR-SM', 3), 'SM3');
      });
    })

    describe('X & Y Promos (PR-XY)', () => {
      it('should prefix correctly with the promo', () => {
        assert.equal(getSubsettedNumber('PR-XY', 70), 'XY70');
      });
      it('should prefix correctly with the promo, using two digit left pad', () => {
        assert.equal(getSubsettedNumber('PR-XY', 3), 'XY03');
      });
    })

    describe('Black and White Promos (PR-BLW)', () => {
      it('should prefix correctly with the promo', () => {
        assert.equal(getSubsettedNumber('PR-BLW', 70), 'BW70');
      });
      it('should prefix correctly with the promo, using two digit left pad', () => {
        assert.equal(getSubsettedNumber('PR-BLW', 3), 'BW03');
      });
    })
  });
});
