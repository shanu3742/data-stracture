function saveThePrisoner(n, m, s) {
  let rem = m % n;

  return (rem + s - 1) % n || n;
}
saveThePrisoner(4, 6, 2);
console.log(3 % 4);
