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
    arr.push(value);
  }
  return arr;
};

// const newArrayFullOf2 = (value, numOfValue) => {
//   return new Array(numOfValue).fill(value);
// };

// console.log(newArrayFullOf(5, 3));

const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2);
  console.log(arr.splice(middle, 0, value));
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
