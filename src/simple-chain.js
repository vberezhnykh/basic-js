const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    if (this.chain.length === 0) this.chain = `( ${(value)} )`;
    else this.chain += `~~( ${value} )`;
    return this;
  },
  removeLink(position) {
    let arr = this.chain.split('~~');
    if (typeof position !== 'number' || 
        position < 1 ||
        !Number.isInteger(position) ||
        arr.length < position) {
          this.finishChain();
          throw new Error("You can't remove incorrect link!");
        } 
    if (position === 1) arr.shift();
    else if (position === arr.length) arr.pop();
    else arr = [...arr.slice(0, position - 1), ...arr.slice(position)];
    this.chain = arr.join('~~');
    return this;
  },
  reverseChain() {
    const arr = this.chain.split('~~');
    this.chain = arr.reverse().join('~~');
    return this;
  },
  finishChain() {
    const chain = this.chain;
    this.chain = '';
    return chain;
  }
};

console.log(chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1)/* .reverseChain() */.finishChain());

module.exports = {
  chainMaker
};
