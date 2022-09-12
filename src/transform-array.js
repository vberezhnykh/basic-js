const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      if (i + 1 < arr.length &&
        (arr[i + 1] === '--double-prev') || arr[i + 1] === '--discard-prev') i++ ;
    } else if (arr[i] === '--discard-prev') {
      i !== 0 ? resultArr.pop() : false;
    } else if (arr[i] === '--double-next') {
      ((i + 1) !== arr.length) ? resultArr.push(arr[i + 1]) : false;
    } else if (arr[i] === '--double-prev') {
      i !== 0 ? resultArr.push(arr[i - 1]) : false;
    } else { resultArr.push(arr[i]) }
  }
  return resultArr;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
