const reverseArray = (value) => {
  for (let i = 0; i < value.length / 2; i++) {
    let temp = value[i];
    value[i] = value[value.length - 1 - i];
    value[value.length - 1 - i] = temp;
  }
  return value;
};

console.log(reverseArray([2, 4, 7, 1, 2, 11, 19]));
