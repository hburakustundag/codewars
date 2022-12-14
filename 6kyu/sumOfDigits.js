function digitalRoot(n) {
  function getSumOfDigits(num) {
    return num
      .toString()
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);
  }
  let number = getSumOfDigits(n);
  while (number >= 10) {
    number = getSumOfDigits(number);
  }
  return number;
}
