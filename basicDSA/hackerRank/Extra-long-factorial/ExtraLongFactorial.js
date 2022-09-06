function extraLongFactorials(n) {
  /**
   * convert number inti bigint
   *
   */
  let range = BigInt(n);
  console.log(typeof range);
  let result = 1n;
  for (let i = range; range > 0; range--) {
    result = BigInt(result * range);
  }
  // Write your code here
  /**
   * convert bigInt into string
   */

  console.log(String(result));
}

extraLongFactorials(25);
