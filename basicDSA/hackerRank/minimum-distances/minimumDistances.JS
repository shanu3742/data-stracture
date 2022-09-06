function minimumDistances(a) {
  // Write your code here
  let min = -1;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        let data = j - i;
        if (min > data || min === -1) {
          min = data;
        }
      }
    }
  }

  console.log(min);

  return min;
}
minimumDistances([3, 2, 1, 2, 3]);
