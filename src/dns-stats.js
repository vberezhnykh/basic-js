const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const  reversedDomains = domains.map(elem => elem.split('.').reverse());
  const dnsStats = {};
  reversedDomains.forEach(element => {
    let domain = '';
    for (let i = 0; i < element.length; i++) {
      domain = `${domain}.${element[i]}`
      dnsStats.hasOwnProperty(domain) ? dnsStats[domain] += 1 : dnsStats[domain] = 1;
    }
  })
  return dnsStats
}

module.exports = {
  getDNSStats
};
