function findEvenIndex(arr) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.slice(0, i + 1).reduce((a, b) => a + b, 0) ===
      arr.slice(i).reduce((a, b) => a + b, 0)
    ) {
      index = i;
    }
  }
  return index;
}
