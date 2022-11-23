function mostFrequentItemCount(arr) {
  let counter = {};
  let max = 0;
  arr.forEach((el) => {
    counter[el] = (counter[el] || 0) + 1;
    if (counter[el] > max) {
      max = counter[el];
    }
  });
  return max;
}
