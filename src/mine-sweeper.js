const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  let counter = 0;
  for (i = 0; i < matrix.length; i++) {
    let topRow;
    let bottomRow;
    const currentRow = matrix[i];
    if (i === 0) {
      topRow = undefined;
      bottomRow = matrix[1];
    } else if (i === 1) {
      topRow = matrix[0];
      bottomRow = matrix[2];
    } else {
      topRow = matrix[1];
      bottomRow = undefined
    } 
    let subResult = [];
    for (n = 0; n < currentRow.length; n++) {
      currentRow[n - 1] ? counter++ 
      : currentRow[n + 1] ? counter++ 
      : false;

      if (topRow !== undefined) {
        topRow[n - 1] ? counter++
        : topRow[n] ? counter++
        : topRow[n + 1] ? counter++
        : false;
      }
      if (bottomRow !== undefined) {
        bottomRow[n - 1] ? counter++ 
        : bottomRow[n] ? counter++
        : bottomRow[n + 1] ? counter++
        : false;
      }
      subResult.push(counter);
      counter = 0;
      if (subResult.length === 3) result.push(subResult);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
