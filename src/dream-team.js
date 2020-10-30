const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let nameDreamTeam =[];
  
  members.forEach(element => {
    
    if (typeof(element) === 'string') {
      let firstLetter = element.trim().slice(0, 1);
      nameDreamTeam.push(firstLetter.toUpperCase());
    }

  });

  return nameDreamTeam.sort().join('');
};