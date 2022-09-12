const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  else if (!(date instanceof Date)) throw new Error ('Invalid date!');
  try {
    date.getTime()
  } catch (e) {
    throw new Error ('Invalid date!')
  }
    const month = date.getMonth();
    return ((month >= 0 && month <= 1) || month === 11) ? 'winter'
    : (month >= 2 & month <= 4) ? 'spring'
    : (month >= 5 && month <= 7) ? 'summer'
    : 'fall';
}

module.exports = {
  getSeason
};
