const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '',
}) {
  function createString(string, separat, repeatTime) {
      let readyString = (string + separat).repeat(repeatTime);
      if (readyString.endsWith(separat)) {
        readyString = readyString.slice(0, readyString.length - separat.length);
      }
      return readyString;
  }    
  let mainString = createString(
      str + createString(addition, additionSeparator, additionRepeatTimes), 
      separator, 
      repeatTimes
  );
  return mainString;
};
 

/* 
function repeater(str, options) {

}

console.log(repeater(str, options)) */