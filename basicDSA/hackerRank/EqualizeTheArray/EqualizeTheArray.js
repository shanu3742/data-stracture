/**
 *
 * @param {*} arr
 * @returns  arr
 *
 */

function equalizeArray(arr) {
  let tempArray = [];
  /**
   * [3, 3, 2, 1, 3]
   * store all simillar data from array
   * in one  array and that is tempArray
   * example [[3,3,3,3],[2],[1]]
   */

  let unique = [];
  /**
   * store all unique element into this
   * and always check element is unique  or not  or element is alread in unique element will  do
   * continue
   */
  for (let i = 0; i < arr.length; i++) {
    if (unique.includes(arr[i])) {
      continue;
    }

    /**
     * store all equal data into into temp array for every itteration
     * of i
     */
    let temp = [];
    temp.push(arr[i]);
    unique.push(arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        temp.push(arr[j]);
      }
    }
    /**
     * push store temp data into temp array after every itteration
     * of j
     */
    tempArray.push(temp);
  }
  // console.log(tempArray);
  //   console.log(tempArray);
  let resultMap = tempArray.map((el) => el.length);
  let addData = resultMap.reduce((a, b) => a + b);
  let maxNumber = Math.max(...resultMap);
  let output = addData - maxNumber;
  // console.log(unique)
  return output;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
