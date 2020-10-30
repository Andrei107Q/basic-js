const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position !== +position || position !== Math.floor(position) || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice((position-1), 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let res = this.chain.slice();
    this.chain = [];
    return res.join('~~');
  }
};

module.exports = chainMaker;
