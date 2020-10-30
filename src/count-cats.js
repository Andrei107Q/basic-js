const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numberOfCats = 0;
  matrix.forEach(element => {
    element.forEach(i => {
      if (i === '^^') numberOfCats++;
    })  
  });
  return numberOfCats
};