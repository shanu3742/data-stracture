const biggerIsGreater = (w) => {
  /**
   *
   * @param {string} word
   * @returns {[number]}
   * @description convert word into its ascci value
   */
  let convertWordIntoAssic = (word) => {
    let splitedWord = word.split('');
    let output = splitedWord.map((e) => e.charCodeAt(0));
    return output;
  };
  let assciofWord = convertWordIntoAssic(w);
  /**
   * get all unorder value
   */
  let unOrderValue = [];
  let unOrderIndex = [];

  for (let i = 0; i < assciofWord.length - 1; i++) {
    if (assciofWord[i] < assciofWord[i + 1]) {
      unOrderValue.push(assciofWord[i]);
      unOrderIndex.push(i);
    }
  }
  console.log(unOrderValue);

  let result = '';
  if (unOrderValue.length === 0) {
    result = 'no answer';
    return result;
  }

  /**
   * take last  unorder value
   */
  let lastUnOrderValue = unOrderValue[unOrderValue.length - 1];
  let lastUnOrderIndex = unOrderIndex[unOrderIndex.length - 1];
  console.log(lastUnOrderIndex);

  let firstPart = [];
  let secondPart = [];
  /**
   * here we divide array into two part
   * one is upto sorted  part
   * and other is unsorted part
   */
  assciofWord.forEach((el, index) => {
    if (index <= lastUnOrderIndex) {
      firstPart.push(el);
    } else {
      secondPart.push(el);
    }
  });

  /**
   * we have index of unsorted element
   * and value of that unsorted element,
   * now filter out all data that is greater then  lastUnorderValue
   * and get the nearest value using math.min method
   */
  let filterData = secondPart.filter((e) => e > lastUnOrderValue);
  console.log(filterData);
  let min = Math.min(...filterData);

  /**
   * swap the unsorted data between two array
   */
  let indexSecondPart = secondPart.lastIndexOf(min);
  let temp = firstPart[lastUnOrderIndex];
  firstPart[lastUnOrderIndex] = min;
  secondPart[indexSecondPart] = temp;
  /**
   * after swaping sort the second array
   * our first array is allready swaped
   */
  let secondPartSorted = secondPart.sort((a, b) => a - b);

  /**
   * concat the two array
   */
  let resultofArray = [...firstPart, ...secondPartSorted];
  result = resultofArray.map((el) => String.fromCharCode(el)).join('');
  return result;
};
console.log(biggerIsGreater('dhck'));
