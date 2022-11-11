/*
 * There are a few sets that have a differently numbered subset.
 * PTCGO uses its own numbering for those, one that is not consistent
 * with printed cards nor the API so we need to convert those to right
 * format ourselves.
 */

const subsets = {
  LTR: { total: 115, prefix: "RC", leftPad: 0 },
  GEN: { total: 100, prefix: "RC", leftPad: 0 },
  SHF: { total: 73, prefix: "SV", leftPad: 3 },
  BRS: { total: 186, prefix: "TG", leftPad: 2 },
  ASR: { total: 216, prefix: "TG", leftPad: 2 },
  LOR: { total: 217, prefix: "TG", leftPad: 2 },
  SIT: { total: 215, prefix: "TG", leftPad: 2 },
  "PR-SW": { total: 0, prefix: "SWSH", leftPad: 3 },
  "PR-SM": { total: 0, prefix: "SM", leftPad: 2 },
  "PR-XY": { total: 0, prefix: "XY", leftPad: 2 },
  "PR-BLW": { total: 0, prefix: "BW", leftPad: 2 },
};

function getSubsettedNumber(ptcgoCode, number) {
  if (subsets.hasOwnProperty(ptcgoCode)) {
    const subset = subsets[ptcgoCode];
    let { total, prefix, leftPad } = subset;
    if (number <= total) {
      return number.toString();
    }
    let newNumber = number - total;
    return `${prefix}${newNumber.toString().padStart(leftPad, "0")}`;
  } else {
    return number.toString();
  }
}

/* Only export if we're running tests with Node */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getSubsettedNumber,
  };
}
