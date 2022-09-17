const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minusOneIndex = [];
  let result = new Array(arr.length);
  arr.findIndex((element, index) => {
    if (element === -1) minusOneIndex.push(index);
  });
  sortedArr = arr.sort((a, b) => a - b).slice(minusOneIndex.length);
  for (i = 0; i < minusOneIndex.length; i++) result[minusOneIndex[i]] = -1;
  for (i = 0; i < result.length; i++) {
    if (result[i] === undefined) {
      result[i] = sortedArr[0];
      sortedArr.shift();
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
