/* A work in progress file for custom mapping for subsets like 
Trainer Gallery, Shiny Vault and Radiant Collections that PTCGO
offers a wrong number (like 145 instead of SV25) */

/** SETS WITH MINISETS
 * 
 * == BLACK AND WHITE SETS ==
 * LTR => 115 + RC1 -> RC25 (Meloetta-EX LTR 140 => 140-115 = RC25) : no padding
 * 
 * == X & Y SETS ==
 * GEN => 83 + RC1 -> RC32 (Sylveon-EX GEN 132 => 132-100 = RC32, RC numbers start at 101)
 * 
 * == SWSH SETS ==
 * 
 * SHF => 73 + SV001 -> SV122 (SV padded with zeroes to three digits)
 * BRS => 186 + TG01 -> TG30 (TG padded with zeroes to two digits; starts from 187 )
 * ARS => 217 + TG01 -> TG30 (TG padded with zeroes to two digits; starts from 218 )
 * 
 * == PROMOS ==
 * PR-SW 20 => PR-SW SWSH020
 * PR-SM 21 => PR-SW SM21
 * PR-XY 05 => PR-XY XY05
 * PR-BLW 01 => PR-BLW BW01 
 */

const subsets = {
    'LTR': { total: 115, prefix: 'RC', leftPad: 0 },
    'GEN': { total: 100, prefix: 'RC', leftPad: 0 },
    'SHF': { total: 73, prefix: 'SV', leftPad: 3 },
    'BRS': { total: 186, prefix: 'TG', leftPad: 2 },
    'ASR': { total: 216, prefix: 'TG', leftPad: 2 },
    'PR-SW': { total: 0, prefix: 'SWSH', leftPad: 3 },
    'PR-SM': { total: 0, prefix: 'SM', leftPad: 0 },
    'PR-XY': { total: 0, prefix: 'XY', leftPad: 2 },
    'PR-BLW': { total: 0, prefix: 'BW', leftPad: 2 },
}

function getSubsettedNumber(ptcgoCode, number) {
    if (subsets.hasOwnProperty(ptcgoCode)) {
        const subset = subsets[ptcgoCode];
        let {total, prefix, leftPad} = subset;
        if (number <= total) {
            return number.toString();
        }
        let newNumber = number - total;
        return `${prefix}${newNumber.toString().padStart(leftPad, '0')}`
    } else {
        return number.toString();
    }
}

// // /** CLI TESTING */
// const assert = require('node:assert/strict');
// assert.equal(getSubsettedNumber('LTR', 20), '20');
// assert.equal(getSubsettedNumber('LTR', 130), 'RC15');
// assert.equal(getSubsettedNumber('PR-SW', 20), 'SWSH020');
// assert.equal(getSubsettedNumber('ASR', 220), 'TG04');

module.exports = {
    getSubsettedNumber
}