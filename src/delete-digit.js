const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = parseInt(n.toString().slice(1));
  for (let i = 1; i < n.toString().length; i++) {
    const numToCheck = parseInt(n.toString().slice(0, i) + n.toString().slice(i + 1, n.toString().length));
    numToCheck > maxNum ? maxNum = numToCheck : false;
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
