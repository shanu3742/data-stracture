let array = [20, 10, -29, 30, 100, -60, 800, -90];

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
