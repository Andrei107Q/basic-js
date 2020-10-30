const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator { 
  calculateDepth(arr) {
    let answer = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) {
          answer = Math.max(this.calculateDepth(element), answer);
      };
    });
    return answer + 1;
  };
};
