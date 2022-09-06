function howManyGames(p, d, m, s) {
  let counter = 0;
  while (s >= m && s >= p) {
    p = counter > 0 ? Math.max(p - d, m) : p;
    s -= p;
    counter++;
  }
  return counter;
}
console.log(howManyGames(20, 3, 6, 80));
