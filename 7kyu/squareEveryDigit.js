function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((x) => x * x)
    .join("");
}
