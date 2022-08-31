function permutationEquation(p) {
  let array = p;
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    let firstItem = i + 1;

    let index = array.indexOf(firstItem);
    index = index + 1;

    let updateIndex = array.indexOf(index);
    temp.push(updateIndex + 1);
  }
  return temp;
}

console.log(permutationEquation([4, 3, 5, 1, 2]));
