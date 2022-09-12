const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members instanceof Array) {
    let result = '';
    newArr = members.map(name => (typeof name === 'string') ? name.replace(/\s+/g, '').toUpperCase().slice(0,1): false);
    newArr.sort().forEach(name => typeof name === 'string' ? result += name: false);
    return result;
  } else return false;
}

module.exports = {
  createDreamTeam
};
