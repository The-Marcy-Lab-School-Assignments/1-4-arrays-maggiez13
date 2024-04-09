const uppercaseAll = (... words) => {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    const upCase = words.toUpperCase; 
    console.log(newArray.push(upCase));
  }
  return newArray;
};

// const uppercaseAll = (word1, word2, word3) => {
//   return [
//     word1.toUpperCase(),
//     word2.toUpperCase(),
//     word3.toUpperCase(),
//   ];
// };

const destructureCoordinates = (coordinates) => {
  // just removed const declaration
  x = coordinates[0];
  y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
