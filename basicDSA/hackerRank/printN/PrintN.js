const printN = (number) => {
  /**
   * printing N only work with even number
   * so first we check number pass by user  is even or not
   * if it's not a even number we convert that number into even by adding one to it
   */

  if (number % 2 !== 0) {
    number = number + 1;
  }
  /**
   * lowerRange is used to print new line
   */

  let lowerRange = number;
  /**
   * upperRange is used to print * or space depends on condition
   */

  let upperRange = number + 2;
  /**
   * it's used to print last start of every line
   */

  let lastNumber = upperRange - 1;

  for (let i = 0; i < lowerRange; i++) {
    let str = '';
    for (let j = 0; j < upperRange; j++) {
      if (j === 0) {
        /**
         * it will add first star to  every new line
         */
        str = `${str}*`;
      } else if (j === i + 1) {
        str = `${str}*`;
      } else if (j === lastNumber) {
        /**
         * it will print last star of every line
         */
        str = `${str}*`;
      } else {
        /**
         * if any condition is not satisfied we print space
         */
        str = `${str} `;
      }
    }

    console.log(str);
  }
};
printN(21);
