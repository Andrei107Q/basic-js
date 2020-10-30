const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity){
  if (sampleActivity !== +sampleActivity || +sampleActivity > MODERN_ACTIVITY || typeof(sampleActivity) === 'number') return false;
  
  const NumSampleActivity = +sampleActivity;
  const k = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(MODERN_ACTIVITY / NumSampleActivity) / k );
}