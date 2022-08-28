let array = [20, 10, -29, 30, 100, -60, 800, -90, 1900];

const findMinAndMax = (a) => {
  let min = a[0];
  let max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (max < a[i]) {
      max = a[i];
    } else {
      min = a[i];
    }
  }
  return `minimum number is :${min} and maximum number is :${max}`;
};
console.log(findMinAndMax(array));

/**|
 * find  max and min using recursive function
 */
let findMinAndMaxRecursively = (a, min, max, count) => {
  if (count >= a.length - 1) {
    return `minimum number is :${min} and maximum number is :${max}`;
  }
  if (count < a.length - 1) {
    count = count + 1;
    if (count > 0) {
      if (max < a[count]) {
        max = a[count];
        return findMinAndMaxRecursively(a, min, max, count);
      } else {
        min = a[count];
        return findMinAndMaxRecursively(a, min, max, count);
      }
    }
  }
  return max;
};
console.log(findMinAndMaxRecursively(array, array[0], array[0], 0));
