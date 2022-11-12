function deleteNth(arr, n) {
  let counterObj = {};
  return arr.filter((item) => {
    counterObj[item] = (counterObj[item] || 0) + 1;
    return counterObj[item] <= n;
  });
}
