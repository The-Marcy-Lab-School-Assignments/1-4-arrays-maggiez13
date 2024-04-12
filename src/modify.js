/** FEEDBACK: Great job! JUst make sure to remove any commented out code and console.logs before submitting! */
const uppercaseAll = (... words) => {
  // console.log(words);
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    const upCase = words[i].toUpperCase(); 
    // .toUpperCase() are for strings 
    // words is an array 
      // [i] would allow for strings in the array 
    newArray.push(upCase);
    // newArray.push(words[i].toUpperCase());
  }
  return newArray;
};

console.log(uppercaseAll("hi", "hello"))

// const uppercaseAll = (word1, word2, word3) => {
//   return [
//     word1.toUpperCase(),
//     word2.toUpperCase(),
//     word3.toUpperCase(),
//   ];
// };

const destructureCoordinates = (coordinates) => {
  // just removed const declaration ?
  // const [x, y] = [coordinates]
  /** FEEDBACK: Here you could just set it equal to coordinates. */
  const [x, y] = [coordinates[0], coordinates[1]];
  // x = coordinates[0];
  // y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
