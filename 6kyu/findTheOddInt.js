function findOdd(arr) {
  let counter = {};
  return +arr
    .filter((el, index) => {
      counter[el] = (counter[el] || 0) + 1;
      return arr.indexOf(el) === index;
    })
    .filter((el) => counter[el] % 2);
}
