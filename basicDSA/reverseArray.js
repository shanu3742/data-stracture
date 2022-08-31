const reverseArray = (value) => {
  for (let i = 0; i < value.length / 2; i++) {
    let temp = value[i];
    value[i] = value[value.length - 1 - i];
    value[value.length - 1 - i] = temp;
  }
  return value;
};

console.log(reverseArray([2, 4, 7, 1, 2, 11, 19]));

/**
 * reverse an array using recursive function
 *
 */
const reverseArrayRecursively = (value, count) => {
  if (count < value.length / 2) {
    let temp = value[count];
    value[count] = value[value.length - 1 - count];
    value[value.length - 1 - count] = temp;
    count = count + 1;
    return reverseArrayRecursively(value, count);
  }
  return value;
};
console.log(reverseArrayRecursively([11, 32, 43, 19], 0));
