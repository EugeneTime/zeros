module.exports = function getZerosCount(number) {
  let zeros = 0;
  let count = number;
  
  while (count = Math.floor(count / 5)) zeros += count;
  return zeros;
};