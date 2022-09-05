function encryption(s) {
  let length = s.length;
  let lowwerLimit = Math.floor(Math.sqrt(length));
  let upperLimit = Math.ceil(Math.sqrt(length));
  if (lowwerLimit === upperLimit) {
    lowwerLimit = upperLimit - 1;
  }
  let seprateString = (string) => {
    const result = [];
    let t = string;
    for (let i = 0; i < string.length; i += 1 + lowwerLimit) {
      let temp = t.substring(i, upperLimit + i);
      result.push(temp);
    }
    return result;
  };
  const sepratedData = seprateString(s);

  console.log(sepratedData);

  let vResult = [];
  for (let i = 0; i < upperLimit; i++) {
    let kk = [];

    for (let j = 0; j < upperLimit; j++) {
      if (sepratedData[j] !== undefined) {
        let temp = kk[j] === undefined ? [] : kk[j];
        kk[j] = [...temp, sepratedData[j][i]];
      }
    }

    vResult.push(kk);
    console.log(vResult);
  }

  let aResult = vResult.map((e) => e.join(''));
  console.log(aResult);

  return aResult.join(' ');
}

encryption('iffactsdontfittotheorychangethefacts');
