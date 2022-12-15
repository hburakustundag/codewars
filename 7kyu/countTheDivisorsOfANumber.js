function getDivisorsCnt(n) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? counter++ : counter;
  }
  return counter;
}
