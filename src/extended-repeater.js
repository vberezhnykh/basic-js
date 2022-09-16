const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '',
      repeatTimes = 1,
      separator = '+',
      addition = '';
      additionSeparator = '|',
      additionRepeatTimes = 1;
      

  for (let key in options) {
    if (key === 'repeatTimes') repeatTimes = options[key];
    else if (key === 'separator') separator = options[key];
    else if (key === 'addition') addition = options[key];
    else if (key === 'additionRepeatTimes') additionRepeatTimes = options[key];
    else if (key === 'additionSeparator') additionSeparator = options[key];
  }

  let addStr = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    ((additionRepeatTimes - 1) === i) ? addStr += `${addition}` : addStr += `${addition}${additionSeparator}`;
  }

  for (let i = 0; i < repeatTimes; i++) {
    let subStr = '';
    ((repeatTimes - 1) === i) ? subStr = `${str}${addStr}` : subStr = `${str}${addStr}${separator}`;
    result += subStr;
  }
  return result;
}

module.exports = {
  repeater
};
