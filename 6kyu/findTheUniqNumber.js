function findUniq(arr) {
  return arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x))[0];
}
