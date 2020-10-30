const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error;

  let newArr = [];
  
  for(let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next':
        if(i + 1 < arr.length) {
          ++i;
          if(arr[i + 1] == '--double-prev' || arr[i + 1] == '--discard-prev')
            ++i;                                                              
          break;
        }
      case '--double-next':
        if(i + 1 < arr.length) {
          newArr.push(arr[i + 1]); 
        } 
        break;
      case '--discard-prev':
        if(newArr.length) {
          newArr.pop(); 
        }
        break;
      case '--double-prev':
        if(newArr.length) {
          newArr.push(newArr[newArr.length - 1]); 
        }
        break;
      default:
        newArr.push(arr[i]); break;
    };
  };
  return newArr;
};
