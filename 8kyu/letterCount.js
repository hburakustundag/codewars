function strCount(str, letter) {
  let count = 0;
  str.split("").forEach((x) => {
    if (x === letter) {
      count++;
    }
  });
  return count;
}
