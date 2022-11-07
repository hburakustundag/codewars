function nthSmallest(arr, pos) {
  return arr.sort(function (a, b) {
    return a - b;
  })[pos - 1];
}
