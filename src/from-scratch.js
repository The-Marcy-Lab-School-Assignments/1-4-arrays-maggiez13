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
  let midPoint = Math.floor(arr.length / 2);
  console.log(arr.splice(midPoint, 0, value));
};

const deleteFromMiddle = (arr, value) => {
  let midPoint = Math.floor(arr.length / 2);
  console.log(arr.splice(midPoint, 1));
};

const isRightIndex = (arr, value, index) => {
  if (value === arr[index]) {
    return true; 
  } else {
    return false; 
  }
};
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(isRightIndex(arr, 'a', 0));


const roundAllNumsDown = (arr) => {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(Math.floor(arr[i]));
  }
  return newArray;
};

// console.log(roundAllNumsDown([1.1, 2.2, 3.3])); 
// console.log(roundAllNumsDown([5.9, -7.9, 12.9])); 


const getAllYCoordinates = (arrOfCoords) => {
  let newArray = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArray.push(arrOfCoords[0][1]);
  }
  return newArray;
};

console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]));

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
