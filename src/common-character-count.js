const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const stringOneSym = {};
  const stringTwoSym = {};
  for (let char of s1) {
    (stringOneSym.hasOwnProperty(char)) ? stringOneSym[char] += 1 : stringOneSym[char] = 1;
  }
  for (let char of s2) {
    (stringTwoSym.hasOwnProperty(char)) ? stringTwoSym[char] += 1 : stringTwoSym[char] = 1;
  }
  let count = 0;
  for (let key in stringOneSym) {
    if (stringTwoSym[key] !== undefined) stringOneSym[key] < stringTwoSym[key] ? count+= stringOneSym[key] : count+= stringTwoSym[key];
  }
  return count;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'))

module.exports = {
  getCommonCharacterCount
};
