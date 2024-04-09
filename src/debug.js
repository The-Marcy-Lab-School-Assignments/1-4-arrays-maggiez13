/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  while (arr.length > 0) {
    arr.pop();
  }
  return arr; 
};

// console.log(clearArr([1, 2, 3, 4, 5]))

const getFirstItem = (array) => {
  // return array[0];
  const copy = [...array];
  return copy.shift();
}; 

console.log(getFirstItem([1, 2, 3, 4, 5]));
console.log(getFirstItem(['a', 'b', 'c']));


module.exports = {
  clearArr,
  getFirstItem,
};
