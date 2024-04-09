/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  while (arr.length > 0) {
    arr.pop();
  }
  return arr; 
};

console.log(clearArr([1, 2, 3, 4, 5]))

const getFirstItem = (array) => {
  return array.shift();
};

module.exports = {
  clearArr,
  getFirstItem,
};
