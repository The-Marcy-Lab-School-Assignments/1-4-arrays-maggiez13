const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    console.log(arr.unshift(value));
  } else {
    console.log(arr.push(value));
  }
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

// console.log(reverseString("hello"));

const newArrayFullOf = (value, numOfValue) => {
  let arr = [];
  for (let i = 0; i < numOfValue; i++) {
    console.log(arr.push(value));
  }
  return arr;
  // console.log(array.fill(value));
};

console.log(newArrayFullOf(5, 3));

const insertIntoMiddle = () => {
};

const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
