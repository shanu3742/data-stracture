const squreRoot = (a, b) => {
  /**
   * first we have to find nearest lower square integier to a
   * if the squreroot of a is 2.001 ,then nearest number should be two or three
   * here starting point is 2.001 show will ignore leftside data and will take 3 as a nearest number
   * for that we use Math.celi
   */
  var lowerLimit = Math.ceil(Math.sqrt(a));

  /**
   * here we have to last square integer
   * if the squareroot of last item is 3.922
   * so upper boundries is 3.92
   * we will not take 4 ad upperLimit we will use three as a upper limit
   * for that we use Math.floor
   */

  var upperLimit = Math.floor(Math.sqrt(b));

  /**
   * loweLimit never greatter then upper limit
   */
  if (lowerLimit > upperLimit) {
    return 0;
  }
  let count = 0;

  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (lowerLimit <= i * i <= upperLimit) {
      count = count + 1;
    }
  }
  return count;
};

console.log(squreRoot(3, 10));
